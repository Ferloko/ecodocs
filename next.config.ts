import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/nosotros.html", destination: "/nosotros", permanent: true },
      { source: "/contacto.html", destination: "/contacto", permanent: true },
      {
        source: "/integraciones.html",
        destination: "/integraciones",
        permanent: true,
      },
      { source: "/seguridad.html", destination: "/seguridad", permanent: true },
      { source: "/blog.html", destination: "/blog", permanent: true },
      { source: "/casos.html", destination: "/casos", permanent: true },
    ];
  },
};

export default nextConfig;
