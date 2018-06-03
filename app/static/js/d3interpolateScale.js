// https://d3js.org/d3-interpolate/ Version 1.2.0. Copyright 2018 Mike Bostock.
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("d3-color")):"function"==typeof define&&define.amd?define(["exports","d3-color"],n):n(t.d3=t.d3||{},t.d3)}(this,function(t,n){"use strict";function r(t,n,r,e,o){var a=t*t,u=a*t;return((1-3*t+3*a-u)*n+(4-6*a+3*u)*r+(1+3*t+3*a-3*u)*e+u*o)/6}function e(t,n){return function(r){return t+r*n}}function o(t,n,r){return t=Math.pow(t,r),n=Math.pow(n,r)-t,r=1/r,function(e){return Math.pow(t+e*n,r)}}function a(t,n){var r=n-t;return r?e(t,r>180||r<-180?r-360*Math.round(r/360):r):j(isNaN(t)?n:t)}function u(t){return 1==(t=+t)?i:function(n,r){return r-n?o(n,r,t):j(isNaN(n)?r:n)}}function i(t,n){var r=n-t;return r?e(t,r):j(isNaN(t)?n:t)}function l(t){return function(r){var e,o,a=r.length,u=new Array(a),i=new Array(a),l=new Array(a);for(e=0;e<a;++e)o=n.rgb(r[e]),u[e]=o.r||0,i[e]=o.g||0,l[e]=o.b||0;return u=t(u),i=t(i),l=t(l),o.opacity=1,function(t){return o.r=u(t),o.g=i(t),o.b=l(t),o+""}}}function c(t){return function(){return t}}function f(t){return function(n){return t(n)+""}}function s(t){return"none"===t?P:(w||(w=document.createElement("DIV"),X=document.documentElement,A=document.defaultView),w.style.transform=t,t=A.getComputedStyle(X.appendChild(w),null).getPropertyValue("transform"),X.removeChild(w),t=t.slice(7,-1).split(","),_(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))}function p(t){return null==t?P:(N||(N=document.createElementNS("http://www.w3.org/2000/svg","g")),N.setAttribute("transform",t),(t=N.transform.baseVal.consolidate())?(t=t.matrix,_(t.a,t.b,t.c,t.d,t.e,t.f)):P)}function h(t,n,r,e){function o(t){return t.length?t.pop()+" ":""}function a(t,e,o,a,u,i){if(t!==o||e!==a){var l=u.push("translate(",null,n,null,r);i.push({i:l-4,x:I(t,o)},{i:l-2,x:I(e,a)})}else(o||a)&&u.push("translate("+o+n+a+r)}function u(t,n,r,a){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),a.push({i:r.push(o(r)+"rotate(",null,e)-2,x:I(t,n)})):n&&r.push(o(r)+"rotate("+n+e)}function i(t,n,r,a){t!==n?a.push({i:r.push(o(r)+"skewX(",null,e)-2,x:I(t,n)}):n&&r.push(o(r)+"skewX("+n+e)}function l(t,n,r,e,a,u){if(t!==r||n!==e){var i=a.push(o(a)+"scale(",null,",",null,")");u.push({i:i-4,x:I(t,r)},{i:i-2,x:I(n,e)})}else 1===r&&1===e||a.push(o(a)+"scale("+r+","+e+")")}return function(n,r){var e=[],o=[];return n=t(n),r=t(r),a(n.translateX,n.translateY,r.translateX,r.translateY,e,o),u(n.rotate,r.rotate,e,o),i(n.skewX,r.skewX,e,o),l(n.scaleX,n.scaleY,r.scaleX,r.scaleY,e,o),n=r=null,function(t){for(var n,r=-1,a=o.length;++r<a;)e[(n=o[r]).i]=n.x(t);return e.join("")}}}function g(t){return((t=Math.exp(t))+1/t)/2}function d(t){return((t=Math.exp(t))-1/t)/2}function y(t){return((t=Math.exp(2*t))-1)/(t+1)}function v(t){return function(r,e){var o=t((r=n.hsl(r)).h,(e=n.hsl(e)).h),a=i(r.s,e.s),u=i(r.l,e.l),l=i(r.opacity,e.opacity);return function(t){return r.h=o(t),r.s=a(t),r.l=u(t),r.opacity=l(t),r+""}}}function b(t,r){var e=i((t=n.lab(t)).l,(r=n.lab(r)).l),o=i(t.a,r.a),a=i(t.b,r.b),u=i(t.opacity,r.opacity);return function(n){return t.l=e(n),t.a=o(n),t.b=a(n),t.opacity=u(n),t+""}}function x(t){return function(r,e){var o=t((r=n.hcl(r)).h,(e=n.hcl(e)).h),a=i(r.c,e.c),u=i(r.l,e.l),l=i(r.opacity,e.opacity);return function(t){return r.h=o(t),r.c=a(t),r.l=u(t),r.opacity=l(t),r+""}}}function m(t){return function r(e){function o(r,o){var a=t((r=n.cubehelix(r)).h,(o=n.cubehelix(o)).h),u=i(r.s,o.s),l=i(r.l,o.l),c=i(r.opacity,o.opacity);return function(t){return r.h=a(t),r.s=u(t),r.l=l(Math.pow(t,e)),r.opacity=c(t),r+""}}return e=+e,o.gamma=r,o}(1)}function M(t,n){for(var r=0,e=n.length-1,o=n[0],a=new Array(e<0?0:e);r<e;)a[r]=t(o,o=n[++r]);return function(t){var n=Math.max(0,Math.min(e-1,Math.floor(t*=e)));return a[n](t-n)}}var w,X,A,N,C=function(t){var n=t.length-1;return function(e){var o=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),a=t[o],u=t[o+1],i=o>0?t[o-1]:2*a-u,l=o<n-1?t[o+2]:2*u-a;return r((e-o/n)*n,i,a,u,l)}},Y=function(t){var n=t.length;return function(e){var o=Math.floor(((e%=1)<0?++e:e)*n),a=t[(o+n-1)%n],u=t[o%n],i=t[(o+1)%n],l=t[(o+2)%n];return r((e-o/n)*n,a,u,i,l)}},j=function(t){return function(){return t}},q=function t(r){function e(t,r){var e=o((t=n.rgb(t)).r,(r=n.rgb(r)).r),a=o(t.g,r.g),u=o(t.b,r.b),l=i(t.opacity,r.opacity);return function(n){return t.r=e(n),t.g=a(n),t.b=u(n),t.opacity=l(n),t+""}}var o=u(r);return e.gamma=t,e}(1),k=l(C),R=l(Y),S=function(t,n){var r,e=n?n.length:0,o=t?Math.min(e,t.length):0,a=new Array(o),u=new Array(e);for(r=0;r<o;++r)a[r]=T(t[r],n[r]);for(;r<e;++r)u[r]=n[r];return function(t){for(r=0;r<o;++r)u[r]=a[r](t);return u}},E=function(t,n){var r=new Date;return t=+t,n-=t,function(e){return r.setTime(t+n*e),r}},I=function(t,n){return t=+t,n-=t,function(r){return t+n*r}},B=function(t,n){var r,e={},o={};null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={});for(r in n)r in t?e[r]=T(t[r],n[r]):o[r]=n[r];return function(t){for(r in e)o[r]=e[r](t);return o}},D=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,H=new RegExp(D.source,"g"),L=function(t,n){var r,e,o,a=D.lastIndex=H.lastIndex=0,u=-1,i=[],l=[];for(t+="",n+="";(r=D.exec(t))&&(e=H.exec(n));)(o=e.index)>a&&(o=n.slice(a,o),i[u]?i[u]+=o:i[++u]=o),(r=r[0])===(e=e[0])?i[u]?i[u]+=e:i[++u]=e:(i[++u]=null,l.push({i:u,x:I(r,e)})),a=H.lastIndex;return a<n.length&&(o=n.slice(a),i[u]?i[u]+=o:i[++u]=o),i.length<2?l[0]?f(l[0].x):c(n):(n=l.length,function(t){for(var r,e=0;e<n;++e)i[(r=l[e]).i]=r.x(t);return i.join("")})},T=function(t,r){var e,o=typeof r;return null==r||"boolean"===o?j(r):("number"===o?I:"string"===o?(e=n.color(r))?(r=e,q):L:r instanceof n.color?q:r instanceof Date?E:Array.isArray(r)?S:"function"!=typeof r.valueOf&&"function"!=typeof r.toString||isNaN(r)?B:I)(t,r)},V=function(t,n){return t=+t,n-=t,function(r){return Math.round(t+n*r)}},O=180/Math.PI,P={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},_=function(t,n,r,e,o,a){var u,i,l;return(u=Math.sqrt(t*t+n*n))&&(t/=u,n/=u),(l=t*r+n*e)&&(r-=t*l,e-=n*l),(i=Math.sqrt(r*r+e*e))&&(r/=i,e/=i,l/=i),t*e<n*r&&(t=-t,n=-n,l=-l,u=-u),{translateX:o,translateY:a,rotate:Math.atan2(n,t)*O,skewX:Math.atan(l)*O,scaleX:u,scaleY:i}},z=h(s,"px, ","px)","deg)"),Q=h(p,", ",")",")"),Z=Math.SQRT2,F=function(t,n){var r,e,o=t[0],a=t[1],u=t[2],i=n[0],l=n[1],c=n[2],f=i-o,s=l-a,p=f*f+s*s;if(p<1e-12)e=Math.log(c/u)/Z,r=function(t){return[o+t*f,a+t*s,u*Math.exp(Z*t*e)]};else{var h=Math.sqrt(p),v=(c*c-u*u+4*p)/(2*u*2*h),b=(c*c-u*u-4*p)/(2*c*2*h),x=Math.log(Math.sqrt(v*v+1)-v),m=Math.log(Math.sqrt(b*b+1)-b);e=(m-x)/Z,r=function(t){var n=t*e,r=g(x),i=u/(2*h)*(r*y(Z*n+x)-d(x));return[o+i*f,a+i*s,u*r/g(Z*n+x)]}}return r.duration=1e3*e,r},G=v(a),J=v(i),K=x(a),U=x(i),W=m(a),$=m(i),tt=function(t,n){for(var r=new Array(n),e=0;e<n;++e)r[e]=t(e/(n-1));return r};t.interpolate=T,t.interpolateArray=S,t.interpolateBasis=C,t.interpolateBasisClosed=Y,t.interpolateDate=E,t.interpolateNumber=I,t.interpolateObject=B,t.interpolateRound=V,t.interpolateString=L,t.interpolateTransformCss=z,t.interpolateTransformSvg=Q,t.interpolateZoom=F,t.interpolateRgb=q,t.interpolateRgbBasis=k,t.interpolateRgbBasisClosed=R,t.interpolateHsl=G,t.interpolateHslLong=J,t.interpolateLab=b,t.interpolateHcl=K,t.interpolateHclLong=U,t.interpolateCubehelix=W,t.interpolateCubehelixLong=$,t.piecewise=M,t.quantize=tt,Object.defineProperty(t,"__esModule",{value:!0})});