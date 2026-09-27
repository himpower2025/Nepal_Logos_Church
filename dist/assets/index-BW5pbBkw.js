var q0=Object.defineProperty;var K0=(t,e,n)=>e in t?q0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var il=(t,e,n)=>K0(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function G0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var nv={exports:{}},ju={},rv={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ra=Symbol.for("react.element"),Q0=Symbol.for("react.portal"),Y0=Symbol.for("react.fragment"),X0=Symbol.for("react.strict_mode"),J0=Symbol.for("react.profiler"),Z0=Symbol.for("react.provider"),eS=Symbol.for("react.context"),tS=Symbol.for("react.forward_ref"),nS=Symbol.for("react.suspense"),rS=Symbol.for("react.memo"),sS=Symbol.for("react.lazy"),hg=Symbol.iterator;function iS(t){return t===null||typeof t!="object"?null:(t=hg&&t[hg]||t["@@iterator"],typeof t=="function"?t:null)}var sv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iv=Object.assign,ov={};function Ki(t,e,n){this.props=t,this.context=e,this.refs=ov,this.updater=n||sv}Ki.prototype.isReactComponent={};Ki.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ki.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function av(){}av.prototype=Ki.prototype;function df(t,e,n){this.props=t,this.context=e,this.refs=ov,this.updater=n||sv}var hf=df.prototype=new av;hf.constructor=df;iv(hf,Ki.prototype);hf.isPureReactComponent=!0;var fg=Array.isArray,lv=Object.prototype.hasOwnProperty,ff={current:null},uv={key:!0,ref:!0,__self:!0,__source:!0};function cv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)lv.call(e,r)&&!uv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Ra,type:t,key:i,ref:o,props:s,_owner:ff.current}}function oS(t,e){return{$$typeof:Ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ra}function aS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pg=/\/+/g;function Yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?aS(""+t.key):e.toString(36)}function Nl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ra:case Q0:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Yc(o,0):r,fg(s)?(n="",t!=null&&(n=t.replace(pg,"$&/")+"/"),Nl(s,e,n,"",function(c){return c})):s!=null&&(pf(s)&&(s=oS(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(pg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",fg(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Yc(i,l);o+=Nl(i,e,n,u,s)}else if(u=iS(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Yc(i,l++),o+=Nl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ol(t,e,n){if(t==null)return t;var r=[],s=0;return Nl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function lS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ft={current:null},xl={transition:null},uS={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:xl,ReactCurrentOwner:ff};function dv(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:ol,forEach:function(t,e,n){ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ol(t,function(){e++}),e},toArray:function(t){return ol(t,function(e){return e})||[]},only:function(t){if(!pf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=Ki;de.Fragment=Y0;de.Profiler=J0;de.PureComponent=df;de.StrictMode=X0;de.Suspense=nS;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uS;de.act=dv;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=iv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=ff.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)lv.call(e,u)&&!uv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ra,type:t.type,key:s,ref:i,props:r,_owner:o}};de.createContext=function(t){return t={$$typeof:eS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Z0,_context:t},t.Consumer=t};de.createElement=cv;de.createFactory=function(t){var e=cv.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:tS,render:t}};de.isValidElement=pf;de.lazy=function(t){return{$$typeof:sS,_payload:{_status:-1,_result:t},_init:lS}};de.memo=function(t,e){return{$$typeof:rS,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=xl.transition;xl.transition={};try{t()}finally{xl.transition=e}};de.unstable_act=dv;de.useCallback=function(t,e){return Ft.current.useCallback(t,e)};de.useContext=function(t){return Ft.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return Ft.current.useDeferredValue(t)};de.useEffect=function(t,e){return Ft.current.useEffect(t,e)};de.useId=function(){return Ft.current.useId()};de.useImperativeHandle=function(t,e,n){return Ft.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return Ft.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return Ft.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return Ft.current.useMemo(t,e)};de.useReducer=function(t,e,n){return Ft.current.useReducer(t,e,n)};de.useRef=function(t){return Ft.current.useRef(t)};de.useState=function(t){return Ft.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return Ft.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return Ft.current.useTransition()};de.version="18.3.1";rv.exports=de;var O=rv.exports;const hv=G0(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cS=O,dS=Symbol.for("react.element"),hS=Symbol.for("react.fragment"),fS=Object.prototype.hasOwnProperty,pS=cS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mS={key:!0,ref:!0,__self:!0,__source:!0};function fv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)fS.call(e,r)&&!mS.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:dS,type:t,key:i,ref:o,props:s,_owner:pS.current}}ju.Fragment=hS;ju.jsx=fv;ju.jsxs=fv;nv.exports=ju;var h=nv.exports,$d={},pv={exports:{}},ln={},mv={exports:{}},gv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Z){var ne=$.length;$.push(Z);e:for(;0<ne;){var Te=ne-1>>>1,W=$[Te];if(0<s(W,Z))$[Te]=Z,$[ne]=W,ne=Te;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Z=$[0],ne=$.pop();if(ne!==Z){$[0]=ne;e:for(var Te=0,W=$.length,V=W>>>1;Te<V;){var H=2*(Te+1)-1,G=$[H],re=H+1,_e=$[re];if(0>s(G,ne))re<W&&0>s(_e,G)?($[Te]=_e,$[re]=ne,Te=re):($[Te]=G,$[H]=ne,Te=H);else if(re<W&&0>s(_e,ne))$[Te]=_e,$[re]=ne,Te=re;else break e}}return Z}function s($,Z){var ne=$.sortIndex-Z.sortIndex;return ne!==0?ne:$.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,g=3,S=!1,k=!1,P=!1,b=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E($){for(var Z=n(c);Z!==null;){if(Z.callback===null)r(c);else if(Z.startTime<=$)r(c),Z.sortIndex=Z.expirationTime,e(u,Z);else break;Z=n(c)}}function N($){if(P=!1,E($),!k)if(n(u)!==null)k=!0,Bt(j);else{var Z=n(c);Z!==null&&ut(N,Z.startTime-$)}}function j($,Z){k=!1,P&&(P=!1,A(v),v=-1),S=!0;var ne=g;try{for(E(Z),m=n(u);m!==null&&(!(m.expirationTime>Z)||$&&!C());){var Te=m.callback;if(typeof Te=="function"){m.callback=null,g=m.priorityLevel;var W=Te(m.expirationTime<=Z);Z=t.unstable_now(),typeof W=="function"?m.callback=W:m===n(u)&&r(u),E(Z)}else r(u);m=n(u)}if(m!==null)var V=!0;else{var H=n(c);H!==null&&ut(N,H.startTime-Z),V=!1}return V}finally{m=null,g=ne,S=!1}}var M=!1,T=null,v=-1,w=5,I=-1;function C(){return!(t.unstable_now()-I<w)}function x(){if(T!==null){var $=t.unstable_now();I=$;var Z=!0;try{Z=T(!0,$)}finally{Z?R():(M=!1,T=null)}}else M=!1}var R;if(typeof y=="function")R=function(){y(x)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,Fe=ye.port2;ye.port1.onmessage=x,R=function(){Fe.postMessage(null)}}else R=function(){b(x,0)};function Bt($){T=$,M||(M=!0,R())}function ut($,Z){v=b(function(){$(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){k||S||(k=!0,Bt(j))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var Z=3;break;default:Z=g}var ne=g;g=Z;try{return $()}finally{g=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Z){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ne=g;g=$;try{return Z()}finally{g=ne}},t.unstable_scheduleCallback=function($,Z,ne){var Te=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Te+ne:Te):ne=Te,$){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ne+W,$={id:f++,callback:Z,priorityLevel:$,startTime:ne,expirationTime:W,sortIndex:-1},ne>Te?($.sortIndex=ne,e(c,$),n(u)===null&&$===n(c)&&(P?(A(v),v=-1):P=!0,ut(N,ne-Te))):($.sortIndex=W,e(u,$),k||S||(k=!0,Bt(j))),$},t.unstable_shouldYield=C,t.unstable_wrapCallback=function($){var Z=g;return function(){var ne=g;g=Z;try{return $.apply(this,arguments)}finally{g=ne}}}})(gv);mv.exports=gv;var gS=mv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yS=O,an=gS;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yv=new Set,Yo={};function Fs(t,e){Ci(t,e),Ci(t+"Capture",e)}function Ci(t,e){for(Yo[t]=e,t=0;t<e.length;t++)yv.add(e[t])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zd=Object.prototype.hasOwnProperty,_S=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mg={},gg={};function vS(t){return zd.call(gg,t)?!0:zd.call(mg,t)?!1:_S.test(t)?gg[t]=!0:(mg[t]=!0,!1)}function wS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ES(t,e,n,r){if(e===null||typeof e>"u"||wS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ut(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){yt[t]=new Ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];yt[e]=new Ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){yt[t]=new Ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){yt[t]=new Ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){yt[t]=new Ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){yt[t]=new Ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){yt[t]=new Ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){yt[t]=new Ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){yt[t]=new Ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var mf=/[\-:]([a-z])/g;function gf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mf,gf);yt[e]=new Ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mf,gf);yt[e]=new Ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mf,gf);yt[e]=new Ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){yt[t]=new Ut(t,1,!1,t.toLowerCase(),null,!1,!1)});yt.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){yt[t]=new Ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function yf(t,e,n,r){var s=yt.hasOwnProperty(e)?yt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ES(e,n,s,r)&&(n=null),r||s===null?vS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var _r=yS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,al=Symbol.for("react.element"),ii=Symbol.for("react.portal"),oi=Symbol.for("react.fragment"),_f=Symbol.for("react.strict_mode"),Wd=Symbol.for("react.profiler"),_v=Symbol.for("react.provider"),vv=Symbol.for("react.context"),vf=Symbol.for("react.forward_ref"),Hd=Symbol.for("react.suspense"),qd=Symbol.for("react.suspense_list"),wf=Symbol.for("react.memo"),kr=Symbol.for("react.lazy"),wv=Symbol.for("react.offscreen"),yg=Symbol.iterator;function po(t){return t===null||typeof t!="object"?null:(t=yg&&t[yg]||t["@@iterator"],typeof t=="function"?t:null)}var We=Object.assign,Xc;function Ao(t){if(Xc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xc=e&&e[1]||""}return`
`+Xc+t}var Jc=!1;function Zc(t,e){if(!t||Jc)return"";Jc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Jc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ao(t):""}function TS(t){switch(t.tag){case 5:return Ao(t.type);case 16:return Ao("Lazy");case 13:return Ao("Suspense");case 19:return Ao("SuspenseList");case 0:case 2:case 15:return t=Zc(t.type,!1),t;case 11:return t=Zc(t.type.render,!1),t;case 1:return t=Zc(t.type,!0),t;default:return""}}function Kd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case oi:return"Fragment";case ii:return"Portal";case Wd:return"Profiler";case _f:return"StrictMode";case Hd:return"Suspense";case qd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vv:return(t.displayName||"Context")+".Consumer";case _v:return(t._context.displayName||"Context")+".Provider";case vf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wf:return e=t.displayName||null,e!==null?e:Kd(t.type)||"Memo";case kr:e=t._payload,t=t._init;try{return Kd(t(e))}catch{}}return null}function IS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kd(e);case 8:return e===_f?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ev(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function SS(t){var e=Ev(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ll(t){t._valueTracker||(t._valueTracker=SS(t))}function Tv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ev(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gd(t,e){var n=e.checked;return We({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _g(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Iv(t,e){e=e.checked,e!=null&&yf(t,"checked",e,!1)}function Qd(t,e){Iv(t,e);var n=Xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yd(t,e.type,Xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yd(t,e,n){(e!=="number"||Xl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ro=Array.isArray;function _i(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Xd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return We({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Ro(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xr(n)}}function Sv(t,e){var n=Xr(e.value),r=Xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Eg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Av(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Av(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ul,Rv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ul.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},AS=["Webkit","ms","Moz","O"];Object.keys(Lo).forEach(function(t){AS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Lo[e]=Lo[t]})});function kv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Lo.hasOwnProperty(t)&&Lo[t]?(""+e).trim():e+"px"}function Cv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=kv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var RS=We({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zd(t,e){if(e){if(RS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function eh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var th=null;function Ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nh=null,vi=null,wi=null;function Tg(t){if(t=Pa(t)){if(typeof nh!="function")throw Error(B(280));var e=t.stateNode;e&&(e=zu(e),nh(t.stateNode,t.type,e))}}function Pv(t){vi?wi?wi.push(t):wi=[t]:vi=t}function Nv(){if(vi){var t=vi,e=wi;if(wi=vi=null,Tg(t),e)for(t=0;t<e.length;t++)Tg(e[t])}}function xv(t,e){return t(e)}function bv(){}var ed=!1;function Dv(t,e,n){if(ed)return t(e,n);ed=!0;try{return xv(t,e,n)}finally{ed=!1,(vi!==null||wi!==null)&&(bv(),Nv())}}function Jo(t,e){var n=t.stateNode;if(n===null)return null;var r=zu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var rh=!1;if(ur)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){rh=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{rh=!1}function kS(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Mo=!1,Jl=null,Zl=!1,sh=null,CS={onError:function(t){Mo=!0,Jl=t}};function PS(t,e,n,r,s,i,o,l,u){Mo=!1,Jl=null,kS.apply(CS,arguments)}function NS(t,e,n,r,s,i,o,l,u){if(PS.apply(this,arguments),Mo){if(Mo){var c=Jl;Mo=!1,Jl=null}else throw Error(B(198));Zl||(Zl=!0,sh=c)}}function Us(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ov(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ig(t){if(Us(t)!==t)throw Error(B(188))}function xS(t){var e=t.alternate;if(!e){if(e=Us(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Ig(s),t;if(i===r)return Ig(s),e;i=i.sibling}throw Error(B(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function Lv(t){return t=xS(t),t!==null?Mv(t):null}function Mv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mv(t);if(e!==null)return e;t=t.sibling}return null}var Vv=an.unstable_scheduleCallback,Sg=an.unstable_cancelCallback,bS=an.unstable_shouldYield,DS=an.unstable_requestPaint,Ze=an.unstable_now,OS=an.unstable_getCurrentPriorityLevel,Tf=an.unstable_ImmediatePriority,jv=an.unstable_UserBlockingPriority,eu=an.unstable_NormalPriority,LS=an.unstable_LowPriority,Fv=an.unstable_IdlePriority,Fu=null,Un=null;function MS(t){if(Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(Fu,t,void 0,(t.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:FS,VS=Math.log,jS=Math.LN2;function FS(t){return t>>>=0,t===0?32:31-(VS(t)/jS|0)|0}var cl=64,dl=4194304;function ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=ko(l):(i&=o,i!==0&&(r=ko(i)))}else o=n&~s,o!==0?r=ko(o):i!==0&&(r=ko(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-kn(e),s=1<<n,r|=t[n],e&=~s;return r}function US(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-kn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=US(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function ih(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Uv(){var t=cl;return cl<<=1,!(cl&4194240)&&(cl=64),t}function td(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kn(e),t[e]=n}function $S(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-kn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function If(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-kn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Re=0;function Bv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $v,Sf,zv,Wv,Hv,oh=!1,hl=[],Fr=null,Ur=null,Br=null,Zo=new Map,ea=new Map,Pr=[],zS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ag(t,e){switch(t){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(e.pointerId)}}function go(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Pa(e),e!==null&&Sf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function WS(t,e,n,r,s){switch(e){case"focusin":return Fr=go(Fr,t,e,n,r,s),!0;case"dragenter":return Ur=go(Ur,t,e,n,r,s),!0;case"mouseover":return Br=go(Br,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Zo.set(i,go(Zo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ea.set(i,go(ea.get(i)||null,t,e,n,r,s)),!0}return!1}function qv(t){var e=gs(t.target);if(e!==null){var n=Us(e);if(n!==null){if(e=n.tag,e===13){if(e=Ov(n),e!==null){t.blockedOn=e,Hv(t.priority,function(){zv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ah(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);th=r,n.target.dispatchEvent(r),th=null}else return e=Pa(n),e!==null&&Sf(e),t.blockedOn=n,!1;e.shift()}return!0}function Rg(t,e,n){bl(t)&&n.delete(e)}function HS(){oh=!1,Fr!==null&&bl(Fr)&&(Fr=null),Ur!==null&&bl(Ur)&&(Ur=null),Br!==null&&bl(Br)&&(Br=null),Zo.forEach(Rg),ea.forEach(Rg)}function yo(t,e){t.blockedOn===e&&(t.blockedOn=null,oh||(oh=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,HS)))}function ta(t){function e(s){return yo(s,t)}if(0<hl.length){yo(hl[0],t);for(var n=1;n<hl.length;n++){var r=hl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Fr!==null&&yo(Fr,t),Ur!==null&&yo(Ur,t),Br!==null&&yo(Br,t),Zo.forEach(e),ea.forEach(e),n=0;n<Pr.length;n++)r=Pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Pr.length&&(n=Pr[0],n.blockedOn===null);)qv(n),n.blockedOn===null&&Pr.shift()}var Ei=_r.ReactCurrentBatchConfig,nu=!0;function qS(t,e,n,r){var s=Re,i=Ei.transition;Ei.transition=null;try{Re=1,Af(t,e,n,r)}finally{Re=s,Ei.transition=i}}function KS(t,e,n,r){var s=Re,i=Ei.transition;Ei.transition=null;try{Re=4,Af(t,e,n,r)}finally{Re=s,Ei.transition=i}}function Af(t,e,n,r){if(nu){var s=ah(t,e,n,r);if(s===null)dd(t,e,r,ru,n),Ag(t,r);else if(WS(s,t,e,n,r))r.stopPropagation();else if(Ag(t,r),e&4&&-1<zS.indexOf(t)){for(;s!==null;){var i=Pa(s);if(i!==null&&$v(i),i=ah(t,e,n,r),i===null&&dd(t,e,r,ru,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else dd(t,e,r,null,n)}}var ru=null;function ah(t,e,n,r){if(ru=null,t=Ef(r),t=gs(t),t!==null)if(e=Us(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ov(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ru=t,null}function Kv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OS()){case Tf:return 1;case jv:return 4;case eu:case LS:return 16;case Fv:return 536870912;default:return 16}default:return 16}}var Lr=null,Rf=null,Dl=null;function Gv(){if(Dl)return Dl;var t,e=Rf,n=e.length,r,s="value"in Lr?Lr.value:Lr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Dl=s.slice(t,1<r?1-r:void 0)}function Ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function kg(){return!1}function un(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fl:kg,this.isPropagationStopped=kg,this}return We(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),e}var Gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kf=un(Gi),Ca=We({},Gi,{view:0,detail:0}),GS=un(Ca),nd,rd,_o,Uu=We({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_o&&(_o&&t.type==="mousemove"?(nd=t.screenX-_o.screenX,rd=t.screenY-_o.screenY):rd=nd=0,_o=t),nd)},movementY:function(t){return"movementY"in t?t.movementY:rd}}),Cg=un(Uu),QS=We({},Uu,{dataTransfer:0}),YS=un(QS),XS=We({},Ca,{relatedTarget:0}),sd=un(XS),JS=We({},Gi,{animationName:0,elapsedTime:0,pseudoElement:0}),ZS=un(JS),eA=We({},Gi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tA=un(eA),nA=We({},Gi,{data:0}),Pg=un(nA),rA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iA[t])?!!e[t]:!1}function Cf(){return oA}var aA=We({},Ca,{key:function(t){if(t.key){var e=rA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cf,charCode:function(t){return t.type==="keypress"?Ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lA=un(aA),uA=We({},Uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ng=un(uA),cA=We({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cf}),dA=un(cA),hA=We({},Gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),fA=un(hA),pA=We({},Uu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mA=un(pA),gA=[9,13,27,32],Pf=ur&&"CompositionEvent"in window,Vo=null;ur&&"documentMode"in document&&(Vo=document.documentMode);var yA=ur&&"TextEvent"in window&&!Vo,Qv=ur&&(!Pf||Vo&&8<Vo&&11>=Vo),xg=" ",bg=!1;function Yv(t,e){switch(t){case"keyup":return gA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ai=!1;function _A(t,e){switch(t){case"compositionend":return Xv(e);case"keypress":return e.which!==32?null:(bg=!0,xg);case"textInput":return t=e.data,t===xg&&bg?null:t;default:return null}}function vA(t,e){if(ai)return t==="compositionend"||!Pf&&Yv(t,e)?(t=Gv(),Dl=Rf=Lr=null,ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qv&&e.locale!=="ko"?null:e.data;default:return null}}var wA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wA[t.type]:e==="textarea"}function Jv(t,e,n,r){Pv(r),e=su(e,"onChange"),0<e.length&&(n=new kf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var jo=null,na=null;function EA(t){uw(t,0)}function Bu(t){var e=ci(t);if(Tv(e))return t}function TA(t,e){if(t==="change")return e}var Zv=!1;if(ur){var id;if(ur){var od="oninput"in document;if(!od){var Og=document.createElement("div");Og.setAttribute("oninput","return;"),od=typeof Og.oninput=="function"}id=od}else id=!1;Zv=id&&(!document.documentMode||9<document.documentMode)}function Lg(){jo&&(jo.detachEvent("onpropertychange",ew),na=jo=null)}function ew(t){if(t.propertyName==="value"&&Bu(na)){var e=[];Jv(e,na,t,Ef(t)),Dv(EA,e)}}function IA(t,e,n){t==="focusin"?(Lg(),jo=e,na=n,jo.attachEvent("onpropertychange",ew)):t==="focusout"&&Lg()}function SA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bu(na)}function AA(t,e){if(t==="click")return Bu(e)}function RA(t,e){if(t==="input"||t==="change")return Bu(e)}function kA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pn=typeof Object.is=="function"?Object.is:kA;function ra(t,e){if(Pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!zd.call(e,s)||!Pn(t[s],e[s]))return!1}return!0}function Mg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vg(t,e){var n=Mg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mg(n)}}function tw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nw(){for(var t=window,e=Xl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xl(t.document)}return e}function Nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function CA(t){var e=nw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&tw(n.ownerDocument.documentElement,n)){if(r!==null&&Nf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Vg(n,i);var o=Vg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var PA=ur&&"documentMode"in document&&11>=document.documentMode,li=null,lh=null,Fo=null,uh=!1;function jg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uh||li==null||li!==Xl(r)||(r=li,"selectionStart"in r&&Nf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fo&&ra(Fo,r)||(Fo=r,r=su(lh,"onSelect"),0<r.length&&(e=new kf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=li)))}function pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ui={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},ad={},rw={};ur&&(rw=document.createElement("div").style,"AnimationEvent"in window||(delete ui.animationend.animation,delete ui.animationiteration.animation,delete ui.animationstart.animation),"TransitionEvent"in window||delete ui.transitionend.transition);function $u(t){if(ad[t])return ad[t];if(!ui[t])return t;var e=ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rw)return ad[t]=e[n];return t}var sw=$u("animationend"),iw=$u("animationiteration"),ow=$u("animationstart"),aw=$u("transitionend"),lw=new Map,Fg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ns(t,e){lw.set(t,e),Fs(e,[t])}for(var ld=0;ld<Fg.length;ld++){var ud=Fg[ld],NA=ud.toLowerCase(),xA=ud[0].toUpperCase()+ud.slice(1);ns(NA,"on"+xA)}ns(sw,"onAnimationEnd");ns(iw,"onAnimationIteration");ns(ow,"onAnimationStart");ns("dblclick","onDoubleClick");ns("focusin","onFocus");ns("focusout","onBlur");ns(aw,"onTransitionEnd");Ci("onMouseEnter",["mouseout","mouseover"]);Ci("onMouseLeave",["mouseout","mouseover"]);Ci("onPointerEnter",["pointerout","pointerover"]);Ci("onPointerLeave",["pointerout","pointerover"]);Fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function Ug(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NS(r,e,void 0,t),t.currentTarget=null}function uw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Ug(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Ug(s,l,c),i=u}}}if(Zl)throw t=sh,Zl=!1,sh=null,t}function De(t,e){var n=e[ph];n===void 0&&(n=e[ph]=new Set);var r=t+"__bubble";n.has(r)||(cw(e,t,2,!1),n.add(r))}function cd(t,e,n){var r=0;e&&(r|=4),cw(n,t,r,e)}var ml="_reactListening"+Math.random().toString(36).slice(2);function sa(t){if(!t[ml]){t[ml]=!0,yv.forEach(function(n){n!=="selectionchange"&&(bA.has(n)||cd(n,!1,t),cd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ml]||(e[ml]=!0,cd("selectionchange",!1,e))}}function cw(t,e,n,r){switch(Kv(e)){case 1:var s=qS;break;case 4:s=KS;break;default:s=Af}n=s.bind(null,e,n,t),s=void 0,!rh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function dd(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=gs(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Dv(function(){var c=i,f=Ef(n),m=[];e:{var g=lw.get(t);if(g!==void 0){var S=kf,k=t;switch(t){case"keypress":if(Ol(n)===0)break e;case"keydown":case"keyup":S=lA;break;case"focusin":k="focus",S=sd;break;case"focusout":k="blur",S=sd;break;case"beforeblur":case"afterblur":S=sd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=YS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=dA;break;case sw:case iw:case ow:S=ZS;break;case aw:S=fA;break;case"scroll":S=GS;break;case"wheel":S=mA;break;case"copy":case"cut":case"paste":S=tA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Ng}var P=(e&4)!==0,b=!P&&t==="scroll",A=P?g!==null?g+"Capture":null:g;P=[];for(var y=c,E;y!==null;){E=y;var N=E.stateNode;if(E.tag===5&&N!==null&&(E=N,A!==null&&(N=Jo(y,A),N!=null&&P.push(ia(y,N,E)))),b)break;y=y.return}0<P.length&&(g=new S(g,k,null,n,f),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",g&&n!==th&&(k=n.relatedTarget||n.fromElement)&&(gs(k)||k[cr]))break e;if((S||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,S?(k=n.relatedTarget||n.toElement,S=c,k=k?gs(k):null,k!==null&&(b=Us(k),k!==b||k.tag!==5&&k.tag!==6)&&(k=null)):(S=null,k=c),S!==k)){if(P=Cg,N="onMouseLeave",A="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(P=Ng,N="onPointerLeave",A="onPointerEnter",y="pointer"),b=S==null?g:ci(S),E=k==null?g:ci(k),g=new P(N,y+"leave",S,n,f),g.target=b,g.relatedTarget=E,N=null,gs(f)===c&&(P=new P(A,y+"enter",k,n,f),P.target=E,P.relatedTarget=b,N=P),b=N,S&&k)t:{for(P=S,A=k,y=0,E=P;E;E=ti(E))y++;for(E=0,N=A;N;N=ti(N))E++;for(;0<y-E;)P=ti(P),y--;for(;0<E-y;)A=ti(A),E--;for(;y--;){if(P===A||A!==null&&P===A.alternate)break t;P=ti(P),A=ti(A)}P=null}else P=null;S!==null&&Bg(m,g,S,P,!1),k!==null&&b!==null&&Bg(m,b,k,P,!0)}}e:{if(g=c?ci(c):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var j=TA;else if(Dg(g))if(Zv)j=RA;else{j=SA;var M=IA}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=AA);if(j&&(j=j(t,c))){Jv(m,j,n,f);break e}M&&M(t,g,c),t==="focusout"&&(M=g._wrapperState)&&M.controlled&&g.type==="number"&&Yd(g,"number",g.value)}switch(M=c?ci(c):window,t){case"focusin":(Dg(M)||M.contentEditable==="true")&&(li=M,lh=c,Fo=null);break;case"focusout":Fo=lh=li=null;break;case"mousedown":uh=!0;break;case"contextmenu":case"mouseup":case"dragend":uh=!1,jg(m,n,f);break;case"selectionchange":if(PA)break;case"keydown":case"keyup":jg(m,n,f)}var T;if(Pf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else ai?Yv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Qv&&n.locale!=="ko"&&(ai||v!=="onCompositionStart"?v==="onCompositionEnd"&&ai&&(T=Gv()):(Lr=f,Rf="value"in Lr?Lr.value:Lr.textContent,ai=!0)),M=su(c,v),0<M.length&&(v=new Pg(v,t,null,n,f),m.push({event:v,listeners:M}),T?v.data=T:(T=Xv(n),T!==null&&(v.data=T)))),(T=yA?_A(t,n):vA(t,n))&&(c=su(c,"onBeforeInput"),0<c.length&&(f=new Pg("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=T))}uw(m,e)})}function ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function su(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Jo(t,n),i!=null&&r.unshift(ia(t,i,s)),i=Jo(t,e),i!=null&&r.push(ia(t,i,s))),t=t.return}return r}function ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=Jo(n,i),u!=null&&o.unshift(ia(n,u,l))):s||(u=Jo(n,i),u!=null&&o.push(ia(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var DA=/\r\n?/g,OA=/\u0000|\uFFFD/g;function $g(t){return(typeof t=="string"?t:""+t).replace(DA,`
`).replace(OA,"")}function gl(t,e,n){if(e=$g(e),$g(t)!==e&&n)throw Error(B(425))}function iu(){}var ch=null,dh=null;function hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fh=typeof setTimeout=="function"?setTimeout:void 0,LA=typeof clearTimeout=="function"?clearTimeout:void 0,zg=typeof Promise=="function"?Promise:void 0,MA=typeof queueMicrotask=="function"?queueMicrotask:typeof zg<"u"?function(t){return zg.resolve(null).then(t).catch(VA)}:fh;function VA(t){setTimeout(function(){throw t})}function hd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ta(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ta(e)}function $r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qi=Math.random().toString(36).slice(2),Mn="__reactFiber$"+Qi,oa="__reactProps$"+Qi,cr="__reactContainer$"+Qi,ph="__reactEvents$"+Qi,jA="__reactListeners$"+Qi,FA="__reactHandles$"+Qi;function gs(t){var e=t[Mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[cr]||n[Mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wg(t);t!==null;){if(n=t[Mn])return n;t=Wg(t)}return e}t=n,n=t.parentNode}return null}function Pa(t){return t=t[Mn]||t[cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function zu(t){return t[oa]||null}var mh=[],di=-1;function rs(t){return{current:t}}function Le(t){0>di||(t.current=mh[di],mh[di]=null,di--)}function Ne(t,e){di++,mh[di]=t.current,t.current=e}var Jr={},bt=rs(Jr),qt=rs(!1),Rs=Jr;function Pi(t,e){var n=t.type.contextTypes;if(!n)return Jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Kt(t){return t=t.childContextTypes,t!=null}function ou(){Le(qt),Le(bt)}function Hg(t,e,n){if(bt.current!==Jr)throw Error(B(168));Ne(bt,e),Ne(qt,n)}function dw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(B(108,IS(t)||"Unknown",s));return We({},n,r)}function au(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jr,Rs=bt.current,Ne(bt,t),Ne(qt,qt.current),!0}function qg(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=dw(t,e,Rs),r.__reactInternalMemoizedMergedChildContext=t,Le(qt),Le(bt),Ne(bt,t)):Le(qt),Ne(qt,n)}var Zn=null,Wu=!1,fd=!1;function hw(t){Zn===null?Zn=[t]:Zn.push(t)}function UA(t){Wu=!0,hw(t)}function ss(){if(!fd&&Zn!==null){fd=!0;var t=0,e=Re;try{var n=Zn;for(Re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Zn=null,Wu=!1}catch(s){throw Zn!==null&&(Zn=Zn.slice(t+1)),Vv(Tf,ss),s}finally{Re=e,fd=!1}}return null}var hi=[],fi=0,lu=null,uu=0,dn=[],hn=0,ks=null,er=1,tr="";function fs(t,e){hi[fi++]=uu,hi[fi++]=lu,lu=t,uu=e}function fw(t,e,n){dn[hn++]=er,dn[hn++]=tr,dn[hn++]=ks,ks=t;var r=er;t=tr;var s=32-kn(r)-1;r&=~(1<<s),n+=1;var i=32-kn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,er=1<<32-kn(e)+s|n<<s|r,tr=i+t}else er=1<<i|n<<s|r,tr=t}function xf(t){t.return!==null&&(fs(t,1),fw(t,1,0))}function bf(t){for(;t===lu;)lu=hi[--fi],hi[fi]=null,uu=hi[--fi],hi[fi]=null;for(;t===ks;)ks=dn[--hn],dn[hn]=null,tr=dn[--hn],dn[hn]=null,er=dn[--hn],dn[hn]=null}var on=null,tn=null,Ve=!1,Rn=null;function pw(t,e){var n=fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,on=t,tn=$r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,on=t,tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ks!==null?{id:er,overflow:tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,on=t,tn=null,!0):!1;default:return!1}}function gh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yh(t){if(Ve){var e=tn;if(e){var n=e;if(!Kg(t,e)){if(gh(t))throw Error(B(418));e=$r(n.nextSibling);var r=on;e&&Kg(t,e)?pw(r,n):(t.flags=t.flags&-4097|2,Ve=!1,on=t)}}else{if(gh(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ve=!1,on=t}}}function Gg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;on=t}function yl(t){if(t!==on)return!1;if(!Ve)return Gg(t),Ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hh(t.type,t.memoizedProps)),e&&(e=tn)){if(gh(t))throw mw(),Error(B(418));for(;e;)pw(t,e),e=$r(e.nextSibling)}if(Gg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tn=$r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tn=null}}else tn=on?$r(t.stateNode.nextSibling):null;return!0}function mw(){for(var t=tn;t;)t=$r(t.nextSibling)}function Ni(){tn=on=null,Ve=!1}function Df(t){Rn===null?Rn=[t]:Rn.push(t)}var BA=_r.ReactCurrentBatchConfig;function vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function _l(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qg(t){var e=t._init;return e(t._payload)}function gw(t){function e(A,y){if(t){var E=A.deletions;E===null?(A.deletions=[y],A.flags|=16):E.push(y)}}function n(A,y){if(!t)return null;for(;y!==null;)e(A,y),y=y.sibling;return null}function r(A,y){for(A=new Map;y!==null;)y.key!==null?A.set(y.key,y):A.set(y.index,y),y=y.sibling;return A}function s(A,y){return A=qr(A,y),A.index=0,A.sibling=null,A}function i(A,y,E){return A.index=E,t?(E=A.alternate,E!==null?(E=E.index,E<y?(A.flags|=2,y):E):(A.flags|=2,y)):(A.flags|=1048576,y)}function o(A){return t&&A.alternate===null&&(A.flags|=2),A}function l(A,y,E,N){return y===null||y.tag!==6?(y=wd(E,A.mode,N),y.return=A,y):(y=s(y,E),y.return=A,y)}function u(A,y,E,N){var j=E.type;return j===oi?f(A,y,E.props.children,N,E.key):y!==null&&(y.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===kr&&Qg(j)===y.type)?(N=s(y,E.props),N.ref=vo(A,y,E),N.return=A,N):(N=Bl(E.type,E.key,E.props,null,A.mode,N),N.ref=vo(A,y,E),N.return=A,N)}function c(A,y,E,N){return y===null||y.tag!==4||y.stateNode.containerInfo!==E.containerInfo||y.stateNode.implementation!==E.implementation?(y=Ed(E,A.mode,N),y.return=A,y):(y=s(y,E.children||[]),y.return=A,y)}function f(A,y,E,N,j){return y===null||y.tag!==7?(y=Ts(E,A.mode,N,j),y.return=A,y):(y=s(y,E),y.return=A,y)}function m(A,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return y=wd(""+y,A.mode,E),y.return=A,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case al:return E=Bl(y.type,y.key,y.props,null,A.mode,E),E.ref=vo(A,null,y),E.return=A,E;case ii:return y=Ed(y,A.mode,E),y.return=A,y;case kr:var N=y._init;return m(A,N(y._payload),E)}if(Ro(y)||po(y))return y=Ts(y,A.mode,E,null),y.return=A,y;_l(A,y)}return null}function g(A,y,E,N){var j=y!==null?y.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return j!==null?null:l(A,y,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case al:return E.key===j?u(A,y,E,N):null;case ii:return E.key===j?c(A,y,E,N):null;case kr:return j=E._init,g(A,y,j(E._payload),N)}if(Ro(E)||po(E))return j!==null?null:f(A,y,E,N,null);_l(A,E)}return null}function S(A,y,E,N,j){if(typeof N=="string"&&N!==""||typeof N=="number")return A=A.get(E)||null,l(y,A,""+N,j);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case al:return A=A.get(N.key===null?E:N.key)||null,u(y,A,N,j);case ii:return A=A.get(N.key===null?E:N.key)||null,c(y,A,N,j);case kr:var M=N._init;return S(A,y,E,M(N._payload),j)}if(Ro(N)||po(N))return A=A.get(E)||null,f(y,A,N,j,null);_l(y,N)}return null}function k(A,y,E,N){for(var j=null,M=null,T=y,v=y=0,w=null;T!==null&&v<E.length;v++){T.index>v?(w=T,T=null):w=T.sibling;var I=g(A,T,E[v],N);if(I===null){T===null&&(T=w);break}t&&T&&I.alternate===null&&e(A,T),y=i(I,y,v),M===null?j=I:M.sibling=I,M=I,T=w}if(v===E.length)return n(A,T),Ve&&fs(A,v),j;if(T===null){for(;v<E.length;v++)T=m(A,E[v],N),T!==null&&(y=i(T,y,v),M===null?j=T:M.sibling=T,M=T);return Ve&&fs(A,v),j}for(T=r(A,T);v<E.length;v++)w=S(T,A,v,E[v],N),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?v:w.key),y=i(w,y,v),M===null?j=w:M.sibling=w,M=w);return t&&T.forEach(function(C){return e(A,C)}),Ve&&fs(A,v),j}function P(A,y,E,N){var j=po(E);if(typeof j!="function")throw Error(B(150));if(E=j.call(E),E==null)throw Error(B(151));for(var M=j=null,T=y,v=y=0,w=null,I=E.next();T!==null&&!I.done;v++,I=E.next()){T.index>v?(w=T,T=null):w=T.sibling;var C=g(A,T,I.value,N);if(C===null){T===null&&(T=w);break}t&&T&&C.alternate===null&&e(A,T),y=i(C,y,v),M===null?j=C:M.sibling=C,M=C,T=w}if(I.done)return n(A,T),Ve&&fs(A,v),j;if(T===null){for(;!I.done;v++,I=E.next())I=m(A,I.value,N),I!==null&&(y=i(I,y,v),M===null?j=I:M.sibling=I,M=I);return Ve&&fs(A,v),j}for(T=r(A,T);!I.done;v++,I=E.next())I=S(T,A,v,I.value,N),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?v:I.key),y=i(I,y,v),M===null?j=I:M.sibling=I,M=I);return t&&T.forEach(function(x){return e(A,x)}),Ve&&fs(A,v),j}function b(A,y,E,N){if(typeof E=="object"&&E!==null&&E.type===oi&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case al:e:{for(var j=E.key,M=y;M!==null;){if(M.key===j){if(j=E.type,j===oi){if(M.tag===7){n(A,M.sibling),y=s(M,E.props.children),y.return=A,A=y;break e}}else if(M.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===kr&&Qg(j)===M.type){n(A,M.sibling),y=s(M,E.props),y.ref=vo(A,M,E),y.return=A,A=y;break e}n(A,M);break}else e(A,M);M=M.sibling}E.type===oi?(y=Ts(E.props.children,A.mode,N,E.key),y.return=A,A=y):(N=Bl(E.type,E.key,E.props,null,A.mode,N),N.ref=vo(A,y,E),N.return=A,A=N)}return o(A);case ii:e:{for(M=E.key;y!==null;){if(y.key===M)if(y.tag===4&&y.stateNode.containerInfo===E.containerInfo&&y.stateNode.implementation===E.implementation){n(A,y.sibling),y=s(y,E.children||[]),y.return=A,A=y;break e}else{n(A,y);break}else e(A,y);y=y.sibling}y=Ed(E,A.mode,N),y.return=A,A=y}return o(A);case kr:return M=E._init,b(A,y,M(E._payload),N)}if(Ro(E))return k(A,y,E,N);if(po(E))return P(A,y,E,N);_l(A,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,y!==null&&y.tag===6?(n(A,y.sibling),y=s(y,E),y.return=A,A=y):(n(A,y),y=wd(E,A.mode,N),y.return=A,A=y),o(A)):n(A,y)}return b}var xi=gw(!0),yw=gw(!1),cu=rs(null),du=null,pi=null,Of=null;function Lf(){Of=pi=du=null}function Mf(t){var e=cu.current;Le(cu),t._currentValue=e}function _h(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ti(t,e){du=t,Of=pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Wt=!0),t.firstContext=null)}function _n(t){var e=t._currentValue;if(Of!==t)if(t={context:t,memoizedValue:e,next:null},pi===null){if(du===null)throw Error(B(308));pi=t,du.dependencies={lanes:0,firstContext:t}}else pi=pi.next=t;return e}var ys=null;function Vf(t){ys===null?ys=[t]:ys.push(t)}function _w(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Vf(e)):(n.next=s.next,s.next=n),e.interleaved=n,dr(t,r)}function dr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Cr=!1;function jf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ir(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,dr(t,n)}return s=r.interleaved,s===null?(e.next=e,Vf(r)):(e.next=s.next,s.next=e),r.interleaved=e,dr(t,n)}function Ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,If(t,n)}}function Yg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hu(t,e,n,r){var s=t.updateQueue;Cr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=c=u=null,l=i;do{var g=l.lane,S=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,P=l;switch(g=e,S=n,P.tag){case 1:if(k=P.payload,typeof k=="function"){m=k.call(S,m,g);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=P.payload,g=typeof k=="function"?k.call(S,m,g):k,g==null)break e;m=We({},m,g);break e;case 2:Cr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else S={eventTime:S,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=S,u=m):f=f.next=S,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Ps|=o,t.lanes=o,t.memoizedState=m}}function Xg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(B(191,s));s.call(r)}}}var Na={},Bn=rs(Na),aa=rs(Na),la=rs(Na);function _s(t){if(t===Na)throw Error(B(174));return t}function Ff(t,e){switch(Ne(la,e),Ne(aa,t),Ne(Bn,Na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jd(e,t)}Le(Bn),Ne(Bn,e)}function bi(){Le(Bn),Le(aa),Le(la)}function ww(t){_s(la.current);var e=_s(Bn.current),n=Jd(e,t.type);e!==n&&(Ne(aa,t),Ne(Bn,n))}function Uf(t){aa.current===t&&(Le(Bn),Le(aa))}var $e=rs(0);function fu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pd=[];function Bf(){for(var t=0;t<pd.length;t++)pd[t]._workInProgressVersionPrimary=null;pd.length=0}var Ml=_r.ReactCurrentDispatcher,md=_r.ReactCurrentBatchConfig,Cs=0,ze=null,st=null,at=null,pu=!1,Uo=!1,ua=0,$A=0;function St(){throw Error(B(321))}function $f(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pn(t[n],e[n]))return!1;return!0}function zf(t,e,n,r,s,i){if(Cs=i,ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ml.current=t===null||t.memoizedState===null?qA:KA,t=n(r,s),Uo){i=0;do{if(Uo=!1,ua=0,25<=i)throw Error(B(301));i+=1,at=st=null,e.updateQueue=null,Ml.current=GA,t=n(r,s)}while(Uo)}if(Ml.current=mu,e=st!==null&&st.next!==null,Cs=0,at=st=ze=null,pu=!1,e)throw Error(B(300));return t}function Wf(){var t=ua!==0;return ua=0,t}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?ze.memoizedState=at=t:at=at.next=t,at}function vn(){if(st===null){var t=ze.alternate;t=t!==null?t.memoizedState:null}else t=st.next;var e=at===null?ze.memoizedState:at.next;if(e!==null)at=e,st=t;else{if(t===null)throw Error(B(310));st=t,t={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},at===null?ze.memoizedState=at=t:at=at.next=t}return at}function ca(t,e){return typeof e=="function"?e(t):e}function gd(t){var e=vn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=st,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((Cs&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ze.lanes|=f,Ps|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,Pn(r,e.memoizedState)||(Wt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,ze.lanes|=i,Ps|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yd(t){var e=vn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Pn(i,e.memoizedState)||(Wt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Ew(){}function Tw(t,e){var n=ze,r=vn(),s=e(),i=!Pn(r.memoizedState,s);if(i&&(r.memoizedState=s,Wt=!0),r=r.queue,Hf(Aw.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,da(9,Sw.bind(null,n,r,s,e),void 0,null),lt===null)throw Error(B(349));Cs&30||Iw(n,e,s)}return s}function Iw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Sw(t,e,n,r){e.value=n,e.getSnapshot=r,Rw(e)&&kw(t)}function Aw(t,e,n){return n(function(){Rw(e)&&kw(t)})}function Rw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pn(t,n)}catch{return!0}}function kw(t){var e=dr(t,1);e!==null&&Cn(e,t,1,-1)}function Jg(t){var e=Ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},e.queue=t,t=t.dispatch=HA.bind(null,ze,t),[e.memoizedState,t]}function da(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Cw(){return vn().memoizedState}function Vl(t,e,n,r){var s=Ln();ze.flags|=t,s.memoizedState=da(1|e,n,void 0,r===void 0?null:r)}function Hu(t,e,n,r){var s=vn();r=r===void 0?null:r;var i=void 0;if(st!==null){var o=st.memoizedState;if(i=o.destroy,r!==null&&$f(r,o.deps)){s.memoizedState=da(e,n,i,r);return}}ze.flags|=t,s.memoizedState=da(1|e,n,i,r)}function Zg(t,e){return Vl(8390656,8,t,e)}function Hf(t,e){return Hu(2048,8,t,e)}function Pw(t,e){return Hu(4,2,t,e)}function Nw(t,e){return Hu(4,4,t,e)}function xw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bw(t,e,n){return n=n!=null?n.concat([t]):null,Hu(4,4,xw.bind(null,e,t),n)}function qf(){}function Dw(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$f(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ow(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$f(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Lw(t,e,n){return Cs&21?(Pn(n,e)||(n=Uv(),ze.lanes|=n,Ps|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Wt=!0),t.memoizedState=n)}function zA(t,e){var n=Re;Re=n!==0&&4>n?n:4,t(!0);var r=md.transition;md.transition={};try{t(!1),e()}finally{Re=n,md.transition=r}}function Mw(){return vn().memoizedState}function WA(t,e,n){var r=Hr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vw(t))jw(e,n);else if(n=_w(t,e,n,r),n!==null){var s=jt();Cn(n,t,r,s),Fw(n,e,r)}}function HA(t,e,n){var r=Hr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vw(t))jw(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Pn(l,o)){var u=e.interleaved;u===null?(s.next=s,Vf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=_w(t,e,s,r),n!==null&&(s=jt(),Cn(n,t,r,s),Fw(n,e,r))}}function Vw(t){var e=t.alternate;return t===ze||e!==null&&e===ze}function jw(t,e){Uo=pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,If(t,n)}}var mu={readContext:_n,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},qA={readContext:_n,useCallback:function(t,e){return Ln().memoizedState=[t,e===void 0?null:e],t},useContext:_n,useEffect:Zg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4194308,4,xw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vl(4,2,t,e)},useMemo:function(t,e){var n=Ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=WA.bind(null,ze,t),[r.memoizedState,t]},useRef:function(t){var e=Ln();return t={current:t},e.memoizedState=t},useState:Jg,useDebugValue:qf,useDeferredValue:function(t){return Ln().memoizedState=t},useTransition:function(){var t=Jg(!1),e=t[0];return t=zA.bind(null,t[1]),Ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ze,s=Ln();if(Ve){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),lt===null)throw Error(B(349));Cs&30||Iw(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Zg(Aw.bind(null,r,i,t),[t]),r.flags|=2048,da(9,Sw.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Ln(),e=lt.identifierPrefix;if(Ve){var n=tr,r=er;n=(r&~(1<<32-kn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$A++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},KA={readContext:_n,useCallback:Dw,useContext:_n,useEffect:Hf,useImperativeHandle:bw,useInsertionEffect:Pw,useLayoutEffect:Nw,useMemo:Ow,useReducer:gd,useRef:Cw,useState:function(){return gd(ca)},useDebugValue:qf,useDeferredValue:function(t){var e=vn();return Lw(e,st.memoizedState,t)},useTransition:function(){var t=gd(ca)[0],e=vn().memoizedState;return[t,e]},useMutableSource:Ew,useSyncExternalStore:Tw,useId:Mw,unstable_isNewReconciler:!1},GA={readContext:_n,useCallback:Dw,useContext:_n,useEffect:Hf,useImperativeHandle:bw,useInsertionEffect:Pw,useLayoutEffect:Nw,useMemo:Ow,useReducer:yd,useRef:Cw,useState:function(){return yd(ca)},useDebugValue:qf,useDeferredValue:function(t){var e=vn();return st===null?e.memoizedState=t:Lw(e,st.memoizedState,t)},useTransition:function(){var t=yd(ca)[0],e=vn().memoizedState;return[t,e]},useMutableSource:Ew,useSyncExternalStore:Tw,useId:Mw,unstable_isNewReconciler:!1};function Sn(t,e){if(t&&t.defaultProps){e=We({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:We({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qu={isMounted:function(t){return(t=t._reactInternals)?Us(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),s=Hr(t),i=ir(r,s);i.payload=e,n!=null&&(i.callback=n),e=zr(t,i,s),e!==null&&(Cn(e,t,s,r),Ll(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),s=Hr(t),i=ir(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=zr(t,i,s),e!==null&&(Cn(e,t,s,r),Ll(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=Hr(t),s=ir(n,r);s.tag=2,e!=null&&(s.callback=e),e=zr(t,s,r),e!==null&&(Cn(e,t,r,n),Ll(e,t,r))}};function ey(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ra(n,r)||!ra(s,i):!0}function Uw(t,e,n){var r=!1,s=Jr,i=e.contextType;return typeof i=="object"&&i!==null?i=_n(i):(s=Kt(e)?Rs:bt.current,r=e.contextTypes,i=(r=r!=null)?Pi(t,s):Jr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function ty(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&qu.enqueueReplaceState(e,e.state,null)}function wh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},jf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=_n(i):(i=Kt(e)?Rs:bt.current,s.context=Pi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(vh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&qu.enqueueReplaceState(s,s.state,null),hu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Di(t,e){try{var n="",r=e;do n+=TS(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function _d(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Eh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var QA=typeof WeakMap=="function"?WeakMap:Map;function Bw(t,e,n){n=ir(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){yu||(yu=!0,xh=r),Eh(t,e)},n}function $w(t,e,n){n=ir(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Eh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Eh(t,e),typeof r!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ny(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new QA;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=uR.bind(null,t,e,n),e.then(t,t))}function ry(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sy(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ir(-1,1),e.tag=2,zr(n,e,1))),n.lanes|=1),t)}var YA=_r.ReactCurrentOwner,Wt=!1;function Mt(t,e,n,r){e.child=t===null?yw(e,null,n,r):xi(e,t.child,n,r)}function iy(t,e,n,r,s){n=n.render;var i=e.ref;return Ti(e,s),r=zf(t,e,n,r,i,s),n=Wf(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,hr(t,e,s)):(Ve&&n&&xf(e),e.flags|=1,Mt(t,e,r,s),e.child)}function oy(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!ep(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,zw(t,e,i,r,s)):(t=Bl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(o,r)&&t.ref===e.ref)return hr(t,e,s)}return e.flags|=1,t=qr(i,r),t.ref=e.ref,t.return=e,e.child=t}function zw(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ra(i,r)&&t.ref===e.ref)if(Wt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Wt=!0);else return e.lanes=t.lanes,hr(t,e,s)}return Th(t,e,n,r,s)}function Ww(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(gi,Zt),Zt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ne(gi,Zt),Zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ne(gi,Zt),Zt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ne(gi,Zt),Zt|=r;return Mt(t,e,s,n),e.child}function Hw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Th(t,e,n,r,s){var i=Kt(n)?Rs:bt.current;return i=Pi(e,i),Ti(e,s),n=zf(t,e,n,r,i,s),r=Wf(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,hr(t,e,s)):(Ve&&r&&xf(e),e.flags|=1,Mt(t,e,n,s),e.child)}function ay(t,e,n,r,s){if(Kt(n)){var i=!0;au(e)}else i=!1;if(Ti(e,s),e.stateNode===null)jl(t,e),Uw(e,n,r),wh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=_n(c):(c=Kt(n)?Rs:bt.current,c=Pi(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&ty(e,o,r,c),Cr=!1;var g=e.memoizedState;o.state=g,hu(e,r,o,s),u=e.memoizedState,l!==r||g!==u||qt.current||Cr?(typeof f=="function"&&(vh(e,n,f,r),u=e.memoizedState),(l=Cr||ey(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,vw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Sn(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=_n(u):(u=Kt(n)?Rs:bt.current,u=Pi(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&ty(e,o,r,u),Cr=!1,g=e.memoizedState,o.state=g,hu(e,r,o,s);var k=e.memoizedState;l!==m||g!==k||qt.current||Cr?(typeof S=="function"&&(vh(e,n,S,r),k=e.memoizedState),(c=Cr||ey(e,n,c,r,g,k,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Ih(t,e,n,r,i,s)}function Ih(t,e,n,r,s,i){Hw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&qg(e,n,!1),hr(t,e,i);r=e.stateNode,YA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=xi(e,t.child,null,i),e.child=xi(e,null,l,i)):Mt(t,e,l,i),e.memoizedState=r.state,s&&qg(e,n,!0),e.child}function qw(t){var e=t.stateNode;e.pendingContext?Hg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hg(t,e.context,!1),Ff(t,e.containerInfo)}function ly(t,e,n,r,s){return Ni(),Df(s),e.flags|=256,Mt(t,e,n,r),e.child}var Sh={dehydrated:null,treeContext:null,retryLane:0};function Ah(t){return{baseLanes:t,cachePool:null,transitions:null}}function Kw(t,e,n){var r=e.pendingProps,s=$e.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ne($e,s&1),t===null)return yh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Qu(o,r,0,null),t=Ts(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Ah(n),e.memoizedState=Sh,t):Kf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return XA(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=qr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=qr(l,i):(i=Ts(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Ah(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Sh,r}return i=t.child,t=i.sibling,r=qr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Kf(t,e){return e=Qu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vl(t,e,n,r){return r!==null&&Df(r),xi(e,t.child,null,n),t=Kf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function XA(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=_d(Error(B(422))),vl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Qu({mode:"visible",children:r.children},s,0,null),i=Ts(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&xi(e,t.child,null,o),e.child.memoizedState=Ah(o),e.memoizedState=Sh,i);if(!(e.mode&1))return vl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(B(419)),r=_d(i,r,void 0),vl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Wt||l){if(r=lt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,dr(t,s),Cn(r,t,s,-1))}return Zf(),r=_d(Error(B(421))),vl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=cR.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,tn=$r(s.nextSibling),on=e,Ve=!0,Rn=null,t!==null&&(dn[hn++]=er,dn[hn++]=tr,dn[hn++]=ks,er=t.id,tr=t.overflow,ks=e),e=Kf(e,r.children),e.flags|=4096,e)}function uy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),_h(t.return,e,n)}function vd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Gw(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Mt(t,e,r.children,n),r=$e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&uy(t,n,e);else if(t.tag===19)uy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ne($e,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&fu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),vd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&fu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}vd(e,!0,n,null,i);break;case"together":vd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ps|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function JA(t,e,n){switch(e.tag){case 3:qw(e),Ni();break;case 5:ww(e);break;case 1:Kt(e.type)&&au(e);break;case 4:Ff(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ne(cu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ne($e,$e.current&1),e.flags|=128,null):n&e.child.childLanes?Kw(t,e,n):(Ne($e,$e.current&1),t=hr(t,e,n),t!==null?t.sibling:null);Ne($e,$e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Gw(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ne($e,$e.current),r)break;return null;case 22:case 23:return e.lanes=0,Ww(t,e,n)}return hr(t,e,n)}var Qw,Rh,Yw,Xw;Qw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rh=function(){};Yw=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,_s(Bn.current);var i=null;switch(n){case"input":s=Gd(t,s),r=Gd(t,r),i=[];break;case"select":s=We({},s,{value:void 0}),r=We({},r,{value:void 0}),i=[];break;case"textarea":s=Xd(t,s),r=Xd(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=iu)}Zd(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&De("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Xw=function(t,e,n,r){n!==r&&(e.flags|=4)};function wo(t,e){if(!Ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ZA(t,e,n){var r=e.pendingProps;switch(bf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return Kt(e.type)&&ou(),At(e),null;case 3:return r=e.stateNode,bi(),Le(qt),Le(bt),Bf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(yl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rn!==null&&(Oh(Rn),Rn=null))),Rh(t,e),At(e),null;case 5:Uf(e);var s=_s(la.current);if(n=e.type,t!==null&&e.stateNode!=null)Yw(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return At(e),null}if(t=_s(Bn.current),yl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Mn]=e,r[oa]=i,t=(e.mode&1)!==0,n){case"dialog":De("cancel",r),De("close",r);break;case"iframe":case"object":case"embed":De("load",r);break;case"video":case"audio":for(s=0;s<Co.length;s++)De(Co[s],r);break;case"source":De("error",r);break;case"img":case"image":case"link":De("error",r),De("load",r);break;case"details":De("toggle",r);break;case"input":_g(r,i),De("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},De("invalid",r);break;case"textarea":wg(r,i),De("invalid",r)}Zd(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&gl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&gl(r.textContent,l,t),s=["children",""+l]):Yo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&De("scroll",r)}switch(n){case"input":ll(r),vg(r,i,!0);break;case"textarea":ll(r),Eg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=iu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Av(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Mn]=e,t[oa]=r,Qw(t,e,!1,!1),e.stateNode=t;e:{switch(o=eh(n,r),n){case"dialog":De("cancel",t),De("close",t),s=r;break;case"iframe":case"object":case"embed":De("load",t),s=r;break;case"video":case"audio":for(s=0;s<Co.length;s++)De(Co[s],t);s=r;break;case"source":De("error",t),s=r;break;case"img":case"image":case"link":De("error",t),De("load",t),s=r;break;case"details":De("toggle",t),s=r;break;case"input":_g(t,r),s=Gd(t,r),De("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=We({},r,{value:void 0}),De("invalid",t);break;case"textarea":wg(t,r),s=Xd(t,r),De("invalid",t);break;default:s=r}Zd(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Cv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Rv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xo(t,u):typeof u=="number"&&Xo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Yo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&De("scroll",t):u!=null&&yf(t,i,u,o))}switch(n){case"input":ll(t),vg(t,r,!1);break;case"textarea":ll(t),Eg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?_i(t,!!r.multiple,i,!1):r.defaultValue!=null&&_i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=iu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return At(e),null;case 6:if(t&&e.stateNode!=null)Xw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=_s(la.current),_s(Bn.current),yl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mn]=e,(i=r.nodeValue!==n)&&(t=on,t!==null))switch(t.tag){case 3:gl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mn]=e,e.stateNode=r}return At(e),null;case 13:if(Le($e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ve&&tn!==null&&e.mode&1&&!(e.flags&128))mw(),Ni(),e.flags|=98560,i=!1;else if(i=yl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(B(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[Mn]=e}else Ni(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;At(e),i=!1}else Rn!==null&&(Oh(Rn),Rn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||$e.current&1?it===0&&(it=3):Zf())),e.updateQueue!==null&&(e.flags|=4),At(e),null);case 4:return bi(),Rh(t,e),t===null&&sa(e.stateNode.containerInfo),At(e),null;case 10:return Mf(e.type._context),At(e),null;case 17:return Kt(e.type)&&ou(),At(e),null;case 19:if(Le($e),i=e.memoizedState,i===null)return At(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)wo(i,!1);else{if(it!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fu(t),o!==null){for(e.flags|=128,wo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ne($e,$e.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ze()>Oi&&(e.flags|=128,r=!0,wo(i,!1),e.lanes=4194304)}else{if(!r)if(t=fu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ve)return At(e),null}else 2*Ze()-i.renderingStartTime>Oi&&n!==1073741824&&(e.flags|=128,r=!0,wo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ze(),e.sibling=null,n=$e.current,Ne($e,r?n&1|2:n&1),e):(At(e),null);case 22:case 23:return Jf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Zt&1073741824&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function eR(t,e){switch(bf(e),e.tag){case 1:return Kt(e.type)&&ou(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return bi(),Le(qt),Le(bt),Bf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Uf(e),null;case 13:if(Le($e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Le($e),null;case 4:return bi(),null;case 10:return Mf(e.type._context),null;case 22:case 23:return Jf(),null;case 24:return null;default:return null}}var wl=!1,Ct=!1,tR=typeof WeakSet=="function"?WeakSet:Set,Y=null;function mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ke(t,e,r)}else n.current=null}function kh(t,e,n){try{n()}catch(r){Ke(t,e,r)}}var cy=!1;function nR(t,e){if(ch=nu,t=nw(),Nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,g=null;t:for(;;){for(var S;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(S=m.firstChild)!==null;)g=m,m=S;for(;;){if(m===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++f===r&&(u=o),(S=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(dh={focusedElem:t,selectionRange:n},nu=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var P=k.memoizedProps,b=k.memoizedState,A=e.stateNode,y=A.getSnapshotBeforeUpdate(e.elementType===e.type?P:Sn(e.type,P),b);A.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(N){Ke(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return k=cy,cy=!1,k}function Bo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&kh(e,n,i)}s=s.next}while(s!==r)}}function Ku(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ch(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jw(t){var e=t.alternate;e!==null&&(t.alternate=null,Jw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mn],delete e[oa],delete e[ph],delete e[jA],delete e[FA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zw(t){return t.tag===5||t.tag===3||t.tag===4}function dy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ph(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=iu));else if(r!==4&&(t=t.child,t!==null))for(Ph(t,e,n),t=t.sibling;t!==null;)Ph(t,e,n),t=t.sibling}function Nh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nh(t,e,n),t=t.sibling;t!==null;)Nh(t,e,n),t=t.sibling}var ht=null,An=!1;function Ar(t,e,n){for(n=n.child;n!==null;)eE(t,e,n),n=n.sibling}function eE(t,e,n){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(Fu,n)}catch{}switch(n.tag){case 5:Ct||mi(n,e);case 6:var r=ht,s=An;ht=null,Ar(t,e,n),ht=r,An=s,ht!==null&&(An?(t=ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ht.removeChild(n.stateNode));break;case 18:ht!==null&&(An?(t=ht,n=n.stateNode,t.nodeType===8?hd(t.parentNode,n):t.nodeType===1&&hd(t,n),ta(t)):hd(ht,n.stateNode));break;case 4:r=ht,s=An,ht=n.stateNode.containerInfo,An=!0,Ar(t,e,n),ht=r,An=s;break;case 0:case 11:case 14:case 15:if(!Ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&kh(n,e,o),s=s.next}while(s!==r)}Ar(t,e,n);break;case 1:if(!Ct&&(mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ke(n,e,l)}Ar(t,e,n);break;case 21:Ar(t,e,n);break;case 22:n.mode&1?(Ct=(r=Ct)||n.memoizedState!==null,Ar(t,e,n),Ct=r):Ar(t,e,n);break;default:Ar(t,e,n)}}function hy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tR),e.forEach(function(r){var s=dR.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ht=l.stateNode,An=!1;break e;case 3:ht=l.stateNode.containerInfo,An=!0;break e;case 4:ht=l.stateNode.containerInfo,An=!0;break e}l=l.return}if(ht===null)throw Error(B(160));eE(i,o,s),ht=null,An=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Ke(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tE(e,t),e=e.sibling}function tE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),On(t),r&4){try{Bo(3,t,t.return),Ku(3,t)}catch(P){Ke(t,t.return,P)}try{Bo(5,t,t.return)}catch(P){Ke(t,t.return,P)}}break;case 1:In(e,t),On(t),r&512&&n!==null&&mi(n,n.return);break;case 5:if(In(e,t),On(t),r&512&&n!==null&&mi(n,n.return),t.flags&32){var s=t.stateNode;try{Xo(s,"")}catch(P){Ke(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Iv(s,i),eh(l,o);var c=eh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Cv(s,m):f==="dangerouslySetInnerHTML"?Rv(s,m):f==="children"?Xo(s,m):yf(s,f,m,c)}switch(l){case"input":Qd(s,i);break;case"textarea":Sv(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?_i(s,!!i.multiple,S,!1):g!==!!i.multiple&&(i.defaultValue!=null?_i(s,!!i.multiple,i.defaultValue,!0):_i(s,!!i.multiple,i.multiple?[]:"",!1))}s[oa]=i}catch(P){Ke(t,t.return,P)}}break;case 6:if(In(e,t),On(t),r&4){if(t.stateNode===null)throw Error(B(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){Ke(t,t.return,P)}}break;case 3:if(In(e,t),On(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(P){Ke(t,t.return,P)}break;case 4:In(e,t),On(t);break;case 13:In(e,t),On(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Yf=Ze())),r&4&&hy(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ct=(c=Ct)||f,In(e,t),Ct=c):In(e,t),On(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Y=t,f=t.child;f!==null;){for(m=Y=f;Y!==null;){switch(g=Y,S=g.child,g.tag){case 0:case 11:case 14:case 15:Bo(4,g,g.return);break;case 1:mi(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(P){Ke(r,n,P)}}break;case 5:mi(g,g.return);break;case 22:if(g.memoizedState!==null){py(m);continue}}S!==null?(S.return=g,Y=S):py(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=kv("display",o))}catch(P){Ke(t,t.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){Ke(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:In(e,t),On(t),r&4&&hy(t);break;case 21:break;default:In(e,t),On(t)}}function On(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Zw(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Xo(s,""),r.flags&=-33);var i=dy(t);Nh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=dy(t);Ph(t,l,o);break;default:throw Error(B(161))}}catch(u){Ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rR(t,e,n){Y=t,nE(t)}function nE(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var s=Y,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||wl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||Ct;l=wl;var c=Ct;if(wl=o,(Ct=u)&&!c)for(Y=s;Y!==null;)o=Y,u=o.child,o.tag===22&&o.memoizedState!==null?my(s):u!==null?(u.return=o,Y=u):my(s);for(;i!==null;)Y=i,nE(i),i=i.sibling;Y=s,wl=l,Ct=c}fy(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,Y=i):fy(t)}}function fy(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ct||Ku(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ct)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Sn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Xg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&ta(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Ct||e.flags&512&&Ch(e)}catch(g){Ke(e,e.return,g)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function py(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function my(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ku(4,e)}catch(u){Ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ke(e,s,u)}}var i=e.return;try{Ch(e)}catch(u){Ke(e,i,u)}break;case 5:var o=e.return;try{Ch(e)}catch(u){Ke(e,o,u)}}}catch(u){Ke(e,e.return,u)}if(e===t){Y=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Y=l;break}Y=e.return}}var sR=Math.ceil,gu=_r.ReactCurrentDispatcher,Gf=_r.ReactCurrentOwner,mn=_r.ReactCurrentBatchConfig,ve=0,lt=null,nt=null,mt=0,Zt=0,gi=rs(0),it=0,ha=null,Ps=0,Gu=0,Qf=0,$o=null,$t=null,Yf=0,Oi=1/0,Xn=null,yu=!1,xh=null,Wr=null,El=!1,Mr=null,_u=0,zo=0,bh=null,Fl=-1,Ul=0;function jt(){return ve&6?Ze():Fl!==-1?Fl:Fl=Ze()}function Hr(t){return t.mode&1?ve&2&&mt!==0?mt&-mt:BA.transition!==null?(Ul===0&&(Ul=Uv()),Ul):(t=Re,t!==0||(t=window.event,t=t===void 0?16:Kv(t.type)),t):1}function Cn(t,e,n,r){if(50<zo)throw zo=0,bh=null,Error(B(185));ka(t,n,r),(!(ve&2)||t!==lt)&&(t===lt&&(!(ve&2)&&(Gu|=n),it===4&&Nr(t,mt)),Gt(t,r),n===1&&ve===0&&!(e.mode&1)&&(Oi=Ze()+500,Wu&&ss()))}function Gt(t,e){var n=t.callbackNode;BS(t,e);var r=tu(t,t===lt?mt:0);if(r===0)n!==null&&Sg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Sg(n),e===1)t.tag===0?UA(gy.bind(null,t)):hw(gy.bind(null,t)),MA(function(){!(ve&6)&&ss()}),n=null;else{switch(Bv(r)){case 1:n=Tf;break;case 4:n=jv;break;case 16:n=eu;break;case 536870912:n=Fv;break;default:n=eu}n=cE(n,rE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rE(t,e){if(Fl=-1,Ul=0,ve&6)throw Error(B(327));var n=t.callbackNode;if(Ii()&&t.callbackNode!==n)return null;var r=tu(t,t===lt?mt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vu(t,r);else{e=r;var s=ve;ve|=2;var i=iE();(lt!==t||mt!==e)&&(Xn=null,Oi=Ze()+500,Es(t,e));do try{aR();break}catch(l){sE(t,l)}while(!0);Lf(),gu.current=i,ve=s,nt!==null?e=0:(lt=null,mt=0,e=it)}if(e!==0){if(e===2&&(s=ih(t),s!==0&&(r=s,e=Dh(t,s))),e===1)throw n=ha,Es(t,0),Nr(t,r),Gt(t,Ze()),n;if(e===6)Nr(t,r);else{if(s=t.current.alternate,!(r&30)&&!iR(s)&&(e=vu(t,r),e===2&&(i=ih(t),i!==0&&(r=i,e=Dh(t,i))),e===1))throw n=ha,Es(t,0),Nr(t,r),Gt(t,Ze()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:ps(t,$t,Xn);break;case 3:if(Nr(t,r),(r&130023424)===r&&(e=Yf+500-Ze(),10<e)){if(tu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=fh(ps.bind(null,t,$t,Xn),e);break}ps(t,$t,Xn);break;case 4:if(Nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-kn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sR(r/1960))-r,10<r){t.timeoutHandle=fh(ps.bind(null,t,$t,Xn),r);break}ps(t,$t,Xn);break;case 5:ps(t,$t,Xn);break;default:throw Error(B(329))}}}return Gt(t,Ze()),t.callbackNode===n?rE.bind(null,t):null}function Dh(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(Es(t,e).flags|=256),t=vu(t,e),t!==2&&(e=$t,$t=n,e!==null&&Oh(e)),t}function Oh(t){$t===null?$t=t:$t.push.apply($t,t)}function iR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Pn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Nr(t,e){for(e&=~Qf,e&=~Gu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kn(e),r=1<<n;t[n]=-1,e&=~r}}function gy(t){if(ve&6)throw Error(B(327));Ii();var e=tu(t,0);if(!(e&1))return Gt(t,Ze()),null;var n=vu(t,e);if(t.tag!==0&&n===2){var r=ih(t);r!==0&&(e=r,n=Dh(t,r))}if(n===1)throw n=ha,Es(t,0),Nr(t,e),Gt(t,Ze()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ps(t,$t,Xn),Gt(t,Ze()),null}function Xf(t,e){var n=ve;ve|=1;try{return t(e)}finally{ve=n,ve===0&&(Oi=Ze()+500,Wu&&ss())}}function Ns(t){Mr!==null&&Mr.tag===0&&!(ve&6)&&Ii();var e=ve;ve|=1;var n=mn.transition,r=Re;try{if(mn.transition=null,Re=1,t)return t()}finally{Re=r,mn.transition=n,ve=e,!(ve&6)&&ss()}}function Jf(){Zt=gi.current,Le(gi)}function Es(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,LA(n)),nt!==null)for(n=nt.return;n!==null;){var r=n;switch(bf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ou();break;case 3:bi(),Le(qt),Le(bt),Bf();break;case 5:Uf(r);break;case 4:bi();break;case 13:Le($e);break;case 19:Le($e);break;case 10:Mf(r.type._context);break;case 22:case 23:Jf()}n=n.return}if(lt=t,nt=t=qr(t.current,null),mt=Zt=e,it=0,ha=null,Qf=Gu=Ps=0,$t=$o=null,ys!==null){for(e=0;e<ys.length;e++)if(n=ys[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}ys=null}return t}function sE(t,e){do{var n=nt;try{if(Lf(),Ml.current=mu,pu){for(var r=ze.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}pu=!1}if(Cs=0,at=st=ze=null,Uo=!1,ua=0,Gf.current=null,n===null||n.return===null){it=1,ha=e,nt=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=mt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=ry(o);if(S!==null){S.flags&=-257,sy(S,o,l,i,e),S.mode&1&&ny(i,c,e),e=S,u=c;var k=e.updateQueue;if(k===null){var P=new Set;P.add(u),e.updateQueue=P}else k.add(u);break e}else{if(!(e&1)){ny(i,c,e),Zf();break e}u=Error(B(426))}}else if(Ve&&l.mode&1){var b=ry(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),sy(b,o,l,i,e),Df(Di(u,l));break e}}i=u=Di(u,l),it!==4&&(it=2),$o===null?$o=[i]:$o.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var A=Bw(i,u,e);Yg(i,A);break e;case 1:l=u;var y=i.type,E=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Wr===null||!Wr.has(E)))){i.flags|=65536,e&=-e,i.lanes|=e;var N=$w(i,l,e);Yg(i,N);break e}}i=i.return}while(i!==null)}aE(n)}catch(j){e=j,nt===n&&n!==null&&(nt=n=n.return);continue}break}while(!0)}function iE(){var t=gu.current;return gu.current=mu,t===null?mu:t}function Zf(){(it===0||it===3||it===2)&&(it=4),lt===null||!(Ps&268435455)&&!(Gu&268435455)||Nr(lt,mt)}function vu(t,e){var n=ve;ve|=2;var r=iE();(lt!==t||mt!==e)&&(Xn=null,Es(t,e));do try{oR();break}catch(s){sE(t,s)}while(!0);if(Lf(),ve=n,gu.current=r,nt!==null)throw Error(B(261));return lt=null,mt=0,it}function oR(){for(;nt!==null;)oE(nt)}function aR(){for(;nt!==null&&!bS();)oE(nt)}function oE(t){var e=uE(t.alternate,t,Zt);t.memoizedProps=t.pendingProps,e===null?aE(t):nt=e,Gf.current=null}function aE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eR(n,e),n!==null){n.flags&=32767,nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{it=6,nt=null;return}}else if(n=ZA(n,e,Zt),n!==null){nt=n;return}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);it===0&&(it=5)}function ps(t,e,n){var r=Re,s=mn.transition;try{mn.transition=null,Re=1,lR(t,e,n,r)}finally{mn.transition=s,Re=r}return null}function lR(t,e,n,r){do Ii();while(Mr!==null);if(ve&6)throw Error(B(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if($S(t,i),t===lt&&(nt=lt=null,mt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||El||(El=!0,cE(eu,function(){return Ii(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=mn.transition,mn.transition=null;var o=Re;Re=1;var l=ve;ve|=4,Gf.current=null,nR(t,n),tE(n,t),CA(dh),nu=!!ch,dh=ch=null,t.current=n,rR(n),DS(),ve=l,Re=o,mn.transition=i}else t.current=n;if(El&&(El=!1,Mr=t,_u=s),i=t.pendingLanes,i===0&&(Wr=null),MS(n.stateNode),Gt(t,Ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(yu)throw yu=!1,t=xh,xh=null,t;return _u&1&&t.tag!==0&&Ii(),i=t.pendingLanes,i&1?t===bh?zo++:(zo=0,bh=t):zo=0,ss(),null}function Ii(){if(Mr!==null){var t=Bv(_u),e=mn.transition,n=Re;try{if(mn.transition=null,Re=16>t?16:t,Mr===null)var r=!1;else{if(t=Mr,Mr=null,_u=0,ve&6)throw Error(B(331));var s=ve;for(ve|=4,Y=t.current;Y!==null;){var i=Y,o=i.child;if(Y.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(Y=c;Y!==null;){var f=Y;switch(f.tag){case 0:case 11:case 15:Bo(8,f,i)}var m=f.child;if(m!==null)m.return=f,Y=m;else for(;Y!==null;){f=Y;var g=f.sibling,S=f.return;if(Jw(f),f===c){Y=null;break}if(g!==null){g.return=S,Y=g;break}Y=S}}}var k=i.alternate;if(k!==null){var P=k.child;if(P!==null){k.child=null;do{var b=P.sibling;P.sibling=null,P=b}while(P!==null)}}Y=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,Y=o;else e:for(;Y!==null;){if(i=Y,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Bo(9,i,i.return)}var A=i.sibling;if(A!==null){A.return=i.return,Y=A;break e}Y=i.return}}var y=t.current;for(Y=y;Y!==null;){o=Y;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,Y=E;else e:for(o=y;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ku(9,l)}}catch(j){Ke(l,l.return,j)}if(l===o){Y=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,Y=N;break e}Y=l.return}}if(ve=s,ss(),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(Fu,t)}catch{}r=!0}return r}finally{Re=n,mn.transition=e}}return!1}function yy(t,e,n){e=Di(n,e),e=Bw(t,e,1),t=zr(t,e,1),e=jt(),t!==null&&(ka(t,1,e),Gt(t,e))}function Ke(t,e,n){if(t.tag===3)yy(t,t,n);else for(;e!==null;){if(e.tag===3){yy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wr===null||!Wr.has(r))){t=Di(n,t),t=$w(e,t,1),e=zr(e,t,1),t=jt(),e!==null&&(ka(e,1,t),Gt(e,t));break}}e=e.return}}function uR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,lt===t&&(mt&n)===n&&(it===4||it===3&&(mt&130023424)===mt&&500>Ze()-Yf?Es(t,0):Qf|=n),Gt(t,e)}function lE(t,e){e===0&&(t.mode&1?(e=dl,dl<<=1,!(dl&130023424)&&(dl=4194304)):e=1);var n=jt();t=dr(t,e),t!==null&&(ka(t,e,n),Gt(t,n))}function cR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lE(t,n)}function dR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),lE(t,n)}var uE;uE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qt.current)Wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Wt=!1,JA(t,e,n);Wt=!!(t.flags&131072)}else Wt=!1,Ve&&e.flags&1048576&&fw(e,uu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;jl(t,e),t=e.pendingProps;var s=Pi(e,bt.current);Ti(e,n),s=zf(null,e,r,t,s,n);var i=Wf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kt(r)?(i=!0,au(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,jf(e),s.updater=qu,e.stateNode=s,s._reactInternals=e,wh(e,r,t,n),e=Ih(null,e,r,!0,i,n)):(e.tag=0,Ve&&i&&xf(e),Mt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(jl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=fR(r),t=Sn(r,t),s){case 0:e=Th(null,e,r,t,n);break e;case 1:e=ay(null,e,r,t,n);break e;case 11:e=iy(null,e,r,t,n);break e;case 14:e=oy(null,e,r,Sn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Sn(r,s),Th(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Sn(r,s),ay(t,e,r,s,n);case 3:e:{if(qw(e),t===null)throw Error(B(387));r=e.pendingProps,i=e.memoizedState,s=i.element,vw(t,e),hu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Di(Error(B(423)),e),e=ly(t,e,r,n,s);break e}else if(r!==s){s=Di(Error(B(424)),e),e=ly(t,e,r,n,s);break e}else for(tn=$r(e.stateNode.containerInfo.firstChild),on=e,Ve=!0,Rn=null,n=yw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ni(),r===s){e=hr(t,e,n);break e}Mt(t,e,r,n)}e=e.child}return e;case 5:return ww(e),t===null&&yh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,hh(r,s)?o=null:i!==null&&hh(r,i)&&(e.flags|=32),Hw(t,e),Mt(t,e,o,n),e.child;case 6:return t===null&&yh(e),null;case 13:return Kw(t,e,n);case 4:return Ff(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xi(e,null,r,n):Mt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Sn(r,s),iy(t,e,r,s,n);case 7:return Mt(t,e,e.pendingProps,n),e.child;case 8:return Mt(t,e,e.pendingProps.children,n),e.child;case 12:return Mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ne(cu,r._currentValue),r._currentValue=o,i!==null)if(Pn(i.value,o)){if(i.children===s.children&&!qt.current){e=hr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=ir(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),_h(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),_h(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Mt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ti(e,n),s=_n(s),r=r(s),e.flags|=1,Mt(t,e,r,n),e.child;case 14:return r=e.type,s=Sn(r,e.pendingProps),s=Sn(r.type,s),oy(t,e,r,s,n);case 15:return zw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Sn(r,s),jl(t,e),e.tag=1,Kt(r)?(t=!0,au(e)):t=!1,Ti(e,n),Uw(e,r,s),wh(e,r,s,n),Ih(null,e,r,!0,t,n);case 19:return Gw(t,e,n);case 22:return Ww(t,e,n)}throw Error(B(156,e.tag))};function cE(t,e){return Vv(t,e)}function hR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(t,e,n,r){return new hR(t,e,n,r)}function ep(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fR(t){if(typeof t=="function")return ep(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vf)return 11;if(t===wf)return 14}return 2}function qr(t,e){var n=t.alternate;return n===null?(n=fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")ep(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case oi:return Ts(n.children,s,i,e);case _f:o=8,s|=8;break;case Wd:return t=fn(12,n,e,s|2),t.elementType=Wd,t.lanes=i,t;case Hd:return t=fn(13,n,e,s),t.elementType=Hd,t.lanes=i,t;case qd:return t=fn(19,n,e,s),t.elementType=qd,t.lanes=i,t;case wv:return Qu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _v:o=10;break e;case vv:o=9;break e;case vf:o=11;break e;case wf:o=14;break e;case kr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=fn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Ts(t,e,n,r){return t=fn(7,t,r,e),t.lanes=n,t}function Qu(t,e,n,r){return t=fn(22,t,r,e),t.elementType=wv,t.lanes=n,t.stateNode={isHidden:!1},t}function wd(t,e,n){return t=fn(6,t,null,e),t.lanes=n,t}function Ed(t,e,n){return e=fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pR(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=td(0),this.expirationTimes=td(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=td(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function tp(t,e,n,r,s,i,o,l,u){return t=new pR(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=fn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jf(i),t}function mR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function dE(t){if(!t)return Jr;t=t._reactInternals;e:{if(Us(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Kt(n))return dw(t,n,e)}return e}function hE(t,e,n,r,s,i,o,l,u){return t=tp(n,r,!0,t,s,i,o,l,u),t.context=dE(null),n=t.current,r=jt(),s=Hr(n),i=ir(r,s),i.callback=e??null,zr(n,i,s),t.current.lanes=s,ka(t,s,r),Gt(t,r),t}function Yu(t,e,n,r){var s=e.current,i=jt(),o=Hr(s);return n=dE(n),e.context===null?e.context=n:e.pendingContext=n,e=ir(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zr(s,e,o),t!==null&&(Cn(t,s,o,i),Ll(t,s,o)),o}function wu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _y(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function np(t,e){_y(t,e),(t=t.alternate)&&_y(t,e)}function gR(){return null}var fE=typeof reportError=="function"?reportError:function(t){console.error(t)};function rp(t){this._internalRoot=t}Xu.prototype.render=rp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Yu(t,e,null,null)};Xu.prototype.unmount=rp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ns(function(){Yu(null,t,null,null)}),e[cr]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pr.length&&e!==0&&e<Pr[n].priority;n++);Pr.splice(n,0,t),n===0&&qv(t)}};function sp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vy(){}function yR(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=wu(o);i.call(c)}}var o=hE(e,r,t,0,null,!1,!1,"",vy);return t._reactRootContainer=o,t[cr]=o.current,sa(t.nodeType===8?t.parentNode:t),Ns(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=wu(u);l.call(c)}}var u=tp(t,0,!1,null,null,!1,!1,"",vy);return t._reactRootContainer=u,t[cr]=u.current,sa(t.nodeType===8?t.parentNode:t),Ns(function(){Yu(e,u,n,r)}),u}function Zu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=wu(o);l.call(u)}}Yu(e,o,t,s)}else o=yR(n,e,t,s,r);return wu(o)}$v=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ko(e.pendingLanes);n!==0&&(If(e,n|1),Gt(e,Ze()),!(ve&6)&&(Oi=Ze()+500,ss()))}break;case 13:Ns(function(){var r=dr(t,1);if(r!==null){var s=jt();Cn(r,t,1,s)}}),np(t,1)}};Sf=function(t){if(t.tag===13){var e=dr(t,134217728);if(e!==null){var n=jt();Cn(e,t,134217728,n)}np(t,134217728)}};zv=function(t){if(t.tag===13){var e=Hr(t),n=dr(t,e);if(n!==null){var r=jt();Cn(n,t,e,r)}np(t,e)}};Wv=function(){return Re};Hv=function(t,e){var n=Re;try{return Re=t,e()}finally{Re=n}};nh=function(t,e,n){switch(e){case"input":if(Qd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=zu(r);if(!s)throw Error(B(90));Tv(r),Qd(r,s)}}}break;case"textarea":Sv(t,n);break;case"select":e=n.value,e!=null&&_i(t,!!n.multiple,e,!1)}};xv=Xf;bv=Ns;var _R={usingClientEntryPoint:!1,Events:[Pa,ci,zu,Pv,Nv,Xf]},Eo={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vR={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lv(t),t===null?null:t.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||gR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{Fu=Tl.inject(vR),Un=Tl}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_R;ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sp(e))throw Error(B(200));return mR(t,e,null,n)};ln.createRoot=function(t,e){if(!sp(t))throw Error(B(299));var n=!1,r="",s=fE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=tp(t,1,!1,null,null,n,!1,r,s),t[cr]=e.current,sa(t.nodeType===8?t.parentNode:t),new rp(e)};ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=Lv(e),t=t===null?null:t.stateNode,t};ln.flushSync=function(t){return Ns(t)};ln.hydrate=function(t,e,n){if(!Ju(e))throw Error(B(200));return Zu(null,t,e,!0,n)};ln.hydrateRoot=function(t,e,n){if(!sp(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=fE;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=hE(e,null,t,1,n??null,s,!1,i,o),t[cr]=e.current,sa(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Xu(e)};ln.render=function(t,e,n){if(!Ju(e))throw Error(B(200));return Zu(null,t,e,!1,n)};ln.unmountComponentAtNode=function(t){if(!Ju(t))throw Error(B(40));return t._reactRootContainer?(Ns(function(){Zu(null,null,t,!1,function(){t._reactRootContainer=null,t[cr]=null})}),!0):!1};ln.unstable_batchedUpdates=Xf;ln.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ju(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Zu(t,e,n,!1,r)};ln.version="18.3.1-next-f1338f8080-20240426";function pE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pE)}catch(t){console.error(t)}}pE(),pv.exports=ln;var Yi=pv.exports,wy=Yi;$d.createRoot=wy.createRoot,$d.hydrateRoot=wy.hydrateRoot;var Ey={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},wR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},gE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,S=c&63;u||(S=64,o||(g=64)),r.push(n[f],n[m],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new ER;const g=i<<2|l>>4;if(r.push(g),c!==64){const S=l<<4&240|c>>2;if(r.push(S),m!==64){const k=c<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ER extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TR=function(t){const e=mE(t);return gE.encodeByteArray(e,!0)},Eu=function(t){return TR(t).replace(/\./g,"")},yE=function(t){try{return gE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=()=>IR().__FIREBASE_DEFAULTS__,AR=()=>{if(typeof process>"u"||typeof Ey>"u")return;const t=Ey.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yE(t[1]);return e&&JSON.parse(e)},ec=()=>{try{return SR()||AR()||RR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_E=t=>{var e,n;return(n=(e=ec())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vE=t=>{const e=_E(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wE=()=>{var t;return(t=ec())===null||t===void 0?void 0:t.config},EE=t=>{var e;return(e=ec())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Eu(JSON.stringify(n)),Eu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function CR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function PR(){var t;const e=(t=ec())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DR(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function OR(){return!PR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function IE(){try{return typeof indexedDB=="object"}catch{return!1}}function SE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function LR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=MR,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bs.prototype.create)}}class Bs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?VR(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new bn(s,l,r)}}function VR(t,e){return t.replace(jR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const jR=/\{\$([^}]+)}/g;function FR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Li(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ty(i)&&Ty(o)){if(!Li(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ty(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Po(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function No(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function UR(t,e){const n=new BR(t,e);return n.subscribe.bind(n)}class BR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$R(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Td),s.error===void 0&&(s.error=Td),s.complete===void 0&&(s.complete=Td);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $R(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Td(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HR(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WR(t){return t===ms?void 0:t}function HR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const KR={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},GR=pe.INFO,QR={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},YR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=QR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ip{constructor(e){this.name=e,this._logLevel=GR,this._logHandler=YR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const XR=(t,e)=>e.some(n=>t instanceof n);let Iy,Sy;function JR(){return Iy||(Iy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZR(){return Sy||(Sy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const AE=new WeakMap,Lh=new WeakMap,RE=new WeakMap,Id=new WeakMap,op=new WeakMap;function ek(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(or(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&AE.set(n,t)}).catch(()=>{}),op.set(e,t),e}function tk(t){if(Lh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Lh.set(t,e)}let Mh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||RE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nk(t){Mh=t(Mh)}function rk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sd(this),e,...n);return RE.set(r,e.sort?e.sort():[e]),or(r)}:ZR().includes(t)?function(...e){return t.apply(Sd(this),e),or(AE.get(this))}:function(...e){return or(t.apply(Sd(this),e))}}function sk(t){return typeof t=="function"?rk(t):(t instanceof IDBTransaction&&tk(t),XR(t,JR())?new Proxy(t,Mh):t)}function or(t){if(t instanceof IDBRequest)return ek(t);if(Id.has(t))return Id.get(t);const e=sk(t);return e!==t&&(Id.set(t,e),op.set(e,t)),e}const Sd=t=>op.get(t);function tc(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=or(o);return r&&o.addEventListener("upgradeneeded",u=>{r(or(o.result),u.oldVersion,u.newVersion,or(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}function Ad(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),or(n).then(()=>{})}const ik=["get","getKey","getAll","getAllKeys","count"],ok=["put","add","delete","clear"],Rd=new Map;function Ay(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rd.get(e))return Rd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ok.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ik.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return Rd.set(e,i),i}nk(t=>({...t,get:(e,n,r)=>Ay(e,n)||t.get(e,n,r),has:(e,n)=>!!Ay(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vh="@firebase/app",Ry="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new ip("@firebase/app"),uk="@firebase/app-compat",ck="@firebase/analytics-compat",dk="@firebase/analytics",hk="@firebase/app-check-compat",fk="@firebase/app-check",pk="@firebase/auth",mk="@firebase/auth-compat",gk="@firebase/database",yk="@firebase/data-connect",_k="@firebase/database-compat",vk="@firebase/functions",wk="@firebase/functions-compat",Ek="@firebase/installations",Tk="@firebase/installations-compat",Ik="@firebase/messaging",Sk="@firebase/messaging-compat",Ak="@firebase/performance",Rk="@firebase/performance-compat",kk="@firebase/remote-config",Ck="@firebase/remote-config-compat",Pk="@firebase/storage",Nk="@firebase/storage-compat",xk="@firebase/firestore",bk="@firebase/vertexai-preview",Dk="@firebase/firestore-compat",Ok="firebase",Lk="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="[DEFAULT]",Mk={[Vh]:"fire-core",[uk]:"fire-core-compat",[dk]:"fire-analytics",[ck]:"fire-analytics-compat",[fk]:"fire-app-check",[hk]:"fire-app-check-compat",[pk]:"fire-auth",[mk]:"fire-auth-compat",[gk]:"fire-rtdb",[yk]:"fire-data-connect",[_k]:"fire-rtdb-compat",[vk]:"fire-fn",[wk]:"fire-fn-compat",[Ek]:"fire-iid",[Tk]:"fire-iid-compat",[Ik]:"fire-fcm",[Sk]:"fire-fcm-compat",[Ak]:"fire-perf",[Rk]:"fire-perf-compat",[kk]:"fire-rc",[Ck]:"fire-rc-compat",[Pk]:"fire-gcs",[Nk]:"fire-gcs-compat",[xk]:"fire-fst",[Dk]:"fire-fst-compat",[bk]:"fire-vertex","fire-js":"fire-js",[Ok]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=new Map,Vk=new Map,Fh=new Map;function ky(t,e){try{t.container.addComponent(e)}catch(n){fr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nn(t){const e=t.name;if(Fh.has(e))return fr.debug(`There were multiple attempts to register component ${e}.`),!1;Fh.set(e,t);for(const n of Tu.values())ky(n,t);for(const n of Vk.values())ky(n,t);return!0}function $s(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kr=new Bs("app","Firebase",jk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=Lk;function kE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Kr.create("bad-app-name",{appName:String(s)});if(n||(n=wE()),!n)throw Kr.create("no-options");const i=Tu.get(s);if(i){if(Li(n,i.options)&&Li(r,i.config))return i;throw Kr.create("duplicate-app",{appName:s})}const o=new qR(s);for(const u of Fh.values())o.addComponent(u);const l=new Fk(n,r,o);return Tu.set(s,l),l}function nc(t=jh){const e=Tu.get(t);if(!e&&t===jh&&wE())return kE();if(!e)throw Kr.create("no-app",{appName:t});return e}function Qt(t,e,n){var r;let s=(r=Mk[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fr.warn(l.join(" "));return}Nn(new wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk="firebase-heartbeat-database",Bk=1,fa="firebase-heartbeat-store";let kd=null;function CE(){return kd||(kd=tc(Uk,Bk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kr.create("idb-open",{originalErrorMessage:t.message})})),kd}async function $k(t){try{const n=(await CE()).transaction(fa),r=await n.objectStore(fa).get(PE(t));return await n.done,r}catch(e){if(e instanceof bn)fr.warn(e.message);else{const n=Kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fr.warn(n.message)}}}async function Cy(t,e){try{const r=(await CE()).transaction(fa,"readwrite");await r.objectStore(fa).put(e,PE(t)),await r.done}catch(n){if(n instanceof bn)fr.warn(n.message);else{const r=Kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fr.warn(r.message)}}}function PE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=1024,Wk=30*24*60*60*1e3;class Hk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Py();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Wk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){fr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Py(),{heartbeatsToSend:r,unsentEntries:s}=qk(this._heartbeatsCache.heartbeats),i=Eu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return fr.warn(n),""}}}function Py(){return new Date().toISOString().substring(0,10)}function qk(t,e=zk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ny(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ny(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Kk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return IE()?SE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $k(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ny(t){return Eu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(t){Nn(new wn("platform-logger",e=>new ak(e),"PRIVATE")),Nn(new wn("heartbeat",e=>new Hk(e),"PRIVATE")),Qt(Vh,Ry,t),Qt(Vh,Ry,"esm2017"),Qt("fire-js","")}Gk("");var Qk="firebase",Yk="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt(Qk,Yk,"app");function ap(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function NE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xk=NE,xE=new Bs("auth","Firebase",NE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=new ip("@firebase/auth");function Jk(t,...e){Iu.logLevel<=pe.WARN&&Iu.warn(`Auth (${zs}): ${t}`,...e)}function $l(t,...e){Iu.logLevel<=pe.ERROR&&Iu.error(`Auth (${zs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,...e){throw up(t,...e)}function gn(t,...e){return up(t,...e)}function lp(t,e,n){const r=Object.assign(Object.assign({},Xk()),{[e]:n});return new Bs("auth","Firebase",r).create(e,{appName:t.name})}function ar(t){return lp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bE(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&En(t,"argument-error"),lp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function up(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xE.create(t,...e)}function ie(t,e,...n){if(!t)throw up(e,...n)}function nr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $l(e),new Error(e)}function pr(t,e){t||nr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Zk(){return xy()==="http:"||xy()==="https:"}function xy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zk()||xR()||"connection"in navigator)?navigator.onLine:!0}function tC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n){this.shortDelay=e,this.longDelay=n,pr(n>e,"Short delay should be less than long delay!"),this.isMobile=CR()||bR()}get(){return eC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(t,e){pr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=new ba(3e4,6e4);function is(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vr(t,e,n,r,s={}){return OE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=xa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},i);return NR()||(c.referrerPolicy="no-referrer"),DE.fetch()(LE(t,t.config.apiHost,n,l),c)})}async function OE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},nC),e);try{const s=new iC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Il(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Il(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Il(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Il(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw lp(t,f,c);En(t,f)}}catch(s){if(s instanceof bn)throw s;En(t,"network-request-failed",{message:String(s)})}}async function Da(t,e,n,r,s={}){const i=await vr(t,e,n,r,s);return"mfaPendingCredential"in i&&En(t,"multi-factor-auth-required",{_serverResponse:i}),i}function LE(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?cp(t.config,s):`${t.config.apiScheme}://${s}`}function sC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),rC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Il(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=gn(t,e,r);return s.customData._tokenResponse=n,s}function by(t){return t!==void 0&&t.enterprise!==void 0}class oC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return sC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function aC(t,e){return vr(t,"GET","/v2/recaptchaConfig",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lC(t,e){return vr(t,"POST","/v1/accounts:delete",e)}async function ME(t,e){return vr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uC(t,e=!1){const n=Se(t),r=await n.getIdToken(e),s=dp(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wo(Cd(s.auth_time)),issuedAtTime:Wo(Cd(s.iat)),expirationTime:Wo(Cd(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Cd(t){return Number(t)*1e3}function dp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $l("JWT malformed, contained fewer than 3 sections"),null;try{const s=yE(n);return s?JSON.parse(s):($l("Failed to decode base64 JWT payload"),null)}catch(s){return $l("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Dy(t){const e=dp(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&cC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wo(this.lastLoginAt),this.creationTime=Wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Su(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Mi(t,ME(n,{idToken:r}));ie(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?VE(i.providerUserInfo):[],l=fC(t.providerData,o),u=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Bh(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function hC(t){const e=Se(t);await Su(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function VE(t){return t.map(e=>{var{providerId:n}=e,r=ap(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pC(t,e){const n=await OE(t,{},async()=>{const r=xa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=LE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",DE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mC(t,e){return vr(t,"POST","/v2/accounts:revokeToken",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=Dy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await pC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Si;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ap(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Bh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Mi(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uC(this,e)}reload(){return hC(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Su(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(ar(this.auth));const e=await this.getIdToken();return await Mi(this,lC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,c,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,S=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:E,emailVerified:N,isAnonymous:j,providerData:M,stsTokenManager:T}=n;ie(E&&T,e,"internal-error");const v=Si.fromJSON(this.name,T);ie(typeof E=="string",e,"internal-error"),Rr(m,e.name),Rr(g,e.name),ie(typeof N=="boolean",e,"internal-error"),ie(typeof j=="boolean",e,"internal-error"),Rr(S,e.name),Rr(k,e.name),Rr(P,e.name),Rr(b,e.name),Rr(A,e.name),Rr(y,e.name);const w=new rr({uid:E,auth:e,email:g,emailVerified:N,displayName:m,isAnonymous:j,photoURL:k,phoneNumber:S,tenantId:P,stsTokenManager:v,createdAt:A,lastLoginAt:y});return M&&Array.isArray(M)&&(w.providerData=M.map(I=>Object.assign({},I))),b&&(w._redirectEventId=b),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new Si;s.updateFromServerResponse(n);const i=new rr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Su(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?VE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Si;l.updateFromIdToken(r);const u=new rr({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Bh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=new Map;function sr(t){pr(t instanceof Function,"Expected a class definition");let e=Oy.get(t);return e?(pr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Oy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jE.type="NONE";const Ly=jE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=zl(this.userKey,s.apiKey,i),this.fullPersistenceKey=zl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ai(sr(Ly),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||sr(Ly);const o=zl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const m=rr._fromJSON(e,f);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Ai(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Ai(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($E(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(FE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(WE(e))return"Blackberry";if(HE(e))return"Webos";if(UE(e))return"Safari";if((e.includes("chrome/")||BE(e))&&!e.includes("edge/"))return"Chrome";if(zE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function FE(t=Dt()){return/firefox\//i.test(t)}function UE(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function BE(t=Dt()){return/crios\//i.test(t)}function $E(t=Dt()){return/iemobile/i.test(t)}function zE(t=Dt()){return/android/i.test(t)}function WE(t=Dt()){return/blackberry/i.test(t)}function HE(t=Dt()){return/webos/i.test(t)}function hp(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gC(t=Dt()){var e;return hp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yC(){return DR()&&document.documentMode===10}function qE(t=Dt()){return hp(t)||zE(t)||HE(t)||WE(t)||/windows phone/i.test(t)||$E(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(t,e=[]){let n;switch(t){case"Browser":n=My(Dt());break;case"Worker":n=`${My(Dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(t,e={}){return vr(t,"GET","/v2/passwordPolicy",is(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=6;class EC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vy(this),this.idTokenSubscription=new Vy(this),this.beforeStateQueue=new _C(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ai.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ME(this,{idToken:e}),r=await rr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Su(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pn(this.app))return Promise.reject(ar(this));const n=e?Se(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pn(this.app)?Promise.reject(ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vC(this),n=new EC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sr(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await Ai.create(this,[sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=KE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Jk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function os(t){return Se(t)}class Vy{constructor(e){this.auth=e,this.observer=null,this.addObserver=UR(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IC(t){rc=t}function GE(t){return rc.loadJS(t)}function SC(){return rc.recaptchaEnterpriseScript}function AC(){return rc.gapiScript}function RC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const kC="recaptcha-enterprise",CC="NO_RECAPTCHA";class PC{constructor(e){this.type=kC,this.auth=os(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{aC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new oC(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;by(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(CC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&by(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=SC();u.length!==0&&(u+=l),GE(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function jy(t,e,n,r=!1){const s=new PC(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function $h(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await jy(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await jy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(t,e){const n=$s(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Li(i,e??{}))return s;En(s,"already-initialized")}return n.initialize({options:e})}function xC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(sr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bC(t,e,n){const r=os(t);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=QE(e),{host:o,port:l}=DC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),OC()}function QE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DC(t){const e=QE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Fy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Fy(o)}}}function Fy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nr("not implemented")}_getIdTokenResponse(e){return nr("not implemented")}_linkToIdToken(e,n){return nr("not implemented")}_getReauthenticationResolver(e){return nr("not implemented")}}async function LC(t,e){return vr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MC(t,e){return Da(t,"POST","/v1/accounts:signInWithPassword",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VC(t,e){return Da(t,"POST","/v1/accounts:signInWithEmailLink",is(t,e))}async function jC(t,e){return Da(t,"POST","/v1/accounts:signInWithEmailLink",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends fp{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new pa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new pa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $h(e,n,"signInWithPassword",MC);case"emailLink":return VC(e,{email:this._email,oobCode:this._password});default:En(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $h(e,r,"signUpPassword",LC);case"emailLink":return jC(e,{idToken:n,email:this._email,oobCode:this._password});default:En(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(t,e){return Da(t,"POST","/v1/accounts:signInWithIdp",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC="http://localhost";class xs extends fp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ap(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new xs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ri(e,n)}buildRequest(){const e={requestUri:FC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BC(t){const e=Po(No(t)).link,n=e?Po(No(e)).deep_link_id:null,r=Po(No(t)).deep_link_id;return(r?Po(No(r)).link:null)||r||n||e||t}class pp{constructor(e){var n,r,s,i,o,l;const u=Po(No(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=UC((s=u.mode)!==null&&s!==void 0?s:null);ie(c&&f&&m,"argument-error"),this.apiKey=c,this.operation=m,this.code=f,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=BC(e);try{return new pp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.providerId=Ws.PROVIDER_ID}static credential(e,n){return pa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pp.parseLink(n);return ie(r,"argument-error"),pa._fromEmailAndCode(e,r.code,r.tenantId)}}Ws.PROVIDER_ID="password";Ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa extends sc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Oa{constructor(){super("facebook.com")}static credential(e){return xs._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Oa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xs._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Oa{constructor(){super("github.com")}static credential(e){return xs._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return br.credential(e.oauthAccessToken)}catch{return null}}}br.GITHUB_SIGN_IN_METHOD="github.com";br.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Oa{constructor(){super("twitter.com")}static credential(e,n){return xs._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dr.credential(n,r)}catch{return null}}}Dr.TWITTER_SIGN_IN_METHOD="twitter.com";Dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $C(t,e){return Da(t,"POST","/v1/accounts:signUp",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await rr._fromIdTokenResponse(e,r,s),o=Uy(r);return new bs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Uy(r);return new bs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Uy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends bn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Au.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Au(e,n,r,s)}}function YE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Au._fromErrorAndOperation(t,i,e,r):i})}async function zC(t,e,n=!1){const r=await Mi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XE(t,e,n=!1){const{auth:r}=t;if(pn(r.app))return Promise.reject(ar(r));const s="reauthenticate";try{const i=await Mi(t,YE(r,s,e,t),n);ie(i.idToken,r,"internal-error");const o=dp(i.idToken);ie(o,r,"internal-error");const{sub:l}=o;return ie(t.uid===l,r,"user-mismatch"),bs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&En(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JE(t,e,n=!1){if(pn(t.app))return Promise.reject(ar(t));const r="signIn",s=await YE(t,r,e),i=await bs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function WC(t,e){return JE(os(t),e)}async function HC(t,e){return XE(Se(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(t){const e=os(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qC(t,e,n){if(pn(t.app))return Promise.reject(ar(t));const r=os(t),o=await $h(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$C).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ZE(t),u}),l=await bs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function KC(t,e,n){return pn(t.app)?Promise.reject(ar(t)):WC(Se(t),Ws.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ZE(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GC(t,e){return vr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zh(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Se(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Mi(r,GC(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function QC(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function YC(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function XC(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function JC(t){return Se(t).signOut()}const Ru="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ru,"1"),this.storage.removeItem(Ru),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=1e3,eP=10;class tT extends eT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);yC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,eP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ZC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tT.type="LOCAL";const tP=tT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT extends eT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nT.type="SESSION";const rT=nT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ic(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await nP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ic.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=mp("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(){return window}function sP(t){$n().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(){return typeof $n().WorkerGlobalScope<"u"&&typeof $n().importScripts=="function"}async function iP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aP(){return sT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="firebaseLocalStorageDb",lP=1,ku="firebaseLocalStorage",oT="fbase_key";class La{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oc(t,e){return t.transaction([ku],e?"readwrite":"readonly").objectStore(ku)}function uP(){const t=indexedDB.deleteDatabase(iT);return new La(t).toPromise()}function Wh(){const t=indexedDB.open(iT,lP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ku,{keyPath:oT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ku)?e(r):(r.close(),await uP(),e(await Wh()))})})}async function By(t,e,n){const r=oc(t,!0).put({[oT]:e,value:n});return new La(r).toPromise()}async function cP(t,e){const n=oc(t,!1).get(e),r=await new La(n).toPromise();return r===void 0?null:r.value}function $y(t,e){const n=oc(t,!0).delete(e);return new La(n).toPromise()}const dP=800,hP=3;class aT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>hP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ic._getInstance(aP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await iP(),!this.activeServiceWorker)return;this.sender=new rP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wh();return await By(e,Ru,"1"),await $y(e,Ru),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>By(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$y(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=oc(s,!1).getAll();return new La(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aT.type="LOCAL";const fP=aT;new ba(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(t,e){return e?sr(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp extends fp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pP(t){return JE(t.auth,new yp(t),t.bypassAuthState)}function mP(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),XE(n,new yp(t),t.bypassAuthState)}async function gP(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),zC(n,new yp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pP;case"linkViaPopup":case"linkViaRedirect":return gP;case"reauthViaPopup":case"reauthViaRedirect":return mP;default:En(this.auth,"internal-error")}}resolve(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=new ba(2e3,1e4);async function _P(t,e,n){if(pn(t.app))return Promise.reject(gn(t,"operation-not-supported-in-this-environment"));const r=os(t);bE(t,e,sc);const s=gp(r,n);return new Vr(r,"signInViaPopup",e,s).executeNotNull()}async function vP(t,e,n){const r=Se(t);if(pn(r.auth.app))return Promise.reject(gn(r.auth,"operation-not-supported-in-this-environment"));bE(r.auth,e,sc);const s=gp(r.auth,n);return new Vr(r.auth,"reauthViaPopup",e,s,r).executeNotNull()}class Vr extends lT{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Vr.currentPopupAction&&Vr.currentPopupAction.cancel(),Vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){pr(this.filter.length===1,"Popup operations only handle one event");const e=mp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yP.get())};e()}}Vr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP="pendingRedirect",Wl=new Map;class EP extends lT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wl.get(this.auth._key());if(!e){try{const r=await TP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wl.set(this.auth._key(),e)}return this.bypassAuthState||Wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TP(t,e){const n=AP(e),r=SP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function IP(t,e){Wl.set(t._key(),e)}function SP(t){return sr(t._redirectPersistence)}function AP(t){return zl(wP,t.config.apiKey,t.name)}async function RP(t,e,n=!1){if(pn(t.app))return Promise.reject(ar(t));const r=os(t),s=gp(r,e),o=await new EP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=10*60*1e3;class CP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uT(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kP&&this.cachedEventUids.clear(),this.cachedEventUids.has(zy(e))}saveEventToCache(e){this.cachedEventUids.add(zy(e)),this.lastProcessedEventTime=Date.now()}}function zy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NP(t,e={}){return vr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bP=/^https?/;async function DP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NP(t);for(const n of e)try{if(OP(n))return}catch{}En(t,"unauthorized-domain")}function OP(t){const e=Uh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bP.test(n))return!1;if(xP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=new ba(3e4,6e4);function Wy(){const t=$n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MP(t){return new Promise((e,n)=>{var r,s,i;function o(){Wy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wy(),n(gn(t,"network-request-failed"))},timeout:LP.get()})}if(!((s=(r=$n().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=$n().gapi)===null||i===void 0)&&i.load)o();else{const l=RC("iframefcb");return $n()[l]=()=>{gapi.load?o():n(gn(t,"network-request-failed"))},GE(`${AC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Hl=null,e})}let Hl=null;function VP(t){return Hl=Hl||MP(t),Hl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP=new ba(5e3,15e3),FP="__/auth/iframe",UP="emulator/auth/iframe",BP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$P=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zP(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cp(e,UP):`https://${t.config.authDomain}/${FP}`,r={apiKey:e.apiKey,appName:t.name,v:zs},s=$P.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xa(r).slice(1)}`}async function WP(t){const e=await VP(t),n=$n().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:zP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),l=$n().setTimeout(()=>{i(o)},jP.get());function u(){$n().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qP=500,KP=600,GP="_blank",QP="http://localhost";class Hy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YP(t,e,n,r=qP,s=KP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},HP),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Dt().toLowerCase();n&&(l=BE(c)?GP:n),FE(c)&&(e=e||QP,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[S,k])=>`${g}${S}=${k},`,"");if(gC(c)&&l!=="_self")return XP(e||"",l),new Hy(null);const m=window.open(e||"",l,f);ie(m,t,"popup-blocked");try{m.focus()}catch{}return new Hy(m)}function XP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP="__/auth/handler",ZP="emulator/auth/handler",eN=encodeURIComponent("fac");async function qy(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zs,eventId:s};if(e instanceof sc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",FR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Oa){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${eN}=${encodeURIComponent(u)}`:"";return`${tN(t)}?${xa(l).slice(1)}${c}`}function tN({config:t}){return t.emulator?cp(t,ZP):`https://${t.authDomain}/${JP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="webStorageSupport";class nN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rT,this._completeRedirectFn=RP,this._overrideRedirectResult=IP}async _openPopup(e,n,r,s){var i;pr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await qy(e,n,r,Uh(),s);return YP(e,o,mp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await qy(e,n,r,Uh(),s);return sP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(pr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await WP(e),r=new CP(e);return n.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pd,{type:Pd},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Pd];o!==void 0&&n(!!o),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qE()||UE()||hp()}}const rN=nN;var Ky="@firebase/auth",Gy="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oN(t){Nn(new wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:KE(t)},c=new TC(r,s,i,u);return xC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nn(new wn("auth-internal",e=>{const n=os(e.getProvider("auth").getImmediate());return(r=>new sN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(Ky,Gy,iN(t)),Qt(Ky,Gy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN=5*60,lN=EE("authIdTokenMaxAge")||aN;let Qy=null;const uN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lN)return;const s=n==null?void 0:n.token;Qy!==s&&(Qy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function cN(t=nc()){const e=$s(t,"auth");if(e.isInitialized())return e.getImmediate();const n=NC(t,{popupRedirectResolver:rN,persistence:[fP,tP,rT]}),r=EE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=uN(i.toString());YC(n,o,()=>o(n.currentUser)),QC(n,l=>o(l))}}const s=_E("auth");return s&&bC(n,`http://${s}`),n}function dN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}IC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=gn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",dN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oN("Browser");var Yy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Is,cT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function w(){}w.prototype=v.prototype,T.D=v.prototype,T.prototype=new w,T.prototype.constructor=T,T.C=function(I,C,x){for(var R=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)R[ye-2]=arguments[ye];return v.prototype[C].apply(I,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,w){w||(w=0);var I=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)I[C]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(C=0;16>C;++C)I[C]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=T.g[0],w=T.g[1],C=T.g[2];var x=T.g[3],R=v+(x^w&(C^x))+I[0]+3614090360&4294967295;v=w+(R<<7&4294967295|R>>>25),R=x+(C^v&(w^C))+I[1]+3905402710&4294967295,x=v+(R<<12&4294967295|R>>>20),R=C+(w^x&(v^w))+I[2]+606105819&4294967295,C=x+(R<<17&4294967295|R>>>15),R=w+(v^C&(x^v))+I[3]+3250441966&4294967295,w=C+(R<<22&4294967295|R>>>10),R=v+(x^w&(C^x))+I[4]+4118548399&4294967295,v=w+(R<<7&4294967295|R>>>25),R=x+(C^v&(w^C))+I[5]+1200080426&4294967295,x=v+(R<<12&4294967295|R>>>20),R=C+(w^x&(v^w))+I[6]+2821735955&4294967295,C=x+(R<<17&4294967295|R>>>15),R=w+(v^C&(x^v))+I[7]+4249261313&4294967295,w=C+(R<<22&4294967295|R>>>10),R=v+(x^w&(C^x))+I[8]+1770035416&4294967295,v=w+(R<<7&4294967295|R>>>25),R=x+(C^v&(w^C))+I[9]+2336552879&4294967295,x=v+(R<<12&4294967295|R>>>20),R=C+(w^x&(v^w))+I[10]+4294925233&4294967295,C=x+(R<<17&4294967295|R>>>15),R=w+(v^C&(x^v))+I[11]+2304563134&4294967295,w=C+(R<<22&4294967295|R>>>10),R=v+(x^w&(C^x))+I[12]+1804603682&4294967295,v=w+(R<<7&4294967295|R>>>25),R=x+(C^v&(w^C))+I[13]+4254626195&4294967295,x=v+(R<<12&4294967295|R>>>20),R=C+(w^x&(v^w))+I[14]+2792965006&4294967295,C=x+(R<<17&4294967295|R>>>15),R=w+(v^C&(x^v))+I[15]+1236535329&4294967295,w=C+(R<<22&4294967295|R>>>10),R=v+(C^x&(w^C))+I[1]+4129170786&4294967295,v=w+(R<<5&4294967295|R>>>27),R=x+(w^C&(v^w))+I[6]+3225465664&4294967295,x=v+(R<<9&4294967295|R>>>23),R=C+(v^w&(x^v))+I[11]+643717713&4294967295,C=x+(R<<14&4294967295|R>>>18),R=w+(x^v&(C^x))+I[0]+3921069994&4294967295,w=C+(R<<20&4294967295|R>>>12),R=v+(C^x&(w^C))+I[5]+3593408605&4294967295,v=w+(R<<5&4294967295|R>>>27),R=x+(w^C&(v^w))+I[10]+38016083&4294967295,x=v+(R<<9&4294967295|R>>>23),R=C+(v^w&(x^v))+I[15]+3634488961&4294967295,C=x+(R<<14&4294967295|R>>>18),R=w+(x^v&(C^x))+I[4]+3889429448&4294967295,w=C+(R<<20&4294967295|R>>>12),R=v+(C^x&(w^C))+I[9]+568446438&4294967295,v=w+(R<<5&4294967295|R>>>27),R=x+(w^C&(v^w))+I[14]+3275163606&4294967295,x=v+(R<<9&4294967295|R>>>23),R=C+(v^w&(x^v))+I[3]+4107603335&4294967295,C=x+(R<<14&4294967295|R>>>18),R=w+(x^v&(C^x))+I[8]+1163531501&4294967295,w=C+(R<<20&4294967295|R>>>12),R=v+(C^x&(w^C))+I[13]+2850285829&4294967295,v=w+(R<<5&4294967295|R>>>27),R=x+(w^C&(v^w))+I[2]+4243563512&4294967295,x=v+(R<<9&4294967295|R>>>23),R=C+(v^w&(x^v))+I[7]+1735328473&4294967295,C=x+(R<<14&4294967295|R>>>18),R=w+(x^v&(C^x))+I[12]+2368359562&4294967295,w=C+(R<<20&4294967295|R>>>12),R=v+(w^C^x)+I[5]+4294588738&4294967295,v=w+(R<<4&4294967295|R>>>28),R=x+(v^w^C)+I[8]+2272392833&4294967295,x=v+(R<<11&4294967295|R>>>21),R=C+(x^v^w)+I[11]+1839030562&4294967295,C=x+(R<<16&4294967295|R>>>16),R=w+(C^x^v)+I[14]+4259657740&4294967295,w=C+(R<<23&4294967295|R>>>9),R=v+(w^C^x)+I[1]+2763975236&4294967295,v=w+(R<<4&4294967295|R>>>28),R=x+(v^w^C)+I[4]+1272893353&4294967295,x=v+(R<<11&4294967295|R>>>21),R=C+(x^v^w)+I[7]+4139469664&4294967295,C=x+(R<<16&4294967295|R>>>16),R=w+(C^x^v)+I[10]+3200236656&4294967295,w=C+(R<<23&4294967295|R>>>9),R=v+(w^C^x)+I[13]+681279174&4294967295,v=w+(R<<4&4294967295|R>>>28),R=x+(v^w^C)+I[0]+3936430074&4294967295,x=v+(R<<11&4294967295|R>>>21),R=C+(x^v^w)+I[3]+3572445317&4294967295,C=x+(R<<16&4294967295|R>>>16),R=w+(C^x^v)+I[6]+76029189&4294967295,w=C+(R<<23&4294967295|R>>>9),R=v+(w^C^x)+I[9]+3654602809&4294967295,v=w+(R<<4&4294967295|R>>>28),R=x+(v^w^C)+I[12]+3873151461&4294967295,x=v+(R<<11&4294967295|R>>>21),R=C+(x^v^w)+I[15]+530742520&4294967295,C=x+(R<<16&4294967295|R>>>16),R=w+(C^x^v)+I[2]+3299628645&4294967295,w=C+(R<<23&4294967295|R>>>9),R=v+(C^(w|~x))+I[0]+4096336452&4294967295,v=w+(R<<6&4294967295|R>>>26),R=x+(w^(v|~C))+I[7]+1126891415&4294967295,x=v+(R<<10&4294967295|R>>>22),R=C+(v^(x|~w))+I[14]+2878612391&4294967295,C=x+(R<<15&4294967295|R>>>17),R=w+(x^(C|~v))+I[5]+4237533241&4294967295,w=C+(R<<21&4294967295|R>>>11),R=v+(C^(w|~x))+I[12]+1700485571&4294967295,v=w+(R<<6&4294967295|R>>>26),R=x+(w^(v|~C))+I[3]+2399980690&4294967295,x=v+(R<<10&4294967295|R>>>22),R=C+(v^(x|~w))+I[10]+4293915773&4294967295,C=x+(R<<15&4294967295|R>>>17),R=w+(x^(C|~v))+I[1]+2240044497&4294967295,w=C+(R<<21&4294967295|R>>>11),R=v+(C^(w|~x))+I[8]+1873313359&4294967295,v=w+(R<<6&4294967295|R>>>26),R=x+(w^(v|~C))+I[15]+4264355552&4294967295,x=v+(R<<10&4294967295|R>>>22),R=C+(v^(x|~w))+I[6]+2734768916&4294967295,C=x+(R<<15&4294967295|R>>>17),R=w+(x^(C|~v))+I[13]+1309151649&4294967295,w=C+(R<<21&4294967295|R>>>11),R=v+(C^(w|~x))+I[4]+4149444226&4294967295,v=w+(R<<6&4294967295|R>>>26),R=x+(w^(v|~C))+I[11]+3174756917&4294967295,x=v+(R<<10&4294967295|R>>>22),R=C+(v^(x|~w))+I[2]+718787259&4294967295,C=x+(R<<15&4294967295|R>>>17),R=w+(x^(C|~v))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(C+(R<<21&4294967295|R>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+x&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var w=v-this.blockSize,I=this.B,C=this.h,x=0;x<v;){if(C==0)for(;x<=w;)s(this,T,x),x+=this.blockSize;if(typeof T=="string"){for(;x<v;)if(I[C++]=T.charCodeAt(x++),C==this.blockSize){s(this,I),C=0;break}}else for(;x<v;)if(I[C++]=T[x++],C==this.blockSize){s(this,I),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var w=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=w&255,w/=256;for(this.u(T),T=Array(16),v=w=0;4>v;++v)for(var I=0;32>I;I+=8)T[w++]=this.g[v]>>>I&255;return T};function i(T,v){var w=l;return Object.prototype.hasOwnProperty.call(w,T)?w[T]:w[T]=v(T)}function o(T,v){this.h=v;for(var w=[],I=!0,C=T.length-1;0<=C;C--){var x=T[C]|0;I&&x==v||(w[C]=x,I=!1)}this.g=w}var l={};function u(T){return-128<=T&&128>T?i(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return b(c(-T));for(var v=[],w=1,I=0;T>=w;I++)v[I]=T/w|0,w*=4294967296;return new o(v,0)}function f(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return b(f(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(v,8)),I=m,C=0;C<T.length;C+=8){var x=Math.min(8,T.length-C),R=parseInt(T.substring(C,C+x),v);8>x?(x=c(Math.pow(v,x)),I=I.j(x).add(c(R))):(I=I.j(w),I=I.add(c(R)))}return I}var m=u(0),g=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-b(this).m();for(var T=0,v=1,w=0;w<this.g.length;w++){var I=this.i(w);T+=(0<=I?I:4294967296+I)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(P(this))return"-"+b(this).toString(T);for(var v=c(Math.pow(T,6)),w=this,I="";;){var C=N(w,v).g;w=A(w,C.j(v));var x=((0<w.g.length?w.g[0]:w.h)>>>0).toString(T);if(w=C,k(w))return x+I;for(;6>x.length;)x="0"+x;I=x+I}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function P(T){return T.h==-1}t.l=function(T){return T=A(this,T),P(T)?-1:k(T)?0:1};function b(T){for(var v=T.g.length,w=[],I=0;I<v;I++)w[I]=~T.g[I];return new o(w,~T.h).add(g)}t.abs=function(){return P(this)?b(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),w=[],I=0,C=0;C<=v;C++){var x=I+(this.i(C)&65535)+(T.i(C)&65535),R=(x>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);I=R>>>16,x&=65535,R&=65535,w[C]=R<<16|x}return new o(w,w[w.length-1]&-2147483648?-1:0)};function A(T,v){return T.add(b(v))}t.j=function(T){if(k(this)||k(T))return m;if(P(this))return P(T)?b(this).j(b(T)):b(b(this).j(T));if(P(T))return b(this.j(b(T)));if(0>this.l(S)&&0>T.l(S))return c(this.m()*T.m());for(var v=this.g.length+T.g.length,w=[],I=0;I<2*v;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var C=0;C<T.g.length;C++){var x=this.i(I)>>>16,R=this.i(I)&65535,ye=T.i(C)>>>16,Fe=T.i(C)&65535;w[2*I+2*C]+=R*Fe,y(w,2*I+2*C),w[2*I+2*C+1]+=x*Fe,y(w,2*I+2*C+1),w[2*I+2*C+1]+=R*ye,y(w,2*I+2*C+1),w[2*I+2*C+2]+=x*ye,y(w,2*I+2*C+2)}for(I=0;I<v;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=v;I<2*v;I++)w[I]=0;return new o(w,0)};function y(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function E(T,v){this.g=T,this.h=v}function N(T,v){if(k(v))throw Error("division by zero");if(k(T))return new E(m,m);if(P(T))return v=N(b(T),v),new E(b(v.g),b(v.h));if(P(v))return v=N(T,b(v)),new E(b(v.g),v.h);if(30<T.g.length){if(P(T)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var w=g,I=v;0>=I.l(T);)w=j(w),I=j(I);var C=M(w,1),x=M(I,1);for(I=M(I,2),w=M(w,2);!k(I);){var R=x.add(I);0>=R.l(T)&&(C=C.add(w),x=R),I=M(I,1),w=M(w,1)}return v=A(T,C.j(v)),new E(C,v)}for(C=m;0<=T.l(v);){for(w=Math.max(1,Math.floor(T.m()/v.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),x=c(w),R=x.j(v);P(R)||0<R.l(T);)w-=I,x=c(w),R=x.j(v);k(x)&&(x=g),C=C.add(x),T=A(T,R)}return new E(C,T)}t.A=function(T){return N(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)&T.i(I);return new o(w,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)|T.i(I);return new o(w,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)^T.i(I);return new o(w,this.h^T.h)};function j(T){for(var v=T.g.length+1,w=[],I=0;I<v;I++)w[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(w,T.h)}function M(T,v){var w=v>>5;v%=32;for(var I=T.g.length-w,C=[],x=0;x<I;x++)C[x]=0<v?T.i(x+w)>>>v|T.i(x+w+1)<<32-v:T.i(x+w);return new o(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,cT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Is=o}).apply(typeof Yy<"u"?Yy:typeof self<"u"?self:typeof window<"u"?window:{});var Sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dT,xo,hT,ql,Hh,fT,pT,mT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,p){return a==Array.prototype||a==Object.prototype||(a[d]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sl=="object"&&Sl];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in p))break e;p=p[D]}a=a[a.length-1],_=p[a],d=d(_),d!=_&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var p=0,_=!1,D={next:function(){if(!_&&p<a.length){var L=p++;return{value:d(L,a[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function f(a,d,p){return a.call.apply(a.bind,arguments)}function m(a,d,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),a.apply(d,D)}}return function(){return a.apply(d,arguments)}}function g(a,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function S(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function k(a,d){function p(){}p.prototype=d.prototype,a.aa=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,D,L){for(var z=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)z[Pe-2]=arguments[Pe];return d.prototype[D].apply(_,z)}}function P(a){const d=a.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=a[_];return p}return[]}function b(a,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const D=a.length||0,L=_.length||0;a.length=D+L;for(let z=0;z<L;z++)a[D+z]=_[z]}else a.push(_)}}class A{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function y(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var j=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function M(a,d,p){for(const _ in a)d.call(p,a[_],_,a)}function T(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function v(a){const d={};for(const p in a)d[p]=a[p];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,d){let p,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(p in _)a[p]=_[p];for(let L=0;L<w.length;L++)p=w[L],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function C(a){var d=1;a=a.split(":");const p=[];for(;0<d&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function x(a){l.setTimeout(()=>{throw a},0)}function R(){var a=Z;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class ye{constructor(){this.h=this.g=null}add(d,p){const _=Fe.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var Fe=new A(()=>new Bt,a=>a.reset());class Bt{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ut,$=!1,Z=new ye,ne=()=>{const a=l.Promise.resolve(void 0);ut=()=>{a.then(Te)}};var Te=()=>{for(var a;a=R();){try{a.h.call(a.g)}catch(p){x(p)}var d=Fe;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}$=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function V(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}V.prototype.h=function(){this.defaultPrevented=!0};var H=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,d),l.removeEventListener("test",p,d)}catch{}return a}();function G(a,d){if(V.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(j){e:{try{N(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:re[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&G.aa.h.call(this)}}k(G,V);var re={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var _e="closure_listenable_"+(1e6*Math.random()|0),ct=0;function Ue(a,d,p,_,D){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=D,this.key=++ct,this.da=this.fa=!1}function Ce(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Me(a){this.src=a,this.g={},this.h=0}Me.prototype.add=function(a,d,p,_,D){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var z=Xe(a,d,_,D);return-1<z?(d=a[z],p||(d.fa=!1)):(d=new Ue(d,this.src,L,!!_,D),d.fa=p,a.push(d)),d};function vt(a,d){var p=d.type;if(p in a.g){var _=a.g[p],D=Array.prototype.indexOf.call(_,d,void 0),L;(L=0<=D)&&Array.prototype.splice.call(_,D,1),L&&(Ce(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Xe(a,d,p,_){for(var D=0;D<a.length;++D){var L=a[D];if(!L.da&&L.listener==d&&L.capture==!!p&&L.ha==_)return D}return-1}var wt="closure_lm_"+(1e6*Math.random()|0),Et={};function Xt(a,d,p,_,D){if(Array.isArray(d)){for(var L=0;L<d.length;L++)Xt(a,d[L],p,_,D);return null}return p=Ie(p),a&&a[_e]?a.K(d,p,c(_)?!!_.capture:!1,D):Dn(a,d,p,!1,_,D)}function Dn(a,d,p,_,D,L){if(!d)throw Error("Invalid event type");var z=c(D)?!!D.capture:!!D,Pe=fe(a);if(Pe||(a[wt]=Pe=new Me(a)),p=Pe.add(d,p,_,z,L),p.proxy)return p;if(_=ls(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)H||(D=z),D===void 0&&(D=!1),a.addEventListener(d.toString(),_,D);else if(a.attachEvent)a.attachEvent(se(d.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function ls(){function a(p){return d.call(a.src,a.listener,p)}const d=ce;return a}function Q(a,d,p,_,D){if(Array.isArray(d))for(var L=0;L<d.length;L++)Q(a,d[L],p,_,D);else _=c(_)?!!_.capture:!!_,p=Ie(p),a&&a[_e]?(a=a.i,d=String(d).toString(),d in a.g&&(L=a.g[d],p=Xe(L,p,_,D),-1<p&&(Ce(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete a.g[d],a.h--)))):a&&(a=fe(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Xe(d,p,_,D)),(p=-1<a?d[a]:null)&&q(p))}function q(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[_e])vt(d.i,a);else{var p=a.type,_=a.proxy;d.removeEventListener?d.removeEventListener(p,_,a.capture):d.detachEvent?d.detachEvent(se(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=fe(d))?(vt(p,a),p.h==0&&(p.src=null,d[wt]=null)):Ce(a)}}}function se(a){return a in Et?Et[a]:Et[a]="on"+a}function ce(a,d){if(a.da)a=!0;else{d=new G(d,this);var p=a.listener,_=a.ha||a.src;a.fa&&q(a),a=p.call(_,d)}return a}function fe(a){return a=a[wt],a instanceof Me?a:null}var me="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ie(a){return typeof a=="function"?a:(a[me]||(a[me]=function(d){return a.handleEvent(d)}),a[me])}function X(){W.call(this),this.i=new Me(this),this.M=this,this.F=null}k(X,W),X.prototype[_e]=!0,X.prototype.removeEventListener=function(a,d,p,_){Q(this,a,d,p,_)};function ue(a,d){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=d.type||d,typeof d=="string")d=new V(d,a);else if(d instanceof V)d.target=d.target||a;else{var D=d;d=new V(_,a),I(d,D)}if(D=!0,p)for(var L=p.length-1;0<=L;L--){var z=d.g=p[L];D=te(z,_,!0,d)&&D}if(z=d.g=a,D=te(z,_,!0,d)&&D,D=te(z,_,!1,d)&&D,p)for(L=0;L<p.length;L++)z=d.g=p[L],D=te(z,_,!1,d)&&D}X.prototype.N=function(){if(X.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var p=a.g[d],_=0;_<p.length;_++)Ce(p[_]);delete a.g[d],a.h--}}this.F=null},X.prototype.K=function(a,d,p,_){return this.i.add(String(a),d,!1,p,_)},X.prototype.L=function(a,d,p,_){return this.i.add(String(a),d,!0,p,_)};function te(a,d,p,_){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,L=0;L<d.length;++L){var z=d[L];if(z&&!z.da&&z.capture==p){var Pe=z.listener,dt=z.ha||z.src;z.fa&&vt(a.i,z),D=Pe.call(dt,_)!==!1&&D}}return D&&!_.defaultPrevented}function Ae(a,d,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function Be(a){a.g=Ae(()=>{a.g=null,a.i&&(a.i=!1,Be(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Ys extends W{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Be(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Er(a){W.call(this),this.h=a,this.g={}}k(Er,W);var za=[];function wm(a){M(a.g,function(d,p){this.g.hasOwnProperty(p)&&q(d)},a),a.g={}}Er.prototype.N=function(){Er.aa.N.call(this),wm(this)},Er.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oc=l.JSON.stringify,E0=l.JSON.parse,T0=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Lc(){}Lc.prototype.h=null;function Em(a){return a.h||(a.h=a.i())}function Tm(){}var to={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mc(){V.call(this,"d")}k(Mc,V);function Vc(){V.call(this,"c")}k(Vc,V);var us={},Im=null;function Wa(){return Im=Im||new X}us.La="serverreachability";function Sm(a){V.call(this,us.La,a)}k(Sm,V);function no(a){const d=Wa();ue(d,new Sm(d))}us.STAT_EVENT="statevent";function Am(a,d){V.call(this,us.STAT_EVENT,a),this.stat=d}k(Am,V);function Ot(a){const d=Wa();ue(d,new Am(d,a))}us.Ma="timingevent";function Rm(a,d){V.call(this,us.Ma,a),this.size=d}k(Rm,V);function ro(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function so(){this.g=!0}so.prototype.xa=function(){this.g=!1};function I0(a,d,p,_,D,L){a.info(function(){if(a.g)if(L)for(var z="",Pe=L.split("&"),dt=0;dt<Pe.length;dt++){var we=Pe[dt].split("=");if(1<we.length){var Tt=we[0];we=we[1];var It=Tt.split("_");z=2<=It.length&&It[1]=="type"?z+(Tt+"="+we+"&"):z+(Tt+"=redacted&")}}else z=null;else z=L;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+d+`
`+p+`
`+z})}function S0(a,d,p,_,D,L,z){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+d+`
`+p+`
`+L+" "+z})}function Xs(a,d,p,_){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+R0(a,p)+(_?" "+_:"")})}function A0(a,d){a.info(function(){return"TIMEOUT: "+d})}so.prototype.info=function(){};function R0(a,d){if(!a.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var z=1;z<D.length;z++)D[z]=""}}}}return Oc(p)}catch{return d}}var Ha={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},km={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},jc;function qa(){}k(qa,Lc),qa.prototype.g=function(){return new XMLHttpRequest},qa.prototype.i=function(){return{}},jc=new qa;function Tr(a,d,p,_){this.j=a,this.i=d,this.l=p,this.R=_||1,this.U=new Er(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cm}function Cm(){this.i=null,this.g="",this.h=!1}var Pm={},Fc={};function Uc(a,d,p){a.L=1,a.v=Ya(Qn(d)),a.m=p,a.P=!0,Nm(a,null)}function Nm(a,d){a.F=Date.now(),Ka(a),a.A=Qn(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Wm(p.i,"t",_),a.C=0,p=a.j.J,a.h=new Cm,a.g=lg(a.j,p?d:null,!a.m),0<a.O&&(a.M=new Ys(g(a.Y,a,a.g),a.O)),d=a.U,p=a.g,_=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(za[0]=D.toString()),D=za);for(var L=0;L<D.length;L++){var z=Xt(p,D[L],_||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),no(),I0(a.i,a.u,a.A,a.l,a.R,a.m)}Tr.prototype.ca=function(a){a=a.target;const d=this.M;d&&Yn(a)==3?d.j():this.Y(a)},Tr.prototype.Y=function(a){try{if(a==this.g)e:{const It=Yn(this.g);var d=this.g.Ba();const ei=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||Xm(this.g)))){this.J||It!=4||d==7||(d==8||0>=ei?no(3):no(2)),Bc(this);var p=this.g.Z();this.X=p;t:if(xm(this)){var _=Xm(this.g);a="";var D=_.length,L=Yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cs(this),io(this);var z="";break t}this.h.i=new l.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,a+=this.h.i.decode(_[d],{stream:!(L&&d==D-1)});_.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,S0(this.i,this.u,this.A,this.l,this.R,It,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,dt=this.g;if((Pe=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(Pe)){var we=Pe;break t}}we=null}if(p=we)Xs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$c(this,p);else{this.o=!1,this.s=3,Ot(12),cs(this),io(this);break e}}if(this.P){p=!0;let Tn;for(;!this.J&&this.C<z.length;)if(Tn=k0(this,z),Tn==Fc){It==4&&(this.s=4,Ot(14),p=!1),Xs(this.i,this.l,null,"[Incomplete Response]");break}else if(Tn==Pm){this.s=4,Ot(15),Xs(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else Xs(this.i,this.l,Tn,null),$c(this,Tn);if(xm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||z.length!=0||this.h.h||(this.s=1,Ot(16),p=!1),this.o=this.o&&p,!p)Xs(this.i,this.l,z,"[Invalid Chunked Response]"),cs(this),io(this);else if(0<z.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Gc(Tt),Tt.M=!0,Ot(11))}}else Xs(this.i,this.l,z,null),$c(this,z);It==4&&cs(this),this.o&&!this.J&&(It==4?sg(this.j,this):(this.o=!1,Ka(this)))}else W0(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),cs(this),io(this)}}}catch{}finally{}};function xm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function k0(a,d){var p=a.C,_=d.indexOf(`
`,p);return _==-1?Fc:(p=Number(d.substring(p,_)),isNaN(p)?Pm:(_+=1,_+p>d.length?Fc:(d=d.slice(_,_+p),a.C=_+p,d)))}Tr.prototype.cancel=function(){this.J=!0,cs(this)};function Ka(a){a.S=Date.now()+a.I,bm(a,a.I)}function bm(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ro(g(a.ba,a),d)}function Bc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Tr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(A0(this.i,this.A),this.L!=2&&(no(),Ot(17)),cs(this),this.s=2,io(this)):bm(this,this.S-a)};function io(a){a.j.G==0||a.J||sg(a.j,a)}function cs(a){Bc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,wm(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function $c(a,d){try{var p=a.j;if(p.G!=0&&(p.g==a||zc(p.h,a))){if(!a.K&&zc(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)nl(p),el(p);else break e;Kc(p),Ot(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=ro(g(p.Za,p),6e3));if(1>=Lm(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else hs(p,11)}else if((a.K||p.g==a)&&nl(p),!y(d))for(D=p.Da.g.parse(d),d=0;d<D.length;d++){let we=D[d];if(p.T=we[0],we=we[1],p.G==2)if(we[0]=="c"){p.K=we[1],p.ia=we[2];const Tt=we[3];Tt!=null&&(p.la=Tt,p.j.info("VER="+p.la));const It=we[4];It!=null&&(p.Aa=It,p.j.info("SVER="+p.Aa));const ei=we[5];ei!=null&&typeof ei=="number"&&0<ei&&(_=1.5*ei,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Tn=a.g;if(Tn){const sl=Tn.g?Tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(sl){var L=_.h;L.g||sl.indexOf("spdy")==-1&&sl.indexOf("quic")==-1&&sl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Wc(L,L.h),L.h=null))}if(_.D){const Qc=Tn.g?Tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Qc&&(_.ya=Qc,be(_.I,_.D,Qc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var z=a;if(_.qa=ag(_,_.J?_.ia:null,_.W),z.K){Mm(_.h,z);var Pe=z,dt=_.L;dt&&(Pe.I=dt),Pe.B&&(Bc(Pe),Ka(Pe)),_.g=z}else ng(_);0<p.i.length&&tl(p)}else we[0]!="stop"&&we[0]!="close"||hs(p,7);else p.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?hs(p,7):qc(p):we[0]!="noop"&&p.l&&p.l.ta(we),p.v=0)}}no(4)}catch{}}var C0=class{constructor(a,d){this.g=a,this.map=d}};function Dm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Om(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Lm(a){return a.h?1:a.g?a.g.size:0}function zc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Wc(a,d){a.g?a.g.add(d):a.h=d}function Mm(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Dm.prototype.cancel=function(){if(this.i=Vm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Vm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.D);return d}return P(a.i)}function P0(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],p=a.length,_=0;_<p;_++)d.push(a[_]);return d}d=[],p=0;for(_ in a)d[p++]=a[_];return d}function N0(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var p=0;p<a;p++)d.push(p);return d}d=[],p=0;for(const _ in a)d[p++]=_;return d}}}function jm(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var p=N0(a),_=P0(a),D=_.length,L=0;L<D;L++)d.call(void 0,_[L],p&&p[L],a)}var Fm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function x0(a,d){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),D=null;if(0<=_){var L=a[p].substring(0,_);D=a[p].substring(_+1)}else L=a[p];d(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function ds(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ds){this.h=a.h,Ga(this,a.j),this.o=a.o,this.g=a.g,Qa(this,a.s),this.l=a.l;var d=a.i,p=new lo;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Um(this,p),this.m=a.m}else a&&(d=String(a).match(Fm))?(this.h=!1,Ga(this,d[1]||"",!0),this.o=oo(d[2]||""),this.g=oo(d[3]||"",!0),Qa(this,d[4]),this.l=oo(d[5]||"",!0),Um(this,d[6]||"",!0),this.m=oo(d[7]||"")):(this.h=!1,this.i=new lo(null,this.h))}ds.prototype.toString=function(){var a=[],d=this.j;d&&a.push(ao(d,Bm,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(ao(d,Bm,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(ao(p,p.charAt(0)=="/"?O0:D0,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",ao(p,M0)),a.join("")};function Qn(a){return new ds(a)}function Ga(a,d,p){a.j=p?oo(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Qa(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Um(a,d,p){d instanceof lo?(a.i=d,V0(a.i,a.h)):(p||(d=ao(d,L0)),a.i=new lo(d,a.h))}function be(a,d,p){a.i.set(d,p)}function Ya(a){return be(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function oo(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ao(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,b0),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function b0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Bm=/[#\/\?@]/g,D0=/[#\?:]/g,O0=/[#\?]/g,L0=/[#\?@]/g,M0=/#/g;function lo(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Ir(a){a.g||(a.g=new Map,a.h=0,a.i&&x0(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=lo.prototype,t.add=function(a,d){Ir(this),this.i=null,a=Js(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function $m(a,d){Ir(a),d=Js(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function zm(a,d){return Ir(a),d=Js(a,d),a.g.has(d)}t.forEach=function(a,d){Ir(this),this.g.forEach(function(p,_){p.forEach(function(D){a.call(d,D,_,this)},this)},this)},t.na=function(){Ir(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const D=a[_];for(let L=0;L<D.length;L++)p.push(d[_])}return p},t.V=function(a){Ir(this);let d=[];if(typeof a=="string")zm(this,a)&&(d=d.concat(this.g.get(Js(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)d=d.concat(a[p])}return d},t.set=function(a,d){return Ir(this),this.i=null,a=Js(this,a),zm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Wm(a,d,p){$m(a,d),0<p.length&&(a.i=null,a.g.set(Js(a,d),P(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const L=encodeURIComponent(String(_)),z=this.V(_);for(_=0;_<z.length;_++){var D=L;z[_]!==""&&(D+="="+encodeURIComponent(String(z[_]))),a.push(D)}}return this.i=a.join("&")};function Js(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function V0(a,d){d&&!a.j&&(Ir(a),a.i=null,a.g.forEach(function(p,_){var D=_.toLowerCase();_!=D&&($m(this,_),Wm(this,D,p))},a)),a.j=d}function j0(a,d){const p=new so;if(l.Image){const _=new Image;_.onload=S(Sr,p,"TestLoadImage: loaded",!0,d,_),_.onerror=S(Sr,p,"TestLoadImage: error",!1,d,_),_.onabort=S(Sr,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=S(Sr,p,"TestLoadImage: timeout",!1,d,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else d(!1)}function F0(a,d){const p=new so,_=new AbortController,D=setTimeout(()=>{_.abort(),Sr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:_.signal}).then(L=>{clearTimeout(D),L.ok?Sr(p,"TestPingServer: ok",!0,d):Sr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),Sr(p,"TestPingServer: error",!1,d)})}function Sr(a,d,p,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(p)}catch{}}function U0(){this.g=new T0}function B0(a,d,p){const _=p||"";try{jm(a,function(D,L){let z=D;c(D)&&(z=Oc(D)),d.push(_+L+"="+encodeURIComponent(z))})}catch(D){throw d.push(_+"type="+encodeURIComponent("_badmap")),D}}function Xa(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Xa,Lc),Xa.prototype.g=function(){return new Ja(this.l,this.j)},Xa.prototype.i=function(a){return function(){return a}}({});function Ja(a,d){X.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Ja,X),t=Ja.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,co(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,uo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,co(this)),this.g&&(this.readyState=3,co(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?uo(this):co(this),this.readyState==3&&Hm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,uo(this))},t.Qa=function(a){this.g&&(this.response=a,uo(this))},t.ga=function(){this.g&&uo(this)};function uo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,co(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function co(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function qm(a){let d="";return M(a,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function Hc(a,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=qm(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):be(a,d,p))}function qe(a){X.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(qe,X);var $0=/^https?$/i,z0=["POST","PUT"];t=qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():jc.g(),this.v=this.o?Em(this.o):Em(jc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(L){Km(this,L);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)p.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())p.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(z0,d,void 0))||_||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,z]of p)this.g.setRequestHeader(L,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ym(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){Km(this,L)}};function Km(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Gm(a),Za(a)}function Gm(a){a.A||(a.A=!0,ue(a,"complete"),ue(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ue(this,"complete"),ue(this,"abort"),Za(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Za(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Qm(this):this.bb())},t.bb=function(){Qm(this)};function Qm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Yn(a)!=4||a.Z()!=2)){if(a.u&&Yn(a)==4)Ae(a.Ea,0,a);else if(ue(a,"readystatechange"),Yn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=z===0){var D=String(a.D).match(Fm)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),_=!$0.test(D?D.toLowerCase():"")}p=_}if(p)ue(a,"complete"),ue(a,"success");else{a.m=6;try{var L=2<Yn(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",Gm(a)}}finally{Za(a)}}}}function Za(a,d){if(a.g){Ym(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||ue(a,"ready");try{p.onreadystatechange=_}catch{}}}function Ym(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Yn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Yn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),E0(d)}};function Xm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function W0(a){const d={};a=(a.g&&2<=Yn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(y(a[_]))continue;var p=C(a[_]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=d[D]||[];d[D]=L,L.push(p)}T(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ho(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function Jm(a){this.Aa=0,this.i=[],this.j=new so,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ho("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ho("baseRetryDelayMs",5e3,a),this.cb=ho("retryDelaySeedMs",1e4,a),this.Wa=ho("forwardChannelMaxRetries",2,a),this.wa=ho("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Dm(a&&a.concurrentRequestLimit),this.Da=new U0,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Jm.prototype,t.la=8,t.G=1,t.connect=function(a,d,p,_){Ot(0),this.W=a,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=ag(this,null,this.W),tl(this)};function qc(a){if(Zm(a),a.G==3){var d=a.U++,p=Qn(a.I);if(be(p,"SID",a.K),be(p,"RID",d),be(p,"TYPE","terminate"),fo(a,p),d=new Tr(a,a.j,d),d.L=2,d.v=Ya(Qn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=d.v,p=!0),p||(d.g=lg(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ka(d)}og(a)}function el(a){a.g&&(Gc(a),a.g.cancel(),a.g=null)}function Zm(a){el(a),a.u&&(l.clearTimeout(a.u),a.u=null),nl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function tl(a){if(!Om(a.h)&&!a.s){a.s=!0;var d=a.Ga;ut||ne(),$||(ut(),$=!0),Z.add(d,a),a.B=0}}function H0(a,d){return Lm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ro(g(a.Ga,a,d),ig(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new Tr(this,this.j,a);let L=this.o;if(this.S&&(L?(L=v(L),I(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=tg(this,D,d),p=Qn(this.I),be(p,"RID",a),be(p,"CVER",22),this.D&&be(p,"X-HTTP-Session-Id",this.D),fo(this,p),L&&(this.O?d="headers="+encodeURIComponent(String(qm(L)))+"&"+d:this.m&&Hc(p,this.m,L)),Wc(this.h,D),this.Ua&&be(p,"TYPE","init"),this.P?(be(p,"$req",d),be(p,"SID","null"),D.T=!0,Uc(D,p,null)):Uc(D,p,d),this.G=2}}else this.G==3&&(a?eg(this,a):this.i.length==0||Om(this.h)||eg(this))};function eg(a,d){var p;d?p=d.l:p=a.U++;const _=Qn(a.I);be(_,"SID",a.K),be(_,"RID",p),be(_,"AID",a.T),fo(a,_),a.m&&a.o&&Hc(_,a.m,a.o),p=new Tr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),d&&(a.i=d.D.concat(a.i)),d=tg(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Wc(a.h,p),Uc(p,_,d)}function fo(a,d){a.H&&M(a.H,function(p,_){be(d,_,p)}),a.l&&jm({},function(p,_){be(d,_,p)})}function tg(a,d,p){p=Math.min(a.i.length,p);var _=a.l?g(a.l.Na,a.l,a):null;e:{var D=a.i;let L=-1;for(;;){const z=["count="+p];L==-1?0<p?(L=D[0].g,z.push("ofs="+L)):L=0:z.push("ofs="+L);let Pe=!0;for(let dt=0;dt<p;dt++){let we=D[dt].g;const Tt=D[dt].map;if(we-=L,0>we)L=Math.max(0,D[dt].g-100),Pe=!1;else try{B0(Tt,z,"req"+we+"_")}catch{_&&_(Tt)}}if(Pe){_=z.join("&");break e}}}return a=a.i.splice(0,p),d.D=a,_}function ng(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;ut||ne(),$||(ut(),$=!0),Z.add(d,a),a.v=0}}function Kc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ro(g(a.Fa,a),ig(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,rg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ro(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),el(this),rg(this))};function Gc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function rg(a){a.g=new Tr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Qn(a.qa);be(d,"RID","rpc"),be(d,"SID",a.K),be(d,"AID",a.T),be(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&be(d,"TO",a.ja),be(d,"TYPE","xmlhttp"),fo(a,d),a.m&&a.o&&Hc(d,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Ya(Qn(d)),p.m=null,p.P=!0,Nm(p,a)}t.Za=function(){this.C!=null&&(this.C=null,el(this),Kc(this),Ot(19))};function nl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function sg(a,d){var p=null;if(a.g==d){nl(a),Gc(a),a.g=null;var _=2}else if(zc(a.h,d))p=d.D,Mm(a.h,d),_=1;else return;if(a.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var D=a.B;_=Wa(),ue(_,new Rm(_,p)),tl(a)}else ng(a);else if(D=d.s,D==3||D==0&&0<d.X||!(_==1&&H0(a,d)||_==2&&Kc(a)))switch(p&&0<p.length&&(d=a.h,d.i=d.i.concat(p)),D){case 1:hs(a,5);break;case 4:hs(a,10);break;case 3:hs(a,6);break;default:hs(a,2)}}}function ig(a,d){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*d}function hs(a,d){if(a.j.info("Error code "+d),d==2){var p=g(a.fb,a),_=a.Xa;const D=!_;_=new ds(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ga(_,"https"),Ya(_),D?j0(_.toString(),p):F0(_.toString(),p)}else Ot(2);a.G=0,a.l&&a.l.sa(d),og(a),Zm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function og(a){if(a.G=0,a.ka=[],a.l){const d=Vm(a.h);(d.length!=0||a.i.length!=0)&&(b(a.ka,d),b(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function ag(a,d,p){var _=p instanceof ds?Qn(p):new ds(p);if(_.g!="")d&&(_.g=d+"."+_.g),Qa(_,_.s);else{var D=l.location;_=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var L=new ds(null);_&&Ga(L,_),d&&(L.g=d),D&&Qa(L,D),p&&(L.l=p),_=L}return p=a.D,d=a.ya,p&&d&&be(_,p,d),be(_,"VER",a.la),fo(a,_),_}function lg(a,d,p){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new qe(new Xa({eb:p})):new qe(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ug(){}t=ug.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function rl(){}rl.prototype.g=function(a,d){return new Jt(a,d)};function Jt(a,d){X.call(this),this.g=new Jm(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!y(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!y(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Zs(this)}k(Jt,X),Jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){qc(this.g)},Jt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Oc(a),a=p);d.i.push(new C0(d.Ya++,a)),d.G==3&&tl(d)},Jt.prototype.N=function(){this.g.l=null,delete this.j,qc(this.g),delete this.g,Jt.aa.N.call(this)};function cg(a){Mc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}k(cg,Mc);function dg(){Vc.call(this),this.status=1}k(dg,Vc);function Zs(a){this.g=a}k(Zs,ug),Zs.prototype.ua=function(){ue(this.g,"a")},Zs.prototype.ta=function(a){ue(this.g,new cg(a))},Zs.prototype.sa=function(a){ue(this.g,new dg)},Zs.prototype.ra=function(){ue(this.g,"b")},rl.prototype.createWebChannel=rl.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,mT=function(){return new rl},pT=function(){return Wa()},fT=us,Hh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ha.NO_ERROR=0,Ha.TIMEOUT=8,Ha.HTTP_ERROR=6,ql=Ha,km.COMPLETE="complete",hT=km,Tm.EventType=to,to.OPEN="a",to.CLOSE="b",to.ERROR="c",to.MESSAGE="d",X.prototype.listen=X.prototype.K,xo=Tm,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,dT=qe}).apply(typeof Sl<"u"?Sl:typeof self<"u"?self:typeof window<"u"?window:{});const Xy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}kt.UNAUTHENTICATED=new kt(null),kt.GOOGLE_CREDENTIALS=new kt("google-credentials-uid"),kt.FIRST_PARTY=new kt("first-party-uid"),kt.MOCK_USER=new kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new ip("@firebase/firestore");function To(){return Ds.logLevel}function J(t,...e){if(Ds.logLevel<=pe.DEBUG){const n=e.map(_p);Ds.debug(`Firestore (${Xi}): ${t}`,...n)}}function mr(t,...e){if(Ds.logLevel<=pe.ERROR){const n=e.map(_p);Ds.error(`Firestore (${Xi}): ${t}`,...n)}}function Vi(t,...e){if(Ds.logLevel<=pe.WARN){const n=e.map(_p);Ds.warn(`Firestore (${Xi}): ${t}`,...n)}}function _p(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${Xi}) INTERNAL ASSERTION FAILED: `+t;throw mr(e),new Error(e)}function ke(t,e){t||oe()}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(kt.UNAUTHENTICATED))}shutdown(){}}class fN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pN{constructor(e){this.t=e,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ke(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new lr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new lr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new lr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new gT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new kt(e)}}class mN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=kt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new mN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _N{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ke(this.o===void 0);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.R=n.token,new yN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=vN(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function ji(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new xe(0,0))}static max(){return new ae(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(),r===void 0?r=e.length-n:r>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ma.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ma?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends ma{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const wN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends ma{construct(e,n,r){return new pt(e,n,r)}static isValidIdentifier(e){return wN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new K(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new K(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Oe.fromString(e))}static fromName(e){return new ee(Oe.fromString(e).popFirst(5))}static empty(){return new ee(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Oe(e.slice()))}}function EN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new Zr(s,ee.empty(),e)}function TN(t){return new Zr(t.readTime,t.key,-1)}class Zr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zr(ae.min(),ee.empty(),-1)}static max(){return new Zr(ae.max(),ee.empty(),-1)}}function IN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ma(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==SN)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function RN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Va(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}vp.oe=-1;function ac(t){return t==null}function Cu(t){return t===0&&1/t==-1/0}function kN(t){return typeof t=="number"&&Number.isInteger(t)&&!Cu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _T(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Al(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Al(this.root,e,this.comparator,!1)}getReverseIterator(){return new Al(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Al(this.root,e,this.comparator,!0)}}class Al{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ft.RED,this.left=s??ft.EMPTY,this.right=i??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ft(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zy(this.data.getIterator())}getIteratorFrom(e){return new Zy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class Zy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new nn([])}unionWith(e){let n=new gt(pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ji(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new vT("Invalid base64 string: "+i):i}}(e);return new _t(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const CN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function es(t){if(ke(!!t),typeof t=="string"){let e=0;const n=CN.exec(t);if(ke(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Os(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ep(t){const e=t.mapValue.fields.__previous_value__;return wp(e)?Ep(e):e}function ga(t){const e=es(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n,r,s,i,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class ya{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ya("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ya&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl={mapValue:{}};function Ls(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wp(t)?4:xN(t)?9007199254740991:NN(t)?10:11:oe()}function Hn(t,e){if(t===e)return!0;const n=Ls(t);if(n!==Ls(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ga(t).isEqual(ga(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=es(s.timestampValue),l=es(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Os(s.bytesValue).isEqual(Os(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Je(s.geoPointValue.latitude)===Je(i.geoPointValue.latitude)&&Je(s.geoPointValue.longitude)===Je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Je(s.integerValue)===Je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Je(s.doubleValue),l=Je(i.doubleValue);return o===l?Cu(o)===Cu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ji(t.arrayValue.values||[],e.arrayValue.values||[],Hn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Jy(o)!==Jy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Hn(o[u],l[u])))return!1;return!0}(t,e);default:return oe()}}function _a(t,e){return(t.values||[]).find(n=>Hn(n,e))!==void 0}function Fi(t,e){if(t===e)return 0;const n=Ls(t),r=Ls(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Je(i.integerValue||i.doubleValue),u=Je(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return e_(t.timestampValue,e.timestampValue);case 4:return e_(ga(t),ga(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Os(i),u=Os(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=Ee(l[c],u[c]);if(f!==0)return f}return Ee(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ee(Je(i.latitude),Je(o.latitude));return l!==0?l:Ee(Je(i.longitude),Je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return t_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,c,f;const m=i.fields||{},g=o.fields||{},S=(l=m.value)===null||l===void 0?void 0:l.arrayValue,k=(u=g.value)===null||u===void 0?void 0:u.arrayValue,P=Ee(((c=S==null?void 0:S.values)===null||c===void 0?void 0:c.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:t_(S,k)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Rl.mapValue&&o===Rl.mapValue)return 0;if(i===Rl.mapValue)return 1;if(o===Rl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=Ee(u[m],f[m]);if(g!==0)return g;const S=Fi(l[u[m]],c[f[m]]);if(S!==0)return S}return Ee(u.length,f.length)}(t.mapValue,e.mapValue);default:throw oe()}}function e_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=es(t),r=es(e),s=Ee(n.seconds,r.seconds);return s!==0?s:Ee(n.nanos,r.nanos)}function t_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Fi(n[s],r[s]);if(i)return i}return Ee(n.length,r.length)}function Ui(t){return qh(t)}function qh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=es(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Os(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=qh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${qh(n.fields[o])}`;return s+"}"}(t.mapValue):oe()}function n_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kh(t){return!!t&&"integerValue"in t}function Tp(t){return!!t&&"arrayValue"in t}function r_(t){return!!t&&"nullValue"in t}function s_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Kl(t){return!!t&&"mapValue"in t}function NN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ho(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ho(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ho(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Kl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ho(n)}setAll(e){let n=pt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ho(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Kl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Kl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Hs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new zt(Ho(this.value))}}function wT(t){const e=[];return Hs(t.fields,(n,r)=>{const s=new pt([n]);if(Kl(r)){const i=wT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Pt(e,0,ae.min(),ae.min(),ae.min(),zt.empty(),0)}static newFoundDocument(e,n,r,s){return new Pt(e,1,n,ae.min(),r,s,0)}static newNoDocument(e,n){return new Pt(e,2,n,ae.min(),ae.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new Pt(e,3,n,ae.min(),ae.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n){this.position=e,this.inclusive=n}}function i_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),n.key):r=Fi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function o_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n="asc"){this.field=e,this.dir=n}}function bN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{}class rt extends ET{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ON(e,n,r):n==="array-contains"?new VN(e,r):n==="in"?new jN(e,r):n==="not-in"?new FN(e,r):n==="array-contains-any"?new UN(e,r):new rt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new LN(e,r):new MN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fi(n,this.value)):n!==null&&Ls(this.value)===Ls(n)&&this.matchesComparison(Fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xn extends ET{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new xn(e,n)}matches(e){return TT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function TT(t){return t.op==="and"}function IT(t){return DN(t)&&TT(t)}function DN(t){for(const e of t.filters)if(e instanceof xn)return!1;return!0}function Gh(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+Ui(t.value);if(IT(t))return t.filters.map(e=>Gh(e)).join(",");{const e=t.filters.map(n=>Gh(n)).join(",");return`${t.op}(${e})`}}function ST(t,e){return t instanceof rt?function(r,s){return s instanceof rt&&r.op===s.op&&r.field.isEqual(s.field)&&Hn(r.value,s.value)}(t,e):t instanceof xn?function(r,s){return s instanceof xn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&ST(o,s.filters[l]),!0):!1}(t,e):void oe()}function AT(t){return t instanceof rt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ui(n.value)}`}(t):t instanceof xn?function(n){return n.op.toString()+" {"+n.getFilters().map(AT).join(" ,")+"}"}(t):"Filter"}class ON extends rt{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class LN extends rt{constructor(e,n){super(e,"in",n),this.keys=RT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class MN extends rt{constructor(e,n){super(e,"not-in",n),this.keys=RT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function RT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ee.fromName(r.referenceValue))}class VN extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tp(n)&&_a(n.arrayValue,this.value)}}class jN extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_a(this.value.arrayValue,n)}}class FN extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(_a(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_a(this.value.arrayValue,n)}}class UN extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_a(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function a_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new BN(t,e,n,r,s,i,o)}function Ip(t){const e=le(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ac(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ui(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ui(r)).join(",")),e.ue=n}return e.ue}function Sp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ST(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!o_(t.startAt,e.startAt)&&o_(t.endAt,e.endAt)}function Qh(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function $N(t,e,n,r,s,i,o,l){return new Ji(t,e,n,r,s,i,o,l)}function lc(t){return new Ji(t)}function l_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kT(t){return t.collectionGroup!==null}function qo(t){const e=le(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new gt(pt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new va(i,r))}),n.has(pt.keyField().canonicalString())||e.ce.push(new va(pt.keyField(),r))}return e.ce}function zn(t){const e=le(t);return e.le||(e.le=zN(e,qo(t))),e.le}function zN(t,e){if(t.limitType==="F")return a_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new va(s.field,i)});const n=t.endAt?new Pu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Pu(t.startAt.position,t.startAt.inclusive):null;return a_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yh(t,e){const n=t.filters.concat([e]);return new Ji(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Nu(t,e,n){return new Ji(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function uc(t,e){return Sp(zn(t),zn(e))&&t.limitType===e.limitType}function CT(t){return`${Ip(zn(t))}|lt:${t.limitType}`}function ni(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>AT(s)).join(", ")}]`),ac(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ui(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ui(s)).join(",")),`Target(${r})`}(zn(t))}; limitType=${t.limitType})`}function cc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ee.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of qo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=i_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,qo(r),s)||r.endAt&&!function(o,l,u){const c=i_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,qo(r),s))}(t,e)}function WN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function PT(t){return(e,n)=>{let r=!1;for(const s of qo(t)){const i=HN(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function HN(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?Fi(u,c):oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Hs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return _T(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=new He(ee.comparator);function gr(){return qN}const NT=new He(ee.comparator);function bo(...t){let e=NT;for(const n of t)e=e.insert(n.key,n);return e}function xT(t){let e=NT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vs(){return Ko()}function bT(){return Ko()}function Ko(){return new Zi(t=>t.toString(),(t,e)=>t.isEqual(e))}const KN=new He(ee.comparator),GN=new gt(ee.comparator);function he(...t){let e=GN;for(const n of t)e=e.add(n);return e}const QN=new gt(Ee);function YN(){return QN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cu(e)?"-0":e}}function DT(t){return{integerValue:""+t}}function OT(t,e){return kN(e)?DT(e):Ap(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this._=void 0}}function XN(t,e,n){return t instanceof wa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&wp(i)&&(i=Ep(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Bi?MT(t,e):t instanceof $i?VT(t,e):function(s,i){const o=LT(s,i),l=u_(o)+u_(s.Pe);return Kh(o)&&Kh(s.Pe)?DT(l):Ap(s.serializer,l)}(t,e)}function JN(t,e,n){return t instanceof Bi?MT(t,e):t instanceof $i?VT(t,e):n}function LT(t,e){return t instanceof Ea?function(r){return Kh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class wa extends dc{}class Bi extends dc{constructor(e){super(),this.elements=e}}function MT(t,e){const n=jT(e);for(const r of t.elements)n.some(s=>Hn(s,r))||n.push(r);return{arrayValue:{values:n}}}class $i extends dc{constructor(e){super(),this.elements=e}}function VT(t,e){let n=jT(e);for(const r of t.elements)n=n.filter(s=>!Hn(s,r));return{arrayValue:{values:n}}}class Ea extends dc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function u_(t){return Je(t.integerValue||t.doubleValue)}function jT(t){return Tp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n){this.field=e,this.transform=n}}function ZN(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Bi&&s instanceof Bi||r instanceof $i&&s instanceof $i?ji(r.elements,s.elements,Hn):r instanceof Ea&&s instanceof Ea?Hn(r.Pe,s.Pe):r instanceof wa&&s instanceof wa}(t.transform,e.transform)}class e1{constructor(e,n){this.version=e,this.transformResults=n}}class yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yn}static exists(e){return new yn(void 0,e)}static updateTime(e){return new yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fc{}function FT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Rp(t.key,yn.none()):new ja(t.key,t.data,yn.none());{const n=t.data,r=zt.empty();let s=new gt(pt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new as(t.key,r,new nn(s.toArray()),yn.none())}}function t1(t,e,n){t instanceof ja?function(s,i,o){const l=s.value.clone(),u=d_(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof as?function(s,i,o){if(!Gl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=d_(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(UT(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Go(t,e,n,r){return t instanceof ja?function(i,o,l,u){if(!Gl(i.precondition,o))return l;const c=i.value.clone(),f=h_(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof as?function(i,o,l,u){if(!Gl(i.precondition,o))return l;const c=h_(i.fieldTransforms,u,o),f=o.data;return f.setAll(UT(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return Gl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function n1(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=LT(r.transform,s||null);i!=null&&(n===null&&(n=zt.empty()),n.set(r.field,i))}return n||null}function c_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ji(r,s,(i,o)=>ZN(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ja extends fc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class as extends fc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function UT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function d_(t,e,n){const r=new Map;ke(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,JN(o,l,n[s]))}return r}function h_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,XN(i,o,e))}return r}class Rp extends fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class r1 extends fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&t1(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Go(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Go(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=FT(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&ji(this.mutations,e.mutations,(n,r)=>c_(n,r))&&ji(this.baseMutations,e.baseMutations,(n,r)=>c_(n,r))}}class kp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ke(e.mutations.length===r.length);let s=function(){return KN}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new kp(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,ge;function a1(t){switch(t){default:return oe();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function BT(t){if(t===void 0)return mr("GRPC error has no .code"),F.UNKNOWN;switch(t){case tt.OK:return F.OK;case tt.CANCELLED:return F.CANCELLED;case tt.UNKNOWN:return F.UNKNOWN;case tt.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case tt.INTERNAL:return F.INTERNAL;case tt.UNAVAILABLE:return F.UNAVAILABLE;case tt.UNAUTHENTICATED:return F.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case tt.NOT_FOUND:return F.NOT_FOUND;case tt.ALREADY_EXISTS:return F.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return F.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case tt.ABORTED:return F.ABORTED;case tt.OUT_OF_RANGE:return F.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return F.UNIMPLEMENTED;case tt.DATA_LOSS:return F.DATA_LOSS;default:return oe()}}(ge=tt||(tt={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=new Is([4294967295,4294967295],0);function f_(t){const e=l1().encode(t),n=new cT;return n.update(e),new Uint8Array(n.digest())}function p_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Is([n,r],0),new Is([s,i],0)]}class Cp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Do(`Invalid padding: ${n}`);if(r<0)throw new Do(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Do(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Do(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Is.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Is.fromNumber(r)));return s.compare(u1)===1&&(s=new Is([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=f_(e),[r,s]=p_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Cp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=f_(e),[r,s]=p_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Do extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Fa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new pc(ae.min(),s,new He(Ee),gr(),he())}}class Fa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fa(r,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class $T{constructor(e,n){this.targetId=e,this.me=n}}class zT{constructor(e,n,r=_t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class m_{constructor(){this.fe=0,this.ge=y_(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=he(),n=he(),r=he();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:oe()}}),new Fa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=y_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class c1{constructor(e){this.Le=e,this.Be=new Map,this.ke=gr(),this.qe=g_(),this.Qe=new He(Ee)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Qh(i))if(r===0){const o=new ee(i.path);this.Ue(n,o,Pt.newNoDocument(o,ae.min()))}else ke(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Os(r).toUint8Array()}catch(u){if(u instanceof vT)return Vi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Cp(o,s,i)}catch(u){return Vi(u instanceof Do?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Qh(l.target)){const u=new ee(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Pt.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=he();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new pc(e,n,this.Qe,this.ke,r);return this.ke=gr(),this.qe=g_(),this.Qe=new He(Ee),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new m_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new gt(Ee),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new m_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function g_(){return new He(ee.comparator)}function y_(){return new He(ee.comparator)}const d1={asc:"ASCENDING",desc:"DESCENDING"},h1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},f1={and:"AND",or:"OR"};class p1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xh(t,e){return t.useProto3Json||ac(e)?e:{value:e}}function xu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function WT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function m1(t,e){return xu(t,e.toTimestamp())}function Wn(t){return ke(!!t),ae.fromTimestamp(function(n){const r=es(n);return new xe(r.seconds,r.nanos)}(t))}function Pp(t,e){return Jh(t,e).canonicalString()}function Jh(t,e){const n=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function HT(t){const e=Oe.fromString(t);return ke(YT(e)),e}function Zh(t,e){return Pp(t.databaseId,e.path)}function Nd(t,e){const n=HT(e);if(n.get(1)!==t.databaseId.projectId)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(KT(n))}function qT(t,e){return Pp(t.databaseId,e)}function g1(t){const e=HT(t);return e.length===4?Oe.emptyPath():KT(e)}function ef(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function KT(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function __(t,e,n){return{name:Zh(t,e),fields:n.value.mapValue.fields}}function y1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(ke(f===void 0||typeof f=="string"),_t.fromBase64String(f||"")):(ke(f===void 0||f instanceof Buffer||f instanceof Uint8Array),_t.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?F.UNKNOWN:BT(c.code);return new K(f,c.message||"")}(o);n=new zT(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nd(t,r.document.name),i=Wn(r.document.updateTime),o=r.document.createTime?Wn(r.document.createTime):ae.min(),l=new zt({mapValue:{fields:r.document.fields}}),u=Pt.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Ql(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Nd(t,r.document),i=r.readTime?Wn(r.readTime):ae.min(),o=Pt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ql([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Nd(t,r.document),i=r.removedTargetIds||[];n=new Ql([],i,s,null)}else{if(!("filter"in e))return oe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new o1(s,i),l=r.targetId;n=new $T(l,o)}}return n}function _1(t,e){let n;if(e instanceof ja)n={update:__(t,e.key,e.value)};else if(e instanceof Rp)n={delete:Zh(t,e.key)};else if(e instanceof as)n={update:__(t,e.key,e.data),updateMask:k1(e.fieldMask)};else{if(!(e instanceof r1))return oe();n={verify:Zh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof wa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Bi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof $i)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ea)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw oe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:m1(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe()}(t,e.precondition)),n}function v1(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Wn(s.updateTime):Wn(i);return o.isEqual(ae.min())&&(o=Wn(i)),new e1(o,s.transformResults||[])}(n,e))):[]}function w1(t,e){return{documents:[qT(t,e.path)]}}function E1(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=qT(t,s);const i=function(c){if(c.length!==0)return QT(xn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:ri(g.field),direction:S1(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Xh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:s}}function T1(t){let e=g1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ke(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=GT(m);return g instanceof xn&&IT(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(k){return new va(si(k.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,ac(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,S=m.values||[];return new Pu(S,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,S=m.values||[];return new Pu(S,g)}(n.endAt)),$N(e,s,o,i,l,"F",u,c)}function I1(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function GT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=si(n.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=si(n.unaryFilter.field);return rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=si(n.unaryFilter.field);return rt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=si(n.unaryFilter.field);return rt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(t):t.fieldFilter!==void 0?function(n){return rt.create(si(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return xn.create(n.compositeFilter.filters.map(r=>GT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe()}}(n.compositeFilter.op))}(t):oe()}function S1(t){return d1[t]}function A1(t){return h1[t]}function R1(t){return f1[t]}function ri(t){return{fieldPath:t.canonicalString()}}function si(t){return pt.fromServerFormat(t.fieldPath)}function QT(t){return t instanceof rt?function(n){if(n.op==="=="){if(s_(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NAN"}};if(r_(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(s_(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NAN"}};if(r_(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ri(n.field),op:A1(n.op),value:n.value}}}(t):t instanceof xn?function(n){const r=n.getFilters().map(s=>QT(s));return r.length===1?r[0]:{compositeFilter:{op:R1(n.op),filters:r}}}(t):oe()}function k1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function YT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n,r,s,i=ae.min(),o=ae.min(),l=_t.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e){this.ct=e}}function P1(t){const e=T1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(){this.un=new x1}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Zr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Zr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class x1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new gt(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new gt(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new zi(0)}static kn(){return new zi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(){this.changes=new Zi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Go(r.mutation,s,nn.empty(),xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=vs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=bo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=vs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=gr();const o=Ko(),l=function(){return Ko()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof as)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),Go(f.mutation,c,f.mutation.getFieldMask(),xe.now())):o.set(c.key,nn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var m;return l.set(c,new D1(f,(m=o.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ko();let s=new He((o,l)=>o-l),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||nn.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(s.get(l.batchId)||he()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=bT();f.forEach(g=>{if(!i.has(g)){const S=FT(n.get(g),r.get(g));S!==null&&m.set(g,S),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(vs());let l=-1,u=i;return o.next(c=>U.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,he())).next(f=>({batchId:l,changes:xT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(r=>{let s=bo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=bo();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,u=>{const c=function(m,g){return new Ji(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,Pt.newInvalidDocument(f)))});let l=bo();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&Go(f.mutation,c,nn.empty(),xe.now()),cc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Wn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:P1(s.bundledQuery),readTime:Wn(s.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(){this.overlays=new He(ee.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vs();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=vs(),i=n.length+1,o=new ee(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=vs(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=vs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return U.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new i1(n,r));let i=this.Ir.get(n);i===void 0&&(i=he(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(){this.Tr=new gt(ot.Er),this.dr=new gt(ot.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ot(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ee(new Oe([])),r=new ot(n,e),s=new ot(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ee(new Oe([])),r=new ot(n,e),s=new ot(n,e+1);let i=he();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ot(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ee.comparator(e.key,n.key)||Ee(e.wr,n.wr)}static Ar(e,n){return Ee(e.wr,n.wr)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new gt(ot.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new s1(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new ot(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),s=new ot(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(Ee);return n.forEach(s=>{const i=new ot(s,0),o=new ot(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ee.isDocumentKey(i)||(i=i.child(""));const o=new ot(new ee(i),0);let l=new gt(Ee);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.wr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ke(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ot(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.Mr=e,this.docs=function(){return new He(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():Pt.newInvalidDocument(n))}getEntries(e,n){let r=gr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Pt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=gr();const o=n.path,l=new ee(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||IN(TN(f),r)<=0||(s.has(f.key)||cc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){oe()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new U1(this)}getSize(e){return U.resolve(this.size)}}class U1 extends b1{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e){this.persistence=e,this.Nr=new Zi(n=>Ip(n),Sp),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Np,this.targetCount=0,this.kr=zi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new zi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n){this.qr={},this.overlays={},this.Qr=new vp(0),this.Kr=!1,this.Kr=!0,this.$r=new V1,this.referenceDelegate=e(this),this.Ur=new B1(this),this.indexManager=new N1,this.remoteDocumentCache=function(s){return new F1(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new C1(n),this.Gr=new L1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new M1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new j1(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const s=new z1(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class z1 extends AN{constructor(e){super(),this.currentSequenceNumber=e}}class xp{constructor(e){this.persistence=e,this.Jr=new Np,this.Yr=null}static Zr(e){return new xp(e)}get Xr(){if(this.Yr)return this.Yr;throw oe()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=ee.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ae.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new bp(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return OR()?8:RN(Dt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new W1;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(To()<=pe.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",ni(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(To()<=pe.DEBUG&&J("QueryEngine","Query:",ni(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(To()<=pe.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",ni(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zn(n))):U.resolve())}Yi(e,n){if(l_(n))return U.resolve(null);let r=zn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Nu(n,null,"F"),r=zn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=he(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,Nu(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,s){return l_(n)||s.isEqual(ae.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?U.resolve(null):(To()<=pe.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ni(n)),this.rs(e,o,n,EN(s,-1)).next(l=>l))})}ts(e,n){let r=new gt(PT(e));return n.forEach((s,i)=>{cc(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return To()<=pe.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",ni(n)),this.Ji.getDocumentsMatchingQuery(e,n,Zr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new He(Ee),this._s=new Zi(i=>Ip(i),Sp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new O1(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function K1(t,e,n,r){return new q1(t,e,n,r)}async function XT(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=he();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function G1(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,g=m.keys();let S=U.resolve();return g.forEach(k=>{S=S.next(()=>f.getEntry(u,k)).next(P=>{const b=c.docVersions.get(k);ke(b!==null),P.version.compareTo(b)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=he();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function JT(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Q1(t,e){const n=le(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,m)));let S=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(_t.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),s=s.insert(m,S),function(P,b,A){return P.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(g,S,f)&&l.push(n.Ur.updateTargetData(i,S))});let u=gr(),c=he();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(Y1(i,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(ae.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.os=s,i))}function Y1(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=gr();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ae.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):J("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function X1(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function J1(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new jr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function tf(t,e,n){const r=le(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Va(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function v_(t,e,n){const r=le(t);let s=ae.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=le(u),g=m._s.get(f);return g!==void 0?U.resolve(m.os.get(g)):m.Ur.getTargetData(c,f)}(r,o,zn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ae.min(),n?i:he())).next(l=>(Z1(r,WN(e),l),{documents:l,Ts:i})))}function Z1(t,e,n){let r=t.us.get(e)||ae.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class w_{constructor(){this.activeTargetIds=YN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ex{constructor(){this.so=new w_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new w_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kl=null;function xd(){return kl===null?kl=function(){return 268435456+Math.round(2147483648*Math.random())}():kl++,"0x"+kl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class sx extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=xd(),u=this.xo(n,r.toUriEncodedString());J("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,i,o),this.No(n,u,c,s).then(f=>(J("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Vi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=nx[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=xd();return new Promise((o,l)=>{const u=new dT;u.setWithCredentials(!0),u.listenOnce(hT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ql.NO_ERROR:const f=u.getResponseJson();J(Rt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case ql.TIMEOUT:J(Rt,`RPC '${e}' ${i} timed out`),l(new K(F.DEADLINE_EXCEEDED,"Request time out"));break;case ql.HTTP_ERROR:const m=u.getStatus();if(J(Rt,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const S=g==null?void 0:g.error;if(S&&S.status&&S.message){const k=function(b){const A=b.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(A)>=0?A:F.UNKNOWN}(S.status);l(new K(k,S.message))}else l(new K(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new K(F.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{J(Rt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);J(Rt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const s=xd(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=mT(),l=pT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");J(Rt,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=o.createWebChannel(f,u);let g=!1,S=!1;const k=new rx({Io:b=>{S?J(Rt,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(g||(J(Rt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),J(Rt,`RPC '${e}' stream ${s} sending:`,b),m.send(b))},To:()=>m.close()}),P=(b,A,y)=>{b.listen(A,E=>{try{y(E)}catch(N){setTimeout(()=>{throw N},0)}})};return P(m,xo.EventType.OPEN,()=>{S||(J(Rt,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),P(m,xo.EventType.CLOSE,()=>{S||(S=!0,J(Rt,`RPC '${e}' stream ${s} transport closed`),k.So())}),P(m,xo.EventType.ERROR,b=>{S||(S=!0,Vi(Rt,`RPC '${e}' stream ${s} transport errored:`,b),k.So(new K(F.UNAVAILABLE,"The operation could not be completed")))}),P(m,xo.EventType.MESSAGE,b=>{var A;if(!S){const y=b.data[0];ke(!!y);const E=y,N=E.error||((A=E[0])===null||A===void 0?void 0:A.error);if(N){J(Rt,`RPC '${e}' stream ${s} received error:`,N);const j=N.status;let M=function(w){const I=tt[w];if(I!==void 0)return BT(I)}(j),T=N.message;M===void 0&&(M=F.INTERNAL,T="Unknown error status: "+j+" with message "+N.message),S=!0,k.So(new K(M,T)),m.close()}else J(Rt,`RPC '${e}' stream ${s} received:`,y),k.bo(y)}}),P(l,fT.STAT_EVENT,b=>{b.stat===Hh.PROXY?J(Rt,`RPC '${e}' stream ${s} detected buffering proxy`):b.stat===Hh.NOPROXY&&J(Rt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function bd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t){return new p1(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ZT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(mr(n.toString()),mr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new K(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ix extends eI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=y1(this.serializer,e),r=function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?Wn(o.readTime):ae.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=ef(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Qh(u)?{documents:w1(i,u)}:{query:E1(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=WT(i,o.resumeToken);const c=Xh(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ae.min())>0){l.readTime=xu(i,o.snapshotVersion.toTimestamp());const c=Xh(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=I1(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=ef(this.serializer),n.removeTarget=e,this.a_(n)}}class ox extends eI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ke(!!e.streamToken),this.lastStreamToken=e.streamToken,ke(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=v1(e.writeResults,e.commitTime),r=Wn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=ef(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>_1(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Jh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(F.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Jh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class lx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(mr(n),this.D_=!1):J("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{qs(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=le(u);c.L_.add(4),await Ua(c),c.q_.set("Unknown"),c.L_.delete(4),await gc(c)}(this))})}),this.q_=new lx(r,s)}}async function gc(t){if(qs(t))for(const e of t.B_)await e(!0)}async function Ua(t){for(const e of t.B_)await e(!1)}function tI(t,e){const n=le(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Mp(n)?Lp(n):eo(n).r_()&&Op(n,e))}function Dp(t,e){const n=le(t),r=eo(n);n.N_.delete(e),r.r_()&&nI(n,e),n.N_.size===0&&(r.r_()?r.o_():qs(n)&&n.q_.set("Unknown"))}function Op(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}eo(t).A_(e)}function nI(t,e){t.Q_.xe(e),eo(t).R_(e)}function Lp(t){t.Q_=new c1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),eo(t).start(),t.q_.v_()}function Mp(t){return qs(t)&&!eo(t).n_()&&t.N_.size>0}function qs(t){return le(t).L_.size===0}function rI(t){t.Q_=void 0}async function cx(t){t.q_.set("Online")}async function dx(t){t.N_.forEach((e,n)=>{Op(t,e)})}async function hx(t,e){rI(t),Mp(t)?(t.q_.M_(e),Lp(t)):t.q_.set("Unknown")}async function fx(t,e,n){if(t.q_.set("Online"),e instanceof zT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bu(t,r)}else if(e instanceof Ql?t.Q_.Ke(e):e instanceof $T?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ae.min()))try{const r=await JT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.N_.get(c);f&&i.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=i.N_.get(u);if(!f)return;i.N_.set(u,f.withResumeToken(_t.EMPTY_BYTE_STRING,f.snapshotVersion)),nI(i,u);const m=new jr(f.target,u,c,f.sequenceNumber);Op(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await bu(t,r)}}async function bu(t,e,n){if(!Va(e))throw e;t.L_.add(1),await Ua(t),t.q_.set("Offline"),n||(n=()=>JT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await gc(t)})}function sI(t,e){return e().catch(n=>bu(t,n,e))}async function yc(t){const e=le(t),n=ts(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;px(e);)try{const s=await X1(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,mx(e,s)}catch(s){await bu(e,s)}iI(e)&&oI(e)}function px(t){return qs(t)&&t.O_.length<10}function mx(t,e){t.O_.push(e);const n=ts(t);n.r_()&&n.V_&&n.m_(e.mutations)}function iI(t){return qs(t)&&!ts(t).n_()&&t.O_.length>0}function oI(t){ts(t).start()}async function gx(t){ts(t).p_()}async function yx(t){const e=ts(t);for(const n of t.O_)e.m_(n.mutations)}async function _x(t,e,n){const r=t.O_.shift(),s=kp.from(r,e,n);await sI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await yc(t)}async function vx(t,e){e&&ts(t).V_&&await async function(r,s){if(function(o){return a1(o)&&o!==F.ABORTED}(s.code)){const i=r.O_.shift();ts(r).s_(),await sI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await yc(r)}}(t,e),iI(t)&&oI(t)}async function T_(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=qs(n);n.L_.add(3),await Ua(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await gc(n)}async function wx(t,e){const n=le(t);e?(n.L_.delete(2),await gc(n)):e||(n.L_.add(2),await Ua(n),n.q_.set("Unknown"))}function eo(t){return t.K_||(t.K_=function(n,r,s){const i=le(n);return i.w_(),new ix(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:cx.bind(null,t),Ro:dx.bind(null,t),mo:hx.bind(null,t),d_:fx.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Mp(t)?Lp(t):t.q_.set("Unknown")):(await t.K_.stop(),rI(t))})),t.K_}function ts(t){return t.U_||(t.U_=function(n,r,s){const i=le(n);return i.w_(),new ox(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:gx.bind(null,t),mo:vx.bind(null,t),f_:yx.bind(null,t),g_:_x.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await yc(t)):(await t.U_.stop(),t.O_.length>0&&(J("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Vp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jp(t,e){if(mr("AsyncQueue",`${e}: ${t}`),Va(t))return new K(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ee.comparator(n.key,r.key):(n,r)=>ee.comparator(n.key,r.key),this.keyedMap=bo(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new ki(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ki)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ki;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.W_=new He(ee.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):oe():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Wi{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Wi(e,n,ki.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Tx{constructor(){this.queries=S_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=le(n),i=s.queries;s.queries=S_(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new K(F.ABORTED,"Firestore shutting down"))}}function S_(){return new Zi(t=>CT(t),uc)}async function Fp(t,e){const n=le(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Ex,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=jp(o,`Initialization of query '${ni(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Bp(n)}async function Up(t,e){const n=le(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ix(t,e){const n=le(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Bp(n)}function Sx(t,e,n){const r=le(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Bp(t){t.Y_.forEach(e=>{e.next()})}var nf,A_;(A_=nf||(nf={})).ea="default",A_.Cache="cache";class $p{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Wi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Wi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==nf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.key=e}}class lI{constructor(e){this.key=e}}class Ax{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=he(),this.mutatedKeys=he(),this.Aa=PT(e),this.Ra=new ki(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new I_,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),S=cc(this.query,m)?m:null,k=!!g&&this.mutatedKeys.has(g.key),P=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let b=!1;g&&S?g.data.isEqual(S.data)?k!==P&&(r.track({type:3,doc:S}),b=!0):this.ga(g,S)||(r.track({type:2,doc:S}),b=!0,(u&&this.Aa(S,u)>0||c&&this.Aa(S,c)<0)&&(l=!0)):!g&&S?(r.track({type:0,doc:S}),b=!0):g&&!S&&(r.track({type:1,doc:g}),b=!0,(u||c)&&(l=!0)),b&&(S?(o=o.add(S),i=P?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(S,k){const P=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return P(S)-P(k)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Wi(this.query,e.Ra,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new I_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=he(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new lI(r))}),this.da.forEach(r=>{e.has(r)||n.push(new aI(r))}),n}ba(e){this.Ta=e.Ts,this.da=he();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Wi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Rx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class kx{constructor(e){this.key=e,this.va=!1}}class Cx{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Zi(l=>CT(l),uc),this.Ma=new Map,this.xa=new Set,this.Oa=new He(ee.comparator),this.Na=new Map,this.La=new Np,this.Ba={},this.ka=new Map,this.qa=zi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Px(t,e,n=!0){const r=pI(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await uI(r,e,n,!0),s}async function Nx(t,e){const n=pI(t);await uI(n,e,!0,!1)}async function uI(t,e,n,r){const s=await J1(t.localStore,zn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await xx(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&tI(t.remoteStore,s),l}async function xx(t,e,n,r,s){t.Ka=(m,g,S)=>async function(P,b,A,y){let E=b.view.ma(A);E.ns&&(E=await v_(P.localStore,b.query,!1).then(({documents:T})=>b.view.ma(T,E)));const N=y&&y.targetChanges.get(b.targetId),j=y&&y.targetMismatches.get(b.targetId)!=null,M=b.view.applyChanges(E,P.isPrimaryClient,N,j);return k_(P,b.targetId,M.wa),M.snapshot}(t,m,g,S);const i=await v_(t.localStore,e,!0),o=new Ax(e,i.Ts),l=o.ma(i.documents),u=Fa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);k_(t,n,c.wa);const f=new Rx(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function bx(t,e,n){const r=le(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!uc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await tf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Dp(r.remoteStore,s.targetId),rf(r,s.targetId)}).catch(Ma)):(rf(r,s.targetId),await tf(r.localStore,s.targetId,!0))}async function Dx(t,e){const n=le(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Dp(n.remoteStore,r.targetId))}async function Ox(t,e,n){const r=Bx(t);try{const s=await function(o,l){const u=le(o),c=xe.now(),f=l.reduce((S,k)=>S.add(k.key),he());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let k=gr(),P=he();return u.cs.getEntries(S,f).next(b=>{k=b,k.forEach((A,y)=>{y.isValidDocument()||(P=P.add(A))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,k)).next(b=>{m=b;const A=[];for(const y of l){const E=n1(y,m.get(y.key).overlayedDocument);E!=null&&A.push(new as(y.key,E,wT(E.value.mapValue),yn.exists(!0)))}return u.mutationQueue.addMutationBatch(S,c,A,l)}).next(b=>{g=b;const A=b.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(S,b.batchId,A)})}).then(()=>({batchId:g.batchId,changes:xT(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new He(Ee)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,s.batchId,n),await Ba(r,s.changes),await yc(r.remoteStore)}catch(s){const i=jp(s,"Failed to persist write");n.reject(i)}}async function cI(t,e){const n=le(t);try{const r=await Q1(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?ke(o.va):s.removedDocuments.size>0&&(ke(o.va),o.va=!1))}),await Ba(n,r,e)}catch(r){await Ma(r)}}function R_(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=le(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(c=!0)}),c&&Bp(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Lx(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new He(ee.comparator);o=o.insert(i,Pt.newNoDocument(i,ae.min()));const l=he().add(i),u=new pc(ae.min(),new Map,new He(Ee),o,l);await cI(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),zp(r)}else await tf(r.localStore,e,!1).then(()=>rf(r,e,n)).catch(Ma)}async function Mx(t,e){const n=le(t),r=e.batch.batchId;try{const s=await G1(n.localStore,e);hI(n,r,null),dI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ba(n,s)}catch(s){await Ma(s)}}async function Vx(t,e,n){const r=le(t);try{const s=await function(o,l){const u=le(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(ke(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);hI(r,e,n),dI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ba(r,s)}catch(s){await Ma(s)}}function dI(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function hI(t,e,n){const r=le(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function rf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||fI(t,r)})}function fI(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Dp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),zp(t))}function k_(t,e,n){for(const r of n)r instanceof aI?(t.La.addReference(r.key,e),jx(t,r)):r instanceof lI?(J("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||fI(t,r.key)):oe()}function jx(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(J("SyncEngine","New document in limbo: "+n),t.xa.add(r),zp(t))}function zp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ee(Oe.fromString(e)),r=t.qa.next();t.Na.set(r,new kx(n)),t.Oa=t.Oa.insert(n,r),tI(t.remoteStore,new jr(zn(lc(n.path)),r,"TargetPurposeLimboResolution",vp.oe))}}async function Ba(t,e,n){const r=le(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=bp.Wi(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,c){const f=le(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>U.forEach(c,g=>U.forEach(g.$i,S=>f.persistence.referenceDelegate.addReference(m,g.targetId,S)).next(()=>U.forEach(g.Ui,S=>f.persistence.referenceDelegate.removeReference(m,g.targetId,S)))))}catch(m){if(!Va(m))throw m;J("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const S=f.os.get(g),k=S.snapshotVersion,P=S.withLastLimboFreeSnapshotVersion(k);f.os=f.os.insert(g,P)}}}(r.localStore,i))}async function Fx(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await XT(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new K(F.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ba(n,r.hs)}}function Ux(t,e){const n=le(t),r=n.Na.get(e);if(r&&r.va)return he().add(r.key);{let s=he();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function pI(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ux.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Lx.bind(null,e),e.Ca.d_=Ix.bind(null,e.eventManager),e.Ca.$a=Sx.bind(null,e.eventManager),e}function Bx(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Mx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Vx.bind(null,e),e}class Du{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=mc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return K1(this.persistence,new H1,e.initialUser,this.serializer)}Ga(e){return new $1(xp.Zr,this.serializer)}Wa(e){return new ex}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Du.provider={build:()=>new Du};class sf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>R_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fx.bind(null,this.syncEngine),await wx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Tx}()}createDatastore(e){const n=mc(e.databaseInfo.databaseId),r=function(i){return new sx(i)}(e.databaseInfo);return function(i,o,l,u){return new ax(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new ux(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>R_(this.syncEngine,n,0),function(){return E_.D()?new E_:new tx}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const m=new Cx(s,i,o,l,u,c);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=le(s);J("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ua(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}sf.provider={build:()=>new sf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):mr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=kt.UNAUTHENTICATED,this.clientId=yT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{J("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(J("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Dd(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await XT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function C_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zx(t);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>T_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>T_(e.remoteStore,s)),t._onlineComponents=e}async function zx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await Dd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Vi("Error using user provided cache. Falling back to memory cache: "+n),await Dd(t,new Du)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await Dd(t,new Du);return t._offlineComponents}async function mI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await C_(t,t._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await C_(t,new sf))),t._onlineComponents}function Wx(t){return mI(t).then(e=>e.syncEngine)}async function Ou(t){const e=await mI(t),n=e.eventManager;return n.onListen=Px.bind(null,e.syncEngine),n.onUnlisten=bx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Nx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Dx.bind(null,e.syncEngine),n}function Hx(t,e,n={}){const r=new lr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new Wp({next:g=>{f.Za(),o.enqueueAndForget(()=>Up(i,m));const S=g.docs.has(l);!S&&g.fromCache?c.reject(new K(F.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&g.fromCache&&u&&u.source==="server"?c.reject(new K(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new $p(lc(l.path),f,{includeMetadataChanges:!0,_a:!0});return Fp(i,m)}(await Ou(t),t.asyncQueue,e,n,r)),r.promise}function qx(t,e,n={}){const r=new lr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new Wp({next:g=>{f.Za(),o.enqueueAndForget(()=>Up(i,m)),g.fromCache&&u.source==="server"?c.reject(new K(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new $p(l,f,{includeMetadataChanges:!0,_a:!0});return Fp(i,m)}(await Ou(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(t,e,n){if(!n)throw new K(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Kx(t,e,n,r){if(e===!0&&r===!0)throw new K(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function N_(t){if(!ee.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function x_(t){if(ee.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _c(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function Yt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_c(t);throw new K(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Kx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new b_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new b_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hN;switch(r.type){case"firstParty":return new gN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=P_.get(n);r&&(J("ComponentProvider","Removing Datastore"),P_.delete(n),r.terminate())}(this),Promise.resolve()}}function Gx(t,e,n,r={}){var s;const i=(t=Yt(t,vc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Vi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=kt.MOCK_USER;else{l=TE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new K(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new kt(c)}t._authCredentials=new fN(new gT(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wr(this.firestore,e,this._query)}}class Nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class Gr extends wr{constructor(e,n,r){super(e,n,lc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new ee(e))}withConverter(e){return new Gr(this.firestore,e,this._path)}}function Ge(t,e,...n){if(t=Se(t),yI("collection","path",e),t instanceof vc){const r=Oe.fromString(e,...n);return x_(r),new Gr(t,null,r)}{if(!(t instanceof Nt||t instanceof Gr))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return x_(r),new Gr(t.firestore,null,r)}}function je(t,e,...n){if(t=Se(t),arguments.length===1&&(e=yT.newId()),yI("doc","path",e),t instanceof vc){const r=Oe.fromString(e,...n);return N_(r),new Nt(t,null,new ee(r))}{if(!(t instanceof Nt||t instanceof Gr))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return N_(r),new Nt(t.firestore,t instanceof Gr?t.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ZT(this,"async_queue_retry"),this.Vu=()=>{const r=bd();r&&J("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=bd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=bd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new lr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Va(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw mr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Vp.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&oe()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function O_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class yr extends vc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new D_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new D_(e),this._firestoreClient=void 0,await e}}}function Qx(t,e){const n=typeof t=="object"?t:nc(),r=typeof t=="string"?t:"(default)",s=$s(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=vE("firestore");i&&Gx(s,...i)}return s}function wc(t){if(t._terminated)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Yx(t),t._firestoreClient}function Yx(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,c,f){return new PN(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,gI(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new $x(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hi(_t.fromBase64String(e))}catch(n){throw new K(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hi(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx=/^__.*__$/;class Jx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,n,this.fieldTransforms):new ja(e,this.data,n,this.fieldTransforms)}}class _I{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new as(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function vI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class Tc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Tc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Lu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(vI(this.Cu)&&Xx.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Zx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||mc(e)}Qu(e,n,r,s=!1){return new Tc({Cu:e,methodName:n,qu:r,path:pt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ic(t){const e=t._freezeSettings(),n=mc(t._databaseId);return new Zx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wI(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Xp("Data must be an object, but it was:",o,r);const l=TI(r,o);let u,c;if(i.merge)u=new nn(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=of(e,m,n);if(!o.contains(g))throw new K(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);SI(f,g)||f.push(g)}u=new nn(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new Jx(new zt(l),u,c)}class Sc extends Ks{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Sc}}function EI(t,e,n){return new Tc({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Kp extends Ks{_toFieldTransform(e){return new hc(e.path,new wa)}isEqual(e){return e instanceof Kp}}class Gp extends Ks{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=EI(this,e,!0),r=this.Ku.map(i=>Gs(i,n)),s=new Bi(r);return new hc(e.path,s)}isEqual(e){return e instanceof Gp&&Li(this.Ku,e.Ku)}}class Qp extends Ks{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=EI(this,e,!0),r=this.Ku.map(i=>Gs(i,n)),s=new $i(r);return new hc(e.path,s)}isEqual(e){return e instanceof Qp&&Li(this.Ku,e.Ku)}}class Yp extends Ks{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new Ea(e.serializer,OT(e.serializer,this.$u));return new hc(e.path,n)}isEqual(e){return e instanceof Yp&&this.$u===e.$u}}function eb(t,e,n,r){const s=t.Qu(1,e,n);Xp("Data must be an object, but it was:",s,r);const i=[],o=zt.empty();Hs(r,(u,c)=>{const f=Jp(e,u,n);c=Se(c);const m=s.Nu(f);if(c instanceof Sc)i.push(f);else{const g=Gs(c,m);g!=null&&(i.push(f),o.set(f,g))}});const l=new nn(i);return new _I(o,l,s.fieldTransforms)}function tb(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[of(e,r,n)],u=[s];if(i.length%2!=0)throw new K(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(of(e,i[g])),u.push(i[g+1]);const c=[],f=zt.empty();for(let g=l.length-1;g>=0;--g)if(!SI(c,l[g])){const S=l[g];let k=u[g];k=Se(k);const P=o.Nu(S);if(k instanceof Sc)c.push(S);else{const b=Gs(k,P);b!=null&&(c.push(S),f.set(S,b))}}const m=new nn(c);return new _I(f,m,o.fieldTransforms)}function nb(t,e,n,r=!1){return Gs(n,t.Qu(r?4:3,e))}function Gs(t,e){if(II(t=Se(t)))return Xp("Unsupported field value:",e,t),TI(t,e);if(t instanceof Ks)return function(r,s){if(!vI(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Gs(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return OT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:xu(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xu(s.serializer,i)}}if(r instanceof Hp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Hi)return{bytesValue:WT(s.serializer,r._byteString)};if(r instanceof Nt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof qp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Ap(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${_c(r)}`)}(t,e)}function TI(t,e){const n={};return _T(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hs(t,(r,s)=>{const i=Gs(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function II(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof Hp||t instanceof Hi||t instanceof Nt||t instanceof Ks||t instanceof qp)}function Xp(t,e,n){if(!II(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=_c(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function of(t,e,n){if((e=Se(e))instanceof Ec)return e._internalPath;if(typeof e=="string")return Jp(t,e);throw Lu("Field path arguments must be of type string or ",t,!1,void 0,n)}const rb=new RegExp("[~\\*/\\[\\]]");function Jp(t,e,n){if(e.search(rb)>=0)throw Lu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ec(...e.split("."))._internalPath}catch{throw Lu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new K(F.INVALID_ARGUMENT,l+t+u)}function SI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ac("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sb extends AI{data(){return super.data()}}function Ac(t,e){return typeof e=="string"?Jp(t,e):e instanceof Ec?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zp{}class em extends Zp{}function Vt(t,e,...n){let r=[];e instanceof Zp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof tm).length,l=i.filter(u=>u instanceof Rc).length;if(o>1||o>0&&l>0)throw new K(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Rc extends em{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Rc(e,n,r)}_apply(e){const n=this._parse(e);return kI(e._query,n),new wr(e.firestore,e.converter,Yh(e._query,n))}_parse(e){const n=Ic(e.firestore);return function(i,o,l,u,c,f,m){let g;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){M_(m,f);const S=[];for(const k of m)S.push(L_(u,i,k));g={arrayValue:{values:S}}}else g=L_(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||M_(m,f),g=nb(l,o,m,f==="in"||f==="not-in");return rt.create(c,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ss(t,e,n){const r=e,s=Ac("where",t);return Rc._create(s,r,n)}class tm extends Zp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new tm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:xn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)kI(o,u),o=Yh(o,u)}(e._query,n),new wr(e.firestore,e.converter,Yh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class nm extends em{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new nm(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new K(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new K(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new va(i,o)}(e._query,this._field,this._direction);return new wr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ji(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function yi(t,e="asc"){const n=e,r=Ac("orderBy",t);return nm._create(r,n)}class rm extends em{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new rm(e,n,r)}_apply(e){return new wr(e.firestore,e.converter,Nu(e._query,this._limit,this._limitType))}}function ib(t){return rm._create("limit",t,"F")}function L_(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new K(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kT(e)&&n.indexOf("/")!==-1)throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!ee.isDocumentKey(r))throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return n_(t,new ee(r))}if(n instanceof Nt)return n_(t,n._key);throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_c(n)}.`)}function M_(t,e){if(!Array.isArray(t)||t.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function kI(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ob{convertValue(e,n="none"){switch(Ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Hs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Je(o.doubleValue));return new qp(i)}convertGeoPoint(e){return new Hp(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ep(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ga(e));default:return null}}convertTimestamp(e){const n=es(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);ke(YT(r));const s=new ya(r.get(1),r.get(3)),i=new ee(r.popFirst(5));return s.isEqual(n)||mr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class PI extends AI{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ac("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Yl extends PI{data(e={}){return super.data(e)}}class NI{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Oo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Yl(this._firestore,this._userDataWriter,r.key,r,new Oo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Yl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Oo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Yl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Oo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:ab(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ab(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t){t=Yt(t,Nt);const e=Yt(t.firestore,yr);return Hx(wc(e),t._key).then(n=>xI(e,t,n))}class sm extends ob{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function Ta(t){t=Yt(t,wr);const e=Yt(t.firestore,yr),n=wc(e),r=new sm(e);return RI(t._query),qx(n,t._query).then(s=>new NI(e,r,t,s))}function af(t,e,n){t=Yt(t,Nt);const r=Yt(t.firestore,yr),s=CI(t.converter,e,n);return kc(r,[wI(Ic(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,yn.none())])}function Ht(t,e,n,...r){t=Yt(t,Nt);const s=Yt(t.firestore,yr),i=Ic(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof Ec?tb(i,"updateDoc",t._key,e,n,r):eb(i,"updateDoc",t._key,e),kc(s,[o.toMutation(t._key,yn.exists(!0))])}function qn(t){return kc(Yt(t.firestore,yr),[new Rp(t._key,yn.none())])}function Qs(t,e){const n=Yt(t.firestore,yr),r=je(t),s=CI(t.converter,e);return kc(n,[wI(Ic(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,yn.exists(!1))]).then(()=>r)}function cn(t,...e){var n,r,s;t=Se(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||O_(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(O_(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,c,f;if(t instanceof Nt)c=Yt(t.firestore,yr),f=lc(t._key.path),u={next:m=>{e[o]&&e[o](xI(c,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Yt(t,wr);c=Yt(m.firestore,yr),f=m._query;const g=new sm(c);u={next:S=>{e[o]&&e[o](new NI(c,g,m,S))},error:e[o+1],complete:e[o+2]},RI(t._query)}return function(g,S,k,P){const b=new Wp(P),A=new $p(S,b,k);return g.asyncQueue.enqueueAndForget(async()=>Fp(await Ou(g),A)),()=>{b.Za(),g.asyncQueue.enqueueAndForget(async()=>Up(await Ou(g),A))}}(wc(c),f,l,u)}function kc(t,e){return function(r,s){const i=new lr;return r.asyncQueue.enqueueAndForget(async()=>Ox(await Wx(r),s,i)),i.promise}(wc(t),e)}function xI(t,e,n){const r=n.docs.get(e._key),s=new sm(t);return new PI(t,s,e._key,r,new Oo(n.hasPendingWrites,n.fromCache),e.converter)}function jn(){return new Kp("serverTimestamp")}function Ia(...t){return new Gp("arrayUnion",t)}function Mu(...t){return new Qp("arrayRemove",t)}function lb(t){return new Yp("increment",t)}(function(e,n=!0){(function(s){Xi=s})(zs),Nn(new wn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new yr(new pN(r.getProvider("auth-internal")),new _N(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ya(c.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Qt(Xy,"4.7.3",e),Qt(Xy,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI="firebasestorage.googleapis.com",DI="storageBucket",ub=2*60*1e3,cb=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends bn{constructor(e,n,r=0){super(Ld(e),`Firebase Storage: ${n} (${Ld(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ld(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Qe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Qe||(Qe={}));function Ld(t){return"storage/"+t}function im(){const t="An unknown error occurred, please check the error payload for server response.";return new Ye(Qe.UNKNOWN,t)}function db(t){return new Ye(Qe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function hb(t){return new Ye(Qe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function fb(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ye(Qe.UNAUTHENTICATED,t)}function pb(){return new Ye(Qe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function mb(t){return new Ye(Qe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function gb(){return new Ye(Qe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function yb(){return new Ye(Qe.CANCELED,"User canceled the upload/download.")}function _b(t){return new Ye(Qe.INVALID_URL,"Invalid URL '"+t+"'.")}function vb(t){return new Ye(Qe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function wb(){return new Ye(Qe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+DI+"' property when initializing the app?")}function Eb(){return new Ye(Qe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Tb(){return new Ye(Qe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ib(t){return new Ye(Qe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function lf(t){return new Ye(Qe.INVALID_ARGUMENT,t)}function OI(){return new Ye(Qe.APP_DELETED,"The Firebase app was deleted.")}function Sb(t){return new Ye(Qe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Qo(t,e){return new Ye(Qe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Io(t){throw new Ye(Qe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rn.makeFromUrl(e,n)}catch{return new rn(e,"")}if(r.path==="")return r;throw vb(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",S=new RegExp(`^https?://${m}/${f}/b/${s}/o${g}`,"i"),k={bucket:1,path:3},P=n===bI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",A=new RegExp(`^https?://${P}/${s}/${b}`,"i"),E=[{regex:l,indices:u,postModify:i},{regex:S,indices:k,postModify:c},{regex:A,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<E.length;N++){const j=E[N],M=j.regex.exec(e);if(M){const T=M[j.indices.bucket];let v=M[j.indices.path];v||(v=""),r=new rn(T,v),j.postModify(r);break}}if(r==null)throw _b(e);return r}}class Ab{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...b){c||(c=!0,e.apply(null,b))}function m(b){s=setTimeout(()=>{s=null,t(S,u())},b)}function g(){i&&clearTimeout(i)}function S(b,...A){if(c){g();return}if(b){g(),f.call(null,b,...A);return}if(u()||o){g(),f.call(null,b,...A);return}r<64&&(r*=2);let E;l===1?(l=2,E=0):E=(r+Math.random())*1e3,m(E)}let k=!1;function P(b){k||(k=!0,g(),!c&&(s!==null?(b||(l=2),clearTimeout(s),m(0)):b||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function kb(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(t){return t!==void 0}function Pb(t){return typeof t=="object"&&!Array.isArray(t)}function om(t){return typeof t=="string"||t instanceof String}function V_(t){return am()&&t instanceof Blob}function am(){return typeof Blob<"u"}function j_(t,e,n,r){if(r<e)throw lf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw lf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function LI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var As;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(As||(As={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,r,s,i,o,l,u,c,f,m,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=m,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,k)=>{this.resolve_=S,this.reject_=k,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Cl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===As.NO_ERROR,u=i.getStatus();if(!l||Nb(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===As.ABORT;r(!1,new Cl(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Cl(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Cb(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=im();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?OI():yb();o(u)}else{const u=gb();o(u)}};this.canceled_?n(!1,new Cl(!1,null,!0)):this.backoffId_=Rb(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Cl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function bb(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Db(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ob(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Lb(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Mb(t,e,n,r,s,i,o=!0){const l=LI(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return Ob(c,e),bb(c,n),Db(c,i),Lb(c,r),new xb(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function jb(...t){const e=Vb();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(am())return new Blob(t);throw new Ye(Qe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Fb(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(t){if(typeof atob>"u")throw Ib("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Md{constructor(e,n){this.data=e,this.contentType=n||null}}function Bb(t,e){switch(t){case Fn.RAW:return new Md(MI(e));case Fn.BASE64:case Fn.BASE64URL:return new Md(VI(t,e));case Fn.DATA_URL:return new Md(zb(e),Wb(e))}throw im()}function MI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function $b(t){let e;try{e=decodeURIComponent(t)}catch{throw Qo(Fn.DATA_URL,"Malformed data URL.")}return MI(e)}function VI(t,e){switch(t){case Fn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Qo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Fn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Qo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Ub(e)}catch(s){throw s.message.includes("polyfill")?s:Qo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class jI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Qo(Fn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Hb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function zb(t){const e=new jI(t);return e.base64?VI(Fn.BASE64,e.rest):$b(e.rest)}function Wb(t){return new jI(t).contentType}function Hb(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n){let r=0,s="";V_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(V_(this.data_)){const r=this.data_,s=Fb(r,e,n);return s===null?null:new Or(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Or(r,!0)}}static getBlob(...e){if(am()){const n=e.map(r=>r instanceof Or?r.data_:r);return new Or(jb.apply(null,n))}else{const n=e.map(o=>om(o)?Bb(Fn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new Or(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(t){let e;try{e=JSON.parse(t)}catch{return null}return Pb(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Kb(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function UI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(t,e){return e}class Lt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Gb}}let Pl=null;function Qb(t){return!om(t)||t.length<2?t:UI(t)}function BI(){if(Pl)return Pl;const t=[];t.push(new Lt("bucket")),t.push(new Lt("generation")),t.push(new Lt("metageneration")),t.push(new Lt("name","fullPath",!0));function e(i,o){return Qb(o)}const n=new Lt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Lt("size");return s.xform=r,t.push(s),t.push(new Lt("timeCreated")),t.push(new Lt("updated")),t.push(new Lt("md5Hash",null,!0)),t.push(new Lt("cacheControl",null,!0)),t.push(new Lt("contentDisposition",null,!0)),t.push(new Lt("contentEncoding",null,!0)),t.push(new Lt("contentLanguage",null,!0)),t.push(new Lt("contentType",null,!0)),t.push(new Lt("metadata","customMetadata",!0)),Pl=t,Pl}function Yb(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new rn(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Xb(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return Yb(r,t),r}function $I(t,e,n){const r=FI(e);return r===null?null:Xb(t,r,n)}function Jb(t,e,n,r){const s=FI(e);if(s===null||!om(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const f=t.bucket,m=t.fullPath,g="/b/"+o(f)+"/o/"+o(m),S=Cc(g,n,r),k=LI({alt:"media",token:c});return S+k})[0]}function Zb(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class lm{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(t){if(!t)throw im()}function eD(t,e){function n(r,s){const i=$I(t,s,e);return zI(i!==null),i}return n}function tD(t,e){function n(r,s){const i=$I(t,s,e);return zI(i!==null),Jb(i,s,t.host,t._protocol)}return n}function WI(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=pb():s=fb():n.getStatus()===402?s=hb(t.bucket):n.getStatus()===403?s=mb(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function HI(t){const e=WI(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=db(t.path)),i.serverResponse=s.serverResponse,i}return n}function nD(t,e,n){const r=e.fullServerUrl(),s=Cc(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new lm(s,i,tD(t,n),o);return l.errorHandler=HI(e),l}function rD(t,e){const n=e.fullServerUrl(),r=Cc(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(u,c){}const l=new lm(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=HI(e),l}function sD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function iD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=sD(null,e)),r}function oD(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let E="";for(let N=0;N<2;N++)E=E+Math.random().toString().slice(2);return E}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=iD(e,r,s),f=Zb(c,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+u+"--",S=Or.getBlob(m,r,g);if(S===null)throw Eb();const k={name:c.fullPath},P=Cc(i,t.host,t._protocol),b="POST",A=t.maxUploadRetryTime,y=new lm(P,b,eD(t,n),A);return y.urlParams=k,y.headers=o,y.body=S.uploadData(),y.errorHandler=WI(e),y}class aD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=As.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=As.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=As.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Io("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Io("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Io("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Io("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Io("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class lD extends aD{initXhr(){this.xhr_.responseType="text"}}function um(){return new lD}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this._service=e,n instanceof rn?this._location=n:this._location=rn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ms(e,n)}get root(){const e=new rn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return UI(this._location.path)}get storage(){return this._service}get parent(){const e=qb(this._location.path);if(e===null)return null;const n=new rn(this._location.bucket,e);return new Ms(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Sb(e)}}function uD(t,e,n){t._throwIfRoot("uploadBytes");const r=oD(t.storage,t._location,BI(),new Or(e,!0),n);return t.storage.makeRequestWithTokens(r,um).then(s=>({metadata:s,ref:t}))}function cD(t){t._throwIfRoot("getDownloadURL");const e=nD(t.storage,t._location,BI());return t.storage.makeRequestWithTokens(e,um).then(n=>{if(n===null)throw Tb();return n})}function dD(t){t._throwIfRoot("deleteObject");const e=rD(t.storage,t._location);return t.storage.makeRequestWithTokens(e,um)}function hD(t,e){const n=Kb(t._location.path,e),r=new rn(t._location.bucket,n);return new Ms(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(t){return/^[A-Za-z]+:\/\//.test(t)}function pD(t,e){return new Ms(t,e)}function qI(t,e){if(t instanceof cm){const n=t;if(n._bucket==null)throw wb();const r=new Ms(n,n._bucket);return e!=null?qI(r,e):r}else return e!==void 0?hD(t,e):t}function mD(t,e){if(e&&fD(e)){if(t instanceof cm)return pD(t,e);throw lf("To use ref(service, url), the first argument must be a Storage instance.")}else return qI(t,e)}function F_(t,e){const n=e==null?void 0:e[DI];return n==null?null:rn.makeFromBucketSpec(n,t)}function gD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:TE(s,t.app.options.projectId))}class cm{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=bI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ub,this._maxUploadRetryTime=cb,this._requests=new Set,s!=null?this._bucket=rn.makeFromBucketSpec(s,this._host):this._bucket=F_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rn.makeFromBucketSpec(this._url,e):this._bucket=F_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){j_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){j_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ms(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Ab(OI());{const o=Mb(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const U_="@firebase/storage",B_="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="storage";function Qr(t,e,n){return t=Se(t),uD(t,e,n)}function Yr(t){return t=Se(t),cD(t)}function sn(t){return t=Se(t),dD(t)}function et(t,e){return t=Se(t),mD(t,e)}function yD(t=nc(),e){t=Se(t);const r=$s(t,KI).getImmediate({identifier:e}),s=vE("storage");return s&&_D(r,...s),r}function _D(t,e,n,r={}){gD(t,e,n,r)}function vD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new cm(n,r,s,e,zs)}function wD(){Nn(new wn(KI,vD,"PUBLIC").setMultipleInstances(!0)),Qt(U_,B_,""),Qt(U_,B_,"esm2017")}wD();const GI="@firebase/installations",dm="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=1e4,YI=`w:${dm}`,XI="FIS_v2",ED="https://firebaseinstallations.googleapis.com/v1",TD=60*60*1e3,ID="installations",SD="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Vs=new Bs(ID,SD,AD);function JI(t){return t instanceof bn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI({projectId:t}){return`${ED}/projects/${t}/installations`}function e0(t){return{token:t.token,requestStatus:2,expiresIn:kD(t.expiresIn),creationTime:Date.now()}}async function t0(t,e){const r=(await e.json()).error;return Vs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function n0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function RD(t,{refreshToken:e}){const n=n0(t);return n.append("Authorization",CD(e)),n}async function r0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function kD(t){return Number(t.replace("s","000"))}function CD(t){return`${XI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=ZI(t),s=n0(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:XI,appId:t.appId,sdkVersion:YI},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await r0(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:e0(c.authToken)}}else throw await t0("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD=/^[cdef][\w-]{21}$/,uf="";function bD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=DD(t);return xD.test(n)?n:uf}catch{return uf}}function DD(t){return ND(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=new Map;function o0(t,e){const n=Pc(t);a0(n,e),OD(n,e)}function a0(t,e){const n=i0.get(t);if(n)for(const r of n)r(e)}function OD(t,e){const n=LD();n&&n.postMessage({key:t,fid:e}),MD()}let ws=null;function LD(){return!ws&&"BroadcastChannel"in self&&(ws=new BroadcastChannel("[Firebase] FID Change"),ws.onmessage=t=>{a0(t.data.key,t.data.fid)}),ws}function MD(){i0.size===0&&ws&&(ws.close(),ws=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD="firebase-installations-database",jD=1,js="firebase-installations-store";let Vd=null;function hm(){return Vd||(Vd=tc(VD,jD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(js)}}})),Vd}async function Vu(t,e){const n=Pc(t),s=(await hm()).transaction(js,"readwrite"),i=s.objectStore(js),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&o0(t,e.fid),e}async function l0(t){const e=Pc(t),r=(await hm()).transaction(js,"readwrite");await r.objectStore(js).delete(e),await r.done}async function Nc(t,e){const n=Pc(t),s=(await hm()).transaction(js,"readwrite"),i=s.objectStore(js),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&o0(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fm(t){let e;const n=await Nc(t.appConfig,r=>{const s=FD(r),i=UD(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===uf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function FD(t){const e=t||{fid:bD(),registrationStatus:0};return u0(e)}function UD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Vs.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=BD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:$D(t)}:{installationEntry:e}}async function BD(t,e){try{const n=await PD(t,e);return Vu(t.appConfig,n)}catch(n){throw JI(n)&&n.customData.serverCode===409?await l0(t.appConfig):await Vu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function $D(t){let e=await $_(t.appConfig);for(;e.registrationStatus===1;)await s0(100),e=await $_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await fm(t);return r||n}return e}function $_(t){return Nc(t,e=>{if(!e)throw Vs.create("installation-not-found");return u0(e)})}function u0(t){return zD(t)?{fid:t.fid,registrationStatus:0}:t}function zD(t){return t.registrationStatus===1&&t.registrationTime+QI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WD({appConfig:t,heartbeatServiceProvider:e},n){const r=HD(t,n),s=RD(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:YI,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await r0(()=>fetch(r,l));if(u.ok){const c=await u.json();return e0(c)}else throw await t0("Generate Auth Token",u)}function HD(t,{fid:e}){return`${ZI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(t,e=!1){let n;const r=await Nc(t.appConfig,i=>{if(!c0(i))throw Vs.create("not-registered");const o=i.authToken;if(!e&&GD(o))return i;if(o.requestStatus===1)return n=qD(t,e),i;{if(!navigator.onLine)throw Vs.create("app-offline");const l=YD(i);return n=KD(t,l),l}});return n?await n:r.authToken}async function qD(t,e){let n=await z_(t.appConfig);for(;n.authToken.requestStatus===1;)await s0(100),n=await z_(t.appConfig);const r=n.authToken;return r.requestStatus===0?pm(t,e):r}function z_(t){return Nc(t,e=>{if(!c0(e))throw Vs.create("not-registered");const n=e.authToken;return XD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function KD(t,e){try{const n=await WD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Vu(t.appConfig,r),n}catch(n){if(JI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await l0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Vu(t.appConfig,r)}throw n}}function c0(t){return t!==void 0&&t.registrationStatus===2}function GD(t){return t.requestStatus===2&&!QD(t)}function QD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+TD}function YD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function XD(t){return t.requestStatus===1&&t.requestTime+QI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JD(t){const e=t,{installationEntry:n,registrationPromise:r}=await fm(e);return r?r.catch(console.error):pm(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZD(t,e=!1){const n=t;return await eO(n),(await pm(n,e)).token}async function eO(t){const{registrationPromise:e}=await fm(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(t){if(!t||!t.options)throw jd("App Configuration");if(!t.name)throw jd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw jd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function jd(t){return Vs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="installations",nO="installations-internal",rO=t=>{const e=t.getProvider("app").getImmediate(),n=tO(e),r=$s(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},sO=t=>{const e=t.getProvider("app").getImmediate(),n=$s(e,d0).getImmediate();return{getId:()=>JD(n),getToken:s=>ZD(n,s)}};function iO(){Nn(new wn(d0,rO,"PUBLIC")),Nn(new wn(nO,sO,"PRIVATE"))}iO();Qt(GI,dm);Qt(GI,dm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO="/firebase-messaging-sw.js",aO="/firebase-cloud-messaging-push-scope",h0="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",lO="https://fcmregistrations.googleapis.com/v1",f0="google.c.a.c_id",uO="google.c.a.c_l",cO="google.c.a.ts",dO="google.c.a.e";var W_;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(W_||(W_={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Sa;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Sa||(Sa={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function hO(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="fcm_token_details_db",fO=5,H_="fcm_token_object_Store";async function pO(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Fd))return null;let e=null;return(await tc(Fd,fO,{upgrade:async(r,s,i,o)=>{var l;if(s<2||!r.objectStoreNames.contains(H_))return;const u=o.objectStore(H_),c=await u.index("fcmSenderId").get(t);if(await u.clear(),!!c){if(s===2){const f=c;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(l=f.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:Jn(f.vapidKey)}}}else if(s===3){const f=c;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Jn(f.auth),p256dh:Jn(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Jn(f.vapidKey)}}}else if(s===4){const f=c;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Jn(f.auth),p256dh:Jn(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Jn(f.vapidKey)}}}}}})).close(),await Ad(Fd),await Ad("fcm_vapid_details_db"),await Ad("undefined"),mO(e)?e:null}function mO(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO="firebase-messaging-database",yO=1,Aa="firebase-messaging-store";let Ud=null;function p0(){return Ud||(Ud=tc(gO,yO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Aa)}}})),Ud}async function _O(t){const e=m0(t),r=await(await p0()).transaction(Aa).objectStore(Aa).get(e);if(r)return r;{const s=await pO(t.appConfig.senderId);if(s)return await mm(t,s),s}}async function mm(t,e){const n=m0(t),s=(await p0()).transaction(Aa,"readwrite");return await s.objectStore(Aa).put(e,n),await s.done,e}function m0({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},xt=new Bs("messaging","Messaging",vO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wO(t,e){const n=await ym(t),r=g0(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(gm(t.appConfig),s)).json()}catch(o){throw xt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw xt.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw xt.create("token-subscribe-no-token");return i.token}async function EO(t,e){const n=await ym(t),r=g0(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${gm(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw xt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw xt.create("token-update-failed",{errorInfo:o})}if(!i.token)throw xt.create("token-update-no-token");return i.token}async function TO(t,e){const r={method:"DELETE",headers:await ym(t)};try{const i=await(await fetch(`${gm(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw xt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw xt.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function gm({projectId:t}){return`${lO}/projects/${t}/registrations`}async function ym({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function g0({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==h0&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=7*24*60*60*1e3;async function SO(t){const e=await RO(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Jn(e.getKey("auth")),p256dh:Jn(e.getKey("p256dh"))},r=await _O(t.firebaseDependencies);if(r){if(kO(r.subscriptionOptions,n))return Date.now()>=r.createTime+IO?AO(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await TO(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return q_(t.firebaseDependencies,n)}else return q_(t.firebaseDependencies,n)}async function AO(t,e){try{const n=await EO(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await mm(t.firebaseDependencies,r),n}catch(n){throw n}}async function q_(t,e){const r={token:await wO(t,e),createTime:Date.now(),subscriptionOptions:e};return await mm(t,r),r.token}async function RO(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:hO(e)})}function kO(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return CO(e,t),PO(e,t),NO(e,t),e}function CO(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function PO(t,e){e.data&&(t.data=e.data)}function NO(t,e){var n,r,s,i,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;l&&(t.fcmOptions.link=l);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(t){return typeof t=="object"&&!!t&&f0 in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(t){if(!t||!t.options)throw Bd("App Configuration Object");if(!t.name)throw Bd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Bd(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Bd(t){return xt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=bO(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OO(t){try{t.swRegistration=await navigator.serviceWorker.register(oO,{scope:aO}),t.swRegistration.update().catch(()=>{})}catch(e){throw xt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LO(t,e){if(!e&&!t.swRegistration&&await OO(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw xt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MO(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=h0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y0(t,e){if(!navigator)throw xt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw xt.create("permission-blocked");return await MO(t,e==null?void 0:e.vapidKey),await LO(t,e==null?void 0:e.serviceWorkerRegistration),SO(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VO(t,e,n){const r=jO(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[f0],message_name:n[uO],message_time:n[cO],message_device_time:Math.floor(Date.now()/1e3)})}function jO(t){switch(t){case Sa.NOTIFICATION_CLICKED:return"notification_open";case Sa.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FO(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Sa.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(K_(n)):t.onMessageHandler.next(K_(n)));const r=n.data;xO(r)&&r[dO]==="1"&&await VO(t,n.messageType,r)}const G_="@firebase/messaging",Q_="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO=t=>{const e=new DO(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>FO(e,n)),e},BO=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>y0(e,r)}};function $O(){Nn(new wn("messaging",UO,"PUBLIC")),Nn(new wn("messaging-internal",BO,"PRIVATE")),Qt(G_,Q_),Qt(G_,Q_,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zO(){try{await SE()}catch{return!1}return typeof window<"u"&&IE()&&LR()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(t,e){if(!navigator)throw xt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(t=nc()){return zO().then(e=>{if(!e)throw xt.create("unsupported-browser")},e=>{throw xt.create("indexed-db-unsupported")}),$s(Se(t),"messaging").getImmediate()}async function qO(t,e){return t=Se(t),y0(t,e)}function KO(t,e){return t=Se(t),WO(t,e)}$O();const GO={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyD3iY_LJZxOp1Y3i1Z_ZFWU0gk04TKfa-o",VITE_FIREBASE_APP_ID:"1:869546960167:web:19a41c46ef253617683502",VITE_FIREBASE_AUTH_DOMAIN:"logos-church-nepal.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"869546960167",VITE_FIREBASE_PROJECT_ID:"logos-church-nepal",VITE_FIREBASE_STORAGE_BUCKET:"logos-church-nepal.firebasestorage.app"};let So=null;const QO=()=>{if(So)return So;try{if(!GO)throw new Error("Vite environment variables (import.meta.env) are not available. The app cannot be configured.");const t={apiKey:"AIzaSyD3iY_LJZxOp1Y3i1Z_ZFWU0gk04TKfa-o",authDomain:"logos-church-nepal.firebaseapp.com",projectId:"logos-church-nepal",storageBucket:"logos-church-nepal.firebasestorage.app",messagingSenderId:"869546960167",appId:"1:869546960167:web:19a41c46ef253617683502"},e=Object.entries(t).filter(([,r])=>!r).map(([r])=>r);if(e.length>0)throw new Error(`The application is not configured correctly. Missing required environment variables: ${e.join(", ")}.`);const n=kE(t);So={auth:cN(n),db:Qx(n),storage:yD(n),messaging:HO(n),firebaseError:void 0}}catch(t){console.error("Firebase initialization failed:",t),So={firebaseError:`A critical error occurred while starting the application: ${t.message}`}}return So},_0=O.createContext(null),Gn=()=>{const t=O.useContext(_0);if(!t)throw new Error("useFirebase must be used within a FirebaseProvider");return t},v0=O.createContext(null),_m=()=>{const t=O.useContext(v0);if(!t)throw new Error("useToast must be used within a ToastProvider");return t},YO=({children:t})=>{const[e,n]=O.useState([]),r=O.useRef(0),s=O.useCallback((i,o,l)=>{const u=r.current++,c={id:u,title:i,body:o,onClick:l};n(f=>[c,...f]);try{new Audio("https://firebasestorage.googleapis.com/v0/b/logos-church-nepal.appspot.com/o/assets%2Fnotification.mp3?alt=media&token=24838a14-a901-469b-9a4f-56193796537b").play().catch(m=>console.warn("Audio playback failed:",m))}catch(f){console.error("Failed to create or play audio:",f)}setTimeout(()=>{n(f=>f.filter(m=>m.id!==u))},5e3)},[]);return h.jsxs(v0.Provider,{value:{showToast:s},children:[t,h.jsx(XO,{toasts:e})]})},XO=({toasts:t})=>{const[e,n]=O.useState([]);return O.useEffect(()=>{const r=[];return t.forEach(s=>{if(!e.includes(s.id)){const i=window.setTimeout(()=>{n(o=>[...o,s.id])},4500);r.push(i)}}),()=>r.forEach(clearTimeout)},[t,e]),Yi.createPortal(h.jsx("div",{className:"toast-container",children:t.map(r=>h.jsx("div",{className:`toast-item ${e.includes(r.id)?"exiting":""}`,onClick:r.onClick,children:h.jsxs("div",{className:"toast-content",children:[h.jsx("div",{className:"toast-title",children:r.title}),h.jsx("div",{className:"toast-body",children:r.body})]})},r.id))}),document.body)},en={name:"Logos Church, Nepal",logo:"/logos-church-new-logo.jpg",offeringDetails:{qrCodeUrl:"/logos-qr-code.png",bankName:"Global IME Bank",accountHolder:"YAM PRADHAN",accountNumber:"10507010042662"}},Y_=[{verse:"यूहन्ना ३:१६",text:"किनभने परमेश्‍वरले संसारलाई यति साह्रो प्रेम गर्नुभयो, कि उहाँले आफ्‍ना एकमात्र पुत्र दिनुभयो, ताकि उहाँमाथि विश्‍वास गर्ने कोही पनि नाश नहोस्, तर त्‍यसले अनन्त जीवन पाओस्।"},{verse:"फिलिप्पी ४:१३",text:"जसले मलाई शक्ति दिनuहुन्छ, उहाँमा म सब कुरा गर्न सक्छु।"},{verse:"रोमी ८:२८",text:"हामी जान्दछौं, कि परमेश्‍वरलाई प्रेम गर्नेहरूका निम्ति, अर्थात् उहाँको अभिप्रायअनुसार बोलाइएकाहरूका निम्ति हरेक कुरामा परमेश्‍वरले भलाइ नै गर्नुहुन्छ।"},{verse:"यशैया ४१:१०",text:"नडरा, किनभने म तँसँग छु। निरुत्साहित नहो, किनभने म तेरो परमेश्‍वर हुँ। म तँलाई बलियो पार्नेछु, म तँलाई सहायता गर्नेछु, म तँलाई मेरो धार्मिकताको दाहिने हातले समाल्नेछु।"},{verse:"भजनसंग्रह २३:१",text:"परमप्रभु मेरो गोठालो हुनुहुन्छ, मलाई केही कुराको अभाव हुनेछैन।"},{verse:"यर्मिया २९:११",text:"किनभने मैले तिमीहरूका निम्ति बनाएका योजनाहरू म जान्दछछु,” परमप्रभु भन्नुहुन्छ, “तिमीहरूलाई हानि गर्ने होइन, तर उन्नति गर्ने योजनाहरू, तिमीहरूलाई आशा र भविष्य दिने योजनाहरू।"},{verse:"मत्ती ११:२८",text:"हे सबै थाकेका र बोझले दबिएका हो, मकहाँ आओ, र म तिमीहरूलाई विश्राम दिनेछु।"},{verse:"हितोपदेश ३:५-६",text:"तेरो सारा हृदयले परमप्रभुमाथि भरोसा राख्, र तेरो आफ्नै समझशक्तिमाथि भर नपर्। तेरा सबै मार्गहरूमा उहाँलाई स्वीकार गर्, र उहाँले तेरा मार्गहरू सोझो बनाउनुहुनेछ।"},{verse:"२ तिमोथी १:७",text:"किनभने परमेश्‍वरले हामीलाई डरको आत्मा दिनुभएको छैन, तर शक्ति, प्रेम र आत्मसंयमको आत्मा दिनुभएको छ।"},{verse:"यहोशू १:९",text:"के मैले तँलाई आज्ञa दिएको छैनँ र? बलियो र साहसी हो। नडरा, न त निरुत्साहित हो, किनभने तँ जहाँ गए पनि परमप्रभु तेरा परमेश्‍वर तँसँग हुनुहुन्छ।"},{verse:"भजनसंग्रह ४६:१",text:"परमेश्‍वर हाम्रा शरणस्थान र बल हुनुहुन्छ, सङ्कष्टमा तुरुन्तै पाइने सहायक।"},{verse:"मत्ती ६:३३",text:"तर पहिले उहाँको राज्य र उहाँको धार्मिकताको खोजी गर, र यी सबै कुरा तिमीहरूलाई थपिनेछन्।"},{verse:"गलाती ५:२२-২৩",text:"तर पवित्र आत्माको फलचाहिँ प्रेम, आनन्द, शान्ति, धैर्य, दया, भलाइ, विश्वस्तता, नम्रता र आत्मसंयम हो।"},{verse:"हिब्रू ११:१",text:"अब विश्वासचाहिँ आशा राखिएका कुराहरूको निश्चय र नदेखिएका कुराहरूको प्रमाण हो।"},{verse:"रोमी १०:९",text:"यदि तपाईंले आफ्नो मुखले “येशू नै प्रभु हुनुहुन्छ” भनी स्वीकार गर्नुभयो र परमेश्वरले उहाँलाई मरेकाहरूबाट जीवित पार्नुभयो भनी आफ्नो हृदयमा विश्वास गर्नुभयो भने तपाईंले उद्धार पाउनुहुनेछ।"},{verse:"भजनसंग्रह १:१-२",text:"धन्य हो त्यो मानिस, जो दुष्टहरूको सल्लाहमा हिँड्दैन, र पापीहरूको मार्गमा खडा हुँदैन, र गिल्ला गर्नेहरूको संगतमा बस्दैन। तर त्यसको खुशी परमप्रभुको व्यवस्थामा रहन्छ, र त्यसले दिनरात उहाँको व्यवस्थामा ध्यान गर्छ।"},{verse:"यशैया ४०:३१",text:"तर परमप्रभुमा आशा राख्नेहरूले नयाँ शक्ति प्राप्त गर्नेछन्। तिनीहरू गरुडझैं पखेटा लाएर माथि उड्नेछन्। तिनीहरू दगुरेर जानेछन् र थकित हुनेछैनन्, तिनीहरू हिँड्नेछन् र मूर्छित हुनेछैनन्।"},{verse:"१ कोरिन्थी १०:१३",text:"तिमीहरूमाथि आइपरेको कुनै पनि परीक्षा मानिसलाई साधारणतया आइपर्नेभन्दा बाहिरको छैन। र परमेश्वर विश्वासयोग्य हुनुहुन्छ। उहाँले तिमीहरूलाई तिमीहरूको शक्तिभन्दा बाहिरको परीक्षामा पर्न दिनुहुनेछैन।"},{verse:"एफिसी २:८-९",text:"किनभने अनुग्रहबाट विश्वासद्वारा तिमीहरूले उद्धार पाएका छौ—र यो तिमीहरू आफैबाट होइन, यो परमेश्वरको वरदान हो—कर्महरूद्वारा होइन, ताकि कसैले घमण्ड गर्न नपाओस्।"},{verse:"भजनसंग्रह ३७:४",text:"परमप्रभुमा आनन्दित हो, र उहाँले तेरो हृदयका इच्छाहरू पूरा गर्नुहुनेछ।"},{verse:"२ कोरिन्थी ५:१७",text:"यसकारण, यदि कोही ख्रीष्टमा छ भने, ऊ नयाँ सृष्टि हो। पुरानो बितिगएको छ, हेर, नयाँ आएको छ!"},{verse:"हितोपदेश २२:६",text:"बालकलाई त्यसको हिँड्नुपर्ने बाटोमा तालिम दे, र ऊ बूढो हुँदा पनि त्यसबाट तर्कनेछैन।"},{verse:"भजनसंग्रह ११९:१०५",text:"तपाईंको वचन मेरो खुट्टाको निम्ति बत्ती, र मेरो बाटोको निम्ति उज्यालो हो।"}],X_=["उत्पत्ति १, मत्ती १, एज्रा १, प्रेरित १","एज्रा २, प्रेरित ५, भजनसंग्रह १४९, भजनसंग्रh १५０"],$a=t=>t?(t.toDate?t.toDate():t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"",JO=(t,e)=>{if(!t||!e)return!1;const n=t.toDate(),r=e.toDate();return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()&&n.getDate()===r.getDate()},ZO=t=>t?t.toDate().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}):"",xc=t=>{if(!t)return"Just now";const e=new Date,n=t.toDate(),r=Math.floor((e.getTime()-n.getTime())/1e3);return r<60?`${r}s ago`:r<3600?`${Math.floor(r/60)}m ago`:r<86400?`${Math.floor(r/3600)}h ago`:r<2592e3?`${Math.floor(r/86400)}d ago`:$a(t)};function bc(t){if(!t)return"L";const e=t.trim().split(" ");return e.length>1&&e[e.length-1]?`${e[0][0]}${e[e.length-1][0]}`.toUpperCase():t.trim().substring(0,1).toUpperCase()}function e2(t){if(!t)return"";const e=t.trim();return e?e.split(/\s+/)[0]||e:""}function t2(t){if(!t)return"#2563eb";const e=["#2563eb","#7c3aed","#db2777","#d97706","#059669","#0284c7","#9333ea","#ea580c","#0891b2","#c026d3"];let n=0;for(let r=0;r<t.length;r++)n=t.charCodeAt(r)+((n<<5)-n);return e[Math.abs(n)%e.length]}const J_=(t,e=!1)=>{if(!t)return null;try{const n=/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|live\/)|youtu\.be\/)([\w-]{11})/,r=t.match(n);return r&&r[1]?`https://www.youtube.com/embed/${r[1]}?autoplay=1&playsinline=1${e?"&mute=1":""}`:/https?:\/\/(?:www\.|web\.)?facebook\.com\/(?:watch\/?\?v=|.+?\/videos\/|video\.php\?v=)/.test(t)?`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(t)}&show_text=0&autoplay=1`:null}catch(n){return console.error("Error parsing stream URL:",t,n),null}},qi=(t,e,n)=>new Promise((r,s)=>{const i=new FileReader;i.readAsDataURL(t),i.onload=o=>{var u;const l=new Image;l.src=(u=o.target)==null?void 0:u.result,l.onload=()=>{let c=l.width,f=l.height;c>f?c>e&&(f*=e/c,c=e):f>e&&(c*=e/f,f=e);const m=document.createElement("canvas");m.width=c,m.height=f;const g=m.getContext("2d");if(!g)return s(new Error("Could not get canvas context"));g.drawImage(l,0,0,c,f),m.toBlob(S=>{if(S){const k=new File([S],t.name,{type:"image/jpeg",lastModified:Date.now()});r(k)}else s(new Error("Canvas to Blob conversion failed"))},"image/jpeg",n)},l.onerror=c=>s(c)},i.onerror=o=>s(o)});class n2{constructor(){il(this,"db",null);il(this,"dbName","ImageCacheDB");il(this,"storeName","imageStore");this.init()}init(){return new Promise((e,n)=>{if(this.db){e();return}const r=indexedDB.open(this.dbName,1);r.onerror=()=>n("IndexedDB error: "+r.error),r.onsuccess=()=>{this.db=r.result,e()},r.onupgradeneeded=()=>{const s=r.result;s.objectStoreNames.contains(this.storeName)||s.createObjectStore(this.storeName)}})}async getDb(){return this.db||await this.init(),this.db}async storeImage(e,n){const r=await this.getDb();return new Promise((s,i)=>{const u=r.transaction(this.storeName,"readwrite").objectStore(this.storeName).put(n,e);u.onsuccess=()=>s(),u.onerror=()=>i("Failed to store image: "+u.error)})}async getImage(e){const n=await this.getDb();return new Promise((r,s)=>{const l=n.transaction(this.storeName,"readonly").objectStore(this.storeName).get(e);l.onsuccess=()=>r(l.result||null),l.onerror=()=>s("Failed to get image: "+l.error)})}async renameKey(e,n){const r=await this.getImage(e);r&&(await this.storeImage(n,r),(await this.getDb()).transaction(this.storeName,"readwrite").objectStore(this.storeName).delete(e))}}const cf=new n2,r2=(t,e)=>{const[n,r]=O.useState(t);return O.useEffect(()=>{let s=!0,i=null;return e?(async()=>{try{const l=await cf.getImage(e);s&&l?(i=URL.createObjectURL(l),r(i)):s&&r(t)}catch(l){console.warn("Cache lookup failed for",e,l),s&&r(t)}})():r(t),()=>{s=!1,i&&URL.revokeObjectURL(i)}},[t,e]),n},s2=({error:t})=>h.jsxs("div",{className:"error-container",children:[h.jsx("img",{src:en.logo,alt:"Church Logo",className:"error-logo"}),h.jsx("h2",{children:"Oops! Something went wrong."}),h.jsx("p",{children:"We're sorry, but the application encountered an unexpected error. Please try again later."}),h.jsx("pre",{children:t.message})]}),i2=()=>h.jsxs("div",{className:"splash-screen-container",children:[h.jsx("img",{src:en.logo,alt:"Church Logo",className:"splash-logo"}),h.jsx("div",{className:"splash-spinner"})]}),vm=({message:t="Loading..."})=>h.jsxs("div",{className:"loading-container",children:[h.jsx("div",{className:"spinner"}),h.jsx("span",{children:t})]}),Dc=({onClick:t,icon:e,"aria-label":n})=>h.jsx("button",{className:"fab",onClick:t,"aria-label":n,children:h.jsx("span",{className:"material-symbols-outlined",children:e})}),Kn=({isOpen:t,onClose:e,children:n,position:r="center"})=>t?Yi.createPortal(h.jsx("div",{className:`modal-backdrop ${r==="bottom"?"modal-is-bottom":""}`,onClick:e,children:h.jsx("div",{className:"modal-content",onClick:s=>s.stopPropagation(),children:n})}),document.body):null,w0=({selectedFile:t,setSelectedFile:e,currentImageUrl:n,label:r="Add a photo",onImageRemove:s})=>{const[i,o]=O.useState(n),l=O.useRef(null);O.useEffect(()=>{if(t){const f=URL.createObjectURL(t);return o(f),()=>URL.revokeObjectURL(f)}else o(n)},[t,n]);const u=f=>{f.target.files&&f.target.files[0]&&e(f.target.files[0])},c=()=>{e(null),o(null),l.current&&(l.current.value=""),s==null||s()};return h.jsx("div",{className:"image-upload-container",children:i?h.jsxs("div",{className:"image-preview",children:[h.jsx("img",{src:i||"",alt:"Preview"}),h.jsx("button",{type:"button",onClick:c,"aria-label":"Remove image",children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})})]}):h.jsxs("label",{htmlFor:"image-upload",className:"image-upload-label",children:[h.jsx("span",{className:"material-symbols-outlined",children:"add_photo_alternate"}),h.jsx("span",{children:r}),h.jsx("input",{id:"image-upload",type:"file",accept:"image/*",onChange:u,ref:l,style:{display:"none"}})]})})},o2=()=>{const{auth:t}=Gn(),[e,n]=O.useState(""),[r,s]=O.useState(!1),[i,o]=O.useState(""),[l,u]=O.useState(""),[c,f]=O.useState(""),[m,g]=O.useState(!1),S=async P=>{P.preventDefault(),s(!0),n("");try{if(m){if(!c.trim()){n("Please enter your name.");return}const b=await qC(t,i,l);await zh(b.user,{displayName:c})}else await KC(t,i,l)}catch(b){let A=b.message;b.code==="auth/weak-password"?A="Password should be at least 6 characters.":b.code==="auth/email-already-in-use"?A="This email is already in use. Please log in.":b.code==="auth/invalid-credential"&&(A="Incorrect email or password."),n(A)}finally{s(!1)}},k=async()=>{if(t){s(!0),n("");try{const P=new Vn;await _P(t,P)}catch(P){P.code!=="auth/popup-closed-by-user"&&n(P.message)}finally{s(!1)}}};return h.jsx("div",{className:"login-container",children:h.jsxs("div",{className:"login-box",children:[h.jsx("img",{src:en.logo,alt:"Church Logo",className:"login-logo"}),h.jsx("h2",{children:m?"Create Account":"Welcome Back"}),h.jsx("p",{children:en.name}),h.jsxs("form",{onSubmit:S,children:[m&&h.jsx("input",{type:"text",className:"login-input",placeholder:"Full Name",value:c,onChange:P=>f(P.target.value),required:!0}),h.jsx("input",{type:"email",className:"login-input",placeholder:"Email Address",value:i,onChange:P=>o(P.target.value),required:!0,autoComplete:"email"}),h.jsx("input",{type:"password",className:"login-input",placeholder:"Password",value:l,onChange:P=>u(P.target.value),required:!0,minLength:6,autoComplete:m?"new-password":"current-password"}),h.jsx("button",{type:"submit",className:"login-button",disabled:r,children:r?h.jsx("div",{className:"spinner"}):m?"Sign Up":"Log In"}),h.jsx("button",{type:"button",onClick:()=>{g(!m),n("")},className:"auth-toggle-link",children:m?"Already have an account? Log In":"Don't have an account? Sign Up"})]}),h.jsx("div",{className:"login-divider",children:h.jsx("span",{children:"OR"})}),h.jsxs("button",{onClick:k,className:"google-signin-button",disabled:r,children:[h.jsxs("svg",{viewBox:"0 0 48 48",width:"24px",height:"24px",children:[h.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),h.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),h.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),h.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),h.jsx("path",{fill:"none",d:"M0 0h48v48H0z"})]}),h.jsx("span",{children:"Sign in with Google"})]}),h.jsxs("div",{className:"login-compliance-notice",style:{marginTop:"20px",fontSize:"11px",color:"#64748b",textAlign:"center",lineHeight:"1.4"},children:["By signing up or logging in, you agree to our ",h.jsx("br",{}),h.jsx("a",{href:"/terms.html",target:"_blank",rel:"noopener noreferrer",style:{color:"#2563eb",textDecoration:"underline"},children:"Terms of Use"})," and ",h.jsx("a",{href:"/privacy.html",target:"_blank",rel:"noopener noreferrer",style:{color:"#2563eb",textDecoration:"underline"},children:"Privacy Policy"}),"."]}),e&&h.jsx("p",{className:"login-error",children:e})]})})},a2=({currentUser:t,liveService:e,pastServices:n})=>{const{db:r}=Gn(),[s,i]=O.useState(!1),[o,l]=O.useState(!1),[u,c]=O.useState({title:"",youtubeUrl:""}),[f,m]=O.useState(null),g=e!=null&&e.streamUrl?J_(e.streamUrl):null,S=f!=null&&f.youtubeUrl?J_(f.youtubeUrl,!0):null,k=async y=>{if(y.preventDefault(),!(!r||!u.title||!u.youtubeUrl))try{const E=xe.fromDate(new Date(Date.now()-5184e6)),N=Vt(Ge(r,"pastWorshipServices"),Ss("createdAt","<",E));(await Ta(N)).forEach(async M=>{await qn(M.ref)}),await Qs(Ge(r,"pastWorshipServices"),{...u,createdAt:jn()}),c({title:"",youtubeUrl:""}),l(!1)}catch(E){console.error("Error adding past worship service: ",E)}},P=async y=>{if(!(!r||!window.confirm("Are you sure you want to delete this past service?")))try{await qn(je(r,"pastWorshipServices",y))}catch(E){console.error("Error deleting past service:",E)}},b=y=>{try{const E=y.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/),N=E?E[1]:null;return N?`https://img.youtube.com/vi/${N}/hqdefault.jpg`:"/placeholder.jpg"}catch{return"/placeholder.jpg"}},A=()=>e&&g?h.jsxs("div",{className:"card live-worship-card",children:[h.jsx("div",{className:"live-badge",children:"LIVE"}),h.jsx("div",{className:"iframe-container",children:h.jsx("iframe",{src:g,allow:"autoplay; encrypted-media",allowFullScreen:!0,title:"Live Worship Stream"})}),h.jsx("h4",{children:e.title})]}):f&&S?h.jsxs("div",{className:"card live-worship-card",children:[h.jsx("div",{className:"iframe-container",children:h.jsx("iframe",{src:S,allow:"autoplay; encrypted-media",allowFullScreen:!0,title:f.title})}),h.jsxs("div",{className:"playing-past-service-info",children:[h.jsx("h4",{children:f.title}),h.jsxs("button",{className:"close-player-button",onClick:()=>m(null),children:[h.jsx("span",{className:"material-symbols-outlined",children:"close"})," Player बन्द गर्नुहोस्"]})]})]}):h.jsxs("div",{className:"card no-live-service",children:[h.jsx("span",{className:"material-symbols-outlined",children:"church"}),h.jsx("p",{children:"अहिले कुनै प्रत्यक्ष आरधना छैन।"})]});return h.jsxs("div",{className:"page-content",children:[h.jsx("h2",{children:"आरधना"}),A(),h.jsx("div",{className:"worship-actions",children:h.jsxs("button",{className:"action-button",onClick:()=>i(!0),children:[h.jsx("span",{className:"material-symbols-outlined",children:"volunteer_activism"}),"अनलाइन भेटी"]})}),h.jsxs("div",{className:"past-worship-section",children:[h.jsx("h3",{children:"विगतका आरधना"}),t.roles.includes("admin")&&h.jsxs("button",{className:"action-button add-past-worship-button",onClick:()=>l(!0),children:[h.jsx("span",{className:"material-symbols-outlined",children:"add"})," विगतका आरधना थप्नुहोस्।"]}),h.jsx("div",{className:"past-worship-list",children:n.map(y=>h.jsxs("div",{className:"card past-service-card",onClick:()=>m(y),children:[h.jsx("img",{src:b(y.youtubeUrl),alt:y.title,className:"past-service-thumbnail",loading:"lazy"}),h.jsx("div",{className:"play-icon-overlay",children:h.jsx("span",{className:"material-symbols-outlined",children:"play_circle"})}),h.jsx("p",{className:"past-service-title",children:y.title}),t.roles.includes("admin")&&h.jsx("button",{className:"delete-button past-service-delete-button",onClick:E=>{E.stopPropagation(),P(y.id)},"aria-label":"Delete past service",children:h.jsx("span",{className:"material-symbols-outlined",children:"delete"})})]},y.id))})]}),h.jsx(Kn,{isOpen:s,onClose:()=>i(!1),children:h.jsxs("div",{className:"offering-modal-content",children:[h.jsx("h3",{children:"Online Offering"}),h.jsx("img",{src:en.offeringDetails.qrCodeUrl,alt:"QR Code for offering",className:"qr-code-img"}),h.jsxs("div",{className:"offering-details",children:[h.jsxs("p",{children:[h.jsx("strong",{children:"Bank:"})," ",en.offeringDetails.bankName]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Account Holder:"})," ",en.offeringDetails.accountHolder]}),h.jsxs("div",{className:"account-number-container",children:[h.jsxs("p",{children:[h.jsx("strong",{children:"Account Number:"})," ",en.offeringDetails.accountNumber]}),h.jsxs("button",{className:"copy-button",onClick:()=>{navigator.clipboard.writeText(en.offeringDetails.accountNumber),alert("Account number copied!")},children:[h.jsx("span",{className:"material-symbols-outlined",children:"content_copy"})," Copy"]})]})]})]})}),h.jsx(Kn,{isOpen:o,onClose:()=>l(!1),children:h.jsxs("form",{className:"modal-form",onSubmit:k,children:[h.jsx("h3",{children:"Add Past Service"}),h.jsx("input",{type:"text",placeholder:"Service Title",value:u.title,onChange:y=>c({...u,title:y.target.value}),required:!0}),h.jsx("input",{type:"url",placeholder:"YouTube URL",value:u.youtubeUrl,onChange:y=>c({...u,youtubeUrl:y.target.value}),required:!0}),h.jsxs("div",{className:"form-actions",children:[h.jsx("button",{type:"submit",className:"action-button",children:"Save"}),h.jsx("button",{type:"button",className:"action-button secondary",onClick:()=>l(!1),children:"Cancel"})]})]})})]})},l2=()=>{const[t,e]=O.useState(null),n=new Date().getDate();O.useEffect(()=>{const i=Math.floor((new Date().getTime()-new Date(new Date().getFullYear(),0,0).getTime())/864e5);e(Y_[i%Y_.length])},[]);const s=X_[(()=>{const i=new Date,o=new Date(i.getFullYear(),0,0),l=i.getTime()-o.getTime()+(o.getTimezoneOffset()-i.getTimezoneOffset())*60*1e3,u=1e3*60*60*24;return Math.floor(l/u)})()-1]||X_[0];return h.jsxs("div",{className:"page-content",children:[h.jsx("h2",{children:"बाइबल"}),h.jsxs("div",{className:"list-container bible-card-list",children:[t&&h.jsxs("div",{className:"card verse-card",children:[h.jsxs("p",{className:"verse-text",children:['"',t.text,'"']}),h.jsxs("p",{className:"verse-ref",children:["- ",t.verse]})]}),h.jsxs("div",{className:"card bible-card",children:[h.jsx("h3",{children:"आजको बाइबल पढ्ने योजना"}),h.jsx("p",{children:s})]}),h.jsxs("div",{className:"card bible-card",children:[h.jsx("h3",{children:"आजको हितोपदेश"}),h.jsxs("p",{children:["आज ",n," तारिख हो, हितोपदेश ",n," अध्याय पढ्नुहोस्।"]})]})]})]})},Z_=({currentUser:t,news:e,setNews:n})=>{const{db:r,storage:s}=Gn(),[i,o]=O.useState(!1),[l,u]=O.useState(null),c=(P=null)=>{u(P),o(!0)},f=()=>{u(null),o(!1)},m=(P,b,A,y)=>{if(!r||!s||!t)return;const E=crypto.randomUUID(),N={id:E,tempId:E,title:P,content:b,authorId:t.id,authorName:t.name,createdAt:xe.now(),status:"uploading",image:l==null?void 0:l.image,thumbnailUrl:l==null?void 0:l.thumbnailUrl,localImagePreview:A?URL.createObjectURL(A):y?null:(l==null?void 0:l.thumbnailUrl)||(l==null?void 0:l.image)};n(l?M=>M.map(T=>T.id===l.id?{...N,id:l.id}:T):M=>[N,...M]),(async()=>{try{const M={title:P,content:b,authorId:t.id,authorName:t.name};if((y||A)&&(l!=null&&l.imagePath)&&(await sn(et(s,l.imagePath)).catch(T=>console.warn("Old image delete failed",T)),l.thumbnailPath&&await sn(et(s,l.thumbnailPath)).catch(T=>console.warn("Old thumb delete failed",T))),A){const[T,v]=await Promise.all([qi(A,1280,.85),qi(A,400,.7)]),w=Date.now(),I=A.name.replace(/[^a-zA-Z0-9.]/g,"_");M.imagePath=`news/${w}_${I}`,M.thumbnailPath=`news/${w}_thumb_${I}`;const C=et(s,M.imagePath),x=et(s,M.thumbnailPath);await Promise.all([Qr(C,T),Qr(x,v)]);const[R,ye]=await Promise.all([Yr(C),Yr(x)]);M.image=R,M.thumbnailUrl=ye}else y&&(M.image=null,M.thumbnailUrl=null,M.imagePath=null,M.thumbnailPath=null);l?await Ht(je(r,"news",l.id),M):await Qs(Ge(r,"news"),{...M,createdAt:jn()})}catch(M){console.error("❌ Failed to save news. Error Code:",M.code,"Message:",M.message),n(T=>T.map(v=>v.tempId===E?{...v,status:"failed"}:v))}})()},g=async P=>{if(!(!r||!s)&&window.confirm(`Are you sure you want to delete "${P.title}"?`))try{P.imagePath&&await sn(et(s,P.imagePath)).catch(b=>console.warn("Image delete failed",b)),P.thumbnailPath&&await sn(et(s,P.thumbnailPath)).catch(b=>console.warn("Thumbnail delete failed",b)),await qn(je(r,"news",P.id))}catch(b){console.error("Error deleting news item: ",b)}},S=t.roles.includes("admin")||t.roles.includes("news_contributor"),k=P=>t.id===P.authorId||t.roles.includes("admin");return h.jsxs("div",{className:"page-content",children:[h.jsx("h2",{children:"सुचना"}),h.jsx("div",{className:"list-container",children:e.map(P=>h.jsxs("div",{className:"card news-item",children:[P.status&&h.jsx("div",{className:"upload-status-overlay",children:P.status==="uploading"?h.jsx("div",{className:"spinner"}):h.jsx("span",{children:"⚠"})}),(P.localImagePreview||P.thumbnailUrl||P.image)&&h.jsx("img",{src:P.localImagePreview||P.thumbnailUrl||P.image||"",alt:P.title,className:"news-image",loading:"lazy"}),h.jsxs("div",{className:"news-content",children:[h.jsxs("div",{className:"news-header",children:[h.jsx("h3",{children:P.title}),k(P)&&h.jsxs("div",{className:"item-actions-header",children:[h.jsx("button",{onClick:()=>c(P),className:"edit-button","aria-label":"Edit news",children:h.jsx("span",{className:"material-symbols-outlined",children:"edit"})}),h.jsx("button",{onClick:()=>g(P),className:"delete-button","aria-label":"Delete news",children:h.jsx("span",{className:"material-symbols-outlined",children:"delete"})})]})]}),h.jsxs("p",{className:"news-meta",children:["By ",P.authorName," on ",$a(P.createdAt)]}),h.jsx("p",{children:P.content})]})]},P.tempId||P.id))}),S&&h.jsx(Dc,{onClick:()=>c(),icon:"feed","aria-label":"Add news"}),h.jsx(u2,{isOpen:i,onClose:f,onSave:m,newsItem:l})]})},u2=({isOpen:t,onClose:e,onSave:n,newsItem:r})=>{const[s,i]=O.useState(""),[o,l]=O.useState(""),[u,c]=O.useState(null),[f,m]=O.useState(!1);O.useEffect(()=>{t&&(i((r==null?void 0:r.title)||""),l((r==null?void 0:r.content)||""),c(null),m(!1))},[t,r]);const g=S=>{S.preventDefault(),n(s,o,u,f),e()};return h.jsx(Kn,{isOpen:t,onClose:e,children:h.jsxs("form",{className:"modal-form",onSubmit:g,children:[h.jsx("button",{type:"button",className:"modal-close-button",onClick:e,"aria-label":"Close",children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})}),h.jsx("h3",{children:r?"सुचना सम्पादन गर्नुहोस्":"सुचना थप्नुहोस्।"}),h.jsx("input",{type:"text",placeholder:"शीर्षक",value:s,onChange:S=>i(S.target.value),required:!0}),h.jsx("textarea",{placeholder:"सामग्री",rows:5,value:o,onChange:S=>l(S.target.value),required:!0}),h.jsx(w0,{selectedFile:u,setSelectedFile:c,currentImageUrl:(r==null?void 0:r.thumbnailUrl)||(r==null?void 0:r.image),label:"फोटो थप्नुहोस्।(यदि तपाईं चाहनुहुन्छ भने)",onImageRemove:()=>m(!0)}),h.jsx("div",{className:"form-actions",children:h.jsx("button",{type:"submit",className:"action-button",children:"सेभ गर्नुहोस्"})})]})})},c2=({currentUser:t,podcasts:e,setPodcasts:n})=>{const{db:r,storage:s}=Gn(),[i,o]=O.useState(!1),l=(m,g)=>{if(!r||!s||!t)return;const S=crypto.randomUUID(),k={id:S,tempId:S,title:m,authorId:t.id,authorName:t.name,audioUrl:"",createdAt:xe.now(),status:"uploading",localAudioUrl:URL.createObjectURL(g)};n(b=>[k,...b]),(async()=>{try{const b=et(s,`podcasts/${Date.now()}_${g.name}`);await Qr(b,g);const A=await Yr(b);await Qs(Ge(r,"podcasts"),{title:m,audioUrl:A,authorId:t.id,authorName:t.name,createdAt:jn()})}catch(b){console.error("❌ Failed to save podcast. Error Code:",b.code,"Message:",b.message),n(A=>A.map(y=>y.tempId===S?{...y,status:"failed"}:y))}})()},u=async m=>{if(!(!r||!s)&&window.confirm(`Are you sure you want to delete "${m.title}"?`))try{const g=et(s,m.audioUrl);await sn(g),await qn(je(r,"podcasts",m.id))}catch(g){console.error("Error deleting podcast: ",g)}},c=t.roles.includes("admin")||t.roles.includes("podcast_contributor"),f=m=>t.id===m.authorId||t.roles.includes("admin");return h.jsxs("div",{className:"page-content",children:[h.jsx("h2",{children:"Podcast"}),h.jsx("div",{className:"list-container",children:e.map(m=>h.jsxs("div",{className:"card podcast-item",children:[m.status&&h.jsx("div",{className:"upload-status-overlay",children:m.status==="uploading"?h.jsx("div",{className:"spinner"}):h.jsx("span",{children:"⚠"})}),h.jsxs("div",{className:"podcast-info",children:[h.jsxs("div",{children:[h.jsx("p",{className:"podcast-title",children:m.title}),h.jsxs("p",{className:"podcast-author",children:["By ",m.authorName," - ",$a(m.createdAt)]})]}),f(m)&&h.jsx("button",{onClick:()=>u(m),className:"delete-button","aria-label":"Delete podcast",children:h.jsx("span",{className:"material-symbols-outlined",children:"delete"})})]}),h.jsx("audio",{controls:!0,className:"podcast-player",src:m.localAudioUrl||m.audioUrl,children:"Your browser does not support the audio element."})]},m.tempId||m.id))}),c&&h.jsx(Dc,{onClick:()=>o(!0),icon:"podcasts","aria-label":"Add podcast"}),h.jsx(d2,{isOpen:i,onClose:()=>o(!1),onSave:l})]})},d2=({isOpen:t,onClose:e,onSave:n})=>{const[r,s]=O.useState(""),[i,o]=O.useState(null),[l,u]=O.useState("upload"),[c,f]=O.useState(!1),[m,g]=O.useState(0),[S,k]=O.useState(null),[P,b]=O.useState(null),A=O.useRef(null),y=O.useRef(null),E=O.useRef(null);O.useEffect(()=>{if(S){const w=URL.createObjectURL(S);return b(w),()=>URL.revokeObjectURL(w)}b(null)},[S]);const N=async()=>{try{const w=await navigator.mediaDevices.getUserMedia({audio:!0});y.current=w,A.current=new MediaRecorder(w);const I=[];A.current.ondataavailable=C=>{I.push(C.data)},A.current.onstop=()=>{const C=new Blob(I,{type:"audio/webm"});k(C);const x=new File([C],"recording.webm",{type:"audio/webm"});o(x),y.current&&y.current.getTracks().forEach(R=>R.stop())},A.current.start(),f(!0),E.current=window.setInterval(()=>{g(C=>C+1)},1e3)}catch(w){console.error("Error starting recording:",w),alert("Could not start microphone. Please check browser or phone settings for mic permission for this site.")}},j=()=>{A.current&&(A.current.stop(),f(!1),E.current&&clearInterval(E.current),g(0))},M=()=>{k(null),o(null),g(0)},T=w=>{if(w.preventDefault(),!i||!r.trim()){alert("Please provide a title and select or record an audio file.");return}n(r,i),s(""),o(null),M(),e()},v=w=>{const I=Math.floor(w/60).toString().padStart(2,"0"),C=(w%60).toString().padStart(2,"0");return`${I}:${C}`};return h.jsx(Kn,{isOpen:t,onClose:e,children:h.jsxs("form",{className:"modal-form",onSubmit:T,children:[h.jsx("button",{type:"button",className:"modal-close-button",onClick:e,"aria-label":"Close",children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})}),h.jsx("h3",{children:"Add Podcast"}),h.jsxs("div",{className:"add-podcast-tabs",children:[h.jsx("button",{type:"button",className:l==="upload"?"active":"",onClick:()=>u("upload"),children:"Upload"}),h.jsx("button",{type:"button",className:l==="record"?"active":"",onClick:()=>u("record"),children:"Record"})]}),h.jsx("input",{type:"text",placeholder:"Podcast Title",value:r,onChange:w=>s(w.target.value),required:!0}),l==="upload"&&h.jsxs("label",{htmlFor:"audio-upload",className:"action-button secondary custom-file-input",children:[h.jsx("span",{className:"material-symbols-outlined",children:"upload_file"}),h.jsx("span",{children:i?i.name:"Choose Audio File"}),h.jsx("input",{id:"audio-upload",type:"file",accept:"audio/*",onChange:w=>w.target.files&&o(w.target.files[0]),style:{display:"none"}})]}),l==="record"&&h.jsxs("div",{className:"record-section",children:[h.jsx("p",{className:"permission-helper-text",children:"Microphone permission is required to start recording. A prompt will appear when you press the 'Start Recording' button."}),S?h.jsxs("div",{className:"recording-preview",children:[h.jsx("p",{children:"Recording complete:"}),P&&h.jsx("audio",{controls:!0,src:P}),h.jsx("button",{type:"button",className:"action-button secondary",onClick:M,children:"Record Again"})]}):h.jsxs("button",{type:"button",className:`record-button ${c?"recording":""}`,onClick:c?j:N,children:[h.jsx("span",{className:"material-symbols-outlined",children:c?"stop_circle":"mic"}),c?h.jsx("span",{className:"timer",children:v(m)}):"Start Recording"]})]}),h.jsx("div",{className:"form-actions",children:h.jsx("button",{type:"submit",className:"action-button",disabled:!i,children:"Save Podcast"})})]})})},h2=({currentUser:t,requests:e,setRequests:n})=>{const{db:r,storage:s}=Gn(),[i,o]=O.useState(null),[l,u]=O.useState(!1),[c,f]=O.useState(null),m=async y=>{if(!r||y.status)return;const E=je(r,"prayerRequests",y.id),N=y.prayedBy.includes(t.id);await Ht(E,{prayedBy:N?Mu(t.id):Ia(t.id)})},g=(y=null)=>{f(y),u(!0)},S=()=>{u(!1),f(null)},k=(y,E,N,j)=>{if(!r||!s||!t)return;const M=crypto.randomUUID(),T={id:M,tempId:M,title:y,content:E,authorId:t.id,authorName:t.name,prayedBy:(c==null?void 0:c.prayedBy)||[],commentCount:(c==null?void 0:c.commentCount)||0,createdAt:xe.now(),status:"uploading",image:c==null?void 0:c.image,thumbnailUrl:c==null?void 0:c.thumbnailUrl,localImagePreview:N?URL.createObjectURL(N):j?null:(c==null?void 0:c.thumbnailUrl)||(c==null?void 0:c.image)};n(c?w=>w.map(I=>I.id===c.id?{...T,id:c.id}:I):w=>[T,...w]),(async()=>{try{const w={title:y,content:E,authorId:t.id,authorName:t.name};if((j||N)&&(c!=null&&c.imagePath)&&(await sn(et(s,c.imagePath)).catch(I=>console.warn("Old image delete failed",I)),c.thumbnailPath&&await sn(et(s,c.thumbnailPath)).catch(I=>console.warn("Old thumb delete failed",I))),N){const[I,C]=await Promise.all([qi(N,1280,.85),qi(N,400,.7)]),x=Date.now(),R=N.name.replace(/[^a-zA-Z0-9.]/g,"_");w.imagePath=`prayers/${x}_${R}`,w.thumbnailPath=`prayers/${x}_thumb_${R}`;const ye=et(s,w.imagePath),Fe=et(s,w.thumbnailPath);await Promise.all([Qr(ye,I),Qr(Fe,C)]);const[Bt,ut]=await Promise.all([Yr(ye),Yr(Fe)]);w.image=Bt,w.thumbnailUrl=ut}else j&&(w.image=null,w.thumbnailUrl=null,w.imagePath=null,w.thumbnailPath=null);c?await Ht(je(r,"prayerRequests",c.id),w):await Qs(Ge(r,"prayerRequests"),{...w,prayedBy:[],createdAt:jn()})}catch(w){console.error("❌ Failed to save prayer request. Error Code:",w.code,"Message:",w.message),n(I=>I.map(C=>C.tempId===M?{...C,status:"failed"}:C))}})()},P=async y=>{if(!(!r||!s||y.status)&&window.confirm("Are you sure you want to delete this prayer request?"))try{y.imagePath&&await sn(et(s,y.imagePath)).catch(E=>console.warn("Image delete failed",E)),y.thumbnailPath&&await sn(et(s,y.thumbnailPath)).catch(E=>console.warn("Thumbnail delete failed",E)),await qn(je(r,"prayerRequests",y.id)),o(null)}catch(E){console.error("Error deleting prayer request: ",E)}},b=y=>{y.status||(f(y),o(y))},A=y=>t.id===y.authorId||t.roles.includes("admin");return h.jsxs("div",{className:"page-content",children:[h.jsx("h2",{children:"प्रार्थना"}),h.jsx("div",{className:"list-container",children:e.map(y=>h.jsxs("div",{className:"card prayer-item",onClick:()=>b(y),children:[y.status&&h.jsx("div",{className:"upload-status-overlay",children:y.status==="uploading"?h.jsx("div",{className:"spinner"}):h.jsx("span",{children:"⚠"})}),(y.localImagePreview||y.thumbnailUrl||y.image)&&h.jsx("img",{src:y.localImagePreview||y.thumbnailUrl||y.image||"",alt:y.title,className:"prayer-image",loading:"lazy"}),h.jsxs("div",{className:"prayer-body",children:[h.jsx("h4",{className:"prayer-title",children:y.title}),y.content&&h.jsx("p",{className:"prayer-content",children:y.content})]}),h.jsxs("div",{className:"prayer-meta",children:[h.jsxs("span",{children:["By ",y.authorName," - ",xc(y.createdAt)]}),h.jsxs("div",{className:"prayer-actions",children:[h.jsxs("button",{className:`prayer-action-button ${y.prayedBy.includes(t.id)?"prayed":""}`,onClick:E=>{E.stopPropagation(),m(y)},children:[h.jsx("span",{className:"material-symbols-outlined",children:"volunteer_activism"}),h.jsx("span",{children:y.prayedBy.length})]}),h.jsxs("div",{className:"prayer-action-button",children:[h.jsx("span",{className:"material-symbols-outlined",children:"comment"}),h.jsx("span",{children:y.commentCount||0})]})]})]}),A(y)&&!y.status&&h.jsxs("div",{className:"item-actions-footer",children:[h.jsx("button",{onClick:E=>{E.stopPropagation(),g(y)},className:"edit-button","aria-label":"Edit prayer request",children:h.jsx("span",{className:"material-symbols-outlined",children:"edit"})}),h.jsx("button",{onClick:E=>{E.stopPropagation(),P(y)},className:"delete-button","aria-label":"Delete prayer request",children:h.jsx("span",{className:"material-symbols-outlined",children:"delete"})})]})]},y.tempId||y.id))}),h.jsx(Dc,{onClick:()=>g(),icon:"volunteer_activism","aria-label":"Add prayer request"}),i&&h.jsx(p2,{request:i,onClose:()=>o(null),currentUser:t}),h.jsx(f2,{isOpen:l,onClose:S,onSave:k,request:c})]})},f2=({isOpen:t,onClose:e,onSave:n,request:r})=>{const[s,i]=O.useState(""),[o,l]=O.useState(""),[u,c]=O.useState(null),[f,m]=O.useState(!1);O.useEffect(()=>{t&&(i((r==null?void 0:r.title)||""),l((r==null?void 0:r.content)||""),c(null),m(!1))},[t,r]);const g=S=>{S.preventDefault(),n(s,o,u,f),e()};return h.jsx(Kn,{isOpen:t,onClose:e,children:h.jsxs("form",{className:"modal-form",onSubmit:g,children:[h.jsx("button",{type:"button",className:"modal-close-button",onClick:e,"aria-label":"Close",children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})}),h.jsx("h3",{children:r?"अनुरोध सम्पादन गर्नुहोस्":"प्रार्थना अनुरोध"}),h.jsx("input",{type:"text",placeholder:"शीर्षक",value:s,onChange:S=>i(S.target.value),required:!0}),h.jsx("textarea",{placeholder:"हामीले तपाईंको लागि के प्रार्थना गर्नुपर्छ? (वैकल्पिक)",rows:5,value:o,onChange:S=>l(S.target.value)}),h.jsx(w0,{selectedFile:u,setSelectedFile:c,currentImageUrl:(r==null?void 0:r.thumbnailUrl)||(r==null?void 0:r.image),label:"फोटो थप्नुहोस्।(यदि तपाईं चाहनुहुन्छ भने)",onImageRemove:()=>m(!0)}),h.jsx("button",{type:"submit",className:"action-button",children:"अनुरोध पठाउनुहोस्।"})]})})},p2=({request:t,onClose:e,currentUser:n})=>{const{db:r}=Gn(),[s,i]=O.useState(""),[o,l]=O.useState([]),[u,c]=O.useState(!1);O.useEffect(()=>{if(!r||!(t!=null&&t.id))return;const m=Ge(r,"prayerRequests",t.id,"comments"),g=Vt(m,yi("createdAt","asc")),S=cn(g,k=>{const P=k.docs.map(b=>({id:b.id,...b.data()}));l(P)});return()=>S()},[r,t==null?void 0:t.id]);const f=async m=>{if(m.preventDefault(),!(!r||!s.trim()||!t||!n||u)){c(!0);try{const g=je(r,"prayerRequests",t.id),S=Ge(g,"comments");await Promise.all([Qs(S,{authorId:n.id,authorName:n.name||"Unknown User",authorAvatar:n.avatar||"",content:s,createdAt:jn()}),Ht(g,{commentCount:lb(1)})]),i(""),e()}catch(g){console.error("Error adding comment: ",g),alert("Failed to post comment.")}finally{c(!1)}}};return t?h.jsx(Kn,{isOpen:!0,onClose:e,position:"bottom",children:h.jsxs("div",{children:[h.jsx("button",{type:"button",className:"modal-close-button",onClick:e,"aria-label":"Close",children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})}),h.jsx("div",{className:"prayer-details-header",children:h.jsx("h3",{children:t.title})}),h.jsxs("p",{className:"prayer-author",children:["By ",t.authorName," - ",$a(t.createdAt)]}),t.image&&h.jsx("img",{src:t.image,alt:t.title,style:{width:"100%",borderRadius:"8px",marginBottom:"16px"}}),t.content&&h.jsx("p",{className:"prayer-main-content",children:t.content}),h.jsxs("div",{className:"prayer-comments-section",children:[h.jsxs("h4",{children:["Comments (",o.length,")"]}),h.jsx("div",{className:"prayer-comment-list",children:o.length>0?o.map(m=>h.jsxs("div",{className:"comment-item",children:[h.jsx("strong",{children:m.authorName}),h.jsx("p",{children:m.content}),h.jsx("span",{className:"comment-timestamp",children:xc(m.createdAt)})]},m.id)):h.jsx("p",{className:"no-comments",children:"No comments yet."})}),h.jsxs("form",{className:"comment-form",onSubmit:f,children:[h.jsx("input",{type:"text",placeholder:"Add a comment...",value:s,onChange:m=>i(m.target.value)}),h.jsx("button",{type:"submit","aria-label":"Send comment",disabled:u||!s.trim(),children:u?h.jsx("div",{className:"spinner-small"}):h.jsx("span",{className:"material-symbols-outlined",children:"send"})})]})]})]})}):null},m2=({currentUser:t,usersMap:e,onChatSelect:n,onCreateChat:r})=>{const{db:s,storage:i}=Gn(),[o,l]=O.useState([]),[u,c]=O.useState(!0),[f,m]=O.useState(!1),[g,S]=O.useState(null),k=Array.from(e.values());O.useEffect(()=>{if(!s||!(t!=null&&t.id))return;c(!0);const E=Vt(Ge(s,"chats"),Ss("participantIds","array-contains",t.id)),N=cn(E,j=>{const M=j.docs.map(T=>({id:T.id,...T.data()}));M.sort((T,v)=>{var w,I;return(((w=v.lastActivity)==null?void 0:w.toMillis())||0)-(((I=T.lastActivity)==null?void 0:I.toMillis())||0)}),l(M),c(!1)},j=>{console.error("Error fetching chats: ",j),c(!1)});return()=>N()},[s,t==null?void 0:t.id]);const P=(E,N)=>{const j=E.participantIds.length>2;if(j&&E.name)return{name:E.name,avatar:""};if(j){const T=E.participantIds.filter(w=>w!==N).map(w=>{var I,C,x,R,ye;return((x=(C=(I=E.participants)==null?void 0:I[w])==null?void 0:C.name)==null?void 0:x.split(" ")[0])||((ye=(R=e.get(w))==null?void 0:R.name)==null?void 0:ye.split(" ")[0])||""});return{name:T.filter(Boolean).slice(0,2).join(", ")+(T.length>2?"...":""),avatar:""}}const M=E.participantIds.find(T=>T!==N);if(M){if(E.participants&&E.participants[M]&&E.participants[M].name)return E.participants[M];const T=e.get(M);if(T)return{name:T.name,avatar:T.avatar}}return{name:"Unknown User",avatar:""}},b=async E=>{const N=await r(E);N&&n(N),m(!1)},A=async E=>{if(!(!s||!i))try{const N=Vt(Ge(s,"chats",E.id,"messages")),j=await Ta(N),M=[];j.forEach(T=>{const v=T.data();v.media&&v.media.forEach(w=>{w.path&&M.push(sn(et(i,w.path)).catch(I=>console.error("Failed to delete media:",I))),w.thumbnailPath&&M.push(sn(et(i,w.thumbnailPath)).catch(I=>console.error("Failed to delete thumbnail:",I)))}),M.push(qn(je(s,"chats",E.id,"messages",T.id)))}),await Promise.all(M),await qn(je(s,"chats",E.id)),S(null)}catch(N){console.error("Error deleting chat:",N),alert("Failed to delete chat. Please try again."),S(null)}},y=E=>{if(!E.lastMessage||!E.lastMessage.content)return"No messages yet";const N=E.lastMessage.senderId===t.id?"You: ":"",j=E.lastMessage.content;return j==="📷 Photo"||j==="📹 Video"||j==="📷 Media"?`${N}${j}`:`${N}${j}`};return h.jsxs("div",{className:"page-content",children:[h.jsx("h2",{children:"संगतिहरु"}),h.jsx("div",{className:"list-container",children:u?h.jsx(vm,{message:"Loading chats..."}):o.length>0?o.map(E=>{const N=P(E,t.id),j=E.lastRead&&E.lastMessage&&E.lastMessage.senderId!==t.id&&(!E.lastRead[t.id]||E.lastRead[t.id]<E.lastMessage.createdAt);return h.jsxs("div",{className:"list-item chat-item",children:[h.jsxs("div",{className:"chat-content-wrapper",onClick:()=>n(E.id),children:[h.jsx("div",{className:"chat-avatar",children:bc(N.name)}),h.jsxs("div",{className:"chat-info",children:[h.jsx("span",{className:"chat-name",children:N.name}),h.jsx("p",{className:"chat-last-message",children:y(E)})]}),h.jsxs("div",{className:"chat-meta",children:[h.jsx("span",{children:E.lastActivity?xc(E.lastActivity):""}),j&&h.jsx("div",{className:"unread-dot"})]})]}),h.jsx("button",{className:"chat-delete-button",onClick:()=>S(E),"aria-label":`Delete chat with ${N.name}`,children:h.jsx("span",{className:"material-symbols-outlined",children:"delete"})})]},E.id)}):h.jsxs("div",{className:"card",style:{textAlign:"center",padding:"32px",color:"#666"},children:[h.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"48px",color:"#ccc",marginBottom:"16px"},children:"chat_bubble"}),h.jsx("p",{children:"No conversations yet."}),h.jsx("p",{style:{fontSize:"var(--font-size-sm)",marginTop:"8px"},children:"Tap the button below to start a new chat."})]})}),h.jsx(Dc,{onClick:()=>m(!0),icon:"groups","aria-label":"New chat"}),h.jsx(g2,{isOpen:f,onClose:()=>m(!1),currentUser:t,users:k,onCreate:b}),h.jsx(Kn,{isOpen:!!g,onClose:()=>S(null),children:h.jsxs("div",{className:"delete-confirmation",children:[h.jsx("h3",{children:"Delete Conversation?"}),h.jsx("p",{children:"This will permanently delete this conversation for everyone. This action cannot be undone."}),h.jsxs("div",{className:"form-actions",children:[h.jsx("button",{className:"action-button secondary",onClick:()=>S(null),children:"Cancel"}),h.jsx("button",{className:"action-button danger",onClick:()=>g&&A(g),children:"Delete"})]})]})})]})},g2=({isOpen:t,onClose:e,currentUser:n,users:r,onCreate:s})=>{const[i,o]=O.useState([]),l=O.useMemo(()=>{const f=new Map;return r.forEach(m=>{m.email&&!f.has(m.email)?f.set(m.email,m):m.email||f.has(m.id)||f.set(m.id,m)}),Array.from(f.values())},[r]),u=f=>{o(m=>m.some(g=>g.id===f.id)?m.filter(g=>g.id!==f.id):[...m,f])},c=()=>{i.length>0&&(s(i),o([]))};return h.jsx(Kn,{isOpen:t,onClose:e,children:h.jsxs("div",{className:"create-chat-modal",children:[h.jsx("h3",{children:"Start a conversation"}),h.jsx("div",{className:"user-list",children:l.filter(f=>f.id!==n.id).map(f=>{const m=i.some(g=>g.id===f.id);return h.jsxs("div",{className:`list-item user-list-item selectable ${m?"selected":""}`,onClick:()=>u(f),children:[h.jsx("div",{className:"chat-avatar",children:bc(f.name)}),h.jsx("div",{className:"chat-info",children:h.jsx("span",{className:"chat-name",children:f.name})}),h.jsx("div",{className:"checkbox",children:m&&h.jsx("span",{className:"material-symbols-outlined",children:"check"})})]},f.id)})}),h.jsxs("button",{className:"action-button",style:{marginTop:"16px"},onClick:c,disabled:i.length===0,children:["Start Chat (",i.length,")"]})]})})},y2=({isOpen:t,onClose:e,onSave:n,currentName:r})=>{const[s,i]=O.useState("");O.useEffect(()=>{t&&i(r)},[t,r]);const o=l=>{l.preventDefault(),s.trim()&&n(s.trim())};return h.jsx(Kn,{isOpen:t,onClose:e,children:h.jsxs("form",{className:"modal-form",onSubmit:o,children:[h.jsx("h3",{children:"Rename Group Chat"}),h.jsx("input",{type:"text",placeholder:"Enter new chat name",value:s,onChange:l=>i(l.target.value),required:!0}),h.jsxs("div",{className:"form-actions",children:[h.jsx("button",{type:"button",className:"action-button secondary",onClick:e,children:"Cancel"}),h.jsx("button",{type:"submit",className:"action-button",children:"Save"})]})]})})},_2=({chatId:t,currentUser:e,onBack:n})=>{const{db:r,storage:s}=Gn(),{showToast:i}=_m(),[o,l]=O.useState([]),[u,c]=O.useState([]),[f,m]=O.useState(""),[g,S]=O.useState([]),[k,P]=O.useState(null),[b,A]=O.useState(!0),[y,E]=O.useState(null),[N,j]=O.useState(null),[M,T]=O.useState(!1),v=O.useRef(null),w=O.useRef(null),I=O.useRef(null),[C,x]=O.useState(!0),R=O.useRef(0),ye=O.useMemo(()=>[...o,...u].sort((V,H)=>{var G,re;return(((G=V.createdAt)==null?void 0:G.toMillis())||0)-(((re=H.createdAt)==null?void 0:re.toMillis())||0)}),[o,u]),Fe=O.useCallback((V="auto")=>{const H=I.current;H&&H.scrollTo({top:H.scrollHeight,behavior:V})},[]),Bt=O.useCallback(()=>{const V=I.current;if(V){const H=V.scrollHeight-V.scrollTop<=V.clientHeight+50;x(H)}},[]),ut=O.useCallback(()=>{C&&Fe("auto")},[C,Fe]);O.useEffect(()=>{const V=R.current===0&&ye.length>0,H=ye.length>R.current;V?setTimeout(()=>Fe("auto"),100):H&&(ye[ye.length-1].senderId===e.id||C)&&Fe("smooth"),R.current=ye.length},[ye,e.id,C,Fe]),O.useEffect(()=>{if(!r||!t)return;A(!0),R.current=0;const V=je(r,"chats",t),H=cn(V,_e=>{_e.exists()?P({id:_e.id,..._e.data()}):n()}),G=Vt(Ge(r,"chats",t,"messages"),yi("createdAt","asc")),re=cn(G,_e=>{const ct=_e.docs.map(Ce=>({id:Ce.id,...Ce.data()}));l(ct);const Ue=new Set(ct.map(Ce=>Ce.tempId).filter(Boolean));ct.forEach(Ce=>{Ce.tempId&&Ce.media&&Ce.media.forEach((Me,vt)=>{const Xe=`${Ce.tempId}-${vt}`,wt=`${Ce.id}-${vt}`;cf.renameKey(Xe,wt).catch(Et=>console.warn(`Failed to rename cache key from ${Xe} to ${wt}:`,Et))})}),c(Ce=>Ce.filter(Me=>!Ue.has(Me.tempId))),A(!1)});return Ht(V,{[`lastRead.${e.id}`]:xe.now()}).catch(_e=>console.error("Error updating lastRead:",_e)),()=>{H(),re()}},[r,t,n,e.id]);const $=O.useCallback(async()=>{var ct;const V=f.trim(),H=[...g];if(!r||!s||!k||!e||!V&&H.length===0)return;m(""),S([]),(ct=w.current)==null||ct.focus();const G=crypto.randomUUID(),re={id:G,tempId:G,senderId:e.id,createdAt:xe.now(),status:"uploading",...V&&{content:V},...H.length>0&&{media:H.map(Ue=>({url:Ue.url,type:Ue.type}))}};c(Ue=>[...Ue,re]);let _e=V;!V&&H.length>0&&(_e=H.length>1?"📷 Media":H[0].type==="video"?"📹 Video":"📷 Photo"),Ht(je(r,"chats",k.id),{lastMessage:{content:_e,senderId:e.id,createdAt:jn()},lastActivity:jn(),[`lastRead.${e.id}`]:jn()}).catch(Ue=>console.error("Optimistic last message update failed:",Ue));try{const Ue=async Xe=>{const wt=Date.now(),Et=Xe.file.name.replace(/[^a-zA-Z0-9.]/g,"_");if(Xe.type==="image"){const[Xt,Dn]=await Promise.all([qi(Xe.file,1024,.75),qi(Xe.file,400,.7)]),ls=`chat_media/${k.id}/${wt}_${Et}`,Q=`chat_media/${k.id}/${wt}_thumb_${Et}`,q=et(s,ls),se=et(s,Q);await Promise.all([Qr(q,Xt),Qr(se,Dn)]);const[ce,fe]=await Promise.all([Yr(q),Yr(se)]);return{mediaItem:{url:ce,thumbnailUrl:fe,type:"image",path:ls,thumbnailPath:Q},thumbBlob:Dn}}else{const Xt=`chat_media/${k.id}/${wt}_${Et}`,Dn=et(s,Xt);return await Qr(Dn,Xe.file),{mediaItem:{url:await Yr(Dn),type:"video",path:Xt}}}},Ce=await Promise.all(H.map(Ue));Ce.forEach((Xe,wt)=>{if(Xe.thumbBlob){const Et=`${G}-${wt}`;cf.storeImage(Et,Xe.thumbBlob).catch(Xt=>console.error("Failed to cache image",Xt))}});const Me=Ce.map(Xe=>Xe.mediaItem),vt={senderId:e.id,createdAt:jn(),tempId:G,...V&&{content:V},...Me.length>0&&{media:Me}};await Qs(Ge(r,"chats",k.id,"messages"),vt)}catch(Ue){console.error("❌ Failed to send message. Error Code:",Ue.code,"Message:",Ue.message),i("Error","Failed to send message."),c(Ce=>Ce.map(Me=>Me.tempId===G?{...Me,status:"failed"}:Me))}},[f,g,r,s,k,e,i]),Z=V=>{if(V.target.files){const G=Array.from(V.target.files).map(re=>({id:crypto.randomUUID(),url:URL.createObjectURL(re),file:re,type:re.type.startsWith("image/")?"image":"video"}));S(re=>[...re,...G]),v.current&&(v.current.value="")}},ne=async V=>{if(!(!r||!s||!V||!k)&&(E(null),V.status?c(H=>H.filter(G=>G.tempId!==V.tempId)):l(H=>H.filter(G=>G.id!==V.id)),!(V.tempId&&V.status!=="failed")))try{V.media&&V.media.length>0&&await Promise.all(V.media.flatMap(H=>{const G=[];return H.path&&G.push(sn(et(s,H.path)).catch(re=>console.error(`Failed to delete media ${H.path}:`,re))),H.thumbnailPath&&G.push(sn(et(s,H.thumbnailPath)).catch(re=>console.error(`Failed to delete thumb ${H.thumbnailPath}:`,re))),G})),V.tempId||await qn(je(r,"chats",k.id,"messages",V.id))}catch(H){console.error("Error deleting message:",H),alert("Failed to delete message.")}},Te=async V=>{if(!(!r||!k||!V.trim()))try{await Ht(je(r,"chats",k.id),{name:V.trim()}),T(!1)}catch(H){console.error("Error renaming chat:",H),alert("Failed to rename chat.")}},W=()=>{var H;if(k!=null&&k.name)return k.name;if(!(k!=null&&k.participants))return"Conversation";if(k.participantIds.length>2)return k.participantIds.filter(G=>G!==e.id).map(G=>{const re=k.participants[G];return re!=null&&re.name?re.name.split(" ")[0]:""}).filter(Boolean).join(", ");const V=k.participantIds.find(G=>G!==e.id);return V?(H=k.participants[V])==null?void 0:H.name:"Chat"};return h.jsxs("div",{className:"conversation-page",children:[h.jsxs("header",{className:"conversation-header",children:[h.jsx("button",{onClick:n,className:"back-button","aria-label":"Back to chats",children:h.jsx("span",{className:"material-symbols-outlined",children:"arrow_back"})}),h.jsx("h3",{children:W()}),((k==null?void 0:k.participantIds.length)??0)>2?h.jsx("button",{onClick:()=>T(!0),className:"header-action-button","aria-label":"Rename chat",children:h.jsx("span",{className:"material-symbols-outlined",children:"edit"})}):h.jsx("div",{className:"header-action-button",style:{visibility:"hidden"}})]}),h.jsx("div",{className:"message-list",ref:I,onScroll:Bt,children:b?h.jsx(vm,{message:"Loading messages..."}):h.jsx(h.Fragment,{children:ye.map((V,H)=>{var Et;const G=H>0?ye[H-1]:null,re=!G||!JO(V.createdAt,G.createdAt),_e=((k==null?void 0:k.participantIds.length)??0)>2,ct=V.senderId===e.id,Ue=!G||G.senderId!==V.senderId||re,Ce=_e&&!ct&&Ue,Me=(Et=k==null?void 0:k.participants)==null?void 0:Et[V.senderId],vt=Me==null?void 0:Me.name,Xe=Me==null?void 0:Me.avatar,wt=e2(vt);return h.jsxs(hv.Fragment,{children:[re&&h.jsx("div",{className:"date-separator",children:h.jsx("span",{children:$a(V.createdAt)})}),h.jsx(v2,{message:V,isSent:ct,isGroupChat:_e,senderName:Ce?wt:void 0,senderFullName:vt,senderAvatar:Xe,senderId:V.senderId,showAvatar:_e&&!ct&&Ue,onMediaClick:Xt=>V.media&&j({media:V.media,startIndex:Xt}),onLongPress:()=>E(V),onImageLoad:ut})]},V.tempId||V.id)})})}),h.jsxs("div",{className:"message-input-container",children:[g.length>0&&h.jsx("div",{className:"media-preview-container",children:g.map(V=>h.jsxs("div",{className:"media-preview-item",children:[V.type==="image"?h.jsx("img",{src:V.url,alt:"preview"}):h.jsx("video",{src:V.url}),h.jsx("button",{onClick:()=>S(H=>H.filter(G=>G.id!==V.id)),children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})})]},V.id))}),h.jsxs("div",{className:"message-input-row",children:[h.jsx("input",{type:"file",ref:v,onChange:Z,style:{display:"none"},multiple:!0,accept:"image/*,video/*",disabled:b}),h.jsx("button",{className:"input-action-button",onMouseDown:V=>V.preventDefault(),onClick:()=>{var V;return(V=v.current)==null?void 0:V.click()},"aria-label":"Attach file",disabled:b,children:h.jsx("span",{className:"material-symbols-outlined",children:"add_photo_alternate"})}),h.jsx("input",{ref:w,type:"text",placeholder:"Type a message...",value:f,onChange:V=>m(V.target.value),onKeyPress:V=>V.key==="Enter"&&$(),disabled:b}),h.jsx("button",{className:"send-button",onClick:$,disabled:b||!f.trim()&&g.length===0,children:h.jsx("span",{className:"material-symbols-outlined",children:"send"})})]})]}),y&&h.jsx(Kn,{isOpen:!0,onClose:()=>E(null),children:h.jsxs("div",{className:"delete-confirmation",children:[h.jsx("p",{children:"Are you sure you want to delete this message for everyone?"}),h.jsxs("div",{className:"form-actions",children:[h.jsx("button",{className:"action-button secondary",onClick:()=>E(null),children:"Cancel"}),h.jsx("button",{className:"action-button danger",onClick:()=>ne(y),children:"Delete"})]})]})}),N&&h.jsx(E2,{mediaItems:N.media,startIndex:N.startIndex,onClose:()=>j(null)}),M&&h.jsx(y2,{isOpen:M,onClose:()=>T(!1),onSave:Te,currentName:W()})]})},v2=({message:t,isSent:e,isGroupChat:n,senderName:r,senderFullName:s,senderAvatar:i,senderId:o,showAvatar:l,onMediaClick:u,onLongPress:c,onImageLoad:f})=>{const m=O.useRef(null),g=()=>{e&&(m.current=window.setTimeout(()=>{c(),m.current=null},700))},S=()=>{m.current&&(clearTimeout(m.current),m.current=null)},k=b=>{e&&(b.preventDefault(),c())},P=o?t2(o):"#2563eb";return h.jsxs("div",{className:`message-container ${e?"sent":"received"} ${n?"group-message":""}`,children:[!e&&n&&h.jsx("div",{className:"message-avatar-container",children:l?i?h.jsx("img",{src:i,alt:r||"Avatar",className:"message-avatar"}):h.jsx("div",{className:"message-avatar-placeholder",style:{backgroundColor:P},children:bc(s||r)}):h.jsx("div",{className:"message-avatar-spacer"})}),h.jsxs("div",{className:"message-content-wrapper",children:[r&&h.jsx("span",{className:"message-sender-name",style:{color:P},children:r}),h.jsxs("div",{className:`message-bubble ${t.media?"has-media":""}`,onMouseDown:g,onMouseUp:S,onTouchStart:g,onTouchEnd:S,onContextMenu:k,children:[t.media&&t.media.length>0&&h.jsx(w2,{media:t.media,messageId:t.id,onMediaClick:u,onImageLoad:f}),t.content&&h.jsx("p",{className:"message-content",children:t.content}),h.jsxs("div",{className:"message-footer",children:[h.jsx("span",{className:"message-timestamp",children:ZO(t.createdAt)}),t.status==="uploading"&&h.jsx("div",{className:"spinner-small",style:{borderColor:"#999",borderTopColor:"#666"}}),t.status==="failed"&&h.jsx("span",{className:"material-symbols-outlined message-failed-indicator",children:"error"})]})]})]})]})},ev=({item:t,messageId:e,onClick:n,onImageLoad:r})=>{const s=r2(t.thumbnailUrl||t.url,e);return h.jsxs("div",{className:"media-grid-item",onClick:i=>{i.stopPropagation(),n()},children:[t.type==="image"?h.jsx("img",{src:s,alt:"media content",onLoad:r}):h.jsx("video",{src:t.url}),t.type==="video"&&h.jsx("div",{className:"video-play-icon",children:h.jsx("span",{className:"material-symbols-outlined",children:"play_circle"})})]})},w2=({media:t,messageId:e,onMediaClick:n,onImageLoad:r})=>{const s=t.length,i=s>4?t.slice(0,4):t;return h.jsxs("div",{className:`media-grid count-${Math.min(s,4)}`,children:[i.map((o,l)=>h.jsx(ev,{item:o,messageId:`${e}-${l}`,onClick:()=>n(l),onImageLoad:r},l)),s>4&&h.jsxs("div",{className:"media-grid-item",onClick:o=>{o.stopPropagation(),n(3)},children:[h.jsx(ev,{item:i[3],messageId:`${e}-3`,onClick:()=>n(3),onImageLoad:r}),h.jsxs("div",{className:"more-overlay",children:["+",s-4]})]})]})},E2=({mediaItems:t,startIndex:e,onClose:n})=>{const[r,s]=O.useState(e),i=t[r],o=u=>{u.stopPropagation(),s(c=>c>0?c-1:t.length-1)},l=u=>{u.stopPropagation(),s(c=>c<t.length-1?c+1:0)};return Yi.createPortal(h.jsxs("div",{className:"media-viewer-backdrop",onClick:n,children:[h.jsx("div",{className:"media-viewer-content",onClick:u=>u.stopPropagation(),children:i.type==="image"?h.jsx("img",{src:i.url,alt:"media"}):h.jsx("video",{src:i.url,controls:!0,autoPlay:!0})}),h.jsx("button",{className:"media-viewer-close",onClick:n,children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})}),t.length>1&&h.jsxs(h.Fragment,{children:[h.jsx("button",{className:"media-viewer-nav prev",onClick:o,children:h.jsx("span",{className:"material-symbols-outlined",children:"arrow_back_ios"})}),h.jsx("button",{className:"media-viewer-nav next",onClick:l,children:h.jsx("span",{className:"material-symbols-outlined",children:"arrow_forward_ios"})})]})]}),document.body)},T2=({isOpen:t,onClose:e,notifications:n})=>Yi.createPortal(h.jsxs(h.Fragment,{children:[h.jsx("div",{className:`notification-backdrop ${t?"open":""}`,onClick:e}),h.jsxs("div",{className:`notification-panel ${t?"open":""}`,children:[h.jsxs("header",{className:"notification-header",children:[h.jsx("h3",{children:"Notifications"}),h.jsx("button",{className:"panel-close-button",onClick:e,"aria-label":"Close notifications",children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})})]}),h.jsx("div",{className:"notification-list",children:n.length>0?n.map(r=>h.jsxs("div",{className:"notification-item",children:[h.jsx("span",{className:"material-symbols-outlined notification-icon",children:r.icon}),h.jsxs("div",{children:[h.jsx("p",{children:r.message}),h.jsx("p",{className:"notification-timestamp",children:r.timestamp})]})]},r.id)):h.jsx("div",{className:"no-notifications",children:h.jsx("p",{children:"You have no new notifications."})})})]})]}),document.body),I2=()=>{const[t,e]=O.useState(null);O.useEffect(()=>{const i=navigator.userAgent||navigator.vendor||window.opera;/iPad|iPhone|iPod/.test(i)&&!window.MSStream?e("ios"):/android/i.test(i)?e("android"):e("other")},[]);const n=()=>h.jsxs("div",{className:"instruction-steps",children:[h.jsx("h3",{children:"iPhone/iPad को लागि निर्देशनहरू"}),h.jsxs("div",{className:"step",children:[h.jsx("p",{children:"१. आफ्नो ब्राउजरमा, 'Share' आइकनमा ट्याप गर्नुहोस्।"}),h.jsx("span",{className:"material-symbols-outlined instruction-icon",children:"ios_share"})]}),h.jsxs("div",{className:"step",children:[h.jsx("p",{children:"२. विकल्पहरूबाट 'Add to Home Screen' छान्नुहोस्।"}),h.jsx("span",{className:"material-symbols-outlined instruction-icon",children:"add_box"})]}),h.jsxs("div",{className:"step",children:[h.jsx("p",{children:"३. स्थापना पुष्टि गर्न 'Add' मा ट्याप गर्नुहोस्।"}),h.jsx("span",{className:"material-symbols-outlined instruction-icon",children:"add"})]})]}),r=()=>h.jsxs("div",{className:"instruction-steps",children:[h.jsx("h3",{children:"Android को लागि निर्देशनहरू"}),h.jsxs("div",{className:"step",children:[h.jsx("p",{children:"१. आफ्नो ब्राउजरमा, मेनु आइकन (३ थोप्ला) मा ट्याप गर्नुहोस्।"}),h.jsx("span",{className:"material-symbols-outlined instruction-icon",children:"more_vert"})]}),h.jsxs("div",{className:"step",children:[h.jsx("p",{children:"२. 'Install app' वा 'Add to Home Screen' छान्नुहोस्।"}),h.jsx("span",{className:"material-symbols-outlined instruction-icon",children:"install_mobile"})]}),h.jsxs("div",{className:"step",children:[h.jsx("p",{children:"३. स्थापना पुष्टि गर्न 'Install' मा ट्याप गर्नुहोस्।"}),h.jsx("span",{className:"material-symbols-outlined instruction-icon",children:"download"})]})]}),s=()=>h.jsxs("div",{className:"instruction-steps",children:[h.jsx("h3",{children:"एप स्थापना गर्नुहोस्"}),h.jsxs("p",{children:[h.jsx("strong",{children:"डेस्कटप ब्राउजर:"})," ठेगाना पट्टीको दायाँपट्टि रहेको स्थापना आइकनमा क्लिक गर्नुहोस्।"]}),h.jsxs("p",{children:[h.jsx("strong",{children:"अन्य मोबाइल:"})," आफ्नो ब्राउजरको मेनुमा 'Add to Home Screen' वा 'Install App' विकल्प खोज्नुहोस्।"]})]});return h.jsxs("div",{className:"page-content install-guide-container",children:[h.jsx("img",{src:en.logo,alt:"Church Logo",className:"install-guide-logo"}),h.jsxs("h2",{children:[en.name," एप"]}),h.jsx("p",{className:"install-guide-subtitle",children:"सजिलो पहुँचको लागि आफ्नो फोनमा एप स्थापना गर्नुहोस्।"}),h.jsxs("div",{className:"card",children:[t==="ios"&&h.jsx(n,{}),t==="android"&&h.jsx(r,{}),t==="other"&&h.jsx(s,{}),!t&&h.jsx(vm,{message:"तपाईंको यन्त्र पहिचान गरिँदैछ..."})]}),h.jsxs("a",{href:"/",className:"action-button install-guide-button",children:["एपमा जानुहोस्",h.jsx("span",{className:"material-symbols-outlined",children:"arrow_forward"})]})]})},S2=({isOpen:t,onClose:e,currentUser:n,setCurrentUser:r})=>{var ne,Te;const s=Gn(),{auth:i,db:o}=s,{showToast:l}=_m(),[u,c]=O.useState(!1),[f,m]=O.useState(!1),[g,S]=O.useState(""),[k,P]=O.useState(""),[b,A]=O.useState(!1),[y,E]=O.useState(["davidrai441@gmail.com"]),[N,j]=O.useState(""),[M,T]=O.useState(!1),[v,w]=O.useState("");if(O.useEffect(()=>{if(!t||!n.roles.includes("admin")||!o)return;const W=je(o,"admin_settings","config"),V=cn(W,H=>{if(H.exists()){const re=(H.data().adminEmails||[]).map(_e=>_e.toLowerCase());re.includes("davidrai441@gmail.com")||re.unshift("davidrai441@gmail.com"),E([...new Set(re)])}else E(["davidrai441@gmail.com"]),af(W,{adminEmails:["davidrai441@gmail.com"]},{merge:!0}).catch(console.error)});return()=>V()},[t,n.roles,o]),!t)return null;const C=((Te=(ne=i==null?void 0:i.currentUser)==null?void 0:ne.providerData[0])==null?void 0:Te.providerId)==="google.com",x=async W=>{if(!o)return;const V=n.notificationPreferences||{},H={...V,[W]:!V[W]};r(G=>G?{...G,notificationPreferences:H}:null);try{await Ht(je(o,"users",n.id),{notificationPreferences:H}),l("Settings Saved","Notification preferences updated.")}catch(G){console.error("Failed to update notification settings",G),l("Error","Failed to save notification preferences."),r(re=>re?{...re,notificationPreferences:V}:null)}},R=async W=>{if(W.preventDefault(),!o)return;w("");const V=N.trim().toLowerCase();if(!V)return;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(V)){w("Please enter a valid email address.");return}if(y.includes(V)){w("This email is already registered as an administrator.");return}T(!0);try{const G=je(o,"admin_settings","config");await af(G,{adminEmails:Ia(V)},{merge:!0});const re=Ge(o,"users"),_e=Vt(re,Ss("email","==",V));(await Ta(_e)).forEach(async Ue=>{await Ht(Ue.ref,{roles:Ia("admin")})}),j(""),l("Admin Added",`Added ${V} as an administrator.`)}catch(G){console.error("Failed to add admin email",G),w(G.message||"Failed to add admin email.")}finally{T(!1)}},ye=async W=>{if(o){if(W==="davidrai441@gmail.com"){alert("The primary administrator cannot be removed.");return}if(!(W===n.email&&!window.confirm("Are you sure you want to remove yourself from the admin list?")))try{const V=je(o,"admin_settings","config");await Ht(V,{adminEmails:Mu(W)});const H=Ge(o,"users"),G=Vt(H,Ss("email","==",W));(await Ta(G)).forEach(async _e=>{await Ht(_e.ref,{roles:Mu("admin")})}),l("Admin Removed",`Removed ${W} from administrator list.`)}catch(V){console.error("Failed to remove admin email",V),l("Error","Failed to remove admin email.")}}},Fe=async()=>{if(!(!i||!i.currentUser||!o))try{const W=i.currentUser.uid;await qn(je(o,"users",W)),await i.currentUser.delete(),l("Account Deleted","Your account has been deleted successfully."),e()}catch(W){console.error("Account deletion error",W),W.code==="auth/requires-recent-login"?m(!0):P(W.message||"An error occurred while deleting your account."),A(!1)}},Bt=async()=>{P(""),window.confirm("Are you sure you want to permanently delete your account? This action cannot be undone and all your data will be deleted.")&&(A(!0),await Fe())},ut=async W=>{if(W.preventDefault(),!(!i||!i.currentUser||!i.currentUser.email)){P(""),A(!0);try{const V=Ws.credential(i.currentUser.email,g);await HC(i.currentUser,V),await Fe()}catch(V){console.error("Email reauth failed",V);let H=V.message;(V.code==="auth/wrong-password"||V.code==="auth/invalid-credential")&&(H="Incorrect password. Please try again."),P(H),A(!1)}}},$=async()=>{if(!(!i||!i.currentUser)){P(""),A(!0);try{const W=new Vn;await vP(i.currentUser,W),await Fe()}catch(W){console.error("Google reauth failed",W),P("Google authentication failed. Please try again."),A(!1)}}},Z=[{key:"news",label:"Announcements",desc:"Receive church announcements and news notifications"},{key:"worship",label:"Worship",desc:"Receive live worship streaming and video notifications"},{key:"podcast",label:"Podcast",desc:"Receive new audio podcast notifications"},{key:"prayer",label:"Prayer Requests",desc:"Receive new prayer request notifications"},{key:"chat",label:"Chat",desc:"Receive new chat message notifications"}];return Yi.createPortal(h.jsx("div",{className:"modal-backdrop",onClick:e,children:h.jsxs("div",{className:"modal-content settings-modal-content",onClick:W=>W.stopPropagation(),children:[h.jsxs("header",{className:"settings-header",children:[h.jsx("h2",{children:"Settings"}),h.jsx("button",{className:"modal-close-button",onClick:e,"aria-label":"Close settings",children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})})]}),h.jsxs("div",{className:"settings-scroll-container",children:[h.jsx("div",{className:"settings-section profile-section",children:h.jsxs("div",{className:"profile-details",children:[n.avatar?h.jsx("img",{src:n.avatar,alt:n.name,className:"profile-avatar"}):h.jsx("div",{className:"profile-avatar-placeholder",children:bc(n.name)}),h.jsxs("div",{className:"profile-info",children:[h.jsx("h3",{children:n.name}),h.jsx("p",{children:n.email}),h.jsx("span",{className:"user-role-badge",children:n.roles.includes("admin")?"Admin":"Member"})]})]})}),n.roles.includes("admin")&&h.jsxs("div",{className:"settings-section admin-section",children:[h.jsx("h4",{className:"section-title",children:"Admin Management"}),h.jsx("p",{className:"section-subtitle",children:"Add and manage administrator email addresses for app management."}),h.jsxs("form",{onSubmit:R,className:"add-admin-form",children:[h.jsxs("div",{className:"admin-input-group",children:[h.jsx("input",{type:"email",placeholder:"Enter admin email address",value:N,onChange:W=>j(W.target.value),className:"admin-email-input",disabled:M}),h.jsxs("button",{type:"submit",className:"add-admin-btn",disabled:M||!N.trim(),children:[h.jsx("span",{className:"material-symbols-outlined",children:"person_add"})," Add"]})]}),v&&h.jsx("p",{className:"admin-error-msg",children:v})]}),h.jsxs("div",{className:"admin-list-container",children:[h.jsx("h5",{className:"admin-list-title",children:"Current Administrators"}),h.jsx("ul",{className:"admin-email-list",children:y.map(W=>h.jsxs("li",{className:"admin-email-item",children:[h.jsxs("div",{className:"admin-email-info",children:[h.jsx("span",{className:"material-symbols-outlined admin-icon",children:"admin_panel_settings"}),h.jsx("span",{className:"admin-email-text",children:W}),W==="davidrai441@gmail.com"&&h.jsx("span",{className:"primary-admin-tag",children:"Primary"}),W===n.email.toLowerCase()&&h.jsx("span",{className:"you-tag",children:"You"})]}),W!=="davidrai441@gmail.com"&&h.jsx("button",{type:"button",className:"remove-admin-btn",onClick:()=>ye(W),title:"Remove admin",children:h.jsx("span",{className:"material-symbols-outlined",children:"delete"})})]},W))})]})]}),h.jsxs("div",{className:"settings-section",children:[h.jsx("h4",{className:"section-title",children:"Notifications"}),h.jsx("div",{className:"preferences-list",children:Z.map(({key:W,label:V,desc:H})=>{var re;const G=((re=n.notificationPreferences)==null?void 0:re[W])!==!1;return h.jsxs("div",{className:"preference-item",children:[h.jsxs("div",{className:"preference-text",children:[h.jsx("div",{className:"preference-label",children:V}),h.jsx("div",{className:"preference-desc",children:H})]}),h.jsxs("label",{className:"switch-toggle",children:[h.jsx("input",{type:"checkbox",checked:G,onChange:()=>x(W)}),h.jsx("span",{className:"switch-slider"})]})]},W)})})]}),h.jsxs("div",{className:"settings-section",children:[h.jsx("h4",{className:"section-title",children:"Legal & Info"}),h.jsxs("div",{className:"settings-links",children:[h.jsxs("a",{href:"/terms.html",target:"_blank",rel:"noopener noreferrer",className:"settings-link-item",children:[h.jsx("span",{className:"material-symbols-outlined",children:"description"}),h.jsx("span",{children:"Terms of Use"}),h.jsx("span",{className:"material-symbols-outlined arrow-icon",children:"open_in_new"})]}),h.jsxs("a",{href:"/privacy.html",target:"_blank",rel:"noopener noreferrer",className:"settings-link-item",children:[h.jsx("span",{className:"material-symbols-outlined",children:"policy"}),h.jsx("span",{children:"Privacy Policy"}),h.jsx("span",{className:"material-symbols-outlined arrow-icon",children:"open_in_new"})]})]})]}),h.jsxs("div",{className:"settings-section danger-zone",children:[h.jsx("h4",{className:"section-title",children:"Account Management"}),!u&&!f?h.jsxs("button",{type:"button",className:"delete-account-trigger-btn",onClick:()=>c(!0),children:[h.jsx("span",{className:"material-symbols-outlined",children:"delete_forever"}),"Delete Account"]}):h.jsxs("div",{className:"delete-account-confirm-box",children:[h.jsx("p",{className:"warning-title",children:"⚠️ Permanent Account Deletion Notice"}),h.jsx("p",{className:"warning-text",children:"Deleting your account will permanently delete your account info and profile and cannot be restored. (Your posted prayer requests and chat history will be shown as a deleted member or removed.)"}),f?h.jsxs("div",{className:"reauth-container",children:[h.jsx("p",{className:"reauth-prompt",children:"For security, please sign in again."}),C?h.jsxs("button",{type:"button",className:"google-reauth-btn",onClick:$,disabled:b,children:[h.jsxs("svg",{viewBox:"0 0 48 48",width:"18px",height:"18px",children:[h.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),h.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),h.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),h.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]}),h.jsx("span",{children:"Re-authenticate with Google"})]}):h.jsxs("form",{onSubmit:ut,className:"reauth-form",children:[h.jsx("input",{type:"password",placeholder:"Enter Password",value:g,onChange:W=>S(W.target.value),required:!0,className:"reauth-input",disabled:b}),h.jsx("button",{type:"submit",className:"reauth-submit-btn",disabled:b,children:b?"Deleting...":"Confirm Password & Delete Account"})]}),k&&h.jsx("p",{className:"reauth-error-msg",children:k}),h.jsx("button",{type:"button",className:"reauth-cancel-btn",onClick:()=>{m(!1),c(!1)},disabled:b,children:"Cancel"})]}):h.jsxs("div",{className:"confirm-buttons",children:[h.jsx("button",{type:"button",className:"delete-confirm-btn",onClick:Bt,disabled:b,children:b?"Processing...":"Yes, Delete Account"}),h.jsx("button",{type:"button",className:"delete-cancel-btn",onClick:()=>c(!1),disabled:b,children:"No, Keep Account"})]})]})]}),h.jsxs("div",{className:"settings-app-info",children:[h.jsx("p",{children:"Logos Church, Nepal App v1.0.0"}),h.jsx("p",{children:"© 2026 Logos Church, Nepal. All rights reserved."})]})]})]})}),document.body)},A2=()=>{const t=Gn(),{auth:e,db:n}=t,{showToast:r}=_m(),[s,i]=O.useState(null),[o,l]=O.useState(!0),[u,c]=O.useState("news");O.useEffect(()=>{Z(Q=>({...Q,[u]:0})),Ce(u)},[u]);const[f,m]=O.useState(null),[g,S]=O.useState(!1),[k,P]=O.useState(!1),[b,A]=O.useState(null),[y,E]=O.useState([]),[N,j]=O.useState([]),[M,T]=O.useState([]),[v,w]=O.useState([]),[I,C]=O.useState([]),[x,R]=O.useState([]),[ye,Fe]=O.useState(!1),[Bt,ut]=O.useState(0),[$,Z]=O.useState({}),[ne,Te]=O.useState("default");O.useEffect(()=>{let Q=Bt;for(const q in $)q!=="chat"&&(Q+=$[q]||0);"setAppBadge"in navigator&&(Q>0?navigator.setAppBadge(Q).catch(q=>console.error(q)):navigator.clearAppBadge().catch(q=>console.error(q)));try{const q=indexedDB.open("badge-store",1);q.onupgradeneeded=se=>{se.target.result.createObjectStore("badges",{keyPath:"id"})},q.onsuccess=se=>{se.target.result.transaction("badges","readwrite").objectStore("badges").put({id:"count",value:Q})}}catch{}},[Bt,$]);const[W,V]=O.useState(()=>{try{return localStorage.getItem("notificationBannerDismissed")==="true"}catch{return!1}}),H=O.useRef(!1);if(window.location.pathname==="/install")return h.jsx(I2,{});const G=!!f,re=O.useMemo(()=>{const Q=new Map;return I.forEach(q=>Q.set(q.id,q)),Q},[I]),_e={news:{label:"सुचना",icon:"feed"},worship:{label:"आरधना",icon:"church"},podcast:{label:"Podcast",icon:"podcasts"},bible:{label:"बाइबल",icon:"menu_book"},chat:{label:"संगतिहरु",icon:"groups"},prayer:{label:"प्रार्थना",icon:"volunteer_activism"}},ct=["news","worship","podcast","bible","chat","prayer"];O.useEffect(()=>{if(!e||!n)return;const Q=XC(e,async q=>{if(q){const se=je(n,"users",q.uid),ce=await Od(se);let fe=["davidrai441@gmail.com"];try{const te=await Od(je(n,"admin_settings","config"));te.exists()&&Array.isArray(te.data().adminEmails)&&(fe=[...new Set([...fe,...te.data().adminEmails.map(Ae=>Ae.toLowerCase())])])}catch(te){console.error("Failed to fetch admin emails configuration",te)}let me=[];const Ie=ce.exists()?ce.data().roles||[]:[],X=(q.email||"").toLowerCase(),ue=X?fe.includes(X):!1;if(ue&&!Ie.includes("admin")&&me.push("admin"),q.email==="koiralacm@gmail.com"&&(Ie.includes("news_contributor")||me.push("news_contributor"),Ie.includes("podcast_contributor")||me.push("podcast_contributor")),ce.exists()){me.length>0&&await Ht(se,{roles:Ia(...me)});const te=ce.data();let Ae=[...new Set([...Ie,...me])];!ue&&Ae.includes("admin")&&X!=="davidrai441@gmail.com"&&(Ae=Ae.filter(Er=>Er!=="admin"),await Ht(se,{roles:Mu("admin")})),!q.displayName&&te.name&&await zh(q,{displayName:te.name}),!q.photoURL&&te.avatar&&await zh(q,{photoURL:te.avatar});const Ys={news:!0,prayer:!0,chat:!0,worship:!0,podcast:!0,...te.notificationPreferences||{}};i({id:q.uid,name:q.displayName||te.name||"",email:q.email||te.email||"",avatar:q.photoURL||te.avatar||"",roles:Ae,notificationPreferences:Ys})}else{const te=["member"];let Ae=[...new Set([...te,...me])];const Be={name:q.displayName||"New User",email:q.email||"",avatar:q.photoURL||"",roles:Ae,notificationPreferences:{news:!0,prayer:!0,chat:!0,worship:!0,podcast:!0}};await af(se,Be),i({id:q.uid,...Be})}}else i(null);l(!1)});return()=>Q()},[e,n]),O.useEffect(()=>{if(!n||!s)return;const Q=cn(Vt(Ge(n,"worshipServices"),Ss("isLive","==",!0),ib(1)),X=>{A(X.empty?null:{id:X.docs[0].id,...X.docs[0].data()})}),q=cn(Vt(Ge(n,"pastWorshipServices"),yi("createdAt","desc")),X=>{const ue=Date.now()-5184e6,te=[];X.docs.forEach(Ae=>{const Be=Ae.data(),Ys={id:Ae.id,...Be};if(Be.createdAt&&(typeof Be.createdAt.toMillis=="function"?Be.createdAt.toMillis():Be.createdAt.seconds?Be.createdAt.seconds*1e3:Date.now())<ue){qn(je(n,"pastWorshipServices",Ae.id)).catch(za=>{console.error("Error auto-deleting old past worship service:",za)});return}te.push(Ys)}),E(te)}),se=cn(Vt(Ge(n,"news"),yi("createdAt","desc")),X=>{const ue=X.docs.map(te=>({id:te.id,...te.data()}));j(ue)}),ce=cn(Vt(Ge(n,"podcasts"),yi("createdAt","desc")),X=>{const ue=X.docs.map(te=>({id:te.id,...te.data()}));T(ue)}),fe=cn(Vt(Ge(n,"prayerRequests"),yi("createdAt","desc")),X=>{const ue=X.docs.map(te=>({id:te.id,...te.data()}));w(ue)}),me=cn(Vt(Ge(n,"chats"),Ss("participantIds","array-contains",s.id)),X=>{const te=X.docs.map(Ae=>({id:Ae.id,...Ae.data()})).reduce((Ae,Be)=>Be.lastRead&&Be.lastMessage&&Be.lastMessage.senderId!==s.id&&(!Be.lastRead[s.id]||Be.lastRead[s.id]<Be.lastMessage.createdAt)?Ae+1:Ae,0);ut(te)},X=>console.error("Chat listener error:",X)),Ie=cn(Vt(Ge(n,"users")),X=>{const ue=X.docs.map(te=>({id:te.id,...te.data()}));ue.sort((te,Ae)=>te.name.localeCompare(Ae.name)),C(ue)});return()=>{Q(),q(),se(),ce(),fe(),Ie(),me()}},[n,s]),O.useEffect(()=>{if(H.current)return;const Q=new URLSearchParams(window.location.search),q=Q.get("page"),se=Q.get("chatId");setTimeout(()=>{q==="chat"&&se?(c("chat"),m(se),H.current=!0,window.history.replaceState({},document.title,window.location.pathname)):q&&ct.includes(q)&&(c(q),H.current=!0,window.history.replaceState({},document.title,window.location.pathname))},100)},[]);const Ue=O.useCallback(()=>new Promise(Q=>{const q=indexedDB.open("tab-badge-store",1);q.onupgradeneeded=se=>{se.target.result.createObjectStore("tabBadges",{keyPath:"page"})},q.onsuccess=se=>{const Ie=se.target.result.transaction("tabBadges","readonly").objectStore("tabBadges").getAll();Ie.onsuccess=()=>{const X=Ie.result;if(X&&X.length>0){const ue={};X.forEach(te=>{ue[te.page]=te.count}),Z(ue)}Q()},Ie.onerror=()=>Q()},q.onerror=()=>Q()}),[]);O.useEffect(()=>{if(!("serviceWorker"in navigator))return;const Q=q=>{var se;if(((se=q.data)==null?void 0:se.type)==="NEW_NOTIFICATION"){const ce=q.data.page;console.log("[App] New notification for page:",ce),c(fe=>(fe!==ce&&(Z(me=>({...me,[ce]:(me[ce]||0)+1})),Me(ce)),fe))}};return navigator.serviceWorker.addEventListener("message",Q),()=>navigator.serviceWorker.removeEventListener("message",Q)},[]);const Ce=O.useCallback(Q=>{const q=indexedDB.open("tab-badge-store",1);q.onsuccess=se=>{se.target.result.transaction("tabBadges","readwrite").objectStore("tabBadges").delete(Q)}},[]),Me=O.useCallback(Q=>{const q=indexedDB.open("tab-badge-store",1);q.onupgradeneeded=se=>{se.target.result.createObjectStore("tabBadges",{keyPath:"page"})},q.onsuccess=se=>{const me=se.target.result.transaction("tabBadges","readwrite").objectStore("tabBadges"),Ie=me.get(Q);Ie.onsuccess=()=>{var ue;const X=((ue=Ie.result)==null?void 0:ue.count)||0;me.put({page:Q,count:X+1})}}},[]),vt=O.useCallback(async()=>{var q;if(!t.messaging||!s||!n)return;const{messaging:Q}=t;try{console.error("VAPID key is missing. Check Vercel environment variables.");return;if(!ce){console.log("Service Worker not found, registering now...");try{ce=await navigator.serviceWorker.register("/firebase-messaging-sw.js"),console.log("Service Worker registered successfully.")}catch(me){console.error("Service Worker registration failed:",me);return}}}catch(se){console.log("Token retrieval failed:",(se==null?void 0:se.message)||se)}},[t,s,n]),Xe=O.useCallback(async()=>{if(!(!t.messaging||!s))try{const Q=await Notification.requestPermission();Te(Q),Q==="granted"?(await vt(),r("Success","Notifications enabled!")):r("Blocked","Notifications are blocked. Please enable them in browser settings.")}catch(Q){console.error("Permission request failed",Q)}finally{V(!0);try{localStorage.setItem("notificationBannerDismissed","true")}catch(Q){console.error("Failed to save banner dismissal state",Q)}}},[t,s,vt,r]);O.useEffect(()=>{const Q=()=>{if("Notification"in window){const se=Notification.permission;Te(se),se==="granted"&&s&&(vt(),V(!0))}};Q(),Ue();const q=()=>{document.visibilityState==="visible"&&(Q(),Ue())};return document.addEventListener("visibilitychange",q),()=>document.removeEventListener("visibilitychange",q)},[s,vt]),O.useEffect(()=>{if(!t.messaging||!s)return;const{messaging:Q}=t,q=KO(Q,se=>{const ce=se.notification,fe=se.data,me=fe==null?void 0:fe.chatId;if(me&&me===f)return;r((ce==null?void 0:ce.title)||"New Message",(ce==null?void 0:ce.body)||"You have a new message.",()=>{const X=fe==null?void 0:fe.url;if(X)try{const ue=new URL(X,window.location.origin),te=ue.searchParams.get("page"),Ae=ue.searchParams.get("chatId");te==="chat"&&Ae?(c("chat"),m(Ae)):te&&ct.includes(te)&&c(te)}catch{}});const Ie={id:se.messageId||crypto.randomUUID(),icon:"notifications",message:(ce==null?void 0:ce.body)||"You have a new message.",timestamp:xc(xe.now())};R(X=>[Ie,...X.slice(0,19)]),Fe(!0);try{const X=fe==null?void 0:fe.url;if(X){const te=new URL(X,window.location.origin).searchParams.get("page")||"news";c(Ae=>(Ae!==te&&(Z(Be=>({...Be,[te]:(Be[te]||0)+1})),Me(te)),Ae))}}catch{}});return()=>q()},[t.messaging,s,n,r,f]);const wt=async Q=>{if(!n||!s)return null;const q=[s,...Q],se=q.map(Ie=>Ie.id).sort(),ce=Vt(Ge(n,"chats"),Ss("participantIds","==",se)),fe=await Ta(ce);if(!fe.empty)return fe.docs[0].id;const me=q.reduce((Ie,X)=>(Ie[X.id]={name:X.name,avatar:X.avatar},Ie),{});try{return(await Qs(Ge(n,"chats"),{participantIds:se,participants:me,lastActivity:jn()})).id}catch(Ie){return console.error("Error creating chat:",Ie),null}},Et=Q=>{c("chat"),m(Q)},Xt=O.useCallback(()=>{m(null)},[]),Dn=()=>{V(!0);try{localStorage.setItem("notificationBannerDismissed","true")}catch(Q){console.error("Failed to save banner dismissal state",Q)}};if(t.firebaseError)return h.jsx(s2,{error:new Error(t.firebaseError)});if(o)return h.jsx(i2,{});if(!s)return h.jsx(o2,{});const ls=()=>{if(G)return h.jsx(_2,{chatId:f,currentUser:s,onBack:Xt},f);switch(u){case"news":return h.jsx(Z_,{currentUser:s,news:N,setNews:j});case"worship":return h.jsx(a2,{currentUser:s,liveService:b,pastServices:y});case"podcast":return h.jsx(c2,{currentUser:s,podcasts:M,setPodcasts:T});case"bible":return h.jsx(l2,{});case"chat":return h.jsx(m2,{currentUser:s,usersMap:re,onChatSelect:Et,onCreateChat:wt});case"prayer":return h.jsx(h2,{currentUser:s,requests:v,setRequests:w});default:return h.jsx(Z_,{currentUser:s,news:N,setNews:j})}};return h.jsxs("div",{className:"app-container",children:[ne==="denied"&&!G&&!W&&h.jsxs("div",{className:"notification-permission-banner denied",children:[h.jsx("span",{className:"material-symbols-outlined",children:"notifications_off"}),h.jsx("p",{children:"सूचनाहरू रोकिएका छन्। सन्देश र अद्यावधिकहरू प्राप्त गर्न, कृपया आफ्नो ब्राउजर सेटिङहरूमा यो साइटको लागि सूचनाहरूलाई अनुमति दिनुहोस्।"}),h.jsx("button",{className:"banner-dismiss-btn",onClick:Dn,style:{marginLeft:"auto",background:"none",border:"none",cursor:"pointer",padding:"4px"},children:h.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"20px",color:"inherit"},children:"close"})})]}),ne==="default"&&!G&&!W&&h.jsxs("div",{className:"notification-permission-banner request",children:[h.jsx("span",{className:"material-symbols-outlined",children:"notifications"}),h.jsx("p",{children:"नयाँ सन्देश र अद्यावधिकहरू प्राप्त गर्न सूचनाहरू सक्षम गर्नुहोस्।"}),h.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[h.jsx("button",{onClick:Xe,children:"सक्षम गर्नुहोस्"}),h.jsx("button",{onClick:Dn,style:{background:"none",border:"none",padding:"4px",display:"flex",alignItems:"center",color:"inherit"},children:h.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"20px"},children:"close"})})]})]}),!G&&h.jsxs("header",{className:"app-header",children:[h.jsxs("div",{className:"header-content",children:[h.jsx("img",{src:en.logo,alt:"Church Logo",className:"header-logo"}),h.jsx("h1",{children:en.name})]}),h.jsxs("div",{className:"header-actions",children:[h.jsxs("button",{className:"header-button",onClick:()=>{S(!0),Fe(!1)},children:[h.jsx("span",{className:"material-symbols-outlined",children:"notifications"}),ye&&h.jsx("div",{className:"notification-dot"})]}),h.jsx("button",{className:"header-button",onClick:()=>P(!0),"aria-label":"Settings",children:h.jsx("span",{className:"material-symbols-outlined",children:"settings"})}),h.jsx("button",{className:"header-button",onClick:()=>e&&JC(e),"aria-label":"Logout",children:h.jsx("span",{className:"material-symbols-outlined",children:"logout"})})]})]}),h.jsx("main",{className:`main-content ${G?"full-height":""}`,children:ls()}),!G&&h.jsx("nav",{className:"bottom-nav",children:ct.map(Q=>h.jsxs("button",{className:`nav-item ${u===Q?"active":""}`,onClick:()=>{c(Q),Z(q=>({...q,[Q]:0})),Ce(Q)},children:[h.jsxs("span",{style:{position:"relative",display:"inline-flex"},children:[h.jsx("span",{className:"material-symbols-outlined",children:_e[Q].icon}),$[Q]>0&&h.jsx("span",{style:{position:"absolute",top:"-6px",right:"-8px",background:"#e53935",color:"white",borderRadius:"50%",minWidth:"16px",height:"16px",fontSize:"10px",fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 3px",lineHeight:1},children:$[Q]>99?"99+":$[Q]})]}),h.jsx("span",{children:_e[Q].label})]},Q))}),h.jsx(T2,{isOpen:g,onClose:()=>S(!1),notifications:x}),h.jsx(S2,{isOpen:k,onClose:()=>P(!1),currentUser:s,setCurrentUser:i})]})},tv=document.getElementById("root");if(tv){const t=QO();$d.createRoot(tv).render(h.jsx(hv.StrictMode,{children:h.jsx(_0.Provider,{value:t,children:h.jsx(YO,{children:h.jsx(A2,{})})})}))}
