(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9517],{28532:function(e,n,t){Promise.resolve().then(t.bind(t,97546))},66648:function(e,n,t){"use strict";t.d(n,{default:function(){return i.a}});var l=t(55601),i=t.n(l)},87138:function(e,n,t){"use strict";t.d(n,{default:function(){return i.a}});var l=t(231),i=t.n(l)},49189:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{cancelIdleCallback:function(){return l},requestIdleCallback:function(){return t}});let t="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let n=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})},1)},l="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),e.exports=n.default)},55601:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{default:function(){return s},getImageProps:function(){return r}});let l=t(99920),i=t(80497),a=t(38173),o=l._(t(21241));function r(e){let{props:n}=(0,i.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(n))void 0===t&&delete n[e];return{props:n}}let s=a.Image},97546:function(e,n,t){"use strict";var l=t(57437);t(2265);var i=t(71182),a=t.n(i),o=t(87138),r=t(29237),s=t(31449),c=t(44839),d=t(88216),u=t(64381);n.default=e=>{var n,t,i;let{footerData:f}=e;return f&&(0,l.jsx)("footer",{className:(0,c.Z)(a().footer,f?"":"hideHeader","common-spacing"),children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:a().footerContent,children:[(0,l.jsxs)("div",{className:a().maincontent,children:[(0,l.jsx)("div",{className:a().footerList,children:(0,l.jsx)(s.Z,{footerContent:null==f?void 0:f.DesktopContent})}),(0,l.jsx)("div",{className:a().payment,children:(0,l.jsx)(d.Z,{paymentData:null==f?void 0:f.paymentPatner})})]}),(0,l.jsxs)("div",{className:a().icons,children:[(0,l.jsx)("div",{className:a().logo,children:(0,l.jsx)(o.default,{href:(null==f?void 0:null===(n=f.logo)||void 0===n?void 0:n.url)||"",prefetch:!1,children:(0,l.jsx)(r.Z,{src:null==f?void 0:null===(t=f.logo)||void 0===t?void 0:t.image,width:170,height:64,alt:null==f?void 0:null===(i=f.logo)||void 0===i?void 0:i.image,loading:"lazy"})})}),(0,l.jsx)(u.Z,{socialIconsData:null==f?void 0:f.socialIcons})]})]}),(0,l.jsx)("div",{className:a().copywrite,children:null==f?void 0:f.copywrite})]})})}},29237:function(e,n,t){"use strict";var l=t(57437);t(2265);var i=t(66648);n.Z=e=>{let{src:n,alt:t,width:a,height:o,styleObject:r,layout:s,addClass:c,sizes:d,loading:u,objectFit:f}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.default,{src:n,alt:t,width:a,height:o,quality:80,loading:u||"eager",unoptimized:!0,style:r,className:c,sizes:d,objectFit:f,layout:s})})}},31449:function(e,n,t){"use strict";var l=t(57437);t(2265);var i=t(29237),a=t(44839),o=t(71182),r=t.n(o),s=t(87138);n.Z=e=>{let{footerContent:n}=e;return(0,l.jsx)(l.Fragment,{children:n&&n.map((e,n)=>(0,l.jsxs)("div",{className:r().rowContent,children:[(0,l.jsx)("div",{children:e.name}),(0,l.jsx)("ul",{children:e.list.map((e,n)=>(0,l.jsx)("li",{className:(0,a.Z)((null==e?void 0:e.separator)?r().hindiEnglish:""),children:(null==e?void 0:e.image)?(0,l.jsx)(i.Z,{src:e.image||"",width:143,height:32,alt:e.alt,loading:"lazy"}):(null==e?void 0:e.hindi)?(0,l.jsxs)(l.Fragment,{children:["( ",(0,l.jsx)(s.default,{href:e.url||"",prefetch:!1,className:(0,a.Z)("link",r().hindiLink),children:e.name})," )"]}):(0,l.jsx)(s.default,{href:e.url||"",prefetch:!1,className:(0,a.Z)("link"),children:e.name})},n))},n)]},n))})}},88216:function(e,n,t){"use strict";var l=t(57437);t(2265);var i=t(29237),a=t(44839),o=t(71182),r=t.n(o),s=t(87138);n.Z=e=>{let{paymentData:n}=e;return(0,l.jsx)(l.Fragment,{children:n&&n.map((e,n)=>(0,l.jsxs)("div",{className:r().rowContent,children:[(0,l.jsx)("div",{children:e.name}),(0,l.jsx)("ul",{className:r().mobileul,children:e.list.map((e,n)=>(0,l.jsx)("li",{className:(0,a.Z)((null==e?void 0:e.separator)?r().hindiEnglish:""),children:(null==e?void 0:e.image)?(0,l.jsx)(i.Z,{src:e.image||"",width:143,height:32,alt:e.alt,loading:"lazy"}):(0,l.jsx)(s.default,{href:e.url||"",prefetch:!1,className:(0,a.Z)("link"),children:e.name})},n))},n)]},n))})}},64381:function(e,n,t){"use strict";var l=t(57437);t(2265);var i=t(29237),a=t(71182),o=t.n(a),r=t(87138);n.Z=e=>{let{socialIconsData:n}=e;return(0,l.jsx)("div",{className:o().socialicons,children:n&&n.map((e,n)=>(0,l.jsx)(r.default,{href:null==e?void 0:e.url,prefetch:!1,children:(0,l.jsx)(i.Z,{src:(null==e?void 0:e.image)||"",width:45,height:46,alt:null==e?void 0:e.alt,loading:"lazy"})},n))})}},71182:function(e){e.exports={footer:"style_footer__NVn40",footerImages:"style_footerImages__FxT4V",rowContent:"style_rowContent__rpQHM",hindiEnglish:"style_hindiEnglish__pto_G",payment:"style_payment__fE7yR",paymentcontent:"style_paymentcontent__LhYnL",icons:"style_icons__QIdSM",logo:"style_logo__Ghvyx",socialicons:"style_socialicons__5oW4D",copywrite:"style_copywrite__Asijy",hindiLink:"style_hindiLink__CuCIu",upperRow:"style_upperRow__ycfvC",maincontentForCampaignPages:"style_maincontentForCampaignPages__We1XM",maincontent:"style_maincontent__hHx1l",footerContent:"style_footerContent__Z8Qzq",mobileul:"style_mobileul__N8GyN",footerForCampaignPages:"style_footerForCampaignPages__38uBc"}},44839:function(e,n,t){"use strict";function l(){for(var e,n,t=0,l="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=function e(n){var t,l,i="";if("string"==typeof n||"number"==typeof n)i+=n;else if("object"==typeof n){if(Array.isArray(n)){var a=n.length;for(t=0;t<a;t++)n[t]&&(l=e(n[t]))&&(i&&(i+=" "),i+=l)}else for(l in n)n[l]&&(i&&(i+=" "),i+=l)}return i}(e))&&(l&&(l+=" "),l+=n);return l}t.d(n,{W:function(){return l}}),n.Z=l}},function(e){e.O(0,[6041,8173,231,2971,7023,1744],function(){return e(e.s=28532)}),_N_E=e.O()}]);