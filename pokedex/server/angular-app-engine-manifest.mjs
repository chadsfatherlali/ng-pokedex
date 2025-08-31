
export default {
  basePath: 'C:/Program Files/Git/ng-pokedex',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
