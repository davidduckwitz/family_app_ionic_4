(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{nX7e:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=u("HNzf"),i=u("NzdG"),e=(u("OO+k"),u("ej43")),r=function(){function l(l,n,u,o,t,i){this.googlePlus=l,this.nativeStorage=n,this.loadingController=u,this.router=o,this.platform=t,this.authenticationService=i,this.userReady=!1}return l.prototype.ngOnInit=function(){return l=this,void 0,u=function(){var l;return function(l,n){var u,o,t,i,e={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return i={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function r(i){return function(r){return function(i){if(u)throw new TypeError("Generator is already executing.");for(;e;)try{if(u=1,o&&(t=2&i[0]?o.return:i[0]?o.throw||((t=o.return)&&t.call(o),0):o.next)&&!(t=t.call(o,i[1])).done)return t;switch(o=0,t&&(i=[2&i[0],t.value]),i[0]){case 0:case 1:t=i;break;case 4:return e.label++,{value:i[1],done:!1};case 5:e.label++,o=i[1],i=[0];continue;case 7:i=e.ops.pop(),e.trys.pop();continue;default:if(!(t=(t=e.trys).length>0&&t[t.length-1])&&(6===i[0]||2===i[0])){e=0;continue}if(3===i[0]&&(!t||i[1]>t[0]&&i[1]<t[3])){e.label=i[1];break}if(6===i[0]&&e.label<t[1]){e.label=t[1],t=i;break}if(t&&e.label<t[2]){e.label=t[2],e.ops.push(i);break}t[2]&&e.ops.pop(),e.trys.pop();continue}i=n.call(l,e)}catch(r){i=[6,r],o=0}finally{u=t=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,r])}}}(this,function(n){switch(n.label){case 0:return[4,this.loadingController.create({message:"Please wait..."})];case 1:return[4,(l=n.sent()).present()];case 2:return n.sent(),this.user=this.authenticationService.getUser(),this.userReady=!0,l.dismiss(),[2]}})},new((n=void 0)||(n=Promise))(function(o,t){function i(l){try{r(u.next(l))}catch(n){t(n)}}function e(l){try{r(u.throw(l))}catch(n){t(n)}}function r(l){l.done?o(l.value):new n(function(n){n(l.value)}).then(i,e)}r((u=u.apply(l,[])).next())});var l,n,u},l.prototype.logoutV1=function(){localStorage.removeItem("user"),this.router.navigate(["/home"])},l.prototype.doGoogleLogout=function(){var l=this;this.googlePlus.logout().then(function(n){localStorage.removeItem("user"),l.router.navigate(["/home"])},function(l){console.log(l)})},l.prototype.Logout=function(){localStorage.removeItem("user"),this.router.navigate(["/home"])},l}(),a=function(){return function(){}}(),b=u("pMnS"),c=u("ra/t"),s=u("ntG5"),k=u("M9A9"),p=u("ZYCi"),h=u("tXrQ"),f=u("Ip0R"),g=u("Eq7r"),d=u("YxxD"),m=o.nb({encapsulation:0,styles:[[""]],data:{}});function v(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,2,"ion-title",[],null,null,null,c.ob,c.H)),o.ob(1,49152,null,0,s.wb,[o.h,o.k],null,null),(l()(),o.Eb(2,0,[" Your Dashboard ",", "," "]))],null,function(l,n){var u=n.component;l(n,2,0,u.user.firstname,u.user.email)})}function y(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,9,"ion-title",[],null,null,null,c.ob,c.H)),o.ob(1,49152,null,0,s.wb,[o.h,o.k],null,null),(l()(),o.Eb(-1,0,[" Please Login, restart the app or delete datas in your android settings "])),(l()(),o.pb(3,0,null,0,6,"ion-button",[["class","danger"],["expand","block"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,5).onClick(u)&&t),"click"===n&&(t=!1!==o.zb(l,7).onClick()&&t),t},c.L,c.d)),o.ob(4,49152,null,0,s.f,[o.h,o.k],{expand:[0,"expand"]},null),o.ob(5,16384,null,0,k.a,[[2,p.n],h.a,o.k],{routerLink:[0,"routerLink"]},null),o.Ab(6,1),o.ob(7,16384,null,0,p.o,[p.n,p.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.Ab(8,1),(l()(),o.Eb(-1,0,["LOGIN"]))],function(l,n){l(n,4,0,"block");var u=l(n,6,0,"/login");l(n,5,0,u);var o=l(n,8,0,"/login");l(n,7,0,o)},null)}function L(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.user.image)})}function x(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,16,"ion-card",[["align-self:",""],["center",""],["style","width: 100%; text-align: center;"]],null,null,null,c.Q,c.f)),o.ob(1,49152,null,0,s.h,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,3,"ion-button",[["class","danger"],["expand","block"]],null,[[null,"click"]],function(l,n,u){var t=!0,i=l.component;return"click"===n&&(t=!1!==o.zb(l,4).onClick(u)&&t),"click"===n&&(t=!1!==i.Logout()&&t),t},c.L,c.d)),o.ob(3,49152,null,0,s.f,[o.h,o.k],{expand:[0,"expand"]},null),o.ob(4,16384,null,0,k.a,[[2,p.n],h.a,o.k],null,null),(l()(),o.Eb(-1,0,["Log Out"])),(l()(),o.pb(6,0,null,0,6,"ion-card-header",[],null,null,null,c.O,c.h)),o.ob(7,49152,null,0,s.j,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,L)),o.ob(9,16384,null,0,f.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(10,0,null,0,2,"ion-card-title",[],null,null,null,c.P,c.i)),o.ob(11,49152,null,0,s.l,[o.h,o.k],null,null),(l()(),o.Eb(12,0,["Hallo "," ",""])),(l()(),o.pb(13,0,null,0,3,"ion-card-content",[],null,null,null,c.N,c.g)),o.ob(14,49152,null,0,s.i,[o.h,o.k],null,null),(l()(),o.pb(15,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Eb(-1,null,["sdfsdfsd"]))],function(l,n){var u=n.component;l(n,3,0,"block"),l(n,9,0,u.user.image)},function(l,n){var u=n.component;l(n,12,0,u.user.firstname,u.user.email)})}function w(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,11,"ion-header",[],null,null,null,c.V,c.n)),o.ob(1,49152,null,0,s.w,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,c.pb,c.G)),o.ob(3,49152,null,0,s.vb,[o.h,o.k],null,null),(l()(),o.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,c.M,c.e)),o.ob(5,49152,null,0,s.g,[],null,null),(l()(),o.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,c.bb,c.u)),o.ob(7,49152,null,0,s.M,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,v)),o.ob(9,16384,null,0,f.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,y)),o.ob(11,16384,null,0,f.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(12,0,null,null,98,"ion-content",[],null,null,null,c.S,c.k)),o.ob(13,49152,null,0,s.p,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,x)),o.ob(15,16384,null,0,f.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(16,0,null,0,18,"ion-card",[],null,null,null,c.Q,c.f)),o.ob(17,49152,null,0,s.h,[o.h,o.k],null,null),(l()(),o.pb(18,0,null,0,13,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,20).onClick(u)&&t),"click"===n&&(t=!1!==o.zb(l,22).onClick()&&t),t},c.Y,c.q)),o.ob(19,49152,null,0,s.C,[o.h,o.k],null,null),o.ob(20,16384,null,0,k.a,[[2,p.n],h.a,o.k],{routerLink:[0,"routerLink"]},null),o.Ab(21,1),o.ob(22,16384,null,0,p.o,[p.n,p.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.Ab(23,1),(l()(),o.pb(24,0,null,0,0,"img",[["slot","start"],["src","/assets/icon/family_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(l()(),o.pb(25,0,null,0,2,"ion-label",[],null,null,null,c.Z,c.r)),o.ob(26,49152,null,0,s.I,[o.h,o.k],null,null),(l()(),o.Eb(-1,0,["Familys"])),(l()(),o.pb(28,0,null,0,3,"ion-button",[["fill","outline"],["slot","end"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,30).onClick(u)&&t),t},c.L,c.d)),o.ob(29,49152,null,0,s.f,[o.h,o.k],{fill:[0,"fill"]},null),o.ob(30,16384,null,0,k.a,[[2,p.n],h.a,o.k],null,null),(l()(),o.Eb(-1,0,["View"])),(l()(),o.pb(32,0,null,0,2,"ion-card-content",[],null,null,null,c.N,c.g)),o.ob(33,49152,null,0,s.i,[o.h,o.k],null,null),(l()(),o.Eb(-1,0,[" Manage your Familys, send or enter invite codes and get Details about Familymembers "])),(l()(),o.pb(35,0,null,0,18,"ion-card",[],null,null,null,c.Q,c.f)),o.ob(36,49152,null,0,s.h,[o.h,o.k],null,null),(l()(),o.pb(37,0,null,0,13,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,39).onClick(u)&&t),"click"===n&&(t=!1!==o.zb(l,41).onClick()&&t),t},c.Y,c.q)),o.ob(38,49152,null,0,s.C,[o.h,o.k],null,null),o.ob(39,16384,null,0,k.a,[[2,p.n],h.a,o.k],{routerLink:[0,"routerLink"]},null),o.Ab(40,1),o.ob(41,16384,null,0,p.o,[p.n,p.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.Ab(42,1),(l()(),o.pb(43,0,null,0,0,"img",[["slot","start"],["src","/assets/icon/communication_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(l()(),o.pb(44,0,null,0,2,"ion-label",[],null,null,null,c.Z,c.r)),o.ob(45,49152,null,0,s.I,[o.h,o.k],null,null),(l()(),o.Eb(-1,0,["Communication"])),(l()(),o.pb(47,0,null,0,3,"ion-button",[["fill","outline"],["slot","end"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,49).onClick(u)&&t),t},c.L,c.d)),o.ob(48,49152,null,0,s.f,[o.h,o.k],{fill:[0,"fill"]},null),o.ob(49,16384,null,0,k.a,[[2,p.n],h.a,o.k],null,null),(l()(),o.Eb(-1,0,["View"])),(l()(),o.pb(51,0,null,0,2,"ion-card-content",[],null,null,null,c.N,c.g)),o.ob(52,49152,null,0,s.i,[o.h,o.k],null,null),(l()(),o.Eb(-1,0,[" Stay in contact with your Familymembers - Chat with text and Emojis "])),(l()(),o.pb(54,0,null,0,18,"ion-card",[],null,null,null,c.Q,c.f)),o.ob(55,49152,null,0,s.h,[o.h,o.k],null,null),(l()(),o.pb(56,0,null,0,13,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,58).onClick(u)&&t),"click"===n&&(t=!1!==o.zb(l,60).onClick()&&t),t},c.Y,c.q)),o.ob(57,49152,null,0,s.C,[o.h,o.k],null,null),o.ob(58,16384,null,0,k.a,[[2,p.n],h.a,o.k],{routerLink:[0,"routerLink"]},null),o.Ab(59,1),o.ob(60,16384,null,0,p.o,[p.n,p.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.Ab(61,1),(l()(),o.pb(62,0,null,0,0,"img",[["slot","start"],["src","/assets/icon/calendar_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(l()(),o.pb(63,0,null,0,2,"ion-label",[],null,null,null,c.Z,c.r)),o.ob(64,49152,null,0,s.I,[o.h,o.k],null,null),(l()(),o.Eb(-1,0,["Calendar"])),(l()(),o.pb(66,0,null,0,3,"ion-button",[["fill","outline"],["slot","end"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,68).onClick(u)&&t),t},c.L,c.d)),o.ob(67,49152,null,0,s.f,[o.h,o.k],{fill:[0,"fill"]},null),o.ob(68,16384,null,0,k.a,[[2,p.n],h.a,o.k],null,null),(l()(),o.Eb(-1,0,["View"])),(l()(),o.pb(70,0,null,0,2,"ion-card-content",[],null,null,null,c.N,c.g)),o.ob(71,49152,null,0,s.i,[o.h,o.k],null,null),(l()(),o.Eb(-1,0,[" Manage your Dates, Events and Birthdays "])),(l()(),o.pb(73,0,null,0,18,"ion-card",[],null,null,null,c.Q,c.f)),o.ob(74,49152,null,0,s.h,[o.h,o.k],null,null),(l()(),o.pb(75,0,null,0,13,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,77).onClick(u)&&t),"click"===n&&(t=!1!==o.zb(l,79).onClick()&&t),t},c.Y,c.q)),o.ob(76,49152,null,0,s.C,[o.h,o.k],null,null),o.ob(77,16384,null,0,k.a,[[2,p.n],h.a,o.k],{routerLink:[0,"routerLink"]},null),o.Ab(78,1),o.ob(79,16384,null,0,p.o,[p.n,p.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.Ab(80,1),(l()(),o.pb(81,0,null,0,0,"img",[["slot","start"],["src","/assets/icon/tracking2_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(l()(),o.pb(82,0,null,0,2,"ion-label",[],null,null,null,c.Z,c.r)),o.ob(83,49152,null,0,s.I,[o.h,o.k],null,null),(l()(),o.Eb(-1,0,["Tracking"])),(l()(),o.pb(85,0,null,0,3,"ion-button",[["fill","outline"],["slot","end"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,87).onClick(u)&&t),t},c.L,c.d)),o.ob(86,49152,null,0,s.f,[o.h,o.k],{fill:[0,"fill"]},null),o.ob(87,16384,null,0,k.a,[[2,p.n],h.a,o.k],null,null),(l()(),o.Eb(-1,0,["View"])),(l()(),o.pb(89,0,null,0,2,"ion-card-content",[],null,null,null,c.N,c.g)),o.ob(90,49152,null,0,s.i,[o.h,o.k],null,null),(l()(),o.Eb(-1,0,[" Display your Position and get Position of your Familymembers (only if they push their location) "])),(l()(),o.pb(92,0,null,0,18,"ion-card",[],null,null,null,c.Q,c.f)),o.ob(93,49152,null,0,s.h,[o.h,o.k],null,null),(l()(),o.pb(94,0,null,0,13,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,96).onClick(u)&&t),"click"===n&&(t=!1!==o.zb(l,98).onClick()&&t),t},c.Y,c.q)),o.ob(95,49152,null,0,s.C,[o.h,o.k],null,null),o.ob(96,16384,null,0,k.a,[[2,p.n],h.a,o.k],{routerLink:[0,"routerLink"]},null),o.Ab(97,1),o.ob(98,16384,null,0,p.o,[p.n,p.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.Ab(99,1),(l()(),o.pb(100,0,null,0,0,"img",[["slot","start"],["src","/assets/icon/settings_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(l()(),o.pb(101,0,null,0,2,"ion-label",[],null,null,null,c.Z,c.r)),o.ob(102,49152,null,0,s.I,[o.h,o.k],null,null),(l()(),o.Eb(-1,0,["Settings"])),(l()(),o.pb(104,0,null,0,3,"ion-button",[["fill","outline"],["slot","end"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,106).onClick(u)&&t),t},c.L,c.d)),o.ob(105,49152,null,0,s.f,[o.h,o.k],{fill:[0,"fill"]},null),o.ob(106,16384,null,0,k.a,[[2,p.n],h.a,o.k],null,null),(l()(),o.Eb(-1,0,["View"])),(l()(),o.pb(108,0,null,0,2,"ion-card-content",[],null,null,null,c.N,c.g)),o.ob(109,49152,null,0,s.i,[o.h,o.k],null,null),(l()(),o.Eb(-1,0,[" Manage your Account "]))],function(l,n){var u=n.component;l(n,9,0,u.userReady),l(n,11,0,!u.userReady),l(n,15,0,u.userReady);var o=l(n,21,0,"/family");l(n,20,0,o);var t=l(n,23,0,"/family");l(n,22,0,t),l(n,29,0,"outline");var i=l(n,40,0,"/communication");l(n,39,0,i);var e=l(n,42,0,"/communication");l(n,41,0,e),l(n,48,0,"outline");var r=l(n,59,0,"/calendar");l(n,58,0,r);var a=l(n,61,0,"/calendar");l(n,60,0,a),l(n,67,0,"outline");var b=l(n,78,0,"/tracking");l(n,77,0,b);var c=l(n,80,0,"/tracking");l(n,79,0,c),l(n,86,0,"outline");var s=l(n,97,0,"/settings");l(n,96,0,s);var k=l(n,99,0,"/settings");l(n,98,0,k),l(n,105,0,"outline")},null)}function C(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,1,"app-user",[],null,null,null,w,m)),o.ob(1,114688,null,0,r,[i.a,t.a,g.a,p.n,d.a,e.a],null,null)],function(l,n){l(n,1,0)},null)}var E=o.lb("app-user",r,C,{},{},[]),z=u("gIcY"),I=u("95zI"),A=u("9opb"),F=u("apKv"),S=u("B4/3");u.d(n,"UserPageModuleNgFactory",function(){return j});var j=o.mb(a,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[b.a,E]],[3,o.j],o.x]),o.xb(4608,f.l,f.k,[o.u,[2,f.r]]),o.xb(4608,z.i,z.i,[]),o.xb(4608,I.a,I.a,[o.z,o.g]),o.xb(4608,A.a,A.a,[I.a,o.j,o.q]),o.xb(4608,F.a,F.a,[I.a,o.j,o.q]),o.xb(1073742336,f.b,f.b,[]),o.xb(1073742336,z.h,z.h,[]),o.xb(1073742336,z.c,z.c,[]),o.xb(1073742336,S.a,S.a,[]),o.xb(1073742336,p.p,p.p,[[2,p.v],[2,p.n]]),o.xb(1073742336,a,a,[]),o.xb(1024,p.l,function(){return[[{path:"",component:r}]]},[])])})}}]);