import { createPublicClient, http } from 'viem';
import { mainnet, arbitrum, arbitrumGoerli, avalancheFuji } from 'viem/chains';
import { getContract, parseEther, formatEther, formatUnits, createWalletClient } from 'viem';
import { ERC20_ABI } from './abi/ERC20.js';
import { privateKeyToAccount } from 'viem/accounts';
import { StargateRouterABI } from './abi/router.js';


const walletClient = createWalletClient({
  account,
  chain: avalancheFuji,
  transport: http()
})

// const hash = await client.sendTransaction({
//   account, 
//   to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
//   value: parseEther('0.00001')
// })

// console.log(hash)
export const publicClient = createPublicClient({
  chain: avalancheFuji,
  transport: http()
})


const Fuji = {
  chainId: 10106,
  Router: '0x13093E05Eb890dfA6DacecBdE51d24DabAb2Faa1',
  Bridge: '0x29fBC4E4092Db862218c62a888a00F9521619230',
  Factory: '0x439C197429036423d42631181afAC655b19972e5',
  USDC: '0x4A0D1092E9df255cf95D72834Ea9255132782318',
  USDT: '0x134Dc38AE8C853D1aa2103d5047591acDAA16682',
}

const router = getContract({
  address: '0x13093E05Eb890dfA6DacecBdE51d24DabAb2Faa1',
  abi: StargateRouterABI,
  publicClient,
  walletClient
})

// const hash = await router.read.quoteLayerZeroFee([
//   102,
//   1,
//   1,
//   account.address,
//   1
//   [0,  # extra gas, if calling smart contract
// 0,  # amount of dust dropped in destination wallet
// "0x"  # destination wallet for dust
//   ]])


let quoteData = await router.read.quoteLayerZeroFee([
  10143,
  1,
  account.address,
  "0x",
  ({
    dstGasForCall: 0n,
    dstNativeAmount: 0n,
    dstNativeAddr: "0x"
  })]
)

console.log(formatEther(quoteData[0]))
console.log(quoteData)

let tx = await router.write.swap([

]
10143,                     // destination chainId
  1,                     // source poolId
  1,                     // destination poolId
  yourAddress,           // refund address. extra gas (if any) is returned to this address
  qty,                   // quantity to swap  
  amountOutMin,          // the min qty you would accept on the destination
  { dstGasForCall: 0, dstNativeAmount: 0, dstNativeAddr: "0x" },
  yourAddress,           // the address to send the tokens to on the destination
  "",                    // payload
  { value: fee }           // "fee" is the native gas to pay for the cross chain message fee. see 
);