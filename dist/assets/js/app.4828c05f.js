(function(e){function t(t){for(var o,s,i=t[0],a=t[1],u=t[2],l=0,f=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,i=1;i<n.length;i++){var a=n[i];0!==r[a]&&(o=!1)}o&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},c=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0500":function(e,t,n){"use strict";n("93a2")},2886:function(e,t,n){"use strict";n("bd39")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"nav"},c=Object(o["g"])("h2",null,"To Do",-1),s=Object(o["g"])("br",null,null,-1),i=Object(o["g"])("br",null,null,-1);function a(e,t,n,a,u,d){var l=Object(o["v"])("Message"),f=Object(o["v"])("NewNote"),b=Object(o["v"])("Notes");return Object(o["q"])(),Object(o["f"])("div",r,[e.message?(Object(o["q"])(),Object(o["d"])(l,{key:0,message:e.message},null,8,["message"])):Object(o["e"])("",!0),c,Object(o["h"])(f,{note:u.note,onAddNote:d.addNote},null,8,["note","onAddNote"]),s,i,Object(o["h"])(b,{notes:u.notes,onRemove:d.removeNote},null,8,["notes","onRemove"])])}n("a4d3"),n("e01a"),n("a434");function u(e,t,n,r,c,s){return Object(o["q"])(),Object(o["f"])("h5",null,"message work - "+Object(o["x"])(n.message),1)}var d={props:{message:{type:String,required:!1}}},l=n("d959"),f=n.n(l);const b=f()(d,[["render",u]]);var p=b,O={class:"new-note"};function j(e,t,n,r,c,s){return Object(o["q"])(),Object(o["f"])("div",O,[Object(o["B"])(Object(o["g"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.note.title=e})},null,512),[[o["z"],n.note.title]]),Object(o["B"])(Object(o["g"])("textarea",{name:"",id:"",cols:"30",rows:"10","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.note.description=e})},null,512),[[o["z"],n.note.description]]),Object(o["g"])("button",{class:"btn btnPrimary",onClick:t[2]||(t[2]=function(e){return s.addNote()})},"add note")])}var m={props:{note:{type:Object,required:!0}},methods:{addNote:function(){this.$emit("addNote",this.note)}}};n("2886");const v=f()(m,[["render",j]]);var g=v,h={class:"notes"},y={class:"note-header"},N=["onClick"],w={class:"note-body"};function x(e,t,n,r,c,s){return Object(o["q"])(),Object(o["f"])("div",h,[(Object(o["q"])(!0),Object(o["f"])(o["a"],null,Object(o["u"])(n.notes,(function(e,t){return Object(o["q"])(),Object(o["f"])("div",{key:t,class:"note"},[Object(o["g"])("div",y,[Object(o["g"])("p",null,Object(o["x"])(e.title),1),Object(o["g"])("p",{class:"close",onClick:function(e){return s.removeNote(t)}},"X",8,N)]),Object(o["g"])("div",w,[Object(o["g"])("p",null,Object(o["x"])(e.description),1),Object(o["g"])("span",null,Object(o["x"])(e.date),1)])])})),128))])}var q={props:{notes:{type:Object,required:!1}},methods:{removeNote:function(e){console.log("remove",e+1),this.emit("remove",e)}}};n("a5e2");const k=f()(q,[["render",x]]);var P=k,M={components:{Message:p,NewNote:g,Notes:P},data:function(){return{note:{title:"",description:""},notes:[{title:"first Note",description:"Lorem asd lamlm sdf  gfd dfg 516",date:"23-12-22"},{title:"second Note",description:"T o d o asd lamlm sdf  gfd dfg 516",date:"24-12-22"},{title:"third Note",description:"Lorem asd lamlm sdf  gfd dfg 516",date:"25-12-22"},{title:"four Note",description:"Lorem asd lamlm sdf  gfd dfg 516",date:"220-12-22"}]}},methods:{addNote:function(){var e=this.note,t=e.title,n=e.description;this.notes.push({title:t,description:n,date:new Date}),this.note={title:"",description:""}},removeNote:function(e){this.notes=this.notes.splice(e,1)}}};n("0500");const S=f()(M,[["render",a]]);var _=S,T=n("6c02"),C=[{path:"/",name:"Home",component:_}],L=Object(T["a"])({history:Object(T["b"])(""),routes:C}),z=L,A=n("5502"),B=Object(A["a"])({state:{},mutations:{},actions:{},modules:{}});n("c1c3");Object(o["c"])(_).use(B).use(z).mount("#app")},"93a2":function(e,t,n){},a5e2:function(e,t,n){"use strict";n("fab8")},bd39:function(e,t,n){},c1c3:function(e,t,n){},fab8:function(e,t,n){}});