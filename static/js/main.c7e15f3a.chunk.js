(this.webpackJsonpcontentdeveloperslive=this.webpackJsonpcontentdeveloperslive||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var i=n(14),a=n(0),r=n(22),c=n.n(r),s=(n(63),n(6)),o=n(11),d=n(110),l=n(111),u=n(112),b=n(20),j=n(27),m=n(53),h=n(57),v=n(113),p=n(48),O=n.n(p),g=n(50),x=n.n(g),C=n(51),w=n.n(C),S=(n(87),[{sku:"SHOES123",name:"Red canvas shoes",price:34.76,currencyCode:"USD"},{sku:"SHOES456",name:"Brown leather shoes",price:52.81,currencyCode:"USD"},{sku:"HAT567",name:"Wool Hat",price:25.15,currencyCode:"USD"},{sku:"HAT089",name:"Straw Hat",price:11.85,currencyCode:"USD"}]),y=[{rating:1,reviewText:"Rubbish"},{rating:2,reviewText:"Okay"},{rating:3,reviewText:"Good"},{rating:4,reviewText:"Great"},{rating:5,reviewText:"Fantastic!"}],f=function(e){return S.find((function(t){return t.sku===e}))};var k=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),p=Object(s.a)(c,2),g=p[0],C=p[1],k=Object(a.useState)(""),T=Object(s.a)(k,2),D=T[0],E=T[1],z=Object(a.useState)(""),H=Object(s.a)(z,2),I=H[0],R=H[1];return window.getProductListItems=Object(a.useCallback)((function(){var e=f(n);return e?[{quantity:1,currencyCode:e.currencyCode,SKU:e.sku,name:e.name,priceTotal:e.price}]:void 0}),[n]),window.getOrder=Object(a.useCallback)((function(){var e=f(n);return e?{currencyCode:e.currencyCode,priceTotal:e.price,payments:[{paymentAmount:e.price,paymentType:"Credit Card"}]}:void 0}),[n]),window.getReview=Object(a.useCallback)((function(){var e=f(n);return e?{productSku:e.sku,reviewerId:g,rating:parseInt(I,10),reviewText:D}:void 0}),[n,g,I,D]),Object(i.jsx)(o.a,{theme:d.a,colorScheme:"light",minHeight:"100vh",children:Object(i.jsxs)(l.a,{padding:"size-250",children:[Object(i.jsx)(u.a,{label:"Product",items:S,selectedKey:n,onSelectionChange:r,placeholder:"Select a product...",children:function(e){return Object(i.jsx)(b.a,{children:e.name},e.sku)}}),Object(i.jsx)(j.a,{level:"1",children:"XDM Commerce Example"}),Object(i.jsxs)(m.a,{direction:"column",alignItems:"flex-start",gap:"size-100",children:[Object(i.jsxs)(h.a,{id:"addToCartButton",variant:"primary",isDisabled:!n,children:[Object(i.jsx)(O.a,{marginEnd:"size-65"}),"Add to cart"]}),Object(i.jsxs)(h.a,{id:"purchaseButton",variant:"primary",isDisabled:!n,children:[Object(i.jsx)(w.a,{marginEnd:"size-65"}),"Purchase"]})]}),Object(i.jsx)(j.a,{level:"1",children:"XDM Product Review Example"}),Object(i.jsxs)(m.a,{direction:"column",alignItems:"flex-start",gap:"size-100",children:[Object(i.jsx)(v.b,{label:"Email Address",value:g,onChange:C,isDisabled:!n}),Object(i.jsx)(u.a,{label:"Rating",placeholder:"Select a rating...",items:y,selectedKey:I,onSelectionChange:R,isDisabled:!n,children:function(e){return Object(i.jsx)(b.a,{children:e.reviewText},e.rating)}}),Object(i.jsx)(v.a,{label:"Comment",value:D,onChange:E,isDisabled:!n,minWidth:"size-4600"}),Object(i.jsxs)(h.a,{id:"submitReviewButton",variant:"primary",isDisabled:!n||!g||!I,children:[Object(i.jsx)(x.a,{marginEnd:"size-65"}),"Submit Review"]})]})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,114)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};c.a.render(Object(i.jsx)(k,{}),document.getElementById("root")),T()},63:function(e,t,n){},73:function(e,t){},87:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.c7e15f3a.chunk.js.map