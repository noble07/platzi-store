(self.webpackChunkplatzi_store=self.webpackChunkplatzi_store||[]).push([[982],{7876:(e,t,a)=>{"use strict";var o;a.d(t,{Z:()=>s}),e=a.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r=function(e){return{type:"ADD_TO_CART",payload:e}},n=function(e){return{type:"REMOVE_FROM_CART",payload:e}},l={addToCart:r,removeFromCart:n},c=l;const s=c;var d,i;(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(r,"addToCart","/home/juan/Dev/platzi-store/src/actions/index.js"),d.register(n,"removeFromCart","/home/juan/Dev/platzi-store/src/actions/index.js"),d.register(l,"actions","/home/juan/Dev/platzi-store/src/actions/index.js"),d.register(c,"default","/home/juan/Dev/platzi-store/src/actions/index.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)},9982:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var o,r=a(7294),n=a(420),l=a(7876);e=a.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c=function(e){var t=e.cart;return r.createElement("div",{className:"Checkout"},r.createElement("div",{className:"Checkout-content"},t.length>0?r.createElement("h3",null,"Lista de Pedidos:"):r.createElement("h2",null,"Sin Pedidos"),t.map((function(t){return r.createElement("div",{className:"Checkout-item",key:t.title},r.createElement("div",{className:"Checkout-element"},r.createElement("h4",null,t.title),r.createElement("span",null,"$",t.price)),r.createElement("button",{type:"button",onClick:(a=t,function(){e.removeFromCart(a)})},r.createElement("i",{className:"fas fa-trash-alt"})));var a}))),t.length>0&&r.createElement("div",{className:"Checkout-sidebar"},r.createElement("h3",null,"Precio Total: $ ".concat(t.reduce((function(e,t){return e+t.price}),0)))))},s=function(e){return{cart:e.cart}},d={removeFromCart:l.Z.removeFromCart},i=(0,n.$j)(s,d)(c);const u=i;var m,p;(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(c,"Checkout","/home/juan/Dev/platzi-store/src/containers/Checkout.jsx"),m.register(s,"mapStateToProps","/home/juan/Dev/platzi-store/src/containers/Checkout.jsx"),m.register(d,"mapDispatchToProps","/home/juan/Dev/platzi-store/src/containers/Checkout.jsx"),m.register(i,"default","/home/juan/Dev/platzi-store/src/containers/Checkout.jsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}}]);