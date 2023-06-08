import { tokenPaths, TokenPathsType } from '../constants/index.js'



export function isPathExist<
  ChainFrom extends keyof TokenPathsType,
  TokenFrom extends keyof TokenPathsType[ChainFrom],
  ChainTo extends keyof TokenPathsType[ChainFrom][TokenFrom],
  TokenTo extends keyof TokenPathsType[ChainFrom][TokenFrom][ChainTo]
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
