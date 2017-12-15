module.exports = {
  cache: {
    cacheId: 'largereact',
    runtimeCaching: [{
      handler: 'fastest',
      urlPattern: '\/$'
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: '#FFFFFF',
    title: 'largereact',
    short_name: 'PWA',
    theme_color: '#FFFFFF'
  }
};
