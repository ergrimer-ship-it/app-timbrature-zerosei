(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function H1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var cw={exports:{}},Uc={},hw={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sl=Symbol.for("react.element"),G1=Symbol.for("react.portal"),Q1=Symbol.for("react.fragment"),Y1=Symbol.for("react.strict_mode"),X1=Symbol.for("react.profiler"),J1=Symbol.for("react.provider"),Z1=Symbol.for("react.context"),eA=Symbol.for("react.forward_ref"),tA=Symbol.for("react.suspense"),nA=Symbol.for("react.memo"),rA=Symbol.for("react.lazy"),by=Symbol.iterator;function sA(t){return t===null||typeof t!="object"?null:(t=by&&t[by]||t["@@iterator"],typeof t=="function"?t:null)}var dw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fw=Object.assign,pw={};function oo(t,e,n){this.props=t,this.context=e,this.refs=pw,this.updater=n||dw}oo.prototype.isReactComponent={};oo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mw(){}mw.prototype=oo.prototype;function Sp(t,e,n){this.props=t,this.context=e,this.refs=pw,this.updater=n||dw}var Ap=Sp.prototype=new mw;Ap.constructor=Sp;fw(Ap,oo.prototype);Ap.isPureReactComponent=!0;var Ny=Array.isArray,gw=Object.prototype.hasOwnProperty,kp={current:null},yw={key:!0,ref:!0,__self:!0,__source:!0};function _w(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)gw.call(e,r)&&!yw.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:sl,type:t,key:i,ref:o,props:s,_owner:kp.current}}function iA(t,e){return{$$typeof:sl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rp(t){return typeof t=="object"&&t!==null&&t.$$typeof===sl}function oA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dy=/\/+/g;function rd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?oA(""+t.key):e.toString(36)}function hu(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case sl:case G1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+rd(o,0):r,Ny(s)?(n="",t!=null&&(n=t.replace(Dy,"$&/")+"/"),hu(s,e,n,"",function(c){return c})):s!=null&&(Rp(s)&&(s=iA(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Dy,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Ny(t))for(var a=0;a<t.length;a++){i=t[a];var u=r+rd(i,a);o+=hu(i,e,n,u,s)}else if(u=sA(t),typeof u=="function")for(t=u.call(t),a=0;!(i=t.next()).done;)i=i.value,u=r+rd(i,a++),o+=hu(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function jl(t,e,n){if(t==null)return t;var r=[],s=0;return hu(t,r,"","",function(i){return e.call(n,i,s++)}),r}function aA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},du={transition:null},lA={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:du,ReactCurrentOwner:kp};function vw(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:jl,forEach:function(t,e,n){jl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return jl(t,function(){e++}),e},toArray:function(t){return jl(t,function(e){return e})||[]},only:function(t){if(!Rp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=oo;se.Fragment=Q1;se.Profiler=X1;se.PureComponent=Sp;se.StrictMode=Y1;se.Suspense=tA;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lA;se.act=vw;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=fw({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=kp.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)gw.call(e,u)&&!yw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:sl,type:t.type,key:s,ref:i,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:Z1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:J1,_context:t},t.Consumer=t};se.createElement=_w;se.createFactory=function(t){var e=_w.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:eA,render:t}};se.isValidElement=Rp;se.lazy=function(t){return{$$typeof:rA,_payload:{_status:-1,_result:t},_init:aA}};se.memo=function(t,e){return{$$typeof:nA,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=du.transition;du.transition={};try{t()}finally{du.transition=e}};se.unstable_act=vw;se.useCallback=function(t,e){return yt.current.useCallback(t,e)};se.useContext=function(t){return yt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};se.useEffect=function(t,e){return yt.current.useEffect(t,e)};se.useId=function(){return yt.current.useId()};se.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return yt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};se.useRef=function(t){return yt.current.useRef(t)};se.useState=function(t){return yt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return yt.current.useTransition()};se.version="18.3.1";hw.exports=se;var K=hw.exports;const ww=H1(K);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uA=K,cA=Symbol.for("react.element"),hA=Symbol.for("react.fragment"),dA=Object.prototype.hasOwnProperty,fA=uA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pA={key:!0,ref:!0,__self:!0,__source:!0};function Ew(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)dA.call(e,r)&&!pA.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:cA,type:t,key:i,ref:o,props:s,_owner:fA.current}}Uc.Fragment=hA;Uc.jsx=Ew;Uc.jsxs=Ew;cw.exports=Uc;var f=cw.exports,Yd={},Iw={exports:{}},Lt={},Tw={exports:{}},xw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,$){var H=W.length;W.push($);e:for(;0<H;){var Y=H-1>>>1,ce=W[Y];if(0<s(ce,$))W[Y]=$,W[H]=ce,H=Y;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var $=W[0],H=W.pop();if(H!==$){W[0]=H;e:for(var Y=0,ce=W.length,Ve=ce>>>1;Y<Ve;){var Oe=2*(Y+1)-1,Ye=W[Oe],Jt=Oe+1,er=W[Jt];if(0>s(Ye,H))Jt<ce&&0>s(er,Ye)?(W[Y]=er,W[Jt]=H,Y=Jt):(W[Y]=Ye,W[Oe]=H,Y=Oe);else if(Jt<ce&&0>s(er,H))W[Y]=er,W[Jt]=H,Y=Jt;else break e}}return $}function s(W,$){var H=W.sortIndex-$.sortIndex;return H!==0?H:W.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,m=null,g=3,I=!1,x=!1,P=!1,C=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(W){for(var $=n(c);$!==null;){if($.callback===null)r(c);else if($.startTime<=W)r(c),$.sortIndex=$.expirationTime,e(u,$);else break;$=n(c)}}function V(W){if(P=!1,E(W),!x)if(n(u)!==null)x=!0,Yr(L);else{var $=n(c);$!==null&&Xr(V,$.startTime-W)}}function L(W,$){x=!1,P&&(P=!1,w(v),v=-1),I=!0;var H=g;try{for(E($),m=n(u);m!==null&&(!(m.expirationTime>$)||W&&!R());){var Y=m.callback;if(typeof Y=="function"){m.callback=null,g=m.priorityLevel;var ce=Y(m.expirationTime<=$);$=t.unstable_now(),typeof ce=="function"?m.callback=ce:m===n(u)&&r(u),E($)}else r(u);m=n(u)}if(m!==null)var Ve=!0;else{var Oe=n(c);Oe!==null&&Xr(V,Oe.startTime-$),Ve=!1}return Ve}finally{m=null,g=H,I=!1}}var j=!1,T=null,v=-1,S=5,k=-1;function R(){return!(t.unstable_now()-k<S)}function N(){if(T!==null){var W=t.unstable_now();k=W;var $=!0;try{$=T(!0,W)}finally{$?A():(j=!1,T=null)}}else j=!1}var A;if(typeof _=="function")A=function(){_(N)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,Xt=Ue.port2;Ue.port1.onmessage=N,A=function(){Xt.postMessage(null)}}else A=function(){C(N,0)};function Yr(W){T=W,j||(j=!0,A())}function Xr(W,$){v=C(function(){W(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){x||I||(x=!0,Yr(L))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(g){case 1:case 2:case 3:var $=3;break;default:$=g}var H=g;g=$;try{return W()}finally{g=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,$){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var H=g;g=W;try{return $()}finally{g=H}},t.unstable_scheduleCallback=function(W,$,H){var Y=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?Y+H:Y):H=Y,W){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=H+ce,W={id:d++,callback:$,priorityLevel:W,startTime:H,expirationTime:ce,sortIndex:-1},H>Y?(W.sortIndex=H,e(c,W),n(u)===null&&W===n(c)&&(P?(w(v),v=-1):P=!0,Xr(V,H-Y))):(W.sortIndex=ce,e(u,W),x||I||(x=!0,Yr(L))),W},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(W){var $=g;return function(){var H=g;g=$;try{return W.apply(this,arguments)}finally{g=H}}}})(xw);Tw.exports=xw;var mA=Tw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gA=K,Ot=mA;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sw=new Set,Ia={};function qs(t,e){Fi(t,e),Fi(t+"Capture",e)}function Fi(t,e){for(Ia[t]=e,t=0;t<e.length;t++)Sw.add(e[t])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xd=Object.prototype.hasOwnProperty,yA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vy={},Oy={};function _A(t){return Xd.call(Oy,t)?!0:Xd.call(Vy,t)?!1:yA.test(t)?Oy[t]=!0:(Vy[t]=!0,!1)}function vA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wA(t,e,n,r){if(e===null||typeof e>"u"||vA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _t(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new _t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new _t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new _t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new _t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new _t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new _t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new _t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new _t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new _t(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pp=/[\-:]([a-z])/g;function Cp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pp,Cp);tt[e]=new _t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pp,Cp);tt[e]=new _t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pp,Cp);tt[e]=new _t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new _t(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new _t(t,1,!1,t.toLowerCase(),null,!0,!0)});function bp(t,e,n,r){var s=tt.hasOwnProperty(e)?tt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wA(e,n,s,r)&&(n=null),r||s===null?_A(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yn=gA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fl=Symbol.for("react.element"),gi=Symbol.for("react.portal"),yi=Symbol.for("react.fragment"),Np=Symbol.for("react.strict_mode"),Jd=Symbol.for("react.profiler"),Aw=Symbol.for("react.provider"),kw=Symbol.for("react.context"),Dp=Symbol.for("react.forward_ref"),Zd=Symbol.for("react.suspense"),ef=Symbol.for("react.suspense_list"),Vp=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),Rw=Symbol.for("react.offscreen"),My=Symbol.iterator;function No(t){return t===null||typeof t!="object"?null:(t=My&&t[My]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,sd;function Ko(t){if(sd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sd=e&&e[1]||""}return`
`+sd+t}var id=!1;function od(t,e){if(!t||id)return"";id=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{id=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ko(t):""}function EA(t){switch(t.tag){case 5:return Ko(t.type);case 16:return Ko("Lazy");case 13:return Ko("Suspense");case 19:return Ko("SuspenseList");case 0:case 2:case 15:return t=od(t.type,!1),t;case 11:return t=od(t.type.render,!1),t;case 1:return t=od(t.type,!0),t;default:return""}}function tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yi:return"Fragment";case gi:return"Portal";case Jd:return"Profiler";case Np:return"StrictMode";case Zd:return"Suspense";case ef:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kw:return(t.displayName||"Context")+".Consumer";case Aw:return(t._context.displayName||"Context")+".Provider";case Dp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vp:return e=t.displayName||null,e!==null?e:tf(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return tf(t(e))}catch{}}return null}function IA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tf(e);case 8:return e===Np?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function TA(t){var e=Pw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ul(t){t._valueTracker||(t._valueTracker=TA(t))}function Cw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Pw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Uu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nf(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ly(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function bw(t,e){e=e.checked,e!=null&&bp(t,"checked",e,!1)}function rf(t,e){bw(t,e);var n=Mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sf(t,e.type,n):e.hasOwnProperty("defaultValue")&&sf(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sf(t,e,n){(e!=="number"||Uu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wo=Array.isArray;function Pi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Wo(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function Nw(t,e){var n=Mr(e.value),r=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Uy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function af(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zl,Vw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zl=zl||document.createElement("div"),zl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xA=["Webkit","ms","Moz","O"];Object.keys(ra).forEach(function(t){xA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ra[e]=ra[t]})});function Ow(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ra.hasOwnProperty(t)&&ra[t]?(""+e).trim():e+"px"}function Mw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Ow(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var SA=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lf(t,e){if(e){if(SA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function uf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cf=null;function Op(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hf=null,Ci=null,bi=null;function zy(t){if(t=al(t)){if(typeof hf!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Kc(e),hf(t.stateNode,t.type,e))}}function Lw(t){Ci?bi?bi.push(t):bi=[t]:Ci=t}function jw(){if(Ci){var t=Ci,e=bi;if(bi=Ci=null,zy(t),e)for(t=0;t<e.length;t++)zy(e[t])}}function Fw(t,e){return t(e)}function Uw(){}var ad=!1;function zw(t,e,n){if(ad)return t(e,n);ad=!0;try{return Fw(t,e,n)}finally{ad=!1,(Ci!==null||bi!==null)&&(Uw(),jw())}}function xa(t,e){var n=t.stateNode;if(n===null)return null;var r=Kc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var df=!1;if(Bn)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){df=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{df=!1}function AA(t,e,n,r,s,i,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var sa=!1,zu=null,Bu=!1,ff=null,kA={onError:function(t){sa=!0,zu=t}};function RA(t,e,n,r,s,i,o,a,u){sa=!1,zu=null,AA.apply(kA,arguments)}function PA(t,e,n,r,s,i,o,a,u){if(RA.apply(this,arguments),sa){if(sa){var c=zu;sa=!1,zu=null}else throw Error(U(198));Bu||(Bu=!0,ff=c)}}function Ks(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Bw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function By(t){if(Ks(t)!==t)throw Error(U(188))}function CA(t){var e=t.alternate;if(!e){if(e=Ks(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return By(s),t;if(i===r)return By(s),e;i=i.sibling}throw Error(U(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function $w(t){return t=CA(t),t!==null?qw(t):null}function qw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qw(t);if(e!==null)return e;t=t.sibling}return null}var Kw=Ot.unstable_scheduleCallback,$y=Ot.unstable_cancelCallback,bA=Ot.unstable_shouldYield,NA=Ot.unstable_requestPaint,be=Ot.unstable_now,DA=Ot.unstable_getCurrentPriorityLevel,Mp=Ot.unstable_ImmediatePriority,Ww=Ot.unstable_UserBlockingPriority,$u=Ot.unstable_NormalPriority,VA=Ot.unstable_LowPriority,Hw=Ot.unstable_IdlePriority,zc=null,En=null;function OA(t){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(zc,t,void 0,(t.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:jA,MA=Math.log,LA=Math.LN2;function jA(t){return t>>>=0,t===0?32:31-(MA(t)/LA|0)|0}var Bl=64,$l=4194304;function Ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=Ho(a):(i&=o,i!==0&&(r=Ho(i)))}else o=n&~s,o!==0?r=Ho(o):i!==0&&(r=Ho(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-an(e),s=1<<n,r|=t[n],e&=~s;return r}function FA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function UA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-an(i),a=1<<o,u=s[o];u===-1?(!(a&n)||a&r)&&(s[o]=FA(a,e)):u<=e&&(t.expiredLanes|=a),i&=~a}}function pf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Gw(){var t=Bl;return Bl<<=1,!(Bl&4194240)&&(Bl=64),t}function ld(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function il(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-an(e),t[e]=n}function zA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-an(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Lp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-an(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var fe=0;function Qw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Yw,jp,Xw,Jw,Zw,mf=!1,ql=[],xr=null,Sr=null,Ar=null,Sa=new Map,Aa=new Map,pr=[],BA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qy(t,e){switch(t){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(e.pointerId)}}function Vo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=al(e),e!==null&&jp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function $A(t,e,n,r,s){switch(e){case"focusin":return xr=Vo(xr,t,e,n,r,s),!0;case"dragenter":return Sr=Vo(Sr,t,e,n,r,s),!0;case"mouseover":return Ar=Vo(Ar,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Sa.set(i,Vo(Sa.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Aa.set(i,Vo(Aa.get(i)||null,t,e,n,r,s)),!0}return!1}function eE(t){var e=fs(t.target);if(e!==null){var n=Ks(e);if(n!==null){if(e=n.tag,e===13){if(e=Bw(n),e!==null){t.blockedOn=e,Zw(t.priority,function(){Xw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);cf=r,n.target.dispatchEvent(r),cf=null}else return e=al(n),e!==null&&jp(e),t.blockedOn=n,!1;e.shift()}return!0}function Ky(t,e,n){fu(t)&&n.delete(e)}function qA(){mf=!1,xr!==null&&fu(xr)&&(xr=null),Sr!==null&&fu(Sr)&&(Sr=null),Ar!==null&&fu(Ar)&&(Ar=null),Sa.forEach(Ky),Aa.forEach(Ky)}function Oo(t,e){t.blockedOn===e&&(t.blockedOn=null,mf||(mf=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,qA)))}function ka(t){function e(s){return Oo(s,t)}if(0<ql.length){Oo(ql[0],t);for(var n=1;n<ql.length;n++){var r=ql[n];r.blockedOn===t&&(r.blockedOn=null)}}for(xr!==null&&Oo(xr,t),Sr!==null&&Oo(Sr,t),Ar!==null&&Oo(Ar,t),Sa.forEach(e),Aa.forEach(e),n=0;n<pr.length;n++)r=pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)eE(n),n.blockedOn===null&&pr.shift()}var Ni=Yn.ReactCurrentBatchConfig,Ku=!0;function KA(t,e,n,r){var s=fe,i=Ni.transition;Ni.transition=null;try{fe=1,Fp(t,e,n,r)}finally{fe=s,Ni.transition=i}}function WA(t,e,n,r){var s=fe,i=Ni.transition;Ni.transition=null;try{fe=4,Fp(t,e,n,r)}finally{fe=s,Ni.transition=i}}function Fp(t,e,n,r){if(Ku){var s=gf(t,e,n,r);if(s===null)_d(t,e,r,Wu,n),qy(t,r);else if($A(s,t,e,n,r))r.stopPropagation();else if(qy(t,r),e&4&&-1<BA.indexOf(t)){for(;s!==null;){var i=al(s);if(i!==null&&Yw(i),i=gf(t,e,n,r),i===null&&_d(t,e,r,Wu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else _d(t,e,r,null,n)}}var Wu=null;function gf(t,e,n,r){if(Wu=null,t=Op(r),t=fs(t),t!==null)if(e=Ks(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Bw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wu=t,null}function tE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DA()){case Mp:return 1;case Ww:return 4;case $u:case VA:return 16;case Hw:return 536870912;default:return 16}default:return 16}}var Er=null,Up=null,pu=null;function nE(){if(pu)return pu;var t,e=Up,n=e.length,r,s="value"in Er?Er.value:Er.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return pu=s.slice(t,1<r?1-r:void 0)}function mu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Kl(){return!0}function Wy(){return!1}function jt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Kl:Wy,this.isPropagationStopped=Wy,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kl)},persist:function(){},isPersistent:Kl}),e}var ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zp=jt(ao),ol=Ae({},ao,{view:0,detail:0}),HA=jt(ol),ud,cd,Mo,Bc=Ae({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mo&&(Mo&&t.type==="mousemove"?(ud=t.screenX-Mo.screenX,cd=t.screenY-Mo.screenY):cd=ud=0,Mo=t),ud)},movementY:function(t){return"movementY"in t?t.movementY:cd}}),Hy=jt(Bc),GA=Ae({},Bc,{dataTransfer:0}),QA=jt(GA),YA=Ae({},ol,{relatedTarget:0}),hd=jt(YA),XA=Ae({},ao,{animationName:0,elapsedTime:0,pseudoElement:0}),JA=jt(XA),ZA=Ae({},ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ek=jt(ZA),tk=Ae({},ao,{data:0}),Gy=jt(tk),nk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ik(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sk[t])?!!e[t]:!1}function Bp(){return ik}var ok=Ae({},ol,{key:function(t){if(t.key){var e=nk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=mu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bp,charCode:function(t){return t.type==="keypress"?mu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ak=jt(ok),lk=Ae({},Bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qy=jt(lk),uk=Ae({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bp}),ck=jt(uk),hk=Ae({},ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),dk=jt(hk),fk=Ae({},Bc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pk=jt(fk),mk=[9,13,27,32],$p=Bn&&"CompositionEvent"in window,ia=null;Bn&&"documentMode"in document&&(ia=document.documentMode);var gk=Bn&&"TextEvent"in window&&!ia,rE=Bn&&(!$p||ia&&8<ia&&11>=ia),Yy=" ",Xy=!1;function sE(t,e){switch(t){case"keyup":return mk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _i=!1;function yk(t,e){switch(t){case"compositionend":return iE(e);case"keypress":return e.which!==32?null:(Xy=!0,Yy);case"textInput":return t=e.data,t===Yy&&Xy?null:t;default:return null}}function _k(t,e){if(_i)return t==="compositionend"||!$p&&sE(t,e)?(t=nE(),pu=Up=Er=null,_i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rE&&e.locale!=="ko"?null:e.data;default:return null}}var vk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vk[t.type]:e==="textarea"}function oE(t,e,n,r){Lw(r),e=Hu(e,"onChange"),0<e.length&&(n=new zp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var oa=null,Ra=null;function wk(t){yE(t,0)}function $c(t){var e=Ei(t);if(Cw(e))return t}function Ek(t,e){if(t==="change")return e}var aE=!1;if(Bn){var dd;if(Bn){var fd="oninput"in document;if(!fd){var Zy=document.createElement("div");Zy.setAttribute("oninput","return;"),fd=typeof Zy.oninput=="function"}dd=fd}else dd=!1;aE=dd&&(!document.documentMode||9<document.documentMode)}function e_(){oa&&(oa.detachEvent("onpropertychange",lE),Ra=oa=null)}function lE(t){if(t.propertyName==="value"&&$c(Ra)){var e=[];oE(e,Ra,t,Op(t)),zw(wk,e)}}function Ik(t,e,n){t==="focusin"?(e_(),oa=e,Ra=n,oa.attachEvent("onpropertychange",lE)):t==="focusout"&&e_()}function Tk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $c(Ra)}function xk(t,e){if(t==="click")return $c(e)}function Sk(t,e){if(t==="input"||t==="change")return $c(e)}function Ak(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:Ak;function Pa(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Xd.call(e,s)||!un(t[s],e[s]))return!1}return!0}function t_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function n_(t,e){var n=t_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=t_(n)}}function uE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cE(){for(var t=window,e=Uu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Uu(t.document)}return e}function qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kk(t){var e=cE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&uE(n.ownerDocument.documentElement,n)){if(r!==null&&qp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=n_(n,i);var o=n_(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Rk=Bn&&"documentMode"in document&&11>=document.documentMode,vi=null,yf=null,aa=null,_f=!1;function r_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_f||vi==null||vi!==Uu(r)||(r=vi,"selectionStart"in r&&qp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),aa&&Pa(aa,r)||(aa=r,r=Hu(yf,"onSelect"),0<r.length&&(e=new zp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vi)))}function Wl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wi={animationend:Wl("Animation","AnimationEnd"),animationiteration:Wl("Animation","AnimationIteration"),animationstart:Wl("Animation","AnimationStart"),transitionend:Wl("Transition","TransitionEnd")},pd={},hE={};Bn&&(hE=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function qc(t){if(pd[t])return pd[t];if(!wi[t])return t;var e=wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hE)return pd[t]=e[n];return t}var dE=qc("animationend"),fE=qc("animationiteration"),pE=qc("animationstart"),mE=qc("transitionend"),gE=new Map,s_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(t,e){gE.set(t,e),qs(e,[t])}for(var md=0;md<s_.length;md++){var gd=s_[md],Pk=gd.toLowerCase(),Ck=gd[0].toUpperCase()+gd.slice(1);qr(Pk,"on"+Ck)}qr(dE,"onAnimationEnd");qr(fE,"onAnimationIteration");qr(pE,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(mE,"onTransitionEnd");Fi("onMouseEnter",["mouseout","mouseover"]);Fi("onMouseLeave",["mouseout","mouseover"]);Fi("onPointerEnter",["pointerout","pointerover"]);Fi("onPointerLeave",["pointerout","pointerover"]);qs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qs("onBeforeInput",["compositionend","keypress","textInput","paste"]);qs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function i_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,PA(r,e,void 0,t),t.currentTarget=null}function yE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&s.isPropagationStopped())break e;i_(s,a,c),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&s.isPropagationStopped())break e;i_(s,a,c),i=u}}}if(Bu)throw t=ff,Bu=!1,ff=null,t}function _e(t,e){var n=e[Tf];n===void 0&&(n=e[Tf]=new Set);var r=t+"__bubble";n.has(r)||(_E(e,t,2,!1),n.add(r))}function yd(t,e,n){var r=0;e&&(r|=4),_E(n,t,r,e)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function Ca(t){if(!t[Hl]){t[Hl]=!0,Sw.forEach(function(n){n!=="selectionchange"&&(bk.has(n)||yd(n,!1,t),yd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hl]||(e[Hl]=!0,yd("selectionchange",!1,e))}}function _E(t,e,n,r){switch(tE(e)){case 1:var s=KA;break;case 4:s=WA;break;default:s=Fp}n=s.bind(null,e,n,t),s=void 0,!df||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function _d(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;a!==null;){if(o=fs(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}zw(function(){var c=i,d=Op(n),m=[];e:{var g=gE.get(t);if(g!==void 0){var I=zp,x=t;switch(t){case"keypress":if(mu(n)===0)break e;case"keydown":case"keyup":I=ak;break;case"focusin":x="focus",I=hd;break;case"focusout":x="blur",I=hd;break;case"beforeblur":case"afterblur":I=hd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Hy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=QA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=ck;break;case dE:case fE:case pE:I=JA;break;case mE:I=dk;break;case"scroll":I=HA;break;case"wheel":I=pk;break;case"copy":case"cut":case"paste":I=ek;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Qy}var P=(e&4)!==0,C=!P&&t==="scroll",w=P?g!==null?g+"Capture":null:g;P=[];for(var _=c,E;_!==null;){E=_;var V=E.stateNode;if(E.tag===5&&V!==null&&(E=V,w!==null&&(V=xa(_,w),V!=null&&P.push(ba(_,V,E)))),C)break;_=_.return}0<P.length&&(g=new I(g,x,null,n,d),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",g&&n!==cf&&(x=n.relatedTarget||n.fromElement)&&(fs(x)||x[$n]))break e;if((I||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,I?(x=n.relatedTarget||n.toElement,I=c,x=x?fs(x):null,x!==null&&(C=Ks(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(I=null,x=c),I!==x)){if(P=Hy,V="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=Qy,V="onPointerLeave",w="onPointerEnter",_="pointer"),C=I==null?g:Ei(I),E=x==null?g:Ei(x),g=new P(V,_+"leave",I,n,d),g.target=C,g.relatedTarget=E,V=null,fs(d)===c&&(P=new P(w,_+"enter",x,n,d),P.target=E,P.relatedTarget=C,V=P),C=V,I&&x)t:{for(P=I,w=x,_=0,E=P;E;E=si(E))_++;for(E=0,V=w;V;V=si(V))E++;for(;0<_-E;)P=si(P),_--;for(;0<E-_;)w=si(w),E--;for(;_--;){if(P===w||w!==null&&P===w.alternate)break t;P=si(P),w=si(w)}P=null}else P=null;I!==null&&o_(m,g,I,P,!1),x!==null&&C!==null&&o_(m,C,x,P,!0)}}e:{if(g=c?Ei(c):window,I=g.nodeName&&g.nodeName.toLowerCase(),I==="select"||I==="input"&&g.type==="file")var L=Ek;else if(Jy(g))if(aE)L=Sk;else{L=Tk;var j=Ik}else(I=g.nodeName)&&I.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=xk);if(L&&(L=L(t,c))){oE(m,L,n,d);break e}j&&j(t,g,c),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&sf(g,"number",g.value)}switch(j=c?Ei(c):window,t){case"focusin":(Jy(j)||j.contentEditable==="true")&&(vi=j,yf=c,aa=null);break;case"focusout":aa=yf=vi=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,r_(m,n,d);break;case"selectionchange":if(Rk)break;case"keydown":case"keyup":r_(m,n,d)}var T;if($p)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else _i?sE(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(rE&&n.locale!=="ko"&&(_i||v!=="onCompositionStart"?v==="onCompositionEnd"&&_i&&(T=nE()):(Er=d,Up="value"in Er?Er.value:Er.textContent,_i=!0)),j=Hu(c,v),0<j.length&&(v=new Gy(v,t,null,n,d),m.push({event:v,listeners:j}),T?v.data=T:(T=iE(n),T!==null&&(v.data=T)))),(T=gk?yk(t,n):_k(t,n))&&(c=Hu(c,"onBeforeInput"),0<c.length&&(d=new Gy("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:c}),d.data=T))}yE(m,e)})}function ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=xa(t,n),i!=null&&r.unshift(ba(t,i,s)),i=xa(t,e),i!=null&&r.push(ba(t,i,s))),t=t.return}return r}function si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function o_(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,s?(u=xa(n,i),u!=null&&o.unshift(ba(n,u,a))):s||(u=xa(n,i),u!=null&&o.push(ba(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Nk=/\r\n?/g,Dk=/\u0000|\uFFFD/g;function a_(t){return(typeof t=="string"?t:""+t).replace(Nk,`
`).replace(Dk,"")}function Gl(t,e,n){if(e=a_(e),a_(t)!==e&&n)throw Error(U(425))}function Gu(){}var vf=null,wf=null;function Ef(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var If=typeof setTimeout=="function"?setTimeout:void 0,Vk=typeof clearTimeout=="function"?clearTimeout:void 0,l_=typeof Promise=="function"?Promise:void 0,Ok=typeof queueMicrotask=="function"?queueMicrotask:typeof l_<"u"?function(t){return l_.resolve(null).then(t).catch(Mk)}:If;function Mk(t){setTimeout(function(){throw t})}function vd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ka(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ka(e)}function kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function u_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var lo=Math.random().toString(36).slice(2),_n="__reactFiber$"+lo,Na="__reactProps$"+lo,$n="__reactContainer$"+lo,Tf="__reactEvents$"+lo,Lk="__reactListeners$"+lo,jk="__reactHandles$"+lo;function fs(t){var e=t[_n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$n]||n[_n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=u_(t);t!==null;){if(n=t[_n])return n;t=u_(t)}return e}t=n,n=t.parentNode}return null}function al(t){return t=t[_n]||t[$n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ei(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Kc(t){return t[Na]||null}var xf=[],Ii=-1;function Kr(t){return{current:t}}function ve(t){0>Ii||(t.current=xf[Ii],xf[Ii]=null,Ii--)}function ge(t,e){Ii++,xf[Ii]=t.current,t.current=e}var Lr={},ct=Kr(Lr),xt=Kr(!1),Ss=Lr;function Ui(t,e){var n=t.type.contextTypes;if(!n)return Lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function St(t){return t=t.childContextTypes,t!=null}function Qu(){ve(xt),ve(ct)}function c_(t,e,n){if(ct.current!==Lr)throw Error(U(168));ge(ct,e),ge(xt,n)}function vE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(U(108,IA(t)||"Unknown",s));return Ae({},n,r)}function Yu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Lr,Ss=ct.current,ge(ct,t),ge(xt,xt.current),!0}function h_(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=vE(t,e,Ss),r.__reactInternalMemoizedMergedChildContext=t,ve(xt),ve(ct),ge(ct,t)):ve(xt),ge(xt,n)}var Dn=null,Wc=!1,wd=!1;function wE(t){Dn===null?Dn=[t]:Dn.push(t)}function Fk(t){Wc=!0,wE(t)}function Wr(){if(!wd&&Dn!==null){wd=!0;var t=0,e=fe;try{var n=Dn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Dn=null,Wc=!1}catch(s){throw Dn!==null&&(Dn=Dn.slice(t+1)),Kw(Mp,Wr),s}finally{fe=e,wd=!1}}return null}var Ti=[],xi=0,Xu=null,Ju=0,Ft=[],Ut=0,As=null,Vn=1,On="";function ss(t,e){Ti[xi++]=Ju,Ti[xi++]=Xu,Xu=t,Ju=e}function EE(t,e,n){Ft[Ut++]=Vn,Ft[Ut++]=On,Ft[Ut++]=As,As=t;var r=Vn;t=On;var s=32-an(r)-1;r&=~(1<<s),n+=1;var i=32-an(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Vn=1<<32-an(e)+s|n<<s|r,On=i+t}else Vn=1<<i|n<<s|r,On=t}function Kp(t){t.return!==null&&(ss(t,1),EE(t,1,0))}function Wp(t){for(;t===Xu;)Xu=Ti[--xi],Ti[xi]=null,Ju=Ti[--xi],Ti[xi]=null;for(;t===As;)As=Ft[--Ut],Ft[Ut]=null,On=Ft[--Ut],Ft[Ut]=null,Vn=Ft[--Ut],Ft[Ut]=null}var Vt=null,Nt=null,Ee=!1,rn=null;function IE(t,e){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function d_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Vt=t,Nt=kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Vt=t,Nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=As!==null?{id:Vn,overflow:On}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Vt=t,Nt=null,!0):!1;default:return!1}}function Sf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Af(t){if(Ee){var e=Nt;if(e){var n=e;if(!d_(t,e)){if(Sf(t))throw Error(U(418));e=kr(n.nextSibling);var r=Vt;e&&d_(t,e)?IE(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Vt=t)}}else{if(Sf(t))throw Error(U(418));t.flags=t.flags&-4097|2,Ee=!1,Vt=t}}}function f_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vt=t}function Ql(t){if(t!==Vt)return!1;if(!Ee)return f_(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ef(t.type,t.memoizedProps)),e&&(e=Nt)){if(Sf(t))throw TE(),Error(U(418));for(;e;)IE(t,e),e=kr(e.nextSibling)}if(f_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nt=kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nt=null}}else Nt=Vt?kr(t.stateNode.nextSibling):null;return!0}function TE(){for(var t=Nt;t;)t=kr(t.nextSibling)}function zi(){Nt=Vt=null,Ee=!1}function Hp(t){rn===null?rn=[t]:rn.push(t)}var Uk=Yn.ReactCurrentBatchConfig;function Lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Yl(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function p_(t){var e=t._init;return e(t._payload)}function xE(t){function e(w,_){if(t){var E=w.deletions;E===null?(w.deletions=[_],w.flags|=16):E.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function s(w,_){return w=br(w,_),w.index=0,w.sibling=null,w}function i(w,_,E){return w.index=E,t?(E=w.alternate,E!==null?(E=E.index,E<_?(w.flags|=2,_):E):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,_,E,V){return _===null||_.tag!==6?(_=kd(E,w.mode,V),_.return=w,_):(_=s(_,E),_.return=w,_)}function u(w,_,E,V){var L=E.type;return L===yi?d(w,_,E.props.children,V,E.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===dr&&p_(L)===_.type)?(V=s(_,E.props),V.ref=Lo(w,_,E),V.return=w,V):(V=Iu(E.type,E.key,E.props,null,w.mode,V),V.ref=Lo(w,_,E),V.return=w,V)}function c(w,_,E,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==E.containerInfo||_.stateNode.implementation!==E.implementation?(_=Rd(E,w.mode,V),_.return=w,_):(_=s(_,E.children||[]),_.return=w,_)}function d(w,_,E,V,L){return _===null||_.tag!==7?(_=vs(E,w.mode,V,L),_.return=w,_):(_=s(_,E),_.return=w,_)}function m(w,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return _=kd(""+_,w.mode,E),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Fl:return E=Iu(_.type,_.key,_.props,null,w.mode,E),E.ref=Lo(w,null,_),E.return=w,E;case gi:return _=Rd(_,w.mode,E),_.return=w,_;case dr:var V=_._init;return m(w,V(_._payload),E)}if(Wo(_)||No(_))return _=vs(_,w.mode,E,null),_.return=w,_;Yl(w,_)}return null}function g(w,_,E,V){var L=_!==null?_.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return L!==null?null:a(w,_,""+E,V);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Fl:return E.key===L?u(w,_,E,V):null;case gi:return E.key===L?c(w,_,E,V):null;case dr:return L=E._init,g(w,_,L(E._payload),V)}if(Wo(E)||No(E))return L!==null?null:d(w,_,E,V,null);Yl(w,E)}return null}function I(w,_,E,V,L){if(typeof V=="string"&&V!==""||typeof V=="number")return w=w.get(E)||null,a(_,w,""+V,L);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Fl:return w=w.get(V.key===null?E:V.key)||null,u(_,w,V,L);case gi:return w=w.get(V.key===null?E:V.key)||null,c(_,w,V,L);case dr:var j=V._init;return I(w,_,E,j(V._payload),L)}if(Wo(V)||No(V))return w=w.get(E)||null,d(_,w,V,L,null);Yl(_,V)}return null}function x(w,_,E,V){for(var L=null,j=null,T=_,v=_=0,S=null;T!==null&&v<E.length;v++){T.index>v?(S=T,T=null):S=T.sibling;var k=g(w,T,E[v],V);if(k===null){T===null&&(T=S);break}t&&T&&k.alternate===null&&e(w,T),_=i(k,_,v),j===null?L=k:j.sibling=k,j=k,T=S}if(v===E.length)return n(w,T),Ee&&ss(w,v),L;if(T===null){for(;v<E.length;v++)T=m(w,E[v],V),T!==null&&(_=i(T,_,v),j===null?L=T:j.sibling=T,j=T);return Ee&&ss(w,v),L}for(T=r(w,T);v<E.length;v++)S=I(T,w,v,E[v],V),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?v:S.key),_=i(S,_,v),j===null?L=S:j.sibling=S,j=S);return t&&T.forEach(function(R){return e(w,R)}),Ee&&ss(w,v),L}function P(w,_,E,V){var L=No(E);if(typeof L!="function")throw Error(U(150));if(E=L.call(E),E==null)throw Error(U(151));for(var j=L=null,T=_,v=_=0,S=null,k=E.next();T!==null&&!k.done;v++,k=E.next()){T.index>v?(S=T,T=null):S=T.sibling;var R=g(w,T,k.value,V);if(R===null){T===null&&(T=S);break}t&&T&&R.alternate===null&&e(w,T),_=i(R,_,v),j===null?L=R:j.sibling=R,j=R,T=S}if(k.done)return n(w,T),Ee&&ss(w,v),L;if(T===null){for(;!k.done;v++,k=E.next())k=m(w,k.value,V),k!==null&&(_=i(k,_,v),j===null?L=k:j.sibling=k,j=k);return Ee&&ss(w,v),L}for(T=r(w,T);!k.done;v++,k=E.next())k=I(T,w,v,k.value,V),k!==null&&(t&&k.alternate!==null&&T.delete(k.key===null?v:k.key),_=i(k,_,v),j===null?L=k:j.sibling=k,j=k);return t&&T.forEach(function(N){return e(w,N)}),Ee&&ss(w,v),L}function C(w,_,E,V){if(typeof E=="object"&&E!==null&&E.type===yi&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Fl:e:{for(var L=E.key,j=_;j!==null;){if(j.key===L){if(L=E.type,L===yi){if(j.tag===7){n(w,j.sibling),_=s(j,E.props.children),_.return=w,w=_;break e}}else if(j.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===dr&&p_(L)===j.type){n(w,j.sibling),_=s(j,E.props),_.ref=Lo(w,j,E),_.return=w,w=_;break e}n(w,j);break}else e(w,j);j=j.sibling}E.type===yi?(_=vs(E.props.children,w.mode,V,E.key),_.return=w,w=_):(V=Iu(E.type,E.key,E.props,null,w.mode,V),V.ref=Lo(w,_,E),V.return=w,w=V)}return o(w);case gi:e:{for(j=E.key;_!==null;){if(_.key===j)if(_.tag===4&&_.stateNode.containerInfo===E.containerInfo&&_.stateNode.implementation===E.implementation){n(w,_.sibling),_=s(_,E.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=Rd(E,w.mode,V),_.return=w,w=_}return o(w);case dr:return j=E._init,C(w,_,j(E._payload),V)}if(Wo(E))return x(w,_,E,V);if(No(E))return P(w,_,E,V);Yl(w,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,_!==null&&_.tag===6?(n(w,_.sibling),_=s(_,E),_.return=w,w=_):(n(w,_),_=kd(E,w.mode,V),_.return=w,w=_),o(w)):n(w,_)}return C}var Bi=xE(!0),SE=xE(!1),Zu=Kr(null),ec=null,Si=null,Gp=null;function Qp(){Gp=Si=ec=null}function Yp(t){var e=Zu.current;ve(Zu),t._currentValue=e}function kf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Di(t,e){ec=t,Gp=Si=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(It=!0),t.firstContext=null)}function Gt(t){var e=t._currentValue;if(Gp!==t)if(t={context:t,memoizedValue:e,next:null},Si===null){if(ec===null)throw Error(U(308));Si=t,ec.dependencies={lanes:0,firstContext:t}}else Si=Si.next=t;return e}var ps=null;function Xp(t){ps===null?ps=[t]:ps.push(t)}function AE(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Xp(e)):(n.next=s.next,s.next=n),e.interleaved=n,qn(t,r)}function qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function Jp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,qn(t,n)}return s=r.interleaved,s===null?(e.next=e,Xp(r)):(e.next=s.next,s.next=e),r.interleaved=e,qn(t,n)}function gu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lp(t,n)}}function m_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tc(t,e,n,r){var s=t.updateQueue;fr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,d=c=u=null,a=i;do{var g=a.lane,I=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:I,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,P=a;switch(g=e,I=n,P.tag){case 1:if(x=P.payload,typeof x=="function"){m=x.call(I,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=P.payload,g=typeof x=="function"?x.call(I,m,g):x,g==null)break e;m=Ae({},m,g);break e;case 2:fr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[a]:g.push(a))}else I={eventTime:I,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=I,u=m):d=d.next=I,o|=g;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;g=a,a=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(d===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Rs|=o,t.lanes=o,t.memoizedState=m}}function g_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(U(191,s));s.call(r)}}}var ll={},In=Kr(ll),Da=Kr(ll),Va=Kr(ll);function ms(t){if(t===ll)throw Error(U(174));return t}function Zp(t,e){switch(ge(Va,e),ge(Da,t),ge(In,ll),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:af(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=af(e,t)}ve(In),ge(In,e)}function $i(){ve(In),ve(Da),ve(Va)}function RE(t){ms(Va.current);var e=ms(In.current),n=af(e,t.type);e!==n&&(ge(Da,t),ge(In,n))}function em(t){Da.current===t&&(ve(In),ve(Da))}var Te=Kr(0);function nc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ed=[];function tm(){for(var t=0;t<Ed.length;t++)Ed[t]._workInProgressVersionPrimary=null;Ed.length=0}var yu=Yn.ReactCurrentDispatcher,Id=Yn.ReactCurrentBatchConfig,ks=0,Se=null,Be=null,Ge=null,rc=!1,la=!1,Oa=0,zk=0;function rt(){throw Error(U(321))}function nm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function rm(t,e,n,r,s,i){if(ks=i,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yu.current=t===null||t.memoizedState===null?Kk:Wk,t=n(r,s),la){i=0;do{if(la=!1,Oa=0,25<=i)throw Error(U(301));i+=1,Ge=Be=null,e.updateQueue=null,yu.current=Hk,t=n(r,s)}while(la)}if(yu.current=sc,e=Be!==null&&Be.next!==null,ks=0,Ge=Be=Se=null,rc=!1,e)throw Error(U(300));return t}function sm(){var t=Oa!==0;return Oa=0,t}function gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Se.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function Qt(){if(Be===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=Ge===null?Se.memoizedState:Ge.next;if(e!==null)Ge=e,Be=t;else{if(t===null)throw Error(U(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ge===null?Se.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function Ma(t,e){return typeof e=="function"?e(t):e}function Td(t){var e=Qt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Be,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,u=null,c=i;do{var d=c.lane;if((ks&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=m,o=r):u=u.next=m,Se.lanes|=d,Rs|=d}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=a,un(r,e.memoizedState)||(It=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Se.lanes|=i,Rs|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xd(t){var e=Qt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);un(i,e.memoizedState)||(It=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function PE(){}function CE(t,e){var n=Se,r=Qt(),s=e(),i=!un(r.memoizedState,s);if(i&&(r.memoizedState=s,It=!0),r=r.queue,im(DE.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,La(9,NE.bind(null,n,r,s,e),void 0,null),Qe===null)throw Error(U(349));ks&30||bE(n,e,s)}return s}function bE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function NE(t,e,n,r){e.value=n,e.getSnapshot=r,VE(e)&&OE(t)}function DE(t,e,n){return n(function(){VE(e)&&OE(t)})}function VE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function OE(t){var e=qn(t,1);e!==null&&ln(e,t,1,-1)}function y_(t){var e=gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:t},e.queue=t,t=t.dispatch=qk.bind(null,Se,t),[e.memoizedState,t]}function La(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ME(){return Qt().memoizedState}function _u(t,e,n,r){var s=gn();Se.flags|=t,s.memoizedState=La(1|e,n,void 0,r===void 0?null:r)}function Hc(t,e,n,r){var s=Qt();r=r===void 0?null:r;var i=void 0;if(Be!==null){var o=Be.memoizedState;if(i=o.destroy,r!==null&&nm(r,o.deps)){s.memoizedState=La(e,n,i,r);return}}Se.flags|=t,s.memoizedState=La(1|e,n,i,r)}function __(t,e){return _u(8390656,8,t,e)}function im(t,e){return Hc(2048,8,t,e)}function LE(t,e){return Hc(4,2,t,e)}function jE(t,e){return Hc(4,4,t,e)}function FE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function UE(t,e,n){return n=n!=null?n.concat([t]):null,Hc(4,4,FE.bind(null,e,t),n)}function om(){}function zE(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function BE(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function $E(t,e,n){return ks&21?(un(n,e)||(n=Gw(),Se.lanes|=n,Rs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,It=!0),t.memoizedState=n)}function Bk(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=Id.transition;Id.transition={};try{t(!1),e()}finally{fe=n,Id.transition=r}}function qE(){return Qt().memoizedState}function $k(t,e,n){var r=Cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},KE(t))WE(e,n);else if(n=AE(t,e,n,r),n!==null){var s=mt();ln(n,t,r,s),HE(n,e,r)}}function qk(t,e,n){var r=Cr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(KE(t))WE(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,un(a,o)){var u=e.interleaved;u===null?(s.next=s,Xp(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=AE(t,e,s,r),n!==null&&(s=mt(),ln(n,t,r,s),HE(n,e,r))}}function KE(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function WE(t,e){la=rc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function HE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lp(t,n)}}var sc={readContext:Gt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},Kk={readContext:Gt,useCallback:function(t,e){return gn().memoizedState=[t,e===void 0?null:e],t},useContext:Gt,useEffect:__,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_u(4194308,4,FE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _u(4194308,4,t,e)},useInsertionEffect:function(t,e){return _u(4,2,t,e)},useMemo:function(t,e){var n=gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=$k.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=gn();return t={current:t},e.memoizedState=t},useState:y_,useDebugValue:om,useDeferredValue:function(t){return gn().memoizedState=t},useTransition:function(){var t=y_(!1),e=t[0];return t=Bk.bind(null,t[1]),gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,s=gn();if(Ee){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Qe===null)throw Error(U(349));ks&30||bE(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,__(DE.bind(null,r,i,t),[t]),r.flags|=2048,La(9,NE.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=gn(),e=Qe.identifierPrefix;if(Ee){var n=On,r=Vn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Wk={readContext:Gt,useCallback:zE,useContext:Gt,useEffect:im,useImperativeHandle:UE,useInsertionEffect:LE,useLayoutEffect:jE,useMemo:BE,useReducer:Td,useRef:ME,useState:function(){return Td(Ma)},useDebugValue:om,useDeferredValue:function(t){var e=Qt();return $E(e,Be.memoizedState,t)},useTransition:function(){var t=Td(Ma)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:PE,useSyncExternalStore:CE,useId:qE,unstable_isNewReconciler:!1},Hk={readContext:Gt,useCallback:zE,useContext:Gt,useEffect:im,useImperativeHandle:UE,useInsertionEffect:LE,useLayoutEffect:jE,useMemo:BE,useReducer:xd,useRef:ME,useState:function(){return xd(Ma)},useDebugValue:om,useDeferredValue:function(t){var e=Qt();return Be===null?e.memoizedState=t:$E(e,Be.memoizedState,t)},useTransition:function(){var t=xd(Ma)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:PE,useSyncExternalStore:CE,useId:qE,unstable_isNewReconciler:!1};function en(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Rf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gc={isMounted:function(t){return(t=t._reactInternals)?Ks(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),s=Cr(t),i=Fn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Rr(t,i,s),e!==null&&(ln(e,t,s,r),gu(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),s=Cr(t),i=Fn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Rr(t,i,s),e!==null&&(ln(e,t,s,r),gu(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=Cr(t),s=Fn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Rr(t,s,r),e!==null&&(ln(e,t,r,n),gu(e,t,r))}};function v_(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Pa(n,r)||!Pa(s,i):!0}function GE(t,e,n){var r=!1,s=Lr,i=e.contextType;return typeof i=="object"&&i!==null?i=Gt(i):(s=St(e)?Ss:ct.current,r=e.contextTypes,i=(r=r!=null)?Ui(t,s):Lr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function w_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Gc.enqueueReplaceState(e,e.state,null)}function Pf(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Jp(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Gt(i):(i=St(e)?Ss:ct.current,s.context=Ui(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Rf(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Gc.enqueueReplaceState(s,s.state,null),tc(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function qi(t,e){try{var n="",r=e;do n+=EA(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Sd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Gk=typeof WeakMap=="function"?WeakMap:Map;function QE(t,e,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){oc||(oc=!0,Uf=r),Cf(t,e)},n}function YE(t,e,n){n=Fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Cf(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Cf(t,e),typeof r!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function E_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Gk;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=lR.bind(null,t,e,n),e.then(t,t))}function I_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function T_(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fn(-1,1),e.tag=2,Rr(n,e,1))),n.lanes|=1),t)}var Qk=Yn.ReactCurrentOwner,It=!1;function ft(t,e,n,r){e.child=t===null?SE(e,null,n,r):Bi(e,t.child,n,r)}function x_(t,e,n,r,s){n=n.render;var i=e.ref;return Di(e,s),r=rm(t,e,n,r,i,s),n=sm(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Kn(t,e,s)):(Ee&&n&&Kp(e),e.flags|=1,ft(t,e,r,s),e.child)}function S_(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!pm(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,XE(t,e,i,r,s)):(t=Iu(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(o,r)&&t.ref===e.ref)return Kn(t,e,s)}return e.flags|=1,t=br(i,r),t.ref=e.ref,t.return=e,e.child=t}function XE(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Pa(i,r)&&t.ref===e.ref)if(It=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(It=!0);else return e.lanes=t.lanes,Kn(t,e,s)}return bf(t,e,n,r,s)}function JE(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(ki,Pt),Pt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(ki,Pt),Pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ge(ki,Pt),Pt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ge(ki,Pt),Pt|=r;return ft(t,e,s,n),e.child}function ZE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bf(t,e,n,r,s){var i=St(n)?Ss:ct.current;return i=Ui(e,i),Di(e,s),n=rm(t,e,n,r,i,s),r=sm(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Kn(t,e,s)):(Ee&&r&&Kp(e),e.flags|=1,ft(t,e,n,s),e.child)}function A_(t,e,n,r,s){if(St(n)){var i=!0;Yu(e)}else i=!1;if(Di(e,s),e.stateNode===null)vu(t,e),GE(e,n,r),Pf(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Gt(c):(c=St(n)?Ss:ct.current,c=Ui(e,c));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&w_(e,o,r,c),fr=!1;var g=e.memoizedState;o.state=g,tc(e,r,o,s),u=e.memoizedState,a!==r||g!==u||xt.current||fr?(typeof d=="function"&&(Rf(e,n,d,r),u=e.memoizedState),(a=fr||v_(e,n,a,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,kE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:en(e.type,a),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Gt(u):(u=St(n)?Ss:ct.current,u=Ui(e,u));var I=n.getDerivedStateFromProps;(d=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||g!==u)&&w_(e,o,r,u),fr=!1,g=e.memoizedState,o.state=g,tc(e,r,o,s);var x=e.memoizedState;a!==m||g!==x||xt.current||fr?(typeof I=="function"&&(Rf(e,n,I,r),x=e.memoizedState),(c=fr||v_(e,n,c,r,g,x,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Nf(t,e,n,r,i,s)}function Nf(t,e,n,r,s,i){ZE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&h_(e,n,!1),Kn(t,e,i);r=e.stateNode,Qk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bi(e,t.child,null,i),e.child=Bi(e,null,a,i)):ft(t,e,a,i),e.memoizedState=r.state,s&&h_(e,n,!0),e.child}function eI(t){var e=t.stateNode;e.pendingContext?c_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&c_(t,e.context,!1),Zp(t,e.containerInfo)}function k_(t,e,n,r,s){return zi(),Hp(s),e.flags|=256,ft(t,e,n,r),e.child}var Df={dehydrated:null,treeContext:null,retryLane:0};function Vf(t){return{baseLanes:t,cachePool:null,transitions:null}}function tI(t,e,n){var r=e.pendingProps,s=Te.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ge(Te,s&1),t===null)return Af(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Xc(o,r,0,null),t=vs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Vf(n),e.memoizedState=Df,t):am(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return Yk(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=br(s,u),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=br(a,i):(i=vs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Vf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Df,r}return i=t.child,t=i.sibling,r=br(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function am(t,e){return e=Xc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xl(t,e,n,r){return r!==null&&Hp(r),Bi(e,t.child,null,n),t=am(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Yk(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Sd(Error(U(422))),Xl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Xc({mode:"visible",children:r.children},s,0,null),i=vs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Bi(e,t.child,null,o),e.child.memoizedState=Vf(o),e.memoizedState=Df,i);if(!(e.mode&1))return Xl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(U(419)),r=Sd(i,r,void 0),Xl(t,e,o,r)}if(a=(o&t.childLanes)!==0,It||a){if(r=Qe,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,qn(t,s),ln(r,t,s,-1))}return fm(),r=Sd(Error(U(421))),Xl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=uR.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Nt=kr(s.nextSibling),Vt=e,Ee=!0,rn=null,t!==null&&(Ft[Ut++]=Vn,Ft[Ut++]=On,Ft[Ut++]=As,Vn=t.id,On=t.overflow,As=e),e=am(e,r.children),e.flags|=4096,e)}function R_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kf(t.return,e,n)}function Ad(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function nI(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ft(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&R_(t,n,e);else if(t.tag===19)R_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Te,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&nc(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Ad(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&nc(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Ad(e,!0,n,null,i);break;case"together":Ad(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Rs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Xk(t,e,n){switch(e.tag){case 3:eI(e),zi();break;case 5:RE(e);break;case 1:St(e.type)&&Yu(e);break;case 4:Zp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ge(Zu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?tI(t,e,n):(ge(Te,Te.current&1),t=Kn(t,e,n),t!==null?t.sibling:null);ge(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return nI(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ge(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,JE(t,e,n)}return Kn(t,e,n)}var rI,Of,sI,iI;rI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Of=function(){};sI=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ms(In.current);var i=null;switch(n){case"input":s=nf(t,s),r=nf(t,r),i=[];break;case"select":s=Ae({},s,{value:void 0}),r=Ae({},r,{value:void 0}),i=[];break;case"textarea":s=of(t,s),r=of(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Gu)}lf(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ia.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ia.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&_e("scroll",t),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};iI=function(t,e,n,r){n!==r&&(e.flags|=4)};function jo(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Jk(t,e,n){var r=e.pendingProps;switch(Wp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return St(e.type)&&Qu(),st(e),null;case 3:return r=e.stateNode,$i(),ve(xt),ve(ct),tm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ql(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rn!==null&&($f(rn),rn=null))),Of(t,e),st(e),null;case 5:em(e);var s=ms(Va.current);if(n=e.type,t!==null&&e.stateNode!=null)sI(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return st(e),null}if(t=ms(In.current),Ql(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[_n]=e,r[Na]=i,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(s=0;s<Go.length;s++)_e(Go[s],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Ly(r,i),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},_e("invalid",r);break;case"textarea":Fy(r,i),_e("invalid",r)}lf(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Gl(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Gl(r.textContent,a,t),s=["children",""+a]):Ia.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Ul(r),jy(r,i,!0);break;case"textarea":Ul(r),Uy(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Gu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_n]=e,t[Na]=r,rI(t,e,!1,!1),e.stateNode=t;e:{switch(o=uf(n,r),n){case"dialog":_e("cancel",t),_e("close",t),s=r;break;case"iframe":case"object":case"embed":_e("load",t),s=r;break;case"video":case"audio":for(s=0;s<Go.length;s++)_e(Go[s],t);s=r;break;case"source":_e("error",t),s=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),s=r;break;case"details":_e("toggle",t),s=r;break;case"input":Ly(t,r),s=nf(t,r),_e("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ae({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Fy(t,r),s=of(t,r),_e("invalid",t);break;default:s=r}lf(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Mw(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Vw(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ta(t,u):typeof u=="number"&&Ta(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ia.hasOwnProperty(i)?u!=null&&i==="onScroll"&&_e("scroll",t):u!=null&&bp(t,i,u,o))}switch(n){case"input":Ul(t),jy(t,r,!1);break;case"textarea":Ul(t),Uy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Pi(t,!!r.multiple,i,!1):r.defaultValue!=null&&Pi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Gu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)iI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=ms(Va.current),ms(In.current),Ql(e)){if(r=e.stateNode,n=e.memoizedProps,r[_n]=e,(i=r.nodeValue!==n)&&(t=Vt,t!==null))switch(t.tag){case 3:Gl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Gl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_n]=e,e.stateNode=r}return st(e),null;case 13:if(ve(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Nt!==null&&e.mode&1&&!(e.flags&128))TE(),zi(),e.flags|=98560,i=!1;else if(i=Ql(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(U(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[_n]=e}else zi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),i=!1}else rn!==null&&($f(rn),rn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?$e===0&&($e=3):fm())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return $i(),Of(t,e),t===null&&Ca(e.stateNode.containerInfo),st(e),null;case 10:return Yp(e.type._context),st(e),null;case 17:return St(e.type)&&Qu(),st(e),null;case 19:if(ve(Te),i=e.memoizedState,i===null)return st(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)jo(i,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nc(t),o!==null){for(e.flags|=128,jo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Te,Te.current&1|2),e.child}t=t.sibling}i.tail!==null&&be()>Ki&&(e.flags|=128,r=!0,jo(i,!1),e.lanes=4194304)}else{if(!r)if(t=nc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),jo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ee)return st(e),null}else 2*be()-i.renderingStartTime>Ki&&n!==1073741824&&(e.flags|=128,r=!0,jo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=be(),e.sibling=null,n=Te.current,ge(Te,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return dm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Pt&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function Zk(t,e){switch(Wp(e),e.tag){case 1:return St(e.type)&&Qu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $i(),ve(xt),ve(ct),tm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return em(e),null;case 13:if(ve(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Te),null;case 4:return $i(),null;case 10:return Yp(e.type._context),null;case 22:case 23:return dm(),null;case 24:return null;default:return null}}var Jl=!1,at=!1,eR=typeof WeakSet=="function"?WeakSet:Set,G=null;function Ai(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function Mf(t,e,n){try{n()}catch(r){Re(t,e,r)}}var P_=!1;function tR(t,e){if(vf=Ku,t=cE(),qp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,m=t,g=null;t:for(;;){for(var I;m!==n||s!==0&&m.nodeType!==3||(a=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)g=m,m=I;for(;;){if(m===t)break t;if(g===n&&++c===s&&(a=o),g===i&&++d===r&&(u=o),(I=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=I}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wf={focusedElem:t,selectionRange:n},Ku=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var P=x.memoizedProps,C=x.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?P:en(e.type,P),C);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(V){Re(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return x=P_,P_=!1,x}function ua(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Mf(e,n,i)}s=s.next}while(s!==r)}}function Qc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Lf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function oI(t){var e=t.alternate;e!==null&&(t.alternate=null,oI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_n],delete e[Na],delete e[Tf],delete e[Lk],delete e[jk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function aI(t){return t.tag===5||t.tag===3||t.tag===4}function C_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||aI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gu));else if(r!==4&&(t=t.child,t!==null))for(jf(t,e,n),t=t.sibling;t!==null;)jf(t,e,n),t=t.sibling}function Ff(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ff(t,e,n),t=t.sibling;t!==null;)Ff(t,e,n),t=t.sibling}var Xe=null,tn=!1;function ar(t,e,n){for(n=n.child;n!==null;)lI(t,e,n),n=n.sibling}function lI(t,e,n){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(zc,n)}catch{}switch(n.tag){case 5:at||Ai(n,e);case 6:var r=Xe,s=tn;Xe=null,ar(t,e,n),Xe=r,tn=s,Xe!==null&&(tn?(t=Xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(tn?(t=Xe,n=n.stateNode,t.nodeType===8?vd(t.parentNode,n):t.nodeType===1&&vd(t,n),ka(t)):vd(Xe,n.stateNode));break;case 4:r=Xe,s=tn,Xe=n.stateNode.containerInfo,tn=!0,ar(t,e,n),Xe=r,tn=s;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Mf(n,e,o),s=s.next}while(s!==r)}ar(t,e,n);break;case 1:if(!at&&(Ai(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Re(n,e,a)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,ar(t,e,n),at=r):ar(t,e,n);break;default:ar(t,e,n)}}function b_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eR),e.forEach(function(r){var s=cR.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xe=a.stateNode,tn=!1;break e;case 3:Xe=a.stateNode.containerInfo,tn=!0;break e;case 4:Xe=a.stateNode.containerInfo,tn=!0;break e}a=a.return}if(Xe===null)throw Error(U(160));lI(i,o,s),Xe=null,tn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Re(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)uI(e,t),e=e.sibling}function uI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zt(e,t),mn(t),r&4){try{ua(3,t,t.return),Qc(3,t)}catch(P){Re(t,t.return,P)}try{ua(5,t,t.return)}catch(P){Re(t,t.return,P)}}break;case 1:Zt(e,t),mn(t),r&512&&n!==null&&Ai(n,n.return);break;case 5:if(Zt(e,t),mn(t),r&512&&n!==null&&Ai(n,n.return),t.flags&32){var s=t.stateNode;try{Ta(s,"")}catch(P){Re(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&bw(s,i),uf(a,o);var c=uf(a,i);for(o=0;o<u.length;o+=2){var d=u[o],m=u[o+1];d==="style"?Mw(s,m):d==="dangerouslySetInnerHTML"?Vw(s,m):d==="children"?Ta(s,m):bp(s,d,m,c)}switch(a){case"input":rf(s,i);break;case"textarea":Nw(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var I=i.value;I!=null?Pi(s,!!i.multiple,I,!1):g!==!!i.multiple&&(i.defaultValue!=null?Pi(s,!!i.multiple,i.defaultValue,!0):Pi(s,!!i.multiple,i.multiple?[]:"",!1))}s[Na]=i}catch(P){Re(t,t.return,P)}}break;case 6:if(Zt(e,t),mn(t),r&4){if(t.stateNode===null)throw Error(U(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){Re(t,t.return,P)}}break;case 3:if(Zt(e,t),mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ka(e.containerInfo)}catch(P){Re(t,t.return,P)}break;case 4:Zt(e,t),mn(t);break;case 13:Zt(e,t),mn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(cm=be())),r&4&&b_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(at=(c=at)||d,Zt(e,t),at=c):Zt(e,t),mn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(G=t,d=t.child;d!==null;){for(m=G=d;G!==null;){switch(g=G,I=g.child,g.tag){case 0:case 11:case 14:case 15:ua(4,g,g.return);break;case 1:Ai(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(P){Re(r,n,P)}}break;case 5:Ai(g,g.return);break;case 22:if(g.memoizedState!==null){D_(m);continue}}I!==null?(I.return=g,G=I):D_(m)}d=d.sibling}e:for(d=null,m=t;;){if(m.tag===5){if(d===null){d=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Ow("display",o))}catch(P){Re(t,t.return,P)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){Re(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Zt(e,t),mn(t),r&4&&b_(t);break;case 21:break;default:Zt(e,t),mn(t)}}function mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(aI(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ta(s,""),r.flags&=-33);var i=C_(t);Ff(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=C_(t);jf(t,a,o);break;default:throw Error(U(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nR(t,e,n){G=t,cI(t)}function cI(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var s=G,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Jl;if(!o){var a=s.alternate,u=a!==null&&a.memoizedState!==null||at;a=Jl;var c=at;if(Jl=o,(at=u)&&!c)for(G=s;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?V_(s):u!==null?(u.return=o,G=u):V_(s);for(;i!==null;)G=i,cI(i),i=i.sibling;G=s,Jl=a,at=c}N_(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,G=i):N_(t)}}function N_(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||Qc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:en(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&g_(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}g_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&ka(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}at||e.flags&512&&Lf(e)}catch(g){Re(e,e.return,g)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function D_(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function V_(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qc(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Re(e,s,u)}}var i=e.return;try{Lf(e)}catch(u){Re(e,i,u)}break;case 5:var o=e.return;try{Lf(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){G=null;break}var a=e.sibling;if(a!==null){a.return=e.return,G=a;break}G=e.return}}var rR=Math.ceil,ic=Yn.ReactCurrentDispatcher,lm=Yn.ReactCurrentOwner,Kt=Yn.ReactCurrentBatchConfig,le=0,Qe=null,Le=null,et=0,Pt=0,ki=Kr(0),$e=0,ja=null,Rs=0,Yc=0,um=0,ca=null,wt=null,cm=0,Ki=1/0,bn=null,oc=!1,Uf=null,Pr=null,Zl=!1,Ir=null,ac=0,ha=0,zf=null,wu=-1,Eu=0;function mt(){return le&6?be():wu!==-1?wu:wu=be()}function Cr(t){return t.mode&1?le&2&&et!==0?et&-et:Uk.transition!==null?(Eu===0&&(Eu=Gw()),Eu):(t=fe,t!==0||(t=window.event,t=t===void 0?16:tE(t.type)),t):1}function ln(t,e,n,r){if(50<ha)throw ha=0,zf=null,Error(U(185));il(t,n,r),(!(le&2)||t!==Qe)&&(t===Qe&&(!(le&2)&&(Yc|=n),$e===4&&mr(t,et)),At(t,r),n===1&&le===0&&!(e.mode&1)&&(Ki=be()+500,Wc&&Wr()))}function At(t,e){var n=t.callbackNode;UA(t,e);var r=qu(t,t===Qe?et:0);if(r===0)n!==null&&$y(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$y(n),e===1)t.tag===0?Fk(O_.bind(null,t)):wE(O_.bind(null,t)),Ok(function(){!(le&6)&&Wr()}),n=null;else{switch(Qw(r)){case 1:n=Mp;break;case 4:n=Ww;break;case 16:n=$u;break;case 536870912:n=Hw;break;default:n=$u}n=_I(n,hI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hI(t,e){if(wu=-1,Eu=0,le&6)throw Error(U(327));var n=t.callbackNode;if(Vi()&&t.callbackNode!==n)return null;var r=qu(t,t===Qe?et:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=lc(t,r);else{e=r;var s=le;le|=2;var i=fI();(Qe!==t||et!==e)&&(bn=null,Ki=be()+500,_s(t,e));do try{oR();break}catch(a){dI(t,a)}while(!0);Qp(),ic.current=i,le=s,Le!==null?e=0:(Qe=null,et=0,e=$e)}if(e!==0){if(e===2&&(s=pf(t),s!==0&&(r=s,e=Bf(t,s))),e===1)throw n=ja,_s(t,0),mr(t,r),At(t,be()),n;if(e===6)mr(t,r);else{if(s=t.current.alternate,!(r&30)&&!sR(s)&&(e=lc(t,r),e===2&&(i=pf(t),i!==0&&(r=i,e=Bf(t,i))),e===1))throw n=ja,_s(t,0),mr(t,r),At(t,be()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:is(t,wt,bn);break;case 3:if(mr(t,r),(r&130023424)===r&&(e=cm+500-be(),10<e)){if(qu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=If(is.bind(null,t,wt,bn),e);break}is(t,wt,bn);break;case 4:if(mr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-an(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rR(r/1960))-r,10<r){t.timeoutHandle=If(is.bind(null,t,wt,bn),r);break}is(t,wt,bn);break;case 5:is(t,wt,bn);break;default:throw Error(U(329))}}}return At(t,be()),t.callbackNode===n?hI.bind(null,t):null}function Bf(t,e){var n=ca;return t.current.memoizedState.isDehydrated&&(_s(t,e).flags|=256),t=lc(t,e),t!==2&&(e=wt,wt=n,e!==null&&$f(e)),t}function $f(t){wt===null?wt=t:wt.push.apply(wt,t)}function sR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!un(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~um,e&=~Yc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-an(e),r=1<<n;t[n]=-1,e&=~r}}function O_(t){if(le&6)throw Error(U(327));Vi();var e=qu(t,0);if(!(e&1))return At(t,be()),null;var n=lc(t,e);if(t.tag!==0&&n===2){var r=pf(t);r!==0&&(e=r,n=Bf(t,r))}if(n===1)throw n=ja,_s(t,0),mr(t,e),At(t,be()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,is(t,wt,bn),At(t,be()),null}function hm(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Ki=be()+500,Wc&&Wr())}}function Ps(t){Ir!==null&&Ir.tag===0&&!(le&6)&&Vi();var e=le;le|=1;var n=Kt.transition,r=fe;try{if(Kt.transition=null,fe=1,t)return t()}finally{fe=r,Kt.transition=n,le=e,!(le&6)&&Wr()}}function dm(){Pt=ki.current,ve(ki)}function _s(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Vk(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Wp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qu();break;case 3:$i(),ve(xt),ve(ct),tm();break;case 5:em(r);break;case 4:$i();break;case 13:ve(Te);break;case 19:ve(Te);break;case 10:Yp(r.type._context);break;case 22:case 23:dm()}n=n.return}if(Qe=t,Le=t=br(t.current,null),et=Pt=e,$e=0,ja=null,um=Yc=Rs=0,wt=ca=null,ps!==null){for(e=0;e<ps.length;e++)if(n=ps[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}ps=null}return t}function dI(t,e){do{var n=Le;try{if(Qp(),yu.current=sc,rc){for(var r=Se.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}rc=!1}if(ks=0,Ge=Be=Se=null,la=!1,Oa=0,lm.current=null,n===null||n.return===null){$e=1,ja=e,Le=null;break}e:{var i=t,o=n.return,a=n,u=e;if(e=et,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var I=I_(o);if(I!==null){I.flags&=-257,T_(I,o,a,i,e),I.mode&1&&E_(i,c,e),e=I,u=c;var x=e.updateQueue;if(x===null){var P=new Set;P.add(u),e.updateQueue=P}else x.add(u);break e}else{if(!(e&1)){E_(i,c,e),fm();break e}u=Error(U(426))}}else if(Ee&&a.mode&1){var C=I_(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),T_(C,o,a,i,e),Hp(qi(u,a));break e}}i=u=qi(u,a),$e!==4&&($e=2),ca===null?ca=[i]:ca.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var w=QE(i,u,e);m_(i,w);break e;case 1:a=u;var _=i.type,E=i.stateNode;if(!(i.flags&128)&&(typeof _.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Pr===null||!Pr.has(E)))){i.flags|=65536,e&=-e,i.lanes|=e;var V=YE(i,a,e);m_(i,V);break e}}i=i.return}while(i!==null)}mI(n)}catch(L){e=L,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function fI(){var t=ic.current;return ic.current=sc,t===null?sc:t}function fm(){($e===0||$e===3||$e===2)&&($e=4),Qe===null||!(Rs&268435455)&&!(Yc&268435455)||mr(Qe,et)}function lc(t,e){var n=le;le|=2;var r=fI();(Qe!==t||et!==e)&&(bn=null,_s(t,e));do try{iR();break}catch(s){dI(t,s)}while(!0);if(Qp(),le=n,ic.current=r,Le!==null)throw Error(U(261));return Qe=null,et=0,$e}function iR(){for(;Le!==null;)pI(Le)}function oR(){for(;Le!==null&&!bA();)pI(Le)}function pI(t){var e=yI(t.alternate,t,Pt);t.memoizedProps=t.pendingProps,e===null?mI(t):Le=e,lm.current=null}function mI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Zk(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,Le=null;return}}else if(n=Jk(n,e,Pt),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);$e===0&&($e=5)}function is(t,e,n){var r=fe,s=Kt.transition;try{Kt.transition=null,fe=1,aR(t,e,n,r)}finally{Kt.transition=s,fe=r}return null}function aR(t,e,n,r){do Vi();while(Ir!==null);if(le&6)throw Error(U(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(zA(t,i),t===Qe&&(Le=Qe=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zl||(Zl=!0,_I($u,function(){return Vi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Kt.transition,Kt.transition=null;var o=fe;fe=1;var a=le;le|=4,lm.current=null,tR(t,n),uI(n,t),kk(wf),Ku=!!vf,wf=vf=null,t.current=n,nR(n),NA(),le=a,fe=o,Kt.transition=i}else t.current=n;if(Zl&&(Zl=!1,Ir=t,ac=s),i=t.pendingLanes,i===0&&(Pr=null),OA(n.stateNode),At(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(oc)throw oc=!1,t=Uf,Uf=null,t;return ac&1&&t.tag!==0&&Vi(),i=t.pendingLanes,i&1?t===zf?ha++:(ha=0,zf=t):ha=0,Wr(),null}function Vi(){if(Ir!==null){var t=Qw(ac),e=Kt.transition,n=fe;try{if(Kt.transition=null,fe=16>t?16:t,Ir===null)var r=!1;else{if(t=Ir,Ir=null,ac=0,le&6)throw Error(U(331));var s=le;for(le|=4,G=t.current;G!==null;){var i=G,o=i.child;if(G.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(G=c;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:ua(8,d,i)}var m=d.child;if(m!==null)m.return=d,G=m;else for(;G!==null;){d=G;var g=d.sibling,I=d.return;if(oI(d),d===c){G=null;break}if(g!==null){g.return=I,G=g;break}G=I}}}var x=i.alternate;if(x!==null){var P=x.child;if(P!==null){x.child=null;do{var C=P.sibling;P.sibling=null,P=C}while(P!==null)}}G=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,G=o;else e:for(;G!==null;){if(i=G,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ua(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,G=w;break e}G=i.return}}var _=t.current;for(G=_;G!==null;){o=G;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,G=E;else e:for(o=_;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qc(9,a)}}catch(L){Re(a,a.return,L)}if(a===o){G=null;break e}var V=a.sibling;if(V!==null){V.return=a.return,G=V;break e}G=a.return}}if(le=s,Wr(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(zc,t)}catch{}r=!0}return r}finally{fe=n,Kt.transition=e}}return!1}function M_(t,e,n){e=qi(n,e),e=QE(t,e,1),t=Rr(t,e,1),e=mt(),t!==null&&(il(t,1,e),At(t,e))}function Re(t,e,n){if(t.tag===3)M_(t,t,n);else for(;e!==null;){if(e.tag===3){M_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pr===null||!Pr.has(r))){t=qi(n,t),t=YE(e,t,1),e=Rr(e,t,1),t=mt(),e!==null&&(il(e,1,t),At(e,t));break}}e=e.return}}function lR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,Qe===t&&(et&n)===n&&($e===4||$e===3&&(et&130023424)===et&&500>be()-cm?_s(t,0):um|=n),At(t,e)}function gI(t,e){e===0&&(t.mode&1?(e=$l,$l<<=1,!($l&130023424)&&($l=4194304)):e=1);var n=mt();t=qn(t,e),t!==null&&(il(t,e,n),At(t,n))}function uR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gI(t,n)}function cR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),gI(t,n)}var yI;yI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xt.current)It=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return It=!1,Xk(t,e,n);It=!!(t.flags&131072)}else It=!1,Ee&&e.flags&1048576&&EE(e,Ju,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;vu(t,e),t=e.pendingProps;var s=Ui(e,ct.current);Di(e,n),s=rm(null,e,r,t,s,n);var i=sm();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(i=!0,Yu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Jp(e),s.updater=Gc,e.stateNode=s,s._reactInternals=e,Pf(e,r,t,n),e=Nf(null,e,r,!0,i,n)):(e.tag=0,Ee&&i&&Kp(e),ft(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(vu(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=dR(r),t=en(r,t),s){case 0:e=bf(null,e,r,t,n);break e;case 1:e=A_(null,e,r,t,n);break e;case 11:e=x_(null,e,r,t,n);break e;case 14:e=S_(null,e,r,en(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:en(r,s),bf(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:en(r,s),A_(t,e,r,s,n);case 3:e:{if(eI(e),t===null)throw Error(U(387));r=e.pendingProps,i=e.memoizedState,s=i.element,kE(t,e),tc(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=qi(Error(U(423)),e),e=k_(t,e,r,n,s);break e}else if(r!==s){s=qi(Error(U(424)),e),e=k_(t,e,r,n,s);break e}else for(Nt=kr(e.stateNode.containerInfo.firstChild),Vt=e,Ee=!0,rn=null,n=SE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zi(),r===s){e=Kn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return RE(e),t===null&&Af(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Ef(r,s)?o=null:i!==null&&Ef(r,i)&&(e.flags|=32),ZE(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&Af(e),null;case 13:return tI(t,e,n);case 4:return Zp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bi(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:en(r,s),x_(t,e,r,s,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ge(Zu,r._currentValue),r._currentValue=o,i!==null)if(un(i.value,o)){if(i.children===s.children&&!xt.current){e=Kn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Fn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),kf(i.return,n,e),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),kf(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ft(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Di(e,n),s=Gt(s),r=r(s),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,s=en(r,e.pendingProps),s=en(r.type,s),S_(t,e,r,s,n);case 15:return XE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:en(r,s),vu(t,e),e.tag=1,St(r)?(t=!0,Yu(e)):t=!1,Di(e,n),GE(e,r,s),Pf(e,r,s,n),Nf(null,e,r,!0,t,n);case 19:return nI(t,e,n);case 22:return JE(t,e,n)}throw Error(U(156,e.tag))};function _I(t,e){return Kw(t,e)}function hR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,n,r){return new hR(t,e,n,r)}function pm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dR(t){if(typeof t=="function")return pm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dp)return 11;if(t===Vp)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=Bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Iu(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")pm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case yi:return vs(n.children,s,i,e);case Np:o=8,s|=8;break;case Jd:return t=Bt(12,n,e,s|2),t.elementType=Jd,t.lanes=i,t;case Zd:return t=Bt(13,n,e,s),t.elementType=Zd,t.lanes=i,t;case ef:return t=Bt(19,n,e,s),t.elementType=ef,t.lanes=i,t;case Rw:return Xc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Aw:o=10;break e;case kw:o=9;break e;case Dp:o=11;break e;case Vp:o=14;break e;case dr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Bt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function vs(t,e,n,r){return t=Bt(7,t,r,e),t.lanes=n,t}function Xc(t,e,n,r){return t=Bt(22,t,r,e),t.elementType=Rw,t.lanes=n,t.stateNode={isHidden:!1},t}function kd(t,e,n){return t=Bt(6,t,null,e),t.lanes=n,t}function Rd(t,e,n){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fR(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ld(0),this.expirationTimes=ld(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ld(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function mm(t,e,n,r,s,i,o,a,u){return t=new fR(t,e,n,a,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Bt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jp(i),t}function pR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function vI(t){if(!t)return Lr;t=t._reactInternals;e:{if(Ks(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(St(n))return vE(t,n,e)}return e}function wI(t,e,n,r,s,i,o,a,u){return t=mm(n,r,!0,t,s,i,o,a,u),t.context=vI(null),n=t.current,r=mt(),s=Cr(n),i=Fn(r,s),i.callback=e??null,Rr(n,i,s),t.current.lanes=s,il(t,s,r),At(t,r),t}function Jc(t,e,n,r){var s=e.current,i=mt(),o=Cr(s);return n=vI(n),e.context===null?e.context=n:e.pendingContext=n,e=Fn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Rr(s,e,o),t!==null&&(ln(t,s,o,i),gu(t,s,o)),o}function uc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function L_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gm(t,e){L_(t,e),(t=t.alternate)&&L_(t,e)}function mR(){return null}var EI=typeof reportError=="function"?reportError:function(t){console.error(t)};function ym(t){this._internalRoot=t}Zc.prototype.render=ym.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Jc(t,e,null,null)};Zc.prototype.unmount=ym.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ps(function(){Jc(null,t,null,null)}),e[$n]=null}};function Zc(t){this._internalRoot=t}Zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&eE(t)}};function _m(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function eh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function j_(){}function gR(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=uc(o);i.call(c)}}var o=wI(e,r,t,0,null,!1,!1,"",j_);return t._reactRootContainer=o,t[$n]=o.current,Ca(t.nodeType===8?t.parentNode:t),Ps(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var c=uc(u);a.call(c)}}var u=mm(t,0,!1,null,null,!1,!1,"",j_);return t._reactRootContainer=u,t[$n]=u.current,Ca(t.nodeType===8?t.parentNode:t),Ps(function(){Jc(e,u,n,r)}),u}function th(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var u=uc(o);a.call(u)}}Jc(e,o,t,s)}else o=gR(n,e,t,s,r);return uc(o)}Yw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ho(e.pendingLanes);n!==0&&(Lp(e,n|1),At(e,be()),!(le&6)&&(Ki=be()+500,Wr()))}break;case 13:Ps(function(){var r=qn(t,1);if(r!==null){var s=mt();ln(r,t,1,s)}}),gm(t,1)}};jp=function(t){if(t.tag===13){var e=qn(t,134217728);if(e!==null){var n=mt();ln(e,t,134217728,n)}gm(t,134217728)}};Xw=function(t){if(t.tag===13){var e=Cr(t),n=qn(t,e);if(n!==null){var r=mt();ln(n,t,e,r)}gm(t,e)}};Jw=function(){return fe};Zw=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};hf=function(t,e,n){switch(e){case"input":if(rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Kc(r);if(!s)throw Error(U(90));Cw(r),rf(r,s)}}}break;case"textarea":Nw(t,n);break;case"select":e=n.value,e!=null&&Pi(t,!!n.multiple,e,!1)}};Fw=hm;Uw=Ps;var yR={usingClientEntryPoint:!1,Events:[al,Ei,Kc,Lw,jw,hm]},Fo={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_R={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$w(t),t===null?null:t.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||mR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eu.isDisabled&&eu.supportsFiber)try{zc=eu.inject(_R),En=eu}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yR;Lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_m(e))throw Error(U(200));return pR(t,e,null,n)};Lt.createRoot=function(t,e){if(!_m(t))throw Error(U(299));var n=!1,r="",s=EI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=mm(t,1,!1,null,null,n,!1,r,s),t[$n]=e.current,Ca(t.nodeType===8?t.parentNode:t),new ym(e)};Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=$w(e),t=t===null?null:t.stateNode,t};Lt.flushSync=function(t){return Ps(t)};Lt.hydrate=function(t,e,n){if(!eh(e))throw Error(U(200));return th(null,t,e,!0,n)};Lt.hydrateRoot=function(t,e,n){if(!_m(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=EI;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=wI(e,null,t,1,n??null,s,!1,i,o),t[$n]=e.current,Ca(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Zc(e)};Lt.render=function(t,e,n){if(!eh(e))throw Error(U(200));return th(null,t,e,!1,n)};Lt.unmountComponentAtNode=function(t){if(!eh(t))throw Error(U(40));return t._reactRootContainer?(Ps(function(){th(null,null,t,!1,function(){t._reactRootContainer=null,t[$n]=null})}),!0):!1};Lt.unstable_batchedUpdates=hm;Lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!eh(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return th(t,e,n,!1,r)};Lt.version="18.3.1-next-f1338f8080-20240426";function II(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(II)}catch(t){console.error(t)}}II(),Iw.exports=Lt;var vR=Iw.exports,F_=vR;Yd.createRoot=F_.createRoot,Yd.hydrateRoot=F_.hydrateRoot;const wR=({className:t="w-6 h-6"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),Cs=({className:t="w-6 h-6"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),ER=({className:t="w-5 h-5"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"})}),IR=({className:t="w-5 h-5"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),ul=({className:t="w-6 h-6"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),nh=({className:t="w-6 h-6"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),TR=({className:t="w-6 h-6"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),U_=({className:t="w-5 h-5"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"})}),xR=({className:t="w-6 h-6"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),Fa=({className:t="w-6 h-6"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.274-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.274.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a4 4 0 11-8 0 4 4 0 018 0z"})}),TI=({className:t="w-6 h-6"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"})}),rh=({className:t="w-6 h-6"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),xI=({className:t="w-6 h-6"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 4v16h14V8.5L14.5 4H5zM15 4v4H9V4h6zM12 18a2 2 0 100-4 2 2 0 000 4z"})}),SR=({className:t="w-6 h-6"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z"})}),AR=({className:t="w-6 h-6"})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),kR=({className:t="w-6 h-6"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),RR=({className:t="w-6 h-6"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),PR=({className:t="w-6 h-6"})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),CR=({className:t="w-6 h-6"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}),Tu=({className:t="w-6 h-6"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),bR=({className:t="w-6 h-6"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),NR=({className:t="w-6 h-6"})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"})}),DR=({onLogin:t,onSwitchToRegister:e,error:n,successMessage:r,rememberedCredentials:s})=>{const[i,o]=K.useState(""),[a,u]=K.useState(""),[c,d]=K.useState(""),[m,g]=K.useState(!1);K.useEffect(()=>{s&&(o(s.name||""),u(s.surname||""),d(s.password||""),g(!0))},[s]);const I=x=>{x.preventDefault(),i.trim()&&a.trim()&&c.trim()&&t(i.trim(),a.trim(),c.trim(),m)};return f.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 animate-fade-in",children:f.jsxs("div",{className:"w-full max-w-md glass-panel rounded-2xl p-8 transform transition-all hover:scale-[1.02] duration-300",children:[f.jsxs("div",{className:"flex flex-col items-center mb-8",children:[f.jsx("div",{className:"bg-gradient-to-br from-indigo-500 to-violet-500 p-4 rounded-2xl mb-4 shadow-lg shadow-indigo-500/30",children:f.jsx(TR,{className:"w-8 h-8 text-white"})}),f.jsx("h1",{className:"text-3xl font-bold text-white tracking-tight",children:"Area Personale"}),f.jsx("p",{className:"text-slate-400 mt-2 font-light",children:"Accedi per timbrare il tuo turno"})]}),f.jsxs("form",{onSubmit:I,className:"space-y-5",children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"name",className:"block text-slate-300 text-sm font-medium mb-2 ml-1",children:"Nome"}),f.jsx("input",{id:"name",type:"text",value:i,onChange:x=>o(x.target.value),placeholder:"es. Mario",className:"w-full px-4 py-3 glass-input rounded-xl placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 transition-all",autoComplete:"given-name"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"surname",className:"block text-slate-300 text-sm font-medium mb-2 ml-1",children:"Cognome"}),f.jsx("input",{id:"surname",type:"text",value:a,onChange:x=>u(x.target.value),placeholder:"es. Rossi",className:"w-full px-4 py-3 glass-input rounded-xl placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 transition-all",autoComplete:"family-name"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"password",className:"block text-slate-300 text-sm font-medium mb-2 ml-1",children:"Password"}),f.jsx("input",{id:"password",type:"password",value:c,onChange:x=>d(x.target.value),placeholder:"********",className:"w-full px-4 py-3 glass-input rounded-xl placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 transition-all",autoComplete:"current-password"})]}),f.jsx("div",{className:"flex items-center justify-between pt-2",children:f.jsxs("label",{htmlFor:"rememberMe",className:"flex items-center text-sm text-slate-400 cursor-pointer hover:text-slate-300 transition-colors",children:[f.jsx("input",{type:"checkbox",id:"rememberMe",checked:m,onChange:x=>g(x.target.checked),className:"w-4 h-4 text-indigo-600 bg-slate-800 border-slate-600 rounded focus:ring-indigo-500"}),f.jsx("span",{className:"ml-2",children:"Ricorda dati di accesso"})]})}),r&&f.jsx("div",{className:"bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 animate-fade-in",children:f.jsx("p",{className:"text-emerald-400 text-sm text-center font-medium",children:r})}),n&&f.jsx("div",{className:"bg-red-500/10 border border-red-500/20 rounded-lg p-3",children:f.jsx("p",{className:"text-red-400 text-sm text-center",children:n})}),f.jsxs("button",{type:"submit",disabled:!i.trim()||!a.trim()||!c.trim(),className:"w-full glass-button text-white font-bold py-3.5 px-4 rounded-xl focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2",children:[f.jsx(ER,{}),"Accedi"]})]}),f.jsxs("p",{className:"text-center text-slate-400 text-sm mt-8",children:["Non hai un account?"," ",f.jsx("button",{type:"button",onClick:e,className:"font-semibold text-indigo-400 hover:text-indigo-300 transition-colors focus:outline-none",children:"Crea un profilo"})]})]})})},SI=(t,e)=>{if(!e)return"In corso...";const n=e.getTime()-t.getTime();if(n<0)return"N/A";const r=Math.floor(n/(1e3*60*60)),s=Math.floor(n%(1e3*60*60)/(1e3*60));return`${r.toString().padStart(2,"0")}h ${s.toString().padStart(2,"0")}m`},jr=t=>t.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"}),AI=t=>t.toLocaleDateString("it-IT",{day:"2-digit",month:"2-digit",year:"numeric"}),z_=(t,e)=>t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate(),B_=t=>{if(!t)return"";const e=new Date(t),n=e.getTimezoneOffset()*6e4;return new Date(e.getTime()-n).toISOString().slice(0,16)},VR=({shift:t,onSave:e,onCancel:n})=>{const[r,s]=K.useState(B_(t.startTime)),[i,o]=K.useState(B_(t.endTime)),[a,u]=K.useState(t.type||"standard"),c=()=>{const d={...t,startTime:new Date(r).toISOString(),endTime:i?new Date(i).toISOString():null,type:a};e(d)};return f.jsxs("div",{className:"bg-gray-700 p-4 rounded-lg border border-blue-500",children:[f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-1",children:"Inizio"}),f.jsx("input",{type:"datetime-local",value:r,onChange:d=>s(d.target.value),className:"w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-1",children:"Fine"}),f.jsx("input",{type:"datetime-local",value:i,onChange:d=>o(d.target.value),className:"w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]}),f.jsxs("div",{className:"mb-4 pt-4 border-t border-gray-600",children:[f.jsx("p",{className:"text-sm font-medium text-gray-300 mb-2",children:"Tipo di Turno"}),f.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[f.jsxs("label",{className:"flex items-center text-gray-200 cursor-pointer",children:[f.jsx("input",{type:"radio",checked:a==="standard",onChange:()=>u("standard"),className:"w-4 h-4 text-blue-500 bg-gray-600 border-gray-500 focus:ring-blue-600"}),f.jsx("span",{className:"ml-2",children:"Standard"})]}),f.jsxs("label",{className:"flex items-center text-gray-200 cursor-pointer",children:[f.jsx("input",{type:"radio",checked:a==="cassa",onChange:()=>u("cassa"),className:"w-4 h-4 text-blue-500 bg-gray-600 border-gray-500 focus:ring-blue-600"}),f.jsx("span",{className:"ml-2",children:"Cassa"})]}),f.jsxs("label",{className:"flex items-center text-gray-200 cursor-pointer",children:[f.jsx("input",{type:"radio",checked:a==="macchina_propria",onChange:()=>u("macchina_propria"),className:"w-4 h-4 text-blue-500 bg-gray-600 border-gray-500 focus:ring-blue-600"}),f.jsx("span",{className:"ml-2",children:"Macchina Propria"})]}),f.jsxs("label",{className:"flex items-center text-gray-200 cursor-pointer",children:[f.jsx("input",{type:"radio",checked:a==="macchina_pizzeria",onChange:()=>u("macchina_pizzeria"),className:"w-4 h-4 text-blue-500 bg-gray-600 border-gray-500 focus:ring-blue-600"}),f.jsx("span",{className:"ml-2",children:"Macchina Pizzeria"})]})]})]}),f.jsxs("div",{className:"flex justify-end gap-3",children:[f.jsx("button",{onClick:n,className:"px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded-lg transition-colors",children:"Annulla"}),f.jsxs("button",{onClick:c,className:"flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors",children:[f.jsx(xI,{className:"w-5 h-5"}),"Salva"]})]})]})},OR=({shift:t,onEdit:e,onDelete:n,isAdminView:r})=>{const s=new Date(t.startTime),i=t.endTime?new Date(t.endTime):null,o=ww.useMemo(()=>t.type&&{standard:"Standard",cassa:"Cassa",macchina_propria:"Macchina Propria",macchina_pizzeria:"Macchina Pizzeria"}[t.type]||null,[t.type]);return f.jsxs("div",{className:"bg-gray-700/50 p-4 rounded-lg",children:[f.jsxs("div",{className:"flex justify-between items-start",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center gap-2 font-semibold text-lg",children:[f.jsx(Cs,{className:"w-5 h-5 text-blue-400"}),f.jsxs("span",{children:[jr(s)," - ",i?jr(i):"In corso"]})]}),f.jsx("span",{className:"ml-7 font-mono text-sm text-gray-400",children:SI(s,i)})]}),r&&f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("button",{onClick:e,className:"p-2 text-gray-400 hover:text-blue-400 transition-colors","aria-label":"Modifica turno",children:f.jsx(SR,{className:"w-5 h-5"})}),f.jsx("button",{onClick:n,className:"p-2 text-gray-400 hover:text-red-400 transition-colors","aria-label":"Elimina turno",children:f.jsx(rh,{className:"w-5 h-5"})})]})]}),o&&f.jsx("div",{className:"pt-3 mt-3 border-t border-gray-600",children:f.jsx("span",{className:"text-xs bg-yellow-600/50 text-yellow-200 px-2 py-1 rounded-full",children:o})})]})},MR=({date:t,shifts:e,onClose:n,isAdminView:r=!1,onUpdateShift:s,onDeleteShift:i})=>{const[o,a]=K.useState(null),u=e.filter(d=>{const m=new Date(d.startTime);return m.getFullYear()===t.getFullYear()&&m.getMonth()===t.getMonth()&&m.getDate()===t.getDate()}).sort((d,m)=>new Date(d.startTime).getTime()-new Date(m.startTime).getTime()),c=d=>{s==null||s(d),a(null)};return f.jsxs("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50",onClick:n,children:[f.jsxs("div",{className:"bg-gray-800 rounded-2xl shadow-xl w-full max-w-lg p-6 relative transform transition-all animate-fade-in-up",onClick:d=>d.stopPropagation(),children:[f.jsx("button",{onClick:n,className:"absolute top-4 right-4 text-gray-400 hover:text-white transition-colors",children:f.jsx(xR,{className:"w-8 h-8"})}),f.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Dettaglio Turni"}),f.jsx("p",{className:"text-blue-300 font-semibold mb-6",children:AI(t)}),f.jsx("div",{className:"space-y-4 max-h-[60vh] overflow-y-auto pr-2",children:u.length>0?u.map(d=>f.jsx("div",{children:o===d.id?f.jsx(VR,{shift:d,onSave:c,onCancel:()=>a(null)}):f.jsx(OR,{shift:d,isAdminView:r,onEdit:()=>a(d.id),onDelete:()=>{window.confirm("Sei sicuro di voler eliminare questo turno? Questa azione è irreversibile.")&&(i==null||i(d.id))}})},d.id)):f.jsx("p",{className:"text-gray-400",children:"Nessun turno completato per questo giorno."})})]}),f.jsx("style",{children:`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.3s ease-out forwards;
                }
            `})]})},LR=["Lun","Mar","Mer","Gio","Ven","Sab","Dom"],kI=({shifts:t,isAdminView:e=!1,onUpdateShift:n,onDeleteShift:r})=>{const[s,i]=K.useState(new Date),[o,a]=K.useState(null),u=x=>{i(P=>{const C=new Date(P);return C.setDate(1),C.setMonth(C.getMonth()+x),C})},c=K.useMemo(()=>{const x=s.getFullYear(),P=s.getMonth(),C=new Date(x,P,1).getDay(),w=new Date(x,P+1,0).getDate(),_=C===0?6:C-1,E=Array(_).fill(null);for(let V=1;V<=w;V++)E.push(new Date(x,P,V));return E},[s]),d=K.useMemo(()=>{const x=new Map;return t.forEach(P=>{if(P.endTime){const C=new Date(P.startTime),w=new Date(P.endTime),_=`${C.getFullYear()}-${(C.getMonth()+1).toString().padStart(2,"0")}-${C.getDate().toString().padStart(2,"0")}`,E=w.getTime()-C.getTime(),L=(x.get(_)||{totalMs:0}).totalMs+E;x.set(_,{totalMs:L})}}),x},[t]),m=x=>{const P=`${x.getFullYear()}-${(x.getMonth()+1).toString().padStart(2,"0")}-${x.getDate().toString().padStart(2,"0")}`;d.has(P)&&a(x)},g=x=>{if(x<=0)return"";const P=Math.floor(x/(1e3*60*60)),C=Math.floor(x%(1e3*60*60)/(1e3*60));return`${P}h ${C.toString().padStart(2,"0")}m`},I=K.useMemo(()=>{const x={total:0,standard:0,cassa:0,macchina_propria:0,macchina_pizzeria:0},P=s.getFullYear(),C=s.getMonth();return t.forEach(w=>{const _=new Date(w.startTime);if(w.endTime&&_.getFullYear()===P&&_.getMonth()===C){const E=new Date(w.endTime).getTime()-_.getTime();x.total+=E;const V=w.type||"standard";x[V]+=E}}),x},[t,s]);return f.jsxs("div",{className:"bg-gray-800 p-6 rounded-2xl shadow-lg h-full",children:[f.jsxs("div",{className:"flex items-center justify-between mb-2",children:[f.jsx("button",{onClick:()=>u(-1),className:"p-2 rounded-full hover:bg-gray-700 transition",children:f.jsx(ul,{})}),f.jsx("h2",{className:"text-xl font-bold text-center capitalize",children:s.toLocaleString("it-IT",{month:"long",year:"numeric"})}),f.jsx("button",{onClick:()=>u(1),className:"p-2 rounded-full hover:bg-gray-700 transition",children:f.jsx(nh,{})})]}),f.jsxs("div",{className:"mb-4 p-3 bg-slate-900/50 rounded-xl border border-slate-700/50",children:[f.jsxs("div",{className:"text-center mb-2",children:[f.jsx("p",{className:"text-sm text-slate-400 mb-1",children:"Ore Totali Mese"}),f.jsx("p",{className:"text-2xl font-bold text-indigo-300",children:g(I.total)})]}),I.total>0&&f.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-700/50 space-y-1 text-sm",children:[I.standard>0&&f.jsxs("div",{className:"flex justify-between text-slate-300",children:[f.jsx("span",{children:"Standard:"}),f.jsx("span",{className:"font-mono",children:g(I.standard)})]}),I.cassa>0&&f.jsxs("div",{className:"flex justify-between text-slate-300",children:[f.jsx("span",{children:"Cassa:"}),f.jsx("span",{className:"font-mono",children:g(I.cassa)})]}),I.macchina_propria>0&&f.jsxs("div",{className:"flex justify-between text-slate-300",children:[f.jsx("span",{children:"Macchina Propria:"}),f.jsx("span",{className:"font-mono",children:g(I.macchina_propria)})]}),I.macchina_pizzeria>0&&f.jsxs("div",{className:"flex justify-between text-slate-300",children:[f.jsx("span",{children:"Macchina Pizzeria:"}),f.jsx("span",{className:"font-mono",children:g(I.macchina_pizzeria)})]})]})]}),f.jsx("div",{className:"grid grid-cols-7 gap-2 text-center text-sm text-gray-400 font-semibold mb-2",children:LR.map(x=>f.jsx("div",{children:x},x))}),f.jsx("div",{className:"grid grid-cols-7 gap-1 md:gap-2",children:c.map((x,P)=>{if(!x)return f.jsx("div",{},`empty-${P}`);const C=`${x.getFullYear()}-${(x.getMonth()+1).toString().padStart(2,"0")}-${x.getDate().toString().padStart(2,"0")}`,w=d.get(C),_=!!w&&w.totalMs>0,E=new Date,V=x.getFullYear()===E.getFullYear()&&x.getMonth()===E.getMonth()&&x.getDate()===E.getDate();return f.jsxs("button",{onClick:()=>m(x),disabled:!_,className:`aspect-square flex flex-col items-center justify-center p-1 rounded-lg transition-colors text-center 
                                ${_?"bg-blue-900/50 cursor-pointer hover:bg-blue-900/80":""} 
                                ${V?"ring-2 ring-blue-500":""}
                                ${_?"":"cursor-default"}`,children:[f.jsx("span",{className:`text-sm md:text-base ${V?"font-extrabold text-white":"text-gray-300"}`,children:x.getDate()}),_&&f.jsx("span",{className:"text-xs md:text-sm font-bold text-blue-300 mt-1",children:g(w.totalMs)})]},x.toISOString())})}),o&&f.jsx(MR,{date:o,shifts:t,onClose:()=>a(null),isAdminView:e,onUpdateShift:n,onDeleteShift:r})]})},jR=({assignedShifts:t})=>{const[e,n]=K.useState(new Date),r=i=>{n(o=>{const a=new Date(o);return a.setDate(1),a.setMonth(a.getMonth()+i),a})},s=K.useMemo(()=>t.filter(i=>{const o=new Date(i.date);return o.getFullYear()===e.getFullYear()&&o.getMonth()===e.getMonth()}).sort((i,o)=>new Date(i.date).getTime()-new Date(o.date).getTime()),[t,e]);return f.jsxs("div",{className:"bg-gray-800 p-6 rounded-2xl shadow-lg",children:[f.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[f.jsx(TI,{className:"w-5 h-5"})," I Miei Turni"]}),f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("button",{onClick:()=>r(-1),className:"p-2 rounded-full hover:bg-gray-700 transition",children:f.jsx(ul,{className:"w-5 h-5"})}),f.jsx("h4",{className:"text-lg font-semibold text-center capitalize",children:e.toLocaleString("it-IT",{month:"long",year:"numeric"})}),f.jsx("button",{onClick:()=>r(1),className:"p-2 rounded-full hover:bg-gray-700 transition",children:f.jsx(nh,{className:"w-5 h-5"})})]}),f.jsx("div",{className:"flex flex-col gap-3 max-h-60 overflow-y-auto pr-2",children:s.length>0?s.map(i=>{const o=new Date(i.date),a=new Date(o.getTime()+o.getTimezoneOffset()*6e4);return f.jsxs("div",{className:"flex justify-between items-center bg-gray-700/50 p-3 rounded-lg",children:[f.jsx("p",{className:"font-semibold",children:a.toLocaleDateString("it-IT",{weekday:"short",day:"2-digit",month:"short"})}),f.jsx("p",{className:"text-sm font-mono bg-blue-900/50 px-2 py-1 rounded",children:i.startTime})]},i.id)}):f.jsx("p",{className:"text-gray-500 text-center py-4",children:"Nessun turno assegnato per questo mese."})})]})},$_=({shift:t})=>{const e=new Date(t.startTime),n=t.endTime?new Date(t.endTime):null,r=s=>s&&{standard:"Standard",cassa:"Cassa",macchina_propria:"Macchina Propria",macchina_pizzeria:"Macchina Pizzeria"}[s]||null;return f.jsxs("div",{className:"flex justify-between items-center bg-slate-800/50 border border-slate-700/50 p-3 rounded-xl hover:bg-slate-800/70 transition-colors",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 bg-indigo-500/20 rounded-lg",children:f.jsx(Cs,{className:"w-5 h-5 text-indigo-400"})}),f.jsxs("div",{children:[f.jsxs("p",{className:"font-semibold text-slate-200",children:[jr(e)," - ",n?jr(n):"..."]}),t.type&&f.jsx("span",{className:"text-[10px] bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded-full font-medium mt-1 inline-block",children:r(t.type)})]})]}),f.jsx("p",{className:"text-sm font-mono bg-slate-900/50 px-2 py-1 rounded text-slate-400",children:SI(e,n)})]})},tu=({label:t,selected:e,onChange:n,disabled:r})=>f.jsxs("label",{className:`flex items-center p-3 rounded-xl transition-all border ${r?"cursor-not-allowed bg-slate-900/50 border-slate-800 text-slate-600":e?"bg-indigo-500/20 border-indigo-500/50 cursor-pointer":"bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 cursor-pointer"}`,children:[f.jsx("div",{className:`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${e?"border-indigo-500":"border-slate-500"}`,children:e&&f.jsx("div",{className:"w-3 h-3 rounded-full bg-indigo-500"})}),f.jsx("input",{type:"radio",checked:e,onChange:n,disabled:r,className:"hidden"}),f.jsx("span",{className:`ml-3 font-medium ${e?"text-indigo-300":"text-slate-300"}`,children:t})]}),q_=({user:t,shifts:e,activeShift:n,assignedShifts:r,onClock:s})=>{const[i,o]=K.useState(null),a=g=>g&&{standard:"Standard",cassa:"Cassa",macchina_propria:"Macchina Propria",macchina_pizzeria:"Macchina Pizzeria"}[g]||null;K.useEffect(()=>{n||o(null)},[n]);const u=g=>{o(g)},c=()=>{n?s(n.type||"standard"):i&&s(i)},m=[...e.filter(g=>z_(new Date(g.startTime),new Date))].reverse();return f.jsxs("div",{className:"space-y-6",children:[f.jsxs("header",{children:[f.jsxs("h1",{className:"text-3xl md:text-4xl font-bold text-white mb-2",children:["Bentornato, ",t.name]}),f.jsx("p",{className:"text-slate-400",children:"Ecco il riepilogo della tua attività lavorativa."})]}),f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[f.jsxs("div",{className:"lg:col-span-1 flex flex-col gap-8",children:[f.jsxs("div",{className:"glass-panel p-6 rounded-3xl relative overflow-hidden group",children:[f.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-indigo-500/20"}),f.jsx("div",{className:"text-center mb-8 relative z-10",children:n?f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"text-slate-400 text-sm uppercase tracking-wider font-medium mb-2",children:"Turno in corso"}),f.jsx("p",{className:"text-4xl font-bold text-white tracking-tight",children:jr(new Date(n.startTime))}),f.jsxs("div",{className:"mt-2 flex flex-col items-center gap-2",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 animate-pulse",children:[f.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"}),"ATTIVO"]}),n.type&&f.jsx("span",{className:"text-xs bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full font-medium",children:a(n.type)})]})]}):f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"text-slate-400 text-sm uppercase tracking-wider font-medium mb-2",children:"Stato attuale"}),f.jsx("p",{className:"text-3xl font-bold text-slate-500",children:"Non in servizio"})]})}),!n&&f.jsxs("div",{className:"my-6 space-y-3 relative z-10",children:[f.jsx("p",{className:"text-sm font-medium text-slate-400 mb-3",children:"Seleziona tipo di turno:"}),f.jsx(tu,{label:"Standard",value:"standard",selected:i==="standard",onChange:()=>u("standard"),disabled:!1}),f.jsx(tu,{label:"Cassa",value:"cassa",selected:i==="cassa",onChange:()=>u("cassa"),disabled:!1}),f.jsx(tu,{label:"Macchina Propria",value:"macchina_propria",selected:i==="macchina_propria",onChange:()=>u("macchina_propria"),disabled:!1}),f.jsx(tu,{label:"Macchina Pizzeria",value:"macchina_pizzeria",selected:i==="macchina_pizzeria",onChange:()=>u("macchina_pizzeria"),disabled:!1})]}),f.jsxs("button",{onClick:c,disabled:!n&&!i,className:`w-full flex items-center justify-center gap-3 text-lg font-bold py-4 px-6 rounded-xl transition-all duration-300 transform focus:outline-none focus:ring-4 ${!n&&!i?"bg-slate-700 text-slate-500 cursor-not-allowed":n?"bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-red-500/30 focus:ring-red-400 hover:scale-[1.02] hover:shadow-lg":"bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-emerald-500/30 focus:ring-emerald-400 hover:scale-[1.02] hover:shadow-lg"}`,children:[f.jsx(Cs,{className:"w-7 h-7"}),n?"Timbra Uscita":"Timbra Entrata"]})]}),f.jsxs("div",{className:"glass-panel p-6 rounded-3xl",children:[f.jsxs("div",{className:"flex items-center justify-between mb-6",children:[f.jsx("h3",{className:"text-lg font-bold text-white",children:"Oggi"}),f.jsx("span",{className:"text-xs font-medium text-slate-400 bg-slate-800 px-2 py-1 rounded-lg",children:AI(new Date)})]}),f.jsxs("div",{className:"flex flex-col gap-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar",children:[n&&z_(new Date(n.startTime),new Date)&&f.jsx($_,{shift:n}),m.length>0?m.map(g=>f.jsx($_,{shift:g},g.id)):!n&&f.jsx("p",{className:"text-slate-500 text-center py-4 text-sm",children:"Nessuna attività registrata oggi."})]})]}),f.jsx("div",{className:"glass-panel p-6 rounded-3xl",children:f.jsx(jR,{assignedShifts:r})})]}),f.jsx("div",{className:"lg:col-span-2",children:f.jsx("div",{className:"glass-panel p-6 rounded-3xl h-full",children:f.jsx(kI,{shifts:e})})})]})]})},FR=({onRegister:t,onSwitchToLogin:e,error:n})=>{const[r,s]=K.useState(""),[i,o]=K.useState(""),[a,u]=K.useState(""),c=d=>{d.preventDefault(),r.trim()&&i.trim()&&a.trim()&&t(r.trim(),i.trim(),a.trim())};return f.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 animate-fade-in",children:f.jsxs("div",{className:"w-full max-w-md glass-panel rounded-2xl p-8 transform transition-all hover:scale-[1.02] duration-300",children:[f.jsxs("div",{className:"flex flex-col items-center mb-8",children:[f.jsx("div",{className:"bg-gradient-to-br from-emerald-500 to-teal-500 p-4 rounded-2xl mb-4 shadow-lg shadow-emerald-500/30",children:f.jsx(U_,{className:"w-8 h-8 text-white"})}),f.jsx("h1",{className:"text-3xl font-bold text-white tracking-tight",children:"Crea Profilo"}),f.jsx("p",{className:"text-slate-400 mt-2 font-light",children:"Inserisci i tuoi dati per iniziare"})]}),f.jsxs("form",{onSubmit:c,className:"space-y-5",children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"name",className:"block text-slate-300 text-sm font-medium mb-2 ml-1",children:"Nome"}),f.jsx("input",{id:"name",type:"text",value:r,onChange:d=>s(d.target.value),placeholder:"es. Mario",className:"w-full px-4 py-3 glass-input rounded-xl placeholder-slate-500 focus:ring-2 focus:ring-emerald-500/50 transition-all",autoComplete:"given-name"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"surname",className:"block text-slate-300 text-sm font-medium mb-2 ml-1",children:"Cognome"}),f.jsx("input",{id:"surname",type:"text",value:i,onChange:d=>o(d.target.value),placeholder:"es. Rossi",className:"w-full px-4 py-3 glass-input rounded-xl placeholder-slate-500 focus:ring-2 focus:ring-emerald-500/50 transition-all",autoComplete:"family-name"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"reg-password",className:"block text-slate-300 text-sm font-medium mb-2 ml-1",children:"Password"}),f.jsx("input",{id:"reg-password",type:"password",value:a,onChange:d=>u(d.target.value),placeholder:"********",className:"w-full px-4 py-3 glass-input rounded-xl placeholder-slate-500 focus:ring-2 focus:ring-emerald-500/50 transition-all",autoComplete:"new-password"})]}),n&&f.jsx("div",{className:"bg-red-500/10 border border-red-500/20 rounded-lg p-3",children:f.jsx("p",{className:"text-red-400 text-sm text-center",children:n})}),f.jsxs("button",{type:"submit",disabled:!r.trim()||!i.trim()||!a.trim(),className:"w-full glass-button text-white font-bold py-3.5 px-4 rounded-xl focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2",style:{background:"linear-gradient(135deg, var(--color-success), #059669)"},children:[f.jsx(U_,{}),"Crea Profilo"]})]}),f.jsxs("p",{className:"text-center text-slate-400 text-sm mt-8",children:["Hai già un account?"," ",f.jsx("button",{type:"button",onClick:e,className:"font-semibold text-indigo-400 hover:text-indigo-300 transition-colors focus:outline-none",children:"Accedi"})]})]})})},UR=({isOpen:t,onClose:e,onConfirm:n,userName:r})=>t?f.jsxs("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50",onClick:e,children:[f.jsxs("div",{className:"bg-gray-800 rounded-2xl shadow-xl w-full max-w-md p-6 relative transform transition-all animate-fade-in-up",onClick:s=>s.stopPropagation(),children:[f.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Conferma Eliminazione"}),f.jsxs("p",{className:"text-gray-300 mb-6",children:["Sei sicuro di voler eliminare l'utente ",f.jsx("span",{className:"font-bold text-yellow-400",children:r}),"? Questa azione è irreversibile e cancellerà tutti i dati associati."]}),f.jsxs("div",{className:"flex justify-end gap-4",children:[f.jsx("button",{onClick:e,className:"px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded-lg transition-colors",children:"Annulla"}),f.jsx("button",{onClick:n,className:"px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors",children:"Elimina Utente"})]})]}),f.jsx("style",{children:`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.3s ease-out forwards;
                }
            `})]}):null,zR=({allUsers:t,onSelectUser:e,onDeleteUser:n})=>{const[r,s]=K.useState(null),[i,o]=K.useState(null),a=(c,d)=>{d.stopPropagation(),s(c)},u=()=>{r&&(n(r.id),s(null))};return f.jsxs("div",{className:"space-y-6",children:[f.jsxs("header",{children:[f.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Gestione Utenti"}),f.jsx("p",{className:"text-slate-400",children:"Visualizza e gestisci i dipendenti registrati."})]}),f.jsxs("div",{className:"glass-panel p-6 rounded-3xl shadow-lg",children:[f.jsxs("h2",{className:"text-xl font-bold mb-6 flex items-center gap-2 text-white",children:[f.jsx(Fa,{className:"text-indigo-400"})," Utenti Registrati"]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:t.length>0?t.map(c=>f.jsxs("div",{onClick:()=>e(c),className:"flex items-center justify-between bg-slate-800/40 border border-slate-700/50 p-4 rounded-2xl cursor-pointer hover:bg-slate-800/80 hover:border-indigo-500/30 transition-all group",children:[f.jsxs("div",{className:"flex items-center gap-4",children:[f.jsxs("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-indigo-300 font-bold text-lg border border-slate-600",children:[c.name.charAt(0),c.surname.charAt(0)]}),f.jsxs("div",{children:[f.jsxs("span",{className:"font-bold text-slate-200 block",children:[c.name," ",c.surname,c.isAdmin&&f.jsx("span",{className:"ml-2 text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/30",children:"ADMIN"})]}),f.jsx("span",{className:"text-xs text-indigo-400 group-hover:text-indigo-300 transition-colors",children:"Visualizza Calendario"}),f.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[f.jsx("span",{className:"text-xs text-slate-500",children:i===c.id?f.jsx("span",{className:"text-emerald-400 font-mono",children:c.password}):"••••••••"}),f.jsx("button",{onClick:d=>{d.stopPropagation(),o(i===c.id?null:c.id)},className:"text-slate-500 hover:text-white transition-colors",title:i===c.id?"Nascondi password":"Mostra password",children:i===c.id?f.jsx(CR,{className:"w-3 h-3"}):f.jsx(PR,{className:"w-3 h-3"})})]})]})]}),f.jsx("button",{onClick:d=>a(c,d),className:"p-2 text-slate-500 hover:text-red-400 rounded-full hover:bg-red-500/10 transition-colors","aria-label":`Elimina ${c.name} ${c.surname}`,children:f.jsx(rh,{className:"w-5 h-5"})})]},c.id)):f.jsxs("div",{className:"col-span-full py-12 text-center",children:[f.jsx("div",{className:"w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4",children:f.jsx(Fa,{className:"w-8 h-8 text-slate-600"})}),f.jsx("p",{className:"text-slate-500",children:"Nessun utente registrato."})]})})]}),r&&f.jsx(UR,{isOpen:!!r,onClose:()=>s(null),onConfirm:u,userName:`${r.name} ${r.surname}`})]})},BR=({selectedUser:t,userShifts:e,onBack:n,onUpdateShift:r,onDeleteShift:s})=>f.jsxs("div",{className:"min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8",children:[f.jsxs("header",{className:"mb-8",children:[f.jsxs("button",{onClick:n,className:"flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold mb-4",children:[f.jsx(ul,{className:"w-5 h-5"}),"Torna alla lista utenti"]}),f.jsxs("h1",{className:"text-2xl sm:text-3xl font-bold text-white",children:["Dettaglio per ",t.name," ",t.surname]}),f.jsx("p",{className:"text-gray-400",children:"Visualizzazione del calendario timbrature."})]}),f.jsx("main",{children:f.jsx(kI,{shifts:e,isAdminView:!0,onUpdateShift:r,onDeleteShift:s})})]}),$R=()=>{};var K_={};/**
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
 */const RI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},qR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},PI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,d=i>>2,m=(i&3)<<4|a>>4;let g=(a&15)<<2|c>>6,I=c&63;u||(I=64,o||(g=64)),r.push(n[d],n[m],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(RI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||m==null)throw new KR;const g=i<<2|a>>4;if(r.push(g),c!==64){const I=a<<4&240|c>>2;if(r.push(I),m!==64){const x=c<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WR=function(t){const e=RI(t);return PI.encodeByteArray(e,!0)},cc=function(t){return WR(t).replace(/\./g,"")},CI=function(t){try{return PI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const HR=()=>bI().__FIREBASE_DEFAULTS__,GR=()=>{if(typeof process>"u"||typeof K_>"u")return;const t=K_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&CI(t[1]);return e&&JSON.parse(e)},sh=()=>{try{return $R()||HR()||GR()||QR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},NI=t=>{var e,n;return(n=(e=sh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},DI=t=>{const e=NI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},VI=()=>{var t;return(t=sh())==null?void 0:t.config},OI=t=>{var e;return(e=sh())==null?void 0:e[`_${t}`]};/**
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
 */class YR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vm(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function MI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[cc(JSON.stringify(n)),cc(JSON.stringify(o)),""].join(".")}const da={};function XR(){const t={prod:[],emulator:[]};for(const e of Object.keys(da))da[e]?t.emulator.push(e):t.prod.push(e);return t}function JR(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let W_=!1;function wm(t,e){if(typeof window>"u"||typeof document>"u"||!Ws(window.location.host)||da[t]===e||da[t]||W_)return;da[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=XR().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function a(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,I){g.setAttribute("width","24"),g.setAttribute("id",I),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{W_=!0,o()},g}function d(g,I){g.setAttribute("id",I),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=JR(r),I=n("text"),x=document.getElementById(I)||document.createElement("span"),P=n("learnmore"),C=document.getElementById(P)||document.createElement("a"),w=n("preprendIcon"),_=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const E=g.element;a(E),d(C,P);const V=c();u(_,w),E.append(_,x,C,V),document.body.appendChild(E)}i?(x.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function LI(){var e;const t=(e=sh())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rP(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jI(){return!LI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function FI(){return!LI()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Em(){try{return typeof indexedDB=="object"}catch{return!1}}function UI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function sP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const iP="FirebaseError";class dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=iP,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?oP(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new dn(s,a,r)}}function oP(t,e){return t.replace(aP,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const aP=/\{\$([^}]+)}/g;function lP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(H_(i)&&H_(o)){if(!bs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function H_(t){return t!==null&&typeof t=="object"}/**
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
 */function cl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Yo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uP(t,e){const n=new cP(t,e);return n.subscribe.bind(n)}class cP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hP(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Pd),s.error===void 0&&(s.error=Pd),s.complete===void 0&&(s.complete=Pd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pd(){}/**
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
 */function De(t){return t&&t._delegate?t._delegate:t}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const os="[DEFAULT]";/**
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
 */class dP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new YR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pP(e))try{this.getOrInitializeService({instanceIdentifier:os})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=os){return this.instances.has(e)}getOptions(e=os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=os){return this.component?this.component.multipleInstances?e:os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fP(t){return t===os?void 0:t}function pP(t){return t.instantiationMode==="EAGER"}/**
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
 */class mP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const gP={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},yP=ie.INFO,_P={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},vP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=_P[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Im{constructor(e){this.name=e,this._logLevel=yP,this._logHandler=vP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const wP=(t,e)=>e.some(n=>t instanceof n);let G_,Q_;function EP(){return G_||(G_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IP(){return Q_||(Q_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zI=new WeakMap,qf=new WeakMap,BI=new WeakMap,Cd=new WeakMap,Tm=new WeakMap;function TP(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Un(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zI.set(n,t)}).catch(()=>{}),Tm.set(e,t),e}function xP(t){if(qf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});qf.set(t,e)}let Kf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||BI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function SP(t){Kf=t(Kf)}function AP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bd(this),e,...n);return BI.set(r,e.sort?e.sort():[e]),Un(r)}:IP().includes(t)?function(...e){return t.apply(bd(this),e),Un(zI.get(this))}:function(...e){return Un(t.apply(bd(this),e))}}function kP(t){return typeof t=="function"?AP(t):(t instanceof IDBTransaction&&xP(t),wP(t,EP())?new Proxy(t,Kf):t)}function Un(t){if(t instanceof IDBRequest)return TP(t);if(Cd.has(t))return Cd.get(t);const e=kP(t);return e!==t&&(Cd.set(t,e),Tm.set(e,t)),e}const bd=t=>Tm.get(t);function ih(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Un(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Un(o.result),u.oldVersion,u.newVersion,Un(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function Nd(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Un(n).then(()=>{})}const RP=["get","getKey","getAll","getAllKeys","count"],PP=["put","add","delete","clear"],Dd=new Map;function Y_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dd.get(e))return Dd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=PP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||RP.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&u.done]))[0]};return Dd.set(e,i),i}SP(t=>({...t,get:(e,n,r)=>Y_(e,n)||t.get(e,n,r),has:(e,n)=>!!Y_(e,n)||t.has(e,n)}));/**
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
 */class CP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wf="@firebase/app",X_="0.14.6";/**
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
 */const Wn=new Im("@firebase/app"),NP="@firebase/app-compat",DP="@firebase/analytics-compat",VP="@firebase/analytics",OP="@firebase/app-check-compat",MP="@firebase/app-check",LP="@firebase/auth",jP="@firebase/auth-compat",FP="@firebase/database",UP="@firebase/data-connect",zP="@firebase/database-compat",BP="@firebase/functions",$P="@firebase/functions-compat",qP="@firebase/installations",KP="@firebase/installations-compat",WP="@firebase/messaging",HP="@firebase/messaging-compat",GP="@firebase/performance",QP="@firebase/performance-compat",YP="@firebase/remote-config",XP="@firebase/remote-config-compat",JP="@firebase/storage",ZP="@firebase/storage-compat",eC="@firebase/firestore",tC="@firebase/ai",nC="@firebase/firestore-compat",rC="firebase",sC="12.6.0";/**
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
 */const Hf="[DEFAULT]",iC={[Wf]:"fire-core",[NP]:"fire-core-compat",[VP]:"fire-analytics",[DP]:"fire-analytics-compat",[MP]:"fire-app-check",[OP]:"fire-app-check-compat",[LP]:"fire-auth",[jP]:"fire-auth-compat",[FP]:"fire-rtdb",[UP]:"fire-data-connect",[zP]:"fire-rtdb-compat",[BP]:"fire-fn",[$P]:"fire-fn-compat",[qP]:"fire-iid",[KP]:"fire-iid-compat",[WP]:"fire-fcm",[HP]:"fire-fcm-compat",[GP]:"fire-perf",[QP]:"fire-perf-compat",[YP]:"fire-rc",[XP]:"fire-rc-compat",[JP]:"fire-gcs",[ZP]:"fire-gcs-compat",[eC]:"fire-fst",[nC]:"fire-fst-compat",[tC]:"fire-vertex","fire-js":"fire-js",[rC]:"fire-js-all"};/**
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
 */const hc=new Map,oC=new Map,Gf=new Map;function J_(t,e){try{t.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cn(t){const e=t.name;if(Gf.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;Gf.set(e,t);for(const n of hc.values())J_(n,t);for(const n of oC.values())J_(n,t);return!0}function Gs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const aC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new Hs("app","Firebase",aC);/**
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
 */class lC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
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
 */const Qs=sC;function $I(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Hf,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Nr.create("bad-app-name",{appName:String(s)});if(n||(n=VI()),!n)throw Nr.create("no-options");const i=hc.get(s);if(i){if(bs(n,i.options)&&bs(r,i.config))return i;throw Nr.create("duplicate-app",{appName:s})}const o=new mP(s);for(const u of Gf.values())o.addComponent(u);const a=new lC(n,r,o);return hc.set(s,a),a}function oh(t=Hf){const e=hc.get(t);if(!e&&t===Hf&&VI())return $I();if(!e)throw Nr.create("no-app",{appName:t});return e}function kt(t,e,n){let r=iC[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(o.join(" "));return}cn(new Yt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const uC="firebase-heartbeat-database",cC=1,Ua="firebase-heartbeat-store";let Vd=null;function qI(){return Vd||(Vd=ih(uC,cC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ua)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nr.create("idb-open",{originalErrorMessage:t.message})})),Vd}async function hC(t){try{const n=(await qI()).transaction(Ua),r=await n.objectStore(Ua).get(KI(t));return await n.done,r}catch(e){if(e instanceof dn)Wn.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wn.warn(n.message)}}}async function Z_(t,e){try{const r=(await qI()).transaction(Ua,"readwrite");await r.objectStore(Ua).put(e,KI(t)),await r.done}catch(n){if(n instanceof dn)Wn.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wn.warn(r.message)}}}function KI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dC=1024,fC=30;class pC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ev();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>fC){const o=yC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ev(),{heartbeatsToSend:r,unsentEntries:s}=mC(this._heartbeatsCache.heartbeats),i=cc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Wn.warn(n),""}}}function ev(){return new Date().toISOString().substring(0,10)}function mC(t,e=dC){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),tv(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),tv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Em()?UI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Z_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Z_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function tv(t){return cc(JSON.stringify({version:2,heartbeats:t})).length}function yC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function _C(t){cn(new Yt("platform-logger",e=>new CP(e),"PRIVATE")),cn(new Yt("heartbeat",e=>new pC(e),"PRIVATE")),kt(Wf,X_,t),kt(Wf,X_,"esm2020"),kt("fire-js","")}_C("");var vC="firebase",wC="12.6.0";/**
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
 */kt(vC,wC,"app");function WI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EC=WI,HI=new Hs("auth","Firebase",WI());/**
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
 */const dc=new Im("@firebase/auth");function IC(t,...e){dc.logLevel<=ie.WARN&&dc.warn(`Auth (${Qs}): ${t}`,...e)}function xu(t,...e){dc.logLevel<=ie.ERROR&&dc.error(`Auth (${Qs}): ${t}`,...e)}/**
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
 */function hn(t,...e){throw xm(t,...e)}function Tn(t,...e){return xm(t,...e)}function GI(t,e,n){const r={...EC(),[e]:n};return new Hs("auth","Firebase",r).create(e,{appName:t.name})}function zn(t){return GI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return HI.create(t,...e)}function Z(t,e,...n){if(!t)throw xm(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xu(e),new Error(e)}function Hn(t,e){t||Mn(e)}/**
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
 */function Qf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function TC(){return nv()==="http:"||nv()==="https:"}function nv(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function xC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TC()||tP()||"connection"in navigator)?navigator.onLine:!0}function SC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class hl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=ZR()||nP()}get(){return xC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sm(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class QI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const AC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],RC=new hl(3e4,6e4);function Hr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Xn(t,e,n,r,s={}){return YI(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=cl({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return eP()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Ws(t.emulatorConfig.host)&&(c.credentials="include"),QI.fetch()(await XI(t,t.config.apiHost,n,a),c)})}async function YI(t,e,n){t._canInitEmulator=!1;const r={...AC,...e};try{const s=new CC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw nu(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw nu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw nu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw nu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw GI(t,d,c);hn(t,d)}}catch(s){if(s instanceof dn)throw s;hn(t,"network-request-failed",{message:String(s)})}}async function dl(t,e,n,r,s={}){const i=await Xn(t,e,n,r,s);return"mfaPendingCredential"in i&&hn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function XI(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Sm(t.config,s):`${t.config.apiScheme}://${s}`;return kC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function PC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tn(this.auth,"network-request-failed")),RC.get())})}}function nu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Tn(t,e,r);return s.customData._tokenResponse=n,s}function rv(t){return t!==void 0&&t.enterprise!==void 0}class bC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return PC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function NC(t,e){return Xn(t,"GET","/v2/recaptchaConfig",Hr(t,e))}/**
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
 */async function DC(t,e){return Xn(t,"POST","/v1/accounts:delete",e)}async function fc(t,e){return Xn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function fa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VC(t,e=!1){const n=De(t),r=await n.getIdToken(e),s=Am(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:fa(Od(s.auth_time)),issuedAtTime:fa(Od(s.iat)),expirationTime:fa(Od(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Od(t){return Number(t)*1e3}function Am(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xu("JWT malformed, contained fewer than 3 sections"),null;try{const s=CI(n);return s?JSON.parse(s):(xu("Failed to decode base64 JWT payload"),null)}catch(s){return xu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function sv(t){const e=Am(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dn&&OC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class MC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fa(this.lastLoginAt),this.creationTime=fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pc(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Wi(t,fc(e,{idToken:n}));Z(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?JI(s.providerUserInfo):[],o=jC(t.providerData,i),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Yf(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function LC(t){const e=De(t);await pc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function JI(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function FC(t,e){const n=await YI(t,{},async()=>{const r=cl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await XI(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:a,body:r};return t.emulatorConfig&&Ws(t.emulatorConfig.host)&&(u.credentials="include"),QI.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function UC(t,e){return Xn(t,"POST","/v2/accounts:revokeToken",Hr(t,e))}/**
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
 */class Oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=sv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await FC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Oi;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oi,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
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
 */function lr(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new MC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Wi(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VC(this,e)}reload(){return LC(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bt(this.auth.app))return Promise.reject(zn(this.auth));const e=await this.getIdToken();return await Wi(this,DC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:I,providerData:x,stsTokenManager:P}=n;Z(m&&P,e,"internal-error");const C=Oi.fromJSON(this.name,P);Z(typeof m=="string",e,"internal-error"),lr(r,e.name),lr(s,e.name),Z(typeof g=="boolean",e,"internal-error"),Z(typeof I=="boolean",e,"internal-error"),lr(i,e.name),lr(o,e.name),lr(a,e.name),lr(u,e.name),lr(c,e.name),lr(d,e.name);const w=new sn({uid:m,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:C,createdAt:c,lastLoginAt:d});return x&&Array.isArray(x)&&(w.providerData=x.map(_=>({..._}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new Oi;s.updateFromServerResponse(n);const i=new sn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await pc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?JI(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Oi;a.updateFromIdToken(r);const u=new sn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Yf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
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
 */const iv=new Map;function Ln(t){Hn(t instanceof Function,"Expected a class definition");let e=iv.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,iv.set(t,e),e)}/**
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
 */class ZI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ZI.type="NONE";const ov=ZI;/**
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
 */function Su(t,e,n){return`firebase:${t}:${e}:${n}`}class Mi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Su(this.userKey,s.apiKey,i),this.fullPersistenceKey=Su("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await fc(this.auth,{idToken:e}).catch(()=>{});return n?sn._fromGetAccountInfoResponse(this.auth,n,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mi(Ln(ov),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Ln(ov);const o=Su(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){let m;if(typeof d=="string"){const g=await fc(e,{idToken:d}).catch(()=>{});if(!g)break;m=await sn._fromGetAccountInfoResponse(e,g,d)}else m=sn._fromJSON(e,d);c!==i&&(a=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Mi(i,e,r):(i=u[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Mi(i,e,r))}}/**
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
 */function av(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(eT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iT(e))return"Blackberry";if(oT(e))return"Webos";if(tT(e))return"Safari";if((e.includes("chrome/")||nT(e))&&!e.includes("edge/"))return"Chrome";if(sT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function eT(t=qe()){return/firefox\//i.test(t)}function tT(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nT(t=qe()){return/crios\//i.test(t)}function rT(t=qe()){return/iemobile/i.test(t)}function sT(t=qe()){return/android/i.test(t)}function iT(t=qe()){return/blackberry/i.test(t)}function oT(t=qe()){return/webos/i.test(t)}function km(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zC(t=qe()){var e;return km(t)&&!!((e=window.navigator)!=null&&e.standalone)}function BC(){return rP()&&document.documentMode===10}function aT(t=qe()){return km(t)||sT(t)||oT(t)||iT(t)||/windows phone/i.test(t)||rT(t)}/**
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
 */function lT(t,e=[]){let n;switch(t){case"Browser":n=av(qe());break;case"Worker":n=`${av(qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qs}/${r}`}/**
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
 */class $C{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const u=e(i);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function qC(t,e={}){return Xn(t,"GET","/v2/passwordPolicy",Hr(t,e))}/**
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
 */const KC=6;class WC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??KC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class HC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lv(this),this.idTokenSubscription=new lv(this),this.beforeStateQueue=new $C(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=HI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Mi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await fc(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bt(this.app))return Promise.reject(zn(this));const n=e?De(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bt(this.app)?Promise.reject(zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bt(this.app)?Promise.reject(zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qC(this),n=new WC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await UC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Mi.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&IC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ys(t){return De(t)}class lv{constructor(e){this.auth=e,this.observer=null,this.addObserver=uP(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ah={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GC(t){ah=t}function uT(t){return ah.loadJS(t)}function QC(){return ah.recaptchaEnterpriseScript}function YC(){return ah.gapiScript}function XC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class JC{constructor(){this.enterprise=new ZC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ZC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const eb="recaptcha-enterprise",cT="NO_RECAPTCHA";class tb{constructor(e){this.type=eb,this.auth=Ys(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{NC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new bC(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function s(i,o,a){const u=window.grecaptcha;rv(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(cT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new JC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&rv(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=QC();u.length!==0&&(u+=a),uT(u).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function uv(t,e,n,r=!1,s=!1){const i=new tb(t);let o;if(s)o=cT;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const u=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const u=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Xf(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await uv(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await uv(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function nb(t,e){const n=Gs(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(bs(i,e??{}))return s;hn(s,"already-initialized")}return n.initialize({options:e})}function rb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sb(t,e,n){const r=Ys(t);Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=hT(e),{host:o,port:a}=ib(e),u=a===null?"":`:${a}`,c={url:`${i}//${o}${u}/`},d=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(bs(c,r.config.emulator)&&bs(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Ws(o)?(vm(`${i}//${o}${u}`),wm("Auth",!0)):ob()}function hT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ib(t){const e=hT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:cv(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:cv(o)}}}function cv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ob(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Rm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}async function ab(t,e){return Xn(t,"POST","/v1/accounts:update",e)}async function lb(t,e){return Xn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ub(t,e){return dl(t,"POST","/v1/accounts:signInWithPassword",Hr(t,e))}/**
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
 */async function cb(t,e){return dl(t,"POST","/v1/accounts:signInWithEmailLink",Hr(t,e))}async function hb(t,e){return dl(t,"POST","/v1/accounts:signInWithEmailLink",Hr(t,e))}/**
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
 */class za extends Rm{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new za(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new za(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xf(e,n,"signInWithPassword",ub);case"emailLink":return cb(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xf(e,r,"signUpPassword",lb);case"emailLink":return hb(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Li(t,e){return dl(t,"POST","/v1/accounts:signInWithIdp",Hr(t,e))}/**
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
 */const db="http://localhost";class Ns extends Rm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Ns(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Li(e,n)}buildRequest(){const e={requestUri:db,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cl(n)}return e}}/**
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
 */function fb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pb(t){const e=Qo(Yo(t)).link,n=e?Qo(Yo(e)).deep_link_id:null,r=Qo(Yo(t)).deep_link_id;return(r?Qo(Yo(r)).link:null)||r||n||e||t}class Pm{constructor(e){const n=Qo(Yo(e)),r=n.apiKey??null,s=n.oobCode??null,i=fb(n.mode??null);Z(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=pb(e);try{return new Pm(n)}catch{return null}}}/**
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
 */class uo{constructor(){this.providerId=uo.PROVIDER_ID}static credential(e,n){return za._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Pm.parseLink(n);return Z(r,"argument-error"),za._fromEmailAndCode(e,r.code,r.tenantId)}}uo.PROVIDER_ID="password";uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class dT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fl extends dT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gr extends fl{constructor(){super("facebook.com")}static credential(e){return Ns._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";gr.PROVIDER_ID="facebook.com";/**
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
 */class yr extends fl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ns._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
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
 */class _r extends fl{constructor(){super("github.com")}static credential(e){return Ns._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.GITHUB_SIGN_IN_METHOD="github.com";_r.PROVIDER_ID="github.com";/**
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
 */class vr extends fl{constructor(){super("twitter.com")}static credential(e,n){return Ns._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.TWITTER_SIGN_IN_METHOD="twitter.com";vr.PROVIDER_ID="twitter.com";/**
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
 */async function mb(t,e){return dl(t,"POST","/v1/accounts:signUp",Hr(t,e))}/**
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
 */class Ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await sn._fromIdTokenResponse(e,r,s),o=hv(r);return new Ds({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=hv(r);return new Ds({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function hv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class mc extends dn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,mc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new mc(e,n,r,s)}}function fT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?mc._fromErrorAndOperation(t,i,e,r):i})}async function gb(t,e,n=!1){const r=await Wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ds._forOperation(t,"link",r)}/**
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
 */async function yb(t,e,n=!1){const{auth:r}=t;if(bt(r.app))return Promise.reject(zn(r));const s="reauthenticate";try{const i=await Wi(t,fT(r,s,e,t),n);Z(i.idToken,r,"internal-error");const o=Am(i.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(t.uid===a,r,"user-mismatch"),Ds._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),i}}/**
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
 */async function pT(t,e,n=!1){if(bt(t.app))return Promise.reject(zn(t));const r="signIn",s=await fT(t,r,e),i=await Ds._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function _b(t,e){return pT(Ys(t),e)}/**
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
 */async function mT(t){const e=Ys(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vb(t,e,n){if(bt(t.app))return Promise.reject(zn(t));const r=Ys(t),o=await Xf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mb).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&mT(t),u}),a=await Ds._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function wb(t,e,n){return bt(t.app)?Promise.reject(zn(t)):_b(De(t),uo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mT(t),r})}function Eb(t,e){return Ib(De(t),null,e)}async function Ib(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(i.password=n);const o=await Wi(t,ab(r,i));await t._updateTokensIfNecessary(o,!0)}function Tb(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function xb(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function Sb(t,e,n,r){return De(t).onAuthStateChanged(e,n,r)}function Ab(t){return De(t).signOut()}const gc="__sak";/**
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
 */class gT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gc,"1"),this.storage.removeItem(gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const kb=1e3,Rb=10;class yT extends gT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=aT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);BC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Rb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yT.type="LOCAL";const Pb=yT;/**
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
 */class _T extends gT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_T.type="SESSION";const vT=_T;/**
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
 */function Cb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new lh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),u=await Cb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lh.receivers=[];/**
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
 */function Cm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class bb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,u)=>{const c=Cm("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(d),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function xn(){return window}function Nb(t){xn().location.href=t}/**
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
 */function wT(){return typeof xn().WorkerGlobalScope<"u"&&typeof xn().importScripts=="function"}async function Db(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Ob(){return wT()?self:null}/**
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
 */const ET="firebaseLocalStorageDb",Mb=1,yc="firebaseLocalStorage",IT="fbase_key";class pl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uh(t,e){return t.transaction([yc],e?"readwrite":"readonly").objectStore(yc)}function Lb(){const t=indexedDB.deleteDatabase(ET);return new pl(t).toPromise()}function Jf(){const t=indexedDB.open(ET,Mb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yc,{keyPath:IT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yc)?e(r):(r.close(),await Lb(),e(await Jf()))})})}async function dv(t,e,n){const r=uh(t,!0).put({[IT]:e,value:n});return new pl(r).toPromise()}async function jb(t,e){const n=uh(t,!1).get(e),r=await new pl(n).toPromise();return r===void 0?null:r.value}function fv(t,e){const n=uh(t,!0).delete(e);return new pl(n).toPromise()}const Fb=800,Ub=3;class TT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ub)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lh._getInstance(Ob()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Db(),!this.activeServiceWorker)return;this.sender=new bb(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jf();return await dv(e,gc,"1"),await fv(e,gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=uh(s,!1).getAll();return new pl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}TT.type="LOCAL";const zb=TT;new hl(3e4,6e4);/**
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
 */function Bb(t,e){return e?Ln(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bm extends Rm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $b(t){return pT(t.auth,new bm(t),t.bypassAuthState)}function qb(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),yb(n,new bm(t),t.bypassAuthState)}async function Kb(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),gb(n,new bm(t),t.bypassAuthState)}/**
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
 */class xT{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $b;case"linkViaPopup":case"linkViaRedirect":return Kb;case"reauthViaPopup":case"reauthViaRedirect":return qb;default:hn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Wb=new hl(2e3,1e4);class Ri extends xT{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ri.currentPopupAction&&Ri.currentPopupAction.cancel(),Ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=Cm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Wb.get())};e()}}Ri.currentPopupAction=null;/**
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
 */const Hb="pendingRedirect",Au=new Map;class Gb extends xT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Au.get(this.auth._key());if(!e){try{const r=await Qb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Au.set(this.auth._key(),e)}return this.bypassAuthState||Au.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qb(t,e){const n=Jb(e),r=Xb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Yb(t,e){Au.set(t._key(),e)}function Xb(t){return Ln(t._redirectPersistence)}function Jb(t){return Su(Hb,t.config.apiKey,t.name)}async function Zb(t,e,n=!1){if(bt(t.app))return Promise.reject(zn(t));const r=Ys(t),s=Bb(r,e),o=await new Gb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const eN=10*60*1e3;class tN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ST(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eN&&this.cachedEventUids.clear(),this.cachedEventUids.has(pv(e))}saveEventToCache(e){this.cachedEventUids.add(pv(e)),this.lastProcessedEventTime=Date.now()}}function pv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ST({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ST(t);default:return!1}}/**
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
 */async function rN(t,e={}){return Xn(t,"GET","/v1/projects",e)}/**
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
 */const sN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iN=/^https?/;async function oN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rN(t);for(const n of e)try{if(aN(n))return}catch{}hn(t,"unauthorized-domain")}function aN(t){const e=Qf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iN.test(n))return!1;if(sN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const lN=new hl(3e4,6e4);function mv(){const t=xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uN(t){return new Promise((e,n)=>{var s,i,o;function r(){mv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mv(),n(Tn(t,"network-request-failed"))},timeout:lN.get()})}if((i=(s=xn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=xn().gapi)!=null&&o.load)r();else{const a=XC("iframefcb");return xn()[a]=()=>{gapi.load?r():n(Tn(t,"network-request-failed"))},uT(`${YC()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw ku=null,e})}let ku=null;function cN(t){return ku=ku||uN(t),ku}/**
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
 */const hN=new hl(5e3,15e3),dN="__/auth/iframe",fN="emulator/auth/iframe",pN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gN(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sm(e,fN):`https://${t.config.authDomain}/${dN}`,r={apiKey:e.apiKey,appName:t.name,v:Qs},s=mN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${cl(r).slice(1)}`}async function yN(t){const e=await cN(t),n=xn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:gN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Tn(t,"network-request-failed"),a=xn().setTimeout(()=>{i(o)},hN.get());function u(){xn().clearTimeout(a),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const _N={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vN=500,wN=600,EN="_blank",IN="http://localhost";class gv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TN(t,e,n,r=vN,s=wN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u={..._N,width:r.toString(),height:s.toString(),top:i,left:o},c=qe().toLowerCase();n&&(a=nT(c)?EN:n),eT(c)&&(e=e||IN,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[I,x])=>`${g}${I}=${x},`,"");if(zC(c)&&a!=="_self")return xN(e||"",a),new gv(null);const m=window.open(e||"",a,d);Z(m,t,"popup-blocked");try{m.focus()}catch{}return new gv(m)}function xN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const SN="__/auth/handler",AN="emulator/auth/handler",kN=encodeURIComponent("fac");async function yv(t,e,n,r,s,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qs,eventId:s};if(e instanceof dT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,m]of Object.entries({}))o[d]=m}if(e instanceof fl){const d=e.getScopes().filter(m=>m!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${kN}=${encodeURIComponent(u)}`:"";return`${RN(t)}?${cl(a).slice(1)}${c}`}function RN({config:t}){return t.emulator?Sm(t,AN):`https://${t.authDomain}/${SN}`}/**
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
 */const Md="webStorageSupport";class PN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vT,this._completeRedirectFn=Zb,this._overrideRedirectResult=Yb}async _openPopup(e,n,r,s){var o;Hn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await yv(e,n,r,Qf(),s);return TN(e,i,Cm())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await yv(e,n,r,Qf(),s);return Nb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Hn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yN(e),r=new tN(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Md,{type:Md},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Md];i!==void 0&&n(!!i),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return aT()||tT()||km()}}const CN=PN;var _v="@firebase/auth",vv="1.11.1";/**
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
 */class bN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function NN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DN(t){cn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lT(t)},c=new HC(r,s,i,u);return rb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cn(new Yt("auth-internal",e=>{const n=Ys(e.getProvider("auth").getImmediate());return(r=>new bN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(_v,vv,NN(t)),kt(_v,vv,"esm2020")}/**
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
 */const VN=5*60,ON=OI("authIdTokenMaxAge")||VN;let wv=null;const MN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ON)return;const s=n==null?void 0:n.token;wv!==s&&(wv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function LN(t=oh()){const e=Gs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nb(t,{popupRedirectResolver:CN,persistence:[zb,Pb,vT]}),r=OI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=MN(i.toString());xb(n,o,()=>o(n.currentUser)),Tb(n,a=>o(a))}}const s=NI("auth");return s&&sb(n,`http://${s}`),n}function jN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}GC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",jN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DN("Browser");var Ev=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,AT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function S(){}S.prototype=v.prototype,T.F=v.prototype,T.prototype=new S,T.prototype.constructor=T,T.D=function(k,R,N){for(var A=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)A[Ue-2]=arguments[Ue];return v.prototype[R].apply(k,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,S){S||(S=0);const k=Array(16);if(typeof v=="string")for(var R=0;R<16;++R)k[R]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(R=0;R<16;++R)k[R]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=T.g[0],S=T.g[1],R=T.g[2];let N=T.g[3],A;A=v+(N^S&(R^N))+k[0]+3614090360&4294967295,v=S+(A<<7&4294967295|A>>>25),A=N+(R^v&(S^R))+k[1]+3905402710&4294967295,N=v+(A<<12&4294967295|A>>>20),A=R+(S^N&(v^S))+k[2]+606105819&4294967295,R=N+(A<<17&4294967295|A>>>15),A=S+(v^R&(N^v))+k[3]+3250441966&4294967295,S=R+(A<<22&4294967295|A>>>10),A=v+(N^S&(R^N))+k[4]+4118548399&4294967295,v=S+(A<<7&4294967295|A>>>25),A=N+(R^v&(S^R))+k[5]+1200080426&4294967295,N=v+(A<<12&4294967295|A>>>20),A=R+(S^N&(v^S))+k[6]+2821735955&4294967295,R=N+(A<<17&4294967295|A>>>15),A=S+(v^R&(N^v))+k[7]+4249261313&4294967295,S=R+(A<<22&4294967295|A>>>10),A=v+(N^S&(R^N))+k[8]+1770035416&4294967295,v=S+(A<<7&4294967295|A>>>25),A=N+(R^v&(S^R))+k[9]+2336552879&4294967295,N=v+(A<<12&4294967295|A>>>20),A=R+(S^N&(v^S))+k[10]+4294925233&4294967295,R=N+(A<<17&4294967295|A>>>15),A=S+(v^R&(N^v))+k[11]+2304563134&4294967295,S=R+(A<<22&4294967295|A>>>10),A=v+(N^S&(R^N))+k[12]+1804603682&4294967295,v=S+(A<<7&4294967295|A>>>25),A=N+(R^v&(S^R))+k[13]+4254626195&4294967295,N=v+(A<<12&4294967295|A>>>20),A=R+(S^N&(v^S))+k[14]+2792965006&4294967295,R=N+(A<<17&4294967295|A>>>15),A=S+(v^R&(N^v))+k[15]+1236535329&4294967295,S=R+(A<<22&4294967295|A>>>10),A=v+(R^N&(S^R))+k[1]+4129170786&4294967295,v=S+(A<<5&4294967295|A>>>27),A=N+(S^R&(v^S))+k[6]+3225465664&4294967295,N=v+(A<<9&4294967295|A>>>23),A=R+(v^S&(N^v))+k[11]+643717713&4294967295,R=N+(A<<14&4294967295|A>>>18),A=S+(N^v&(R^N))+k[0]+3921069994&4294967295,S=R+(A<<20&4294967295|A>>>12),A=v+(R^N&(S^R))+k[5]+3593408605&4294967295,v=S+(A<<5&4294967295|A>>>27),A=N+(S^R&(v^S))+k[10]+38016083&4294967295,N=v+(A<<9&4294967295|A>>>23),A=R+(v^S&(N^v))+k[15]+3634488961&4294967295,R=N+(A<<14&4294967295|A>>>18),A=S+(N^v&(R^N))+k[4]+3889429448&4294967295,S=R+(A<<20&4294967295|A>>>12),A=v+(R^N&(S^R))+k[9]+568446438&4294967295,v=S+(A<<5&4294967295|A>>>27),A=N+(S^R&(v^S))+k[14]+3275163606&4294967295,N=v+(A<<9&4294967295|A>>>23),A=R+(v^S&(N^v))+k[3]+4107603335&4294967295,R=N+(A<<14&4294967295|A>>>18),A=S+(N^v&(R^N))+k[8]+1163531501&4294967295,S=R+(A<<20&4294967295|A>>>12),A=v+(R^N&(S^R))+k[13]+2850285829&4294967295,v=S+(A<<5&4294967295|A>>>27),A=N+(S^R&(v^S))+k[2]+4243563512&4294967295,N=v+(A<<9&4294967295|A>>>23),A=R+(v^S&(N^v))+k[7]+1735328473&4294967295,R=N+(A<<14&4294967295|A>>>18),A=S+(N^v&(R^N))+k[12]+2368359562&4294967295,S=R+(A<<20&4294967295|A>>>12),A=v+(S^R^N)+k[5]+4294588738&4294967295,v=S+(A<<4&4294967295|A>>>28),A=N+(v^S^R)+k[8]+2272392833&4294967295,N=v+(A<<11&4294967295|A>>>21),A=R+(N^v^S)+k[11]+1839030562&4294967295,R=N+(A<<16&4294967295|A>>>16),A=S+(R^N^v)+k[14]+4259657740&4294967295,S=R+(A<<23&4294967295|A>>>9),A=v+(S^R^N)+k[1]+2763975236&4294967295,v=S+(A<<4&4294967295|A>>>28),A=N+(v^S^R)+k[4]+1272893353&4294967295,N=v+(A<<11&4294967295|A>>>21),A=R+(N^v^S)+k[7]+4139469664&4294967295,R=N+(A<<16&4294967295|A>>>16),A=S+(R^N^v)+k[10]+3200236656&4294967295,S=R+(A<<23&4294967295|A>>>9),A=v+(S^R^N)+k[13]+681279174&4294967295,v=S+(A<<4&4294967295|A>>>28),A=N+(v^S^R)+k[0]+3936430074&4294967295,N=v+(A<<11&4294967295|A>>>21),A=R+(N^v^S)+k[3]+3572445317&4294967295,R=N+(A<<16&4294967295|A>>>16),A=S+(R^N^v)+k[6]+76029189&4294967295,S=R+(A<<23&4294967295|A>>>9),A=v+(S^R^N)+k[9]+3654602809&4294967295,v=S+(A<<4&4294967295|A>>>28),A=N+(v^S^R)+k[12]+3873151461&4294967295,N=v+(A<<11&4294967295|A>>>21),A=R+(N^v^S)+k[15]+530742520&4294967295,R=N+(A<<16&4294967295|A>>>16),A=S+(R^N^v)+k[2]+3299628645&4294967295,S=R+(A<<23&4294967295|A>>>9),A=v+(R^(S|~N))+k[0]+4096336452&4294967295,v=S+(A<<6&4294967295|A>>>26),A=N+(S^(v|~R))+k[7]+1126891415&4294967295,N=v+(A<<10&4294967295|A>>>22),A=R+(v^(N|~S))+k[14]+2878612391&4294967295,R=N+(A<<15&4294967295|A>>>17),A=S+(N^(R|~v))+k[5]+4237533241&4294967295,S=R+(A<<21&4294967295|A>>>11),A=v+(R^(S|~N))+k[12]+1700485571&4294967295,v=S+(A<<6&4294967295|A>>>26),A=N+(S^(v|~R))+k[3]+2399980690&4294967295,N=v+(A<<10&4294967295|A>>>22),A=R+(v^(N|~S))+k[10]+4293915773&4294967295,R=N+(A<<15&4294967295|A>>>17),A=S+(N^(R|~v))+k[1]+2240044497&4294967295,S=R+(A<<21&4294967295|A>>>11),A=v+(R^(S|~N))+k[8]+1873313359&4294967295,v=S+(A<<6&4294967295|A>>>26),A=N+(S^(v|~R))+k[15]+4264355552&4294967295,N=v+(A<<10&4294967295|A>>>22),A=R+(v^(N|~S))+k[6]+2734768916&4294967295,R=N+(A<<15&4294967295|A>>>17),A=S+(N^(R|~v))+k[13]+1309151649&4294967295,S=R+(A<<21&4294967295|A>>>11),A=v+(R^(S|~N))+k[4]+4149444226&4294967295,v=S+(A<<6&4294967295|A>>>26),A=N+(S^(v|~R))+k[11]+3174756917&4294967295,N=v+(A<<10&4294967295|A>>>22),A=R+(v^(N|~S))+k[2]+718787259&4294967295,R=N+(A<<15&4294967295|A>>>17),A=S+(N^(R|~v))+k[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(R+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+R&4294967295,T.g[3]=T.g[3]+N&4294967295}r.prototype.v=function(T,v){v===void 0&&(v=T.length);const S=v-this.blockSize,k=this.C;let R=this.h,N=0;for(;N<v;){if(R==0)for(;N<=S;)s(this,T,N),N+=this.blockSize;if(typeof T=="string"){for(;N<v;)if(k[R++]=T.charCodeAt(N++),R==this.blockSize){s(this,k),R=0;break}}else for(;N<v;)if(k[R++]=T[N++],R==this.blockSize){s(this,k),R=0;break}}this.h=R,this.o+=v},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;v=this.o*8;for(var S=T.length-8;S<T.length;++S)T[S]=v&255,v/=256;for(this.v(T),T=Array(16),v=0,S=0;S<4;++S)for(let k=0;k<32;k+=8)T[v++]=this.g[S]>>>k&255;return T};function i(T,v){var S=a;return Object.prototype.hasOwnProperty.call(S,T)?S[T]:S[T]=v(T)}function o(T,v){this.h=v;const S=[];let k=!0;for(let R=T.length-1;R>=0;R--){const N=T[R]|0;k&&N==v||(S[R]=N,k=!1)}this.g=S}var a={};function u(T){return-128<=T&&T<128?i(T,function(v){return new o([v|0],v<0?-1:0)}):new o([T|0],T<0?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return m;if(T<0)return C(c(-T));const v=[];let S=1;for(let k=0;T>=S;k++)v[k]=T/S|0,S*=4294967296;return new o(v,0)}function d(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return C(d(T.substring(1),v));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=c(Math.pow(v,8));let k=m;for(let N=0;N<T.length;N+=8){var R=Math.min(8,T.length-N);const A=parseInt(T.substring(N,N+R),v);R<8?(R=c(Math.pow(v,R)),k=k.j(R).add(c(A))):(k=k.j(S),k=k.add(c(A)))}return k}var m=u(0),g=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-C(this).m();let T=0,v=1;for(let S=0;S<this.g.length;S++){const k=this.i(S);T+=(k>=0?k:4294967296+k)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(x(this))return"0";if(P(this))return"-"+C(this).toString(T);const v=c(Math.pow(T,6));var S=this;let k="";for(;;){const R=V(S,v).g;S=w(S,R.j(v));let N=((S.g.length>0?S.g[0]:S.h)>>>0).toString(T);if(S=R,x(S))return N+k;for(;N.length<6;)N="0"+N;k=N+k}},t.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function x(T){if(T.h!=0)return!1;for(let v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function P(T){return T.h==-1}t.l=function(T){return T=w(this,T),P(T)?-1:x(T)?0:1};function C(T){const v=T.g.length,S=[];for(let k=0;k<v;k++)S[k]=~T.g[k];return new o(S,~T.h).add(g)}t.abs=function(){return P(this)?C(this):this},t.add=function(T){const v=Math.max(this.g.length,T.g.length),S=[];let k=0;for(let R=0;R<=v;R++){let N=k+(this.i(R)&65535)+(T.i(R)&65535),A=(N>>>16)+(this.i(R)>>>16)+(T.i(R)>>>16);k=A>>>16,N&=65535,A&=65535,S[R]=A<<16|N}return new o(S,S[S.length-1]&-2147483648?-1:0)};function w(T,v){return T.add(C(v))}t.j=function(T){if(x(this)||x(T))return m;if(P(this))return P(T)?C(this).j(C(T)):C(C(this).j(T));if(P(T))return C(this.j(C(T)));if(this.l(I)<0&&T.l(I)<0)return c(this.m()*T.m());const v=this.g.length+T.g.length,S=[];for(var k=0;k<2*v;k++)S[k]=0;for(k=0;k<this.g.length;k++)for(let R=0;R<T.g.length;R++){const N=this.i(k)>>>16,A=this.i(k)&65535,Ue=T.i(R)>>>16,Xt=T.i(R)&65535;S[2*k+2*R]+=A*Xt,_(S,2*k+2*R),S[2*k+2*R+1]+=N*Xt,_(S,2*k+2*R+1),S[2*k+2*R+1]+=A*Ue,_(S,2*k+2*R+1),S[2*k+2*R+2]+=N*Ue,_(S,2*k+2*R+2)}for(T=0;T<v;T++)S[T]=S[2*T+1]<<16|S[2*T];for(T=v;T<2*v;T++)S[T]=0;return new o(S,0)};function _(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function E(T,v){this.g=T,this.h=v}function V(T,v){if(x(v))throw Error("division by zero");if(x(T))return new E(m,m);if(P(T))return v=V(C(T),v),new E(C(v.g),C(v.h));if(P(v))return v=V(T,C(v)),new E(C(v.g),v.h);if(T.g.length>30){if(P(T)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var S=g,k=v;k.l(T)<=0;)S=L(S),k=L(k);var R=j(S,1),N=j(k,1);for(k=j(k,2),S=j(S,2);!x(k);){var A=N.add(k);A.l(T)<=0&&(R=R.add(S),N=A),k=j(k,1),S=j(S,1)}return v=w(T,R.j(v)),new E(R,v)}for(R=m;T.l(v)>=0;){for(S=Math.max(1,Math.floor(T.m()/v.m())),k=Math.ceil(Math.log(S)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),N=c(S),A=N.j(v);P(A)||A.l(T)>0;)S-=k,N=c(S),A=N.j(v);x(N)&&(N=g),R=R.add(N),T=w(T,A)}return new E(R,T)}t.B=function(T){return V(this,T).h},t.and=function(T){const v=Math.max(this.g.length,T.g.length),S=[];for(let k=0;k<v;k++)S[k]=this.i(k)&T.i(k);return new o(S,this.h&T.h)},t.or=function(T){const v=Math.max(this.g.length,T.g.length),S=[];for(let k=0;k<v;k++)S[k]=this.i(k)|T.i(k);return new o(S,this.h|T.h)},t.xor=function(T){const v=Math.max(this.g.length,T.g.length),S=[];for(let k=0;k<v;k++)S[k]=this.i(k)^T.i(k);return new o(S,this.h^T.h)};function L(T){const v=T.g.length+1,S=[];for(let k=0;k<v;k++)S[k]=T.i(k)<<1|T.i(k-1)>>>31;return new o(S,T.h)}function j(T,v){const S=v>>5;v%=32;const k=T.g.length-S,R=[];for(let N=0;N<k;N++)R[N]=v>0?T.i(N+S)>>>v|T.i(N+S+1)<<32-v:T.i(N+S);return new o(R,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,AT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Dr=o}).apply(typeof Ev<"u"?Ev:typeof self<"u"?self:typeof window<"u"?window:{});var ru=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kT,Xo,RT,Ru,Zf,PT,CT,bT;(function(){var t,e=Object.defineProperty;function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ru=="object"&&ru];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(l,h){if(h)e:{var p=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var D=l[y];if(!(D in p))break e;p=p[D]}l=l[l.length-1],y=p[l],h=h(y),h!=y&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(l){return l||function(h){var p=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&p.push([y,h[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function u(l,h,p){return l.call.apply(l.bind,arguments)}function c(l,h,p){return c=u,c.apply(null,arguments)}function d(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function m(l,h){function p(){}p.prototype=h.prototype,l.Z=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Ob=function(y,D,O){for(var B=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)B[ne-2]=arguments[ne];return h.prototype[D].apply(y,B)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function I(l){const h=l.length;if(h>0){const p=Array(h);for(let y=0;y<h;y++)p[y]=l[y];return p}return[]}function x(l,h){for(let y=1;y<arguments.length;y++){const D=arguments[y];var p=typeof D;if(p=p!="object"?p:D?Array.isArray(D)?"array":p:"null",p=="array"||p=="object"&&typeof D.length=="number"){p=l.length||0;const O=D.length||0;l.length=p+O;for(let B=0;B<O;B++)l[p+B]=D[B]}else l.push(D)}}class P{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function C(l){o.setTimeout(()=>{throw l},0)}function w(){var l=T;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,p){const y=E.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var E=new P(()=>new V,l=>l.reset());class V{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let L,j=!1,T=new _,v=()=>{const l=Promise.resolve(void 0);L=()=>{l.then(S)}};function S(){for(var l;l=w();){try{l.h.call(l.g)}catch(p){C(p)}var h=E;h.j(l),h.h<100&&(h.h++,l.next=h.g,h.g=l)}j=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return l}();function A(l){return/^[\s\xa0]*$/.test(l)}function Ue(l,h){R.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,h)}m(Ue,R),Ue.prototype.init=function(l,h){const p=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget,h||(p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&Ue.Z.h.call(this)},Ue.prototype.h=function(){Ue.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Xt="closure_listenable_"+(Math.random()*1e6|0),Yr=0;function Xr(l,h,p,y,D){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=D,this.key=++Yr,this.da=this.fa=!1}function W(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function $(l,h,p){for(const y in l)h.call(p,l[y],y,l)}function H(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function Y(l){const h={};for(const p in l)h[p]=l[p];return h}const ce="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ve(l,h){let p,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(p in y)l[p]=y[p];for(let O=0;O<ce.length;O++)p=ce[O],Object.prototype.hasOwnProperty.call(y,p)&&(l[p]=y[p])}}function Oe(l){this.src=l,this.g={},this.h=0}Oe.prototype.add=function(l,h,p,y,D){const O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);const B=Jt(l,h,y,D);return B>-1?(h=l[B],p||(h.fa=!1)):(h=new Xr(h,this.src,O,!!y,D),h.fa=p,l.push(h)),h};function Ye(l,h){const p=h.type;if(p in l.g){var y=l.g[p],D=Array.prototype.indexOf.call(y,h,void 0),O;(O=D>=0)&&Array.prototype.splice.call(y,D,1),O&&(W(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function Jt(l,h,p,y){for(let D=0;D<l.length;++D){const O=l[D];if(!O.da&&O.listener==h&&O.capture==!!p&&O.ha==y)return D}return-1}var er="closure_lm_"+(Math.random()*1e6|0),Mh={};function Dg(l,h,p,y,D){if(Array.isArray(h)){for(let O=0;O<h.length;O++)Dg(l,h[O],p,y,D);return null}return p=Mg(p),l&&l[Xt]?l.J(h,p,a(y)?!!y.capture:!1,D):_1(l,h,p,!1,y,D)}function _1(l,h,p,y,D,O){if(!h)throw Error("Invalid event type");const B=a(D)?!!D.capture:!!D;let ne=jh(l);if(ne||(l[er]=ne=new Oe(l)),p=ne.add(h,p,y,B,O),p.proxy)return p;if(y=v1(),p.proxy=y,y.src=l,y.listener=p,l.addEventListener)N||(D=B),D===void 0&&(D=!1),l.addEventListener(h.toString(),y,D);else if(l.attachEvent)l.attachEvent(Og(h.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function v1(){function l(p){return h.call(l.src,l.listener,p)}const h=w1;return l}function Vg(l,h,p,y,D){if(Array.isArray(h))for(var O=0;O<h.length;O++)Vg(l,h[O],p,y,D);else y=a(y)?!!y.capture:!!y,p=Mg(p),l&&l[Xt]?(l=l.i,O=String(h).toString(),O in l.g&&(h=l.g[O],p=Jt(h,p,y,D),p>-1&&(W(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete l.g[O],l.h--)))):l&&(l=jh(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Jt(h,p,y,D)),(p=l>-1?h[l]:null)&&Lh(p))}function Lh(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Xt])Ye(h.i,l);else{var p=l.type,y=l.proxy;h.removeEventListener?h.removeEventListener(p,y,l.capture):h.detachEvent?h.detachEvent(Og(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=jh(h))?(Ye(p,l),p.h==0&&(p.src=null,h[er]=null)):W(l)}}}function Og(l){return l in Mh?Mh[l]:Mh[l]="on"+l}function w1(l,h){if(l.da)l=!0;else{h=new Ue(h,this);const p=l.listener,y=l.ha||l.src;l.fa&&Lh(l),l=p.call(y,h)}return l}function jh(l){return l=l[er],l instanceof Oe?l:null}var Fh="__closure_events_fn_"+(Math.random()*1e9>>>0);function Mg(l){return typeof l=="function"?l:(l[Fh]||(l[Fh]=function(h){return l.handleEvent(h)}),l[Fh])}function nt(){k.call(this),this.i=new Oe(this),this.M=this,this.G=null}m(nt,k),nt.prototype[Xt]=!0,nt.prototype.removeEventListener=function(l,h,p,y){Vg(this,l,h,p,y)};function ht(l,h){var p,y=l.G;if(y)for(p=[];y;y=y.G)p.push(y);if(l=l.M,y=h.type||h,typeof h=="string")h=new R(h,l);else if(h instanceof R)h.target=h.target||l;else{var D=h;h=new R(y,l),Ve(h,D)}D=!0;let O,B;if(p)for(B=p.length-1;B>=0;B--)O=h.g=p[B],D=Al(O,y,!0,h)&&D;if(O=h.g=l,D=Al(O,y,!0,h)&&D,D=Al(O,y,!1,h)&&D,p)for(B=0;B<p.length;B++)O=h.g=p[B],D=Al(O,y,!1,h)&&D}nt.prototype.N=function(){if(nt.Z.N.call(this),this.i){var l=this.i;for(const h in l.g){const p=l.g[h];for(let y=0;y<p.length;y++)W(p[y]);delete l.g[h],l.h--}}this.G=null},nt.prototype.J=function(l,h,p,y){return this.i.add(String(l),h,!1,p,y)},nt.prototype.K=function(l,h,p,y){return this.i.add(String(l),h,!0,p,y)};function Al(l,h,p,y){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();let D=!0;for(let O=0;O<h.length;++O){const B=h[O];if(B&&!B.da&&B.capture==p){const ne=B.listener,ze=B.ha||B.src;B.fa&&Ye(l.i,B),D=ne.call(ze,y)!==!1&&D}}return D&&!y.defaultPrevented}function E1(l,h){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=c(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(l,h||0)}function Lg(l){l.g=E1(()=>{l.g=null,l.i&&(l.i=!1,Lg(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class I1 extends k{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Lg(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function go(l){k.call(this),this.h=l,this.g={}}m(go,k);var jg=[];function Fg(l){$(l.g,function(h,p){this.g.hasOwnProperty(p)&&Lh(h)},l),l.g={}}go.prototype.N=function(){go.Z.N.call(this),Fg(this)},go.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Uh=o.JSON.stringify,T1=o.JSON.parse,x1=class{stringify(l){return o.JSON.stringify(l,void 0)}parse(l){return o.JSON.parse(l,void 0)}};function Ug(){}function zg(){}var yo={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function zh(){R.call(this,"d")}m(zh,R);function Bh(){R.call(this,"c")}m(Bh,R);var Jr={},Bg=null;function kl(){return Bg=Bg||new nt}Jr.Ia="serverreachability";function $g(l){R.call(this,Jr.Ia,l)}m($g,R);function _o(l){const h=kl();ht(h,new $g(h))}Jr.STAT_EVENT="statevent";function qg(l,h){R.call(this,Jr.STAT_EVENT,l),this.stat=h}m(qg,R);function dt(l){const h=kl();ht(h,new qg(h,l))}Jr.Ja="timingevent";function Kg(l,h){R.call(this,Jr.Ja,l),this.size=h}m(Kg,R);function vo(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){l()},h)}function wo(){this.g=!0}wo.prototype.ua=function(){this.g=!1};function S1(l,h,p,y,D,O){l.info(function(){if(l.g)if(O){var B="",ne=O.split("&");for(let me=0;me<ne.length;me++){var ze=ne[me].split("=");if(ze.length>1){const We=ze[0];ze=ze[1];const pn=We.split("_");B=pn.length>=2&&pn[1]=="type"?B+(We+"="+ze+"&"):B+(We+"=redacted&")}}}else B=null;else B=O;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+h+`
`+p+`
`+B})}function A1(l,h,p,y,D,O,B){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+h+`
`+p+`
`+O+" "+B})}function ti(l,h,p,y){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+R1(l,p)+(y?" "+y:"")})}function k1(l,h){l.info(function(){return"TIMEOUT: "+h})}wo.prototype.info=function(){};function R1(l,h){if(!l.g)return h;if(!h)return null;try{const O=JSON.parse(h);if(O){for(l=0;l<O.length;l++)if(Array.isArray(O[l])){var p=O[l];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var D=y[0];if(D!="noop"&&D!="stop"&&D!="close")for(let B=1;B<y.length;B++)y[B]=""}}}}return Uh(O)}catch{return h}}var Rl={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Wg={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Hg;function $h(){}m($h,Ug),$h.prototype.g=function(){return new XMLHttpRequest},Hg=new $h;function Eo(l){return encodeURIComponent(String(l))}function P1(l){var h=1;l=l.split(":");const p=[];for(;h>0&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function tr(l,h,p,y){this.j=l,this.i=h,this.l=p,this.S=y||1,this.V=new go(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Gg}function Gg(){this.i=null,this.g="",this.h=!1}var Qg={},qh={};function Kh(l,h,p){l.M=1,l.A=Cl(fn(h)),l.u=p,l.R=!0,Yg(l,null)}function Yg(l,h){l.F=Date.now(),Pl(l),l.B=fn(l.A);var p=l.B,y=l.S;Array.isArray(y)||(y=[String(y)]),uy(p.i,"t",y),l.C=0,p=l.j.L,l.h=new Gg,l.g=ky(l.j,p?h:null,!l.u),l.P>0&&(l.O=new I1(c(l.Y,l,l.g),l.P)),h=l.V,p=l.g,y=l.ba;var D="readystatechange";Array.isArray(D)||(D&&(jg[0]=D.toString()),D=jg);for(let O=0;O<D.length;O++){const B=Dg(p,D[O],y||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=l.J?Y(l.J):{},l.u?(l.v||(l.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,h)):(l.v="GET",l.g.ea(l.B,l.v,null,h)),_o(),S1(l.i,l.v,l.B,l.l,l.S,l.u)}tr.prototype.ba=function(l){l=l.target;const h=this.O;h&&sr(l)==3?h.j():this.Y(l)},tr.prototype.Y=function(l){try{if(l==this.g)e:{const ne=sr(this.g),ze=this.g.ya(),me=this.g.ca();if(!(ne<3)&&(ne!=3||this.g&&(this.h.h||this.g.la()||gy(this.g)))){this.K||ne!=4||ze==7||(ze==8||me<=0?_o(3):_o(2)),Wh(this);var h=this.g.ca();this.X=h;var p=C1(this);if(this.o=h==200,A1(this.i,this.v,this.B,this.l,this.S,ne,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,D=this.g;if((y=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(y)){var O=y;break t}}O=null}if(l=O)ti(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Hh(this,l);else{this.o=!1,this.m=3,dt(12),Zr(this),Io(this);break e}}if(this.R){l=!0;let We;for(;!this.K&&this.C<p.length;)if(We=b1(this,p),We==qh){ne==4&&(this.m=4,dt(14),l=!1),ti(this.i,this.l,null,"[Incomplete Response]");break}else if(We==Qg){this.m=4,dt(15),ti(this.i,this.l,p,"[Invalid Chunk]"),l=!1;break}else ti(this.i,this.l,We,null),Hh(this,We);if(Xg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ne!=4||p.length!=0||this.h.h||(this.m=1,dt(16),l=!1),this.o=this.o&&l,!l)ti(this.i,this.l,p,"[Invalid Chunked Response]"),Zr(this),Io(this);else if(p.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),td(B),B.P=!0,dt(11))}}else ti(this.i,this.l,p,null),Hh(this,p);ne==4&&Zr(this),this.o&&!this.K&&(ne==4?Ty(this.j,this):(this.o=!1,Pl(this)))}else K1(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,dt(12)):(this.m=0,dt(13)),Zr(this),Io(this)}}}catch{}finally{}};function C1(l){if(!Xg(l))return l.g.la();const h=gy(l.g);if(h==="")return"";let p="";const y=h.length,D=sr(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return Zr(l),Io(l),"";l.h.i=new o.TextDecoder}for(let O=0;O<y;O++)l.h.h=!0,p+=l.h.i.decode(h[O],{stream:!(D&&O==y-1)});return h.length=0,l.h.g+=p,l.C=0,l.h.g}function Xg(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function b1(l,h){var p=l.C,y=h.indexOf(`
`,p);return y==-1?qh:(p=Number(h.substring(p,y)),isNaN(p)?Qg:(y+=1,y+p>h.length?qh:(h=h.slice(y,y+p),l.C=y+p,h)))}tr.prototype.cancel=function(){this.K=!0,Zr(this)};function Pl(l){l.T=Date.now()+l.H,Jg(l,l.H)}function Jg(l,h){if(l.D!=null)throw Error("WatchDog timer not null");l.D=vo(c(l.aa,l),h)}function Wh(l){l.D&&(o.clearTimeout(l.D),l.D=null)}tr.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(k1(this.i,this.B),this.M!=2&&(_o(),dt(17)),Zr(this),this.m=2,Io(this)):Jg(this,this.T-l)};function Io(l){l.j.I==0||l.K||Ty(l.j,l)}function Zr(l){Wh(l);var h=l.O;h&&typeof h.dispose=="function"&&h.dispose(),l.O=null,Fg(l.V),l.g&&(h=l.g,l.g=null,h.abort(),h.dispose())}function Hh(l,h){try{var p=l.j;if(p.I!=0&&(p.g==l||Gh(p.h,l))){if(!l.L&&Gh(p.h,l)&&p.I==3){try{var y=p.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<l.F)Ol(p),Dl(p);else break e;ed(p),dt(18)}}else p.xa=D[1],0<p.xa-p.K&&D[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=vo(c(p.Va,p),6e3));ty(p.h)<=1&&p.ta&&(p.ta=void 0)}else ts(p,11)}else if((l.L||p.g==l)&&Ol(p),!A(h))for(D=p.Ba.g.parse(h),h=0;h<D.length;h++){let me=D[h];const We=me[0];if(!(We<=p.K))if(p.K=We,me=me[1],p.I==2)if(me[0]=="c"){p.M=me[1],p.ba=me[2];const pn=me[3];pn!=null&&(p.ka=pn,p.j.info("VER="+p.ka));const ns=me[4];ns!=null&&(p.za=ns,p.j.info("SVER="+p.za));const ir=me[5];ir!=null&&typeof ir=="number"&&ir>0&&(y=1.5*ir,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const or=l.g;if(or){const Ll=or.g?or.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ll){var O=y.h;O.g||Ll.indexOf("spdy")==-1&&Ll.indexOf("quic")==-1&&Ll.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Qh(O,O.h),O.h=null))}if(y.G){const nd=or.g?or.g.getResponseHeader("X-HTTP-Session-Id"):null;nd&&(y.wa=nd,ye(y.J,y.G,nd))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-l.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var B=l;if(y.na=Ay(y,y.L?y.ba:null,y.W),B.L){ny(y.h,B);var ne=B,ze=y.O;ze&&(ne.H=ze),ne.D&&(Wh(ne),Pl(ne)),y.g=B}else Ey(y);p.i.length>0&&Vl(p)}else me[0]!="stop"&&me[0]!="close"||ts(p,7);else p.I==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?ts(p,7):Zh(p):me[0]!="noop"&&p.l&&p.l.qa(me),p.A=0)}}_o(4)}catch{}}var N1=class{constructor(l,h){this.g=l,this.map=h}};function Zg(l){this.l=l||10,o.PerformanceNavigationTiming?(l=o.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ey(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ty(l){return l.h?1:l.g?l.g.size:0}function Gh(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Qh(l,h){l.g?l.g.add(h):l.h=h}function ny(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Zg.prototype.cancel=function(){if(this.i=ry(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ry(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.G);return h}return I(l.i)}var sy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function D1(l,h){if(l){l=l.split("&");for(let p=0;p<l.length;p++){const y=l[p].indexOf("=");let D,O=null;y>=0?(D=l[p].substring(0,y),O=l[p].substring(y+1)):D=l[p],h(D,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function nr(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;l instanceof nr?(this.l=l.l,To(this,l.j),this.o=l.o,this.g=l.g,xo(this,l.u),this.h=l.h,Yh(this,cy(l.i)),this.m=l.m):l&&(h=String(l).match(sy))?(this.l=!1,To(this,h[1]||"",!0),this.o=So(h[2]||""),this.g=So(h[3]||"",!0),xo(this,h[4]),this.h=So(h[5]||"",!0),Yh(this,h[6]||"",!0),this.m=So(h[7]||"")):(this.l=!1,this.i=new ko(null,this.l))}nr.prototype.toString=function(){const l=[];var h=this.j;h&&l.push(Ao(h,iy,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Ao(h,iy,!0),"@"),l.push(Eo(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&l.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Ao(p,p.charAt(0)=="/"?M1:O1,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Ao(p,j1)),l.join("")},nr.prototype.resolve=function(l){const h=fn(this);let p=!!l.j;p?To(h,l.j):p=!!l.o,p?h.o=l.o:p=!!l.g,p?h.g=l.g:p=l.u!=null;var y=l.h;if(p)xo(h,l.u);else if(p=!!l.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var D=h.h.lastIndexOf("/");D!=-1&&(y=h.h.slice(0,D+1)+y)}if(D=y,D==".."||D==".")y="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){y=D.lastIndexOf("/",0)==0,D=D.split("/");const O=[];for(let B=0;B<D.length;){const ne=D[B++];ne=="."?y&&B==D.length&&O.push(""):ne==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),y&&B==D.length&&O.push("")):(O.push(ne),y=!0)}y=O.join("/")}else y=D}return p?h.h=y:p=l.i.toString()!=="",p?Yh(h,cy(l.i)):p=!!l.m,p&&(h.m=l.m),h};function fn(l){return new nr(l)}function To(l,h,p){l.j=p?So(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function xo(l,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);l.u=h}else l.u=null}function Yh(l,h,p){h instanceof ko?(l.i=h,F1(l.i,l.l)):(p||(h=Ao(h,L1)),l.i=new ko(h,l.l))}function ye(l,h,p){l.i.set(h,p)}function Cl(l){return ye(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function So(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ao(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,V1),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function V1(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var iy=/[#\/\?@]/g,O1=/[#\?:]/g,M1=/[#\?]/g,L1=/[#\?@]/g,j1=/#/g;function ko(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function es(l){l.g||(l.g=new Map,l.h=0,l.i&&D1(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ko.prototype,t.add=function(l,h){es(this),this.i=null,l=ni(this,l);let p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function oy(l,h){es(l),h=ni(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function ay(l,h){return es(l),h=ni(l,h),l.g.has(h)}t.forEach=function(l,h){es(this),this.g.forEach(function(p,y){p.forEach(function(D){l.call(h,D,y,this)},this)},this)};function ly(l,h){es(l);let p=[];if(typeof h=="string")ay(l,h)&&(p=p.concat(l.g.get(ni(l,h))));else for(l=Array.from(l.g.values()),h=0;h<l.length;h++)p=p.concat(l[h]);return p}t.set=function(l,h){return es(this),this.i=null,l=ni(this,l),ay(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=ly(this,l),l.length>0?String(l[0]):h):h};function uy(l,h,p){oy(l,h),p.length>0&&(l.i=null,l.g.set(ni(l,h),I(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var p=h[y];const D=Eo(p);p=ly(this,p);for(let O=0;O<p.length;O++){let B=D;p[O]!==""&&(B+="="+Eo(p[O])),l.push(B)}}return this.i=l.join("&")};function cy(l){const h=new ko;return h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),h}function ni(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function F1(l,h){h&&!l.j&&(es(l),l.i=null,l.g.forEach(function(p,y){const D=y.toLowerCase();y!=D&&(oy(this,y),uy(this,D,p))},l)),l.j=h}function U1(l,h){const p=new wo;if(o.Image){const y=new Image;y.onload=d(rr,p,"TestLoadImage: loaded",!0,h,y),y.onerror=d(rr,p,"TestLoadImage: error",!1,h,y),y.onabort=d(rr,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=d(rr,p,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else h(!1)}function z1(l,h){const p=new wo,y=new AbortController,D=setTimeout(()=>{y.abort(),rr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:y.signal}).then(O=>{clearTimeout(D),O.ok?rr(p,"TestPingServer: ok",!0,h):rr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),rr(p,"TestPingServer: error",!1,h)})}function rr(l,h,p,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(p)}catch{}}function B1(){this.g=new x1}function Xh(l){this.i=l.Sb||null,this.h=l.ab||!1}m(Xh,Ug),Xh.prototype.g=function(){return new bl(this.i,this.h)};function bl(l,h){nt.call(this),this.H=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(bl,nt),t=bl.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=h,this.readyState=1,Po(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(h.body=l),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ro(this)),this.readyState=0},t.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Po(this)),this.g&&(this.readyState=3,Po(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;hy(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function hy(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}t.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Ro(this):Po(this),this.readyState==3&&hy(this)}},t.Oa=function(l){this.g&&(this.response=this.responseText=l,Ro(this))},t.Na=function(l){this.g&&(this.response=l,Ro(this))},t.ga=function(){this.g&&Ro(this)};function Ro(l){l.readyState=4,l.l=null,l.j=null,l.B=null,Po(l)}t.setRequestHeader=function(l,h){this.A.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function Po(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(bl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function dy(l){let h="";return $(l,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function Jh(l,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=dy(p),typeof l=="string"?p!=null&&Eo(p):ye(l,h,p))}function ke(l){nt.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(ke,nt);var $1=/^https?$/i,q1=["POST","PUT"];t=ke.prototype,t.Fa=function(l){this.H=l},t.ea=function(l,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Hg.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(O){fy(this,O);return}if(l=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)p.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())p.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),D=o.FormData&&l instanceof o.FormData,!(Array.prototype.indexOf.call(q1,h,void 0)>=0)||y||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of p)this.g.setRequestHeader(O,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(O){fy(this,O)}};function fy(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.o=5,py(l),Nl(l)}function py(l){l.A||(l.A=!0,ht(l,"complete"),ht(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,ht(this,"complete"),ht(this,"abort"),Nl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Nl(this,!0)),ke.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?my(this):this.Xa())},t.Xa=function(){my(this)};function my(l){if(l.h&&typeof i<"u"){if(l.v&&sr(l)==4)setTimeout(l.Ca.bind(l),0);else if(ht(l,"readystatechange"),sr(l)==4){l.h=!1;try{const O=l.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=O===0){let B=String(l.D).match(sy)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),y=!$1.test(B?B.toLowerCase():"")}p=y}if(p)ht(l,"complete"),ht(l,"success");else{l.o=6;try{var D=sr(l)>2?l.g.statusText:""}catch{D=""}l.l=D+" ["+l.ca()+"]",py(l)}}finally{Nl(l)}}}}function Nl(l,h){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const p=l.g;l.g=null,h||ht(l,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function sr(l){return l.g?l.g.readyState:0}t.ca=function(){try{return sr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),T1(h)}};function gy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function K1(l){const h={};l=(l.g&&sr(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(A(l[y]))continue;var p=P1(l[y]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=h[D]||[];h[D]=O,O.push(p)}H(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Co(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function yy(l){this.za=0,this.i=[],this.j=new wo,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Co("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Co("baseRetryDelayMs",5e3,l),this.Za=Co("retryDelaySeedMs",1e4,l),this.Ta=Co("forwardChannelMaxRetries",2,l),this.va=Co("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Zg(l&&l.concurrentRequestLimit),this.Ba=new B1,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=yy.prototype,t.ka=8,t.I=1,t.connect=function(l,h,p,y){dt(0),this.W=l,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=Ay(this,null,this.W),Vl(this)};function Zh(l){if(_y(l),l.I==3){var h=l.V++,p=fn(l.J);if(ye(p,"SID",l.M),ye(p,"RID",h),ye(p,"TYPE","terminate"),bo(l,p),h=new tr(l,l.j,h),h.M=2,h.A=Cl(fn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=ky(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Pl(h)}Sy(l)}function Dl(l){l.g&&(td(l),l.g.cancel(),l.g=null)}function _y(l){Dl(l),l.v&&(o.clearTimeout(l.v),l.v=null),Ol(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&o.clearTimeout(l.m),l.m=null)}function Vl(l){if(!ey(l.h)&&!l.m){l.m=!0;var h=l.Ea;L||v(),j||(L(),j=!0),T.add(h,l),l.D=0}}function W1(l,h){return ty(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=h.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=vo(c(l.Ea,l,h),xy(l,l.D)),l.D++,!0)}t.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const D=new tr(this,this.j,l);let O=this.o;if(this.U&&(O?(O=Y(O),Ve(O,this.U)):O=this.U),this.u!==null||this.R||(D.J=O,O=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=wy(this,D,h),p=fn(this.J),ye(p,"RID",l),ye(p,"CVER",22),this.G&&ye(p,"X-HTTP-Session-Id",this.G),bo(this,p),O&&(this.R?h="headers="+Eo(dy(O))+"&"+h:this.u&&Jh(p,this.u,O)),Qh(this.h,D),this.Ra&&ye(p,"TYPE","init"),this.S?(ye(p,"$req",h),ye(p,"SID","null"),D.U=!0,Kh(D,p,null)):Kh(D,p,h),this.I=2}}else this.I==3&&(l?vy(this,l):this.i.length==0||ey(this.h)||vy(this))};function vy(l,h){var p;h?p=h.l:p=l.V++;const y=fn(l.J);ye(y,"SID",l.M),ye(y,"RID",p),ye(y,"AID",l.K),bo(l,y),l.u&&l.o&&Jh(y,l.u,l.o),p=new tr(l,l.j,p,l.D+1),l.u===null&&(p.J=l.o),h&&(l.i=h.G.concat(l.i)),h=wy(l,p,1e3),p.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Qh(l.h,p),Kh(p,y,h)}function bo(l,h){l.H&&$(l.H,function(p,y){ye(h,y,p)}),l.l&&$({},function(p,y){ye(h,y,p)})}function wy(l,h,p){p=Math.min(l.i.length,p);const y=l.l?c(l.l.Ka,l.l,l):null;e:{var D=l.i;let ne=-1;for(;;){const ze=["count="+p];ne==-1?p>0?(ne=D[0].g,ze.push("ofs="+ne)):ne=0:ze.push("ofs="+ne);let me=!0;for(let We=0;We<p;We++){var O=D[We].g;const pn=D[We].map;if(O-=ne,O<0)ne=Math.max(0,D[We].g-100),me=!1;else try{O="req"+O+"_"||"";try{var B=pn instanceof Map?pn:Object.entries(pn);for(const[ns,ir]of B){let or=ir;a(ir)&&(or=Uh(ir)),ze.push(O+ns+"="+encodeURIComponent(or))}}catch(ns){throw ze.push(O+"type="+encodeURIComponent("_badmap")),ns}}catch{y&&y(pn)}}if(me){B=ze.join("&");break e}}B=void 0}return l=l.i.splice(0,p),h.G=l,B}function Ey(l){if(!l.g&&!l.v){l.Y=1;var h=l.Da;L||v(),j||(L(),j=!0),T.add(h,l),l.A=0}}function ed(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=vo(c(l.Da,l),xy(l,l.A)),l.A++,!0)}t.Da=function(){if(this.v=null,Iy(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=vo(c(this.Wa,this),l)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,dt(10),Dl(this),Iy(this))};function td(l){l.B!=null&&(o.clearTimeout(l.B),l.B=null)}function Iy(l){l.g=new tr(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var h=fn(l.na);ye(h,"RID","rpc"),ye(h,"SID",l.M),ye(h,"AID",l.K),ye(h,"CI",l.F?"0":"1"),!l.F&&l.ia&&ye(h,"TO",l.ia),ye(h,"TYPE","xmlhttp"),bo(l,h),l.u&&l.o&&Jh(h,l.u,l.o),l.O&&(l.g.H=l.O);var p=l.g;l=l.ba,p.M=1,p.A=Cl(fn(h)),p.u=null,p.R=!0,Yg(p,l)}t.Va=function(){this.C!=null&&(this.C=null,Dl(this),ed(this),dt(19))};function Ol(l){l.C!=null&&(o.clearTimeout(l.C),l.C=null)}function Ty(l,h){var p=null;if(l.g==h){Ol(l),td(l),l.g=null;var y=2}else if(Gh(l.h,h))p=h.G,ny(l.h,h),y=1;else return;if(l.I!=0){if(h.o)if(y==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var D=l.D;y=kl(),ht(y,new Kg(y,p)),Vl(l)}else Ey(l);else if(D=h.m,D==3||D==0&&h.X>0||!(y==1&&W1(l,h)||y==2&&ed(l)))switch(p&&p.length>0&&(h=l.h,h.i=h.i.concat(p)),D){case 1:ts(l,5);break;case 4:ts(l,10);break;case 3:ts(l,6);break;default:ts(l,2)}}}function xy(l,h){let p=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(p*=2),p*h}function ts(l,h){if(l.j.info("Error code "+h),h==2){var p=c(l.bb,l),y=l.Ua;const D=!y;y=new nr(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||To(y,"https"),Cl(y),D?U1(y.toString(),p):z1(y.toString(),p)}else dt(2);l.I=0,l.l&&l.l.pa(h),Sy(l),_y(l)}t.bb=function(l){l?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Sy(l){if(l.I=0,l.ja=[],l.l){const h=ry(l.h);(h.length!=0||l.i.length!=0)&&(x(l.ja,h),x(l.ja,l.i),l.h.i.length=0,I(l.i),l.i.length=0),l.l.oa()}}function Ay(l,h,p){var y=p instanceof nr?fn(p):new nr(p);if(y.g!="")h&&(y.g=h+"."+y.g),xo(y,y.u);else{var D=o.location;y=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;const O=new nr(null);y&&To(O,y),h&&(O.g=h),D&&xo(O,D),p&&(O.h=p),y=O}return p=l.G,h=l.wa,p&&h&&ye(y,p,h),ye(y,"VER",l.ka),bo(l,y),y}function ky(l,h,p){if(h&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Aa&&!l.ma?new ke(new Xh({ab:p})):new ke(l.ma),h.Fa(l.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ry(){}t=Ry.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ml(){}Ml.prototype.g=function(l,h){return new Rt(l,h)};function Rt(l,h){nt.call(this),this.g=new yy(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(l?l["X-WebChannel-Client-Profile"]=h.sa:l={"X-WebChannel-Client-Profile":h.sa}),this.g.U=l,(l=h&&h.Qb)&&!A(l)&&(this.g.u=l),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!A(h)&&(this.g.G=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new ri(this)}m(Rt,nt),Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){Zh(this.g)},Rt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.v&&(p={},p.__data__=Uh(l),l=p);h.i.push(new N1(h.Ya++,l)),h.I==3&&Vl(h)},Rt.prototype.N=function(){this.g.l=null,delete this.j,Zh(this.g),delete this.g,Rt.Z.N.call(this)};function Py(l){zh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}m(Py,zh);function Cy(){Bh.call(this),this.status=1}m(Cy,Bh);function ri(l){this.g=l}m(ri,Ry),ri.prototype.ra=function(){ht(this.g,"a")},ri.prototype.qa=function(l){ht(this.g,new Py(l))},ri.prototype.pa=function(l){ht(this.g,new Cy)},ri.prototype.oa=function(){ht(this.g,"b")},Ml.prototype.createWebChannel=Ml.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,bT=function(){return new Ml},CT=function(){return kl()},PT=Jr,Zf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Rl.NO_ERROR=0,Rl.TIMEOUT=8,Rl.HTTP_ERROR=6,Ru=Rl,Wg.COMPLETE="complete",RT=Wg,zg.EventType=yo,yo.OPEN="a",yo.CLOSE="b",yo.ERROR="c",yo.MESSAGE="d",nt.prototype.listen=nt.prototype.J,Xo=zg,ke.prototype.listenOnce=ke.prototype.K,ke.prototype.getLastError=ke.prototype.Ha,ke.prototype.getLastErrorCode=ke.prototype.ya,ke.prototype.getStatus=ke.prototype.ca,ke.prototype.getResponseJson=ke.prototype.La,ke.prototype.getResponseText=ke.prototype.la,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Fa,kT=ke}).apply(typeof ru<"u"?ru:typeof self<"u"?self:typeof window<"u"?window:{});const Iv="@firebase/firestore",Tv="4.9.2";/**
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
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
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
 */let co="12.3.0";/**
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
 */const Vs=new Im("@firebase/firestore");function hi(){return Vs.logLevel}function F(t,...e){if(Vs.logLevel<=ie.DEBUG){const n=e.map(Nm);Vs.debug(`Firestore (${co}): ${t}`,...n)}}function pt(t,...e){if(Vs.logLevel<=ie.ERROR){const n=e.map(Nm);Vs.error(`Firestore (${co}): ${t}`,...n)}}function Os(t,...e){if(Vs.logLevel<=ie.WARN){const n=e.map(Nm);Vs.warn(`Firestore (${co}): ${t}`,...n)}}function Nm(t){if(typeof t=="string")return t;try{/**
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
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,NT(t,r,n)}function NT(t,e,n){let r=`FIRESTORE (${co}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw pt(r),new Error(r)}function X(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||NT(e,s,r)}function te(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class DT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class UN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zN{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){X(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Sn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new DT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new Je(e)}}class BN{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class $N{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new BN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,bt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){X(this.o===void 0,3512);const r=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new xv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(X(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new xv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function KN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Dm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=KN(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function ep(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Ld(s)===Ld(i)?ee(s,i):Ld(s)?1:-1}return ee(t.length,e.length)}const WN=55296,HN=57343;function Ld(t){const e=t.charCodeAt(0);return e>=WN&&e<=HN}function Hi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}function VT(t){return t+"\0"}/**
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
 */const Sv="__name__";class yn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=yn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ee(e.length,n.length)}static compareSegments(e,n){const r=yn.isNumericId(e),s=yn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?yn.extractNumericId(e).compare(yn.extractNumericId(n)):ep(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dr.fromString(e.substring(4,e.length-2))}}class ue extends yn{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const GN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xe extends yn{construct(e,n,r){return new xe(e,n,r)}static isValidIdentifier(e){return GN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sv}static keyField(){return new xe([Sv])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new z(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new z(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xe(n)}static emptyPath(){return new xe([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ue.fromString(e))}static fromName(e){return new q(ue.fromString(e).popFirst(5))}static empty(){return new q(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ue(e.slice()))}}/**
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
 */function OT(t,e,n){if(!n)throw new z(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QN(t,e,n,r){if(e===!0&&r===!0)throw new z(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Av(t){if(!q.isDocumentKey(t))throw new z(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kv(t){if(q.isDocumentKey(t))throw new z(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function MT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ch(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function Wt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ch(t);throw new z(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,e){const n={typeString:t};return e&&(n.value=e),n}function ml(t,e){if(!MT(t))throw new z(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new z(M.INVALID_ARGUMENT,n);return!0}/**
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
 */const Rv=-62135596800,Pv=1e6;class he{static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Pv);return new he(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Rv)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pv}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:he._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ml(e,he._jsonSchema))return new he(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}he._jsonSchemaVersion="firestore/timestamp/1.0",he._jsonSchema={type:je("string",he._jsonSchemaVersion),seconds:je("number"),nanoseconds:je("number")};/**
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
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new he(0,0))}static max(){return new J(new he(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ba=-1;class _c{constructor(e,n,r,s){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=s}}function tp(t){return t.fields.find(e=>e.kind===2)}function as(t){return t.fields.filter(e=>e.kind!==2)}_c.UNKNOWN_ID=-1;class Pu{constructor(e,n){this.fieldPath=e,this.kind=n}}class $a{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new $a(0,Mt.min())}}function YN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new he(n+1,0):new he(n,r));return new Mt(s,q.empty(),e)}function LT(t){return new Mt(t.readTime,t.key,Ba)}class Mt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mt(J.min(),q.empty(),Ba)}static max(){return new Mt(J.max(),q.empty(),Ba)}}function Vm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const jT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Xs(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==jT)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(s=>s?b.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new b((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new b((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */const Ct="SimpleDb";class hh{static open(e,n,r,s){try{return new hh(n,e.transaction(s,r))}catch(i){throw new pa(n,i)}}constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.S=new Sn,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{n.error?this.S.reject(new pa(e,n.error)):this.S.resolve()},this.transaction.onerror=r=>{const s=Om(r.target.error);this.S.reject(new pa(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(F(Ct,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new JN(n)}}class Vr{static delete(e){return F(Ct,"Removing database:",e),us(bI().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Em())return!1;if(Vr.F())return!0;const e=qe(),n=Vr.M(e),r=0<n&&n<10,s=UT(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,n){return e.store(n)}static M(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,n,r){this.name=e,this.version=n,this.N=r,this.B=null,Vr.M(qe())===12.2&&pt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(F(Ct,"Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new pa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new z(M.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new z(M.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new pa(e,o))},s.onupgradeneeded=i=>{F(Ct,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,s.transaction,i.oldVersion,this.version).next(()=>{F(Ct,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=n=>this.q(n)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const a=hh.open(this.db,e,i?"readonly":"readwrite",r),u=s(a).next(c=>(a.C(),c)).catch(c=>(a.abort(c),b.reject(c))).toPromise();return u.catch(()=>{}),await a.D,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(F(Ct,"Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function UT(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class XN{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return us(this.U.delete())}}class pa extends z{constructor(e,n){super(M.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Gr(t){return t.name==="IndexedDbTransactionError"}class JN{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(F(Ct,"PUT",this.store.name,e,n),r=this.store.put(n,e)):(F(Ct,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),us(r)}add(e){return F(Ct,"ADD",this.store.name,e,e),us(this.store.add(e))}get(e){return us(this.store.get(e)).next(n=>(n===void 0&&(n=null),F(Ct,"GET",this.store.name,e,n),n))}delete(e){return F(Ct,"DELETE",this.store.name,e),us(this.store.delete(e))}count(){return F(Ct,"COUNT",this.store.name),us(this.store.count())}J(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new b((o,a)=>{i.onerror=u=>{a(u.target.error)},i.onsuccess=u=>{o(u.target.result)}})}{const i=this.cursor(r),o=[];return this.H(i,(a,u)=>{o.push(u)}).next(()=>o)}}Y(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new b((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}Z(e,n){F(Ct,"DELETE ALL",this.store.name);const r=this.options(e,n);r.X=!1;const s=this.cursor(r);return this.H(s,(i,o,a)=>a.delete())}ee(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.H(s,n)}te(e){const n=this.cursor({});return new b((r,s)=>{n.onerror=i=>{const o=Om(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,n){const r=[];return new b((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const u=new XN(a),c=n(a.primaryKey,a.value,u);if(c instanceof b){const d=c.catch(m=>(u.done(),b.reject(m)));r.push(d)}u.isDone?s():u.G===null?a.continue():a.continue(u.G)}}).next(()=>b.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function us(t){return new b((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Om(r.target.error);n(s)}})}let Cv=!1;function Om(t){const e=Vr.M(qe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new z("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Cv||(Cv=!0,setTimeout(()=>{throw r},0)),r}}return t}const ma="IndexBackfiller";class ZN{constructor(e,n){this.asyncQueue=e,this.ne=n,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){F(ma,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const n=await this.ne.ie();F(ma,`Documents written: ${n}`)}catch(n){Gr(n)?F(ma,"Ignoring IndexedDB error during index backfill: ",n):await Xs(n)}await this.re(6e4)})}}class e2{constructor(e,n){this.localStore=e,this.persistence=n}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.se(n,e))}se(e,n){const r=new Set;let s=n,i=!0;return b.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return F(ma,`Processing collection: ${o}`),this.oe(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>n-s)}oe(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(s=>this.localStore.localDocuments.getNextDocuments(e,n,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this._e(s,i)).next(a=>(F(ma,`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}_e(e,n){let r=e;return n.changes.forEach((s,i)=>{const o=LT(i);Vm(o,r)>0&&(r=o)}),new Mt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class $t{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}$t.ce=-1;/**
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
 */const ws=-1;function dh(t){return t==null}function qa(t){return t===0&&1/t==-1/0}function t2(t){return typeof t=="number"&&Number.isInteger(t)&&!qa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const vc="";function lt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=bv(e)),e=n2(t.get(n),e);return bv(e)}function n2(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case vc:n+="";break;default:n+=i}}return n}function bv(t){return t+vc+""}function vn(t){const e=t.length;if(X(e>=2,64408,{path:t}),e===2)return X(t.charAt(0)===vc&&t.charAt(1)==="",56145,{path:t}),ue.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const o=t.indexOf(vc,i);switch((o<0||o>n)&&Q(50515,{path:t}),t.charAt(o+1)){case"":const a=t.substring(i,o);let u;s.length===0?u=a:(s+=a,u=s,s=""),r.push(u);break;case"":s+=t.substring(i,o),s+="\0";break;case"":s+=t.substring(i,o+1);break;default:Q(61167,{path:t})}i=o+2}return new ue(r)}/**
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
 */const ls="remoteDocuments",gl="owner",ii="owner",Ka="mutationQueues",r2="userId",nn="mutations",Nv="batchId",gs="userMutationsIndex",Dv=["userId","batchId"];/**
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
 */function Cu(t,e){return[t,lt(e)]}function zT(t,e,n){return[t,lt(e),n]}const s2={},Gi="documentMutations",wc="remoteDocumentsV14",i2=["prefixPath","collectionGroup","readTime","documentId"],bu="documentKeyIndex",o2=["prefixPath","collectionGroup","documentId"],BT="collectionGroupIndex",a2=["collectionGroup","readTime","prefixPath","documentId"],Wa="remoteDocumentGlobal",np="remoteDocumentGlobalKey",Qi="targets",$T="queryTargetsIndex",l2=["canonicalId","targetId"],Yi="targetDocuments",u2=["targetId","path"],Mm="documentTargetsIndex",c2=["path","targetId"],Ec="targetGlobalKey",Es="targetGlobal",Ha="collectionParents",h2=["collectionId","parent"],Xi="clientMetadata",d2="clientId",fh="bundles",f2="bundleId",ph="namedQueries",p2="name",Lm="indexConfiguration",m2="indexId",rp="collectionGroupIndex",g2="collectionGroup",ga="indexState",y2=["indexId","uid"],qT="sequenceNumberIndex",_2=["uid","sequenceNumber"],ya="indexEntries",v2=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],KT="documentKeyIndex",w2=["indexId","uid","orderedDocumentKey"],mh="documentOverlays",E2=["userId","collectionPath","documentId"],sp="collectionPathOverlayIndex",I2=["userId","collectionPath","largestBatchId"],WT="collectionGroupOverlayIndex",T2=["userId","collectionGroup","largestBatchId"],jm="globals",x2="name",HT=[Ka,nn,Gi,ls,Qi,gl,Es,Yi,Xi,Wa,Ha,fh,ph],S2=[...HT,mh],GT=[Ka,nn,Gi,wc,Qi,gl,Es,Yi,Xi,Wa,Ha,fh,ph,mh],QT=GT,Fm=[...QT,Lm,ga,ya],A2=Fm,YT=[...Fm,jm],k2=YT;/**
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
 */class ip extends FT{constructor(e,n){super(),this.le=e,this.currentSequenceNumber=n}}function Ke(t,e){const n=te(t);return Vr.O(n.le,e)}/**
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
 */function Vv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Js(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function XT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new su(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new su(this.root,e,this.comparator,!1)}getReverseIterator(){return new su(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new su(this.root,e,this.comparator,!0)}}class su{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pe{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ov(this.data.getIterator())}getIteratorFrom(e){return new Ov(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pe(this.comparator);return n.data=e,n}}class Ov{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function oi(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class qt{constructor(e){this.fields=e,e.sort(xe.comparator)}static empty(){return new qt([])}unionWith(e){let n=new pe(xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class JT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new JT("Invalid base64 string: "+i):i}}(e);return new Fe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const R2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gn(t){if(X(!!t,39018),typeof t=="string"){let e=0;const n=R2.exec(t);if(X(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(t.seconds),nanos:we(t.nanos)}}function we(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qn(t){return typeof t=="string"?Fe.fromBase64String(t):Fe.fromUint8Array(t)}/**
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
 */const ZT="server_timestamp",ex="__type__",tx="__previous_value__",nx="__local_write_time__";function Um(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[ex])==null?void 0:r.stringValue)===ZT}function gh(t){const e=t.mapValue.fields[tx];return Um(e)?gh(e):e}function Ga(t){const e=Gn(t.mapValue.fields[nx].timestampValue);return new he(e.seconds,e.nanos)}/**
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
 */class P2{constructor(e,n,r,s,i,o,a,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const Ic="(default)";class Ms{constructor(e,n){this.projectId=e,this.database=n||Ic}static empty(){return new Ms("","")}get isDefaultDatabase(){return this.database===Ic}isEqual(e){return e instanceof Ms&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const zm="__type__",rx="__max__",Tr={mapValue:{fields:{__type__:{stringValue:rx}}}},Bm="__vector__",Ji="value",Nu={nullValue:"NULL_VALUE"};function Fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Um(t)?4:sx(t)?9007199254740991:yh(t)?10:11:Q(28295,{value:t})}function Rn(t,e){if(t===e)return!0;const n=Fr(t);if(n!==Fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ga(t).isEqual(Ga(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Gn(s.timestampValue),a=Gn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Qn(s.bytesValue).isEqual(Qn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return we(s.geoPointValue.latitude)===we(i.geoPointValue.latitude)&&we(s.geoPointValue.longitude)===we(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return we(s.integerValue)===we(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=we(s.doubleValue),a=we(i.doubleValue);return o===a?qa(o)===qa(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Hi(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Vv(o)!==Vv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Rn(o[u],a[u])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function Qa(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function Ur(t,e){if(t===e)return 0;const n=Fr(t),r=Fr(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=we(i.integerValue||i.doubleValue),u=we(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Mv(t.timestampValue,e.timestampValue);case 4:return Mv(Ga(t),Ga(e));case 5:return ep(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Qn(i),u=Qn(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=ee(a[c],u[c]);if(d!==0)return d}return ee(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ee(we(i.latitude),we(o.latitude));return a!==0?a:ee(we(i.longitude),we(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Lv(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,I,x,P;const a=i.fields||{},u=o.fields||{},c=(g=a[Ji])==null?void 0:g.arrayValue,d=(I=u[Ji])==null?void 0:I.arrayValue,m=ee(((x=c==null?void 0:c.values)==null?void 0:x.length)||0,((P=d==null?void 0:d.values)==null?void 0:P.length)||0);return m!==0?m:Lv(c,d)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Tr.mapValue&&o===Tr.mapValue)return 0;if(i===Tr.mapValue)return 1;if(o===Tr.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let m=0;m<u.length&&m<d.length;++m){const g=ep(u[m],d[m]);if(g!==0)return g;const I=Ur(a[u[m]],c[d[m]]);if(I!==0)return I}return ee(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function Mv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=Gn(t),r=Gn(e),s=ee(n.seconds,r.seconds);return s!==0?s:ee(n.nanos,r.nanos)}function Lv(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ur(n[s],r[s]);if(i)return i}return ee(n.length,r.length)}function Zi(t){return op(t)}function op(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Gn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=op(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${op(n.fields[o])}`;return s+"}"}(t.mapValue):Q(61005,{value:t})}function Du(t){switch(Fr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gh(t);return e?16+Du(e):16;case 5:return 2*t.stringValue.length;case 6:return Qn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Du(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Js(r.fields,(i,o)=>{s+=i.length+Du(o)}),s}(t.mapValue);default:throw Q(13486,{value:t})}}function Ya(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ap(t){return!!t&&"integerValue"in t}function Xa(t){return!!t&&"arrayValue"in t}function jv(t){return!!t&&"nullValue"in t}function Fv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vu(t){return!!t&&"mapValue"in t}function yh(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[zm])==null?void 0:r.stringValue)===Bm}function _a(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Js(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=_a(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_a(t.arrayValue.values[n]);return e}return{...t}}function sx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===rx}const ix={mapValue:{fields:{[zm]:{stringValue:Bm},[Ji]:{arrayValue:{}}}}};function C2(t){return"nullValue"in t?Nu:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Ya(Ms.empty(),q.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?yh(t)?ix:{mapValue:{}}:Q(35942,{value:t})}function b2(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Ya(Ms.empty(),q.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?ix:"mapValue"in t?yh(t)?{mapValue:{}}:Tr:Q(61959,{value:t})}function Uv(t,e){const n=Ur(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function zv(t,e){const n=Ur(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Vu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_a(n)}setAll(e){let n=xe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=_a(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Vu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Vu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Js(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Et(_a(this.value))}}function ox(t){const e=[];return Js(t.fields,(n,r)=>{const s=new xe([n]);if(Vu(r)){const i=ox(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new qt(e)}/**
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
 */class Pe{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Pe(e,0,J.min(),J.min(),J.min(),Et.empty(),0)}static newFoundDocument(e,n,r,s){return new Pe(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new Pe(e,2,n,J.min(),J.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new Pe(e,3,n,J.min(),J.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class eo{constructor(e,n){this.position=e,this.inclusive=n}}function Bv(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Ur(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $v(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ja{constructor(e,n="asc"){this.field=e,this.dir=n}}function N2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ax{}class oe extends ax{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new D2(e,n,r):n==="array-contains"?new M2(e,r):n==="in"?new fx(e,r):n==="not-in"?new L2(e,r):n==="array-contains-any"?new j2(e,r):new oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new V2(e,r):new O2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ur(n,this.value)):n!==null&&Fr(this.value)===Fr(n)&&this.matchesComparison(Ur(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class de extends ax{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new de(e,n)}matches(e){return to(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function to(t){return t.op==="and"}function lp(t){return t.op==="or"}function $m(t){return lx(t)&&to(t)}function lx(t){for(const e of t.filters)if(e instanceof de)return!1;return!0}function up(t){if(t instanceof oe)return t.field.canonicalString()+t.op.toString()+Zi(t.value);if($m(t))return t.filters.map(e=>up(e)).join(",");{const e=t.filters.map(n=>up(n)).join(",");return`${t.op}(${e})`}}function ux(t,e){return t instanceof oe?function(r,s){return s instanceof oe&&r.op===s.op&&r.field.isEqual(s.field)&&Rn(r.value,s.value)}(t,e):t instanceof de?function(r,s){return s instanceof de&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&ux(o,s.filters[a]),!0):!1}(t,e):void Q(19439)}function cx(t,e){const n=t.filters.concat(e);return de.create(n,t.op)}function hx(t){return t instanceof oe?function(n){return`${n.field.canonicalString()} ${n.op} ${Zi(n.value)}`}(t):t instanceof de?function(n){return n.op.toString()+" {"+n.getFilters().map(hx).join(" ,")+"}"}(t):"Filter"}class D2 extends oe{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class V2 extends oe{constructor(e,n){super(e,"in",n),this.keys=dx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class O2 extends oe{constructor(e,n){super(e,"not-in",n),this.keys=dx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dx(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class M2 extends oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xa(n)&&Qa(n.arrayValue,this.value)}}class fx extends oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qa(this.value.arrayValue,n)}}class L2 extends oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Qa(this.value.arrayValue,n)}}class j2 extends oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qa(this.value.arrayValue,r))}}/**
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
 */class F2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function cp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new F2(t,e,n,r,s,i,o)}function Ls(t){const e=te(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>up(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),dh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zi(r)).join(",")),e.Te=n}return e.Te}function yl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!N2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ux(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$v(t.startAt,e.startAt)&&$v(t.endAt,e.endAt)}function Tc(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function xc(t,e){return t.filters.filter(n=>n instanceof oe&&n.field.isEqual(e))}function qv(t,e,n){let r=Nu,s=!0;for(const i of xc(t,e)){let o=Nu,a=!0;switch(i.op){case"<":case"<=":o=C2(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Nu}Uv({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];Uv({value:r,inclusive:s},{value:o,inclusive:n.inclusive})<0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}function Kv(t,e,n){let r=Tr,s=!0;for(const i of xc(t,e)){let o=Tr,a=!0;switch(i.op){case">=":case">":o=b2(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Tr}zv({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];zv({value:r,inclusive:s},{value:o,inclusive:n.inclusive})>0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class ho{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function U2(t,e,n,r,s,i,o,a){return new ho(t,e,n,r,s,i,o,a)}function _l(t){return new ho(t)}function Wv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function px(t){return t.collectionGroup!==null}function va(t){const e=te(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new pe(xe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ja(i,r))}),n.has(xe.keyField().canonicalString())||e.Ie.push(new Ja(xe.keyField(),r))}return e.Ie}function Ht(t){const e=te(t);return e.Ee||(e.Ee=z2(e,va(t))),e.Ee}function z2(t,e){if(t.limitType==="F")return cp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ja(s.field,i)});const n=t.endAt?new eo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new eo(t.startAt.position,t.startAt.inclusive):null;return cp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function hp(t,e){const n=t.filters.concat([e]);return new ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Sc(t,e,n){return new ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _h(t,e){return yl(Ht(t),Ht(e))&&t.limitType===e.limitType}function mx(t){return`${Ls(Ht(t))}|lt:${t.limitType}`}function di(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>hx(s)).join(", ")}]`),dh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Zi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Zi(s)).join(",")),`Target(${r})`}(Ht(t))}; limitType=${t.limitType})`}function vl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of va(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,u){const c=Bv(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,va(r),s)||r.endAt&&!function(o,a,u){const c=Bv(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,va(r),s))}(t,e)}function B2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gx(t){return(e,n)=>{let r=!1;for(const s of va(t)){const i=$2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function $2(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,o,a){const u=o.data.field(i),c=a.data.field(i);return u!==null&&c!==null?Ur(u,c):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
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
 */class Jn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Js(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return XT(this.inner)}size(){return this.innerSize}}/**
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
 */const q2=new Ie(q.comparator);function Dt(){return q2}const yx=new Ie(q.comparator);function Jo(...t){let e=yx;for(const n of t)e=e.insert(n.key,n);return e}function _x(t){let e=yx;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function wn(){return wa()}function vx(){return wa()}function wa(){return new Jn(t=>t.toString(),(t,e)=>t.isEqual(e))}const K2=new Ie(q.comparator),W2=new pe(q.comparator);function re(...t){let e=W2;for(const n of t)e=e.add(n);return e}const H2=new pe(ee);function G2(){return H2}/**
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
 */function qm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qa(e)?"-0":e}}function wx(t){return{integerValue:""+t}}function Q2(t,e){return t2(e)?wx(e):qm(t,e)}/**
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
 */class vh{constructor(){this._=void 0}}function Y2(t,e,n){return t instanceof Za?function(s,i){const o={fields:{[ex]:{stringValue:ZT},[nx]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Um(i)&&(i=gh(i)),i&&(o.fields[tx]=i),{mapValue:o}}(n,e):t instanceof no?Ix(t,e):t instanceof ro?Tx(t,e):function(s,i){const o=Ex(s,i),a=Hv(o)+Hv(s.Ae);return ap(o)&&ap(s.Ae)?wx(a):qm(s.serializer,a)}(t,e)}function X2(t,e,n){return t instanceof no?Ix(t,e):t instanceof ro?Tx(t,e):n}function Ex(t,e){return t instanceof el?function(r){return ap(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Za extends vh{}class no extends vh{constructor(e){super(),this.elements=e}}function Ix(t,e){const n=xx(e);for(const r of t.elements)n.some(s=>Rn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ro extends vh{constructor(e){super(),this.elements=e}}function Tx(t,e){let n=xx(e);for(const r of t.elements)n=n.filter(s=>!Rn(s,r));return{arrayValue:{values:n}}}class el extends vh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Hv(t){return we(t.integerValue||t.doubleValue)}function xx(t){return Xa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class J2{constructor(e,n){this.field=e,this.transform=n}}function Z2(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof no&&s instanceof no||r instanceof ro&&s instanceof ro?Hi(r.elements,s.elements,Rn):r instanceof el&&s instanceof el?Rn(r.Ae,s.Ae):r instanceof Za&&s instanceof Za}(t.transform,e.transform)}class eD{constructor(e,n){this.version=e,this.transformResults=n}}class Tt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tt}static exists(e){return new Tt(void 0,e)}static updateTime(e){return new Tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ou(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wh{}function Sx(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Eh(t.key,Tt.none()):new fo(t.key,t.data,Tt.none());{const n=t.data,r=Et.empty();let s=new pe(xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Qr(t.key,r,new qt(s.toArray()),Tt.none())}}function tD(t,e,n){t instanceof fo?function(s,i,o){const a=s.value.clone(),u=Qv(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Qr?function(s,i,o){if(!Ou(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Qv(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Ax(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ea(t,e,n,r){return t instanceof fo?function(i,o,a,u){if(!Ou(i.precondition,o))return a;const c=i.value.clone(),d=Yv(i.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qr?function(i,o,a,u){if(!Ou(i.precondition,o))return a;const c=Yv(i.fieldTransforms,u,o),d=o.data;return d.setAll(Ax(i)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,a){return Ou(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function nD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ex(r.transform,s||null);i!=null&&(n===null&&(n=Et.empty()),n.set(r.field,i))}return n||null}function Gv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hi(r,s,(i,o)=>Z2(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fo extends wh{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qr extends wh{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ax(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Qv(t,e,n){const r=new Map;X(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,X2(o,a,n[s]))}return r}function Yv(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Y2(i,o,e))}return r}class Eh extends wh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kx extends wh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Km{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&tD(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ea(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ea(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=vx();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=Sx(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Hi(this.mutations,e.mutations,(n,r)=>Gv(n,r))&&Hi(this.baseMutations,e.baseMutations,(n,r)=>Gv(n,r))}}class Wm{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){X(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return K2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Wm(e,n,r,s)}}/**
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
 */class Hm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class rD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Me,ae;function sD(t){switch(t){case M.OK:return Q(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function Rx(t){if(t===void 0)return pt("GRPC error has no .code"),M.UNKNOWN;switch(t){case Me.OK:return M.OK;case Me.CANCELLED:return M.CANCELLED;case Me.UNKNOWN:return M.UNKNOWN;case Me.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Me.INTERNAL:return M.INTERNAL;case Me.UNAVAILABLE:return M.UNAVAILABLE;case Me.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Me.NOT_FOUND:return M.NOT_FOUND;case Me.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Me.ABORTED:return M.ABORTED;case Me.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Me.DATA_LOSS:return M.DATA_LOSS;default:return Q(39323,{code:t})}}(ae=Me||(Me={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function iD(){return new TextEncoder}/**
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
 */const oD=new Dr([4294967295,4294967295],0);function Xv(t){const e=iD().encode(t),n=new AT;return n.update(e),new Uint8Array(n.digest())}function Jv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dr([n,r],0),new Dr([s,i],0)]}class Gm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Zo(`Invalid padding: ${n}`);if(r<0)throw new Zo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Zo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Dr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Dr.fromNumber(r)));return s.compare(oD)===1&&(s=new Dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Xv(e),[r,s]=Jv(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Gm(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=Xv(e),[r,s]=Jv(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Zo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ih{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,wl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ih(J.min(),s,new Ie(ee),Dt(),re())}}class wl{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new wl(r,n,re(),re(),re())}}/**
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
 */class Mu{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Px{constructor(e,n){this.targetId=e,this.Ce=n}}class Cx{constructor(e,n,r=Fe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Zv{constructor(){this.ve=0,this.Fe=e0(),this.Me=Fe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q(38017,{changeType:i})}}),new wl(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=e0()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class aD{constructor(e){this.Ge=e,this.ze=new Map,this.je=Dt(),this.Je=iu(),this.He=iu(),this.Ye=new Ie(ee)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Tc(i))if(r===0){const o=new q(i.path);this.et(n,o,Pe.newNoDocument(o,J.min()))}else X(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),u=a?this.ct(a,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Qn(r).toUint8Array()}catch(u){if(u instanceof JT)return Os("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Gm(o,s,i)}catch(u){return Os(u instanceof Zo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&Tc(a.target)){const u=new q(a.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Pe.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=re();this.He.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Ih(e,n,this.Ye,this.je,r);return this.je=Dt(),this.Je=iu(),this.He=iu(),this.Ye=new Ie(ee),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Zv,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new pe(ee),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new pe(ee),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Zv),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function iu(){return new Ie(q.comparator)}function e0(){return new Ie(q.comparator)}const lD={asc:"ASCENDING",desc:"DESCENDING"},uD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cD={and:"AND",or:"OR"};class hD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function dp(t,e){return t.useProto3Json||dh(e)?e:{value:e}}function so(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dD(t,e){return so(t,e.toTimestamp())}function gt(t){return X(!!t,49232),J.fromTimestamp(function(n){const r=Gn(n);return new he(r.seconds,r.nanos)}(t))}function Qm(t,e){return fp(t,e).canonicalString()}function fp(t,e){const n=function(s){return new ue(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Nx(t){const e=ue.fromString(t);return X(zx(e),10190,{key:e.toString()}),e}function Ac(t,e){return Qm(t.databaseId,e.path)}function Is(t,e){const n=Nx(e);if(n.get(1)!==t.databaseId.projectId)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Ox(n))}function Dx(t,e){return Qm(t.databaseId,e)}function Vx(t){const e=Nx(t);return e.length===4?ue.emptyPath():Ox(e)}function pp(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ox(t){return X(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function t0(t,e,n){return{name:Ac(t,e),fields:n.value.mapValue.fields}}function fD(t,e,n){const r=Is(t,e.name),s=gt(e.updateTime),i=e.createTime?gt(e.createTime):J.min(),o=new Et({mapValue:{fields:e.fields}}),a=Pe.newFoundDocument(r,s,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function pD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,d){return c.useProto3Json?(X(d===void 0||typeof d=="string",58123),Fe.fromBase64String(d||"")):(X(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Fe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?M.UNKNOWN:Rx(c.code);return new z(d,c.message||"")}(o);n=new Cx(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Is(t,r.document.name),i=gt(r.document.updateTime),o=r.document.createTime?gt(r.document.createTime):J.min(),a=new Et({mapValue:{fields:r.document.fields}}),u=Pe.newFoundDocument(s,i,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Mu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Is(t,r.document),i=r.readTime?gt(r.readTime):J.min(),o=Pe.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Mu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Is(t,r.document),i=r.removedTargetIds||[];n=new Mu([],i,s,null)}else{if(!("filter"in e))return Q(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new rD(s,i),a=r.targetId;n=new Px(a,o)}}return n}function kc(t,e){let n;if(e instanceof fo)n={update:t0(t,e.key,e.value)};else if(e instanceof Eh)n={delete:Ac(t,e.key)};else if(e instanceof Qr)n={update:t0(t,e.key,e.data),updateMask:wD(e.fieldMask)};else{if(!(e instanceof kx))return Q(16599,{Vt:e.type});n={verify:Ac(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Za)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof no)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ro)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof el)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:dD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q(27497)}(t,e.precondition)),n}function mp(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Tt.updateTime(gt(i.updateTime)):i.exists!==void 0?Tt.exists(i.exists):Tt.none()}(e.currentDocument):Tt.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,a){let u=null;if("setToServerValue"in a)X(a.setToServerValue==="REQUEST_TIME",16630,{proto:a}),u=new Za;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];u=new no(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];u=new ro(d)}else"increment"in a?u=new el(o,a.increment):Q(16584,{proto:a});const c=xe.fromServerFormat(a.fieldPath);return new J2(c,u)}(t,s)):[];if(e.update){e.update.name;const s=Is(t,e.update.name),i=new Et({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new qt(c.map(d=>xe.fromServerFormat(d)))}(e.updateMask);return new Qr(s,i,o,n,r)}return new fo(s,i,n,r)}if(e.delete){const s=Is(t,e.delete);return new Eh(s,n)}if(e.verify){const s=Is(t,e.verify);return new kx(s,n)}return Q(1463,{proto:e})}function mD(t,e){return t&&t.length>0?(X(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?gt(s.updateTime):gt(i);return o.isEqual(J.min())&&(o=gt(i)),new eD(o,s.transformResults||[])}(n,e))):[]}function Mx(t,e){return{documents:[Dx(t,e.path)]}}function Lx(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Dx(t,s);const i=function(c){if(c.length!==0)return Ux(de.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:fi(g.field),direction:yD(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=dp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function jx(t){let e=Vx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){X(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(m){const g=Fx(m);return g instanceof de&&$m(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(x){return new Ja(pi(x.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(m){let g;return g=typeof m=="object"?m.value:m,dh(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,I=m.values||[];return new eo(I,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,I=m.values||[];return new eo(I,g)}(n.endAt)),U2(e,s,o,i,a,"F",u,c)}function gD(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fx(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=pi(n.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=pi(n.unaryFilter.field);return oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=pi(n.unaryFilter.field);return oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=pi(n.unaryFilter.field);return oe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return oe.create(pi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return de.create(n.compositeFilter.filters.map(r=>Fx(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function yD(t){return lD[t]}function _D(t){return uD[t]}function vD(t){return cD[t]}function fi(t){return{fieldPath:t.canonicalString()}}function pi(t){return xe.fromServerFormat(t.fieldPath)}function Ux(t){return t instanceof oe?function(n){if(n.op==="=="){if(Fv(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NAN"}};if(jv(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Fv(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NOT_NAN"}};if(jv(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fi(n.field),op:_D(n.op),value:n.value}}}(t):t instanceof de?function(n){const r=n.getFilters().map(s=>Ux(s));return r.length===1?r[0]:{compositeFilter:{op:vD(n.op),filters:r}}}(t):Q(54877,{filter:t})}function wD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class jn{constructor(e,n,r,s,i=J.min(),o=J.min(),a=Fe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Bx{constructor(e){this.yt=e}}function ED(t,e){let n;if(e.document)n=fD(t.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=q.fromSegments(e.noDocument.path),s=Fs(e.noDocument.readTime);n=Pe.newNoDocument(r,s),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Q(56709);{const r=q.fromSegments(e.unknownDocument.path),s=Fs(e.unknownDocument.version);n=Pe.newUnknownDocument(r,s)}}return e.readTime&&n.setReadTime(function(s){const i=new he(s[0],s[1]);return J.fromTimestamp(i)}(e.readTime)),n}function n0(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Rc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:Ac(i,o.key),fields:o.data.value.mapValue.fields,updateTime:so(i,o.version.toTimestamp()),createTime:so(i,o.createTime.toTimestamp())}}(t.yt,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:js(e.version)};else{if(!e.isUnknownDocument())return Q(57904,{document:e});r.unknownDocument={path:n.path.toArray(),version:js(e.version)}}return r}function Rc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function js(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Fs(t){const e=new he(t.seconds,t.nanoseconds);return J.fromTimestamp(e)}function cs(t,e){const n=(e.baseMutations||[]).map(i=>mp(t.yt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>mp(t.yt,i)),s=he.fromMillis(e.localWriteTimeMs);return new Km(e.batchId,s,n,r)}function ea(t){const e=Fs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Fs(t.lastLimboFreeSnapshotVersion):J.min();let r;return r=function(i){return i.documents!==void 0}(t.query)?function(i){const o=i.documents.length;return X(o===1,1966,{count:o}),Ht(_l(Vx(i.documents[0])))}(t.query):function(i){return Ht(jx(i))}(t.query),new jn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Fe.fromBase64String(t.resumeToken))}function $x(t,e){const n=js(e.snapshotVersion),r=js(e.lastLimboFreeSnapshotVersion);let s;s=Tc(e.target)?Mx(t.yt,e.target):Lx(t.yt,e.target).ft;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ls(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function qx(t){const e=jx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sc(e,e.limit,"L"):e}function jd(t,e){return new Hm(e.largestBatchId,mp(t.yt,e.overlayMutation))}function r0(t,e){const n=e.path.lastSegment();return[t,lt(e.path.popLast()),n]}function s0(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:js(r.readTime),documentKey:lt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class ID{getBundleMetadata(e,n){return i0(e).get(n).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:Fs(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,n){return i0(e).put(function(s){return{bundleId:s.id,createTime:js(gt(s.createTime)),version:s.version}}(n))}getNamedQuery(e,n){return o0(e).get(n).next(r=>{if(r)return function(i){return{name:i.name,query:qx(i.bundledQuery),readTime:Fs(i.readTime)}}(r)})}saveNamedQuery(e,n){return o0(e).put(function(s){return{name:s.name,readTime:js(gt(s.readTime)),bundledQuery:s.bundledQuery}}(n))}}function i0(t){return Ke(t,fh)}function o0(t){return Ke(t,ph)}/**
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
 */class Th{constructor(e,n){this.serializer=e,this.userId=n}static wt(e,n){const r=n.uid||"";return new Th(e,r)}getOverlay(e,n){return Uo(e).get(r0(this.userId,n)).next(r=>r?jd(this.serializer,r):null)}getOverlays(e,n){const r=wn();return b.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){const s=[];return r.forEach((i,o)=>{const a=new Hm(n,o);s.push(this.St(e,a))}),b.waitFor(s)}removeOverlaysForBatchId(e,n,r){const s=new Set;n.forEach(o=>s.add(lt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Uo(e).Z(sp,a))}),b.waitFor(i)}getOverlaysForCollection(e,n,r){const s=wn(),i=lt(n),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Uo(e).J(sp,o).next(a=>{for(const u of a){const c=jd(this.serializer,u);s.set(c.getKey(),c)}return s})}getOverlaysForCollectionGroup(e,n,r,s){const i=wn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Uo(e).ee({index:WT,range:a},(u,c,d)=>{const m=jd(this.serializer,c);i.size()<s||m.largestBatchId===o?(i.set(m.getKey(),m),o=m.largestBatchId):d.done()}).next(()=>i)}St(e,n){return Uo(e).put(function(s,i,o){const[a,u,c]=r0(i,o.mutation.key);return{userId:i,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:kc(s.yt,o.mutation)}}(this.serializer,this.userId,n))}}function Uo(t){return Ke(t,mh)}/**
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
 */class TD{bt(e){return Ke(e,jm)}getSessionToken(e){return this.bt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?Fe.fromUint8Array(r):Fe.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.bt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
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
 */class hs{constructor(){}Dt(e,n){this.Ct(e,n),n.vt()}Ct(e,n){if("nullValue"in e)this.Ft(n,5);else if("booleanValue"in e)this.Ft(n,10),n.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(n,15),n.Mt(we(e.integerValue));else if("doubleValue"in e){const r=we(e.doubleValue);isNaN(r)?this.Ft(n,13):(this.Ft(n,15),qa(r)?n.Mt(0):n.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(n,20),typeof r=="string"&&(r=Gn(r)),n.xt(`${r.seconds||""}`),n.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,n),this.Nt(n);else if("bytesValue"in e)this.Ft(n,30),n.Bt(Qn(e.bytesValue)),this.Nt(n);else if("referenceValue"in e)this.Lt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(n,45),n.Mt(r.latitude||0),n.Mt(r.longitude||0)}else"mapValue"in e?sx(e)?this.Ft(n,Number.MAX_SAFE_INTEGER):yh(e)?this.kt(e.mapValue,n):(this.qt(e.mapValue,n),this.Nt(n)):"arrayValue"in e?(this.Qt(e.arrayValue,n),this.Nt(n)):Q(19022,{$t:e})}Ot(e,n){this.Ft(n,25),this.Ut(e,n)}Ut(e,n){n.xt(e)}qt(e,n){const r=e.fields||{};this.Ft(n,55);for(const s of Object.keys(r))this.Ot(s,n),this.Ct(r[s],n)}kt(e,n){var o,a;const r=e.fields||{};this.Ft(n,53);const s=Ji,i=((a=(o=r[s].arrayValue)==null?void 0:o.values)==null?void 0:a.length)||0;this.Ft(n,15),n.Mt(we(i)),this.Ot(s,n),this.Ct(r[s],n)}Qt(e,n){const r=e.values||[];this.Ft(n,50);for(const s of r)this.Ct(s,n)}Lt(e,n){this.Ft(n,37),q.fromName(e).path.forEach(r=>{this.Ft(n,60),this.Ut(r,n)})}Ft(e,n){e.Mt(n)}Nt(e){e.Mt(2)}}hs.Kt=new hs;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=255;function xD(t){if(t===0)return 8;let e=0;return t>>4||(e+=4,t<<=4),t>>6||(e+=2,t<<=2),t>>7||(e+=1),e}function a0(t){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=xD(255&r[i]);if(s+=o,o!==8)break}return s}(t);return Math.ceil(e/8)}class SD{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Gt(r.value),r=n.next();this.zt()}jt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Jt(r.value),r=n.next();this.Ht()}Yt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const s=n.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Zt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const s=n.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Xt(e){const n=this.en(e),r=a0(n);this.tn(1+r),this.buffer[this.position++]=255&r;for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=255&n[s]}nn(e){const n=this.en(e),r=a0(n);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=~(255&n[s])}rn(){this.sn(ai),this.sn(255)}_n(){this.an(ai),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const n=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=!!(128&n[0]);n[0]^=r?255:128;for(let s=1;s<n.length;++s)n[s]^=r?255:0;return n}Gt(e){const n=255&e;n===0?(this.sn(0),this.sn(255)):n===ai?(this.sn(ai),this.sn(0)):this.sn(n)}Jt(e){const n=255&e;n===0?(this.an(0),this.an(255)):n===ai?(this.an(ai),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class AD{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class kD{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class zo{constructor(){this.cn=new SD,this.ln=new AD(this.cn),this.hn=new kD(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class ds{constructor(e,n,r,s){this.Tn=e,this.In=n,this.En=r,this.dn=s}An(){const e=this.dn.length,n=e===0||this.dn[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.dn,0),n!==e?r.set([0],this.dn.length):++r[r.length-1],new ds(this.Tn,this.In,this.En,r)}Rn(e,n,r){return{indexId:this.Tn,uid:e,arrayValue:Lu(this.En),directionalValue:Lu(this.dn),orderedDocumentKey:Lu(n),documentKey:r.path.toArray()}}Vn(e,n,r){const s=this.Rn(e,n,r);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function ur(t,e){let n=t.Tn-e.Tn;return n!==0?n:(n=l0(t.En,e.En),n!==0?n:(n=l0(t.dn,e.dn),n!==0?n:q.comparator(t.In,e.In)))}function l0(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}function Lu(t){return FI()?function(n){let r="";for(let s=0;s<n.length;s++)r+=String.fromCharCode(n[s]);return r}(t):t}function u0(t){return typeof t!="string"?t:function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(t)}class c0{constructor(e){this.mn=new pe((n,r)=>xe.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const n of e.filters){const r=n;r.isInequality()?this.mn=this.mn.add(r):this.gn.push(r)}}get pn(){return this.mn.size>1}yn(e){if(X(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const n=tp(e);if(n!==void 0&&!this.wn(n))return!1;const r=as(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.wn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.mn.size>0){const a=this.mn.getIterator().getNext();if(!s.has(a.field.canonicalString())){const u=r[i];if(!this.Sn(a,u)||!this.bn(this.fn[o++],u))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.fn.length||!this.bn(this.fn[o++],a))return!1}return!0}Dn(){if(this.pn)return null;let e=new pe(xe.comparator);const n=[];for(const r of this.gn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Pu(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Pu(r.field,0))}for(const r of this.fn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Pu(r.field,r.dir==="asc"?0:1)));return new _c(_c.UNKNOWN_ID,this.collectionId,n,$a.empty())}wn(e){for(const n of this.gn)if(this.Sn(n,e))return!0;return!1}Sn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}bn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function Kx(t){var n,r;if(X(t instanceof oe||t instanceof de,20012),t instanceof oe){if(t instanceof fx){const s=((r=(n=t.value.arrayValue)==null?void 0:n.values)==null?void 0:r.map(i=>oe.create(t.field,"==",i)))||[];return de.create(s,"or")}return t}const e=t.filters.map(s=>Kx(s));return de.create(e,t.op)}function RD(t){if(t.getFilters().length===0)return[];const e=_p(Kx(t));return X(Wx(e),7391),gp(e)||yp(e)?[e]:e.getFilters()}function gp(t){return t instanceof oe}function yp(t){return t instanceof de&&$m(t)}function Wx(t){return gp(t)||yp(t)||function(n){if(n instanceof de&&lp(n)){for(const r of n.getFilters())if(!gp(r)&&!yp(r))return!1;return!0}return!1}(t)}function _p(t){if(X(t instanceof oe||t instanceof de,34018),t instanceof oe)return t;if(t.filters.length===1)return _p(t.filters[0]);const e=t.filters.map(r=>_p(r));let n=de.create(e,t.op);return n=Pc(n),Wx(n)?n:(X(n instanceof de,64498),X(to(n),40251),X(n.filters.length>1,57927),n.filters.reduce((r,s)=>Ym(r,s)))}function Ym(t,e){let n;return X(t instanceof oe||t instanceof de,38388),X(e instanceof oe||e instanceof de,25473),n=t instanceof oe?e instanceof oe?function(s,i){return de.create([s,i],"and")}(t,e):h0(t,e):e instanceof oe?h0(e,t):function(s,i){if(X(s.filters.length>0&&i.filters.length>0,48005),to(s)&&to(i))return cx(s,i.getFilters());const o=lp(s)?s:i,a=lp(s)?i:s,u=o.filters.map(c=>Ym(c,a));return de.create(u,"or")}(t,e),Pc(n)}function h0(t,e){if(to(e))return cx(e,t.getFilters());{const n=e.filters.map(r=>Ym(t,r));return de.create(n,"or")}}function Pc(t){if(X(t instanceof oe||t instanceof de,11850),t instanceof oe)return t;const e=t.getFilters();if(e.length===1)return Pc(e[0]);if(lx(t))return t;const n=e.map(s=>Pc(s)),r=[];return n.forEach(s=>{s instanceof oe?r.push(s):s instanceof de&&(s.op===t.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:de.create(r,t.op)}/**
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
 */class PD{constructor(){this.Cn=new Xm}addToCollectionParentIndex(e,n){return this.Cn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Mt.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Mt.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Xm{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new pe(ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new pe(ue.comparator)).toArray()}}/**
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
 */const d0="IndexedDbIndexManager",ou=new Uint8Array(0);class CD{constructor(e,n){this.databaseId=n,this.vn=new Xm,this.Fn=new Jn(r=>Ls(r),(r,s)=>yl(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.vn.has(n)){const r=n.lastSegment(),s=n.popLast();e.addOnCommittedListener(()=>{this.vn.add(n)});const i={collectionId:r,parent:lt(s)};return f0(e).put(i)}return b.resolve()}getCollectionParents(e,n){const r=[],s=IDBKeyRange.bound([n,""],[VT(n),""],!1,!0);return f0(e).J(s).next(i=>{for(const o of i){if(o.collectionId!==n)break;r.push(vn(o.parent))}return r})}addFieldIndex(e,n){const r=Bo(e),s=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(n);delete s.indexId;const i=r.add(s);if(n.indexState){const o=ui(e);return i.next(a=>{o.put(s0(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return i.next()}deleteFieldIndex(e,n){const r=Bo(e),s=ui(e),i=li(e);return r.delete(n.indexId).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Bo(e),r=li(e),s=ui(e);return n.Z().next(()=>r.Z()).next(()=>s.Z())}createTargetIndexes(e,n){return b.forEach(this.Mn(n),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new c0(r).Dn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,n){const r=li(e);let s=!0;const i=new Map;return b.forEach(this.Mn(n),o=>this.xn(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=re();const a=[];return b.forEach(i,(u,c)=>{F(d0,`Using index ${function(E){return`id=${E.indexId}|cg=${E.collectionGroup}|f=${E.fields.map(V=>`${V.fieldPath}:${V.kind}`).join(",")}`}(u)} to execute ${Ls(n)}`);const d=function(E,V){const L=tp(V);if(L===void 0)return null;for(const j of xc(E,L.fieldPath))switch(j.op){case"array-contains-any":return j.value.arrayValue.values||[];case"array-contains":return[j.value]}return null}(c,u),m=function(E,V){const L=new Map;for(const j of as(V))for(const T of xc(E,j.fieldPath))switch(T.op){case"==":case"in":L.set(j.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return L.set(j.fieldPath.canonicalString(),T.value),Array.from(L.values())}return null}(c,u),g=function(E,V){const L=[];let j=!0;for(const T of as(V)){const v=T.kind===0?qv(E,T.fieldPath,E.startAt):Kv(E,T.fieldPath,E.startAt);L.push(v.value),j&&(j=v.inclusive)}return new eo(L,j)}(c,u),I=function(E,V){const L=[];let j=!0;for(const T of as(V)){const v=T.kind===0?Kv(E,T.fieldPath,E.endAt):qv(E,T.fieldPath,E.endAt);L.push(v.value),j&&(j=v.inclusive)}return new eo(L,j)}(c,u),x=this.On(u,c,g),P=this.On(u,c,I),C=this.Nn(u,c,m),w=this.Bn(u.indexId,d,x,g.inclusive,P,I.inclusive,C);return b.forEach(w,_=>r.Y(_,n.limit).next(E=>{E.forEach(V=>{const L=q.fromSegments(V.documentKey);o.has(L)||(o=o.add(L),a.push(L))})}))}).next(()=>a)}return b.resolve(null)})}Mn(e){let n=this.Fn.get(e);return n||(e.filters.length===0?n=[e]:n=RD(de.create(e.filters,"and")).map(r=>cp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Fn.set(e,n),n)}Bn(e,n,r,s,i,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,i.length),c=u/(n!=null?n.length:1),d=[];for(let m=0;m<u;++m){const g=n?this.Ln(n[m/c]):ou,I=this.kn(e,g,r[m%c],s),x=this.qn(e,g,i[m%c],o),P=a.map(C=>this.kn(e,g,C,!0));d.push(...this.createRange(I,x,P))}return d}kn(e,n,r,s){const i=new ds(e,q.empty(),n,r);return s?i:i.An()}qn(e,n,r,s){const i=new ds(e,q.empty(),n,r);return s?i.An():i}xn(e,n){const r=new c0(n),s=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.yn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const s=this.Mn(n);return b.forEach(s,i=>this.xn(e,i).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new pe(xe.comparator),d=!1;for(const m of u.filters)for(const g of m.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?d=!0:c=c.add(g.field));for(const m of u.orderBy)m.field.isKeyField()||(c=c.add(m.field));return c.size+(d?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&s.length>1&&r===2?1:r)}Qn(e,n){const r=new zo;for(const s of as(e)){const i=n.data.field(s.fieldPath);if(i==null)return null;const o=r.Pn(s.kind);hs.Kt.Dt(i,o)}return r.un()}Ln(e){const n=new zo;return hs.Kt.Dt(e,n.Pn(0)),n.un()}$n(e,n){const r=new zo;return hs.Kt.Dt(Ya(this.databaseId,n),r.Pn(function(i){const o=as(i);return o.length===0?0:o[o.length-1].kind}(e))),r.un()}Nn(e,n,r){if(r===null)return[];let s=[];s.push(new zo);let i=0;for(const o of as(e)){const a=r[i++];for(const u of s)if(this.Un(n,o.fieldPath)&&Xa(a))s=this.Kn(s,o,a);else{const c=u.Pn(o.kind);hs.Kt.Dt(a,c)}}return this.Wn(s)}On(e,n,r){return this.Nn(e,n,r.position)}Wn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].un();return n}Kn(e,n,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const u=new zo;u.seed(a.un()),hs.Kt.Dt(o,u.Pn(n.kind)),i.push(u)}return i}Un(e,n){return!!e.filters.find(r=>r instanceof oe&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Bo(e),s=ui(e);return(n?r.J(rp,IDBKeyRange.bound(n,n)):r.J()).next(i=>{const o=[];return b.forEach(i,a=>s.get([a.indexId,this.uid]).next(u=>{o.push(function(d,m){const g=m?new $a(m.sequenceNumber,new Mt(Fs(m.readTime),new q(vn(m.documentKey)),m.largestBatchId)):$a.empty(),I=d.fields.map(([x,P])=>new Pu(xe.fromServerFormat(x),P));return new _c(d.indexId,d.collectionGroup,I,g)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:ee(r.collectionGroup,s.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const s=Bo(e),i=ui(e);return this.Gn(e).next(o=>s.J(rp,IDBKeyRange.bound(n,n)).next(a=>b.forEach(a,u=>i.put(s0(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return b.forEach(n,(s,i)=>{const o=r.get(s.collectionGroup);return(o?b.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),b.forEach(a,u=>this.zn(e,s,u).next(c=>{const d=this.jn(i,u);return c.isEqual(d)?b.resolve():this.Jn(e,i,u,c,d)}))))})}Hn(e,n,r,s){return li(e).put(s.Rn(this.uid,this.$n(r,n.key),n.key))}Yn(e,n,r,s){return li(e).delete(s.Vn(this.uid,this.$n(r,n.key),n.key))}zn(e,n,r){const s=li(e);let i=new pe(ur);return s.ee({index:KT,range:IDBKeyRange.only([r.indexId,this.uid,Lu(this.$n(r,n))])},(o,a)=>{i=i.add(new ds(r.indexId,n,u0(a.arrayValue),u0(a.directionalValue)))}).next(()=>i)}jn(e,n){let r=new pe(ur);const s=this.Qn(n,e);if(s==null)return r;const i=tp(n);if(i!=null){const o=e.data.field(i.fieldPath);if(Xa(o))for(const a of o.arrayValue.values||[])r=r.add(new ds(n.indexId,e.key,this.Ln(a),s))}else r=r.add(new ds(n.indexId,e.key,ou,s));return r}Jn(e,n,r,s,i){F(d0,"Updating index entries for document '%s'",n.key);const o=[];return function(u,c,d,m,g){const I=u.getIterator(),x=c.getIterator();let P=oi(I),C=oi(x);for(;P||C;){let w=!1,_=!1;if(P&&C){const E=d(P,C);E<0?_=!0:E>0&&(w=!0)}else P!=null?_=!0:w=!0;w?(m(C),C=oi(x)):_?(g(P),P=oi(I)):(P=oi(I),C=oi(x))}}(s,i,ur,a=>{o.push(this.Hn(e,n,r,a))},a=>{o.push(this.Yn(e,n,r,a))}),b.waitFor(o)}Gn(e){let n=1;return ui(e).ee({index:qT,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),n=s.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>ur(o,a)).filter((o,a,u)=>!a||ur(o,u[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=ur(o,e),u=ur(o,n);if(a===0)s[0]=e.An();else if(a>0&&u<0)s.push(o),s.push(o.An());else if(u>0)break}s.push(n);const i=[];for(let o=0;o<s.length;o+=2){if(this.Zn(s[o],s[o+1]))return[];const a=s[o].Vn(this.uid,ou,q.empty()),u=s[o+1].Vn(this.uid,ou,q.empty());i.push(IDBKeyRange.bound(a,u))}return i}Zn(e,n){return ur(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(p0)}getMinOffset(e,n){return b.mapArray(this.Mn(n),r=>this.xn(e,r).next(s=>s||Q(44426))).next(p0)}}function f0(t){return Ke(t,Ha)}function li(t){return Ke(t,ya)}function Bo(t){return Ke(t,Lm)}function ui(t){return Ke(t,ga)}function p0(t){X(t.length!==0,28825);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const s=t[r].indexState.offset;Vm(s,e)<0&&(e=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new Mt(e.readTime,e.documentKey,n)}/**
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
 */const m0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hx=41943040;class ot{static withCacheSize(e){return new ot(e,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function Gx(t,e,n){const r=t.store(nn),s=t.store(Gi),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.ee({range:o},(d,m,g)=>(a++,g.delete()));i.push(u.next(()=>{X(a===1,47070,{batchId:n.batchId})}));const c=[];for(const d of n.mutations){const m=zT(e,d.key.path,n.batchId);i.push(s.delete(m)),c.push(d.key)}return b.waitFor(i).next(()=>c)}function Cc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Q(14731);e=t.noDocument}return JSON.stringify(e).length}/**
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
 */ot.DEFAULT_COLLECTION_PERCENTILE=10,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ot.DEFAULT=new ot(Hx,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ot.DISABLED=new ot(-1,0,0);class xh{constructor(e,n,r,s){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=s,this.Xn={}}static wt(e,n,r,s){X(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new xh(i,n,r,s)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return cr(e).ee({index:gs,range:r},(s,i,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,s){const i=mi(e),o=cr(e);return o.add({}).next(a=>{X(typeof a=="number",49019);const u=new Km(a,n,r,s),c=function(I,x,P){const C=P.baseMutations.map(_=>kc(I.yt,_)),w=P.mutations.map(_=>kc(I.yt,_));return{userId:x,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:C,mutations:w}}(this.serializer,this.userId,u),d=[];let m=new pe((g,I)=>ee(g.canonicalString(),I.canonicalString()));for(const g of s){const I=zT(this.userId,g.key.path,a);m=m.add(g.key.path.popLast()),d.push(o.put(c)),d.push(i.put(I,s2))}return m.forEach(g=>{d.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Xn[a]=u.keys()}),b.waitFor(d).next(()=>u)})}lookupMutationBatch(e,n){return cr(e).get(n).next(r=>r?(X(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:n}),cs(this.serializer,r)):null)}er(e,n){return this.Xn[n]?b.resolve(this.Xn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const s=r.keys();return this.Xn[n]=s,s}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return cr(e).ee({index:gs,range:s},(o,a,u)=>{a.userId===this.userId&&(X(a.batchId>=r,47524,{tr:r}),i=cs(this.serializer,a)),u.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=ws;return cr(e).ee({index:gs,range:n,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,ws],[this.userId,Number.POSITIVE_INFINITY]);return cr(e).J(gs,n).next(r=>r.map(s=>cs(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Cu(this.userId,n.path),s=IDBKeyRange.lowerBound(r),i=[];return mi(e).ee({range:s},(o,a,u)=>{const[c,d,m]=o,g=vn(d);if(c===this.userId&&n.path.isEqual(g))return cr(e).get(m).next(I=>{if(!I)throw Q(61480,{nr:o,batchId:m});X(I.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:I.userId,batchId:m}),i.push(cs(this.serializer,I))});u.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pe(ee);const s=[];return n.forEach(i=>{const o=Cu(this.userId,i.path),a=IDBKeyRange.lowerBound(o),u=mi(e).ee({range:a},(c,d,m)=>{const[g,I,x]=c,P=vn(I);g===this.userId&&i.path.isEqual(P)?r=r.add(x):m.done()});s.push(u)}),b.waitFor(s).next(()=>this.rr(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1,i=Cu(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new pe(ee);return mi(e).ee({range:o},(u,c,d)=>{const[m,g,I]=u,x=vn(g);m===this.userId&&r.isPrefixOf(x)?x.length===s&&(a=a.add(I)):d.done()}).next(()=>this.rr(e,a))}rr(e,n){const r=[],s=[];return n.forEach(i=>{s.push(cr(e).get(i).next(o=>{if(o===null)throw Q(35274,{batchId:i});X(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),r.push(cs(this.serializer,o))}))}),b.waitFor(s).next(()=>r)}removeMutationBatch(e,n){return Gx(e.le,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.ir(n.batchId)}),b.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return b.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return mi(e).ee({range:r},(i,o,a)=>{if(i[0]===this.userId){const u=vn(i[1]);s.push(u)}else a.done()}).next(()=>{X(s.length===0,56720,{sr:s.map(i=>i.canonicalString())})})})}containsKey(e,n){return Qx(e,this.userId,n)}_r(e){return Yx(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:ws,lastStreamToken:""})}}function Qx(t,e,n){const r=Cu(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return mi(t).ee({range:i,X:!0},(a,u,c)=>{const[d,m,g]=a;d===e&&m===s&&(o=!0),c.done()}).next(()=>o)}function cr(t){return Ke(t,nn)}function mi(t){return Ke(t,Gi)}function Yx(t){return Ke(t,Ka)}/**
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
 */class Us{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Us(0)}static cr(){return new Us(-1)}}/**
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
 */class bD{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.lr(e).next(n=>{const r=new Us(n.highestTargetId);return n.highestTargetId=r.next(),this.hr(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.lr(e).next(n=>J.fromTimestamp(new he(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.lr(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.lr(e).next(s=>(s.highestListenSequenceNumber=n,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),n>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=n),this.hr(e,s)))}addTargetData(e,n){return this.Pr(e,n).next(()=>this.lr(e).next(r=>(r.targetCount+=1,this.Tr(n,r),this.hr(e,r))))}updateTargetData(e,n){return this.Pr(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ci(e).delete(n.targetId)).next(()=>this.lr(e)).next(r=>(X(r.targetCount>0,8065),r.targetCount-=1,this.hr(e,r)))}removeTargets(e,n,r){let s=0;const i=[];return ci(e).ee((o,a)=>{const u=ea(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(s++,i.push(this.removeTargetData(e,u)))}).next(()=>b.waitFor(i)).next(()=>s)}forEachTarget(e,n){return ci(e).ee((r,s)=>{const i=ea(s);n(i)})}lr(e){return g0(e).get(Ec).next(n=>(X(n!==null,2888),n))}hr(e,n){return g0(e).put(Ec,n)}Pr(e,n){return ci(e).put($x(this.serializer,n))}Tr(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.lr(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ls(n),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return ci(e).ee({range:s,index:$T},(o,a,u)=>{const c=ea(a);yl(n,c.target)&&(i=c,u.done())}).next(()=>i)}addMatchingKeys(e,n,r){const s=[],i=wr(e);return n.forEach(o=>{const a=lt(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),b.waitFor(s)}removeMatchingKeys(e,n,r){const s=wr(e);return b.forEach(n,i=>{const o=lt(i.path);return b.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,n){const r=wr(e),s=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),s=wr(e);let i=re();return s.ee({range:r,X:!0},(o,a,u)=>{const c=vn(o[1]),d=new q(c);i=i.add(d)}).next(()=>i)}containsKey(e,n){const r=lt(n.path),s=IDBKeyRange.bound([r],[VT(r)],!1,!0);let i=0;return wr(e).ee({index:Mm,X:!0,range:s},([o,a],u,c)=>{o!==0&&(i++,c.done())}).next(()=>i>0)}At(e,n){return ci(e).get(n).next(r=>r?ea(r):null)}}function ci(t){return Ke(t,Qi)}function g0(t){return Ke(t,Es)}function wr(t){return Ke(t,Yi)}/**
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
 */const y0="LruGarbageCollector",ND=1048576;function _0([t,e],[n,r]){const s=ee(t,n);return s===0?ee(e,r):s}class DD{constructor(e){this.Ir=e,this.buffer=new pe(_0),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();_0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Xx{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){F(y0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Gr(n)?F(y0,"Ignoring IndexedDB error during garbage collection: ",n):await Xs(n)}await this.Vr(3e5)})}}class VD{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return b.resolve($t.ce);const r=new DD(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(m0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),m0):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,a,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,a=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),hi()<=ie.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function Jx(t,e){return new VD(t,e)}/**
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
 */class OD{constructor(e,n){this.db=e,this.garbageCollector=Jx(this,n)}gr(e){const n=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}pr(e,n){return this.Sr(e,(r,s)=>n(s))}addReference(e,n,r){return au(e,r)}removeReference(e,n,r){return au(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return au(e,n)}br(e,n){return function(s,i){let o=!1;return Yx(s).te(a=>Qx(s,a,i).next(u=>(u&&(o=!0),b.resolve(!u)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Sr(e,(o,a)=>{if(a<=n){const u=this.br(e,o).next(c=>{if(!c)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,J.min()),wr(e).delete(function(m){return[0,lt(m.path)]}(o))))});s.push(u)}}).next(()=>b.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return au(e,n)}Sr(e,n){const r=wr(e);let s,i=$t.ce;return r.ee({index:Mm},([o,a],{path:u,sequenceNumber:c})=>{o===0?(i!==$t.ce&&n(new q(vn(s)),i),i=c,s=u):i=$t.ce}).next(()=>{i!==$t.ce&&n(new q(vn(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function au(t,e){return wr(t).put(function(r,s){return{targetId:0,path:lt(r.path),sequenceNumber:s}}(e,t.currentSequenceNumber))}/**
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
 */class Zx{constructor(){this.changes=new Jn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class MD{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return rs(e).put(r)}removeEntry(e,n,r){return rs(e).delete(function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Rc(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Dr(e,r)))}getEntry(e,n){let r=Pe.newInvalidDocument(n);return rs(e).ee({index:bu,range:IDBKeyRange.only($o(n))},(s,i)=>{r=this.Cr(n,i)}).next(()=>r)}vr(e,n){let r={size:0,document:Pe.newInvalidDocument(n)};return rs(e).ee({index:bu,range:IDBKeyRange.only($o(n))},(s,i)=>{r={document:this.Cr(n,i),size:Cc(i)}}).next(()=>r)}getEntries(e,n){let r=Dt();return this.Fr(e,n,(s,i)=>{const o=this.Cr(s,i);r=r.insert(s,o)}).next(()=>r)}Mr(e,n){let r=Dt(),s=new Ie(q.comparator);return this.Fr(e,n,(i,o)=>{const a=this.Cr(i,o);r=r.insert(i,a),s=s.insert(i,Cc(o))}).next(()=>({documents:r,Or:s}))}Fr(e,n,r){if(n.isEmpty())return b.resolve();let s=new pe(E0);n.forEach(u=>s=s.add(u));const i=IDBKeyRange.bound($o(s.first()),$o(s.last())),o=s.getIterator();let a=o.getNext();return rs(e).ee({index:bu,range:i},(u,c,d)=>{const m=q.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&E0(a,m)<0;)r(a,null),a=o.getNext();a&&a.isEqual(m)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.j($o(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,s,i){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Rc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return rs(e).J(IDBKeyRange.bound(a,u,!0)).next(c=>{i==null||i.incrementDocumentReadCount(c.length);let d=Dt();for(const m of c){const g=this.Cr(q.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);g.isFoundDocument()&&(vl(n,g)||s.has(g.key))&&(d=d.insert(g.key,g))}return d})}getAllFromCollectionGroup(e,n,r,s){let i=Dt();const o=w0(n,r),a=w0(n,Mt.max());return rs(e).ee({index:BT,range:IDBKeyRange.bound(o,a,!0)},(u,c,d)=>{const m=this.Cr(q.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);i=i.insert(m.key,m),i.size===s&&d.done()}).next(()=>i)}newChangeBuffer(e){return new LD(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return v0(e).get(np).next(n=>(X(!!n,20021),n))}Dr(e,n){return v0(e).put(np,n)}Cr(e,n){if(n){const r=ED(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(J.min())))return r}return Pe.newInvalidDocument(e)}}function eS(t){return new MD(t)}class LD extends Zx{constructor(e,n){super(),this.Nr=e,this.trackRemovals=n,this.Br=new Jn(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const n=[];let r=0,s=new pe((i,o)=>ee(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Br.get(i);if(n.push(this.Nr.removeEntry(e,i,a.readTime)),o.isValidDocument()){const u=n0(this.Nr.serializer,o);s=s.add(i.path.popLast());const c=Cc(u);r+=c-a.size,n.push(this.Nr.addEntry(e,i,u))}else if(r-=a.size,this.trackRemovals){const u=n0(this.Nr.serializer,o.convertToNoDocument(J.min()));n.push(this.Nr.addEntry(e,i,u))}}),s.forEach(i=>{n.push(this.Nr.indexManager.addToCollectionParentIndex(e,i))}),n.push(this.Nr.updateMetadata(e,r)),b.waitFor(n)}getFromCache(e,n){return this.Nr.vr(e,n).next(r=>(this.Br.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Nr.Mr(e,n).next(({documents:r,Or:s})=>(s.forEach((i,o)=>{this.Br.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function v0(t){return Ke(t,Wa)}function rs(t){return Ke(t,wc)}function $o(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function w0(t,e){const n=e.documentKey.path.toArray();return[t,Rc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function E0(t,e){const n=t.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=ee(n[i],r[i]),s)return s;return s=ee(n.length,r.length),s||(s=ee(n[n.length-2],r[r.length-2]),s||ee(n[n.length-1],r[r.length-1]))}/**
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
 */class jD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class tS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ea(r.mutation,s,qt.empty(),he.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=wn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Jo();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=wn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Dt();const o=wa(),a=function(){return wa()}();return n.forEach((u,c)=>{const d=r.get(c.key);s.has(c.key)&&(d===void 0||d.mutation instanceof Qr)?i=i.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Ea(d.mutation,c,d.mutation.getFieldMask(),he.now())):o.set(c.key,qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>a.set(c,new jD(d,o.get(c)??null))),a))}recalculateAndSaveOverlays(e,n){const r=wa();let s=new Ie((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||qt.empty();d=a.applyToLocalView(c,d),r.set(u,d);const m=(s.get(a.batchId)||re()).add(u);s=s.insert(a.batchId,m)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,m=vx();d.forEach(g=>{if(!i.has(g)){const I=Sx(n.get(g),r.get(g));I!==null&&m.set(g,I),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):px(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):b.resolve(wn());let a=Ba,u=i;return o.next(c=>b.forEach(c,(d,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),i.get(d)?b.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,re())).next(d=>({batchId:a,changes:_x(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let s=Jo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Jo();return this.indexManager.getCollectionParents(e,i).next(a=>b.forEach(a,u=>{const c=function(m,g){return new ho(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(d=>{d.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Pe.newInvalidDocument(d)))});let a=Jo();return o.forEach((u,c)=>{const d=i.get(u);d!==void 0&&Ea(d.mutation,c,qt.empty(),he.now()),vl(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class FD{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return b.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:gt(s.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:qx(s.bundledQuery),readTime:gt(s.readTime)}}(n)),b.resolve()}}/**
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
 */class UD{constructor(){this.overlays=new Ie(q.comparator),this.qr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=wn();return b.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const s=wn(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return b.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ie((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=i.get(c.largestBatchId);d===null&&(d=wn(),i=i.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=wn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=s)););return b.resolve(a)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Hm(n,r));let i=this.qr.get(n);i===void 0&&(i=re(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class zD{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
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
 */class Jm{constructor(){this.Qr=new pe(He.$r),this.Ur=new pe(He.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new He(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new He(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new q(new ue([])),r=new He(n,e),s=new He(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new q(new ue([])),r=new He(n,e),s=new He(n,e+1);let i=re();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new He(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return q.comparator(e.key,n.key)||ee(e.Yr,n.Yr)}static Kr(e,n){return ee(e.Yr,n.Yr)||q.comparator(e.key,n.key)}}/**
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
 */class BD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new pe(He.$r)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Km(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Zr=this.Zr.add(new He(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?ws:this.tr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),s=new He(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const a=this.Xr(o.Yr);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pe(ee);return n.forEach(s=>{const i=new He(s,0),o=new He(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],a=>{r=r.add(a.Yr)})}),b.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new He(new q(i),0);let a=new pe(ee);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.Yr)),!0)},o),b.resolve(this.ti(a))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){X(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return b.forEach(n.mutations,s=>{const i=new He(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new He(n,0),s=this.Zr.firstAfterOrEqual(r);return b.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class $D{constructor(e){this.ri=e,this.docs=function(){return new Ie(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():Pe.newInvalidDocument(n))}getEntries(e,n){let r=Dt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Pe.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Dt();const o=n.path,a=new q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Vm(LT(d),r)<=0||(s.has(d.key)||vl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q(9500)}ii(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qD(this)}getSize(e){return b.resolve(this.size)}}class qD extends Zx{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class KD{constructor(e){this.persistence=e,this.si=new Jn(n=>Ls(n),yl),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.oi=0,this._i=new Jm,this.targetCount=0,this.ai=Us.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),b.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Us(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Pr(n),b.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),b.waitFor(i).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this._i.containsKey(n))}}/**
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
 */class Zm{constructor(e,n){this.ui={},this.overlays={},this.ci=new $t(0),this.li=!1,this.li=!0,this.hi=new zD,this.referenceDelegate=e(this),this.Pi=new KD(this),this.indexManager=new PD,this.remoteDocumentCache=function(s){return new $D(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Bx(n),this.Ii=new FD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new BD(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const s=new WD(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return b.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class WD extends FT{constructor(e){super(),this.currentSequenceNumber=e}}class Sh{constructor(e){this.persistence=e,this.Ri=new Jm,this.Vi=null}static mi(e){return new Sh(e)}get fi(){if(this.Vi)return this.Vi;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),b.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.fi,r=>{const s=q.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return b.or([()=>b.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class bc{constructor(e,n){this.persistence=e,this.pi=new Jn(r=>lt(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Jx(this,n)}static mi(e,n){return new bc(e,n)}Ei(){}di(e){return b.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return b.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?b.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(a=>{a||(r++,i.removeEntry(o,J.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),b.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),b.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Du(e.data.value)),n}br(e,n,r){return b.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return b.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class HD{constructor(e){this.serializer=e}k(e,n,r,s){const i=new hh("createOrUpgrade",n);r<1&&s>=1&&(function(u){u.createObjectStore(gl)}(e),function(u){u.createObjectStore(Ka,{keyPath:r2}),u.createObjectStore(nn,{keyPath:Nv,autoIncrement:!0}).createIndex(gs,Dv,{unique:!0}),u.createObjectStore(Gi)}(e),I0(e),function(u){u.createObjectStore(ls)}(e));let o=b.resolve();return r<3&&s>=3&&(r!==0&&(function(u){u.deleteObjectStore(Yi),u.deleteObjectStore(Qi),u.deleteObjectStore(Es)}(e),I0(e)),o=o.next(()=>function(u){const c=u.store(Es),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:J.min().toTimestamp(),targetCount:0};return c.put(Ec,d)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store(nn).J().next(m=>{u.deleteObjectStore(nn),u.createObjectStore(nn,{keyPath:Nv,autoIncrement:!0}).createIndex(gs,Dv,{unique:!0});const g=c.store(nn),I=m.map(x=>g.put(x));return b.waitFor(I)})}(e,i))),o=o.next(()=>{(function(u){u.createObjectStore(Xi,{keyPath:d2})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.yi(i))),r<6&&s>=6&&(o=o.next(()=>(function(u){u.createObjectStore(Wa)}(e),this.wi(i)))),r<7&&s>=7&&(o=o.next(()=>this.Si(i))),r<8&&s>=8&&(o=o.next(()=>this.bi(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.Di(i))),r<11&&s>=11&&(o=o.next(()=>{(function(u){u.createObjectStore(fh,{keyPath:f2})})(e),function(u){u.createObjectStore(ph,{keyPath:p2})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore(mh,{keyPath:E2});c.createIndex(sp,I2,{unique:!1}),c.createIndex(WT,T2,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore(wc,{keyPath:i2});c.createIndex(bu,o2),c.createIndex(BT,a2)}(e)).next(()=>this.Ci(e,i)).next(()=>e.deleteObjectStore(ls))),r<14&&s>=14&&(o=o.next(()=>this.Fi(e,i))),r<15&&s>=15&&(o=o.next(()=>function(u){u.createObjectStore(Lm,{keyPath:m2,autoIncrement:!0}).createIndex(rp,g2,{unique:!1}),u.createObjectStore(ga,{keyPath:y2}).createIndex(qT,_2,{unique:!1}),u.createObjectStore(ya,{keyPath:v2}).createIndex(KT,w2,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{n.objectStore(ga).clear()}).next(()=>{n.objectStore(ya).clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(u){u.createObjectStore(jm,{keyPath:x2})})(e)})),r<18&&s>=18&&FI()&&(o=o.next(()=>{n.objectStore(ga).clear()}).next(()=>{n.objectStore(ya).clear()})),o}wi(e){let n=0;return e.store(ls).ee((r,s)=>{n+=Cc(s)}).next(()=>{const r={byteSize:n};return e.store(Wa).put(np,r)})}yi(e){const n=e.store(Ka),r=e.store(nn);return n.J().next(s=>b.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,ws],[i.userId,i.lastAcknowledgedBatchId]);return r.J(gs,o).next(a=>b.forEach(a,u=>{X(u.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const c=cs(this.serializer,u);return Gx(e,i.userId,c).next(()=>{})}))}))}Si(e){const n=e.store(Yi),r=e.store(ls);return e.store(Es).get(Ec).next(s=>{const i=[];return r.ee((o,a)=>{const u=new ue(o),c=function(m){return[0,lt(m)]}(u);i.push(n.get(c).next(d=>d?b.resolve():(m=>n.put({targetId:0,path:lt(m),sequenceNumber:s.highestListenSequenceNumber}))(u)))}).next(()=>b.waitFor(i))})}bi(e,n){e.createObjectStore(Ha,{keyPath:h2});const r=n.store(Ha),s=new Xm,i=o=>{if(s.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:lt(u)})}};return n.store(ls).ee({X:!0},(o,a)=>{const u=new ue(o);return i(u.popLast())}).next(()=>n.store(Gi).ee({X:!0},([o,a,u],c)=>{const d=vn(a);return i(d.popLast())}))}Di(e){const n=e.store(Qi);return n.ee((r,s)=>{const i=ea(s),o=$x(this.serializer,i);return n.put(o)})}Ci(e,n){const r=n.store(ls),s=[];return r.ee((i,o)=>{const a=n.store(wc),u=function(m){return m.document?new q(ue.fromString(m.document.name).popFirst(5)):m.noDocument?q.fromSegments(m.noDocument.path):m.unknownDocument?q.fromSegments(m.unknownDocument.path):Q(36783)}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(c))}).next(()=>b.waitFor(s))}Fi(e,n){const r=n.store(nn),s=eS(this.serializer),i=new Zm(Sh.mi,this.serializer.yt);return r.J().next(o=>{const a=new Map;return o.forEach(u=>{let c=a.get(u.userId)??re();cs(this.serializer,u).keys().forEach(d=>c=c.add(d)),a.set(u.userId,c)}),b.forEach(a,(u,c)=>{const d=new Je(c),m=Th.wt(this.serializer,d),g=i.getIndexManager(d),I=xh.wt(d,this.serializer,g,i.referenceDelegate);return new tS(s,I,m,g).recalculateAndSaveOverlaysForDocumentKeys(new ip(n,$t.ce),u).next()})})}}function I0(t){t.createObjectStore(Yi,{keyPath:u2}).createIndex(Mm,c2,{unique:!0}),t.createObjectStore(Qi,{keyPath:"targetId"}).createIndex($T,l2,{unique:!0}),t.createObjectStore(Es)}const hr="IndexedDbPersistence",Fd=18e5,Ud=5e3,zd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",GD="main";class eg{constructor(e,n,r,s,i,o,a,u,c,d,m=18){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Mi=i,this.window=o,this.document=a,this.xi=c,this.Oi=d,this.Ni=m,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=g=>Promise.resolve(),!eg.v())throw new z(M.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new OD(this,s),this.$i=n+GD,this.serializer=new Bx(u),this.Ui=new Vr(this.$i,this.Ni,new HD(this.serializer)),this.hi=new TD,this.Pi=new bD(this.referenceDelegate,this.serializer),this.remoteDocumentCache=eS(this.serializer),this.Ii=new ID,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,d===!1&&pt(hr,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new z(M.FAILED_PRECONDITION,zd);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Pi.getHighestSequenceNumber(e))}).then(e=>{this.ci=new $t(e,this.xi)}).then(()=>{this.li=!0}).catch(e=>(this.Ui&&this.Ui.close(),Promise.reject(e)))}Ji(e){return this.Qi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget(async()=>{this.started&&await this.Wi()}))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>lu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Hi(e).next(n=>{n||(this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)))})}).next(()=>this.Yi(e)).next(n=>this.isPrimary&&!n?this.Zi(e).next(()=>!1):!!n&&this.Xi(e).next(()=>!0))).catch(e=>{if(Gr(e))return F(hr,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return F(hr,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable(()=>this.Qi(e)),this.isPrimary=e})}Hi(e){return qo(e).get(ii).next(n=>b.resolve(this.es(n)))}ts(e){return lu(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,Fd)){this.qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Ke(n,Xi);return r.J().next(s=>{const i=this.ss(s,Fd),o=s.filter(a=>i.indexOf(a)===-1);return b.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ki)for(const n of e)this.Ki.removeItem(this._s(n.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Wi().then(()=>this.ns()).then(()=>this.ji()))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?b.resolve(!0):qo(e).get(ii).next(n=>{if(n!==null&&this.rs(n.leaseTimestampMs,Ud)&&!this.us(n.ownerId)){if(this.es(n)&&this.networkEnabled)return!0;if(!this.es(n)){if(!n.allowTabSynchronization)throw new z(M.FAILED_PRECONDITION,zd);return!1}}return!(!this.networkEnabled||!this.inForeground)||lu(e).J().next(r=>this.ss(r,Ud).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&F(hr,`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[gl,Xi],e=>{const n=new ip(e,$t.ce);return this.Zi(n).next(()=>this.ts(n))}),this.Ui.close(),this.Ps()}ss(e,n){return e.filter(r=>this.rs(r.updateTimeMs,n)&&!this.us(r.clientId))}Ts(){return this.runTransaction("getActiveClients","readonly",e=>lu(e).J().next(n=>this.ss(n,Fd).map(r=>r.clientId)))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,n){return xh.wt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new CD(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return Th.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,n,r){F(hr,"Starting transaction:",e);const s=n==="readonly"?"readonly":"readwrite",i=function(u){return u===18?k2:u===17?YT:u===16?A2:u===15?Fm:u===14?QT:u===13?GT:u===12?S2:u===11?HT:void Q(60245)}(this.Ni);let o;return this.Ui.runTransaction(e,s,i,a=>(o=new ip(a,this.ci?this.ci.next():$t.ce),n==="readwrite-primary"?this.Hi(o).next(u=>!!u||this.Yi(o)).next(u=>{if(!u)throw pt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)),new z(M.FAILED_PRECONDITION,jT);return r(o)}).next(u=>this.Xi(o).next(()=>u)):this.Is(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Is(e){return qo(e).get(ii).next(n=>{if(n!==null&&this.rs(n.leaseTimestampMs,Ud)&&!this.us(n.ownerId)&&!this.es(n)&&!(this.Oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new z(M.FAILED_PRECONDITION,zd)})}Xi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return qo(e).put(ii,n)}static v(){return Vr.v()}Zi(e){const n=qo(e);return n.get(ii).next(r=>this.es(r)?(F(hr,"Releasing primary lease."),n.delete(ii)):b.resolve())}rs(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(pt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi()))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const n=/(?:Version|Mobile)\/1[456]/;jI()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){var n;try{const r=((n=this.Ki)==null?void 0:n.getItem(this._s(e)))!==null;return F(hr,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return pt(hr,"Failed to get zombied client id.",r),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){pt("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function qo(t){return Ke(t,gl)}function lu(t){return Ke(t,Xi)}function QD(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class tg{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new tg(e,n.fromCache,r,s)}}/**
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
 */class YD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class nS{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return jI()?8:UT(qe())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new YD;return this.Ss(e,n,o).next(a=>{if(i.result=a,this.Vs)return this.bs(e,n,o,a.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(hi()<=ie.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",di(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),b.resolve()):(hi()<=ie.DEBUG&&F("QueryEngine","Query:",di(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(hi()<=ie.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",di(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ht(n))):b.resolve())}ys(e,n){if(Wv(n))return b.resolve(null);let r=Ht(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Sc(n,null,"F"),r=Ht(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.ps.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,a);return this.Cs(n,c,o,u.readTime)?this.ys(e,Sc(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,s){return Wv(n)||s.isEqual(J.min())?b.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?b.resolve(null):(hi()<=ie.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),di(n)),this.vs(e,o,n,YN(s,Ba)).next(a=>a))})}Ds(e,n){let r=new pe(gx(e));return n.forEach((s,i)=>{vl(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return hi()<=ie.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",di(n)),this.ps.getDocumentsMatchingQuery(e,n,Mt.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const ng="LocalStore",XD=3e8;class JD{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Ie(ee),this.xs=new Jn(i=>Ls(i),yl),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tS(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function rS(t,e,n,r){return new JD(t,e,n,r)}async function sS(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=re();for(const c of s){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of i){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:a}))})})}function ZD(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const m=c.batch,g=m.keys();let I=b.resolve();return g.forEach(x=>{I=I.next(()=>d.getEntry(u,x)).next(P=>{const C=c.docVersions.get(x);X(C!==null,48541),P.version.compareTo(C)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),I.next(()=>a.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=re();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function iS(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function eV(t,e){const n=te(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const a=[];e.targetChanges.forEach((d,m)=>{const g=s.get(m);if(!g)return;a.push(n.Pi.removeMatchingKeys(i,d.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(i,d.addedDocuments,m)));let I=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(Fe.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),s=s.insert(m,I),function(P,C,w){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=XD?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,I,d)&&a.push(n.Pi.updateTargetData(i,I))});let u=Dt(),c=re();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),a.push(tV(i,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(J.min())){const d=n.Pi.getLastRemoteSnapshotVersion(i).next(m=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(d)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.Ms=s,i))}function tV(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Dt();return n.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):F(ng,"Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:s}})}function nV(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ws),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rV(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,b.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function vp(t,e,n){const r=te(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Gr(o))throw o;F(ng,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function T0(t,e,n){const r=te(t);let s=J.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const m=te(u),g=m.xs.get(d);return g!==void 0?b.resolve(m.Ms.get(g)):m.Pi.getTargetData(c,d)}(r,o,Ht(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:re())).next(a=>(sV(r,B2(e),a),{documents:a,Qs:i})))}function sV(t,e,n){let r=t.Os.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class x0{constructor(){this.activeTargetIds=G2()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oS{constructor(){this.Mo=new x0,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new x0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class iV{Oo(e){}shutdown(){}}/**
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
 */const S0="ConnectivityMonitor";class A0{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){F(S0,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){F(S0,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let uu=null;function wp(){return uu===null?uu=function(){return 268435456+Math.round(2147483648*Math.random())}():uu++,"0x"+uu.toString(16)}/**
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
 */const Bd="RestConnection",oV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class aV{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Ic?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=wp(),a=this.zo(e,n.toUriEncodedString());F(Bd,`Sending RPC '${e}' ${o}:`,a,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:c}=new URL(a),d=Ws(c);return this.Jo(e,a,u,r,d).then(m=>(F(Bd,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Os(Bd,`RPC '${e}' ${o} failed with error: `,m,"url: ",a,"request:",r),m})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+co}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=oV[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class lV{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const it="WebChannelConnection";class uV extends aV{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=wp();return new Promise((a,u)=>{const c=new kT;c.setWithCredentials(!0),c.listenOnce(RT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ru.NO_ERROR:const m=c.getResponseJson();F(it,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),a(m);break;case Ru.TIMEOUT:F(it,`RPC '${e}' ${o} timed out`),u(new z(M.DEADLINE_EXCEEDED,"Request time out"));break;case Ru.HTTP_ERROR:const g=c.getStatus();if(F(it,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let I=c.getResponseJson();Array.isArray(I)&&(I=I[0]);const x=I==null?void 0:I.error;if(x&&x.status&&x.message){const P=function(w){const _=w.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(_)>=0?_:M.UNKNOWN}(x.status);u(new z(P,x.message))}else u(new z(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new z(M.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{F(it,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);F(it,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",d,r,15)})}T_(e,n,r){const s=wp(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=bT(),a=CT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=i.join("");F(it,`Creating RPC '${e}' stream ${s}: ${d}`,u);const m=o.createWebChannel(d,u);this.I_(m);let g=!1,I=!1;const x=new lV({Yo:C=>{I?F(it,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(g||(F(it,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),F(it,`RPC '${e}' stream ${s} sending:`,C),m.send(C))},Zo:()=>m.close()}),P=(C,w,_)=>{C.listen(w,E=>{try{_(E)}catch(V){setTimeout(()=>{throw V},0)}})};return P(m,Xo.EventType.OPEN,()=>{I||(F(it,`RPC '${e}' stream ${s} transport opened.`),x.o_())}),P(m,Xo.EventType.CLOSE,()=>{I||(I=!0,F(it,`RPC '${e}' stream ${s} transport closed`),x.a_(),this.E_(m))}),P(m,Xo.EventType.ERROR,C=>{I||(I=!0,Os(it,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),x.a_(new z(M.UNAVAILABLE,"The operation could not be completed")))}),P(m,Xo.EventType.MESSAGE,C=>{var w;if(!I){const _=C.data[0];X(!!_,16349);const E=_,V=(E==null?void 0:E.error)||((w=E[0])==null?void 0:w.error);if(V){F(it,`RPC '${e}' stream ${s} received error:`,V);const L=V.status;let j=function(S){const k=Me[S];if(k!==void 0)return Rx(k)}(L),T=V.message;j===void 0&&(j=M.INTERNAL,T="Unknown error status: "+L+" with message "+V.message),I=!0,x.a_(new z(j,T)),m.close()}else F(it,`RPC '${e}' stream ${s} received:`,_),x.u_(_)}}),P(a,PT.STAT_EVENT,C=>{C.stat===Zf.PROXY?F(it,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Zf.NOPROXY&&F(it,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.__()},0),x}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}/**
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
 */function cV(){return typeof window<"u"?window:null}function ju(){return typeof document<"u"?document:null}/**
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
 */function Ah(t){return new hD(t,!0)}/**
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
 */class aS{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const k0="PersistentStream";class lS{constructor(e,n,r,s,i,o,a,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new aS(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(pt(n.toString()),pt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new z(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return F(k0,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(F(k0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hV extends lS{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=pD(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?gt(o.readTime):J.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=pp(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=Tc(u)?{documents:Mx(i,u)}:{query:Lx(i,u).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bx(i,o.resumeToken);const c=dp(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=so(i,o.snapshotVersion.toTimestamp());const c=dp(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=gD(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=pp(this.serializer),n.removeTarget=e,this.q_(n)}}class dV extends lS{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=mD(e.writeResults,e.commitTime),r=gt(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=pp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kc(this.serializer,r))};this.q_(n)}}/**
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
 */class fV{}class pV extends fV{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,fp(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(M.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Ho(e,fp(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class mV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(pt(n),this.aa=!1):F("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const zs="RemoteStore";class gV{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Zs(this)&&(F(zs,"Restarting streams for network reachability change."),await async function(u){const c=te(u);c.Ea.add(4),await El(c),c.Ra.set("Unknown"),c.Ea.delete(4),await kh(c)}(this))})}),this.Ra=new mV(r,s)}}async function kh(t){if(Zs(t))for(const e of t.da)await e(!0)}async function El(t){for(const e of t.da)await e(!1)}function uS(t,e){const n=te(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),og(n)?ig(n):po(n).O_()&&sg(n,e))}function rg(t,e){const n=te(t),r=po(n);n.Ia.delete(e),r.O_()&&cS(n,e),n.Ia.size===0&&(r.O_()?r.L_():Zs(n)&&n.Ra.set("Unknown"))}function sg(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}po(t).Y_(e)}function cS(t,e){t.Va.Ue(e),po(t).Z_(e)}function ig(t){t.Va=new aD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),po(t).start(),t.Ra.ua()}function og(t){return Zs(t)&&!po(t).x_()&&t.Ia.size>0}function Zs(t){return te(t).Ea.size===0}function hS(t){t.Va=void 0}async function yV(t){t.Ra.set("Online")}async function _V(t){t.Ia.forEach((e,n)=>{sg(t,e)})}async function vV(t,e){hS(t),og(t)?(t.Ra.ha(e),ig(t)):t.Ra.set("Unknown")}async function wV(t,e,n){if(t.Ra.set("Online"),e instanceof Cx&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.Va.removeTarget(a))}(t,e)}catch(r){F(zs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Nc(t,r)}else if(e instanceof Mu?t.Va.Ze(e):e instanceof Px?t.Va.st(e):t.Va.tt(e),!n.isEqual(J.min()))try{const r=await iS(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.Ia.get(c);d&&i.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=i.Ia.get(u);if(!d)return;i.Ia.set(u,d.withResumeToken(Fe.EMPTY_BYTE_STRING,d.snapshotVersion)),cS(i,u);const m=new jn(d.target,u,c,d.sequenceNumber);sg(i,m)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){F(zs,"Failed to raise snapshot:",r),await Nc(t,r)}}async function Nc(t,e,n){if(!Gr(e))throw e;t.Ea.add(1),await El(t),t.Ra.set("Offline"),n||(n=()=>iS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F(zs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await kh(t)})}function dS(t,e){return e().catch(n=>Nc(t,n,e))}async function Il(t){const e=te(t),n=zr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ws;for(;EV(e);)try{const s=await nV(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,IV(e,s)}catch(s){await Nc(e,s)}fS(e)&&pS(e)}function EV(t){return Zs(t)&&t.Ta.length<10}function IV(t,e){t.Ta.push(e);const n=zr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function fS(t){return Zs(t)&&!zr(t).x_()&&t.Ta.length>0}function pS(t){zr(t).start()}async function TV(t){zr(t).ra()}async function xV(t){const e=zr(t);for(const n of t.Ta)e.ea(n.mutations)}async function SV(t,e,n){const r=t.Ta.shift(),s=Wm.from(r,e,n);await dS(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Il(t)}async function AV(t,e){e&&zr(t).X_&&await async function(r,s){if(function(o){return sD(o)&&o!==M.ABORTED}(s.code)){const i=r.Ta.shift();zr(r).B_(),await dS(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Il(r)}}(t,e),fS(t)&&pS(t)}async function R0(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),F(zs,"RemoteStore received new credentials");const r=Zs(n);n.Ea.add(3),await El(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await kh(n)}async function kV(t,e){const n=te(t);e?(n.Ea.delete(2),await kh(n)):e||(n.Ea.add(2),await El(n),n.Ra.set("Unknown"))}function po(t){return t.ma||(t.ma=function(n,r,s){const i=te(n);return i.sa(),new hV(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:yV.bind(null,t),t_:_V.bind(null,t),r_:vV.bind(null,t),H_:wV.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),og(t)?ig(t):t.Ra.set("Unknown")):(await t.ma.stop(),hS(t))})),t.ma}function zr(t){return t.fa||(t.fa=function(n,r,s){const i=te(n);return i.sa(),new dV(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:TV.bind(null,t),r_:AV.bind(null,t),ta:xV.bind(null,t),na:SV.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Il(t)):(await t.fa.stop(),t.Ta.length>0&&(F(zs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class ag{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new ag(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lg(t,e){if(pt("AsyncQueue",`${e}: ${t}`),Gr(t))return new z(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ji{static emptySet(e){return new ji(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Jo(),this.sortedSet=new Ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ji)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ji;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class P0{constructor(){this.ga=new Ie(q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Q(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class io{constructor(e,n,r,s,i,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new io(e,n,ji.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_h(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class RV{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class PV{constructor(){this.queries=C0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=te(n),i=s.queries;s.queries=C0(),i.forEach((o,a)=>{for(const u of a.Sa)u.onError(r)})})(this,new z(M.ABORTED,"Firestore shutting down"))}}function C0(){return new Jn(t=>mx(t),_h)}async function ug(t,e){const n=te(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new RV,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=lg(o,`Initialization of query '${di(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&hg(n)}async function cg(t,e){const n=te(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function CV(t,e){const n=te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Sa)a.Fa(s)&&(r=!0);o.wa=s}}r&&hg(n)}function bV(t,e,n){const r=te(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function hg(t){t.Ca.forEach(e=>{e.next()})}var Ep,b0;(b0=Ep||(Ep={})).Ma="default",b0.Cache="cache";class dg{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new io(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ep.Cache}}/**
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
 */class mS{constructor(e){this.key=e}}class gS{constructor(e){this.key=e}}class NV{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=re(),this.mutatedKeys=re(),this.eu=gx(e),this.tu=new ji(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new P0,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,m)=>{const g=s.get(d),I=vl(this.query,m)?m:null,x=!!g&&this.mutatedKeys.has(g.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let C=!1;g&&I?g.data.isEqual(I.data)?x!==P&&(r.track({type:3,doc:I}),C=!0):this.su(g,I)||(r.track({type:2,doc:I}),C=!0,(u&&this.eu(I,u)>0||c&&this.eu(I,c)<0)&&(a=!0)):!g&&I?(r.track({type:0,doc:I}),C=!0):g&&!I&&(r.track({type:1,doc:g}),C=!0,(u||c)&&(a=!0)),C&&(I?(o=o.add(I),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,m)=>function(I,x){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Rt:C})}};return P(I)-P(x)}(d.type,m.type)||this.eu(d.doc,m.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new io(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new P0,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new gS(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new mS(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return io.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const fg="SyncEngine";class DV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class VV{constructor(e){this.key=e,this.hu=!1}}class OV{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Jn(a=>mx(a),_h),this.Iu=new Map,this.Eu=new Set,this.du=new Ie(q.comparator),this.Au=new Map,this.Ru=new Jm,this.Vu={},this.mu=new Map,this.fu=Us.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function MV(t,e,n=!0){const r=IS(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await yS(r,e,n,!0),s}async function LV(t,e){const n=IS(t);await yS(n,e,!0,!1)}async function yS(t,e,n,r){const s=await rV(t.localStore,Ht(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await jV(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&uS(t.remoteStore,s),a}async function jV(t,e,n,r,s){t.pu=(m,g,I)=>async function(P,C,w,_){let E=C.view.ru(w);E.Cs&&(E=await T0(P.localStore,C.query,!1).then(({documents:T})=>C.view.ru(T,E)));const V=_&&_.targetChanges.get(C.targetId),L=_&&_.targetMismatches.get(C.targetId)!=null,j=C.view.applyChanges(E,P.isPrimaryClient,V,L);return D0(P,C.targetId,j.au),j.snapshot}(t,m,g,I);const i=await T0(t.localStore,e,!0),o=new NV(e,i.Qs),a=o.ru(i.documents),u=wl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,u);D0(t,n,c.au);const d=new DV(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function FV(t,e,n){const r=te(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!_h(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await vp(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&rg(r.remoteStore,s.targetId),Ip(r,s.targetId)}).catch(Xs)):(Ip(r,s.targetId),await vp(r.localStore,s.targetId,!0))}async function UV(t,e){const n=te(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),rg(n.remoteStore,r.targetId))}async function zV(t,e,n){const r=TS(t);try{const s=await function(o,a){const u=te(o),c=he.now(),d=a.reduce((I,x)=>I.add(x.key),re());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let x=Dt(),P=re();return u.Ns.getEntries(I,d).next(C=>{x=C,x.forEach((w,_)=>{_.isValidDocument()||(P=P.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,x)).next(C=>{m=C;const w=[];for(const _ of a){const E=nD(_,m.get(_.key).overlayedDocument);E!=null&&w.push(new Qr(_.key,E,ox(E.value.mapValue),Tt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,w,a)}).next(C=>{g=C;const w=C.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(I,C.batchId,w)})}).then(()=>({batchId:g.batchId,changes:_x(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Ie(ee)),c=c.insert(a,u),o.Vu[o.currentUser.toKey()]=c}(r,s.batchId,n),await Tl(r,s.changes),await Il(r.remoteStore)}catch(s){const i=lg(s,"Failed to persist write");n.reject(i)}}async function _S(t,e){const n=te(t);try{const r=await eV(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?X(o.hu,14607):s.removedDocuments.size>0&&(X(o.hu,42227),o.hu=!1))}),await Tl(n,r,e)}catch(r){await Xs(r)}}function N0(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=te(o);u.onlineState=a;let c=!1;u.queries.forEach((d,m)=>{for(const g of m.Sa)g.va(a)&&(c=!0)}),c&&hg(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BV(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ie(q.comparator);o=o.insert(i,Pe.newNoDocument(i,J.min()));const a=re().add(i),u=new Ih(J.min(),new Map,new Ie(ee),o,a);await _S(r,u),r.du=r.du.remove(i),r.Au.delete(e),pg(r)}else await vp(r.localStore,e,!1).then(()=>Ip(r,e,n)).catch(Xs)}async function $V(t,e){const n=te(t),r=e.batch.batchId;try{const s=await ZD(n.localStore,e);wS(n,r,null),vS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tl(n,s)}catch(s){await Xs(s)}}async function qV(t,e,n){const r=te(t);try{const s=await function(o,a){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(m=>(X(m!==null,37113),d=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);wS(r,e,n),vS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Tl(r,s)}catch(s){await Xs(s)}}function vS(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function wS(t,e,n){const r=te(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Ip(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||ES(t,r)})}function ES(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(rg(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),pg(t))}function D0(t,e,n){for(const r of n)r instanceof mS?(t.Ru.addReference(r.key,e),KV(t,r)):r instanceof gS?(F(fg,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||ES(t,r.key)):Q(19791,{wu:r})}function KV(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(F(fg,"New document in limbo: "+n),t.Eu.add(r),pg(t))}function pg(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new q(ue.fromString(e)),r=t.fu.next();t.Au.set(r,new VV(n)),t.du=t.du.insert(n,r),uS(t.remoteStore,new jn(Ht(_l(n.path)),r,"TargetPurposeLimboResolution",$t.ce))}}async function Tl(t,e,n){const r=te(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=tg.As(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,c){const d=te(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>b.forEach(c,g=>b.forEach(g.Es,I=>d.persistence.referenceDelegate.addReference(m,g.targetId,I)).next(()=>b.forEach(g.ds,I=>d.persistence.referenceDelegate.removeReference(m,g.targetId,I)))))}catch(m){if(!Gr(m))throw m;F(ng,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const I=d.Ms.get(g),x=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(x);d.Ms=d.Ms.insert(g,P)}}}(r.localStore,i))}async function WV(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){F(fg,"User change. New user:",e.toKey());const r=await sS(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(u=>{u.reject(new z(M.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Tl(n,r.Ls)}}function HV(t,e){const n=te(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let s=re();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function IS(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_S.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BV.bind(null,e),e.Pu.H_=CV.bind(null,e.eventManager),e.Pu.yu=bV.bind(null,e.eventManager),e}function TS(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$V.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qV.bind(null,e),e}class tl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ah(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return rS(this.persistence,new nS,e.initialUser,this.serializer)}Cu(e){return new Zm(Sh.mi,this.serializer)}Du(e){return new oS}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tl.provider={build:()=>new tl};class GV extends tl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){X(this.persistence.referenceDelegate instanceof bc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Xx(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ot.withCacheSize(this.cacheSizeBytes):ot.DEFAULT;return new Zm(r=>bc.mi(r,n),this.serializer)}}class QV extends tl{constructor(e,n,r){super(),this.xu=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await TS(this.xu.syncEngine),await Il(this.xu.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return rS(this.persistence,new nS,e.initialUser,this.serializer)}Fu(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new Xx(r,e.asyncQueue,n)}Mu(e,n){const r=new e2(n,this.persistence);return new ZN(e.asyncQueue,r)}Cu(e){const n=QD(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?ot.withCacheSize(this.cacheSizeBytes):ot.DEFAULT;return new eg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,cV(),ju(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new oS}}class Dc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>N0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WV.bind(null,this.syncEngine),await kV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PV}()}createDatastore(e){const n=Ah(e.databaseInfo.databaseId),r=function(i){return new uV(i)}(e.databaseInfo);return function(i,o,a,u){return new pV(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new gV(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>N0(this.syncEngine,n,0),function(){return A0.v()?new A0:new iV}())}createSyncEngine(e,n){return function(s,i,o,a,u,c,d){const m=new OV(s,i,o,a,u,c);return d&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=te(s);F(zs,"RemoteStore shutting down."),i.Ea.add(5),await El(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Dc.provider={build:()=>new Dc};/**
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
 */class mg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):pt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Br="FirestoreClient";class YV{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Je.UNAUTHENTICATED,this.clientId=Dm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{F(Br,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(F(Br,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $d(t,e){t.asyncQueue.verifyOperationInProgress(),F(Br,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await sS(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function V0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await XV(t);F(Br,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>R0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>R0(e.remoteStore,s)),t._onlineComponents=e}async function XV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F(Br,"Using user provided OfflineComponentProvider");try{await $d(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Os("Error using user provided cache. Falling back to memory cache: "+n),await $d(t,new tl)}}else F(Br,"Using default OfflineComponentProvider"),await $d(t,new GV(void 0));return t._offlineComponents}async function xS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F(Br,"Using user provided OnlineComponentProvider"),await V0(t,t._uninitializedComponentsProvider._online)):(F(Br,"Using default OnlineComponentProvider"),await V0(t,new Dc))),t._onlineComponents}function JV(t){return xS(t).then(e=>e.syncEngine)}async function Vc(t){const e=await xS(t),n=e.eventManager;return n.onListen=MV.bind(null,e.syncEngine),n.onUnlisten=FV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=LV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=UV.bind(null,e.syncEngine),n}function ZV(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const d=new mg({next:g=>{d.Nu(),o.enqueueAndForget(()=>cg(i,m));const I=g.docs.has(a);!I&&g.fromCache?c.reject(new z(M.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&u&&u.source==="server"?c.reject(new z(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new dg(_l(a.path),d,{includeMetadataChanges:!0,qa:!0});return ug(i,m)}(await Vc(t),t.asyncQueue,e,n,r)),r.promise}function e4(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const d=new mg({next:g=>{d.Nu(),o.enqueueAndForget(()=>cg(i,m)),g.fromCache&&u.source==="server"?c.reject(new z(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new dg(a,d,{includeMetadataChanges:!0,qa:!0});return ug(i,m)}(await Vc(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function SS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const O0=new Map;/**
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
 */const AS="firestore.googleapis.com",M0=!0;class L0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=AS,this.ssl=M0}else this.host=e.host,this.ssl=e.ssl??M0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Hx;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ND)throw new z(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=SS(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rh{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new L0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new L0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new FN;switch(r.type){case"firstParty":return new $N(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=O0.get(n);r&&(F("ComponentProvider","Removing Datastore"),O0.delete(n),r.terminate())}(this),Promise.resolve()}}function t4(t,e,n,r={}){var c;t=Wt(t,Rh);const s=Ws(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(vm(`https://${a}`),wm("Firestore",!0)),i.host!==AS&&i.host!==a&&Os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:a,ssl:s,emulatorOptions:r};if(!bs(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=Je.MOCK_USER;else{d=MI(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new z(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Je(g)}t._authCredentials=new UN(new DT(d,m))}}/**
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
 */class Zn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zn(this.firestore,e,this._query)}}class Ne{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}toJSON(){return{type:Ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ml(n,Ne._jsonSchema))return new Ne(e,r||null,new q(ue.fromString(n.referencePath)))}}Ne._jsonSchemaVersion="firestore/documentReference/1.0",Ne._jsonSchema={type:je("string",Ne._jsonSchemaVersion),referencePath:je("string")};class Or extends Zn{constructor(e,n,r){super(e,n,_l(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new q(e))}withConverter(e){return new Or(this.firestore,e,this._path)}}function mo(t,e,...n){if(t=De(t),OT("collection","path",e),t instanceof Rh){const r=ue.fromString(e,...n);return kv(r),new Or(t,null,r)}{if(!(t instanceof Ne||t instanceof Or))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return kv(r),new Or(t.firestore,null,r)}}function vt(t,e,...n){if(t=De(t),arguments.length===1&&(e=Dm.newId()),OT("doc","path",e),t instanceof Rh){const r=ue.fromString(e,...n);return Av(r),new Ne(t,null,new q(r))}{if(!(t instanceof Ne||t instanceof Or))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Av(r),new Ne(t.firestore,t instanceof Or?t.converter:null,new q(r))}}/**
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
 */const j0="AsyncQueue";class F0{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new aS(this,"async_queue_retry"),this._c=()=>{const r=ju();r&&F(j0,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=ju();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ju();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Sn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Gr(e))throw e;F(j0,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,pt("INTERNAL UNHANDLED ERROR: ",U0(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=ag.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Q(47125,{Pc:U0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function U0(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
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
 */function z0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class $r extends Rh{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new F0,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new F0(e),this._firestoreClient=void 0,await e}}}function n4(t,e){const n=typeof t=="object"?t:oh(),r=typeof t=="string"?t:Ic,s=Gs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=DI("firestore");i&&t4(s,...i)}return s}function Ph(t){if(t._terminated)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||kS(t),t._firestoreClient}function kS(t){var r,s,i;const e=t._freezeSettings(),n=function(a,u,c,d){return new P2(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,SS(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new YV(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}function r4(t,e){Os("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return s4(t,Dc.provider,{build:r=>new QV(r,n.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}function s4(t,e,n){if((t=Wt(t,$r))._firestoreClient||t._terminated)throw new z(M.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new z(M.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},kS(t)}/**
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
 */class zt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zt(Fe.fromBase64String(e))}catch(n){throw new z(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zt(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:zt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ml(e,zt._jsonSchema))return zt.fromBase64String(e.bytes)}}zt._jsonSchemaVersion="firestore/bytes/1.0",zt._jsonSchema={type:je("string",zt._jsonSchemaVersion),bytes:je("string")};/**
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
 */class gg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class RS{constructor(e){this._methodName=e}}/**
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
 */class An{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:An._jsonSchemaVersion}}static fromJSON(e){if(ml(e,An._jsonSchema))return new An(e.latitude,e.longitude)}}An._jsonSchemaVersion="firestore/geoPoint/1.0",An._jsonSchema={type:je("string",An._jsonSchemaVersion),latitude:je("number"),longitude:je("number")};/**
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
 */class kn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:kn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ml(e,kn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new kn(e.vectorValues);throw new z(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}kn._jsonSchemaVersion="firestore/vectorValue/1.0",kn._jsonSchema={type:je("string",kn._jsonSchemaVersion),vectorValues:je("object")};/**
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
 */const i4=/^__.*__$/;class o4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qr(e,this.data,this.fieldMask,n,this.fieldTransforms):new fo(e,this.data,n,this.fieldTransforms)}}function PS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{Ac:t})}}class yg{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new yg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Oc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(PS(this.Ac)&&i4.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class a4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ah(e)}Cc(e,n,r,s=!1){return new yg({Ac:e,methodName:n,Dc:r,path:xe.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function CS(t){const e=t._freezeSettings(),n=Ah(t._databaseId);return new a4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function l4(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);DS("Data must be an object, but it was:",o,r);const a=bS(r,o);let u,c;if(i.merge)u=new qt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const m of i.mergeFields){const g=c4(e,m,n);if(!o.contains(g))throw new z(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);d4(d,g)||d.push(g)}u=new qt(d),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new o4(new Et(a),u,c)}function u4(t,e,n,r=!1){return _g(n,t.Cc(r?4:3,e))}function _g(t,e){if(NS(t=De(t)))return DS("Unsupported field value:",e,t),bS(t,e);if(t instanceof RS)return function(r,s){if(!PS(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let u=_g(a,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Q2(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=he.fromDate(r);return{timestampValue:so(s.serializer,i)}}if(r instanceof he){const i=new he(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:so(s.serializer,i)}}if(r instanceof An)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zt)return{bytesValue:bx(s.serializer,r._byteString)};if(r instanceof Ne){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Qm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof kn)return function(o,a){return{mapValue:{fields:{[zm]:{stringValue:Bm},[Ji]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Sc("VectorValues must only contain numeric values.");return qm(a.serializer,c)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${ch(r)}`)}(t,e)}function bS(t,e){const n={};return XT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Js(t,(r,s)=>{const i=_g(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function NS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof he||t instanceof An||t instanceof zt||t instanceof Ne||t instanceof RS||t instanceof kn)}function DS(t,e,n){if(!NS(n)||!MT(n)){const r=ch(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function c4(t,e,n){if((e=De(e))instanceof gg)return e._internalPath;if(typeof e=="string")return VS(t,e);throw Oc("Field path arguments must be of type string or ",t,!1,void 0,n)}const h4=new RegExp("[~\\*/\\[\\]]");function VS(t,e,n){if(e.search(h4)>=0)throw Oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gg(...e.split("."))._internalPath}catch{throw Oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new z(M.INVALID_ARGUMENT,a+t+u)}function d4(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class OS{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new f4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ch("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class f4 extends OS{data(){return super.data()}}function Ch(t,e){return typeof e=="string"?VS(t,e):e instanceof gg?e._internalPath:e._delegate._internalPath}/**
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
 */function MS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vg{}class wg extends vg{}function Eg(t,e,...n){let r=[];e instanceof vg&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Ig).length,a=i.filter(u=>u instanceof bh).length;if(o>1||o>0&&a>0)throw new z(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class bh extends wg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new bh(e,n,r)}_apply(e){const n=this._parse(e);return jS(e._query,n),new Zn(e.firestore,e.converter,hp(e._query,n))}_parse(e){const n=CS(e.firestore);return function(i,o,a,u,c,d,m){let g;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){$0(m,d);const x=[];for(const P of m)x.push(B0(u,i,P));g={arrayValue:{values:x}}}else g=B0(u,i,m)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||$0(m,d),g=u4(a,o,m,d==="in"||d==="not-in");return oe.create(c,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function LS(t,e,n){const r=e,s=Ch("where",t);return bh._create(s,r,n)}class Ig extends vg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ig(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:de.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)jS(o,u),o=hp(o,u)}(e._query,n),new Zn(e.firestore,e.converter,hp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Tg extends wg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Tg(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new z(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ja(i,o)}(e._query,this._field,this._direction);return new Zn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ho(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function p4(t,e="asc"){const n=e,r=Ch("orderBy",t);return Tg._create(r,n)}class xg extends wg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new xg(e,n,r)}_apply(e){return new Zn(e.firestore,e.converter,Sc(e._query,this._limit,this._limitType))}}function m4(t){return xg._create("limit",t,"F")}function B0(t,e,n){if(typeof(n=De(n))=="string"){if(n==="")throw new z(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!px(e)&&n.indexOf("/")!==-1)throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!q.isDocumentKey(r))throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ya(t,new q(r))}if(n instanceof Ne)return Ya(t,n._key);throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ch(n)}.`)}function $0(t,e){if(!Array.isArray(t)||t.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jS(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class g4{convertValue(e,n="none"){switch(Fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Js(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Ji].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>we(o.doubleValue));return new kn(n)}convertGeoPoint(e){return new An(we(e.latitude),we(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ga(e));default:return null}}convertTimestamp(e){const n=Gn(e);return new he(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);X(zx(r),9688,{name:e});const s=new Ms(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(n)||pt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function y4(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class ta{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ts extends OS{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ch("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ts._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ts._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ts._jsonSchema={type:je("string",Ts._jsonSchemaVersion),bundleSource:je("string","DocumentSnapshot"),bundleName:je("string"),bundle:je("string")};class Fu extends Ts{data(e={}){return super.data(e)}}class xs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ta(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fu(this._firestore,this._userDataWriter,r.key,r,new ta(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new Fu(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ta(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new Fu(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ta(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:_4(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Dm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function _4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
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
 */function xl(t){t=Wt(t,Ne);const e=Wt(t.firestore,$r);return ZV(Ph(e),t._key).then(n=>zS(e,t,n))}xs._jsonSchemaVersion="firestore/querySnapshot/1.0",xs._jsonSchema={type:je("string",xs._jsonSchemaVersion),bundleSource:je("string","QuerySnapshot"),bundleName:je("string"),bundle:je("string")};class Sg extends g4{constructor(e){super(),this.firestore=e}convertBytes(e){return new zt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function Nh(t){t=Wt(t,Zn);const e=Wt(t.firestore,$r),n=Ph(e),r=new Sg(e);return MS(t._query),e4(n,t._query).then(s=>new xs(e,r,t,s))}function ei(t,e,n){t=Wt(t,Ne);const r=Wt(t.firestore,$r),s=y4(t.converter,e,n);return US(r,[l4(CS(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Tt.none())])}function Mc(t){return US(Wt(t.firestore,$r),[new Eh(t._key,Tt.none())])}function FS(t,...e){var u,c,d;t=De(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||z0(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(z0(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(c=m.error)==null?void 0:c.bind(m),e[r+2]=(d=m.complete)==null?void 0:d.bind(m)}let i,o,a;if(t instanceof Ne)o=Wt(t.firestore,$r),a=_l(t._key.path),i={next:m=>{e[r]&&e[r](zS(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Wt(t,Zn);o=Wt(m.firestore,$r),a=m._query;const g=new Sg(o);i={next:I=>{e[r]&&e[r](new xs(o,g,m,I))},error:e[r+1],complete:e[r+2]},MS(t._query)}return function(g,I,x,P){const C=new mg(P),w=new dg(I,C,x);return g.asyncQueue.enqueueAndForget(async()=>ug(await Vc(g),w)),()=>{C.Nu(),g.asyncQueue.enqueueAndForget(async()=>cg(await Vc(g),w))}}(Ph(o),a,s,i)}function US(t,e){return function(r,s){const i=new Sn;return r.asyncQueue.enqueueAndForget(async()=>zV(await JV(r),s,i)),i.promise}(Ph(t),e)}function zS(t,e,n){const r=n.docs.get(e._key),s=new Sg(t);return new Ts(t,s,e._key,r,new ta(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){co=s})(Qs),cn(new Yt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new $r(new zN(r.getProvider("auth-internal")),new qN(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ms(c.options.projectId,d)}(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),kt(Iv,Tv,e),kt(Iv,Tv,"esm2020")})();/**
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
 */const BS="firebasestorage.googleapis.com",v4="storageBucket",w4=2*60*1e3,E4=10*60*1e3;/**
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
 */class Cn extends dn{constructor(e,n,r=0){super(qd(e),`Firebase Storage: ${n} (${qd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Cn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return qd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pn||(Pn={}));function qd(t){return"storage/"+t}function I4(){const t="An unknown error occurred, please check the error payload for server response.";return new Cn(Pn.UNKNOWN,t)}function T4(){return new Cn(Pn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function x4(){return new Cn(Pn.CANCELED,"User canceled the upload/download.")}function S4(t){return new Cn(Pn.INVALID_URL,"Invalid URL '"+t+"'.")}function A4(t){return new Cn(Pn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function q0(t){return new Cn(Pn.INVALID_ARGUMENT,t)}function $S(){return new Cn(Pn.APP_DELETED,"The Firebase app was deleted.")}function k4(t){return new Cn(Pn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class on{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=on.makeFromUrl(e,n)}catch{return new on(e,"")}if(r.path==="")return r;throw A4(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(V){V.path_=decodeURIComponent(V.path)}const d="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",I=new RegExp(`^https?://${m}/${d}/b/${s}/o${g}`,"i"),x={bucket:1,path:3},P=n===BS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",w=new RegExp(`^https?://${P}/${s}/${C}`,"i"),E=[{regex:a,indices:u,postModify:i},{regex:I,indices:x,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let V=0;V<E.length;V++){const L=E[V],j=L.regex.exec(e);if(j){const T=j[L.indices.bucket];let v=j[L.indices.path];v||(v=""),r=new on(T,v),L.postModify(r);break}}if(r==null)throw S4(e);return r}}class R4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function P4(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...C){c||(c=!0,e.apply(null,C))}function m(C){s=setTimeout(()=>{s=null,t(I,u())},C)}function g(){i&&clearTimeout(i)}function I(C,...w){if(c){g();return}if(C){g(),d.call(null,C,...w);return}if(u()||o){g(),d.call(null,C,...w);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,m(E)}let x=!1;function P(C){x||(x=!0,g(),!c&&(s!==null?(C||(a=2),clearTimeout(s),m(0)):C||(a=1)))}return m(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function C4(t){t(!1)}/**
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
 */function b4(t){return t!==void 0}function K0(t,e,n,r){if(r<e)throw q0(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw q0(`Invalid value for '${t}'. Expected ${n} or less.`)}function N4(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Lc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Lc||(Lc={}));/**
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
 */function D4(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class V4{constructor(e,n,r,s,i,o,a,u,c,d,m,g=!0,I=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=m,this.retry=g,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,P)=>{this.resolve_=x,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new cu(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Lc.NO_ERROR,u=i.getStatus();if(!a||D4(u,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Lc.ABORT;r(!1,new cu(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new cu(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());b4(u)?i(u):i()}catch(u){o(u)}else if(a!==null){const u=I4();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(s.canceled){const u=this.appDelete_?$S():x4();o(u)}else{const u=T4();o(u)}};this.canceled_?n(!1,new cu(!1,null,!0)):this.backoffId_=P4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&C4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class cu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function O4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function M4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function L4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function j4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function F4(t,e,n,r,s,i,o=!0,a=!1){const u=N4(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return L4(d,e),O4(d,n),M4(d,i),j4(d,r),new V4(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
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
 */function U4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function z4(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class jc{constructor(e,n){this._service=e,n instanceof on?this._location=n:this._location=on.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new jc(e,n)}get root(){const e=new on(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return z4(this._location.path)}get storage(){return this._service}get parent(){const e=U4(this._location.path);if(e===null)return null;const n=new on(this._location.bucket,e);return new jc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw k4(e)}}function W0(t,e){const n=e==null?void 0:e[v4];return n==null?null:on.makeFromBucketSpec(n,t)}function B4(t,e,n,r={}){t.host=`${e}:${n}`;const s=Ws(e);s&&(vm(`https://${t.host}/b`),wm("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:MI(i,t.app.options.projectId))}class $4{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=BS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=w4,this._maxUploadRetryTime=E4,this._requests=new Set,s!=null?this._bucket=on.makeFromBucketSpec(s,this._host):this._bucket=W0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=on.makeFromBucketSpec(this._url,e):this._bucket=W0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){K0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){K0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new jc(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new R4($S());{const o=F4(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const H0="@firebase/storage",G0="0.14.0";/**
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
 */const qS="storage";function q4(t=oh(),e){t=De(t);const r=Gs(t,qS).getImmediate({identifier:e}),s=DI("storage");return s&&K4(r,...s),r}function K4(t,e,n,r={}){B4(t,e,n,r)}function W4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new $4(n,r,s,e,Qs)}function H4(){cn(new Yt(qS,W4,"PUBLIC").setMultipleInstances(!0)),kt(H0,G0,""),kt(H0,G0,"esm2020")}H4();const KS="@firebase/installations",Ag="0.6.19";/**
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
 */const WS=1e4,HS=`w:${Ag}`,GS="FIS_v2",G4="https://firebaseinstallations.googleapis.com/v1",Q4=60*60*1e3,Y4="installations",X4="Installations";/**
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
 */const J4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Bs=new Hs(Y4,X4,J4);function QS(t){return t instanceof dn&&t.code.includes("request-failed")}/**
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
 */function YS({projectId:t}){return`${G4}/projects/${t}/installations`}function XS(t){return{token:t.token,requestStatus:2,expiresIn:eO(t.expiresIn),creationTime:Date.now()}}async function JS(t,e){const r=(await e.json()).error;return Bs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ZS({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Z4(t,{refreshToken:e}){const n=ZS(t);return n.append("Authorization",tO(e)),n}async function e1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function eO(t){return Number(t.replace("s","000"))}function tO(t){return`${GS} ${t}`}/**
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
 */async function nO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=YS(t),s=ZS(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:GS,appId:t.appId,sdkVersion:HS},a={method:"POST",headers:s,body:JSON.stringify(o)},u=await e1(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:XS(c.authToken)}}else throw await JS("Create Installation",u)}/**
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
 */function t1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function rO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const sO=/^[cdef][\w-]{21}$/,Tp="";function iO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=oO(t);return sO.test(n)?n:Tp}catch{return Tp}}function oO(t){return rO(t).substr(0,22)}/**
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
 */function Dh(t){return`${t.appName}!${t.appId}`}/**
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
 */const n1=new Map;function r1(t,e){const n=Dh(t);s1(n,e),aO(n,e)}function s1(t,e){const n=n1.get(t);if(n)for(const r of n)r(e)}function aO(t,e){const n=lO();n&&n.postMessage({key:t,fid:e}),uO()}let ys=null;function lO(){return!ys&&"BroadcastChannel"in self&&(ys=new BroadcastChannel("[Firebase] FID Change"),ys.onmessage=t=>{s1(t.data.key,t.data.fid)}),ys}function uO(){n1.size===0&&ys&&(ys.close(),ys=null)}/**
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
 */const cO="firebase-installations-database",hO=1,$s="firebase-installations-store";let Kd=null;function kg(){return Kd||(Kd=ih(cO,hO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($s)}}})),Kd}async function Fc(t,e){const n=Dh(t),s=(await kg()).transaction($s,"readwrite"),i=s.objectStore($s),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&r1(t,e.fid),e}async function i1(t){const e=Dh(t),r=(await kg()).transaction($s,"readwrite");await r.objectStore($s).delete(e),await r.done}async function Vh(t,e){const n=Dh(t),s=(await kg()).transaction($s,"readwrite"),i=s.objectStore($s),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&r1(t,a.fid),a}/**
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
 */async function Rg(t){let e;const n=await Vh(t.appConfig,r=>{const s=dO(r),i=fO(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Tp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function dO(t){const e=t||{fid:iO(),registrationStatus:0};return o1(e)}function fO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Bs.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=pO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mO(t)}:{installationEntry:e}}async function pO(t,e){try{const n=await nO(t,e);return Fc(t.appConfig,n)}catch(n){throw QS(n)&&n.customData.serverCode===409?await i1(t.appConfig):await Fc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function mO(t){let e=await Q0(t.appConfig);for(;e.registrationStatus===1;)await t1(100),e=await Q0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Rg(t);return r||n}return e}function Q0(t){return Vh(t,e=>{if(!e)throw Bs.create("installation-not-found");return o1(e)})}function o1(t){return gO(t)?{fid:t.fid,registrationStatus:0}:t}function gO(t){return t.registrationStatus===1&&t.registrationTime+WS<Date.now()}/**
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
 */async function yO({appConfig:t,heartbeatServiceProvider:e},n){const r=_O(t,n),s=Z4(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:HS,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},u=await e1(()=>fetch(r,a));if(u.ok){const c=await u.json();return XS(c)}else throw await JS("Generate Auth Token",u)}function _O(t,{fid:e}){return`${YS(t)}/${e}/authTokens:generate`}/**
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
 */async function Pg(t,e=!1){let n;const r=await Vh(t.appConfig,i=>{if(!a1(i))throw Bs.create("not-registered");const o=i.authToken;if(!e&&EO(o))return i;if(o.requestStatus===1)return n=vO(t,e),i;{if(!navigator.onLine)throw Bs.create("app-offline");const a=TO(i);return n=wO(t,a),a}});return n?await n:r.authToken}async function vO(t,e){let n=await Y0(t.appConfig);for(;n.authToken.requestStatus===1;)await t1(100),n=await Y0(t.appConfig);const r=n.authToken;return r.requestStatus===0?Pg(t,e):r}function Y0(t){return Vh(t,e=>{if(!a1(e))throw Bs.create("not-registered");const n=e.authToken;return xO(n)?{...e,authToken:{requestStatus:0}}:e})}async function wO(t,e){try{const n=await yO(t,e),r={...e,authToken:n};return await Fc(t.appConfig,r),n}catch(n){if(QS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await i1(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Fc(t.appConfig,r)}throw n}}function a1(t){return t!==void 0&&t.registrationStatus===2}function EO(t){return t.requestStatus===2&&!IO(t)}function IO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Q4}function TO(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function xO(t){return t.requestStatus===1&&t.requestTime+WS<Date.now()}/**
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
 */async function SO(t){const e=t,{installationEntry:n,registrationPromise:r}=await Rg(e);return r?r.catch(console.error):Pg(e).catch(console.error),n.fid}/**
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
 */async function AO(t,e=!1){const n=t;return await kO(n),(await Pg(n,e)).token}async function kO(t){const{registrationPromise:e}=await Rg(t);e&&await e}/**
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
 */function RO(t){if(!t||!t.options)throw Wd("App Configuration");if(!t.name)throw Wd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Wd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Wd(t){return Bs.create("missing-app-config-values",{valueName:t})}/**
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
 */const l1="installations",PO="installations-internal",CO=t=>{const e=t.getProvider("app").getImmediate(),n=RO(e),r=Gs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},bO=t=>{const e=t.getProvider("app").getImmediate(),n=Gs(e,l1).getImmediate();return{getId:()=>SO(n),getToken:s=>AO(n,s)}};function NO(){cn(new Yt(l1,CO,"PUBLIC")),cn(new Yt(PO,bO,"PRIVATE"))}NO();kt(KS,Ag);kt(KS,Ag,"esm2020");/**
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
 */const DO="/firebase-messaging-sw.js",VO="/firebase-cloud-messaging-push-scope",u1="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",OO="https://fcmregistrations.googleapis.com/v1",c1="google.c.a.c_id",MO="google.c.a.c_l",LO="google.c.a.ts",jO="google.c.a.e",X0=1e4;var J0;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(J0||(J0={}));/**
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
 */var nl;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(nl||(nl={}));/**
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
 */function Nn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function FO(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const Hd="fcm_token_details_db",UO=5,Z0="fcm_token_object_Store";async function zO(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Hd))return null;let e=null;return(await ih(Hd,UO,{upgrade:async(r,s,i,o)=>{if(s<2||!r.objectStoreNames.contains(Z0))return;const a=o.objectStore(Z0),u=await a.index("fcmSenderId").get(t);if(await a.clear(),!!u){if(s===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:c.createTime??Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:Nn(c.vapidKey)}}}else if(s===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Nn(c.auth),p256dh:Nn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Nn(c.vapidKey)}}}else if(s===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Nn(c.auth),p256dh:Nn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Nn(c.vapidKey)}}}}}})).close(),await Nd(Hd),await Nd("fcm_vapid_details_db"),await Nd("undefined"),BO(e)?e:null}function BO(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const $O="firebase-messaging-database",qO=1,rl="firebase-messaging-store";let Gd=null;function h1(){return Gd||(Gd=ih($O,qO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rl)}}})),Gd}async function KO(t){const e=d1(t),r=await(await h1()).transaction(rl).objectStore(rl).get(e);if(r)return r;{const s=await zO(t.appConfig.senderId);if(s)return await Cg(t,s),s}}async function Cg(t,e){const n=d1(t),s=(await h1()).transaction(rl,"readwrite");return await s.objectStore(rl).put(e,n),await s.done,e}function d1({appConfig:t}){return t.appId}/**
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
 */const WO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ut=new Hs("messaging","Messaging",WO);/**
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
 */async function HO(t,e){const n=await Ng(t),r=f1(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(bg(t.appConfig),s)).json()}catch(o){throw ut.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw ut.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw ut.create("token-subscribe-no-token");return i.token}async function GO(t,e){const n=await Ng(t),r=f1(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${bg(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw ut.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw ut.create("token-update-failed",{errorInfo:o})}if(!i.token)throw ut.create("token-update-no-token");return i.token}async function QO(t,e){const r={method:"DELETE",headers:await Ng(t)};try{const i=await(await fetch(`${bg(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw ut.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw ut.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function bg({projectId:t}){return`${OO}/projects/${t}/registrations`}async function Ng({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function f1({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==u1&&(s.web.applicationPubKey=r),s}/**
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
 */const YO=7*24*60*60*1e3;async function XO(t){const e=await ZO(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Nn(e.getKey("auth")),p256dh:Nn(e.getKey("p256dh"))},r=await KO(t.firebaseDependencies);if(r){if(eM(r.subscriptionOptions,n))return Date.now()>=r.createTime+YO?JO(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await QO(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return ew(t.firebaseDependencies,n)}else return ew(t.firebaseDependencies,n)}async function JO(t,e){try{const n=await GO(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await Cg(t.firebaseDependencies,r),n}catch(n){throw n}}async function ew(t,e){const r={token:await HO(t,e),createTime:Date.now(),subscriptionOptions:e};return await Cg(t,r),r.token}async function ZO(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:FO(e)})}function eM(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
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
 */function tw(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return tM(e,t),nM(e,t),rM(e,t),e}function tM(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function nM(t,e){e.data&&(t.data=e.data)}function rM(t,e){var s,i,o,a;if(!e.fcmOptions&&!((s=e.notification)!=null&&s.click_action))return;t.fcmOptions={};const n=((i=e.fcmOptions)==null?void 0:i.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(a=e.fcmOptions)==null?void 0:a.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
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
 */function sM(t){return typeof t=="object"&&!!t&&c1 in t}/**
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
 */function iM(t){if(!t||!t.options)throw Qd("App Configuration Object");if(!t.name)throw Qd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Qd(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Qd(t){return ut.create("missing-app-config-values",{valueName:t})}/**
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
 */class oM{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=iM(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function aM(t){try{t.swRegistration=await navigator.serviceWorker.register(DO,{scope:VO}),t.swRegistration.update().catch(()=>{}),await lM(t.swRegistration)}catch(e){throw ut.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function lM(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${X0} ms`)),X0),s=t.installing||t.waiting;t.active?(clearTimeout(r),e()):s?s.onstatechange=i=>{var o;((o=i.target)==null?void 0:o.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
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
 */async function uM(t,e){if(!e&&!t.swRegistration&&await aM(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw ut.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function cM(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=u1)}/**
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
 */async function p1(t,e){if(!navigator)throw ut.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ut.create("permission-blocked");return await cM(t,e==null?void 0:e.vapidKey),await uM(t,e==null?void 0:e.serviceWorkerRegistration),XO(t)}/**
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
 */async function hM(t,e,n){const r=dM(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[c1],message_name:n[MO],message_time:n[LO],message_device_time:Math.floor(Date.now()/1e3)})}function dM(t){switch(t){case nl.NOTIFICATION_CLICKED:return"notification_open";case nl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function fM(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===nl.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(tw(n)):t.onMessageHandler.next(tw(n)));const r=n.data;sM(r)&&r[jO]==="1"&&await hM(t,n.messageType,r)}const nw="@firebase/messaging",rw="0.12.23";/**
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
 */const pM=t=>{const e=new oM(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>fM(e,n)),e},mM=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>p1(e,r)}};function gM(){cn(new Yt("messaging",pM,"PUBLIC")),cn(new Yt("messaging-internal",mM,"PRIVATE")),kt(nw,rw),kt(nw,rw,"esm2020")}/**
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
 */async function yM(){try{await UI()}catch{return!1}return typeof window<"u"&&Em()&&sP()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function _M(t,e){if(!navigator)throw ut.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function vM(t=oh()){return yM().then(e=>{if(!e)throw ut.create("unsupported-browser")},e=>{throw ut.create("indexed-db-unsupported")}),Gs(De(t),"messaging").getImmediate()}async function wM(t,e){return t=De(t),p1(t,e)}function EM(t,e){return t=De(t),_M(t,e)}gM();const IM={apiKey:"AIzaSyAPQcb4IX_KhjsteedOIbS4Szh1_nGP3t8",authDomain:"app-timbrature-zerosei.firebaseapp.com",projectId:"app-timbrature-zerosei",storageBucket:"app-timbrature-zerosei.firebasestorage.app",messagingSenderId:"190325273812",appId:"1:190325273812:web:177a253b25d8c64f963741"},Oh=$I(IM),Sl=LN(Oh),Ce=n4(Oh);q4(Oh);const m1=vM(Oh),TM="BOzcllpaQdmjSEfaF69mLtGi2ylgZDcnaYkdWq4UJ1A8TEzKf__t2kZppdt91zdteQquvFkYJkW78cmhBikm7xs";r4(Ce).catch(t=>{t.code==="failed-precondition"?console.warn("Multiple tabs open, persistence can only be enabled in one tab at a time."):t.code==="unimplemented"&&console.warn("The current browser does not support persistence.")});const g1=async()=>(await Nh(mo(Ce,"users"))).docs.map(e=>e.data()),na=async t=>(await Nh(mo(Ce,"users",t,"shifts"))).docs.map(n=>n.data()),sw=async(t,e)=>{const n=vt(Ce,"users",t,"shifts",e.id);await ei(n,e)},xM=async(t,e)=>{const n=vt(Ce,"users",t,"shifts",e);await Mc(n);const r=mo(Ce,"users",t,"shifts"),s=Eg(r,LS("id","==",e)),o=(await Nh(s)).docs.map(a=>Mc(a.ref));await Promise.all(o)},SM=async(t,e)=>{const n=vt(Ce,"activeShifts",t);await ei(n,e)},AM=async t=>{console.log("getActiveShift called for userId:",t);const e=vt(Ce,"activeShifts",t),n=await xl(e);return console.log("getActiveShift - snap.exists():",n.exists()),n.exists()&&console.log("getActiveShift - data:",n.data()),n.exists()?n.data():null},kM=async t=>{const e=vt(Ce,"activeShifts",t);await Mc(e)},RM=t=>{const e=mo(Ce,"activeShifts");return FS(e,async n=>{const r=[];for(const s of n.docs){const i=s.data(),o=await xl(vt(Ce,"users",s.id));o.exists()&&r.push({user:o.data(),shift:i})}t(r)})},PM=async t=>{const e=vt(Ce,"assignedShifts","all");await ei(e,{shifts:t})},CM=async()=>{const t=vt(Ce,"assignedShifts","all"),e=await xl(t);return e.exists()?e.data().shifts||[]:[]},bM=async(t,e,n,r)=>{const s={id:`doc_${Date.now()}`,userId:t,fileName:e,fileUrl:n,uploadDate:new Date().toISOString(),uploadedBy:r};return await ei(vt(Ce,"users",t,"documents",s.id),s),s},NM=async t=>{const e=Eg(mo(Ce,"users",t,"documents"));return(await Nh(e)).docs.map(r=>r.data()).sort((r,s)=>new Date(s.uploadDate).getTime()-new Date(r.uploadDate).getTime())},DM=async(t,e)=>{await Mc(vt(Ce,"users",t,"documents",e))},iw=()=>{const[t,e]=K.useState([]),[n,r]=K.useState(new Date);K.useEffect(()=>{const o=RM(a=>{a.sort((u,c)=>new Date(c.shift.startTime).getTime()-new Date(u.shift.startTime).getTime()),e(a)});return()=>{o()}},[]),K.useEffect(()=>{const o=setInterval(()=>{r(new Date)},1e3);return()=>clearInterval(o)},[]);const s=o=>{const a=new Date(o),u=n.getTime()-a.getTime(),c=Math.floor(u/(1e3*60*60)),d=Math.floor(u%(1e3*60*60)/(1e3*60)),m=Math.floor(u%(1e3*60)/1e3);return`${c}h ${d.toString().padStart(2,"0")}m ${m.toString().padStart(2,"0")}s`},i=o=>o.type&&{standard:"Standard",cassa:"Cassa",macchina_propria:"Macchina Propria",macchina_pizzeria:"Macchina Pizzeria"}[o.type]||null;return t.length===0?f.jsxs("div",{className:"text-center py-16",children:[f.jsx("div",{className:"w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6",children:f.jsx(Cs,{className:"w-10 h-10 text-slate-600"})}),f.jsx("h3",{className:"text-xl font-bold text-slate-400 mb-2",children:"Nessuno in Servizio"}),f.jsx("p",{className:"text-slate-500",children:"Al momento non ci sono dipendenti al lavoro."})]}):f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-6",children:[f.jsxs("h2",{className:"text-xl font-bold flex items-center gap-2 text-white",children:[f.jsx(Cs,{className:"text-emerald-400"}),"Dipendenti in Servizio"]}),f.jsxs("div",{className:"flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full",children:[f.jsx("span",{className:"w-2 h-2 bg-emerald-500 rounded-full animate-pulse"}),f.jsxs("span",{className:"text-emerald-400 text-sm font-medium",children:[t.length," ",t.length===1?"persona":"persone"]})]})]}),f.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:t.map(({user:o,shift:a})=>{const u=i(a),c=new Date(a.startTime);return f.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/50 rounded-2xl p-5 hover:bg-slate-800/60 hover:border-emerald-500/30 transition-all",children:[f.jsx("div",{className:"flex items-start justify-between mb-4",children:f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/20",children:[o.name.charAt(0),o.surname.charAt(0)]}),f.jsxs("div",{children:[f.jsxs("h3",{className:"font-bold text-white text-lg",children:[o.name," ",o.surname]}),f.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[f.jsx("span",{className:"w-2 h-2 bg-emerald-500 rounded-full animate-pulse"}),f.jsx("span",{className:"text-emerald-400 text-xs font-semibold uppercase tracking-wide",children:"In Servizio"})]})]})]})}),f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"flex items-center gap-2 text-slate-300",children:[f.jsx("svg",{className:"w-4 h-4 text-indigo-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),f.jsxs("span",{className:"text-sm",children:["Iniziato alle ",f.jsx("span",{className:"font-semibold text-white",children:jr(c)})]})]}),f.jsxs("div",{className:"flex items-center gap-2 text-slate-300",children:[f.jsx("svg",{className:"w-4 h-4 text-emerald-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),f.jsxs("span",{className:"text-sm",children:["Durata: ",f.jsx("span",{className:"font-mono font-semibold text-emerald-400",children:s(a.startTime)})]})]}),u&&f.jsxs("div",{className:"flex items-center gap-2 text-slate-300",children:[f.jsx("svg",{className:"w-4 h-4 text-yellow-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"})}),f.jsx("span",{className:"bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs px-2 py-0.5 rounded-full font-medium",children:u})]})]})]},o.id)})})]})},VM=async(t,e,n,r=!1)=>{const s=`${t}.${e}@example.com`.toLowerCase(),o=(await vb(Sl,s,n)).user,a={id:o.uid,name:t,surname:e,email:s,password:n,isAdmin:r};return await ei(vt(Ce,"users",o.uid),a),a},OM=async(t,e)=>{const n=Sl.currentUser;if(!n)throw new Error("No authenticated user");n.email,await Eb(n,e)},MM=async(t,e,n)=>{const r=`${t}.${e}@example.com`.toLowerCase(),s=await wb(Sl,r,n),i=await xl(vt(Ce,"users",s.user.uid));if(!i.exists())throw new Error("User profile not found");return i.data()},LM=async()=>{await Ab(Sl)},jM=t=>Sb(Sl,async e=>{if(e){const n=await xl(vt(Ce,"users",e.uid));t(n.exists()?n.data():null)}else t(null)}),FM=({user:t})=>{const[e,n]=K.useState(""),[r,s]=K.useState(null),i=async()=>{if(t)try{await OM(t.email,e),s("Password aggiornata con successo")}catch{s("Errore aggiornamento password")}};return f.jsxs("div",{className:"max-w-xl mx-auto p-6 bg-gray-800 rounded-xl shadow-lg",children:[f.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Profilo"}),t&&f.jsxs("div",{className:"mb-4 text-gray-200",children:[f.jsxs("p",{children:[f.jsx("strong",{children:"Nome:"})," ",t.name," ",t.surname]}),f.jsxs("p",{children:[f.jsx("strong",{children:"Email:"})," ",t.email]})]}),f.jsxs("div",{className:"mb-4",children:[f.jsx("input",{type:"password",placeholder:"Nuova password",className:"w-full p-2 bg-gray-700 text-white rounded",value:e,onChange:o=>n(o.target.value)}),f.jsx("button",{className:"mt-2 w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded",onClick:i,children:"Cambia password"})]}),r&&f.jsx("p",{className:"text-green-400",children:r})]})},UM=["Lun","Mar","Mer","Gio","Ven","Sab","Dom"],zM=({shifts:t,assignedShifts:e,users:n})=>{const[r,s]=K.useState(()=>{const a=new Date,u=a.getDay(),c=a.getDate()-u+(u===0?-6:1),d=new Date(a.setDate(c));return d.setHours(0,0,0,0),d}),i=a=>{s(u=>{const c=new Date(u);return c.setDate(c.getDate()+a*7),c})},o=K.useMemo(()=>Array.from({length:7},(a,u)=>{const c=new Date(r);return c.setDate(c.getDate()+u),c}),[r]);return f.jsxs("div",{className:"bg-gray-800 p-6 rounded-2xl shadow-lg",children:[f.jsxs("div",{className:"flex items-center justify-between mb-6",children:[f.jsx("button",{onClick:()=>i(-1),className:"p-2 rounded-full hover:bg-gray-700 transition",children:f.jsx(ul,{})}),f.jsxs("h2",{className:"text-xl font-bold text-center capitalize",children:[r.toLocaleDateString("it-IT",{month:"long",year:"numeric"}),f.jsxs("span",{className:"text-sm text-slate-400 ml-2 font-normal",children:["(",o[0].getDate()," - ",o[6].getDate(),")"]})]}),f.jsx("button",{onClick:()=>i(1),className:"p-2 rounded-full hover:bg-gray-700 transition",children:f.jsx(nh,{})})]}),f.jsx("div",{className:"space-y-4",children:o.map((a,u)=>{const c=new Date().toDateString()===a.toDateString(),d=`${a.getFullYear()}-${(a.getMonth()+1).toString().padStart(2,"0")}-${a.getDate().toString().padStart(2,"0")}`,m=n.map(g=>{const I=t.find(P=>{if(P.userId!==g.id)return!1;const C=new Date(P.startTime);return C.getDate()===a.getDate()&&C.getMonth()===a.getMonth()&&C.getFullYear()===a.getFullYear()}),x=e.find(P=>P.userId===g.id&&P.date===d);return!I&&!x?null:{user:g,actualShift:I,assignedShift:x}}).filter(g=>g!==null);return f.jsxs("div",{className:`p-4 rounded-xl border ${c?"bg-slate-700/50 border-blue-500/50":"bg-slate-800/50 border-slate-700"}`,children:[f.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[f.jsx("span",{className:`text-lg font-bold capitalize ${c?"text-blue-400":"text-slate-200"}`,children:UM[u]}),f.jsx("span",{className:"text-slate-400 text-sm",children:a.toLocaleDateString("it-IT",{day:"numeric",month:"long"})})]}),m.length>0?f.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3",children:m.map(({user:g,actualShift:I,assignedShift:x})=>{let P=null,C="";return I?(P=f.jsxs(f.Fragment,{children:[jr(new Date(I.startTime))," - ",I.endTime?jr(new Date(I.endTime)):"..."]}),C="bg-indigo-500/20 border-indigo-500/30 text-indigo-200"):x&&(P=f.jsx(f.Fragment,{children:x.startTime}),C="bg-slate-600/20 border-slate-600/30 text-slate-300 border-dashed"),f.jsxs("div",{className:`flex items-center justify-between p-2 rounded-lg border ${C}`,children:[f.jsxs("div",{className:"flex items-center gap-2 overflow-hidden",children:[f.jsxs("div",{className:"w-6 h-6 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white border border-slate-600",children:[g.name.charAt(0),g.surname.charAt(0)]}),f.jsxs("span",{className:"font-medium truncate text-sm",children:[g.name," ",g.surname]})]}),f.jsx("div",{className:"text-xs font-bold ml-2 whitespace-nowrap",children:P})]},g.id)})}):f.jsx("div",{className:"text-slate-500 text-sm italic py-2",children:"Nessun turno programmato"})]},u)})})]})},BM=({assignedShifts:t})=>{const[e,n]=K.useState([]),[r,s]=K.useState([]);return K.useEffect(()=>{(async()=>{const o=await g1();n(o);const a=o.map(async d=>(await na(d.id)).map(g=>({...g,userId:d.id}))),c=(await Promise.all(a)).flat();s(c)})()},[]),f.jsxs("div",{className:"space-y-6",children:[f.jsxs("header",{children:[f.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Panoramica Turni"}),f.jsx("p",{className:"text-slate-400",children:"Visualizza i turni settimanali di tutti i dipendenti."})]}),f.jsx("div",{className:"glass-panel p-6 rounded-3xl shadow-lg",children:f.jsx(zM,{shifts:r,assignedShifts:t,users:e})})]})},$M=t=>{const e=t.getFullYear(),n=(t.getMonth()+1).toString().padStart(2,"0"),r=t.getDate().toString().padStart(2,"0");return`${e}-${n}-${r}`},qM=({allUsers:t,assignedShifts:e,onSaveShifts:n})=>{const[r,s]=K.useState(new Date),[i,o]=K.useState([]),[a,u]=K.useState(!1);K.useEffect(()=>{o(e)},[e]);const c=C=>{s(w=>{const _=new Date(w);return _.setDate(1),_.setMonth(_.getMonth()+C),_})},d=K.useMemo(()=>{const C=r.getFullYear(),w=r.getMonth(),_=new Date(C,w+1,0).getDate();return Array.from({length:_},(E,V)=>new Date(C,w,V+1))},[r]),m=K.useMemo(()=>{const C=new Map;return d.forEach(w=>{const _=$M(w);C.set(_,[])}),i.forEach(w=>{const _=new Date(w.date);if(_.getFullYear()===r.getFullYear()&&_.getMonth()===r.getMonth()){const E=w.date;if(C.has(E)){const V=C.get(E);C.set(E,[...V,w])}}}),C},[i,r,d]),g=C=>{const w={id:`shift_${Date.now()}_${Math.random()}`,date:C,userId:"",startTime:"09:00"};o(_=>[..._,w])},I=(C,w,_)=>{o(E=>E.map(V=>V.id===C?{...V,[w]:_}:V))},x=C=>{o(w=>w.filter(_=>_.id!==C))},P=()=>{u(!0);const C=e.filter(_=>{const E=new Date(_.date);return E.getFullYear()!==r.getFullYear()||E.getMonth()!==r.getMonth()}),w=i.filter(_=>{const E=new Date(_.date);return E.getFullYear()===r.getFullYear()&&E.getMonth()===r.getMonth()});n([...C,...w]),setTimeout(()=>u(!1),1e3)};return f.jsxs("div",{className:"bg-gray-800 p-6 rounded-2xl shadow-lg",children:[f.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between mb-4",children:[f.jsxs("div",{className:"flex items-center",children:[f.jsx("button",{onClick:()=>c(-1),className:"p-2 rounded-full hover:bg-gray-700 transition",children:f.jsx(ul,{})}),f.jsx("h2",{className:"text-xl font-bold text-center capitalize w-48",children:r.toLocaleString("it-IT",{month:"long",year:"numeric"})}),f.jsx("button",{onClick:()=>c(1),className:"p-2 rounded-full hover:bg-gray-700 transition",children:f.jsx(nh,{})})]}),f.jsxs("button",{onClick:P,disabled:a,className:"w-full sm:w-auto mt-4 sm:mt-0 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 disabled:bg-gray-500",children:[f.jsx(xI,{}),a?"Salvato!":"Salva Modifiche"]})]}),f.jsx("div",{className:"space-y-6 max-h-[60vh] overflow-y-auto pr-2",children:Array.from(m.entries()).sort(([C],[w])=>new Date(C).getTime()-new Date(w).getTime()).map(([C,w])=>f.jsxs("div",{className:"bg-gray-900/50 p-4 rounded-lg",children:[f.jsx("h4",{className:"font-bold text-lg mb-3 text-blue-300",children:new Date(C.replace(/-/g,"/")).toLocaleDateString("it-IT",{weekday:"long",day:"numeric"})}),f.jsx("div",{className:"space-y-2",children:w.map(_=>f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-[1fr,auto,auto] gap-2 items-center",children:[f.jsxs("select",{value:_.userId,onChange:E=>I(_.id,"userId",E.target.value),className:"w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500",children:[f.jsx("option",{value:"",children:"Seleziona Utente"}),t.map(E=>f.jsxs("option",{value:E.id,children:[E.name," ",E.surname]},E.id))]}),f.jsx("input",{type:"time",value:_.startTime,onChange:E=>I(_.id,"startTime",E.target.value),className:"w-full sm:w-auto px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"}),f.jsx("button",{onClick:()=>x(_.id),className:"p-2 text-gray-400 hover:text-red-400 transition-colors",children:f.jsx(rh,{})})]},_.id))}),f.jsx("button",{onClick:()=>g(C),className:"text-blue-400 hover:text-blue-300 font-semibold mt-3 text-sm",children:"+ Aggiungi Turno"})]},C))})]})},KM=({allUsers:t,assignedShifts:e,onSaveShifts:n})=>f.jsxs("div",{className:"space-y-6",children:[f.jsxs("header",{children:[f.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Pianificazione Turni"}),f.jsx("p",{className:"text-slate-400",children:"Gestisci e assegna i turni ai dipendenti."})]}),f.jsx("div",{className:"glass-panel p-6 rounded-3xl shadow-lg",children:f.jsx(qM,{allUsers:t,assignedShifts:e,onSaveShifts:n})})]}),xp=async(t,e,n,r)=>{try{const s={id:`notif_${Date.now()}`,type:t,userId:e,userName:n,message:r,timestamp:new Date().toISOString(),read:!1},i=vt(Ce,"notifications",s.id);await ei(i,s),console.log("Notification created:",s)}catch(s){console.error("Error creating notification:",s)}},ow=t=>{try{const e=new Date(Date.now()-3e5),n=Eg(mo(Ce,"notifications"),LS("timestamp",">=",e.toISOString()),p4("timestamp","desc"),m4(50));return FS(n,s=>{s.docChanges().forEach(i=>{if(i.type==="added"){const o=i.doc.data();t(o)}})})}catch(e){return console.error("Error listening to notifications:",e),()=>{}}},aw=(t,e)=>{"Notification"in window&&Notification.permission==="granted"&&new Notification(t,{body:e,icon:"/icon-192.png",badge:"/icon-192.png"})},WM=({user:t,allUsers:e})=>{const[n,r]=K.useState(t.isAdmin?null:t),[s,i]=K.useState([]),[o,a]=K.useState(!1),[u,c]=K.useState(null),[d,m]=K.useState(""),[g,I]=K.useState("");K.useEffect(()=>{t.isAdmin||r(t)},[t]),K.useEffect(()=>{n?x(n.id):i([])},[n]);const x=async w=>{try{const _=await NM(w);i(_)}catch(_){console.error("Error loading documents:",_)}},P=async()=>{if(!n||!d.trim()||!g.trim()){c("Inserisci sia il nome che il link del documento.");return}c(null);try{await bM(n.id,d.trim(),g.trim(),t.id),await x(n.id),await xp("document_upload",n.id,`${n.name} ${n.surname}`,`Nuovo documento disponibile: ${d.trim()}`),m(""),I(""),a(!1)}catch(w){console.error("Add failed:",w),c("Errore durante l'aggiunta del documento.")}},C=async w=>{if(!(!n||!confirm("Sei sicuro di voler eliminare questo documento?")))try{await DM(n.id,w),i(_=>_.filter(E=>E.id!==w))}catch(_){console.error("Delete failed:",_),alert("Errore durante l'eliminazione.")}};return f.jsxs("div",{className:"space-y-6",children:[f.jsxs("header",{children:[f.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Documenti"}),f.jsx("p",{className:"text-slate-400",children:t.isAdmin?"Aggiungi link ai documenti dei dipendenti (es. buste paga su Google Drive).":"Visualizza e scarica i tuoi documenti."})]}),f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[t.isAdmin&&e&&f.jsxs("div",{className:"lg:col-span-1 glass-panel p-6 rounded-3xl shadow-lg h-fit",children:[f.jsxs("h2",{className:"text-xl font-bold mb-4 flex items-center gap-2 text-white",children:[f.jsx(Fa,{className:"text-indigo-400"})," Dipendenti"]}),f.jsx("div",{className:"space-y-2 max-h-[600px] overflow-y-auto pr-2",children:e.map(w=>f.jsxs("div",{onClick:()=>r(w),className:`p-3 rounded-xl cursor-pointer transition-all flex items-center gap-3 border ${(n==null?void 0:n.id)===w.id?"bg-indigo-500/20 border-indigo-500/50 text-white":"bg-slate-800/40 border-slate-700/50 text-slate-300 hover:bg-slate-800/80"}`,children:[f.jsxs("div",{className:"w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold",children:[w.name.charAt(0),w.surname.charAt(0)]}),f.jsxs("span",{className:"truncate font-medium",children:[w.name," ",w.surname]})]},w.id))})]}),f.jsx("div",{className:`${t.isAdmin?"lg:col-span-2":"lg:col-span-3"} glass-panel p-6 rounded-3xl shadow-lg`,children:n?f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4",children:[f.jsx("div",{children:f.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[f.jsx(Tu,{className:"text-indigo-400"}),"Documenti di ",n.name]})}),t.isAdmin&&!o&&f.jsxs("button",{onClick:()=>a(!0),className:"flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 transition-all",children:[f.jsx(NR,{className:"w-5 h-5"})," Aggiungi Documento"]})]}),o&&t.isAdmin&&f.jsxs("div",{className:"mb-6 p-4 bg-slate-800/40 border border-slate-700/50 rounded-xl space-y-3",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-medium text-slate-300 mb-2",children:"Nome Documento"}),f.jsx("input",{type:"text",value:d,onChange:w=>m(w.target.value),placeholder:"es. Busta Paga Novembre 2024",className:"w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-medium text-slate-300 mb-2",children:"Link Documento"}),f.jsx("input",{type:"url",value:g,onChange:w=>I(w.target.value),placeholder:"https://drive.google.com/file/d/...",className:"w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"})]}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx("button",{onClick:P,className:"flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors",children:"Salva"}),f.jsx("button",{onClick:()=>{a(!1),m(""),I(""),c(null)},className:"px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-colors",children:"Annulla"})]})]}),u&&f.jsx("div",{className:"mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm",children:u}),f.jsx("div",{className:"space-y-3",children:s.length>0?s.map(w=>f.jsxs("div",{className:"flex items-center justify-between p-4 bg-slate-800/40 border border-slate-700/50 rounded-xl hover:bg-slate-800/60 transition-colors group",children:[f.jsxs("div",{className:"flex items-center gap-4 overflow-hidden",children:[f.jsx("div",{className:"w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center text-indigo-400",children:f.jsx(Tu,{className:"w-6 h-6"})}),f.jsxs("div",{className:"min-w-0",children:[f.jsx("p",{className:"font-medium text-slate-200 truncate",children:w.fileName}),f.jsxs("p",{className:"text-xs text-slate-500",children:["Aggiunto il ",new Date(w.uploadDate).toLocaleDateString("it-IT")]})]})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("a",{href:w.fileUrl,target:"_blank",rel:"noopener noreferrer",className:"p-2 text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-colors",title:"Apri",children:f.jsx(bR,{className:"w-5 h-5"})}),t.isAdmin&&f.jsx("button",{onClick:()=>C(w.id),className:"p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors",title:"Elimina",children:f.jsx(rh,{className:"w-5 h-5"})})]})]},w.id)):f.jsxs("div",{className:"text-center py-12 text-slate-500",children:[f.jsx(Tu,{className:"w-12 h-12 mx-auto mb-3 opacity-20"}),f.jsx("p",{children:"Nessun documento presente."})]})})]}):f.jsxs("div",{className:"text-center py-20 text-slate-500",children:[f.jsx(Fa,{className:"w-16 h-16 mx-auto mb-4 opacity-20"}),f.jsx("p",{className:"text-lg",children:"Seleziona un dipendente per gestire i documenti."})]})})]})]})},HM=({user:t,currentSection:e,onNavigate:n,onLogout:r})=>{const[s,i]=K.useState(!1),o=t==null?void 0:t.isAdmin,a=[...o?[{id:"live",label:"Live",icon:f.jsx(Cs,{className:"w-5 h-5"})},{id:"users",label:"Utenti",icon:f.jsx(Fa,{className:"w-5 h-5"})},{id:"planner",label:"Pianificazione",icon:f.jsx(TI,{className:"w-5 h-5"})}]:[{id:"dashboard",label:"Timbratrice",icon:f.jsx(Cs,{className:"w-5 h-5"})}],{id:"globalShifts",label:"Panoramica Turni",icon:f.jsx(wR,{className:"w-5 h-5"})},{id:"documents",label:"Documenti",icon:f.jsx(Tu,{className:"w-5 h-5"})},{id:"profile",label:"Profilo",icon:f.jsx(AR,{className:"w-5 h-5"})}],u=()=>i(!s);return f.jsxs(f.Fragment,{children:[f.jsx("button",{onClick:u,className:"lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-slate-800/50 text-white backdrop-blur-sm border border-slate-700/50",children:s?f.jsx(RR,{className:"w-6 h-6"}):f.jsx(kR,{className:"w-6 h-6"})}),s&&f.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden",onClick:()=>i(!1)}),f.jsx("aside",{className:`
                fixed inset-y-0 left-0 z-50 w-72 
                bg-slate-900/95 backdrop-blur-xl border-r border-slate-800/50
                transform transition-transform duration-300 ease-in-out
                ${s?"translate-x-0":"-translate-x-full"} 
                lg:translate-x-0 lg:block
            `,children:f.jsxs("div",{className:"flex flex-col h-full p-6",children:[f.jsxs("div",{className:"flex items-center gap-3 px-2 mb-10",children:[f.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20",children:f.jsx("span",{className:"text-white font-bold text-xl",children:"Z"})}),f.jsx("h1",{className:"text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400",children:"ZeroSei"})]}),f.jsx("nav",{className:"flex-1 space-y-2",children:a.map(c=>f.jsxs("button",{onClick:()=>{n(c.id),i(!1)},className:`
                                    w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                                    ${e===c.id?"bg-indigo-500/20 text-indigo-300 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]":"text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 hover:translate-x-1"}
                                `,children:[c.icon,f.jsx("span",{className:"font-medium",children:c.label})]},c.id))}),t&&f.jsxs("div",{className:"pt-6 border-t border-slate-800/50 mt-auto",children:[f.jsxs("div",{className:"flex items-center gap-3 px-2 mb-4",children:[f.jsxs("div",{className:"w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold border border-slate-600",children:[t.name.charAt(0),t.surname.charAt(0)]}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsxs("p",{className:"text-sm font-medium text-white truncate",children:[t.name," ",t.surname]}),f.jsx("p",{className:"text-xs text-slate-500 truncate",children:o?"Amministratore":"Dipendente"})]})]}),f.jsxs("button",{onClick:r,className:"w-full flex items-center gap-2 text-red-400 hover:bg-red-500/10 px-4 py-2 rounded-lg transition-colors text-sm font-medium group",children:[f.jsx(IR,{className:"w-4 h-4 group-hover:scale-110 transition-transform"}),"Logout"]})]})]})})]})},GM=({children:t,user:e,currentSection:n,onNavigate:r,onLogout:s})=>f.jsxs("div",{className:"flex min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-black text-slate-200 font-sans",children:[e&&f.jsx(HM,{user:e,currentSection:n,onNavigate:r,onLogout:s}),f.jsx("main",{className:`flex-1 overflow-auto transition-all duration-300 ${e?"lg:ml-72":""} p-4 lg:p-8`,children:f.jsx("div",{className:"max-w-7xl mx-auto",children:t})})]}),lw=async t=>{try{if(!("Notification"in window))return console.warn("This browser does not support notifications"),null;if(await Notification.requestPermission()==="granted"){console.log("Notification permission granted");const n=await wM(m1,{vapidKey:TM});return n?(console.log("FCM Token:",n),await QM(t,n),n):(console.warn("No registration token available"),null)}else return console.warn("Notification permission denied"),null}catch(e){return console.error("Error getting notification permission:",e),null}},QM=async(t,e)=>{try{const n=vt(Ce,"users",t);await ei(n,{fcmToken:e},{merge:!0}),console.log("FCM token saved to Firestore")}catch(n){console.error("Error saving FCM token:",n)}},uw=()=>{EM(m1,t=>{if(console.log("Foreground message received:",t),t.notification){const{title:e,body:n}=t.notification;Notification.permission==="granted"&&new Notification(e||"Notifica",{body:n||"",icon:"/icon-192.png",badge:"/icon-192.png"})}})},YM=()=>{const[t,e]=K.useState(null),[n,r]=K.useState([]),[s,i]=K.useState("login"),[o,a]=K.useState([]),[u,c]=K.useState(null),[d,m]=K.useState([]),[g,I]=K.useState("dashboard"),[x,P]=K.useState(null),[C,w]=K.useState(null),[_,E]=K.useState(null),[V,L]=K.useState(null),[j,T]=K.useState(!1),v=K.useCallback(async()=>{const $=await g1();r($)},[]);K.useEffect(()=>{const $=jM(H=>{e(H),H&&(H.isAdmin?I("live"):I(Y=>Y==="dashboard"?"dashboard":Y))});return v(),()=>{$()}},[v]),K.useEffect(()=>{try{const $=localStorage.getItem("rememberedCredentials");$&&L(JSON.parse($))}catch($){console.error("Failed to load remembered credentials",$)}T(!0)},[]),K.useEffect(()=>{(async()=>{try{const H=await CM();m(H)}catch(H){console.error("Failed to load assigned shifts:",H)}})()},[]);const S=K.useCallback(async($,H,Y,ce)=>{try{const Ve=await MM($,H,Y);if(e(Ve),w(null),Ve.isAdmin)I("live"),await lw(Ve.id),uw(),ow(Oe=>{console.log("New notification:",Oe),aw("Timbratura Dipendente",Oe.message)});else{I("dashboard");const Oe=await na(Ve.id);a(Oe);try{console.log("Attempting to load activeShift for user:",Ve.id);const Ye=await AM(Ve.id);console.log("Loaded activeShift from DB:",Ye),c(Ye)}catch(Ye){console.error("Error loading activeShift:",Ye),c(null)}await lw(Ve.id),uw(),ow(Ye=>{Ye.userId===Ve.id&&Ye.type==="document_upload"&&(console.log("New document notification:",Ye),aw("Nuovo Documento",Ye.message))})}if(ce){const Oe={name:Ve.name,surname:Ve.surname,password:Ve.password};localStorage.setItem("rememberedCredentials",JSON.stringify(Oe)),L(Oe)}else localStorage.removeItem("rememberedCredentials"),L(null)}catch{w("Nome, cognome o password non corretti.")}},[]),k=K.useCallback(async($,H,Y)=>{try{await VM($,H,Y,!1),await LM(),await v(),E("Registrazione completata! Effettua il login."),w(null),i("login")}catch(ce){w(ce.message||"Errore durante la registrazione.")}},[v]),R=K.useCallback(()=>{e(null),a([]),c(null),P(null),w(null),I("dashboard")},[]),N=K.useCallback(async $=>{if(!t)return;console.log("handleClock called with shiftType:",$),console.log("Current activeShift:",u);const H=new Date;if(u){const Y={...u,endTime:H.toISOString()};console.log("Clocking OUT - completedShift:",Y),await sw(t.id,Y),await kM(t.id),a(ce=>[...ce,Y]),c(null),await xp("clock_out",t.id,`${t.name} ${t.surname}`,`${t.name} ${t.surname} ha timbrato l'uscita alle ${new Date().toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"})}`)}else{const Y={id:`shift_${H.getTime()}`,startTime:H.toISOString(),endTime:null,type:$};console.log("Clocking IN - newShift:",Y),await SM(t.id,Y),c(Y),await xp("clock_in",t.id,`${t.name} ${t.surname}`,`${t.name} ${t.surname} ha timbrato l'entrata alle ${new Date().toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"})}`)}},[u,t]),A=async $=>{const H=await na($.id);a(H),P($),I("userDetail")},Ue=()=>{P(null),a([]),I("users")},Xt=K.useCallback($=>{r(H=>H.filter(Y=>Y.id!==$)),m(H=>H.filter(Y=>Y.userId!==$))},[]),Yr=K.useCallback(async($,H)=>{if(await sw($,H),(x==null?void 0:x.id)===$){const Y=await na($);a(Y)}},[x]),Xr=K.useCallback(async($,H)=>{try{if(await xM($,H),(x==null?void 0:x.id)===$){const Y=await na($);a(Y)}}catch(Y){console.error("Failed to delete shift:",Y),alert("Errore durante l'eliminazione del turno.")}},[x]);if(!j)return f.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-900 text-white",children:f.jsx("p",{className:"text-lg font-medium animate-pulse",children:"Caricamento..."})});const W=()=>{if(!t)return s==="login"?f.jsx(DR,{onLogin:S,onSwitchToRegister:()=>{i("register"),w(null),E(null)},error:C,successMessage:_,rememberedCredentials:V}):f.jsx(FR,{onRegister:k,onSwitchToLogin:()=>{i("login"),w(null),E(null)},error:C});switch(g){case"dashboard":const $=d.filter(Y=>Y.userId===t.id);return f.jsx(q_,{user:t,shifts:o,activeShift:u,assignedShifts:$,onLogout:R,onClock:N});case"live":return f.jsx(iw,{});case"users":return f.jsx(zR,{allUsers:n,onSelectUser:A,onDeleteUser:Xt});case"planner":const H=async Y=>{try{await PM(Y),m(Y)}catch(ce){console.error("Failed to save assigned shifts:",ce),alert("Errore durante il salvataggio dei turni.")}};return f.jsx(KM,{allUsers:n,assignedShifts:d,onSaveShifts:H});case"userDetail":return f.jsx(BR,{selectedUser:x,userShifts:o,onBack:Ue,onUpdateShift:Y=>Yr(x.id,Y),onDeleteShift:Y=>Xr(x.id,Y)});case"globalShifts":return f.jsx(BM,{assignedShifts:d});case"documents":return f.jsx(WM,{user:t,allUsers:n});case"profile":return f.jsx(FM,{user:t});default:return t.isAdmin?f.jsx(iw,{}):f.jsx(q_,{user:t,shifts:o,activeShift:u,assignedShifts:d.filter(Y=>Y.userId===t.id),onLogout:R,onClock:N})}};return f.jsx(GM,{user:t,currentSection:g,onNavigate:I,onLogout:R,children:W()})},y1=document.getElementById("root");if(!y1)throw new Error("Could not find root element to mount to");const XM=Yd.createRoot(y1);XM.render(f.jsx(ww.StrictMode,{children:f.jsx(YM,{})}));
