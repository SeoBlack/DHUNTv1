(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(78),n=a(18),r=a(4),i=a(47),l=a(22),j=a(51),o=a(55),b=a(1);var d=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("img",{className:"d-block w-100 carousel-img",src:e.src,alt:"First slide"})})};var m=function(e){return Object(b.jsx)(o.a,{fade:!0,className:"carousel",children:e.images.map((function(e){return Object(b.jsx)(o.a.Item,{className:"carousel-item",children:Object(b.jsx)(d,{src:e})})}))})},h=a(12),O=a(76),x=a.n(O);var f=function(e){return Object(b.jsxs)(h.a,{className:"glass small-card ",children:[Object(b.jsx)(h.a.Img,{className:"card-img",variant:"top",src:e.game.thumb}),Object(b.jsxs)(h.a.Body,{children:[Object(b.jsxs)(h.a.Title,{children:[" ",Object(b.jsx)(n.b,{className:"card-title",to:"/info/"+e.game.gameID,children:e.game.title.length>20?e.game.title.slice(0,17)+"...":e.game.title})," "]}),Object(b.jsxs)(h.a.Text,{style:{display:"flex",justifyContent:"space-between"},children:[e.game.storeName,Object(b.jsx)(x.a,{className:"add-wishlist"})]}),Object(b.jsxs)(l.a,{className:"smallcard-footer",children:[Object(b.jsx)("p",{className:"price",children:e.game.normalPrice}),Object(b.jsx)("button",{className:"custom-btn",onClick:function(){window.location.href="https://www.cheapshark.com/redirect?dealID="+e.game.dealID},children:0===e.game.salePrice?"Free":"$"+e.game.salePrice})]})]})]})},u=a(17);var g=function(e){return Object(b.jsx)(u.a.Check,{className:"sidebar-options",type:"radio",name:e.name,label:e.label,value:e.value})};var p=function(){return Object(b.jsx)(h.a,{className:" glass",children:Object(b.jsx)(h.a.Body,{className:"sidebar",children:Object(b.jsxs)(u.a,{action:"/",className:"sidebar-form",children:[Object(b.jsxs)(l.a,{className:"stores-container",children:[Object(b.jsx)("p",{className:"sections-heading",children:"Sort"}),Object(b.jsx)(g,{name:"sort",label:"Cheapest First",value:"Cheapest"}),Object(b.jsx)(g,{name:"sort",label:"Expensive First",value:"Expensive"}),Object(b.jsx)(g,{name:"sort",label:"New First",value:"Newly"}),Object(b.jsx)(g,{name:"sort",label:"Old First",value:"Old"}),Object(b.jsx)(g,{name:"sort",label:"Most Rating",value:"Rating"}),Object(b.jsx)(g,{name:"sort",label:"A-z",value:"Alpha"})]}),Object(b.jsx)(l.a,{children:Object(b.jsx)("button",{className:"custom-btn",children:"Apply Filters"})})]})})})},N=a(80),w=a.n(N),v=a(82),I=a.n(v),S=a(81),D=a.n(S),k=a(83),y=a.n(k);var T=function(){return Object(b.jsxs)(l.a,{className:"footer",children:[Object(b.jsx)("a",{className:"footer-item",href:"https://www.instagram.com/sorin.nadum/",children:Object(b.jsx)(w.a,{color:"#9a9a9a",fontSize:"large"})}),Object(b.jsx)("a",{className:"footer-item",href:"https://www.youtube.com/channel/UCTxPGF9lj73I1Tg6XH62CLA",children:Object(b.jsx)(D.a,{color:"#9a9a9a",fontSize:"large"})}),Object(b.jsx)("a",{className:"footer-item",href:"https://github.com/SeoBlack",children:Object(b.jsx)(I.a,{color:"#9a9a9a",fontSize:"large"})}),Object(b.jsx)("a",{className:"footer-item",href:"https://www.facebook.com/seo.black12",children:Object(b.jsx)(y.a,{color:"#9a9a9a",fontSize:"large"})})]})};var F=function(e){e.token;var t=Object(c.useState)(window.innerWidth<991),a=Object(r.a)(t,2),s=a[0],o=a[1];window.addEventListener("resize",(function(){window.innerWidth<767?o(!0):o(!1)}));var d=Object(n.c)(),h=Object(r.a)(d,2),O=h[0],x=(h[1],O.get("sort")),u=Object(c.useState)([]),g=Object(r.a)(u,2),N=g[0],w=g[1],v=Object(c.useState)([]),I=Object(r.a)(v,2),S=I[0],D=I[1];return Object(c.useEffect)((function(){fetch("https://sorin-blog.onrender.com/api/?"+new URLSearchParams({sort:x})).then((function(e){return e.json()})).then((function(e){return w(e)})),fetch("https://sorin-blog.onrender.com/api/covers").then((function(e){return e.json()})).then((function(e){return D(e)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(i.a,{sm:12,md:4,lg:3,children:[Object(b.jsx)(p,{}),!s&&Object(b.jsx)(T,{})]}),Object(b.jsx)(i.a,{lg:9,md:8,sm:12,children:Object(b.jsxs)(l.a,{className:"content overflow-auto scroll-bar p-0",children:[Object(b.jsx)(j.a,{className:"g-4",children:Object(b.jsx)(i.a,{children:Object(b.jsx)(m,{images:S})})}),Object(b.jsxs)(j.a,{className:"cards-container g-4",children:[N.map((function(e){return Object(b.jsx)(i.a,{lg:3,md:6,sm:12,className:"card-container",children:Object(b.jsx)(f,{game:e})},e._id)})),s&&Object(b.jsx)(T,{})]})]})})]})},C=a(14);var R=function(e){var t,a=Object(c.useState)({}),s=Object(r.a)(a,2),n=s[0],o=s[1],d=Math.min.apply(Math,Object(C.a)(e.gameInfo.deals.map((function(e){return e.price}))));return Object(c.useEffect)((function(){e.gameInfo.deals.filter((function(e){e.price===d&&o(e)}))}),[]),Object(b.jsx)(h.a,{className:"glass ",children:Object(b.jsxs)(j.a,{className:"details-container",lg:12,sm:12,children:[Object(b.jsx)(i.a,{lg:4,md:12,children:Object(b.jsx)(h.a.Img,{className:"card-img-left",src:e.gameInfo.thumb})}),Object(b.jsxs)(i.a,{lg:8,md:12,className:"card-body-right",children:[Object(b.jsxs)(l.a,{className:"info-text",children:[Object(b.jsx)(h.a.Title,{children:e.gameInfo.title}),Object(b.jsx)(h.a.Text,{style:{color:"white"},children:"Details:"}),e.gameInfo.publishers.length>0&&Object(b.jsxs)(h.a.Text,{children:["Publisher: ",e.gameInfo.publishers.toString()]}),e.gameInfo.releaseDate>0&&Object(b.jsxs)(h.a.Text,{children:["Released: ",(t=e.gameInfo.releaseDate,0===t?"No Detail":new Date(1e3*t).toDateString().split(" ").slice(1).toString())]}),e.gameInfo.ageLimit>0&&Object(b.jsxs)(h.a.Text,{children:[" AgeLimit: ","+"+e.gameInfo.ageLimit]}),null!=e.gameInfo.steamRatingText&&Object(b.jsxs)(h.a.Text,{children:[" Reviews: ",e.gameInfo.steamRatingText]}),e.gameInfo.steamRatingCount>0&&Object(b.jsxs)(h.a.Text,{children:[" Recommendations: ",e.gameInfo.steamRatingCount]})]}),Object(b.jsxs)(l.a,{className:"smallcard-footer",children:[Object(b.jsx)("p",{className:"price",children:"$"+e.gameInfo.normalPrice}),Object(b.jsx)("button",{onClick:function(){window.location.href="https://www.cheapshark.com/redirect?dealID="+n.dealID},className:"custom-btn",children:0===n.price?"Free":"$"+n.price})]})]})]})})};var B=function(e){return Object(b.jsx)(h.a,{className:"deal-card",children:Object(b.jsxs)(h.a.Body,{className:"deal-card-body",children:[Object(b.jsxs)("div",{className:"store-info",children:[Object(b.jsx)("img",{className:"store-icon",src:"https://www.cheapshark.com/"+e.dealInfo.storeInfo.icon}),Object(b.jsx)("p",{children:e.dealInfo.storeInfo.storeName})]}),Object(b.jsx)("button",{className:"custom-btn",onClick:function(){window.location.href="https://www.cheapshark.com/redirect?dealID="+e.dealInfo.dealID},children:0===e.dealInfo.price?"Free":"$"+e.dealInfo.price})]})})},L=a(7);var E=function(e){return Object(b.jsxs)(l.a,{className:"glass deals-container h-100 scroll-bar",children:[Object(b.jsx)(h.a.Title,{children:"Deals"}),e.gameInfo.deals.map((function(t){if(t.price<e.gameInfo.normalPrice)return Object(b.jsx)(B,{dealInfo:t},t._id)}))]})};var P=function(e){return Object(b.jsx)(h.a,{className:"description-card glass",children:Object(b.jsx)(h.a.Body,{children:Object(b.jsx)(h.a.Text,{children:e.gameDescription})})})};var z=function(){var e=Object(c.useState)(window.innerWidth<991),t=Object(r.a)(e,2),a=t[0],s=t[1];window.addEventListener("resize",(function(){window.innerWidth<991?s(!0):s(!1)}));var n=Object(L.p)().id,o=Object(c.useState)({}),d=Object(r.a)(o,2),h=d[0],O=d[1],x=Object(c.useState)(!0),f=Object(r.a)(x,2),u=f[0],g=f[1];if(Object(c.useEffect)((function(){fetch("https://sorin-blog.onrender.com/api/info/"+n).then((function(e){return e.json()})).then((function(e){O(e)})).then((function(){g(!1)}))}),[]),!1===u&&h.deals)return Object(b.jsxs)(b.Fragment,{children:[!a&&Object(b.jsxs)(i.a,{sm:12,md:4,lg:3,children:[Object(b.jsx)(p,{}),Object(b.jsx)(T,{})]}),Object(b.jsx)(i.a,{children:Object(b.jsxs)(l.a,{className:"info-container scroll-bar",children:[Object(b.jsx)(j.a,{children:Object(b.jsx)(R,{gameInfo:h})}),h.gameDescription&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:"sections-heading text-center p-0 m-0",children:"Game Description"}),Object(b.jsx)(j.a,{children:Object(b.jsx)(P,{gameDescription:h.gameDescription})})]}),h.screenShots.length>0&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:"sections-heading text-center p-0 m-0",children:"Game Show"}),Object(b.jsx)(j.a,{children:Object(b.jsx)(m,{images:h.screenShots})})]}),Object(b.jsx)("p",{className:"sections-heading text-center p-0 m-0",children:"Best Deals"}),Object(b.jsx)(j.a,{children:Object(b.jsx)(E,{gameInfo:h})}),a&&Object(b.jsx)(T,{})]})})]})},A=a(60),M=a(59);var W=function(){return Object(b.jsxs)(M.a,{collapseOnSelect:!0,expand:"lg",style:{backgroundColor:"transparent"},variant:"dark",children:[Object(b.jsx)(M.a.Brand,{href:"#home",children:"DHUNT"}),Object(b.jsx)(M.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsxs)(M.a.Collapse,{id:"responsive-navbar-nav",children:[Object(b.jsxs)(A.a,{className:"me-auto",children:[Object(b.jsx)(A.a.Link,{href:"/",children:"Home"}),Object(b.jsx)(A.a.Link,{href:"https://github.com/SeoBlack",children:"About"})]}),Object(b.jsx)(A.a,{})]})]})};a(10),a(16);function $(){return Object(b.jsxs)(l.a,{fluid:!0,className:"home-container",children:[Object(b.jsx)(j.a,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(W,{})})}),Object(b.jsx)(j.a,{className:"g-4 main-container",children:Object(b.jsxs)(L.d,{children:[Object(b.jsx)(L.b,{path:"/",element:Object(b.jsx)(F,{})}),Object(b.jsx)(L.b,{path:"/info/:id",element:Object(b.jsx)(z,{})})]})})]})}var G=document.getElementById("root");Object(s.createRoot)(G).render(Object(b.jsx)(c.StrictMode,{children:Object(b.jsx)(n.a,{children:Object(b.jsx)($,{})})}))}},[[102,1,2]]]);
//# sourceMappingURL=main.040ca8b7.chunk.js.map