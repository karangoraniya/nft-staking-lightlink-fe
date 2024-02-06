'use client';
import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">LightPunk</div>
        <div className="flex items-center gap-4">
          <Link href="/faucet-nft" passHref className="hover:text-gray-300">
            Faucet NFT
          </Link>
          <Link href="/stake" passHref className="hover:text-gray-300">
            Stake
          </Link>
          <ConnectButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
