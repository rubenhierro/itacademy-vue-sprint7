var U=Object.defineProperty;var q=(i,e,t)=>e in i?U(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var u=(i,e,t)=>(q(i,typeof e!="symbol"?e+"":e,t),t);import{o as c,c as m,a as s,b as p,u as v,R as I,w as N,d as E,e as g,f as B,t as h,F as $,r as x,g as M,h as L,i as _,v as C,j as w,k as P,l as Q,m as R,n as T}from"./vendor.8397d906.js";const F=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}};F();const H={class:"container"},J={class:"navbar bg-light"},G=g("Inici"),W=g("Pressupostos "),j={setup(i){return(e,t)=>(c(),m("div",H,[s("nav",J,[s("ul",null,[s("li",null,[p(v(I),{to:"/"},{default:N(()=>[G]),_:1})]),s("li",null,[p(v(I),{to:"/budgeds"},{default:N(()=>[W]),_:1})])])]),p(v(E))]))}};var f=(i,e)=>{const t=i.__vccOpts||i;for(const[n,o]of e)t[n]=o;return t};const K={props:["modelValue","type","id","description"],emits:["update:modelValue"]},z=["type","id","value"],X=s("a",{class:"btn","data-bs-toggle":"modal","data-bs-target":".bd-example-modal-sm"},[s("i",{class:"fa-regular fa-circle-question fs-4"})],-1),Y={class:"modal fade bd-example-modal-sm",tabindex:"-1",role:"dialog","aria-labelledby":"mySmallModalLabel","aria-hidden":"true"},Z={class:"modal-dialog modal-md"},ee={class:"modal-content p-3 text-center"};function te(i,e,t,n,o,a){return c(),m($,null,[s("button",{onClick:e[0]||(e[0]=B(d=>i.$emit("update:modelValue",++t.modelValue),["prevent"]))},"+"),s("input",{type:t.type,id:t.id,value:t.modelValue,onInput:e[1]||(e[1]=d=>i.$emit("update:modelValue",d.target.value))},null,40,z),s("button",{onClick:e[2]||(e[2]=B(d=>i.$emit("update:modelValue",t.modelValue>=1?--t.modelValue:t.modelValue),["prevent"]))},"-"),X,s("div",Y,[s("div",Z,[s("div",ee,h(t.description),1)])])],64)}var se=f(K,[["render",te]]);const oe={props:["pages","languages"],emits:["update:pages","update:languages"],components:{CustomInput:se}},ie={class:"panel"},ne=s("label",{for:"numPages"},"Num. p\xE0gines:",-1),de=s("br",null,null,-1),ae=s("label",{for:"numLang"},"Num. idiomes:",-1);function le(i,e,t,n,o,a){const d=x("CustomInput");return c(),m("div",ie,[ne,p(d,{type:"text",id:"numPages",description:"N\xFAmero de p\xE0gines que tindr\xE0 la web.",modelValue:t.pages,"onUpdate:modelValue":e[0]||(e[0]=r=>t.pages=r),onVnodeUpdated:e[1]||(e[1]=r=>i.$emit("update:pages",t.pages))},null,8,["description","modelValue"]),de,ae,p(d,{type:"text",id:"numLang",description:"N\xFAmero d'idiomes que tindr\xE0 la web.",modelValue:t.languages,"onUpdate:modelValue":e[2]||(e[2]=r=>t.languages=r),onVnodeUpdated:e[3]||(e[3]=r=>i.$emit("update:languages",t.languages))},null,8,["description","modelValue"])])}var re=f(oe,[["render",le]]);class k{getTotalBudged(e,t,n,o,a){let d=0,r=0;const l=500,V=30,A=300,O=200;return e===!0&&(r+=l,t>0&&(r+=t*V),n>0&&(r+=n*V)),o===!0&&(d+=A),a===!0&&(d+=O),d+r}exist(e,t){return e.some(n=>n.name===t.name)}getId(e,t){const n=e.map(o=>o.name);return console.log(n.indexOf(t.name)),n.indexOf(t.name)}update(e,t){e.splice(this.getId(e,t),1,t)}updateModeEdit(e,t,n){e.splice(t,1,n)}sortByName(e,t){return t===!0?e.sort((n,o)=>n.name.localeCompare(o.name)):e.sort((n,o)=>o.name.localeCompare(n.name))}sortByDate(e,t){return t===!0?e.sort((n,o)=>n.date.localeCompare(o.date)):e.sort((n,o)=>o.date.localeCompare(n.date))}sortByDefault(e){return e.sort((t,n)=>t.id-n.id)}sortNums(e){return e.sort((t,n)=>t-n)}search(e,t){return e.filter(n=>n.name.toLowerCase().indexOf(t.toLowerCase())!==-1)}delete(e,t){e.splice(t,1)}}const b=new k,ue={props:["budgedList"],emits:["selected-item"],data(){return{isNameSortedAsc:!0,isDateSortedAsc:!0,budgedQueryList:new Array}},methods:{sortByName(){b.sortByName(this.budgedList,this.isNameSortedAsc),this.isNameSortedAsc=!this.isNameSortedAsc},sortByDate(){b.sortByDate(this.budgedList,this.isDateSortedAsc),this.isDateSortedAsc=!this.isDateSortedAsc},sortByDefault(){b.sortByDefault(this.budgedList),this.budgedQueryList=[],this.isDateSortedAsc=!0,this.isNameSortedAsc=!0},search(i){this.budgedQueryList=b.search(this.budgedList,i),console.log(this.budgedQueryList)},deleteItem(i){b.delete(this.budgedList,i),localStorage.setItem("budgedList",JSON.stringify(this.budgedList))}}},ce={class:"list"},me={class:"options"},ge=s("label",{for:"search"},"Cercar:",-1),he={class:"filters"},_e=s("span",null,"Ordena per:",-1),be=s("hr",null,null,-1),pe={class:"card list-items"},fe={class:"card-body"},ye=["onClick"],ve=["onClick"];function Le(i,e,t,n,o,a){return c(),m("div",ce,[s("div",me,[s("form",null,[ge,s("input",{type:"text",id:"search",onInput:e[0]||(e[0]=d=>a.search(d.target.value))},null,32),s("button",{type:"reset",onClick:e[1]||(e[1]=d=>this.budgedQueryList=[])},"x")]),s("div",he,[_e,s("button",{onClick:e[2]||(e[2]=(...d)=>a.sortByName&&a.sortByName(...d))},"Nom"),s("button",{onClick:e[3]||(e[3]=(...d)=>a.sortByDate&&a.sortByDate(...d))},"Data"),s("button",{onClick:e[4]||(e[4]=(...d)=>a.sortByDefault&&a.sortByDefault(...d))},"Reset")])]),be,(c(!0),m($,null,M(o.budgedQueryList.length>0?o.budgedQueryList:t.budgedList,(d,r)=>(c(),m("div",pe,[s("div",fe,[s("span",null,[g(" Nom: "+h(d.name)+" - Client: "+h(d.customer)+" - Data: "+h(d.date)+" - Total "+h(d.total)+"\u20AC ",1),s("button",{onClick:l=>i.$emit("selected-item",r)},"edit",8,ye),s("button",{onClick:l=>a.deleteItem(r)},"delete",8,ve)])])]))),256))])}var we=f(ue,[["render",Le]]);class S{constructor(e,t,n,o,a,d,r,l){u(this,"id",0);u(this,"date");u(this,"name");u(this,"customer");u(this,"web");u(this,"webPages");u(this,"webLanguages");u(this,"seo");u(this,"ads");u(this,"total");this.id=S.incrementId(),this.date=new Date().toLocaleString(),this.name=e,this.customer=t,this.web=n,this.webPages=o,this.webLanguages=a,this.seo=d,this.ads=r,this.total=l}static incrementId(){return this.id?this.id++:this.id=1,this.id}}const y=new k,xe={components:{Panel:re,List:we},data(){return{budgedList:localStorage.hasOwnProperty("budgedList")?JSON.parse(localStorage.getItem("budgedList")):[],selectedItemId:null,modeEdit:!1,name:null,customer:null,web:!1,webPages:0,webLanguages:0,seo:!1,ads:!1,total:0}},methods:{addBudged(){const i=new S(this.name,this.customer,this.web,this.webPages,this.webLanguages,this.seo,this.ads,this.total);this.modeEdit!==!0?y.exist(this.budgedList,i)?y.update(this.budgedList,i):this.budgedList.push(i):(y.updateModeEdit(this.budgedList,this.selectedItemId,i),this.modeEdit=!1),localStorage.setItem("budgedList",JSON.stringify(this.budgedList)),this.reset()},editSelectedItem(i){this.modeEdit=!0,console.log(`mode edit: ${this.modeEdit}`),this.selectedItemId=i,this.name=this.budgedList[i].name,this.customer=this.budgedList[i].customer,this.web=this.budgedList[i].web,this.webPages=this.budgedList[i].webPages,this.webLanguages=this.budgedList[i].webLanguages,this.seo=this.budgedList[i].seo,this.ads=this.budgedList[i].ads,this.total=this.budgedList[i].total},reset(){this.name=null,this.customer=null,this.web=!1,this.webPages=0,this.webLanguages=0,this.seo=!1,this.ads=!1,this.total=0}},mounted(){this.$watch(i=>[i.web,i.webPages,i.webLanguages,i.seo,i.ads],i=>{this.total=y.getTotalBudged(this.web,this.webPages,this.webLanguages,this.seo,this.ads),this.$router.replace({query:{web:this.web,webPages:this.webPages,webLanguages:this.webLanguages,seo:this.seo,ads:this.ads}})})}},Se={class:"home"},Ve={class:"budged-container"},Ie=s("h2",null,"Pressupost",-1),Ne={key:0,class:"text-danger"},Be=s("label",{for:"name"},"Nom",-1),Ce=g(),Pe=s("br",null,null,-1),$e=s("label",{for:"costurmer"},"Client",-1),ke=g(),De=s("br",null,null,-1),Ae=s("label",{for:"web"},"Una p\xE0gina web (500\u20AC)",-1),Oe=g(),Ue=s("br",null,null,-1),qe=s("label",{for:"seo"},"Una consultoria SEO (300\u20AC}",-1),Ee=g(),Me=s("br",null,null,-1),Qe=s("label",{for:"ads"},"Una campanya de Google Ads (200\u20AC)",-1),Re=s("br",null,null,-1),Te={id:"total"},Fe=s("button",{type:"reset"},"Reset",-1),He=s("button",{type:"submit"},"Guardar",-1),Je={class:"list-container"};function Ge(i,e,t,n,o,a){const d=x("Panel"),r=x("List");return c(),m("div",Se,[s("div",Ve,[Ie,this.modeEdit===!0?(c(),m("h5",Ne,"Mode edici\xF3")):L("",!0),s("form",{onSubmit:e[7]||(e[7]=(...l)=>a.addBudged&&a.addBudged(...l))},[Be,_(s("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=l=>o.name=l),required:""},null,512),[[C,o.name]]),Ce,Pe,$e,_(s("input",{type:"text",id:"costumer","onUpdate:modelValue":e[1]||(e[1]=l=>o.customer=l),required:""},null,512),[[C,o.customer]]),ke,De,_(s("input",{type:"checkbox",id:"web","onUpdate:modelValue":e[2]||(e[2]=l=>o.web=l)},null,512),[[w,o.web]]),Ae,Oe,Ue,this.web===!0?(c(),P(d,{key:0,pages:o.webPages,"onUpdate:pages":e[3]||(e[3]=l=>o.webPages=l),languages:o.webLanguages,"onUpdate:languages":e[4]||(e[4]=l=>o.webLanguages=l)},null,8,["pages","languages"])):L("",!0),_(s("input",{type:"checkbox",id:"seo","onUpdate:modelValue":e[5]||(e[5]=l=>o.seo=l)},null,512),[[w,o.seo]]),qe,Ee,Me,_(s("input",{type:"checkbox",id:"ads","onUpdate:modelValue":e[6]||(e[6]=l=>o.ads=l)},null,512),[[w,o.ads]]),Qe,Re,s("h3",Te,h(o.total)+" \u20AC",1),Fe,He],32)]),s("div",Je,[o.budgedList.length>0?(c(),P(r,{key:0,budgedList:o.budgedList,onSelectedItem:a.editSelectedItem},null,8,["budgedList","onSelectedItem"])):L("",!0)])])}var We=f(xe,[["render",Ge]]);const je={},Ke={class:"welcome"},ze=s("h1",null,"Benvingut/da!",-1),Xe=s("h2",null,"El teu lloc per fer pressupostos...",-1),Ye=s("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque officia velit quaerat incidunt aperiam dolorem? Iusto aliquid, vero excepturi assumenda ratione magnam esse dolores temporibus repellendus fugit quisquam velit!",-1),Ze=[ze,Xe,Ye];function et(i,e){return c(),m("div",Ke,Ze)}var tt=f(je,[["render",et]]);const st=Q({history:R("/"),routes:[{path:"/budgeds",name:"budgeds",component:We},{path:"/",name:"welcome",component:tt}]});const D=T(j);D.use(st);D.mount("#app");