(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{dB9c:function(e,t,n){"use strict";n.r(t);var r=n("wj3C"),o=n.n(r),i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};function s(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};function c(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,a)}c((r=r.apply(e,t||[])).next())})}function u(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function f(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}var h,d,l,p=n("zVF4"),_={AVAILABLE_IN_WINDOW:"only-available-in-window",AVAILABLE_IN_SW:"only-available-in-sw",SHOULD_BE_INHERITED:"should-be-overriden",BAD_SENDER_ID:"bad-sender-id",INCORRECT_GCM_SENDER_ID:"incorrect-gcm-sender-id",PERMISSION_DEFAULT:"permission-default",PERMISSION_BLOCKED:"permission-blocked",UNSUPPORTED_BROWSER:"unsupported-browser",NOTIFICATIONS_BLOCKED:"notifications-blocked",FAILED_DEFAULT_REGISTRATION:"failed-serviceworker-registration",SW_REGISTRATION_EXPECTED:"sw-registration-expected",GET_SUBSCRIPTION_FAILED:"get-subscription-failed",INVALID_SAVED_TOKEN:"invalid-saved-token",SW_REG_REDUNDANT:"sw-reg-redundant",TOKEN_SUBSCRIBE_FAILED:"token-subscribe-failed",TOKEN_SUBSCRIBE_NO_TOKEN:"token-subscribe-no-token",TOKEN_SUBSCRIBE_NO_PUSH_SET:"token-subscribe-no-push-set",TOKEN_UNSUBSCRIBE_FAILED:"token-unsubscribe-failed",TOKEN_UPDATE_FAILED:"token-update-failed",TOKEN_UPDATE_NO_TOKEN:"token-update-no-token",USE_SW_BEFORE_GET_TOKEN:"use-sw-before-get-token",INVALID_DELETE_TOKEN:"invalid-delete-token",DELETE_TOKEN_NOT_FOUND:"delete-token-not-found",DELETE_SCOPE_NOT_FOUND:"delete-scope-not-found",BG_HANDLER_FUNCTION_EXPECTED:"bg-handler-function-expected",NO_WINDOW_CLIENT_TO_MSG:"no-window-client-to-msg",UNABLE_TO_RESUBSCRIBE:"unable-to-resubscribe",NO_FCM_TOKEN_FOR_RESUBSCRIBE:"no-fcm-token-for-resubscribe",FAILED_TO_DELETE_TOKEN:"failed-to-delete-token",NO_SW_IN_REG:"no-sw-in-reg",BAD_SCOPE:"bad-scope",BAD_VAPID_KEY:"bad-vapid-key",BAD_SUBSCRIPTION:"bad-subscription",BAD_TOKEN:"bad-token",BAD_PUSH_SET:"bad-push-set",FAILED_DELETE_VAPID_KEY:"failed-delete-vapid-key",INVALID_PUBLIC_VAPID_KEY:"invalid-public-vapid-key",USE_PUBLIC_KEY_BEFORE_GET_TOKEN:"use-public-key-before-get-token",PUBLIC_KEY_DECRYPTION_FAILED:"public-vapid-key-decryption-failed"},E=((h={})[_.AVAILABLE_IN_WINDOW]="This method is available in a Window context.",h[_.AVAILABLE_IN_SW]="This method is available in a service worker context.",h[_.SHOULD_BE_INHERITED]="This method should be overriden by extended classes.",h[_.BAD_SENDER_ID]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",h[_.PERMISSION_DEFAULT]="The required permissions were not granted and dismissed instead.",h[_.PERMISSION_BLOCKED]="The required permissions were not granted and blocked instead.",h[_.UNSUPPORTED_BROWSER]="This browser doesn't support the API's required to use the firebase SDK.",h[_.NOTIFICATIONS_BLOCKED]="Notifications have been blocked.",h[_.FAILED_DEFAULT_REGISTRATION]="We are unable to register the default service worker. {$browserErrorMessage}",h[_.SW_REGISTRATION_EXPECTED]="A service worker registration was the expected input.",h[_.GET_SUBSCRIPTION_FAILED]="There was an error when trying to get any existing Push Subscriptions.",h[_.INVALID_SAVED_TOKEN]="Unable to access details of the saved token.",h[_.SW_REG_REDUNDANT]="The service worker being used for push was made redundant.",h[_.TOKEN_SUBSCRIBE_FAILED]="A problem occured while subscribing the user to FCM: {$message}",h[_.TOKEN_SUBSCRIBE_NO_TOKEN]="FCM returned no token when subscribing the user to push.",h[_.TOKEN_SUBSCRIBE_NO_PUSH_SET]="FCM returned an invalid response when getting an FCM token.",h[_.TOKEN_UNSUBSCRIBE_FAILED]="A problem occured while unsubscribing the user from FCM: {$message}",h[_.TOKEN_UPDATE_FAILED]="A problem occured while updating the user from FCM: {$message}",h[_.TOKEN_UPDATE_NO_TOKEN]="FCM returned no token when updating the user to push.",h[_.USE_SW_BEFORE_GET_TOKEN]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",h[_.INVALID_DELETE_TOKEN]="You must pass a valid token into deleteToken(), i.e. the token from getToken().",h[_.DELETE_TOKEN_NOT_FOUND]="The deletion attempt for token could not be performed as the token was not found.",h[_.DELETE_SCOPE_NOT_FOUND]="The deletion attempt for service worker scope could not be performed as the scope was not found.",h[_.BG_HANDLER_FUNCTION_EXPECTED]="The input to setBackgroundMessageHandler() must be a function.",h[_.NO_WINDOW_CLIENT_TO_MSG]="An attempt was made to message a non-existant window client.",h[_.UNABLE_TO_RESUBSCRIBE]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}",h[_.NO_FCM_TOKEN_FOR_RESUBSCRIBE]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",h[_.FAILED_TO_DELETE_TOKEN]="Unable to delete the currently saved token.",h[_.NO_SW_IN_REG]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",h[_.INCORRECT_GCM_SENDER_ID]="Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.",h[_.BAD_SCOPE]="The service worker scope must be a string with at least one character.",h[_.BAD_VAPID_KEY]="The public VAPID key is not a Uint8Array with 65 bytes.",h[_.BAD_SUBSCRIPTION]="The subscription must be a valid PushSubscription.",h[_.BAD_TOKEN]="The FCM Token used for storage / lookup was not a valid token string.",h[_.BAD_PUSH_SET]="The FCM push set used for storage / lookup was not not a valid push set string.",h[_.FAILED_DELETE_VAPID_KEY]="The VAPID key could not be deleted.",h[_.INVALID_PUBLIC_VAPID_KEY]="The public VAPID key must be a string.",h[_.PUBLIC_KEY_DECRYPTION_FAILED]="The public VAPID key did not equal 65 bytes when decrypted.",h),T=new p.ErrorFactory("messaging","Messaging",E),g=new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110]),S="https://fcm.googleapis.com";function b(e,t){if(null==e||null==t)return!1;if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;for(var n=new DataView(e),r=new DataView(t),o=0;o<e.byteLength;o++)if(n.getUint8(o)!==r.getUint8(o))return!1;return!0}function v(e){return function(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(f(arguments[t]));return e}(t)))}(e).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}!function(e){e.TYPE_OF_MSG="firebase-messaging-msg-type",e.DATA="firebase-messaging-msg-data"}(d||(d={})),function(e){e.PUSH_MSG_RECEIVED="push-msg-received",e.NOTIFICATION_CLICKED="notification-clicked"}(l||(l={}));var w=function(){function e(){}return e.prototype.getToken=function(e,t,n){return c(this,void 0,void 0,function(){var r,o,i,s,a,c,f;return u(this,function(u){switch(u.label){case 0:r=v(t.getKey("p256dh")),o=v(t.getKey("auth")),i="authorized_entity="+e+"&endpoint="+t.endpoint+"&encryption_key="+r+"&encryption_auth="+o,b(n.buffer,g.buffer)||(s=v(n),i+="&application_pub_key="+s),(a=new Headers).append("Content-Type","application/x-www-form-urlencoded"),c={method:"POST",headers:a,body:i},u.label=1;case 1:return u.trys.push([1,4,,5]),[4,fetch(S+"/fcm/connect/subscribe",c)];case 2:return[4,u.sent().json()];case 3:return f=u.sent(),[3,5];case 4:throw u.sent(),T.create(_.TOKEN_SUBSCRIBE_FAILED);case 5:if(f.error)throw T.create(_.TOKEN_SUBSCRIBE_FAILED,{message:f.error.message});if(!f.token)throw T.create(_.TOKEN_SUBSCRIBE_NO_TOKEN);if(!f.pushSet)throw T.create(_.TOKEN_SUBSCRIBE_NO_PUSH_SET);return[2,{token:f.token,pushSet:f.pushSet}]}})})},e.prototype.updateToken=function(e,t,n,r,o){return c(this,void 0,void 0,function(){var i,s,a,c,f,h,d;return u(this,function(u){switch(u.label){case 0:i=v(r.getKey("p256dh")),s=v(r.getKey("auth")),a="push_set="+n+"&token="+t+"&authorized_entity="+e+"&endpoint="+r.endpoint+"&encryption_key="+i+"&encryption_auth="+s,b(o.buffer,g.buffer)||(c=v(o),a+="&application_pub_key="+c),(f=new Headers).append("Content-Type","application/x-www-form-urlencoded"),h={method:"POST",headers:f,body:a},u.label=1;case 1:return u.trys.push([1,4,,5]),[4,fetch(S+"/fcm/connect/subscribe",h)];case 2:return[4,u.sent().json()];case 3:return d=u.sent(),[3,5];case 4:throw u.sent(),T.create(_.TOKEN_UPDATE_FAILED);case 5:if(d.error)throw T.create(_.TOKEN_UPDATE_FAILED,{message:d.error.message});if(!d.token)throw T.create(_.TOKEN_UPDATE_NO_TOKEN);return[2,d.token]}})})},e.prototype.deleteToken=function(e,t,n){return c(this,void 0,void 0,function(){var r,o,i,s;return u(this,function(a){switch(a.label){case 0:r="authorized_entity="+e+"&token="+t+"&pushSet="+n,(o=new Headers).append("Content-Type","application/x-www-form-urlencoded"),i={method:"POST",headers:o,body:r},a.label=1;case 1:return a.trys.push([1,4,,5]),[4,fetch(S+"/fcm/connect/unsubscribe",i)];case 2:return[4,a.sent().json()];case 3:if((s=a.sent()).error)throw T.create(_.TOKEN_UNSUBSCRIBE_FAILED,{message:s.error.message});return[3,5];case 4:throw a.sent(),T.create(_.TOKEN_UNSUBSCRIBE_FAILED);case 5:return[2]}})})},e}();function I(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length),o=0;o<n.length;++o)r[o]=n.charCodeAt(o);return r}var D=function(){function e(){this.dbPromise=null}return e.prototype.get=function(e){return this.createTransaction(function(t){return t.get(e)})},e.prototype.getIndex=function(e,t){return this.createTransaction(function(n){return n.index(e).get(t)})},e.prototype.put=function(e){return this.createTransaction(function(t){return t.put(e)},"readwrite")},e.prototype.delete=function(e){return this.createTransaction(function(t){return t.delete(e)},"readwrite")},e.prototype.closeDatabase=function(){return c(this,void 0,void 0,function(){return u(this,function(e){switch(e.label){case 0:return this.dbPromise?[4,this.dbPromise]:[3,2];case 1:e.sent().close(),this.dbPromise=null,e.label=2;case 2:return[2]}})})},e.prototype.createTransaction=function(e,t){return void 0===t&&(t="readonly"),c(this,void 0,void 0,function(){var n,r,o,i;return u(this,function(s){switch(s.label){case 0:return[4,this.getDb()];case 1:return n=s.sent(),r=n.transaction(this.objectStoreName,t),o=r.objectStore(this.objectStoreName),[4,y(e(o))];case 2:return i=s.sent(),[2,new Promise(function(e,t){r.oncomplete=function(){e(i)},r.onerror=function(){t(r.error)}})]}})})},e.prototype.getDb=function(){var e=this;return this.dbPromise||(this.dbPromise=new Promise(function(t,n){var r=indexedDB.open(e.dbName,e.dbVersion);r.onsuccess=function(){t(r.result)},r.onerror=function(){e.dbPromise=null,n(r.error)},r.onupgradeneeded=function(t){return e.onDbUpgrade(r,t)}})),this.dbPromise},e}();function y(e){return new Promise(function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}})}var N=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dbName="fcm_token_details_db",t.dbVersion=3,t.objectStoreName="fcm_token_object_Store",t}return s(t,e),t.prototype.onDbUpgrade=function(e,t){var n=e.result;switch(t.oldVersion){case 0:(r=n.createObjectStore(this.objectStoreName,{keyPath:"swScope"})).createIndex("fcmSenderId","fcmSenderId",{unique:!1}),r.createIndex("fcmToken","fcmToken",{unique:!0});case 1:!function(){var e=indexedDB.open("undefined");e.onerror=function(e){},e.onsuccess=function(t){!function(e){if(e.objectStoreNames.contains("fcm_token_object_Store")){var t=e.transaction("fcm_token_object_Store").objectStore("fcm_token_object_Store"),n=new w,r=t.openCursor();r.onerror=function(e){console.warn("Unable to cleanup old IDB.",e)},r.onsuccess=function(){var t=r.result;if(t){var o=t.value;n.deleteToken(o.fcmSenderId,o.fcmToken,o.fcmPushSet),t.continue()}else e.close(),indexedDB.deleteDatabase("undefined")}}}(e.result)}}();case 2:var r,o=(r=e.transaction.objectStore(this.objectStoreName)).openCursor();o.onsuccess=function(){var e=o.result;if(e){var t=e.value,n=a({},t);t.createTime||(n.createTime=Date.now()),"string"==typeof t.vapidKey&&(n.vapidKey=I(t.vapidKey)),"string"==typeof t.auth&&(n.auth=I(t.auth).buffer),"string"==typeof t.auth&&(n.p256dh=I(t.p256dh).buffer),e.update(n),e.continue()}}}},t.prototype.getTokenDetailsFromToken=function(e){return c(this,void 0,void 0,function(){return u(this,function(t){if(!e)throw T.create(_.BAD_TOKEN);return m({fcmToken:e}),[2,this.getIndex("fcmToken",e)]})})},t.prototype.getTokenDetailsFromSWScope=function(e){return c(this,void 0,void 0,function(){return u(this,function(t){if(!e)throw T.create(_.BAD_SCOPE);return m({swScope:e}),[2,this.get(e)]})})},t.prototype.saveTokenDetails=function(e){return c(this,void 0,void 0,function(){return u(this,function(t){if(!e.swScope)throw T.create(_.BAD_SCOPE);if(!e.vapidKey)throw T.create(_.BAD_VAPID_KEY);if(!e.endpoint||!e.auth||!e.p256dh)throw T.create(_.BAD_SUBSCRIPTION);if(!e.fcmSenderId)throw T.create(_.BAD_SENDER_ID);if(!e.fcmToken)throw T.create(_.BAD_TOKEN);if(!e.fcmPushSet)throw T.create(_.BAD_PUSH_SET);return m(e),[2,this.put(e)]})})},t.prototype.deleteToken=function(e){return c(this,void 0,void 0,function(){var t;return u(this,function(n){switch(n.label){case 0:return"string"!=typeof e||0===e.length?[2,Promise.reject(T.create(_.INVALID_DELETE_TOKEN))]:[4,this.getTokenDetailsFromToken(e)];case 1:if(!(t=n.sent()))throw T.create(_.DELETE_TOKEN_NOT_FOUND);return[4,this.delete(t.swScope)];case 2:return n.sent(),[2,t]}})})},t}(D);function m(e){if(e.fcmToken&&("string"!=typeof e.fcmToken||0===e.fcmToken.length))throw T.create(_.BAD_TOKEN);if(e.swScope&&("string"!=typeof e.swScope||0===e.swScope.length))throw T.create(_.BAD_SCOPE);if(e.vapidKey&&(!(e.vapidKey instanceof Uint8Array)||65!==e.vapidKey.length))throw T.create(_.BAD_VAPID_KEY);if(e.endpoint&&("string"!=typeof e.endpoint||0===e.endpoint.length))throw T.create(_.BAD_SUBSCRIPTION);if(e.auth&&!(e.auth instanceof ArrayBuffer))throw T.create(_.BAD_SUBSCRIPTION);if(e.p256dh&&!(e.p256dh instanceof ArrayBuffer))throw T.create(_.BAD_SUBSCRIPTION);if(e.fcmSenderId&&("string"!=typeof e.fcmSenderId||0===e.fcmSenderId.length))throw T.create(_.BAD_SENDER_ID);if(e.fcmPushSet&&("string"!=typeof e.fcmPushSet||0===e.fcmPushSet.length))throw T.create(_.BAD_PUSH_SET)}var O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dbName="fcm_vapid_details_db",t.dbVersion=1,t.objectStoreName="fcm_vapid_object_Store",t}return s(t,e),t.prototype.onDbUpgrade=function(e){e.result.createObjectStore(this.objectStoreName,{keyPath:"swScope"})},t.prototype.getVapidFromSWScope=function(e){return c(this,void 0,void 0,function(){var t;return u(this,function(n){switch(n.label){case 0:if("string"!=typeof e||0===e.length)throw T.create(_.BAD_SCOPE);return[4,this.get(e)];case 1:return[2,(t=n.sent())?t.vapidKey:void 0]}})})},t.prototype.saveVapidDetails=function(e,t){return c(this,void 0,void 0,function(){return u(this,function(n){if("string"!=typeof e||0===e.length)throw T.create(_.BAD_SCOPE);if(null===t||65!==t.length)throw T.create(_.BAD_VAPID_KEY);return[2,this.put({swScope:e,vapidKey:t})]})})},t.prototype.deleteVapidDetails=function(e){return c(this,void 0,void 0,function(){var t;return u(this,function(n){switch(n.label){case 0:return[4,this.getVapidFromSWScope(e)];case 1:if(!(t=n.sent()))throw T.create(_.DELETE_SCOPE_NOT_FOUND);return[4,this.delete(e)];case 2:return n.sent(),[2,t]}})})},t}(D),k="messagingSenderId",A=function(){function e(e){var t=this;if(!e.options[k]||"string"!=typeof e.options[k])throw T.create(_.BAD_SENDER_ID);this.messagingSenderId=e.options[k],this.tokenDetailsModel=new N,this.vapidDetailsModel=new O,this.iidModel=new w,this.app=e,this.INTERNAL={delete:function(){return t.delete()}}}return e.prototype.getToken=function(){return c(this,void 0,void 0,function(){var e,t,n,r,o;return u(this,function(i){switch(i.label){case 0:if("denied"===(e=this.getNotificationPermission_()))throw T.create(_.NOTIFICATIONS_BLOCKED);return"granted"!==e?[2,null]:[4,this.getSWRegistration_()];case 1:return t=i.sent(),[4,this.getPublicVapidKey_()];case 2:return n=i.sent(),[4,this.getPushSubscription(t,n)];case 3:return r=i.sent(),[4,this.tokenDetailsModel.getTokenDetailsFromSWScope(t.scope)];case 4:return(o=i.sent())?[2,this.manageExistingToken(t,r,n,o)]:[2,this.getNewToken(t,r,n)]}})})},e.prototype.manageExistingToken=function(e,t,n,r){return c(this,void 0,void 0,function(){return u(this,function(o){switch(o.label){case 0:return function(e,t,n){if(!n.vapidKey||!b(t.buffer,n.vapidKey.buffer))return!1;var r=e.endpoint===n.endpoint,o=b(e.getKey("auth"),n.auth),i=b(e.getKey("p256dh"),n.p256dh);return r&&o&&i}(t,n,r)?Date.now()<r.createTime+6048e5?[2,r.fcmToken]:[2,this.updateToken(e,t,n,r)]:[4,this.deleteTokenFromDB(r.fcmToken)];case 1:return o.sent(),[2,this.getNewToken(e,t,n)]}})})},e.prototype.updateToken=function(e,t,n,r){return c(this,void 0,void 0,function(){var o,i,s;return u(this,function(a){switch(a.label){case 0:return a.trys.push([0,4,,6]),[4,this.iidModel.updateToken(this.messagingSenderId,r.fcmToken,r.fcmPushSet,t,n)];case 1:return o=a.sent(),i={swScope:e.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:o,fcmPushSet:r.fcmPushSet,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(i)];case 2:return a.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)];case 3:return a.sent(),[2,o];case 4:return s=a.sent(),[4,this.deleteToken(r.fcmToken)];case 5:throw a.sent(),s;case 6:return[2]}})})},e.prototype.getNewToken=function(e,t,n){return c(this,void 0,void 0,function(){var r,o;return u(this,function(i){switch(i.label){case 0:return[4,this.iidModel.getToken(this.messagingSenderId,t,n)];case 1:return r=i.sent(),o={swScope:e.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:r.token,fcmPushSet:r.pushSet,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(o)];case 2:return i.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)];case 3:return i.sent(),[2,r.token]}})})},e.prototype.deleteToken=function(e){return c(this,void 0,void 0,function(){var t,n;return u(this,function(r){switch(r.label){case 0:return[4,this.deleteTokenFromDB(e)];case 1:return r.sent(),[4,this.getSWRegistration_()];case 2:return(t=r.sent())?[4,t.pushManager.getSubscription()]:[3,4];case 3:if(n=r.sent())return[2,n.unsubscribe()];r.label=4;case 4:return[2,!0]}})})},e.prototype.deleteTokenFromDB=function(e){return c(this,void 0,void 0,function(){var t;return u(this,function(n){switch(n.label){case 0:return[4,this.tokenDetailsModel.deleteToken(e)];case 1:return t=n.sent(),[4,this.iidModel.deleteToken(t.fcmSenderId,t.fcmToken,t.fcmPushSet)];case 2:return n.sent(),[2]}})})},e.prototype.getPushSubscription=function(e,t){return e.pushManager.getSubscription().then(function(n){return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t})})},e.prototype.requestPermission=function(){throw T.create(_.AVAILABLE_IN_WINDOW)},e.prototype.useServiceWorker=function(e){throw T.create(_.AVAILABLE_IN_WINDOW)},e.prototype.usePublicVapidKey=function(e){throw T.create(_.AVAILABLE_IN_WINDOW)},e.prototype.onMessage=function(e,t,n){throw T.create(_.AVAILABLE_IN_WINDOW)},e.prototype.onTokenRefresh=function(e,t,n){throw T.create(_.AVAILABLE_IN_WINDOW)},e.prototype.setBackgroundMessageHandler=function(e){throw T.create(_.AVAILABLE_IN_SW)},e.prototype.delete=function(){return c(this,void 0,void 0,function(){return u(this,function(e){switch(e.label){case 0:return[4,Promise.all([this.tokenDetailsModel.closeDatabase(),this.vapidDetailsModel.closeDatabase()])];case 1:return e.sent(),[2]}})})},e.prototype.getNotificationPermission_=function(){return Notification.permission},e.prototype.getTokenDetailsModel=function(){return this.tokenDetailsModel},e.prototype.getVapidDetailsModel=function(){return this.vapidDetailsModel},e.prototype.getIidModel=function(){return this.iidModel},e}(),P=function(e){function t(t){var n=e.call(this,t)||this;return n.bgMessageHandler=null,self.addEventListener("push",function(e){n.onPush(e)}),self.addEventListener("pushsubscriptionchange",function(e){n.onSubChange(e)}),self.addEventListener("notificationclick",function(e){n.onNotificationClick(e)}),n}return s(t,e),t.prototype.onPush=function(e){e.waitUntil(this.onPush_(e))},t.prototype.onSubChange=function(e){e.waitUntil(this.onSubChange_(e))},t.prototype.onNotificationClick=function(e){e.waitUntil(this.onNotificationClick_(e))},t.prototype.onPush_=function(e){return c(this,void 0,void 0,function(){var t,n,r,o,i,s;return u(this,function(a){switch(a.label){case 0:if(!e.data)return[2];try{t=e.data.json()}catch(c){return[2]}return[4,this.hasVisibleClients_()];case 1:return a.sent()?[2,this.sendMessageToWindowClients_(t)]:(n=this.getNotificationData_(t))?(r=n.title||"",[4,this.getSWRegistration_()]):[3,3];case 2:return o=a.sent(),i=n.actions,s=Notification.maxActions,i&&s&&i.length>s&&console.warn("This browser only supports "+s+" actions.The remaining actions will not be displayed."),[2,o.showNotification(r,n)];case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5];case 4:return a.sent(),[2];case 5:return[2]}})})},t.prototype.onSubChange_=function(e){return c(this,void 0,void 0,function(){var e,t,n,r;return u(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,this.getSWRegistration_()];case 1:return e=o.sent(),[3,3];case 2:throw t=o.sent(),T.create(_.UNABLE_TO_RESUBSCRIBE,{message:t});case 3:return o.trys.push([3,5,,8]),[4,e.pushManager.getSubscription()];case 4:return o.sent(),[3,8];case 5:return n=o.sent(),[4,this.getTokenDetailsModel().getTokenDetailsFromSWScope(e.scope)];case 6:if(!(r=o.sent()))throw n;return[4,this.deleteToken(r.fcmToken)];case 7:throw o.sent(),n;case 8:return[2]}})})},t.prototype.onNotificationClick_=function(e){return c(this,void 0,void 0,function(){var t,n,r,o;return u(this,function(i){switch(i.label){case 0:return e.notification&&e.notification.data&&e.notification.data.FCM_MSG?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(t=e.notification.data.FCM_MSG).notification&&(n=t.fcmOptions&&t.fcmOptions.link||t.notification.click_action)?[4,this.getWindowClient_(n)]:[2]):[2];case 1:return(r=i.sent())?[3,3]:[4,self.clients.openWindow(n)];case 2:return r=i.sent(),[3,5];case 3:return[4,r.focus()];case 4:r=i.sent(),i.label=5;case 5:return r?(delete t.notification,delete t.fcmOptions,o=B(l.NOTIFICATION_CLICKED,t),[2,this.attemptToMessageClient_(r,o)]):[2]}})})},t.prototype.getNotificationData_=function(e){var t;if(e&&"object"==typeof e.notification){var n=a({},e.notification);return n.data=a({},e.notification.data,((t={}).FCM_MSG=e,t)),n}},t.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!=typeof e)throw T.create(_.BG_HANDLER_FUNCTION_EXPECTED);this.bgMessageHandler=e},t.prototype.getWindowClient_=function(e){return c(this,void 0,void 0,function(){var t,n,r,o;return u(this,function(i){switch(i.label){case 0:return t=new URL(e,self.location.href).href,[4,C()];case 1:for(n=i.sent(),r=null,o=0;o<n.length;o++)if(new URL(n[o].url,self.location.href).href===t){r=n[o];break}return[2,r]}})})},t.prototype.attemptToMessageClient_=function(e,t){return c(this,void 0,void 0,function(){return u(this,function(n){if(!e)throw T.create(_.NO_WINDOW_CLIENT_TO_MSG);return e.postMessage(t),[2]})})},t.prototype.hasVisibleClients_=function(){return c(this,void 0,void 0,function(){return u(this,function(e){switch(e.label){case 0:return[4,C()];case 1:return[2,e.sent().some(function(e){return"visible"===e.visibilityState})]}})})},t.prototype.sendMessageToWindowClients_=function(e){return c(this,void 0,void 0,function(){var t,n,r=this;return u(this,function(o){switch(o.label){case 0:return[4,C()];case 1:return t=o.sent(),n=B(l.PUSH_MSG_RECEIVED,e),[4,Promise.all(t.map(function(e){return r.attemptToMessageClient_(e,n)}))];case 2:return o.sent(),[2]}})})},t.prototype.getSWRegistration_=function(){return c(this,void 0,void 0,function(){return u(this,function(e){return[2,self.registration]})})},t.prototype.getPublicVapidKey_=function(){return c(this,void 0,void 0,function(){var e,t;return u(this,function(n){switch(n.label){case 0:return[4,this.getSWRegistration_()];case 1:if(!(e=n.sent()))throw T.create(_.SW_REGISTRATION_EXPECTED);return[4,this.getVapidDetailsModel().getVapidFromSWScope(e.scope)];case 2:return null==(t=n.sent())?[2,g]:[2,t]}})})},t}(A);function C(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function B(e,t){var n;return(n={})[d.TYPE_OF_MSG]=e,n[d.DATA]=t,n}var R=function(e){function t(t){var n=e.call(this,t)||this;return n.registrationToUse=null,n.publicVapidKeyToUse=null,n.manifestCheckPromise=null,n.messageObserver=null,n.tokenRefreshObserver=null,n.onMessageInternal=Object(p.createSubscribe)(function(e){n.messageObserver=e}),n.onTokenRefreshInternal=Object(p.createSubscribe)(function(e){n.tokenRefreshObserver=e}),n.setupSWMessageListener_(),n}return s(t,e),t.prototype.getToken=function(){return c(this,void 0,void 0,function(){return u(this,function(t){switch(t.label){case 0:return this.manifestCheckPromise||(this.manifestCheckPromise=function(){return c(this,void 0,void 0,function(){var e,t;return u(this,function(n){switch(n.label){case 0:if(!(e=document.querySelector('link[rel="manifest"]')))return[2];n.label=1;case 1:return n.trys.push([1,4,,5]),[4,fetch(e.href)];case 2:return[4,n.sent().json()];case 3:return t=n.sent(),[3,5];case 4:return n.sent(),[2];case 5:if(!t||!t.gcm_sender_id)return[2];if("103953800507"!==t.gcm_sender_id)throw T.create(_.INCORRECT_GCM_SENDER_ID);return[2]}})})}()),[4,this.manifestCheckPromise];case 1:return t.sent(),[2,e.prototype.getToken.call(this)]}})})},t.prototype.requestPermission=function(){return c(this,void 0,void 0,function(){var e;return u(this,function(t){switch(t.label){case 0:return"granted"===this.getNotificationPermission_()?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(e=t.sent()))return[2];throw T.create("denied"===e?_.PERMISSION_BLOCKED:_.PERMISSION_DEFAULT)}})})},t.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw T.create(_.SW_REGISTRATION_EXPECTED);if(null!=this.registrationToUse)throw T.create(_.USE_SW_BEFORE_GET_TOKEN);this.registrationToUse=e},t.prototype.usePublicVapidKey=function(e){if("string"!=typeof e)throw T.create(_.INVALID_PUBLIC_VAPID_KEY);if(null!=this.publicVapidKeyToUse)throw T.create(_.USE_PUBLIC_KEY_BEFORE_GET_TOKEN);var t=I(e);if(65!==t.length)throw T.create(_.PUBLIC_KEY_DECRYPTION_FAILED);this.publicVapidKeyToUse=t},t.prototype.onMessage=function(e,t,n){return"function"==typeof e?this.onMessageInternal(e,t,n):this.onMessageInternal(e)},t.prototype.onTokenRefresh=function(e,t,n){return"function"==typeof e?this.onTokenRefreshInternal(e,t,n):this.onTokenRefreshInternal(e)},t.prototype.waitForRegistrationToActivate_=function(e){var t=e.installing||e.waiting||e.active;return new Promise(function(n,r){if(t)if("activated"!==t.state)if("redundant"!==t.state){var o=function(){if("activated"===t.state)n(e);else{if("redundant"!==t.state)return;r(T.create(_.SW_REG_REDUNDANT))}t.removeEventListener("statechange",o)};t.addEventListener("statechange",o)}else r(T.create(_.SW_REG_REDUNDANT));else n(e);else r(T.create(_.NO_SW_IN_REG))})},t.prototype.getSWRegistration_=function(){var e=this;return this.registrationToUse?this.waitForRegistrationToActivate_(this.registrationToUse):(this.registrationToUse=null,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}).catch(function(e){throw T.create(_.FAILED_DEFAULT_REGISTRATION,{browserErrorMessage:e.message})}).then(function(t){return e.waitForRegistrationToActivate_(t).then(function(){return e.registrationToUse=t,t.update(),t})}))},t.prototype.getPublicVapidKey_=function(){return c(this,void 0,void 0,function(){return u(this,function(e){return this.publicVapidKeyToUse?[2,this.publicVapidKeyToUse]:[2,g]})})},t.prototype.setupSWMessageListener_=function(){var e=this;navigator.serviceWorker.addEventListener("message",function(t){if(t.data&&t.data[d.TYPE_OF_MSG]){var n=t.data;switch(n[d.TYPE_OF_MSG]){case l.PUSH_MSG_RECEIVED:case l.NOTIFICATION_CLICKED:e.messageObserver&&e.messageObserver.next(n[d.DATA])}}},!1)},t}(A);function U(){return self&&"ServiceWorkerGlobalScope"in self?"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}o.a.INTERNAL.registerService("messaging",function(e){if(!U())throw T.create(_.UNSUPPORTED_BROWSER);return self&&"ServiceWorkerGlobalScope"in self?new P(e):new R(e)},{isSupported:U})}}]);