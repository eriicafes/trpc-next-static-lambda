import { Inter } from '@next/font/google'
import { trpc } from '@web/utils/trpc'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const mssg = trpc.ping.useQuery("hello")

  return (
    <>
      <Head>
        <title>Next.js + tRPC + Static + Netlify Lambda</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <h1 className="block text-4xl">Next.js + tRPC + Static + Netlify Lambda</h1>
          <p className="inline-block mx-auto text-lg font-medium border px-3 py-1.5 rounded-lg">
            Ping: {mssg.data?.pong ?? "waiting..."}
          </p>
        </div>
      </main>
    </>
  )
}