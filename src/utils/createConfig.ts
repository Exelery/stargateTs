import { TokenNames, ChainNames, TokenPathsType } from '../types.js'
import { chains, tokens, STARGATE_ROUTER_ADDRESS, STARGATE_ETH_ADDRESS } from '../constants/index.js'
import { getContract, createWalletClient, createPublicClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { ERC20_ABI, routerETH_ABI, StargateRouterABI } from '../abi/index.js';






export async function createConfig(privateKey: `0x${string}`,
  chainFrom: ChainNames) {
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
  
  const router = getContract({
    address: STARGATE_ROUTER_ADDRESS[chainFrom],
    abi: StargateRouterABI,
    publicClient,
    walletClient,

  })
  
  return { account, publicClient, walletClient, router }
}

export function getTokenData<K extends ChainNames>(
  chainFrom: ChainNames, tokenName: TokenNames<K>
) {
  const erc20token = tokens[chainFrom][tokenName];
  if (!erc20token) {
    throw new Error('token not found');
  }
  return erc20token
}