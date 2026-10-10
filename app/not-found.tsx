import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HomeIcon, ArrowLeftIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background text-foreground relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="text-center flex flex-col items-center gap-8 animate-in fade-in zoom-in-95 duration-700 ease-out">
        <Image src="/logo.svg" alt="Logo" width={64} height={64} className="mb-[-2rem] drop-shadow-lg" />
        <div className="flex flex-col gap-2">
          <h1 className="text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/30 selection:bg-transparent">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground/90">
            Page not found
          </h2>
          <p className="text-muted-foreground text-lg max-w-[500px] mx-auto mt-4 px-4">
            Oops! The page you're looking for seems to have wandered off into the digital void. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <Button render={<Link href="/" />} nativeButton={false} size="lg" className="rounded-full px-8 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
            <HomeIcon data-icon="inline-start" />
            Go Home
          </Button>
          <Button render={<Link href="/" />} nativeButton={false} variant="outline" size="lg" className="rounded-full px-8 bg-background/50 backdrop-blur-sm transition-transform hover:scale-105 active:scale-95">
            <ArrowLeftIcon data-icon="inline-start" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
