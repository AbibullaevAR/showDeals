(function(){"use strict";var e={6054:function(e,n,t){var o=t(5130),r=t(8330),a=t(6768),u=t(4232);const l={class:"leads-search"};var i=(0,a.pM)({__name:"LeadsSearch",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(e){const n=(0,a.fn)(e,"modelValue");return(0,a.wB)(n,(()=>{console.log("Tye")})),(e,t)=>((0,a.uX)(),(0,a.CE)("div",l,[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),type:"input",placeholder:"Найти..."},null,512),[[o.Jo,n.value]])]))}});const c=i;var s=c,d=t(144);const f=async(e="")=>{try{const n=await fetch(`http://127.0.0.1:3000/api/leads?query=${e}`);return n.json()}catch(n){return console.log(n),[]}},p={key:1},v={key:1};var y=(0,a.pM)({__name:"Main",setup(e){const n=e=>e.map((e=>({...e,key:e.id}))),t=(0,d.KR)(""),o=[{title:"Название",dataIndex:"name",key:"name",fixed:!0},{title:"Бюджет",dataIndex:"price",key:"price"},{title:"Статус",key:"status"},{title:"Ответственный",key:"responsibleUser"},{title:"Дата создания",dataIndex:"createDate",key:"createDate"}],r=(0,d.KR)([]);return(0,a.sV)((async()=>{r.value=await f()})),(0,a.wB)(t,(async()=>{const e=t.value.length>3||0===t.value.length;e&&(r.value=await f(t.value))})),(e,l)=>{const i=(0,a.g2)("a-table");return(0,a.uX)(),(0,a.CE)("main",null,[(0,a.bF)(s,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e)},null,8,["modelValue"]),(0,a.bF)(i,{columns:o,"data-source":n(r.value),"expand-column-width":100},{bodyCell:(0,a.k6)((({column:e,record:n})=>["status"===e.key?((0,a.uX)(),(0,a.CE)("div",{key:0,style:(0,u.Tr)({backgroundColor:n.status.color})},(0,u.v_)(n.status.name),5)):(0,a.Q3)("",!0),"responsibleUser"===e.key?((0,a.uX)(),(0,a.CE)("div",p,(0,u.v_)(n.responsibleUser.name),1)):(0,a.Q3)("",!0)])),expandedRowRender:(0,a.k6)((({record:e})=>[e.contacts.length?((0,a.uX)(!0),(0,a.CE)(a.FK,{key:0},(0,a.pI)(e.contacts,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.name,class:"contact"},[(0,a.Lk)("div",null,(0,u.v_)(e.name),1),(0,a.Lk)("div",null,(0,u.v_)(e.email),1),(0,a.Lk)("div",null,(0,u.v_)(e.phone),1)])))),128)):((0,a.uX)(),(0,a.CE)("span",v,"Нет контактов"))])),_:1},8,["data-source"])])}}});const m=y;var h=m,b=(0,a.pM)({__name:"App",setup(e){return(e,n)=>((0,a.uX)(),(0,a.Wv)(h))}});const k=b;var _=k;t(4529);const g=(0,o.Ef)(_);g.use(r.Ay),g.mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var u=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],a=e[s][2];for(var l=!0,i=0;i<o.length;i++)(!1&a||u>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[i])}))?o.splice(i--,1):(l=!1,a<u&&(u=a));if(l){e.splice(s--,1);var c=r();void 0!==c&&(n=c)}}return n}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,u=o[0],l=o[1],i=o[2],c=0;if(u.some((function(n){return 0!==e[n]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(i)var s=i(t)}for(n&&n(o);c<u.length;c++)a=u[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(s)},o=self["webpackChunkshow_deal_client"]=self["webpackChunkshow_deal_client"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(6054)}));o=t.O(o)})();
//# sourceMappingURL=app.b6a7f8a8.js.map