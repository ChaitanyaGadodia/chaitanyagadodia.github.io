(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"3bhu":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("BGKE"),a=n("1OyB"),o=n("vuIU"),i=n("Ji7U"),c=n("md7G"),u=n("foSv"),s=n("q1tI"),f=n("YFqc"),l=n.n(f);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var a=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var p={name:"14el120",styles:"text-decoration:none;color:#5f6c80;margin-right:20px;font-size:18px;cursor:pointer"},h={name:"1j389vi",styles:"font-weight:700"},v=function(e){var t=e.href,n=e.page,a=e.title;return Object(r.b)(l.a,{href:t,children:Object(r.b)("a",{title:a,css:[p,n===a&&h,"",""],children:a})})},m={name:"97oanz",styles:"margin-right:auto;margin-left:auto;max-width:800px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between"},y={name:"11i0oa0",styles:"box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.16),0 2px 10px 0 rgba(0, 0, 0, 0.12);font-weight:300;background-color:#fafafa;position:fixed;top:0;right:0;left:0;z-index:1030;position:fixed;padding:0.5rem 1rem;color:#5f6c80;text-decoration:none"},b=function(e){Object(i.a)(n,e);var t=d(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.page;return Object(r.b)("div",{css:y,children:Object(r.c)("div",{css:m,children:[Object(r.c)("div",{children:[Object(r.b)(v,{href:"/",title:"Home",page:e}),Object(r.b)(v,{href:"/resume",title:"Resume",page:e})]}),Object(r.c)("div",{children:[Object(r.b)("a",{css:p,title:"Github",rel:"noopener noreferrer",target:"_blank",href:"https://github.com/ChaitanyaGadodia",children:"Github"}),Object(r.b)("a",{css:p,title:"LinkedIn",rel:"noopener noreferrer",target:"_blank",href:"https://www.linkedin.com/in/chaitanya-gadodia/",children:"LinkedIn"}),Object(r.b)("a",{css:p,title:"Email",href:"mailto:f2014177p@alumni.bits-pilani.ac.in",children:"Email"})]})]})})}}]),n}(s.PureComponent)},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,s=d.length;u<s;u++){var f=d[u];if(a.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?o=!1:n.add(f);else{var l=a.props[f],p=r[f]||new Set;"name"===f&&i||!p.has(l)?(p.add(l),r[f]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},"8rWI":function(e,t,n){e.exports=n("8Kt/")},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FX4Z:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r={name:"sd11x3",styles:"padding:56px 15px 30px;color:#3c4858;background-color:#fdfdfd;margin:0px auto;max-width:800px;width:100%"},a={name:"rsk7r7",styles:"font-weight:300;font-size:2.5rem"}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){i(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),i=n("elyg"),c=n("nOHt"),u=n("vNVm"),s={};function f(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),a=n&&n.pathname||"/",l=o.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):c||o}}),[a,e.href,e.as]),d=l.href,p=l.as,h=e.children,v=e.replace,m=e.shallow,y=e.scroll,b=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var g=o.Children.only(h),w=g&&"object"===typeof g&&g.ref,x=(0,u.useIntersection)({rootMargin:"200px"}),M=r(x,2),O=M[0],j=M[1],k=o.default.useCallback((function(e){O(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,O]);(0,o.useEffect)((function(){var e=j&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof b?b:n&&n.locale,a=s[d+"%"+p+(r?"%"+r:"")];e&&!a&&f(n,d,p,{locale:r})}),[p,d,j,b,t,n]);var _={ref:k,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:u,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,d,p,v,m,y,b)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),f(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var I="undefined"!==typeof b?b:n&&n.locale,C=(0,i.getDomainLocale)(p,I,n&&n.locales,n&&n.domainLocales);_.href=C||(0,i.addBasePath)((0,i.addLocale)(p,I,n&&n.defaultLocale))}return o.default.cloneElement(g,_)};t.default=l},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,a=(0,o.useRef)(),s=(0,o.useState)(!1),f=r(s,2),l=f[0],d=f[1],p=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||l||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),u.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return(0,o.useEffect)((function(){c||l||(0,i.default)((function(){return d(!0)}))}),[l]),[p,l]};var o=n("q1tI"),i=a(n("0G5g")),c="undefined"!==typeof IntersectionObserver;var u=new Map}}]);