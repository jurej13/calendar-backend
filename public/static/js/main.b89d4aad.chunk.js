(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{107:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),c=n.n(r),o=n(9),s=n(22),i=n(62),u=n(5),l="[ui] Open modal",j="[ui] Close modal",d="[event] Set Active",b="[event] Logout event",m="[event] Add new",O="[event] Clear active event",p="[event] Event updated",f="[event] Event deleted",v="[event] Events loaded",h="[auth] Finish Cheking login state",x="[auth] Login",g="[auth] Logout",y={checking:!0},N=n(54),w={events:[],activeEvent:null},k={modalOpen:!1},E=Object(s.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!0});case j:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:t.payload});case m:return Object(u.a)(Object(u.a)({},e),{},{events:[].concat(Object(N.a)(e.events),[t.payload])});case O:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:null});case p:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case f:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case v:return Object(u.a)(Object(u.a)({},e),{},{events:Object(N.a)(t.payload)});case b:return Object(u.a)({},w);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(u.a)(Object(u.a)(Object(u.a)({},e),t.payload),{},{checking:!1});case h:return Object(u.a)(Object(u.a)({},e),{},{checking:!1});case g:return{checking:!1};default:return e}}}),S="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,C=Object(s.e)(E,S(Object(s.a)(i.a))),D=n(35),T=n(10),P=n(12),I=n.n(P),A=n(21),_=n(18),L=n.n(_),R="https://mern-calendar-jure.herokuapp.com/api",G=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(R,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},F=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(R,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},V=n(17),H=n.n(V),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{end:H()(e.end).toDate(),start:H()(e.start).toDate()})}))},M=function(e){return{type:m,payload:e}},q=function(){return{type:O}},U=function(e){return{type:p,payload:e}},B=function(){return{type:f}},X=function(e){return{type:v,payload:e}},z=function(){return{type:h}},K=function(e){return{type:x,payload:e}},Q=function(){return function(e){localStorage.clear(),e({type:b}),e(W())}},W=function(){return{type:g}},Y=n(15),Z=n(25),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(Y.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(u.a)(Object(u.a)({},r),{},Object(Z.a)({},t.name,t.value)))};return[r,s,o]},ee=(n(74),n(2)),te=function(){var e=Object(o.b)(),t=$({lEmail:"javier@pito.com",lPassword:"123456"}),n=Object(Y.a)(t,2),a=n[0],r=n[1],c=$({rName:"jurito",rEmail:"jurito@pito.com",rPassword1:"123456",rPassword2:"123456"}),s=Object(Y.a)(c,2),i=s[0],u=s[1],l=a.lEmail,j=a.lPassword,d=i.rName,b=i.rEmail,m=i.rPassword1,O=i.rPassword2;return Object(ee.jsx)("div",{className:"container login-container",children:Object(ee.jsxs)("div",{className:"row",children:[Object(ee.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(ee.jsx)("h3",{children:"Ingreso"}),Object(ee.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=l,a=j,function(){var e=Object(A.a)(I.a.mark((function e(t){var r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:c.uid,name:c.name}))):L.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:l,onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:j,onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(ee.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(ee.jsx)("h3",{children:"Registro"}),Object(ee.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),m!==O)return L.a.fire("Error","Las contrase\xf1as tiene que ser iguales.","error");var n,a,r;console.log("?"),e((n=b,a=m,r=d,function(){var e=Object(A.a)(I.a.mark((function e(t){var c,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:o.uid,name:o.name}))):L.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:d,onChange:u})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:b,onChange:u})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:m,onChange:u})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:O,onChange:u})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},ne=n(53),ae=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(ee.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(ee.jsx)("span",{className:"navbar-brand",children:t}),Object(ee.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e(Q())},children:[Object(ee.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(ee.jsx)("span",{children:" Salir"})]})]})},re={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},ce=n(48),oe=n.n(ce),se=n(49),ie=n.n(se),ue=function(){return{type:l}},le={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};oe.a.setAppElement("#root");var je=H()().minutes(0).seconds(0).add(1,"hours"),de=je.clone().add(1,"hours"),be={title:"",notes:"",start:je.toDate(),end:de.toDate()},me=function(){var e=Object(o.c)((function(e){return e.ui})).modalOpen,t=Object(o.c)((function(e){return e.calendar})).activeEvent,n=Object(a.useState)(je.toDate()),r=Object(Y.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(de.toDate()),l=Object(Y.a)(i,2),d=l[0],b=l[1],m=Object(a.useState)(!0),O=Object(Y.a)(m,2),p=O[0],f=O[1],v=Object(o.b)(),h=Object(a.useState)(be),x=Object(Y.a)(h,2),g=x[0],y=x[1],N=g.notes,w=g.title,k=g.start,E=g.end;Object(a.useEffect)((function(){y(t||be)}),[t,y]);var S=function(e){var t=e.target;y(Object(u.a)(Object(u.a)({},g),{},Object(Z.a)({},t.name,t.value)))},C=function(){console.log("cerrar modal"),v({type:j}),v(q()),y(be)};return Object(ee.jsxs)(oe.a,{isOpen:e,onRequestClose:C,style:le,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(ee.jsx)("h1",{children:t?"Editar Evento":"Nuevo evento"}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var n,a=H()(k),r=H()(E);return a.isSameOrAfter(r)?L.a.fire("error","La fecha fin tiene que ser mayor a la de inicio","error"):w.trim().length<2?f(!1):(v(t?(n=g,function(){var e=Object(A.a)(I.a.mark((function e(t){var a,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F("events/".concat(n.id),n,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).ok?t(U(n)):L.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(A.a)(I.a.mark((function t(n,a){var r,c,o,s,i;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,F("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.evento.id,e.user={_id:c,name:o},n(M(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(g)),f(!0),void C())},children:[Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora inicio"}),Object(ee.jsx)(ie.a,{onChange:function(e){s(e),y(Object(u.a)(Object(u.a)({},g),{},{start:e}))},value:c,className:"form-control"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora fin"}),Object(ee.jsx)(ie.a,{onChange:function(e){b(e),y(Object(u.a)(Object(u.a)({},g),{},{end:e}))},value:d,minDate:c,className:"form-control"})]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Titulo y notas"}),Object(ee.jsx)("input",{type:"text",className:"form-control ".concat(!p&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:w,onChange:S}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:N,onChange:S}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(ee.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(ee.jsx)("i",{className:"far fa-save"}),Object(ee.jsx)("span",{children:" Guardar"})]})]})]})},Oe=function(e){var t=e.event,n=t.title,a=t.user;return Object(ee.jsxs)("div",{children:[Object(ee.jsx)("strong",{children:n}),Object(ee.jsxs)("span",{children:["- ",a.name]})]})},pe=function(){var e=Object(o.b)();return Object(ee.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(ue())},children:Object(ee.jsx)("i",{className:"fas fa-plus"})})},fe=function(){var e=Object(o.b)();return Object(ee.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(A.a)(I.a.mark((function e(t,n){var a,r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,F("events/".concat(a),{},"delete");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(B()):L.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(ee.jsx)("i",{className:"fas fa-trash"}),Object(ee.jsx)("span",{children:" Borrar Evento "})]})};n(104),n(105);H.a.locale("es");var ve=Object(ne.b)(H.a),he=function(){var e=Object(a.useState)(localStorage.getItem("lastView")||"month"),t=Object(Y.a)(e,2),n=t[0],r=t[1],c=Object(o.c)((function(e){return e.auth})).uid,s=Object(o.b)(),i=Object(o.c)((function(e){return e.calendar})),u=i.events,l=i.activeEvent;Object(a.useEffect)((function(){s(function(){var e=Object(A.a)(I.a.mark((function e(t){var n,a,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=J(a.eventos),t(X(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[s]);return Object(ee.jsxs)("div",{className:"calendar-screen",children:[Object(ee.jsx)(ae,{}),Object(ee.jsx)(ne.a,{localizer:ve,events:u,startAccessor:"start",endAccessor:"end",messages:re,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(e){s(ue())},onSelectEvent:function(e){s({type:d,payload:e})},onView:function(e){r(e),localStorage.setItem("lastView",e)},onSelectSlot:function(e){s(q())},selectable:!0,view:n,components:{event:Oe}}),Object(ee.jsx)(pe,{}),l&&Object(ee.jsx)(fe,{}),Object(ee.jsx)(me,{})]})},xe=n(38),ge=function(e){var t=e.isAuthenticated,n=e.component,a=Object(xe.a)(e,["isAuthenticated","component"]);return Object(ee.jsx)(T.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(n,Object(u.a)({},e)):Object(ee.jsx)(T.a,{to:"/login"})}}))},ye=function(e){var t=e.isAuthenticated,n=e.component,a=Object(xe.a)(e,["isAuthenticated","component"]);return Object(ee.jsx)(T.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(T.a,{to:"/"}):Object(ee.jsx)(n,Object(u.a)({},e))}}))},Ne=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(A.a)(I.a.mark((function e(t){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:a.uid,name:a.name}))):t(z());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(ee.jsx)("h5",{children:"Espere..."}):Object(ee.jsx)(D.a,{children:Object(ee.jsx)("div",{children:Object(ee.jsxs)(T.d,{children:[Object(ee.jsx)(ye,{exact:!0,path:"/login",component:te,isAuthenticated:!!r}),Object(ee.jsx)(ge,{exact:!0,path:"/",component:he,isAuthenticated:!!r}),Object(ee.jsx)(T.a,{to:"/"})]})})})},we=function(){return Object(ee.jsx)(o.a,{store:C,children:Object(ee.jsx)(Ne,{})})};n(107);c.a.render(Object(ee.jsx)(we,{}),document.getElementById("root"))},74:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.b89d4aad.chunk.js.map