import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ["latin"] });

const Button = dynamic(() => import('remote_next/Button'), {
  ssr: false,
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h2>Next.js - Host</h2>
        <div>
          <Button />
        </div>
      </div>
    </main>
  );
}
