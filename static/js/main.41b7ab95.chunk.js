(this["webpackJsonpemoji-to-scale"]=this["webpackJsonpemoji-to-scale"]||[]).push([[0],{10:function(e,t,c){"use strict";c.r(t);c(4);var n=c(1),i=c(3),s=c.n(i),a=c.p+"static/media/random.bdcef4fb.csv",r=c.p+"static/media/travel.ea220a41.csv",l=c.p+"static/media/nature.8a4f56ad.csv",o=c.p+"static/media/objects.cff3debe.csv";function h(e){return String(Number(e))===e}async function j(){let e={};let t=(await async function(){let e=[];return await fetch(a).then((e=>e.text())).then((t=>{e.push(...t.trim().split("\n").splice(1))})),await fetch(r).then((e=>e.text())).then((t=>{e.push(...t.trim().split("\n").splice(1))})),await fetch(l).then((e=>e.text())).then((t=>{e.push(...t.trim().split("\n").splice(1))})),await fetch(o).then((e=>e.text())).then((t=>{e.push(...t.trim().split("\n").splice(1))})),e}()).reduce(((t,c)=>{const[n,i,s,a]=c.split(",");return"?"===i||(e[n]&&console.warn("REPEATED",n),t[n]=i,e[n]={source:i,label:s,src:a}),t}),{});for(const c in t){const e=t[c];if(t[c].includes("km"))t[c]=100*Number(e.replace("km",""))*1e3;else if(t[c].includes("m"))t[c]=100*Number(e.replace("m",""));else if(h(t[c]))t[c]=Number(e);else if(t[e])t[c]=t[e];else if(e.includes("*")){const n=e.split("*").map((e=>h(e)?Number(e):t[e]?t[e]:e));t[c]=n[0]*n[1]}}return Object.entries(t).sort(((e,t)=>e[1]-t[1])).map((t=>[t[0],t[1],e[t[0]].label])).filter((e=>"?"!==e[1]))}var d=c(0);const m=300;function b(e){return e<2?"".concat(10*e,"mm"):e<100?"".concat(e,"cm"):e<1e5?"".concat(Math.round(100*e)/100/100,"m"):"".concat(Math.round(e/100/10)/100,"km")}var u=function(){const[e,t]=Object(n.useState)([]),[c,i]=Object(n.useState)(0);let s=window.innerWidth/2;return Object(n.useEffect)((()=>{j().then((e=>{t(e),document.body.style.height="".concat(m*e.length+window.innerHeight,"px")})),window.requestAnimationFrame((function e(){const t=window.pageYOffset;i(t),window.requestAnimationFrame(e)}))}),[]),Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)("div",{className:"bg"}),Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Emoji to Scale"}),Object(d.jsx)("div",{style:{marginTop:8},children:Object(d.jsx)("a",{href:"https://github.com/javierbyte/emoji-to-scale",children:"+ Info"})}),Object(d.jsx)("div",{style:{marginTop:8},children:Object(d.jsx)("a",{href:"https://twitter.com/intent/tweet?text=Visualize%20emojis%20to%20scale.%20The%20chicken%20is%20not%20bigger%20than%20the%20car%20anymore!%20%F0%9F%90%93%F0%9F%9A%97%0A%20http%3A//javier.xyz/emoji-to-scale/",children:"+ Tweet this!"})})]}),Object(d.jsx)("div",{style:{flex:1}}),Object(d.jsx)("a",{href:"https://javier.xyz/",children:Object(d.jsx)("h1",{children:"by javierbyte"})})]}),Object(d.jsx)("div",{className:"footer",children:Object(d.jsxs)("h2",{children:["Scroll ",Object(d.jsx)("span",{style:{fontSize:28},children:"\u2193"})]})}),Object(d.jsx)("div",{className:"emoji-display",children:e.map((t=>{let[n,i,a]=t;const r=window.innerWidth;let l=s-c;if(l<r/2&&(l=.25*l+.75*(l+.5*r)/2),s+=m,l<-300||l>r)return null;let o=[Math.floor(c/m),Math.ceil(c/m)];o=o.map((t=>t<0?0:t>e.length-1?e.length-1:t)).map((t=>e[t]));const h=c/m%1,j=h*o[1][1]+(1-h)*o[0][1],u=Math.min(i/j,1e3);let p=1;if(u>3){const e=(u-3)/8;p=Math.max(1-e,0)}return Object(d.jsxs)("div",{className:"emoji-container",style:{left:"".concat(l,"px")},children:[Object(d.jsx)("div",{className:"emoji",style:{opacity:p,transform:"scale(".concat(u,") translateY(10%)")},children:n}),Object(d.jsx)("div",{children:b(i)}),Object(d.jsx)("div",{children:a})]},n)}))})]})};s.a.render(Object(d.jsx)(u,{}),document.getElementById("root"))},4:function(e,t,c){}},[[10,1,2]]]);
//# sourceMappingURL=main.41b7ab95.chunk.js.map