(this["webpackJsonpfortnite-shop"]=this["webpackJsonpfortnite-shop"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(10),r=c.n(s),i=(c(16),c(6)),j=c(3),o=(c(17),"26f5a371-7940567c-44b8fbe3-cf93bd2a"),l=(c(18),c(0));var d=function(){return Object(l.jsxs)("div",{className:"lds-ellipsis",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})},u=c(4);c(20);var b=function(e){var t=e.title,c=e.date,n=e.image,a=e.body,s=c.substr(0,10);return Object(l.jsx)("div",{className:"news",children:Object(l.jsx)("div",{className:"news_container",children:Object(l.jsxs)("div",{className:"news_item",children:[Object(l.jsx)("img",{className:"news_img",src:n,alt:"news"}),Object(l.jsx)("div",{className:"news_title",children:t}),Object(l.jsxs)("div",{className:"news_info",children:[Object(l.jsx)("div",{className:"news_body",children:a}),Object(l.jsxs)("div",{className:"news_time",children:["\u0421\u043e\u0431\u044b\u0442\u0438\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0441\u044f: ",s]})]})]})})})};var O=function(e){var t=e.news,c=void 0===t?[]:t;return c.length?Object(l.jsx)("div",{className:"goods",children:c.slice(0,12).map((function(e){return Object(l.jsx)(b,Object(u.a)({},e),e.id)}))}):Object(l.jsx)("h3",{children:"\u041d\u0435\u0442 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439"})};var v=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!0),r=Object(j.a)(s,2),i=r[0],u=r[1];return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v1/news?lang=ru&type=br",{headers:{Authorization:o}}).then((function(e){return e.json()})).then((function(e){e.news&&a(e.news),u(!1)}))}),[]),Object(l.jsxs)("div",{className:"event",children:[Object(l.jsx)("h1",{className:"event_title",children:" \u0422\u043e\u043b\u044c\u043a\u043e \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"}),Object(l.jsx)("div",{className:"event_container",children:i?Object(l.jsx)(d,{}):Object(l.jsx)(O,{news:c})})]})};c(21);var h=function(){return Object(l.jsx)("div",{className:"info",children:Object(l.jsx)("div",{className:"info_container"})})};c(22);var m=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsxs)("div",{className:"header_container",children:[Object(l.jsx)(i.b,{to:"/",className:"header_logo",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABgCAMAAACQTr/kAAAAllBMVEVMaXH///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9QwCw4AAAAMXRSTlMAJNvv5QlSrfcbEYAB/voZDgXW9ekoH/LttBUHC+AzV0qhdMWoLV9ql8x7QodPOo+8n4r4ZAAACndJREFUeF7s1dsKgkAQgOFRHGunqXWzrMzItFAzhd7/5YI2oA1YBG8C97vbw9XPwIDjOI7jOACMUtilCjRH9fXMrpYwXawQIyLF7xN2fmzXJNMMJIVIvG3fnat7sVU6Vhg8reYHMYVA+BWo7c7F4nGZHcq1fwqCzX6d47BY8VXCn2Bm0JgSz5BkDCMw5eEnUOPrQPtdPF8tdYMgHBhrV6fmjGakV4KkTDGYWL/9kkRofmVFlKFxacXHKBXeDUGLqsY3lC3CCC927nQ9VV0NADDBoABJkBldMombqija+7+5I7UY6xcqB2ofzjr7+9lGAq8ZB1HS3Q0IEnTHCg39/hFRVRjZrI7MKCpf/9pV6uvNTBCbw34am/dfvuWt98X0GCPka+ZS1+eKAuTvvh7NK98OM/vskQbLhY/TL4DCIKz9DcsyS+Ms44t/HUGI5cU6Xt5zmZvQEUUYYjsrEOdSUjvEGEeynS82W8NYJ8fSQ6guhPdFjii6Vn89MztyJw7Fb/PPjycYPo61BCV6Tn4XCxerzxufVyc7ZPSdB1Vd+xDf3ZE2c9quQwN8Tnzr8e4oUy/soVvDyfbiUggNXuTmq9KY7SIcOtdcnZnf9OECLBMMgrJk3qnvs4ZhwYREK/IJhQZhXpjkWyxOG21jhXyTLVXrQngrclmCMuywu//L5VXbKiN4l8h2HgLvdSBzCf0Sy7px9RGq+75jpf8U1rXbJOggM2ECJhuIiLGg7CKdk6fZNkUO7/95uN7kcO1tiCcLsGRBewtkptNkbxjGaTP7GBrUfZ+89X8IS/bIh9UJ05YUDJ98ArDEAk5+nJO2bOGzPmKxXXzNCXXE0spaZnsnc4nw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",alt:"logo"})}),Object(l.jsx)("nav",{className:"header_nav",children:Object(l.jsxs)("ul",{className:"header_nav-list",children:[Object(l.jsx)("li",{className:"header_nav-item",children:Object(l.jsx)(i.c,{to:"/",className:"header_nav-link",children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"})}),Object(l.jsx)("li",{className:"header_nav-item",children:Object(l.jsx)(i.c,{to:"/sale",className:"header_nav-link",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"})}),Object(l.jsx)("li",{className:"header_nav-item",children:Object(l.jsx)(i.c,{to:"/feedback",className:"header_nav-link",children:"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c"})})]})})]})})};c(23);var x=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsxs)("div",{className:"footer_container",children:[Object(l.jsx)("div",{className:"footer_copy",children:"\u041a\u043e\u043f\u0438\u0440\u0430\u0439\u0442 \xa9"}),Object(l.jsxs)("div",{className:"footer_data",children:[(new Date).getFullYear(),"\u0433."]})]})})};var f=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{}),Object(l.jsx)(h,{}),Object(l.jsx)(v,{}),Object(l.jsx)(x,{})]})},p=c(11);c(24);var g=function(e){var t=e.id,c=e.name,n=e.description,a=e.price,s=e.icon,r=e.addToBasket,i=void 0===r?Function.prototype:r;return Object(l.jsx)("div",{className:"product",children:Object(l.jsxs)("div",{className:"product_items",children:[Object(l.jsxs)("div",{className:"product_info",children:[Object(l.jsx)("img",{src:s,alt:c}),Object(l.jsx)("span",{className:"product_title",children:c}),Object(l.jsx)("p",{className:"product_description",children:n})]}),Object(l.jsx)("span",{className:"product_price",children:a}),Object(l.jsx)("span",{className:"product_rate",children:"\u0412-\u0411\u0430\u043a\u0441\u043e\u0432"}),Object(l.jsx)("button",{className:"product_btn",onClick:function(){return i({id:t,name:c,price:a})},children:"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})})};var A=function(e){var t=e.goods,c=void 0===t?[]:t,n=e.addToBasket,a=void 0===n?Function.prototype:n;return c.length?Object(l.jsx)("div",{className:"goods",children:c.map((function(e){return Object(l.jsx)(g,Object(u.a)(Object(u.a)({},e),{},{addToBasket:a}),e.id)}))}):Object(l.jsx)("h3",{children:"\u0422\u043e\u0432\u0430\u0440\u0430 \u043d\u0435\u0442"})};c(25);var N=function(e){var t=e.quantity,c=void 0===t?0:t,n=e.handleBasketShow,a=void 0===n?Function.prototype:n;return Object(l.jsxs)("div",{className:"cart",onClick:a,children:[Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAClElEQVRoge2Yz0tUURTHP/c5TsQwbhKCNGrTxkBaBv0BLWqrEGTuysoENzpt7FERiRRhhCWukjYatayVi7DaFQlZq8BKsx+LGJsanzqnRTx0ptF377wfvsX7LB6ce8+Z+X7fu/eeeQMJCQkJ24kqi86ePAbcI1XfRPMeyGYB1oAPCGN8L97Etle3QeemWGWRcBdoYnUF5hfc0TrgAIpBdu+8H7E+TyzvlA2InGDk+tGQtNREuQElpxE+U18PzU3VK4RTEejSRnlmjFw7gljTEWjRw+IQXbk366EXXRdfgPoUqih9nmwUDzoGlBKk9Dg0SSaU1I3KIb1NrOoeBi7GGJnhfN9U5aiegW+/nwMLnnmhooZQSipH9QzYdgmRR4Fr0meexuJEtQn9PiBqMjA5pgi3aLedalP6Bn4Up4EvQWkyYAlnx9hmk/oGbLuEkuhPI1Gj9Pb+3Gza7KcERL2MVknJ8FYJZga+Lj/zJcecCc7kPm6VYGbAtku+5JhSsv5rXJWYLqEomaK775VXUnwNWCXPuw9xNSC8Z9F5qpMaTwOWDOnutzgaWGQl80A3OW4G5hHppKdnWbcg5fsrz+W83+pCJG5PwJhaDCyVRcODzcFIqY1aDMyWRSkZ5c7VvcHIMcd8/Y4MdiNyOwQt6xjsK/MnsOvPKPDauC4kzA202w5r6jgxMVHbKXShf4HG4mGgG1EvgV+BqjLA9xl+sK0tnc0vXxFUByAC44WG9MDbycmq77BB1br4bmSZvHNZUH1urKA/k3cAcmHWuvhuZIp/f/bub2llX0urO9YZdq1LEJ1Yyi+AsBZBLRCAAYFxgLnZGebezbifOh52rYvvPVBoSA9k8g4KOlxRhWz6Uti1CQkJCfHgL5gc0zcZwFXWAAAAAElFTkSuQmCC",alt:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),c?Object(l.jsx)("span",{className:"cart_quantity",children:c}):null]})};c(26),c(27),c(28);var w=function(e){var t=e.id,c=e.name,n=e.price,a=e.quantity,s=e.decrQuantity,r=void 0===s?Function.prototype:s,i=e.incrQuantity,j=void 0===i?Function.prototype:i,o=e.removeFromBasket,d=void 0===o?Function.prototype:o;return Object(l.jsxs)("div",{className:"order",children:[Object(l.jsx)("div",{className:"order_name",children:c}),Object(l.jsxs)("div",{className:"order_quantity",children:[a," \u0448\u0442."]}),Object(l.jsx)("div",{className:"order_price",children:n*a}),Object(l.jsx)("button",{className:"order_btn",onClick:function(){return r(t)},children:"\u2796"}),Object(l.jsx)("button",{className:"order_btn",onClick:function(){return j(t)},children:"\u2795"}),Object(l.jsx)("button",{className:"order_btn",onClick:function(){return d(t)},children:"\u2718"})]})};var B=function(e){var t=e.order,c=void 0===t?[]:t,n=e.handleBasketShow,a=void 0===n?Function.prototype:n,s=e.removeFromBasket,r=void 0===s?Function.prototype:s,i=e.incrQuantity,j=e.decrQuantity,o=c.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(l.jsxs)("div",{className:"arrange",children:[Object(l.jsxs)("div",{className:"arrange_menu",children:[Object(l.jsx)("div",{className:"arrange_basket",children:"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435"}),Object(l.jsx)("div",{className:"arrange-close",onClick:a,children:"\u2716"})]}),c.length?c.map((function(e){return Object(l.jsx)(w,Object(u.a)({removeFromBasket:r,incrQuantity:i,decrQuantity:j},e),e.id)})):Object(l.jsx)("div",{className:"arrange_empty",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(l.jsxs)("div",{className:"arrange_outcome",children:[Object(l.jsxs)("div",{className:"arrange_price",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",o," \u0412-\u0411\u0430\u043a\u0441\u043e\u0432"]}),Object(l.jsx)("button",{className:"arrange_btn",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})]})]})};c(29);var F=function(e){var t=e.name,c=void 0===t?"":t,a=e.closeAlert,s=void 0===a?Function.prototype:a;return Object(n.useEffect)((function(){var e=setTimeout(s,2e3);return function(){clearTimeout(e)}}),[c]),Object(l.jsx)("div",{className:"alert",children:Object(l.jsxs)("div",{className:"alert_order",children:[c," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0437\u0430\u043a\u0430\u0437"]})})};var C=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!0),r=Object(j.a)(s,2),i=r[0],b=r[1],O=Object(n.useState)([]),v=Object(j.a)(O,2),h=v[0],m=v[1],x=Object(n.useState)(!1),f=Object(j.a)(x,2),g=f[0],w=f[1],C=Object(n.useState)(""),E=Object(j.a)(C,2),y=E[0],k=E[1],S=function(){w(!g)};return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=ru",{headers:{Authorization:o}}).then((function(e){return e.json()})).then((function(e){e.featured&&a(e.featured),b(!1)}))}),[]),Object(l.jsxs)("div",{className:"shop",children:[Object(l.jsx)(N,{quantity:h.length,handleBasketShow:S}),Object(l.jsxs)("div",{className:"shop_container",children:[Object(l.jsx)("h1",{className:"shop_title",children:"\u041d\u043e\u0432\u044b\u0435 \u0438\u0433\u0440\u043e\u0432\u044b\u0435 \u0441\u043a\u0438\u043d\u044b"}),i?Object(l.jsx)(d,{}):Object(l.jsx)(A,{goods:c,addToBasket:function(e){var t=h.findIndex((function(t){return t.id===e.id}));if(t<0){var c=Object(u.a)(Object(u.a)({},e),{},{quantity:1});m([].concat(Object(p.a)(h),[c]))}else{var n=h.map((function(e,c){return c===t?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity+1}):e}));m(n)}k(e.name)}}),y&&Object(l.jsx)(F,{name:y,closeAlert:function(){k("")}}),g&&Object(l.jsx)(B,{order:h,handleBasketShow:S,removeFromBasket:function(e){var t=h.filter((function(t){return t.id!==e}));m(t)},incrQuantity:function(e){var t=h.map((function(t){if(t.id===e){var c=t.quantity+1;return Object(u.a)(Object(u.a)({},t),{},{quantity:c})}return t}));m(t)},decrQuantity:function(e){var t=h.map((function(t){if(t.id===e){var c=t.quantity-1;return Object(u.a)(Object(u.a)({},t),{},{quantity:c>=0?c:0})}return t}));m(t)}})]})]})};var E=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{}),Object(l.jsx)(C,{}),Object(l.jsx)(x,{})]})};c(30);var y=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(j.a)(s,2),i=r[0],o=r[1],d=Object(n.useState)(""),u=Object(j.a)(d,2),b=u[0],O=u[1],v=Object(n.useState)(!1),h=Object(j.a)(v,2),m=h[0],x=h[1],f=Object(n.useState)(!1),p=Object(j.a)(f,2),g=p[0],A=p[1],N=Object(n.useState)(!1),w=Object(j.a)(N,2),B=w[0],F=w[1],C=Object(n.useState)("\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),E=Object(j.a)(C,2),y=E[0],k=E[1],S=Object(n.useState)("Email \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),W=Object(j.a)(S,2),Y=W[0],L=W[1],G=Object(n.useState)("Email \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),Q=Object(j.a)(G,2),V=Q[0],X=Q[1],D=Object(n.useState)(!1),R=Object(j.a)(D,2),U=R[0],H=R[1];function q(e){switch(e.target.name){case"name":x(!0);break;case"email":A(!0);break;case"massage":F(!0)}}return Object(n.useEffect)((function(){H(!(y||Y||V))}),[y,Y,V]),Object(l.jsx)("div",{className:"feedback",children:Object(l.jsx)("div",{className:"feedback_container",children:Object(l.jsxs)("form",{action:"/feedback",className:"form",children:[Object(l.jsx)("h1",{className:"form_title",children:"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c"}),m&&y&&Object(l.jsx)("div",{style:{color:"red"},children:y}),Object(l.jsx)("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f",className:"form_input",name:"name",value:c,onBlur:function(e){return q(e)},onChange:function(e){return function(e){a(e.target.value),e.target.value.length<3?k("\u041c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430"):k("")}(e)}}),g&&Y&&Object(l.jsx)("div",{style:{color:"red"},children:Y}),Object(l.jsx)("input",{type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",className:"form_input",name:"email",onBlur:function(e){return q(e)},value:i,onChange:function(e){return function(e){o(e.target.value),/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)?L(""):L("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 email")}(e)}}),B&&V&&Object(l.jsx)("div",{style:{color:"red"},children:V}),Object(l.jsx)("textarea",{placeholder:"\u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...",className:"form_text",name:"massage",value:b,onBlur:function(e){return q(e)},onChange:function(e){return function(e){O(e.target.value),e.target.value.length<10?(X("\u041c\u0438\u043d\u0438\u043c\u0443\u043c 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),e.target.value||X("\u041f\u043e\u043b\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")):X("")}(e)}}),Object(l.jsx)("button",{disabled:!U,className:"form_btn",type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})})};var k=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{}),Object(l.jsx)(y,{}),Object(l.jsx)(x,{})]})};c(31);var S=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{}),Object(l.jsx)("div",{className:"notfound",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e!"}),Object(l.jsx)(x,{})]})},W=c(2);var Y=function(){return Object(l.jsxs)(W.c,{children:[Object(l.jsx)(W.a,{path:"/",element:Object(l.jsx)(f,{})}),Object(l.jsx)(W.a,{path:"react-fortnite-shop",element:Object(l.jsx)(f,{})}),Object(l.jsx)(W.a,{path:"/sale",element:Object(l.jsx)(E,{})}),Object(l.jsx)(W.a,{path:"/feedback",element:Object(l.jsx)(k,{})}),Object(l.jsx)(W.a,{path:"*",element:Object(l.jsx)(S,{})})]})};var L=function(){return Object(l.jsx)(i.a,{children:Object(l.jsx)(Y,{})})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.92e3569c.chunk.js.map