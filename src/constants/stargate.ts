import { IpoolIDs } from "../types";

export const LAYERZERO_CHAINS_ID = {
  Ethereum: 101,
  BSC: 102,
  Avalanche: 106,
  Polygon: 109,
  Arbitrum: 110,
  Optimism: 111,
  Fantom: 112,
  Metis: 151,
};

export const STARGATE_ROUTER_ADDRESS = {
  Ethereum: '0x8731d54E9D02c286767d56ac03e8037C07e01e98',
  Polygon: '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd',
  Avalanche: '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd',
  Fantom: '0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6',
  BSC: '0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8',
  Optimism: '0xB0D502E938ed5f4df2E681fE6E419ff29631d62b',
  Arbitrum: '0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614',
  Metis: '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590',
} as const

export const STARGATE_ETH_ADDRESS = {
  Ethereum: '0x150f94B44927F078737562f0fcF3C95c01Cc2376',
  Arbitrum: '0xbf22f0f184bCcbeA268dF387a49fF5238dD23E40',
  Optimism: '0xB49c4e680174E331CB0A7fF3Ab58afC9738d5F8b',
} as const

export const POOl_IDS: IpoolIDs = {
  Ethereum: {
    USDC: 1,
    USDT: 2,
    DAI: 3,
    FRAX: 7,
    USDD: 11,
    ETH: 13,
    SUSD: 14,
    LUSD: 15,
    METIS: 17,
    'm.USDT': 19
  },
  BSC: {
    USDT: 2,
    USDD: 11,
    METIS: 17,
    'm.USDT': 19
  },
  Avalanche: {
    USDC: 1,
    USDT: 2,
    FRAX: 7,
    'm.USDT': 19
  },
  Polygon: {
    USDC: 1,
    USDT: 2,
    DAI: 3,
  },
  Arbitrum: {
    USDC: 1,
    USDT: 2,
    FRAX: 7,
    ETH: 13,
    LUSD: 15,
  },
  Optimism: {
    USDC: 1,
    DAI: 3,
    FRAX: 7,
    SUSD: 14,
    LUSD: 15,
  },
  Fantom: {
    USDC: 1
  },
  Metis: {
    METIS: 17,
    'm.USDT': 19
  }
} as const;

export const TYPES = {
  SWAP_REMOTE: 1,
  ADD_LIQUIDITY: 2,
  REDEEM_LOCAL_CALL_BACK: 3,
  WITHDRAW_REMOTE: 4
}