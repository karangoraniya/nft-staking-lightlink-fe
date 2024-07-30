"use client";
import React from "react";
import { useAccount, useSendTransaction } from "wagmi";
import { useWriteContract } from "wagmi";
import { type WriteContractReturnType } from "@wagmi/core";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import images from "@/components/images/index";
import { abiNFT } from "./abi";

const FaucetNFT = () => {
  const wallet = useAccount();
  console.log(wallet.address);
  const { data: hash, writeContract } = useWriteContract();

  const NFTFaucetAddress = "0x295718dfD46F2F88D63AA648Cb31dc67528eB960";

  const mintNFT = async () => {
    try {
      const hash = await writeContract({
        abi: abiNFT,
        address: NFTFaucetAddress,
        functionName: "mint",
        args: [1, 11, "0xE0B2A968Fc566bce543E9da6D3893FfE1170B833"],
      });
      console.log(hash);
      console.log("Transaction response:", hash);
    } catch (error: any) {
      console.log(error, "demo");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-primary to-primary-foreground">
      <div className="bg-card rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center space-y-6">
          <Image
            src={images.lightPunk}
            width={500}
            height={500}
            alt="NFT"
            className="rounded-xl"
          />
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Faucet Page
          </h1>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">
              PunkLight NFT Faucet
            </h2>
            <p className="text-gray-600 mb-4">
              Mint your exclusive PunkLight NFT here.
            </p>
          </div>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            onClick={mintNFT}
          >
            Mint NFT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FaucetNFT;
