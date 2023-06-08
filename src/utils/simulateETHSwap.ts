import { GetContractReturnType, PrivateKeyAccount, PublicClient } from 'viem';
import { routerETH_ABI } from '../abi/routerETH.js';

export async function simulateETHSwap(
  publicClient: PublicClient,
  routerETH: GetContractReturnType,
  chainID: number,
  amountBigInt: bigint,
  account: PrivateKeyAccount,
  feeWei: bigint,
  currentNativeBalance: bigint) {

  const { request } = await publicClient.simulateContract({
    address: routerETH.address,
    abi: routerETH_ABI,
    functionName: 'swapETH',
    args: [
      chainID,
      account.address,
      account.address,
      amountBigInt,
      0n
    ],
    value: amountBigInt + feeWei,
    account,
  })

  return {request };

}