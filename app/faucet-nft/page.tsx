'use client';
import React from 'react';
import { useAccount, useSendTransaction } from 'wagmi';
import { useWriteContract } from 'wagmi';
import { type WriteContractReturnType } from '@wagmi/core';
const FaucetNFT = () => {
  const wallet = useAccount();
  console.log(wallet.address);
  const { data: hash, writeContract } = useWriteContract();

  const abiNFT = [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'operator',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'approved',
          type: 'bool',
        },
      ],
      name: 'setApprovalForAll',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'mint',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ];

  const NFTFaucetAddress = '0x295718dfD46F2F88D63AA648Cb31dc67528eB960';

  const mintNFT = async () => {
    try {
      const hash = await writeContract({
        abi: abiNFT,
        address: NFTFaucetAddress,
        functionName: 'mint',
        args: [1, 11, '0xE0B2A968Fc566bce543E9da6D3893FfE1170B833'],
      });
      console.log(hash);
      console.log('Transaction response:', hash);
    } catch (error: any) {
      console.log(error, 'dmeo');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <div className="w-full max-w-md shadow-lg rounded-lg overflow-hidden">
        <div className="p-5">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Faucet Page
          </h1>
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-700 mb-3">
                PunkLight NFT Faucet
              </h2>
              <p className="text-gray-600 mb-4">
                Mint your exclusive PunkLight NFT here.
              </p>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out"
                onClick={mintNFT}
              >
                Mint NFT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaucetNFT;
