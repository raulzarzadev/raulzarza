const  isProd  =  proceso . env . NODE_ENV  ===  'producción'

módulo . exportaciones  =  {
  // Utilice el CDN en producción y localhost para el desarrollo.
  assetPrefix : isProd ? 'https://cdn.staically.io/gh/raulzarza/raulzarzadev.github.io/gh-pages/' : '' ,
}