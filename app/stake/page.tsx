"use client";
import React, { useState } from "react";
import { useAccount, useSendTransaction } from "wagmi";
import { useWriteContract } from "wagmi";
import { toast, Toaster } from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import images from "@/components/images/index";
import { contractAbi, nftABi } from "./abi";

const Mint = () => {
  const wallet = useAccount();
  console.log(wallet.address);
  const { data: hash, writeContract } = useWriteContract();
  const [amtNft, setAmtNft] = useState(1);

  const contractAddress = "0x8f3Ad8DEDD9AC6f683054af11aCD3BE96880De7d";
  const nftAddr = "0x295718dfD46F2F88D63AA648Cb31dc67528eB960";

  const approvedNFt = async () => {
    try {
      const run = await writeContract({
        abi: nftABi,
        address: nftAddr,
        functionName: "setApprovalForAll",
        args: ["0x8f3Ad8DEDD9AC6f683054af11aCD3BE96880De7d", true],
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
        functionName: "stakeNFT",
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
        functionName: "unStakeNFT",
        args: [1, amtNft],
      });

      console.log(run);
    } catch (error: any) {
      console.log(error, "dmeo");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-primary to-primary-foreground">
      <Toaster />
      <div className="bg-card rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center space-y-6">
          <Image
            src={images.lightPunk}
            width={500}
            height={500}
            alt="NFT"
            className="rounded-xl"
          />
          <div className="flex flex-col items-center space-y-4 w-full">
            <div className="flex items-center space-x-2 w-full">
              <div className="flex flex-col items-start space-y-2 w-full">
                <div className="text-sm font-medium text-muted-foreground">
                  Amount
                </div>
                <Input
                  type="number"
                  placeholder="Stake your NFT"
                  value={amtNft}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    setAmtNft(isNaN(value) ? 0 : value);
                  }}
                  className="flex-1 bg-background border border-input rounded-md px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 w-full">
              <Button
                onClick={approvedNFt}
                className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring flex-1"
              >
                Stake
              </Button>
              <Button
                onClick={unstakeNFT}
                className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring flex-1"
              >
                Unstake
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
