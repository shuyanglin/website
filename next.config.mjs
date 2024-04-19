/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        NEXT_PUBLIC_SANITY_PROJECT_ID: "gcz3gxmt",
        NEXT_PUBLIC_SANITY_DATASET: "production"
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
            },
        ],
    },

}
export default nextConfig;

