import { createPublicClient, http } from 'viem';
import { mainnet, arbitrum, arbitrumGoerli, avalancheFuji } from 'viem/chains';
import { getContract, parseEther, formatEther, formatUnits, createWalletClient } from 'viem';
import { ERC20_ABI } from './abi/ERC20.js';
import { privateKeyToAccount } from 'viem/accounts';
import { StargateRouterABI } from './abi/router.js';
import { chains } from './chains.js'
import { tokens } from './tokens.js';




// export const publicClient = createPublicClient({
//   chain: arbitrum,
//   transport: http(),
// })


// const contract = getContract({
//   address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
//   abi: ERC20_ABI,
//   publicClient

// })

// const result = await contract.read.totalSupply()

// console.log(result)

// const balance = await contract.read.balanceOf(['0xFCc874C64D2200a8271cA8d3018caECDfB5A4ba2'])

// console.log(formatUnits(balance as bigint, 6 ), '$')


const walletClient = createWalletClient({
  account,
  chain: arbitrumGoerli,
  transport: http()
})

// const hash = await client.sendTransaction({
//   account, 
//   to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
//   value: parseEther('0.00001')
// })



// console.log(hash)
// export const publicClient = createPublicClient({
//   chain: arbitrumGoerli,
//   transport: http()
// })


// const { result } = await publicClient.simulateContract({
//   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
//   abi: StargateRouterABI,
//   functionName: 'quoteLayerZeroFee',
//   account,
//   args: [10]
// })

// await walletClient.writeContract({
//   address: '0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614',
//   abi: StargateRouterABI,
//   functionName: 'quoteLayerZeroFee',
//   account,
// })

// export const realPublicClient = createPublicClient({
//   chain: arbitrum,
//   transport: http()
// })
// const realWalletClient = createWalletClient({
//   account,
//   chain: arbitrum,
//   transport: http()
// })
// const contract = getContract({
//   address: '0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614',
//   abi: StargateRouterABI,
//   publicClient,
//   walletClient: realWalletClient 
// })

// const hash = await contract.read.quoteLayerZeroFee([
//   102,
//   1,
//   dst_address,  
//   "0x",  # payload, using abi.encode()
//   [0,  # extra gas, if calling smart contract
//   0,  # amount of dust dropped in destination wallet
//   "0x"  # destination wallet for dust
//   ]])



function stargateBridge(privateKey: `0x${string}`,
  chainFrom: keyof typeof chains,
  chainTo: keyof typeof chains,
  tokenName: keyof typeof tokens[keyof typeof chains],
  amount: string,
) {

  const chain = chains[chainFrom]

  const account = privateKeyToAccount(privateKey)

  const publicClient = createPublicClient({
    chain,
    transport: http()
  })

  const walletClient = createWalletClient({
    account,
    chain,
    transport: http()
  })

  const erc20token = tokens[chainFrom][tokenName]
  const erc20contract = getContract({
    address: '0x13093E05Eb890dfA6DacecBdE51d24DabAb2Faa1',
    abi: StargateRouterABI,
    publicClient,
    walletClient
  })


}