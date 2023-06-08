export function checkNativeBalance(amount:bigint, balance: bigint) {
  if ( amount > balance) {
    throw new Error('Not enough Native balance')
  }
}