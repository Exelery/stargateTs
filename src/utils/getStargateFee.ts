// import { GetContractReturnType } from "viem"

// export async function getStargateFee(router: GetContractReturnType, chainDst: number) {
//   let quoteData = await router.read.quoteLayerZeroFee([
//     chainDst,
//     1,
//     account.address,
//     "0x",
//     ({
//       dstGasForCall: 0n,
//       dstNativeAmount: 0n,
//       dstNativeAddr: "0x"
//     })]
//   )
//   return quoteData[0]
// }