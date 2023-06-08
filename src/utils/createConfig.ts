import { TokenNames, ChainNames, TokenPathsType } from '../types.js'
import { chains, tokens, STARGATE_ROUTER_ADDRESS, STARGATE_ETH_ADDRESS } from '../constants/index.js'
import { getContract, createWalletClient, createPublicClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { ERC20_ABI, routerETH_ABI, StargateRouterABI } from '../abi/index.js';




function isNativeSwap<K extends ChainNames>(tokenName: TokenNames<K>, chainFrom: ChainNames): chainFrom is "Ethereum" | "Arbitrum" | "Optimism" {
  return tokenName === 'ETH' && ['Ethereum', 'Arbitrum', 'Optimism'].includes(chainFrom)
}

export async function createConfig<K extends ChainNames>(privateKey: `0x${string}`,
  chainFrom: ChainNames, tokenName: TokenNames<K>) {
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
  let erc20token;
  let erc20contract;
  let routerETH;

  if (isNativeSwap(tokenName, chainFrom)) {
    erc20token = {
      decimals: 18,
    }
    routerETH = getContract({
      address: STARGATE_ETH_ADDRESS[chainFrom],
      abi: routerETH_ABI,
      publicClient,
      walletClient
    })
  } else {
    erc20token = tokens[chainFrom][tokenName];
    if (!erc20token) {
      throw new Error('token not found');
    }

    erc20contract = getContract({
      address: erc20token.address,
      abi: ERC20_ABI,
      publicClient,
      walletClient
    })

  }

  console.log('erc20token', erc20token.address)

  if (!erc20token) {
    throw new Error('token not found');
  }


  const router = getContract({
    address: STARGATE_ROUTER_ADDRESS[chainFrom],
    abi: StargateRouterABI,
    publicClient,
    walletClient
  })

  return { account, publicClient, walletClient, erc20contract, erc20token, router, routerETH }
}