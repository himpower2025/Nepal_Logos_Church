var W0=Object.defineProperty;var H0=(t,e,n)=>e in t?W0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var el=(t,e,n)=>H0(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function q0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Z_={exports:{}},Du={},ev={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta=Symbol.for("react.element"),K0=Symbol.for("react.portal"),G0=Symbol.for("react.fragment"),Q0=Symbol.for("react.strict_mode"),Y0=Symbol.for("react.profiler"),X0=Symbol.for("react.provider"),J0=Symbol.for("react.context"),Z0=Symbol.for("react.forward_ref"),eS=Symbol.for("react.suspense"),tS=Symbol.for("react.memo"),nS=Symbol.for("react.lazy"),lg=Symbol.iterator;function rS(t){return t===null||typeof t!="object"?null:(t=lg&&t[lg]||t["@@iterator"],typeof t=="function"?t:null)}var tv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nv=Object.assign,rv={};function Wi(t,e,n){this.props=t,this.context=e,this.refs=rv,this.updater=n||tv}Wi.prototype.isReactComponent={};Wi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sv(){}sv.prototype=Wi.prototype;function sf(t,e,n){this.props=t,this.context=e,this.refs=rv,this.updater=n||tv}var of=sf.prototype=new sv;of.constructor=sf;nv(of,Wi.prototype);of.isPureReactComponent=!0;var ug=Array.isArray,iv=Object.prototype.hasOwnProperty,af={current:null},ov={key:!0,ref:!0,__self:!0,__source:!0};function av(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)iv.call(e,r)&&!ov.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Ta,type:t,key:i,ref:o,props:s,_owner:af.current}}function sS(t,e){return{$$typeof:Ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ta}function iS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cg=/\/+/g;function Hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iS(""+t.key):e.toString(36)}function Al(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ta:case K0:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Hc(o,0):r,ug(s)?(n="",t!=null&&(n=t.replace(cg,"$&/")+"/"),Al(s,e,n,"",function(c){return c})):s!=null&&(lf(s)&&(s=sS(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(cg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",ug(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Hc(i,l);o+=Al(i,e,n,u,s)}else if(u=rS(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Hc(i,l++),o+=Al(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function tl(t,e,n){if(t==null)return t;var r=[],s=0;return Al(t,r,"","",function(i){return e.call(n,i,s++)}),r}function oS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var jt={current:null},Rl={transition:null},aS={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:af};function lv(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:tl,forEach:function(t,e,n){tl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tl(t,function(){e++}),e},toArray:function(t){return tl(t,function(e){return e})||[]},only:function(t){if(!lf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=Wi;de.Fragment=G0;de.Profiler=Y0;de.PureComponent=sf;de.StrictMode=Q0;de.Suspense=eS;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aS;de.act=lv;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=nv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=af.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)iv.call(e,u)&&!ov.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ta,type:t.type,key:s,ref:i,props:r,_owner:o}};de.createContext=function(t){return t={$$typeof:J0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:X0,_context:t},t.Consumer=t};de.createElement=av;de.createFactory=function(t){var e=av.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:Z0,render:t}};de.isValidElement=lf;de.lazy=function(t){return{$$typeof:nS,_payload:{_status:-1,_result:t},_init:oS}};de.memo=function(t,e){return{$$typeof:tS,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=Rl.transition;Rl.transition={};try{t()}finally{Rl.transition=e}};de.unstable_act=lv;de.useCallback=function(t,e){return jt.current.useCallback(t,e)};de.useContext=function(t){return jt.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return jt.current.useDeferredValue(t)};de.useEffect=function(t,e){return jt.current.useEffect(t,e)};de.useId=function(){return jt.current.useId()};de.useImperativeHandle=function(t,e,n){return jt.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return jt.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return jt.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return jt.current.useMemo(t,e)};de.useReducer=function(t,e,n){return jt.current.useReducer(t,e,n)};de.useRef=function(t){return jt.current.useRef(t)};de.useState=function(t){return jt.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return jt.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return jt.current.useTransition()};de.version="18.3.1";ev.exports=de;var L=ev.exports;const uv=q0(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lS=L,uS=Symbol.for("react.element"),cS=Symbol.for("react.fragment"),dS=Object.prototype.hasOwnProperty,hS=lS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fS={key:!0,ref:!0,__self:!0,__source:!0};function cv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)dS.call(e,r)&&!fS.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:uS,type:t,key:i,ref:o,props:s,_owner:hS.current}}Du.Fragment=cS;Du.jsx=cv;Du.jsxs=cv;Z_.exports=Du;var h=Z_.exports,Md={},dv={exports:{}},sn={},hv={exports:{}},fv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,J){var ne=z.length;z.push(J);e:for(;0<ne;){var Ae=ne-1>>>1,ye=z[Ae];if(0<s(ye,J))z[Ae]=J,z[ne]=ye,ne=Ae;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var J=z[0],ne=z.pop();if(ne!==J){z[0]=ne;e:for(var Ae=0,ye=z.length,F=ye>>>1;Ae<F;){var Y=2*(Ae+1)-1,Z=z[Y],he=Y+1,Re=z[he];if(0>s(Z,ne))he<ye&&0>s(Re,Z)?(z[Ae]=Re,z[he]=ne,Ae=he):(z[Ae]=Z,z[Y]=ne,Ae=Y);else if(he<ye&&0>s(Re,ne))z[Ae]=Re,z[he]=ne,Ae=he;else break e}}return J}function s(z,J){var ne=z.sortIndex-J.sortIndex;return ne!==0?ne:z.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,g=3,S=!1,k=!1,P=!1,b=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(z){for(var J=n(c);J!==null;){if(J.callback===null)r(c);else if(J.startTime<=z)r(c),J.sortIndex=J.expirationTime,e(u,J);else break;J=n(c)}}function x(z){if(P=!1,E(z),!k)if(n(u)!==null)k=!0,st(V);else{var J=n(c);J!==null&&Dt(x,J.startTime-z)}}function V(z,J){k=!1,P&&(P=!1,A(v),v=-1),S=!0;var ne=g;try{for(E(J),m=n(u);m!==null&&(!(m.expirationTime>J)||z&&!C());){var Ae=m.callback;if(typeof Ae=="function"){m.callback=null,g=m.priorityLevel;var ye=Ae(m.expirationTime<=J);J=t.unstable_now(),typeof ye=="function"?m.callback=ye:m===n(u)&&r(u),E(J)}else r(u);m=n(u)}if(m!==null)var F=!0;else{var Y=n(c);Y!==null&&Dt(x,Y.startTime-J),F=!1}return F}finally{m=null,g=ne,S=!1}}var M=!1,T=null,v=-1,w=5,I=-1;function C(){return!(t.unstable_now()-I<w)}function N(){if(T!==null){var z=t.unstable_now();I=z;var J=!0;try{J=T(!0,z)}finally{J?R():(M=!1,T=null)}}else M=!1}var R;if(typeof y=="function")R=function(){y(N)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,Pe=le.port2;le.port1.onmessage=N,R=function(){Pe.postMessage(null)}}else R=function(){b(N,0)};function st(z){T=z,M||(M=!0,R())}function Dt(z,J){v=b(function(){z(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){k||S||(k=!0,st(V))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var J=3;break;default:J=g}var ne=g;g=J;try{return z()}finally{g=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,J){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ne=g;g=z;try{return J()}finally{g=ne}},t.unstable_scheduleCallback=function(z,J,ne){var Ae=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Ae+ne:Ae):ne=Ae,z){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=ne+ye,z={id:f++,callback:J,priorityLevel:z,startTime:ne,expirationTime:ye,sortIndex:-1},ne>Ae?(z.sortIndex=ne,e(c,z),n(u)===null&&z===n(c)&&(P?(A(v),v=-1):P=!0,Dt(x,ne-Ae))):(z.sortIndex=ye,e(u,z),k||S||(k=!0,st(V))),z},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(z){var J=g;return function(){var ne=g;g=J;try{return z.apply(this,arguments)}finally{g=ne}}}})(fv);hv.exports=fv;var pS=hv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mS=L,rn=pS;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pv=new Set,Go={};function Vs(t,e){Ai(t,e),Ai(t+"Capture",e)}function Ai(t,e){for(Go[t]=e,t=0;t<e.length;t++)pv.add(e[t])}var lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vd=Object.prototype.hasOwnProperty,gS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dg={},hg={};function yS(t){return Vd.call(hg,t)?!0:Vd.call(dg,t)?!1:gS.test(t)?hg[t]=!0:(dg[t]=!0,!1)}function _S(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vS(t,e,n,r){if(e===null||typeof e>"u"||_S(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ut(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pt[t]=new Ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pt[e]=new Ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pt[t]=new Ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pt[t]=new Ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pt[t]=new Ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pt[t]=new Ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pt[t]=new Ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pt[t]=new Ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pt[t]=new Ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function cf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uf,cf);pt[e]=new Ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uf,cf);pt[e]=new Ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uf,cf);pt[e]=new Ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pt[t]=new Ut(t,1,!1,t.toLowerCase(),null,!1,!1)});pt.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pt[t]=new Ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function df(t,e,n,r){var s=pt.hasOwnProperty(e)?pt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vS(e,n,s,r)&&(n=null),r||s===null?yS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var yr=mS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nl=Symbol.for("react.element"),ni=Symbol.for("react.portal"),ri=Symbol.for("react.fragment"),hf=Symbol.for("react.strict_mode"),jd=Symbol.for("react.profiler"),mv=Symbol.for("react.provider"),gv=Symbol.for("react.context"),ff=Symbol.for("react.forward_ref"),Ud=Symbol.for("react.suspense"),Fd=Symbol.for("react.suspense_list"),pf=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),yv=Symbol.for("react.offscreen"),fg=Symbol.iterator;function ho(t){return t===null||typeof t!="object"?null:(t=fg&&t[fg]||t["@@iterator"],typeof t=="function"?t:null)}var Fe=Object.assign,qc;function Io(t){if(qc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qc=e&&e[1]||""}return`
`+qc+t}var Kc=!1;function Gc(t,e){if(!t||Kc)return"";Kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Io(t):""}function wS(t){switch(t.tag){case 5:return Io(t.type);case 16:return Io("Lazy");case 13:return Io("Suspense");case 19:return Io("SuspenseList");case 0:case 2:case 15:return t=Gc(t.type,!1),t;case 11:return t=Gc(t.type.render,!1),t;case 1:return t=Gc(t.type,!0),t;default:return""}}function Bd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ri:return"Fragment";case ni:return"Portal";case jd:return"Profiler";case hf:return"StrictMode";case Ud:return"Suspense";case Fd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gv:return(t.displayName||"Context")+".Consumer";case mv:return(t._context.displayName||"Context")+".Provider";case ff:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pf:return e=t.displayName||null,e!==null?e:Bd(t.type)||"Memo";case Ar:e=t._payload,t=t._init;try{return Bd(t(e))}catch{}}return null}function ES(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bd(e);case 8:return e===hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _v(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function TS(t){var e=_v(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function rl(t){t._valueTracker||(t._valueTracker=TS(t))}function vv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_v(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $d(t,e){var n=e.checked;return Fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wv(t,e){e=e.checked,e!=null&&df(t,"checked",e,!1)}function zd(t,e){wv(t,e);var n=Qr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wd(t,e.type,Qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wd(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var So=Array.isArray;function mi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Hd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(So(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qr(n)}}function Ev(t,e){var n=Qr(e.value),r=Qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function yg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Tv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Tv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sl,Iv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sl=sl||document.createElement("div"),sl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Do={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IS=["Webkit","ms","Moz","O"];Object.keys(Do).forEach(function(t){IS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Do[e]=Do[t]})});function Sv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Do.hasOwnProperty(t)&&Do[t]?(""+e).trim():e+"px"}function Av(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Sv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var SS=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kd(t,e){if(e){if(SS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Gd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qd=null;function mf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yd=null,gi=null,yi=null;function _g(t){if(t=Aa(t)){if(typeof Yd!="function")throw Error(B(280));var e=t.stateNode;e&&(e=ju(e),Yd(t.stateNode,t.type,e))}}function Rv(t){gi?yi?yi.push(t):yi=[t]:gi=t}function kv(){if(gi){var t=gi,e=yi;if(yi=gi=null,_g(t),e)for(t=0;t<e.length;t++)_g(e[t])}}function Cv(t,e){return t(e)}function Pv(){}var Qc=!1;function Nv(t,e,n){if(Qc)return t(e,n);Qc=!0;try{return Cv(t,e,n)}finally{Qc=!1,(gi!==null||yi!==null)&&(Pv(),kv())}}function Yo(t,e){var n=t.stateNode;if(n===null)return null;var r=ju(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Xd=!1;if(lr)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){Xd=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{Xd=!1}function AS(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Oo=!1,Gl=null,Ql=!1,Jd=null,RS={onError:function(t){Oo=!0,Gl=t}};function kS(t,e,n,r,s,i,o,l,u){Oo=!1,Gl=null,AS.apply(RS,arguments)}function CS(t,e,n,r,s,i,o,l,u){if(kS.apply(this,arguments),Oo){if(Oo){var c=Gl;Oo=!1,Gl=null}else throw Error(B(198));Ql||(Ql=!0,Jd=c)}}function js(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vg(t){if(js(t)!==t)throw Error(B(188))}function PS(t){var e=t.alternate;if(!e){if(e=js(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return vg(s),t;if(i===r)return vg(s),e;i=i.sibling}throw Error(B(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function bv(t){return t=PS(t),t!==null?Dv(t):null}function Dv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dv(t);if(e!==null)return e;t=t.sibling}return null}var Ov=rn.unstable_scheduleCallback,wg=rn.unstable_cancelCallback,NS=rn.unstable_shouldYield,xS=rn.unstable_requestPaint,Qe=rn.unstable_now,bS=rn.unstable_getCurrentPriorityLevel,gf=rn.unstable_ImmediatePriority,Lv=rn.unstable_UserBlockingPriority,Yl=rn.unstable_NormalPriority,DS=rn.unstable_LowPriority,Mv=rn.unstable_IdlePriority,Ou=null,Un=null;function OS(t){if(Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(Ou,t,void 0,(t.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:VS,LS=Math.log,MS=Math.LN2;function VS(t){return t>>>=0,t===0?32:31-(LS(t)/MS|0)|0}var il=64,ol=4194304;function Ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Ao(l):(i&=o,i!==0&&(r=Ao(i)))}else o=n&~s,o!==0?r=Ao(o):i!==0&&(r=Ao(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Rn(e),s=1<<n,r|=t[n],e&=~s;return r}function jS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function US(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Rn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=jS(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Zd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Vv(){var t=il;return il<<=1,!(il&4194240)&&(il=64),t}function Yc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ia(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Rn(e),t[e]=n}function FS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Rn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function yf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Rn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Ie=0;function jv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Uv,_f,Fv,Bv,$v,eh=!1,al=[],Vr=null,jr=null,Ur=null,Xo=new Map,Jo=new Map,kr=[],BS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eg(t,e){switch(t){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":Xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(e.pointerId)}}function po(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Aa(e),e!==null&&_f(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function $S(t,e,n,r,s){switch(e){case"focusin":return Vr=po(Vr,t,e,n,r,s),!0;case"dragenter":return jr=po(jr,t,e,n,r,s),!0;case"mouseover":return Ur=po(Ur,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Xo.set(i,po(Xo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Jo.set(i,po(Jo.get(i)||null,t,e,n,r,s)),!0}return!1}function zv(t){var e=ms(t.target);if(e!==null){var n=js(e);if(n!==null){if(e=n.tag,e===13){if(e=xv(n),e!==null){t.blockedOn=e,$v(t.priority,function(){Fv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=th(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Qd=r,n.target.dispatchEvent(r),Qd=null}else return e=Aa(n),e!==null&&_f(e),t.blockedOn=n,!1;e.shift()}return!0}function Tg(t,e,n){kl(t)&&n.delete(e)}function zS(){eh=!1,Vr!==null&&kl(Vr)&&(Vr=null),jr!==null&&kl(jr)&&(jr=null),Ur!==null&&kl(Ur)&&(Ur=null),Xo.forEach(Tg),Jo.forEach(Tg)}function mo(t,e){t.blockedOn===e&&(t.blockedOn=null,eh||(eh=!0,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,zS)))}function Zo(t){function e(s){return mo(s,t)}if(0<al.length){mo(al[0],t);for(var n=1;n<al.length;n++){var r=al[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Vr!==null&&mo(Vr,t),jr!==null&&mo(jr,t),Ur!==null&&mo(Ur,t),Xo.forEach(e),Jo.forEach(e),n=0;n<kr.length;n++)r=kr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<kr.length&&(n=kr[0],n.blockedOn===null);)zv(n),n.blockedOn===null&&kr.shift()}var _i=yr.ReactCurrentBatchConfig,Jl=!0;function WS(t,e,n,r){var s=Ie,i=_i.transition;_i.transition=null;try{Ie=1,vf(t,e,n,r)}finally{Ie=s,_i.transition=i}}function HS(t,e,n,r){var s=Ie,i=_i.transition;_i.transition=null;try{Ie=4,vf(t,e,n,r)}finally{Ie=s,_i.transition=i}}function vf(t,e,n,r){if(Jl){var s=th(t,e,n,r);if(s===null)od(t,e,r,Zl,n),Eg(t,r);else if($S(s,t,e,n,r))r.stopPropagation();else if(Eg(t,r),e&4&&-1<BS.indexOf(t)){for(;s!==null;){var i=Aa(s);if(i!==null&&Uv(i),i=th(t,e,n,r),i===null&&od(t,e,r,Zl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else od(t,e,r,null,n)}}var Zl=null;function th(t,e,n,r){if(Zl=null,t=mf(r),t=ms(t),t!==null)if(e=js(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function Wv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bS()){case gf:return 1;case Lv:return 4;case Yl:case DS:return 16;case Mv:return 536870912;default:return 16}default:return 16}}var Dr=null,wf=null,Cl=null;function Hv(){if(Cl)return Cl;var t,e=wf,n=e.length,r,s="value"in Dr?Dr.value:Dr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Cl=s.slice(t,1<r?1-r:void 0)}function Pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function Ig(){return!1}function on(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ll:Ig,this.isPropagationStopped=Ig,this}return Fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),e}var Hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ef=on(Hi),Sa=Fe({},Hi,{view:0,detail:0}),qS=on(Sa),Xc,Jc,go,Lu=Fe({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==go&&(go&&t.type==="mousemove"?(Xc=t.screenX-go.screenX,Jc=t.screenY-go.screenY):Jc=Xc=0,go=t),Xc)},movementY:function(t){return"movementY"in t?t.movementY:Jc}}),Sg=on(Lu),KS=Fe({},Lu,{dataTransfer:0}),GS=on(KS),QS=Fe({},Sa,{relatedTarget:0}),Zc=on(QS),YS=Fe({},Hi,{animationName:0,elapsedTime:0,pseudoElement:0}),XS=on(YS),JS=Fe({},Hi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ZS=on(JS),eA=Fe({},Hi,{data:0}),Ag=on(eA),tA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rA[t])?!!e[t]:!1}function Tf(){return sA}var iA=Fe({},Sa,{key:function(t){if(t.key){var e=tA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),oA=on(iA),aA=Fe({},Lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rg=on(aA),lA=Fe({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),uA=on(lA),cA=Fe({},Hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),dA=on(cA),hA=Fe({},Lu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fA=on(hA),pA=[9,13,27,32],If=lr&&"CompositionEvent"in window,Lo=null;lr&&"documentMode"in document&&(Lo=document.documentMode);var mA=lr&&"TextEvent"in window&&!Lo,qv=lr&&(!If||Lo&&8<Lo&&11>=Lo),kg=" ",Cg=!1;function Kv(t,e){switch(t){case"keyup":return pA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var si=!1;function gA(t,e){switch(t){case"compositionend":return Gv(e);case"keypress":return e.which!==32?null:(Cg=!0,kg);case"textInput":return t=e.data,t===kg&&Cg?null:t;default:return null}}function yA(t,e){if(si)return t==="compositionend"||!If&&Kv(t,e)?(t=Hv(),Cl=wf=Dr=null,si=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qv&&e.locale!=="ko"?null:e.data;default:return null}}var _A={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_A[t.type]:e==="textarea"}function Qv(t,e,n,r){Rv(r),e=eu(e,"onChange"),0<e.length&&(n=new Ef("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Mo=null,ea=null;function vA(t){ow(t,0)}function Mu(t){var e=ai(t);if(vv(e))return t}function wA(t,e){if(t==="change")return e}var Yv=!1;if(lr){var ed;if(lr){var td="oninput"in document;if(!td){var Ng=document.createElement("div");Ng.setAttribute("oninput","return;"),td=typeof Ng.oninput=="function"}ed=td}else ed=!1;Yv=ed&&(!document.documentMode||9<document.documentMode)}function xg(){Mo&&(Mo.detachEvent("onpropertychange",Xv),ea=Mo=null)}function Xv(t){if(t.propertyName==="value"&&Mu(ea)){var e=[];Qv(e,ea,t,mf(t)),Nv(vA,e)}}function EA(t,e,n){t==="focusin"?(xg(),Mo=e,ea=n,Mo.attachEvent("onpropertychange",Xv)):t==="focusout"&&xg()}function TA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mu(ea)}function IA(t,e){if(t==="click")return Mu(e)}function SA(t,e){if(t==="input"||t==="change")return Mu(e)}function AA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Cn=typeof Object.is=="function"?Object.is:AA;function ta(t,e){if(Cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Vd.call(e,s)||!Cn(t[s],e[s]))return!1}return!0}function bg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dg(t,e){var n=bg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bg(n)}}function Jv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zv(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function Sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function RA(t){var e=Zv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Jv(n.ownerDocument.documentElement,n)){if(r!==null&&Sf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Dg(n,i);var o=Dg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kA=lr&&"documentMode"in document&&11>=document.documentMode,ii=null,nh=null,Vo=null,rh=!1;function Og(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rh||ii==null||ii!==Kl(r)||(r=ii,"selectionStart"in r&&Sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vo&&ta(Vo,r)||(Vo=r,r=eu(nh,"onSelect"),0<r.length&&(e=new Ef("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ii)))}function ul(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var oi={animationend:ul("Animation","AnimationEnd"),animationiteration:ul("Animation","AnimationIteration"),animationstart:ul("Animation","AnimationStart"),transitionend:ul("Transition","TransitionEnd")},nd={},ew={};lr&&(ew=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function Vu(t){if(nd[t])return nd[t];if(!oi[t])return t;var e=oi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ew)return nd[t]=e[n];return t}var tw=Vu("animationend"),nw=Vu("animationiteration"),rw=Vu("animationstart"),sw=Vu("transitionend"),iw=new Map,Lg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ts(t,e){iw.set(t,e),Vs(e,[t])}for(var rd=0;rd<Lg.length;rd++){var sd=Lg[rd],CA=sd.toLowerCase(),PA=sd[0].toUpperCase()+sd.slice(1);ts(CA,"on"+PA)}ts(tw,"onAnimationEnd");ts(nw,"onAnimationIteration");ts(rw,"onAnimationStart");ts("dblclick","onDoubleClick");ts("focusin","onFocus");ts("focusout","onBlur");ts(sw,"onTransitionEnd");Ai("onMouseEnter",["mouseout","mouseover"]);Ai("onMouseLeave",["mouseout","mouseover"]);Ai("onPointerEnter",["pointerout","pointerover"]);Ai("onPointerLeave",["pointerout","pointerover"]);Vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function Mg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,CS(r,e,void 0,t),t.currentTarget=null}function ow(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Mg(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Mg(s,l,c),i=u}}}if(Ql)throw t=Jd,Ql=!1,Jd=null,t}function be(t,e){var n=e[lh];n===void 0&&(n=e[lh]=new Set);var r=t+"__bubble";n.has(r)||(aw(e,t,2,!1),n.add(r))}function id(t,e,n){var r=0;e&&(r|=4),aw(n,t,r,e)}var cl="_reactListening"+Math.random().toString(36).slice(2);function na(t){if(!t[cl]){t[cl]=!0,pv.forEach(function(n){n!=="selectionchange"&&(NA.has(n)||id(n,!1,t),id(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cl]||(e[cl]=!0,id("selectionchange",!1,e))}}function aw(t,e,n,r){switch(Wv(e)){case 1:var s=WS;break;case 4:s=HS;break;default:s=vf}n=s.bind(null,e,n,t),s=void 0,!Xd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function od(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=ms(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Nv(function(){var c=i,f=mf(n),m=[];e:{var g=iw.get(t);if(g!==void 0){var S=Ef,k=t;switch(t){case"keypress":if(Pl(n)===0)break e;case"keydown":case"keyup":S=oA;break;case"focusin":k="focus",S=Zc;break;case"focusout":k="blur",S=Zc;break;case"beforeblur":case"afterblur":S=Zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Sg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=GS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=uA;break;case tw:case nw:case rw:S=XS;break;case sw:S=dA;break;case"scroll":S=qS;break;case"wheel":S=fA;break;case"copy":case"cut":case"paste":S=ZS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Rg}var P=(e&4)!==0,b=!P&&t==="scroll",A=P?g!==null?g+"Capture":null:g;P=[];for(var y=c,E;y!==null;){E=y;var x=E.stateNode;if(E.tag===5&&x!==null&&(E=x,A!==null&&(x=Yo(y,A),x!=null&&P.push(ra(y,x,E)))),b)break;y=y.return}0<P.length&&(g=new S(g,k,null,n,f),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",g&&n!==Qd&&(k=n.relatedTarget||n.fromElement)&&(ms(k)||k[ur]))break e;if((S||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,S?(k=n.relatedTarget||n.toElement,S=c,k=k?ms(k):null,k!==null&&(b=js(k),k!==b||k.tag!==5&&k.tag!==6)&&(k=null)):(S=null,k=c),S!==k)){if(P=Sg,x="onMouseLeave",A="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(P=Rg,x="onPointerLeave",A="onPointerEnter",y="pointer"),b=S==null?g:ai(S),E=k==null?g:ai(k),g=new P(x,y+"leave",S,n,f),g.target=b,g.relatedTarget=E,x=null,ms(f)===c&&(P=new P(A,y+"enter",k,n,f),P.target=E,P.relatedTarget=b,x=P),b=x,S&&k)t:{for(P=S,A=k,y=0,E=P;E;E=Js(E))y++;for(E=0,x=A;x;x=Js(x))E++;for(;0<y-E;)P=Js(P),y--;for(;0<E-y;)A=Js(A),E--;for(;y--;){if(P===A||A!==null&&P===A.alternate)break t;P=Js(P),A=Js(A)}P=null}else P=null;S!==null&&Vg(m,g,S,P,!1),k!==null&&b!==null&&Vg(m,b,k,P,!0)}}e:{if(g=c?ai(c):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var V=wA;else if(Pg(g))if(Yv)V=SA;else{V=TA;var M=EA}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(V=IA);if(V&&(V=V(t,c))){Qv(m,V,n,f);break e}M&&M(t,g,c),t==="focusout"&&(M=g._wrapperState)&&M.controlled&&g.type==="number"&&Wd(g,"number",g.value)}switch(M=c?ai(c):window,t){case"focusin":(Pg(M)||M.contentEditable==="true")&&(ii=M,nh=c,Vo=null);break;case"focusout":Vo=nh=ii=null;break;case"mousedown":rh=!0;break;case"contextmenu":case"mouseup":case"dragend":rh=!1,Og(m,n,f);break;case"selectionchange":if(kA)break;case"keydown":case"keyup":Og(m,n,f)}var T;if(If)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else si?Kv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(qv&&n.locale!=="ko"&&(si||v!=="onCompositionStart"?v==="onCompositionEnd"&&si&&(T=Hv()):(Dr=f,wf="value"in Dr?Dr.value:Dr.textContent,si=!0)),M=eu(c,v),0<M.length&&(v=new Ag(v,t,null,n,f),m.push({event:v,listeners:M}),T?v.data=T:(T=Gv(n),T!==null&&(v.data=T)))),(T=mA?gA(t,n):yA(t,n))&&(c=eu(c,"onBeforeInput"),0<c.length&&(f=new Ag("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=T))}ow(m,e)})}function ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function eu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Yo(t,n),i!=null&&r.unshift(ra(t,i,s)),i=Yo(t,e),i!=null&&r.push(ra(t,i,s))),t=t.return}return r}function Js(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=Yo(n,i),u!=null&&o.unshift(ra(n,u,l))):s||(u=Yo(n,i),u!=null&&o.push(ra(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xA=/\r\n?/g,bA=/\u0000|\uFFFD/g;function jg(t){return(typeof t=="string"?t:""+t).replace(xA,`
`).replace(bA,"")}function dl(t,e,n){if(e=jg(e),jg(t)!==e&&n)throw Error(B(425))}function tu(){}var sh=null,ih=null;function oh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ah=typeof setTimeout=="function"?setTimeout:void 0,DA=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,OA=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(t){return Ug.resolve(null).then(t).catch(LA)}:ah;function LA(t){setTimeout(function(){throw t})}function ad(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Zo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Zo(e)}function Fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qi=Math.random().toString(36).slice(2),Ln="__reactFiber$"+qi,sa="__reactProps$"+qi,ur="__reactContainer$"+qi,lh="__reactEvents$"+qi,MA="__reactListeners$"+qi,VA="__reactHandles$"+qi;function ms(t){var e=t[Ln];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ur]||n[Ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fg(t);t!==null;){if(n=t[Ln])return n;t=Fg(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){return t=t[Ln]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function ju(t){return t[sa]||null}var uh=[],li=-1;function ns(t){return{current:t}}function Oe(t){0>li||(t.current=uh[li],uh[li]=null,li--)}function Ne(t,e){li++,uh[li]=t.current,t.current=e}var Yr={},xt=ns(Yr),zt=ns(!1),Ss=Yr;function Ri(t,e){var n=t.type.contextTypes;if(!n)return Yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Wt(t){return t=t.childContextTypes,t!=null}function nu(){Oe(zt),Oe(xt)}function Bg(t,e,n){if(xt.current!==Yr)throw Error(B(168));Ne(xt,e),Ne(zt,n)}function lw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(B(108,ES(t)||"Unknown",s));return Fe({},n,r)}function ru(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yr,Ss=xt.current,Ne(xt,t),Ne(zt,zt.current),!0}function $g(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=lw(t,e,Ss),r.__reactInternalMemoizedMergedChildContext=t,Oe(zt),Oe(xt),Ne(xt,t)):Oe(zt),Ne(zt,n)}var Jn=null,Uu=!1,ld=!1;function uw(t){Jn===null?Jn=[t]:Jn.push(t)}function jA(t){Uu=!0,uw(t)}function rs(){if(!ld&&Jn!==null){ld=!0;var t=0,e=Ie;try{var n=Jn;for(Ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Jn=null,Uu=!1}catch(s){throw Jn!==null&&(Jn=Jn.slice(t+1)),Ov(gf,rs),s}finally{Ie=e,ld=!1}}return null}var ui=[],ci=0,su=null,iu=0,un=[],cn=0,As=null,Zn=1,er="";function hs(t,e){ui[ci++]=iu,ui[ci++]=su,su=t,iu=e}function cw(t,e,n){un[cn++]=Zn,un[cn++]=er,un[cn++]=As,As=t;var r=Zn;t=er;var s=32-Rn(r)-1;r&=~(1<<s),n+=1;var i=32-Rn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Zn=1<<32-Rn(e)+s|n<<s|r,er=i+t}else Zn=1<<i|n<<s|r,er=t}function Af(t){t.return!==null&&(hs(t,1),cw(t,1,0))}function Rf(t){for(;t===su;)su=ui[--ci],ui[ci]=null,iu=ui[--ci],ui[ci]=null;for(;t===As;)As=un[--cn],un[cn]=null,er=un[--cn],un[cn]=null,Zn=un[--cn],un[cn]=null}var nn=null,Jt=null,Ve=!1,An=null;function dw(t,e){var n=dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nn=t,Jt=Fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nn=t,Jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=As!==null?{id:Zn,overflow:er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nn=t,Jt=null,!0):!1;default:return!1}}function ch(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dh(t){if(Ve){var e=Jt;if(e){var n=e;if(!zg(t,e)){if(ch(t))throw Error(B(418));e=Fr(n.nextSibling);var r=nn;e&&zg(t,e)?dw(r,n):(t.flags=t.flags&-4097|2,Ve=!1,nn=t)}}else{if(ch(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ve=!1,nn=t}}}function Wg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nn=t}function hl(t){if(t!==nn)return!1;if(!Ve)return Wg(t),Ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!oh(t.type,t.memoizedProps)),e&&(e=Jt)){if(ch(t))throw hw(),Error(B(418));for(;e;)dw(t,e),e=Fr(e.nextSibling)}if(Wg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Jt=Fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Jt=null}}else Jt=nn?Fr(t.stateNode.nextSibling):null;return!0}function hw(){for(var t=Jt;t;)t=Fr(t.nextSibling)}function ki(){Jt=nn=null,Ve=!1}function kf(t){An===null?An=[t]:An.push(t)}var UA=yr.ReactCurrentBatchConfig;function yo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function fl(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hg(t){var e=t._init;return e(t._payload)}function fw(t){function e(A,y){if(t){var E=A.deletions;E===null?(A.deletions=[y],A.flags|=16):E.push(y)}}function n(A,y){if(!t)return null;for(;y!==null;)e(A,y),y=y.sibling;return null}function r(A,y){for(A=new Map;y!==null;)y.key!==null?A.set(y.key,y):A.set(y.index,y),y=y.sibling;return A}function s(A,y){return A=Wr(A,y),A.index=0,A.sibling=null,A}function i(A,y,E){return A.index=E,t?(E=A.alternate,E!==null?(E=E.index,E<y?(A.flags|=2,y):E):(A.flags|=2,y)):(A.flags|=1048576,y)}function o(A){return t&&A.alternate===null&&(A.flags|=2),A}function l(A,y,E,x){return y===null||y.tag!==6?(y=md(E,A.mode,x),y.return=A,y):(y=s(y,E),y.return=A,y)}function u(A,y,E,x){var V=E.type;return V===ri?f(A,y,E.props.children,x,E.key):y!==null&&(y.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ar&&Hg(V)===y.type)?(x=s(y,E.props),x.ref=yo(A,y,E),x.return=A,x):(x=Ml(E.type,E.key,E.props,null,A.mode,x),x.ref=yo(A,y,E),x.return=A,x)}function c(A,y,E,x){return y===null||y.tag!==4||y.stateNode.containerInfo!==E.containerInfo||y.stateNode.implementation!==E.implementation?(y=gd(E,A.mode,x),y.return=A,y):(y=s(y,E.children||[]),y.return=A,y)}function f(A,y,E,x,V){return y===null||y.tag!==7?(y=Es(E,A.mode,x,V),y.return=A,y):(y=s(y,E),y.return=A,y)}function m(A,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return y=md(""+y,A.mode,E),y.return=A,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case nl:return E=Ml(y.type,y.key,y.props,null,A.mode,E),E.ref=yo(A,null,y),E.return=A,E;case ni:return y=gd(y,A.mode,E),y.return=A,y;case Ar:var x=y._init;return m(A,x(y._payload),E)}if(So(y)||ho(y))return y=Es(y,A.mode,E,null),y.return=A,y;fl(A,y)}return null}function g(A,y,E,x){var V=y!==null?y.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return V!==null?null:l(A,y,""+E,x);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case nl:return E.key===V?u(A,y,E,x):null;case ni:return E.key===V?c(A,y,E,x):null;case Ar:return V=E._init,g(A,y,V(E._payload),x)}if(So(E)||ho(E))return V!==null?null:f(A,y,E,x,null);fl(A,E)}return null}function S(A,y,E,x,V){if(typeof x=="string"&&x!==""||typeof x=="number")return A=A.get(E)||null,l(y,A,""+x,V);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case nl:return A=A.get(x.key===null?E:x.key)||null,u(y,A,x,V);case ni:return A=A.get(x.key===null?E:x.key)||null,c(y,A,x,V);case Ar:var M=x._init;return S(A,y,E,M(x._payload),V)}if(So(x)||ho(x))return A=A.get(E)||null,f(y,A,x,V,null);fl(y,x)}return null}function k(A,y,E,x){for(var V=null,M=null,T=y,v=y=0,w=null;T!==null&&v<E.length;v++){T.index>v?(w=T,T=null):w=T.sibling;var I=g(A,T,E[v],x);if(I===null){T===null&&(T=w);break}t&&T&&I.alternate===null&&e(A,T),y=i(I,y,v),M===null?V=I:M.sibling=I,M=I,T=w}if(v===E.length)return n(A,T),Ve&&hs(A,v),V;if(T===null){for(;v<E.length;v++)T=m(A,E[v],x),T!==null&&(y=i(T,y,v),M===null?V=T:M.sibling=T,M=T);return Ve&&hs(A,v),V}for(T=r(A,T);v<E.length;v++)w=S(T,A,v,E[v],x),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?v:w.key),y=i(w,y,v),M===null?V=w:M.sibling=w,M=w);return t&&T.forEach(function(C){return e(A,C)}),Ve&&hs(A,v),V}function P(A,y,E,x){var V=ho(E);if(typeof V!="function")throw Error(B(150));if(E=V.call(E),E==null)throw Error(B(151));for(var M=V=null,T=y,v=y=0,w=null,I=E.next();T!==null&&!I.done;v++,I=E.next()){T.index>v?(w=T,T=null):w=T.sibling;var C=g(A,T,I.value,x);if(C===null){T===null&&(T=w);break}t&&T&&C.alternate===null&&e(A,T),y=i(C,y,v),M===null?V=C:M.sibling=C,M=C,T=w}if(I.done)return n(A,T),Ve&&hs(A,v),V;if(T===null){for(;!I.done;v++,I=E.next())I=m(A,I.value,x),I!==null&&(y=i(I,y,v),M===null?V=I:M.sibling=I,M=I);return Ve&&hs(A,v),V}for(T=r(A,T);!I.done;v++,I=E.next())I=S(T,A,v,I.value,x),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?v:I.key),y=i(I,y,v),M===null?V=I:M.sibling=I,M=I);return t&&T.forEach(function(N){return e(A,N)}),Ve&&hs(A,v),V}function b(A,y,E,x){if(typeof E=="object"&&E!==null&&E.type===ri&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case nl:e:{for(var V=E.key,M=y;M!==null;){if(M.key===V){if(V=E.type,V===ri){if(M.tag===7){n(A,M.sibling),y=s(M,E.props.children),y.return=A,A=y;break e}}else if(M.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ar&&Hg(V)===M.type){n(A,M.sibling),y=s(M,E.props),y.ref=yo(A,M,E),y.return=A,A=y;break e}n(A,M);break}else e(A,M);M=M.sibling}E.type===ri?(y=Es(E.props.children,A.mode,x,E.key),y.return=A,A=y):(x=Ml(E.type,E.key,E.props,null,A.mode,x),x.ref=yo(A,y,E),x.return=A,A=x)}return o(A);case ni:e:{for(M=E.key;y!==null;){if(y.key===M)if(y.tag===4&&y.stateNode.containerInfo===E.containerInfo&&y.stateNode.implementation===E.implementation){n(A,y.sibling),y=s(y,E.children||[]),y.return=A,A=y;break e}else{n(A,y);break}else e(A,y);y=y.sibling}y=gd(E,A.mode,x),y.return=A,A=y}return o(A);case Ar:return M=E._init,b(A,y,M(E._payload),x)}if(So(E))return k(A,y,E,x);if(ho(E))return P(A,y,E,x);fl(A,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,y!==null&&y.tag===6?(n(A,y.sibling),y=s(y,E),y.return=A,A=y):(n(A,y),y=md(E,A.mode,x),y.return=A,A=y),o(A)):n(A,y)}return b}var Ci=fw(!0),pw=fw(!1),ou=ns(null),au=null,di=null,Cf=null;function Pf(){Cf=di=au=null}function Nf(t){var e=ou.current;Oe(ou),t._currentValue=e}function hh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function vi(t,e){au=t,Cf=di=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($t=!0),t.firstContext=null)}function gn(t){var e=t._currentValue;if(Cf!==t)if(t={context:t,memoizedValue:e,next:null},di===null){if(au===null)throw Error(B(308));di=t,au.dependencies={lanes:0,firstContext:t}}else di=di.next=t;return e}var gs=null;function xf(t){gs===null?gs=[t]:gs.push(t)}function mw(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,xf(e)):(n.next=s.next,s.next=n),e.interleaved=n,cr(t,r)}function cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Rr=!1;function bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Br(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,_e&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,cr(t,n)}return s=r.interleaved,s===null?(e.next=e,xf(r)):(e.next=s.next,s.next=e),r.interleaved=e,cr(t,n)}function Nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yf(t,n)}}function qg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lu(t,e,n,r){var s=t.updateQueue;Rr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=c=u=null,l=i;do{var g=l.lane,S=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,P=l;switch(g=e,S=n,P.tag){case 1:if(k=P.payload,typeof k=="function"){m=k.call(S,m,g);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=P.payload,g=typeof k=="function"?k.call(S,m,g):k,g==null)break e;m=Fe({},m,g);break e;case 2:Rr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else S={eventTime:S,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=S,u=m):f=f.next=S,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ks|=o,t.lanes=o,t.memoizedState=m}}function Kg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(B(191,s));s.call(r)}}}var Ra={},Fn=ns(Ra),ia=ns(Ra),oa=ns(Ra);function ys(t){if(t===Ra)throw Error(B(174));return t}function Df(t,e){switch(Ne(oa,e),Ne(ia,t),Ne(Fn,Ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qd(e,t)}Oe(Fn),Ne(Fn,e)}function Pi(){Oe(Fn),Oe(ia),Oe(oa)}function yw(t){ys(oa.current);var e=ys(Fn.current),n=qd(e,t.type);e!==n&&(Ne(ia,t),Ne(Fn,n))}function Of(t){ia.current===t&&(Oe(Fn),Oe(ia))}var je=ns(0);function uu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ud=[];function Lf(){for(var t=0;t<ud.length;t++)ud[t]._workInProgressVersionPrimary=null;ud.length=0}var xl=yr.ReactCurrentDispatcher,cd=yr.ReactCurrentBatchConfig,Rs=0,Ue=null,tt=null,ot=null,cu=!1,jo=!1,aa=0,FA=0;function It(){throw Error(B(321))}function Mf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Cn(t[n],e[n]))return!1;return!0}function Vf(t,e,n,r,s,i){if(Rs=i,Ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xl.current=t===null||t.memoizedState===null?WA:HA,t=n(r,s),jo){i=0;do{if(jo=!1,aa=0,25<=i)throw Error(B(301));i+=1,ot=tt=null,e.updateQueue=null,xl.current=qA,t=n(r,s)}while(jo)}if(xl.current=du,e=tt!==null&&tt.next!==null,Rs=0,ot=tt=Ue=null,cu=!1,e)throw Error(B(300));return t}function jf(){var t=aa!==0;return aa=0,t}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?Ue.memoizedState=ot=t:ot=ot.next=t,ot}function yn(){if(tt===null){var t=Ue.alternate;t=t!==null?t.memoizedState:null}else t=tt.next;var e=ot===null?Ue.memoizedState:ot.next;if(e!==null)ot=e,tt=t;else{if(t===null)throw Error(B(310));tt=t,t={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},ot===null?Ue.memoizedState=ot=t:ot=ot.next=t}return ot}function la(t,e){return typeof e=="function"?e(t):e}function dd(t){var e=yn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=tt,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((Rs&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Ue.lanes|=f,ks|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,Cn(r,e.memoizedState)||($t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ue.lanes|=i,ks|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hd(t){var e=yn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Cn(i,e.memoizedState)||($t=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function _w(){}function vw(t,e){var n=Ue,r=yn(),s=e(),i=!Cn(r.memoizedState,s);if(i&&(r.memoizedState=s,$t=!0),r=r.queue,Uf(Tw.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||ot!==null&&ot.memoizedState.tag&1){if(n.flags|=2048,ua(9,Ew.bind(null,n,r,s,e),void 0,null),at===null)throw Error(B(349));Rs&30||ww(n,e,s)}return s}function ww(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ew(t,e,n,r){e.value=n,e.getSnapshot=r,Iw(e)&&Sw(t)}function Tw(t,e,n){return n(function(){Iw(e)&&Sw(t)})}function Iw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Cn(t,n)}catch{return!0}}function Sw(t){var e=cr(t,1);e!==null&&kn(e,t,1,-1)}function Gg(t){var e=On();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},e.queue=t,t=t.dispatch=zA.bind(null,Ue,t),[e.memoizedState,t]}function ua(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Aw(){return yn().memoizedState}function bl(t,e,n,r){var s=On();Ue.flags|=t,s.memoizedState=ua(1|e,n,void 0,r===void 0?null:r)}function Fu(t,e,n,r){var s=yn();r=r===void 0?null:r;var i=void 0;if(tt!==null){var o=tt.memoizedState;if(i=o.destroy,r!==null&&Mf(r,o.deps)){s.memoizedState=ua(e,n,i,r);return}}Ue.flags|=t,s.memoizedState=ua(1|e,n,i,r)}function Qg(t,e){return bl(8390656,8,t,e)}function Uf(t,e){return Fu(2048,8,t,e)}function Rw(t,e){return Fu(4,2,t,e)}function kw(t,e){return Fu(4,4,t,e)}function Cw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Pw(t,e,n){return n=n!=null?n.concat([t]):null,Fu(4,4,Cw.bind(null,e,t),n)}function Ff(){}function Nw(t,e){var n=yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function xw(t,e){var n=yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function bw(t,e,n){return Rs&21?(Cn(n,e)||(n=Vv(),Ue.lanes|=n,ks|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=n)}function BA(t,e){var n=Ie;Ie=n!==0&&4>n?n:4,t(!0);var r=cd.transition;cd.transition={};try{t(!1),e()}finally{Ie=n,cd.transition=r}}function Dw(){return yn().memoizedState}function $A(t,e,n){var r=zr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ow(t))Lw(e,n);else if(n=mw(t,e,n,r),n!==null){var s=Vt();kn(n,t,r,s),Mw(n,e,r)}}function zA(t,e,n){var r=zr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ow(t))Lw(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Cn(l,o)){var u=e.interleaved;u===null?(s.next=s,xf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=mw(t,e,s,r),n!==null&&(s=Vt(),kn(n,t,r,s),Mw(n,e,r))}}function Ow(t){var e=t.alternate;return t===Ue||e!==null&&e===Ue}function Lw(t,e){jo=cu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yf(t,n)}}var du={readContext:gn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},WA={readContext:gn,useCallback:function(t,e){return On().memoizedState=[t,e===void 0?null:e],t},useContext:gn,useEffect:Qg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,bl(4194308,4,Cw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return bl(4194308,4,t,e)},useInsertionEffect:function(t,e){return bl(4,2,t,e)},useMemo:function(t,e){var n=On();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=On();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=$A.bind(null,Ue,t),[r.memoizedState,t]},useRef:function(t){var e=On();return t={current:t},e.memoizedState=t},useState:Gg,useDebugValue:Ff,useDeferredValue:function(t){return On().memoizedState=t},useTransition:function(){var t=Gg(!1),e=t[0];return t=BA.bind(null,t[1]),On().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ue,s=On();if(Ve){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),at===null)throw Error(B(349));Rs&30||ww(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Qg(Tw.bind(null,r,i,t),[t]),r.flags|=2048,ua(9,Ew.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=On(),e=at.identifierPrefix;if(Ve){var n=er,r=Zn;n=(r&~(1<<32-Rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},HA={readContext:gn,useCallback:Nw,useContext:gn,useEffect:Uf,useImperativeHandle:Pw,useInsertionEffect:Rw,useLayoutEffect:kw,useMemo:xw,useReducer:dd,useRef:Aw,useState:function(){return dd(la)},useDebugValue:Ff,useDeferredValue:function(t){var e=yn();return bw(e,tt.memoizedState,t)},useTransition:function(){var t=dd(la)[0],e=yn().memoizedState;return[t,e]},useMutableSource:_w,useSyncExternalStore:vw,useId:Dw,unstable_isNewReconciler:!1},qA={readContext:gn,useCallback:Nw,useContext:gn,useEffect:Uf,useImperativeHandle:Pw,useInsertionEffect:Rw,useLayoutEffect:kw,useMemo:xw,useReducer:hd,useRef:Aw,useState:function(){return hd(la)},useDebugValue:Ff,useDeferredValue:function(t){var e=yn();return tt===null?e.memoizedState=t:bw(e,tt.memoizedState,t)},useTransition:function(){var t=hd(la)[0],e=yn().memoizedState;return[t,e]},useMutableSource:_w,useSyncExternalStore:vw,useId:Dw,unstable_isNewReconciler:!1};function Tn(t,e){if(t&&t.defaultProps){e=Fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bu={isMounted:function(t){return(t=t._reactInternals)?js(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Vt(),s=zr(t),i=sr(r,s);i.payload=e,n!=null&&(i.callback=n),e=Br(t,i,s),e!==null&&(kn(e,t,s,r),Nl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Vt(),s=zr(t),i=sr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Br(t,i,s),e!==null&&(kn(e,t,s,r),Nl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),r=zr(t),s=sr(n,r);s.tag=2,e!=null&&(s.callback=e),e=Br(t,s,r),e!==null&&(kn(e,t,r,n),Nl(e,t,r))}};function Yg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ta(n,r)||!ta(s,i):!0}function Vw(t,e,n){var r=!1,s=Yr,i=e.contextType;return typeof i=="object"&&i!==null?i=gn(i):(s=Wt(e)?Ss:xt.current,r=e.contextTypes,i=(r=r!=null)?Ri(t,s):Yr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Xg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Bu.enqueueReplaceState(e,e.state,null)}function ph(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},bf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=gn(i):(i=Wt(e)?Ss:xt.current,s.context=Ri(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(fh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Bu.enqueueReplaceState(s,s.state,null),lu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ni(t,e){try{var n="",r=e;do n+=wS(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function fd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var KA=typeof WeakMap=="function"?WeakMap:Map;function jw(t,e,n){n=sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fu||(fu=!0,Ah=r),mh(t,e)},n}function Uw(t,e,n){n=sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){mh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){mh(t,e),typeof r!="function"&&($r===null?$r=new Set([this]):$r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new KA;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=aR.bind(null,t,e,n),e.then(t,t))}function Zg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ey(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sr(-1,1),e.tag=2,Br(n,e,1))),n.lanes|=1),t)}var GA=yr.ReactCurrentOwner,$t=!1;function Mt(t,e,n,r){e.child=t===null?pw(e,null,n,r):Ci(e,t.child,n,r)}function ty(t,e,n,r,s){n=n.render;var i=e.ref;return vi(e,s),r=Vf(t,e,n,r,i,s),n=jf(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,dr(t,e,s)):(Ve&&n&&Af(e),e.flags|=1,Mt(t,e,r,s),e.child)}function ny(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Gf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Fw(t,e,i,r,s)):(t=Ml(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ta,n(o,r)&&t.ref===e.ref)return dr(t,e,s)}return e.flags|=1,t=Wr(i,r),t.ref=e.ref,t.return=e,e.child=t}function Fw(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ta(i,r)&&t.ref===e.ref)if($t=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&($t=!0);else return e.lanes=t.lanes,dr(t,e,s)}return gh(t,e,n,r,s)}function Bw(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(fi,Yt),Yt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ne(fi,Yt),Yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ne(fi,Yt),Yt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ne(fi,Yt),Yt|=r;return Mt(t,e,s,n),e.child}function $w(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gh(t,e,n,r,s){var i=Wt(n)?Ss:xt.current;return i=Ri(e,i),vi(e,s),n=Vf(t,e,n,r,i,s),r=jf(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,dr(t,e,s)):(Ve&&r&&Af(e),e.flags|=1,Mt(t,e,n,s),e.child)}function ry(t,e,n,r,s){if(Wt(n)){var i=!0;ru(e)}else i=!1;if(vi(e,s),e.stateNode===null)Dl(t,e),Vw(e,n,r),ph(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=gn(c):(c=Wt(n)?Ss:xt.current,c=Ri(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Xg(e,o,r,c),Rr=!1;var g=e.memoizedState;o.state=g,lu(e,r,o,s),u=e.memoizedState,l!==r||g!==u||zt.current||Rr?(typeof f=="function"&&(fh(e,n,f,r),u=e.memoizedState),(l=Rr||Yg(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,gw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Tn(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=gn(u):(u=Wt(n)?Ss:xt.current,u=Ri(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Xg(e,o,r,u),Rr=!1,g=e.memoizedState,o.state=g,lu(e,r,o,s);var k=e.memoizedState;l!==m||g!==k||zt.current||Rr?(typeof S=="function"&&(fh(e,n,S,r),k=e.memoizedState),(c=Rr||Yg(e,n,c,r,g,k,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return yh(t,e,n,r,i,s)}function yh(t,e,n,r,s,i){$w(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&$g(e,n,!1),dr(t,e,i);r=e.stateNode,GA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ci(e,t.child,null,i),e.child=Ci(e,null,l,i)):Mt(t,e,l,i),e.memoizedState=r.state,s&&$g(e,n,!0),e.child}function zw(t){var e=t.stateNode;e.pendingContext?Bg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bg(t,e.context,!1),Df(t,e.containerInfo)}function sy(t,e,n,r,s){return ki(),kf(s),e.flags|=256,Mt(t,e,n,r),e.child}var _h={dehydrated:null,treeContext:null,retryLane:0};function vh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ww(t,e,n){var r=e.pendingProps,s=je.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ne(je,s&1),t===null)return dh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Wu(o,r,0,null),t=Es(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=vh(n),e.memoizedState=_h,t):Bf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return QA(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Wr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Wr(l,i):(i=Es(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?vh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=_h,r}return i=t.child,t=i.sibling,r=Wr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Bf(t,e){return e=Wu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pl(t,e,n,r){return r!==null&&kf(r),Ci(e,t.child,null,n),t=Bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function QA(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=fd(Error(B(422))),pl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Wu({mode:"visible",children:r.children},s,0,null),i=Es(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Ci(e,t.child,null,o),e.child.memoizedState=vh(o),e.memoizedState=_h,i);if(!(e.mode&1))return pl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(B(419)),r=fd(i,r,void 0),pl(t,e,o,r)}if(l=(o&t.childLanes)!==0,$t||l){if(r=at,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,cr(t,s),kn(r,t,s,-1))}return Kf(),r=fd(Error(B(421))),pl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=lR.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Jt=Fr(s.nextSibling),nn=e,Ve=!0,An=null,t!==null&&(un[cn++]=Zn,un[cn++]=er,un[cn++]=As,Zn=t.id,er=t.overflow,As=e),e=Bf(e,r.children),e.flags|=4096,e)}function iy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),hh(t.return,e,n)}function pd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Hw(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Mt(t,e,r.children,n),r=je.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&iy(t,n,e);else if(t.tag===19)iy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ne(je,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&uu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),pd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&uu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}pd(e,!0,n,null,i);break;case"together":pd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ks|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function YA(t,e,n){switch(e.tag){case 3:zw(e),ki();break;case 5:yw(e);break;case 1:Wt(e.type)&&ru(e);break;case 4:Df(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ne(ou,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ne(je,je.current&1),e.flags|=128,null):n&e.child.childLanes?Ww(t,e,n):(Ne(je,je.current&1),t=dr(t,e,n),t!==null?t.sibling:null);Ne(je,je.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Hw(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ne(je,je.current),r)break;return null;case 22:case 23:return e.lanes=0,Bw(t,e,n)}return dr(t,e,n)}var qw,wh,Kw,Gw;qw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wh=function(){};Kw=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ys(Fn.current);var i=null;switch(n){case"input":s=$d(t,s),r=$d(t,r),i=[];break;case"select":s=Fe({},s,{value:void 0}),r=Fe({},r,{value:void 0}),i=[];break;case"textarea":s=Hd(t,s),r=Hd(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=tu)}Kd(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Go.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Go.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&be("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Gw=function(t,e,n,r){n!==r&&(e.flags|=4)};function _o(t,e){if(!Ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function St(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function XA(t,e,n){var r=e.pendingProps;switch(Rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return Wt(e.type)&&nu(),St(e),null;case 3:return r=e.stateNode,Pi(),Oe(zt),Oe(xt),Lf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,An!==null&&(Ch(An),An=null))),wh(t,e),St(e),null;case 5:Of(e);var s=ys(oa.current);if(n=e.type,t!==null&&e.stateNode!=null)Kw(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return St(e),null}if(t=ys(Fn.current),hl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Ln]=e,r[sa]=i,t=(e.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(s=0;s<Ro.length;s++)be(Ro[s],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":pg(r,i),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},be("invalid",r);break;case"textarea":gg(r,i),be("invalid",r)}Kd(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&dl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&dl(r.textContent,l,t),s=["children",""+l]):Go.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&be("scroll",r)}switch(n){case"input":rl(r),mg(r,i,!0);break;case"textarea":rl(r),yg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=tu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Tv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ln]=e,t[sa]=r,qw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gd(n,r),n){case"dialog":be("cancel",t),be("close",t),s=r;break;case"iframe":case"object":case"embed":be("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ro.length;s++)be(Ro[s],t);s=r;break;case"source":be("error",t),s=r;break;case"img":case"image":case"link":be("error",t),be("load",t),s=r;break;case"details":be("toggle",t),s=r;break;case"input":pg(t,r),s=$d(t,r),be("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Fe({},r,{value:void 0}),be("invalid",t);break;case"textarea":gg(t,r),s=Hd(t,r),be("invalid",t);break;default:s=r}Kd(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Av(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Iv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Qo(t,u):typeof u=="number"&&Qo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Go.hasOwnProperty(i)?u!=null&&i==="onScroll"&&be("scroll",t):u!=null&&df(t,i,u,o))}switch(n){case"input":rl(t),mg(t,r,!1);break;case"textarea":rl(t),yg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?mi(t,!!r.multiple,i,!1):r.defaultValue!=null&&mi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=tu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return St(e),null;case 6:if(t&&e.stateNode!=null)Gw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=ys(oa.current),ys(Fn.current),hl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ln]=e,(i=r.nodeValue!==n)&&(t=nn,t!==null))switch(t.tag){case 3:dl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&dl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ln]=e,e.stateNode=r}return St(e),null;case 13:if(Oe(je),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ve&&Jt!==null&&e.mode&1&&!(e.flags&128))hw(),ki(),e.flags|=98560,i=!1;else if(i=hl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(B(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[Ln]=e}else ki(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),i=!1}else An!==null&&(Ch(An),An=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||je.current&1?nt===0&&(nt=3):Kf())),e.updateQueue!==null&&(e.flags|=4),St(e),null);case 4:return Pi(),wh(t,e),t===null&&na(e.stateNode.containerInfo),St(e),null;case 10:return Nf(e.type._context),St(e),null;case 17:return Wt(e.type)&&nu(),St(e),null;case 19:if(Oe(je),i=e.memoizedState,i===null)return St(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)_o(i,!1);else{if(nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=uu(t),o!==null){for(e.flags|=128,_o(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ne(je,je.current&1|2),e.child}t=t.sibling}i.tail!==null&&Qe()>xi&&(e.flags|=128,r=!0,_o(i,!1),e.lanes=4194304)}else{if(!r)if(t=uu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_o(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ve)return St(e),null}else 2*Qe()-i.renderingStartTime>xi&&n!==1073741824&&(e.flags|=128,r=!0,_o(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Qe(),e.sibling=null,n=je.current,Ne(je,r?n&1|2:n&1),e):(St(e),null);case 22:case 23:return qf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Yt&1073741824&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function JA(t,e){switch(Rf(e),e.tag){case 1:return Wt(e.type)&&nu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Pi(),Oe(zt),Oe(xt),Lf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Of(e),null;case 13:if(Oe(je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Oe(je),null;case 4:return Pi(),null;case 10:return Nf(e.type._context),null;case 22:case 23:return qf(),null;case 24:return null;default:return null}}var ml=!1,kt=!1,ZA=typeof WeakSet=="function"?WeakSet:Set,K=null;function hi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(t,e,r)}else n.current=null}function Eh(t,e,n){try{n()}catch(r){ze(t,e,r)}}var oy=!1;function eR(t,e){if(sh=Jl,t=Zv(),Sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,g=null;t:for(;;){for(var S;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(S=m.firstChild)!==null;)g=m,m=S;for(;;){if(m===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++f===r&&(u=o),(S=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ih={focusedElem:t,selectionRange:n},Jl=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var P=k.memoizedProps,b=k.memoizedState,A=e.stateNode,y=A.getSnapshotBeforeUpdate(e.elementType===e.type?P:Tn(e.type,P),b);A.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(x){ze(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return k=oy,oy=!1,k}function Uo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Eh(e,n,i)}s=s.next}while(s!==r)}}function $u(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Th(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qw(t){var e=t.alternate;e!==null&&(t.alternate=null,Qw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ln],delete e[sa],delete e[lh],delete e[MA],delete e[VA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yw(t){return t.tag===5||t.tag===3||t.tag===4}function ay(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tu));else if(r!==4&&(t=t.child,t!==null))for(Ih(t,e,n),t=t.sibling;t!==null;)Ih(t,e,n),t=t.sibling}function Sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sh(t,e,n),t=t.sibling;t!==null;)Sh(t,e,n),t=t.sibling}var ut=null,In=!1;function Ir(t,e,n){for(n=n.child;n!==null;)Xw(t,e,n),n=n.sibling}function Xw(t,e,n){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(Ou,n)}catch{}switch(n.tag){case 5:kt||hi(n,e);case 6:var r=ut,s=In;ut=null,Ir(t,e,n),ut=r,In=s,ut!==null&&(In?(t=ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ut.removeChild(n.stateNode));break;case 18:ut!==null&&(In?(t=ut,n=n.stateNode,t.nodeType===8?ad(t.parentNode,n):t.nodeType===1&&ad(t,n),Zo(t)):ad(ut,n.stateNode));break;case 4:r=ut,s=In,ut=n.stateNode.containerInfo,In=!0,Ir(t,e,n),ut=r,In=s;break;case 0:case 11:case 14:case 15:if(!kt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Eh(n,e,o),s=s.next}while(s!==r)}Ir(t,e,n);break;case 1:if(!kt&&(hi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ze(n,e,l)}Ir(t,e,n);break;case 21:Ir(t,e,n);break;case 22:n.mode&1?(kt=(r=kt)||n.memoizedState!==null,Ir(t,e,n),kt=r):Ir(t,e,n);break;default:Ir(t,e,n)}}function ly(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ZA),e.forEach(function(r){var s=uR.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function En(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ut=l.stateNode,In=!1;break e;case 3:ut=l.stateNode.containerInfo,In=!0;break e;case 4:ut=l.stateNode.containerInfo,In=!0;break e}l=l.return}if(ut===null)throw Error(B(160));Xw(i,o,s),ut=null,In=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){ze(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jw(e,t),e=e.sibling}function Jw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(En(e,t),Dn(t),r&4){try{Uo(3,t,t.return),$u(3,t)}catch(P){ze(t,t.return,P)}try{Uo(5,t,t.return)}catch(P){ze(t,t.return,P)}}break;case 1:En(e,t),Dn(t),r&512&&n!==null&&hi(n,n.return);break;case 5:if(En(e,t),Dn(t),r&512&&n!==null&&hi(n,n.return),t.flags&32){var s=t.stateNode;try{Qo(s,"")}catch(P){ze(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&wv(s,i),Gd(l,o);var c=Gd(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Av(s,m):f==="dangerouslySetInnerHTML"?Iv(s,m):f==="children"?Qo(s,m):df(s,f,m,c)}switch(l){case"input":zd(s,i);break;case"textarea":Ev(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?mi(s,!!i.multiple,S,!1):g!==!!i.multiple&&(i.defaultValue!=null?mi(s,!!i.multiple,i.defaultValue,!0):mi(s,!!i.multiple,i.multiple?[]:"",!1))}s[sa]=i}catch(P){ze(t,t.return,P)}}break;case 6:if(En(e,t),Dn(t),r&4){if(t.stateNode===null)throw Error(B(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){ze(t,t.return,P)}}break;case 3:if(En(e,t),Dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zo(e.containerInfo)}catch(P){ze(t,t.return,P)}break;case 4:En(e,t),Dn(t);break;case 13:En(e,t),Dn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Wf=Qe())),r&4&&ly(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(c=kt)||f,En(e,t),kt=c):En(e,t),Dn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(K=t,f=t.child;f!==null;){for(m=K=f;K!==null;){switch(g=K,S=g.child,g.tag){case 0:case 11:case 14:case 15:Uo(4,g,g.return);break;case 1:hi(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(P){ze(r,n,P)}}break;case 5:hi(g,g.return);break;case 22:if(g.memoizedState!==null){cy(m);continue}}S!==null?(S.return=g,K=S):cy(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Sv("display",o))}catch(P){ze(t,t.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){ze(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:En(e,t),Dn(t),r&4&&ly(t);break;case 21:break;default:En(e,t),Dn(t)}}function Dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Yw(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Qo(s,""),r.flags&=-33);var i=ay(t);Sh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ay(t);Ih(t,l,o);break;default:throw Error(B(161))}}catch(u){ze(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tR(t,e,n){K=t,Zw(t)}function Zw(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var s=K,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ml;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||kt;l=ml;var c=kt;if(ml=o,(kt=u)&&!c)for(K=s;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?dy(s):u!==null?(u.return=o,K=u):dy(s);for(;i!==null;)K=i,Zw(i),i=i.sibling;K=s,ml=l,kt=c}uy(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,K=i):uy(t)}}function uy(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||$u(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!kt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Tn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Kg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Kg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Zo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}kt||e.flags&512&&Th(e)}catch(g){ze(e,e.return,g)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function cy(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function dy(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$u(4,e)}catch(u){ze(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){ze(e,s,u)}}var i=e.return;try{Th(e)}catch(u){ze(e,i,u)}break;case 5:var o=e.return;try{Th(e)}catch(u){ze(e,o,u)}}}catch(u){ze(e,e.return,u)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var nR=Math.ceil,hu=yr.ReactCurrentDispatcher,$f=yr.ReactCurrentOwner,fn=yr.ReactCurrentBatchConfig,_e=0,at=null,Je=null,ht=0,Yt=0,fi=ns(0),nt=0,ca=null,ks=0,zu=0,zf=0,Fo=null,Ft=null,Wf=0,xi=1/0,Yn=null,fu=!1,Ah=null,$r=null,gl=!1,Or=null,pu=0,Bo=0,Rh=null,Ol=-1,Ll=0;function Vt(){return _e&6?Qe():Ol!==-1?Ol:Ol=Qe()}function zr(t){return t.mode&1?_e&2&&ht!==0?ht&-ht:UA.transition!==null?(Ll===0&&(Ll=Vv()),Ll):(t=Ie,t!==0||(t=window.event,t=t===void 0?16:Wv(t.type)),t):1}function kn(t,e,n,r){if(50<Bo)throw Bo=0,Rh=null,Error(B(185));Ia(t,n,r),(!(_e&2)||t!==at)&&(t===at&&(!(_e&2)&&(zu|=n),nt===4&&Cr(t,ht)),Ht(t,r),n===1&&_e===0&&!(e.mode&1)&&(xi=Qe()+500,Uu&&rs()))}function Ht(t,e){var n=t.callbackNode;US(t,e);var r=Xl(t,t===at?ht:0);if(r===0)n!==null&&wg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wg(n),e===1)t.tag===0?jA(hy.bind(null,t)):uw(hy.bind(null,t)),OA(function(){!(_e&6)&&rs()}),n=null;else{switch(jv(r)){case 1:n=gf;break;case 4:n=Lv;break;case 16:n=Yl;break;case 536870912:n=Mv;break;default:n=Yl}n=aE(n,eE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function eE(t,e){if(Ol=-1,Ll=0,_e&6)throw Error(B(327));var n=t.callbackNode;if(wi()&&t.callbackNode!==n)return null;var r=Xl(t,t===at?ht:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=mu(t,r);else{e=r;var s=_e;_e|=2;var i=nE();(at!==t||ht!==e)&&(Yn=null,xi=Qe()+500,ws(t,e));do try{iR();break}catch(l){tE(t,l)}while(!0);Pf(),hu.current=i,_e=s,Je!==null?e=0:(at=null,ht=0,e=nt)}if(e!==0){if(e===2&&(s=Zd(t),s!==0&&(r=s,e=kh(t,s))),e===1)throw n=ca,ws(t,0),Cr(t,r),Ht(t,Qe()),n;if(e===6)Cr(t,r);else{if(s=t.current.alternate,!(r&30)&&!rR(s)&&(e=mu(t,r),e===2&&(i=Zd(t),i!==0&&(r=i,e=kh(t,i))),e===1))throw n=ca,ws(t,0),Cr(t,r),Ht(t,Qe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:fs(t,Ft,Yn);break;case 3:if(Cr(t,r),(r&130023424)===r&&(e=Wf+500-Qe(),10<e)){if(Xl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Vt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=ah(fs.bind(null,t,Ft,Yn),e);break}fs(t,Ft,Yn);break;case 4:if(Cr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Rn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nR(r/1960))-r,10<r){t.timeoutHandle=ah(fs.bind(null,t,Ft,Yn),r);break}fs(t,Ft,Yn);break;case 5:fs(t,Ft,Yn);break;default:throw Error(B(329))}}}return Ht(t,Qe()),t.callbackNode===n?eE.bind(null,t):null}function kh(t,e){var n=Fo;return t.current.memoizedState.isDehydrated&&(ws(t,e).flags|=256),t=mu(t,e),t!==2&&(e=Ft,Ft=n,e!==null&&Ch(e)),t}function Ch(t){Ft===null?Ft=t:Ft.push.apply(Ft,t)}function rR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Cn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Cr(t,e){for(e&=~zf,e&=~zu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Rn(e),r=1<<n;t[n]=-1,e&=~r}}function hy(t){if(_e&6)throw Error(B(327));wi();var e=Xl(t,0);if(!(e&1))return Ht(t,Qe()),null;var n=mu(t,e);if(t.tag!==0&&n===2){var r=Zd(t);r!==0&&(e=r,n=kh(t,r))}if(n===1)throw n=ca,ws(t,0),Cr(t,e),Ht(t,Qe()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fs(t,Ft,Yn),Ht(t,Qe()),null}function Hf(t,e){var n=_e;_e|=1;try{return t(e)}finally{_e=n,_e===0&&(xi=Qe()+500,Uu&&rs())}}function Cs(t){Or!==null&&Or.tag===0&&!(_e&6)&&wi();var e=_e;_e|=1;var n=fn.transition,r=Ie;try{if(fn.transition=null,Ie=1,t)return t()}finally{Ie=r,fn.transition=n,_e=e,!(_e&6)&&rs()}}function qf(){Yt=fi.current,Oe(fi)}function ws(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,DA(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(Rf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nu();break;case 3:Pi(),Oe(zt),Oe(xt),Lf();break;case 5:Of(r);break;case 4:Pi();break;case 13:Oe(je);break;case 19:Oe(je);break;case 10:Nf(r.type._context);break;case 22:case 23:qf()}n=n.return}if(at=t,Je=t=Wr(t.current,null),ht=Yt=e,nt=0,ca=null,zf=zu=ks=0,Ft=Fo=null,gs!==null){for(e=0;e<gs.length;e++)if(n=gs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}gs=null}return t}function tE(t,e){do{var n=Je;try{if(Pf(),xl.current=du,cu){for(var r=Ue.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}cu=!1}if(Rs=0,ot=tt=Ue=null,jo=!1,aa=0,$f.current=null,n===null||n.return===null){nt=1,ca=e,Je=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=ht,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=Zg(o);if(S!==null){S.flags&=-257,ey(S,o,l,i,e),S.mode&1&&Jg(i,c,e),e=S,u=c;var k=e.updateQueue;if(k===null){var P=new Set;P.add(u),e.updateQueue=P}else k.add(u);break e}else{if(!(e&1)){Jg(i,c,e),Kf();break e}u=Error(B(426))}}else if(Ve&&l.mode&1){var b=Zg(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),ey(b,o,l,i,e),kf(Ni(u,l));break e}}i=u=Ni(u,l),nt!==4&&(nt=2),Fo===null?Fo=[i]:Fo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var A=jw(i,u,e);qg(i,A);break e;case 1:l=u;var y=i.type,E=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&($r===null||!$r.has(E)))){i.flags|=65536,e&=-e,i.lanes|=e;var x=Uw(i,l,e);qg(i,x);break e}}i=i.return}while(i!==null)}sE(n)}catch(V){e=V,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(!0)}function nE(){var t=hu.current;return hu.current=du,t===null?du:t}function Kf(){(nt===0||nt===3||nt===2)&&(nt=4),at===null||!(ks&268435455)&&!(zu&268435455)||Cr(at,ht)}function mu(t,e){var n=_e;_e|=2;var r=nE();(at!==t||ht!==e)&&(Yn=null,ws(t,e));do try{sR();break}catch(s){tE(t,s)}while(!0);if(Pf(),_e=n,hu.current=r,Je!==null)throw Error(B(261));return at=null,ht=0,nt}function sR(){for(;Je!==null;)rE(Je)}function iR(){for(;Je!==null&&!NS();)rE(Je)}function rE(t){var e=oE(t.alternate,t,Yt);t.memoizedProps=t.pendingProps,e===null?sE(t):Je=e,$f.current=null}function sE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=JA(n,e),n!==null){n.flags&=32767,Je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nt=6,Je=null;return}}else if(n=XA(n,e,Yt),n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);nt===0&&(nt=5)}function fs(t,e,n){var r=Ie,s=fn.transition;try{fn.transition=null,Ie=1,oR(t,e,n,r)}finally{fn.transition=s,Ie=r}return null}function oR(t,e,n,r){do wi();while(Or!==null);if(_e&6)throw Error(B(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(FS(t,i),t===at&&(Je=at=null,ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gl||(gl=!0,aE(Yl,function(){return wi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=fn.transition,fn.transition=null;var o=Ie;Ie=1;var l=_e;_e|=4,$f.current=null,eR(t,n),Jw(n,t),RA(ih),Jl=!!sh,ih=sh=null,t.current=n,tR(n),xS(),_e=l,Ie=o,fn.transition=i}else t.current=n;if(gl&&(gl=!1,Or=t,pu=s),i=t.pendingLanes,i===0&&($r=null),OS(n.stateNode),Ht(t,Qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(fu)throw fu=!1,t=Ah,Ah=null,t;return pu&1&&t.tag!==0&&wi(),i=t.pendingLanes,i&1?t===Rh?Bo++:(Bo=0,Rh=t):Bo=0,rs(),null}function wi(){if(Or!==null){var t=jv(pu),e=fn.transition,n=Ie;try{if(fn.transition=null,Ie=16>t?16:t,Or===null)var r=!1;else{if(t=Or,Or=null,pu=0,_e&6)throw Error(B(331));var s=_e;for(_e|=4,K=t.current;K!==null;){var i=K,o=i.child;if(K.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(K=c;K!==null;){var f=K;switch(f.tag){case 0:case 11:case 15:Uo(8,f,i)}var m=f.child;if(m!==null)m.return=f,K=m;else for(;K!==null;){f=K;var g=f.sibling,S=f.return;if(Qw(f),f===c){K=null;break}if(g!==null){g.return=S,K=g;break}K=S}}}var k=i.alternate;if(k!==null){var P=k.child;if(P!==null){k.child=null;do{var b=P.sibling;P.sibling=null,P=b}while(P!==null)}}K=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,K=o;else e:for(;K!==null;){if(i=K,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Uo(9,i,i.return)}var A=i.sibling;if(A!==null){A.return=i.return,K=A;break e}K=i.return}}var y=t.current;for(K=y;K!==null;){o=K;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,K=E;else e:for(o=y;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:$u(9,l)}}catch(V){ze(l,l.return,V)}if(l===o){K=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,K=x;break e}K=l.return}}if(_e=s,rs(),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(Ou,t)}catch{}r=!0}return r}finally{Ie=n,fn.transition=e}}return!1}function fy(t,e,n){e=Ni(n,e),e=jw(t,e,1),t=Br(t,e,1),e=Vt(),t!==null&&(Ia(t,1,e),Ht(t,e))}function ze(t,e,n){if(t.tag===3)fy(t,t,n);else for(;e!==null;){if(e.tag===3){fy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($r===null||!$r.has(r))){t=Ni(n,t),t=Uw(e,t,1),e=Br(e,t,1),t=Vt(),e!==null&&(Ia(e,1,t),Ht(e,t));break}}e=e.return}}function aR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,at===t&&(ht&n)===n&&(nt===4||nt===3&&(ht&130023424)===ht&&500>Qe()-Wf?ws(t,0):zf|=n),Ht(t,e)}function iE(t,e){e===0&&(t.mode&1?(e=ol,ol<<=1,!(ol&130023424)&&(ol=4194304)):e=1);var n=Vt();t=cr(t,e),t!==null&&(Ia(t,e,n),Ht(t,n))}function lR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),iE(t,n)}function uR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),iE(t,n)}var oE;oE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||zt.current)$t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $t=!1,YA(t,e,n);$t=!!(t.flags&131072)}else $t=!1,Ve&&e.flags&1048576&&cw(e,iu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Dl(t,e),t=e.pendingProps;var s=Ri(e,xt.current);vi(e,n),s=Vf(null,e,r,t,s,n);var i=jf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wt(r)?(i=!0,ru(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,bf(e),s.updater=Bu,e.stateNode=s,s._reactInternals=e,ph(e,r,t,n),e=yh(null,e,r,!0,i,n)):(e.tag=0,Ve&&i&&Af(e),Mt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Dl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=dR(r),t=Tn(r,t),s){case 0:e=gh(null,e,r,t,n);break e;case 1:e=ry(null,e,r,t,n);break e;case 11:e=ty(null,e,r,t,n);break e;case 14:e=ny(null,e,r,Tn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Tn(r,s),gh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Tn(r,s),ry(t,e,r,s,n);case 3:e:{if(zw(e),t===null)throw Error(B(387));r=e.pendingProps,i=e.memoizedState,s=i.element,gw(t,e),lu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Ni(Error(B(423)),e),e=sy(t,e,r,n,s);break e}else if(r!==s){s=Ni(Error(B(424)),e),e=sy(t,e,r,n,s);break e}else for(Jt=Fr(e.stateNode.containerInfo.firstChild),nn=e,Ve=!0,An=null,n=pw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ki(),r===s){e=dr(t,e,n);break e}Mt(t,e,r,n)}e=e.child}return e;case 5:return yw(e),t===null&&dh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,oh(r,s)?o=null:i!==null&&oh(r,i)&&(e.flags|=32),$w(t,e),Mt(t,e,o,n),e.child;case 6:return t===null&&dh(e),null;case 13:return Ww(t,e,n);case 4:return Df(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ci(e,null,r,n):Mt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Tn(r,s),ty(t,e,r,s,n);case 7:return Mt(t,e,e.pendingProps,n),e.child;case 8:return Mt(t,e,e.pendingProps.children,n),e.child;case 12:return Mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ne(ou,r._currentValue),r._currentValue=o,i!==null)if(Cn(i.value,o)){if(i.children===s.children&&!zt.current){e=dr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=sr(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),hh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),hh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Mt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,vi(e,n),s=gn(s),r=r(s),e.flags|=1,Mt(t,e,r,n),e.child;case 14:return r=e.type,s=Tn(r,e.pendingProps),s=Tn(r.type,s),ny(t,e,r,s,n);case 15:return Fw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Tn(r,s),Dl(t,e),e.tag=1,Wt(r)?(t=!0,ru(e)):t=!1,vi(e,n),Vw(e,r,s),ph(e,r,s,n),yh(null,e,r,!0,t,n);case 19:return Hw(t,e,n);case 22:return Bw(t,e,n)}throw Error(B(156,e.tag))};function aE(t,e){return Ov(t,e)}function cR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(t,e,n,r){return new cR(t,e,n,r)}function Gf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dR(t){if(typeof t=="function")return Gf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ff)return 11;if(t===pf)return 14}return 2}function Wr(t,e){var n=t.alternate;return n===null?(n=dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ml(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Gf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ri:return Es(n.children,s,i,e);case hf:o=8,s|=8;break;case jd:return t=dn(12,n,e,s|2),t.elementType=jd,t.lanes=i,t;case Ud:return t=dn(13,n,e,s),t.elementType=Ud,t.lanes=i,t;case Fd:return t=dn(19,n,e,s),t.elementType=Fd,t.lanes=i,t;case yv:return Wu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mv:o=10;break e;case gv:o=9;break e;case ff:o=11;break e;case pf:o=14;break e;case Ar:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=dn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Es(t,e,n,r){return t=dn(7,t,r,e),t.lanes=n,t}function Wu(t,e,n,r){return t=dn(22,t,r,e),t.elementType=yv,t.lanes=n,t.stateNode={isHidden:!1},t}function md(t,e,n){return t=dn(6,t,null,e),t.lanes=n,t}function gd(t,e,n){return e=dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hR(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yc(0),this.expirationTimes=Yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Qf(t,e,n,r,s,i,o,l,u){return t=new hR(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=dn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bf(i),t}function fR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ni,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function lE(t){if(!t)return Yr;t=t._reactInternals;e:{if(js(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Wt(n))return lw(t,n,e)}return e}function uE(t,e,n,r,s,i,o,l,u){return t=Qf(n,r,!0,t,s,i,o,l,u),t.context=lE(null),n=t.current,r=Vt(),s=zr(n),i=sr(r,s),i.callback=e??null,Br(n,i,s),t.current.lanes=s,Ia(t,s,r),Ht(t,r),t}function Hu(t,e,n,r){var s=e.current,i=Vt(),o=zr(s);return n=lE(n),e.context===null?e.context=n:e.pendingContext=n,e=sr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Br(s,e,o),t!==null&&(kn(t,s,o,i),Nl(t,s,o)),o}function gu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function py(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yf(t,e){py(t,e),(t=t.alternate)&&py(t,e)}function pR(){return null}var cE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xf(t){this._internalRoot=t}qu.prototype.render=Xf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Hu(t,e,null,null)};qu.prototype.unmount=Xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cs(function(){Hu(null,t,null,null)}),e[ur]=null}};function qu(t){this._internalRoot=t}qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<kr.length&&e!==0&&e<kr[n].priority;n++);kr.splice(n,0,t),n===0&&zv(t)}};function Jf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function my(){}function mR(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=gu(o);i.call(c)}}var o=uE(e,r,t,0,null,!1,!1,"",my);return t._reactRootContainer=o,t[ur]=o.current,na(t.nodeType===8?t.parentNode:t),Cs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=gu(u);l.call(c)}}var u=Qf(t,0,!1,null,null,!1,!1,"",my);return t._reactRootContainer=u,t[ur]=u.current,na(t.nodeType===8?t.parentNode:t),Cs(function(){Hu(e,u,n,r)}),u}function Gu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=gu(o);l.call(u)}}Hu(e,o,t,s)}else o=mR(n,e,t,s,r);return gu(o)}Uv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ao(e.pendingLanes);n!==0&&(yf(e,n|1),Ht(e,Qe()),!(_e&6)&&(xi=Qe()+500,rs()))}break;case 13:Cs(function(){var r=cr(t,1);if(r!==null){var s=Vt();kn(r,t,1,s)}}),Yf(t,1)}};_f=function(t){if(t.tag===13){var e=cr(t,134217728);if(e!==null){var n=Vt();kn(e,t,134217728,n)}Yf(t,134217728)}};Fv=function(t){if(t.tag===13){var e=zr(t),n=cr(t,e);if(n!==null){var r=Vt();kn(n,t,e,r)}Yf(t,e)}};Bv=function(){return Ie};$v=function(t,e){var n=Ie;try{return Ie=t,e()}finally{Ie=n}};Yd=function(t,e,n){switch(e){case"input":if(zd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=ju(r);if(!s)throw Error(B(90));vv(r),zd(r,s)}}}break;case"textarea":Ev(t,n);break;case"select":e=n.value,e!=null&&mi(t,!!n.multiple,e,!1)}};Cv=Hf;Pv=Cs;var gR={usingClientEntryPoint:!1,Events:[Aa,ai,ju,Rv,kv,Hf]},vo={findFiberByHostInstance:ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yR={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bv(t),t===null?null:t.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||pR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{Ou=yl.inject(yR),Un=yl}catch{}}sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gR;sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jf(e))throw Error(B(200));return fR(t,e,null,n)};sn.createRoot=function(t,e){if(!Jf(t))throw Error(B(299));var n=!1,r="",s=cE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Qf(t,1,!1,null,null,n,!1,r,s),t[ur]=e.current,na(t.nodeType===8?t.parentNode:t),new Xf(e)};sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=bv(e),t=t===null?null:t.stateNode,t};sn.flushSync=function(t){return Cs(t)};sn.hydrate=function(t,e,n){if(!Ku(e))throw Error(B(200));return Gu(null,t,e,!0,n)};sn.hydrateRoot=function(t,e,n){if(!Jf(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=cE;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=uE(e,null,t,1,n??null,s,!1,i,o),t[ur]=e.current,na(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new qu(e)};sn.render=function(t,e,n){if(!Ku(e))throw Error(B(200));return Gu(null,t,e,!1,n)};sn.unmountComponentAtNode=function(t){if(!Ku(t))throw Error(B(40));return t._reactRootContainer?(Cs(function(){Gu(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1};sn.unstable_batchedUpdates=Hf;sn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ku(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Gu(t,e,n,!1,r)};sn.version="18.3.1-next-f1338f8080-20240426";function dE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dE)}catch(t){console.error(t)}}dE(),dv.exports=sn;var Ki=dv.exports,gy=Ki;Md.createRoot=gy.createRoot,Md.hydrateRoot=gy.hydrateRoot;var yy={};/**
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
 */const hE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},_R=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},fE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,S=c&63;u||(S=64,o||(g=64)),r.push(n[f],n[m],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_R(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new vR;const g=i<<2|l>>4;if(r.push(g),c!==64){const S=l<<4&240|c>>2;if(r.push(S),m!==64){const k=c<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wR=function(t){const e=hE(t);return fE.encodeByteArray(e,!0)},yu=function(t){return wR(t).replace(/\./g,"")},pE=function(t){try{return fE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ER(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const TR=()=>ER().__FIREBASE_DEFAULTS__,IR=()=>{if(typeof process>"u"||typeof yy>"u")return;const t=yy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},SR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pE(t[1]);return e&&JSON.parse(e)},Qu=()=>{try{return TR()||IR()||SR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mE=t=>{var e,n;return(n=(e=Qu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gE=t=>{const e=mE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yE=()=>{var t;return(t=Qu())===null||t===void 0?void 0:t.config},_E=t=>{var e;return(e=Qu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class AR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function vE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[yu(JSON.stringify(n)),yu(JSON.stringify(o)),""].join(".")}/**
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
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function kR(){var t;const e=(t=Qu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function CR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function PR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function NR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xR(){const t=bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bR(){return!kR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wE(){try{return typeof indexedDB=="object"}catch{return!1}}function EE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function DR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const OR="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OR,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Us.prototype.create)}}class Us{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?LR(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new xn(s,l,r)}}function LR(t,e){return t.replace(MR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const MR=/\{\$([^}]+)}/g;function VR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(_y(i)&&_y(o)){if(!bi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function _y(t){return t!==null&&typeof t=="object"}/**
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
 */function ka(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ko(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Co(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jR(t,e){const n=new UR(t,e);return n.subscribe.bind(n)}class UR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=yd),s.error===void 0&&(s.error=yd),s.complete===void 0&&(s.complete=yd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yd(){}/**
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
 */function Te(t){return t&&t._delegate?t._delegate:t}class _n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ps="[DEFAULT]";/**
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
 */class BR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new AR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zR(e))try{this.getOrInitializeService({instanceIdentifier:ps})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ps){return this.instances.has(e)}getOptions(e=ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$R(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ps){return this.component?this.component.multipleInstances?e:ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $R(t){return t===ps?void 0:t}function zR(t){return t.instantiationMode==="EAGER"}/**
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
 */class WR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const HR={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},qR=me.INFO,KR={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},GR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=KR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zf{constructor(e){this.name=e,this._logLevel=qR,this._logHandler=GR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const QR=(t,e)=>e.some(n=>t instanceof n);let vy,wy;function YR(){return vy||(vy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XR(){return wy||(wy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const TE=new WeakMap,Ph=new WeakMap,IE=new WeakMap,_d=new WeakMap,ep=new WeakMap;function JR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ir(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&TE.set(n,t)}).catch(()=>{}),ep.set(e,t),e}function ZR(t){if(Ph.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ph.set(t,e)}let Nh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ph.get(t);if(e==="objectStoreNames")return t.objectStoreNames||IE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ek(t){Nh=t(Nh)}function tk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vd(this),e,...n);return IE.set(r,e.sort?e.sort():[e]),ir(r)}:XR().includes(t)?function(...e){return t.apply(vd(this),e),ir(TE.get(this))}:function(...e){return ir(t.apply(vd(this),e))}}function nk(t){return typeof t=="function"?tk(t):(t instanceof IDBTransaction&&ZR(t),QR(t,YR())?new Proxy(t,Nh):t)}function ir(t){if(t instanceof IDBRequest)return JR(t);if(_d.has(t))return _d.get(t);const e=nk(t);return e!==t&&(_d.set(t,e),ep.set(e,t)),e}const vd=t=>ep.get(t);function Yu(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=ir(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ir(o.result),u.oldVersion,u.newVersion,ir(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}function wd(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),ir(n).then(()=>{})}const rk=["get","getKey","getAll","getAllKeys","count"],sk=["put","add","delete","clear"],Ed=new Map;function Ey(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ed.get(e))return Ed.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=sk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rk.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return Ed.set(e,i),i}ek(t=>({...t,get:(e,n,r)=>Ey(e,n)||t.get(e,n,r),has:(e,n)=>!!Ey(e,n)||t.has(e,n)}));/**
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
 */class ik{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ok(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ok(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xh="@firebase/app",Ty="0.10.13";/**
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
 */const hr=new Zf("@firebase/app"),ak="@firebase/app-compat",lk="@firebase/analytics-compat",uk="@firebase/analytics",ck="@firebase/app-check-compat",dk="@firebase/app-check",hk="@firebase/auth",fk="@firebase/auth-compat",pk="@firebase/database",mk="@firebase/data-connect",gk="@firebase/database-compat",yk="@firebase/functions",_k="@firebase/functions-compat",vk="@firebase/installations",wk="@firebase/installations-compat",Ek="@firebase/messaging",Tk="@firebase/messaging-compat",Ik="@firebase/performance",Sk="@firebase/performance-compat",Ak="@firebase/remote-config",Rk="@firebase/remote-config-compat",kk="@firebase/storage",Ck="@firebase/storage-compat",Pk="@firebase/firestore",Nk="@firebase/vertexai-preview",xk="@firebase/firestore-compat",bk="firebase",Dk="10.14.1";/**
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
 */const bh="[DEFAULT]",Ok={[xh]:"fire-core",[ak]:"fire-core-compat",[uk]:"fire-analytics",[lk]:"fire-analytics-compat",[dk]:"fire-app-check",[ck]:"fire-app-check-compat",[hk]:"fire-auth",[fk]:"fire-auth-compat",[pk]:"fire-rtdb",[mk]:"fire-data-connect",[gk]:"fire-rtdb-compat",[yk]:"fire-fn",[_k]:"fire-fn-compat",[vk]:"fire-iid",[wk]:"fire-iid-compat",[Ek]:"fire-fcm",[Tk]:"fire-fcm-compat",[Ik]:"fire-perf",[Sk]:"fire-perf-compat",[Ak]:"fire-rc",[Rk]:"fire-rc-compat",[kk]:"fire-gcs",[Ck]:"fire-gcs-compat",[Pk]:"fire-fst",[xk]:"fire-fst-compat",[Nk]:"fire-vertex","fire-js":"fire-js",[bk]:"fire-js-all"};/**
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
 */const _u=new Map,Lk=new Map,Dh=new Map;function Iy(t,e){try{t.container.addComponent(e)}catch(n){hr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pn(t){const e=t.name;if(Dh.has(e))return hr.debug(`There were multiple attempts to register component ${e}.`),!1;Dh.set(e,t);for(const n of _u.values())Iy(n,t);for(const n of Lk.values())Iy(n,t);return!0}function Fs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function hn(t){return t.settings!==void 0}/**
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
 */const Mk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Hr=new Us("app","Firebase",Mk);/**
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
 */class Vk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hr.create("app-deleted",{appName:this._name})}}/**
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
 */const Bs=Dk;function SE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Hr.create("bad-app-name",{appName:String(s)});if(n||(n=yE()),!n)throw Hr.create("no-options");const i=_u.get(s);if(i){if(bi(n,i.options)&&bi(r,i.config))return i;throw Hr.create("duplicate-app",{appName:s})}const o=new WR(s);for(const u of Dh.values())o.addComponent(u);const l=new Vk(n,r,o);return _u.set(s,l),l}function Xu(t=bh){const e=_u.get(t);if(!e&&t===bh&&yE())return SE();if(!e)throw Hr.create("no-app",{appName:t});return e}function qt(t,e,n){var r;let s=(r=Ok[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hr.warn(l.join(" "));return}Pn(new _n(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const jk="firebase-heartbeat-database",Uk=1,da="firebase-heartbeat-store";let Td=null;function AE(){return Td||(Td=Yu(jk,Uk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(da)}catch(n){console.warn(n)}}}}).catch(t=>{throw Hr.create("idb-open",{originalErrorMessage:t.message})})),Td}async function Fk(t){try{const n=(await AE()).transaction(da),r=await n.objectStore(da).get(RE(t));return await n.done,r}catch(e){if(e instanceof xn)hr.warn(e.message);else{const n=Hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hr.warn(n.message)}}}async function Sy(t,e){try{const r=(await AE()).transaction(da,"readwrite");await r.objectStore(da).put(e,RE(t)),await r.done}catch(n){if(n instanceof xn)hr.warn(n.message);else{const r=Hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hr.warn(r.message)}}}function RE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Bk=1024,$k=30*24*60*60*1e3;class zk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ay();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=$k}),this._storage.overwrite(this._heartbeatsCache))}catch(r){hr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ay(),{heartbeatsToSend:r,unsentEntries:s}=Wk(this._heartbeatsCache.heartbeats),i=yu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return hr.warn(n),""}}}function Ay(){return new Date().toISOString().substring(0,10)}function Wk(t,e=Bk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ry(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ry(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Hk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wE()?EE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Fk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ry(t){return yu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function qk(t){Pn(new _n("platform-logger",e=>new ik(e),"PRIVATE")),Pn(new _n("heartbeat",e=>new zk(e),"PRIVATE")),qt(xh,Ty,t),qt(xh,Ty,"esm2017"),qt("fire-js","")}qk("");var Kk="firebase",Gk="10.14.1";/**
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
 */qt(Kk,Gk,"app");function tp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function kE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qk=kE,CE=new Us("auth","Firebase",kE());/**
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
 */const vu=new Zf("@firebase/auth");function Yk(t,...e){vu.logLevel<=me.WARN&&vu.warn(`Auth (${Bs}): ${t}`,...e)}function Vl(t,...e){vu.logLevel<=me.ERROR&&vu.error(`Auth (${Bs}): ${t}`,...e)}/**
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
 */function vn(t,...e){throw rp(t,...e)}function pn(t,...e){return rp(t,...e)}function np(t,e,n){const r=Object.assign(Object.assign({},Qk()),{[e]:n});return new Us("auth","Firebase",r).create(e,{appName:t.name})}function or(t){return np(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function PE(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&vn(t,"argument-error"),np(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function rp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return CE.create(t,...e)}function ee(t,e,...n){if(!t)throw rp(e,...n)}function tr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vl(e),new Error(e)}function fr(t,e){t||tr(e)}/**
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
 */function Oh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Xk(){return ky()==="http:"||ky()==="https:"}function ky(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Jk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xk()||PR()||"connection"in navigator)?navigator.onLine:!0}function Zk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ca{constructor(e,n){this.shortDelay=e,this.longDelay=n,fr(n>e,"Short delay should be less than long delay!"),this.isMobile=RR()||NR()}get(){return Jk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sp(t,e){fr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class NE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const eC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tC=new Ca(3e4,6e4);function ss(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _r(t,e,n,r,s={}){return xE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ka(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},i);return CR()||(c.referrerPolicy="no-referrer"),NE.fetch()(bE(t,t.config.apiHost,n,l),c)})}async function xE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},eC),e);try{const s=new rC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw _l(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw _l(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw _l(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw _l(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw np(t,f,c);vn(t,f)}}catch(s){if(s instanceof xn)throw s;vn(t,"network-request-failed",{message:String(s)})}}async function Pa(t,e,n,r,s={}){const i=await _r(t,e,n,r,s);return"mfaPendingCredential"in i&&vn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function bE(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?sp(t.config,s):`${t.config.apiScheme}://${s}`}function nC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pn(this.auth,"network-request-failed")),tC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _l(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=pn(t,e,r);return s.customData._tokenResponse=n,s}function Cy(t){return t!==void 0&&t.enterprise!==void 0}class sC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return nC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function iC(t,e){return _r(t,"GET","/v2/recaptchaConfig",ss(t,e))}/**
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
 */async function oC(t,e){return _r(t,"POST","/v1/accounts:delete",e)}async function DE(t,e){return _r(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function $o(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aC(t,e=!1){const n=Te(t),r=await n.getIdToken(e),s=ip(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:$o(Id(s.auth_time)),issuedAtTime:$o(Id(s.iat)),expirationTime:$o(Id(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Id(t){return Number(t)*1e3}function ip(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vl("JWT malformed, contained fewer than 3 sections"),null;try{const s=pE(n);return s?JSON.parse(s):(Vl("Failed to decode base64 JWT payload"),null)}catch(s){return Vl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Py(t){const e=ip(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&lC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class uC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$o(this.lastLoginAt),this.creationTime=$o(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wu(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Di(t,DE(n,{idToken:r}));ee(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?OE(i.providerUserInfo):[],l=dC(t.providerData,o),u=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Lh(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function cC(t){const e=Te(t);await wu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function OE(t){return t.map(e=>{var{providerId:n}=e,r=tp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hC(t,e){const n=await xE(t,{},async()=>{const r=ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=bE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",NE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fC(t,e){return _r(t,"POST","/v2/accounts:revokeToken",ss(t,e))}/**
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
 */class Ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Py(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Py(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await hC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ei;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ei,this.toJSON())}_performRefresh(){return tr("not implemented")}}/**
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
 */function Sr(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=tp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Lh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Di(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aC(this,e)}reload(){return cC(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hn(this.auth.app))return Promise.reject(or(this.auth));const e=await this.getIdToken();return await Di(this,oC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,c,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,S=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:E,emailVerified:x,isAnonymous:V,providerData:M,stsTokenManager:T}=n;ee(E&&T,e,"internal-error");const v=Ei.fromJSON(this.name,T);ee(typeof E=="string",e,"internal-error"),Sr(m,e.name),Sr(g,e.name),ee(typeof x=="boolean",e,"internal-error"),ee(typeof V=="boolean",e,"internal-error"),Sr(S,e.name),Sr(k,e.name),Sr(P,e.name),Sr(b,e.name),Sr(A,e.name),Sr(y,e.name);const w=new nr({uid:E,auth:e,email:g,emailVerified:x,displayName:m,isAnonymous:V,photoURL:k,phoneNumber:S,tenantId:P,stsTokenManager:v,createdAt:A,lastLoginAt:y});return M&&Array.isArray(M)&&(w.providerData=M.map(I=>Object.assign({},I))),b&&(w._redirectEventId=b),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ei;s.updateFromServerResponse(n);const i=new nr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await wu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?OE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ei;l.updateFromIdToken(r);const u=new nr({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Lh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
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
 */const Ny=new Map;function rr(t){fr(t instanceof Function,"Expected a class definition");let e=Ny.get(t);return e?(fr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ny.set(t,e),e)}/**
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
 */class LE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}LE.type="NONE";const xy=LE;/**
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
 */function jl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=jl(this.userKey,s.apiKey,i),this.fullPersistenceKey=jl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ti(rr(xy),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||rr(xy);const o=jl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const m=nr._fromJSON(e,f);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Ti(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Ti(i,e,r))}}/**
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
 */function by(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(UE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ME(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(BE(e))return"Blackberry";if($E(e))return"Webos";if(VE(e))return"Safari";if((e.includes("chrome/")||jE(e))&&!e.includes("edge/"))return"Chrome";if(FE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ME(t=bt()){return/firefox\//i.test(t)}function VE(t=bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jE(t=bt()){return/crios\//i.test(t)}function UE(t=bt()){return/iemobile/i.test(t)}function FE(t=bt()){return/android/i.test(t)}function BE(t=bt()){return/blackberry/i.test(t)}function $E(t=bt()){return/webos/i.test(t)}function op(t=bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pC(t=bt()){var e;return op(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mC(){return xR()&&document.documentMode===10}function zE(t=bt()){return op(t)||FE(t)||$E(t)||BE(t)||/windows phone/i.test(t)||UE(t)}/**
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
 */function WE(t,e=[]){let n;switch(t){case"Browser":n=by(bt());break;case"Worker":n=`${by(bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bs}/${r}`}/**
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
 */class gC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function yC(t,e={}){return _r(t,"GET","/v2/passwordPolicy",ss(t,e))}/**
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
 */const _C=6;class vC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:_C,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class wC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dy(this),this.idTokenSubscription=new Dy(this),this.beforeStateQueue=new gC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=CE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ti.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await DE(this,{idToken:e}),r=await nr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(hn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hn(this.app))return Promise.reject(or(this));const n=e?Te(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hn(this.app)?Promise.reject(or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hn(this.app)?Promise.reject(or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yC(this),n=new vC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Us("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await fC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rr(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Ti.create(this,[rr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=WE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Yk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function is(t){return Te(t)}class Dy{constructor(e){this.auth=e,this.observer=null,this.addObserver=jR(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ju={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function EC(t){Ju=t}function HE(t){return Ju.loadJS(t)}function TC(){return Ju.recaptchaEnterpriseScript}function IC(){return Ju.gapiScript}function SC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const AC="recaptcha-enterprise",RC="NO_RECAPTCHA";class kC{constructor(e){this.type=AC,this.auth=is(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{iC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new sC(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Cy(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(RC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Cy(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=TC();u.length!==0&&(u+=l),HE(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Oy(t,e,n,r=!1){const s=new kC(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Mh(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Oy(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Oy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function CC(t,e){const n=Fs(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(bi(i,e??{}))return s;vn(s,"already-initialized")}return n.initialize({options:e})}function PC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function NC(t,e,n){const r=is(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=qE(e),{host:o,port:l}=xC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),bC()}function qE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xC(t){const e=qE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ly(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ly(o)}}}function Ly(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ap{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tr("not implemented")}_getIdTokenResponse(e){return tr("not implemented")}_linkToIdToken(e,n){return tr("not implemented")}_getReauthenticationResolver(e){return tr("not implemented")}}async function DC(t,e){return _r(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function OC(t,e){return Pa(t,"POST","/v1/accounts:signInWithPassword",ss(t,e))}/**
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
 */async function LC(t,e){return Pa(t,"POST","/v1/accounts:signInWithEmailLink",ss(t,e))}async function MC(t,e){return Pa(t,"POST","/v1/accounts:signInWithEmailLink",ss(t,e))}/**
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
 */class ha extends ap{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ha(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ha(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mh(e,n,"signInWithPassword",OC);case"emailLink":return LC(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mh(e,r,"signUpPassword",DC);case"emailLink":return MC(e,{idToken:n,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ii(t,e){return Pa(t,"POST","/v1/accounts:signInWithIdp",ss(t,e))}/**
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
 */const VC="http://localhost";class Ps extends ap{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=tp(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ps(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ii(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ii(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ii(e,n)}buildRequest(){const e={requestUri:VC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ka(n)}return e}}/**
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
 */function jC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UC(t){const e=ko(Co(t)).link,n=e?ko(Co(e)).deep_link_id:null,r=ko(Co(t)).deep_link_id;return(r?ko(Co(r)).link:null)||r||n||e||t}class lp{constructor(e){var n,r,s,i,o,l;const u=ko(Co(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=jC((s=u.mode)!==null&&s!==void 0?s:null);ee(c&&f&&m,"argument-error"),this.apiKey=c,this.operation=m,this.code=f,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=UC(e);try{return new lp(n)}catch{return null}}}/**
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
 */class $s{constructor(){this.providerId=$s.PROVIDER_ID}static credential(e,n){return ha._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=lp.parseLink(n);return ee(r,"argument-error"),ha._fromEmailAndCode(e,r.code,r.tenantId)}}$s.PROVIDER_ID="password";$s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Zu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Na extends Zu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pr extends Na{constructor(){super("facebook.com")}static credential(e){return Ps._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
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
 */class Mn extends Na{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ps._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
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
 */class Nr extends Na{constructor(){super("github.com")}static credential(e){return Ps._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
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
 */class xr extends Na{constructor(){super("twitter.com")}static credential(e,n){return Ps._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
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
 */async function FC(t,e){return Pa(t,"POST","/v1/accounts:signUp",ss(t,e))}/**
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
 */class Ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await nr._fromIdTokenResponse(e,r,s),o=My(r);return new Ns({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=My(r);return new Ns({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function My(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Eu extends xn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Eu.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Eu(e,n,r,s)}}function KE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Eu._fromErrorAndOperation(t,i,e,r):i})}async function BC(t,e,n=!1){const r=await Di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ns._forOperation(t,"link",r)}/**
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
 */async function GE(t,e,n=!1){const{auth:r}=t;if(hn(r.app))return Promise.reject(or(r));const s="reauthenticate";try{const i=await Di(t,KE(r,s,e,t),n);ee(i.idToken,r,"internal-error");const o=ip(i.idToken);ee(o,r,"internal-error");const{sub:l}=o;return ee(t.uid===l,r,"user-mismatch"),Ns._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),i}}/**
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
 */async function QE(t,e,n=!1){if(hn(t.app))return Promise.reject(or(t));const r="signIn",s=await KE(t,r,e),i=await Ns._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function $C(t,e){return QE(is(t),e)}async function zC(t,e){return GE(Te(t),e)}/**
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
 */async function YE(t){const e=is(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function WC(t,e,n){if(hn(t.app))return Promise.reject(or(t));const r=is(t),o=await Mh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",FC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&YE(t),u}),l=await Ns._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function HC(t,e,n){return hn(t.app)?Promise.reject(or(t)):$C(Te(t),$s.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&YE(t),r})}/**
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
 */async function qC(t,e){return _r(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Vh(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Te(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Di(r,qC(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function KC(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function GC(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function QC(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}function YC(t){return Te(t).signOut()}const Tu="__sak";/**
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
 */class XE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tu,"1"),this.storage.removeItem(Tu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const XC=1e3,JC=10;class JE extends XE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);mC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,JC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}JE.type="LOCAL";const ZC=JE;/**
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
 */class ZE extends XE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ZE.type="SESSION";const eT=ZE;/**
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
 */function eP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ec(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await eP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ec.receivers=[];/**
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
 */function up(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=up("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Bn(){return window}function nP(t){Bn().location.href=t}/**
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
 */function tT(){return typeof Bn().WorkerGlobalScope<"u"&&typeof Bn().importScripts=="function"}async function rP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iP(){return tT()?self:null}/**
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
 */const nT="firebaseLocalStorageDb",oP=1,Iu="firebaseLocalStorage",rT="fbase_key";class xa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tc(t,e){return t.transaction([Iu],e?"readwrite":"readonly").objectStore(Iu)}function aP(){const t=indexedDB.deleteDatabase(nT);return new xa(t).toPromise()}function jh(){const t=indexedDB.open(nT,oP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Iu,{keyPath:rT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Iu)?e(r):(r.close(),await aP(),e(await jh()))})})}async function Vy(t,e,n){const r=tc(t,!0).put({[rT]:e,value:n});return new xa(r).toPromise()}async function lP(t,e){const n=tc(t,!1).get(e),r=await new xa(n).toPromise();return r===void 0?null:r.value}function jy(t,e){const n=tc(t,!0).delete(e);return new xa(n).toPromise()}const uP=800,cP=3;class sT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ec._getInstance(iP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rP(),!this.activeServiceWorker)return;this.sender=new tP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jh();return await Vy(e,Tu,"1"),await jy(e,Tu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=tc(s,!1).getAll();return new xa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sT.type="LOCAL";const dP=sT;new Ca(3e4,6e4);/**
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
 */function cp(t,e){return e?rr(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class dp extends ap{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hP(t){return QE(t.auth,new dp(t),t.bypassAuthState)}function fP(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),GE(n,new dp(t),t.bypassAuthState)}async function pP(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),BC(n,new dp(t),t.bypassAuthState)}/**
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
 */class iT{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hP;case"linkViaPopup":case"linkViaRedirect":return pP;case"reauthViaPopup":case"reauthViaRedirect":return fP;default:vn(this.auth,"internal-error")}}resolve(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mP=new Ca(2e3,1e4);async function gP(t,e,n){if(hn(t.app))return Promise.reject(pn(t,"operation-not-supported-in-this-environment"));const r=is(t);PE(t,e,Zu);const s=cp(r,n);return new Lr(r,"signInViaPopup",e,s).executeNotNull()}async function yP(t,e,n){const r=Te(t);if(hn(r.auth.app))return Promise.reject(pn(r.auth,"operation-not-supported-in-this-environment"));PE(r.auth,e,Zu);const s=cp(r.auth,n);return new Lr(r.auth,"reauthViaPopup",e,s,r).executeNotNull()}class Lr extends iT{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){fr(this.filter.length===1,"Popup operations only handle one event");const e=up();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mP.get())};e()}}Lr.currentPopupAction=null;/**
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
 */const _P="pendingRedirect",Ul=new Map;class vP extends iT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ul.get(this.auth._key());if(!e){try{const r=await wP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ul.set(this.auth._key(),e)}return this.bypassAuthState||Ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wP(t,e){const n=IP(e),r=TP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function EP(t,e){Ul.set(t._key(),e)}function TP(t){return rr(t._redirectPersistence)}function IP(t){return jl(_P,t.config.apiKey,t.name)}async function SP(t,e,n=!1){if(hn(t.app))return Promise.reject(or(t));const r=is(t),s=cp(r,e),o=await new vP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const AP=10*60*1e3;class RP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!oT(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uy(e))}saveEventToCache(e){this.cachedEventUids.add(Uy(e)),this.lastProcessedEventTime=Date.now()}}function Uy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oT(t);default:return!1}}/**
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
 */async function CP(t,e={}){return _r(t,"GET","/v1/projects",e)}/**
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
 */const PP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NP=/^https?/;async function xP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CP(t);for(const n of e)try{if(bP(n))return}catch{}vn(t,"unauthorized-domain")}function bP(t){const e=Oh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!NP.test(n))return!1;if(PP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const DP=new Ca(3e4,6e4);function Fy(){const t=Bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OP(t){return new Promise((e,n)=>{var r,s,i;function o(){Fy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fy(),n(pn(t,"network-request-failed"))},timeout:DP.get()})}if(!((s=(r=Bn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Bn().gapi)===null||i===void 0)&&i.load)o();else{const l=SC("iframefcb");return Bn()[l]=()=>{gapi.load?o():n(pn(t,"network-request-failed"))},HE(`${IC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Fl=null,e})}let Fl=null;function LP(t){return Fl=Fl||OP(t),Fl}/**
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
 */const MP=new Ca(5e3,15e3),VP="__/auth/iframe",jP="emulator/auth/iframe",UP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BP(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sp(e,jP):`https://${t.config.authDomain}/${VP}`,r={apiKey:e.apiKey,appName:t.name,v:Bs},s=FP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ka(r).slice(1)}`}async function $P(t){const e=await LP(t),n=Bn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:BP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=pn(t,"network-request-failed"),l=Bn().setTimeout(()=>{i(o)},MP.get());function u(){Bn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const zP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WP=500,HP=600,qP="_blank",KP="http://localhost";class By{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GP(t,e,n,r=WP,s=HP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},zP),{width:r.toString(),height:s.toString(),top:i,left:o}),c=bt().toLowerCase();n&&(l=jE(c)?qP:n),ME(c)&&(e=e||KP,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[S,k])=>`${g}${S}=${k},`,"");if(pC(c)&&l!=="_self")return QP(e||"",l),new By(null);const m=window.open(e||"",l,f);ee(m,t,"popup-blocked");try{m.focus()}catch{}return new By(m)}function QP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const YP="__/auth/handler",XP="emulator/auth/handler",JP=encodeURIComponent("fac");async function $y(t,e,n,r,s,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Bs,eventId:s};if(e instanceof Zu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",VR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Na){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${JP}=${encodeURIComponent(u)}`:"";return`${ZP(t)}?${ka(l).slice(1)}${c}`}function ZP({config:t}){return t.emulator?sp(t,XP):`https://${t.authDomain}/${YP}`}/**
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
 */const Sd="webStorageSupport";class eN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eT,this._completeRedirectFn=SP,this._overrideRedirectResult=EP}async _openPopup(e,n,r,s){var i;fr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await $y(e,n,r,Oh(),s);return GP(e,o,up())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await $y(e,n,r,Oh(),s);return nP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(fr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $P(e),r=new RP(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sd,{type:Sd},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Sd];o!==void 0&&n(!!o),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zE()||VE()||op()}}const tN=eN;var zy="@firebase/auth",Wy="1.7.9";/**
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
 */class nN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sN(t){Pn(new _n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:WE(t)},c=new wC(r,s,i,u);return PC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Pn(new _n("auth-internal",e=>{const n=is(e.getProvider("auth").getImmediate());return(r=>new nN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(zy,Wy,rN(t)),qt(zy,Wy,"esm2017")}/**
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
 */const iN=5*60,oN=_E("authIdTokenMaxAge")||iN;let Hy=null;const aN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oN)return;const s=n==null?void 0:n.token;Hy!==s&&(Hy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lN(t=Xu()){const e=Fs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CC(t,{popupRedirectResolver:tN,persistence:[dP,ZC,eT]}),r=_E("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=aN(i.toString());GC(n,o,()=>o(n.currentUser)),KC(n,l=>o(l))}}const s=mE("auth");return s&&NC(n,`http://${s}`),n}function uN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}EC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=pn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",uN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sN("Browser");var qy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ts,aT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function w(){}w.prototype=v.prototype,T.D=v.prototype,T.prototype=new w,T.prototype.constructor=T,T.C=function(I,C,N){for(var R=Array(arguments.length-2),le=2;le<arguments.length;le++)R[le-2]=arguments[le];return v.prototype[C].apply(I,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,w){w||(w=0);var I=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)I[C]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(C=0;16>C;++C)I[C]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=T.g[0],w=T.g[1],C=T.g[2];var N=T.g[3],R=v+(N^w&(C^N))+I[0]+3614090360&4294967295;v=w+(R<<7&4294967295|R>>>25),R=N+(C^v&(w^C))+I[1]+3905402710&4294967295,N=v+(R<<12&4294967295|R>>>20),R=C+(w^N&(v^w))+I[2]+606105819&4294967295,C=N+(R<<17&4294967295|R>>>15),R=w+(v^C&(N^v))+I[3]+3250441966&4294967295,w=C+(R<<22&4294967295|R>>>10),R=v+(N^w&(C^N))+I[4]+4118548399&4294967295,v=w+(R<<7&4294967295|R>>>25),R=N+(C^v&(w^C))+I[5]+1200080426&4294967295,N=v+(R<<12&4294967295|R>>>20),R=C+(w^N&(v^w))+I[6]+2821735955&4294967295,C=N+(R<<17&4294967295|R>>>15),R=w+(v^C&(N^v))+I[7]+4249261313&4294967295,w=C+(R<<22&4294967295|R>>>10),R=v+(N^w&(C^N))+I[8]+1770035416&4294967295,v=w+(R<<7&4294967295|R>>>25),R=N+(C^v&(w^C))+I[9]+2336552879&4294967295,N=v+(R<<12&4294967295|R>>>20),R=C+(w^N&(v^w))+I[10]+4294925233&4294967295,C=N+(R<<17&4294967295|R>>>15),R=w+(v^C&(N^v))+I[11]+2304563134&4294967295,w=C+(R<<22&4294967295|R>>>10),R=v+(N^w&(C^N))+I[12]+1804603682&4294967295,v=w+(R<<7&4294967295|R>>>25),R=N+(C^v&(w^C))+I[13]+4254626195&4294967295,N=v+(R<<12&4294967295|R>>>20),R=C+(w^N&(v^w))+I[14]+2792965006&4294967295,C=N+(R<<17&4294967295|R>>>15),R=w+(v^C&(N^v))+I[15]+1236535329&4294967295,w=C+(R<<22&4294967295|R>>>10),R=v+(C^N&(w^C))+I[1]+4129170786&4294967295,v=w+(R<<5&4294967295|R>>>27),R=N+(w^C&(v^w))+I[6]+3225465664&4294967295,N=v+(R<<9&4294967295|R>>>23),R=C+(v^w&(N^v))+I[11]+643717713&4294967295,C=N+(R<<14&4294967295|R>>>18),R=w+(N^v&(C^N))+I[0]+3921069994&4294967295,w=C+(R<<20&4294967295|R>>>12),R=v+(C^N&(w^C))+I[5]+3593408605&4294967295,v=w+(R<<5&4294967295|R>>>27),R=N+(w^C&(v^w))+I[10]+38016083&4294967295,N=v+(R<<9&4294967295|R>>>23),R=C+(v^w&(N^v))+I[15]+3634488961&4294967295,C=N+(R<<14&4294967295|R>>>18),R=w+(N^v&(C^N))+I[4]+3889429448&4294967295,w=C+(R<<20&4294967295|R>>>12),R=v+(C^N&(w^C))+I[9]+568446438&4294967295,v=w+(R<<5&4294967295|R>>>27),R=N+(w^C&(v^w))+I[14]+3275163606&4294967295,N=v+(R<<9&4294967295|R>>>23),R=C+(v^w&(N^v))+I[3]+4107603335&4294967295,C=N+(R<<14&4294967295|R>>>18),R=w+(N^v&(C^N))+I[8]+1163531501&4294967295,w=C+(R<<20&4294967295|R>>>12),R=v+(C^N&(w^C))+I[13]+2850285829&4294967295,v=w+(R<<5&4294967295|R>>>27),R=N+(w^C&(v^w))+I[2]+4243563512&4294967295,N=v+(R<<9&4294967295|R>>>23),R=C+(v^w&(N^v))+I[7]+1735328473&4294967295,C=N+(R<<14&4294967295|R>>>18),R=w+(N^v&(C^N))+I[12]+2368359562&4294967295,w=C+(R<<20&4294967295|R>>>12),R=v+(w^C^N)+I[5]+4294588738&4294967295,v=w+(R<<4&4294967295|R>>>28),R=N+(v^w^C)+I[8]+2272392833&4294967295,N=v+(R<<11&4294967295|R>>>21),R=C+(N^v^w)+I[11]+1839030562&4294967295,C=N+(R<<16&4294967295|R>>>16),R=w+(C^N^v)+I[14]+4259657740&4294967295,w=C+(R<<23&4294967295|R>>>9),R=v+(w^C^N)+I[1]+2763975236&4294967295,v=w+(R<<4&4294967295|R>>>28),R=N+(v^w^C)+I[4]+1272893353&4294967295,N=v+(R<<11&4294967295|R>>>21),R=C+(N^v^w)+I[7]+4139469664&4294967295,C=N+(R<<16&4294967295|R>>>16),R=w+(C^N^v)+I[10]+3200236656&4294967295,w=C+(R<<23&4294967295|R>>>9),R=v+(w^C^N)+I[13]+681279174&4294967295,v=w+(R<<4&4294967295|R>>>28),R=N+(v^w^C)+I[0]+3936430074&4294967295,N=v+(R<<11&4294967295|R>>>21),R=C+(N^v^w)+I[3]+3572445317&4294967295,C=N+(R<<16&4294967295|R>>>16),R=w+(C^N^v)+I[6]+76029189&4294967295,w=C+(R<<23&4294967295|R>>>9),R=v+(w^C^N)+I[9]+3654602809&4294967295,v=w+(R<<4&4294967295|R>>>28),R=N+(v^w^C)+I[12]+3873151461&4294967295,N=v+(R<<11&4294967295|R>>>21),R=C+(N^v^w)+I[15]+530742520&4294967295,C=N+(R<<16&4294967295|R>>>16),R=w+(C^N^v)+I[2]+3299628645&4294967295,w=C+(R<<23&4294967295|R>>>9),R=v+(C^(w|~N))+I[0]+4096336452&4294967295,v=w+(R<<6&4294967295|R>>>26),R=N+(w^(v|~C))+I[7]+1126891415&4294967295,N=v+(R<<10&4294967295|R>>>22),R=C+(v^(N|~w))+I[14]+2878612391&4294967295,C=N+(R<<15&4294967295|R>>>17),R=w+(N^(C|~v))+I[5]+4237533241&4294967295,w=C+(R<<21&4294967295|R>>>11),R=v+(C^(w|~N))+I[12]+1700485571&4294967295,v=w+(R<<6&4294967295|R>>>26),R=N+(w^(v|~C))+I[3]+2399980690&4294967295,N=v+(R<<10&4294967295|R>>>22),R=C+(v^(N|~w))+I[10]+4293915773&4294967295,C=N+(R<<15&4294967295|R>>>17),R=w+(N^(C|~v))+I[1]+2240044497&4294967295,w=C+(R<<21&4294967295|R>>>11),R=v+(C^(w|~N))+I[8]+1873313359&4294967295,v=w+(R<<6&4294967295|R>>>26),R=N+(w^(v|~C))+I[15]+4264355552&4294967295,N=v+(R<<10&4294967295|R>>>22),R=C+(v^(N|~w))+I[6]+2734768916&4294967295,C=N+(R<<15&4294967295|R>>>17),R=w+(N^(C|~v))+I[13]+1309151649&4294967295,w=C+(R<<21&4294967295|R>>>11),R=v+(C^(w|~N))+I[4]+4149444226&4294967295,v=w+(R<<6&4294967295|R>>>26),R=N+(w^(v|~C))+I[11]+3174756917&4294967295,N=v+(R<<10&4294967295|R>>>22),R=C+(v^(N|~w))+I[2]+718787259&4294967295,C=N+(R<<15&4294967295|R>>>17),R=w+(N^(C|~v))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(C+(R<<21&4294967295|R>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+N&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var w=v-this.blockSize,I=this.B,C=this.h,N=0;N<v;){if(C==0)for(;N<=w;)s(this,T,N),N+=this.blockSize;if(typeof T=="string"){for(;N<v;)if(I[C++]=T.charCodeAt(N++),C==this.blockSize){s(this,I),C=0;break}}else for(;N<v;)if(I[C++]=T[N++],C==this.blockSize){s(this,I),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var w=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=w&255,w/=256;for(this.u(T),T=Array(16),v=w=0;4>v;++v)for(var I=0;32>I;I+=8)T[w++]=this.g[v]>>>I&255;return T};function i(T,v){var w=l;return Object.prototype.hasOwnProperty.call(w,T)?w[T]:w[T]=v(T)}function o(T,v){this.h=v;for(var w=[],I=!0,C=T.length-1;0<=C;C--){var N=T[C]|0;I&&N==v||(w[C]=N,I=!1)}this.g=w}var l={};function u(T){return-128<=T&&128>T?i(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return b(c(-T));for(var v=[],w=1,I=0;T>=w;I++)v[I]=T/w|0,w*=4294967296;return new o(v,0)}function f(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return b(f(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(v,8)),I=m,C=0;C<T.length;C+=8){var N=Math.min(8,T.length-C),R=parseInt(T.substring(C,C+N),v);8>N?(N=c(Math.pow(v,N)),I=I.j(N).add(c(R))):(I=I.j(w),I=I.add(c(R)))}return I}var m=u(0),g=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-b(this).m();for(var T=0,v=1,w=0;w<this.g.length;w++){var I=this.i(w);T+=(0<=I?I:4294967296+I)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(P(this))return"-"+b(this).toString(T);for(var v=c(Math.pow(T,6)),w=this,I="";;){var C=x(w,v).g;w=A(w,C.j(v));var N=((0<w.g.length?w.g[0]:w.h)>>>0).toString(T);if(w=C,k(w))return N+I;for(;6>N.length;)N="0"+N;I=N+I}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function P(T){return T.h==-1}t.l=function(T){return T=A(this,T),P(T)?-1:k(T)?0:1};function b(T){for(var v=T.g.length,w=[],I=0;I<v;I++)w[I]=~T.g[I];return new o(w,~T.h).add(g)}t.abs=function(){return P(this)?b(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),w=[],I=0,C=0;C<=v;C++){var N=I+(this.i(C)&65535)+(T.i(C)&65535),R=(N>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);I=R>>>16,N&=65535,R&=65535,w[C]=R<<16|N}return new o(w,w[w.length-1]&-2147483648?-1:0)};function A(T,v){return T.add(b(v))}t.j=function(T){if(k(this)||k(T))return m;if(P(this))return P(T)?b(this).j(b(T)):b(b(this).j(T));if(P(T))return b(this.j(b(T)));if(0>this.l(S)&&0>T.l(S))return c(this.m()*T.m());for(var v=this.g.length+T.g.length,w=[],I=0;I<2*v;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var C=0;C<T.g.length;C++){var N=this.i(I)>>>16,R=this.i(I)&65535,le=T.i(C)>>>16,Pe=T.i(C)&65535;w[2*I+2*C]+=R*Pe,y(w,2*I+2*C),w[2*I+2*C+1]+=N*Pe,y(w,2*I+2*C+1),w[2*I+2*C+1]+=R*le,y(w,2*I+2*C+1),w[2*I+2*C+2]+=N*le,y(w,2*I+2*C+2)}for(I=0;I<v;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=v;I<2*v;I++)w[I]=0;return new o(w,0)};function y(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function E(T,v){this.g=T,this.h=v}function x(T,v){if(k(v))throw Error("division by zero");if(k(T))return new E(m,m);if(P(T))return v=x(b(T),v),new E(b(v.g),b(v.h));if(P(v))return v=x(T,b(v)),new E(b(v.g),v.h);if(30<T.g.length){if(P(T)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var w=g,I=v;0>=I.l(T);)w=V(w),I=V(I);var C=M(w,1),N=M(I,1);for(I=M(I,2),w=M(w,2);!k(I);){var R=N.add(I);0>=R.l(T)&&(C=C.add(w),N=R),I=M(I,1),w=M(w,1)}return v=A(T,C.j(v)),new E(C,v)}for(C=m;0<=T.l(v);){for(w=Math.max(1,Math.floor(T.m()/v.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),N=c(w),R=N.j(v);P(R)||0<R.l(T);)w-=I,N=c(w),R=N.j(v);k(N)&&(N=g),C=C.add(N),T=A(T,R)}return new E(C,T)}t.A=function(T){return x(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)&T.i(I);return new o(w,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)|T.i(I);return new o(w,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)^T.i(I);return new o(w,this.h^T.h)};function V(T){for(var v=T.g.length+1,w=[],I=0;I<v;I++)w[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(w,T.h)}function M(T,v){var w=v>>5;v%=32;for(var I=T.g.length-w,C=[],N=0;N<I;N++)C[N]=0<v?T.i(N+w)>>>v|T.i(N+w+1)<<32-v:T.i(N+w);return new o(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,aT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Ts=o}).apply(typeof qy<"u"?qy:typeof self<"u"?self:typeof window<"u"?window:{});var vl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lT,Po,uT,Bl,Uh,cT,dT,hT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,p){return a==Array.prototype||a==Object.prototype||(a[d]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof vl=="object"&&vl];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in p))break e;p=p[D]}a=a[a.length-1],_=p[a],d=d(_),d!=_&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var p=0,_=!1,D={next:function(){if(!_&&p<a.length){var O=p++;return{value:d(O,a[O]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function f(a,d,p){return a.call.apply(a.bind,arguments)}function m(a,d,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),a.apply(d,D)}}return function(){return a.apply(d,arguments)}}function g(a,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function S(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function k(a,d){function p(){}p.prototype=d.prototype,a.aa=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,D,O){for(var $=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)$[Ce-2]=arguments[Ce];return d.prototype[D].apply(_,$)}}function P(a){const d=a.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=a[_];return p}return[]}function b(a,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const D=a.length||0,O=_.length||0;a.length=D+O;for(let $=0;$<O;$++)a[D+$]=_[$]}else a.push(_)}}class A{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function y(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var V=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function M(a,d,p){for(const _ in a)d.call(p,a[_],_,a)}function T(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function v(a){const d={};for(const p in a)d[p]=a[p];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,d){let p,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(p in _)a[p]=_[p];for(let O=0;O<w.length;O++)p=w[O],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function C(a){var d=1;a=a.split(":");const p=[];for(;0<d&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function N(a){l.setTimeout(()=>{throw a},0)}function R(){var a=J;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class le{constructor(){this.h=this.g=null}add(d,p){const _=Pe.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var Pe=new A(()=>new st,a=>a.reset());class st{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Dt,z=!1,J=new le,ne=()=>{const a=l.Promise.resolve(void 0);Dt=()=>{a.then(Ae)}};var Ae=()=>{for(var a;a=R();){try{a.h.call(a.g)}catch(p){N(p)}var d=Pe;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}z=!1};function ye(){this.s=this.s,this.C=this.C}ye.prototype.s=!1,ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function F(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}F.prototype.h=function(){this.defaultPrevented=!0};var Y=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,d),l.removeEventListener("test",p,d)}catch{}return a}();function Z(a,d){if(F.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(V){e:{try{x(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:he[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Z.aa.h.call(this)}}k(Z,F);var he={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Re="closure_listenable_"+(1e6*Math.random()|0),gt=0;function qe(a,d,p,_,D){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=D,this.key=++gt,this.da=this.fa=!1}function ke(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Me(a){this.src=a,this.g={},this.h=0}Me.prototype.add=function(a,d,p,_,D){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var $=Ke(a,d,_,D);return-1<$?(d=a[$],p||(d.fa=!1)):(d=new qe(d,this.src,O,!!_,D),d.fa=p,a.push(d)),d};function yt(a,d){var p=d.type;if(p in a.g){var _=a.g[p],D=Array.prototype.indexOf.call(_,d,void 0),O;(O=0<=D)&&Array.prototype.splice.call(_,D,1),O&&(ke(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Ke(a,d,p,_){for(var D=0;D<a.length;++D){var O=a[D];if(!O.da&&O.listener==d&&O.capture==!!p&&O.ha==_)return D}return-1}var _t="closure_lm_"+(1e6*Math.random()|0),vt={};function Gt(a,d,p,_,D){if(Array.isArray(d)){for(var O=0;O<d.length;O++)Gt(a,d[O],p,_,D);return null}return p=fe(p),a&&a[Re]?a.K(d,p,c(_)?!!_.capture:!1,D):bn(a,d,p,!1,_,D)}function bn(a,d,p,_,D,O){if(!d)throw Error("Invalid event type");var $=c(D)?!!D.capture:!!D,Ce=ue(a);if(Ce||(a[_t]=Ce=new Me(a)),p=Ce.add(d,p,_,$,O),p.proxy)return p;if(_=as(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)Y||(D=$),D===void 0&&(D=!1),a.addEventListener(d.toString(),_,D);else if(a.attachEvent)a.attachEvent(te(d.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function as(){function a(p){return d.call(a.src,a.listener,p)}const d=ae;return a}function q(a,d,p,_,D){if(Array.isArray(d))for(var O=0;O<d.length;O++)q(a,d[O],p,_,D);else _=c(_)?!!_.capture:!!_,p=fe(p),a&&a[Re]?(a=a.i,d=String(d).toString(),d in a.g&&(O=a.g[d],p=Ke(O,p,_,D),-1<p&&(ke(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete a.g[d],a.h--)))):a&&(a=ue(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Ke(d,p,_,D)),(p=-1<a?d[a]:null)&&W(p))}function W(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Re])yt(d.i,a);else{var p=a.type,_=a.proxy;d.removeEventListener?d.removeEventListener(p,_,a.capture):d.detachEvent?d.detachEvent(te(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=ue(d))?(yt(p,a),p.h==0&&(p.src=null,d[_t]=null)):ke(a)}}}function te(a){return a in vt?vt[a]:vt[a]="on"+a}function ae(a,d){if(a.da)a=!0;else{d=new Z(d,this);var p=a.listener,_=a.ha||a.src;a.fa&&W(a),a=p.call(_,d)}return a}function ue(a){return a=a[_t],a instanceof Me?a:null}var Ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function fe(a){return typeof a=="function"?a:(a[Ee]||(a[Ee]=function(d){return a.handleEvent(d)}),a[Ee])}function G(){ye.call(this),this.i=new Me(this),this.M=this,this.F=null}k(G,ye),G.prototype[Re]=!0,G.prototype.removeEventListener=function(a,d,p,_){q(this,a,d,p,_)};function se(a,d){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=d.type||d,typeof d=="string")d=new F(d,a);else if(d instanceof F)d.target=d.target||a;else{var D=d;d=new F(_,a),I(d,D)}if(D=!0,p)for(var O=p.length-1;0<=O;O--){var $=d.g=p[O];D=ce($,_,!0,d)&&D}if($=d.g=a,D=ce($,_,!0,d)&&D,D=ce($,_,!1,d)&&D,p)for(O=0;O<p.length;O++)$=d.g=p[O],D=ce($,_,!1,d)&&D}G.prototype.N=function(){if(G.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var p=a.g[d],_=0;_<p.length;_++)ke(p[_]);delete a.g[d],a.h--}}this.F=null},G.prototype.K=function(a,d,p,_){return this.i.add(String(a),d,!1,p,_)},G.prototype.L=function(a,d,p,_){return this.i.add(String(a),d,!0,p,_)};function ce(a,d,p,_){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,O=0;O<d.length;++O){var $=d[O];if($&&!$.da&&$.capture==p){var Ce=$.listener,lt=$.ha||$.src;$.fa&&yt(a.i,$),D=Ce.call(lt,_)!==!1&&D}}return D&&!_.defaultPrevented}function wt(a,d,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function an(a){a.g=wt(()=>{a.g=null,a.i&&(a.i=!1,an(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class pm extends ye{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:an(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ji(a){ye.call(this),this.h=a,this.g={}}k(Ji,ye);var mm=[];function gm(a){M(a.g,function(d,p){this.g.hasOwnProperty(p)&&W(d)},a),a.g={}}Ji.prototype.N=function(){Ji.aa.N.call(this),gm(this)},Ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pc=l.JSON.stringify,v0=l.JSON.parse,w0=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Nc(){}Nc.prototype.h=null;function ym(a){return a.h||(a.h=a.i())}function _m(){}var Zi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xc(){F.call(this,"d")}k(xc,F);function bc(){F.call(this,"c")}k(bc,F);var ls={},vm=null;function Ua(){return vm=vm||new G}ls.La="serverreachability";function wm(a){F.call(this,ls.La,a)}k(wm,F);function eo(a){const d=Ua();se(d,new wm(d))}ls.STAT_EVENT="statevent";function Em(a,d){F.call(this,ls.STAT_EVENT,a),this.stat=d}k(Em,F);function Ot(a){const d=Ua();se(d,new Em(d,a))}ls.Ma="timingevent";function Tm(a,d){F.call(this,ls.Ma,a),this.size=d}k(Tm,F);function to(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function no(){this.g=!0}no.prototype.xa=function(){this.g=!1};function E0(a,d,p,_,D,O){a.info(function(){if(a.g)if(O)for(var $="",Ce=O.split("&"),lt=0;lt<Ce.length;lt++){var ve=Ce[lt].split("=");if(1<ve.length){var Et=ve[0];ve=ve[1];var Tt=Et.split("_");$=2<=Tt.length&&Tt[1]=="type"?$+(Et+"="+ve+"&"):$+(Et+"=redacted&")}}else $=null;else $=O;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+d+`
`+p+`
`+$})}function T0(a,d,p,_,D,O,$){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+d+`
`+p+`
`+O+" "+$})}function Gs(a,d,p,_){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+S0(a,p)+(_?" "+_:"")})}function I0(a,d){a.info(function(){return"TIMEOUT: "+d})}no.prototype.info=function(){};function S0(a,d){if(!a.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var O=D[0];if(O!="noop"&&O!="stop"&&O!="close")for(var $=1;$<D.length;$++)D[$]=""}}}}return Pc(p)}catch{return d}}var Fa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Im={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dc;function Ba(){}k(Ba,Nc),Ba.prototype.g=function(){return new XMLHttpRequest},Ba.prototype.i=function(){return{}},Dc=new Ba;function wr(a,d,p,_){this.j=a,this.i=d,this.l=p,this.R=_||1,this.U=new Ji(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sm}function Sm(){this.i=null,this.g="",this.h=!1}var Am={},Oc={};function Lc(a,d,p){a.L=1,a.v=Ha(Gn(d)),a.m=p,a.P=!0,Rm(a,null)}function Rm(a,d){a.F=Date.now(),$a(a),a.A=Gn(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Fm(p.i,"t",_),a.C=0,p=a.j.J,a.h=new Sm,a.g=sg(a.j,p?d:null,!a.m),0<a.O&&(a.M=new pm(g(a.Y,a,a.g),a.O)),d=a.U,p=a.g,_=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(mm[0]=D.toString()),D=mm);for(var O=0;O<D.length;O++){var $=Gt(p,D[O],_||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),eo(),E0(a.i,a.u,a.A,a.l,a.R,a.m)}wr.prototype.ca=function(a){a=a.target;const d=this.M;d&&Qn(a)==3?d.j():this.Y(a)},wr.prototype.Y=function(a){try{if(a==this.g)e:{const Tt=Qn(this.g);var d=this.g.Ba();const Xs=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||Km(this.g)))){this.J||Tt!=4||d==7||(d==8||0>=Xs?eo(3):eo(2)),Mc(this);var p=this.g.Z();this.X=p;t:if(km(this)){var _=Km(this.g);a="";var D=_.length,O=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){us(this),ro(this);var $="";break t}this.h.i=new l.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,a+=this.h.i.decode(_[d],{stream:!(O&&d==D-1)});_.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=p==200,T0(this.i,this.u,this.A,this.l,this.R,Tt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,lt=this.g;if((Ce=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(Ce)){var ve=Ce;break t}}ve=null}if(p=ve)Gs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vc(this,p);else{this.o=!1,this.s=3,Ot(12),us(this),ro(this);break e}}if(this.P){p=!0;let wn;for(;!this.J&&this.C<$.length;)if(wn=A0(this,$),wn==Oc){Tt==4&&(this.s=4,Ot(14),p=!1),Gs(this.i,this.l,null,"[Incomplete Response]");break}else if(wn==Am){this.s=4,Ot(15),Gs(this.i,this.l,$,"[Invalid Chunk]"),p=!1;break}else Gs(this.i,this.l,wn,null),Vc(this,wn);if(km(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||$.length!=0||this.h.h||(this.s=1,Ot(16),p=!1),this.o=this.o&&p,!p)Gs(this.i,this.l,$,"[Invalid Chunked Response]"),us(this),ro(this);else if(0<$.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),zc(Et),Et.M=!0,Ot(11))}}else Gs(this.i,this.l,$,null),Vc(this,$);Tt==4&&us(this),this.o&&!this.J&&(Tt==4?eg(this.j,this):(this.o=!1,$a(this)))}else $0(this.g),p==400&&0<$.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),us(this),ro(this)}}}catch{}finally{}};function km(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function A0(a,d){var p=a.C,_=d.indexOf(`
`,p);return _==-1?Oc:(p=Number(d.substring(p,_)),isNaN(p)?Am:(_+=1,_+p>d.length?Oc:(d=d.slice(_,_+p),a.C=_+p,d)))}wr.prototype.cancel=function(){this.J=!0,us(this)};function $a(a){a.S=Date.now()+a.I,Cm(a,a.I)}function Cm(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=to(g(a.ba,a),d)}function Mc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}wr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(I0(this.i,this.A),this.L!=2&&(eo(),Ot(17)),us(this),this.s=2,ro(this)):Cm(this,this.S-a)};function ro(a){a.j.G==0||a.J||eg(a.j,a)}function us(a){Mc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,gm(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Vc(a,d){try{var p=a.j;if(p.G!=0&&(p.g==a||jc(p.h,a))){if(!a.K&&jc(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Xa(p),Qa(p);else break e;$c(p),Ot(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=to(g(p.Za,p),6e3));if(1>=xm(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ds(p,11)}else if((a.K||p.g==a)&&Xa(p),!y(d))for(D=p.Da.g.parse(d),d=0;d<D.length;d++){let ve=D[d];if(p.T=ve[0],ve=ve[1],p.G==2)if(ve[0]=="c"){p.K=ve[1],p.ia=ve[2];const Et=ve[3];Et!=null&&(p.la=Et,p.j.info("VER="+p.la));const Tt=ve[4];Tt!=null&&(p.Aa=Tt,p.j.info("SVER="+p.Aa));const Xs=ve[5];Xs!=null&&typeof Xs=="number"&&0<Xs&&(_=1.5*Xs,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const wn=a.g;if(wn){const Za=wn.g?wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Za){var O=_.h;O.g||Za.indexOf("spdy")==-1&&Za.indexOf("quic")==-1&&Za.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Uc(O,O.h),O.h=null))}if(_.D){const Wc=wn.g?wn.g.getResponseHeader("X-HTTP-Session-Id"):null;Wc&&(_.ya=Wc,xe(_.I,_.D,Wc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var $=a;if(_.qa=rg(_,_.J?_.ia:null,_.W),$.K){bm(_.h,$);var Ce=$,lt=_.L;lt&&(Ce.I=lt),Ce.B&&(Mc(Ce),$a(Ce)),_.g=$}else Jm(_);0<p.i.length&&Ya(p)}else ve[0]!="stop"&&ve[0]!="close"||ds(p,7);else p.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?ds(p,7):Bc(p):ve[0]!="noop"&&p.l&&p.l.ta(ve),p.v=0)}}eo(4)}catch{}}var R0=class{constructor(a,d){this.g=a,this.map=d}};function Pm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function xm(a){return a.h?1:a.g?a.g.size:0}function jc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Uc(a,d){a.g?a.g.add(d):a.h=d}function bm(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Pm.prototype.cancel=function(){if(this.i=Dm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Dm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.D);return d}return P(a.i)}function k0(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],p=a.length,_=0;_<p;_++)d.push(a[_]);return d}d=[],p=0;for(_ in a)d[p++]=a[_];return d}function C0(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var p=0;p<a;p++)d.push(p);return d}d=[],p=0;for(const _ in a)d[p++]=_;return d}}}function Om(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var p=C0(a),_=k0(a),D=_.length,O=0;O<D;O++)d.call(void 0,_[O],p&&p[O],a)}var Lm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function P0(a,d){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),D=null;if(0<=_){var O=a[p].substring(0,_);D=a[p].substring(_+1)}else O=a[p];d(O,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function cs(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof cs){this.h=a.h,za(this,a.j),this.o=a.o,this.g=a.g,Wa(this,a.s),this.l=a.l;var d=a.i,p=new oo;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Mm(this,p),this.m=a.m}else a&&(d=String(a).match(Lm))?(this.h=!1,za(this,d[1]||"",!0),this.o=so(d[2]||""),this.g=so(d[3]||"",!0),Wa(this,d[4]),this.l=so(d[5]||"",!0),Mm(this,d[6]||"",!0),this.m=so(d[7]||"")):(this.h=!1,this.i=new oo(null,this.h))}cs.prototype.toString=function(){var a=[],d=this.j;d&&a.push(io(d,Vm,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(io(d,Vm,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(io(p,p.charAt(0)=="/"?b0:x0,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",io(p,O0)),a.join("")};function Gn(a){return new cs(a)}function za(a,d,p){a.j=p?so(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Wa(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Mm(a,d,p){d instanceof oo?(a.i=d,L0(a.i,a.h)):(p||(d=io(d,D0)),a.i=new oo(d,a.h))}function xe(a,d,p){a.i.set(d,p)}function Ha(a){return xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function so(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function io(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,N0),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function N0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Vm=/[#\/\?@]/g,x0=/[#\?:]/g,b0=/[#\?]/g,D0=/[#\?@]/g,O0=/#/g;function oo(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Er(a){a.g||(a.g=new Map,a.h=0,a.i&&P0(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=oo.prototype,t.add=function(a,d){Er(this),this.i=null,a=Qs(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function jm(a,d){Er(a),d=Qs(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Um(a,d){return Er(a),d=Qs(a,d),a.g.has(d)}t.forEach=function(a,d){Er(this),this.g.forEach(function(p,_){p.forEach(function(D){a.call(d,D,_,this)},this)},this)},t.na=function(){Er(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const D=a[_];for(let O=0;O<D.length;O++)p.push(d[_])}return p},t.V=function(a){Er(this);let d=[];if(typeof a=="string")Um(this,a)&&(d=d.concat(this.g.get(Qs(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)d=d.concat(a[p])}return d},t.set=function(a,d){return Er(this),this.i=null,a=Qs(this,a),Um(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Fm(a,d,p){jm(a,d),0<p.length&&(a.i=null,a.g.set(Qs(a,d),P(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const O=encodeURIComponent(String(_)),$=this.V(_);for(_=0;_<$.length;_++){var D=O;$[_]!==""&&(D+="="+encodeURIComponent(String($[_]))),a.push(D)}}return this.i=a.join("&")};function Qs(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function L0(a,d){d&&!a.j&&(Er(a),a.i=null,a.g.forEach(function(p,_){var D=_.toLowerCase();_!=D&&(jm(this,_),Fm(this,D,p))},a)),a.j=d}function M0(a,d){const p=new no;if(l.Image){const _=new Image;_.onload=S(Tr,p,"TestLoadImage: loaded",!0,d,_),_.onerror=S(Tr,p,"TestLoadImage: error",!1,d,_),_.onabort=S(Tr,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=S(Tr,p,"TestLoadImage: timeout",!1,d,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else d(!1)}function V0(a,d){const p=new no,_=new AbortController,D=setTimeout(()=>{_.abort(),Tr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:_.signal}).then(O=>{clearTimeout(D),O.ok?Tr(p,"TestPingServer: ok",!0,d):Tr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),Tr(p,"TestPingServer: error",!1,d)})}function Tr(a,d,p,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(p)}catch{}}function j0(){this.g=new w0}function U0(a,d,p){const _=p||"";try{Om(a,function(D,O){let $=D;c(D)&&($=Pc(D)),d.push(_+O+"="+encodeURIComponent($))})}catch(D){throw d.push(_+"type="+encodeURIComponent("_badmap")),D}}function qa(a){this.l=a.Ub||null,this.j=a.eb||!1}k(qa,Nc),qa.prototype.g=function(){return new Ka(this.l,this.j)},qa.prototype.i=function(a){return function(){return a}}({});function Ka(a,d){G.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Ka,G),t=Ka.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,lo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ao(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,lo(this)),this.g&&(this.readyState=3,lo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?ao(this):lo(this),this.readyState==3&&Bm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ao(this))},t.Qa=function(a){this.g&&(this.response=a,ao(this))},t.ga=function(){this.g&&ao(this)};function ao(a){a.readyState=4,a.l=null,a.j=null,a.v=null,lo(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function lo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $m(a){let d="";return M(a,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function Fc(a,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=$m(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):xe(a,d,p))}function $e(a){G.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k($e,G);var F0=/^https?$/i,B0=["POST","PUT"];t=$e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dc.g(),this.v=this.o?ym(this.o):ym(Dc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(O){zm(this,O);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)p.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())p.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(B0,d,void 0))||_||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,$]of p)this.g.setRequestHeader(O,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qm(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){zm(this,O)}};function zm(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Wm(a),Ga(a)}function Wm(a){a.A||(a.A=!0,se(a,"complete"),se(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,se(this,"complete"),se(this,"abort"),Ga(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ga(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Hm(this):this.bb())},t.bb=function(){Hm(this)};function Hm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Qn(a)!=4||a.Z()!=2)){if(a.u&&Qn(a)==4)wt(a.Ea,0,a);else if(se(a,"readystatechange"),Qn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=$===0){var D=String(a.D).match(Lm)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),_=!F0.test(D?D.toLowerCase():"")}p=_}if(p)se(a,"complete"),se(a,"success");else{a.m=6;try{var O=2<Qn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Wm(a)}}finally{Ga(a)}}}}function Ga(a,d){if(a.g){qm(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||se(a,"ready");try{p.onreadystatechange=_}catch{}}}function qm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Qn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),v0(d)}};function Km(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function $0(a){const d={};a=(a.g&&2<=Qn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(y(a[_]))continue;var p=C(a[_]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=d[D]||[];d[D]=O,O.push(p)}T(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function uo(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function Gm(a){this.Aa=0,this.i=[],this.j=new no,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=uo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=uo("baseRetryDelayMs",5e3,a),this.cb=uo("retryDelaySeedMs",1e4,a),this.Wa=uo("forwardChannelMaxRetries",2,a),this.wa=uo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Pm(a&&a.concurrentRequestLimit),this.Da=new j0,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Gm.prototype,t.la=8,t.G=1,t.connect=function(a,d,p,_){Ot(0),this.W=a,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=rg(this,null,this.W),Ya(this)};function Bc(a){if(Qm(a),a.G==3){var d=a.U++,p=Gn(a.I);if(xe(p,"SID",a.K),xe(p,"RID",d),xe(p,"TYPE","terminate"),co(a,p),d=new wr(a,a.j,d),d.L=2,d.v=Ha(Gn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=d.v,p=!0),p||(d.g=sg(d.j,null),d.g.ea(d.v)),d.F=Date.now(),$a(d)}ng(a)}function Qa(a){a.g&&(zc(a),a.g.cancel(),a.g=null)}function Qm(a){Qa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Xa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ya(a){if(!Nm(a.h)&&!a.s){a.s=!0;var d=a.Ga;Dt||ne(),z||(Dt(),z=!0),J.add(d,a),a.B=0}}function z0(a,d){return xm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=to(g(a.Ga,a,d),tg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new wr(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(D.H=O,O=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Xm(this,D,d),p=Gn(this.I),xe(p,"RID",a),xe(p,"CVER",22),this.D&&xe(p,"X-HTTP-Session-Id",this.D),co(this,p),O&&(this.O?d="headers="+encodeURIComponent(String($m(O)))+"&"+d:this.m&&Fc(p,this.m,O)),Uc(this.h,D),this.Ua&&xe(p,"TYPE","init"),this.P?(xe(p,"$req",d),xe(p,"SID","null"),D.T=!0,Lc(D,p,null)):Lc(D,p,d),this.G=2}}else this.G==3&&(a?Ym(this,a):this.i.length==0||Nm(this.h)||Ym(this))};function Ym(a,d){var p;d?p=d.l:p=a.U++;const _=Gn(a.I);xe(_,"SID",a.K),xe(_,"RID",p),xe(_,"AID",a.T),co(a,_),a.m&&a.o&&Fc(_,a.m,a.o),p=new wr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Xm(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Uc(a.h,p),Lc(p,_,d)}function co(a,d){a.H&&M(a.H,function(p,_){xe(d,_,p)}),a.l&&Om({},function(p,_){xe(d,_,p)})}function Xm(a,d,p){p=Math.min(a.i.length,p);var _=a.l?g(a.l.Na,a.l,a):null;e:{var D=a.i;let O=-1;for(;;){const $=["count="+p];O==-1?0<p?(O=D[0].g,$.push("ofs="+O)):O=0:$.push("ofs="+O);let Ce=!0;for(let lt=0;lt<p;lt++){let ve=D[lt].g;const Et=D[lt].map;if(ve-=O,0>ve)O=Math.max(0,D[lt].g-100),Ce=!1;else try{U0(Et,$,"req"+ve+"_")}catch{_&&_(Et)}}if(Ce){_=$.join("&");break e}}}return a=a.i.splice(0,p),d.D=a,_}function Jm(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Dt||ne(),z||(Dt(),z=!0),J.add(d,a),a.v=0}}function $c(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=to(g(a.Fa,a),tg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Zm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=to(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),Qa(this),Zm(this))};function zc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Zm(a){a.g=new wr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Gn(a.qa);xe(d,"RID","rpc"),xe(d,"SID",a.K),xe(d,"AID",a.T),xe(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&xe(d,"TO",a.ja),xe(d,"TYPE","xmlhttp"),co(a,d),a.m&&a.o&&Fc(d,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Ha(Gn(d)),p.m=null,p.P=!0,Rm(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Qa(this),$c(this),Ot(19))};function Xa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function eg(a,d){var p=null;if(a.g==d){Xa(a),zc(a),a.g=null;var _=2}else if(jc(a.h,d))p=d.D,bm(a.h,d),_=1;else return;if(a.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var D=a.B;_=Ua(),se(_,new Tm(_,p)),Ya(a)}else Jm(a);else if(D=d.s,D==3||D==0&&0<d.X||!(_==1&&z0(a,d)||_==2&&$c(a)))switch(p&&0<p.length&&(d=a.h,d.i=d.i.concat(p)),D){case 1:ds(a,5);break;case 4:ds(a,10);break;case 3:ds(a,6);break;default:ds(a,2)}}}function tg(a,d){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*d}function ds(a,d){if(a.j.info("Error code "+d),d==2){var p=g(a.fb,a),_=a.Xa;const D=!_;_=new cs(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||za(_,"https"),Ha(_),D?M0(_.toString(),p):V0(_.toString(),p)}else Ot(2);a.G=0,a.l&&a.l.sa(d),ng(a),Qm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function ng(a){if(a.G=0,a.ka=[],a.l){const d=Dm(a.h);(d.length!=0||a.i.length!=0)&&(b(a.ka,d),b(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function rg(a,d,p){var _=p instanceof cs?Gn(p):new cs(p);if(_.g!="")d&&(_.g=d+"."+_.g),Wa(_,_.s);else{var D=l.location;_=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var O=new cs(null);_&&za(O,_),d&&(O.g=d),D&&Wa(O,D),p&&(O.l=p),_=O}return p=a.D,d=a.ya,p&&d&&xe(_,p,d),xe(_,"VER",a.la),co(a,_),_}function sg(a,d,p){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new $e(new qa({eb:p})):new $e(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ig(){}t=ig.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ja(){}Ja.prototype.g=function(a,d){return new Qt(a,d)};function Qt(a,d){G.call(this),this.g=new Gm(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!y(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!y(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Ys(this)}k(Qt,G),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){Bc(this.g)},Qt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Pc(a),a=p);d.i.push(new R0(d.Ya++,a)),d.G==3&&Ya(d)},Qt.prototype.N=function(){this.g.l=null,delete this.j,Bc(this.g),delete this.g,Qt.aa.N.call(this)};function og(a){xc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}k(og,xc);function ag(){bc.call(this),this.status=1}k(ag,bc);function Ys(a){this.g=a}k(Ys,ig),Ys.prototype.ua=function(){se(this.g,"a")},Ys.prototype.ta=function(a){se(this.g,new og(a))},Ys.prototype.sa=function(a){se(this.g,new ag)},Ys.prototype.ra=function(){se(this.g,"b")},Ja.prototype.createWebChannel=Ja.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,hT=function(){return new Ja},dT=function(){return Ua()},cT=ls,Uh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fa.NO_ERROR=0,Fa.TIMEOUT=8,Fa.HTTP_ERROR=6,Bl=Fa,Im.COMPLETE="complete",uT=Im,_m.EventType=Zi,Zi.OPEN="a",Zi.CLOSE="b",Zi.ERROR="c",Zi.MESSAGE="d",G.prototype.listen=G.prototype.K,Po=_m,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,lT=$e}).apply(typeof vl<"u"?vl:typeof self<"u"?self:typeof window<"u"?window:{});const Ky="@firebase/firestore";/**
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
 */class Rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Rt.UNAUTHENTICATED=new Rt(null),Rt.GOOGLE_CREDENTIALS=new Rt("google-credentials-uid"),Rt.FIRST_PARTY=new Rt("first-party-uid"),Rt.MOCK_USER=new Rt("mock-user");/**
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
 */let Gi="10.14.0";/**
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
 */const xs=new Zf("@firebase/firestore");function wo(){return xs.logLevel}function Q(t,...e){if(xs.logLevel<=me.DEBUG){const n=e.map(hp);xs.debug(`Firestore (${Gi}): ${t}`,...n)}}function pr(t,...e){if(xs.logLevel<=me.ERROR){const n=e.map(hp);xs.error(`Firestore (${Gi}): ${t}`,...n)}}function Oi(t,...e){if(xs.logLevel<=me.WARN){const n=e.map(hp);xs.warn(`Firestore (${Gi}): ${t}`,...n)}}function hp(t){if(typeof t=="string")return t;try{/**
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
 */function re(t="Unexpected state"){const e=`FIRESTORE (${Gi}) INTERNAL ASSERTION FAILED: `+t;throw pr(e),new Error(e)}function Se(t,e){t||re()}function oe(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class fT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Rt.UNAUTHENTICATED))}shutdown(){}}class dN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hN{constructor(e){this.t=e,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new ar;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ar,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ar)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new fT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new Rt(e)}}class fN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class pN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new fN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Se(this.o===void 0);const r=i=>{i.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new mN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function yN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class pT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=yN(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Li(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Le(0,0))}static max(){return new ie(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class fa{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends fa{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new De(n)}static emptyPath(){return new De([])}}const _N=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends fa{construct(e,n,r){return new dt(e,n,r)}static isValidIdentifier(e){return _N.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new H(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new H(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(De.fromString(e))}static fromName(e){return new X(De.fromString(e).popFirst(5))}static empty(){return new X(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new De(e.slice()))}}function vN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new Xr(s,X.empty(),e)}function wN(t){return new Xr(t.readTime,t.key,-1)}class Xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xr(ie.min(),X.empty(),-1)}static max(){return new Xr(ie.max(),X.empty(),-1)}}function EN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
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
 */const TN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ba(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==TN)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function SN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Da(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class fp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}fp.oe=-1;function nc(t){return t==null}function Su(t){return t===0&&1/t==-1/0}function AN(t){return typeof t=="number"&&Number.isInteger(t)&&!Su(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Gy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Be{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wl(this.root,e,this.comparator,!1)}getReverseIterator(){return new wl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wl(this.root,e,this.comparator,!0)}}class wl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ct.RED,this.left=s??ct.EMPTY,this.right=i??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ct(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qy(this.data.getIterator())}getIteratorFrom(e){return new Qy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class Qy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Zt{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new ft(dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Li(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class gT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gT("Invalid base64 string: "+i):i}}(e);return new mt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const RN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(t){if(Se(!!t),typeof t=="string"){let e=0;const n=RN.exec(t);if(Se(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function bs(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
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
 */function pp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function mp(t){const e=t.mapValue.fields.__previous_value__;return pp(e)?mp(e):e}function pa(t){const e=Jr(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */class kN{constructor(e,n,r,s,i,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class ma{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ma("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ma&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const El={mapValue:{}};function Ds(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pp(t)?4:PN(t)?9007199254740991:CN(t)?10:11:re()}function Hn(t,e){if(t===e)return!0;const n=Ds(t);if(n!==Ds(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pa(t).isEqual(pa(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Jr(s.timestampValue),l=Jr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return bs(s.bytesValue).isEqual(bs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),l=Ge(i.doubleValue);return o===l?Su(o)===Su(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Li(t.arrayValue.values||[],e.arrayValue.values||[],Hn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Gy(o)!==Gy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Hn(o[u],l[u])))return!1;return!0}(t,e);default:return re()}}function ga(t,e){return(t.values||[]).find(n=>Hn(n,e))!==void 0}function Mi(t,e){if(t===e)return 0;const n=Ds(t),r=Ds(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ge(i.integerValue||i.doubleValue),u=Ge(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Yy(t.timestampValue,e.timestampValue);case 4:return Yy(pa(t),pa(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(i,o){const l=bs(i),u=bs(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=we(l[c],u[c]);if(f!==0)return f}return we(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=we(Ge(i.latitude),Ge(o.latitude));return l!==0?l:we(Ge(i.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Xy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,c,f;const m=i.fields||{},g=o.fields||{},S=(l=m.value)===null||l===void 0?void 0:l.arrayValue,k=(u=g.value)===null||u===void 0?void 0:u.arrayValue,P=we(((c=S==null?void 0:S.values)===null||c===void 0?void 0:c.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:Xy(S,k)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===El.mapValue&&o===El.mapValue)return 0;if(i===El.mapValue)return 1;if(o===El.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=we(u[m],f[m]);if(g!==0)return g;const S=Mi(l[u[m]],c[f[m]]);if(S!==0)return S}return we(u.length,f.length)}(t.mapValue,e.mapValue);default:throw re()}}function Yy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Jr(t),r=Jr(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function Xy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Mi(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function Vi(t){return Fh(t)}function Fh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return bs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Fh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Fh(n.fields[o])}`;return s+"}"}(t.mapValue):re()}function Jy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bh(t){return!!t&&"integerValue"in t}function gp(t){return!!t&&"arrayValue"in t}function Zy(t){return!!t&&"nullValue"in t}function e_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $l(t){return!!t&&"mapValue"in t}function CN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function zo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=zo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function PN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$l(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zo(n)}setAll(e){let n=dt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=zo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());$l(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];$l(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){zs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Bt(zo(this.value))}}function yT(t){const e=[];return zs(t.fields,(n,r)=>{const s=new dt([n]);if($l(r)){const i=yT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Zt(e)}/**
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
 */class Ct{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ct(e,0,ie.min(),ie.min(),ie.min(),Bt.empty(),0)}static newFoundDocument(e,n,r,s){return new Ct(e,1,n,ie.min(),r,s,0)}static newNoDocument(e,n){return new Ct(e,2,n,ie.min(),ie.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new Ct(e,3,n,ie.min(),ie.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Au{constructor(e,n){this.position=e,this.inclusive=n}}function t_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=Mi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function n_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ya{constructor(e,n="asc"){this.field=e,this.dir=n}}function NN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class _T{}class Ze extends _T{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bN(e,n,r):n==="array-contains"?new LN(e,r):n==="in"?new MN(e,r):n==="not-in"?new VN(e,r):n==="array-contains-any"?new jN(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new DN(e,r):new ON(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mi(n,this.value)):n!==null&&Ds(this.value)===Ds(n)&&this.matchesComparison(Mi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nn extends _T{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Nn(e,n)}matches(e){return vT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vT(t){return t.op==="and"}function wT(t){return xN(t)&&vT(t)}function xN(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function $h(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+Vi(t.value);if(wT(t))return t.filters.map(e=>$h(e)).join(",");{const e=t.filters.map(n=>$h(n)).join(",");return`${t.op}(${e})`}}function ET(t,e){return t instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&Hn(r.value,s.value)}(t,e):t instanceof Nn?function(r,s){return s instanceof Nn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&ET(o,s.filters[l]),!0):!1}(t,e):void re()}function TT(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Vi(n.value)}`}(t):t instanceof Nn?function(n){return n.op.toString()+" {"+n.getFilters().map(TT).join(" ,")+"}"}(t):"Filter"}class bN extends Ze{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class DN extends Ze{constructor(e,n){super(e,"in",n),this.keys=IT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ON extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=IT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function IT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class LN extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gp(n)&&ga(n.arrayValue,this.value)}}class MN extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ga(this.value.arrayValue,n)}}class VN extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(ga(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ga(this.value.arrayValue,n)}}class jN extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ga(this.value.arrayValue,r))}}/**
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
 */class UN{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function r_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new UN(t,e,n,r,s,i,o)}function yp(t){const e=oe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$h(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),nc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vi(r)).join(",")),e.ue=n}return e.ue}function _p(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!NN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ET(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!n_(t.startAt,e.startAt)&&n_(t.endAt,e.endAt)}function zh(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Qi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function FN(t,e,n,r,s,i,o,l){return new Qi(t,e,n,r,s,i,o,l)}function rc(t){return new Qi(t)}function s_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ST(t){return t.collectionGroup!==null}function Wo(t){const e=oe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ft(dt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ya(i,r))}),n.has(dt.keyField().canonicalString())||e.ce.push(new ya(dt.keyField(),r))}return e.ce}function $n(t){const e=oe(t);return e.le||(e.le=BN(e,Wo(t))),e.le}function BN(t,e){if(t.limitType==="F")return r_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ya(s.field,i)});const n=t.endAt?new Au(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Au(t.startAt.position,t.startAt.inclusive):null;return r_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Wh(t,e){const n=t.filters.concat([e]);return new Qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ru(t,e,n){return new Qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sc(t,e){return _p($n(t),$n(e))&&t.limitType===e.limitType}function AT(t){return`${yp($n(t))}|lt:${t.limitType}`}function Zs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>TT(s)).join(", ")}]`),nc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Vi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Vi(s)).join(",")),`Target(${r})`}($n(t))}; limitType=${t.limitType})`}function ic(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Wo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=t_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Wo(r),s)||r.endAt&&!function(o,l,u){const c=t_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Wo(r),s))}(t,e)}function $N(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function RT(t){return(e,n)=>{let r=!1;for(const s of Wo(t)){const i=zN(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function zN(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?Mi(u,c):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
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
 */class Yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){zs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return mT(this.inner)}size(){return this.innerSize}}/**
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
 */const WN=new Be(X.comparator);function mr(){return WN}const kT=new Be(X.comparator);function No(...t){let e=kT;for(const n of t)e=e.insert(n.key,n);return e}function CT(t){let e=kT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _s(){return Ho()}function PT(){return Ho()}function Ho(){return new Yi(t=>t.toString(),(t,e)=>t.isEqual(e))}const HN=new Be(X.comparator),qN=new ft(X.comparator);function pe(...t){let e=qN;for(const n of t)e=e.add(n);return e}const KN=new ft(we);function GN(){return KN}/**
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
 */function vp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Su(e)?"-0":e}}function NT(t){return{integerValue:""+t}}function xT(t,e){return AN(e)?NT(e):vp(t,e)}/**
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
 */class oc{constructor(){this._=void 0}}function QN(t,e,n){return t instanceof _a?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&pp(i)&&(i=mp(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ji?DT(t,e):t instanceof Ui?OT(t,e):function(s,i){const o=bT(s,i),l=i_(o)+i_(s.Pe);return Bh(o)&&Bh(s.Pe)?NT(l):vp(s.serializer,l)}(t,e)}function YN(t,e,n){return t instanceof ji?DT(t,e):t instanceof Ui?OT(t,e):n}function bT(t,e){return t instanceof va?function(r){return Bh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class _a extends oc{}class ji extends oc{constructor(e){super(),this.elements=e}}function DT(t,e){const n=LT(e);for(const r of t.elements)n.some(s=>Hn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ui extends oc{constructor(e){super(),this.elements=e}}function OT(t,e){let n=LT(e);for(const r of t.elements)n=n.filter(s=>!Hn(s,r));return{arrayValue:{values:n}}}class va extends oc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function i_(t){return Ge(t.integerValue||t.doubleValue)}function LT(t){return gp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class ac{constructor(e,n){this.field=e,this.transform=n}}function XN(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ji&&s instanceof ji||r instanceof Ui&&s instanceof Ui?Li(r.elements,s.elements,Hn):r instanceof va&&s instanceof va?Hn(r.Pe,s.Pe):r instanceof _a&&s instanceof _a}(t.transform,e.transform)}class JN{constructor(e,n){this.version=e,this.transformResults=n}}class mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lc{}function MT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wp(t.key,mn.none()):new Oa(t.key,t.data,mn.none());{const n=t.data,r=Bt.empty();let s=new ft(dt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new os(t.key,r,new Zt(s.toArray()),mn.none())}}function ZN(t,e,n){t instanceof Oa?function(s,i,o){const l=s.value.clone(),u=a_(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof os?function(s,i,o){if(!zl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=a_(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(VT(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function qo(t,e,n,r){return t instanceof Oa?function(i,o,l,u){if(!zl(i.precondition,o))return l;const c=i.value.clone(),f=l_(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof os?function(i,o,l,u){if(!zl(i.precondition,o))return l;const c=l_(i.fieldTransforms,u,o),f=o.data;return f.setAll(VT(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return zl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function e1(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=bT(r.transform,s||null);i!=null&&(n===null&&(n=Bt.empty()),n.set(r.field,i))}return n||null}function o_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Li(r,s,(i,o)=>XN(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oa extends lc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class os extends lc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function VT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function a_(t,e,n){const r=new Map;Se(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,YN(o,l,n[s]))}return r}function l_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,QN(i,o,e))}return r}class wp extends lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class t1 extends lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class n1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ZN(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=qo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=qo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=PT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=MT(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),pe())}isEqual(e){return this.batchId===e.batchId&&Li(this.mutations,e.mutations,(n,r)=>o_(n,r))&&Li(this.baseMutations,e.baseMutations,(n,r)=>o_(n,r))}}class Ep{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length);let s=function(){return HN}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ep(e,n,r,s)}}/**
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
 */class r1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class s1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Xe,ge;function i1(t){switch(t){default:return re();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function jT(t){if(t===void 0)return pr("GRPC error has no .code"),j.UNKNOWN;switch(t){case Xe.OK:return j.OK;case Xe.CANCELLED:return j.CANCELLED;case Xe.UNKNOWN:return j.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return j.INTERNAL;case Xe.UNAVAILABLE:return j.UNAVAILABLE;case Xe.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Xe.NOT_FOUND:return j.NOT_FOUND;case Xe.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Xe.ABORTED:return j.ABORTED;case Xe.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Xe.DATA_LOSS:return j.DATA_LOSS;default:return re()}}(ge=Xe||(Xe={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function o1(){return new TextEncoder}/**
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
 */const a1=new Ts([4294967295,4294967295],0);function u_(t){const e=o1().encode(t),n=new aT;return n.update(e),new Uint8Array(n.digest())}function c_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ts([n,r],0),new Ts([s,i],0)]}class Tp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xo(`Invalid padding: ${n}`);if(r<0)throw new xo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ts.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Ts.fromNumber(r)));return s.compare(a1)===1&&(s=new Ts([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=u_(e),[r,s]=c_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Tp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=u_(e),[r,s]=c_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class uc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,La.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new uc(ie.min(),s,new Be(we),mr(),pe())}}class La{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new La(r,n,pe(),pe(),pe())}}/**
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
 */class Wl{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class UT{constructor(e,n){this.targetId=e,this.me=n}}class FT{constructor(e,n,r=mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class d_{constructor(){this.fe=0,this.ge=f_(),this.pe=mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=pe(),n=pe(),r=pe();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:re()}}),new La(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=f_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class l1{constructor(e){this.Le=e,this.Be=new Map,this.ke=mr(),this.qe=h_(),this.Qe=new Be(we)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(zh(i))if(r===0){const o=new X(i.path);this.Ue(n,o,Ct.newNoDocument(o,ie.min()))}else Se(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=bs(r).toUint8Array()}catch(u){if(u instanceof gT)return Oi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Tp(o,s,i)}catch(u){return Oi(u instanceof xo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&zh(l.target)){const u=new X(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ct.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=pe();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new uc(e,n,this.Qe,this.ke,r);return this.ke=mr(),this.qe=h_(),this.Qe=new Be(we),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new d_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ft(we),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new d_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function h_(){return new Be(X.comparator)}function f_(){return new Be(X.comparator)}const u1={asc:"ASCENDING",desc:"DESCENDING"},c1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},d1={and:"AND",or:"OR"};class h1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hh(t,e){return t.useProto3Json||nc(e)?e:{value:e}}function ku(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function BT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function f1(t,e){return ku(t,e.toTimestamp())}function zn(t){return Se(!!t),ie.fromTimestamp(function(n){const r=Jr(n);return new Le(r.seconds,r.nanos)}(t))}function Ip(t,e){return qh(t,e).canonicalString()}function qh(t,e){const n=function(s){return new De(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function $T(t){const e=De.fromString(t);return Se(KT(e)),e}function Kh(t,e){return Ip(t.databaseId,e.path)}function Ad(t,e){const n=$T(e);if(n.get(1)!==t.databaseId.projectId)throw new H(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(WT(n))}function zT(t,e){return Ip(t.databaseId,e)}function p1(t){const e=$T(t);return e.length===4?De.emptyPath():WT(e)}function Gh(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function WT(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function p_(t,e,n){return{name:Kh(t,e),fields:n.value.mapValue.fields}}function m1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(Se(f===void 0||typeof f=="string"),mt.fromBase64String(f||"")):(Se(f===void 0||f instanceof Buffer||f instanceof Uint8Array),mt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?j.UNKNOWN:jT(c.code);return new H(f,c.message||"")}(o);n=new FT(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ad(t,r.document.name),i=zn(r.document.updateTime),o=r.document.createTime?zn(r.document.createTime):ie.min(),l=new Bt({mapValue:{fields:r.document.fields}}),u=Ct.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Wl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ad(t,r.document),i=r.readTime?zn(r.readTime):ie.min(),o=Ct.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Wl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ad(t,r.document),i=r.removedTargetIds||[];n=new Wl([],i,s,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new s1(s,i),l=r.targetId;n=new UT(l,o)}}return n}function g1(t,e){let n;if(e instanceof Oa)n={update:p_(t,e.key,e.value)};else if(e instanceof wp)n={delete:Kh(t,e.key)};else if(e instanceof os)n={update:p_(t,e.key,e.data),updateMask:A1(e.fieldMask)};else{if(!(e instanceof t1))return re();n={verify:Kh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof _a)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ji)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ui)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof va)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:f1(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(t,e.precondition)),n}function y1(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?zn(s.updateTime):zn(i);return o.isEqual(ie.min())&&(o=zn(i)),new JN(o,s.transformResults||[])}(n,e))):[]}function _1(t,e){return{documents:[zT(t,e.path)]}}function v1(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=zT(t,s);const i=function(c){if(c.length!==0)return qT(Nn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:ei(g.field),direction:T1(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Hh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:s}}function w1(t){let e=p1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=HT(m);return g instanceof Nn&&wT(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(k){return new ya(ti(k.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,nc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,S=m.values||[];return new Au(S,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,S=m.values||[];return new Au(S,g)}(n.endAt)),FN(e,s,o,i,l,"F",u,c)}function E1(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function HT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ti(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ti(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ti(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ti(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(ti(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nn.create(n.compositeFilter.filters.map(r=>HT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function T1(t){return u1[t]}function I1(t){return c1[t]}function S1(t){return d1[t]}function ei(t){return{fieldPath:t.canonicalString()}}function ti(t){return dt.fromServerFormat(t.fieldPath)}function qT(t){return t instanceof Ze?function(n){if(n.op==="=="){if(e_(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NAN"}};if(Zy(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(e_(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NOT_NAN"}};if(Zy(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ei(n.field),op:I1(n.op),value:n.value}}}(t):t instanceof Nn?function(n){const r=n.getFilters().map(s=>qT(s));return r.length===1?r[0]:{compositeFilter:{op:S1(n.op),filters:r}}}(t):re()}function A1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function KT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Mr{constructor(e,n,r,s,i=ie.min(),o=ie.min(),l=mt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class R1{constructor(e){this.ct=e}}function k1(t){const e=w1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ru(e,e.limit,"L"):e}/**
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
 */class C1{constructor(){this.un=new P1}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Xr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Xr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class P1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ft(De.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ft(De.comparator)).toArray()}}/**
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
 */class Fi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Fi(0)}static kn(){return new Fi(-1)}}/**
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
 */class N1{constructor(){this.changes=new Yi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class x1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class b1{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&qo(r.mutation,s,Zt.empty(),Le.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=pe()){const s=_s();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=No();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_s();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,pe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=mr();const o=Ho(),l=function(){return Ho()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof os)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),qo(f.mutation,c,f.mutation.getFieldMask(),Le.now())):o.set(c.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var m;return l.set(c,new x1(f,(m=o.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ho();let s=new Be((o,l)=>o-l),i=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Zt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(s.get(l.batchId)||pe()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=PT();f.forEach(g=>{if(!i.has(g)){const S=MT(n.get(g),r.get(g));S!==null&&m.set(g,S),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ST(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(_s());let l=-1,u=i;return o.next(c=>U.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,pe())).next(f=>({batchId:l,changes:CT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let s=No();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=No();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,u=>{const c=function(m,g){return new Qi(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,Ct.newInvalidDocument(f)))});let l=No();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&qo(f.mutation,c,Zt.empty(),Le.now()),ic(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class D1{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:zn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:k1(s.bundledQuery),readTime:zn(s.readTime)}}(n)),U.resolve()}}/**
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
 */class O1{constructor(){this.overlays=new Be(X.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_s();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=_s(),i=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=_s(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=_s(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return U.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new r1(n,r));let i=this.Ir.get(n);i===void 0&&(i=pe(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class L1{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class Sp{constructor(){this.Tr=new ft(it.Er),this.dr=new ft(it.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new it(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new it(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new De([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new De([])),r=new it(n,e),s=new it(n,e+1);let i=pe();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new it(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||we(e.wr,n.wr)}static Ar(e,n){return we(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
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
 */class M1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ft(it.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new n1(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new it(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(we);return n.forEach(s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const o=new it(new X(i),0);let l=new ft(we);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.wr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new it(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class V1{constructor(e){this.Mr=e,this.docs=function(){return new Be(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(n))}getEntries(e,n){let r=mr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ct.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=mr();const o=n.path,l=new X(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||EN(wN(f),r)<=0||(s.has(f.key)||ic(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){re()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new j1(this)}getSize(e){return U.resolve(this.size)}}class j1 extends N1{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class U1{constructor(e){this.persistence=e,this.Nr=new Yi(n=>yp(n),_p),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Sp,this.targetCount=0,this.kr=Fi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Fi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
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
 */class F1{constructor(e,n){this.qr={},this.overlays={},this.Qr=new fp(0),this.Kr=!1,this.Kr=!0,this.$r=new L1,this.referenceDelegate=e(this),this.Ur=new U1(this),this.indexManager=new C1,this.remoteDocumentCache=function(s){return new V1(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new R1(n),this.Gr=new D1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new O1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new M1(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const s=new B1(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class B1 extends IN{constructor(e){super(),this.currentSequenceNumber=e}}class Ap{constructor(e){this.persistence=e,this.Jr=new Sp,this.Yr=null}static Zr(e){return new Ap(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=X.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ie.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Rp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=pe(),s=pe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Rp(e,n.fromCache,r,s)}}/**
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
 */class $1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class z1{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return bR()?8:SN(bt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new $1;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(wo()<=me.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",Zs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(wo()<=me.DEBUG&&Q("QueryEngine","Query:",Zs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(wo()<=me.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",Zs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$n(n))):U.resolve())}Yi(e,n){if(s_(n))return U.resolve(null);let r=$n(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ru(n,null,"F"),r=$n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=pe(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,Ru(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,s){return s_(n)||s.isEqual(ie.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?U.resolve(null):(wo()<=me.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Zs(n)),this.rs(e,o,n,vN(s,-1)).next(l=>l))})}ts(e,n){let r=new ft(RT(e));return n.forEach((s,i)=>{ic(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return wo()<=me.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Zs(n)),this.Ji.getDocumentsMatchingQuery(e,n,Xr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class W1{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Be(we),this._s=new Yi(i=>yp(i),_p),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new b1(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function H1(t,e,n,r){return new W1(t,e,n,r)}async function GT(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=pe();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function q1(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,g=m.keys();let S=U.resolve();return g.forEach(k=>{S=S.next(()=>f.getEntry(u,k)).next(P=>{const b=c.docVersions.get(k);Se(b!==null),P.version.compareTo(b)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=pe();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function QT(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function K1(t,e){const n=oe(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,m)));let S=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(mt.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),s=s.insert(m,S),function(P,b,A){return P.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(g,S,f)&&l.push(n.Ur.updateTargetData(i,S))});let u=mr(),c=pe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(G1(i,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(ie.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.os=s,i))}function G1(t,e,n){let r=pe(),s=pe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=mr();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ie.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):Q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function Q1(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Y1(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Qh(t,e,n){const r=oe(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Da(o))throw o;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function m_(t,e,n){const r=oe(t);let s=ie.min(),i=pe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=oe(u),g=m._s.get(f);return g!==void 0?U.resolve(m.os.get(g)):m.Ur.getTargetData(c,f)}(r,o,$n(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ie.min(),n?i:pe())).next(l=>(X1(r,$N(e),l),{documents:l,Ts:i})))}function X1(t,e,n){let r=t.us.get(e)||ie.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class g_{constructor(){this.activeTargetIds=GN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class J1{constructor(){this.so=new g_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new g_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Z1{_o(e){}shutdown(){}}/**
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
 */class y_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Tl=null;function Rd(){return Tl===null?Tl=function(){return 268435456+Math.round(2147483648*Math.random())}():Tl++,"0x"+Tl.toString(16)}/**
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
 */const ex={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class tx{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const At="WebChannelConnection";class nx extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Rd(),u=this.xo(n,r.toUriEncodedString());Q("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,i,o),this.No(n,u,c,s).then(f=>(Q("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Oi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=ex[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Rd();return new Promise((o,l)=>{const u=new lT;u.setWithCredentials(!0),u.listenOnce(uT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Bl.NO_ERROR:const f=u.getResponseJson();Q(At,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Bl.TIMEOUT:Q(At,`RPC '${e}' ${i} timed out`),l(new H(j.DEADLINE_EXCEEDED,"Request time out"));break;case Bl.HTTP_ERROR:const m=u.getStatus();if(Q(At,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const S=g==null?void 0:g.error;if(S&&S.status&&S.message){const k=function(b){const A=b.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(A)>=0?A:j.UNKNOWN}(S.status);l(new H(k,S.message))}else l(new H(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(j.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{Q(At,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);Q(At,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const s=Rd(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=hT(),l=dT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");Q(At,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=o.createWebChannel(f,u);let g=!1,S=!1;const k=new tx({Io:b=>{S?Q(At,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(g||(Q(At,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),Q(At,`RPC '${e}' stream ${s} sending:`,b),m.send(b))},To:()=>m.close()}),P=(b,A,y)=>{b.listen(A,E=>{try{y(E)}catch(x){setTimeout(()=>{throw x},0)}})};return P(m,Po.EventType.OPEN,()=>{S||(Q(At,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),P(m,Po.EventType.CLOSE,()=>{S||(S=!0,Q(At,`RPC '${e}' stream ${s} transport closed`),k.So())}),P(m,Po.EventType.ERROR,b=>{S||(S=!0,Oi(At,`RPC '${e}' stream ${s} transport errored:`,b),k.So(new H(j.UNAVAILABLE,"The operation could not be completed")))}),P(m,Po.EventType.MESSAGE,b=>{var A;if(!S){const y=b.data[0];Se(!!y);const E=y,x=E.error||((A=E[0])===null||A===void 0?void 0:A.error);if(x){Q(At,`RPC '${e}' stream ${s} received error:`,x);const V=x.status;let M=function(w){const I=Xe[w];if(I!==void 0)return jT(I)}(V),T=x.message;M===void 0&&(M=j.INTERNAL,T="Unknown error status: "+V+" with message "+x.message),S=!0,k.So(new H(M,T)),m.close()}else Q(At,`RPC '${e}' stream ${s} received:`,y),k.bo(y)}}),P(l,cT.STAT_EVENT,b=>{b.stat===Uh.PROXY?Q(At,`RPC '${e}' stream ${s} detected buffering proxy`):b.stat===Uh.NOPROXY&&Q(At,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function kd(){return typeof document<"u"?document:null}/**
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
 */function cc(t){return new h1(t,!0)}/**
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
 */class YT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class XT{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new YT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(pr(n.toString()),pr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new H(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rx extends XT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=m1(this.serializer,e),r=function(i){if(!("targetChange"in i))return ie.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?zn(o.readTime):ie.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Gh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=zh(u)?{documents:_1(i,u)}:{query:v1(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=BT(i,o.resumeToken);const c=Hh(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ie.min())>0){l.readTime=ku(i,o.snapshotVersion.toTimestamp());const c=Hh(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=E1(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Gh(this.serializer),n.removeTarget=e,this.a_(n)}}class sx extends XT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Se(!!e.streamToken),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=y1(e.writeResults,e.commitTime),r=zn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Gh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>g1(this.serializer,r))};this.a_(n)}}/**
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
 */class ix extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new H(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,qh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(j.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,qh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ox{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(pr(n),this.D_=!1):Q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class ax{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ws(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=oe(u);c.L_.add(4),await Ma(c),c.q_.set("Unknown"),c.L_.delete(4),await dc(c)}(this))})}),this.q_=new ox(r,s)}}async function dc(t){if(Ws(t))for(const e of t.B_)await e(!0)}async function Ma(t){for(const e of t.B_)await e(!1)}function JT(t,e){const n=oe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Np(n)?Pp(n):Xi(n).r_()&&Cp(n,e))}function kp(t,e){const n=oe(t),r=Xi(n);n.N_.delete(e),r.r_()&&ZT(n,e),n.N_.size===0&&(r.r_()?r.o_():Ws(n)&&n.q_.set("Unknown"))}function Cp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Xi(t).A_(e)}function ZT(t,e){t.Q_.xe(e),Xi(t).R_(e)}function Pp(t){t.Q_=new l1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Xi(t).start(),t.q_.v_()}function Np(t){return Ws(t)&&!Xi(t).n_()&&t.N_.size>0}function Ws(t){return oe(t).L_.size===0}function eI(t){t.Q_=void 0}async function lx(t){t.q_.set("Online")}async function ux(t){t.N_.forEach((e,n)=>{Cp(t,e)})}async function cx(t,e){eI(t),Np(t)?(t.q_.M_(e),Pp(t)):t.q_.set("Unknown")}async function dx(t,e,n){if(t.q_.set("Online"),e instanceof FT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cu(t,r)}else if(e instanceof Wl?t.Q_.Ke(e):e instanceof UT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ie.min()))try{const r=await QT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.N_.get(c);f&&i.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=i.N_.get(u);if(!f)return;i.N_.set(u,f.withResumeToken(mt.EMPTY_BYTE_STRING,f.snapshotVersion)),ZT(i,u);const m=new Mr(f.target,u,c,f.sequenceNumber);Cp(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await Cu(t,r)}}async function Cu(t,e,n){if(!Da(e))throw e;t.L_.add(1),await Ma(t),t.q_.set("Offline"),n||(n=()=>QT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await dc(t)})}function tI(t,e){return e().catch(n=>Cu(t,n,e))}async function hc(t){const e=oe(t),n=Zr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;hx(e);)try{const s=await Q1(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,fx(e,s)}catch(s){await Cu(e,s)}nI(e)&&rI(e)}function hx(t){return Ws(t)&&t.O_.length<10}function fx(t,e){t.O_.push(e);const n=Zr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function nI(t){return Ws(t)&&!Zr(t).n_()&&t.O_.length>0}function rI(t){Zr(t).start()}async function px(t){Zr(t).p_()}async function mx(t){const e=Zr(t);for(const n of t.O_)e.m_(n.mutations)}async function gx(t,e,n){const r=t.O_.shift(),s=Ep.from(r,e,n);await tI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await hc(t)}async function yx(t,e){e&&Zr(t).V_&&await async function(r,s){if(function(o){return i1(o)&&o!==j.ABORTED}(s.code)){const i=r.O_.shift();Zr(r).s_(),await tI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await hc(r)}}(t,e),nI(t)&&rI(t)}async function __(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=Ws(n);n.L_.add(3),await Ma(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await dc(n)}async function _x(t,e){const n=oe(t);e?(n.L_.delete(2),await dc(n)):e||(n.L_.add(2),await Ma(n),n.q_.set("Unknown"))}function Xi(t){return t.K_||(t.K_=function(n,r,s){const i=oe(n);return i.w_(),new rx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:lx.bind(null,t),Ro:ux.bind(null,t),mo:cx.bind(null,t),d_:dx.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Np(t)?Pp(t):t.q_.set("Unknown")):(await t.K_.stop(),eI(t))})),t.K_}function Zr(t){return t.U_||(t.U_=function(n,r,s){const i=oe(n);return i.w_(),new sx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:px.bind(null,t),mo:yx.bind(null,t),f_:mx.bind(null,t),g_:gx.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await hc(t)):(await t.U_.stop(),t.O_.length>0&&(Q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class xp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new xp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bp(t,e){if(pr("AsyncQueue",`${e}: ${t}`),Da(t))return new H(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Si{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=No(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new Si(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Si)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Si;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class v_{constructor(){this.W_=new Be(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):re():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Bi{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Bi(e,n,Si.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class vx{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class wx{constructor(){this.queries=w_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=oe(n),i=s.queries;s.queries=w_(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new H(j.ABORTED,"Firestore shutting down"))}}function w_(){return new Yi(t=>AT(t),sc)}async function Dp(t,e){const n=oe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new vx,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=bp(o,`Initialization of query '${Zs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Lp(n)}async function Op(t,e){const n=oe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ex(t,e){const n=oe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Lp(n)}function Tx(t,e,n){const r=oe(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Lp(t){t.Y_.forEach(e=>{e.next()})}var Yh,E_;(E_=Yh||(Yh={})).ea="default",E_.Cache="cache";class Mp{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Bi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Bi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Yh.Cache}}/**
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
 */class sI{constructor(e){this.key=e}}class iI{constructor(e){this.key=e}}class Ix{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=pe(),this.mutatedKeys=pe(),this.Aa=RT(e),this.Ra=new Si(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new v_,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),S=ic(this.query,m)?m:null,k=!!g&&this.mutatedKeys.has(g.key),P=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let b=!1;g&&S?g.data.isEqual(S.data)?k!==P&&(r.track({type:3,doc:S}),b=!0):this.ga(g,S)||(r.track({type:2,doc:S}),b=!0,(u&&this.Aa(S,u)>0||c&&this.Aa(S,c)<0)&&(l=!0)):!g&&S?(r.track({type:0,doc:S}),b=!0):g&&!S&&(r.track({type:1,doc:g}),b=!0,(u||c)&&(l=!0)),b&&(S?(o=o.add(S),i=P?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(S,k){const P=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return P(S)-P(k)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Bi(this.query,e.Ra,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new v_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=pe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new iI(r))}),this.da.forEach(r=>{e.has(r)||n.push(new sI(r))}),n}ba(e){this.Ta=e.Ts,this.da=pe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Bi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Sx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ax{constructor(e){this.key=e,this.va=!1}}class Rx{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Yi(l=>AT(l),sc),this.Ma=new Map,this.xa=new Set,this.Oa=new Be(X.comparator),this.Na=new Map,this.La=new Sp,this.Ba={},this.ka=new Map,this.qa=Fi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function kx(t,e,n=!0){const r=dI(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await oI(r,e,n,!0),s}async function Cx(t,e){const n=dI(t);await oI(n,e,!0,!1)}async function oI(t,e,n,r){const s=await Y1(t.localStore,$n(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Px(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&JT(t.remoteStore,s),l}async function Px(t,e,n,r,s){t.Ka=(m,g,S)=>async function(P,b,A,y){let E=b.view.ma(A);E.ns&&(E=await m_(P.localStore,b.query,!1).then(({documents:T})=>b.view.ma(T,E)));const x=y&&y.targetChanges.get(b.targetId),V=y&&y.targetMismatches.get(b.targetId)!=null,M=b.view.applyChanges(E,P.isPrimaryClient,x,V);return I_(P,b.targetId,M.wa),M.snapshot}(t,m,g,S);const i=await m_(t.localStore,e,!0),o=new Ix(e,i.Ts),l=o.ma(i.documents),u=La.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);I_(t,n,c.wa);const f=new Sx(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function Nx(t,e,n){const r=oe(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!sc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Qh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&kp(r.remoteStore,s.targetId),Xh(r,s.targetId)}).catch(ba)):(Xh(r,s.targetId),await Qh(r.localStore,s.targetId,!0))}async function xx(t,e){const n=oe(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),kp(n.remoteStore,r.targetId))}async function bx(t,e,n){const r=Ux(t);try{const s=await function(o,l){const u=oe(o),c=Le.now(),f=l.reduce((S,k)=>S.add(k.key),pe());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let k=mr(),P=pe();return u.cs.getEntries(S,f).next(b=>{k=b,k.forEach((A,y)=>{y.isValidDocument()||(P=P.add(A))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,k)).next(b=>{m=b;const A=[];for(const y of l){const E=e1(y,m.get(y.key).overlayedDocument);E!=null&&A.push(new os(y.key,E,yT(E.value.mapValue),mn.exists(!0)))}return u.mutationQueue.addMutationBatch(S,c,A,l)}).next(b=>{g=b;const A=b.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(S,b.batchId,A)})}).then(()=>({batchId:g.batchId,changes:CT(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Be(we)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,s.batchId,n),await Va(r,s.changes),await hc(r.remoteStore)}catch(s){const i=bp(s,"Failed to persist write");n.reject(i)}}async function aI(t,e){const n=oe(t);try{const r=await K1(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Se(o.va):s.removedDocuments.size>0&&(Se(o.va),o.va=!1))}),await Va(n,r,e)}catch(r){await ba(r)}}function T_(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=oe(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(c=!0)}),c&&Lp(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Dx(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Be(X.comparator);o=o.insert(i,Ct.newNoDocument(i,ie.min()));const l=pe().add(i),u=new uc(ie.min(),new Map,new Be(we),o,l);await aI(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Vp(r)}else await Qh(r.localStore,e,!1).then(()=>Xh(r,e,n)).catch(ba)}async function Ox(t,e){const n=oe(t),r=e.batch.batchId;try{const s=await q1(n.localStore,e);uI(n,r,null),lI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Va(n,s)}catch(s){await ba(s)}}async function Lx(t,e,n){const r=oe(t);try{const s=await function(o,l){const u=oe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(Se(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);uI(r,e,n),lI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Va(r,s)}catch(s){await ba(s)}}function lI(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function uI(t,e,n){const r=oe(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Xh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||cI(t,r)})}function cI(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(kp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Vp(t))}function I_(t,e,n){for(const r of n)r instanceof sI?(t.La.addReference(r.key,e),Mx(t,r)):r instanceof iI?(Q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||cI(t,r.key)):re()}function Mx(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Vp(t))}function Vp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(De.fromString(e)),r=t.qa.next();t.Na.set(r,new Ax(n)),t.Oa=t.Oa.insert(n,r),JT(t.remoteStore,new Mr($n(rc(n.path)),r,"TargetPurposeLimboResolution",fp.oe))}}async function Va(t,e,n){const r=oe(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=Rp.Wi(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,c){const f=oe(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>U.forEach(c,g=>U.forEach(g.$i,S=>f.persistence.referenceDelegate.addReference(m,g.targetId,S)).next(()=>U.forEach(g.Ui,S=>f.persistence.referenceDelegate.removeReference(m,g.targetId,S)))))}catch(m){if(!Da(m))throw m;Q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const S=f.os.get(g),k=S.snapshotVersion,P=S.withLastLimboFreeSnapshotVersion(k);f.os=f.os.insert(g,P)}}}(r.localStore,i))}async function Vx(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await GT(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new H(j.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Va(n,r.hs)}}function jx(t,e){const n=oe(t),r=n.Na.get(e);if(r&&r.va)return pe().add(r.key);{let s=pe();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function dI(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=aI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Dx.bind(null,e),e.Ca.d_=Ex.bind(null,e.eventManager),e.Ca.$a=Tx.bind(null,e.eventManager),e}function Ux(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ox.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Lx.bind(null,e),e}class Pu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=cc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return H1(this.persistence,new z1,e.initialUser,this.serializer)}Ga(e){return new F1(Ap.Zr,this.serializer)}Wa(e){return new J1}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pu.provider={build:()=>new Pu};class Jh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>T_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vx.bind(null,this.syncEngine),await _x(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new wx}()}createDatastore(e){const n=cc(e.databaseInfo.databaseId),r=function(i){return new nx(i)}(e.databaseInfo);return function(i,o,l,u){return new ix(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new ax(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>T_(this.syncEngine,n,0),function(){return y_.D()?new y_:new Z1}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const m=new Rx(s,i,o,l,u,c);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=oe(s);Q("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ma(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Jh.provider={build:()=>new Jh};/**
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
 */class jp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):pr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Fx{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Rt.UNAUTHENTICATED,this.clientId=pT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Cd(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await GT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function S_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Bx(t);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>__(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>__(e.remoteStore,s)),t._onlineComponents=e}async function Bx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Oi("Error using user provided cache. Falling back to memory cache: "+n),await Cd(t,new Pu)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await Cd(t,new Pu);return t._offlineComponents}async function hI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await S_(t,t._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await S_(t,new Jh))),t._onlineComponents}function $x(t){return hI(t).then(e=>e.syncEngine)}async function Nu(t){const e=await hI(t),n=e.eventManager;return n.onListen=kx.bind(null,e.syncEngine),n.onUnlisten=Nx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Cx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=xx.bind(null,e.syncEngine),n}function zx(t,e,n={}){const r=new ar;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new jp({next:g=>{f.Za(),o.enqueueAndForget(()=>Op(i,m));const S=g.docs.has(l);!S&&g.fromCache?c.reject(new H(j.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&g.fromCache&&u&&u.source==="server"?c.reject(new H(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new Mp(rc(l.path),f,{includeMetadataChanges:!0,_a:!0});return Dp(i,m)}(await Nu(t),t.asyncQueue,e,n,r)),r.promise}function Wx(t,e,n={}){const r=new ar;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new jp({next:g=>{f.Za(),o.enqueueAndForget(()=>Op(i,m)),g.fromCache&&u.source==="server"?c.reject(new H(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new Mp(l,f,{includeMetadataChanges:!0,_a:!0});return Dp(i,m)}(await Nu(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function fI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const A_=new Map;/**
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
 */function pI(t,e,n){if(!n)throw new H(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Hx(t,e,n,r){if(e===!0&&r===!0)throw new H(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function R_(t){if(!X.isDocumentKey(t))throw new H(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function k_(t){if(X.isDocumentKey(t))throw new H(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function Kt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fc(t);throw new H(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class C_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new C_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new C_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cN;switch(r.type){case"firstParty":return new pN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=A_.get(n);r&&(Q("ComponentProvider","Removing Datastore"),A_.delete(n),r.terminate())}(this),Promise.resolve()}}function qx(t,e,n,r={}){var s;const i=(t=Kt(t,pc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Oi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Rt.MOCK_USER;else{l=vE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Rt(c)}t._authCredentials=new dN(new fT(l,u))}}/**
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
 */class vr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vr(this.firestore,e,this._query)}}class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class qr extends vr{constructor(e,n,r){super(e,n,rc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new X(e))}withConverter(e){return new qr(this.firestore,e,this._path)}}function et(t,e,...n){if(t=Te(t),pI("collection","path",e),t instanceof pc){const r=De.fromString(e,...n);return k_(r),new qr(t,null,r)}{if(!(t instanceof Pt||t instanceof qr))throw new H(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return k_(r),new qr(t.firestore,null,r)}}function rt(t,e,...n){if(t=Te(t),arguments.length===1&&(e=pT.newId()),pI("doc","path",e),t instanceof pc){const r=De.fromString(e,...n);return R_(r),new Pt(t,null,new X(r))}{if(!(t instanceof Pt||t instanceof qr))throw new H(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return R_(r),new Pt(t.firestore,t instanceof qr?t.converter:null,new X(r))}}/**
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
 */class P_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new YT(this,"async_queue_retry"),this.Vu=()=>{const r=kd();r&&Q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=kd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=kd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ar;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Da(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw pr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=xp.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&re()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function N_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class gr extends pc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new P_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new P_(e),this._firestoreClient=void 0,await e}}}function Kx(t,e){const n=typeof t=="object"?t:Xu(),r=typeof t=="string"?t:"(default)",s=Fs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=gE("firestore");i&&qx(s,...i)}return s}function mc(t){if(t._terminated)throw new H(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Gx(t),t._firestoreClient}function Gx(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,c,f){return new kN(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,fI(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Fx(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class $i{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $i(mt.fromBase64String(e))}catch(n){throw new H(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $i(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Hs{constructor(e){this._methodName=e}}/**
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
 */class Up{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
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
 */class Fp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const Qx=/^__.*__$/;class Yx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new os(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oa(e,this.data,n,this.fieldTransforms)}}class mI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new os(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class yc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new yc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return xu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(gI(this.Cu)&&Qx.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Xx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||cc(e)}Qu(e,n,r,s=!1){return new yc({Cu:e,methodName:n,qu:r,path:dt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _c(t){const e=t._freezeSettings(),n=cc(t._databaseId);return new Xx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yI(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Hp("Data must be an object, but it was:",o,r);const l=vI(r,o);let u,c;if(i.merge)u=new Zt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=Zh(e,m,n);if(!o.contains(g))throw new H(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);EI(f,g)||f.push(g)}u=new Zt(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new Yx(new Bt(l),u,c)}class vc extends Hs{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vc}}function _I(t,e,n){return new yc({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Bp extends Hs{_toFieldTransform(e){return new ac(e.path,new _a)}isEqual(e){return e instanceof Bp}}class $p extends Hs{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=_I(this,e,!0),r=this.Ku.map(i=>qs(i,n)),s=new ji(r);return new ac(e.path,s)}isEqual(e){return e instanceof $p&&bi(this.Ku,e.Ku)}}class zp extends Hs{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=_I(this,e,!0),r=this.Ku.map(i=>qs(i,n)),s=new Ui(r);return new ac(e.path,s)}isEqual(e){return e instanceof zp&&bi(this.Ku,e.Ku)}}class Wp extends Hs{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new va(e.serializer,xT(e.serializer,this.$u));return new ac(e.path,n)}isEqual(e){return e instanceof Wp&&this.$u===e.$u}}function Jx(t,e,n,r){const s=t.Qu(1,e,n);Hp("Data must be an object, but it was:",s,r);const i=[],o=Bt.empty();zs(r,(u,c)=>{const f=qp(e,u,n);c=Te(c);const m=s.Nu(f);if(c instanceof vc)i.push(f);else{const g=qs(c,m);g!=null&&(i.push(f),o.set(f,g))}});const l=new Zt(i);return new mI(o,l,s.fieldTransforms)}function Zx(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[Zh(e,r,n)],u=[s];if(i.length%2!=0)throw new H(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Zh(e,i[g])),u.push(i[g+1]);const c=[],f=Bt.empty();for(let g=l.length-1;g>=0;--g)if(!EI(c,l[g])){const S=l[g];let k=u[g];k=Te(k);const P=o.Nu(S);if(k instanceof vc)c.push(S);else{const b=qs(k,P);b!=null&&(c.push(S),f.set(S,b))}}const m=new Zt(c);return new mI(f,m,o.fieldTransforms)}function eb(t,e,n,r=!1){return qs(n,t.Qu(r?4:3,e))}function qs(t,e){if(wI(t=Te(t)))return Hp("Unsupported field value:",e,t),vI(t,e);if(t instanceof Hs)return function(r,s){if(!gI(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=qs(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:ku(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ku(s.serializer,i)}}if(r instanceof Up)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $i)return{bytesValue:BT(s.serializer,r._byteString)};if(r instanceof Pt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ip(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Fp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return vp(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${fc(r)}`)}(t,e)}function vI(t,e){const n={};return mT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zs(t,(r,s)=>{const i=qs(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function wI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Up||t instanceof $i||t instanceof Pt||t instanceof Hs||t instanceof Fp)}function Hp(t,e,n){if(!wI(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=fc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Zh(t,e,n){if((e=Te(e))instanceof gc)return e._internalPath;if(typeof e=="string")return qp(t,e);throw xu("Field path arguments must be of type string or ",t,!1,void 0,n)}const tb=new RegExp("[~\\*/\\[\\]]");function qp(t,e,n){if(e.search(tb)>=0)throw xu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gc(...e.split("."))._internalPath}catch{throw xu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new H(j.INVALID_ARGUMENT,l+t+u)}function EI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class TI{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nb extends TI{data(){return super.data()}}function wc(t,e){return typeof e=="string"?qp(t,e):e instanceof gc?e._internalPath:e._delegate._internalPath}/**
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
 */function II(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kp{}class Gp extends Kp{}function ln(t,e,...n){let r=[];e instanceof Kp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Qp).length,l=i.filter(u=>u instanceof Ec).length;if(o>1||o>0&&l>0)throw new H(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ec extends Gp{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ec(e,n,r)}_apply(e){const n=this._parse(e);return SI(e._query,n),new vr(e.firestore,e.converter,Wh(e._query,n))}_parse(e){const n=_c(e.firestore);return function(i,o,l,u,c,f,m){let g;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new H(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){b_(m,f);const S=[];for(const k of m)S.push(x_(u,i,k));g={arrayValue:{values:S}}}else g=x_(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||b_(m,f),g=eb(l,o,m,f==="in"||f==="not-in");return Ze.create(c,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Hl(t,e,n){const r=e,s=wc("where",t);return Ec._create(s,r,n)}class Qp extends Kp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Qp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Nn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)SI(o,u),o=Wh(o,u)}(e._query,n),new vr(e.firestore,e.converter,Wh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yp extends Gp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Yp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new H(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new H(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ya(i,o)}(e._query,this._field,this._direction);return new vr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Qi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function pi(t,e="asc"){const n=e,r=wc("orderBy",t);return Yp._create(r,n)}class Xp extends Gp{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Xp(e,n,r)}_apply(e){return new vr(e.firestore,e.converter,Ru(e._query,this._limit,this._limitType))}}function rb(t){return Xp._create("limit",t,"F")}function x_(t,e,n){if(typeof(n=Te(n))=="string"){if(n==="")throw new H(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ST(e)&&n.indexOf("/")!==-1)throw new H(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!X.isDocumentKey(r))throw new H(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Jy(t,new X(r))}if(n instanceof Pt)return Jy(t,n._key);throw new H(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fc(n)}.`)}function b_(t,e){if(!Array.isArray(t)||t.length===0)throw new H(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function SI(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class sb{convertValue(e,n="none"){switch(Ds(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(bs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return zs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ge(o.doubleValue));return new Fp(i)}convertGeoPoint(e){return new Up(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=mp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(pa(e));default:return null}}convertTimestamp(e){const n=Jr(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Se(KT(r));const s=new ma(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||pr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function AI(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class bo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class RI extends TI{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ql(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ql extends RI{data(e={}){return super.data(e)}}class kI{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new bo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ql(this._firestore,this._userDataWriter,r.key,r,new bo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new ql(s._firestore,s._userDataWriter,l.doc.key,l.doc,new bo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new ql(s._firestore,s._userDataWriter,l.doc.key,l.doc,new bo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:ib(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ib(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
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
 */function D_(t){t=Kt(t,Pt);const e=Kt(t.firestore,gr);return zx(mc(e),t._key).then(n=>PI(e,t,n))}class Jp extends sb{constructor(e){super(),this.firestore=e}convertBytes(e){return new $i(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function CI(t){t=Kt(t,vr);const e=Kt(t.firestore,gr),n=mc(e),r=new Jp(e);return II(t._query),Wx(n,t._query).then(s=>new kI(e,r,t,s))}function ob(t,e,n){t=Kt(t,Pt);const r=Kt(t.firestore,gr),s=AI(t.converter,e);return Tc(r,[yI(_c(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,mn.none())])}function Wn(t,e,n,...r){t=Kt(t,Pt);const s=Kt(t.firestore,gr),i=_c(s);let o;return o=typeof(e=Te(e))=="string"||e instanceof gc?Zx(i,"updateDoc",t._key,e,n,r):Jx(i,"updateDoc",t._key,e),Tc(s,[o.toMutation(t._key,mn.exists(!0))])}function es(t){return Tc(Kt(t.firestore,gr),[new wp(t._key,mn.none())])}function Ks(t,e){const n=Kt(t.firestore,gr),r=rt(t),s=AI(t.converter,e);return Tc(n,[yI(_c(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,mn.exists(!1))]).then(()=>r)}function Sn(t,...e){var n,r,s;t=Te(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||N_(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(N_(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,c,f;if(t instanceof Pt)c=Kt(t.firestore,gr),f=rc(t._key.path),u={next:m=>{e[o]&&e[o](PI(c,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Kt(t,vr);c=Kt(m.firestore,gr),f=m._query;const g=new Jp(c);u={next:S=>{e[o]&&e[o](new kI(c,g,m,S))},error:e[o+1],complete:e[o+2]},II(t._query)}return function(g,S,k,P){const b=new jp(P),A=new Mp(S,b,k);return g.asyncQueue.enqueueAndForget(async()=>Dp(await Nu(g),A)),()=>{b.Za(),g.asyncQueue.enqueueAndForget(async()=>Op(await Nu(g),A))}}(mc(c),f,l,u)}function Tc(t,e){return function(r,s){const i=new ar;return r.asyncQueue.enqueueAndForget(async()=>bx(await $x(r),s,i)),i.promise}(mc(t),e)}function PI(t,e,n){const r=n.docs.get(e._key),s=new Jp(t);return new RI(t,s,e._key,r,new bo(n.hasPendingWrites,n.fromCache),e.converter)}function Vn(){return new Bp("serverTimestamp")}function ef(...t){return new $p("arrayUnion",t)}function ab(...t){return new zp("arrayRemove",t)}function lb(t){return new Wp("increment",t)}(function(e,n=!0){(function(s){Gi=s})(Bs),Pn(new _n("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new gr(new hN(r.getProvider("auth-internal")),new gN(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ma(c.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),qt(Ky,"4.7.3",e),qt(Ky,"4.7.3","esm2017")})();/**
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
 */const NI="firebasestorage.googleapis.com",xI="storageBucket",ub=2*60*1e3,cb=10*60*1e3;/**
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
 */class He extends xn{constructor(e,n,r=0){super(Pd(e),`Firebase Storage: ${n} (${Pd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,He.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Pd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var We;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(We||(We={}));function Pd(t){return"storage/"+t}function Zp(){const t="An unknown error occurred, please check the error payload for server response.";return new He(We.UNKNOWN,t)}function db(t){return new He(We.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function hb(t){return new He(We.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function fb(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new He(We.UNAUTHENTICATED,t)}function pb(){return new He(We.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function mb(t){return new He(We.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function gb(){return new He(We.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function yb(){return new He(We.CANCELED,"User canceled the upload/download.")}function _b(t){return new He(We.INVALID_URL,"Invalid URL '"+t+"'.")}function vb(t){return new He(We.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function wb(){return new He(We.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+xI+"' property when initializing the app?")}function Eb(){return new He(We.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Tb(){return new He(We.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ib(t){return new He(We.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function tf(t){return new He(We.INVALID_ARGUMENT,t)}function bI(){return new He(We.APP_DELETED,"The Firebase app was deleted.")}function Sb(t){return new He(We.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ko(t,e){return new He(We.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Eo(t){throw new He(We.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class en{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=en.makeFromUrl(e,n)}catch{return new en(e,"")}if(r.path==="")return r;throw vb(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",S=new RegExp(`^https?://${m}/${f}/b/${s}/o${g}`,"i"),k={bucket:1,path:3},P=n===NI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",A=new RegExp(`^https?://${P}/${s}/${b}`,"i"),E=[{regex:l,indices:u,postModify:i},{regex:S,indices:k,postModify:c},{regex:A,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<E.length;x++){const V=E[x],M=V.regex.exec(e);if(M){const T=M[V.indices.bucket];let v=M[V.indices.path];v||(v=""),r=new en(T,v),V.postModify(r);break}}if(r==null)throw _b(e);return r}}class Ab{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Cb(t){return t!==void 0}function Pb(t){return typeof t=="object"&&!Array.isArray(t)}function em(t){return typeof t=="string"||t instanceof String}function O_(t){return tm()&&t instanceof Blob}function tm(){return typeof Blob<"u"}function L_(t,e,n,r){if(r<e)throw tf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw tf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ic(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function DI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Is;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Is||(Is={}));/**
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
 */class xb{constructor(e,n,r,s,i,o,l,u,c,f,m,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=m,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,k)=>{this.resolve_=S,this.reject_=k,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Il(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Is.NO_ERROR,u=i.getStatus();if(!l||Nb(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Is.ABORT;r(!1,new Il(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Il(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Cb(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Zp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?bI():yb();o(u)}else{const u=gb();o(u)}};this.canceled_?n(!1,new Il(!1,null,!0)):this.backoffId_=Rb(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Il{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function bb(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Db(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ob(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Lb(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Mb(t,e,n,r,s,i,o=!0){const l=DI(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return Ob(c,e),bb(c,n),Db(c,i),Lb(c,r),new xb(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function Vb(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function jb(...t){const e=Vb();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(tm())return new Blob(t);throw new He(We.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Ub(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Fb(t){if(typeof atob>"u")throw Ib("base-64");return atob(t)}/**
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
 */const jn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Nd{constructor(e,n){this.data=e,this.contentType=n||null}}function Bb(t,e){switch(t){case jn.RAW:return new Nd(OI(e));case jn.BASE64:case jn.BASE64URL:return new Nd(LI(t,e));case jn.DATA_URL:return new Nd(zb(e),Wb(e))}throw Zp()}function OI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function $b(t){let e;try{e=decodeURIComponent(t)}catch{throw Ko(jn.DATA_URL,"Malformed data URL.")}return OI(e)}function LI(t,e){switch(t){case jn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ko(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case jn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ko(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Fb(e)}catch(s){throw s.message.includes("polyfill")?s:Ko(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class MI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ko(jn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Hb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function zb(t){const e=new MI(t);return e.base64?LI(jn.BASE64,e.rest):$b(e.rest)}function Wb(t){return new MI(t).contentType}function Hb(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class br{constructor(e,n){let r=0,s="";O_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(O_(this.data_)){const r=this.data_,s=Ub(r,e,n);return s===null?null:new br(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new br(r,!0)}}static getBlob(...e){if(tm()){const n=e.map(r=>r instanceof br?r.data_:r);return new br(jb.apply(null,n))}else{const n=e.map(o=>em(o)?Bb(jn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new br(s,!0)}}uploadData(){return this.data_}}/**
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
 */function VI(t){let e;try{e=JSON.parse(t)}catch{return null}return Pb(e)?e:null}/**
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
 */function qb(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Kb(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function jI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Gb(t,e){return e}class Lt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Gb}}let Sl=null;function Qb(t){return!em(t)||t.length<2?t:jI(t)}function UI(){if(Sl)return Sl;const t=[];t.push(new Lt("bucket")),t.push(new Lt("generation")),t.push(new Lt("metageneration")),t.push(new Lt("name","fullPath",!0));function e(i,o){return Qb(o)}const n=new Lt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Lt("size");return s.xform=r,t.push(s),t.push(new Lt("timeCreated")),t.push(new Lt("updated")),t.push(new Lt("md5Hash",null,!0)),t.push(new Lt("cacheControl",null,!0)),t.push(new Lt("contentDisposition",null,!0)),t.push(new Lt("contentEncoding",null,!0)),t.push(new Lt("contentLanguage",null,!0)),t.push(new Lt("contentType",null,!0)),t.push(new Lt("metadata","customMetadata",!0)),Sl=t,Sl}function Yb(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new en(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Xb(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return Yb(r,t),r}function FI(t,e,n){const r=VI(e);return r===null?null:Xb(t,r,n)}function Jb(t,e,n,r){const s=VI(e);if(s===null||!em(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const f=t.bucket,m=t.fullPath,g="/b/"+o(f)+"/o/"+o(m),S=Ic(g,n,r),k=DI({alt:"media",token:c});return S+k})[0]}function Zb(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class nm{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function BI(t){if(!t)throw Zp()}function eD(t,e){function n(r,s){const i=FI(t,s,e);return BI(i!==null),i}return n}function tD(t,e){function n(r,s){const i=FI(t,s,e);return BI(i!==null),Jb(i,s,t.host,t._protocol)}return n}function $I(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=pb():s=fb():n.getStatus()===402?s=hb(t.bucket):n.getStatus()===403?s=mb(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function zI(t){const e=$I(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=db(t.path)),i.serverResponse=s.serverResponse,i}return n}function nD(t,e,n){const r=e.fullServerUrl(),s=Ic(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new nm(s,i,tD(t,n),o);return l.errorHandler=zI(e),l}function rD(t,e){const n=e.fullServerUrl(),r=Ic(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(u,c){}const l=new nm(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=zI(e),l}function sD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function iD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=sD(null,e)),r}function oD(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let E="";for(let x=0;x<2;x++)E=E+Math.random().toString().slice(2);return E}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=iD(e,r,s),f=Zb(c,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+u+"--",S=br.getBlob(m,r,g);if(S===null)throw Eb();const k={name:c.fullPath},P=Ic(i,t.host,t._protocol),b="POST",A=t.maxUploadRetryTime,y=new nm(P,b,eD(t,n),A);return y.urlParams=k,y.headers=o,y.body=S.uploadData(),y.errorHandler=$I(e),y}class aD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Is.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Is.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Is.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Eo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Eo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Eo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Eo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Eo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class lD extends aD{initXhr(){this.xhr_.responseType="text"}}function rm(){return new lD}/**
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
 */class Os{constructor(e,n){this._service=e,n instanceof en?this._location=n:this._location=en.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Os(e,n)}get root(){const e=new en(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jI(this._location.path)}get storage(){return this._service}get parent(){const e=qb(this._location.path);if(e===null)return null;const n=new en(this._location.bucket,e);return new Os(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Sb(e)}}function uD(t,e,n){t._throwIfRoot("uploadBytes");const r=oD(t.storage,t._location,UI(),new br(e,!0),n);return t.storage.makeRequestWithTokens(r,rm).then(s=>({metadata:s,ref:t}))}function cD(t){t._throwIfRoot("getDownloadURL");const e=nD(t.storage,t._location,UI());return t.storage.makeRequestWithTokens(e,rm).then(n=>{if(n===null)throw Tb();return n})}function dD(t){t._throwIfRoot("deleteObject");const e=rD(t.storage,t._location);return t.storage.makeRequestWithTokens(e,rm)}function hD(t,e){const n=Kb(t._location.path,e),r=new en(t._location.bucket,n);return new Os(t.storage,r)}/**
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
 */function fD(t){return/^[A-Za-z]+:\/\//.test(t)}function pD(t,e){return new Os(t,e)}function WI(t,e){if(t instanceof sm){const n=t;if(n._bucket==null)throw wb();const r=new Os(n,n._bucket);return e!=null?WI(r,e):r}else return e!==void 0?hD(t,e):t}function mD(t,e){if(e&&fD(e)){if(t instanceof sm)return pD(t,e);throw tf("To use ref(service, url), the first argument must be a Storage instance.")}else return WI(t,e)}function M_(t,e){const n=e==null?void 0:e[xI];return n==null?null:en.makeFromBucketSpec(n,t)}function gD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:vE(s,t.app.options.projectId))}class sm{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=NI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ub,this._maxUploadRetryTime=cb,this._requests=new Set,s!=null?this._bucket=en.makeFromBucketSpec(s,this._host):this._bucket=M_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=en.makeFromBucketSpec(this._url,e):this._bucket=M_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){L_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){L_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Os(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Ab(bI());{const o=Mb(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const V_="@firebase/storage",j_="0.13.2";/**
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
 */const HI="storage";function Kr(t,e,n){return t=Te(t),uD(t,e,n)}function Gr(t){return t=Te(t),cD(t)}function tn(t){return t=Te(t),dD(t)}function Ye(t,e){return t=Te(t),mD(t,e)}function yD(t=Xu(),e){t=Te(t);const r=Fs(t,HI).getImmediate({identifier:e}),s=gE("storage");return s&&_D(r,...s),r}function _D(t,e,n,r={}){gD(t,e,n,r)}function vD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new sm(n,r,s,e,Bs)}function wD(){Pn(new _n(HI,vD,"PUBLIC").setMultipleInstances(!0)),qt(V_,j_,""),qt(V_,j_,"esm2017")}wD();const qI="@firebase/installations",im="0.6.9";/**
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
 */const KI=1e4,GI=`w:${im}`,QI="FIS_v2",ED="https://firebaseinstallations.googleapis.com/v1",TD=60*60*1e3,ID="installations",SD="Installations";/**
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
 */const AD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ls=new Us(ID,SD,AD);function YI(t){return t instanceof xn&&t.code.includes("request-failed")}/**
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
 */function XI({projectId:t}){return`${ED}/projects/${t}/installations`}function JI(t){return{token:t.token,requestStatus:2,expiresIn:kD(t.expiresIn),creationTime:Date.now()}}async function ZI(t,e){const r=(await e.json()).error;return Ls.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function e0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function RD(t,{refreshToken:e}){const n=e0(t);return n.append("Authorization",CD(e)),n}async function t0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function kD(t){return Number(t.replace("s","000"))}function CD(t){return`${QI} ${t}`}/**
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
 */async function PD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=XI(t),s=e0(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:QI,appId:t.appId,sdkVersion:GI},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await t0(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:JI(c.authToken)}}else throw await ZI("Create Installation",u)}/**
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
 */function n0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const xD=/^[cdef][\w-]{21}$/,nf="";function bD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=DD(t);return xD.test(n)?n:nf}catch{return nf}}function DD(t){return ND(t).substr(0,22)}/**
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
 */function Sc(t){return`${t.appName}!${t.appId}`}/**
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
 */const r0=new Map;function s0(t,e){const n=Sc(t);i0(n,e),OD(n,e)}function i0(t,e){const n=r0.get(t);if(n)for(const r of n)r(e)}function OD(t,e){const n=LD();n&&n.postMessage({key:t,fid:e}),MD()}let vs=null;function LD(){return!vs&&"BroadcastChannel"in self&&(vs=new BroadcastChannel("[Firebase] FID Change"),vs.onmessage=t=>{i0(t.data.key,t.data.fid)}),vs}function MD(){r0.size===0&&vs&&(vs.close(),vs=null)}/**
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
 */const VD="firebase-installations-database",jD=1,Ms="firebase-installations-store";let xd=null;function om(){return xd||(xd=Yu(VD,jD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ms)}}})),xd}async function bu(t,e){const n=Sc(t),s=(await om()).transaction(Ms,"readwrite"),i=s.objectStore(Ms),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&s0(t,e.fid),e}async function o0(t){const e=Sc(t),r=(await om()).transaction(Ms,"readwrite");await r.objectStore(Ms).delete(e),await r.done}async function Ac(t,e){const n=Sc(t),s=(await om()).transaction(Ms,"readwrite"),i=s.objectStore(Ms),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&s0(t,l.fid),l}/**
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
 */async function am(t){let e;const n=await Ac(t.appConfig,r=>{const s=UD(r),i=FD(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===nf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function UD(t){const e=t||{fid:bD(),registrationStatus:0};return a0(e)}function FD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ls.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=BD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:$D(t)}:{installationEntry:e}}async function BD(t,e){try{const n=await PD(t,e);return bu(t.appConfig,n)}catch(n){throw YI(n)&&n.customData.serverCode===409?await o0(t.appConfig):await bu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function $D(t){let e=await U_(t.appConfig);for(;e.registrationStatus===1;)await n0(100),e=await U_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await am(t);return r||n}return e}function U_(t){return Ac(t,e=>{if(!e)throw Ls.create("installation-not-found");return a0(e)})}function a0(t){return zD(t)?{fid:t.fid,registrationStatus:0}:t}function zD(t){return t.registrationStatus===1&&t.registrationTime+KI<Date.now()}/**
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
 */async function WD({appConfig:t,heartbeatServiceProvider:e},n){const r=HD(t,n),s=RD(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:GI,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await t0(()=>fetch(r,l));if(u.ok){const c=await u.json();return JI(c)}else throw await ZI("Generate Auth Token",u)}function HD(t,{fid:e}){return`${XI(t)}/${e}/authTokens:generate`}/**
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
 */async function lm(t,e=!1){let n;const r=await Ac(t.appConfig,i=>{if(!l0(i))throw Ls.create("not-registered");const o=i.authToken;if(!e&&GD(o))return i;if(o.requestStatus===1)return n=qD(t,e),i;{if(!navigator.onLine)throw Ls.create("app-offline");const l=YD(i);return n=KD(t,l),l}});return n?await n:r.authToken}async function qD(t,e){let n=await F_(t.appConfig);for(;n.authToken.requestStatus===1;)await n0(100),n=await F_(t.appConfig);const r=n.authToken;return r.requestStatus===0?lm(t,e):r}function F_(t){return Ac(t,e=>{if(!l0(e))throw Ls.create("not-registered");const n=e.authToken;return XD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function KD(t,e){try{const n=await WD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await bu(t.appConfig,r),n}catch(n){if(YI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await o0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await bu(t.appConfig,r)}throw n}}function l0(t){return t!==void 0&&t.registrationStatus===2}function GD(t){return t.requestStatus===2&&!QD(t)}function QD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+TD}function YD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function XD(t){return t.requestStatus===1&&t.requestTime+KI<Date.now()}/**
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
 */async function JD(t){const e=t,{installationEntry:n,registrationPromise:r}=await am(e);return r?r.catch(console.error):lm(e).catch(console.error),n.fid}/**
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
 */async function ZD(t,e=!1){const n=t;return await eO(n),(await lm(n,e)).token}async function eO(t){const{registrationPromise:e}=await am(t);e&&await e}/**
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
 */function tO(t){if(!t||!t.options)throw bd("App Configuration");if(!t.name)throw bd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw bd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function bd(t){return Ls.create("missing-app-config-values",{valueName:t})}/**
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
 */const u0="installations",nO="installations-internal",rO=t=>{const e=t.getProvider("app").getImmediate(),n=tO(e),r=Fs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},sO=t=>{const e=t.getProvider("app").getImmediate(),n=Fs(e,u0).getImmediate();return{getId:()=>JD(n),getToken:s=>ZD(n,s)}};function iO(){Pn(new _n(u0,rO,"PUBLIC")),Pn(new _n(nO,sO,"PRIVATE"))}iO();qt(qI,im);qt(qI,im,"esm2017");/**
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
 */const oO="/firebase-messaging-sw.js",aO="/firebase-cloud-messaging-push-scope",c0="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",lO="https://fcmregistrations.googleapis.com/v1",d0="google.c.a.c_id",uO="google.c.a.c_l",cO="google.c.a.ts",dO="google.c.a.e";var B_;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(B_||(B_={}));/**
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
 */var wa;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(wa||(wa={}));/**
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
 */function Xn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function hO(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const Dd="fcm_token_details_db",fO=5,$_="fcm_token_object_Store";async function pO(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Dd))return null;let e=null;return(await Yu(Dd,fO,{upgrade:async(r,s,i,o)=>{var l;if(s<2||!r.objectStoreNames.contains($_))return;const u=o.objectStore($_),c=await u.index("fcmSenderId").get(t);if(await u.clear(),!!c){if(s===2){const f=c;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(l=f.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:Xn(f.vapidKey)}}}else if(s===3){const f=c;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Xn(f.auth),p256dh:Xn(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Xn(f.vapidKey)}}}else if(s===4){const f=c;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Xn(f.auth),p256dh:Xn(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Xn(f.vapidKey)}}}}}})).close(),await wd(Dd),await wd("fcm_vapid_details_db"),await wd("undefined"),mO(e)?e:null}function mO(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const gO="firebase-messaging-database",yO=1,Ea="firebase-messaging-store";let Od=null;function h0(){return Od||(Od=Yu(gO,yO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ea)}}})),Od}async function _O(t){const e=f0(t),r=await(await h0()).transaction(Ea).objectStore(Ea).get(e);if(r)return r;{const s=await pO(t.appConfig.senderId);if(s)return await um(t,s),s}}async function um(t,e){const n=f0(t),s=(await h0()).transaction(Ea,"readwrite");return await s.objectStore(Ea).put(e,n),await s.done,e}function f0({appConfig:t}){return t.appId}/**
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
 */const vO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Nt=new Us("messaging","Messaging",vO);/**
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
 */async function wO(t,e){const n=await dm(t),r=p0(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(cm(t.appConfig),s)).json()}catch(o){throw Nt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Nt.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw Nt.create("token-subscribe-no-token");return i.token}async function EO(t,e){const n=await dm(t),r=p0(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${cm(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw Nt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Nt.create("token-update-failed",{errorInfo:o})}if(!i.token)throw Nt.create("token-update-no-token");return i.token}async function TO(t,e){const r={method:"DELETE",headers:await dm(t)};try{const i=await(await fetch(`${cm(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw Nt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw Nt.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function cm({projectId:t}){return`${lO}/projects/${t}/registrations`}async function dm({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function p0({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==c0&&(s.web.applicationPubKey=r),s}/**
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
 */const IO=7*24*60*60*1e3;async function SO(t){const e=await RO(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Xn(e.getKey("auth")),p256dh:Xn(e.getKey("p256dh"))},r=await _O(t.firebaseDependencies);if(r){if(kO(r.subscriptionOptions,n))return Date.now()>=r.createTime+IO?AO(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await TO(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return z_(t.firebaseDependencies,n)}else return z_(t.firebaseDependencies,n)}async function AO(t,e){try{const n=await EO(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await um(t.firebaseDependencies,r),n}catch(n){throw n}}async function z_(t,e){const r={token:await wO(t,e),createTime:Date.now(),subscriptionOptions:e};return await um(t,r),r.token}async function RO(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:hO(e)})}function kO(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
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
 */function W_(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return CO(e,t),PO(e,t),NO(e,t),e}function CO(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function PO(t,e){e.data&&(t.data=e.data)}function NO(t,e){var n,r,s,i,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;l&&(t.fcmOptions.link=l);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
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
 */function xO(t){return typeof t=="object"&&!!t&&d0 in t}/**
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
 */function bO(t){if(!t||!t.options)throw Ld("App Configuration Object");if(!t.name)throw Ld("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Ld(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ld(t){return Nt.create("missing-app-config-values",{valueName:t})}/**
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
 */async function OO(t){try{t.swRegistration=await navigator.serviceWorker.register(oO,{scope:aO}),t.swRegistration.update().catch(()=>{})}catch(e){throw Nt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function LO(t,e){if(!e&&!t.swRegistration&&await OO(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Nt.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function MO(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=c0)}/**
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
 */async function m0(t,e){if(!navigator)throw Nt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Nt.create("permission-blocked");return await MO(t,e==null?void 0:e.vapidKey),await LO(t,e==null?void 0:e.serviceWorkerRegistration),SO(t)}/**
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
 */async function VO(t,e,n){const r=jO(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[d0],message_name:n[uO],message_time:n[cO],message_device_time:Math.floor(Date.now()/1e3)})}function jO(t){switch(t){case wa.NOTIFICATION_CLICKED:return"notification_open";case wa.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function UO(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===wa.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(W_(n)):t.onMessageHandler.next(W_(n)));const r=n.data;xO(r)&&r[dO]==="1"&&await VO(t,n.messageType,r)}const H_="@firebase/messaging",q_="0.12.12";/**
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
 */const FO=t=>{const e=new DO(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>UO(e,n)),e},BO=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>m0(e,r)}};function $O(){Pn(new _n("messaging",FO,"PUBLIC")),Pn(new _n("messaging-internal",BO,"PRIVATE")),qt(H_,q_),qt(H_,q_,"esm2017")}/**
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
 */async function zO(){try{await EE()}catch{return!1}return typeof window<"u"&&wE()&&DR()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function WO(t,e){if(!navigator)throw Nt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function HO(t=Xu()){return zO().then(e=>{if(!e)throw Nt.create("unsupported-browser")},e=>{throw Nt.create("indexed-db-unsupported")}),Fs(Te(t),"messaging").getImmediate()}async function qO(t,e){return t=Te(t),m0(t,e)}function KO(t,e){return t=Te(t),WO(t,e)}$O();const GO={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyD3iY_LJZxOp1Y3i1Z_ZFWU0gk04TKfa-o",VITE_FIREBASE_APP_ID:"1:869546960167:web:19a41c46ef253617683502",VITE_FIREBASE_AUTH_DOMAIN:"logos-church-nepal.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"869546960167",VITE_FIREBASE_PROJECT_ID:"logos-church-nepal",VITE_FIREBASE_STORAGE_BUCKET:"logos-church-nepal.firebasestorage.app"};let To=null;const QO=()=>{if(To)return To;try{if(!GO)throw new Error("Vite environment variables (import.meta.env) are not available. The app cannot be configured.");const t={apiKey:"AIzaSyD3iY_LJZxOp1Y3i1Z_ZFWU0gk04TKfa-o",authDomain:"logos-church-nepal.firebaseapp.com",projectId:"logos-church-nepal",storageBucket:"logos-church-nepal.firebasestorage.app",messagingSenderId:"869546960167",appId:"1:869546960167:web:19a41c46ef253617683502"},e=Object.entries(t).filter(([,r])=>!r).map(([r])=>r);if(e.length>0)throw new Error(`The application is not configured correctly. Missing required environment variables: ${e.join(", ")}.`);const n=SE(t);To={auth:lN(n),db:Kx(n),storage:yD(n),messaging:HO(n),firebaseError:void 0}}catch(t){console.error("Firebase initialization failed:",t),To={firebaseError:`A critical error occurred while starting the application: ${t.message}`}}return To},g0=L.createContext(null),Kn=()=>{const t=L.useContext(g0);if(!t)throw new Error("useFirebase must be used within a FirebaseProvider");return t},y0=L.createContext(null),hm=()=>{const t=L.useContext(y0);if(!t)throw new Error("useToast must be used within a ToastProvider");return t},YO=({children:t})=>{const[e,n]=L.useState([]),r=L.useRef(0),s=L.useCallback((i,o,l)=>{const u=r.current++,c={id:u,title:i,body:o,onClick:l};n(f=>[c,...f]);try{new Audio("https://firebasestorage.googleapis.com/v0/b/logos-church-nepal.appspot.com/o/assets%2Fnotification.mp3?alt=media&token=24838a14-a901-469b-9a4f-56193796537b").play().catch(m=>console.warn("Audio playback failed:",m))}catch(f){console.error("Failed to create or play audio:",f)}setTimeout(()=>{n(f=>f.filter(m=>m.id!==u))},5e3)},[]);return h.jsxs(y0.Provider,{value:{showToast:s},children:[t,h.jsx(XO,{toasts:e})]})},XO=({toasts:t})=>{const[e,n]=L.useState([]);return L.useEffect(()=>{const r=[];return t.forEach(s=>{if(!e.includes(s.id)){const i=window.setTimeout(()=>{n(o=>[...o,s.id])},4500);r.push(i)}}),()=>r.forEach(clearTimeout)},[t,e]),Ki.createPortal(h.jsx("div",{className:"toast-container",children:t.map(r=>h.jsx("div",{className:`toast-item ${e.includes(r.id)?"exiting":""}`,onClick:r.onClick,children:h.jsxs("div",{className:"toast-content",children:[h.jsx("div",{className:"toast-title",children:r.title}),h.jsx("div",{className:"toast-body",children:r.body})]})},r.id))}),document.body)},Xt={name:"Logos Church, Nepal",logo:"/logos-church-new-logo.jpg",offeringDetails:{qrCodeUrl:"/logos-qr-code.png",bankName:"Global IME Bank",accountHolder:"YAM PRADHAN",accountNumber:"10507010042662"}},K_=[{verse:"यूहन्ना ३:१६",text:"किनभने परमेश्‍वरले संसारलाई यति साह्रो प्रेम गर्नुभयो, कि उहाँले आफ्‍ना एकमात्र पुत्र दिनुभयो, ताकि उहाँमाथि विश्‍वास गर्ने कोही पनि नाश नहोस्, तर त्‍यसले अनन्त जीवन पाओस्।"},{verse:"फिलिप्पी ४:१३",text:"जसले मलाई शक्ति दिनuहुन्छ, उहाँमा म सब कुरा गर्न सक्छु।"},{verse:"रोमी ८:२८",text:"हामी जान्दछौं, कि परमेश्‍वरलाई प्रेम गर्नेहरूका निम्ति, अर्थात् उहाँको अभिप्रायअनुसार बोलाइएकाहरूका निम्ति हरेक कुरामा परमेश्‍वरले भलाइ नै गर्नुहुन्छ।"},{verse:"यशैया ४१:१०",text:"नडरा, किनभने म तँसँग छु। निरुत्साहित नहो, किनभने म तेरो परमेश्‍वर हुँ। म तँलाई बलियो पार्नेछु, म तँलाई सहायता गर्नेछु, म तँलाई मेरो धार्मिकताको दाहिने हातले समाल्नेछु।"},{verse:"भजनसंग्रह २३:१",text:"परमप्रभु मेरो गोठालो हुनुहुन्छ, मलाई केही कुराको अभाव हुनेछैन।"},{verse:"यर्मिया २९:११",text:"किनभने मैले तिमीहरूका निम्ति बनाएका योजनाहरू म जान्दछछु,” परमप्रभु भन्नुहुन्छ, “तिमीहरूलाई हानि गर्ने होइन, तर उन्नति गर्ने योजनाहरू, तिमीहरूलाई आशा र भविष्य दिने योजनाहरू।"},{verse:"मत्ती ११:२८",text:"हे सबै थाकेका र बोझले दबिएका हो, मकहाँ आओ, र म तिमीहरूलाई विश्राम दिनेछु।"},{verse:"हितोपदेश ३:५-६",text:"तेरो सारा हृदयले परमप्रभुमाथि भरोसा राख्, र तेरो आफ्नै समझशक्तिमाथि भर नपर्। तेरा सबै मार्गहरूमा उहाँलाई स्वीकार गर्, र उहाँले तेरा मार्गहरू सोझो बनाउनुहुनेछ।"},{verse:"२ तिमोथी १:७",text:"किनभने परमेश्‍वरले हामीलाई डरको आत्मा दिनुभएको छैन, तर शक्ति, प्रेम र आत्मसंयमको आत्मा दिनुभएको छ।"},{verse:"यहोशू १:९",text:"के मैले तँलाई आज्ञa दिएको छैनँ र? बलियो र साहसी हो। नडरा, न त निरुत्साहित हो, किनभने तँ जहाँ गए पनि परमप्रभु तेरा परमेश्‍वर तँसँग हुनुहुन्छ।"},{verse:"भजनसंग्रह ४६:१",text:"परमेश्‍वर हाम्रा शरणस्थान र बल हुनुहुन्छ, सङ्कष्टमा तुरुन्तै पाइने सहायक।"},{verse:"मत्ती ६:३३",text:"तर पहिले उहाँको राज्य र उहाँको धार्मिकताको खोजी गर, र यी सबै कुरा तिमीहरूलाई थपिनेछन्।"},{verse:"गलाती ५:२२-২৩",text:"तर पवित्र आत्माको फलचाहिँ प्रेम, आनन्द, शान्ति, धैर्य, दया, भलाइ, विश्वस्तता, नम्रता र आत्मसंयम हो।"},{verse:"हिब्रू ११:१",text:"अब विश्वासचाहिँ आशा राखिएका कुराहरूको निश्चय र नदेखिएका कुराहरूको प्रमाण हो।"},{verse:"रोमी १०:९",text:"यदि तपाईंले आफ्नो मुखले “येशू नै प्रभु हुनुहुन्छ” भनी स्वीकार गर्नुभयो र परमेश्वरले उहाँलाई मरेकाहरूबाट जीवित पार्नुभयो भनी आफ्नो हृदयमा विश्वास गर्नुभयो भने तपाईंले उद्धार पाउनुहुनेछ।"},{verse:"भजनसंग्रह १:१-२",text:"धन्य हो त्यो मानिस, जो दुष्टहरूको सल्लाहमा हिँड्दैन, र पापीहरूको मार्गमा खडा हुँदैन, र गिल्ला गर्नेहरूको संगतमा बस्दैन। तर त्यसको खुशी परमप्रभुको व्यवस्थामा रहन्छ, र त्यसले दिनरात उहाँको व्यवस्थामा ध्यान गर्छ।"},{verse:"यशैया ४०:३१",text:"तर परमप्रभुमा आशा राख्नेहरूले नयाँ शक्ति प्राप्त गर्नेछन्। तिनीहरू गरुडझैं पखेटा लाएर माथि उड्नेछन्। तिनीहरू दगुरेर जानेछन् र थकित हुनेछैनन्, तिनीहरू हिँड्नेछन् र मूर्छित हुनेछैनन्।"},{verse:"१ कोरिन्थी १०:१३",text:"तिमीहरूमाथि आइपरेको कुनै पनि परीक्षा मानिसलाई साधारणतया आइपर्नेभन्दा बाहिरको छैन। र परमेश्वर विश्वासयोग्य हुनुहुन्छ। उहाँले तिमीहरूलाई तिमीहरूको शक्तिभन्दा बाहिरको परीक्षामा पर्न दिनुहुनेछैन।"},{verse:"एफिसी २:८-९",text:"किनभने अनुग्रहबाट विश्वासद्वारा तिमीहरूले उद्धार पाएका छौ—र यो तिमीहरू आफैबाट होइन, यो परमेश्वरको वरदान हो—कर्महरूद्वारा होइन, ताकि कसैले घमण्ड गर्न नपाओस्।"},{verse:"भजनसंग्रह ३७:४",text:"परमप्रभुमा आनन्दित हो, र उहाँले तेरो हृदयका इच्छाहरू पूरा गर्नुहुनेछ।"},{verse:"२ कोरिन्थी ५:१७",text:"यसकारण, यदि कोही ख्रीष्टमा छ भने, ऊ नयाँ सृष्टि हो। पुरानो बितिगएको छ, हेर, नयाँ आएको छ!"},{verse:"हितोपदेश २२:६",text:"बालकलाई त्यसको हिँड्नुपर्ने बाटोमा तालिम दे, र ऊ बूढो हुँदा पनि त्यसबाट तर्कनेछैन।"},{verse:"भजनसंग्रह ११९:१०५",text:"तपाईंको वचन मेरो खुट्टाको निम्ति बत्ती, र मेरो बाटोको निम्ति उज्यालो हो।"}],G_=["उत्पत्ति १, मत्ती १, एज्रा १, प्रेरित १","एज्रा २, प्रेरित ५, भजनसंग्रह १४९, भजनसंग्रh १५０"],ja=t=>t?(t.toDate?t.toDate():t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"",JO=(t,e)=>{if(!t||!e)return!1;const n=t.toDate(),r=e.toDate();return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()&&n.getDate()===r.getDate()},ZO=t=>t?t.toDate().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}):"",Rc=t=>{if(!t)return"Just now";const e=new Date,n=t.toDate(),r=Math.floor((e.getTime()-n.getTime())/1e3);return r<60?`${r}s ago`:r<3600?`${Math.floor(r/60)}m ago`:r<86400?`${Math.floor(r/3600)}h ago`:r<2592e3?`${Math.floor(r/86400)}d ago`:ja(t)};function kc(t){if(!t)return"L";const e=t.trim().split(" ");return e.length>1&&e[e.length-1]?`${e[0][0]}${e[e.length-1][0]}`.toUpperCase():t.trim().substring(0,1).toUpperCase()}function e2(t){if(!t)return"";const e=t.trim();return e?e.split(/\s+/)[0]||e:""}function t2(t){if(!t)return"#2563eb";const e=["#2563eb","#7c3aed","#db2777","#d97706","#059669","#0284c7","#9333ea","#ea580c","#0891b2","#c026d3"];let n=0;for(let r=0;r<t.length;r++)n=t.charCodeAt(r)+((n<<5)-n);return e[Math.abs(n)%e.length]}const Q_=(t,e=!1)=>{if(!t)return null;try{const n=/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|live\/)|youtu\.be\/)([\w-]{11})/,r=t.match(n);return r&&r[1]?`https://www.youtube.com/embed/${r[1]}?autoplay=1&playsinline=1${e?"&mute=1":""}`:/https?:\/\/(?:www\.|web\.)?facebook\.com\/(?:watch\/?\?v=|.+?\/videos\/|video\.php\?v=)/.test(t)?`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(t)}&show_text=0&autoplay=1`:null}catch(n){return console.error("Error parsing stream URL:",t,n),null}},zi=(t,e,n)=>new Promise((r,s)=>{const i=new FileReader;i.readAsDataURL(t),i.onload=o=>{var u;const l=new Image;l.src=(u=o.target)==null?void 0:u.result,l.onload=()=>{let c=l.width,f=l.height;c>f?c>e&&(f*=e/c,c=e):f>e&&(c*=e/f,f=e);const m=document.createElement("canvas");m.width=c,m.height=f;const g=m.getContext("2d");if(!g)return s(new Error("Could not get canvas context"));g.drawImage(l,0,0,c,f),m.toBlob(S=>{if(S){const k=new File([S],t.name,{type:"image/jpeg",lastModified:Date.now()});r(k)}else s(new Error("Canvas to Blob conversion failed"))},"image/jpeg",n)},l.onerror=c=>s(c)},i.onerror=o=>s(o)});class n2{constructor(){el(this,"db",null);el(this,"dbName","ImageCacheDB");el(this,"storeName","imageStore");this.init()}init(){return new Promise((e,n)=>{if(this.db){e();return}const r=indexedDB.open(this.dbName,1);r.onerror=()=>n("IndexedDB error: "+r.error),r.onsuccess=()=>{this.db=r.result,e()},r.onupgradeneeded=()=>{const s=r.result;s.objectStoreNames.contains(this.storeName)||s.createObjectStore(this.storeName)}})}async getDb(){return this.db||await this.init(),this.db}async storeImage(e,n){const r=await this.getDb();return new Promise((s,i)=>{const u=r.transaction(this.storeName,"readwrite").objectStore(this.storeName).put(n,e);u.onsuccess=()=>s(),u.onerror=()=>i("Failed to store image: "+u.error)})}async getImage(e){const n=await this.getDb();return new Promise((r,s)=>{const l=n.transaction(this.storeName,"readonly").objectStore(this.storeName).get(e);l.onsuccess=()=>r(l.result||null),l.onerror=()=>s("Failed to get image: "+l.error)})}async renameKey(e,n){const r=await this.getImage(e);r&&(await this.storeImage(n,r),(await this.getDb()).transaction(this.storeName,"readwrite").objectStore(this.storeName).delete(e))}}const rf=new n2,r2=(t,e)=>{const[n,r]=L.useState(t);return L.useEffect(()=>{let s=!0,i=null;return e?(async()=>{try{const l=await rf.getImage(e);s&&l?(i=URL.createObjectURL(l),r(i)):s&&r(t)}catch(l){console.warn("Cache lookup failed for",e,l),s&&r(t)}})():r(t),()=>{s=!1,i&&URL.revokeObjectURL(i)}},[t,e]),n},s2=({error:t})=>h.jsxs("div",{className:"error-container",children:[h.jsx("img",{src:Xt.logo,alt:"Church Logo",className:"error-logo"}),h.jsx("h2",{children:"Oops! Something went wrong."}),h.jsx("p",{children:"We're sorry, but the application encountered an unexpected error. Please try again later."}),h.jsx("pre",{children:t.message})]}),i2=()=>h.jsxs("div",{className:"splash-screen-container",children:[h.jsx("img",{src:Xt.logo,alt:"Church Logo",className:"splash-logo"}),h.jsx("div",{className:"splash-spinner"})]}),fm=({message:t="Loading..."})=>h.jsxs("div",{className:"loading-container",children:[h.jsx("div",{className:"spinner"}),h.jsx("span",{children:t})]}),Cc=({onClick:t,icon:e,"aria-label":n})=>h.jsx("button",{className:"fab",onClick:t,"aria-label":n,children:h.jsx("span",{className:"material-symbols-outlined",children:e})}),qn=({isOpen:t,onClose:e,children:n,position:r="center"})=>t?Ki.createPortal(h.jsx("div",{className:`modal-backdrop ${r==="bottom"?"modal-is-bottom":""}`,onClick:e,children:h.jsx("div",{className:"modal-content",onClick:s=>s.stopPropagation(),children:n})}),document.body):null,_0=({selectedFile:t,setSelectedFile:e,currentImageUrl:n,label:r="Add a photo",onImageRemove:s})=>{const[i,o]=L.useState(n),l=L.useRef(null);L.useEffect(()=>{if(t){const f=URL.createObjectURL(t);return o(f),()=>URL.revokeObjectURL(f)}else o(n)},[t,n]);const u=f=>{f.target.files&&f.target.files[0]&&e(f.target.files[0])},c=()=>{e(null),o(null),l.current&&(l.current.value=""),s==null||s()};return h.jsx("div",{className:"image-upload-container",children:i?h.jsxs("div",{className:"image-preview",children:[h.jsx("img",{src:i||"",alt:"Preview"}),h.jsx("button",{type:"button",onClick:c,"aria-label":"Remove image",children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})})]}):h.jsxs("label",{htmlFor:"image-upload",className:"image-upload-label",children:[h.jsx("span",{className:"material-symbols-outlined",children:"add_photo_alternate"}),h.jsx("span",{children:r}),h.jsx("input",{id:"image-upload",type:"file",accept:"image/*",onChange:u,ref:l,style:{display:"none"}})]})})},o2=()=>{const{auth:t}=Kn(),[e,n]=L.useState(""),[r,s]=L.useState(!1),[i,o]=L.useState(""),[l,u]=L.useState(""),[c,f]=L.useState(""),[m,g]=L.useState(!1),S=async P=>{P.preventDefault(),s(!0),n("");try{if(m){if(!c.trim()){n("Please enter your name.");return}const b=await WC(t,i,l);await Vh(b.user,{displayName:c})}else await HC(t,i,l)}catch(b){let A=b.message;b.code==="auth/weak-password"?A="Password should be at least 6 characters.":b.code==="auth/email-already-in-use"?A="This email is already in use. Please log in.":b.code==="auth/invalid-credential"&&(A="Incorrect email or password."),n(A)}finally{s(!1)}},k=async()=>{if(t){s(!0),n("");try{const P=new Mn;await gP(t,P)}catch(P){P.code!=="auth/popup-closed-by-user"&&n(P.message)}finally{s(!1)}}};return h.jsx("div",{className:"login-container",children:h.jsxs("div",{className:"login-box",children:[h.jsx("img",{src:Xt.logo,alt:"Church Logo",className:"login-logo"}),h.jsx("h2",{children:m?"Create Account":"Welcome Back"}),h.jsx("p",{children:Xt.name}),h.jsxs("form",{onSubmit:S,children:[m&&h.jsx("input",{type:"text",className:"login-input",placeholder:"Full Name",value:c,onChange:P=>f(P.target.value),required:!0}),h.jsx("input",{type:"email",className:"login-input",placeholder:"Email Address",value:i,onChange:P=>o(P.target.value),required:!0,autoComplete:"email"}),h.jsx("input",{type:"password",className:"login-input",placeholder:"Password",value:l,onChange:P=>u(P.target.value),required:!0,minLength:6,autoComplete:m?"new-password":"current-password"}),h.jsx("button",{type:"submit",className:"login-button",disabled:r,children:r?h.jsx("div",{className:"spinner"}):m?"Sign Up":"Log In"}),h.jsx("button",{type:"button",onClick:()=>{g(!m),n("")},className:"auth-toggle-link",children:m?"Already have an account? Log In":"Don't have an account? Sign Up"})]}),h.jsx("div",{className:"login-divider",children:h.jsx("span",{children:"OR"})}),h.jsxs("button",{onClick:k,className:"google-signin-button",disabled:r,children:[h.jsxs("svg",{viewBox:"0 0 48 48",width:"24px",height:"24px",children:[h.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),h.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),h.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),h.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),h.jsx("path",{fill:"none",d:"M0 0h48v48H0z"})]}),h.jsx("span",{children:"Sign in with Google"})]}),h.jsxs("div",{className:"login-compliance-notice",style:{marginTop:"20px",fontSize:"11px",color:"#64748b",textAlign:"center",lineHeight:"1.4"},children:["By signing up or logging in, you agree to our ",h.jsx("br",{}),h.jsx("a",{href:"/terms.html",target:"_blank",rel:"noopener noreferrer",style:{color:"#2563eb",textDecoration:"underline"},children:"Terms of Use"})," and ",h.jsx("a",{href:"/privacy.html",target:"_blank",rel:"noopener noreferrer",style:{color:"#2563eb",textDecoration:"underline"},children:"Privacy Policy"}),"."]}),e&&h.jsx("p",{className:"login-error",children:e})]})})},a2=({currentUser:t,liveService:e,pastServices:n})=>{const{db:r}=Kn(),[s,i]=L.useState(!1),[o,l]=L.useState(!1),[u,c]=L.useState({title:"",youtubeUrl:""}),[f,m]=L.useState(null),g=e!=null&&e.streamUrl?Q_(e.streamUrl):null,S=f!=null&&f.youtubeUrl?Q_(f.youtubeUrl,!0):null,k=async y=>{if(y.preventDefault(),!(!r||!u.title||!u.youtubeUrl))try{await Ks(et(r,"pastWorshipServices"),{...u,createdAt:Vn()}),c({title:"",youtubeUrl:""}),l(!1)}catch(E){console.error("Error adding past worship service: ",E)}},P=async y=>{if(!(!r||!window.confirm("Are you sure you want to delete this past service?")))try{await es(rt(r,"pastWorshipServices",y))}catch(E){console.error("Error deleting past service:",E)}},b=y=>{try{const E=y.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/),x=E?E[1]:null;return x?`https://img.youtube.com/vi/${x}/hqdefault.jpg`:"/placeholder.jpg"}catch{return"/placeholder.jpg"}},A=()=>e&&g?h.jsxs("div",{className:"card live-worship-card",children:[h.jsx("div",{className:"live-badge",children:"LIVE"}),h.jsx("div",{className:"iframe-container",children:h.jsx("iframe",{src:g,allow:"autoplay; encrypted-media",allowFullScreen:!0,title:"Live Worship Stream"})}),h.jsx("h4",{children:e.title})]}):f&&S?h.jsxs("div",{className:"card live-worship-card",children:[h.jsx("div",{className:"iframe-container",children:h.jsx("iframe",{src:S,allow:"autoplay; encrypted-media",allowFullScreen:!0,title:f.title})}),h.jsxs("div",{className:"playing-past-service-info",children:[h.jsx("h4",{children:f.title}),h.jsxs("button",{className:"close-player-button",onClick:()=>m(null),children:[h.jsx("span",{className:"material-symbols-outlined",children:"close"})," Player बन्द गर्नुहोस्"]})]})]}):h.jsxs("div",{className:"card no-live-service",children:[h.jsx("span",{className:"material-symbols-outlined",children:"church"}),h.jsx("p",{children:"अहिले कुनै प्रत्यक्ष आरधना छैन।"})]});return h.jsxs("div",{className:"page-content",children:[h.jsx("h2",{children:"आरधना"}),A(),h.jsx("div",{className:"worship-actions",children:h.jsxs("button",{className:"action-button",onClick:()=>i(!0),children:[h.jsx("span",{className:"material-symbols-outlined",children:"volunteer_activism"}),"अनलाइन भेटी"]})}),h.jsxs("div",{className:"past-worship-section",children:[h.jsx("h3",{children:"विगतका आरधना"}),t.roles.includes("admin")&&h.jsxs("button",{className:"action-button add-past-worship-button",onClick:()=>l(!0),children:[h.jsx("span",{className:"material-symbols-outlined",children:"add"})," विगतका आरधना थप्नुहोस्।"]}),h.jsx("div",{className:"past-worship-list",children:n.map(y=>h.jsxs("div",{className:"card past-service-card",onClick:()=>m(y),children:[h.jsx("img",{src:b(y.youtubeUrl),alt:y.title,className:"past-service-thumbnail",loading:"lazy"}),h.jsx("div",{className:"play-icon-overlay",children:h.jsx("span",{className:"material-symbols-outlined",children:"play_circle"})}),h.jsx("p",{className:"past-service-title",children:y.title}),t.roles.includes("admin")&&h.jsx("button",{className:"delete-button past-service-delete-button",onClick:E=>{E.stopPropagation(),P(y.id)},"aria-label":"Delete past service",children:h.jsx("span",{className:"material-symbols-outlined",children:"delete"})})]},y.id))})]}),h.jsx(qn,{isOpen:s,onClose:()=>i(!1),children:h.jsxs("div",{className:"offering-modal-content",children:[h.jsx("h3",{children:"Online Offering"}),h.jsx("img",{src:Xt.offeringDetails.qrCodeUrl,alt:"QR Code for offering",className:"qr-code-img"}),h.jsxs("div",{className:"offering-details",children:[h.jsxs("p",{children:[h.jsx("strong",{children:"Bank:"})," ",Xt.offeringDetails.bankName]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Account Holder:"})," ",Xt.offeringDetails.accountHolder]}),h.jsxs("div",{className:"account-number-container",children:[h.jsxs("p",{children:[h.jsx("strong",{children:"Account Number:"})," ",Xt.offeringDetails.accountNumber]}),h.jsxs("button",{className:"copy-button",onClick:()=>{navigator.clipboard.writeText(Xt.offeringDetails.accountNumber),alert("Account number copied!")},children:[h.jsx("span",{className:"material-symbols-outlined",children:"content_copy"})," Copy"]})]})]})]})}),h.jsx(qn,{isOpen:o,onClose:()=>l(!1),children:h.jsxs("form",{className:"modal-form",onSubmit:k,children:[h.jsx("h3",{children:"Add Past Service"}),h.jsx("input",{type:"text",placeholder:"Service Title",value:u.title,onChange:y=>c({...u,title:y.target.value}),required:!0}),h.jsx("input",{type:"url",placeholder:"YouTube URL",value:u.youtubeUrl,onChange:y=>c({...u,youtubeUrl:y.target.value}),required:!0}),h.jsxs("div",{className:"form-actions",children:[h.jsx("button",{type:"submit",className:"action-button",children:"Save"}),h.jsx("button",{type:"button",className:"action-button secondary",onClick:()=>l(!1),children:"Cancel"})]})]})})]})},l2=()=>{const[t,e]=L.useState(null),n=new Date().getDate();L.useEffect(()=>{const i=Math.floor((new Date().getTime()-new Date(new Date().getFullYear(),0,0).getTime())/864e5);e(K_[i%K_.length])},[]);const s=G_[(()=>{const i=new Date,o=new Date(i.getFullYear(),0,0),l=i.getTime()-o.getTime()+(o.getTimezoneOffset()-i.getTimezoneOffset())*60*1e3,u=1e3*60*60*24;return Math.floor(l/u)})()-1]||G_[0];return h.jsxs("div",{className:"page-content",children:[h.jsx("h2",{children:"बाइबल"}),h.jsxs("div",{className:"list-container bible-card-list",children:[t&&h.jsxs("div",{className:"card verse-card",children:[h.jsxs("p",{className:"verse-text",children:['"',t.text,'"']}),h.jsxs("p",{className:"verse-ref",children:["- ",t.verse]})]}),h.jsxs("div",{className:"card bible-card",children:[h.jsx("h3",{children:"आजको बाइबल पढ्ने योजना"}),h.jsx("p",{children:s})]}),h.jsxs("div",{className:"card bible-card",children:[h.jsx("h3",{children:"आजको हितोपदेश"}),h.jsxs("p",{children:["आज ",n," तारिख हो, हितोपदेश ",n," अध्याय पढ्नुहोस्।"]})]})]})]})},Y_=({currentUser:t,news:e,setNews:n})=>{const{db:r,storage:s}=Kn(),[i,o]=L.useState(!1),[l,u]=L.useState(null),c=(P=null)=>{u(P),o(!0)},f=()=>{u(null),o(!1)},m=(P,b,A,y)=>{if(!r||!s||!t)return;const E=crypto.randomUUID(),x={id:E,tempId:E,title:P,content:b,authorId:t.id,authorName:t.name,createdAt:Le.now(),status:"uploading",image:l==null?void 0:l.image,thumbnailUrl:l==null?void 0:l.thumbnailUrl,localImagePreview:A?URL.createObjectURL(A):y?null:(l==null?void 0:l.thumbnailUrl)||(l==null?void 0:l.image)};n(l?M=>M.map(T=>T.id===l.id?{...x,id:l.id}:T):M=>[x,...M]),(async()=>{try{const M={title:P,content:b,authorId:t.id,authorName:t.name};if((y||A)&&(l!=null&&l.imagePath)&&(await tn(Ye(s,l.imagePath)).catch(T=>console.warn("Old image delete failed",T)),l.thumbnailPath&&await tn(Ye(s,l.thumbnailPath)).catch(T=>console.warn("Old thumb delete failed",T))),A){const[T,v]=await Promise.all([zi(A,1280,.85),zi(A,400,.7)]),w=Date.now(),I=A.name.replace(/[^a-zA-Z0-9.]/g,"_");M.imagePath=`news/${w}_${I}`,M.thumbnailPath=`news/${w}_thumb_${I}`;const C=Ye(s,M.imagePath),N=Ye(s,M.thumbnailPath);await Promise.all([Kr(C,T),Kr(N,v)]);const[R,le]=await Promise.all([Gr(C),Gr(N)]);M.image=R,M.thumbnailUrl=le}else y&&(M.image=null,M.thumbnailUrl=null,M.imagePath=null,M.thumbnailPath=null);l?await Wn(rt(r,"news",l.id),M):await Ks(et(r,"news"),{...M,createdAt:Vn()})}catch(M){console.error("❌ Failed to save news. Error Code:",M.code,"Message:",M.message),n(T=>T.map(v=>v.tempId===E?{...v,status:"failed"}:v))}})()},g=async P=>{if(!(!r||!s)&&window.confirm(`Are you sure you want to delete "${P.title}"?`))try{P.imagePath&&await tn(Ye(s,P.imagePath)).catch(b=>console.warn("Image delete failed",b)),P.thumbnailPath&&await tn(Ye(s,P.thumbnailPath)).catch(b=>console.warn("Thumbnail delete failed",b)),await es(rt(r,"news",P.id))}catch(b){console.error("Error deleting news item: ",b)}},S=t.roles.includes("admin")||t.roles.includes("news_contributor"),k=P=>t.id===P.authorId||t.roles.includes("admin");return h.jsxs("div",{className:"page-content",children:[h.jsx("h2",{children:"सुचना"}),h.jsx("div",{className:"list-container",children:e.map(P=>h.jsxs("div",{className:"card news-item",children:[P.status&&h.jsx("div",{className:"upload-status-overlay",children:P.status==="uploading"?h.jsx("div",{className:"spinner"}):h.jsx("span",{children:"⚠"})}),(P.localImagePreview||P.thumbnailUrl||P.image)&&h.jsx("img",{src:P.localImagePreview||P.thumbnailUrl||P.image||"",alt:P.title,className:"news-image",loading:"lazy"}),h.jsxs("div",{className:"news-content",children:[h.jsxs("div",{className:"news-header",children:[h.jsx("h3",{children:P.title}),k(P)&&h.jsxs("div",{className:"item-actions-header",children:[h.jsx("button",{onClick:()=>c(P),className:"edit-button","aria-label":"Edit news",children:h.jsx("span",{className:"material-symbols-outlined",children:"edit"})}),h.jsx("button",{onClick:()=>g(P),className:"delete-button","aria-label":"Delete news",children:h.jsx("span",{className:"material-symbols-outlined",children:"delete"})})]})]}),h.jsxs("p",{className:"news-meta",children:["By ",P.authorName," on ",ja(P.createdAt)]}),h.jsx("p",{children:P.content})]})]},P.tempId||P.id))}),S&&h.jsx(Cc,{onClick:()=>c(),icon:"feed","aria-label":"Add news"}),h.jsx(u2,{isOpen:i,onClose:f,onSave:m,newsItem:l})]})},u2=({isOpen:t,onClose:e,onSave:n,newsItem:r})=>{const[s,i]=L.useState(""),[o,l]=L.useState(""),[u,c]=L.useState(null),[f,m]=L.useState(!1);L.useEffect(()=>{t&&(i((r==null?void 0:r.title)||""),l((r==null?void 0:r.content)||""),c(null),m(!1))},[t,r]);const g=S=>{S.preventDefault(),n(s,o,u,f),e()};return h.jsx(qn,{isOpen:t,onClose:e,children:h.jsxs("form",{className:"modal-form",onSubmit:g,children:[h.jsx("button",{type:"button",className:"modal-close-button",onClick:e,"aria-label":"Close",children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})}),h.jsx("h3",{children:r?"सुचना सम्पादन गर्नुहोस्":"सुचना थप्नुहोस्।"}),h.jsx("input",{type:"text",placeholder:"शीर्षक",value:s,onChange:S=>i(S.target.value),required:!0}),h.jsx("textarea",{placeholder:"सामग्री",rows:5,value:o,onChange:S=>l(S.target.value),required:!0}),h.jsx(_0,{selectedFile:u,setSelectedFile:c,currentImageUrl:(r==null?void 0:r.thumbnailUrl)||(r==null?void 0:r.image),label:"फोटो थप्नुहोस्।(यदि तपाईं चाहनुहुन्छ भने)",onImageRemove:()=>m(!0)}),h.jsx("div",{className:"form-actions",children:h.jsx("button",{type:"submit",className:"action-button",children:"सेभ गर्नुहोस्"})})]})})},c2=({currentUser:t,podcasts:e,setPodcasts:n})=>{const{db:r,storage:s}=Kn(),[i,o]=L.useState(!1),l=(m,g)=>{if(!r||!s||!t)return;const S=crypto.randomUUID(),k={id:S,tempId:S,title:m,authorId:t.id,authorName:t.name,audioUrl:"",createdAt:Le.now(),status:"uploading",localAudioUrl:URL.createObjectURL(g)};n(b=>[k,...b]),(async()=>{try{const b=Ye(s,`podcasts/${Date.now()}_${g.name}`);await Kr(b,g);const A=await Gr(b);await Ks(et(r,"podcasts"),{title:m,audioUrl:A,authorId:t.id,authorName:t.name,createdAt:Vn()})}catch(b){console.error("❌ Failed to save podcast. Error Code:",b.code,"Message:",b.message),n(A=>A.map(y=>y.tempId===S?{...y,status:"failed"}:y))}})()},u=async m=>{if(!(!r||!s)&&window.confirm(`Are you sure you want to delete "${m.title}"?`))try{const g=Ye(s,m.audioUrl);await tn(g),await es(rt(r,"podcasts",m.id))}catch(g){console.error("Error deleting podcast: ",g)}},c=t.roles.includes("admin")||t.roles.includes("podcast_contributor"),f=m=>t.id===m.authorId||t.roles.includes("admin");return h.jsxs("div",{className:"page-content",children:[h.jsx("h2",{children:"Podcast"}),h.jsx("div",{className:"list-container",children:e.map(m=>h.jsxs("div",{className:"card podcast-item",children:[m.status&&h.jsx("div",{className:"upload-status-overlay",children:m.status==="uploading"?h.jsx("div",{className:"spinner"}):h.jsx("span",{children:"⚠"})}),h.jsxs("div",{className:"podcast-info",children:[h.jsxs("div",{children:[h.jsx("p",{className:"podcast-title",children:m.title}),h.jsxs("p",{className:"podcast-author",children:["By ",m.authorName," - ",ja(m.createdAt)]})]}),f(m)&&h.jsx("button",{onClick:()=>u(m),className:"delete-button","aria-label":"Delete podcast",children:h.jsx("span",{className:"material-symbols-outlined",children:"delete"})})]}),h.jsx("audio",{controls:!0,className:"podcast-player",src:m.localAudioUrl||m.audioUrl,children:"Your browser does not support the audio element."})]},m.tempId||m.id))}),c&&h.jsx(Cc,{onClick:()=>o(!0),icon:"podcasts","aria-label":"Add podcast"}),h.jsx(d2,{isOpen:i,onClose:()=>o(!1),onSave:l})]})},d2=({isOpen:t,onClose:e,onSave:n})=>{const[r,s]=L.useState(""),[i,o]=L.useState(null),[l,u]=L.useState("upload"),[c,f]=L.useState(!1),[m,g]=L.useState(0),[S,k]=L.useState(null),[P,b]=L.useState(null),A=L.useRef(null),y=L.useRef(null),E=L.useRef(null);L.useEffect(()=>{if(S){const w=URL.createObjectURL(S);return b(w),()=>URL.revokeObjectURL(w)}b(null)},[S]);const x=async()=>{try{const w=await navigator.mediaDevices.getUserMedia({audio:!0});y.current=w,A.current=new MediaRecorder(w);const I=[];A.current.ondataavailable=C=>{I.push(C.data)},A.current.onstop=()=>{const C=new Blob(I,{type:"audio/webm"});k(C);const N=new File([C],"recording.webm",{type:"audio/webm"});o(N),y.current&&y.current.getTracks().forEach(R=>R.stop())},A.current.start(),f(!0),E.current=window.setInterval(()=>{g(C=>C+1)},1e3)}catch(w){console.error("Error starting recording:",w),alert("Could not start microphone. Please check browser or phone settings for mic permission for this site.")}},V=()=>{A.current&&(A.current.stop(),f(!1),E.current&&clearInterval(E.current),g(0))},M=()=>{k(null),o(null),g(0)},T=w=>{if(w.preventDefault(),!i||!r.trim()){alert("Please provide a title and select or record an audio file.");return}n(r,i),s(""),o(null),M(),e()},v=w=>{const I=Math.floor(w/60).toString().padStart(2,"0"),C=(w%60).toString().padStart(2,"0");return`${I}:${C}`};return h.jsx(qn,{isOpen:t,onClose:e,children:h.jsxs("form",{className:"modal-form",onSubmit:T,children:[h.jsx("button",{type:"button",className:"modal-close-button",onClick:e,"aria-label":"Close",children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})}),h.jsx("h3",{children:"Add Podcast"}),h.jsxs("div",{className:"add-podcast-tabs",children:[h.jsx("button",{type:"button",className:l==="upload"?"active":"",onClick:()=>u("upload"),children:"Upload"}),h.jsx("button",{type:"button",className:l==="record"?"active":"",onClick:()=>u("record"),children:"Record"})]}),h.jsx("input",{type:"text",placeholder:"Podcast Title",value:r,onChange:w=>s(w.target.value),required:!0}),l==="upload"&&h.jsxs("label",{htmlFor:"audio-upload",className:"action-button secondary custom-file-input",children:[h.jsx("span",{className:"material-symbols-outlined",children:"upload_file"}),h.jsx("span",{children:i?i.name:"Choose Audio File"}),h.jsx("input",{id:"audio-upload",type:"file",accept:"audio/*",onChange:w=>w.target.files&&o(w.target.files[0]),style:{display:"none"}})]}),l==="record"&&h.jsxs("div",{className:"record-section",children:[h.jsx("p",{className:"permission-helper-text",children:"Microphone permission is required to start recording. A prompt will appear when you press the 'Start Recording' button."}),S?h.jsxs("div",{className:"recording-preview",children:[h.jsx("p",{children:"Recording complete:"}),P&&h.jsx("audio",{controls:!0,src:P}),h.jsx("button",{type:"button",className:"action-button secondary",onClick:M,children:"Record Again"})]}):h.jsxs("button",{type:"button",className:`record-button ${c?"recording":""}`,onClick:c?V:x,children:[h.jsx("span",{className:"material-symbols-outlined",children:c?"stop_circle":"mic"}),c?h.jsx("span",{className:"timer",children:v(m)}):"Start Recording"]})]}),h.jsx("div",{className:"form-actions",children:h.jsx("button",{type:"submit",className:"action-button",disabled:!i,children:"Save Podcast"})})]})})},h2=({currentUser:t,requests:e,setRequests:n})=>{const{db:r,storage:s}=Kn(),[i,o]=L.useState(null),[l,u]=L.useState(!1),[c,f]=L.useState(null),m=async y=>{if(!r||y.status)return;const E=rt(r,"prayerRequests",y.id),x=y.prayedBy.includes(t.id);await Wn(E,{prayedBy:x?ab(t.id):ef(t.id)})},g=(y=null)=>{f(y),u(!0)},S=()=>{u(!1),f(null)},k=(y,E,x,V)=>{if(!r||!s||!t)return;const M=crypto.randomUUID(),T={id:M,tempId:M,title:y,content:E,authorId:t.id,authorName:t.name,prayedBy:(c==null?void 0:c.prayedBy)||[],commentCount:(c==null?void 0:c.commentCount)||0,createdAt:Le.now(),status:"uploading",image:c==null?void 0:c.image,thumbnailUrl:c==null?void 0:c.thumbnailUrl,localImagePreview:x?URL.createObjectURL(x):V?null:(c==null?void 0:c.thumbnailUrl)||(c==null?void 0:c.image)};n(c?w=>w.map(I=>I.id===c.id?{...T,id:c.id}:I):w=>[T,...w]),(async()=>{try{const w={title:y,content:E,authorId:t.id,authorName:t.name};if((V||x)&&(c!=null&&c.imagePath)&&(await tn(Ye(s,c.imagePath)).catch(I=>console.warn("Old image delete failed",I)),c.thumbnailPath&&await tn(Ye(s,c.thumbnailPath)).catch(I=>console.warn("Old thumb delete failed",I))),x){const[I,C]=await Promise.all([zi(x,1280,.85),zi(x,400,.7)]),N=Date.now(),R=x.name.replace(/[^a-zA-Z0-9.]/g,"_");w.imagePath=`prayers/${N}_${R}`,w.thumbnailPath=`prayers/${N}_thumb_${R}`;const le=Ye(s,w.imagePath),Pe=Ye(s,w.thumbnailPath);await Promise.all([Kr(le,I),Kr(Pe,C)]);const[st,Dt]=await Promise.all([Gr(le),Gr(Pe)]);w.image=st,w.thumbnailUrl=Dt}else V&&(w.image=null,w.thumbnailUrl=null,w.imagePath=null,w.thumbnailPath=null);c?await Wn(rt(r,"prayerRequests",c.id),w):await Ks(et(r,"prayerRequests"),{...w,prayedBy:[],createdAt:Vn()})}catch(w){console.error("❌ Failed to save prayer request. Error Code:",w.code,"Message:",w.message),n(I=>I.map(C=>C.tempId===M?{...C,status:"failed"}:C))}})()},P=async y=>{if(!(!r||!s||y.status)&&window.confirm("Are you sure you want to delete this prayer request?"))try{y.imagePath&&await tn(Ye(s,y.imagePath)).catch(E=>console.warn("Image delete failed",E)),y.thumbnailPath&&await tn(Ye(s,y.thumbnailPath)).catch(E=>console.warn("Thumbnail delete failed",E)),await es(rt(r,"prayerRequests",y.id)),o(null)}catch(E){console.error("Error deleting prayer request: ",E)}},b=y=>{y.status||(f(y),o(y))},A=y=>t.id===y.authorId||t.roles.includes("admin");return h.jsxs("div",{className:"page-content",children:[h.jsx("h2",{children:"प्रार्थना"}),h.jsx("div",{className:"list-container",children:e.map(y=>h.jsxs("div",{className:"card prayer-item",onClick:()=>b(y),children:[y.status&&h.jsx("div",{className:"upload-status-overlay",children:y.status==="uploading"?h.jsx("div",{className:"spinner"}):h.jsx("span",{children:"⚠"})}),(y.localImagePreview||y.thumbnailUrl||y.image)&&h.jsx("img",{src:y.localImagePreview||y.thumbnailUrl||y.image||"",alt:y.title,className:"prayer-image",loading:"lazy"}),h.jsxs("div",{className:"prayer-body",children:[h.jsx("h4",{className:"prayer-title",children:y.title}),y.content&&h.jsx("p",{className:"prayer-content",children:y.content})]}),h.jsxs("div",{className:"prayer-meta",children:[h.jsxs("span",{children:["By ",y.authorName," - ",Rc(y.createdAt)]}),h.jsxs("div",{className:"prayer-actions",children:[h.jsxs("button",{className:`prayer-action-button ${y.prayedBy.includes(t.id)?"prayed":""}`,onClick:E=>{E.stopPropagation(),m(y)},children:[h.jsx("span",{className:"material-symbols-outlined",children:"volunteer_activism"}),h.jsx("span",{children:y.prayedBy.length})]}),h.jsxs("div",{className:"prayer-action-button",children:[h.jsx("span",{className:"material-symbols-outlined",children:"comment"}),h.jsx("span",{children:y.commentCount||0})]})]})]}),A(y)&&!y.status&&h.jsxs("div",{className:"item-actions-footer",children:[h.jsx("button",{onClick:E=>{E.stopPropagation(),g(y)},className:"edit-button","aria-label":"Edit prayer request",children:h.jsx("span",{className:"material-symbols-outlined",children:"edit"})}),h.jsx("button",{onClick:E=>{E.stopPropagation(),P(y)},className:"delete-button","aria-label":"Delete prayer request",children:h.jsx("span",{className:"material-symbols-outlined",children:"delete"})})]})]},y.tempId||y.id))}),h.jsx(Cc,{onClick:()=>g(),icon:"volunteer_activism","aria-label":"Add prayer request"}),i&&h.jsx(p2,{request:i,onClose:()=>o(null),currentUser:t}),h.jsx(f2,{isOpen:l,onClose:S,onSave:k,request:c})]})},f2=({isOpen:t,onClose:e,onSave:n,request:r})=>{const[s,i]=L.useState(""),[o,l]=L.useState(""),[u,c]=L.useState(null),[f,m]=L.useState(!1);L.useEffect(()=>{t&&(i((r==null?void 0:r.title)||""),l((r==null?void 0:r.content)||""),c(null),m(!1))},[t,r]);const g=S=>{S.preventDefault(),n(s,o,u,f),e()};return h.jsx(qn,{isOpen:t,onClose:e,children:h.jsxs("form",{className:"modal-form",onSubmit:g,children:[h.jsx("button",{type:"button",className:"modal-close-button",onClick:e,"aria-label":"Close",children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})}),h.jsx("h3",{children:r?"अनुरोध सम्पादन गर्नुहोस्":"प्रार्थना अनुरोध"}),h.jsx("input",{type:"text",placeholder:"शीर्षक",value:s,onChange:S=>i(S.target.value),required:!0}),h.jsx("textarea",{placeholder:"हामीले तपाईंको लागि के प्रार्थना गर्नुपर्छ? (वैकल्पिक)",rows:5,value:o,onChange:S=>l(S.target.value)}),h.jsx(_0,{selectedFile:u,setSelectedFile:c,currentImageUrl:(r==null?void 0:r.thumbnailUrl)||(r==null?void 0:r.image),label:"फोटो थप्नुहोस्।(यदि तपाईं चाहनुहुन्छ भने)",onImageRemove:()=>m(!0)}),h.jsx("button",{type:"submit",className:"action-button",children:"अनुरोध पठाउनुहोस्।"})]})})},p2=({request:t,onClose:e,currentUser:n})=>{const{db:r}=Kn(),[s,i]=L.useState(""),[o,l]=L.useState([]),[u,c]=L.useState(!1);L.useEffect(()=>{if(!r||!(t!=null&&t.id))return;const m=et(r,"prayerRequests",t.id,"comments"),g=ln(m,pi("createdAt","asc")),S=Sn(g,k=>{const P=k.docs.map(b=>({id:b.id,...b.data()}));l(P)});return()=>S()},[r,t==null?void 0:t.id]);const f=async m=>{if(m.preventDefault(),!(!r||!s.trim()||!t||!n||u)){c(!0);try{const g=rt(r,"prayerRequests",t.id),S=et(g,"comments");await Promise.all([Ks(S,{authorId:n.id,authorName:n.name||"Unknown User",authorAvatar:n.avatar||"",content:s,createdAt:Vn()}),Wn(g,{commentCount:lb(1)})]),i(""),e()}catch(g){console.error("Error adding comment: ",g),alert("Failed to post comment.")}finally{c(!1)}}};return t?h.jsx(qn,{isOpen:!0,onClose:e,position:"bottom",children:h.jsxs("div",{children:[h.jsx("button",{type:"button",className:"modal-close-button",onClick:e,"aria-label":"Close",children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})}),h.jsx("div",{className:"prayer-details-header",children:h.jsx("h3",{children:t.title})}),h.jsxs("p",{className:"prayer-author",children:["By ",t.authorName," - ",ja(t.createdAt)]}),t.image&&h.jsx("img",{src:t.image,alt:t.title,style:{width:"100%",borderRadius:"8px",marginBottom:"16px"}}),t.content&&h.jsx("p",{className:"prayer-main-content",children:t.content}),h.jsxs("div",{className:"prayer-comments-section",children:[h.jsxs("h4",{children:["Comments (",o.length,")"]}),h.jsx("div",{className:"prayer-comment-list",children:o.length>0?o.map(m=>h.jsxs("div",{className:"comment-item",children:[h.jsx("strong",{children:m.authorName}),h.jsx("p",{children:m.content}),h.jsx("span",{className:"comment-timestamp",children:Rc(m.createdAt)})]},m.id)):h.jsx("p",{className:"no-comments",children:"No comments yet."})}),h.jsxs("form",{className:"comment-form",onSubmit:f,children:[h.jsx("input",{type:"text",placeholder:"Add a comment...",value:s,onChange:m=>i(m.target.value)}),h.jsx("button",{type:"submit","aria-label":"Send comment",disabled:u||!s.trim(),children:u?h.jsx("div",{className:"spinner-small"}):h.jsx("span",{className:"material-symbols-outlined",children:"send"})})]})]})]})}):null},m2=({currentUser:t,usersMap:e,onChatSelect:n,onCreateChat:r})=>{const{db:s,storage:i}=Kn(),[o,l]=L.useState([]),[u,c]=L.useState(!0),[f,m]=L.useState(!1),[g,S]=L.useState(null),k=Array.from(e.values());L.useEffect(()=>{if(!s||!(t!=null&&t.id))return;c(!0);const E=ln(et(s,"chats"),Hl("participantIds","array-contains",t.id)),x=Sn(E,V=>{const M=V.docs.map(T=>({id:T.id,...T.data()}));M.sort((T,v)=>{var w,I;return(((w=v.lastActivity)==null?void 0:w.toMillis())||0)-(((I=T.lastActivity)==null?void 0:I.toMillis())||0)}),l(M),c(!1)},V=>{console.error("Error fetching chats: ",V),c(!1)});return()=>x()},[s,t==null?void 0:t.id]);const P=(E,x)=>{const V=E.participantIds.length>2;if(V&&E.name)return{name:E.name,avatar:""};if(V){const T=E.participantIds.filter(w=>w!==x).map(w=>{var I,C,N,R,le;return((N=(C=(I=E.participants)==null?void 0:I[w])==null?void 0:C.name)==null?void 0:N.split(" ")[0])||((le=(R=e.get(w))==null?void 0:R.name)==null?void 0:le.split(" ")[0])||""});return{name:T.filter(Boolean).slice(0,2).join(", ")+(T.length>2?"...":""),avatar:""}}const M=E.participantIds.find(T=>T!==x);if(M){if(E.participants&&E.participants[M]&&E.participants[M].name)return E.participants[M];const T=e.get(M);if(T)return{name:T.name,avatar:T.avatar}}return{name:"Unknown User",avatar:""}},b=async E=>{const x=await r(E);x&&n(x),m(!1)},A=async E=>{if(!(!s||!i))try{const x=ln(et(s,"chats",E.id,"messages")),V=await CI(x),M=[];V.forEach(T=>{const v=T.data();v.media&&v.media.forEach(w=>{w.path&&M.push(tn(Ye(i,w.path)).catch(I=>console.error("Failed to delete media:",I))),w.thumbnailPath&&M.push(tn(Ye(i,w.thumbnailPath)).catch(I=>console.error("Failed to delete thumbnail:",I)))}),M.push(es(rt(s,"chats",E.id,"messages",T.id)))}),await Promise.all(M),await es(rt(s,"chats",E.id)),S(null)}catch(x){console.error("Error deleting chat:",x),alert("Failed to delete chat. Please try again."),S(null)}},y=E=>{if(!E.lastMessage||!E.lastMessage.content)return"No messages yet";const x=E.lastMessage.senderId===t.id?"You: ":"",V=E.lastMessage.content;return V==="📷 Photo"||V==="📹 Video"||V==="📷 Media"?`${x}${V}`:`${x}${V}`};return h.jsxs("div",{className:"page-content",children:[h.jsx("h2",{children:"संगतिहरु"}),h.jsx("div",{className:"list-container",children:u?h.jsx(fm,{message:"Loading chats..."}):o.length>0?o.map(E=>{const x=P(E,t.id),V=E.lastRead&&E.lastMessage&&E.lastMessage.senderId!==t.id&&(!E.lastRead[t.id]||E.lastRead[t.id]<E.lastMessage.createdAt);return h.jsxs("div",{className:"list-item chat-item",children:[h.jsxs("div",{className:"chat-content-wrapper",onClick:()=>n(E.id),children:[h.jsx("div",{className:"chat-avatar",children:kc(x.name)}),h.jsxs("div",{className:"chat-info",children:[h.jsx("span",{className:"chat-name",children:x.name}),h.jsx("p",{className:"chat-last-message",children:y(E)})]}),h.jsxs("div",{className:"chat-meta",children:[h.jsx("span",{children:E.lastActivity?Rc(E.lastActivity):""}),V&&h.jsx("div",{className:"unread-dot"})]})]}),h.jsx("button",{className:"chat-delete-button",onClick:()=>S(E),"aria-label":`Delete chat with ${x.name}`,children:h.jsx("span",{className:"material-symbols-outlined",children:"delete"})})]},E.id)}):h.jsxs("div",{className:"card",style:{textAlign:"center",padding:"32px",color:"#666"},children:[h.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"48px",color:"#ccc",marginBottom:"16px"},children:"chat_bubble"}),h.jsx("p",{children:"No conversations yet."}),h.jsx("p",{style:{fontSize:"var(--font-size-sm)",marginTop:"8px"},children:"Tap the button below to start a new chat."})]})}),h.jsx(Cc,{onClick:()=>m(!0),icon:"groups","aria-label":"New chat"}),h.jsx(g2,{isOpen:f,onClose:()=>m(!1),currentUser:t,users:k,onCreate:b}),h.jsx(qn,{isOpen:!!g,onClose:()=>S(null),children:h.jsxs("div",{className:"delete-confirmation",children:[h.jsx("h3",{children:"Delete Conversation?"}),h.jsx("p",{children:"This will permanently delete this conversation for everyone. This action cannot be undone."}),h.jsxs("div",{className:"form-actions",children:[h.jsx("button",{className:"action-button secondary",onClick:()=>S(null),children:"Cancel"}),h.jsx("button",{className:"action-button danger",onClick:()=>g&&A(g),children:"Delete"})]})]})})]})},g2=({isOpen:t,onClose:e,currentUser:n,users:r,onCreate:s})=>{const[i,o]=L.useState([]),l=L.useMemo(()=>{const f=new Map;return r.forEach(m=>{m.email&&!f.has(m.email)?f.set(m.email,m):m.email||f.has(m.id)||f.set(m.id,m)}),Array.from(f.values())},[r]),u=f=>{o(m=>m.some(g=>g.id===f.id)?m.filter(g=>g.id!==f.id):[...m,f])},c=()=>{i.length>0&&(s(i),o([]))};return h.jsx(qn,{isOpen:t,onClose:e,children:h.jsxs("div",{className:"create-chat-modal",children:[h.jsx("h3",{children:"Start a conversation"}),h.jsx("div",{className:"user-list",children:l.filter(f=>f.id!==n.id).map(f=>{const m=i.some(g=>g.id===f.id);return h.jsxs("div",{className:`list-item user-list-item selectable ${m?"selected":""}`,onClick:()=>u(f),children:[h.jsx("div",{className:"chat-avatar",children:kc(f.name)}),h.jsx("div",{className:"chat-info",children:h.jsx("span",{className:"chat-name",children:f.name})}),h.jsx("div",{className:"checkbox",children:m&&h.jsx("span",{className:"material-symbols-outlined",children:"check"})})]},f.id)})}),h.jsxs("button",{className:"action-button",style:{marginTop:"16px"},onClick:c,disabled:i.length===0,children:["Start Chat (",i.length,")"]})]})})},y2=({isOpen:t,onClose:e,onSave:n,currentName:r})=>{const[s,i]=L.useState("");L.useEffect(()=>{t&&i(r)},[t,r]);const o=l=>{l.preventDefault(),s.trim()&&n(s.trim())};return h.jsx(qn,{isOpen:t,onClose:e,children:h.jsxs("form",{className:"modal-form",onSubmit:o,children:[h.jsx("h3",{children:"Rename Group Chat"}),h.jsx("input",{type:"text",placeholder:"Enter new chat name",value:s,onChange:l=>i(l.target.value),required:!0}),h.jsxs("div",{className:"form-actions",children:[h.jsx("button",{type:"button",className:"action-button secondary",onClick:e,children:"Cancel"}),h.jsx("button",{type:"submit",className:"action-button",children:"Save"})]})]})})},_2=({chatId:t,currentUser:e,onBack:n})=>{const{db:r,storage:s}=Kn(),{showToast:i}=hm(),[o,l]=L.useState([]),[u,c]=L.useState([]),[f,m]=L.useState(""),[g,S]=L.useState([]),[k,P]=L.useState(null),[b,A]=L.useState(!0),[y,E]=L.useState(null),[x,V]=L.useState(null),[M,T]=L.useState(!1),v=L.useRef(null),w=L.useRef(null),I=L.useRef(null),[C,N]=L.useState(!0),R=L.useRef(0),le=L.useMemo(()=>[...o,...u].sort((F,Y)=>{var Z,he;return(((Z=F.createdAt)==null?void 0:Z.toMillis())||0)-(((he=Y.createdAt)==null?void 0:he.toMillis())||0)}),[o,u]),Pe=L.useCallback((F="auto")=>{const Y=I.current;Y&&Y.scrollTo({top:Y.scrollHeight,behavior:F})},[]),st=L.useCallback(()=>{const F=I.current;if(F){const Y=F.scrollHeight-F.scrollTop<=F.clientHeight+50;N(Y)}},[]),Dt=L.useCallback(()=>{C&&Pe("auto")},[C,Pe]);L.useEffect(()=>{const F=R.current===0&&le.length>0,Y=le.length>R.current;F?setTimeout(()=>Pe("auto"),100):Y&&(le[le.length-1].senderId===e.id||C)&&Pe("smooth"),R.current=le.length},[le,e.id,C,Pe]),L.useEffect(()=>{if(!r||!t)return;A(!0),R.current=0;const F=rt(r,"chats",t),Y=Sn(F,Re=>{Re.exists()?P({id:Re.id,...Re.data()}):n()}),Z=ln(et(r,"chats",t,"messages"),pi("createdAt","asc")),he=Sn(Z,Re=>{const gt=Re.docs.map(ke=>({id:ke.id,...ke.data()}));l(gt);const qe=new Set(gt.map(ke=>ke.tempId).filter(Boolean));gt.forEach(ke=>{ke.tempId&&ke.media&&ke.media.forEach((Me,yt)=>{const Ke=`${ke.tempId}-${yt}`,_t=`${ke.id}-${yt}`;rf.renameKey(Ke,_t).catch(vt=>console.warn(`Failed to rename cache key from ${Ke} to ${_t}:`,vt))})}),c(ke=>ke.filter(Me=>!qe.has(Me.tempId))),A(!1)});return Wn(F,{[`lastRead.${e.id}`]:Le.now()}).catch(Re=>console.error("Error updating lastRead:",Re)),()=>{Y(),he()}},[r,t,n,e.id]);const z=L.useCallback(async()=>{var gt;const F=f.trim(),Y=[...g];if(!r||!s||!k||!e||!F&&Y.length===0)return;m(""),S([]),(gt=w.current)==null||gt.focus();const Z=crypto.randomUUID(),he={id:Z,tempId:Z,senderId:e.id,createdAt:Le.now(),status:"uploading",...F&&{content:F},...Y.length>0&&{media:Y.map(qe=>({url:qe.url,type:qe.type}))}};c(qe=>[...qe,he]);let Re=F;!F&&Y.length>0&&(Re=Y.length>1?"📷 Media":Y[0].type==="video"?"📹 Video":"📷 Photo"),Wn(rt(r,"chats",k.id),{lastMessage:{content:Re,senderId:e.id,createdAt:Vn()},lastActivity:Vn(),[`lastRead.${e.id}`]:Vn()}).catch(qe=>console.error("Optimistic last message update failed:",qe));try{const qe=async Ke=>{const _t=Date.now(),vt=Ke.file.name.replace(/[^a-zA-Z0-9.]/g,"_");if(Ke.type==="image"){const[Gt,bn]=await Promise.all([zi(Ke.file,1024,.75),zi(Ke.file,400,.7)]),as=`chat_media/${k.id}/${_t}_${vt}`,q=`chat_media/${k.id}/${_t}_thumb_${vt}`,W=Ye(s,as),te=Ye(s,q);await Promise.all([Kr(W,Gt),Kr(te,bn)]);const[ae,ue]=await Promise.all([Gr(W),Gr(te)]);return{mediaItem:{url:ae,thumbnailUrl:ue,type:"image",path:as,thumbnailPath:q},thumbBlob:bn}}else{const Gt=`chat_media/${k.id}/${_t}_${vt}`,bn=Ye(s,Gt);return await Kr(bn,Ke.file),{mediaItem:{url:await Gr(bn),type:"video",path:Gt}}}},ke=await Promise.all(Y.map(qe));ke.forEach((Ke,_t)=>{if(Ke.thumbBlob){const vt=`${Z}-${_t}`;rf.storeImage(vt,Ke.thumbBlob).catch(Gt=>console.error("Failed to cache image",Gt))}});const Me=ke.map(Ke=>Ke.mediaItem),yt={senderId:e.id,createdAt:Vn(),tempId:Z,...F&&{content:F},...Me.length>0&&{media:Me}};await Ks(et(r,"chats",k.id,"messages"),yt)}catch(qe){console.error("❌ Failed to send message. Error Code:",qe.code,"Message:",qe.message),i("Error","Failed to send message."),c(ke=>ke.map(Me=>Me.tempId===Z?{...Me,status:"failed"}:Me))}},[f,g,r,s,k,e,i]),J=F=>{if(F.target.files){const Z=Array.from(F.target.files).map(he=>({id:crypto.randomUUID(),url:URL.createObjectURL(he),file:he,type:he.type.startsWith("image/")?"image":"video"}));S(he=>[...he,...Z]),v.current&&(v.current.value="")}},ne=async F=>{if(!(!r||!s||!F||!k)&&(E(null),F.status?c(Y=>Y.filter(Z=>Z.tempId!==F.tempId)):l(Y=>Y.filter(Z=>Z.id!==F.id)),!(F.tempId&&F.status!=="failed")))try{F.media&&F.media.length>0&&await Promise.all(F.media.flatMap(Y=>{const Z=[];return Y.path&&Z.push(tn(Ye(s,Y.path)).catch(he=>console.error(`Failed to delete media ${Y.path}:`,he))),Y.thumbnailPath&&Z.push(tn(Ye(s,Y.thumbnailPath)).catch(he=>console.error(`Failed to delete thumb ${Y.thumbnailPath}:`,he))),Z})),F.tempId||await es(rt(r,"chats",k.id,"messages",F.id))}catch(Y){console.error("Error deleting message:",Y),alert("Failed to delete message.")}},Ae=async F=>{if(!(!r||!k||!F.trim()))try{await Wn(rt(r,"chats",k.id),{name:F.trim()}),T(!1)}catch(Y){console.error("Error renaming chat:",Y),alert("Failed to rename chat.")}},ye=()=>{var Y;if(k!=null&&k.name)return k.name;if(!(k!=null&&k.participants))return"Conversation";if(k.participantIds.length>2)return k.participantIds.filter(Z=>Z!==e.id).map(Z=>{const he=k.participants[Z];return he!=null&&he.name?he.name.split(" ")[0]:""}).filter(Boolean).join(", ");const F=k.participantIds.find(Z=>Z!==e.id);return F?(Y=k.participants[F])==null?void 0:Y.name:"Chat"};return h.jsxs("div",{className:"conversation-page",children:[h.jsxs("header",{className:"conversation-header",children:[h.jsx("button",{onClick:n,className:"back-button","aria-label":"Back to chats",children:h.jsx("span",{className:"material-symbols-outlined",children:"arrow_back"})}),h.jsx("h3",{children:ye()}),((k==null?void 0:k.participantIds.length)??0)>2?h.jsx("button",{onClick:()=>T(!0),className:"header-action-button","aria-label":"Rename chat",children:h.jsx("span",{className:"material-symbols-outlined",children:"edit"})}):h.jsx("div",{className:"header-action-button",style:{visibility:"hidden"}})]}),h.jsx("div",{className:"message-list",ref:I,onScroll:st,children:b?h.jsx(fm,{message:"Loading messages..."}):h.jsx(h.Fragment,{children:le.map((F,Y)=>{var vt;const Z=Y>0?le[Y-1]:null,he=!Z||!JO(F.createdAt,Z.createdAt),Re=((k==null?void 0:k.participantIds.length)??0)>2,gt=F.senderId===e.id,qe=!Z||Z.senderId!==F.senderId||he,ke=Re&&!gt&&qe,Me=(vt=k==null?void 0:k.participants)==null?void 0:vt[F.senderId],yt=Me==null?void 0:Me.name,Ke=Me==null?void 0:Me.avatar,_t=e2(yt);return h.jsxs(uv.Fragment,{children:[he&&h.jsx("div",{className:"date-separator",children:h.jsx("span",{children:ja(F.createdAt)})}),h.jsx(v2,{message:F,isSent:gt,isGroupChat:Re,senderName:ke?_t:void 0,senderFullName:yt,senderAvatar:Ke,senderId:F.senderId,showAvatar:Re&&!gt&&qe,onMediaClick:Gt=>F.media&&V({media:F.media,startIndex:Gt}),onLongPress:()=>E(F),onImageLoad:Dt})]},F.tempId||F.id)})})}),h.jsxs("div",{className:"message-input-container",children:[g.length>0&&h.jsx("div",{className:"media-preview-container",children:g.map(F=>h.jsxs("div",{className:"media-preview-item",children:[F.type==="image"?h.jsx("img",{src:F.url,alt:"preview"}):h.jsx("video",{src:F.url}),h.jsx("button",{onClick:()=>S(Y=>Y.filter(Z=>Z.id!==F.id)),children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})})]},F.id))}),h.jsxs("div",{className:"message-input-row",children:[h.jsx("input",{type:"file",ref:v,onChange:J,style:{display:"none"},multiple:!0,accept:"image/*,video/*",disabled:b}),h.jsx("button",{className:"input-action-button",onMouseDown:F=>F.preventDefault(),onClick:()=>{var F;return(F=v.current)==null?void 0:F.click()},"aria-label":"Attach file",disabled:b,children:h.jsx("span",{className:"material-symbols-outlined",children:"add_photo_alternate"})}),h.jsx("input",{ref:w,type:"text",placeholder:"Type a message...",value:f,onChange:F=>m(F.target.value),onKeyPress:F=>F.key==="Enter"&&z(),disabled:b}),h.jsx("button",{className:"send-button",onClick:z,disabled:b||!f.trim()&&g.length===0,children:h.jsx("span",{className:"material-symbols-outlined",children:"send"})})]})]}),y&&h.jsx(qn,{isOpen:!0,onClose:()=>E(null),children:h.jsxs("div",{className:"delete-confirmation",children:[h.jsx("p",{children:"Are you sure you want to delete this message for everyone?"}),h.jsxs("div",{className:"form-actions",children:[h.jsx("button",{className:"action-button secondary",onClick:()=>E(null),children:"Cancel"}),h.jsx("button",{className:"action-button danger",onClick:()=>ne(y),children:"Delete"})]})]})}),x&&h.jsx(E2,{mediaItems:x.media,startIndex:x.startIndex,onClose:()=>V(null)}),M&&h.jsx(y2,{isOpen:M,onClose:()=>T(!1),onSave:Ae,currentName:ye()})]})},v2=({message:t,isSent:e,isGroupChat:n,senderName:r,senderFullName:s,senderAvatar:i,senderId:o,showAvatar:l,onMediaClick:u,onLongPress:c,onImageLoad:f})=>{const m=L.useRef(null),g=()=>{e&&(m.current=window.setTimeout(()=>{c(),m.current=null},700))},S=()=>{m.current&&(clearTimeout(m.current),m.current=null)},k=b=>{e&&(b.preventDefault(),c())},P=o?t2(o):"#2563eb";return h.jsxs("div",{className:`message-container ${e?"sent":"received"} ${n?"group-message":""}`,children:[!e&&n&&h.jsx("div",{className:"message-avatar-container",children:l?i?h.jsx("img",{src:i,alt:r||"Avatar",className:"message-avatar"}):h.jsx("div",{className:"message-avatar-placeholder",style:{backgroundColor:P},children:kc(s||r)}):h.jsx("div",{className:"message-avatar-spacer"})}),h.jsxs("div",{className:"message-content-wrapper",children:[r&&h.jsx("span",{className:"message-sender-name",style:{color:P},children:r}),h.jsxs("div",{className:`message-bubble ${t.media?"has-media":""}`,onMouseDown:g,onMouseUp:S,onTouchStart:g,onTouchEnd:S,onContextMenu:k,children:[t.media&&t.media.length>0&&h.jsx(w2,{media:t.media,messageId:t.id,onMediaClick:u,onImageLoad:f}),t.content&&h.jsx("p",{className:"message-content",children:t.content}),h.jsxs("div",{className:"message-footer",children:[h.jsx("span",{className:"message-timestamp",children:ZO(t.createdAt)}),t.status==="uploading"&&h.jsx("div",{className:"spinner-small",style:{borderColor:"#999",borderTopColor:"#666"}}),t.status==="failed"&&h.jsx("span",{className:"material-symbols-outlined message-failed-indicator",children:"error"})]})]})]})]})},X_=({item:t,messageId:e,onClick:n,onImageLoad:r})=>{const s=r2(t.thumbnailUrl||t.url,e);return h.jsxs("div",{className:"media-grid-item",onClick:i=>{i.stopPropagation(),n()},children:[t.type==="image"?h.jsx("img",{src:s,alt:"media content",onLoad:r}):h.jsx("video",{src:t.url}),t.type==="video"&&h.jsx("div",{className:"video-play-icon",children:h.jsx("span",{className:"material-symbols-outlined",children:"play_circle"})})]})},w2=({media:t,messageId:e,onMediaClick:n,onImageLoad:r})=>{const s=t.length,i=s>4?t.slice(0,4):t;return h.jsxs("div",{className:`media-grid count-${Math.min(s,4)}`,children:[i.map((o,l)=>h.jsx(X_,{item:o,messageId:`${e}-${l}`,onClick:()=>n(l),onImageLoad:r},l)),s>4&&h.jsxs("div",{className:"media-grid-item",onClick:o=>{o.stopPropagation(),n(3)},children:[h.jsx(X_,{item:i[3],messageId:`${e}-3`,onClick:()=>n(3),onImageLoad:r}),h.jsxs("div",{className:"more-overlay",children:["+",s-4]})]})]})},E2=({mediaItems:t,startIndex:e,onClose:n})=>{const[r,s]=L.useState(e),i=t[r],o=u=>{u.stopPropagation(),s(c=>c>0?c-1:t.length-1)},l=u=>{u.stopPropagation(),s(c=>c<t.length-1?c+1:0)};return Ki.createPortal(h.jsxs("div",{className:"media-viewer-backdrop",onClick:n,children:[h.jsx("div",{className:"media-viewer-content",onClick:u=>u.stopPropagation(),children:i.type==="image"?h.jsx("img",{src:i.url,alt:"media"}):h.jsx("video",{src:i.url,controls:!0,autoPlay:!0})}),h.jsx("button",{className:"media-viewer-close",onClick:n,children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})}),t.length>1&&h.jsxs(h.Fragment,{children:[h.jsx("button",{className:"media-viewer-nav prev",onClick:o,children:h.jsx("span",{className:"material-symbols-outlined",children:"arrow_back_ios"})}),h.jsx("button",{className:"media-viewer-nav next",onClick:l,children:h.jsx("span",{className:"material-symbols-outlined",children:"arrow_forward_ios"})})]})]}),document.body)},T2=({isOpen:t,onClose:e,notifications:n})=>Ki.createPortal(h.jsxs(h.Fragment,{children:[h.jsx("div",{className:`notification-backdrop ${t?"open":""}`,onClick:e}),h.jsxs("div",{className:`notification-panel ${t?"open":""}`,children:[h.jsxs("header",{className:"notification-header",children:[h.jsx("h3",{children:"Notifications"}),h.jsx("button",{className:"panel-close-button",onClick:e,"aria-label":"Close notifications",children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})})]}),h.jsx("div",{className:"notification-list",children:n.length>0?n.map(r=>h.jsxs("div",{className:"notification-item",children:[h.jsx("span",{className:"material-symbols-outlined notification-icon",children:r.icon}),h.jsxs("div",{children:[h.jsx("p",{children:r.message}),h.jsx("p",{className:"notification-timestamp",children:r.timestamp})]})]},r.id)):h.jsx("div",{className:"no-notifications",children:h.jsx("p",{children:"You have no new notifications."})})})]})]}),document.body),I2=()=>{const[t,e]=L.useState(null);L.useEffect(()=>{const i=navigator.userAgent||navigator.vendor||window.opera;/iPad|iPhone|iPod/.test(i)&&!window.MSStream?e("ios"):/android/i.test(i)?e("android"):e("other")},[]);const n=()=>h.jsxs("div",{className:"instruction-steps",children:[h.jsx("h3",{children:"iPhone/iPad को लागि निर्देशनहरू"}),h.jsxs("div",{className:"step",children:[h.jsx("p",{children:"१. आफ्नो ब्राउजरमा, 'Share' आइकनमा ट्याप गर्नुहोस्।"}),h.jsx("span",{className:"material-symbols-outlined instruction-icon",children:"ios_share"})]}),h.jsxs("div",{className:"step",children:[h.jsx("p",{children:"२. विकल्पहरूबाट 'Add to Home Screen' छान्नुहोस्।"}),h.jsx("span",{className:"material-symbols-outlined instruction-icon",children:"add_box"})]}),h.jsxs("div",{className:"step",children:[h.jsx("p",{children:"३. स्थापना पुष्टि गर्न 'Add' मा ट्याप गर्नुहोस्।"}),h.jsx("span",{className:"material-symbols-outlined instruction-icon",children:"add"})]})]}),r=()=>h.jsxs("div",{className:"instruction-steps",children:[h.jsx("h3",{children:"Android को लागि निर्देशनहरू"}),h.jsxs("div",{className:"step",children:[h.jsx("p",{children:"१. आफ्नो ब्राउजरमा, मेनु आइकन (३ थोप्ला) मा ट्याप गर्नुहोस्।"}),h.jsx("span",{className:"material-symbols-outlined instruction-icon",children:"more_vert"})]}),h.jsxs("div",{className:"step",children:[h.jsx("p",{children:"२. 'Install app' वा 'Add to Home Screen' छान्नुहोस्।"}),h.jsx("span",{className:"material-symbols-outlined instruction-icon",children:"install_mobile"})]}),h.jsxs("div",{className:"step",children:[h.jsx("p",{children:"३. स्थापना पुष्टि गर्न 'Install' मा ट्याप गर्नुहोस्।"}),h.jsx("span",{className:"material-symbols-outlined instruction-icon",children:"download"})]})]}),s=()=>h.jsxs("div",{className:"instruction-steps",children:[h.jsx("h3",{children:"एप स्थापना गर्नुहोस्"}),h.jsxs("p",{children:[h.jsx("strong",{children:"डेस्कटप ब्राउजर:"})," ठेगाना पट्टीको दायाँपट्टि रहेको स्थापना आइकनमा क्लिक गर्नुहोस्।"]}),h.jsxs("p",{children:[h.jsx("strong",{children:"अन्य मोबाइल:"})," आफ्नो ब्राउजरको मेनुमा 'Add to Home Screen' वा 'Install App' विकल्प खोज्नुहोस्।"]})]});return h.jsxs("div",{className:"page-content install-guide-container",children:[h.jsx("img",{src:Xt.logo,alt:"Church Logo",className:"install-guide-logo"}),h.jsxs("h2",{children:[Xt.name," एप"]}),h.jsx("p",{className:"install-guide-subtitle",children:"सजिलो पहुँचको लागि आफ्नो फोनमा एप स्थापना गर्नुहोस्।"}),h.jsxs("div",{className:"card",children:[t==="ios"&&h.jsx(n,{}),t==="android"&&h.jsx(r,{}),t==="other"&&h.jsx(s,{}),!t&&h.jsx(fm,{message:"तपाईंको यन्त्र पहिचान गरिँदैछ..."})]}),h.jsxs("a",{href:"/",className:"action-button install-guide-button",children:["एपमा जानुहोस्",h.jsx("span",{className:"material-symbols-outlined",children:"arrow_forward"})]})]})},S2=({isOpen:t,onClose:e,currentUser:n,setCurrentUser:r})=>{var I,C;const s=Kn(),{auth:i,db:o}=s,{showToast:l}=hm(),[u,c]=L.useState(!1),[f,m]=L.useState(!1),[g,S]=L.useState(""),[k,P]=L.useState(""),[b,A]=L.useState(!1);if(!t)return null;const E=((C=(I=i==null?void 0:i.currentUser)==null?void 0:I.providerData[0])==null?void 0:C.providerId)==="google.com",x=async N=>{if(!o)return;const R=n.notificationPreferences||{},le={...R,[N]:!R[N]};r(Pe=>Pe?{...Pe,notificationPreferences:le}:null);try{await Wn(rt(o,"users",n.id),{notificationPreferences:le}),l("Settings Saved","알림 설정이 변경되었습니다.")}catch(Pe){console.error("Failed to update notification settings",Pe),l("Error","알림 설정을 저장하는 데 실패했습니다."),r(st=>st?{...st,notificationPreferences:R}:null)}},V=async()=>{if(!(!i||!i.currentUser||!o))try{const N=i.currentUser.uid;await es(rt(o,"users",N)),await i.currentUser.delete(),l("계정 탈퇴 완료","계정이 성공적으로 탈퇴 처리되었습니다."),e()}catch(N){console.error("Account deletion error",N),N.code==="auth/requires-recent-login"?m(!0):P(N.message||"계정 탈퇴 중 오류가 발생했습니다."),A(!1)}},M=async()=>{P(""),window.confirm("정말로 계정을 영구 탈퇴하시겠습니까? 이 작업은 되돌릴 수 없으며, 모든 개인 데이터가 즉시 삭제됩니다.")&&(A(!0),await V())},T=async N=>{if(N.preventDefault(),!(!i||!i.currentUser||!i.currentUser.email)){P(""),A(!0);try{const R=$s.credential(i.currentUser.email,g);await zC(i.currentUser,R),await V()}catch(R){console.error("Email reauth failed",R);let le=R.message;(R.code==="auth/wrong-password"||R.code==="auth/invalid-credential")&&(le="비밀번호가 올바르지 않습니다. 다시 입력해 주세요."),P(le),A(!1)}}},v=async()=>{if(!(!i||!i.currentUser)){P(""),A(!0);try{const N=new Mn;await yP(i.currentUser,N),await V()}catch(N){console.error("Google reauth failed",N),P("구글 인증에 실패했습니다. 다시 시도해 주세요."),A(!1)}}},w=[{key:"news",label:"공지사항 & 소식 (Announcements)",desc:"교회의 새로운 공지 및 알림 수신"},{key:"worship",label:"आरधना - 예배 알림 (Worship)",desc:"라이브 예배 스트리밍 및 영상 관련 알림 수신"},{key:"podcast",label:"Podcast - 팟캐스트 알림",desc:"새로운 오디오 팟캐스트 등록 알림 수신"},{key:"prayer",label:"प्रार्थना - 기도제목 알림 (Prayer)",desc:"새로운 성도의 기도제목 등록 알림 수신"},{key:"chat",label:"संगतिहरु - 소그룹 채팅 알림 (Chat)",desc:"참여 중인 대화방의 새 메시지 알림 수신"}];return Ki.createPortal(h.jsx("div",{className:"modal-backdrop",onClick:e,children:h.jsxs("div",{className:"modal-content settings-modal-content",onClick:N=>N.stopPropagation(),children:[h.jsxs("header",{className:"settings-header",children:[h.jsx("h2",{children:"설정 (Settings)"}),h.jsx("button",{className:"modal-close-button",onClick:e,"aria-label":"Close settings",children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})})]}),h.jsxs("div",{className:"settings-scroll-container",children:[h.jsx("div",{className:"settings-section profile-section",children:h.jsxs("div",{className:"profile-details",children:[n.avatar?h.jsx("img",{src:n.avatar,alt:n.name,className:"profile-avatar"}):h.jsx("div",{className:"profile-avatar-placeholder",children:kc(n.name)}),h.jsxs("div",{className:"profile-info",children:[h.jsx("h3",{children:n.name}),h.jsx("p",{children:n.email}),h.jsx("span",{className:"user-role-badge",children:n.roles.includes("admin")?"관리자 (Admin)":"성도 (Member)"})]})]})}),h.jsxs("div",{className:"settings-section",children:[h.jsx("h4",{className:"section-title",children:"알림 설정 (Notifications)"}),h.jsx("div",{className:"preferences-list",children:w.map(({key:N,label:R,desc:le})=>{var st;const Pe=((st=n.notificationPreferences)==null?void 0:st[N])!==!1;return h.jsxs("div",{className:"preference-item",children:[h.jsxs("div",{className:"preference-text",children:[h.jsx("div",{className:"preference-label",children:R}),h.jsx("div",{className:"preference-desc",children:le})]}),h.jsxs("label",{className:"switch-toggle",children:[h.jsx("input",{type:"checkbox",checked:Pe,onChange:()=>x(N)}),h.jsx("span",{className:"switch-slider"})]})]},N)})})]}),h.jsxs("div",{className:"settings-section",children:[h.jsx("h4",{className:"section-title",children:"약관 및 정책 (Legal & Info)"}),h.jsxs("div",{className:"settings-links",children:[h.jsxs("a",{href:"/terms.html",target:"_blank",rel:"noopener noreferrer",className:"settings-link-item",children:[h.jsx("span",{className:"material-symbols-outlined",children:"description"}),h.jsx("span",{children:"이용약관 (Terms of Use)"}),h.jsx("span",{className:"material-symbols-outlined arrow-icon",children:"open_in_new"})]}),h.jsxs("a",{href:"/privacy.html",target:"_blank",rel:"noopener noreferrer",className:"settings-link-item",children:[h.jsx("span",{className:"material-symbols-outlined",children:"policy"}),h.jsx("span",{children:"개인정보처리방침 (Privacy Policy)"}),h.jsx("span",{className:"material-symbols-outlined arrow-icon",children:"open_in_new"})]})]})]}),h.jsxs("div",{className:"settings-section danger-zone",children:[h.jsx("h4",{className:"section-title",children:"계정 관리 (Account Management)"}),!u&&!f?h.jsxs("button",{type:"button",className:"delete-account-trigger-btn",onClick:()=>c(!0),children:[h.jsx("span",{className:"material-symbols-outlined",children:"delete_forever"}),"계정 탈퇴 (Delete Account)"]}):h.jsxs("div",{className:"delete-account-confirm-box",children:[h.jsx("p",{className:"warning-title",children:"⚠️ 계정 영구 탈퇴 안내"}),h.jsx("p",{className:"warning-text",children:"탈퇴 시 계정 정보 및 프로필이 영구 삭제되며 복구할 수 없습니다. (작성하신 기도제목 및 채팅 내역 등은 탈퇴 회원으로 표시되거나 영구 삭제됩니다.)"}),f?h.jsxs("div",{className:"reauth-container",children:[h.jsx("p",{className:"reauth-prompt",children:"안전을 위해 다시 한 번 로그인을 진행해 주세요."}),E?h.jsxs("button",{type:"button",className:"google-reauth-btn",onClick:v,disabled:b,children:[h.jsxs("svg",{viewBox:"0 0 48 48",width:"18px",height:"18px",children:[h.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),h.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),h.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),h.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]}),h.jsx("span",{children:"Google 계정으로 재인증"})]}):h.jsxs("form",{onSubmit:T,className:"reauth-form",children:[h.jsx("input",{type:"password",placeholder:"비밀번호 입력 (Password)",value:g,onChange:N=>S(N.target.value),required:!0,className:"reauth-input",disabled:b}),h.jsx("button",{type:"submit",className:"reauth-submit-btn",disabled:b,children:b?"탈퇴 처리 중...":"비밀번호 확인 및 탈퇴"})]}),k&&h.jsx("p",{className:"reauth-error-msg",children:k}),h.jsx("button",{type:"button",className:"reauth-cancel-btn",onClick:()=>{m(!1),c(!1)},disabled:b,children:"취소 (Cancel)"})]}):h.jsxs("div",{className:"confirm-buttons",children:[h.jsx("button",{type:"button",className:"delete-confirm-btn",onClick:M,disabled:b,children:b?"처리 중...":"예, 탈퇴합니다."}),h.jsx("button",{type:"button",className:"delete-cancel-btn",onClick:()=>c(!1),disabled:b,children:"아니오, 취소합니다."})]})]})]}),h.jsxs("div",{className:"settings-app-info",children:[h.jsx("p",{children:"Logos Church, Nepal App v1.0.0"}),h.jsx("p",{children:"© 2026 Logos Church, Nepal. All rights reserved."})]})]})]})}),document.body)},A2=()=>{const t=Kn(),{auth:e,db:n}=t,{showToast:r}=hm(),[s,i]=L.useState(null),[o,l]=L.useState(!0),[u,c]=L.useState("news");L.useEffect(()=>{J(q=>({...q,[u]:0})),ke(u)},[u]);const[f,m]=L.useState(null),[g,S]=L.useState(!1),[k,P]=L.useState(!1),[b,A]=L.useState(null),[y,E]=L.useState([]),[x,V]=L.useState([]),[M,T]=L.useState([]),[v,w]=L.useState([]),[I,C]=L.useState([]),[N,R]=L.useState([]),[le,Pe]=L.useState(!1),[st,Dt]=L.useState(0),[z,J]=L.useState({}),[ne,Ae]=L.useState("default");L.useEffect(()=>{let q=st;for(const W in z)W!=="chat"&&(q+=z[W]||0);"setAppBadge"in navigator&&(q>0?navigator.setAppBadge(q).catch(W=>console.error(W)):navigator.clearAppBadge().catch(W=>console.error(W)));try{const W=indexedDB.open("badge-store",1);W.onupgradeneeded=te=>{te.target.result.createObjectStore("badges",{keyPath:"id"})},W.onsuccess=te=>{te.target.result.transaction("badges","readwrite").objectStore("badges").put({id:"count",value:q})}}catch{}},[st,z]);const[ye,F]=L.useState(()=>{try{return localStorage.getItem("notificationBannerDismissed")==="true"}catch{return!1}}),Y=L.useRef(!1);if(window.location.pathname==="/install")return h.jsx(I2,{});const Z=!!f,he=L.useMemo(()=>{const q=new Map;return I.forEach(W=>q.set(W.id,W)),q},[I]),Re={news:{label:"सुचना",icon:"feed"},worship:{label:"आरधना",icon:"church"},podcast:{label:"Podcast",icon:"podcasts"},bible:{label:"बाइबल",icon:"menu_book"},chat:{label:"संगतिहरु",icon:"groups"},prayer:{label:"प्रार्थना",icon:"volunteer_activism"}},gt=["news","worship","podcast","bible","chat","prayer"];L.useEffect(()=>{if(!e||!n)return;const q=QC(e,async W=>{if(W){const te=rt(n,"users",W.uid),ae=await D_(te);let ue=[];const Ee=ae.exists()?ae.data().roles||[]:[];if(W.email==="davidrai441@gmail.com"&&!Ee.includes("admin")?ue.push("admin"):W.email==="koiralacm@gmail.com"&&(Ee.includes("news_contributor")||ue.push("news_contributor"),Ee.includes("podcast_contributor")||ue.push("podcast_contributor")),ae.exists()){ue.length>0&&await Wn(te,{roles:ef(...ue)});const fe=ae.data(),G=[...new Set([...Ee,...ue])];!W.displayName&&fe.name&&await Vh(W,{displayName:fe.name}),!W.photoURL&&fe.avatar&&await Vh(W,{photoURL:fe.avatar});const ce={news:!0,prayer:!0,chat:!0,worship:!0,podcast:!0,...fe.notificationPreferences||{}};i({id:W.uid,name:W.displayName||fe.name||"",email:W.email||fe.email||"",avatar:W.photoURL||fe.avatar||"",roles:G,notificationPreferences:ce})}else{const fe=["member"],G=[...new Set([...fe,...ue])],se={name:W.displayName||"New User",email:W.email||"",avatar:W.photoURL||"",roles:G,notificationPreferences:{news:!0,prayer:!0,chat:!0,worship:!0,podcast:!0}};await ob(te,se),i({id:W.uid,...se})}}else i(null);l(!1)});return()=>q()},[e,n]),L.useEffect(()=>{if(!n||!s)return;const q=Sn(ln(et(n,"worshipServices"),Hl("isLive","==",!0),rb(1)),G=>{A(G.empty?null:{id:G.docs[0].id,...G.docs[0].data()})}),W=Sn(ln(et(n,"pastWorshipServices"),pi("createdAt","desc")),G=>{const se=G.docs.map(ce=>({id:ce.id,...ce.data()}));E(se)}),te=Sn(ln(et(n,"news"),pi("createdAt","desc")),G=>{const se=G.docs.map(ce=>({id:ce.id,...ce.data()}));V(se)}),ae=Sn(ln(et(n,"podcasts"),pi("createdAt","desc")),G=>{const se=G.docs.map(ce=>({id:ce.id,...ce.data()}));T(se)}),ue=Sn(ln(et(n,"prayerRequests"),pi("createdAt","desc")),G=>{const se=G.docs.map(ce=>({id:ce.id,...ce.data()}));w(se)}),Ee=Sn(ln(et(n,"chats"),Hl("participantIds","array-contains",s.id)),G=>{const ce=G.docs.map(wt=>({id:wt.id,...wt.data()})).reduce((wt,an)=>an.lastRead&&an.lastMessage&&an.lastMessage.senderId!==s.id&&(!an.lastRead[s.id]||an.lastRead[s.id]<an.lastMessage.createdAt)?wt+1:wt,0);Dt(ce)},G=>console.error("Chat listener error:",G)),fe=Sn(ln(et(n,"users")),G=>{const se=G.docs.map(ce=>({id:ce.id,...ce.data()}));se.sort((ce,wt)=>ce.name.localeCompare(wt.name)),C(se)});return()=>{q(),W(),te(),ae(),ue(),fe(),Ee()}},[n,s]),L.useEffect(()=>{if(Y.current)return;const q=new URLSearchParams(window.location.search),W=q.get("page"),te=q.get("chatId");setTimeout(()=>{W==="chat"&&te?(c("chat"),m(te),Y.current=!0,window.history.replaceState({},document.title,window.location.pathname)):W&&gt.includes(W)&&(c(W),Y.current=!0,window.history.replaceState({},document.title,window.location.pathname))},100)},[]);const qe=L.useCallback(()=>new Promise(q=>{const W=indexedDB.open("tab-badge-store",1);W.onupgradeneeded=te=>{te.target.result.createObjectStore("tabBadges",{keyPath:"page"})},W.onsuccess=te=>{const fe=te.target.result.transaction("tabBadges","readonly").objectStore("tabBadges").getAll();fe.onsuccess=()=>{const G=fe.result;if(G&&G.length>0){const se={};G.forEach(ce=>{se[ce.page]=ce.count}),J(se)}q()},fe.onerror=()=>q()},W.onerror=()=>q()}),[]);L.useEffect(()=>{if(!("serviceWorker"in navigator))return;const q=W=>{var te;if(((te=W.data)==null?void 0:te.type)==="NEW_NOTIFICATION"){const ae=W.data.page;console.log("[App] New notification for page:",ae),c(ue=>(ue!==ae&&(J(Ee=>({...Ee,[ae]:(Ee[ae]||0)+1})),Me(ae)),ue))}};return navigator.serviceWorker.addEventListener("message",q),()=>navigator.serviceWorker.removeEventListener("message",q)},[]);const ke=L.useCallback(q=>{const W=indexedDB.open("tab-badge-store",1);W.onsuccess=te=>{te.target.result.transaction("tabBadges","readwrite").objectStore("tabBadges").delete(q)}},[]),Me=L.useCallback(q=>{const W=indexedDB.open("tab-badge-store",1);W.onupgradeneeded=te=>{te.target.result.createObjectStore("tabBadges",{keyPath:"page"})},W.onsuccess=te=>{const Ee=te.target.result.transaction("tabBadges","readwrite").objectStore("tabBadges"),fe=Ee.get(q);fe.onsuccess=()=>{var se;const G=((se=fe.result)==null?void 0:se.count)||0;Ee.put({page:q,count:G+1})}}},[]),yt=L.useCallback(async()=>{var W;if(!t.messaging||!s||!n)return;const{messaging:q}=t;try{console.error("VAPID key is missing. Check Vercel environment variables.");return;if(!ae){console.log("Service Worker not found, registering now...");try{ae=await navigator.serviceWorker.register("/firebase-messaging-sw.js"),console.log("Service Worker registered successfully.")}catch(Ee){console.error("Service Worker registration failed:",Ee);return}}}catch(te){console.log("Token retrieval failed:",(te==null?void 0:te.message)||te)}},[t,s,n]),Ke=L.useCallback(async()=>{if(!(!t.messaging||!s))try{const q=await Notification.requestPermission();Ae(q),q==="granted"?(await yt(),r("Success","Notifications enabled!")):r("Blocked","Notifications are blocked. Please enable them in browser settings.")}catch(q){console.error("Permission request failed",q)}finally{F(!0);try{localStorage.setItem("notificationBannerDismissed","true")}catch(q){console.error("Failed to save banner dismissal state",q)}}},[t,s,yt,r]);L.useEffect(()=>{const q=()=>{if("Notification"in window){const te=Notification.permission;Ae(te),te==="granted"&&s&&(yt(),F(!0))}};q(),qe();const W=()=>{document.visibilityState==="visible"&&(q(),qe())};return document.addEventListener("visibilitychange",W),()=>document.removeEventListener("visibilitychange",W)},[s,yt]),L.useEffect(()=>{if(!t.messaging||!s)return;const{messaging:q}=t,W=KO(q,te=>{const ae=te.notification,ue=te.data,Ee=ue==null?void 0:ue.chatId;if(Ee&&Ee===f)return;r((ae==null?void 0:ae.title)||"New Message",(ae==null?void 0:ae.body)||"You have a new message.",()=>{const G=ue==null?void 0:ue.url;if(G)try{const se=new URL(G,window.location.origin),ce=se.searchParams.get("page"),wt=se.searchParams.get("chatId");ce==="chat"&&wt?(c("chat"),m(wt)):ce&&gt.includes(ce)&&c(ce)}catch{}});const fe={id:te.messageId||crypto.randomUUID(),icon:"notifications",message:(ae==null?void 0:ae.body)||"You have a new message.",timestamp:Rc(Le.now())};R(G=>[fe,...G.slice(0,19)]),Pe(!0);try{const G=ue==null?void 0:ue.url;if(G){const ce=new URL(G,window.location.origin).searchParams.get("page")||"news";c(wt=>(wt!==ce&&(J(an=>({...an,[ce]:(an[ce]||0)+1})),Me(ce)),wt))}}catch{}});return()=>W()},[t.messaging,s,n,r,f]);const _t=async q=>{if(!n||!s)return null;const W=[s,...q],te=W.map(fe=>fe.id).sort(),ae=ln(et(n,"chats"),Hl("participantIds","==",te)),ue=await CI(ae);if(!ue.empty)return ue.docs[0].id;const Ee=W.reduce((fe,G)=>(fe[G.id]={name:G.name,avatar:G.avatar},fe),{});try{return(await Ks(et(n,"chats"),{participantIds:te,participants:Ee,lastActivity:Vn()})).id}catch(fe){return console.error("Error creating chat:",fe),null}},vt=q=>{c("chat"),m(q)},Gt=L.useCallback(()=>{m(null)},[]),bn=()=>{F(!0);try{localStorage.setItem("notificationBannerDismissed","true")}catch(q){console.error("Failed to save banner dismissal state",q)}};if(t.firebaseError)return h.jsx(s2,{error:new Error(t.firebaseError)});if(o)return h.jsx(i2,{});if(!s)return h.jsx(o2,{});const as=()=>{if(Z)return h.jsx(_2,{chatId:f,currentUser:s,onBack:Gt},f);switch(u){case"news":return h.jsx(Y_,{currentUser:s,news:x,setNews:V});case"worship":return h.jsx(a2,{currentUser:s,liveService:b,pastServices:y});case"podcast":return h.jsx(c2,{currentUser:s,podcasts:M,setPodcasts:T});case"bible":return h.jsx(l2,{});case"chat":return h.jsx(m2,{currentUser:s,usersMap:he,onChatSelect:vt,onCreateChat:_t});case"prayer":return h.jsx(h2,{currentUser:s,requests:v,setRequests:w});default:return h.jsx(Y_,{currentUser:s,news:x,setNews:V})}};return h.jsxs("div",{className:"app-container",children:[ne==="denied"&&!Z&&!ye&&h.jsxs("div",{className:"notification-permission-banner denied",children:[h.jsx("span",{className:"material-symbols-outlined",children:"notifications_off"}),h.jsx("p",{children:"सूचनाहरू रोकिएका छन्। सन्देश र अद्यावधिकहरू प्राप्त गर्न, कृपया आफ्नो ब्राउजर सेटिङहरूमा यो साइटको लागि सूचनाहरूलाई अनुमति दिनुहोस्।"}),h.jsx("button",{className:"banner-dismiss-btn",onClick:bn,style:{marginLeft:"auto",background:"none",border:"none",cursor:"pointer",padding:"4px"},children:h.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"20px",color:"inherit"},children:"close"})})]}),ne==="default"&&!Z&&!ye&&h.jsxs("div",{className:"notification-permission-banner request",children:[h.jsx("span",{className:"material-symbols-outlined",children:"notifications"}),h.jsx("p",{children:"नयाँ सन्देश र अद्यावधिकहरू प्राप्त गर्न सूचनाहरू सक्षम गर्नुहोस्।"}),h.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[h.jsx("button",{onClick:Ke,children:"सक्षम गर्नुहोस्"}),h.jsx("button",{onClick:bn,style:{background:"none",border:"none",padding:"4px",display:"flex",alignItems:"center",color:"inherit"},children:h.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"20px"},children:"close"})})]})]}),!Z&&h.jsxs("header",{className:"app-header",children:[h.jsxs("div",{className:"header-content",children:[h.jsx("img",{src:Xt.logo,alt:"Church Logo",className:"header-logo"}),h.jsx("h1",{children:Xt.name})]}),h.jsxs("div",{className:"header-actions",children:[h.jsxs("button",{className:"header-button",onClick:()=>{S(!0),Pe(!1)},children:[h.jsx("span",{className:"material-symbols-outlined",children:"notifications"}),le&&h.jsx("div",{className:"notification-dot"})]}),h.jsx("button",{className:"header-button",onClick:()=>P(!0),"aria-label":"Settings",children:h.jsx("span",{className:"material-symbols-outlined",children:"settings"})}),h.jsx("button",{className:"header-button",onClick:()=>e&&YC(e),"aria-label":"Logout",children:h.jsx("span",{className:"material-symbols-outlined",children:"logout"})})]})]}),h.jsx("main",{className:`main-content ${Z?"full-height":""}`,children:as()}),!Z&&h.jsx("nav",{className:"bottom-nav",children:gt.map(q=>h.jsxs("button",{className:`nav-item ${u===q?"active":""}`,onClick:()=>{c(q),J(W=>({...W,[q]:0})),ke(q)},children:[h.jsxs("span",{style:{position:"relative",display:"inline-flex"},children:[h.jsx("span",{className:"material-symbols-outlined",children:Re[q].icon}),z[q]>0&&h.jsx("span",{style:{position:"absolute",top:"-6px",right:"-8px",background:"#e53935",color:"white",borderRadius:"50%",minWidth:"16px",height:"16px",fontSize:"10px",fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 3px",lineHeight:1},children:z[q]>99?"99+":z[q]})]}),h.jsx("span",{children:Re[q].label})]},q))}),h.jsx(T2,{isOpen:g,onClose:()=>S(!1),notifications:N}),h.jsx(S2,{isOpen:k,onClose:()=>P(!1),currentUser:s,setCurrentUser:i})]})},J_=document.getElementById("root");if(J_){const t=QO();Md.createRoot(J_).render(h.jsx(uv.StrictMode,{children:h.jsx(g0.Provider,{value:t,children:h.jsx(YO,{children:h.jsx(A2,{})})})}))}
