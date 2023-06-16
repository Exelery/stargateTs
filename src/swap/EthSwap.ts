import { SwapEthType } from "../types.js"
import { getContract } from 'viem';
import { LAYERZERO_CHAINS_ID, STARGATE_ETH_ADDRESS, } from '../constants/index.js'
import { checkNativeBalance } from '../utils/index.js';
import { routerETH_ABI } from '../abi/index.js';

export async function swapETH(
  { amountBigInt,
    currentNativeBalance,
    chainFrom,
    chainTo,
    publicClient,
    walletClient,
    feeWei }: SwapEthType

) {
  
  checkNativeBalance(amountBigInt, currentNativeBalance)
  
  const routerETH = getContract({
    address: STARGATE_ETH_ADDRESS[chainFrom],
    abi: routerETH_ABI,
    publicClient,
    walletClient
  })

  const { request } = await routerETH.simulate.swapETH([
    LAYERZERO_CHAINS_ID[chainTo],
    walletClient.account.address,
    walletClient.account.address,
    amountBigInt,
    0n
  ], {
    value: amountBigInt + feeWei,
    account: walletClient.account
  })
  const gasSwap = await publicClient.estimateContractGas(request)
  checkNativeBalance(gasSwap + amountBigInt, currentNativeBalance)

  const txHash = await walletClient.writeContract(request)
  console.log('swap', txHash)

}