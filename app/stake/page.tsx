'use client';
import React, { useState } from 'react';
import { useAccount, useSendTransaction } from 'wagmi';
import { useWriteContract } from 'wagmi';
import { toast, Toaster } from 'react-hot-toast';

const Mint = () => {
  const wallet = useAccount();
  console.log(wallet.address);
  const { data: hash, writeContract } = useWriteContract();
  const [amtNft, setAmtNft] = useState(1);

  const contractAddress = '0x8f3Ad8DEDD9AC6f683054af11aCD3BE96880De7d';
  const nftAddr = '0x295718dfD46F2F88D63AA648Cb31dc67528eB960';
  const contractAbi = [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_token',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_NFTItem',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
      ],
      name: 'AddressEmptyCode',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'AddressInsufficientBalance',
      type: 'error',
    },
    {
      inputs: [],
      name: 'FailedInnerCall',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
      ],
      name: 'SafeERC20FailedOperation',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'time',
          type: 'uint256',
        },
      ],
      name: 'Stake',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'time',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'rewardTokens',
          type: 'uint256',
        },
      ],
      name: 'UnStake',
      type: 'event',
    },
    {
      inputs: [],
      name: 'NFTItem',
      outputs: [
        {
          internalType: 'contract IERC1155',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      name: 'onERC1155BatchReceived',
      outputs: [
        {
          internalType: 'bytes4',
          name: '',
          type: 'bytes4',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      name: 'onERC1155Received',
      outputs: [
        {
          internalType: 'bytes4',
          name: '',
          type: 'bytes4',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_tokenId',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_amount',
          type: 'uint256',
        },
      ],
      name: 'stakeNFT',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'stakes',
      outputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'timestamp',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_tokenId',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_amount',
          type: 'uint256',
        },
      ],
      name: 'unStakeNFT',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ];
  const nftABi = [
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
  ];
  const approvedNFt = async () => {
    try {
      const run = await writeContract({
        abi: nftABi,
        address: nftAddr,
        functionName: 'setApprovalForAll',
        args: ['0x8f3Ad8DEDD9AC6f683054af11aCD3BE96880De7d', true],
      });
      console.log(run);
      stakeNFT();
    } catch (error: any) {
      console.log(error);
    }
  };

  const stakeNFT = async () => {
    console.log(amtNft);

    try {
      const run = await writeContract({
        abi: contractAbi,
        address: contractAddress,
        functionName: 'stakeNFT',
        args: [1, 4],
      });
      console.log(run);
    } catch (error: any) {
      console.log(error);
    }
  };
  const unstakeNFT = async () => {
    try {
      const run = await writeContract({
        abi: contractAbi,
        address: contractAddress,
        functionName: 'unStakeNFT',
        args: [1, amtNft],
      });

      console.log(run);
    } catch (error: any) {
      console.log(error, 'dmeo');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Toaster />

      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          NFT Staking
        </h2>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amtNft}
            onChange={(e) => {
              const value = Number(e.target.value);
              setAmtNft(isNaN(value) ? 0 : value); // Set to 0 (or any default) if the input is not a valid number
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter amount"
          />
        </div>
        <div className="flex justify-between gap-4">
          <button
            onClick={approvedNFt}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Stake
          </button>
          <button
            onClick={unstakeNFT}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Unstake
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mint;
