import { createSecureHeaders } from 'next-secure-headers';
import { readFileSync } from 'node:fs';

const packageJson = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url)).toString('utf-8')
);

// @link https://github.com/jagaapple/next-secure-headers
const secureHeaders = createSecureHeaders({
  contentSecurityPolicy: {
    directives:
      process.env.NEXT_BUILD_ENV_CSP === true
        ? {
            defaultSrc: "'self'",
            styleSrc: [
              "'self'",
              "'unsafe-inline'",
              'https://unpkg.com/@graphql-yoga/graphiql/dist/style.css',
              'https://meet.jitsi.si',
              'https://8x8.vc',
            ],
            scriptSrc: [
              "'self'",
              "'unsafe-eval'",
              "'unsafe-inline'",
              'https://unpkg.com/@graphql-yoga/graphiql',
              // 'https://meet.jit.si/external_api.js',
              // 'https://8x8.vc/external_api.js',
            ],
            frameSrc: [
              "'self'",
              // 'https://meet.jit.si',
              // 'https://8x8.vc',
            ],
            connectSrc: [
              "'self'",
              'https://vitals.vercel-insights.com',
              'https://*.sentry.io',
              // 'wss://ws.pusherapp.com',
              // 'wss://ws-eu.pusher.com',
              // 'https://sockjs.pusher.com',
              // 'https://sockjs-eu.pusher.com',
            ],
            imgSrc: ["'self'", 'https:', 'http:', 'data:'],
            workerSrc: ['blob:'],
          }
        : {},
  },
  ...(process.env.NEXT_BUILD_ENV_CSP === true &&
  process.env.NODE_ENV === 'production'
    ? {
        forceHTTPSRedirect: [
          true,
          { maxAge: 60 * 60 * 24 * 4, includeSubDomains: true },
        ],
      }
    : {}),
  referrerPolicy: 'same-origin',
});

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,

  // @link https://nextjs.org/docs/pages/api-reference/next-config-js/httpAgentOptions
  httpAgentOptions: {
    // ⚠️ keepAlive might introduce memory-leaks for long-running servers (ie: on docker)
    keepAlive: true,
  },
  // onDemandEntries: {
  //   // period (in ms) where the server will keep pages in the buffer
  //   maxInactiveAge: (buildEnv.NEXT_BUILD_ENV_CI ? 3600 : 25) * 1000,
  // },


  // @link https://nextjs.org/docs/advanced-features/compiler#minification
  // Sometimes buggy so enable/disable when debugging.
  swcMinify: true,

  // @link https://nextjs.org/docs/basic-features/image-optimization
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    loader: 'default',
    dangerouslyAllowSVG: false,
    disableStaticImages: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      
    ],
    unoptimized: false,
  },

  async headers() {
    return [
      {
        // All page routes, not the api ones
        source: '/:path((?!api).*)*',
        headers: [
          ...secureHeaders,
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'same-origin' },
        ],
      },
    ];
  },

  // @link https://nextjs.org/docs/api-reference/next.config.js/rewrites
  async rewrites() {
    return [
      {
        source: `/auth`,
        destination: '/auth/login',
      }
    ];
  },

  env: {
    APP_NAME: packageJson.name ?? 'not-in-package.json',
    APP_VERSION: packageJson.version ?? 'not-in-package.json',
    BUILD_TIME: new Date().toISOString(),
  },
}

export default nextConfig