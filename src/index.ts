import { formatEther, parseEther, parseUnits } from 'viem';
import { POOl_IDS } from './constants/index.js'
import dotenv from 'dotenv';
import { ChainNames, ItokenNames, TokenPathsType } from './types.js'
import { createConfig, isPathExist, getTokenData, erc20Approve, isNativeSwap, getStargateFee } from './utils/index.js';
import { erc20Swap, swapETH } from './swap/index.js'

dotenv.config();


async function stargateBridge<
  ChainFrom extends Extract<keyof TokenPathsType, ChainNames>,
  TokenFrom extends Extract<keyof TokenPathsType[ChainFrom], ItokenNames>,
  ChainTo extends Extract<keyof TokenPathsType[ChainFrom][TokenFrom], ChainNames>,
  TokenTo extends Extract<keyof TokenPathsType[ChainFrom][TokenFrom][ChainTo], ItokenNames>
>(
  privateKey: `0x${string}`,
  chainFrom: ChainFrom,
  tokenFrom: TokenFrom,
  chainTo: ChainTo,
  tokenTo: TokenTo,
  amount: `${number}`,
) {
  isPathExist(chainFrom, tokenFrom, chainTo, tokenTo)

  const {
    account,
    publicClient,
    walletClient,
    router,
  } = await createConfig(privateKey, chainFrom)

  const currentNativeBalance = await publicClient.getBalance({
    address: walletClient.account.address
  })
  
  let feeWei = await getStargateFee(router, chainTo, walletClient.account )

  console.log('fee', formatEther(feeWei))
  const amountBigInt = parseEther(amount)

  if (isNativeSwap(tokenFrom, chainFrom)) {
    swapETH({
      amountBigInt,
      currentNativeBalance,
      chainFrom,
      chainTo,
      publicClient,
      walletClient,
      feeWei
    })
  } else {
    const poolIDFrom = POOl_IDS[chainFrom][tokenFrom]
    const poolIDTo = POOl_IDS[chainTo][tokenTo]
    if (!poolIDFrom || !poolIDTo) {
      throw new Error('Pool not found')
    }
    
    const tokenData = getTokenData(chainFrom, tokenFrom)
    const amountBigInt = parseUnits(amount, tokenData.decimals)


    const approveHash = await erc20Approve({
      amountBigInt,
      tokenAddress: tokenData.address,
      chainFrom,
      publicClient,
      walletClient,
    }

    )

    await publicClient.waitForTransactionReceipt(
      { hash: approveHash }
    )

    console.log('approveHash', approveHash)
    console.log('data',  formatEther(currentNativeBalance))

    await erc20Swap({
      amountBigInt,
      currentNativeBalance,
      chainTo,
      publicClient,
      walletClient,
      router,
      feeWei,
      poolIDFrom,
      poolIDTo
    })
  }
}

const privateKey = process.env.PRIVATE_KEY as `0x${string}`
console.log('privateKey', privateKey)

stargateBridge(privateKey, 'Optimism', 'USDC', 'BSC', "USDT", '10');
