import { formatEther, parseUnits } from 'viem';
import { STARGATE_ROUTER_ADDRESS, LAYERZERO_CHAINS_ID, POOl_IDS, tokenPathsType, TYPES } from './constants/index.js'
import dotenv from 'dotenv';
import { TokenNames, ChainNames, TokenPaths, ItokenNames } from './types.js'
import { createConfig } from './createConfig.js';
import { StargateRouterABI } from './abi/router.js';
import { routerETH_ABI } from './abi/routerETH.js';
import { isPathExist } from './utils/checkCorrectPath.js'
dotenv.config();


// type ChainName = keyof typeof tokens
// type TokenNames<T extends ChainName> = T extends keyof typeof tokens ? keyof typeof tokens[T] : never;


// function getPropertyValue<Obj, Key extends keyof Obj>(obj: Obj, key: Key): Obj[Key] {
//   return obj[key];
// }



async function stargateBridge<
  ChainFrom extends Extract<keyof tokenPathsType, ChainNames>,
  TokenFrom extends Extract<keyof tokenPathsType[ChainFrom], ItokenNames>,
  ChainTo extends Extract<keyof tokenPathsType[ChainFrom][TokenFrom], ChainNames>,
  TokenTo extends Extract<keyof tokenPathsType[ChainFrom][TokenFrom][ChainTo], ItokenNames>
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



    const approveHash = await erc20contract.write.approve([
      STARGATE_ROUTER_ADDRESS[chainFrom],
      amountBigInt
    ])


    await publicClient.waitForTransactionReceipt(
      { hash: approveHash }
    )

    console.log('approveHash', approveHash)

    const swap = await publicClient.simulateContract({
      address: STARGATE_ROUTER_ADDRESS[chainFrom],
      abi: StargateRouterABI,
      functionName: 'swap',
      args: [
        LAYERZERO_CHAINS_ID[chainTo],
        BigInt(poolIDFrom),
        BigInt(poolIDTo),
        account.address,
        amountBigInt,
        0n,
        { dstGasForCall: 0n, dstNativeAmount: 0n, dstNativeAddr: "0x" },
        account.address,
        "0x",],
      value: feeWei,
      account,
    })

    const gasSwap = await publicClient.estimateContractGas(swap.request)


    console.log('gasSwap', formatEther(gasSwap), 'gasApprove', 'balance', formatEther(currentNativeBalance))

    if (gasSwap + feeWei > currentNativeBalance) {
      throw new Error('Not enough Native balance')
    }

    const txHash = await walletClient.writeContract(swap.request)

    console.log('swap', txHash)

  } else if (routerETH) {
    const swapETH = await publicClient.simulateContract({
      address: routerETH.address,
      abi: routerETH_ABI,
      functionName: 'swapETH',
      args: [
        LAYERZERO_CHAINS_ID[chainTo],
        account.address,
        account.address,
        amountBigInt,
        0n
      ],
      value: amountBigInt + feeWei,
      account,
    })

    const gasSwap = await publicClient.estimateContractGas(swapETH.request)
    if (gasSwap + amountBigInt > currentNativeBalance) {
      throw new Error('Not enough Native balance')
    }
    const txHash = await walletClient.writeContract(swapETH.request)

    console.log('swap', txHash)
  }
}

const privateKey = process.env.PRIVATE_KEY as `0x${string}`
console.log('privateKey', privateKey)

stargateBridge(privateKey, 'Optimism', 'ETH', 'Arbitrum', "ETH", '0.003');



