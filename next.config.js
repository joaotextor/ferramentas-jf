/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone",
  // basePath: "",
  output: "export",
  basePath: "/ferramentas-jf",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
