(this.webpackJsonpbank=this.webpackJsonpbank||[]).push([[0],{19:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),i=n(14),u=n.n(i),j=(n(19),n(3)),o=n(4),r=n.n(o),s=n(0),b="/api/users";var l=function(){var t=Object(c.useState)(null),e=Object(j.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)(null),u=Object(j.a)(i,2),o=u[0],l=u[1],O=Object(c.useState)(""),d=Object(j.a)(O,2),h=d[0],f=d[1],g=Object(c.useState)(null),v=Object(j.a)(g,2),x=v[0],S=v[1],C=Object(c.useState)(""),k=Object(j.a)(C,2),p=k[0],E=k[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{onClick:function(){r.a.get(b).then((function(t){var e=t.data;a(JSON.stringify(e))}))},children:"GET ALL USERS"}),Object(s.jsx)("button",{onClick:function(){r.a.get("".concat(b,"/").concat(p)).then((function(t){var e=t.data;l(JSON.stringify(e))}))},children:"GET A USER"}),Object(s.jsx)("button",{onClick:function(){r.a.delete("".concat(b,"/").concat(p)).then((function(t){var e=t.data;S(JSON.stringify(e))}))},children:"delete a user"}),Object(s.jsx)("input",{type:"text",value:p,onChange:function(t){E(t.target.value)}}),Object(s.jsx)("textarea",{value:h,onChange:function(t){f(t.target.value)}}),Object(s.jsx)("button",{onClick:function(){},children:"ADD USER"}),n&&Object(s.jsx)("div",{children:n}),o&&Object(s.jsx)("div",{children:o}),x&&Object(s.jsx)("div",{children:x}),h&&Object(s.jsx)("div",{children:h})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,u=e.getTTFB;n(t),c(t),a(t),i(t),u(t)}))};u.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(l,{})}),document.getElementById("root")),O()}},[[39,1,2]]]);
//# sourceMappingURL=main.2720296a.chunk.js.map