import Link from "next/link";
import { LightbulbIcon } from "@/components/Icons/icon";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Navbar() {
  return (
    <header className="bg-background border-b border-border px-4 md:px-6 h-16">
      <div className="h-full max-w-screen-xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <LightbulbIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">LightPunk</span>
        </Link>
        <nav className="flex-grow flex items-center justify-center">
          <div className="space-x-6">
            <Link
              href="/stake"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Stake
            </Link>
            <Link
              href="/faucet-nft"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Faucet
            </Link>
          </div>
        </nav>
        <div className="flex items-center">
          <ConnectButton />
        </div>
      </div>
    </header>
  );
}
