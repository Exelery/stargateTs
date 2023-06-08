export { TokenPathsType } from "./constants/paths.js"


export type ChainNames = "Ethereum" | "Avalanche" | "BSC" | "Polygon" | "Metis" | "Arbitrum" | "Optimism" | "Fantom";
export type ItokenNames = "USDC" | "USDT" | "DAI" | "BUSD" | "FRAX" | "USDD" | "ETH" | "SGETH" | "SUSD" | "LUSD" | "METIS" | "m.USDT" | "MAI";

export interface TokenInfo {
  address: `0x${string}`;
  decimals: number;
}
export type Tokens = {
  [Chain in ChainNames]: {
    [Token in ItokenNames]?: TokenInfo;
  };
};

export type IpoolIDs = {
  [Chain in ChainNames]: {
    [Token in ItokenNames]?: number;
  };
};

export type TokenPaths = {
  [Chain in ChainNames]: {
    [Token in ItokenNames]?: {
      [ChainDST in Exclude<ChainNames, Chain>]?: {
        [TokenDST in ItokenNames]?: boolean;
      };
    };
  };
};

// export type TokenPaths = {
//   [Chain in ChainNames]: {
//     [Token in Extract<keyof TokenPaths[Chain], ItokenNames>]: {
//       [ChainDST in Exclude<ChainNames, Chain>]?: {
//         [TokenDST in ItokenNames]?: boolean;
//       };
//     };
//   };
// };


export type TokenNames<T extends ChainNames> = T extends keyof Tokens ? keyof Tokens[T] : never;
