(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{qQ4y:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=t("Hzbo"),u=(t("OO+k"),t("DBRA")),r=t("ej43"),i=function(n,l,t,e){return new(t||(t=Promise))(function(o,u){function r(n){try{a(e.next(n))}catch(l){u(l)}}function i(n){try{a(e.throw(n))}catch(l){u(l)}}function a(n){n.done?o(n.value):new t(function(l){l(n.value)}).then(r,i)}a((e=e.apply(n,l||[])).next())})},a=function(n,l){var t,e,o,u,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,e&&(o=2&u[0]?e.return:u[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,u[1])).done)return o;switch(e=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,e=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){r=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){r.label=u[1];break}if(6===u[0]&&r.label<o[1]){r.label=o[1],o=u;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(u);break}o[2]&&r.ops.pop(),r.trys.pop();continue}u=l.call(n,r)}catch(i){u=[6,i],e=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},c=function(){function n(n,l,t,e,o,u){this.messagesService=n,this.authenticationService=l,this.modalController=t,this.alertController=e,this.activatedRoute=o,this.platform=u}return n.prototype.ngOnInit=function(){this.currentUser=this.authenticationService.getUser(),this.getConversationsByUserId(this.currentUser.userid),this.getMembersForChatByUserId(this.currentUser.userid)},n.prototype.getConversationsByUserId=function(n){var l=this;this.messagesService.getConversationsByUserId(n).subscribe(function(n){l.conversations=n})},n.prototype.getMembersForChatByUserId=function(n){var l=this;this.messagesService.getChatMembersByUserId(n).subscribe(function(n){n.length>0&&(l.chatmembers=n[1])})},n.prototype.onChangeNewConv=function(n){var l=this;this.messagesService.createConversation(this.currentUser.userid,n).subscribe(function(t){l.getConversationsByUserId(l.currentUser.userid>0?l.currentUser.userid:2),l.chatModal(t.conversationid,n)})},n.prototype.chatModal=function(n,l){return i(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return this.to_user_id=l,[4,this.modalController.create({component:u.a,componentProps:{conversation_id:n,from_user_id:this.currentUser.id,to_user_id:l}})];case 1:return[4,t.sent().present()];case 2:return[2,t.sent()]}})})},n.prototype.presentAlert=function(n,l){return i(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return[4,this.alertController.create({header:n,message:l,buttons:["OK"]})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}})})},n.prototype.presentLoading=function(n){return i(this,void 0,void 0,function(){return a(this,function(l){switch(l.label){case 0:return[4,n.present()];case 1:return[2,l.sent()]}})})},n}(),s=function(){return function(){}}(),b=t("pMnS"),g=t("ra/t"),p=t("ntG5"),h=t("M9A9"),m=t("ZYCi"),d=t("tXrQ"),f=t("Ip0R"),C=t("gIcY"),k=t("uhuC"),_=t("9opb"),M=t("CssM"),O=t("YxxD"),x=e.nb({encapsulation:0,styles:[[".wrap-text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}ion-content[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%]{background-color:#f5f5f5}ion-footer[_ngcontent-%COMP%]{box-shadow:0 0 4px rgba(0,0,0,.11);background-color:#fff;height:255px}.line-breaker[_ngcontent-%COMP%]{white-space:pre-line}.input-wrap[_ngcontent-%COMP%]{padding:5px;display:flex}.input-wrap[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{flex:1;border:0 solid;border-bottom:1px #387ef5}.message-wrap[_ngcontent-%COMP%]{padding:0 10px}.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{position:relative;padding:7px 0}.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%]{position:absolute;border-radius:45px;width:45px;height:45px;box-shadow:0 0 2px rgba(0,0,0,.36)}.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]{width:100%;display:inline-block}.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8em;color:#888}.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]{position:relative;margin-top:5px;border-radius:5px;padding:8px;border:1px solid #ddd;color:#fff;width:auto;max-width:80%}.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]   span.triangle[_ngcontent-%COMP%]{background-color:#fff;border-radius:2px;height:8px;width:8px;top:12px;display:block;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;border:1px solid #ddd}.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]{background-color:#fff;float:left}.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]{padding-left:60px}.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%]{left:0}.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]{color:#343434}.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]   span.triangle[_ngcontent-%COMP%]{border-top-width:0;border-right-width:0;left:-5px}.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]{padding-right:60px}.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%]{text-align:right}.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%]{right:0}.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{position:absolute;right:10px;top:50px}.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]{background-color:#387ef5;float:right}.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]   span.triangle[_ngcontent-%COMP%]{background-color:#387ef5;border-bottom-width:0;border-left-width:0;right:-5px}"]],data:{}});function P(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,g.hb,g.z)),e.ob(1,49152,null,0,p.gb,[e.h,e.k],{value:[0,"value"]},null),(n()(),e.Fb(2,0,["",""]))],function(n,l){n(l,1,0,l.context.$implicit.user_id)},function(n,l){n(l,2,0,l.context.$implicit.firstname+" "+l.context.$implicit.lastname)})}function v(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.image)})}function w(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,10,"ion-item",[],null,[[null,"click"]],function(n,l,t){var o=!0,u=n.component;return"click"===l&&(o=!1!==e.zb(n,2).onClick(t)&&o),"click"===l&&(o=!1!==u.chatModal(n.context.$implicit.conversation_id,n.context.$implicit.userid,u.currentUser.userid)&&o),o},g.ab,g.r)),e.ob(1,49152,null,0,p.C,[e.h,e.k],null,null),e.ob(2,16384,null,0,h.a,[[2,m.n],d.a,e.k],null,null),(n()(),e.pb(3,0,null,0,3,"ion-avatar",[["item-left",""]],null,null,null,g.K,g.b)),e.ob(4,49152,null,0,p.b,[],null,null),(n()(),e.gb(16777216,null,0,1,null,v)),e.ob(6,16384,null,0,f.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(7,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),e.Fb(8,null,[""," ",""])),(n()(),e.pb(9,0,null,0,1,"p",[["class","wrap-text"],["slot","end"]],null,null,null,null,null)),(n()(),e.Fb(10,null,["",""]))],function(n,l){n(l,6,0,l.context.$implicit.image)},function(n,l){n(l,8,0,l.context.$implicit.firstname,l.context.$implicit.lastname),n(l,10,0,l.context.$implicit.message_text)})}function y(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,10,"ion-header",[],null,null,null,g.W,g.n)),e.ob(1,49152,null,0,p.w,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,g.rb,g.H)),e.ob(3,49152,null,0,p.vb,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,g.N,g.e)),e.ob(5,49152,null,0,p.g,[],null,null),(n()(),e.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,g.db,g.v)),e.ob(7,49152,null,0,p.M,[e.h,e.k],null,null),(n()(),e.pb(8,0,null,0,2,"ion-title",[["class","title-ios hydrated"]],null,null,null,g.qb,g.I)),e.ob(9,49152,null,0,p.wb,[e.h,e.k],null,null),(n()(),e.Fb(-1,0,["Communication"])),(n()(),e.pb(11,0,null,null,19,"ion-content",[],null,null,null,g.U,g.l)),e.ob(12,49152,null,0,p.p,[e.h,e.k],null,null),(n()(),e.pb(13,0,null,0,11,"ion-item",[],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.zb(n,15).onClick(t)&&o),o},g.ab,g.r)),e.ob(14,49152,null,0,p.C,[e.h,e.k],null,null),e.ob(15,16384,null,0,h.a,[[2,m.n],d.a,e.k],null,null),(n()(),e.pb(16,0,null,0,2,"ion-label",[],null,null,null,g.bb,g.s)),e.ob(17,49152,null,0,p.I,[e.h,e.k],null,null),(n()(),e.Fb(-1,0,["New Conversation"])),(n()(),e.pb(19,0,null,0,5,"ion-select",[["placeholder","Select Familymember"]],null,[[null,"ionChange"],[null,"ionBlur"]],function(n,l,t){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==e.zb(n,22)._handleBlurEvent()&&o),"ionChange"===l&&(o=!1!==e.zb(n,22)._handleChangeEvent(t.target.value)&&o),"ionChange"===l&&(o=!1!==u.onChangeNewConv(e.zb(n,21).value)&&o),o},g.ib,g.y)),e.Cb(5120,null,C.d,function(n){return[n]},[k.a]),e.ob(21,49152,[["newConv",4]],0,p.fb,[e.h,e.k],{placeholder:[0,"placeholder"]},null),e.ob(22,16384,null,0,k.a,[e.k],null,null),(n()(),e.gb(16777216,null,0,1,null,P)),e.ob(24,278528,null,0,f.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(25,0,null,0,5,"ion-row",[],null,null,null,g.gb,g.x)),e.ob(26,49152,null,0,p.bb,[],null,null),(n()(),e.pb(27,0,null,0,3,"ion-col",[],null,null,null,g.T,g.k)),e.ob(28,49152,null,0,p.o,[e.h,e.k],null,null),(n()(),e.gb(16777216,null,0,1,null,w)),e.ob(30,278528,null,0,f.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(31,0,null,null,43,"ion-tab-bar",[["class","tbs-10"],["slot","bottom"],["style","max-height: 10%;"]],null,null,null,g.nb,g.E)),e.ob(32,49152,null,0,p.ob,[e.h,e.k],null,null),(n()(),e.pb(33,0,null,0,6,"ion-tab-button",[["tab","dashboard"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.zb(n,35).onClick(t)&&o),"click"===l&&(o=!1!==e.zb(n,37).onClick()&&o),o},g.ob,g.F)),e.ob(34,49152,null,0,p.pb,[e.h,e.k],{tab:[0,"tab"]},null),e.ob(35,16384,null,0,h.a,[[2,m.n],d.a,e.k],{routerLink:[0,"routerLink"]},null),e.Ab(36,1),e.ob(37,16384,null,0,m.o,[m.n,m.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.Ab(38,1),(n()(),e.pb(39,0,null,0,0,"img",[["src","/assets/icon/mypage.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(n()(),e.pb(40,0,null,0,6,"ion-tab-button",[["tab","account"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.zb(n,42).onClick(t)&&o),"click"===l&&(o=!1!==e.zb(n,44).onClick()&&o),o},g.ob,g.F)),e.ob(41,49152,null,0,p.pb,[e.h,e.k],{tab:[0,"tab"]},null),e.ob(42,16384,null,0,h.a,[[2,m.n],d.a,e.k],{routerLink:[0,"routerLink"]},null),e.Ab(43,1),e.ob(44,16384,null,0,m.o,[m.n,m.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.Ab(45,1),(n()(),e.pb(46,0,null,0,0,"img",[["src","/assets/icon/family_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(n()(),e.pb(47,0,null,0,6,"ion-tab-button",[["tab","contact"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.zb(n,49).onClick(t)&&o),"click"===l&&(o=!1!==e.zb(n,51).onClick()&&o),o},g.ob,g.F)),e.ob(48,49152,null,0,p.pb,[e.h,e.k],{tab:[0,"tab"]},null),e.ob(49,16384,null,0,h.a,[[2,m.n],d.a,e.k],{routerLink:[0,"routerLink"]},null),e.Ab(50,1),e.ob(51,16384,null,0,m.o,[m.n,m.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.Ab(52,1),(n()(),e.pb(53,0,null,0,0,"img",[["src","/assets/icon/communication_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(n()(),e.pb(54,0,null,0,6,"ion-tab-button",[["tab","calendar"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.zb(n,56).onClick(t)&&o),"click"===l&&(o=!1!==e.zb(n,58).onClick()&&o),o},g.ob,g.F)),e.ob(55,49152,null,0,p.pb,[e.h,e.k],{tab:[0,"tab"]},null),e.ob(56,16384,null,0,h.a,[[2,m.n],d.a,e.k],{routerLink:[0,"routerLink"]},null),e.Ab(57,1),e.ob(58,16384,null,0,m.o,[m.n,m.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.Ab(59,1),(n()(),e.pb(60,0,null,0,0,"img",[["src","/assets/icon/calendar_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(n()(),e.pb(61,0,null,0,6,"ion-tab-button",[["tab","tracking"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.zb(n,63).onClick(t)&&o),"click"===l&&(o=!1!==e.zb(n,65).onClick()&&o),o},g.ob,g.F)),e.ob(62,49152,null,0,p.pb,[e.h,e.k],{tab:[0,"tab"]},null),e.ob(63,16384,null,0,h.a,[[2,m.n],d.a,e.k],{routerLink:[0,"routerLink"]},null),e.Ab(64,1),e.ob(65,16384,null,0,m.o,[m.n,m.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.Ab(66,1),(n()(),e.pb(67,0,null,0,0,"img",[["src","/assets/icon/tracking2_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null)),(n()(),e.pb(68,0,null,0,6,"ion-tab-button",[["tab","settings"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.zb(n,70).onClick(t)&&o),"click"===l&&(o=!1!==e.zb(n,72).onClick()&&o),o},g.ob,g.F)),e.ob(69,49152,null,0,p.pb,[e.h,e.k],{tab:[0,"tab"]},null),e.ob(70,16384,null,0,h.a,[[2,m.n],d.a,e.k],{routerLink:[0,"routerLink"]},null),e.Ab(71,1),e.ob(72,16384,null,0,m.o,[m.n,m.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.Ab(73,1),(n()(),e.pb(74,0,null,0,0,"img",[["src","/assets/icon/settings_blue.png"],["style","width: 40px; height: 40px;"]],null,null,null,null,null))],function(n,l){var t=l.component;n(l,3,0,"primary"),n(l,21,0,"Select Familymember"),n(l,24,0,t.chatmembers),n(l,30,0,t.conversations),n(l,34,0,"dashboard");var e=n(l,36,0,"/user");n(l,35,0,e);var o=n(l,38,0,"/user");n(l,37,0,o),n(l,41,0,"account");var u=n(l,43,0,"/family");n(l,42,0,u);var r=n(l,45,0,"/family");n(l,44,0,r),n(l,48,0,"contact");var i=n(l,50,0,"/communication");n(l,49,0,i);var a=n(l,52,0,"/communication");n(l,51,0,a),n(l,55,0,"calendar");var c=n(l,57,0,"/calendar");n(l,56,0,c);var s=n(l,59,0,"/calendar");n(l,58,0,s),n(l,62,0,"tracking");var b=n(l,64,0,"/tracking");n(l,63,0,b);var g=n(l,66,0,"/tracking");n(l,65,0,g),n(l,69,0,"settings");var p=n(l,71,0,"/settings");n(l,70,0,p);var h=n(l,73,0,"/settings");n(l,72,0,h)},null)}function L(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"app-communication",[],null,null,null,y,x)),e.ob(1,114688,null,0,c,[o.a,r.a,_.a,M.a,m.a,O.a],null,null)],function(n,l){n(l,1,0)},null)}var z=e.lb("app-communication",c,L,{},{},[]),F=t("95zI"),U=t("apKv"),A=t("B4/3");t.d(l,"CommunicationPageModuleNgFactory",function(){return I});var I=e.mb(s,[],function(n){return e.wb([e.xb(512,e.j,e.bb,[[8,[b.a,z]],[3,e.j],e.x]),e.xb(4608,f.l,f.k,[e.u,[2,f.s]]),e.xb(4608,C.i,C.i,[]),e.xb(4608,F.a,F.a,[e.z,e.g]),e.xb(4608,_.a,_.a,[F.a,e.j,e.q]),e.xb(4608,U.a,U.a,[F.a,e.j,e.q]),e.xb(1073742336,f.b,f.b,[]),e.xb(1073742336,C.h,C.h,[]),e.xb(1073742336,C.c,C.c,[]),e.xb(1073742336,A.a,A.a,[]),e.xb(1073742336,m.p,m.p,[[2,m.v],[2,m.n]]),e.xb(1073742336,s,s,[]),e.xb(1024,m.l,function(){return[[{path:"",component:c}]]},[])])})}}]);