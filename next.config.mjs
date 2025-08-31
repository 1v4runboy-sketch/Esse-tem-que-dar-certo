// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Evita que o bundle do cliente tente resolver módulos do Node
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        fs: false,
        path: false,
        module: false,
        os: false,
      };
    }
    return config;
  },
};

export default nextConfig;
