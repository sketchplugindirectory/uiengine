(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{105:function(t,e,n){"use strict";var i=n(75);n.n(i).a},69:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){},81:function(t,e,n){"use strict";var i=n(3),r=n.n(i),a=n(1);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a={computed:o(o({},Object(a.b)("state",["plugins"])),{},{pluginActions:function(){return this.plugins.ui.actions},pluginTabs:function(){return this.plugins.ui.tabs}}),methods:{dispatchPluginEvent:function(t,e,n){this.$refs.preview.dispatchPluginEvent(t,e,n)},dispatchPluginEventForAllPlugins:function(t,e,n){this.$refs.preview.dispatchPluginEvent(t,e,n)}},mounted:function(){var t=this,e=this.$props,n=e.variant,i=e.component;this.$refs.preview.$on("iframe-load",(function(e){t.pluginActions.forEach((function(r,a){var s=t.$refs["plugin-action"][a];t.dispatchPluginEvent("init",r,{target:s,variant:n,component:i}),t.dispatchPluginEvent("iframe-load",r,{target:s,variant:n,component:i,iframe:e})})),t.pluginTabs.forEach((function(r,a){var s=t.$refs["plugin-tab"][a],o=t.$refs["plugin-tab-content"][a];t.dispatchPluginEvent("init",r,{target:s,content:o,variant:n,component:i}),t.dispatchPluginEvent("iframe-load",r,{target:s,content:o,variant:n,component:i,iframe:e})}))}))}}},82:function(t,e,n){"use strict";var i={components:{ContentProperty:n(28).a},props:{title:{type:String,default:null},properties:{type:Object,required:!0}},computed:{displayDescription:function(){return Object.values(this.properties).some((function(t){return t.description}))}}},r=(n(85),n(0)),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{class:{withDescription:t.displayDescription},attrs:{id:t.title}},[n("caption",[t._v(t._s(t.title))]),t._v(" "),n("thead",[n("tr",[n("th",{staticClass:"property__name"},[t._v("\n        "+t._s(t._f("localize")("properties.name"))+"\n      ")]),t._v(" "),n("th",{staticClass:"property__type"},[t._v("\n        "+t._s(t._f("localize")("properties.type"))+"\n      ")]),t._v(" "),t.displayDescription?n("th",{staticClass:"property__description"},[t._v("\n        "+t._s(t._f("localize")("properties.description"))+"\n      ")]):t._e(),t._v(" "),n("th",{staticClass:"property__required"},[t._v("\n        "+t._s(t._f("localize")("properties.required"))+"\n      ")]),t._v(" "),n("th",{staticClass:"property__default"},[t._v("\n        "+t._s(t._f("localize")("properties.default"))+"\n      ")])])]),t._v(" "),n("tbody",t._l(t.properties,(function(e,i){return n("ContentProperty",{key:i,attrs:{id:i,property:e,"display-description":t.displayDescription}})})),1)])}),[],!1,null,"a103365e",null);e.a=a.exports},83:function(t,e,n){"use strict";var i=n(3),r=n.n(i),a=n(1),s=n(73),o=n(23);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={mixins:[s.a,o.a],props:{id:{type:String,required:!0},title:{type:String,required:!0},pathPrefix:{type:String,required:!0},pathPostfix:{type:String,required:!0}},data:function(){return{isBreakpointsActive:!1}},computed:p(p(p({},Object(a.b)("state",["config"])),Object(a.b)("preferences",["previewWidths","previewMode"])),{},{breakpoints:function(){return this.config.ui.breakpoints},viewports:function(){return this.config.ui.viewports},isModeViewports:function(){return"viewports"===this.previewMode},breakpointNames:function(){return Object.keys(this.breakpoints)},breakpointWidths:function(){var t=this;return Object.values?Object.values(this.breakpoints):Object.keys(this.breakpoints).map((function(e){return t.breakpoints[e]}))},size:function(){var t=this;if(this.iframeWidth){if(this.breakpoints){var e=this.breakpointWidths.filter((function(e){return e<=t.iframeWidth})),n=e.length?this.breakpointNames[e.length-1]:"< ".concat(this.breakpointNames[0]);return this.previewTitle(n,this.iframeWidth)}return"".concat(this.iframeWidth,"px")}return""},viewportClass:function(){return"preview__viewport--".concat(this.previewMode)},viewportStyle:function(){if("viewports"===this.previewMode)return{};var t=this.previewWidths[this.id];return t?{width:"calc(".concat(t,"px + var(--uie-preview-padding) * 2 + 2px)")}:{}},iframes:function(){var t=this.$refs.iframes;return t instanceof HTMLElement&&(t=[t]),t}}),created:function(){var t=this;this.$root.$on("modal-close",(function(){t.isBreakpointsActive=!1}))},mounted:function(){var t=this;this.iframes.forEach(this.mountResizableIframe),this.$store.watch((function(){return t.$store.getters["preferences/currentTheme"]}),(function(){window.requestAnimationFrame((function(){t.iframes.forEach(t.mountResizableIframe)}))}))},beforeDestroy:function(){this.iframes.forEach(this.unmountResizableIframe)},methods:p(p({},Object(a.c)("preferences",["setPreviewWidths"])),{},{setWidth:function(t){var e=this.previewWidths;t?e[this.id]=t:(delete e[this.id],this.$refs.viewport.style.width=null),this.setPreviewWidths(e)},iframeSize:function(t){var e=parseInt(t);return isNaN(e)?null:e},iframeSrc:function(t){return"".concat(window.UIengine.base).concat(this.pathPrefix,"/").concat(t,"/").concat(this.pathPostfix,".html")},previewTitle:function(t,e){return"".concat(t," @ ").concat(e,"px")},dispatchPluginEvent:function(t,e,n){var i=e.id;this.iframes.forEach((function(r){document.dispatchEvent(new CustomEvent("".concat(i,":").concat(t),{detail:Object.assign(n,{plugin:e,iframe:r})}))}))}})},d=(n(89),n(0)),u=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preview"},[t.isModeViewports?t._e():[n("div",{staticClass:"preview__options",class:{"preview__options--active":t.isBreakpointsActive}},[n("div",{staticClass:"preview__options-inner"},[t._l(t.breakpoints,(function(e,i){return n("button",{key:i,staticClass:"preview__option",attrs:{type:"button"},on:{click:function(n){return t.setWidth(e)}}},[n("span",{staticClass:"preview__option-text"},[t._v(t._s(i))]),t._v(" "),n("span",{staticClass:"preview__option-label"},[t._v(t._s(e)+"px")])])})),t._v(" "),n("button",{staticClass:"preview__option",attrs:{type:"button"},on:{click:function(e){return t.setWidth(null)}}},[n("span",{staticClass:"preview__option-text"},[n("AppIcon",{staticClass:"preview__option-text-icon",attrs:{symbol:"reset"}})],1),t._v(" "),n("span",{staticClass:"preview__option-label"},[t._v(t._s(t._f("localize")("options.reset")))])])],2)])],t._v(" "),n("div",{staticClass:"preview__viewports sih--main soh--main-escape"},[t.isModeViewports?t._l(t.viewports,(function(e,i){var r=e.width,a=e.height;return n("div",{key:i,staticClass:"preview__viewport",class:t.viewportClass,style:t.viewportStyle},[n("span",{staticClass:"preview__title"},[t._v("\n          "+t._s(t.previewTitle(i,r))+"\n        ")]),t._v(" "),t._l(t.displayedThemes,(function(e){return n("div",{key:e.id,staticClass:"preview__iframe-container",attrs:{"data-test-iframe-container":e.id+"-"+i}},[t.displayAllThemes?n("div",{staticClass:"preview__theme-title"},[t._v("\n            "+t._s(e.title)+"\n          ")]):t._e(),t._v(" "),n("iframe",{ref:"iframes",refInFor:!0,staticClass:"preview__iframe lazy",style:{width:t.iframeSize(r)+"px"},attrs:{src:"about:blank","data-src":t.iframeSrc(e.id),title:t.title,width:t.iframeSize(r),height:t.iframeSize(a),scrolling:a?"yes":"no","data-test-viewport-iframe":e.id+"-"+i,frameborder:"0"}})])}))],2)})):[n("div",{ref:"viewport",staticClass:"preview__viewport",class:t.viewportClass,style:t.viewportStyle},[t.breakpoints?[n("span",{staticClass:"preview__title"},[t._v("\n            "+t._s(t.size)+"\n          ")])]:t._e(),t._v(" "),t._l(t.displayedThemes,(function(e){return n("div",{key:e.id,staticClass:"preview__iframe-container",attrs:{"data-test-iframe-container":e.id}},[t.displayAllThemes?n("div",{staticClass:"preview__theme-title"},[t._v("\n            "+t._s(e.title)+"\n          ")]):t._e(),t._v(" "),n("iframe",{ref:"iframes",refInFor:!0,staticClass:"preview__iframe lazy",attrs:{src:"about:blank","aria-roledescription":"iframe","data-src":t.iframeSrc(e.id),title:t.title,"data-test-breakpoint-iframe":e.id,frameborder:"0",scrolling:"no"}})])}))],2)]],2)],2)}),[],!1,null,"419b93af",null);e.a=u.exports},84:function(t,e,n){"use strict";var i=n(66),r=n.n(i),a=n(67),s=n.n(a),o=n(90),c=n(73),p=n(23),l={mixins:[c.a,p.a],props:{extension:{type:String,default:null},raw:{type:String,default:null},context:{type:Object,default:null},pathPrefix:{type:String,required:!0},pathPostfix:{type:String,required:!0}},data:function(){return{expanded:{raw:!0,context:!0},renderedHTML:{content:"",lang:"text"}}},computed:{renderedRaw:function(){var t=Object(o.omit)("code",this.raw);return Object(o.decorateCode)(t)},renderedContext:function(){return Object(o.decorateContext)(this.context)},iframeSrc:function(){var t=this.currentTheme.id;return"".concat(window.UIengine.base).concat(this.pathPrefix,"/").concat(t,"/").concat(this.pathPostfix,".html")}},watch:{expanded:function(t,e){var n=this;return s()(r.a.mark((function t(){var i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.renderedHTML.content||!e.HTML){t.next=13;break}return t.next=3,fetch("".concat(window.location.origin).concat(n.iframeSrc));case 3:if(!(i=t.sent).ok){t.next=10;break}return t.next=7,i.text();case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0="Error accessing ".concat(window.location.origin).concat(n.iframeSrc," (").concat(i.status,")");case 11:t.t1=t.t0,n.renderedHTML={content:t.t1,lang:"html"};case 13:case"end":return t.stop()}}),t)})))()}},methods:{renderPart:function(t){var e=t.content,n=t.lang,i=Object(o.isolateCode)("preview",e),r=Object(o.omit)("code",i).trim();return Object(o.decorateCode)(r,n)},isExpanded:function(t){return!!this.expanded[t]},toggleExpanded:function(t){this.$set(this.expanded,t,!this.expanded[t])}}},d=(n(105),n(0)),u=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code"},[t.raw?n("div",{staticClass:"code__segment"},[n("button",{staticClass:"code__header",attrs:{title:t._f("localize")("navigation.toggle"),"aria-expanded":t._f("bool2string")(t.isExpanded("raw")),"data-test-variant-code-button":"raw",type:"button"},on:{click:function(e){return e.preventDefault(),t.toggleExpanded("raw")}}},[n("h4",{staticClass:"code__title"},[t._v("\n        "+t._s(t._f("localize")("code.raw"))+"\n      ")]),t._v(" "),n("AppIcon",{staticClass:"code__expandicon",attrs:{symbol:"caret-down"}})],1),t._v(" "),n("div",{attrs:{hidden:!t.isExpanded("raw"),"data-test-variant-code-part":"raw"},domProps:{innerHTML:t._s(t.renderedRaw)}})]):t._e(),t._v(" "),t.context?n("div",{staticClass:"code__segment"},[n("button",{staticClass:"code__header",attrs:{title:t._f("localize")("navigation.toggle"),"aria-expanded":t._f("bool2string")(t.isExpanded("context")),"data-test-variant-code-button":"context",type:"button"},on:{click:function(e){return e.preventDefault(),t.toggleExpanded("context")}}},[n("h4",{staticClass:"code__title"},[t._v("\n        "+t._s(t._f("localize")("code.context"))+"\n      ")]),t._v(" "),n("AppIcon",{staticClass:"code__expandicon",attrs:{symbol:"caret-down"}})],1),t._v(" "),n("div",{attrs:{hidden:!t.isExpanded("context"),"data-test-variant-code-part":"context"},domProps:{innerHTML:t._s(t.renderedContext)}})]):t._e(),t._v(" "),t.displayAllThemes?t._e():n("div",{staticClass:"code__segment"},[n("button",{staticClass:"code__header",attrs:{title:t._f("localize")("navigation.toggle"),"aria-expanded":t._f("bool2string")(t.isExpanded("HTML")),"data-test-variant-code-button":"HTML",type:"button"},on:{click:function(e){return e.preventDefault(),t.toggleExpanded("HTML")}}},[n("h4",{staticClass:"code__title"},[t._v("\n        HTML\n      ")]),t._v(" "),n("AppIcon",{staticClass:"code__expandicon",attrs:{symbol:"caret-down"}})],1),t._v(" "),n("div",{attrs:{hidden:!t.isExpanded("HTML"),"data-test-variant-code-part":"HTML"}},[t.renderedHTML.content?n("div",{domProps:{innerHTML:t._s(t.renderPart(t.renderedHTML))}}):n("div",[n("pre",[t._v(t._s(t._f("localize")("options.loading")))])])])])])}),[],!1,null,"404be757",null);e.a=u.exports},85:function(t,e,n){"use strict";var i=n(69);n.n(i).a},89:function(t,e,n){"use strict";var i=n(74);n.n(i).a},90:function(t,e,n){var i=n(91),r=new RegExp("([\\s]*?\x3c!--\\s?omit:.*?\\s?--\x3e)","gi");t.exports={decorateCode:function(t,e){return i(t,e)},decorateContext:function(t){return i(JSON.stringify(t,null,2),"json")},omit:function(t,e){var n=new RegExp("([\\s]*?\x3c!--\\s?omit:".concat(t,":start\\s?--\x3e[\\s\\S]*?\x3c!--\\s?omit:").concat(t,":end\\s?--\x3e)"),"gi");return e.replace(n,"").replace(r,"")},isolateCode:function t(e,n){var i=new RegExp("\x3c!--\\s?uiengine:".concat(e,":start\\s?--\x3e([\\s\\S]*)\x3c!--\\s?uiengine:").concat(e,":end\\s?--\x3e"),"i"),r=n.match(i);return r&&r[1]?t(e,r[1]):n}}},91:function(t,e,n){var i=n(92),r=["bash","css","scss","less","stylus","javascript","handlebars","json","markdown","nginx","xml"];r.forEach((function(t){var e=n(93)("./".concat(t));i.registerLanguage(t,e)})),t.exports=function(t,e){var n=null!=e?[e]:void 0,r=i.highlightAuto(t,n),a=r.value,s=r.language;return'<pre class="hljs lang-'.concat(e||s,'"><code>').concat(a,"</code></pre>")},t.exports.LANGUAGES=r},93:function(t,e,n){var i={"./bash":94,"./css":95,"./handlebars":96,"./javascript":97,"./json":98,"./less":99,"./markdown":100,"./nginx":101,"./scss":102,"./stylus":103,"./xml":104};function r(t){var e=a(t);return n(e)}function a(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=a,t.exports=r,r.id=93}}]);