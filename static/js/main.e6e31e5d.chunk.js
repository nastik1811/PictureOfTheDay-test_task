(this["webpackJsonpapod-cat"]=this["webpackJsonpapod-cat"]||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=(a(25),a(2)),i=function(e,t,a){return e+"-"+t+"-"+a},u=function(e){var t=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var n=e.getDate();return i(t,a,n=n<10?"0"+n:n)},s=function(e,t){for(var a=[],n=function(e,t){var a=new Date;return e===a.getMonth()+1&&t===a.getFullYear()}(e,t)?(new Date).getDate():new Date(t,e,0).getDate();n>0;n--)a.push(i(t,e,n));return a},m=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"animation-container"},r.a.createElement("div",{className:"animation-group"},r.a.createElement("span",{className:"loader-component"}),r.a.createElement("span",{className:"loader-component"}),r.a.createElement("span",{className:"loader-component"}),r.a.createElement("span",{className:"loader-component"}))))},d=a(8),p=function(e){var t=e.imgUrl,a=e.title,n=e.description,c=e.hidden,l=e.onLoad;return r.a.createElement("div",{className:Object(d.a)("apod-container",{hidden:c})},r.a.createElement("header",null,r.a.createElement("h2",{className:"title"},a)),r.a.createElement("div",{className:"picture-container"},r.a.createElement("img",{src:t,alt:a,className:"picture",onLoad:l}),r.a.createElement("div",{className:"description-container"},r.a.createElement("p",null,n))))},f=["January","February","March","April","May","June","July","August","September","October","November","December"],E="1995",v="6",g="16",b=function(e){var t=e.date,a=e.onChange;return r.a.createElement("input",{name:"picker",className:"picker date-picker",type:"date",value:t,onChange:function(e){return a(e.target.value)},max:u(new Date),min:u(new Date(E,v,g))})},h=function(e){var t=e.message;return r.a.createElement("div",{className:"card"},r.a.createElement("span",null,t),r.a.createElement("span",{className:"error"}))},j=a(9),O=function(){var e=Object(n.useState)((function(){return window.localStorage.getItem("date")||u(new Date)})),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),i=Object(o.a)(l,2),s=i[0],d=i[1],f=Object(n.useState)(!0),E=Object(o.a)(f,2),v=E[0],g=E[1],O=Object(n.useState)(!0),k=Object(o.a)(O,2),w=k[0],N=k[1],S=Object(n.useState)(null),y=Object(o.a)(S,2),D=y[0],x=y[1];return Object(n.useEffect)((function(){return window.localStorage.setItem("date",a)}),[a]),Object(n.useEffect)((function(){g(!0),N(!0),x(null),fetch("https://api.nasa.gov/planetary/apod?api_key=".concat("nfnKxO4IpgdmkAVsGG0UvQ8SkbSXdmaFvKknIfjG","&date=").concat(a)).then((function(e){if(e.ok)return e.json();throw new Error("Invalid date.")})).then((function(e){if("image"!==e.media_type)throw new Error("Oops. The day has no image.");d(e)})).catch((function(e){x(e),N(!1)})).finally((function(){return g(!1)}))}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"section-header"},r.a.createElement("h1",{className:"section-title"},"Astronomy Picture of the Day"),r.a.createElement(j.b,{className:"nav-link",exact:!0,to:"/catalog"},"Go to catalog")),r.a.createElement("div",{className:"picker-container"},r.a.createElement(b,{date:a,onChange:c})),w&&r.a.createElement(m,null),!v&&!D&&r.a.createElement(p,{imgUrl:s.url,title:s.title,description:s.explanation,hidden:w,onLoad:function(){return N(!1)}}),D&&r.a.createElement(h,{message:D.message}))},k=a(1),w=a(14),N=a.n(w),S=a(19),y=function(e){var t=e.imgUrl,a=e.date,c=e.title,l=e.onClick,i=Object(n.useState)(!0),u=Object(o.a)(i,2),s=u[0],p=u[1];return r.a.createElement("div",{className:"preview",onClick:l},s&&r.a.createElement(m,null),r.a.createElement("img",{className:Object(d.a)("preview-img",{hidden:s}),src:t,alt:c,onLoad:function(){return p(!1)}}),r.a.createElement("span",{className:"preview-title"},c),r.a.createElement("span",{className:"preview-date"},a))},D=function(e){var t=e.apods,a=e.onClick;return r.a.createElement("div",{className:"apods-list"},t.map((function(e){return r.a.createElement(y,{imgUrl:e.url,title:e.title,date:e.date,key:e.date,onClick:function(){return a(e.date)}})})))},x=function(e){var t=e.onDismiss,a=e.children;return r.a.createElement("div",{className:"window",onClick:t},a)},I=function(e){var t=e.date,a=e.onDismiss,c=Object(n.useState)(null),l=Object(o.a)(c,2),i=l[0],u=l[1],s=Object(n.useState)(!0),p=Object(o.a)(s,2),f=p[0],E=p[1];return Object(n.useEffect)((function(){fetch("https://api.nasa.gov/planetary/apod?api_key=".concat("nfnKxO4IpgdmkAVsGG0UvQ8SkbSXdmaFvKknIfjG","&date=").concat(t,"&hd=true")).then((function(e){if(200===e.status)return e.json();throw Error()})).then(u).catch((function(){return alert("Something went wrong. Try to pick another date.")}))}),[t]),r.a.createElement(x,{onDismiss:a},f&&r.a.createElement(m,null),i&&r.a.createElement("img",{src:i.hdurl,alt:i.title,className:Object(d.a)("modal-image",{hidden:f},{appearing:!f}),onLoad:function(){return E(!1)}}))},C=function(e){var t=e.value,a=e.onSelect,n=e.lastEnabled;return r.a.createElement("select",{value:t,onChange:function(e){return a(e.target.value)},className:"picker"},f.map((function(e){return r.a.createElement("option",{value:f.indexOf(e)+1,key:e,disabled:f.indexOf(e)+1>n},e)})))},F=function(e){var t=e.value,a=e.onSelect,n=function(e,t){for(var a=[],n=e;n<=t;n++)a.push(n);return a}(E,(new Date).getFullYear());return r.a.createElement("select",{value:t,onChange:function(e){return a(+e.target.value)},className:"picker"},n.map((function(e){return r.a.createElement("option",{value:e,key:e},e)})))},G=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),i=Object(o.a)(l,2),u=i[0],d=i[1],p=Object(n.useState)((function(){return window.localStorage.getItem("month")||(new Date).getMonth()+1})),f=Object(o.a)(p,2),E=f[0],v=f[1],g=Object(n.useState)((function(){return window.localStorage.getItem("year")||(new Date).getFullYear()})),b=Object(o.a)(g,2),h=b[0],O=b[1],k=Object(n.useState)(12),w=Object(o.a)(k,2),y=w[0],x=w[1],G=Object(n.useState)(null),A=Object(o.a)(G,2),M=A[0],U=A[1],K=Object(n.useState)(!1),J=Object(o.a)(K,2),L=J[0],Y=J[1];Object(n.useEffect)((function(){h===(new Date).getFullYear()?x((new Date).getMonth()+1):x(12);var e=s(E,h).map(function(){var e=Object(S.a)(N.a.mark((function e(t){var a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat("nfnKxO4IpgdmkAVsGG0UvQ8SkbSXdmaFvKknIfjG","&date=").concat(t));case 2:if(200===(a=e.sent).status){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,a.json();case 7:if(n=e.sent,n.url.match(/\.(gif|jpe?g|png)$/)){e.next=10;break}return e.abrupt("return",null);case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());Promise.all(e).then((function(e){return c(e.filter((function(e){return!!e})))})).then((function(){return d(!1)}))}),[E,h]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"section-header"},r.a.createElement("h1",{className:"section-title"},"APoD catalog"),r.a.createElement(j.b,{className:"nav-link",exact:!0,to:"/"},"Return to apod")),r.a.createElement("div",{className:"picker-container"},r.a.createElement(C,{value:E,onSelect:v,lastEnabled:y}),r.a.createElement(F,{value:h,onSelect:O})),u?r.a.createElement(m,null):r.a.createElement(D,{apods:a,onClick:function(e){U(e),Y(!0)}}),L&&r.a.createElement(I,{date:M,onDismiss:function(){return Y(!1)}}))},A=function(){return r.a.createElement(j.a,{basename:"/"},r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"main-section"},r.a.createElement(k.c,null,r.a.createElement(k.a,{path:"/catalog",component:G}),r.a.createElement(k.a,{exact:!0,path:"/",component:O})))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.e6e31e5d.chunk.js.map