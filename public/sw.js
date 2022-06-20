/* eslint-disable chai-friendly/no-unused-expressions */
if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + '.js', a).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = n), (e.onload = s), document.head.appendChild(e);
          // eslint-disable-next-line no-undef
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, t) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[c]) return;
    let i = {};
    const r = (e) => n(e, c),
      d = { module: { uri: c }, exports: i, require: r };
    s[c] = Promise.all(a.map((e) => d[e] || r(e))).then((e) => (t(...e), i));
  };
}
define(['./workbox-60edc8f3'], function (e) {
  'use strict';
  // eslint-disable-next-line no-undef
  importScripts('fallback-X9ysPHOjNbaTkFbSAcfVw.js'),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/X9ysPHOjNbaTkFbSAcfVw/_buildManifest.js',
          revision: '5f0b6b2b20e0042d062a39086359e77f'
        },
        {
          url: '/_next/static/X9ysPHOjNbaTkFbSAcfVw/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933'
        },
        {
          url: '/_next/static/chunks/346-c860e0b0a214c2d8a205.js',
          revision: 'c860e0b0a214c2d8a205'
        },
        {
          url: '/_next/static/chunks/399-ed86af7bb9a3c1f83ab6.js',
          revision: 'ed86af7bb9a3c1f83ab6'
        },
        {
          url: '/_next/static/chunks/938-1b5950938b6f7fa2995c.js',
          revision: '1b5950938b6f7fa2995c'
        },
        {
          url: '/_next/static/chunks/988-83f401159b53b3fa4628.js',
          revision: '83f401159b53b3fa4628'
        },
        {
          url: '/_next/static/chunks/framework-2191d16384373197bc0a.js',
          revision: '2191d16384373197bc0a'
        },
        {
          url: '/_next/static/chunks/main-7d3b8a4d57646ddd35bb.js',
          revision: '7d3b8a4d57646ddd35bb'
        },
        {
          url: '/_next/static/chunks/pages/404-dcf62b50df96176748eb.js',
          revision: 'dcf62b50df96176748eb'
        },
        {
          url: '/_next/static/chunks/pages/_app-bb632b8c56647379c4d5.js',
          revision: 'bb632b8c56647379c4d5'
        },
        {
          url: '/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js',
          revision: '737a04e9a0da63c9d162'
        },
        {
          url: '/_next/static/chunks/pages/_offline-e94069097971ecd3d51f.js',
          revision: 'e94069097971ecd3d51f'
        },
        {
          url: '/_next/static/chunks/pages/about-7c6e89997289eb118d2c.js',
          revision: '7c6e89997289eb118d2c'
        },
        {
          url: '/_next/static/chunks/pages/index-dba9cbbb60bf44b12924.js',
          revision: 'dba9cbbb60bf44b12924'
        },
        {
          url: '/_next/static/chunks/pages/menu-de6b2af90c3a60ee877c.js',
          revision: 'de6b2af90c3a60ee877c'
        },
        {
          url: '/_next/static/chunks/pages/menu/info-section/InfoSection-ae68dec369db1dbb77ed.js',
          revision: 'ae68dec369db1dbb77ed'
        },
        {
          url: '/_next/static/chunks/pages/menu/tile-section/TileSection-4e4ef47bd4848c4a7a11.js',
          revision: '4e4ef47bd4848c4a7a11'
        },
        {
          url: '/_next/static/chunks/pages/nuggets-15be125ce5208384aed5.js',
          revision: '15be125ce5208384aed5'
        },
        {
          url: '/_next/static/chunks/pages/nuggets/%5Bid%5D/%5Bslug%5D-71746ef7fc7e3daaee64.js',
          revision: '71746ef7fc7e3daaee64'
        },
        {
          url: '/_next/static/chunks/pages/nuggets/tag/%5Btag%5D-1359b83c9d7d033f5ad4.js',
          revision: '1359b83c9d7d033f5ad4'
        },
        {
          url: '/_next/static/chunks/pages/posts-c95f32ee87447c614336.js',
          revision: 'c95f32ee87447c614336'
        },
        {
          url: '/_next/static/chunks/pages/posts/%5Bid%5D/%5Bslug%5D-9d1eb39055f3e7d107b9.js',
          revision: '9d1eb39055f3e7d107b9'
        },
        {
          url: '/_next/static/chunks/pages/posts/tag/%5Btag%5D-fc68a820f93205682afc.js',
          revision: 'fc68a820f93205682afc'
        },
        {
          url: '/_next/static/chunks/pages/works-002772c4eda32d817c23.js',
          revision: '002772c4eda32d817c23'
        },
        {
          url: '/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js',
          revision: 'a54b4f32bdc1ef890ddd'
        },
        {
          url: '/_next/static/chunks/webpack-ddd010a953737b6e3536.js',
          revision: 'ddd010a953737b6e3536'
        },
        {
          url: '/_next/static/css/87ed4626d39483b6612a.css',
          revision: '87ed4626d39483b6612a'
        },
        {
          url: '/_next/static/css/9e0d75e23cee381b5035.css',
          revision: '9e0d75e23cee381b5035'
        },
        { url: '/_offline', revision: 'X9ysPHOjNbaTkFbSAcfVw' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers
                  })
                : s
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    );
});
