module.exports = {
    publicPath: "./",
  
    pwa: {
      themeColor: "#000",
      msTileColor: "#000",
      appleMobileWebAppCache: "yes",
      manifestOptions: {
        background_color: "#000"
      },
      workboxOptions: {
        skipWaiting: true,
        clientsClaim: true,
      }
    }
};