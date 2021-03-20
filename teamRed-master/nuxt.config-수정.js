export default {
  head: {
      ...
        ...
    script: [
      {
        src: '/green/build/page.js',
      },
      { src: '/blue/build/page.js' },
    ],
        ...
        ...
  },

    ...
    ...

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    proxy: true,
  },

  proxy: {
    '/blue': {
      target: 'http://localhost:5501',
      pathRewrite: { '^/blue': '' },
    },
    '/green': {
      target: 'http://localhost:5502',
      pathRewrite: { '^/green': '' },
    },
  },
  server: {
    port: 5500, // default: 5500
  },
    ...
    ...
}