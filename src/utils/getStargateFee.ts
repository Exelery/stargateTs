import { Account, Address, GetContractReturnType, PublicClient, WalletClient } from "viem"
import { LAYERZERO_CHAINS_ID, TYPES } from '../constants/index.js'
import { StargateRouterABI } from "../abi/router.js"


export async function getStargateFee(
  router: GetContractReturnType<typeof StargateRouterABI, 
  PublicClient, WalletClient, Address>, chainTo: keyof typeof LAYERZERO_CHAINS_ID,
  account: Account) {
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
  return quoteData[0]
}