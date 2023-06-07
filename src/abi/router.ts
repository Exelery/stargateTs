
export const StargateRouterABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint16",
                "name": "chainId",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "srcAddress",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "token",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountLD",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "payload",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "reason",
                "type": "bytes"
            }
        ],
        "name": "CachedSwapSaved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint16",
                "name": "srcChainId",
                "type": "uint16"
            },
            {
                "indexed": true,
                "internalType": "bytes",
                "name": "srcAddress",
                "type": "bytes"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "srcPoolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "dstPoolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountSD",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "mintAmountSD",
                "type": "uint256"
            }
        ],
        "name": "RedeemLocalCallback",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "bridgeFunctionType",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint16",
                "name": "chainId",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "srcAddress",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256"
            }
        ],
        "name": "Revert",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint16",
                "name": "srcChainId",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_srcPoolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_dstPoolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "to",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "redeemAmountSD",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "mintAmountSD",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "bytes",
                "name": "srcAddress",
                "type": "bytes"
            }
        ],
        "name": "RevertRedeemLocal",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_poolId",
                "type": "uint256"
            },
            {
                "internalType": "uint16",
                "name": "_dstChainId",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "_dstPoolId",
                "type": "uint256"
            }
        ],
        "name": "activateChainPath",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_poolId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_amountLD",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            }
        ],
        "name": "addLiquidity",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "bridge",
        "outputs": [
            {
                "internalType": "contract Bridge",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "cachedSwapLookup",
        "outputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amountLD",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "payload",
                "type": "bytes"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_poolId",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_fullMode",
                "type": "bool"
            }
        ],
        "name": "callDelta",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_srcChainId",
                "type": "uint16"
            },
            {
                "internalType": "bytes",
                "name": "_srcAddress",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "_nonce",
                "type": "uint256"
            }
        ],
        "name": "clearCachedSwap",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_poolId",
                "type": "uint256"
            },
            {
                "internalType": "uint16",
                "name": "_dstChainId",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "_dstPoolId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_weight",
                "type": "uint256"
            }
        ],
        "name": "createChainPath",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_poolId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "_sharedDecimals",
                "type": "uint8"
            },
            {
                "internalType": "uint8",
                "name": "_localDecimals",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_symbol",
                "type": "string"
            }
        ],
        "name": "createPool",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_dstChainId",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "_dstPoolId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_srcPoolId",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "credits",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "idealBalance",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct Pool.CreditObj",
                "name": "_c",
                "type": "tuple"
            }
        ],
        "name": "creditChainPath",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "factory",
        "outputs": [
            {
                "internalType": "contract Factory",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_srcPoolId",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "_amountLP",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            }
        ],
        "name": "instantRedeemLocal",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountSD",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "mintFeeOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "protocolFeeOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_dstChainId",
                "type": "uint16"
            },
            {
                "internalType": "uint8",
                "name": "_functionType",
                "type": "uint8"
            },
            {
                "internalType": "bytes",
                "name": "_toAddress",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "_transferAndCallPayload",
                "type": "bytes"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "dstGasForCall",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "dstNativeAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "dstNativeAddr",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct IStargateRouter.lzTxObj",
                "name": "_lzTxParams",
                "type": "tuple"
            }
        ],
        "name": "quoteLayerZeroFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_dstChainId",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "_srcPoolId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_dstPoolId",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "_refundAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amountLP",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_to",
                "type": "bytes"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "dstGasForCall",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "dstNativeAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "dstNativeAddr",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct IStargateRouter.lzTxObj",
                "name": "_lzTxParams",
                "type": "tuple"
            }
        ],
        "name": "redeemLocal",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_srcChainId",
                "type": "uint16"
            },
            {
                "internalType": "bytes",
                "name": "_srcAddress",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "_nonce",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_srcPoolId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_dstPoolId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amountSD",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_mintAmountSD",
                "type": "uint256"
            }
        ],
        "name": "redeemLocalCallback",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_srcChainId",
                "type": "uint16"
            },
            {
                "internalType": "bytes",
                "name": "_srcAddress",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "_nonce",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_srcPoolId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_dstPoolId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_amountSD",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_to",
                "type": "bytes"
            }
        ],
        "name": "redeemLocalCheckOnRemote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_dstChainId",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "_srcPoolId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_dstPoolId",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "_refundAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amountLP",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_minAmountLD",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_to",
                "type": "bytes"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "dstGasForCall",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "dstNativeAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "dstNativeAddr",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct IStargateRouter.lzTxObj",
                "name": "_lzTxParams",
                "type": "tuple"
            }
        ],
        "name": "redeemRemote",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_srcChainId",
                "type": "uint16"
            },
            {
                "internalType": "bytes",
                "name": "_srcAddress",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "_nonce",
                "type": "uint256"
            }
        ],
        "name": "retryRevert",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "revertLookup",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_dstChainId",
                "type": "uint16"
            },
            {
                "internalType": "bytes",
                "name": "_srcAddress",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "_nonce",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "_refundAddress",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "dstGasForCall",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "dstNativeAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "dstNativeAddr",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct IStargateRouter.lzTxObj",
                "name": "_lzTxParams",
                "type": "tuple"
            }
        ],
        "name": "revertRedeemLocal",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_dstChainId",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "_srcPoolId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_dstPoolId",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "_refundAddress",
                "type": "address"
            }
        ],
        "name": "sendCredits",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract Bridge",
                "name": "_bridge",
                "type": "address"
            },
            {
                "internalType": "contract Factory",
                "name": "_factory",
                "type": "address"
            }
        ],
        "name": "setBridgeAndFactory",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_poolId",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_batched",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "_swapDeltaBP",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_lpDeltaBP",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_defaultSwapMode",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "_defaultLPMode",
                "type": "bool"
            }
        ],
        "name": "setDeltaParam",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_poolId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_feeLibraryAddr",
                "type": "address"
            }
        ],
        "name": "setFeeLibrary",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_poolId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_mintFeeBP",
                "type": "uint256"
            }
        ],
        "name": "setFees",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "setMintFeeOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "setProtocolFeeOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_poolId",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_swapStop",
                "type": "bool"
            }
        ],
        "name": "setSwapStop",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_poolId",
                "type": "uint256"
            },
            {
                "internalType": "uint16",
                "name": "_dstChainId",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "_dstPoolId",
                "type": "uint256"
            },
            {
                "internalType": "uint16",
                "name": "_weight",
                "type": "uint16"
            }
        ],
        "name": "setWeightForChainPath",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_dstChainId",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "_srcPoolId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_dstPoolId",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "_refundAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amountLD",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_minAmountLD",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "dstGasForCall",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "dstNativeAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "dstNativeAddr",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct IStargateRouter.lzTxObj",
                "name": "_lzTxParams",
                "type": "tuple"
            },
            {
                "internalType": "bytes",
                "name": "_to",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "_payload",
                "type": "bytes"
            }
        ],
        "name": "swap",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_srcChainId",
                "type": "uint16"
            },
            {
                "internalType": "bytes",
                "name": "_srcAddress",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "_nonce",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_srcPoolId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_dstPoolId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_dstGasForCall",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "eqFee",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "eqReward",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lpFee",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "protocolFee",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lkbRemove",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct Pool.SwapObj",
                "name": "_s",
                "type": "tuple"
            },
            {
                "internalType": "bytes",
                "name": "_payload",
                "type": "bytes"
            }
        ],
        "name": "swapRemote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_poolId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            }
        ],
        "name": "withdrawMintFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_poolId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            }
        ],
        "name": "withdrawProtocolFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
] as const