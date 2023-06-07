import { createPublicClient, http } from 'viem';
import { mainnet, arbitrum, arbitrumGoerli, avalancheFuji } from 'viem/chains';
import { getContract, parseEther, formatEther, formatUnits, createWalletClient } from 'viem';
import { ERC20_ABI } from './abi/ERC20.js';
import { privateKeyToAccount } from 'viem/accounts';
import { StargateRouterABI } from './abi/router.js';
import { chains } from './chains.js'
import { tokens } from './tokens.js';
import { STARGATE_ROUTER_ADDRESS } from './config.js'



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

type ChainName = keyof typeof chains
type NestedKeyOf<ObjectType extends object> =
  { [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
  }[keyof ObjectType & (string | number)];

async function stargateBridge(privateKey: `0x${string}`,
  chainFrom: ChainName,
  chainTo: ChainName,
  tokenName: chains[ChainName],
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

  const erc20token: { address: `0x${string}`, decimals: number } = tokens[chainFrom][tokenName]
  if (!erc20token) {
    throw new Error('token not found');
  }
  const erc20contract = getContract({
    address: erc20token.address,
    abi: StargateRouterABI,
    publicClient,
    walletClient
  })

  const gasPrice = await publicClient.getGasPrice()
  const router = getContract({
    address:  STARGATE_ROUTER_ADDRESS[chainFrom],
    abi: StargateRouterABI,
    publicClient,
    walletClient
  })


}