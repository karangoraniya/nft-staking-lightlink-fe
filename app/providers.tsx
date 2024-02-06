'use client';
import * as React from 'react';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import { defineChain } from 'viem';

// new one
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
// import { polygon, mainnet, sepolia } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

// const connectors = connectorsForWallets([...wallets], { groupName: 'Popular' });

const { wallets } = getDefaultWallets();

const lightlinkPeg = defineChain({
  id: 1891,
  name: 'Peagsus',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://replicator.pegasus.lightlink.io/rpc/v1'] },
  },
  blockExplorers: {
    default: { name: 'BlockScout', url: 'https://pegasus.lightlink.io/' },
  },
});

/* New RainbowKit API */
const projectId = 'Y33b5cbcae6898971684276949dc23af1';
const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: process.env.NEXT_PUBLIC_WALLET_PROJECT_ID!,
  chains: [lightlinkPeg],
  wallets,
});

const queryClient = new QueryClient();

const demoAppInfo = {
  appName: 'Rainbowkit Demo',
};

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider appInfo={demoAppInfo}>
          {mounted && children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
