
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/ng-pokedex/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 1240, hash: '7b665ae81ed523d2ee8cdff6301c49c7d5217138965df413aac964515c8cfd0a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1035, hash: '8791c957b9724df0734cca8ac9664255519be8ff8303ec84def34eb72a32498d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-UOVR4IZF.css': {size: 793, hash: 'gC4LcsHvjwQ', text: () => import('./assets-chunks/styles-UOVR4IZF_css.mjs').then(m => m.default)}
  },
};
