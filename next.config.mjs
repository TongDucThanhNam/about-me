/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    images: {
        domains: ['images.unsplash.com', "assets.aceternity.com"],
    }
};

export default nextConfig;
