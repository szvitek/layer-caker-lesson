import { fetchRedirects } from "@/sanity/lib/fetchRedirects";
import type { NextConfig, Redirect } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    const r = await fetchRedirects();
    return r.map(({ source, destination, permanent, ...rest }) => ({
      ...rest,
      source,
      destination,
      permanent: !!permanent,
    }));
  },
};

export default nextConfig;
