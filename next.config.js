/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // output: "export",
  basePath: "",
  // basePath: "/ferramentas-jf",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
