(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{TJR2:function(e,o,c){"use strict";c.r(o),c.d(o,"IonCheckbox",function(){return r});var t=c("cBjU"),i=c("TBP9"),n=c("ATF1"),r=function(){function e(){var e=this;this.inputId="ion-cb-"+a++,this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onClick=function(){e.checked=!e.checked},this.onKeyUp=function(){e.keyFocus=!0},this.onFocus=function(){e.ionFocus.emit()},this.onBlur=function(){e.keyFocus=!1,e.ionBlur.emit()}}return e.prototype.componentWillLoad=function(){this.emitStyle()},e.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()},e.prototype.emitStyle=function(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})},e.prototype.hostData=function(){var e=this.inputId+"-lbl",o=Object(i.d)(this.el);return o&&(o.id=e),{role:"checkbox","aria-disabled":this.disabled?"true":null,"aria-checked":""+this.checked,"aria-labelledby":e,class:Object.assign({},Object(n.h)(this.color),{"in-item":Object(n.j)("ion-item",this.el),"checkbox-checked":this.checked,"checkbox-disabled":this.disabled,"checkbox-key":this.keyFocus,interactive:!0})}},e.prototype.render=function(){return Object(i.e)(!0,this.el,this.name,this.checked?this.value:"",this.disabled),[Object(t.b)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24"},Object(t.b)("path","md"===this.mode?{d:"M1.73,12.91 8.1,19.28 22.79,4.59"}:{d:"M5.9,12.5l3.8,3.8l8.8-8.8"})),Object(t.b)("button",{type:"button",onClick:this.onClick,onKeyUp:this.onKeyUp,onFocus:this.onFocus,onBlur:this.onBlur})]},Object.defineProperty(e,"is",{get:function(){return"ion-checkbox"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["emitStyle"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return'.sc-ion-checkbox-md-h{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}.ion-color.sc-ion-checkbox-md-h{--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button.sc-ion-checkbox-md{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.checkbox-icon.sc-ion-checkbox-md{border-radius:var(--border-radius);display:block;position:relative;width:var(--width);height:var(--height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon.sc-ion-checkbox-md   path.sc-ion-checkbox-md{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}.checkbox-checked.sc-ion-checkbox-md-h   .checkbox-icon.sc-ion-checkbox-md{border-color:var(--border-color-checked);background:var(--background-checked)}.checkbox-checked.sc-ion-checkbox-md-h   .checkbox-icon.sc-ion-checkbox-md   path.sc-ion-checkbox-md{opacity:1}.checkbox-disabled.sc-ion-checkbox-md-h{pointer-events:none}.sc-ion-checkbox-md-h{--height:18px;--width:18px;--border-radius:calc(var(--height) * .125);--border-width:2px;--border-style:solid;--border-color:rgba(0,0,0,0.54);--background:var(--ion-item-background,var(--ion-background-color,#fff));--transition:background 180ms cubic-bezier(0.4,0,0.2,1)}.checkbox-icon.sc-ion-checkbox-md   path.sc-ion-checkbox-md{stroke-dasharray:30;stroke-dashoffset:30;stroke-width:3}.checkbox-checked.sc-ion-checkbox-md-h   .checkbox-icon.sc-ion-checkbox-md   path.sc-ion-checkbox-md{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}.checkbox-disabled.sc-ion-checkbox-md-h{opacity:.3}.checkbox-key.sc-ion-checkbox-md-h   .checkbox-icon.sc-ion-checkbox-md:after{border-radius:50%;left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:"";opacity:.2}.in-item.sc-ion-checkbox-md-h{margin:18px 0;display:block;position:static}.in-item[slot=start].sc-ion-checkbox-md-h{margin:18px 36px 18px 4px}'},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),a=0}}]);