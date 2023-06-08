# stargateTs

Run script: npm run start

## Function: stargateBridge

```typescript
stargateBridge();
```

This function is used to bridge tokens between different blockchain networks using the Stargate protocol. It facilitates the transfer of tokens from one chain and token to another chain and token.

### Parameters

- `privateKey: `0x${string}``: The private key associated with the user's account on the source chain. It is required to authenticate and sign the transaction.
- `chainFrom: ChainFrom`: The source blockchain network from which the tokens will be transferred. It should be one of the valid `ChainNames`.
- `tokenFrom: TokenFrom`: The token to be transferred from the source chain. It should be a valid token name from the `chainFrom` network.
- `chainTo: ChainTo`: The target blockchain network where the tokens will be transferred. It should be one of the valid `ChainNames`.
- `tokenTo: TokenTo`: The token to be received on the target chain. It should be a valid token name from the `chainTo` network.
- `amount: `0x${number}``: The amount of tokens to be transferred. It should be a numeric value represented as a string.

### Return Value

- `Promise<void>`: This function returns a Promise that resolves when the token transfer is completed successfully. It doesn't return any value explicitly.

### Type Parameters

This function is a generic function that takes the following type parameters:

- `ChainFrom`: Represents the source chain name.
- `TokenFrom`: Represents the token name on the source chain.
- `ChainTo`: Represents the target chain name.
- `TokenTo`: Represents the token name on the target chain.

These type parameters are used to enforce type safety and provide proper type checking for the function arguments.

### Example Usage

```typescript
await stargateBridge(
  '0x1234567890abcdef...', // private key
  'Ethereum', // source chain
  'USDC', // token on the source chain
  'BSC', // target chain
  'BUSD', // token on the target chain
  '100' // amount
);
```

This example demonstrates how to use the `stargateBridge` function to transfer 100 USDC tokens from the Ethereum network to the Binance Smart Chain, receiving BUSD tokens on the BSC network. The function is awaited to ensure that the transfer is completed before proceeding with subsequent code execution.
