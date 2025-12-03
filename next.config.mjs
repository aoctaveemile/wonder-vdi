/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    eslint: {
      // On ignore les erreurs de linting pendant le build pour éviter de bloquer le déploiement
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;
