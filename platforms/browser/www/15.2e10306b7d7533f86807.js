(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{qq66:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=(u("OO+k"),u("ej43")),e=function(){function l(l,n,u){this.alertController=l,this.router=n,this.authenticationService=u,this.username="",this.password="",this.cpassword=""}return l.prototype.ngOnInit=function(){},l.prototype.presentAlert=function(l,n){return u=this,void 0,o=function(){return function(l,n){var u,t,o,e,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return e={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function r(e){return function(r){return function(e){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,t&&(o=2&e[0]?t.return:e[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,e[1])).done)return o;switch(t=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return i.label++,{value:e[1],done:!1};case 5:i.label++,t=e[1],e=[0];continue;case 7:e=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){i=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){i.label=e[1];break}if(6===e[0]&&i.label<o[1]){i.label=o[1],o=e;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(e);break}o[2]&&i.ops.pop(),i.trys.pop();continue}e=n.call(l,i)}catch(r){e=[6,r],t=0}finally{u=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,r])}}}(this,function(u){switch(u.label){case 0:return[4,this.alertController.create({header:l,message:n,buttons:["OK"]})];case 1:return[4,u.sent().present()];case 2:return u.sent(),[2]}})},new((t=void 0)||(t=Promise))(function(l,n){function e(l){try{r(o.next(l))}catch(u){n(u)}}function i(l){try{r(o.throw(l))}catch(u){n(u)}}function r(n){n.done?l(n.value):new t(function(l){l(n.value)}).then(e,i)}r((o=o.apply(u,[])).next())});var u,t,o},l.prototype.register=function(l,n,u,t){var o=this;if(u!==t)return console.error("Passwords dont match");try{console.log(n,u),this.authenticationService.registerV1(l,n,u).subscribe(function(l){1===l.status?(console.log(l.message),o.presentAlert("Success",l.message),o.router.navigate(["/login"])):(console.log(l.message),o.presentAlert("Danger",l.message))},function(l){console.log(l.status)})}catch(e){console.dir(e)}},l}(),i=function(){return function(){}}(),r=u("pMnS"),a=u("ra/t"),b=u("ntG5"),c=u("M9A9"),s=u("ZYCi"),p=u("tXrQ"),h=u("gIcY"),f=u("Zq1E"),k=u("CssM"),d=t.nb({encapsulation:0,styles:[[""]],data:{}});function g(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,6,"ion-header",[],null,null,null,a.V,a.n)),t.ob(1,49152,null,0,b.w,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,a.pb,a.G)),t.ob(3,49152,null,0,b.vb,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,2,"ion-title",[],null,null,null,a.ob,a.H)),t.ob(5,49152,null,0,b.wb,[t.h,t.k],null,null),(l()(),t.Eb(-1,0,["Register"])),(l()(),t.pb(7,0,null,null,61,"ion-content",[["padding",""]],null,null,null,a.S,a.k)),t.ob(8,49152,null,0,b.p,[t.h,t.k],null,null),(l()(),t.pb(9,0,null,0,13,"ion-row",[],null,null,null,a.eb,a.w)),t.ob(10,49152,null,0,b.bb,[],null,null),(l()(),t.pb(11,0,null,0,11,"ion-col",[],null,null,null,a.R,a.j)),t.ob(12,49152,null,0,b.o,[t.h,t.k],null,null),(l()(),t.pb(13,0,null,0,5,"h1",[["class","logo"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.zb(l,14).onClick(u)&&o),"click"===n&&(o=!1!==t.zb(l,16).onClick()&&o),o},null,null)),t.ob(14,16384,null,0,c.a,[[2,s.n],p.a,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(15,1),t.ob(16,16384,null,0,s.o,[s.n,s.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(17,1),(l()(),t.Eb(-1,null,["FAMILY APP"])),(l()(),t.pb(19,0,null,0,3,"p",[["class","description"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["A Project by "])),(l()(),t.pb(21,0,null,null,1,"a",[["href","https://davidduckwitz.de"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["David Duckwitz & Arina ;)"])),(l()(),t.pb(23,0,null,0,41,"ion-list",[],null,null,null,a.ab,a.s)),t.ob(24,49152,null,0,b.J,[t.h,t.k],null,null),(l()(),t.pb(25,0,null,0,9,"ion-item",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.zb(l,27).onClick(u)&&o),o},a.Y,a.q)),t.ob(26,49152,null,0,b.C,[t.h,t.k],null,null),t.ob(27,16384,null,0,c.a,[[2,s.n],p.a,t.k],null,null),(l()(),t.pb(28,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.Z,a.r)),t.ob(29,49152,null,0,b.I,[t.h,t.k],{position:[0,"position"]},null),(l()(),t.Eb(-1,0,["Username"])),(l()(),t.pb(31,0,null,0,3,"ion-input",[["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==t.zb(l,34)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==t.zb(l,34)._handleInputEvent(u.target.value)&&o),o},a.X,a.p)),t.Bb(5120,null,h.d,function(l){return[l]},[f.a]),t.ob(33,49152,[["userna",4]],0,b.B,[t.h,t.k],{type:[0,"type"]},null),t.ob(34,16384,null,0,f.a,[t.k],null,null),(l()(),t.pb(35,0,null,0,9,"ion-item",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.zb(l,37).onClick(u)&&o),o},a.Y,a.q)),t.ob(36,49152,null,0,b.C,[t.h,t.k],null,null),t.ob(37,16384,null,0,c.a,[[2,s.n],p.a,t.k],null,null),(l()(),t.pb(38,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.Z,a.r)),t.ob(39,49152,null,0,b.I,[t.h,t.k],{position:[0,"position"]},null),(l()(),t.Eb(-1,0,["Email"])),(l()(),t.pb(41,0,null,0,3,"ion-input",[["type","email"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==t.zb(l,44)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==t.zb(l,44)._handleInputEvent(u.target.value)&&o),o},a.X,a.p)),t.Bb(5120,null,h.d,function(l){return[l]},[f.a]),t.ob(43,49152,[["userem",4]],0,b.B,[t.h,t.k],{type:[0,"type"]},null),t.ob(44,16384,null,0,f.a,[t.k],null,null),(l()(),t.pb(45,0,null,0,9,"ion-item",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.zb(l,47).onClick(u)&&o),o},a.Y,a.q)),t.ob(46,49152,null,0,b.C,[t.h,t.k],null,null),t.ob(47,16384,null,0,c.a,[[2,s.n],p.a,t.k],null,null),(l()(),t.pb(48,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.Z,a.r)),t.ob(49,49152,null,0,b.I,[t.h,t.k],{position:[0,"position"]},null),(l()(),t.Eb(-1,0,["Password"])),(l()(),t.pb(51,0,null,0,3,"ion-input",[["type","password"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==t.zb(l,54)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==t.zb(l,54)._handleInputEvent(u.target.value)&&o),o},a.X,a.p)),t.Bb(5120,null,h.d,function(l){return[l]},[f.a]),t.ob(53,49152,[["pass",4]],0,b.B,[t.h,t.k],{type:[0,"type"]},null),t.ob(54,16384,null,0,f.a,[t.k],null,null),(l()(),t.pb(55,0,null,0,9,"ion-item",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.zb(l,57).onClick(u)&&o),o},a.Y,a.q)),t.ob(56,49152,null,0,b.C,[t.h,t.k],null,null),t.ob(57,16384,null,0,c.a,[[2,s.n],p.a,t.k],null,null),(l()(),t.pb(58,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.Z,a.r)),t.ob(59,49152,null,0,b.I,[t.h,t.k],{position:[0,"position"]},null),(l()(),t.Eb(-1,0,["Confirm Password"])),(l()(),t.pb(61,0,null,0,3,"ion-input",[["type","password"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==t.zb(l,64)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==t.zb(l,64)._handleInputEvent(u.target.value)&&o),o},a.X,a.p)),t.Bb(5120,null,h.d,function(l){return[l]},[f.a]),t.ob(63,49152,[["cpass",4]],0,b.B,[t.h,t.k],{type:[0,"type"]},null),t.ob(64,16384,null,0,f.a,[t.k],null,null),(l()(),t.pb(65,0,null,0,3,"ion-button",[["color","dark"],["expand","block"],["fill","solid"]],null,[[null,"click"]],function(l,n,u){var o=!0,e=l.component;return"click"===n&&(o=!1!==t.zb(l,67).onClick(u)&&o),"click"===n&&(o=!1!==e.register(t.zb(l,33).value,t.zb(l,43).value,t.zb(l,53).value,t.zb(l,63).value)&&o),o},a.L,a.d)),t.ob(66,49152,null,0,b.f,[t.h,t.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),t.ob(67,16384,null,0,c.a,[[2,s.n],p.a,t.k],null,null),(l()(),t.Eb(-1,0,["Signup"]))],function(l,n){var u=l(n,15,0,"/home");l(n,14,0,u);var t=l(n,17,0,"/home");l(n,16,0,t),l(n,29,0,"floating"),l(n,33,0,"text"),l(n,39,0,"floating"),l(n,43,0,"email"),l(n,49,0,"floating"),l(n,53,0,"password"),l(n,59,0,"floating"),l(n,63,0,"password"),l(n,66,0,"dark","block","solid")},null)}function v(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-register",[],null,null,null,g,d)),t.ob(1,114688,null,0,e,[k.a,s.n,o.a],null,null)],function(l,n){l(n,1,0)},null)}var w=t.lb("app-register",e,v,{},{},[]),y=u("Ip0R"),m=u("95zI"),C=u("9opb"),x=u("apKv"),z=u("B4/3");u.d(n,"RegisterPageModuleNgFactory",function(){return B});var B=t.mb(i,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[r.a,w]],[3,t.j],t.x]),t.xb(4608,y.l,y.k,[t.u,[2,y.r]]),t.xb(4608,h.i,h.i,[]),t.xb(4608,m.a,m.a,[t.z,t.g]),t.xb(4608,C.a,C.a,[m.a,t.j,t.q]),t.xb(4608,x.a,x.a,[m.a,t.j,t.q]),t.xb(1073742336,y.b,y.b,[]),t.xb(1073742336,h.h,h.h,[]),t.xb(1073742336,h.c,h.c,[]),t.xb(1073742336,z.a,z.a,[]),t.xb(1073742336,s.p,s.p,[[2,s.v],[2,s.n]]),t.xb(1073742336,i,i,[]),t.xb(1024,s.l,function(){return[[{path:"",component:e}]]},[])])})}}]);