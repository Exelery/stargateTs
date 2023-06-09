import { formatEther, parseUnits } from 'viem';
import { STARGATE_ROUTER_ADDRESS, LAYERZERO_CHAINS_ID, POOl_IDS, TYPES } from './constants/index.js'
import dotenv from 'dotenv';
import { ChainNames, ItokenNames, TokenPathsType } from './types.js'
import { createConfig, isPathExist, checkNativeBalance } from './utils/index.js';
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

  const { account, publicClient, walletClient, erc20contract, erc20token, router, routerETH } = await createConfig(privateKey, chainFrom, tokenFrom)


  const amountBigInt = parseUnits(amount, erc20token.decimals)

  if (typeof amountBigInt !== 'bigint') {
    throw new Error('Invalid amount')
  }

  const currentNativeBalance = await publicClient.getBalance({
    address: account.address
  })

  let quoteData = await router.read.quoteLayerZeroFee([
    LAYERZERO_CHAINS_ID[chainTo],
    TYPES.SWAP_REMOTE,
    account.address,
    "0x",
    ({
      dstGasForCall: 0n,
      dstNativeAmount: 0n,
      dstNativeAddr: "0x"
    })]
  )
  let feeWei = quoteData[0]

  console.log('fee', formatEther(feeWei))

  if (erc20contract) {
    const poolIDFrom = POOl_IDS[chainFrom][tokenFrom]
    const poolIDTo = POOl_IDS[chainTo][tokenTo]
    if (!poolIDFrom || !poolIDTo) {
      throw new Error('Pool not found')
    }
    const balance = await erc20contract.read.balanceOf([account.address])
    if (amountBigInt > balance) {
      throw new Error('Not enough token balance')
    }

    console.log('token balance', balance, amountBigInt)

    const approveHash = await erc20contract.write.approve([
      STARGATE_ROUTER_ADDRESS[chainFrom],
      amountBigInt
    ])


    await publicClient.waitForTransactionReceipt(
      { hash: approveHash }
    )

    console.log('approveHash', approveHash)
    console.log('data', currentNativeBalance)
    const {request} = await router.simulate.swap([
      LAYERZERO_CHAINS_ID[chainTo],
      BigInt(poolIDFrom),
      BigInt(poolIDTo),
      account.address,
      amountBigInt,
      0n,
      { dstGasForCall: 0n, dstNativeAmount: 0n, dstNativeAddr: "0x" },
      account.address,
      "0x",], {value:feeWei})
      
    const gasSwap = await publicClient.estimateContractGas(request)

    console.log('gasSwap', formatEther(gasSwap), 'gasApprove', 'balance', formatEther(currentNativeBalance))

    checkNativeBalance(gasSwap + feeWei, currentNativeBalance)


    const txHash = await walletClient.writeContract(request)

    console.log('swap', txHash)

  } else if (routerETH) {
    checkNativeBalance(amountBigInt, currentNativeBalance)
    
    const { request } = await routerETH.simulate.swapETH([
      LAYERZERO_CHAINS_ID[chainTo],
      account.address,
      account.address,
      amountBigInt,
      0n
    ],{
      value: amountBigInt + feeWei
      })
    const gasSwap = await publicClient.estimateContractGas(request)

    checkNativeBalance(gasSwap + amountBigInt, currentNativeBalance)

    const txHash = await walletClient.writeContract(request)
    console.log('swap', txHash)
  }
}

const privateKey = process.env.PRIVATE_KEY as `0x${string}`
console.log('privateKey', privateKey)

stargateBridge(privateKey, 'Avalanche', 'USDC', 'Optimism', "USDC", '5');
