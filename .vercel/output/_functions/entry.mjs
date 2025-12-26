import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C9e0lMmn.mjs';
import { manifest } from './manifest_DBe_qu81.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/menu/create.astro.mjs');
const _page2 = () => import('./pages/api/menu/delete.astro.mjs');
const _page3 = () => import('./pages/api/menu/update.astro.mjs');
const _page4 = () => import('./pages/carta.astro.mjs');
const _page5 = () => import('./pages/dashboard/edit/_slug_.astro.mjs');
const _page6 = () => import('./pages/dashboard/new.astro.mjs');
const _page7 = () => import('./pages/dashboard.astro.mjs');
const _page8 = () => import('./pages/login.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/menu/create.ts", _page1],
    ["src/pages/api/menu/delete.ts", _page2],
    ["src/pages/api/menu/update.ts", _page3],
    ["src/pages/carta.astro", _page4],
    ["src/pages/dashboard/edit/[slug].astro", _page5],
    ["src/pages/dashboard/new.astro", _page6],
    ["src/pages/dashboard/index.astro", _page7],
    ["src/pages/login.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "45d95e4a-7fb3-4206-ac05-bed6b24ca246",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
