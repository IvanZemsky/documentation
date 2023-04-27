"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[6960],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7658:(e,t,r)=>{r.d(t,{ZP:()=>u});var n=r(6600),a=r(9496),o=r(9613),i=r(2484),l=r(4643);const c=e=>{let{ticket:t}=e;const r=`https://github.com/feature-sliced/documentation/issues/${t}`;return a.createElement("div",null,a.createElement("p",null,(0,l.I)({id:"shared.wip.title"})),a.createElement("p",null,(0,l.I)({id:"shared.wip.subtitle"})),a.createElement("ul",null,a.createElement("li",null,(0,l.I)({id:"shared.wip.var.feedback.base"}),a.createElement(i.Z,{to:r},(0,l.I)({id:"shared.wip.var.feedback.link"}))),a.createElement("li",null,(0,l.I)({id:"shared.wip.var.material.base"}),a.createElement(i.Z,{to:"https://t.me/feature_sliced"},(0,l.I)({id:"shared.wip.var.material.link"}))),a.createElement("li",null,(0,l.I)({id:"shared.wip.var.contribute.base"}),a.createElement(i.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,l.I)({id:"shared.wip.var.contribute.link"})))),a.createElement("br",null),a.createElement("p",null,a.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},s={toc:[]};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"WIP",type:"caution"},(0,o.kt)(c,{ticket:r.ticket,mdxType:"WIP"})))}u.isMDXComponent=!0},226:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(6600),a=(r(9496),r(9613)),o=r(7658);const i={sidebar_class_name:"sidebar-item--wip"},l="Browser API",c={unversionedId:"guides/examples/browser-api",id:"guides/examples/browser-api",title:"Browser API",description:"About working with the Browser API: localStorage, audio Api, bluetooth API, etc.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/examples/browser-api.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/browser-api",permalink:"/docs/guides/examples/browser-api",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/examples/browser-api.mdx",tags:[],version:"current",lastUpdatedAt:1682600729,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"Monorepositories",permalink:"/docs/guides/examples/monorepo"},next:{title:"CMS",permalink:"/docs/guides/examples/cms"}},s={},u=[],p={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"browser-api"},"Browser API"),(0,a.kt)(o.ZP,{ticket:"197",mdxType:"WIP"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"About working with the Browser API: localStorage, audio Api, bluetooth API, etc."),(0,a.kt)("p",{parentName:"blockquote"},"You can ask about the idea in more detail ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/alex_novich"},"@alex_novi"))))}d.isMDXComponent=!0}}]);