import { Erc20ApproveProps } from '../types.js'	
import {  getContract } from 'viem';
import { STARGATE_ROUTER_ADDRESS } from '../constants/index.js';
import { ERC20_ABI } from '../abi/index.js';

export async function erc20Approve({
  amountBigInt,
  tokenAddress,
  chainFrom,
  publicClient,
  walletClient,
}: Erc20ApproveProps) {

    const erc20contract = getContract({
      address: tokenAddress,
      abi: ERC20_ABI,
      publicClient,
      walletClient

    })

    const balance = await erc20contract.read.balanceOf([walletClient.account.address])
    if (amountBigInt > balance) {
      throw new Error('Not enough token balance')
    }

    const approveHash = await erc20contract.write.approve([
      STARGATE_ROUTER_ADDRESS[chainFrom],
      amountBigInt
    ])


    return approveHash
  }