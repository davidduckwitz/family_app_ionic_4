(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"f+ep":function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=u("NzdG"),e=(u("OO+k"),u("AytR")),i=u("ej43"),r=function(l,n,u,o){return new(u||(u=Promise))(function(t,e){function i(l){try{a(o.next(l))}catch(n){e(n)}}function r(l){try{a(o.throw(l))}catch(n){e(n)}}function a(l){l.done?t(l.value):new u(function(n){n(l.value)}).then(i,r)}a((o=o.apply(l,n||[])).next())})},a=function(l,n){var u,o,t,e,i={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return e={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function r(e){return function(r){return function(e){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,o&&(t=2&e[0]?o.return:e[0]?o.throw||((t=o.return)&&t.call(o),0):o.next)&&!(t=t.call(o,e[1])).done)return t;switch(o=0,t&&(e=[2&e[0],t.value]),e[0]){case 0:case 1:t=e;break;case 4:return i.label++,{value:e[1],done:!1};case 5:i.label++,o=e[1],e=[0];continue;case 7:e=i.ops.pop(),i.trys.pop();continue;default:if(!(t=(t=i.trys).length>0&&t[t.length-1])&&(6===e[0]||2===e[0])){i=0;continue}if(3===e[0]&&(!t||e[1]>t[0]&&e[1]<t[3])){i.label=e[1];break}if(6===e[0]&&i.label<t[1]){i.label=t[1],t=e;break}if(t&&i.label<t[2]){i.label=t[2],i.ops.push(e);break}t[2]&&i.ops.pop(),i.trys.pop();continue}e=n.call(l,i)}catch(r){e=[6,r],o=0}finally{u=t=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,r])}}},c=function(){function l(l,n,u,o,t,e){this.googlePlus=l,this.loadingController=n,this.router=u,this.platform=o,this.alertController=t,this.authenticationService=e}return l.prototype.doGoogleLogin=function(){return r(this,void 0,void 0,function(){var l,n=this;return a(this,function(u){switch(u.label){case 0:return[4,this.loadingController.create({message:"Please wait..."})];case 1:return l=u.sent(),this.presentLoading(l),this.googlePlus.login({scopes:"",webClientId:e.a.googleWebClientId,offline:!0}).then(function(u){n.authenticationService.setUser({name:u.displayName,email:u.email,picture:u.imageUrl}),n.router.navigate(["/user"]),l.dismiss()},function(u){console.log(u),n.platform.is("cordova")||n.presentAlert("success","Cordova kann im Browser nicht geladen werden"),l.dismiss()}),[2]}})})},l.prototype.loginV1=function(l,n){var u=this;console.log(l,n),this.authenticationService.loginV1(l,n).subscribe(function(l){1===l.status?(u.presentAlert("Success",l.message),u.authenticationService.setUser({name:l.username,firstname:l.firstname,lastname:l.lastname,email:l.email,image:l.image,userid:l.userid}),u.router.navigate(["/user"])):u.presentAlert("Danger",l.message)},function(l){console.log(l.status),u.presentAlert("Danger",l.status)})},l.prototype.devloginV1=function(l,n){this.loginV1(l,n),this.router.navigate(["/user"])},l.prototype.presentAlert=function(l,n){return r(this,void 0,void 0,function(){return a(this,function(u){switch(u.label){case 0:return[4,this.alertController.create({header:l,message:n,buttons:["OK"]})];case 1:return[4,u.sent().present()];case 2:return u.sent(),[2]}})})},l.prototype.presentLoading=function(l){return r(this,void 0,void 0,function(){return a(this,function(n){switch(n.label){case 0:return[4,l.present()];case 1:return[2,n.sent()]}})})},l}(),s=function(){return function(){}}(),b=u("pMnS"),p=u("ra/t"),h=u("ntG5"),g=u("M9A9"),k=u("ZYCi"),f=u("tXrQ"),d=u("gIcY"),v=u("Zq1E"),m=u("A7o+"),w=u("Eq7r"),x=u("YxxD"),y=u("CssM"),C=o.nb({encapsulation:0,styles:[[".login-content[_ngcontent-%COMP%]{--background:white}.logo[_ngcontent-%COMP%]{color:#000;font-size:64px;font-weight:700;text-align:center;padding-top:50px}.description[_ngcontent-%COMP%]{color:#000;font-size:22px;text-align:center}.log-in-button[_ngcontent-%COMP%]{margin-top:40px;font-weight:700}"]],data:{}});function z(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,77,"ion-content",[["class","login-content"],["padding",""]],null,null,null,p.P,p.i)),o.ob(1,49152,null,0,h.p,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,16,"ion-row",[],null,null,null,p.bb,p.u)),o.ob(3,49152,null,0,h.bb,[],null,null),(l()(),o.pb(4,0,null,0,14,"ion-col",[],null,null,null,p.O,p.h)),o.ob(5,49152,null,0,h.o,[o.h,o.k],null,null),(l()(),o.pb(6,0,null,0,8,"h1",[["class","logo"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,7).onClick(u)&&t),"click"===n&&(t=!1!==o.zb(l,9).onClick()&&t),t},null,null)),o.ob(7,16384,null,0,g.a,[[2,k.n],f.a,o.k],{routerLink:[0,"routerLink"]},null),o.Ab(8,1),o.ob(9,16384,null,0,k.o,[k.n,k.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.Ab(10,1),(l()(),o.pb(11,0,null,null,3,"ion-label",[["color","primary"]],null,null,null,p.W,p.p)),o.ob(12,49152,null,0,h.I,[o.h,o.k],{color:[0,"color"]},null),(l()(),o.Fb(-1,0,[" FAMILY APP "])),(l()(),o.pb(14,0,null,0,0,"img",[["src","/assets/icon/family-icon.png"],["style","width: 50px; height: 50px;"]],null,null,null,null,null)),(l()(),o.pb(15,0,null,0,3,"p",[["class","description"]],null,null,null,null,null)),(l()(),o.Fb(-1,null,["A Project by "])),(l()(),o.pb(17,0,null,null,1,"a",[["href","https://davidduckwitz.de"],["target","_blank"]],null,null,null,null,null)),(l()(),o.Fb(-1,null,["David Duckwitz & Arina ;)"])),(l()(),o.pb(19,0,null,0,50,"ion-row",[],null,null,null,p.bb,p.u)),o.ob(20,49152,null,0,h.bb,[],null,null),(l()(),o.pb(21,0,null,0,48,"ion-col",[],null,null,null,p.O,p.h)),o.ob(22,49152,null,0,h.o,[o.h,o.k],null,null),(l()(),o.pb(23,0,null,0,22,"ion-list",[["style","border: 1px solid lightgrey;"]],null,null,null,p.X,p.q)),o.ob(24,49152,null,0,h.J,[o.h,o.k],null,null),(l()(),o.pb(25,0,null,0,9,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,27).onClick(u)&&t),t},p.V,p.o)),o.ob(26,49152,null,0,h.C,[o.h,o.k],null,null),o.ob(27,16384,null,0,g.a,[[2,k.n],f.a,o.k],null,null),(l()(),o.pb(28,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,p.W,p.p)),o.ob(29,49152,null,0,h.I,[o.h,o.k],{position:[0,"position"]},null),(l()(),o.Fb(-1,0,["Email"])),(l()(),o.pb(31,0,null,0,3,"ion-input",[["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==o.zb(l,34)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==o.zb(l,34)._handleInputEvent(u.target.value)&&t),t},p.U,p.n)),o.Cb(5120,null,d.d,function(l){return[l]},[v.a]),o.ob(33,49152,[["email",4]],0,h.B,[o.h,o.k],{type:[0,"type"]},null),o.ob(34,16384,null,0,v.a,[o.k],null,null),(l()(),o.pb(35,0,null,0,10,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,37).onClick(u)&&t),t},p.V,p.o)),o.ob(36,49152,null,0,h.C,[o.h,o.k],null,null),o.ob(37,16384,null,0,g.a,[[2,k.n],f.a,o.k],null,null),(l()(),o.pb(38,0,null,0,3,"ion-label",[["position","floating"],["translate",""]],null,null,null,p.W,p.p)),o.ob(39,49152,null,0,h.I,[o.h,o.k],{position:[0,"position"]},null),o.ob(40,8536064,null,0,m.e,[m.k,o.k,o.h],{translate:[0,"translate"]},null),(l()(),o.Fb(-1,0,["Password"])),(l()(),o.pb(42,0,null,0,3,"ion-input",[["type","password"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==o.zb(l,45)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==o.zb(l,45)._handleInputEvent(u.target.value)&&t),t},p.U,p.n)),o.Cb(5120,null,d.d,function(l){return[l]},[v.a]),o.ob(44,49152,[["pass",4]],0,h.B,[o.h,o.k],{type:[0,"type"]},null),o.ob(45,16384,null,0,v.a,[o.k],null,null),(l()(),o.pb(46,0,null,0,6,"ion-col",[],null,null,null,p.O,p.h)),o.ob(47,49152,null,0,h.o,[o.h,o.k],null,null),(l()(),o.pb(48,0,null,0,4,"ion-button",[["class","log-in-button"],["color","dark"],["translate",""]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==o.zb(l,50).onClick(u)&&t),"click"===n&&(t=!1!==e.loginV1(o.zb(l,33).value,o.zb(l,44).value)&&t),t},p.K,p.d)),o.ob(49,49152,null,0,h.f,[o.h,o.k],{color:[0,"color"]},null),o.ob(50,16384,null,0,g.a,[[2,k.n],f.a,o.k],null,null),o.ob(51,8536064,null,0,m.e,[m.k,o.k,o.h],{translate:[0,"translate"]},null),(l()(),o.Fb(-1,0,["Login"])),(l()(),o.pb(53,0,null,0,9,"ion-col",[],null,null,null,p.O,p.h)),o.ob(54,49152,null,0,h.o,[o.h,o.k],null,null),(l()(),o.pb(55,0,null,0,7,"ion-button",[["class","log-in-button"],["color","light"],["translate",""]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,57).onClick(u)&&t),"click"===n&&(t=!1!==o.zb(l,60).onClick()&&t),t},p.K,p.d)),o.ob(56,49152,null,0,h.f,[o.h,o.k],{color:[0,"color"]},null),o.ob(57,16384,null,0,g.a,[[2,k.n],f.a,o.k],{routerLink:[0,"routerLink"]},null),o.Ab(58,1),o.ob(59,8536064,null,0,m.e,[m.k,o.k,o.h],{translate:[0,"translate"]},null),o.ob(60,16384,null,0,k.o,[k.n,k.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.Ab(61,1),(l()(),o.Fb(-1,0,["SignUp"])),(l()(),o.pb(63,0,null,0,6,"ion-col",[],null,null,null,p.O,p.h)),o.ob(64,49152,null,0,h.o,[o.h,o.k],null,null),(l()(),o.pb(65,0,null,0,4,"ion-button",[["class","log-in-button"],["color","light"],["translate",""]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==o.zb(l,67).onClick(u)&&t),"click"===n&&(t=!1!==e.devloginV1("davidduckwitz@gmail.com","123456")&&t),t},p.K,p.d)),o.ob(66,49152,null,0,h.f,[o.h,o.k],{color:[0,"color"]},null),o.ob(67,16384,null,0,g.a,[[2,k.n],f.a,o.k],null,null),o.ob(68,8536064,null,0,m.e,[m.k,o.k,o.h],{translate:[0,"translate"]},null),(l()(),o.Fb(-1,0,["DEV LOGIN"])),(l()(),o.pb(70,0,null,0,7,"ion-row",[],null,null,null,p.bb,p.u)),o.ob(71,49152,null,0,h.bb,[],null,null),(l()(),o.pb(72,0,null,0,5,"ion-col",[],null,null,null,p.O,p.h)),o.ob(73,49152,null,0,h.o,[o.h,o.k],null,null),(l()(),o.pb(74,0,null,0,3,"ion-button",[["class","log-in-button"],["color","danger"],["expand","block"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==o.zb(l,76).onClick(u)&&t),"click"===n&&(t=!1!==e.doGoogleLogin()&&t),t},p.K,p.d)),o.ob(75,49152,null,0,h.f,[o.h,o.k],{color:[0,"color"],expand:[1,"expand"]},null),o.ob(76,16384,null,0,g.a,[[2,k.n],f.a,o.k],null,null),(l()(),o.Fb(-1,0,[" LOG IN WITH GOOGLE "]))],function(l,n){var u=l(n,8,0,"/home");l(n,7,0,u);var o=l(n,10,0,"/home");l(n,9,0,o),l(n,12,0,"primary"),l(n,29,0,"floating"),l(n,33,0,"text"),l(n,39,0,"floating"),l(n,40,0,""),l(n,44,0,"password"),l(n,49,0,"dark"),l(n,51,0,""),l(n,56,0,"light");var t=l(n,58,0,"/register");l(n,57,0,t),l(n,59,0,"");var e=l(n,61,0,"/register");l(n,60,0,e),l(n,66,0,"light"),l(n,68,0,""),l(n,75,0,"danger","block")},null)}function L(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,1,"app-login",[],null,null,null,z,C)),o.ob(1,49152,null,0,c,[t.a,w.a,k.n,x.a,y.a,i.a],null,null)],null,null)}var O=o.lb("app-login",c,L,{},{},[]),A=u("Ip0R"),I=u("95zI"),P=u("9opb"),F=u("apKv"),B=u("B4/3");u.d(n,"LoginPageModuleNgFactory",function(){return E});var E=o.mb(s,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[b.a,O]],[3,o.j],o.x]),o.xb(4608,A.l,A.k,[o.u,[2,A.s]]),o.xb(4608,d.i,d.i,[]),o.xb(4608,I.a,I.a,[o.z,o.g]),o.xb(4608,P.a,P.a,[I.a,o.j,o.q]),o.xb(4608,F.a,F.a,[I.a,o.j,o.q]),o.xb(1073742336,A.b,A.b,[]),o.xb(1073742336,d.h,d.h,[]),o.xb(1073742336,d.c,d.c,[]),o.xb(1073742336,B.a,B.a,[]),o.xb(1073742336,m.h,m.h,[]),o.xb(1073742336,k.p,k.p,[[2,k.v],[2,k.n]]),o.xb(1073742336,s,s,[]),o.xb(1024,k.l,function(){return[[{path:"",component:c}]]},[])])})}}]);