(function(e){function t(t){for(var s,i,o=t[0],l=t[1],c=t[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},n={app:0},r=[];function i(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7f03a7ab"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,s){a=n[e]=[t,s]}));t.push(a[2]=s);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e);var c=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=n[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",c.name="ChunkLoadError",c.type=s,c.request=r,a[1](c)}n[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"16db":function(e,t,a){e.exports=a.p+"img/leave.a391015f.svg"},3309:function(e,t){e.exports="data:image/png;base64,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"},"8fdb":function(e,t,a){},9683:function(e,t,a){"use strict";a("8fdb")},c5fa:function(e,t,a){"use strict";a("f0ab")},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"max-w-full h-screen max-h-screen min-h-screen bg-gray-200",attrs:{id:"app"}},[a("nav-bar"),a("div",{staticClass:"flex flex-row h-5/6 bg-gray-100"},[a("side-bar",{staticClass:"w-16 flex-none"}),a("main",{staticClass:"block flex-grow"},[a("router-view")],1)],1),e._m(0),a("toast")],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"p-3 border-t flex flex-row justify-between border-gray-500 w-full"},[a("span",[e._v("Copyright © Cloudenly Limited. All Rights Reserved.")]),a("span",[e._v("Powered by Scelloo Limited.")])])}],i=a("d4ec"),o=a("262e"),l=a("2caf"),c=a("9ab4"),u=a("1b40"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"flex flex-row justify-between border border-gray-200 py-2 px-4 w-full bg-white"},[a("MenuIcon"),a("div",{staticClass:"relative w-3/6 block text-gray-600 focus-within:text-gray-400"},[a("span",{staticClass:"absolute inset-y-0 left-0 flex items-center pl-2"},[a("MagnifyIcon")],1),a("input",{staticClass:"w-full py-2 text-sm text-white bg-gray-100 rounded-md pl-10 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{type:"search",name:"q",placeholder:"Search...",autocomplete:""}})]),a("span",{staticClass:"flex flex-row"},[a("button",{staticClass:"mr-6 bg-transparent w-36 h-8 text-gray-300 font-semibol py-auto px-4 border border-gray-300 hover:border-transparent rounded-lg"},[e._v(" Scelloo ")]),a("BellOutlineIcon",{staticClass:"m-1 text-gray-500",attrs:{size:"32"}}),a("CogOutlineIcon",{staticClass:"my-1 mx-3 text-gray-500",attrs:{size:"32"}}),a("AppsIcon",{staticClass:"my-1 text-gray-500",attrs:{size:"32"}}),e._m(0)],1)],1)},p=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"w-10 h-10 relative ml-4"},[s("div",{staticClass:"group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer"},[s("img",{staticClass:"object-cover object-center w-full h-full visible group-hover:hidden",attrs:{src:a("3309")}})])])}],f=a("8aa8"),b=a("bbc4"),v=a("756e"),h=a("0a59"),m=a("17de"),g=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return a}(u["d"]);g=Object(c["a"])([Object(u["a"])({components:{MenuIcon:f["a"],MagnifyIcon:b["a"],BellOutlineIcon:v["a"],CogOutlineIcon:h["a"],AppsIcon:m["a"]}})],g);var y=g,x=y,j=a("2877"),w=Object(j["a"])(x,d,p,!1,null,null,null),O=w.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"flex flex-col py-4 items-center  bg-blue-600 shadow-md"},e._l(e.routes,(function(e,t){return a("router-link",{key:t,staticClass:"my-auto w-full flex justify-center",attrs:{"active-class":"bg-blue-800 ",to:e.to}},[a("span",{staticClass:"mdi font-extralight  text-gray-100 text-3xl",class:[e.icon]})])})),1)},k=[],D=a("771d"),A=a("eedf"),q=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.routes=[{icon:"mdi-view-dashboard-outline",to:"/overview"},{icon:"mdi-account-multiple-plus",to:"/add"},{icon:"mdi-cash-multiple",to:"payment"},{icon:"mdi-bank-minus",to:"/"},{icon:"mdi-calendar-check-outline",to:"/calendar"},{icon:"mdi-handshake",to:"/deal"},{icon:"mdi-database",to:"/data"},{icon:"mdi-calendar-clock",to:"/clock"},{icon:"mdi-cog-outline",to:"/settings"}],e}return a}(u["d"]);q=Object(c["a"])([Object(u["a"])({components:{DashboardOutlineIcon:D["a"],AccountMultiplePlusOutlineIcon:A["a"]}})],q);var _=q,R=_,E=Object(j["a"])(R,C,k,!1,null,null,null),P=E.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"justify-center fixed right-3 top-3 z-20 ",class:e.visibility},[a("div",{staticClass:"w-full px-6 py-3 shadow-2xl flex flex-col items-center border-t sm:w-auto sm:m-4 sm:rounded-lg sm:flex-row sm:border text-white",class:e.colorClasses},[a("div",[e._v(e._s(e.msg))]),a("div",{staticClass:"flex mt-2 sm:mt-0 sm:ml-4"},[a("button",{staticClass:"px-3 py-2 hover:bg-blue-700 transition ease-in-out duration-300",on:{click:function(t){e.show=!1}}})])])])},I=[],B=a("bee2"),S=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.show=!1,e.msg="",e.color="",e}return Object(B["a"])(a,[{key:"visibility",get:function(){return this.show?["flex"]:["hidden"]}},{key:"colorClasses",get:function(){return["bg-".concat(this.color),"border-".concat(this.color)]}},{key:"toast",value:function(e){var t=this,a=e.msg,s=e.color;this.msg=a,this.color=s||this.color,this.show=!0,setTimeout((function(){t.reset()}),5e3),console.log("called")}},{key:"reset",value:function(){this.show=!1,this.msg="",this.color="blue-600"}},{key:"created",value:function(){this.reset(),window.toast=this.toast}}]),a}(u["d"]);S=Object(c["a"])([u["a"]],S);var L=S,Q=L,M=Object(j["a"])(Q,T,I,!1,null,null,null),N=M.exports,U=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return a}(u["d"]);U=Object(c["a"])([Object(u["a"])({components:{NavBar:O,SideBar:P,Toast:N}})],U);var Z=U,J=Z,K=(a("c5fa"),Object(j["a"])(J,n,r,!1,null,"2e32bdc0",null)),V=K.exports,H=a("2f62"),G=a("2909"),X=a("1da1"),Y=(a("96cf"),a("d3b7"),a("99af"),a("c740"),a("a434"),a("6fc5")),z=" https://scelloo.herokuapp.com",W=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.leaveRequests=[],e}return Object(B["a"])(a,[{key:"fetchRequests",value:function(){var e=Object(X["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(z,"/leaves/all")).then((function(e){return e.json()}));case 2:t=e.sent,a=t.data.requests,this.context.commit("setRequests",a);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"setRequests",value:function(e){this.leaveRequests=Object(G["a"])(e)}},{key:"addRequest",value:function(e){this.leaveRequests=[].concat(Object(G["a"])(this.leaveRequests),[e])}},{key:"update",value:function(e){var t=Object(G["a"])(this.leaveRequests),a=t.findIndex((function(t){return t.id=e.id}));t.splice(a,1),this.leaveRequests=[].concat(Object(G["a"])(t),[e])}}]),a}(Y["d"]);Object(c["a"])([Y["a"]],W.prototype,"fetchRequests",null),Object(c["a"])([Y["c"]],W.prototype,"setRequests",null),Object(c["a"])([Y["c"]],W.prototype,"addRequest",null),Object(c["a"])([Y["c"]],W.prototype,"update",null),W=Object(c["a"])([Object(Y["b"])({namespaced:!0})],W);var F=W;s["a"].use(H["a"]);var $=new H["a"].Store({});$.registerModule("leaveRequests",F);var ee=$,te=(a("b972"),a("3ca3"),a("ddb0"),a("8c4f")),ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"p-8 relative"},[a("span",{staticClass:"flex flex-row justify-between pb-3"},[e.hasHistory?a("span",{staticClass:"text-xl font-semibold"},[e._v("Abscence History")]):a("span",{staticClass:"text-xl font-semibold"},[e._v("Leave")]),a("button",{staticClass:"bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg",on:{click:function(t){e.show=!0}}},[e._v(" New Request ")])]),e.hasHistory?a("abscence-history"):a("no-leave"),a("new-leave",{attrs:{visible:e.show},on:{"update:visible":function(t){e.show=t}}})],1)},se=[],ne=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},re=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"w-100 h-80 flex bg-white flex-row justify-center items-center"},[s("div",{staticClass:"flex flex-col"},[s("img",{staticClass:"h-44",attrs:{src:a("16db")}}),s("span",{staticClass:"block pt-5 w-8/12 mx-auto text-center"},[e._v(" You have not made any Leave request. Click on the New Request button to make a leave request ")])])])}],ie=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return a}(u["d"]);ie=Object(c["a"])([u["a"]],ie);var oe=ie,le=oe,ce=Object(j["a"])(le,ne,re,!1,null,null,null),ue=ce.exports,de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("modal",{staticClass:"bg-white block w-full h-full",attrs:{visible:e.show},on:{"update:visible":function(t){e.show=t}}},[a("div",{staticClass:"flex justify-between items-center p-3 w-full"},[a("span",{staticClass:"font-semibold text-lg block"},[e._v(" Request leave ")]),a("span",{staticClass:"text-white bg-blue-400 w-20 h-20 flex flex-col rounded-full justify-center items-center"},[a("span",{staticClass:"font-bold text-2xl mb-0 leading-3"},[e._v(" "+e._s(e.selectedLeaveBalance)+" ")]),a("span",{staticClass:"mt-1 text-xs block text-center"},[e._v("days left")])])]),a("form",{staticClass:"p-3 w-full flex flex-col",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("div",{staticClass:"grid grid-cols-2 gap-x-4 gap-y-4"},[a("v-select",{attrs:{required:"",label:"Leave type",items:e.leaveTypes},model:{value:e.leaveType,callback:function(t){e.leaveType=t},expression:"leaveType"}}),a("v-input",{attrs:{required:"",label:"Details"},model:{value:e.details,callback:function(t){e.details=t},expression:"details"}}),a("div",{staticClass:"flex flex-col"},[a("span",{staticClass:"flex flex-row items-center justify-between w-full"},[a("v-input",{staticClass:"w-2/4",attrs:{required:"",label:"Duration",type:"date",error:e.dateError},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}}),a("span",{staticClass:"block py-auto mt-4"},[e._v("To")]),a("v-input",{staticClass:"w-2/4 mt-5",attrs:{required:"",error:e.dateError,type:"date"},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1),e.dateError?a("span",{staticClass:"text-xs text-red-700"},[e._v(" "+e._s(e.dateError)+" ")]):e._e()]),a("span",{staticClass:"flex flex-col ml-5"},[a("span",{staticClass:"text-gray-700 text-sm mb-2"},[e._v("Days Requested")]),a("span",{staticClass:"font-bold text-lg"},[e._v(e._s(e.duration))])]),a("v-select",{attrs:{required:"",items:e.allowanceChoices,label:"Leave Allowance"},model:{value:e.allowance,callback:function(t){e.allowance=t},expression:"allowance"}}),a("span",{},[a("v-input",{attrs:{required:"",icon:"mdi-magnify",label:"Delegatee",error:e.delegateeError},model:{value:e.delegatee,callback:function(t){e.delegatee=t},expression:"delegatee"}}),a("div",{staticClass:"flex flex-col max-h-16 overflow-y-auto bg-white rounded-md mt-2 mx-3 px-3 py-2 border-2 border-gray-200",class:{hidden:e.delegatees.length<1}},e._l(e.delegatees,(function(t,s){return a("delegatee",{key:s,attrs:{delegatee:t},on:{chosen:function(a){e.delegatee=t.name}}})})),1)],1)],1),a("span",{staticClass:"text-sm px-3 pt-9"},[e._v(" By Submitting, You confirm that you have read and agreed to the terms and conditions of the Leave requests. Click "),a("a",{staticClass:"no-underline text-blue-500",attrs:{href:"#"}},[e._v(" here ")]),e._v(" to read. ")]),a("button",{staticClass:"mt-4 w-28 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg",attrs:{disabled:e.submitting,type:"submit"}},[e._v(" Save ")])])])},pe=[],fe=(a("7db0"),a("b0c0"),a("d81d"),a("07ac"),a("4de4"),a("caad"),a("2532"),a("159b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-500 bg-opacity-50",class:e.classes},[a("div",e._b({staticClass:"bg-gray-50 rounded-lg w-1/2 opacity-100"},"div",e.$attrs,!1),[a("div",{staticClass:"flex flex-col items-start p-1"},[a("div",{staticClass:"flex items-center w-full justify-between"},[a("div",{},[e._t("title")],2),a("span",{staticClass:"mdi mdi-close text-xl cursor-pointer",on:{click:function(t){e.show=!1}}})]),a("hr"),a("div",{staticClass:"w-full h-full"},[e._t("default")],2)])])])}),be=[],ve=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return Object(B["a"])(a,[{key:"classes",get:function(){return this.show?["flex"]:["hidden"]}}]),a}(u["d"]);Object(c["a"])([Object(u["b"])({type:Boolean,required:!0,default:!1})],ve.prototype,"visible",void 0),Object(c["a"])([Object(u["c"])("visible",{type:Boolean,required:!0,default:!1})],ve.prototype,"show",void 0),ve=Object(c["a"])([Object(u["a"])({inheritAttrs:!1})],ve);var he=ve,me=he,ge=Object(j["a"])(me,fe,be,!1,null,null,null),ye=ge.exports,xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-full px-3"},[a("label",{staticClass:"block  tracking-wide text-gray-700 text-sm mb-2",attrs:{for:"grid-state"}},[e._v(" "+e._s(e.label)+" ")]),a("div",{staticClass:"relative"},[a("select",{staticClass:"block appearance-none w-full bg-transparent border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{id:"grid-state"},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}},e._l(e.keyedItems,(function(t,s){return a("option",{key:s,staticClass:"capitalize",domProps:{value:t.value}},[e._v(" "+e._s(t.text)+" ")])})),0),a("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[a("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[a("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])])},je=[],we=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return Object(B["a"])(a,[{key:"keyedItems",get:function(){return this.items.map((function(e){return"string"==typeof e?{value:e,text:e}:e}))}}]),a}(u["d"]);Object(c["a"])([Object(u["b"])({type:String,required:!1,default:""})],we.prototype,"label",void 0),Object(c["a"])([Object(u["b"])({type:Array,required:!1,default:["No items"]})],we.prototype,"items",void 0),Object(c["a"])([Object(u["b"])({required:!1})],we.prototype,"value",void 0),we=Object(c["a"])([u["a"]],we);var Oe=we,Ce=Oe,ke=Object(j["a"])(Ce,xe,je,!1,null,null,null),De=ke.exports,Ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"px-3"},[a("label",{staticClass:"block tracking-wide text-gray-700 text-sm mb-2",attrs:{for:"text-field"}},[e._v(" "+e._s(e.label)+" ")]),a("div",{staticClass:"relative"},[e.icon?a("div",{staticClass:"pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700"},[a("span",{staticClass:"mdi mr-4 font-extralight text-black",class:[e.icon]})]):e._e(),a("input",e._b({staticClass:"block appearance-none  w-full bg-transparent border  text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500",class:{"pl-8":Boolean(e.icon),"border-red-600":e.error,"border-gray-200":!e.error},attrs:{id:"text-field"},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}},"input",e.$attrs,!1))])])},qe=[],_e=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return a}(u["d"]);Object(c["a"])([Object(u["b"])({type:String,required:!1,default:""})],_e.prototype,"label",void 0),Object(c["a"])([Object(u["b"])({type:String,required:!1,default:""})],_e.prototype,"error",void 0),Object(c["a"])([Object(u["b"])({type:String,required:!1,default:""})],_e.prototype,"icon",void 0),Object(c["a"])([Object(u["b"])({required:!1})],_e.prototype,"value",void 0),_e=Object(c["a"])([Object(u["a"])({inheritAttrs:!1})],_e);var Re=_e,Ee=Re,Pe=Object(j["a"])(Ee,Ae,qe,!1,null,null,null),Te=Pe.exports,Ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-row px-3 divide-y-2 divide-solid cursor-pointer",on:{click:function(t){return e.$emit("chosen")}}},[e._m(0),a("div",{staticClass:"text-xs ml-2 text-center my-1"},[a("span",{staticClass:"block mx-auto"},[e._v(e._s(e.delegatee.name))]),a("span",{staticClass:"block mx-auto"},[e._v(e._s(e.delegatee.email))])])])},Be=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"group h-9 w-9  rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer"},[s("img",{staticClass:"object-cover object-center w-full h-full visible group-hover:hidden",attrs:{src:a("3309")}})])}],Se=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return a}(u["d"]);Object(c["a"])([Object(u["b"])({type:Object,required:!0})],Se.prototype,"delegatee",void 0),Se=Object(c["a"])([u["a"]],Se);var Le,Qe=Se,Me=Qe,Ne=Object(j["a"])(Me,Ie,Be,!1,null,null,null),Ue=Ne.exports;(function(e){e["ANNUAL"]="annual",e["UNPAID"]="unpaid",e["STUDY"]="study",e["COMPASSIONATE"]="compassionate"})(Le||(Le={}));var Ze=Le,Je={daysBetweenDates:function(e,t){var a=t.getTime()-e.getTime();return a/864e5}},Ke=a("4bb5"),Ve=Object(Ke["a"])("leaveRequests"),He=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.submitting=!1,e.allowanceChoices=[{value:!0,text:"yes"},{value:!1,text:"no"}],e.leaveBalances={},e.defaultDelegatees=[],e.dateError="",e.delegateeError="",e.leaveType="",e.startDate="",e.endDate="",e.delegatee="",e.details="",e.allowance=!1,e}return Object(B["a"])(a,[{key:"delagateeId",get:function(){var e,t=this;return null===(e=this.defaultDelegatees.find((function(e){return e.name==t.delegatee})))||void 0===e?void 0:e.id}},{key:"leaveTypes",get:function(){return Object.values(Ze).map((function(e){var t="".concat(e," leave");return{text:t,value:e}}))}},{key:"selectedLeaveBalance",get:function(){return this.leaveType?this.leaveBalances[this.leaveType]:0}},{key:"delegatees",get:function(){var e=this;return this.delegatee?this.defaultDelegatees.filter((function(t){return t.name.toLowerCase().includes(e.delegatee.toLowerCase())})):[]}},{key:"duration",get:function(){return this.validateDate()?Je.daysBetweenDates(new Date(this.startDate),new Date(this.endDate)):0}},{key:"payload",get:function(){return{leaveType:this.leaveType,delegateeId:this.delagateeId,details:this.details,allowance:this.allowance,startDate:new Date(this.startDate).toLocaleDateString("en-ZA"),endDate:new Date(this.endDate).toLocaleDateString("en-ZA")}}},{key:"validateForm",value:function(){var e=this;return this.delagateeId||(this.delegateeError="invalid"),setTimeout((function(){e.delegateeError=""}),2e3),this.delagateeId&&this.validateDate()}},{key:"validateDate",value:function(){var e=this,t="",a=!0,s=new Date(this.startDate),n=new Date(this.endDate);return this.startDate&&this.endDate||(t="Both dates are required",a=!1),new Date>s&&(t="Start date cannot be in the past",a=!1),new Date>n&&(t="End date cannot be in the past",a=!1),s>n&&(t="End date must be after start",a=!1),Je.daysBetweenDates(s,n)>14&&(t="You can only have 14 days at a time",a=!1),Je.daysBetweenDates(s,n)>this.selectedLeaveBalance&&(t="You have only ".concat(this.selectedLeaveBalance," days of ").concat(this.leaveType," leave left.")),this.dateError=t,setTimeout((function(){e.dateError=""}),2e3),a}},{key:"submit",value:function(){var e=Object(X["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.validateForm()){e.next=2;break}return e.abrupt("return");case 2:return this.submitting=!0,e.next=5,fetch("".concat(z,"/leaves/request?uid=1"),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(this.payload)}).then((function(e){return e.json()}));case 5:t=e.sent,t.status?this.success(t.data.request):this.failed(t.errors),this.submitting=!1;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"success",value:function(e){var t=new Date(e.startDate),a=new Date(e.endDate),s=Je.daysBetweenDates(t,a);this.leaveBalances[e.leaveType]-=s,this.addRequest(e),window.toast({msg:"Request added",color:"green-600"}),this.reset()}},{key:"reset",value:function(){this.leaveType="",this.startDate="",this.endDate="",this.delegatee="",this.details="",this.allowance=!1}},{key:"failed",value:function(e){var t=2e3;e.forEach((function(e){setTimeout((function(){window.toast({msg:e.msg,color:"red-500"})}),t+1e3)}))}},{key:"getDelegatees",value:function(){var e=Object(X["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(z,"/leaves/delegatees")).then((function(e){return e.json()}));case 2:t=e.sent,this.defaultDelegatees=t.data.delegatees;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getLeaveBalances",value:function(){var e=Object(X["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(z,"/leaves/balances?uid=1")).then((function(e){return e.json()}));case 2:t=e.sent,this.leaveBalances=t.data.leaveBalance;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){var e=Object(X["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.getDelegatees(),this.getLeaveBalances();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),a}(u["d"]);Object(c["a"])([Object(u["b"])({required:!0,default:!1,type:Boolean})],He.prototype,"visible",void 0),Object(c["a"])([Object(u["c"])("visible",{required:!0,default:!1,type:Boolean})],He.prototype,"show",void 0),Object(c["a"])([Ve.Mutation],He.prototype,"addRequest",void 0),He=Object(c["a"])([Object(u["a"])({components:{Modal:ye,VSelect:De,VInput:Te,Delegatee:Ue}})],He);var Ge=He,Xe=Ge,Ye=(a("9683"),Object(j["a"])(Xe,de,pe,!1,null,null,null)),ze=Ye.exports,We=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-full"},[e._m(0),a("v-tabs",{staticClass:"mt-16",attrs:{tabs:e.tabs},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},["Pending"==e.tab?a("history-table",{key:"pending",attrs:{items:e.pending}}):e._e(),"Approved"==e.tab?a("history-table",{key:"approved",attrs:{items:e.approved}}):e._e(),"Disapproved"==e.tab?a("history-table",{key:"disapproved",attrs:{items:e.disapproved}}):e._e()],1)],1)},Fe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:" flex flex-row font-semibold"},[a("span",{staticClass:"text-blue-500 "},[e._v("Leave")]),a("span",{staticClass:"mdi mdi-chevron-right text-xl text-blue-500"}),a("span",[e._v("Absence History")])])}],$e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-full flex flex-row"},[a("div",{staticClass:"flex flex-col mr-16 pt-16"},e._l(e.tabs,(function(t,s){return a("span",{key:s,staticClass:"pl-3  font-semibold my-2 text-gray-400 cursor-pointer",class:{"text-blue-600 border-blue-500 border-l-4 ":e.isActive(t)},on:{click:function(a){return e.switchTab(t)}}},[e._v(" "+e._s(t)+" ")])})),0),a("div",{staticClass:"flex-grow"},[e._t("default")],2)])},et=[],tt=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return Object(B["a"])(a,[{key:"switchTab",value:function(e){this.$emit("input",e)}},{key:"isActive",value:function(e){return e==this.value}},{key:"mounted",value:function(){this.tabs.length>0&&this.switchTab(this.tabs[0])}}]),a}(u["d"]);Object(c["a"])([Object(u["b"])({required:!0})],tt.prototype,"tabs",void 0),Object(c["a"])([Object(u["b"])({default:0})],tt.prototype,"value",void 0),tt=Object(c["a"])([u["a"]],tt);var at,st=tt,nt=st,rt=Object(j["a"])(nt,$e,et,!1,null,null,null),it=rt.exports,ot=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-full flex flex-col"},[a("span",{staticClass:"w-full grid grid-cols-7 gap-x-0"},e._l(e.headers,(function(t,s){return a("span",{key:s,staticClass:"font-bold text-lg flex justify-center"},[e._v(" "+e._s(t)+" ")])})),0),e._l(e.pageItems,(function(e,t){return a("history-row",{key:t,attrs:{item:e}})})),a("div",{staticClass:"flex flex-row justify-between pa-3 mt-8 text-sm"},[a("span",{staticClass:"text-gray-400"},[e._v(" Showing "+e._s(e.page)+" of "+e._s(e.numOfPages)+" ")]),a("div",{staticClass:"flex flex-row "},[a("span",{staticClass:"mx-1 cursor-pointer",on:{click:function(t){return e.switchPage(-1)}}},[e._v(" Previous ")]),e._l(e.numOfPages,(function(t){return a("span",{key:t,staticClass:"mx-1 cursor-pointer w-6 h-6 ",class:{"justify-center flex shadow-md rounded-md bg-blue-700":t==e.page},on:{click:function(a){e.page=t}}},[e._v(" "+e._s(t)+" ")])})),a("span",{staticClass:"mx-1 cursor-pointer w-6 h-6",on:{click:function(t){return e.switchPage(1)}}},[e._v(" Next ")])],2)])],2)},lt=[],ct=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-3 min-w-full h-16 p-4 relative bg-gray-50 border-2 border-gray-400 rounded-xl"},[a("div",{staticClass:"grid grid-cols-7"},[a("span",{staticClass:"flex justify-center"},[e._v(e._s(e.formattedItem.leaveType))]),a("span",{staticClass:"flex justify-center"},[e._v(e._s(e.formattedItem.details))]),a("span",{staticClass:"flex justify-center"},[e._v(e._s(e.formattedItem.startDate))]),a("span",{staticClass:"flex justify-center"},[e._v(e._s(e.formattedItem.endDate))]),a("span",{staticClass:"flex justify-center"},[e._v(e._s(e.formattedItem.duration))]),a("span",{staticClass:"flex justify-center"},[e._v(e._s(e.formattedItem.allowance))]),a("span",{staticClass:"flex justify-center"},[e._v(e._s(e.formattedItem.delegatee))])]),e.pending?a("span",{staticClass:"absolute right-2 top-4 mdi mdi-dots-vertical text-gray-300 text-xl cursor-pointer",on:{click:function(t){e.showAction=!e.showAction}}}):e._e(),e.showAction?a("div",{staticClass:"z-10 absolute right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl"},[a("a",{staticClass:"transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-blue-500 hover:text-white",attrs:{href:"#"},on:{click:e.approve}},[e._v(" Approve ")]),e._m(0),a("a",{staticClass:"transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-blue-500 hover:text-white",attrs:{href:"#"},on:{click:e.disapprove}},[e._v(" Disapprove ")])]):e._e()])},ut=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"py-2"},[a("hr")])}],dt=a("5530");(function(e){e["PENDING"]="pending",e["APPROVED"]="approved",e["DISAPPROVED"]="disapproved"})(at||(at={}));var pt=at,ft=Object(Ke["a"])("leaveRequests"),bt=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.showAction=!1,e}return Object(B["a"])(a,[{key:"pending",get:function(){return this.item.status==pt.PENDING}},{key:"formattedItem",get:function(){var e=new Date(this.item.startDate),t=new Date(this.item.endDate),a={startDate:e.toDateString(),endDate:t.toDateString(),delegatee:this.item.delegatee.name,allowance:this.item.allowance?"Yes":"No",duration:Je.daysBetweenDates(e,t)};return Object(dt["a"])(Object(dt["a"])({},this.item),a)}},{key:"approve",value:function(){var e=Object(X["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(z,"/leaves/approve/").concat(this.item.id),{method:"POST"}).then((function(e){return e.json()}));case 2:t=e.sent,t.status?(window.toast({msg:"Request approved",color:"green-600"}),this.update(Object(dt["a"])(Object(dt["a"])({},this.item),{},{status:pt.APPROVED}))):window.toast({msg:t.errors,color:"red-500"}),this.showAction=!1;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"disapprove",value:function(){var e=Object(X["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(z,"/leaves/disapprove/").concat(this.item.id),{method:"POST"}).then((function(e){return e.json()}));case 2:t=e.sent,t.status?(window.toast({msg:"Request disapproved",color:"green-600"}),this.update(Object(dt["a"])(Object(dt["a"])({},this.item),{},{status:pt.DISAPPROVED}))):window.toast({msg:t.errors,color:"red-500"}),this.showAction=!1;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),a}(u["d"]);Object(c["a"])([Object(u["b"])({type:Object,required:!0})],bt.prototype,"item",void 0),Object(c["a"])([ft.Mutation],bt.prototype,"update",void 0),bt=Object(c["a"])([u["a"]],bt);var vt=bt,ht=vt,mt=Object(j["a"])(ht,ct,ut,!1,null,null,null),gt=mt.exports,yt=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.headers=["Leave Type","Details","Start Date","End Date","Duration (Days)","Allowance","Delegatee"],e.page=1,e.itemsPerPage=3,e}return Object(B["a"])(a,[{key:"pageItems",get:function(){return this.chunkedItems.length<this.page?[]:this.chunkedItems[this.page-1]}},{key:"numOfPages",get:function(){return this.chunkedItems.length}},{key:"chunkedItems",get:function(){var e=this,t=[];return this.items.forEach((function(a){var s=t.pop()||[];s.length>=e.itemsPerPage&&(t.push(s),s=[]),s.push(a),t.push(s)})),t}},{key:"switchPage",value:function(e){var t=this.page+e;t<1||t>this.numOfPages||(this.page=t)}},{key:"mounted",value:function(){this.page=1,console.log("mounted")}}]),a}(u["d"]);Object(c["a"])([Object(u["b"])({type:Array,required:!0,default:[]})],yt.prototype,"items",void 0),yt=Object(c["a"])([Object(u["a"])({components:{HistoryRow:gt}})],yt);var xt=yt,jt=xt,wt=Object(j["a"])(jt,ot,lt,!1,null,null,null),Ot=wt.exports,Ct=Object(Ke["a"])("leaveRequests"),kt=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.tabs=["Pending","Approved","Disapproved"],e.tab="",e}return Object(B["a"])(a,[{key:"approved",get:function(){return this.leaveRequests.filter((function(e){return e.status==pt.APPROVED}))}},{key:"pending",get:function(){return this.leaveRequests.filter((function(e){return e.status==pt.PENDING}))}},{key:"disapproved",get:function(){return this.leaveRequests.filter((function(e){return e.status==pt.DISAPPROVED}))}}]),a}(u["d"]);Object(c["a"])([Ct.State],kt.prototype,"leaveRequests",void 0),kt=Object(c["a"])([Object(u["a"])({components:{VTabs:it,HistoryTable:Ot}})],kt);var Dt=kt,At=Dt,qt=Object(j["a"])(At,We,Fe,!1,null,null,null),_t=qt.exports,Rt=Object(Ke["a"])("leaveRequests"),Et=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.show=!1,e}return Object(B["a"])(a,[{key:"hasHistory",get:function(){return this.leaveRequests.length>0}},{key:"created",value:function(){this.fetchRequests()}}]),a}(u["d"]);Object(c["a"])([Rt.State],Et.prototype,"leaveRequests",void 0),Object(c["a"])([Rt.Action],Et.prototype,"fetchRequests",void 0),Et=Object(c["a"])([Object(u["a"])({components:{NoLeave:ue,NewLeave:ze,AbscenceHistory:_t}})],Et);var Pt=Et,Tt=Pt,It=Object(j["a"])(Tt,ae,se,!1,null,null,null),Bt=It.exports;s["a"].use(te["a"]);var St=[{path:"/",name:"Home",component:Bt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Lt=new te["a"]({mode:"history",base:"/",routes:St}),Qt=Lt;s["a"].config.productionTip=!1,new s["a"]({store:ee,router:Qt,render:function(e){return e(V)}}).$mount("#app")},f0ab:function(e,t,a){}});
//# sourceMappingURL=app.a9573db3.js.map