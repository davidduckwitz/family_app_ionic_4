(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{qq66:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=(u("OO+k"),u("ej43")),o=function(){function l(l,n,u){this.alertController=l,this.router=n,this.authenticationService=u,this.firstname="",this.lastname="",this.username="",this.password="",this.cpassword=""}return l.prototype.ngOnInit=function(){},l.prototype.presentAlert=function(l,n){return u=this,void 0,e=function(){return function(l,n){var u,t,e,o,a={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(u)throw new TypeError("Generator is already executing.");for(;a;)try{if(u=1,t&&(e=2&o[0]?t.return:o[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,o[1])).done)return e;switch(t=0,e&&(o=[2&o[0],e.value]),o[0]){case 0:case 1:e=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,t=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(e=(e=a.trys).length>0&&e[e.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!e||o[1]>e[0]&&o[1]<e[3])){a.label=o[1];break}if(6===o[0]&&a.label<e[1]){a.label=e[1],e=o;break}if(e&&a.label<e[2]){a.label=e[2],a.ops.push(o);break}e[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(l,a)}catch(i){o=[6,i],t=0}finally{u=e=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}}(this,function(u){switch(u.label){case 0:return[4,this.alertController.create({header:l,message:n,buttons:["OK"]})];case 1:return[4,u.sent().present()];case 2:return u.sent(),[2]}})},new((t=void 0)||(t=Promise))(function(l,n){function o(l){try{i(e.next(l))}catch(u){n(u)}}function a(l){try{i(e.throw(l))}catch(u){n(u)}}function i(n){n.done?l(n.value):new t(function(l){l(n.value)}).then(o,a)}i((e=e.apply(u,[])).next())});var u,t,e},l.prototype.register=function(l,n,u,t,e,o){var a=this;if(e!==o)return console.error("Passwords dont match");try{console.log(t,e),this.authenticationService.registerV1(l,n,u,t,e).subscribe(function(l){1===l.status?(console.log(l.message),a.presentAlert("Success",l.message),a.router.navigate(["/login"])):(console.log(l.message),a.presentAlert("Danger",l.message))},function(l){console.log(l.status)})}catch(i){console.dir(i)}},l}(),a=function(){return function(){}}(),i=u("pMnS"),r=u("ra/t"),b=u("ntG5"),c=u("CI40"),s=u("ZYCi"),p=u("fHOL"),k=u("tXrQ"),h=u("M9A9"),f=u("A7o+"),d=u("gIcY"),v=u("Zq1E"),g=u("CssM"),C=t.nb({encapsulation:0,styles:[[""]],data:{}});function y(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,11,"ion-header",[],null,null,null,r.R,r.k)),t.ob(1,49152,null,0,b.w,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,r.nb,r.F)),t.ob(3,49152,null,0,b.vb,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.L,r.e)),t.ob(5,49152,null,0,b.g,[],null,null),(l()(),t.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","home"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,8).onClick(u)&&e),e},r.J,r.c)),t.ob(7,49152,null,0,b.c,[t.h,t.k],{defaultHref:[0,"defaultHref"]},null),t.ob(8,16384,null,0,c.a,[[2,s.n],[2,p.a],k.a,t.k],{defaultHref:[0,"defaultHref"]},null),(l()(),t.pb(9,0,null,0,2,"ion-title",[["text-center",""]],null,null,null,r.mb,r.G)),t.ob(10,49152,null,0,b.wb,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,["Register"])),(l()(),t.pb(12,0,null,null,88,"ion-content",[["padding",""]],null,null,null,r.P,r.i)),t.ob(13,49152,null,0,b.p,[t.h,t.k],null,null),(l()(),t.pb(14,0,null,0,13,"ion-row",[],null,null,null,r.bb,r.u)),t.ob(15,49152,null,0,b.bb,[],null,null),(l()(),t.pb(16,0,null,0,11,"ion-col",[],null,null,null,r.O,r.h)),t.ob(17,49152,null,0,b.o,[t.h,t.k],null,null),(l()(),t.pb(18,0,null,0,5,"h1",[["class","logo"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,19).onClick(u)&&e),"click"===n&&(e=!1!==t.zb(l,21).onClick()&&e),e},null,null)),t.ob(19,16384,null,0,h.a,[[2,s.n],k.a,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(20,1),t.ob(21,16384,null,0,s.o,[s.n,s.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(22,1),(l()(),t.Fb(-1,null,["FAMILY APP"])),(l()(),t.pb(24,0,null,0,3,"p",[["class","description"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["A Project by "])),(l()(),t.pb(26,0,null,null,1,"a",[["href","https://davidduckwitz.de"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["David Duckwitz & Arina ;)"])),(l()(),t.pb(28,0,null,0,67,"ion-list",[],null,null,null,r.X,r.q)),t.ob(29,49152,null,0,b.J,[t.h,t.k],null,null),(l()(),t.pb(30,0,null,0,10,"ion-item",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,32).onClick(u)&&e),e},r.V,r.o)),t.ob(31,49152,null,0,b.C,[t.h,t.k],null,null),t.ob(32,16384,null,0,h.a,[[2,s.n],k.a,t.k],null,null),(l()(),t.pb(33,0,null,0,3,"ion-label",[["position","floating"],["translate",""]],null,null,null,r.W,r.p)),t.ob(34,49152,null,0,b.I,[t.h,t.k],{position:[0,"position"]},null),t.ob(35,8536064,null,0,f.e,[f.k,t.k,t.h],{translate:[0,"translate"]},null),(l()(),t.Fb(-1,0,["Firstname"])),(l()(),t.pb(37,0,null,0,3,"ion-input",[["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,40)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,40)._handleInputEvent(u.target.value)&&e),e},r.U,r.n)),t.Cb(5120,null,d.d,function(l){return[l]},[v.a]),t.ob(39,49152,[["firstname",4]],0,b.B,[t.h,t.k],{type:[0,"type"]},null),t.ob(40,16384,null,0,v.a,[t.k],null,null),(l()(),t.pb(41,0,null,0,10,"ion-item",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,43).onClick(u)&&e),e},r.V,r.o)),t.ob(42,49152,null,0,b.C,[t.h,t.k],null,null),t.ob(43,16384,null,0,h.a,[[2,s.n],k.a,t.k],null,null),(l()(),t.pb(44,0,null,0,3,"ion-label",[["position","floating"],["translate",""]],null,null,null,r.W,r.p)),t.ob(45,49152,null,0,b.I,[t.h,t.k],{position:[0,"position"]},null),t.ob(46,8536064,null,0,f.e,[f.k,t.k,t.h],{translate:[0,"translate"]},null),(l()(),t.Fb(-1,0,["Lastname"])),(l()(),t.pb(48,0,null,0,3,"ion-input",[["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,51)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,51)._handleInputEvent(u.target.value)&&e),e},r.U,r.n)),t.Cb(5120,null,d.d,function(l){return[l]},[v.a]),t.ob(50,49152,[["lastname",4]],0,b.B,[t.h,t.k],{type:[0,"type"]},null),t.ob(51,16384,null,0,v.a,[t.k],null,null),(l()(),t.pb(52,0,null,0,10,"ion-item",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,54).onClick(u)&&e),e},r.V,r.o)),t.ob(53,49152,null,0,b.C,[t.h,t.k],null,null),t.ob(54,16384,null,0,h.a,[[2,s.n],k.a,t.k],null,null),(l()(),t.pb(55,0,null,0,3,"ion-label",[["position","floating"],["translate",""]],null,null,null,r.W,r.p)),t.ob(56,49152,null,0,b.I,[t.h,t.k],{position:[0,"position"]},null),t.ob(57,8536064,null,0,f.e,[f.k,t.k,t.h],{translate:[0,"translate"]},null),(l()(),t.Fb(-1,0,["Nickname / Alias"])),(l()(),t.pb(59,0,null,0,3,"ion-input",[["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,62)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,62)._handleInputEvent(u.target.value)&&e),e},r.U,r.n)),t.Cb(5120,null,d.d,function(l){return[l]},[v.a]),t.ob(61,49152,[["userna",4]],0,b.B,[t.h,t.k],{type:[0,"type"]},null),t.ob(62,16384,null,0,v.a,[t.k],null,null),(l()(),t.pb(63,0,null,0,10,"ion-item",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,65).onClick(u)&&e),e},r.V,r.o)),t.ob(64,49152,null,0,b.C,[t.h,t.k],null,null),t.ob(65,16384,null,0,h.a,[[2,s.n],k.a,t.k],null,null),(l()(),t.pb(66,0,null,0,3,"ion-label",[["position","floating"],["translate",""]],null,null,null,r.W,r.p)),t.ob(67,49152,null,0,b.I,[t.h,t.k],{position:[0,"position"]},null),t.ob(68,8536064,null,0,f.e,[f.k,t.k,t.h],{translate:[0,"translate"]},null),(l()(),t.Fb(-1,0,["Email"])),(l()(),t.pb(70,0,null,0,3,"ion-input",[["type","email"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,73)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,73)._handleInputEvent(u.target.value)&&e),e},r.U,r.n)),t.Cb(5120,null,d.d,function(l){return[l]},[v.a]),t.ob(72,49152,[["userem",4]],0,b.B,[t.h,t.k],{type:[0,"type"]},null),t.ob(73,16384,null,0,v.a,[t.k],null,null),(l()(),t.pb(74,0,null,0,10,"ion-item",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,76).onClick(u)&&e),e},r.V,r.o)),t.ob(75,49152,null,0,b.C,[t.h,t.k],null,null),t.ob(76,16384,null,0,h.a,[[2,s.n],k.a,t.k],null,null),(l()(),t.pb(77,0,null,0,3,"ion-label",[["position","floating"],["translate",""]],null,null,null,r.W,r.p)),t.ob(78,49152,null,0,b.I,[t.h,t.k],{position:[0,"position"]},null),t.ob(79,8536064,null,0,f.e,[f.k,t.k,t.h],{translate:[0,"translate"]},null),(l()(),t.Fb(-1,0,["Password"])),(l()(),t.pb(81,0,null,0,3,"ion-input",[["type","password"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,84)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,84)._handleInputEvent(u.target.value)&&e),e},r.U,r.n)),t.Cb(5120,null,d.d,function(l){return[l]},[v.a]),t.ob(83,49152,[["pass",4]],0,b.B,[t.h,t.k],{type:[0,"type"]},null),t.ob(84,16384,null,0,v.a,[t.k],null,null),(l()(),t.pb(85,0,null,0,10,"ion-item",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,87).onClick(u)&&e),e},r.V,r.o)),t.ob(86,49152,null,0,b.C,[t.h,t.k],null,null),t.ob(87,16384,null,0,h.a,[[2,s.n],k.a,t.k],null,null),(l()(),t.pb(88,0,null,0,3,"ion-label",[["position","floating"],["translate",""]],null,null,null,r.W,r.p)),t.ob(89,49152,null,0,b.I,[t.h,t.k],{position:[0,"position"]},null),t.ob(90,8536064,null,0,f.e,[f.k,t.k,t.h],{translate:[0,"translate"]},null),(l()(),t.Fb(-1,0,["Confirm Password"])),(l()(),t.pb(92,0,null,0,3,"ion-input",[["type","password"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,95)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,95)._handleInputEvent(u.target.value)&&e),e},r.U,r.n)),t.Cb(5120,null,d.d,function(l){return[l]},[v.a]),t.ob(94,49152,[["cpass",4]],0,b.B,[t.h,t.k],{type:[0,"type"]},null),t.ob(95,16384,null,0,v.a,[t.k],null,null),(l()(),t.pb(96,0,null,0,4,"ion-button",[["color","dark"],["expand","block"],["fill","solid"],["translate",""]],null,[[null,"click"]],function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==t.zb(l,98).onClick(u)&&e),"click"===n&&(e=!1!==o.register(t.zb(l,39).value,t.zb(l,50).value,t.zb(l,61).value,t.zb(l,72).value,t.zb(l,83).value,t.zb(l,94).value)&&e),e},r.K,r.d)),t.ob(97,49152,null,0,b.f,[t.h,t.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),t.ob(98,16384,null,0,h.a,[[2,s.n],k.a,t.k],null,null),t.ob(99,8536064,null,0,f.e,[f.k,t.k,t.h],{translate:[0,"translate"]},null),(l()(),t.Fb(-1,0,["SignUp"]))],function(l,n){l(n,7,0,"home"),l(n,8,0,"home");var u=l(n,20,0,"/home");l(n,19,0,u);var t=l(n,22,0,"/home");l(n,21,0,t),l(n,34,0,"floating"),l(n,35,0,""),l(n,39,0,"text"),l(n,45,0,"floating"),l(n,46,0,""),l(n,50,0,"text"),l(n,56,0,"floating"),l(n,57,0,""),l(n,61,0,"text"),l(n,67,0,"floating"),l(n,68,0,""),l(n,72,0,"email"),l(n,78,0,"floating"),l(n,79,0,""),l(n,83,0,"password"),l(n,89,0,"floating"),l(n,90,0,""),l(n,94,0,"password"),l(n,97,0,"dark","block","solid"),l(n,99,0,"")},null)}function m(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-register",[],null,null,null,y,C)),t.ob(1,114688,null,0,o,[g.a,s.n,e.a],null,null)],function(l,n){l(n,1,0)},null)}var w=t.lb("app-register",o,m,{},{},[]),z=u("Ip0R"),x=u("95zI"),B=u("9opb"),I=u("apKv"),E=u("B4/3");u.d(n,"RegisterPageModuleNgFactory",function(){return F});var F=t.mb(a,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[i.a,w]],[3,t.j],t.x]),t.xb(4608,z.l,z.k,[t.u,[2,z.s]]),t.xb(4608,d.i,d.i,[]),t.xb(4608,x.a,x.a,[t.z,t.g]),t.xb(4608,B.a,B.a,[x.a,t.j,t.q]),t.xb(4608,I.a,I.a,[x.a,t.j,t.q]),t.xb(1073742336,z.b,z.b,[]),t.xb(1073742336,d.h,d.h,[]),t.xb(1073742336,d.c,d.c,[]),t.xb(1073742336,E.a,E.a,[]),t.xb(1073742336,f.h,f.h,[]),t.xb(1073742336,s.p,s.p,[[2,s.v],[2,s.n]]),t.xb(1073742336,a,a,[]),t.xb(1024,s.l,function(){return[[{path:"",component:o}]]},[])])})}}]);