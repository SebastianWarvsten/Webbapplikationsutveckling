module.exports = {
    pwa: {
      manifestOptions: {
        background_color: 'gray'
      },
      name: 'Laboration-4',
      themeColor: '#4CBB88',
      short_name: 'Lab4',
      display: "standalone",
      scope: ".",
      workboxOptions: {
        runtimeCaching: [
          {
            handler: 'NetworkFirst',
            options: {
              networkTimeoutSeconds: 5
            },
            urlPattern: 'https://restcountries.eu/rest/v2/'
          }
        ]
      }
    }
  }