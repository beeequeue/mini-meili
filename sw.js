if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-4723e66c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-Clc53sqx.js",revision:null},{url:"assets/index-XA86nCo5.css",revision:null},{url:"assets/meilisearch-DLeRBbU-.js",revision:null},{url:"assets/melt-B2jD7a8h.js",revision:null},{url:"assets/svelte-DqsWNMK8.js",revision:null},{url:"index.html",revision:"7666ba08575c187fabb5ec4a4b91c069"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icon.svg",revision:"ff13e1c1c81339d3308435dbd7999686"},{url:"manifest.webmanifest",revision:"a85d24fe3820528d36345de33b99558f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
