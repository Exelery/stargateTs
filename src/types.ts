import { PublicClient, WalletClient, Transport, Chain, Account, GetContractReturnType, Address } from "viem";
import { StargateRouterABI } from "./abi/router.js";
import { LAYERZERO_CHAINS_ID, STARGATE_ETH_ADDRESS, STARGATE_ROUTER_ADDRESS } from "./constants/stargate.js";

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

type ConfigType = {
  publicClient: PublicClient,
  walletClient: WalletClient<Transport, Chain, Account>,
}

type SwapType = ConfigType & {
  amountBigInt: bigint,
  currentNativeBalance: bigint,
  chainTo: keyof typeof LAYERZERO_CHAINS_ID,
  feeWei: bigint,

}

export type erc20SwapType = SwapType & {
  router: GetContractReturnType<typeof StargateRouterABI, PublicClient, WalletClient, Address>,
  poolIDFrom: number,
  poolIDTo: number
}

export type SwapEthType = SwapType & {
  chainFrom: keyof typeof STARGATE_ETH_ADDRESS,
}

export type Erc20ApproveProps = ConfigType & {
  amountBigInt: bigint,
  tokenAddress: `0x${string}`,
  chainFrom: keyof typeof STARGATE_ROUTER_ADDRESS,
}


export type TokenNames<T extends ChainNames> = T extends keyof Tokens ? keyof Tokens[T] : never;
