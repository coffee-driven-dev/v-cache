(function(e){function t(t){for(var a,c,s=t[0],i=t[1],l=t[2],m=0,p=[];m<s.length;m++)c=s[m],r[c]&&p.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={1:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/v-cache/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;o.push([3,0]),n()})({3:function(e,t,n){e.exports=n("Vtdi")},N7WB:function(e,t,n){"use strict";var a=n("dsy4"),r=n.n(a);r.a},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var a=n("Kw5r"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-toolbar",{attrs:{color:"primary",app:""}}),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("h1",[e._v("v-cache examples")]),e._v('\n\n\t\t\t\tThe custom Vue Directive, v-cache, can be attached to any Vue component. The only required parameter is a unique string that can\n\t\t\t\tbe used as a "caching key". In example:'),n("br"),n("br"),n("code",[e._v("<my-custom-form-component v-cache=\"'my-custom-cache-key'\" />")]),n("br"),n("br"),e._v("\n\t\t\t\tWhen a component uses the v-cache directive, it gains the ability to cache, restore, or clear the state of:"),n("br"),n("br"),n("code",{staticStyle:{"white-space":"normal"}},[e._v("\n\t\t\t\tdata: {\n\t\t\t\t\tform: {\n\t\t\t\t\t\t// Cache, restore, or clear this state\n\t\t\t\t\t}\n\t\t\t\t}")]),n("br"),n("br"),e._v("\n\t\t\t\tBy emitting these events to trigger the directive's behavior:"),n("br"),n("br"),n("code",[e._v('this.$emit("cache");\nthis.$emit("cache-restore");\nthis.$emit("cache-clear");\n')]),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md6:""}},[n("h2",[e._v("Basic Example")]),e._v("\n\t\t\t\t\t\tTry reloading the page after typing in this form! You can even close the tab (or your browser entirely).\n\t\t\t\t\t\t"),n("v-card",{staticStyle:{padding:"30px 45px"}},[n("basic-example",{directives:[{name:"cache",rawName:"v-cache",value:"basic-form-cache-key",expression:"'basic-form-cache-key'"}]})],1)],1),n("v-flex",{attrs:{xs12:"",md6:""}},[n("h2",[e._v("Code")]),n("VEmbed",{attrs:{id:"embed-container",options:{emoji:!0}}},[n("div",{staticClass:"gist-url"},[e._v("\n\t\t\t\t\t\t\t\thttps://gist.github.com/dannyrb/59ebb502b93bdcba940c1614cb20c771\n\t\t\t\t\t\t\t")])])],1),n("v-flex",{attrs:{xs12:"",md6:""}},[n("h2",[e._v("Advanced Example")]),n("v-card",{staticStyle:{padding:"30px 45px"}},[n("basic-example")],1)],1),n("v-flex",{attrs:{xs12:"",md6:""}},[n("h2",[e._v("Code")]),n("VEmbed",{attrs:{id:"embed-container2",options:{emoji:!0}}},[n("div",{staticClass:"gist-url"},[e._v("\n\t\t\t\t\t\t\t\thttps://gist.github.com/dannyrb/59ebb502b93bdcba940c1614cb20c771\n\t\t\t\t\t\t\t")])])],1)],1)],1)],1),n("v-footer",{attrs:{app:""}})],1)],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{model:{value:e.form.valid,callback:function(t){e.$set(e.form,"valid",t)},expression:"form.valid"}},[n("v-text-field",{attrs:{counter:10,label:"Name",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),n("v-text-field",{attrs:{label:"E-mail",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),n("v-text-field",{attrs:{label:"Message","multi-line":""},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}}),n("v-checkbox",{attrs:{label:"Do you agree to the terms and conditions?"},model:{value:e.form.termsAccepted,callback:function(t){e.$set(e.form,"termsAccepted",t)},expression:"form.termsAccepted"}}),n("v-btn",{attrs:{block:"",color:"info"},on:{click:e.pretendSubmitForm}},[e._v("Submit Message")])],1)},s=[],i={name:"BasicExample",data:function(){return{form:{valid:!1,name:"",email:"",message:"",termsAccepted:!1}}},watch:{form:{handler:function(){this.$emit("cache",this.form)},deep:!0}},mounted:function(){this.$emit("restore-cache")},methods:{pretendSubmitForm:function(){this.form={username:"",email:"",message:"",termsAccepted:!1},this.$emit("clear-cache")}}},l=i,u=(n("N7WB"),n("KHd+")),m=Object(u["a"])(l,c,s,!1,null,"0dfab224",null),p=m.exports,v=n("j6JT"),f={name:"app",components:{BasicExample:p,VEmbed:v["a"]}},d=f,h=(n("nNx0"),Object(u["a"])(d,r,o,!1,null,null,null)),b=h.exports,y=n("zlta"),g=n.n(y),x=(n("v0CA"),n("91GP"),n("a94B")),w=n("oAJy"),_=n.n(w),k=function(e,t,n){var a=null!==e,r=a&&"object"===Object(x["a"])(e);t.componentInstance[n]=r?Object.assign({},t.componentInstance[n],e):e},$=function(e){console.error(e)},I=function(e){},j={bind:function(e,t,n){var a=t.value.key||t.value,r=t.value.restoreTarget||"form",o=t.value.successHandler||k,c=t.value.errorHandler||$,s=t.value.restoreCallback||I,i=!a;i&&console.warn("<my-component v-cache=\"'unique-key'\">, OR\n<my-component v-cache=\"{ key: 'unique-key' }\">:\nYou must provide a cache key to the v-cache directive for caching to work.");var l=!n.componentInstance;l&&console.warn("v-cache currently only works when placed on custom components\nPlease feel free to PR functionality to support native components\nThe biggest hurdle is modifying logic to use native events + value attributes");var u=n.componentInstance&&!n.componentInstance[r];u&&console.warn('v-cache defaults to restoring your compenent\'s "form" data value\n'+"v-cache has determined that the restoreTarget: ".concat(r," does not exist"));var m=function(e){return _.a.setItem(a,e)};n.componentInstance.$on("cache",m);var p=function(e){return _.a.getItem(a).then(function(t){if(!t)return t;var a=null!==e&&"function"===typeof e,c=null!==e&&"function"===typeof e&&e.length>0,s=c?e:r;return a?e(t,n,s):o(t,n,s),t}).then(s).catch(c)};n.componentInstance.$on("restore-cache",p);var v=function(){return setTimeout(function(){return _.a.removeItem(a)},200)};n.componentInstance.$on("clear-cache",v)},unbind:function(e,t,n){n.componentInstance.$off()}};a["a"].use(g.a),a["a"].directive("cache",j),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(b)}}).$mount("#app")},ZpY7:function(e,t,n){},dsy4:function(e,t,n){},nNx0:function(e,t,n){"use strict";var a=n("ZpY7"),r=n.n(a);r.a}});
//# sourceMappingURL=app.69595709.js.map