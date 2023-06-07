import {
  mainnet,
  arbitrumGoerli,
  bscTestnet,
  avalancheFuji,
  polygonMumbai,
  optimismGoerli, fantomTestnet, metisGoerli, bsc, avalanche, polygon, arbitrum, optimism, fantom, metis
} from 'viem/chains';

export const chains = {
  Ethereum: mainnet,
  BSC: bsc,
  Avalanche: avalanche,
  Polygon: polygon,
  Arbitrum: arbitrum,
  Optimism: optimism,
  Fantom: fantom,
  Metis: metis,
  //Testnet
  // ArbitrumGoerli: arbitrumGoerli,
  // BNBTestnet: bscTestnet,
  // AvalancheFuji: avalancheFuji,
  // PolygonMumbai: polygonMumbai,
  // optimismGoerli: optimismGoerli,
  // FantomTestnet: fantomTestnet,
  // metisGoerli: metisGoerli,
};
