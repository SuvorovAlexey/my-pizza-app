(this["webpackJsonppizza-app"]=this["webpackJsonppizza-app"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={ItemMenu:"ItemMenu_ItemMenu__3pwzf",image:"ItemMenu_image__30WvW",spicy:"ItemMenu_spicy__2pJpS",skeletonImg:"ItemMenu_skeletonImg__3BQeb",skeletonDiv:"ItemMenu_skeletonDiv__TcpAi",blinker:"ItemMenu_blinker__2CjiL",skeletonButton:"ItemMenu_skeletonButton__1T5nV"}},,,,,,,,,function(e,t,n){e.exports={Menu:"Menu_Menu__3Mx9W",MenuLink:"Menu_MenuLink__2xAFW"}},function(e,t,n){e.exports={MenuWrapper:"MenuWrapper_MenuWrapper__of6dU",test:"MenuWrapper_test__1CAg2"}},function(e,t,n){e.exports={PopupDone:"PopupDone_PopupDone__3WNei",PopupContent:"PopupDone_PopupContent__1u-cC"}},,,,,,,function(e,t,n){e.exports=n.p+"static/media/1.c20a24ad.jpg"},function(e,t,n){e.exports=n.p+"static/media/2.b8eced65.jpg"},function(e,t,n){e.exports=n.p+"static/media/9.8ecf8c70.jpg"},function(e,t,n){e.exports=n.p+"static/media/8.73a2dad5.jpg"},function(e,t,n){e.exports=n.p+"static/media/3.9bcbff96.jpg"},function(e,t,n){e.exports=n.p+"static/media/5.f60eab94.jpg"},function(e,t,n){e.exports=n.p+"static/media/6.d978f221.jpg"},function(e,t,n){e.exports=n.p+"static/media/4.2645e78e.jpg"},function(e,t,n){e.exports=n.p+"static/media/7.9c4b0f03.jpg"},function(e,t,n){e.exports=n.p+"static/media/pizzamaker.29fbb410.png"},,function(e,t,n){e.exports=n(51)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),i=n.n(c),o=(n(41),n(9)),u=n(10),l=n(12),s=n(11),m=(n(42),n(15)),p=n.n(m),d=n(24),f=n(16),v=n.n(f),h=n(17),E=n.n(h),y=n(7),g=n.n(y),_=function(){return r.a.createElement("div",{className:g.a.ItemMenu},r.a.createElement("div",{className:g.a.skeletonImg},"  "),r.a.createElement("div",{className:g.a.skeletonDiv}," "),r.a.createElement("div",{className:g.a.skeletonDiv},"  "),r.a.createElement("button",{disabled:!0,className:g.a.skeletonButton},"Order"))},b=function(e){var t=[g.a.ItemMenu];return!0===e.menu.spicy&&t.push(g.a.spicy),r.a.createElement("div",{className:t.join(" ")},e.menu.image&&r.a.createElement("img",{className:g.a.image,src:e.menu.image}),r.a.createElement("p",null,e.menu.name),r.a.createElement("p",null,"price: ",e.menu.price," $"),r.a.createElement("button",{onClick:function(){e.orderHandler(e.menu)}},"Order"))},k=function(e){return r.a.createElement("div",{className:E.a.MenuWrapper},r.a.createElement("div",{className:E.a.test}),e.menu?e.menu.map((function(t,n){return r.a.createElement(b,{key:t.id,menu:t,orderHandler:e.orderHandler})})):Array(9).fill(1).map((function(e,t){return r.a.createElement(_,{key:t})})))},M=(n(44),function(e){var t=["discount"];return e.cart>10?t.push("greenlabel"):t.push("redlabel"),r.a.createElement("div",{className:"Cart"},"Your order:",r.a.createElement("p",null,"pizza amount: ",e.orderedItems),r.a.createElement("p",null,"pizza cost: ",e.cart.toFixed(1)," $"),r.a.createElement("p",null,"delivery: ",e.cart>10?0:e.delivery," $"),r.a.createElement("p",null,"total:  ",0===e.cart?0:e.delivery+e.cart>=10?e.cart.toFixed(1):(e.cart+e.delivery).toFixed(1)," $"),r.a.createElement("p",{className:t.join(" ")},"Free delivery for total orders > 10 $"),r.a.createElement("button",{onClick:function(){return e.ClearCart()}},"Clear cart"),0===e.cart?null:r.a.createElement("button",{onClick:function(){return e.showPopup()}},"Make order"))}),j=n(6),x=n(25),I=n.n(x),C=n(26),O=n.n(C),w=n(27),N=n.n(w),z=n(28),P=n.n(z),W=n(29),D=n.n(W),H=n(30),S=n.n(H),B=n(31),A=n.n(B),$=n(32),F=n.n($),L=n(33),T=n.n(L),J=function(){return new Promise((function(e,t){setTimeout((function(){e([{id:1,name:"Margarita",price:2.5,spicy:!1,image:I.a},{id:2,name:"Mexican",price:3.6,spicy:!0,image:O.a},{id:3,name:"4 cheese",price:2.9,spicy:!1,image:N.a},{id:4,name:"American",price:3.5,spicy:!0,image:P.a},{id:5,name:"Russian",price:2.8,spicy:!1,image:D.a},{id:6,name:"Italian",price:2.2,spicy:!1,image:S.a},{id:7,name:"Indian",price:2.1,spicy:!0,image:F.a},{id:8,name:"Seafood pizza",price:3.6,spicy:!1,image:A.a},{id:9,name:"Super spicy pizza",price:3.6,spicy:!0,image:T.a}])}),2e3)}))},G=n(18),Q=n.n(G),R=n(34),U=n.n(R),V=function(){return r.a.createElement("div",{className:Q.a.PopupContent},r.a.createElement("div",{className:Q.a.PopupDone},r.a.createElement("p",null,"Thank you for order!"),r.a.createElement("p",null,"We started to cook for you."),r.a.createElement(j.b,{to:"../"},"to main"),r.a.createElement("img",{src:U.a})))},Y=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={menu:null,cart:0,orderedItems:0,delivery:1.2,isOrdered:!1},e.orderHandler=function(t){e.setState((function(e){return{cart:e.cart+t.price,orderedItems:e.orderedItems+1}}))},e.ClearCartHandler=function(){e.setState({cart:0,delivery:1.2,orderedItems:0})},e.showPopup=function(){e.setState({isOrdered:!e.state.isOrdered})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:t=e.sent,this.setState({menu:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.menu;return r.a.createElement("div",{className:v.a.Menu},!0===this.state.isOrdered?r.a.createElement(V,null):null,r.a.createElement("h1",null,"Menu"),r.a.createElement(j.b,{to:"../",className:v.a.MenuLink},"Back to main"),r.a.createElement(M,{cart:this.state.cart,delivery:this.state.delivery,total:this.state.total,orderedItems:this.state.orderedItems,ClearCart:this.ClearCartHandler,showPopup:this.showPopup}),r.a.createElement(k,{menu:e,orderHandler:this.orderHandler}))}}]),n}(a.Component),q=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Layout"},r.a.createElement("main",null,"       ",this.props.children))}}]),n}(a.Component),K=n(1),X=(n(50),function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"StartPage"},r.a.createElement("h1",null,"Welcome to Tasty Pizza!"),r.a.createElement("p",null,"Please, click on the link bellow to go to the menu."),r.a.createElement(j.b,{to:"/menu"},"Go to menu!"))}}]),n}(a.Component));var Z=function(){return r.a.createElement(q,null,r.a.createElement(K.c,null,r.a.createElement(K.a,{path:"/menu",component:Y,exact:!0}),r.a.createElement(K.a,{path:"/",component:X,exact:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=r.a.createElement(j.a,null,r.a.createElement(Z,null));i.a.render(ee,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[36,1,2]]]);
//# sourceMappingURL=main.fb1a3a2a.chunk.js.map