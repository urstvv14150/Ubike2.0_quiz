module.exports = {
  experimental: {
    //largePageDataBytes: 128 * 1000, // 128KB by default
      largePageDataBytes: 128 * 100000,
  },

  async rewrites() {
    return [
      {
        source: '/howUse',
        destination: '/',
      },
      {
        source: '/fee',
        destination: '/',
      },
      {
        source: '/site',
        destination: '/',
      },
      {
        source: '/new',
        destination: '/',
      },
      {
        source: '/active',
        destination: '/',
      },
      {
        source: '/login',
        destination: '/',
      },

    ]
  }
}