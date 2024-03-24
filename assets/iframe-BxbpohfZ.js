import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="modulepreload",p=function(_,i){return new URL(_,i).href},O={},o=function(i,s,l){let e=Promise.resolve();if(s&&s.length>0){const t=document.getElementsByTagName("link");e=Promise.all(s.map(r=>{if(r=p(r,l),r in O)return;O[r]=!0;const c=r.endsWith(".css"),E=c?'[rel="stylesheet"]':"";if(!!l)for(let a=t.length-1;a>=0;a--){const u=t[a];if(u.href===r&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${E}`))return;const n=document.createElement("link");if(n.rel=c?"stylesheet":d,c||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),c)return new Promise((a,u)=>{n.addEventListener("load",a),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>i()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:f}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,m=f({page:"preview"});R.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=m);const P={"./stories/components/button.stories.tsx":async()=>o(()=>import("./button.stories-0FQPArOY.js"),__vite__mapDeps([0,1,2]),import.meta.url),"./stories/layouts/box.stories.tsx":async()=>o(()=>import("./box.stories-QuKgD13S.js"),__vite__mapDeps([3,1,2,4]),import.meta.url),"./stories/layouts/flex.stories.tsx":async()=>o(()=>import("./flex.stories-BoE7G3V0.js"),__vite__mapDeps([5,1,2,4]),import.meta.url),"./stories/layouts/grid.stories.tsx":async()=>o(()=>import("./grid.stories-A-OdkKae.js"),__vite__mapDeps([6,1,2,4]),import.meta.url)};async function w(_){return P[_]()}const{composeConfigs:T,PreviewWeb:L,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,v=async()=>{const _=await Promise.all([o(()=>import("./entry-preview-eXUdd0Qd.js"),__vite__mapDeps([7,2,8]),import.meta.url),o(()=>import("./entry-preview-docs-DPPbU_wP.js"),__vite__mapDeps([9,10,2,11]),import.meta.url),o(()=>import("./preview-B_0crF9I.js"),__vite__mapDeps([12,13]),import.meta.url),o(()=>import("./preview-C_8mS6tV.js"),__vite__mapDeps([14,15]),import.meta.url),o(()=>import("./preview-D8VCGkL0.js"),__vite__mapDeps([16,11]),import.meta.url),o(()=>import("./preview-BcxrGG1y.js"),__vite__mapDeps([17,11]),import.meta.url),o(()=>import("./preview-Db4Idchh.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([18,11]),import.meta.url),o(()=>import("./preview-Cv3rAi2i.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-DJmSEPs8.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-CEavPytu.js"),__vite__mapDeps([19,20]),import.meta.url)]);return T(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:w,getProjectAnnotations:v});export{o as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./button.stories-0FQPArOY.js","./index-BoSpoE2D.js","./index-BBkUAzwr.js","./box.stories-QuKgD13S.js","./constants-8512jFBU.js","./flex.stories-BoE7G3V0.js","./grid.stories-A-OdkKae.js","./entry-preview-eXUdd0Qd.js","./react-18-DHj1n7xi.js","./entry-preview-docs-DPPbU_wP.js","./_getPrototype-WWAa0_g7.js","./index-DrFu-skq.js","./preview-B_0crF9I.js","./index-Bw8VTzHM.js","./preview-C_8mS6tV.js","./preview-DJmSEPs8.js","./preview-D8VCGkL0.js","./preview-BcxrGG1y.js","./preview-BAz7FMXc.js","./preview-CEavPytu.js","./preview-DEdToQWv.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
