(this["webpackJsonpcalculator-react-app"]=this["webpackJsonpcalculator-react-app"]||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){},37:function(t,e){},38:function(t,e,n){"use strict";n.r(e);var c=n(6),s=n.n(c),a=n(19),o=n.n(a),b=(n(26),n(4));n(27);var i=function(t,e){var n=Object(c.useState)((function(){try{var n=window.localStorage.getItem(t);return n?JSON.parse(n):e}catch(c){return console.log(c),e}})),s=Object(b.a)(n,2),a=s[0],o=s[1];return[a,function(e){try{var n=e instanceof Function?e(a):e;o(n),window.localStorage.setItem(t,JSON.stringify(n))}catch(c){console.log(c)}}]},u=n(40),l=n(1);var r=function(){var t=i("dark-theme",!1),e=Object(b.a)(t,2),n=e[0],s=e[1],a=Object(c.useState)(n),o=Object(b.a)(a,2),r=o[0],j=o[1],m=Object(c.useState)(""),d=Object(b.a)(m,2),x=d[0],y=d[1],O=Object(c.useState)(""),h=Object(b.a)(O,2),k=h[0],p=h[1];Object(c.useEffect)((function(){r?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")}),[r]);var N=function(t){var e=t.target.innerText;[0,1,2,3,4,5,6,7,8,9].includes(parseInt(e))?"number"===typeof x?(y(e),p("")):y(x+e):y(" ".concat(x," ").concat(e," "))};return Object(l.jsxs)("div",{className:"main container",children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:"calc"}),Object(l.jsxs)("div",{className:"theme__container",onClick:function(){j(!r),s(!n)},children:[Object(l.jsx)("i",{className:"bx bx-sun"}),Object(l.jsx)("i",{className:"bx ".concat(r?"bx-toggle-right":"bx-toggle-left"),id:"theme-button"}),Object(l.jsx)("i",{className:"bx bx-moon"})]})]}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),p(x);var e=x.replace(/x/g,"*");y(Object(u.a)(e))},children:[Object(l.jsxs)("section",{className:"input__container",children:[Object(l.jsx)("span",{children:k}),Object(l.jsx)("input",{value:x,onChange:function(t){y(t.target.value)},type:"text",className:"input__field",autoFocus:!0})]}),Object(l.jsxs)("section",{className:"key__background grid",children:[Object(l.jsx)("button",{type:"button",onClick:N,className:"btn numkeys",children:"7"}),Object(l.jsx)("button",{type:"button",onClick:N,className:"btn numkeys",children:"8"}),Object(l.jsx)("button",{type:"button",onClick:N,className:"btn numkeys",children:"9"}),Object(l.jsx)("button",{type:"button",onClick:function(){var t=x.toString().trim().slice(0,-1);y(t),p("")},className:"btn textkeys",children:"DEL"}),Object(l.jsx)("button",{type:"button",onClick:N,className:"btn numkeys",children:"4"}),Object(l.jsx)("button",{type:"button",onClick:N,className:"btn numkeys",children:"5"}),Object(l.jsx)("button",{type:"button",onClick:N,className:"btn numkeys",children:"6"}),Object(l.jsx)("button",{type:"button",onClick:N,className:"btn numkeys",children:"+"}),Object(l.jsx)("button",{type:"button",onClick:N,className:"btn numkeys",children:"1"}),Object(l.jsx)("button",{type:"button",onClick:N,className:"btn numkeys",children:"2"}),Object(l.jsx)("button",{type:"button",onClick:N,className:"btn numkeys",children:"3"}),Object(l.jsx)("button",{type:"button",onClick:N,className:"btn numkeys",children:"-"}),Object(l.jsx)("button",{type:"button",onClick:N,className:"btn numkeys",children:"."}),Object(l.jsx)("button",{type:"button",onClick:N,className:"btn numkeys",children:"0"}),Object(l.jsx)("button",{type:"button",onClick:N,className:"btn numkeys",children:"/"}),Object(l.jsx)("button",{type:"button",onClick:N,className:"btn numkeys",children:"x"}),Object(l.jsx)("button",{type:"button",onClick:function(){p(""),y("")},className:"btn textkeys reset",children:"RESET"}),Object(l.jsx)("button",{type:"submit",className:"btn equalkey",children:"="})]})]})]})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),s(t),a(t),o(t)}))};o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(r,{})}),document.getElementById("root")),j()}},[[38,1,2]]]);
//# sourceMappingURL=main.38d6d894.chunk.js.map