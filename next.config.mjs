/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const nextConfig = {
    pwa:{
        dest: 'public',
        register: true,
        skipWaiting: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    }
};

export default nextConfig;
