(function(t){function e(e){for(var n,a,o=e[0],l=e[1],c=e[2],u=0,h=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,a=1;a<i.length;a++){var o=i[a];0!==s[o]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=i[0]))}return t}var n={},a={app:0},s={app:0},r=[];function o(t){return l.p+"js/"+({"chat-room~dynamic-size~fixed-size~horizontal~infinite-loading~keep-state":"chat-room~dynamic-size~fixed-size~horizontal~infinite-loading~keep-state","chat-room":"chat-room","dynamic-size":"dynamic-size","fixed-size":"fixed-size",horizontal:"horizontal","infinite-loading":"infinite-loading","keep-state":"keep-state"}[t]||t)+"."+{"chat-room~dynamic-size~fixed-size~horizontal~infinite-loading~keep-state":"2e7deb58","chat-room":"bdb074cc","dynamic-size":"397a54f6","fixed-size":"924b8c75",horizontal:"9f9f94ef","infinite-loading":"acd690a5","keep-state":"985c61e5"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(t){var e=[],i={"chat-room":1,"dynamic-size":1,"fixed-size":1,horizontal:1,"infinite-loading":1,"keep-state":1};a[t]?e.push(a[t]):0!==a[t]&&i[t]&&e.push(a[t]=new Promise((function(e,i){for(var n="css/"+({"chat-room~dynamic-size~fixed-size~horizontal~infinite-loading~keep-state":"chat-room~dynamic-size~fixed-size~horizontal~infinite-loading~keep-state","chat-room":"chat-room","dynamic-size":"dynamic-size","fixed-size":"fixed-size",horizontal:"horizontal","infinite-loading":"infinite-loading","keep-state":"keep-state"}[t]||t)+"."+{"chat-room~dynamic-size~fixed-size~horizontal~infinite-loading~keep-state":"31d6cfe0","chat-room":"0c99226a","dynamic-size":"9013d8ce","fixed-size":"840ec49f",horizontal:"c4223f3f","infinite-loading":"4b238c18","keep-state":"ad1b8c2c"}[t]+".css",s=l.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===s))return e()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){c=h[o],u=c.getAttribute("data-href");if(u===n||u===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete a[t],d.parentNode.removeChild(d),i(r)},d.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,i){n=s[t]=[e,i]}));e.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var h=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var i=s[t];if(0!==i){if(i){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",h.name="ChunkLoadError",h.type=n,h.request=a,i[1](h)}s[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(i,n,function(e){return t[e]}.bind(null,n));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var h=0;h<c.length;h++)e(c[h]);var d=u;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},2345:function(t,e,i){"use strict";var n=i("67ef"),a=i.n(n);a.a},2395:function(t,e,i){},"2f31":function(t,e,i){},"3f05":function(t,e,i){"use strict";e["a"]=function(){var t=(location.hash||"").substr(2);return t?"https://github.com/tangbc/vue-virtual-scroll-list/tree/master/example/src/views/".concat(t,"/Main.vue"):"https://github.com/tangbc/vue-virtual-scroll-list"}},"56d7":function(t,e,i){"use strict";i.r(e);i("b0c0"),i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("e832"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"nav"}},[i("router-link",{attrs:{to:"/"}},[t._v("home")]),i("span",{staticClass:"line"},[t._v("|")]),i("router-link",{attrs:{to:"/fixed-size"}},[t._v("fixed size")]),i("span",{staticClass:"line"},[t._v("|")]),i("router-link",{attrs:{to:"/dynamic-size"}},[t._v("dynamic size")]),i("span",{staticClass:"line"},[t._v("|")]),i("router-link",{attrs:{to:"/horizontal"}},[t._v("horizontal")]),i("span",{staticClass:"line"},[t._v("|")]),i("router-link",{attrs:{to:"/infinite-loading"}},[t._v("infinite loading")]),i("span",{staticClass:"line"},[t._v("|")]),i("router-link",{attrs:{to:"/keep-state"}},[t._v("keep state")]),i("span",{staticClass:"line"},[t._v("|")]),i("router-link",{attrs:{to:"/chat-room"}},[t._v("chat room")])],1),i("router-view")],1)},s=[],r=(i("7c55"),i("2877")),o={},l=Object(r["a"])(o,a,s,!1,null,null,null),c=l.exports,u=(i("d3b7"),i("8c4f")),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"example"},[i("h2",{staticClass:"name"},[t._v(" vue-virtual-scroll-list ")]),i("div",{staticClass:"desc"},[t._v("⚡️ A vue component support big amount data list with high scroll performance.")]),i("div",{staticClass:"icons"},[i("span",{staticClass:"btn"},[i("github-button",{attrs:{href:"https://github.com/tangbc/vue-virtual-scroll-list/issues","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-size":"large","data-show-count":"true","aria-label":"Issue tangbc/vue-virtual-scroll-list on GitHub"}},[t._v("Issue")])],1),i("span",{staticClass:"btn"},[i("github-button",{attrs:{href:"https://github.com/tangbc/vue-virtual-scroll-list","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-size":"large","data-show-count":"true","aria-label":"Star tangbc/vue-virtual-scroll-list on GitHub"}},[t._v("Star")])],1),i("span",{staticClass:"btn"},[i("github-button",{attrs:{href:"https://github.com/tangbc/vue-virtual-scroll-list/fork","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-size":"large","data-show-count":"true","aria-label":"Fork tangbc/vue-virtual-scroll-list on GitHub"}},[t._v("Fork")])],1),i("span",{staticClass:"btn"},[i("github-button",{attrs:{href:"https://github.com/tangbc/vue-virtual-scroll-list/subscription","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-size":"large","data-show-count":"true","aria-label":"Watch tangbc/vue-virtual-scroll-list on GitHub"}},[t._v("Watch")])],1)]),t._m(0),i("h3",{staticClass:"title"},[t._v("What's news in v2.0")]),t._m(1),i("h3",{staticClass:"title"},[t._v("Contributions")]),i("div",[t._v("Welcome to improve this component with any issue, pull request or code review. ✋")])])},d=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"head"},[i("img",{attrs:{alt:"Travis CI Status",src:"https://travis-ci.org/tangbc/vue-virtual-scroll-list.svg?branch=master"}}),i("img",{attrs:{alt:"NPM downloads",src:"https://img.shields.io/npm/dm/vue-virtual-scroll-list.svg"}}),i("img",{attrs:{alt:"NPM version",src:"https://img.shields.io/npm/v/vue-virtual-scroll-list.svg"}}),i("img",{attrs:{alt:"Package quality",src:"https://npm.packagequality.com/shield/vue-virtual-scroll-list.svg"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("Support header, footer slot, horizontal direction.")]),i("li",[t._v("Code structure is more reasonable and good maintainability.")]),i("li",[t._v("Abandoned v-for mode and variable mode, all condition unify into one mode.")]),i("li",[t._v("Don't have to care about each item size, in sometimes it's difficult to know that.")])])}],f={name:"index",data:function(){return{}}},p=f,g=(i("b5f4"),Object(r["a"])(p,h,d,!1,null,"0d95b312",null)),m=g.exports;n["a"].use(u["a"]);var v=[{path:"/",name:"home",component:m},{path:"/fixed-size",name:"fixed-size",component:function(){return Promise.all([i.e("chat-room~dynamic-size~fixed-size~horizontal~infinite-loading~keep-state"),i.e("fixed-size")]).then(i.bind(null,"c227"))}},{path:"/dynamic-size",name:"dynamic-size",component:function(){return Promise.all([i.e("chat-room~dynamic-size~fixed-size~horizontal~infinite-loading~keep-state"),i.e("dynamic-size")]).then(i.bind(null,"960e"))}},{path:"/horizontal",name:"horizontal",component:function(){return Promise.all([i.e("chat-room~dynamic-size~fixed-size~horizontal~infinite-loading~keep-state"),i.e("horizontal")]).then(i.bind(null,"a2ab"))}},{path:"/infinite-loading",name:"infinite-loading",component:function(){return Promise.all([i.e("chat-room~dynamic-size~fixed-size~horizontal~infinite-loading~keep-state"),i.e("infinite-loading")]).then(i.bind(null,"077d"))}},{path:"/keep-state",name:"keep-state",component:function(){return Promise.all([i.e("chat-room~dynamic-size~fixed-size~horizontal~infinite-loading~keep-state"),i.e("keep-state")]).then(i.bind(null,"0786"))}},{path:"/chat-room",name:"chat-room",component:function(){return Promise.all([i.e("chat-room~dynamic-size~fixed-size~horizontal~infinite-loading~keep-state"),i.e("chat-room")]).then(i.bind(null,"cbe9"))}}];var y=new u["a"]({routes:v}),z=y,b=i("e878"),S=(i("99af"),i("d81d"),i("4ec9"),i("3ca3"),i("ddb0"),i("d4ec")),k=i("bee2"),x={FRONT:"FRONT",BEHIND:"BEHIND"},C={INIT:"INIT",FIXED:"FIXED",DYNAMIC:"DYNAMIC"},O=2,T=function(){function t(e,i){Object(S["a"])(this,t),this.init(e,i)}return Object(k["a"])(t,[{key:"init",value:function(t,e){this.param=t,this.callUpdate=e,this.sizes=new Map,this.firstRangeTotalSize=0,this.firstRangeAverageSize=0,this.lastCalcIndex=0,this.fixedSizeValue=0,this.calcType=C.INIT,this.offset=0,this.direction="",this.range=Object.create(null),t&&this.checkRange(0,t.keeps-1)}},{key:"destroy",value:function(){this.init(null,null)}},{key:"getRange",value:function(){var t=Object.create(null);return t.start=this.range.start,t.end=this.range.end,t.padFront=this.range.padFront,t.padBehind=this.range.padBehind,t}},{key:"isBehind",value:function(){return this.direction===x.BEHIND}},{key:"isFront",value:function(){return this.direction===x.FRONT}},{key:"getOffset",value:function(t){return t<1?0:this.getIndexOffset(t)}},{key:"updateParam",value:function(t,e){this.param&&t in this.param&&(this.param[t]=e)}},{key:"saveSize",value:function(t,e){this.sizes.set(t,e),this.calcType===C.INIT?(this.fixedSizeValue=e,this.calcType=C.FIXED):this.calcType===C.FIXED&&this.fixedSizeValue!==e&&(this.calcType=C.DYNAMIC,delete this.fixedSizeValue),this.sizes.size<=this.param.keeps?(this.firstRangeTotalSize=this.firstRangeTotalSize+e,this.firstRangeAverageSize=Math.round(this.firstRangeTotalSize/this.sizes.size)):delete this.firstRangeTotalSize}},{key:"handleDataSourcesChange",value:function(){var t=this.range.start;this.isFront()?t-=O:this.isBehind()&&(t+=O),t=Math.max(t,0),this.updateRange(this.range.start,this.getEndByStart(t))}},{key:"handleSlotSizeChange",value:function(){this.handleDataSourcesChange()}},{key:"handleScroll",value:function(t){this.direction=t<this.offset?x.FRONT:x.BEHIND,this.offset=t,this.direction===x.FRONT?this.handleFront():this.direction===x.BEHIND&&this.handleBehind()}},{key:"handleFront",value:function(){var t=this.getScrollOvers();if(!(t>this.range.start)){var e=Math.max(t-this.param.buffer,0);this.checkRange(e,this.getEndByStart(e))}}},{key:"handleBehind",value:function(){var t=this.getScrollOvers();t<this.range.start+this.param.buffer||this.checkRange(t,this.getEndByStart(t))}},{key:"getScrollOvers",value:function(){var t=this.offset-this.param.slotHeaderSize;if(t<=0)return 0;if(this.isFixedType())return Math.floor(t/this.fixedSizeValue);var e=0,i=0,n=0,a=this.param.uniqueIds.length;while(e<=a){if(i=e+Math.floor((a-e)/2),n=this.getIndexOffset(i),n===t)return i;n<t?e=i+1:n>t&&(a=i-1)}return e>0?--e:0}},{key:"getIndexOffset",value:function(t){if(!t)return 0;for(var e=0,i=0,n=0;n<t;n++)i=this.sizes.get(this.param.uniqueIds[n]),e+=i||this.getEstimateSize();return this.lastCalcIndex=Math.max(this.lastCalcIndex,t-1),this.lastCalcIndex=Math.min(this.lastCalcIndex,this.getLastIndex()),e}},{key:"isFixedType",value:function(){return this.calcType===C.FIXED}},{key:"getLastIndex",value:function(){return this.param.uniqueIds.length-1}},{key:"checkRange",value:function(t,e){var i=this.param.keeps,n=this.param.uniqueIds.length;n<=i?(t=0,e=this.getLastIndex()):e-t<i-1&&(t=e-i+1),this.range.start!==t&&this.updateRange(t,e)}},{key:"updateRange",value:function(t,e){this.range.start=t,this.range.end=e,this.range.padFront=this.getPadFront(),this.range.padBehind=this.getPadBehind(),this.callUpdate(this.getRange())}},{key:"getEndByStart",value:function(t){var e=t+this.param.keeps-1,i=Math.min(e,this.getLastIndex());return i}},{key:"getPadFront",value:function(){return this.isFixedType()?this.fixedSizeValue*this.range.start:this.getIndexOffset(this.range.start)}},{key:"getPadBehind",value:function(){var t=this.range.end,e=this.getLastIndex();return this.isFixedType()?(e-t)*this.fixedSizeValue:this.lastCalcIndex===e?this.getIndexOffset(e)-this.getIndexOffset(t):(e-t)*this.getEstimateSize()}},{key:"getEstimateSize",value:function(){return this.firstRangeAverageSize||this.param.size}}]),t}(),I=(i("a9e3"),{size:{type:Number,required:!0},keeps:{type:Number,required:!0},dataKey:{type:String,required:!0},dataSources:{type:Array,required:!0},dataComponent:{type:[Object,Function],required:!0},extraProps:{type:Object},rootTag:{type:String,default:"div"},wrapTag:{type:String,default:"div"},wrapClass:{type:String,default:""},direction:{type:String,default:"vertical"},topThreshold:{type:Number,default:0},bottomThreshold:{type:Number,default:0},start:{type:Number,default:0},offset:{type:Number,default:0},itemTag:{type:String,default:"div"},itemClass:{type:String,default:""},itemClassAdd:{type:Function},headerTag:{type:String,default:"div"},headerClass:{type:String,default:""},footerTag:{type:String,default:"div"},footerClass:{type:String,default:""},disabled:{type:Boolean,default:!1}}),_={index:{type:Number},event:{type:String},tag:{type:String},horizontal:{type:Boolean},source:{type:Object},component:{type:[Object,Function]},uniqueKey:{type:String},extraProps:{type:Object}},E={event:{type:String},uniqueKey:{type:String},tag:{type:String},horizontal:{type:Boolean}},w={created:function(){this.shapeKey=this.horizontal?"offsetWidth":"offsetHeight"},mounted:function(){var t=this;"undefined"!==typeof ResizeObserver&&(this.resizeObserver=new ResizeObserver((function(){t.dispatchSizeChange()})),this.resizeObserver.observe(this.$el))},updated:function(){this.dispatchSizeChange()},beforeDestroy:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)},methods:{getCurrentSize:function(){return this.$el?this.$el[this.shapeKey]:0},dispatchSizeChange:function(){this.$parent.$emit(this.event,this.uniqueKey,this.getCurrentSize(),this.hasInitial)}}},R=n["a"].component("virtual-list-item",{mixins:[w],props:_,render:function(t){var e=this.tag,i=this.component,n=this.extraProps,a=void 0===n?{}:n,s=this.index;return a.source=this.source,a.index=s,t(e,{role:"item"},[t(i,{props:a})])}}),F=n["a"].component("virtual-list-slot",{mixins:[w],props:E,render:function(t){var e=this.tag,i=this.uniqueKey;return t(e,{attrs:{role:i}},this.$slots.default)}}),P={ITEM:"item_resize",SLOT:"slot_resize"},N={HEADER:"header",FOOTER:"footer"},$=n["a"].component("virtual-list",{props:I,data:function(){return{range:null}},watch:{"dataSources.length":function(){this.virtual.updateParam("uniqueIds",this.getUniqueIdFromDataSources()),this.virtual.handleDataSourcesChange()},start:function(t){this.scrollToIndex(t)},offset:function(t){this.scrollToOffset(t)}},created:function(){this.isHorizontal="horizontal"===this.direction,this.directionKey=this.isHorizontal?"scrollLeft":"scrollTop",this.installVirtual(),this.$on(P.ITEM,this.onItemResized),(this.$slots.header||this.$slots.footer)&&this.$on(P.SLOT,this.onSlotResized)},activated:function(){this.scrollToOffset(this.virtual.offset)},mounted:function(){this.start?this.scrollToIndex(this.start):this.offset&&this.scrollToOffset(this.offset)},beforeDestroy:function(){this.virtual.destroy()},methods:{getSize:function(t){return this.virtual.sizes.get(t)},getSizes:function(){return this.virtual.sizes.size},scrollToOffset:function(t){var e=this.$refs.root;e&&(e[this.directionKey]=t||0)},scrollToIndex:function(t){if(t>=this.dataSources.length-1)this.scrollToBottom();else{var e=this.virtual.getOffset(t);this.scrollToOffset(e)}},scrollToBottom:function(){var t=this,e=this.$refs.shepherd;e&&(e.scrollIntoView(!1),setTimeout((function(){t.getOffset()+t.getClientSize()<t.getScrollSize()&&t.scrollToBottom()}),3))},reset:function(){this.virtual.destroy(),this.scrollToOffset(0),this.installVirtual()},installVirtual:function(){this.virtual=new T({size:this.size,slotHeaderSize:0,slotFooterSize:0,keeps:this.keeps,buffer:Math.round(this.keeps/3),uniqueIds:this.getUniqueIdFromDataSources()},this.onRangeChanged),this.range=this.virtual.getRange()},getUniqueIdFromDataSources:function(){var t=this;return this.dataSources.map((function(e){return e[t.dataKey]}))},getOffset:function(){var t=this.$refs.root;return t?Math.ceil(t[this.directionKey]):0},getClientSize:function(){var t=this.$refs.root;return t?t[this.isHorizontal?"clientWidth":"clientHeight"]:0},getScrollSize:function(){var t=this.$refs.root;return t?t[this.isHorizontal?"scrollWidth":"scrollHeight"]:0},onItemResized:function(t,e){this.virtual.saveSize(t,e),this.$emit("resized",t,e)},onSlotResized:function(t,e,i){t===N.HEADER?this.virtual.updateParam("slotHeaderSize",e):t===N.FOOTER&&this.virtual.updateParam("slotFooterSize",e),i&&this.virtual.handleSlotSizeChange()},onRangeChanged:function(t){this.range=t},onScroll:function(t){var e=this.getOffset(),i=this.getClientSize(),n=this.getScrollSize();e<0||e+i>n||!n||(this.virtual.handleScroll(e),this.emitEvent(e,i,n,t))},emitEvent:function(t,e,i,n){this.$emit("scroll",n,this.virtual.getRange()),this.virtual.isFront()&&this.dataSources.length&&t-this.topThreshold<=0?this.$emit("totop"):this.virtual.isBehind()&&t+e+this.bottomThreshold>=i&&this.$emit("tobottom")},getRenderSlots:function(t){for(var e=[],i=this.range,n=i.start,a=i.end,s=this.dataSources,r=this.dataKey,o=this.itemClass,l=this.itemTag,c=this.isHorizontal,u=this.extraProps,h=this.dataComponent,d=n;d<=a;d++){var f=s[d];f?f[r]?e.push(t(R,{props:{index:d,tag:l,event:P.ITEM,horizontal:c,uniqueKey:f[r],source:f,extraProps:u,component:h},class:"".concat(o," ").concat(this.itemClassAdd?this.itemClassAdd(d):"")})):console.warn("Cannot get the data-key '".concat(r,"' from data-sources.")):console.warn("Cannot get the index '".concat(d,"' from data-sources."))}return e}},render:function(t){var e=this.$slots,i=e.header,n=e.footer,a=this.range,s=a.padFront,r=a.padBehind,o=this.rootTag,l=this.headerClass,c=this.headerTag,u=this.wrapTag,h=this.wrapClass,d=this.footerClass,f=this.footerTag,p=this.isHorizontal?"0px ".concat(r,"px 0px ").concat(s,"px"):"".concat(s,"px 0px ").concat(r,"px");return t(o,{ref:"root",on:{"&scroll":this.onScroll}},[i?t(F,{class:l,props:{tag:c,event:P.SLOT,uniqueKey:N.HEADER}},i):null,t(u,{class:h,attrs:{role:"group"},style:{padding:p}},this.getRenderSlots(t)),n?t(F,{class:d,props:{tag:f,event:P.SLOT,uniqueKey:N.FOOTER}},n):null,t("div",{ref:"shepherd"})])}}),B=$,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"introduction",domProps:{innerHTML:t._s(t.description)}})},j=[],H={name:"introduction",props:{description:{type:String}}},M=H,q=(i("de3a"),Object(r["a"])(M,D,j,!1,null,"0c507b69",null)),V=q.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.code?i("pre",{class:t.type,domProps:{innerHTML:t._s(t.encode(t.code))}}):t._e()},L=[],K=(i("ac1f"),i("5319"),{name:"code-high-light",props:{type:{type:String,required:!0},code:{type:String,required:!0}},mounted:function(){"undefined"!==typeof window.hljs&&this.$el.textContent&&window.hljs.highlightBlock(this.$el)},methods:{encode:function(t){return"html"===this.type&&(t=t.replace(/</g,"&lt;"),t=t.replace(/>/g,"&gt;")),t=t.replace(/\s/,""),t}}}),W=K,U=(i("595a"),Object(r["a"])(W,A,L,!1,null,"99fd125a",null)),G=U.exports,X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isMobile?t._e():i("a",{staticClass:"github-corner",attrs:{href:t.url,"aria-label":"View source on GitHub"}},[t._v(" GITHUB ")])},Y=[],J=i("835c"),Q=i("3f05"),Z={name:"github-corner",data:function(){return{url:"",size:80,isMobile:J["a"]}},mounted:function(){this.url=Object(Q["a"])()}},tt=Z,et=(i("8388"),Object(r["a"])(tt,X,Y,!1,null,"4799d028",null)),it=et.exports,nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tab"},[i("div",{staticClass:"tab-item view",class:{active:t.isView},on:{click:t.eventClickView}},[t._v("VIEW")]),i("div",{staticClass:"tab-item code",class:{active:!t.isView},on:{click:t.eventClickCode}},[t._v("CODE")]),i("a",{directives:[{name:"show",rawName:"v-show",value:!t.isView,expression:"!isView"}],staticClass:"complete-code-url",attrs:{target:"_blank",href:t.completeCodeUrl}},[t._v("COMPLETE CODE")])])},at=[],st=i("b95e"),rt={name:"tab",data:function(){return{completeCodeUrl:"",active:st["a"]}},computed:{isView:function(){return this.active===st["b"].VIEW}},mounted:function(){this.completeCodeUrl=Object(Q["a"])()},methods:{eventClickView:function(){this.active=st["b"].VIEW,this.emitEvent()},eventClickCode:function(){this.active=st["b"].CODE,this.emitEvent()},emitEvent:function(){this.$emit("tab-change",this.active)}}},ot=rt,lt=(i("2345"),Object(r["a"])(ot,nt,at,!1,null,"13711752",null)),ct=lt.exports;n["a"].component("virtual-list",B),n["a"].component(V.name,V),n["a"].component(G.name,G),n["a"].component(it.name,it),n["a"].component(ct.name,ct),n["a"].component("github-button",b["a"]),n["a"].config.devtools=!1,n["a"].config.productionTip=!1,new n["a"]({router:z,render:function(t){return t(c)}}).$mount("#app")},"595a":function(t,e,i){"use strict";var n=i("a5ff"),a=i.n(n);a.a},"67ef":function(t,e,i){},"7c55":function(t,e,i){"use strict";var n=i("2395"),a=i.n(n);a.a},"835c":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("ac1f"),i("466d");var n=navigator.userAgent,a=!!n.match(/Android/i),s=!!n.match(/iPhone|iPad|iPod/i),r=a||s},8388:function(t,e,i){"use strict";var n=i("b6af"),a=i.n(n);a.a},a5ff:function(t,e,i){},b5f4:function(t,e,i){"use strict";var n=i("d769"),a=i.n(n);a.a},b6af:function(t,e,i){},b95e:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return a}));var n={VIEW:1,CODE:2},a=n.VIEW},d769:function(t,e,i){},de3a:function(t,e,i){"use strict";var n=i("2f31"),a=i.n(n);a.a}});
//# sourceMappingURL=app.556a1408.js.map