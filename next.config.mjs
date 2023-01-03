import { validatedEnv } from "./src/utils/validate-env.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: validatedEnv,
  images: {
    unoptimized: true
  },
}

export default nextConfig
