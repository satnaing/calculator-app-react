(this["webpackJsonpcalculator-react-app"]=this["webpackJsonpcalculator-react-app"]||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){},37:function(t,e){},38:function(t,e,n){"use strict";n.r(e);var c=n(6),o=n.n(c),a=n(19),s=n.n(a),i=(n(26),n(4));n(27);var r=function(t,e){var n=Object(c.useState)((function(){try{var n=window.localStorage.getItem(t);return n?JSON.parse(n):e}catch(c){return console.log(c),e}})),o=Object(i.a)(n,2),a=o[0],s=o[1];return[a,function(e){try{var n=e instanceof Function?e(a):e;s(n),window.localStorage.setItem(t,JSON.stringify(n))}catch(c){console.log(c)}}]},l=n(40),u=n(1);var b=function(){var t=r("dark-theme",!1),e=Object(i.a)(t,2),n=e[0],o=e[1],a=Object(c.useState)(n),s=Object(i.a)(a,2),b=s[0],d=s[1],j=Object(c.useState)(""),h=Object(i.a)(j,2),m=h[0],f=h[1],k=Object(c.useState)(""),p=Object(i.a)(k,2),y=p[0],g=p[1];Object(c.useEffect)((function(){b?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")}),[b]);var x=function(t){var e=t.target.innerText;["0","1","2","3","4","5","6","7","8","9","."].includes(e.toString())?"number"===typeof m?(f(e),g("")):f(m+e):f(" ".concat(m," ").concat(e," "))};return Object(u.jsxs)("div",{className:"main container",children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{children:"calc"}),Object(u.jsxs)("div",{className:"theme__container",onClick:function(){d(!b),o(!n)},children:[Object(u.jsx)("i",{className:"bx bx-sun"}),Object(u.jsx)("i",{className:"bx ".concat(b?"bx-toggle-right":"bx-toggle-left"),id:"theme-button"}),Object(u.jsx)("i",{className:"bx bx-moon"})]})]}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),g(m);var e=m.replace(/x/g,"*");f(Object(l.a)(e).toLocaleString())},children:[Object(u.jsxs)("section",{className:"input__container",children:[Object(u.jsx)("span",{children:y}),Object(u.jsx)("input",{value:m,onChange:function(t){f(t.target.value)},type:"text",className:"input__field"})]}),Object(u.jsxs)("section",{className:"key__background grid",children:[Object(u.jsx)("button",{type:"button",onClick:x,className:"btn numkeys",children:"7"}),Object(u.jsx)("button",{type:"button",onClick:x,className:"btn numkeys",children:"8"}),Object(u.jsx)("button",{type:"button",onClick:x,className:"btn numkeys",children:"9"}),Object(u.jsx)("button",{type:"button",onClick:function(){var t=m.toString().trim().slice(0,-1);f(t),g("")},className:"btn textkeys",children:"DEL"}),Object(u.jsx)("button",{type:"button",onClick:x,className:"btn numkeys",children:"4"}),Object(u.jsx)("button",{type:"button",onClick:x,className:"btn numkeys",children:"5"}),Object(u.jsx)("button",{type:"button",onClick:x,className:"btn numkeys",children:"6"}),Object(u.jsx)("button",{type:"button",onClick:x,className:"btn numkeys",children:"+"}),Object(u.jsx)("button",{type:"button",onClick:x,className:"btn numkeys",children:"1"}),Object(u.jsx)("button",{type:"button",onClick:x,className:"btn numkeys",children:"2"}),Object(u.jsx)("button",{type:"button",onClick:x,className:"btn numkeys",children:"3"}),Object(u.jsx)("button",{type:"button",onClick:x,className:"btn numkeys",children:"-"}),Object(u.jsx)("button",{type:"button",onClick:x,className:"btn numkeys",children:"."}),Object(u.jsx)("button",{type:"button",onClick:x,className:"btn numkeys",children:"0"}),Object(u.jsx)("button",{type:"button",onClick:x,className:"btn numkeys",children:"/"}),Object(u.jsx)("button",{type:"button",onClick:x,className:"btn numkeys",children:"x"}),Object(u.jsx)("button",{type:"button",onClick:function(){g(""),f("")},className:"btn textkeys reset",children:"RESET"}),Object(u.jsx)("button",{type:"submit",className:"btn equalkey",children:"="})]})]})]})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),o(t),a(t),s(t)}))},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}s.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/calculator-app-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/calculator-app-react","/service-worker.js");j?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):h(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):h(e,t)}))}}(),d()}},[[38,1,2]]]);
//# sourceMappingURL=main.e5597cb8.chunk.js.map