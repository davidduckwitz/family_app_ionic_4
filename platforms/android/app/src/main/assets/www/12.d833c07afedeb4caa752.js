(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"zE7/":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=(u("OO+k"),u("HNzf")),o=u("v/uP"),i=u("kAsh"),a=u("4lh2"),r=u("gTw3"),c=u("kZIS"),b=u("ej43"),s=u("Ig/m"),p=function(l,n,u,t){return new(u||(u=Promise))(function(e,o){function i(l){try{r(t.next(l))}catch(n){o(n)}}function a(l){try{r(t.throw(l))}catch(n){o(n)}}function r(l){l.done?e(l.value):new u(function(n){n(l.value)}).then(i,a)}r((t=t.apply(l,n||[])).next())})},d=function(l,n){var u,t,e,o,i={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,t&&(e=2&o[0]?t.return:o[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,o[1])).done)return e;switch(t=0,e&&(o=[2&o[0],e.value]),o[0]){case 0:case 1:e=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,t=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(e=(e=i.trys).length>0&&e[e.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!e||o[1]>e[0]&&o[1]<e[3])){i.label=o[1];break}if(6===o[0]&&i.label<e[1]){i.label=e[1],e=o;break}if(e&&i.label<e[2]){i.label=e[2],i.ops.push(o);break}e[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(l,i)}catch(a){o=[6,a],t=0}finally{u=e=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},h=function(){function l(l,n,u,t,e,o,i,a){this.modalController=l,this.alertController=n,this.geolocation=u,this.familyService=t,this.authenticationService=e,this.platform=o,this.trackingService=i,this.nativeStorage=a,this.Mylocation="",this.SelectedFamily=0,this.family=[],this.familymembers=[]}return l.prototype.ngOnInit=function(){this.user=this.authenticationService.getUser(),this.loadFamily(this.user.userid)},l.prototype.addFamilyCode=function(l){var n=this;this.familyService.addTamilyByHash(l,this.user.userid).subscribe(function(l){n.loadFamily(n.user.userid)},function(l){console.log(l.status),n.presentAlert("Success",l.status)})},l.prototype.loadFamily=function(l){var n=this;this.familyService.getFamilysByUserId(l).subscribe(function(l){n.family=l,l[0].id?n.loadFamilyMembers(l[0].id):n.presentAlert("Success","You do not have any Familys yet, Create a Family to start...")},function(l){console.log(l.status),n.presentAlert("Success",l.status)})},l.prototype.presentAlert=function(l,n){return p(this,void 0,void 0,function(){return d(this,function(u){switch(u.label){case 0:return[4,this.alertController.create({header:l,message:n,buttons:["OK"]})];case 1:return[4,u.sent().present()];case 2:return u.sent(),[2]}})})},l.prototype.onChangeNewfam=function(l){this.loadFamilyMembers(l.detail.value)},l.prototype.loadFamilyMembers=function(l){var n=this;this.SelectedFamily=l,this.familyService.getFamilymembersByUserId(l).subscribe(function(l){n.familymembers=l},function(l){console.log(l.status),n.presentAlert("Success",l.status)})},l.prototype.locate=function(){var l=this;this.geolocation.getCurrentPosition().then(function(n){l.Mylocation.lat=n.coords.latitude,l.Mylocation.lng=n.coords.longitude;var u=JSON.stringify(l.Mylocation);l.trackingService.setNewPosition(l.user.userid,l.user.image,u,l.SelectedFamily).subscribe(function(n){console.log(u),l.presentAlert("success",u)})}).catch(function(n){l.presentAlert("danger","Error getting location"+n.status)})},l.prototype.openModal=function(l){this.familyModal(l)},l.prototype.openAddMemberModal=function(l){this.addToFamilyModal(l)},l.prototype.familyModal=function(l){return p(this,void 0,void 0,function(){return d(this,function(n){switch(n.label){case 0:return[4,this.modalController.create({component:o.a,componentProps:{value:l,currentuserId:this.user.userid}})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}})})},l.prototype.addToFamilyModal=function(l){return p(this,void 0,void 0,function(){var n,u=this;return d(this,function(t){switch(t.label){case 0:return[4,this.modalController.create({component:i.a,componentProps:{family_id:l}})];case 1:return(n=t.sent()).onDidDismiss().then(function(l){u.loadFamily(u.user.userid)}),[4,n.present()];case 2:return[2,t.sent()]}})})},l.prototype.addFamilyModal=function(){return p(this,void 0,void 0,function(){var l,n=this;return d(this,function(u){switch(u.label){case 0:return[4,this.modalController.create({component:a.a,componentProps:{userid:this.user.userid}})];case 1:return(l=u.sent()).onDidDismiss().then(function(l){n.loadFamily(n.user.userid)}),[4,l.present()];case 2:return[2,u.sent()]}})})},l}(),m=function(){return function(){}}(),f=u("pMnS"),k=u("ra/t"),g=u("ntG5"),y=u("Ip0R"),v=u("M9A9"),F=u("ZYCi"),x=u("tXrQ"),C=u("gIcY"),w=u("Zq1E"),L=u("uhuC"),z=u("9opb"),E=u("CssM"),S=u("YxxD"),A=t.nb({encapsulation:0,styles:[[""]],data:{}});function M(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,4,"ion-tab-button",[["tab","person-add"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.openAddMemberModal(e.SelectedFamily)&&t),t},k.nb,k.F)),t.ob(1,49152,null,0,g.pb,[t.h,t.k],{tab:[0,"tab"]},null),(l()(),t.pb(2,0,null,0,1,"ion-icon",[["name","person-add"],["style","height: 20px;"]],null,null,null,k.W,k.o)),t.ob(3,49152,null,0,g.x,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.Eb(-1,0,[" Familienmitglied hinzuf\xfcgen "]))],function(l,n){l(n,1,0,"person-add"),l(n,3,0,"person-add")},null)}function I(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Eb(1,null,[" "," (CODE: ",") "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.name,n.parent.context.$implicit.hash)})}function O(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Eb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.name)})}function B(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,5,"ion-select-option",[],null,null,null,k.gb,k.z)),t.ob(1,49152,null,0,g.gb,[t.h,t.k],{value:[0,"value"]},null),(l()(),t.gb(16777216,null,0,1,null,I)),t.ob(3,16384,null,0,y.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,O)),t.ob(5,16384,null,0,y.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,n.context.$implicit.id),l(n,3,0,"true"!==n.context.$implicit.invite),l(n,5,0,"true"===n.context.$implicit.invite)},null)}function D(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"button",[["color","warning"],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.loadFamilyMembers(l.context.$implicit.id)&&t),t},null,null)),(l()(),t.Eb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.context.index+1)})}function j(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,5,"ion-button",[["tab","person-add"]],null,[[null,"click"]],function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==t.zb(l,2).onClick(u)&&e),"click"===n&&(e=!1!==o.openAddMemberModal(o.SelectedFamily)&&e),e},k.L,k.d)),t.ob(1,49152,null,0,g.f,[t.h,t.k],null,null),t.ob(2,16384,null,0,v.a,[[2,F.n],x.a,t.k],null,null),(l()(),t.pb(3,0,null,0,1,"ion-icon",[["name","person-add"],["style","height: 20px;"]],null,null,null,k.W,k.o)),t.ob(4,49152,null,0,g.x,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.Eb(-1,0,[" Familienmitglied hinzuf\xfcgen "]))],function(l,n){l(n,4,0,"person-add")},null)}function _(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,5,"span",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Add a member to your Family"])),(l()(),t.pb(3,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,j)),t.ob(5,16384,null,0,y.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,5,0,n.component.SelectedFamily>0)},null)}function $(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,9,"ion-item",[["class","hydrated"],["detail",""],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==t.zb(l,2).onClick(u)&&e),"click"===n&&(e=!1!==o.openModal(l.context.$implicit)&&e),e},k.Y,k.q)),t.ob(1,49152,null,0,g.C,[t.h,t.k],{detail:[0,"detail"]},null),t.ob(2,16384,null,0,v.a,[[2,F.n],x.a,t.k],null,null),(l()(),t.pb(3,0,null,0,2,"ion-avatar",[["class","hydrated"],["slot","start"]],null,null,null,k.J,k.b)),t.ob(4,49152,null,0,g.b,[],null,null),(l()(),t.pb(5,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.pb(6,0,null,0,3,"ion-label",[["class","sc-ion-label-md-h sc-ion-label-md-s hydrated"]],null,null,null,k.Z,k.r)),t.ob(7,49152,null,0,g.I,[t.h,t.k],null,null),(l()(),t.pb(8,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Eb(9,null,[""," ",""]))],function(l,n){l(n,1,0,"")},function(l,n){l(n,5,0,n.context.$implicit.image),l(n,9,0,n.context.$implicit.firstname,n.context.$implicit.lastname)})}function N(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,6,"ion-header",[["class","header header-ios header-translucent header-translucent-ios hydrated"],["translucent",""]],null,null,null,k.V,k.n)),t.ob(1,49152,null,0,g.w,[t.h,t.k],{translucent:[0,"translucent"]},null),(l()(),t.pb(2,0,null,0,4,"ion-toolbar",[["class","hydrated"]],null,null,null,k.pb,k.G)),t.ob(3,49152,null,0,g.vb,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,2,"ion-title",[["class","title-ios hydrated"]],null,null,null,k.ob,k.H)),t.ob(5,49152,null,0,g.wb,[t.h,t.k],null,null),(l()(),t.Eb(-1,0,["Family"])),(l()(),t.pb(7,0,null,null,24,"ion-tab-bar",[["slot","start"]],null,null,null,k.mb,k.E)),t.ob(8,49152,null,0,g.ob,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,M)),t.ob(10,16384,null,0,y.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(11,0,null,0,4,"ion-tab-button",[["tab","add-family"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addFamilyModal()&&t),t},k.nb,k.F)),t.ob(12,49152,null,0,g.pb,[t.h,t.k],{tab:[0,"tab"]},null),(l()(),t.pb(13,0,null,0,1,"ion-icon",[["name","person-add"],["style","height: 20px;"]],null,null,null,k.W,k.o)),t.ob(14,49152,null,0,g.x,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.Eb(-1,0,[" Neue Familie "])),(l()(),t.pb(16,0,null,0,6,"ion-tab-button",[["tab","locate"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.locate()&&t),t},k.nb,k.F)),t.ob(17,49152,null,0,g.pb,[t.h,t.k],{tab:[0,"tab"]},null),(l()(),t.pb(18,0,null,0,1,"ion-icon",[["name","pin"]],null,null,null,k.W,k.o)),t.ob(19,49152,null,0,g.x,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.Eb(-1,0,[" Position Senden"])),(l()(),t.pb(21,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Eb(22,0,[" "," "])),(l()(),t.pb(23,0,null,0,8,"ion-tab-button",[["tab","settings"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,25).onClick(u)&&e),"click"===n&&(e=!1!==t.zb(l,27).onClick()&&e),e},k.nb,k.F)),t.ob(24,49152,null,0,g.pb,[t.h,t.k],{tab:[0,"tab"]},null),t.ob(25,16384,null,0,v.a,[[2,F.n],x.a,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(26,1),t.ob(27,16384,null,0,F.o,[F.n,F.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(28,1),(l()(),t.pb(29,0,null,0,1,"ion-icon",[["name","settings"]],null,null,null,k.W,k.o)),t.ob(30,49152,null,0,g.x,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.Eb(-1,0,[" Familien Einstellungen "])),(l()(),t.pb(32,0,null,null,32,"ion-toolbar",[],null,null,null,k.pb,k.G)),t.ob(33,49152,null,0,g.vb,[t.h,t.k],null,null),(l()(),t.pb(34,0,null,0,30,"ion-row",[],null,null,null,k.eb,k.w)),t.ob(35,49152,null,0,g.bb,[],null,null),(l()(),t.pb(36,0,null,0,15,"ion-col",[["col-4",""]],null,null,null,k.R,k.j)),t.ob(37,49152,null,0,g.o,[t.h,t.k],null,null),(l()(),t.pb(38,0,null,0,3,"ion-input",[["placeholder","Family Code eingeben"],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,41)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,41)._handleInputEvent(u.target.value)&&e),e},k.X,k.p)),t.Bb(5120,null,C.d,function(l){return[l]},[w.a]),t.ob(40,49152,[["familycode",4]],0,g.B,[t.h,t.k],{placeholder:[0,"placeholder"],type:[1,"type"]},null),t.ob(41,16384,null,0,w.a,[t.k],null,null),(l()(),t.pb(42,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==t.zb(l,44).onClick(u)&&e),"click"===n&&(e=!1!==o.addFamilyCode(t.zb(l,40).value)&&e),e},k.L,k.d)),t.ob(43,49152,null,0,g.f,[t.h,t.k],null,null),t.ob(44,16384,null,0,v.a,[[2,F.n],x.a,t.k],null,null),(l()(),t.Eb(-1,0,["ENTER Family Code"])),(l()(),t.pb(46,0,null,0,5,"ion-select",[["placeholder","Select Your Family"]],null,[[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==t.zb(l,49)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,49)._handleChangeEvent(u.target.value)&&e),"ionChange"===n&&(e=!1!==o.onChangeNewfam(u)&&e),e},k.hb,k.y)),t.Bb(5120,null,C.d,function(l){return[l]},[L.a]),t.ob(48,49152,[["newFam",4]],0,g.fb,[t.h,t.k],{placeholder:[0,"placeholder"]},null),t.ob(49,16384,null,0,L.a,[t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,B)),t.ob(51,278528,null,0,y.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(52,0,null,0,12,"ion-col",[["col-8",""]],null,null,null,k.R,k.j)),t.ob(53,49152,null,0,g.o,[t.h,t.k],null,null),(l()(),t.Eb(-1,0,[" Family Quickselect "])),(l()(),t.gb(16777216,null,0,1,null,D)),t.ob(56,278528,null,0,y.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(57,0,null,0,3,"ion-searchbar",[["value","Name"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,60)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,60)._handleInputEvent(u.target.value)&&e),e},k.fb,k.x)),t.Bb(5120,null,C.d,function(l){return[l]},[w.a]),t.ob(59,49152,null,0,g.cb,[t.h,t.k],{value:[0,"value"]},null),t.ob(60,16384,null,0,w.a,[t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,_)),t.ob(62,16384,null,0,y.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,$)),t.ob(64,278528,null,0,y.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(65,0,null,null,3,"ion-content",[["padding",""]],null,null,null,k.S,k.k)),t.ob(66,49152,null,0,g.p,[t.h,t.k],null,null),(l()(),t.pb(67,0,null,0,1,"ion-row",[],null,null,null,k.eb,k.w)),t.ob(68,49152,null,0,g.bb,[],null,null),(l()(),t.pb(69,0,null,null,43,"ion-tab-bar",[["class","tbs-10"],["slot","bottom"],["style","max-height: 10%;"]],null,null,null,k.mb,k.E)),t.ob(70,49152,null,0,g.ob,[t.h,t.k],null,null),(l()(),t.pb(71,0,null,0,6,"ion-tab-button",[["tab","dashboard"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,73).onClick(u)&&e),"click"===n&&(e=!1!==t.zb(l,75).onClick()&&e),e},k.nb,k.F)),t.ob(72,49152,null,0,g.pb,[t.h,t.k],{tab:[0,"tab"]},null),t.ob(73,16384,null,0,v.a,[[2,F.n],x.a,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(74,1),t.ob(75,16384,null,0,F.o,[F.n,F.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(76,1),(l()(),t.pb(77,0,null,0,0,"img",[["src","/assets/icon/mypage.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(l()(),t.pb(78,0,null,0,6,"ion-tab-button",[["tab","account"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,80).onClick(u)&&e),"click"===n&&(e=!1!==t.zb(l,82).onClick()&&e),e},k.nb,k.F)),t.ob(79,49152,null,0,g.pb,[t.h,t.k],{tab:[0,"tab"]},null),t.ob(80,16384,null,0,v.a,[[2,F.n],x.a,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(81,1),t.ob(82,16384,null,0,F.o,[F.n,F.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(83,1),(l()(),t.pb(84,0,null,0,0,"img",[["src","/assets/icon/family_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(l()(),t.pb(85,0,null,0,6,"ion-tab-button",[["tab","contact"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,87).onClick(u)&&e),"click"===n&&(e=!1!==t.zb(l,89).onClick()&&e),e},k.nb,k.F)),t.ob(86,49152,null,0,g.pb,[t.h,t.k],{tab:[0,"tab"]},null),t.ob(87,16384,null,0,v.a,[[2,F.n],x.a,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(88,1),t.ob(89,16384,null,0,F.o,[F.n,F.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(90,1),(l()(),t.pb(91,0,null,0,0,"img",[["src","/assets/icon/communication_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(l()(),t.pb(92,0,null,0,6,"ion-tab-button",[["tab","calendar"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,94).onClick(u)&&e),"click"===n&&(e=!1!==t.zb(l,96).onClick()&&e),e},k.nb,k.F)),t.ob(93,49152,null,0,g.pb,[t.h,t.k],{tab:[0,"tab"]},null),t.ob(94,16384,null,0,v.a,[[2,F.n],x.a,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(95,1),t.ob(96,16384,null,0,F.o,[F.n,F.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(97,1),(l()(),t.pb(98,0,null,0,0,"img",[["src","/assets/icon/calendar_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(l()(),t.pb(99,0,null,0,6,"ion-tab-button",[["tab","tracking"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,101).onClick(u)&&e),"click"===n&&(e=!1!==t.zb(l,103).onClick()&&e),e},k.nb,k.F)),t.ob(100,49152,null,0,g.pb,[t.h,t.k],{tab:[0,"tab"]},null),t.ob(101,16384,null,0,v.a,[[2,F.n],x.a,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(102,1),t.ob(103,16384,null,0,F.o,[F.n,F.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(104,1),(l()(),t.pb(105,0,null,0,0,"img",[["src","/assets/icon/tracking2_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(l()(),t.pb(106,0,null,0,6,"ion-tab-button",[["tab","settings"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,108).onClick(u)&&e),"click"===n&&(e=!1!==t.zb(l,110).onClick()&&e),e},k.nb,k.F)),t.ob(107,49152,null,0,g.pb,[t.h,t.k],{tab:[0,"tab"]},null),t.ob(108,16384,null,0,v.a,[[2,F.n],x.a,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(109,1),t.ob(110,16384,null,0,F.o,[F.n,F.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(111,1),(l()(),t.pb(112,0,null,0,0,"img",[["src","/assets/icon/settings_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null))],function(l,n){var u=n.component;l(n,1,0,""),l(n,10,0,u.SelectedFamily>0),l(n,12,0,"add-family"),l(n,14,0,"person-add"),l(n,17,0,"locate"),l(n,19,0,"pin"),l(n,24,0,"settings");var t=l(n,26,0,"/settings");l(n,25,0,t);var e=l(n,28,0,"/settings");l(n,27,0,e),l(n,30,0,"settings"),l(n,40,0,"Family Code eingeben","text"),l(n,48,0,"Select Your Family"),l(n,51,0,u.family),l(n,56,0,u.family),l(n,59,0,"Name"),l(n,62,0,0===u.familymembers.length),l(n,64,0,u.familymembers),l(n,72,0,"dashboard");var o=l(n,74,0,"/user");l(n,73,0,o);var i=l(n,76,0,"/user");l(n,75,0,i),l(n,79,0,"account");var a=l(n,81,0,"/family");l(n,80,0,a);var r=l(n,83,0,"/family");l(n,82,0,r),l(n,86,0,"contact");var c=l(n,88,0,"/communication");l(n,87,0,c);var b=l(n,90,0,"/communication");l(n,89,0,b),l(n,93,0,"calendar");var s=l(n,95,0,"/calendar");l(n,94,0,s);var p=l(n,97,0,"/calendar");l(n,96,0,p),l(n,100,0,"tracking");var d=l(n,102,0,"/tracking");l(n,101,0,d);var h=l(n,104,0,"/tracking");l(n,103,0,h),l(n,107,0,"settings");var m=l(n,109,0,"/settings");l(n,108,0,m);var f=l(n,111,0,"/settings");l(n,110,0,f)},function(l,n){l(n,22,0,n.component.Mylocation)})}function P(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-family",[],null,null,null,N,A)),t.ob(1,114688,null,0,h,[z.a,E.a,r.a,c.a,b.a,S.a,s.a,e.a],null,null)],function(l,n){l(n,1,0)},null)}var Y=t.lb("app-family",h,P,{},{},[]),T=u("95zI"),G=u("apKv"),W=u("B4/3");u.d(n,"FamilyPageModuleNgFactory",function(){return q});var q=t.mb(m,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[f.a,Y]],[3,t.j],t.x]),t.xb(4608,y.l,y.k,[t.u,[2,y.r]]),t.xb(4608,C.i,C.i,[]),t.xb(4608,T.a,T.a,[t.z,t.g]),t.xb(4608,z.a,z.a,[T.a,t.j,t.q]),t.xb(4608,G.a,G.a,[T.a,t.j,t.q]),t.xb(1073742336,y.b,y.b,[]),t.xb(1073742336,C.h,C.h,[]),t.xb(1073742336,C.c,C.c,[]),t.xb(1073742336,W.a,W.a,[]),t.xb(1073742336,F.p,F.p,[[2,F.v],[2,F.n]]),t.xb(1073742336,m,m,[]),t.xb(1024,F.l,function(){return[[{path:"",component:h}]]},[])])})}}]);