/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/greggoralski/openAI-assistant-beta",
        permanent: true,
      },
      {
        source: "/deploy",
        destination: "https://open-ai-assistant-beta.vercel.app/",
        permanent: true,
      },
    ];
  },
  env: {
    REACT_APP_ASSISTANT_ID: process.env.REACT_APP_ASSISTANT_ID,
  },
};

module.exports = nextConfig;