import { tokenPaths, tokenPathsType } from '../constants/index.js'



export function isPathExist<
  ChainFrom extends keyof tokenPathsType,
  TokenFrom extends keyof tokenPathsType[ChainFrom],
  ChainTo extends keyof tokenPathsType[ChainFrom][TokenFrom],
  TokenTo extends keyof tokenPathsType[ChainFrom][TokenFrom][ChainTo]
>(
  chainFrom: ChainFrom,
  tokenFrom: TokenFrom,
  chainTo: ChainTo,
  tokenTo: TokenTo
): boolean {
  const isTokenPathExist =
    !!tokenPaths[chainFrom] &&
    !!tokenPaths[chainFrom][tokenFrom] &&
    !!tokenPaths[chainFrom][tokenFrom][chainTo] &&
    tokenPaths[chainFrom][tokenFrom][chainTo][tokenTo];
    if(!isTokenPathExist) {
      throw new Error("Token path not found")
    }
  return !!isTokenPathExist;
}

// console.log(isCorrectPath("Ethereum", "USDC", "", "USDT"));
// console.log(isCorrectPath("Ethereum", "USDC", "BSC", "BUSD"));
// console.log(isCorrectPath("Ethereum", "ETH", "Optimism")); 