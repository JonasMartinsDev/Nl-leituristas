if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.0bd6fcb0d74c7f6f603a.js",revision:"zl1LgjDKG3agRpBk8yd7l"},{url:"/_next/static/chunks/commons.b33d69fee4c480cb880f.js",revision:"zl1LgjDKG3agRpBk8yd7l"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.7e99c6bf86b8de3b7f29.js",revision:"zl1LgjDKG3agRpBk8yd7l"},{url:"/_next/static/chunks/framework.5a5427a34d59805c176c.js",revision:"zl1LgjDKG3agRpBk8yd7l"},{url:"/_next/static/chunks/main-8e53c57f4884ea7f7270.js",revision:"zl1LgjDKG3agRpBk8yd7l"},{url:"/_next/static/chunks/pages/_app-ae82beea2e0498230d03.js",revision:"zl1LgjDKG3agRpBk8yd7l"},{url:"/_next/static/chunks/pages/_error-f3d2ce07ef7acaffbc82.js",revision:"zl1LgjDKG3agRpBk8yd7l"},{url:"/_next/static/chunks/pages/index-88730660793a696261b4.js",revision:"zl1LgjDKG3agRpBk8yd7l"},{url:"/_next/static/chunks/polyfills-8f31809deb7932dd0187.js",revision:"zl1LgjDKG3agRpBk8yd7l"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"zl1LgjDKG3agRpBk8yd7l"},{url:"/_next/static/css/434f8d76bedb1c28c773.css",revision:"zl1LgjDKG3agRpBk8yd7l"},{url:"/_next/static/zl1LgjDKG3agRpBk8yd7l/_buildManifest.js",revision:"zl1LgjDKG3agRpBk8yd7l"},{url:"/_next/static/zl1LgjDKG3agRpBk8yd7l/_ssgManifest.js",revision:"zl1LgjDKG3agRpBk8yd7l"},{url:"/fonts/tw-icons/css/treinaweb-icons.css",revision:"40180aad40bb0ada895b091f58b526cf"},{url:"/fonts/tw-icons/demo.html",revision:"9f70d0effc076c3290415c769e3b0728"},{url:"/fonts/tw-icons/font/treinaweb-icons.eot",revision:"7cf24aa992bcf2a16098c316565e16c6"},{url:"/fonts/tw-icons/font/treinaweb-icons.svg",revision:"6593a156b2a2e4a83c06d8eeef99b598"},{url:"/fonts/tw-icons/font/treinaweb-icons.ttf",revision:"97742bbb317dfac3a580b6e32c9036fa"},{url:"/fonts/tw-icons/font/treinaweb-icons.woff",revision:"d7a431ada83b427deccecc9f46d36ccb"},{url:"/fonts/tw-icons/font/treinaweb-icons.woff2",revision:"3a6a5d79d3fb607dd9cc8b5ae24e86fe"},{url:"/img/cemig.png",revision:"9607ab0a9dbaf5b1afc1f701f4a93783"},{url:"/img/home/housekeeper.png",revision:"560a3d99de628062b6c0e7bb94df17f6"},{url:"/img/home/living-room.svg",revision:"5528c72116b0b176d263d984a6609c62"},{url:"/img/home/waves.svg",revision:"55d6f2bcbf7896c782e8c543e74ae32a"},{url:"/img/logos/app-store.png",revision:"b06f857db0acd5a24aa6bff52d734b45"},{url:"/img/logos/google-play.png",revision:"74d1496f3db40524deb012461bd0a111"},{url:"/img/logos/logo-icon.png",revision:"49ccfb61d18fba42b5cfc08bafb99751"},{url:"/img/logos/logo-icon.svg",revision:"5af3ed3e7068a0fe99b6652db571b048"},{url:"/img/logos/logo.svg",revision:"b3473824ccdd96436431ab7af7abfdcf"},{url:"/manifest.json",revision:"7329021d56245a7f9ef3411dd1375901"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
