if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),d={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-4723e66c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-Cyo8g-wx.js",revision:null},{url:"assets/index-Dq7gmwvz.css",revision:null},{url:"assets/meilisearch-FfvDoEWw.js",revision:null},{url:"assets/melt-fZhddGwx.js",revision:null},{url:"assets/svelte-CfnTyYTQ.js",revision:null},{url:"index.html",revision:"f7bda3603a327b5a327afdece608178d"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icon.svg",revision:"ff13e1c1c81339d3308435dbd7999686"},{url:"manifest.webmanifest",revision:"aac55491d901cf7a6e9d4a65c3f877d4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));