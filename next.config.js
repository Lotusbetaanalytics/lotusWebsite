module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/",
        headers: [
          // {
          //   key: "Content-Security-Policy",
          //   value:
          //     "default-src 'self'; font-src 'self' 'https://fonts.googleapis.com'; img-src 'self' *.somewhere.com; script-src 'self'",
          // },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  // images: {
  //   loader: "akamai",
  //   path: "",
  // },
};
