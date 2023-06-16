import { erc20SwapType } from "../types.js";
import {  formatEther,} from 'viem';
import { LAYERZERO_CHAINS_ID } from '../constants/index.js'
import {  checkNativeBalance } from '../utils/index.js';


export async function erc20Swap({
  amountBigInt,
  currentNativeBalance,
  chainTo,
  publicClient,
  walletClient,
  router,
  feeWei,
  poolIDFrom,
  poolIDTo
}: erc20SwapType) {
  
  checkNativeBalance(feeWei, currentNativeBalance)
  const { request } = await router.simulate.swap([
    LAYERZERO_CHAINS_ID[chainTo],
    BigInt(poolIDFrom),
    BigInt(poolIDTo),
    walletClient.account.address,
    amountBigInt,
    0n,
    { dstGasForCall: 0n, dstNativeAmount: 0n, dstNativeAddr: "0x" },
    walletClient.account.address,
    "0x",], { value: feeWei, account: walletClient.account })

  const gasRequired = await publicClient.estimateContractGas(request)

  console.log('gasSwap', formatEther(gasRequired), 'gasApprove', 'balance', formatEther(currentNativeBalance))

  checkNativeBalance(gasRequired + feeWei, currentNativeBalance)


  const txHash = await walletClient.writeContract(request)

  console.log('swap', txHash)

}