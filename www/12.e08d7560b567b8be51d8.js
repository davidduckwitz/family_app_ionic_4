(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"zE7/":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=(u("OO+k"),u("v/uP")),o=u("kAsh"),i=u("4lh2"),r=u("gTw3"),a=u("kZIS"),c=u("ej43"),b=u("Ig/m"),s=function(l,n,u,t){return new(u||(u=Promise))(function(e,o){function i(l){try{a(t.next(l))}catch(n){o(n)}}function r(l){try{a(t.throw(l))}catch(n){o(n)}}function a(l){l.done?e(l.value):new u(function(n){n(l.value)}).then(i,r)}a((t=t.apply(l,n||[])).next())})},p=function(l,n){var u,t,e,o,i={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function r(o){return function(r){return function(o){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,t&&(e=2&o[0]?t.return:o[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,o[1])).done)return e;switch(t=0,e&&(o=[2&o[0],e.value]),o[0]){case 0:case 1:e=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,t=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(e=(e=i.trys).length>0&&e[e.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!e||o[1]>e[0]&&o[1]<e[3])){i.label=o[1];break}if(6===o[0]&&i.label<e[1]){i.label=e[1],e=o;break}if(e&&i.label<e[2]){i.label=e[2],i.ops.push(o);break}e[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(l,i)}catch(r){o=[6,r],t=0}finally{u=e=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,r])}}},d=function(){function l(l,n,u,t,e,o,i){this.modalController=l,this.alertController=n,this.geolocation=u,this.familyService=t,this.authenticationService=e,this.platform=o,this.trackingService=i,this.Mylocation="",this.SelectedFamily=0,this.family=[],this.inviteCode="",this.familymembers=[]}return l.prototype.ngOnInit=function(){this.user=this.authenticationService.getUser(),this.loadFamily(this.user.userid)},l.prototype.addFamilyCode=function(l){var n=this;this.familyService.addTamilyByHash(l,this.user.userid).subscribe(function(l){n.loadFamily(n.user.userid)},function(l){console.log(l.status),n.presentAlert("Success",l.status)})},l.prototype.loadFamily=function(l){var n=this;this.familyService.getFamilysByUserId(l).subscribe(function(l){n.family=l,l[0].id?(n.inviteCode=l[0].hash,n.loadFamilyMembers(l[0].id)):n.presentAlert("Success","You do not have any Familys yet, Create a Family to start...")},function(l){console.log(l.status),n.presentAlert("Success",l.status)})},l.prototype.presentAlert=function(l,n){return s(this,void 0,void 0,function(){return p(this,function(u){switch(u.label){case 0:return[4,this.alertController.create({header:l,message:n,buttons:["OK"]})];case 1:return[4,u.sent().present()];case 2:return u.sent(),[2]}})})},l.prototype.onChangeNewfam=function(l){this.loadFamilyMembers(l.detail.value)},l.prototype.loadFamilyMembers=function(l){var n=this;this.SelectedFamily=l,this.familyService.getFamilymembersByUserId(l).subscribe(function(l){n.familymembers=l},function(l){console.log(l.status),n.presentAlert("Success",l.status)})},l.prototype.openModal=function(l){this.familyModal(l)},l.prototype.openAddMemberModal=function(l){this.addToFamilyModal(l)},l.prototype.familyModal=function(l){return s(this,void 0,void 0,function(){return p(this,function(n){switch(n.label){case 0:return[4,this.modalController.create({component:e.a,componentProps:{value:l,currentuserId:this.user.userid}})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}})})},l.prototype.addToFamilyModal=function(l){return s(this,void 0,void 0,function(){var n,u=this;return p(this,function(t){switch(t.label){case 0:return[4,this.modalController.create({component:o.a,componentProps:{family_id:l}})];case 1:return(n=t.sent()).onDidDismiss().then(function(l){u.loadFamily(u.user.userid)}),[4,n.present()];case 2:return[2,t.sent()]}})})},l.prototype.addFamilyModal=function(){return s(this,void 0,void 0,function(){var l,n=this;return p(this,function(u){switch(u.label){case 0:return[4,this.modalController.create({component:i.a,componentProps:{userid:this.user.userid}})];case 1:return(l=u.sent()).onDidDismiss().then(function(l){n.loadFamily(n.user.userid)}),[4,l.present()];case 2:return[2,u.sent()]}})})},l}(),h=function(){return function(){}}(),m=u("pMnS"),f=u("ra/t"),k=u("ntG5"),y=u("M9A9"),g=u("ZYCi"),v=u("tXrQ"),x=u("Ip0R"),C=u("A7o+"),F=u("gIcY"),w=u("uhuC"),L=u("Zq1E"),z=u("9opb"),M=u("CssM"),I=u("YxxD"),S=t.nb({encapsulation:0,styles:[[""]],data:{}});function A(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,5,"ion-button",[["expand","full"],["style","width:50px"]],null,[[null,"click"]],function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==t.zb(l,2).onClick(u)&&e),"click"===n&&(e=!1!==o.openAddMemberModal(o.SelectedFamily)&&e),e},f.K,f.d)),t.ob(1,49152,null,0,k.f,[t.h,t.k],{expand:[0,"expand"]},null),t.ob(2,16384,null,0,y.a,[[2,g.n],v.a,t.k],null,null),(l()(),t.pb(3,0,null,0,2,"ion-icon",[["name","person-add"],["size","large"]],null,null,null,f.S,f.l)),t.ob(4,49152,null,0,k.x,[t.h,t.k],{name:[0,"name"],size:[1,"size"]},null),(l()(),t.Fb(-1,0,["Add Member"]))],function(l,n){l(n,1,0,"full"),l(n,4,0,"person-add","large")},null)}function O(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Fb(1,null,[" "," (",") "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.name,n.parent.context.$implicit.hash)})}function B(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Fb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.name)})}function j(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,5,"ion-select-option",[],null,null,null,f.db,f.x)),t.ob(1,49152,null,0,k.gb,[t.h,t.k],{value:[0,"value"]},null),(l()(),t.gb(16777216,null,0,1,null,O)),t.ob(3,16384,null,0,x.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,B)),t.ob(5,16384,null,0,x.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,n.context.$implicit.id),l(n,3,0,"true"!==n.context.$implicit.invite),l(n,5,0,"true"===n.context.$implicit.invite)},null)}function D(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,3,"ion-button",[["color","warning"],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==t.zb(l,2).onClick(u)&&e),"click"===n&&(e=!1!==o.loadFamilyMembers(l.context.$implicit.id)&&e),e},f.K,f.d)),t.ob(1,49152,null,0,k.f,[t.h,t.k],{color:[0,"color"]},null),t.ob(2,16384,null,0,y.a,[[2,g.n],v.a,t.k],null,null),(l()(),t.Fb(3,0,["",""]))],function(l,n){l(n,1,0,"warning")},function(l,n){l(n,3,0,n.context.index+1)})}function H(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,4,"ion-button",[["tab","person-add"]],null,[[null,"click"]],function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==t.zb(l,2).onClick(u)&&e),"click"===n&&(e=!1!==o.openAddMemberModal(o.SelectedFamily)&&e),e},f.K,f.d)),t.ob(1,49152,null,0,k.f,[t.h,t.k],null,null),t.ob(2,16384,null,0,y.a,[[2,g.n],v.a,t.k],null,null),(l()(),t.pb(3,0,null,0,1,"ion-icon",[["name","person-add"],["style","height: 20px;"]],null,null,null,f.S,f.l)),t.ob(4,49152,null,0,k.x,[t.h,t.k],{name:[0,"name"]},null)],function(l,n){l(n,4,0,"person-add")},null)}function $(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,5,"span",[["text-center",""]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"b",[],[[8,"innerHTML",1]],null,null,null,null)),t.Bb(131072,C.j,[C.k,t.h]),(l()(),t.Fb(3,null,[" "," "])),(l()(),t.gb(16777216,null,null,1,null,H)),t.ob(5,16384,null,0,x.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,5,0,n.component.SelectedFamily>0)},function(l,n){var u=n.component;l(n,1,0,t.Gb(n,1,0,t.zb(n,2).transform("Family Invite Code:"))),l(n,3,0,u.inviteCode)})}function _(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,3,"span",[["text-center",""]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"b",[],[[8,"innerHTML",1]],null,null,null,null)),t.Bb(131072,C.j,[C.k,t.h]),(l()(),t.Fb(3,null,[" "," "]))],null,function(l,n){var u=n.component;l(n,1,0,t.Gb(n,1,0,t.zb(n,2).transform("Family Invite Code:"))),l(n,3,0,u.inviteCode)})}function E(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,9,"ion-item",[["class","hydrated"],["detail",""],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==t.zb(l,2).onClick(u)&&e),"click"===n&&(e=!1!==o.openModal(l.context.$implicit)&&e),e},f.V,f.o)),t.ob(1,49152,null,0,k.C,[t.h,t.k],{detail:[0,"detail"]},null),t.ob(2,16384,null,0,y.a,[[2,g.n],v.a,t.k],null,null),(l()(),t.pb(3,0,null,0,2,"ion-avatar",[["class","hydrated"],["slot","start"]],null,null,null,f.I,f.b)),t.ob(4,49152,null,0,k.b,[],null,null),(l()(),t.pb(5,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.pb(6,0,null,0,3,"ion-label",[["class","sc-ion-label-md-h sc-ion-label-md-s hydrated"]],null,null,null,f.W,f.p)),t.ob(7,49152,null,0,k.I,[t.h,t.k],null,null),(l()(),t.pb(8,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Fb(9,null,[""," "," ( "," )"]))],function(l,n){l(n,1,0,"")},function(l,n){l(n,5,0,n.context.$implicit.image),l(n,9,0,n.context.$implicit.firstname,n.context.$implicit.lastname,n.context.$implicit.username)})}function T(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,20,"ion-header",[["class","header header-ios header-translucent header-translucent-ios hydrated"],["translucent",""]],null,null,null,f.R,f.k)),t.ob(1,49152,null,0,k.w,[t.h,t.k],{translucent:[0,"translucent"]},null),(l()(),t.pb(2,0,null,0,18,"ion-toolbar",[["class","hydrated"],["color","primary"]],null,null,null,f.nb,f.F)),t.ob(3,49152,null,0,k.vb,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,f.L,f.e)),t.ob(5,49152,null,0,k.g,[],null,null),(l()(),t.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,f.Y,f.s)),t.ob(7,49152,null,0,k.M,[t.h,t.k],null,null),(l()(),t.pb(8,0,null,0,2,"ion-title",[["class","title-ios hydrated"]],[[8,"innerHTML",1]],null,null,f.mb,f.G)),t.ob(9,49152,null,0,k.wb,[t.h,t.k],null,null),t.Bb(131072,C.j,[C.k,t.h]),(l()(),t.pb(11,0,null,0,9,"ion-buttons",[["slot","end"]],null,null,null,f.L,f.e)),t.ob(12,49152,null,0,k.g,[],null,null),(l()(),t.pb(13,0,null,0,5,"ion-button",[["expand","full"],["style","width:50px;"]],null,[[null,"click"]],function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==t.zb(l,15).onClick(u)&&e),"click"===n&&(e=!1!==o.addFamilyModal()&&e),e},f.K,f.d)),t.ob(14,49152,null,0,k.f,[t.h,t.k],{expand:[0,"expand"]},null),t.ob(15,16384,null,0,y.a,[[2,g.n],v.a,t.k],null,null),(l()(),t.pb(16,0,null,0,2,"ion-icon",[["name","add-circle-outline"],["size","large"]],null,null,null,f.S,f.l)),t.ob(17,49152,null,0,k.x,[t.h,t.k],{name:[0,"name"],size:[1,"size"]},null),(l()(),t.Fb(-1,0,["Add Family"])),(l()(),t.gb(16777216,null,0,1,null,A)),t.ob(20,16384,null,0,x.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(21,0,null,null,39,"ion-content",[["padding",""]],null,null,null,f.P,f.i)),t.ob(22,49152,null,0,k.p,[t.h,t.k],null,null),(l()(),t.pb(23,0,null,0,9,"ion-row",[],null,null,null,f.bb,f.u)),t.ob(24,49152,null,0,k.bb,[],null,null),(l()(),t.pb(25,0,null,0,7,"ion-col",[],null,null,null,f.O,f.h)),t.ob(26,49152,null,0,k.o,[t.h,t.k],null,null),(l()(),t.pb(27,0,null,0,5,"ion-select",[["placeholder","Select Your Family"]],null,[[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==t.zb(l,30)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,30)._handleChangeEvent(u.target.value)&&e),"ionChange"===n&&(e=!1!==o.onChangeNewfam(u)&&e),e},f.eb,f.w)),t.Cb(5120,null,F.d,function(l){return[l]},[w.a]),t.ob(29,49152,[["newFam",4]],0,k.fb,[t.h,t.k],{placeholder:[0,"placeholder"]},null),t.ob(30,16384,null,0,w.a,[t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,j)),t.ob(32,278528,null,0,x.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(33,0,null,0,27,"ion-row",[],null,null,null,f.bb,f.u)),t.ob(34,49152,null,0,k.bb,[],null,null),(l()(),t.pb(35,0,null,0,9,"ion-col",[["col-4",""]],null,null,null,f.O,f.h)),t.ob(36,49152,null,0,k.o,[t.h,t.k],null,null),(l()(),t.pb(37,0,null,0,3,"ion-input",[["placeholder","Family Code eingeben"],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,40)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,40)._handleInputEvent(u.target.value)&&e),e},f.U,f.n)),t.Cb(5120,null,F.d,function(l){return[l]},[L.a]),t.ob(39,49152,[["familycode",4]],0,k.B,[t.h,t.k],{placeholder:[0,"placeholder"],type:[1,"type"]},null),t.ob(40,16384,null,0,L.a,[t.k],null,null),(l()(),t.pb(41,0,null,0,3,"ion-button",[["color","warning"]],[[8,"innerHTML",1]],[[null,"click"]],function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==t.zb(l,43).onClick(u)&&e),"click"===n&&(e=!1!==o.addFamilyCode(t.zb(l,39).value)&&e),e},f.K,f.d)),t.ob(42,49152,null,0,k.f,[t.h,t.k],{color:[0,"color"]},null),t.ob(43,16384,null,0,y.a,[[2,g.n],v.a,t.k],null,null),t.Bb(131072,C.j,[C.k,t.h]),(l()(),t.pb(45,0,null,0,15,"ion-col",[["col-8",""]],null,null,null,f.O,f.h)),t.ob(46,49152,null,0,k.o,[t.h,t.k],null,null),(l()(),t.pb(47,0,null,0,1,"b",[],[[8,"innerHTML",1]],null,null,null,null)),t.Bb(131072,C.j,[C.k,t.h]),(l()(),t.gb(16777216,null,0,1,null,D)),t.ob(50,278528,null,0,x.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(51,0,null,0,3,"ion-searchbar",[["value","Name"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,54)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,54)._handleInputEvent(u.target.value)&&e),e},f.cb,f.v)),t.Cb(5120,null,F.d,function(l){return[l]},[L.a]),t.ob(53,49152,null,0,k.cb,[t.h,t.k],{value:[0,"value"]},null),t.ob(54,16384,null,0,L.a,[t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,$)),t.ob(56,16384,null,0,x.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,_)),t.ob(58,16384,null,0,x.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,E)),t.ob(60,278528,null,0,x.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(61,0,null,null,43,"ion-tab-bar",[["class","tbs-10"],["slot","bottom"],["style","max-height: 10%;"]],null,null,null,f.jb,f.C)),t.ob(62,49152,null,0,k.ob,[t.h,t.k],null,null),(l()(),t.pb(63,0,null,0,6,"ion-tab-button",[["tab","dashboard"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,65).onClick(u)&&e),"click"===n&&(e=!1!==t.zb(l,67).onClick()&&e),e},f.kb,f.D)),t.ob(64,49152,null,0,k.pb,[t.h,t.k],{tab:[0,"tab"]},null),t.ob(65,16384,null,0,y.a,[[2,g.n],v.a,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(66,1),t.ob(67,16384,null,0,g.o,[g.n,g.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(68,1),(l()(),t.pb(69,0,null,0,0,"img",[["src","/assets/icon/mypage.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(l()(),t.pb(70,0,null,0,6,"ion-tab-button",[["tab","account"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,72).onClick(u)&&e),"click"===n&&(e=!1!==t.zb(l,74).onClick()&&e),e},f.kb,f.D)),t.ob(71,49152,null,0,k.pb,[t.h,t.k],{tab:[0,"tab"]},null),t.ob(72,16384,null,0,y.a,[[2,g.n],v.a,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(73,1),t.ob(74,16384,null,0,g.o,[g.n,g.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(75,1),(l()(),t.pb(76,0,null,0,0,"img",[["src","/assets/icon/family_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(l()(),t.pb(77,0,null,0,6,"ion-tab-button",[["tab","contact"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,79).onClick(u)&&e),"click"===n&&(e=!1!==t.zb(l,81).onClick()&&e),e},f.kb,f.D)),t.ob(78,49152,null,0,k.pb,[t.h,t.k],{tab:[0,"tab"]},null),t.ob(79,16384,null,0,y.a,[[2,g.n],v.a,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(80,1),t.ob(81,16384,null,0,g.o,[g.n,g.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(82,1),(l()(),t.pb(83,0,null,0,0,"img",[["src","/assets/icon/communication_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(l()(),t.pb(84,0,null,0,6,"ion-tab-button",[["tab","calendar"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,86).onClick(u)&&e),"click"===n&&(e=!1!==t.zb(l,88).onClick()&&e),e},f.kb,f.D)),t.ob(85,49152,null,0,k.pb,[t.h,t.k],{tab:[0,"tab"]},null),t.ob(86,16384,null,0,y.a,[[2,g.n],v.a,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(87,1),t.ob(88,16384,null,0,g.o,[g.n,g.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(89,1),(l()(),t.pb(90,0,null,0,0,"img",[["src","/assets/icon/calendar_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(l()(),t.pb(91,0,null,0,6,"ion-tab-button",[["tab","tracking"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,93).onClick(u)&&e),"click"===n&&(e=!1!==t.zb(l,95).onClick()&&e),e},f.kb,f.D)),t.ob(92,49152,null,0,k.pb,[t.h,t.k],{tab:[0,"tab"]},null),t.ob(93,16384,null,0,y.a,[[2,g.n],v.a,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(94,1),t.ob(95,16384,null,0,g.o,[g.n,g.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(96,1),(l()(),t.pb(97,0,null,0,0,"img",[["src","/assets/icon/tracking2_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(l()(),t.pb(98,0,null,0,6,"ion-tab-button",[["tab","settings"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,100).onClick(u)&&e),"click"===n&&(e=!1!==t.zb(l,102).onClick()&&e),e},f.kb,f.D)),t.ob(99,49152,null,0,k.pb,[t.h,t.k],{tab:[0,"tab"]},null),t.ob(100,16384,null,0,y.a,[[2,g.n],v.a,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(101,1),t.ob(102,16384,null,0,g.o,[g.n,g.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(103,1),(l()(),t.pb(104,0,null,0,0,"img",[["src","/assets/icon/settings_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null))],function(l,n){var u=n.component;l(n,1,0,""),l(n,3,0,"primary"),l(n,14,0,"full"),l(n,17,0,"add-circle-outline","large"),l(n,20,0,u.SelectedFamily>0),l(n,29,0,"Select Your Family"),l(n,32,0,u.family),l(n,39,0,"Family Code eingeben","text"),l(n,42,0,"warning"),l(n,50,0,u.family),l(n,53,0,"Name"),l(n,56,0,0===u.familymembers.length),l(n,58,0,u.familymembers.length>0),l(n,60,0,u.familymembers),l(n,64,0,"dashboard");var t=l(n,66,0,"/user");l(n,65,0,t);var e=l(n,68,0,"/user");l(n,67,0,e),l(n,71,0,"account");var o=l(n,73,0,"/family");l(n,72,0,o);var i=l(n,75,0,"/family");l(n,74,0,i),l(n,78,0,"contact");var r=l(n,80,0,"/communication");l(n,79,0,r);var a=l(n,82,0,"/communication");l(n,81,0,a),l(n,85,0,"calendar");var c=l(n,87,0,"/calendar");l(n,86,0,c);var b=l(n,89,0,"/calendar");l(n,88,0,b),l(n,92,0,"tracking");var s=l(n,94,0,"/tracking");l(n,93,0,s);var p=l(n,96,0,"/tracking");l(n,95,0,p),l(n,99,0,"settings");var d=l(n,101,0,"/settings");l(n,100,0,d);var h=l(n,103,0,"/settings");l(n,102,0,h)},function(l,n){l(n,8,0,t.Gb(n,8,0,t.zb(n,10).transform("Family"))),l(n,41,0,t.Gb(n,41,0,t.zb(n,44).transform("Enter Family Code"))),l(n,47,0,t.Gb(n,47,0,t.zb(n,48).transform("Family Quickselect")))})}function G(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-family",[],null,null,null,T,S)),t.ob(1,114688,null,0,d,[z.a,M.a,r.a,a.a,c.a,I.a,b.a],null,null)],function(l,n){l(n,1,0)},null)}var K=t.lb("app-family",d,G,{},{},[]),P=u("95zI"),Y=u("apKv"),N=u("B4/3");u.d(n,"FamilyPageModuleNgFactory",function(){return U});var U=t.mb(h,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[m.a,K]],[3,t.j],t.x]),t.xb(4608,x.l,x.k,[t.u,[2,x.s]]),t.xb(4608,F.i,F.i,[]),t.xb(4608,P.a,P.a,[t.z,t.g]),t.xb(4608,z.a,z.a,[P.a,t.j,t.q]),t.xb(4608,Y.a,Y.a,[P.a,t.j,t.q]),t.xb(1073742336,x.b,x.b,[]),t.xb(1073742336,F.h,F.h,[]),t.xb(1073742336,F.c,F.c,[]),t.xb(1073742336,N.a,N.a,[]),t.xb(1073742336,C.h,C.h,[]),t.xb(1073742336,g.p,g.p,[[2,g.v],[2,g.n]]),t.xb(1073742336,h,h,[]),t.xb(1024,g.l,function(){return[[{path:"",component:d}]]},[])])})}}]);