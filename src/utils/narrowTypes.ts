import { ChainNames, TokenNames } from '../types.js'

export function isNativeSwap<K extends ChainNames>(tokenName: TokenNames<K>, chainFrom: ChainNames):
  chainFrom is "Ethereum" | "Arbitrum" | "Optimism" {
  return tokenName === 'ETH' && ['Ethereum', 'Arbitrum', 'Optimism'].includes(chainFrom)
}