import { Button } from "@/components/ui/button";
import { PercentIcon, RocketIcon, WalletIcon } from "@/components/Icons/icon";
import Image from "next/image";
import images from "@/components/images/index";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1 bg-muted">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:gap-16">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Earn Passive Income with NFT Staking
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Stake your NFTs and earn attractive APR rewards. Our platform
                provides a seamless and secure way to grow your digital assets.
              </p>
              <div className="flex gap-4">
                <Button>Stake Now</Button>
                <Button variant="secondary">Learn More</Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={images.lightPunk2}
                width="500"
                height="500"
                alt="NFT Staking"
                className="max-w-full rounded-lg"
              />
            </div>
          </div>
        </section>
        <section className="bg-background py-12 md:py-24 lg:py-32">
          <div className="container grid gap-8 md:grid-cols-2 md:gap-16">
            <div className="flex items-center justify-center">
              <Image
                src={images.lightPunk3}
                width="500"
                height="500"
                alt="NFT Faucet"
                className="max-w-full rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Claim Free NFTs from our Faucet
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Explore our NFT faucet and claim free NFTs to start your
                collection. Discover unique and rare digital assets without any
                cost.
              </p>
              <Button>Claim Now</Button>
            </div>
          </div>
        </section>
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Why Choose Lightpunk?
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed">
              Lightpunk offers a secure and user-friendly platform for NFT
              staking, providing attractive APR rewards and a seamless
              experience for growing your digital assets.
            </p>
          </div>
          <div className="grid gap-8 mt-8 md:grid-cols-3 md:gap-12">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center bg-muted rounded-full w-12 h-12">
                <WalletIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Secure Staking</h3>
              <p className="mt-2 text-muted-foreground">
                Our platform ensures the safety of your NFTs with advanced
                security measures.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center bg-muted rounded-full w-12 h-12">
                <PercentIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Attractive APR</h3>
              <p className="mt-2 text-muted-foreground">
                Earn up to 20% APR on your staked NFTs, providing a substantial
                passive income stream.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center bg-muted rounded-full w-12 h-12">
                <RocketIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Easy to Use</h3>
              <p className="mt-2 text-muted-foreground">
                Our intuitive platform makes staking and managing your NFTs a
                breeze.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
