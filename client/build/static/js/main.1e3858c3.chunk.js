(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(18),o=n.n(r),a=(n(44),n(45),n(4)),s=(n(46),n(12)),u=n(0);var j=function(){return Object(u.jsxs)("div",{id:"Count_Landing",children:[Object(u.jsx)("h1",{children:"COUNTRIES APP"}),Object(u.jsx)(s.b,{to:"/home",children:Object(u.jsx)("button",{id:"Landing",children:Object(u.jsx)("h2",{children:"START"})})})]})},l=(n(56),n(11)),d=(n(57),n(5)),b=n(27),O=n(20),h=n.n(O),f="Razas-A-Z",v="Razas-Z-A",x="HABITANTES_ASD",p="HABITANTES_DES",m="http://localhost:3001";function g(){return function(e){return fetch("".concat(m,"/countries")).then((function(e){return e.json()})).then((function(t){e({type:"GET_COUNTRIES",payload:t})}))}}function y(e){return function(t){return fetch("".concat(m,"/countries?name=").concat(e)).then((function(e){return e.json()})).then((function(e){t({type:"GET_COUNTRY",payload:e})}))}}n(77);var _=function(e){return Object(u.jsx)("div",{class:"card",children:Object(u.jsxs)(s.b,{to:"/home/country_detail/".concat(e.id3),children:[Object(u.jsx)("div",{id:"con_flag",children:Object(u.jsx)("img",{id:"flag",src:e.flags,alt:"la bandera de ".concat(e.name," no se encuentra :(")})}),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{id:"text_cards",children:[Object(u.jsx)("h1",{children:e.name}),Object(u.jsx)("h1",{children:e.subregion})]})})]})})};var C=Object(d.b)((function(e){return console.log(e),{countries:e.countries}}),(function(e){return{getCountries:function(){return e(g())},getCountry:function(t){return e(y(t))}}}))((function(e){var t=Object(c.useState)(1),n=Object(l.a)(t,2),i=n[0],r=n[1],o=10*i,a=o-10,s=e.countries.slice(a,o);if(Object(c.useEffect)((function(){e.getCountries()}),[]),i<1)r(1);else{if(!(i>25))return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{id:"cont",children:s?s.map((function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(_,{id3:e.id3,name:e.name,flags:e.flags,subregion:e.subregion})})})):Object(u.jsx)("p",{children:"Pais No Encontrado"})}),Object(u.jsxs)("div",{id:"pag",children:[Object(u.jsx)("button",{onClick:function(){return r(i-1)},children:"\u25c0"}),Object(u.jsx)("h3",{children:i}),Object(u.jsx)("button",{onClick:function(){return r(i+1)},children:"\u25b6"})]})]});r(25)}}));var E=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsx)(C,{})})})};n(78);var T=Object(d.b)((function(e){return{countries:e.countries}}),(function(e){return{getCountry:function(t){return e(y(t))}}}))((function(e){var t=Object(c.useState)({name:""}),n=Object(l.a)(t,2),i=n[0],r=n[1];return Object(u.jsx)("div",{children:Object(u.jsx)("form",{onSubmit:function(t){return function(t){t.preventDefault(),i.name?e.getCountry(i.name):i.name||(alert("Nombre invalido"),console.log("Introduzca un nombre correcto"))}(t)},children:Object(u.jsxs)("div",{className:"bar",children:[Object(u.jsx)("input",{type:"text",placeholder:"Buscar...",name:"name",value:i.name,onChange:function(e){return function(e){r({name:e.target.value})}(e)}}),Object(u.jsx)("button",{type:"sumbit",children:"Buscar"})]})})})}));var A=Object(d.b)((function(e){return{countries:e.countries}}),(function(e){return{order_abc:function(t,n){return e(function(e,t){var n=Object(b.a)(t);return n.sort((function(t,n){var c=t.name.toUpperCase(),i=n.name.toUpperCase();return e===f?c<i?-1:c>i?1:0:e===v?c>i?-1:c<i?1:0:void 0})),console.log("ESTOY EN ORDER_ABC",n),function(e){e({type:"ORDER_ABC",payload:n})}}(t,n))},order_population:function(t,n){return e(function(e,t){var n=Object(b.a)(t);return n.sort((function(t,n){var c=parseFloat(t.population),i=parseFloat(n.population);return e===x?c<i?-1:c>i?1:0:e===p?c>i?-1:c<i?1:0:void 0})),console.log("ESTOY EN ORDER_P",n),function(e){e({type:"ORDER_POPULATION",payload:n})}}(t,n))}}}))((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("select",{onChange:function(t){t.target.value!==f&&t.target.value!==v||e.order_abc(t.target.value,e.countries)},children:[Object(u.jsx)("option",{children:"Order by Name"}),Object(u.jsx)("option",{value:f,children:"Ascendant"}),Object(u.jsx)("option",{value:v,children:"Descendant"})]}),Object(u.jsxs)("select",{onChange:function(t){t.target.value!==x&&t.target.value!==p||e.order_population(t.target.value,e.countries)},children:[Object(u.jsx)("option",{children:"Order by Population"}),Object(u.jsx)("option",{value:p,children:"Ascendant"}),Object(u.jsx)("option",{value:x,children:"Descendant"})]})]})}));var D=Object(d.b)((function(e){return{countries:e.countries,activities:e.activities}}),(function(e){return{filtro_reg:function(t,n){return e((c=t,function(e){return fetch("".concat(m,"/countries?region=").concat(c)).then((function(e){return e.json()})).then((function(t){e({type:"GET_COUNTRY",payload:t})}))}));var c},getActivities:function(){return e((function(e){return fetch("".concat(m,"/activities")).then((function(e){return e.json()})).then((function(t){e({type:"GET_ACTIVITIES",payload:t})}))}))},changeCountries:function(t){return e(function(e){return function(t){return fetch("".concat(m,"/activities?name=").concat(e)).then((function(e){return e.json()})).then((function(e){t({type:"CHANGE_COUNTRIES",payload:e})}))}}(t))},getCountries:function(){return e(g())}}}))((function(e){return Object(c.useEffect)((function(){e.getActivities()}),[]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("select",{name:"region",onChange:function(t){e.filtro_reg(t.target.value)},children:[Object(u.jsx)("option",{value:"",children:"Filter by Continent"},"1001"),Object(u.jsx)("option",{value:"Europe",children:"Europe"},"1002"),Object(u.jsx)("option",{value:"America",children:"America"},"1003"),Object(u.jsx)("option",{value:"Asia",children:"Asia"},"1004"),Object(u.jsx)("option",{value:"Oceania",children:"Oceania"},"1005"),Object(u.jsx)("option",{value:"Africa",children:"Africa"},"1006")]},"1006"),Object(u.jsxs)("select",{name:"activity",onChange:function(t){e.changeCountries(t.target.value)},children:[Object(u.jsx)("option",{value:"",children:" Filter by Activity"},"2003"),e.activities&&e.activities.map((function(e){return Object(u.jsx)("option",{children:e.name})}))]},"2002")]})}));var S=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("nav",{id:"Content_nav",children:[Object(u.jsx)(s.b,{to:"/home",children:Object(u.jsx)("h1",{id:"Home",children:"Home"})}),Object(u.jsx)(s.b,{to:"/activity",children:Object(u.jsx)("h2",{id:"Actividad",children:"Crear Actividad "})})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{id:"NavBar",children:[Object(u.jsx)(A,{}),Object(u.jsx)(D,{}),Object(u.jsx)(T,{})]})]})})};n(79);var N=Object(d.b)((function(e){return{country_Detail:e.country_Detail,activities:e.activities}}),(function(e){return{getCountryDetail:function(t){return e(function(e){return function(t){return fetch("".concat(m,"/countries/").concat(e)).then((function(e){return e.json()})).then((function(e){t({type:"GET_COUNTRY_DETAIL",payload:e})}))}}(t))}}}))((function(e){return Object(c.useEffect)((function(){var t=e.match.params.id3;e.getCountryDetail(t)}),[]),Object(u.jsxs)("div",{id:"detalles",children:[Object(u.jsx)("div",{children:Object(u.jsx)(S,{})}),Object(u.jsxs)("div",{id:"datos_c",children:[Object(u.jsx)("div",{id:"flag",children:Object(u.jsx)("img",{src:e.country_Detail.flags,alt:e.country_Detail.name})}),Object(u.jsxs)("div",{id:"informacion",children:[Object(u.jsx)("h1",{children:e.country_Detail.name}),Object(u.jsx)("h2",{children:e.country_Detail.continent}),Object(u.jsxs)("h3",{children:["Id: ",e.country_Detail.id3]}),Object(u.jsxs)("p",{children:["Capital: ",e.country_Detail.capital]}),Object(u.jsxs)("p",{children:["Subregi\xf3n: ",e.country_Detail.subregion]}),Object(u.jsxs)("p",{children:["Area: ",e.country_Detail.area," km2 "]}),Object(u.jsxs)("p",{children:["Population: ",e.country_Detail.population," "]})]})]}),Object(u.jsxs)("div",{id:"actividades_c",children:[Object(u.jsx)("hr",{}),Object(u.jsx)("h1",{children:"Activities"}),Object(u.jsx)("p",{children:e.country_Detail.activities&&e.country_Detail.activities.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{id:"Activity",children:[Object(u.jsxs)("div",{children:["Activity: ",e.name]}),Object(u.jsxs)("div",{children:["Duration: ",e.duration]}),Object(u.jsxs)("div",{children:["Difficulty: ",e.difficulty]}),Object(u.jsxs)("div",{children:["Season: ",e.season]})]})]})}))})]})]})})),I=n(26),R=n.n(I),F=n(38),P=n(21),U=n(3),G=(n(81),function(){var e=Object(d.c)(),t=Object(c.useState)([]),n=Object(l.a)(t,2),i=n[0],r=n[1],o=Object(c.useState)([]),a=Object(l.a)(o,2),s=a[0],j=a[1],b=Object(c.useState)([]),O=Object(l.a)(b,2),f=O[0],v=O[1],x=Object(c.useState)(!0),p=Object(l.a)(x,2),y=(p[0],p[1]),_=Object(c.useState)(!0),C=Object(l.a)(_,2),E=C[0],T=(C[1],Object(c.useState)({name:"",duration:"",difficulty:"",season:""})),A=Object(l.a)(T,2),D=A[0],N=A[1],I=function(e){N(Object(U.a)(Object(U.a)({},D),{},Object(P.a)({},e.target.name,e.target.value)))};return Object(c.useEffect)((function(){y(!0),setTimeout((function(){!function(e){v([]);var t=e;t=t.filter((function(e){return e.activities&&e.activities.length>0})),v(t)}(f),y(!1)}),1500)}),[E]),Object(c.useEffect)((function(){var e=function(){var e=Object(F.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,h.a.get("http://localhost:3001/countries");case 3:t=e.sent,r(t.data),y(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{id:"Nav_in_form",children:Object(u.jsx)(S,{})}),Object(u.jsx)("div",{id:"form_of_charge",children:Object(u.jsxs)("form",{onSubmit:function(t){var n;t.preventDefault(),e((n=Object.assign(D,{pais:s}),function(e){return h.a.post("".concat(m,"/activity"),n).then((function(t){console.log(n),console.log("response: "),console.log(t),console.log("Done!"),e({type:"POST_ACTIVITY",payload:t})}))})),t.target.reset(),alert("Activity Created"),setTimeout((function(){e(g())}),500)},children:[Object(u.jsx)("div",{id:"title",children:Object(u.jsx)("h1",{children:"Load your activity"})}),Object(u.jsxs)("div",{id:"datos",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"",children:"Name:"}),Object(u.jsx)("input",{type:"text",name:"name",onChange:I,required:!0})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"",children:"Duration:"}),Object(u.jsx)("input",{type:"text",name:"duration",onChange:I,required:!0})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"",children:"Difficulty:"}),Object(u.jsx)("input",{type:"number",min:"1",max:"5",name:"difficulty",onChange:I,required:!0})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"",children:"Season:"}),Object(u.jsxs)("select",{name:"season",onChange:I,required:!0,children:[Object(u.jsx)("option",{}),Object(u.jsx)("option",{value:"Verano",children:"Verano(summer)"}),Object(u.jsx)("option",{value:"Invierno",children:"Winter(Invierno)"}),Object(u.jsx)("option",{value:"Oto\xf1o",children:"Fall(Oto\xf1o)"}),Object(u.jsx)("option",{value:"Primavera",children:"Spring(primavera)"})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"",children:"Countries: "}),Object(u.jsx)("select",{id:"countries_sel",multiple:!0,name:"country",onChange:function(e){e.preventDefault();for(var t=e.target.options,n=[],c=0;c<t.length;c++)t[c].selected&&n.push(t[c].value);j(n)},required:!0,children:i.length>0?i.map((function(e,t){return Object(u.jsx)("option",{value:e.id3,children:"".concat(e.id3,"(").concat(e.name,")")},e.id3)})):Object(u.jsx)("option",{children:"Cargando"})})]}),Object(u.jsx)("input",{id:"btn_Form",type:"submit",value:"Create Activity"})]})]})})]})});var B=function(){return Object(u.jsx)(i.a.Fragment,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(a.a,{path:"/",exact:!0,component:j}),Object(u.jsx)(a.a,{path:"/home",exact:!0,component:S}),Object(u.jsx)(a.a,{path:"/home",exact:!0,component:E}),Object(u.jsx)(a.a,{path:"/home/country_detail/:id3",exact:!0,component:N}),Object(u.jsx)(a.a,{path:"/activity",component:G})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))},w={countries:[],activities:[],country_Name:[],country_Detail:{},country_id3:[]};var Y=n(22),V=n(39),k="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.b,H=Object(Y.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COUNTRIES":case"GET_COUNTRY":case"ORDER_ABC":case"ORDER_POPULATION":case"FILTER_SUBREG":case"CHANGE_COUNTRIES":return Object(U.a)(Object(U.a)({},e),{},{countries:t.payload});case"GET_COUNTRY_DETAIL":return Object(U.a)(Object(U.a)({},e),{},{country_Name:t.payload,country_Detail:t.payload});case"GET_ACTIVITIES":return Object(U.a)(Object(U.a)({},e),{},{activities:t.payload});case"POST_ACTIVITY":return Object(U.a)(Object(U.a)({},e),{},{country_id3:t.payload});default:return e}}),k(Object(Y.a)(V.a))),q=H;o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(d.a,{store:q,children:Object(u.jsx)(s.a,{children:Object(u.jsx)(B,{})})})}),document.getElementById("root")),L()}},[[82,1,2]]]);
//# sourceMappingURL=main.1e3858c3.chunk.js.map