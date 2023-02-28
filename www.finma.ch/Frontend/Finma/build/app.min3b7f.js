/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

/**
 * Terrific JavaScript Framework v2.1.0
 * http://terrifically.org
 *
 * Copyright 2014, Remo Brunschwiler
 * @license MIT Licensed.
 *
 * Date: Thu Jun 12 2014 15:18:26
 *
 *
 * Includes:
 * Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 *
 * @module Tc
 *
 */
(function(){

    var root = this, // save a reference to the global object
        Tc,
        $;

    if (typeof exports !== 'undefined') {
        Tc = exports;
    } else {
        Tc = root.Tc = {};
    }

    /*
     * The base library object.
     */
    $ = Tc.$ = root.jQuery || root.Zepto || root.$;

/*
 * Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
/* jshint ignore:start */
(function(){
    var initializing = false,
		fnTest = /xyz/.test(function() { xyz; }) ? /\b_super\b/ : /.*/;

    // The base Class implementation (does nothing)
    this.Class = function(){
    };

    // Create a new Class that inherits from this class
    Class.extend = function(prop){
        var _super = this.prototype;

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
        initializing = true;
        var prototype = new this();
        initializing = false;

        // Copy the properties over onto the new prototype
        for (var name in prop) {
            // Check if we're overwriting an existing function
            prototype[name] = typeof prop[name] == "function" &&
            typeof _super[name] == "function" &&
            fnTest.test(prop[name]) ? (function(name, fn){
                return function(){
                    var tmp = this._super;

                    // Add a new ._super() method that is the same method
                    // but on the super-class
                    this._super = _super[name];

                    // The method only need to be bound temporarily, so we
                    // remove it when we're done executing
                    var ret = fn.apply(this, arguments);
                    this._super = tmp;

                    return ret;
                };
            })(name, prop[name]) : prop[name];
        }

        // The dummy class constructor
        function Class(){
            // All construction is actually done in the init method
            if (!initializing && this.init) {
				this.init.apply(this, arguments);
			}
        }

        // Populate our constructed prototype object
        Class.prototype = prototype;

        // Enforce the constructor to be what we expect
        Class.constructor = Class;

        // And make this class extendable
        Class.extend = arguments.callee;

        return Class;
    };
})();
/* jshint ignore:end */


/**
 * Contains the application base config.
 * The base config can be extended or overwritten either via
 * new Application ($ctx, config) during bootstrapping the application or via
 * overriding the Tc.Config object in your project.
 *
 * @author Remo Brunschwiler
 * @namespace Tc
 * @class Config
 * @static
 */
Tc.Config = {
    /**
     * The paths for the different types of dependencies.
     *
     * @property dependencies
     * @type Object
     */
    dependencies: {
        css: '/css/dependencies',
        js: '/js/dependencies'
    }
};


/**
 * Responsible for application-wide issues such as the creation of modules and establishing connections between them.
 *
 * @author Remo Brunschwiler
 * @namespace Tc
 * @class Application
 */
Tc.Application = Class.extend({

    /**
     * Initializes the application.
     *
     * @method init
     * @constructor
     * @param {jQuery} $ctx
     *      The jQuery context
     * @param {Object} config
     *      The configuration
     */
    init: function ($ctx, config) {
        /**
         * The configuration.
         *
         * @property config
         * @type Object
         */
        this.config = $.extend({}, Tc.Config, config);

        /**
         * The jQuery context.
         *
         * @property $ctx
         * @type jQuery
         */
        this.$ctx = $ctx || $('body');

        /**
         * Contains references to all modules on the page. This can, for
         * example, be useful when there are interactions between Flash
         * objects and Javascript.
         *
         * @property modules
         * @type Array
         */
        this.modules = [];

        /**
         * Contains references to all connectors on the page.
         *
         * @property connectors
         * @type Object
         */
        this.connectors = {};

        /**
         * The sandbox to get the resources from
         * This sandbox is shared between all modules.
         *
         * @property sandbox
         * @type Sandbox
         */
        this.sandbox = new Tc.Sandbox(this, this.config);
    },

    /**
     * Register modules withing scope
     * Automatically registers all modules within the scope,
     * as long as the modules use the OOCSS naming conventions.
     *
     * @method registerModules
     * @param {jQuery} $ctx
     *      The jQuery context
     * @return {Array}
     *      A list containing the references of the registered modules
     */
    registerModules: function ($ctx) {
        var self = this,
            modules = [],
            stringUtils = Tc.Utils.String;

        $ctx = $ctx || this.$ctx;

        $ctx.find('.mod:not([data-ignore="true"])').add($ctx).each(function () {
            var $this = $(this),
                classes = $this.attr('class') || '';

            classes = classes.split(' ');

            /*
             * A module can have several different classes and data attributes.
             * See below for possible values.
             */

            /*
             * @config .mod
             *
             * Indicates that it is a base module, this is the default and
             * no JavaScript needs to be involved. It must occur excactly
             * once.
             */

            /*
             * @config .mod{moduleName} || .mod-{module-name}
             *
             * Indicates that it is a module of type basic, which is
             * derived from the base module. It can occur at most
             * once. Example: .modBasic || .mod-basic
             */

            /*
             * @config .skin{moduleName}{skinName} || .skin-{module-name}-{skin-name}
             *
             * Indicates that the module basic has the submarine skin. It
             * will be decorated by the skin JS (if it exists). It can occur
             * arbitrarily. Example: .skinBasicSubmarine || .skin-basic-submarine
             */

            /*
             * @config data-connectors
             *
             * A module can have a comma-separated list of data connectors.
             * The list contains the IDs of the connectors in the following
             * schema: {connectorType}-{connectorId}
             *
             * {connectorType} is optional. If only the {connectorId} is given, the
             * default connector is instantiated.
             *
             * The example MasterSlave-Navigation decodes to: type =
             * MasterSlave, id = Navigation. This instantiates the MasterSlave
             * connector (as mediator) with the connector id Navigation.
             * The connector id is used to chain the appropriate (the ones with the same id)
             * modules together and to improve the reusability of the connector.
             * It can contain multiple connector ids (e.g. 1,2,MasterSlave-Navigation).
             */

            if (classes.length > 1) {
                var modName,
                    skins = [],
                    connectors = [],
                    dataConnectors;

                for (var i = 0, len = classes.length; i < len; i++) {
                    var part = $.trim(classes[i]);

                    // do nothing for empty parts
                    if (part) {
                        // convert to camel if necessary
                        if (part.indexOf('-') > -1) {
                            part = stringUtils.toCamel(part);
                        }

                        if (part.indexOf('mod') === 0 && part.length > 3) {
                            modName = part.substr(3);
                        }
                        else if (part.indexOf('skin') === 0) {
                            // Remove the mod name part from the skin name
                            skins.push(part.substr(4).replace(modName, ''));
                        }
                    }
                }

                /*
                 * This needs to be done via attr() instead of data().
                 * As data() cast a single number-only connector to an integer, the split will fail.
                 */
                dataConnectors = $this.attr('data-connectors');

                if (dataConnectors) {
                    connectors = dataConnectors.split(',');
                    for (var i = 0, len = connectors.length; i < len; i++) {
                        var connector = $.trim(connectors[i]);
                        // do nothing for empty connectors
                        if (connector) {
                            connectors[i] = connector;
                        }
                    }
                }

                if (modName && Tc.Module[modName]) {
                    modules.push(self.registerModule($this, modName, skins, connectors));
                }
            }
        });

        return modules;
    },

    /**
     * Unregisters the modules given by the module instances.
     *
     * @method unregisterModules
     * @param {Array} modules
     *      A list containing the module instances to unregister
     */
    unregisterModules: function (modules) {
        var connectors = this.connectors;

        modules = modules || this.modules;

        if (modules === this.modules) {
            // Clear everything if the arrays are equal
            this.connectors = [];
            this.modules = [];
        }
        else {
            // Unregister the given modules
            for (var i = 0, len = modules.length; i < len; i++) {
                var module = modules[i],
                    index;

                // Delete the references in the connectors
                for (var connectorId in connectors) {
                    if (connectors.hasOwnProperty(connectorId)) {
                        connectors[connectorId].unregisterComponent(module);
                    }
                }

                // Delete the module instance itself
                index = $.inArray(module, this.modules);
                if (index > -1) {
                    delete this.modules[index];
                }
            }
        }
    },

	/**
	 * Registers a hook that is called at the end.
	 *
	 * @method end
	 * @param {Function} hook
	 * 		The hook function to be executed
	 */
	end: function(hook) {
		if(typeof hook === 'function') {
			this.sandbox.addCallback('end', hook);
		}
	},

    /**
     * Starts (intializes) the registered modules.
     *
     * @method start
     * @param {Array} modules
     *      A list of the modules to start
     */
    start: function (modules) {
        modules = modules || this.modules;

        // Start the modules
        for (var i = 0, len = modules.length; i < len; i++) {
            modules[i].start();
        }
    },

    /**
     * Stops the registered modules.
     *
     * @method stop
     * @param {Array} modules
     *      A list containing the module instances to stop
     */
    stop: function (modules) {
        modules = modules || this.modules;

        // Stop the modules
        for (var i = 0, len = modules.length; i < len; i++) {
            modules[i].stop();
        }
    },

    /**
     * Registers a module.
     *
     * @method registerModule
     * @param {jQuery} $node
     *      The module node
     * @param {String} modName
     *      The module name. It must match the class name of the module
     * @param {Array} skins
     *      A list of skin names. Each entry must match a class name of a skin
     * @param {Array} connectors
     *      A list of connectors identifiers (e.g. MasterSlave-Navigation)
     *      Schema: {connectorName}-{connectorId}
     * @return {Module}
     *      The reference to the registered module
     */
    registerModule: function ($node, modName, skins, connectors) {
        var modules = this.modules;

        modName = modName || undefined;
        skins = skins || [];
        connectors = connectors || [];

        if (modName && Tc.Module[modName]) {
            // Generate a unique ID for every module
            var id = modules.length;
            $node.data('terrific-id', id);

            // Instantiate module
            modules[id] = new Tc.Module[modName]($node, this.sandbox, id);

            // Decorate it
            for (var i = 0, len = skins.length; i < len; i++) {
                var skinName = skins[i];

                if (Tc.Module[modName][skinName]) {
                    modules[id] = modules[id].getDecoratedModule(modName, skinName);
                }
            }

            // Register connections
            for (var i = 0, len = connectors.length; i < len; i++) {
                this.registerConnection(connectors[i], modules[id]);
            }

            return modules[id];
        }

        return null;
    },

    /**
     * Registers a connection between a module and a connector.
     *
     * @method registerConnection
     * @param {String} connector
     *      The full connector name (e.g. MasterSlave-Navigation)
     * @param {Module} component
     *      The module instance
     */
    registerConnection: function (connector, component) {
        connector = $.trim(connector);

        var parts = connector.split('-'),
            connectorType,
            connectorId,
            identifier;

        if (parts.length === 1) {
            // default connector
            identifier = connectorId = parts[0];
        }
        else if (parts.length === 2) {
            // a specific connector type is given
            connectorType = parts[0];
            connectorId = parts[1];
            identifier = connectorType + connectorId;
        }

        if (identifier) {
            var connectors = this.connectors;

            if (!connectors[identifier]) {
                // Instantiate the appropriate connector if it does not exist yet
                if (!connectorType) {
                    connectors[identifier] = new Tc.Connector(connectorId);
                }
                else if (Tc.Connector[connectorType]) {
                    connectors[identifier] = new Tc.Connector[connectorType](connectorId);
                }
            }

            if (connectors[identifier]) {
                /*
                 * The connector observes the component and attaches it as
                 * an observer.
                 */
                component.attachConnector(connectors[identifier]);

                /*
                 * The component wants to be informed over state changes.
                 * It registers it as connector member.
                 */
                connectors[identifier].registerComponent(component);
            }
        }
    },

    /**
     * Unregisters a module from a connector.
     *
     * @method unregisterConnection
     * @param {String} connectorId
     *      The connector channel id (e.g. 2)
     * @param {Module} component
     *      The module instance
     */
    unregisterConnection: function (connectorId, component) {
        var connector = this.connectors[connectorId];

        // Delete the references in the connector and the module
        if (connector) {
            connector.unregisterComponent(component);
            component.detachConnector(connector);
        }
    }
});


/**
 * The sandbox is used as a central point to get resources from, grant
 * permissions, etc.  It is shared between all modules.
 *
 * @author Remo Brunschwiler
 * @namespace Tc
 * @class Sandbox
 */
Tc.Sandbox = Class.extend({

    /**
     * Initializes the Sandbox.
     *
     * @method init
     * @constructor
     * @param {Applicaton} application
     *      The application reference
     * @param {Object} config
     *      The configuration
     */
    init: function (application, config) {

        /**
         * The application
         *
         * @property application
         * @type Application
         */
        this.application = application;

        /**
         * The configuration.
         *
         * @property config
         * @type Object
         */
        this.config = config;

		/**
		 * Contains function references to registered hooks.
		 *
		 * @property hooks
		 * @type Object
		 */
		this.hooks = { after: [], end: [] };
    },

    /**
     * Adds (register and start) all modules in the given context scope.
     *
     * @method addModules
     * @param {jQuery} $ctx
     *      The jQuery context
     * @return {Array}
     *      A list containing the references of the registered modules
     */
    addModules: function ($ctx) {
        var modules = [],
            application = this.application;

        if ($ctx) {
            // Register modules
            modules = application.registerModules($ctx);

            // Start modules
            application.start(modules);
        }

        return modules;
    },

    /**
     * Removes a module by module instances.
     * This stops and unregisters a module through a module instance.
     *
     * @method removeModules
     * @param {mixed} modules
     *      A list containing the module instances to remove or the jQuery context to look for registered modules in.
     */
    removeModules: function (modules) {
        var self = this,
            application = this.application;

        if (!$.isArray(modules)) {
            var $ctx = modules;

            // get modules
            var tmpModules = [];

            $ctx.find('.mod').add($ctx).each(function () {
                // check for instance
                var id = $(this).data('terrific-id');

                if (id !== undefined) {
                    var module = self.getModuleById(id);

                    if (module) {
                        tmpModules.push(module);
                    }
                }
            });

            modules = tmpModules;
        }

        if (modules) {
            // Stop modules
            application.stop(modules);

            // Unregister modules
            application.unregisterModules(modules);
        }
    },

    /**
     * Subscribes a module to a connector.
     *
     * @method subscribe
     * @param {String} connector The full connector name (e.g. MasterSlave-Navigation)
     * @param {Module} module The module instance
     */
    subscribe: function (connector, module) {
        var application = this.application;

		// explicitly cast connector to string (e.g. to handle 0 case)
		connector = connector + '';

		// guards
		if(!module || !connector) {
			throw new Error('subscribe is expecting 2 parameters (connector, module)');
		}

		if(!(module instanceof Tc.Module)) {
			throw new Error('the module param must be an instance of Tc.Module');
		}

		application.registerConnection(connector, module);
    },

    /**
     * Unsubscribes a module from a connector.
     *
     * @method unsubscribe
     * @param {String} connectorId The connector channel id (e.g. 2 or Navigation)
     * @param {Module} module The module instance
     */
    unsubscribe: function (connectorId, module) {
        var application = this.application;

        if (module instanceof Tc.Module && connectorId) {
            // explicitly cast connector id to string
            connectorId = connectorId + '';
            application.unregisterConnection(connectorId, module);
        }
    },

    /**
     * Gets the appropriate module for the given ID.
     *
     * @method getModuleById
     * @param {int} id
     *      The module ID
     * @return {Module}
     *      The appropriate module
     */
    getModuleById: function (id) {
        var application = this.application;

        if (application.modules[id] !== undefined) {
            return application.modules[id];
        }
        else {
            throw new Error('the module with the id ' + id +
                ' does not exist');
        }
    },

    /**
     * Gets the application config.
     *
     * @method getConfig
     * @return {Object}
     *      The configuration object
     */
    getConfig: function () {
        return this.config;
    },

    /**
     * Gets an application config param.
     *
     * @method getConfigParam
     * @param {String} name
     *      The param name
     * @return {mixed}
     *      The appropriate configuration param
     */
    getConfigParam: function (name) {
        var config = this.config;

        if (config[name] !== undefined) {
            return config[name];
        }
        else {
            throw new Error('the config param ' + name + ' does not exist');
        }
    },

	/**
	 * Adds a callback to be executed in the appropriate phase.
	 *
	 * @method addCallback
	 * @param {String} phase default: end
	 * @param {Function} callback
	 */
	addCallback: function(phase, callback) {
		// validate params
		if (callback == null) {
			// only 1 param
			phase = 'end';
		}

		this.hooks[phase].push(callback);
	},

    /**
     * Collects the module status messages and handles the callbacks.
     * This means that it is ready for the 'after' hook.
     *
     * @method ready
     * @param {Function} callback
     *      The 'after' hook module callback
     */
    ready: function (callback) {
        var afterHooks = this.hooks['after'];

        // Add the callback to the stack
        afterHooks.push(callback);

        // Check whether all modules are ready for the 'after' hook
        if (this.application.modules.length === afterHooks.length) {
            for (var i = 0; i < afterHooks.length; i++) {
                var afterCallback = afterHooks[i];

                if (typeof afterCallback === "function") {
                    // make sure the callback is only executed once (and is not called during addModules)
                    delete afterHooks[i];
                    afterCallback();
                }
            }

			// execute the end hooks
			var endHooks = this.hooks['end'];
			for (var i = 0; i < endHooks.length; i++) {
				var hook = endHooks[i];
				if (typeof hook === "function") {
					hook();
				}
			}
        }
    }
});


/**
 * Base class for the different modules.
 *
 * @author Remo Brunschwiler
 * @namespace Tc
 * @class Module
 */
Tc.Module = Class.extend({

    /**
     * Initializes the Module.
     *
     * @method init
     * @constructor
     * @param {jQuery} $ctx
     *      The jQuery context
     * @param {Sandbox} sandbox
     *      The sandbox to get the resources from
     * @param {String} id
     *      The Unique module ID
     */
    init: function ($ctx, sandbox, id) {
        /**
         * Contains the module context.
         *
         * @property $ctx
         * @type jQuery
         */
        this.$ctx = $ctx;

        /**
         * Contains the unique module ID.
         *
         * @property id
         * @type String
         */
        this.id = id;

        /**
         * Contains the attached connectors.
         *
         * @property connectors
         * @type Object
         */
        this.connectors = {};

        /**
         * The sandbox to get the resources from.
         *
         * @property sandbox
         * @type Sandbox
         */
        this.sandbox = sandbox;
    },

    /**
     * Template method to start (i.e. init) the module.
     * This method provides hook functions which can be overridden
     * by the individual instance.
     *
     * @method start
     */
    start: function () {
        var self = this;

        // Call the hook method from the individual instance and provide the appropriate callback
        if (this.on) {
            this.on(function () {
                self.initAfter();
            });
        }
    },

    /**
     * Template method to stop the module.
     *
     * @method stop
     */
    stop: function () {
        var $ctx = this.$ctx;

        // Remove all bound events and associated jQuery data
        $('*', $ctx).unbind().removeData();
        $ctx.unbind().removeData();
    },

    /**
     * Initialization callback.
     *
     * @method initAfter
     * @protected
     */
    initAfter: function () {
        var self = this;

        this.sandbox.ready(function () {
            /*
             * Call the 'after' hook method from the individual instance
             */
            if (self.after) {
                self.after();
            }
        });
    },

    /**
     * Notifies all attached connectors about changes.
     *
     * @method fire
     * @param {String} state The new state
     * @param {Object} data The data to provide to your connected modules (optional)
     * @param {Array} channels  A list containing the channel ids to send the event to (optional)
     * @param {Function} defaultAction The default action to perform (optional)
     */
    fire: function (state, data, channels, defaultAction) {
        var self = this,
            connectors = this.connectors,
            shouldBeCalled = true;  // indicates whether the default handler should be called

        // validate params
        if (channels == null && defaultAction == null) {
            // Max. 2 params
            if (typeof data === 'function') {
                // (state, defaultAction)
                defaultAction = data;
                data = undefined;
            }
            else if ($.isArray(data)) {
                // (state, channels)
                channels = data;
                data = undefined;
            }
        }
        else if (defaultAction == null) {
            // 2-3 params
            if (typeof channels === 'function') {
                // (state, data, defaultAction)
                defaultAction = channels;
                channels = undefined;
            }

            if ($.isArray(data)) {
                // (state, channels, defaultAction)
                channels = data;
                data = undefined;
            }
        }

        state = Tc.Utils.String.capitalize(state);
        data = data || {};
        channels = channels || Object.keys(connectors);

        for (var i = 0, len = channels.length; i < len; i++) {
            var connectorId = channels[i];
            if (connectors.hasOwnProperty(connectorId)) {
                var connector = connectors[connectorId],
                    proceed = connector.notify(self, 'on' + state, data) || false;

                if (!proceed) {
                    shouldBeCalled = false;
                }

            } else {
                throw new Error('the module #' + self.id + ' is not connected to connector ' + connectorId +
					' – hint: please make sure that your data is an object and not an array');
            }
        }

        // Execute default action unless a veto is provided
        if (shouldBeCalled) {
            if (typeof defaultAction === 'function') {
                defaultAction(data);
            }
        }
    },

    /**
     * Attaches a connector (observer).
     *
     * @method attachConnector
     * @param {Connector} connector
     *      The connector to attach
     */
    attachConnector: function (connector) {
        this.connectors[connector.connectorId] = connector;
    },

    /**
     * Detaches a connector (observer).
     *
     * @method detachConnector
     * @param {Connector} connector The connector to detach
     */
    detachConnector: function (connector) {
        delete this.connectors[connector.connectorId];
    },

    /**
     * Decorates itself with the given skin.
     *
     * @method getDecoratedModule
     * @param {String} module The name of the module
     * @param {String} skin The name of the skin
     * @return {Module} The decorated module
     */
    getDecoratedModule: function (module, skin) {
        if (Tc.Module[module][skin]) {
            var Decorator = Tc.Module[module][skin];

            /*
             * Sets the prototype object to the module.
             * So the "non-decorated" functions will be called on the module
             * without implementing the whole module interface.
             */
            Decorator.prototype = this;
            Decorator.prototype.constructor = Tc.Module[module][skin];

            return new Decorator(this);
        }

        return null;
    }
});


/**
 * Base class for the different connectors.
 *
 * @author Remo Brunschwiler
 * @namespace Tc
 * @class Connector
 */
Tc.Connector = Class.extend({

    /**
     * Initializes the Connector.
     *
     * @method init
     * @constructor
     * @param {String} connectorId
     *      The unique connector ID
     */
    init: function (connectorId) {
        this.connectorId = connectorId;
        this.components = {};
    },

    /**
     * Registers a component.
     *
     * @method registerComponent
     * @param {Module} component
     *      The module to register
     */
    registerComponent: function (component) {
        this.components[component.id] = {
            'component': component
        };
    },

    /**
     * Unregisters a component.
     *
     * @method unregisterComponent
     * @param {Module} component
     *      The module to unregister
     */
    unregisterComponent: function (component) {
        var components = this.components;

        if (components[component.id]) {
            delete components[component.id];
        }
    },

    /**
     * Notifies all registered components about a state change
     * This can be be overriden in the specific connectors.
     *
     * @method notify
     * @param {Module} origin
     *      The module that sends the state change
     * @param {String} state
     *      The component's state
     * @param {Object} data
     *      Contains the state relevant data (if any)
     * @return {boolean}
     *      Indicates whether the default action should be excuted or not
     */
    notify: function (origin, state, data, callback) {
        /*
         * Gives the components the ability to prevent the default- and
         * after action from the events by returning false in the
         * on {Event}-Handler.
         */
        var proceed = true,
            components = this.components;

        for (var id in components) {
            if (components.hasOwnProperty(id)) {
                var component = components[id].component;
                if (component !== origin && component[state]) {
                    if (component[state](data) === false) {
                        proceed = false;
                    }
                }
            }
        }

        return proceed;
    }
});


/*
 * Contains utility functions for several tasks.
 */
Tc.Utils = {};

// Helpers

// Object.keys is native in JavaScript 1.8.5
if (!Object.keys) {
    Object.keys = function (obj) {
        var keys = [], k;
        for (k in obj) {
            if (obj.hasOwnProperty(k)) {
                keys.push(k);
            }
        }
        return keys;
    };
}
/**
 * Contains utility functions for string concerning tasks.
 *
 * @author Remo Brunschwiler
 * @namespace Tc
 * @class Utils.String
 * @static
 */
Tc.Utils.String = {
    /**
     * Capitalizes the first letter of the given string.
     *
     * @method capitalize
     * @param {String} str
     *      The original string
     * @return {String}
     *      The capitalized string
     */
    capitalize: function (str) {
        // Capitalize the first letter
        return str.substr(0, 1).toUpperCase().concat(str.substr(1));
    },

    /**
     * Camelizes the given string.
     *
     * @method toCamel
     * @param {String} str
     *      The original string
     * @return {String}
     *      The camelized string
     */
    toCamel: function (str) {
        return str.replace(/(\-[A-Za-z])/g, function ($1) {
            return $1.toUpperCase().replace('-', '');
        });
    }
};


}).call(this);
"use strict";

/**
 * Prototype extensions and convenience methods.
 *
 * @author Christoph Bühler <christoph.buehler@namics.com>
 * @namespace Window
 */

/**
 * @class Array
 */
if(!Array.prototype.remove){
	Array.prototype.remove = function (item) {
		var idx = this.indexOf(item);
		if (idx > -1) {
			this.splice(idx, 1);
			return true;
		}
		return false;
	};
}

if(!Array.prototype.pushRange){
	Array.prototype.pushRange = function(array){
		var self = this;
		array.forEach(function(e){
			self.push(e);
		});
	};
}

if(!Array.prototype.find){
	Array.prototype.find = function(predicate){
		var found = false;
		this.forEach(function(e){
			if(!found){
				found = predicate(e);
			}
		});
		return found;
	};
}

if(!Array.prototype.get){
	Array.prototype.get = function(predicate){
		var found = null;
		this.forEach(function(e){
			if(!found && predicate(e)){
				found = e;
			}
		});
		return found;
	};
}

if(!Array.prototype.forEach){
	Array.prototype.forEach = function(func){
		for(var x = 0; x < this.length; x++)
			func(this[x], x);
	};
}

/**
 * @class String
 */
if (!String.prototype.contains) {
	String.prototype.contains = function () {
		return String.prototype.indexOf.apply(this, arguments) !== -1;
	};
}

(function() {

	Date.shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	Date.longMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	Date.shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	Date.longDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	// defining patterns
	var replaceChars = {
		// Day
		d: function() { return (this.getDate() < 10 ? '0' : '') + this.getDate(); },
		D: function() { return Date.shortDays[this.getDay()]; },
		j: function() { return this.getDate(); },
		l: function() { return Date.longDays[this.getDay()]; },
		N: function() { return (this.getDay() == 0 ? 7 : this.getDay()); },
		S: function() { return (this.getDate() % 10 == 1 && this.getDate() != 11 ? 'st' : (this.getDate() % 10 == 2 && this.getDate() != 12 ? 'nd' : (this.getDate() % 10 == 3 && this.getDate() != 13 ? 'rd' : 'th'))); },
		w: function() { return this.getDay(); },
		z: function() { var d = new Date(this.getFullYear(),0,1); return Math.ceil((this - d) / 86400000); }, // Fixed now
		// Week
		W: function() {
			var target = new Date(this.valueOf());
			var dayNr = (this.getDay() + 6) % 7;
			target.setDate(target.getDate() - dayNr + 3);
			var firstThursday = target.valueOf();
			target.setMonth(0, 1);
			if (target.getDay() !== 4) {
				target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
			}
			return 1 + Math.ceil((firstThursday - target) / 604800000);
		},
		// Month
		F: function() { return Date.longMonths[this.getMonth()]; },
		m: function() { return (this.getMonth() < 9 ? '0' : '') + (this.getMonth() + 1); },
		M: function() { return Date.shortMonths[this.getMonth()]; },
		n: function() { return this.getMonth() + 1; },
		t: function() { var d = new Date(); return new Date(d.getFullYear(), d.getMonth(), 0).getDate() }, // Fixed now, gets #days of date
		// Year
		L: function() { var year = this.getFullYear(); return (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)); },   // Fixed now
		o: function() { var d  = new Date(this.valueOf());  d.setDate(d.getDate() - ((this.getDay() + 6) % 7) + 3); return d.getFullYear();}, //Fixed now
		Y: function() { return this.getFullYear(); },
		y: function() { return ('' + this.getFullYear()).substr(2); },
		// Time
		a: function() { return this.getHours() < 12 ? 'am' : 'pm'; },
		A: function() { return this.getHours() < 12 ? 'AM' : 'PM'; },
		B: function() { return Math.floor((((this.getUTCHours() + 1) % 24) + this.getUTCMinutes() / 60 + this.getUTCSeconds() / 3600) * 1000 / 24); }, // Fixed now
		g: function() { return this.getHours() % 12 || 12; },
		G: function() { return this.getHours(); },
		h: function() { return ((this.getHours() % 12 || 12) < 10 ? '0' : '') + (this.getHours() % 12 || 12); },
		H: function() { return (this.getHours() < 10 ? '0' : '') + this.getHours(); },
		i: function() { return (this.getMinutes() < 10 ? '0' : '') + this.getMinutes(); },
		s: function() { return (this.getSeconds() < 10 ? '0' : '') + this.getSeconds(); },
		u: function() { var m = this.getMilliseconds(); return (m < 10 ? '00' : (m < 100 ?
				'0' : '')) + m; },
		// Timezone
		e: function() { return /\((.*)\)/.exec(new Date().toString())[1]; },
		I: function() {
			var DST = null;
			for (var i = 0; i < 12; ++i) {
				var d = new Date(this.getFullYear(), i, 1);
				var offset = d.getTimezoneOffset();

				if (DST === null) DST = offset;
				else if (offset < DST) { DST = offset; break; }                     else if (offset > DST) break;
			}
			return (this.getTimezoneOffset() == DST) | 0;
		},
		O: function() { return (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() / 60)) + '00'; },
		P: function() { return (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() / 60)) + ':00'; }, // Fixed now
		T: function() { return this.toTimeString().replace(/^.+ \(?([^\)]+)\)?$/, '$1'); },
		Z: function() { return -this.getTimezoneOffset() * 60; },
		// Full Date/Time
		c: function() { return this.format("Y-m-d\\TH:i:sP"); }, // Fixed now
		r: function() { return this.toString(); },
		U: function() { return this.getTime() / 1000; }
	};

	// Simulates PHP's date function
	Date.prototype.format = function(format) {
		var date = this;
		return format.replace(/(\\?)(.)/g, function(_, esc, chr) {
			return (esc === '' && replaceChars[chr]) ? replaceChars[chr].call(date) : chr;
		});
	};

}).call(this);

/* Laura Doktorova https://github.com/olado/doT */
(function(){function p(b,a,d){return("string"===typeof a?a:a.toString()).replace(b.define||h,function(a,c,e,g){0===c.indexOf("def.")&&(c=c.substring(4));c in d||(":"===e?(b.defineParams&&g.replace(b.defineParams,function(a,b,l){d[c]={arg:b,text:l}}),c in d||(d[c]=g)):(new Function("def","def['"+c+"']="+g))(d));return""}).replace(b.use||h,function(a,c){b.useParams&&(c=c.replace(b.useParams,function(a,b,c,l){if(d[c]&&d[c].arg&&l)return a=(c+":"+l).replace(/'|\\/g,"_"),d.__exp=d.__exp||{},d.__exp[a]=
	d[c].text.replace(new RegExp("(^|[^\\w$])"+d[c].arg+"([^\\w$])","g"),"$1"+l+"$2"),b+"def.__exp['"+a+"']"}));var e=(new Function("def","return "+c))(d);return e?p(b,e,d):e})}function k(b){return b.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}var f={version:"1.0.3",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
	define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0},m;f.encodeHTMLSource=function(b){var a={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},d=b?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(b){return b?
	b.toString().replace(d,function(b){return a[b]||b}):""}};m=function(){return this||(0,eval)("this")}();"undefined"!==typeof module&&module.exports?module.exports=f:"function"===typeof define&&define.amd?define(function(){return f}):m.doT=f;var r={start:"'+(",end:")+'",startencode:"'+encodeHTML("},s={start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("},h=/$^/;f.template=function(b,a,d){a=a||f.templateSettings;var n=a.append?r:s,c,e=0,g;b=a.use||a.define?p(a,b,d||{}):b;b=("var out='"+(a.strip?
	b.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):b).replace(/'|\\/g,"\\$&").replace(a.interpolate||h,function(b,a){return n.start+k(a)+n.end}).replace(a.encode||h,function(b,a){c=!0;return n.startencode+k(a)+n.end}).replace(a.conditional||h,function(b,a,c){return a?c?"';}else if("+k(c)+"){out+='":"';}else{out+='":c?"';if("+k(c)+"){out+='":"';}out+='"}).replace(a.iterate||h,function(b,a,c,d){if(!a)return"';} } out+='";e+=1;g=d||"i"+e;a=k(a);return"';var arr"+
		e+"="+a+";if(arr"+e+"){var "+c+","+g+"=-1,l"+e+"=arr"+e+".length-1;while("+g+"<l"+e+"){"+c+"=arr"+e+"["+g+"+=1];out+='"}).replace(a.evaluate||h,function(a,b){return"';"+k(b)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,"");c&&(a.selfcontained||!m||m._encodeHTML||(m._encodeHTML=f.encodeHTMLSource(a.doNotSkipEncoded)),b="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+f.encodeHTMLSource.toString()+
"("+(a.doNotSkipEncoded||"")+"));"+b);try{return new Function(a.varname,b)}catch(q){throw"undefined"!==typeof console&&console.log("Could not create a template function: "+b),q;}};f.compile=function(b,a){return f.template(b,null,a)}})();

/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

!function(a,b,c){var d=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=c(d):"function"==typeof define&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)}("enquire",this,function(a){"use strict";function b(a,b){var c,d=0,e=a.length;for(d;e>d&&(c=b(a[d],d),c!==!1);d++);}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function d(a){return"function"==typeof a}function e(a){this.options=a,!a.deferSetup&&this.setup()}function f(b,c){this.query=b,this.isUnconditional=c,this.handlers=[],this.mql=a(b);var d=this;this.listener=function(a){d.mql=a,d.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},f.prototype={addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var c=this.handlers;b(c,function(b,d){return b.equals(a)?(b.destroy(),!c.splice(d,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";b(this.handlers,function(b){b[a]()})}},g.prototype={register:function(a,e,g){var h=this.queries,i=g&&this.browserIsIncapable;return h[a]||(h[a]=new f(a,i)),d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(b){d(b)&&(b={match:b}),h[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},new g});
/**
 * Featherlight - ultra slim jQuery lightbox
 * Version 1.7.13 - http://noelboss.github.io/featherlight/
 *
 * Copyright 2018, Noël Raoul Bossart (http://www.noelboss.com)
 * MIT Licensed.
**/
!function(a){"use strict";function b(a,c){if(!(this instanceof b)){var d=new b(a,c);return d.open(),d}this.id=b.id++,this.setup(a,c),this.chainCallbacks(b._callbackChain)}function c(a,b){var c={};for(var d in a)d in b&&(c[d]=a[d],delete a[d]);return c}function d(a,b){var c={},d=new RegExp("^"+b+"([A-Z])(.*)");for(var e in a){var f=e.match(d);if(f){var g=(f[1]+f[2].replace(/([A-Z])/g,"-$1")).toLowerCase();c[g]=a[e]}}return c}if("undefined"==typeof a)return void("console"in window&&window.console.info("Too much lightness, Featherlight needs jQuery."));if(a.fn.jquery.match(/-ajax/))return void("console"in window&&window.console.info("Featherlight needs regular jQuery, not the slim version."));var e=[],f=function(b){return e=a.grep(e,function(a){return a!==b&&a.$instance.closest("body").length>0})},g={allow:1,allowfullscreen:1,frameborder:1,height:1,longdesc:1,marginheight:1,marginwidth:1,mozallowfullscreen:1,name:1,referrerpolicy:1,sandbox:1,scrolling:1,src:1,srcdoc:1,style:1,webkitallowfullscreen:1,width:1},h={keyup:"onKeyUp",resize:"onResize"},i=function(c){a.each(b.opened().reverse(),function(){return c.isDefaultPrevented()||!1!==this[h[c.type]](c)?void 0:(c.preventDefault(),c.stopPropagation(),!1)})},j=function(c){if(c!==b._globalHandlerInstalled){b._globalHandlerInstalled=c;var d=a.map(h,function(a,c){return c+"."+b.prototype.namespace}).join(" ");a(window)[c?"on":"off"](d,i)}};b.prototype={constructor:b,namespace:"featherlight",targetAttr:"data-featherlight",variant:null,resetCss:!1,background:null,openTrigger:"click",closeTrigger:"click",filter:null,root:"body",openSpeed:250,closeSpeed:250,closeOnClick:"background",closeOnEsc:!0,closeIcon:"&#10005;",loading:"",persist:!1,otherClose:null,beforeOpen:a.noop,beforeContent:a.noop,beforeClose:a.noop,afterOpen:a.noop,afterContent:a.noop,afterClose:a.noop,onKeyUp:a.noop,onResize:a.noop,type:null,contentFilters:["jquery","image","html","ajax","iframe","text"],setup:function(b,c){"object"!=typeof b||b instanceof a!=!1||c||(c=b,b=void 0);var d=a.extend(this,c,{target:b}),e=d.resetCss?d.namespace+"-reset":d.namespace,f=a(d.background||['<div class="'+e+"-loading "+e+'">','<div class="'+e+'-content">','<button class="'+e+"-close-icon "+d.namespace+'-close" aria-label="Close">',d.closeIcon,"</button>",'<div class="'+d.namespace+'-inner">'+d.loading+"</div>","</div>","</div>"].join("")),g="."+d.namespace+"-close"+(d.otherClose?","+d.otherClose:"");return d.$instance=f.clone().addClass(d.variant),d.$instance.on(d.closeTrigger+"."+d.namespace,function(b){if(!b.isDefaultPrevented()){var c=a(b.target);("background"===d.closeOnClick&&c.is("."+d.namespace)||"anywhere"===d.closeOnClick||c.closest(g).length)&&(d.close(b),b.preventDefault())}}),this},getContent:function(){if(this.persist!==!1&&this.$content)return this.$content;var b=this,c=this.constructor.contentFilters,d=function(a){return b.$currentTarget&&b.$currentTarget.attr(a)},e=d(b.targetAttr),f=b.target||e||"",g=c[b.type];if(!g&&f in c&&(g=c[f],f=b.target&&e),f=f||d("href")||"",!g)for(var h in c)b[h]&&(g=c[h],f=b[h]);if(!g){var i=f;if(f=null,a.each(b.contentFilters,function(){return g=c[this],g.test&&(f=g.test(i)),!f&&g.regex&&i.match&&i.match(g.regex)&&(f=i),!f}),!f)return"console"in window&&window.console.error("Featherlight: no content filter found "+(i?' for "'+i+'"':" (no target specified)")),!1}return g.process.call(b,f)},setContent:function(b){return this.$instance.removeClass(this.namespace+"-loading"),this.$instance.toggleClass(this.namespace+"-iframe",b.is("iframe")),this.$instance.find("."+this.namespace+"-inner").not(b).slice(1).remove().end().replaceWith(a.contains(this.$instance[0],b[0])?"":b),this.$content=b.addClass(this.namespace+"-inner"),this},open:function(b){var c=this;if(c.$instance.hide().appendTo(c.root),!(b&&b.isDefaultPrevented()||c.beforeOpen(b)===!1)){b&&b.preventDefault();var d=c.getContent();if(d)return e.push(c),j(!0),c.$instance.fadeIn(c.openSpeed),c.beforeContent(b),a.when(d).always(function(a){c.setContent(a),c.afterContent(b)}).then(c.$instance.promise()).done(function(){c.afterOpen(b)})}return c.$instance.detach(),a.Deferred().reject().promise()},close:function(b){var c=this,d=a.Deferred();return c.beforeClose(b)===!1?d.reject():(0===f(c).length&&j(!1),c.$instance.fadeOut(c.closeSpeed,function(){c.$instance.detach(),c.afterClose(b),d.resolve()})),d.promise()},resize:function(a,b){if(a&&b){this.$content.css("width","").css("height","");var c=Math.max(a/(this.$content.parent().width()-1),b/(this.$content.parent().height()-1));c>1&&(c=b/Math.floor(b/c),this.$content.css("width",""+a/c+"px").css("height",""+b/c+"px"))}},chainCallbacks:function(b){for(var c in b)this[c]=a.proxy(b[c],this,a.proxy(this[c],this))}},a.extend(b,{id:0,autoBind:"[data-featherlight]",defaults:b.prototype,contentFilters:{jquery:{regex:/^[#.]\w/,test:function(b){return b instanceof a&&b},process:function(b){return this.persist!==!1?a(b):a(b).clone(!0)}},image:{regex:/\.(png|jpg|jpeg|gif|tiff?|bmp|svg)(\?\S*)?$/i,process:function(b){var c=this,d=a.Deferred(),e=new Image,f=a('<img src="'+b+'" alt="" class="'+c.namespace+'-image" />');return e.onload=function(){f.naturalWidth=e.width,f.naturalHeight=e.height,d.resolve(f)},e.onerror=function(){d.reject(f)},e.src=b,d.promise()}},html:{regex:/^\s*<[\w!][^<]*>/,process:function(b){return a(b)}},ajax:{regex:/./,process:function(b){var c=a.Deferred(),d=a("<div></div>").load(b,function(a,b){"error"!==b&&c.resolve(d.contents()),c.fail()});return c.promise()}},iframe:{process:function(b){var e=new a.Deferred,f=a("<iframe/>"),h=d(this,"iframe"),i=c(h,g);return f.hide().attr("src",b).attr(i).css(h).on("load",function(){e.resolve(f.show())}).appendTo(this.$instance.find("."+this.namespace+"-content")),e.promise()}},text:{process:function(b){return a("<div>",{text:b})}}},functionAttributes:["beforeOpen","afterOpen","beforeContent","afterContent","beforeClose","afterClose"],readElementConfig:function(b,c){var d=this,e=new RegExp("^data-"+c+"-(.*)"),f={};return b&&b.attributes&&a.each(b.attributes,function(){var b=this.name.match(e);if(b){var c=this.value,g=a.camelCase(b[1]);if(a.inArray(g,d.functionAttributes)>=0)c=new Function(c);else try{c=JSON.parse(c)}catch(h){}f[g]=c}}),f},extend:function(b,c){var d=function(){this.constructor=b};return d.prototype=this.prototype,b.prototype=new d,b.__super__=this.prototype,a.extend(b,this,c),b.defaults=b.prototype,b},attach:function(b,c,d){var e=this;"object"!=typeof c||c instanceof a!=!1||d||(d=c,c=void 0),d=a.extend({},d);var f,g=d.namespace||e.defaults.namespace,h=a.extend({},e.defaults,e.readElementConfig(b[0],g),d),i=function(g){var i=a(g.currentTarget),j=a.extend({$source:b,$currentTarget:i},e.readElementConfig(b[0],h.namespace),e.readElementConfig(g.currentTarget,h.namespace),d),k=f||i.data("featherlight-persisted")||new e(c,j);"shared"===k.persist?f=k:k.persist!==!1&&i.data("featherlight-persisted",k),j.$currentTarget.blur&&j.$currentTarget.blur(),k.open(g)};return b.on(h.openTrigger+"."+h.namespace,h.filter,i),{filter:h.filter,handler:i}},current:function(){var a=this.opened();return a[a.length-1]||null},opened:function(){var b=this;return f(),a.grep(e,function(a){return a instanceof b})},close:function(a){var b=this.current();return b?b.close(a):void 0},_onReady:function(){var b=this;if(b.autoBind){var c=a(b.autoBind);c.each(function(){b.attach(a(this))}),a(document).on("click",b.autoBind,function(d){if(!d.isDefaultPrevented()){var e=a(d.currentTarget),f=c.length;if(c=c.add(e),f!==c.length){var g=b.attach(e);(!g.filter||a(d.target).parentsUntil(e,g.filter).length>0)&&g.handler(d)}}})}},_callbackChain:{onKeyUp:function(b,c){return 27===c.keyCode?(this.closeOnEsc&&a.featherlight.close(c),!1):b(c)},beforeOpen:function(b,c){return a(document.documentElement).addClass("with-featherlight"),this._previouslyActive=document.activeElement,this._$previouslyTabbable=a("a, input, select, textarea, iframe, button, iframe, [contentEditable=true]").not("[tabindex]").not(this.$instance.find("button")),this._$previouslyWithTabIndex=a("[tabindex]").not('[tabindex="-1"]'),this._previousWithTabIndices=this._$previouslyWithTabIndex.map(function(b,c){return a(c).attr("tabindex")}),this._$previouslyWithTabIndex.add(this._$previouslyTabbable).attr("tabindex",-1),document.activeElement.blur&&document.activeElement.blur(),b(c)},afterClose:function(c,d){var e=c(d),f=this;return this._$previouslyTabbable.removeAttr("tabindex"),this._$previouslyWithTabIndex.each(function(b,c){a(c).attr("tabindex",f._previousWithTabIndices[b])}),this._previouslyActive.focus(),0===b.opened().length&&a(document.documentElement).removeClass("with-featherlight"),e},onResize:function(a,b){return this.resize(this.$content.naturalWidth,this.$content.naturalHeight),a(b)},afterContent:function(a,b){var c=a(b);return this.$instance.find("[autofocus]:not([disabled])").focus(),this.onResize(b),c}}}),a.featherlight=b,a.fn.featherlight=function(a,c){return b.attach(this,a,c),this},a(document).ready(function(){b._onReady()})}(jQuery);
// jQuery Mask Plugin v1.13.4
// github.com/igorescobar/jQuery-Mask-Plugin
(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):"object"===typeof exports?module.exports=b(require("jquery")):b(jQuery||Zepto)})(function(b){var y=function(a,c,d){a=b(a);var g=this,k=a.val(),l;c="function"===typeof c?c(a.val(),void 0,a,d):c;var e={invalid:[],getCaret:function(){try{var q,b=0,e=a.get(0),f=document.selection,c=e.selectionStart;if(f&&-1===navigator.appVersion.indexOf("MSIE 10"))q=f.createRange(),q.moveStart("character",a.is("input")?-a.val().length:-a.text().length),
b=q.text.length;else if(c||"0"===c)b=c;return b}catch(d){}},setCaret:function(q){try{if(a.is(":focus")){var b,c=a.get(0);c.setSelectionRange?c.setSelectionRange(q,q):c.createTextRange&&(b=c.createTextRange(),b.collapse(!0),b.moveEnd("character",q),b.moveStart("character",q),b.select())}}catch(f){}},events:function(){a.on("input.mask keyup.mask",e.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){a.keydown().keyup()},100)}).on("change.mask",function(){a.data("changed",!0)}).on("blur.mask",
function(){k===a.val()||a.data("changed")||a.triggerHandler("change");a.data("changed",!1)}).on("blur.mask",function(){k=a.val()}).on("focus.mask",function(a){!0===d.selectOnFocus&&b(a.target).select()}).on("focusout.mask",function(){d.clearIfNotMatch&&!l.test(e.val())&&e.val("")})},getRegexMask:function(){for(var a=[],b,e,f,d,h=0;h<c.length;h++)(b=g.translation[c.charAt(h)])?(e=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),f=b.optional,(b=b.recursive)?(a.push(c.charAt(h)),d={digit:c.charAt(h),
pattern:e}):a.push(f||b?e+"?":e)):a.push(c.charAt(h).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");d&&(a=a.replace(new RegExp("("+d.digit+"(.*"+d.digit+")?)"),"($1)?").replace(new RegExp(d.digit,"g"),d.pattern));return new RegExp(a)},destroyEvents:function(){a.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(b){var c=a.is("input")?"val":"text";if(0<arguments.length){if(a[c]()!==b)a[c](b);c=a}else c=a[c]();return c},getMCharsBeforeCount:function(a,
b){for(var e=0,f=0,d=c.length;f<d&&f<a;f++)g.translation[c.charAt(f)]||(a=b?a+1:a,e++);return e},caretPos:function(a,b,d,f){return g.translation[c.charAt(Math.min(a-1,c.length-1))]?Math.min(a+d-b-f,d):e.caretPos(a+1,b,d,f)},behaviour:function(a){a=a||window.event;e.invalid=[];var c=a.keyCode||a.which;if(-1===b.inArray(c,g.byPassKeys)){var d=e.getCaret(),f=e.val().length,n=d<f,h=e.getMasked(),k=h.length,m=e.getMCharsBeforeCount(k-1)-e.getMCharsBeforeCount(f-1);e.val(h);!n||65===c&&a.ctrlKey||(8!==
c&&46!==c&&(d=e.caretPos(d,f,k,m)),e.setCaret(d));return e.callbacks(a)}},getMasked:function(a){var b=[],k=e.val(),f=0,n=c.length,h=0,l=k.length,m=1,p="push",u=-1,t,w;d.reverse?(p="unshift",m=-1,t=0,f=n-1,h=l-1,w=function(){return-1<f&&-1<h}):(t=n-1,w=function(){return f<n&&h<l});for(;w();){var x=c.charAt(f),v=k.charAt(h),r=g.translation[x];if(r)v.match(r.pattern)?(b[p](v),r.recursive&&(-1===u?u=f:f===t&&(f=u-m),t===u&&(f-=m)),f+=m):r.optional?(f+=m,h-=m):r.fallback?(b[p](r.fallback),f+=m,h-=m):e.invalid.push({p:h,
v:v,e:r.pattern}),h+=m;else{if(!a)b[p](x);v===x&&(h+=m);f+=m}}a=c.charAt(t);n!==l+1||g.translation[a]||b.push(a);return b.join("")},callbacks:function(b){var g=e.val(),l=g!==k,f=[g,b,a,d],n=function(a,b,c){"function"===typeof d[a]&&b&&d[a].apply(this,c)};n("onChange",!0===l,f);n("onKeyPress",!0===l,f);n("onComplete",g.length===c.length,f);n("onInvalid",0<e.invalid.length,[g,b,a,e.invalid,d])}};g.mask=c;g.options=d;g.remove=function(){var b=e.getCaret();e.destroyEvents();e.val(g.getCleanVal());e.setCaret(b-
e.getMCharsBeforeCount(b));return a};g.getCleanVal=function(){return e.getMasked(!0)};g.init=function(c){c=c||!1;d=d||{};g.byPassKeys=b.jMaskGlobals.byPassKeys;g.translation=b.jMaskGlobals.translation;g.translation=b.extend({},g.translation,d.translation);g=b.extend(!0,{},g,d);l=e.getRegexMask();!1===c?(d.placeholder&&a.attr("placeholder",d.placeholder),b("input").length&&!1==="oninput"in b("input")[0]&&"on"===a.attr("autocomplete")&&a.attr("autocomplete","off"),e.destroyEvents(),e.events(),c=e.getCaret(),
e.val(e.getMasked()),e.setCaret(c+e.getMCharsBeforeCount(c,!0))):(e.events(),e.val(e.getMasked()))};g.init(!a.is("input"))};b.maskWatchers={};var A=function(){var a=b(this),c={},d=a.attr("data-mask");a.attr("data-mask-reverse")&&(c.reverse=!0);a.attr("data-mask-clearifnotmatch")&&(c.clearIfNotMatch=!0);"true"===a.attr("data-mask-selectonfocus")&&(c.selectOnFocus=!0);if(z(a,d,c))return a.data("mask",new y(this,d,c))},z=function(a,c,d){d=d||{};var g=b(a).data("mask"),k=JSON.stringify;a=b(a).val()||
b(a).text();try{return"function"===typeof c&&(c=c(a)),"object"!==typeof g||k(g.options)!==k(d)||g.mask!==c}catch(l){}};b.fn.mask=function(a,c){c=c||{};var d=this.selector,g=b.jMaskGlobals,k=b.jMaskGlobals.watchInterval,l=function(){if(z(this,a,c))return b(this).data("mask",new y(this,a,c))};b(this).each(l);d&&""!==d&&g.watchInputs&&(clearInterval(b.maskWatchers[d]),b.maskWatchers[d]=setInterval(function(){b(document).find(d).each(l)},k));return this};b.fn.unmask=function(){clearInterval(b.maskWatchers[this.selector]);
delete b.maskWatchers[this.selector];return this.each(function(){var a=b(this).data("mask");a&&a.remove().removeData("mask")})};b.fn.cleanVal=function(){return this.data("mask").getCleanVal()};b.applyDataMask=function(a){a=a||b.jMaskGlobals.maskElements;(a instanceof b?a:b(a)).filter(b.jMaskGlobals.dataMaskAttr).each(A)};var p={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},
9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};b.jMaskGlobals=b.jMaskGlobals||{};p=b.jMaskGlobals=b.extend(!0,{},p,b.jMaskGlobals);p.dataMask&&b.applyDataMask();setInterval(function(){b.jMaskGlobals.watchDataMask&&b.applyDataMask()},p.watchInterval)});

/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @version 1.1.0
 * 
 * http://wenzhixin.net.cn/p/multiple-select/
 */

(function($) {

    'use strict';

    function MultipleSelect($el, options) {
        var that = this,
            name = $el.attr('name') || options.name || '',
            elWidth = $el.width();

        this.$el = $el.hide();
        this.options = options;

        this.$parent = $('<div class="ms-parent"></div>');
        this.$choice = $('<button type="button" class="ms-choice"><span class="placeholder">' +
            options.placeholder + '</span><div></div></button>');
        this.$drop = $('<div class="ms-drop ' + options.position + '"></div>');
        this.$el.after(this.$parent);
        this.$parent.append(this.$choice);
        this.$parent.append(this.$drop);

        if (this.$el.prop('disabled')) {
            this.$choice.addClass('disabled');
        }
        this.$choice.css('width', elWidth + 'px');
        this.$drop.css({
            width: (options.width || elWidth) + 'px'
        });

        if (!this.options.keepOpen) {
            $('body').click(function(e) {
                if ($(e.target)[0] === that.$choice[0] ||
                    $(e.target).parents('.ms-choice')[0] === that.$choice[0]) {
                    return;
                }
                if (($(e.target)[0] === that.$drop[0] ||
                    $(e.target).parents('.ms-drop')[0] !== that.$drop[0]) &&
                    that.options.isOpen) {
                    that.close();
                }
            });
        }

        this.selectAllName = 'name="selectAll' + name + '"';
        this.selectGroupName = 'name="selectGroup' + name + '"';
        this.selectItemName = 'name="selectItem' + name + '"';
    }

    MultipleSelect.prototype = {
        constructor : MultipleSelect,

        init: function() {
            var that = this,
                html = [];
            if (this.options.filter) {
                html.push(
                    '<div class="ms-search">',
                        '<input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false">',
                    '</div>'
                );
            }
            html.push('<ul>');
            if (this.options.selectAll && !this.options.single) {
                html.push(
                    '<li>',
                        '<label>',
                            '<input type="checkbox" ' + this.selectAllName + ' /> ',
                            '[' + this.options.selectAllText + ']',
                        '</label>',
                    '</li>'
                );
            }
            $.each(this.$el.children(), function(i, elm) {
                html.push(that.optionToHtml(i, elm));
            });
            html.push('<li class="ms-no-results">No matches found</li>');
            html.push('</ul>');
            this.$drop.html(html.join(''));
            this.$drop.find('ul').css('max-height', this.options.maxHeight + 'px');
            this.$drop.find('.multiple').css('width', this.options.multipleWidth + 'px');

            this.$searchInput = this.$drop.find('.ms-search input');
            this.$selectAll = this.$drop.find('input[' + this.selectAllName + ']');
            this.$selectGroups = this.$drop.find('input[' + this.selectGroupName + ']');
            this.$selectItems = this.$drop.find('input[' + this.selectItemName + ']:enabled');
            this.$disableItems = this.$drop.find('input[' + this.selectItemName + ']:disabled');
            this.$noResults = this.$drop.find('.ms-no-results');
            this.events();
            this.update();

            if (this.options.isOpen) {
                this.open();
            }
        },

        optionToHtml: function(i, elm, group, groupDisabled) {
            var that = this,
                $elm = $(elm),
                html = [],
                multiple = this.options.multiple,
                disabled,
                type = this.options.single ? 'radio' : 'checkbox';

            if ($elm.is('option')) {
                var value = $elm.val(),
                    text = $elm.text(),
	                title = $elm.attr('title') ? $elm.attr('title') : '',
                    selected = $elm.prop('selected'),
                    style = this.options.styler(value) ? ' style="' + this.options.styler(value) + '"' : '';

                disabled = groupDisabled || $elm.prop('disabled');
                html.push(
                    '<li' + (multiple ? ' class="multiple"' : '') + style + '>',
                        '<label' + (disabled ? ' class="disabled"' : '') + ' title="' + title + '">',
                            '<input type="' + type + '" ' + this.selectItemName + ' value="' + value + '"' +
                                (selected ? ' checked="checked"' : '') +
                                (disabled ? ' disabled="disabled"' : '') +
                                (group ? ' data-group="' + group + '"' : '') +
                                '/> ',
                            text,
                        '</label>',
                    '</li>'
                );
            } else if (!group && $elm.is('optgroup')) {
                var _group = 'group_' + i,
                    label = $elm.attr('label');

                disabled = $elm.prop('disabled');
                html.push(
                    '<li class="group">',
                        '<label class="optgroup' + (disabled ? ' disabled' : '') + '" data-group="' + _group + '">',
                            '<input type="checkbox" ' + this.selectGroupName +
                                (disabled ? ' disabled="disabled"' : '') + ' /> ',
                            label,
                        '</label>',
                    '</li>');
                $.each($elm.children(), function(i, elm) {
                    html.push(that.optionToHtml(i, elm, _group, disabled));
                });
            }
            return html.join('');
        },

        events: function() {
            var that = this;
            this.$choice.off('click').on('click', function(e) {
                e.preventDefault();
                that[that.options.isOpen ? 'close' : 'open']();
            })
                .off('focus').on('focus', this.options.onFocus)
                .off('blur').on('blur', this.options.onBlur);

            this.$parent.off('keydown').on('keydown', function(e) {
                switch (e.which) {
                    case 27: // esc key
                        that.close();
                        that.$choice.focus();
                        break;
                }
            });
            this.$searchInput.off('keyup').on('keyup', function() {
                that.filter();
            });
            this.$selectAll.off('click').on('click', function() {
                var checked = $(this).prop('checked'),
                    $items = that.$selectItems.filter(':visible');
                if ($items.length === that.$selectItems.length) {
                    that[checked ? 'checkAll' : 'uncheckAll']();
                } else { // when the filter option is true
                    that.$selectGroups.prop('checked', checked);
                    $items.prop('checked', checked);
                    that.options[checked ? 'onCheckAll' : 'onUncheckAll']();
                    that.update();
                }
            });
            this.$selectGroups.off('click').on('click', function() {
                var group = $(this).parent().attr('data-group'),
                    $items = that.$selectItems.filter(':visible'),
                    $children = $items.filter('[data-group="' + group + '"]'),
                    checked = $children.length !== $children.filter(':checked').length;
                $children.prop('checked', checked);
                that.updateSelectAll();
                that.update();
                that.options.onOptgroupClick({
                    label: $(this).parent().text(),
                    checked: checked,
                    children: $children.get()
                });
            });
            this.$selectItems.off('click').on('click', function() {
                that.updateSelectAll();
                that.update();
                that.updateOptGroupSelect();
                that.options.onClick({
                    label: $(this).parent().text(),
                    value: $(this).val(),
                    checked: $(this).prop('checked')
                });
            });
        },

        open: function() {
            if (this.$choice.hasClass('disabled')) {
                return;
            }
            this.options.isOpen = true;
            this.$choice.find('>div').addClass('open');
            this.$drop.show();
            if (this.options.container) {
                var offset = this.$drop.offset();
                this.$drop.appendTo($(this.options.container));
                this.$drop.offset({ top: offset.top, left: offset.left });
            }
            if (this.options.filter) {
                this.$searchInput.val('');
                this.filter();
            }
            this.options.onOpen();
        },

        close: function() {
            this.options.isOpen = false;
            this.$choice.find('>div').removeClass('open');
            this.$drop.hide();
            if (this.options.container) {
                this.$parent.append(this.$drop);
                this.$drop.css({
                    'top': 'auto',
                    'left': 'auto'
                })
            }
            this.options.onClose();
        },

        update: function() {
            var selects = this.getSelects('text'),
                $span = this.$choice.find('>span');
            if (selects.length === this.$selectItems.length + this.$disableItems.length && this.options.allSelected) {
                $span.removeClass('placeholder').html(this.options.allSelected);
            } else if (selects.length > this.options.minumimCountSelected && this.options.countSelected) {
                $span.removeClass('placeholder').html(this.options.countSelected
                    .replace('#', selects.length)
                    .replace('%', this.$selectItems.length + this.$disableItems.length));
            } else if (selects.length) {
                $span.removeClass('placeholder').html(selects.join(', '));
            } else {
                $span.addClass('placeholder').html(this.options.placeholder);
            }
            // set selects to select
            this.$el.val(this.getSelects());
        },

        updateSelectAll: function() {
            var $items = this.$selectItems.filter(':visible');
            this.$selectAll.prop('checked', $items.length &&
                $items.length === $items.filter(':checked').length);
            if (this.$selectAll.prop('checked')) {
                this.options.onCheckAll();
            }
        },

        updateOptGroupSelect: function() {
            var $items = this.$selectItems.filter(':visible');
            $.each(this.$selectGroups, function(i, val) {
                var group = $(val).parent().attr('data-group'),
                    $children = $items.filter('[data-group="' + group + '"]');
                $(val).prop('checked', $children.length &&
                    $children.length === $children.filter(':checked').length);
            });
        },

        //value or text, default: 'value'
        getSelects: function(type) {
            var that = this,
                texts = [],
                values = [];
            this.$drop.find('input[' + this.selectItemName + ']:checked').each(function() {
                texts.push($(this).parent().text());
                values.push($(this).val());
            });

            if (type === 'text' && this.$selectGroups.length) {
                texts = [];
                this.$selectGroups.each(function() {
                    var html = [],
                        text = $.trim($(this).parent().text()),
                        group = $(this).parent().data('group'),
                        $children = that.$drop.find('[' + that.selectItemName + '][data-group="' + group + '"]'),
                        $selected = $children.filter(':checked');

                    if ($selected.length === 0) {
                        return;
                    }

                    html.push('[');
                    html.push(text);
                    if ($children.length > $selected.length) {
                        var list = [];
                        $selected.each(function() {
                            list.push($(this).parent().text());
                        });
                        html.push(': ' + list.join(', '));
                    }
                    html.push(']');
                    texts.push(html.join(''));
                });
            }
            return type === 'text' ? texts : values;
        },

        setSelects: function(values) {
            var that = this;
            this.$selectItems.prop('checked', false);
            $.each(values, function(i, value) {
                that.$selectItems.filter('[value="' + value + '"]').prop('checked', true);
            });
            this.$selectAll.prop('checked', this.$selectItems.length ===
                this.$selectItems.filter(':checked').length);
            this.update();
        },

        enable: function() {
            this.$choice.removeClass('disabled');
        },

        disable: function() {
            this.$choice.addClass('disabled');
        },

        checkAll: function() {
            this.$selectItems.prop('checked', true);
            this.$selectGroups.prop('checked', true);
            this.$selectAll.prop('checked', true);
            this.update();
            this.options.onCheckAll();
        },

        uncheckAll: function() {
            this.$selectItems.prop('checked', false);
            this.$selectGroups.prop('checked', false);
            this.$selectAll.prop('checked', false);
            this.update();
            this.options.onUncheckAll();
        },

        focus: function() {
            this.$choice.focus();
            this.options.onFocus();
        },

        blur: function() {
            this.$choice.blur();
            this.options.onBlur();
        },

        refresh: function() {
            this.init();
        },

        filter: function() {
            var that = this,
                text = $.trim(this.$searchInput.val()).toLowerCase();
            if (text.length === 0) {
                this.$selectItems.parent().show();
                this.$disableItems.parent().show();
                this.$selectGroups.parent().show();
            } else {
                this.$selectItems.each(function() {
                    var $parent = $(this).parent();
                    $parent[$parent.text().toLowerCase().indexOf(text) < 0 ? 'hide' : 'show']();
                });
                this.$disableItems.parent().hide();
                this.$selectGroups.each(function() {
                    var $parent = $(this).parent();
                    var group = $parent.attr('data-group'),
                        $items = that.$selectItems.filter(':visible');
                    $parent[$items.filter('[data-group="' + group + '"]').length === 0 ? 'hide' : 'show']();
                });

                //Check if no matches found
                if (this.$selectItems.filter(':visible').length) {
                    this.$selectAll.parent().show();
                    this.$noResults.hide();
                } else {
                    this.$selectAll.parent().hide();
                    this.$noResults.show();
                }
            }
            this.updateOptGroupSelect();
            this.updateSelectAll();
        }
    };

    $.fn.multipleSelect = function() {
        var option = arguments[0],
            args = arguments,

            value,
            allowedMethods = [
                'getSelects', 'setSelects',
                'enable', 'disable',
                'checkAll', 'uncheckAll',
                'focus', 'blur',
                'refresh'
            ];

        this.each(function() {
            var $this = $(this),
                data = $this.data('multipleSelect'),
                options = $.extend({}, $.fn.multipleSelect.defaults,
                    $this.data(), typeof option === 'object' && option);

            if (!data) {
                data = new MultipleSelect($this, options);
                $this.data('multipleSelect', data);
            }

            if (typeof option === 'string') {
                if ($.inArray(option, allowedMethods) < 0) {
                    throw "Unknown method: " + option;
                }
                value = data[option](args[1]);
            } else {
                data.init();
            }
        });

        return value ? value : this;
    };

    $.fn.multipleSelect.defaults = {
        name: '',
        isOpen: false,
        placeholder: '',
        selectAll: true,
        selectAllText: 'Select all',
        allSelected: 'All selected',
        minumimCountSelected: 3,
        countSelected: '# of % selected',
        multiple: false,
        multipleWidth: 80,
        single: false,
        filter: false,
        width: undefined,
        maxHeight: 250,
        container: null,
        position: 'bottom',
        keepOpen: false,

        styler: function() {return false;},

        onOpen: function() {return false;},
        onClose: function() {return false;},
        onCheckAll: function() {return false;},
        onUncheckAll: function() {return false;},
        onFocus: function() {return false;},
        onBlur: function() {return false;},
        onOptgroupClick: function() {return false;},
        onClick: function() {return false;}
    };
})(jQuery);

/*
 SlidesJS 3.0.4 http://slidesjs.com
 (c) 2013 by Nathan Searles http://nathansearles.com
 Updated: June 26th, 2013
 Apache License: http://www.apache.org/licenses/LICENSE-2.0
 */
(function () {
	(function (e, t, n) {
		var r, i, s;
		s = "slidesjs";
		i = {
			width: 940,
			height: 528,
			start: 1,
			navigation: {active: !0, effect: "slide"},
			pagination: {active: !0, effect: "slide"},
			play: {
				active: !1,
				effect: "slide",
				interval: 5e3,
				auto: !1,
				swap: !0,
				pauseOnHover: !1,
				restartDelay: 2500
			},
			effect: {slide: {speed: 500}, fade: {speed: 300, crossfade: !0}},
			callback: {
				loaded: function () {
				}, start: function () {
				}, complete: function () {
				}
			}
		};
		r = function () {
			function t(t, n) {
				this.element = t;
				this.options = e.extend(!0, {}, i, n);
				this._defaults = i;
				this._name = s;
				this.init()
			}

			return t
		}();
		r.prototype.init = function () {
			var n, r, i, s, o, u, a = this;
			n = e(this.element);
			this.data = e.data(this);
			e.data(this, "animating", !1);
			e.data(this, "total", n.children().not(".slidesjs-navigation", n).length);
			e.data(this, "current", this.options.start - 1);
			e.data(this, "vendorPrefix", this._getVendorPrefix());
			if (typeof TouchEvent != "undefined") {
				e.data(this, "touch", !0);
				this.options.effect.slide.speed = this.options.effect.slide.speed / 2
			}
			n.css({overflow: "hidden"});
			n.slidesContainer = n.children().not(".slidesjs-navigation", n).wrapAll("<div class='slidesjs-container'>", n).parent().css({
				overflow: "hidden",
				position: "relative"
			});
			e(".slidesjs-container", n).wrapInner("<div class='slidesjs-control'>", n).children();
			e(".slidesjs-control", n).css({position: "relative", left: 0});
			e(".slidesjs-control", n).children().addClass("slidesjs-slide").css({
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				zIndex: 0,
				display: "none",
				webkitBackfaceVisibility: "hidden"
			});
			e.each(e(".slidesjs-control", n).children(), function (t) {
				var n;
				n = e(this);
				return n.attr("slidesjs-index", t)
			});
			if (this.data.touch) {
				e(".slidesjs-control", n).on("touchstart", function (e) {
					return a._touchstart(e)
				});
				e(".slidesjs-control", n).on("touchmove", function (e) {
					return a._touchmove(e)
				});
				e(".slidesjs-control", n).on("touchend", function (e) {
					return a._touchend(e)
				})
			}
			n.fadeIn(0);
			this.update();
			this.data.touch && this._setuptouch();
			e(".slidesjs-control", n).children(":eq(" + this.data.current + ")").eq(0).fadeIn(0, function () {
				return e(this).css({zIndex: 10})
			});
			if (this.options.navigation.active) {
				o = e("<a>", {
					"class": "slidesjs-previous slidesjs-navigation",
					href: "#",
					title: "Previous",
					text: "Previous"
				}).appendTo(n);
				r = e("<a>", {
					"class": "slidesjs-next slidesjs-navigation",
					href: "#",
					title: "Next",
					text: "Next"
				}).appendTo(n)
			}
			e(".slidesjs-next", n).click(function (e) {
				e.preventDefault();
				a.stop(!0);
				return a.next(a.options.navigation.effect)
			});
			e(".slidesjs-previous", n).click(function (e) {
				e.preventDefault();
				a.stop(!0);
				return a.previous(a.options.navigation.effect)
			});
			if (this.options.play.active) {
				s = e("<a>", {
					"class": "slidesjs-play slidesjs-navigation",
					href: "#",
					title: "Play",
					text: "Play"
				}).appendTo(n);
				u = e("<a>", {
					"class": "slidesjs-stop slidesjs-navigation",
					href: "#",
					title: "Stop",
					text: "Stop"
				}).appendTo(n);
				s.click(function (e) {
					e.preventDefault();
					return a.play(!0)
				});
				u.click(function (e) {
					e.preventDefault();
					return a.stop(!0)
				});
				this.options.play.swap && u.css({display: "none"})
			}
			if (this.options.pagination.active) {
				i = e("<ul>", {"class": "slidesjs-pagination"}).appendTo(n);
				e.each(new Array(this.data.total), function (t) {
					var n, r;
					n = e("<li>", {"class": "slidesjs-pagination-item"}).appendTo(i);
					r = e("<a>", {href: "#", "data-slidesjs-item": t, html: t + 1}).appendTo(n);
					return r.click(function (t) {
						t.preventDefault();
						a.stop(!0);
						return a.goto(e(t.currentTarget).attr("data-slidesjs-item") * 1 + 1)
					})
				})
			}
			e(t).bind("resize", function () {
				return a.update()
			});
			this._setActive();
			this.options.play.auto && this.play();
			return this.options.callback.loaded(this.options.start)
		};
		r.prototype._setActive = function (t) {
			var n, r;
			n = e(this.element);
			this.data = e.data(this);
			r = t > -1 ? t : this.data.current;
			e(".active", n).removeClass("active");
			return e(".slidesjs-pagination li:eq(" + r + ") a", n).addClass("active")
		};
		r.prototype.update = function () {
			var t, n, r;
			t = e(this.element);
			this.data = e.data(this);
			e(".slidesjs-control", t).children(":not(:eq(" + this.data.current + "))").css({
				display: "none",
				left: 0,
				zIndex: 0
			});
			r = t.width();
			n = this.options.height / this.options.width * r;
			this.options.width = r;
			this.options.height = n;
			return e(".slidesjs-control, .slidesjs-container", t).css({width: r, height: n})
		};
		r.prototype.next = function (t) {
			var n;
			n = e(this.element);
			this.data = e.data(this);
			e.data(this, "direction", "next");
			t === void 0 && (t = this.options.navigation.effect);
			return t === "fade" ? this._fade() : this._slide()
		};
		r.prototype.previous = function (t) {
			var n;
			n = e(this.element);
			this.data = e.data(this);
			e.data(this, "direction", "previous");
			t === void 0 && (t = this.options.navigation.effect);
			return t === "fade" ? this._fade() : this._slide()
		};
		r.prototype.goto = function (t) {
			var n, r;
			n = e(this.element);
			this.data = e.data(this);
			r === void 0 && (r = this.options.pagination.effect);
			t > this.data.total ? t = this.data.total : t < 1 && (t = 1);
			if (typeof t == "number")return r === "fade" ? this._fade(t) : this._slide(t);
			if (typeof t == "string") {
				if (t === "first")return r === "fade" ? this._fade(0) : this._slide(0);
				if (t === "last")return r === "fade" ? this._fade(this.data.total) : this._slide(this.data.total)
			}
		};
		r.prototype._setuptouch = function () {
			var t, n, r, i;
			t = e(this.element);
			this.data = e.data(this);
			i = e(".slidesjs-control", t);
			n = this.data.current + 1;
			r = this.data.current - 1;
			r < 0 && (r = this.data.total - 1);
			n > this.data.total - 1 && (n = 0);
			i.children(":eq(" + n + ")").css({display: "block", left: this.options.width});
			return i.children(":eq(" + r + ")").css({display: "block", left: -this.options.width})
		};
		r.prototype._touchstart = function (t) {
			var n, r;
			n = e(this.element);
			this.data = e.data(this);
			r = t.originalEvent.touches[0];
			this._setuptouch();
			e.data(this, "touchtimer", Number(new Date));
			e.data(this, "touchstartx", r.pageX);
			e.data(this, "touchstarty", r.pageY);
			return t.stopPropagation()
		};
		r.prototype._touchend = function (t) {
			var n, r, i, s, o, u, a, f = this;
			n = e(this.element);
			this.data = e.data(this);
			u = t.originalEvent.touches[0];
			s = e(".slidesjs-control", n);
			if (s.position().left > this.options.width * .5 || s.position().left > this.options.width * .1 && Number(new Date) - this.data.touchtimer < 250) {
				e.data(this, "direction", "previous");
				this._slide()
			} else if (s.position().left < -(this.options.width * .5) || s.position().left < -(this.options.width * .1) && Number(new Date) - this.data.touchtimer < 250) {
				e.data(this, "direction", "next");
				this._slide()
			} else {
				i = this.data.vendorPrefix;
				a = i + "Transform";
				r = i + "TransitionDuration";
				o = i + "TransitionTimingFunction";
				s[0].style[a] = "translateX(0px)";
				s[0].style[r] = this.options.effect.slide.speed * .85 + "ms"
			}
			s.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function () {
				i = f.data.vendorPrefix;
				a = i + "Transform";
				r = i + "TransitionDuration";
				o = i + "TransitionTimingFunction";
				s[0].style[a] = "";
				s[0].style[r] = "";
				return s[0].style[o] = ""
			});
			return t.stopPropagation()
		};
		r.prototype._touchmove = function (t) {
			var n, r, i, s, o;
			n = e(this.element);
			this.data = e.data(this);
			s = t.originalEvent.touches[0];
			r = this.data.vendorPrefix;
			i = e(".slidesjs-control", n);
			o = r + "Transform";
			e.data(this, "scrolling", Math.abs(s.pageX - this.data.touchstartx) < Math.abs(s.pageY - this.data.touchstarty));
			if (!this.data.animating && !this.data.scrolling) {
				t.preventDefault();
				this._setuptouch();
				i[0].style[o] = "translateX(" + (s.pageX - this.data.touchstartx) + "px)"
			}
			return t.stopPropagation()
		};
		r.prototype.play = function (t) {
			var n, r, i, s = this;
			n = e(this.element);
			this.data = e.data(this);
			if (!this.data.playInterval) {
				if (t) {
					r = this.data.current;
					this.data.direction = "next";
					this.options.play.effect === "fade" ? this._fade() : this._slide()
				}
				e.data(this, "playInterval", setInterval(function () {
					r = s.data.current;
					s.data.direction = "next";
					return s.options.play.effect === "fade" ? s._fade() : s._slide()
				}, this.options.play.interval));
				i = e(".slidesjs-container", n);
				if (this.options.play.pauseOnHover) {
					i.unbind();
					i.bind("mouseenter", function () {
						return s.stop()
					});
					i.bind("mouseleave", function () {
						return s.options.play.restartDelay ? e.data(s, "restartDelay", setTimeout(function () {
							return s.play(!0)
						}, s.options.play.restartDelay)) : s.play()
					})
				}
				e.data(this, "playing", !0);
				e(".slidesjs-play", n).addClass("slidesjs-playing");
				if (this.options.play.swap) {
					e(".slidesjs-play", n).hide();
					return e(".slidesjs-stop", n).show()
				}
			}
		};
		r.prototype.stop = function (t) {
			var n;
			n = e(this.element);
			this.data = e.data(this);
			clearInterval(this.data.playInterval);
			this.options.play.pauseOnHover && t && e(".slidesjs-container", n).unbind();
			e.data(this, "playInterval", null);
			e.data(this, "playing", !1);
			e(".slidesjs-play", n).removeClass("slidesjs-playing");
			if (this.options.play.swap) {
				e(".slidesjs-stop", n).hide();
				return e(".slidesjs-play", n).show()
			}
		};
		r.prototype._slide = function (t) {
			var n, r, i, s, o, u, a, f, l, c, h = this;
			n = e(this.element);
			this.data = e.data(this);
			if (!this.data.animating && t !== this.data.current + 1) {
				e.data(this, "animating", !0);
				r = this.data.current;
				if (t > -1) {
					t -= 1;
					c = t > r ? 1 : -1;
					i = t > r ? -this.options.width : this.options.width;
					o = t
				} else {
					c = this.data.direction === "next" ? 1 : -1;
					i = this.data.direction === "next" ? -this.options.width : this.options.width;
					o = r + c
				}
				o === -1 && (o = this.data.total - 1);
				o === this.data.total && (o = 0);
				this._setActive(o);
				a = e(".slidesjs-control", n);
				t > -1 && a.children(":not(:eq(" + r + "))").css({display: "none", left: 0, zIndex: 0});
				a.children(":eq(" + o + ")").css({display: "block", left: c * this.options.width, zIndex: 10});
				this.options.callback.start(r + 1);
				if (this.data.vendorPrefix) {
					u = this.data.vendorPrefix;
					l = u + "Transform";
					s = u + "TransitionDuration";
					f = u + "TransitionTimingFunction";
					a[0].style[l] = "translateX(" + i + "px)";
					a[0].style[s] = this.options.effect.slide.speed + "ms";
					return a.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function () {
						a[0].style[l] = "";
						a[0].style[s] = "";
						a.children(":eq(" + o + ")").css({left: 0});
						a.children(":eq(" + r + ")").css({display: "none", left: 0, zIndex: 0});
						e.data(h, "current", o);
						e.data(h, "animating", !1);
						a.unbind("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd");
						a.children(":not(:eq(" + o + "))").css({display: "none", left: 0, zIndex: 0});
						h.data.touch && h._setuptouch();
						return h.options.callback.complete(o + 1)
					})
				}
				return a.stop().animate({left: i}, this.options.effect.slide.speed, function () {
					a.css({left: 0});
					a.children(":eq(" + o + ")").css({left: 0});
					return a.children(":eq(" + r + ")").css({
						display: "none",
						left: 0,
						zIndex: 0
					}, e.data(h, "current", o), e.data(h, "animating", !1), h.options.callback.complete(o + 1))
				})
			}
		};
		r.prototype._fade = function (t) {
			var n, r, i, s, o, u = this;
			n = e(this.element);
			this.data = e.data(this);
			if (!this.data.animating && t !== this.data.current + 1) {
				e.data(this, "animating", !0);
				r = this.data.current;
				if (t) {
					t -= 1;
					o = t > r ? 1 : -1;
					i = t
				} else {
					o = this.data.direction === "next" ? 1 : -1;
					i = r + o
				}
				i === -1 && (i = this.data.total - 1);
				i === this.data.total && (i = 0);
				this._setActive(i);
				s = e(".slidesjs-control", n);
				s.children(":eq(" + i + ")").css({display: "none", left: 0, zIndex: 10});
				this.options.callback.start(r + 1);
				if (this.options.effect.fade.crossfade) {
					s.children(":eq(" + this.data.current + ")").stop().fadeOut(this.options.effect.fade.speed);
					return s.children(":eq(" + i + ")").stop().fadeIn(this.options.effect.fade.speed, function () {
						s.children(":eq(" + i + ")").css({zIndex: 0});
						e.data(u, "animating", !1);
						e.data(u, "current", i);
						return u.options.callback.complete(i + 1)
					})
				}
				return s.children(":eq(" + r + ")").stop().fadeOut(this.options.effect.fade.speed, function () {
					s.children(":eq(" + i + ")").stop().fadeIn(u.options.effect.fade.speed, function () {
						return s.children(":eq(" + i + ")").css({zIndex: 10})
					});
					e.data(u, "animating", !1);
					e.data(u, "current", i);
					return u.options.callback.complete(i + 1)
				})
			}
		};
		r.prototype._getVendorPrefix = function () {
			var e, t, r, i, s;
			e = n.body || n.documentElement;
			r = e.style;
			i = "transition";
			s = ["Moz", "Webkit", "Khtml", "O", "ms"];
			i = i.charAt(0).toUpperCase() + i.substr(1);
			t = 0;
			while (t < s.length) {
				if (typeof r[s[t] + i] == "string")return s[t];
				t++
			}
			return !1
		};
		return e.fn[s] = function (t) {
			return this.each(function () {
				if (!e.data(this, "plugin_" + s))return e.data(this, "plugin_" + s, new r(this, t))
			})
		}
	})(jQuery, window, document)
}).call(this);



/*!
 * Polyfill.js - v0.1.0
 *
 * Copyright (c) 2013 Philip Walton <http://philipwalton.com>
 * Released under the MIT license
 *
 * Date: 2013-05-12
 */
(function(e,t){"use strict";function n(e){return e.replace(/^\s+|\s+$/g,"")}function r(e,t){var n,r=0;if(!e||!t)return!1;for(;n=t[r++];)if(e===n)return!0;return!1}function i(e){return u.test(e)}function s(e){var t,n=0;for(this._rules=[];t=e[n++];)this._rules.push(new o(t))}function o(e){this._rule=e}function a(e){return this instanceof a?(this._options=e,e.keywords||(this._options={keywords:e}),this._promise=[],this._getStylesheets(),this._downloadStylesheets(),this._parseStylesheets(),this._filterCSSByKeywords(),this._buildMediaQueryMap(),this._reportInitialMatches(),this._addMediaListeners(),undefined):new a(e)}var u=RegExp("^"+({}.valueOf+"").replace(/[.*+?\^${}()|\[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),c=function(){var e=t.getElementsByTagName("base")[0],n=/^([a-zA-Z:]*\/\/)/;return function(t){var r=!n.test(t)&&!e||t.replace(RegExp.$1,"").split("/")[0]===location.host;return r}}(),f={matchMedia:e.matchMedia&&e.matchMedia("only all").matches,nativeMatchMedia:i(e.matchMedia)},l=function(){function t(e){for(var t,n=0;t=e[n++];)u[t]||r(t,c)||c.push(t)}function n(){if(0===h.readyState||4===h.readyState){var e;(e=c[0])&&i(e),e||o()}}function i(e){l++,h.open("GET",e,!0),h.onreadystatechange=function(){4!=h.readyState||200!=h.status&&304!=h.status||(u[e]=h.responseText,c.shift(),n())},h.send(null)}function s(e){for(var t,n=0,r=0;t=e[n++];)u[t]&&r++;return r===e.length}function o(){for(var e;e=f.shift();)a(e.urls,e.fn)}function a(e,t){for(var n,r=[],i=0;n=e[i++];)r.push(u[n]);t.call(null,r)}var u={},c=[],f=[],l=0,h=function(){var t;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return t}();return{request:function(e,r){f.push({urls:e,fn:r}),s(e)?o():(t(e),n())},clearCache:function(){u={}},_getRequestCount:function(){return l}}}(),h={_cache:{},clearCache:function(){h._cache={}},parse:function(e,t){function r(){return o(/^\{\s*/)}function i(){return o(/^\}\s*/)}function s(){var t,n=[];for(a(),u(n);"}"!=e.charAt(0)&&(t=S()||x());)n.push(t),u(n);return n}function o(t){var n=t.exec(e);if(n)return e=e.slice(n[0].length),n}function a(){o(/^\s*/)}function u(e){e=e||[];for(var t;t=c();)e.push(t);return e}function c(){if("/"==e[0]&&"*"==e[1]){for(var t=2;"*"!=e[t]||"/"!=e[t+1];)++t;t+=2;var n=e.slice(2,t-2);return e=e.slice(t),a(),{comment:n}}}function f(){var e=o(/^([^{]+)/);if(e)return n(e[0]).split(/\s*,\s*/)}function l(){var e=o(/^(\*?[\-\w]+)\s*/);if(e&&(e=e[0],o(/^:\s*/))){var t=o(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)\s*/);if(t)return t=n(t[0]),o(/^[;\s]*/),{property:e,value:t}}}function d(){for(var e,t=[];e=o(/^(from|to|\d+%|\.\d+%|\d+\.\d+%)\s*/);)t.push(e[1]),o(/^,\s*/);return t.length?{values:t,declarations:R()}:undefined}function p(){var e=o(/^@([\-\w]+)?keyframes */);if(e){var t=e[1],e=o(/^([\-\w]+)\s*/);if(e){var n=e[1];if(r()){u();for(var s,a=[];s=d();)a.push(s),u();if(i()){var c={name:n,keyframes:a};return t&&(c.vendor=t),c}}}}}function v(){var e=o(/^@supports *([^{]+)/);if(e){var t=n(e[1]);if(r()){u();var a=s();if(i())return{supports:t,rules:a}}}}function m(){var e=o(/^@media *([^{]+)/);if(e){var t=n(e[1]);if(r()){u();var a=s();if(i())return{media:t,rules:a}}}}function y(){var e=o(/^@page */);if(e){var t=f()||[],n=[];if(r()){u();for(var s;s=l()||_();)n.push(s),u();if(i())return{type:"page",selectors:t,declarations:n}}}}function _(){var e=o(/^@([a-z\-]+) */);if(e){var t=e[1];return{type:t,declarations:R()}}}function M(){return E("import")}function g(){return E("charset")}function w(){return E("namespace")}function E(e){var t=o(RegExp("^@"+e+" *([^;\\n]+);\\s*"));if(t){var r={};return r[e]=n(t[1]),r}}function R(){var e=[];if(r()){u();for(var t;t=l();)e.push(t),u();if(i())return e}}function S(){return p()||m()||v()||M()||g()||w()||y()}function x(){var e=f();if(e)return u(),{selectors:e,declarations:R()}}return t&&h._cache[t]?h._cache[t]:(e=e.replace(/\/\*[\s\S]*?\*\//g,""),h._cache[t]=s())},filter:function(e,t){function r(e,t){return e||t?e?e.concat(t):[t]:undefined}function i(e){null==e.media&&delete e.media,null==e.supports&&delete e.supports,f.push(e)}function s(e,t){if(t)for(var n=t.length;n--;)if(e.indexOf(t[n])>=0)return!0}function o(e,t){for(var r,i,s,o,a=/\*/,u=0;r=t[u++];)if(i=r.split(":"),s=RegExp("^"+n(i[0]).replace(a,".*")+"$"),o=RegExp("^"+n(i[1]).replace(a,".*")+"$"),s.test(e.property)&&o.test(e.value))return!0}function a(e,n,r){return t.selectors?s(e.selectors.join(","),t.selectors)?(i({media:n,supports:r,selectors:e.selectors,declarations:e.declarations}),!0):undefined:undefined}function u(e,n,r){if(t.declarations)for(var s,a=0;s=e.declarations[a++];)if(o(s,t.declarations))return i({media:n,supports:r,selectors:e.selectors,declarations:e.declarations}),!0}function c(e,t,n){for(var i,s=0;i=e[s++];)i.declarations?a(i,t,n)||u(i,t,n):i.rules&&i.media?c(i.rules,r(t,i.media),n):i.rules&&i.supports&&c(i.rules,t,r(n,i.supports))}var f=[];return c(e),f}},d=function(){function n(){if(s)return s;var e=t.documentElement,n=t.body,r=e.style.fontSize,i=n.style.fontSize,o=t.createElement("div");return e.style.fontSize="1em",n.style.fontSize="1em",n.appendChild(o),o.style.width="1em",o.style.position="absolute",s=o.offsetWidth,n.removeChild(o),n.style.fontSize=i,e.style.fontSize=r,s}function r(t){return e.matchMedia(t)}function i(e){var r,i,s=!1;return o=t.documentElement.clientWidth,a.test(e)&&(r="em"===RegExp.$2?parseFloat(RegExp.$1)*n():parseFloat(RegExp.$1)),u.test(e)&&(i="em"===RegExp.$2?parseFloat(RegExp.$1)*n():parseFloat(RegExp.$1)),r&&i?s=o>=r&&i>=o:(r&&o>=r&&(s=!0),i&&i>=o&&(s=!0)),{matches:s,media:e}}var s,o,a=/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,u=/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,c={};return{matchMedia:function(e){return f.matchMedia?r(e):i(e)},clearCache:function(){f.nativeMatchMedia||(o=null,c={})}}}(),p=function(){function t(e,t){var n;return function(){clearTimeout(n),n=setTimeout(e,t)}}var n=function(){var e=[];return{add:function(t,n,r){for(var i,s=0;i=e[s++];)if(i.polyfill==t&&i.mql===n&&i.fn===r)return!1;n.addListener(r),e.push({polyfill:t,mql:n,fn:r})},remove:function(t){for(var n,r=0;n=e[r++];)n.polyfill===t&&(n.mql.removeListener(n.fn),e.splice(--r,1))}}}(),r=function(t){function n(){for(var e,n=0;e=t[n++];)e.fn()}return{add:function(r,i){t.length||(e.addEventListener?e.addEventListener("resize",n,!1):e.attachEvent("onresize",n)),t.push({polyfill:r,fn:i})},remove:function(r){for(var i,s=0;i=t[s++];)i.polyfill===r&&t.splice(--s,1);t.length||(e.removeEventListener?e.removeEventListener("resize",n,!1):e.detachEvent&&e.detachEvent("onresize",n))}}}([]);return{removeListeners:function(e){f.nativeMatchMedia?n.remove(e):r.remove(e)},addListeners:function(e,i){function s(){if(f.nativeMatchMedia)for(var s in a)a.hasOwnProperty(s)&&function(t,r){n.add(e,t,function(){i.call(e,r,t.matches)})}(a[s],s);else{var u=t(function(e,t){return function(){o(e,t)}}(e,a),e._options.debounceTimeout||100);r.add(e,u)}}function o(e,t){var n,r={};d.clearCache();for(n in t)t.hasOwnProperty(n)&&(r[n]=d.matchMedia(n).matches,r[n]!=u[n]&&i.call(e,n,d.matchMedia(n).matches));u=r}var a=e._mediaQueryMap,u={};(function(){for(var e in a)a.hasOwnProperty(e)&&(u[e]=d.matchMedia(e).matches)})(),s()}}}();s.prototype.each=function(e,t){var n,r=0;for(t||(t=this);n=this._rules[r++];)e.call(t,n)},s.prototype.size=function(){return this._rules.length},s.prototype.at=function(e){return this._rules[e]},o.prototype.getDeclaration=function(){for(var e,t={},n=0,r=this._rule.declarations;e=r[n++];)t[e.property]=e.value;return t},o.prototype.getSelectors=function(){return this._rule.selectors.join(", ")},o.prototype.getMedia=function(){return this._rule.media.join(" and ")},a.prototype.doMatched=function(e){return this._doMatched=e,this._resolve(),this},a.prototype.undoUnmatched=function(e){return this._undoUnmatched=e,this._resolve(),this},a.prototype.getCurrentMatches=function(){for(var e,t,n=0,r=[];e=this._filteredRules[n++];)t=e.media&&e.media.join(" and "),(!t||d.matchMedia(t).matches)&&r.push(e);return new s(r)},a.prototype.destroy=function(){this._undoUnmatched&&(this._undoUnmatched(this.getCurrentMatches()),p.removeListeners(this))},a.prototype._defer=function(e,t){e.call(this)?t.call(this):this._promise.push({condition:e,callback:t})},a.prototype._resolve=function(){for(var e,t=0;e=this._promise[t];)e.condition.call(this)?(this._promise.splice(t,1),e.callback.call(this)):t++},a.prototype._getStylesheets=function(){var e,n,i,s,o,a=0,u=[];if(this._options.include){for(n=this._options.include;e=n[a++];)if(i=t.getElementById(e)){if(i.media&&"print"==i.media)continue;if(!c(i.href))continue;o={href:i.href},i.media&&(o.media=i.media),u.push(o)}}else for(n=this._options.exclude,s=t.getElementsByTagName("link");i=s[a++];)i.rel&&"stylesheet"==i.rel&&"print"!=i.media&&c(i.href)&&!r(i.id,n)&&(o={href:i.href},i.media&&(o.media=i.media),u.push(o));return this._stylesheets=u},a.prototype._downloadStylesheets=function(){for(var e,t=this,n=[],r=0;e=this._stylesheets[r++];)n.push(e.href);l.request(n,function(e){for(var n,r=0;n=e[r];)t._stylesheets[r++].text=n;t._resolve()})},a.prototype._parseStylesheets=function(){this._defer(function(){return this._stylesheets&&this._stylesheets.length&&this._stylesheets[0].text},function(){for(var e,t=0;e=this._stylesheets[t++];)e.rules=h.parse(e.text,e.url)})},a.prototype._filterCSSByKeywords=function(){this._defer(function(){return this._stylesheets&&this._stylesheets.length&&this._stylesheets[0].rules},function(){for(var e,t,n=[],r=0;e=this._stylesheets[r++];)t=e.media,t&&"all"!=t&&"screen"!=t?n.push({rules:e.rules,media:e.media}):n=n.concat(e.rules);this._filteredRules=h.filter(n,this._options.keywords)})},a.prototype._buildMediaQueryMap=function(){this._defer(function(){return this._filteredRules},function(){var e,t,n=0;for(this._mediaQueryMap={};t=this._filteredRules[n++];)t.media&&(e=t.media.join(" and "),this._mediaQueryMap[e]=d.matchMedia(e))})},a.prototype._reportInitialMatches=function(){this._defer(function(){return this._filteredRules&&this._doMatched},function(){this._doMatched(this.getCurrentMatches())})},a.prototype._addMediaListeners=function(){this._defer(function(){return this._filteredRules&&this._doMatched&&this._undoUnmatched},function(){p.addListeners(this,function(e,t){for(var n,r=0,i=[],o=[];n=this._filteredRules[r++];)n.media&&n.media.join(" and ")==e&&(t?i:o).push(n);i.length&&this._doMatched(new s(i)),o.length&&this._undoUnmatched(new s(o))})})},a.modules={DownloadManager:l,StyleManager:h,MediaManager:d,EventManager:p},a.constructors={Ruleset:s,Rule:o},e.Polyfill=a})(window,document);
/*http://joequery.github.io/Stupid-Table-Plugin*/
(function(c){c.fn.stupidtable=function(b){return this.each(function(){var a=c(this);b=b||{};b=c.extend({},c.fn.stupidtable.default_sort_fns,b);a.data("sortFns",b);a.on("click.stupidtable","thead th",function(){c(this).stupidsort()})})};c.fn.stupidsort=function(b){var a=c(this),g=0,f=c.fn.stupidtable.dir,e=a.closest("table"),k=a.data("sort")||null;if(null!==k){a.parents("tr").find("th").slice(0,c(this).index()).each(function(){var a=c(this).attr("colspan")||1;g+=parseInt(a,10)});var d;1==arguments.length?
d=b:(d=b||a.data("sort-default")||f.ASC,a.data("sort-dir")&&(d=a.data("sort-dir")===f.ASC?f.DESC:f.ASC));e.trigger("beforetablesort",{column:g,direction:d});e.css("display");setTimeout(function(){var b=[],l=e.data("sortFns")[k],h=e.children("tbody").children("tr");h.each(function(a,e){var d=c(e).children().eq(g),f=d.data("sort-value");"undefined"===typeof f&&(f=d.text(),d.data("sort-value",f));b.push([f,e])});b.sort(function(a,b){return l(a[0],b[0])});d!=f.ASC&&b.reverse();h=c.map(b,function(a){return a[1]});
e.children("tbody").append(h);e.find("th").data("sort-dir",null).removeClass("sorting-desc sorting-asc");a.data("sort-dir",d).addClass("sorting-"+d);e.trigger("aftertablesort",{column:g,direction:d});e.css("display")},10);return a}};c.fn.updateSortVal=function(b){var a=c(this);a.is("[data-sort-value]")&&a.attr("data-sort-value",b);a.data("sort-value",b);return a};c.fn.stupidtable.dir={ASC:"asc",DESC:"desc"};c.fn.stupidtable.default_sort_fns={"int":function(b,a){return parseInt(b,10)-parseInt(a,10)},
"float":function(b,a){return parseFloat(b)-parseFloat(a)},string:function(b,a){return b.localeCompare(a)},"string-ins":function(b,a){b=b.toLocaleLowerCase();a=a.toLocaleLowerCase();return b.localeCompare(a)}}})(jQuery);

/*! @vimeo/player v2.0.1 | (c) 2016 Vimeo | MIT License | https://github.com/vimeo/player.js */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.Vimeo=e.Vimeo||{},e.Vimeo.Player=t())}(this,function(){"use strict";function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function t(e,t,n){var r=T.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),T.set(e.element,r)}function n(e,t){var n=T.get(e.element)||{};return n[t]||[]}function r(e,t,n){var r=T.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],T.set(e.element,r),!0;var i=r[t].indexOf(n);return i!==-1&&r[t].splice(i,1),T.set(e.element,r),r[t]&&0===r[t].length}function i(e,t){var i=n(e,t);if(i.length<1)return!1;var o=i.shift();return r(e,t,o),o}function o(e,t){var n=T.get(e);T.set(t,n),T.delete(e)}function u(e,t){return 0===e.indexOf(t.toLowerCase())?e:""+t.toLowerCase()+e.substr(0,1).toUpperCase()+e.substr(1)}function a(e){return e instanceof window.HTMLElement}function s(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function c(e){return/^(https?:)?\/\/(player.)?vimeo.com(?=$|\/)/.test(e)}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(s(r))return"https://vimeo.com/"+r;if(c(r))return r.replace("http:","https:");if(t)throw new TypeError("“"+t+"” is not a valid video id.");throw new TypeError("“"+r+"” is not a vimeo.com url.")}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return _.reduce(function(t,n){var r=e.getAttribute("data-vimeo-"+n);return(r||""===r)&&(t[n]=""===r?1:r),t},t)}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,r){if(!c(e))throw new TypeError("“"+e+"” is not a vimeo.com url.");var i="https://vimeo.com/api/oembed.json?url="+encodeURIComponent(e);for(var o in t)t.hasOwnProperty(o)&&(i+="&"+o+"="+encodeURIComponent(t[o]));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,!0),u.onload=function(){if(404===u.status)return void r(new Error("“"+e+"” was not found."));if(403===u.status)return void r(new Error("“"+e+"” is not embeddable."));try{var t=JSON.parse(u.responseText);n(t)}catch(e){r(e)}},u.onerror=function(){var e=u.status?" ("+u.status+")":"";r(new Error("There was an error fetching the embed code from Vimeo"+e+"."))},u.send()})}function d(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: "+e)};t.forEach(function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=l(e),r=f(t);h(r,t).then(function(t){return d(t,e)}).catch(n)}catch(e){n(e)}})}function p(e){return"string"==typeof e&&(e=JSON.parse(e)),e}function y(e,t,n){if(e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var i=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));i>=8&&i<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function m(e,t){t=p(t);var o=[],u=void 0;if(t.event){if("error"===t.event){var a=n(e,t.data.method);a.forEach(function(n){var i=new Error(t.data.message);i.name=t.data.name,n.reject(i),r(e,t.data.method,n)})}o=n(e,"event:"+t.event),u=t.data}else if(t.method){var s=i(e,t.method);s&&(o.push(s),u=t.value)}o.forEach(function(t){try{if("function"==typeof t)return void t.call(e,u);t.resolve(u)}catch(e){}})}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var w="undefined"!=typeof Array.prototype.indexOf,k="undefined"!=typeof window.postMessage;if(!w||!k)throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},E=(e(function(e,t){!function(e){function t(e,t){function r(e){return this&&this.constructor===r?(this._keys=[],this._values=[],this._itp=[],this.objectOnly=t,void(e&&n.call(this,e))):new r(e)}return t||w(e,"size",{get:y}),e.constructor=r,r.prototype=e,r}function n(e){this.add?e.forEach(this.add,this):e.forEach(function(e){this.set(e[0],e[1])},this)}function r(e){return this.has(e)&&(this._keys.splice(g,1),this._values.splice(g,1),this._itp.forEach(function(e){g<e[0]&&e[0]--})),-1<g}function i(e){return this.has(e)?this._values[g]:void 0}function o(e,t){if(this.objectOnly&&t!==Object(t))throw new TypeError("Invalid value used as weak collection key");if(t!=t||0===t)for(g=e.length;g--&&!k(e[g],t););else g=e.indexOf(t);return-1<g}function u(e){return o.call(this,this._values,e)}function a(e){return o.call(this,this._keys,e)}function s(e,t){return this.has(e)?this._values[g]=t:this._values[this._keys.push(e)-1]=t,this}function c(e){return this.has(e)||this._values.push(e),this}function f(){(this._keys||0).length=this._values.length=0}function l(){return p(this._itp,this._keys)}function h(){return p(this._itp,this._values)}function d(){return p(this._itp,this._keys,this._values)}function v(){return p(this._itp,this._values,this._values)}function p(e,t,n){var r=[0],i=!1;return e.push(r),{next:function(){var o,u=r[0];return!i&&u<t.length?(o=n?[t[u],n[u]]:t[u],r[0]++):(i=!0,e.splice(e.indexOf(r),1)),{done:i,value:o}}}}function y(){return this._values.length}function m(e,t){for(var n=this.entries();;){var r=n.next();if(r.done)break;e.call(t,r.value[1],r.value[0],this)}}var g,w=Object.defineProperty,k=function(e,t){return e===t||e!==e&&t!==t};"undefined"==typeof WeakMap&&(e.WeakMap=t({delete:r,clear:f,get:i,has:a,set:s},!0)),"undefined"!=typeof Map&&"function"==typeof(new Map).values&&(new Map).values().next||(e.Map=t({delete:r,has:a,get:i,set:s,keys:l,values:h,entries:d,forEach:m,clear:f})),"undefined"!=typeof Set&&"function"==typeof(new Set).values&&(new Set).values().next||(e.Set=t({has:u,add:c,delete:r,clear:f,keys:h,values:h,entries:v,forEach:m})),"undefined"==typeof WeakSet&&(e.WeakSet=t({delete:r,add:c,clear:f,has:u},!0))}("undefined"!=typeof t&&"undefined"!=typeof b?b:window)}),e(function(e){var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(t,n,r){n[t]=n[t]||r(),"undefined"!=typeof e&&e.exports?e.exports=n[t]:"function"==typeof define&&define.amd&&define(function(){return n[t]})}("Promise","undefined"!=typeof b?b:b,function(){function e(e,t){d.add(e,t),h||(h=p(d.drain))}function n(e){var n,r="undefined"==typeof e?"undefined":t(e);return null==e||"object"!=r&&"function"!=r||(n=e.then),"function"==typeof n&&n}function r(){for(var e=0;e<this.chain.length;e++)i(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function i(e,t,r){var i,o;try{t===!1?r.reject(e.msg):(i=t===!0?e.msg:t.call(void 0,e.msg),i===r.promise?r.reject(TypeError("Promise-chain cycle")):(o=n(i))?o.call(i,r.resolve,r.reject):r.resolve(i))}catch(e){r.reject(e)}}function o(t){var i,a=this;if(!a.triggered){a.triggered=!0,a.def&&(a=a.def);try{(i=n(t))?e(function(){var e=new s(a);try{i.call(t,function(){o.apply(e,arguments)},function(){u.apply(e,arguments)})}catch(t){u.call(e,t)}}):(a.msg=t,a.state=1,a.chain.length>0&&e(r,a))}catch(e){u.call(new s(a),e)}}}function u(t){var n=this;n.triggered||(n.triggered=!0,n.def&&(n=n.def),n.msg=t,n.state=2,n.chain.length>0&&e(r,n))}function a(e,t,n,r){for(var i=0;i<t.length;i++)!function(i){e.resolve(t[i]).then(function(e){n(i,e)},r)}(i)}function s(e){this.def=e,this.triggered=!1}function c(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function f(t){if("function"!=typeof t)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var n=new c(this);this.then=function(t,i){var o={success:"function"!=typeof t||t,failure:"function"==typeof i&&i};return o.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");o.resolve=e,o.reject=t}),n.chain.push(o),0!==n.state&&e(r,n),o.promise},this.catch=function(e){return this.then(void 0,e)};try{t.call(void 0,function(e){o.call(n,e)},function(e){u.call(n,e)})}catch(e){u.call(n,e)}}var l,h,d,v=Object.prototype.toString,p="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),l=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:r!==!1})}}catch(e){l=function(e,t,n){return e[t]=n,e}}d=function(){function e(e,t){this.fn=e,this.self=t,this.next=void 0}var t,n,r;return{add:function(i,o){r=new e(i,o),n?n.next=r:t=r,n=r,r=void 0},drain:function(){var e=t;for(t=n=h=void 0;e;)e.fn.call(e.self),e=e.next}}}();var y=l({},"constructor",f,!1);return f.prototype=y,l(y,"__NPO__",0,!1),l(f,"resolve",function(e){var n=this;return e&&"object"==("undefined"==typeof e?"undefined":t(e))&&1===e.__NPO__?e:new n(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)})}),l(f,"reject",function(e){return new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)})}),l(f,"all",function(e){var t=this;return"[object Array]"!=v.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var i=e.length,o=Array(i),u=0;a(t,e,function(e,t){o[e]=t,++u===i&&n(o)},r)})}),l(f,"race",function(e){var t=this;return"[object Array]"!=v.call(e)?t.reject(TypeError("Not an array")):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");a(t,e,function(e,t){n(t)},r)})}),f})})),T=new WeakMap,_=["id","url","width","maxwidth","height","maxheight","portrait","title","byline","color","autoplay","autopause","loop","responsive"],j=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),M=new WeakMap,x=new WeakMap,Player=function(){function Player(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(g(this,Player),window.jQuery&&e instanceof jQuery&&(e.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),e=e[0]),"string"==typeof e&&(e=document.getElementById(e)),!a(e))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==e.nodeName){var r=e.querySelector("iframe");r&&(e=r)}if("IFRAME"===e.nodeName&&!c(e.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(M.has(e))return M.get(e);this.element=e,this.origin="*";var i=new E(function(r,i){var u=function(e){if(c(e.origin)&&t.element.contentWindow===e.source){"*"===t.origin&&(t.origin=e.origin);var n=p(e.data),i="event"in n&&"ready"===n.event,o="method"in n&&"ping"===n.method;return i||o?(t.element.setAttribute("data-ready","true"),void r()):void m(t,n)}};if(window.addEventListener?window.addEventListener("message",u,!1):window.attachEvent&&window.attachEvent("onmessage",u),"IFRAME"!==t.element.nodeName){var a=l(e,n),s=f(a);h(s,a).then(function(n){var r=d(n,e);return t.element=r,o(e,r),n}).catch(function(e){return i(e)})}});return x.set(this,i),M.set(this.element,this),"IFRAME"===this.element.nodeName&&y(this,"ping"),this}return j(Player,[{key:"callMethod",value:function(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new E(function(i,o){return n.ready().then(function(){t(n,e,{resolve:i,reject:o}),y(n,e,r)})})}},{key:"get",value:function(e){var n=this;return new E(function(r,i){return e=u(e,"get"),n.ready().then(function(){t(n,e,{resolve:r,reject:i}),y(n,e)})})}},{key:"set",value:function(e,n){var r=this;return E.resolve(n).then(function(n){if(e=u(e,"set"),void 0===n||null===n)throw new TypeError("There must be a value to set.");return r.ready().then(function(){return new E(function(i,o){t(r,e,{resolve:i,reject:o}),y(r,e,n)})})})}},{key:"on",value:function(e,r){if(!e)throw new TypeError("You must pass an event name.");if(!r)throw new TypeError("You must pass a callback function.");if("function"!=typeof r)throw new TypeError("The callback must be a function.");var i=n(this,"event:"+e);0===i.length&&this.callMethod("addEventListener",e).catch(function(){}),t(this,"event:"+e,r)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");var n=r(this,"event:"+e,t);n&&this.callMethod("removeEventListener",e).catch(function(e){})}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=x.get(this);return E.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}]),Player}();return v(),Player});

!function(a){"use strict";a.Zebra_DatePicker=function(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N={always_visible:!1,days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],days_abbr:!1,default_position:"above",direction:0,disabled_dates:!1,enabled_dates:!1,first_day_of_week:1,format:"Y-m-d",header_captions:{days:"F, Y",months:"Y",years:"Y1 - Y2"},header_navigation:["&#171;","&#187;"],inside:!0,lang_clear_date:"Clear date",months:["January","February","March","April","May","June","July","August","September","October","November","December"],months_abbr:!1,offset:[5,-5],pair:!1,readonly_element:!0,select_other_months:!1,show_clear_date:0,show_icon:!0,show_other_months:!0,show_select_today:"Today",show_week_number:!1,start_date:!1,strict:!1,view:"days",weekend_days:[0,6],zero_pad:!1,onChange:null,onClear:null,onOpen:null,onSelect:null},O=this;O.settings={};var P=a(b),Q=function(b){if(!b){O.settings=a.extend({},N,c);for(var y in P.data())0===y.indexOf("zdp_")&&(y=y.replace(/^zdp\_/,""),void 0!==N[y]&&(O.settings[y]="pair"==y?a(P.data("zdp_"+y)):P.data("zdp_"+y)))}O.settings.readonly_element&&P.attr("readonly","readonly");var E={days:["d","j","D"],months:["F","m","M","n","t"],years:["o","Y","y"]},F=!1,G=!1,Q=!1,T=null;for(T in E)a.each(E[T],function(a,b){O.settings.format.indexOf(b)>-1&&("days"==T?F=!0:"months"==T?G=!0:"years"==T&&(Q=!0))});H=F&&G&&Q?["years","months","days"]:!F&&G&&Q?["years","months"]:F&&G&&!Q?["months","days"]:F||G||!Q?F||!G||Q?["years","months","days"]:["months"]:["years"],-1==a.inArray(O.settings.view,H)&&(O.settings.view=H[H.length-1]),x=[],w=[];for(var U,V=0;2>V;V++)U=0===V?O.settings.disabled_dates:O.settings.enabled_dates,a.isArray(U)&&U.length>0&&a.each(U,function(){for(var b=this.split(" "),c=0;4>c;c++){b[c]||(b[c]="*"),b[c]=b[c].indexOf(",")>-1?b[c].split(","):new Array(b[c]);for(var d=0;d<b[c].length;d++)if(b[c][d].indexOf("-")>-1){var e=b[c][d].match(/^([0-9]+)\-([0-9]+)/);if(null!==e){for(var f=eb(e[1]);f<=eb(e[2]);f++)-1==a.inArray(f,b[c])&&b[c].push(f+"");b[c].splice(d,1)}}for(d=0;d<b[c].length;d++)b[c][d]=isNaN(eb(b[c][d]))?b[c][d]:eb(b[c][d])}0===V?x.push(b):w.push(b)});var W,X,Y=new Date,_=O.settings.reference_date?O.settings.reference_date:P.data("zdp_reference_date")&&void 0!==P.data("zdp_reference_date")?P.data("zdp_reference_date"):Y;if(z=void 0,A=void 0,o=_.getMonth(),l=Y.getMonth(),p=_.getFullYear(),m=Y.getFullYear(),q=_.getDate(),n=Y.getDate(),O.settings.direction===!0)z=_;else if(O.settings.direction===!1)A=_,D=A.getMonth(),C=A.getFullYear(),B=A.getDate();else if(!a.isArray(O.settings.direction)&&$(O.settings.direction)&&eb(O.settings.direction)>0||a.isArray(O.settings.direction)&&((W=R(O.settings.direction[0]))||O.settings.direction[0]===!0||$(O.settings.direction[0])&&O.settings.direction[0]>0)&&((X=R(O.settings.direction[1]))||O.settings.direction[1]===!1||$(O.settings.direction[1])&&O.settings.direction[1]>=0))z=W?W:new Date(p,o,q+(a.isArray(O.settings.direction)?eb(O.settings.direction[0]===!0?0:O.settings.direction[0]):eb(O.settings.direction))),o=z.getMonth(),p=z.getFullYear(),q=z.getDate(),X&&+X>=+z?A=X:!X&&O.settings.direction[1]!==!1&&a.isArray(O.settings.direction)&&(A=new Date(p,o,q+eb(O.settings.direction[1]))),A&&(D=A.getMonth(),C=A.getFullYear(),B=A.getDate());else if(!a.isArray(O.settings.direction)&&$(O.settings.direction)&&eb(O.settings.direction)<0||a.isArray(O.settings.direction)&&(O.settings.direction[0]===!1||$(O.settings.direction[0])&&O.settings.direction[0]<0)&&((W=R(O.settings.direction[1]))||$(O.settings.direction[1])&&O.settings.direction[1]>=0))A=new Date(p,o,q+(a.isArray(O.settings.direction)?eb(O.settings.direction[0]===!1?0:O.settings.direction[0]):eb(O.settings.direction))),D=A.getMonth(),C=A.getFullYear(),B=A.getDate(),W&&+A>+W?z=W:!W&&a.isArray(O.settings.direction)&&(z=new Date(C,D,B-eb(O.settings.direction[1]))),z&&(o=z.getMonth(),p=z.getFullYear(),q=z.getDate());else if(a.isArray(O.settings.disabled_dates)&&O.settings.disabled_dates.length>0)for(var cb in x)if("*"==x[cb][0]&&"*"==x[cb][1]&&"*"==x[cb][2]&&"*"==x[cb][3]){var gb=[];if(a.each(w,function(){var a=this;"*"!=a[2][0]&&gb.push(parseInt(a[2][0]+("*"==a[1][0]?"12":db(a[1][0],2))+("*"==a[0][0]?"*"==a[1][0]?"31":new Date(a[2][0],a[1][0],0).getDate():db(a[0][0],2)),10))}),gb.sort(),gb.length>0){var ib=(gb[0]+"").match(/([0-9]{4})([0-9]{2})([0-9]{2})/);p=parseInt(ib[1],10),o=parseInt(ib[2],10)-1,q=parseInt(ib[3],10)}break}if(Z(p,o,q)){for(;Z(p);)z?(p++,o=0):(p--,o=11);for(;Z(p,o);)z?(o++,q=1):(o--,q=new Date(p,o+1,0).getDate()),o>11?(p++,o=0,q=1):0>o&&(p--,o=11,q=new Date(p,o+1,0).getDate());for(;Z(p,o,q);)z?q++:q--,Y=new Date(p,o,q),p=Y.getFullYear(),o=Y.getMonth(),q=Y.getDate();Y=new Date(p,o,q),p=Y.getFullYear(),o=Y.getMonth(),q=Y.getDate()}var jb=R(P.val()||(O.settings.start_date?O.settings.start_date:""));if(jb&&O.settings.strict&&Z(jb.getFullYear(),jb.getMonth(),jb.getDate())&&P.val(""),b||void 0===z&&void 0===jb||fb(void 0!==z?z:jb),!O.settings.always_visible){if(!b){if(O.settings.show_icon){"firefox"==hb.name&&P.is('input[type="text"]')&&"inline"==P.css("display")&&P.css("display","inline-block");var kb=a('<span class="Zebra_DatePicker_Icon_Wrapper"></span>').css({display:P.css("display"),position:"static"==P.css("position")?"relative":P.css("position"),"float":P.css("float"),top:P.css("top"),right:P.css("right"),bottom:P.css("bottom"),left:P.css("left")});P.wrap(kb).css({position:"relative",top:"auto",right:"auto",bottom:"auto",left:"auto"}),f=a('<button type="button" class="Zebra_DatePicker_Icon'+("disabled"==P.attr("disabled")?" Zebra_DatePicker_Icon_Disabled":"")+'">Pick a date</button>'),O.icon=f,I=f.add(P)}else I=P;I.bind("click",function(a){a.preventDefault(),P.attr("disabled")||(e.hasClass("dp_visible")?O.hide():O.show())}),void 0!==f&&f.insertAfter(P)}if(void 0!==f){f.attr("style",""),O.settings.inside&&f.addClass("Zebra_DatePicker_Icon_Inside");var lb=P.outerWidth(),mb=P.outerHeight(),nb=parseInt(P.css("marginLeft"),10)||0,ob=parseInt(P.css("marginTop"),10)||0,pb=f.outerWidth(),qb=f.outerHeight(),rb=parseInt(f.css("marginLeft"),10)||0,sb=parseInt(f.css("marginRight"),10)||0;O.settings.inside?f.css({top:ob+(mb-qb)/2,left:nb+(lb-pb-sb)}):f.css({top:ob+(mb-qb)/2,left:nb+lb+rb}),f.removeClass(" Zebra_DatePicker_Icon_Disabled"),"disabled"==P.attr("disabled")&&f.addClass("Zebra_DatePicker_Icon_Disabled")}}if(L=O.settings.show_select_today!==!1&&a.inArray("days",H)>-1&&!Z(m,l,n)?O.settings.show_select_today:!1,!b){a(window).bind("resize.Zebra_DatePicker",function(){O.hide(),void 0!==f&&(clearTimeout(M),M=setTimeout(function(){O.update()},100))});var tb='<div class="Zebra_DatePicker"><table class="dp_header"><tr><td class="dp_previous">'+O.settings.header_navigation[0]+'</td><td class="dp_caption">&#032;</td><td class="dp_next">'+O.settings.header_navigation[1]+'</td></tr></table><table class="dp_daypicker"></table><table class="dp_monthpicker"></table><table class="dp_yearpicker"></table><table class="dp_footer"><tr><td class="dp_today"'+(O.settings.show_clear_date!==!1?' style="width:50%"':"")+">"+L+'</td><td class="dp_clear"'+(L!==!1?' style="width:50%"':"")+">"+O.settings.lang_clear_date+"</td></tr></table></div>";e=a(tb),O.datepicker=e,g=a("table.dp_header",e),h=a("table.dp_daypicker",e),i=a("table.dp_monthpicker",e),j=a("table.dp_yearpicker",e),K=a("table.dp_footer",e),J=a("td.dp_today",K),k=a("td.dp_clear",K),O.settings.always_visible?P.attr("disabled")||(O.settings.always_visible.append(e),O.show()):a("body").append(e),e.delegate("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)","mouseover",function(){a(this).addClass("dp_hover")}).delegate("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)","mouseout",function(){a(this).removeClass("dp_hover")}),S(a("td",g)),a(".dp_previous",g).bind("click",function(){"months"==d?s--:"years"==d?s-=12:--r<0&&(r=11,s--),ab()}),a(".dp_caption",g).bind("click",function(){d="days"==d?a.inArray("months",H)>-1?"months":a.inArray("years",H)>-1?"years":"days":"months"==d?a.inArray("years",H)>-1?"years":a.inArray("days",H)>-1?"days":"months":a.inArray("days",H)>-1?"days":a.inArray("months",H)>-1?"months":"years",ab()}),a(".dp_next",g).bind("click",function(){"months"==d?s++:"years"==d?s+=12:12==++r&&(r=0,s++),ab()}),h.delegate("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)","click",function(){O.settings.select_other_months&&null!==(ib=a(this).attr("class").match(/date\_([0-9]{4})(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])/))?bb(ib[1],ib[2]-1,ib[3],"days",a(this)):bb(s,r,eb(a(this).html()),"days",a(this))}),i.delegate("td:not(.dp_disabled)","click",function(){var b=a(this).attr("class").match(/dp\_month\_([0-9]+)/);r=eb(b[1]),-1==a.inArray("days",H)?bb(s,r,1,"months",a(this)):(d="days",O.settings.always_visible&&P.val(""),ab())}),j.delegate("td:not(.dp_disabled)","click",function(){s=eb(a(this).html()),-1==a.inArray("months",H)?bb(s,1,1,"years",a(this)):(d="months",O.settings.always_visible&&P.val(""),ab())}),a(J).bind("click",function(b){b.preventDefault(),bb(m,l,n,"days",a(".dp_current",h)),O.settings.always_visible&&O.show(),O.hide()}),a(k).bind("click",function(b){b.preventDefault(),P.val(""),O.settings.always_visible?(t=null,u=null,v=null,a("td.dp_selected",e).removeClass("dp_selected")):(t=null,u=null,v=null,r=null,s=null),O.hide(),O.settings.onClear&&"function"==typeof O.settings.onClear&&O.settings.onClear.call(P,P)}),O.settings.always_visible||a(document).bind({"mousedown.Zebra_DatePicker":function(b){if(e.hasClass("dp_visible")){if(O.settings.show_icon&&a(b.target).get(0)===f.get(0))return!0;0===a(b.target).parents().filter(".Zebra_DatePicker").length&&O.hide()}},"keyup.Zebra_DatePicker":function(a){e.hasClass("dp_visible")&&27==a.which&&O.hide()}}),ab()}};O.destroy=function(){void 0!==O.icon&&O.icon.remove(),O.datepicker.remove(),a(document).unbind("keyup.Zebra_DatePicker"),a(document).unbind("mousedown.Zebra_DatePicker"),a(window).unbind("resize.Zebra_DatePicker"),P.removeData("Zebra_DatePicker")},O.hide=function(){O.settings.always_visible||(Y("hide"),e.removeClass("dp_visible").addClass("dp_hidden"))},O.show=function(){d=O.settings.view;var b=R(P.val()||(O.settings.start_date?O.settings.start_date:""));if(b?(u=b.getMonth(),r=b.getMonth(),v=b.getFullYear(),s=b.getFullYear(),t=b.getDate(),Z(v,u,t)&&(O.settings.strict&&P.val(""),r=o,s=p)):(r=o,s=p),ab(),O.settings.always_visible)e.removeClass("dp_hidden").addClass("dp_visible");else{var c=e.outerWidth(),g=e.outerHeight(),h=(void 0!==f?f.offset().left+f.outerWidth(!0):P.offset().left+P.outerWidth(!0))+O.settings.offset[0],i=(void 0!==f?f.offset().top:P.offset().top)-g+O.settings.offset[1],j=a(window).width(),k=a(window).height(),l=a(window).scrollTop(),m=a(window).scrollLeft();"below"==O.settings.default_position&&(i=(void 0!==f?f.offset().top:P.offset().top)+O.settings.offset[1]),h+c>m+j&&(h=m+j-c),m>h&&(h=m),i+g>l+k&&(i=l+k-g),l>i&&(i=l),e.css({left:h,top:i}),e.removeClass("dp_hidden").addClass("dp_visible"),Y()}O.settings.onOpen&&"function"==typeof O.settings.onOpen&&O.settings.onOpen.call(P,P)},O.update=function(b){O.original_direction&&(O.original_direction=O.direction),O.settings=a.extend(O.settings,b),Q(!0)};var R=function(b){if(b+="",""!==a.trim(b)){for(var c=T(O.settings.format),d=["d","D","j","l","N","S","w","F","m","M","n","Y","y"],e=[],f=[],g=null,h=null,i=0;i<d.length;i++)(g=c.indexOf(d[i]))>-1&&e.push({character:d[i],position:g});if(e.sort(function(a,b){return a.position-b.position}),a.each(e,function(a,b){switch(b.character){case"d":f.push("0[1-9]|[12][0-9]|3[01]");break;case"D":f.push("[a-z]{3}");break;case"j":f.push("[1-9]|[12][0-9]|3[01]");break;case"l":f.push("[a-z]+");break;case"N":f.push("[1-7]");break;case"S":f.push("st|nd|rd|th");break;case"w":f.push("[0-6]");break;case"F":f.push("[a-z]+");break;case"m":f.push("0[1-9]|1[012]+");break;case"M":f.push("[a-z]{3}");break;case"n":f.push("[1-9]|1[012]");break;case"Y":f.push("[0-9]{4}");break;case"y":f.push("[0-9]{2}")}}),f.length&&(e.reverse(),a.each(e,function(a,b){c=c.replace(b.character,"("+f[f.length-a-1]+")")}),f=new RegExp("^"+c+"$","ig"),h=f.exec(b))){var j,k=new Date,l=1,m=k.getMonth()+1,n=k.getFullYear(),o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],p=["January","February","March","April","May","June","July","August","September","October","November","December"],q=!0;if(e.reverse(),a.each(e,function(b,c){if(!q)return!0;switch(c.character){case"m":case"n":m=eb(h[b+1]);break;case"d":case"j":l=eb(h[b+1]);break;case"D":case"l":case"F":case"M":j="D"==c.character||"l"==c.character?O.settings.days:O.settings.months,q=!1,a.each(j,function(a,d){if(q)return!0;if(h[b+1].toLowerCase()==d.substring(0,"D"==c.character||"M"==c.character?3:d.length).toLowerCase()){switch(c.character){case"D":h[b+1]=o[a].substring(0,3);break;case"l":h[b+1]=o[a];break;case"F":h[b+1]=p[a],m=a+1;break;case"M":h[b+1]=p[a].substring(0,3),m=a+1}q=!0}});break;case"Y":n=eb(h[b+1]);break;case"y":n="19"+eb(h[b+1])}}),q){var r=new Date(n,(m||1)-1,l||1);if(r.getFullYear()==n&&r.getDate()==(l||1)&&r.getMonth()==(m||1)-1)return r}}return!1}},S=function(a){"firefox"==hb.name?a.css("MozUserSelect","none"):"explorer"==hb.name?a.bind("selectstart",function(){return!1}):a.mousedown(function(){return!1})},T=function(a){return a.replace(/([-.,*+?^${}()|[\]\/\\])/g,"\\$1")},U=function(b){for(var c="",d=b.getDate(),e=b.getDay(),f=O.settings.days[e],g=b.getMonth()+1,h=O.settings.months[g-1],i=b.getFullYear()+"",j=0;j<O.settings.format.length;j++){var k=O.settings.format.charAt(j);switch(k){case"y":i=i.substr(2);case"Y":c+=i;break;case"m":g=db(g,2);case"n":c+=g;break;case"M":h=a.isArray(O.settings.months_abbr)&&void 0!==O.settings.months_abbr[g-1]?O.settings.months_abbr[g-1]:O.settings.months[g-1].substr(0,3);case"F":c+=h;break;case"d":d=db(d,2);case"j":c+=d;break;case"D":f=a.isArray(O.settings.days_abbr)&&void 0!==O.settings.days_abbr[e]?O.settings.days_abbr[e]:O.settings.days[e].substr(0,3);case"l":c+=f;break;case"N":e++;case"w":c+=e;break;case"S":c+=d%10==1&&"11"!=d?"st":d%10==2&&"12"!=d?"nd":d%10==3&&"13"!=d?"rd":"th";break;default:c+=k}}return c},V=function(){var b=new Date(s,r+1,0).getDate(),c=new Date(s,r,1).getDay(),d=new Date(s,r,0).getDate(),e=c-O.settings.first_day_of_week;e=0>e?7+e:e,_(O.settings.header_captions.days);var f="<tr>";O.settings.show_week_number&&(f+="<th>"+O.settings.show_week_number+"</th>");for(var g=0;7>g;g++)f+="<th>"+(a.isArray(O.settings.days_abbr)&&void 0!==O.settings.days_abbr[(O.settings.first_day_of_week+g)%7]?O.settings.days_abbr[(O.settings.first_day_of_week+g)%7]:O.settings.days[(O.settings.first_day_of_week+g)%7].substr(0,2))+"</th>";for(f+="</tr><tr>",g=0;42>g;g++){g>0&&g%7===0&&(f+="</tr><tr>"),g%7===0&&O.settings.show_week_number&&(f+='<td class="dp_week_number">'+gb(new Date(s,r,g-e+1))+"</td>");var i=g-e+1;if(O.settings.select_other_months&&(e>g||i>b)){var j=new Date(s,r,i),k=j.getFullYear(),o=j.getMonth(),p=j.getDate();j=k+db(o+1,2)+db(p,2)}if(e>g)f+='<td class="'+(O.settings.select_other_months&&!Z(k,o,p)?"dp_not_in_month_selectable date_"+j:"dp_not_in_month")+'">'+(O.settings.select_other_months||O.settings.show_other_months?db(d-e+g+1,O.settings.zero_pad?2:0):"&nbsp;")+"</td>";else if(i>b)f+='<td class="'+(O.settings.select_other_months&&!Z(k,o,p)?"dp_not_in_month_selectable date_"+j:"dp_not_in_month")+'">'+(O.settings.select_other_months||O.settings.show_other_months?db(i-b,O.settings.zero_pad?2:0):"&nbsp;")+"</td>";else{var q=(O.settings.first_day_of_week+g)%7,w="";Z(s,r,i)?(a.inArray(q,O.settings.weekend_days)>-1?w="dp_weekend_disabled":w+=" dp_disabled",r==l&&s==m&&n==i&&(w+=" dp_disabled_current")):(a.inArray(q,O.settings.weekend_days)>-1&&(w="dp_weekend"),r==u&&s==v&&t==i&&(w+=" dp_selected"),r==l&&s==m&&n==i&&(w+=" dp_current")),f+="<td"+(""!==w?' class="'+a.trim(w)+'"':"")+">"+(O.settings.zero_pad?db(i,2):i)+"</td>"}}f+="</tr>",h.html(a(f)),O.settings.always_visible&&(E=a("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)",h)),h.show()},W=function(){_(O.settings.header_captions.months);for(var b="<tr>",c=0;12>c;c++){c>0&&c%3===0&&(b+="</tr><tr>");var d="dp_month_"+c;Z(s,c)?d+=" dp_disabled":u!==!1&&u==c&&s==v?d+=" dp_selected":l==c&&m==s&&(d+=" dp_current"),b+='<td class="'+a.trim(d)+'">'+(a.isArray(O.settings.months_abbr)&&void 0!==O.settings.months_abbr[c]?O.settings.months_abbr[c]:O.settings.months[c].substr(0,3))+"</td>"}b+="</tr>",i.html(a(b)),O.settings.always_visible&&(F=a("td:not(.dp_disabled)",i)),i.show()},X=function(){_(O.settings.header_captions.years);for(var b="<tr>",c=0;12>c;c++){c>0&&c%3===0&&(b+="</tr><tr>");var d="";Z(s-7+c)?d+=" dp_disabled":v&&v==s-7+c?d+=" dp_selected":m==s-7+c&&(d+=" dp_current"),b+="<td"+(""!==a.trim(d)?' class="'+a.trim(d)+'"':"")+">"+(s-7+c)+"</td>"}b+="</tr>",j.html(a(b)),O.settings.always_visible&&(G=a("td:not(.dp_disabled)",j)),j.show()},Y=function(b){if("explorer"==hb.name&&6==hb.version){if(!y){var c=eb(e.css("zIndex"))-1;y=a("<iframe>",{src:'javascript:document.write("")',scrolling:"no",frameborder:0,css:{zIndex:c,position:"absolute",top:-1e3,left:-1e3,width:e.outerWidth(),height:e.outerHeight(),filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=0)",display:"none"}}),a("body").append(y)}switch(b){case"hide":y.hide();break;default:var d=e.offset();y.css({top:d.top,left:d.left,display:"block"})}}},Z=function(b,c,d){if((void 0===b||isNaN(b))&&(void 0===c||isNaN(c))&&(void 0===d||isNaN(d)))return!1;if(a.isArray(O.settings.direction)||0!==eb(O.settings.direction)){var e=eb(cb(b,"undefined"!=typeof c?db(c,2):"","undefined"!=typeof d?db(d,2):"")),f=(e+"").length;if(8==f&&("undefined"!=typeof z&&e<eb(cb(p,db(o,2),db(q,2)))||"undefined"!=typeof A&&e>eb(cb(C,db(D,2),db(B,2)))))return!0;if(6==f&&("undefined"!=typeof z&&e<eb(cb(p,db(o,2)))||"undefined"!=typeof A&&e>eb(cb(C,db(D,2)))))return!0;if(4==f&&("undefined"!=typeof z&&p>e||"undefined"!=typeof A&&e>C))return!0}"undefined"!=typeof c&&(c+=1);var g=!1,h=!1;return x&&a.each(x,function(){if(!g){var e=this;if((a.inArray(b,e[2])>-1||a.inArray("*",e[2])>-1)&&("undefined"!=typeof c&&a.inArray(c,e[1])>-1||a.inArray("*",e[1])>-1)&&("undefined"!=typeof d&&a.inArray(d,e[0])>-1||a.inArray("*",e[0])>-1)){if("*"==e[3])return g=!0;var f=new Date(b,c-1,d).getDay();if(a.inArray(f,e[3])>-1)return g=!0}}}),w&&a.each(w,function(){if(!h){var e=this;if((a.inArray(b,e[2])>-1||a.inArray("*",e[2])>-1)&&(h=!0,"undefined"!=typeof c))if(h=!0,a.inArray(c,e[1])>-1||a.inArray("*",e[1])>-1){if("undefined"!=typeof d)if(h=!0,a.inArray(d,e[0])>-1||a.inArray("*",e[0])>-1){if("*"==e[3])return h=!0;var f=new Date(b,c-1,d).getDay();if(a.inArray(f,e[3])>-1)return h=!0;h=!1}else h=!1}else h=!1}}),w&&h?!1:x&&g?!0:!1},$=function(a){return(a+"").match(/^\-?[0-9]+$/)?!0:!1},_=function(b){!isNaN(parseFloat(r))&&isFinite(r)&&(b=b.replace(/\bm\b|\bn\b|\bF\b|\bM\b/,function(b){switch(b){case"m":return db(r+1,2);case"n":return r+1;case"F":return O.settings.months[r];case"M":return a.isArray(O.settings.months_abbr)&&void 0!==O.settings.months_abbr[r]?O.settings.months_abbr[r]:O.settings.months[r].substr(0,3);default:return b}})),!isNaN(parseFloat(s))&&isFinite(s)&&(b=b.replace(/\bY\b/,s).replace(/\by\b/,(s+"").substr(2)).replace(/\bY1\b/i,s-7).replace(/\bY2\b/i,s+4)),a(".dp_caption",g).html(b)},ab=function(){if(""===h.text()||"days"==d){if(""===h.text()){O.settings.always_visible||e.css("left",-1e3),e.css("visibility","visible"),V();var b=h.outerWidth(),c=h.outerHeight();i.css({width:b,height:c}),j.css({width:b,height:c}),g.css("width",b),K.css("width",b),e.css("visibility","").addClass("dp_hidden")}else V();i.hide(),j.hide()}else"months"==d?(W(),h.hide(),j.hide()):"years"==d&&(X(),h.hide(),i.hide());if(O.settings.onChange&&"function"==typeof O.settings.onChange&&void 0!==d){var f="days"==d?h.find("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month)"):"months"==d?i.find("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month)"):j.find("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month)");f.each(function(){if("days"==d)if(a(this).hasClass("dp_not_in_month_selectable")){var b=a(this).attr("class").match(/date\_([0-9]{4})(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])/);a(this).data("date",b[1]+"-"+b[2]+"-"+b[3])}else a(this).data("date",s+"-"+db(r+1,2)+"-"+db(eb(a(this).text()),2));else if("months"==d){var b=a(this).attr("class").match(/dp\_month\_([0-9]+)/);a(this).data("date",s+"-"+db(eb(b[1])+1,2))}else a(this).data("date",eb(a(this).text()))}),O.settings.onChange.call(P,d,f,P)}K.show(),O.settings.show_clear_date===!0||0===O.settings.show_clear_date&&""!==P.val()||O.settings.always_visible&&O.settings.show_clear_date!==!1?(k.show(),L?(J.css("width","50%"),k.css("width","50%")):(J.hide(),k.css("width","100%"))):(k.hide(),L?J.show().css("width","100%"):K.hide())},bb=function(a,b,c,d,e){var f=new Date(a,b,c,12,0,0),g="days"==d?E:"months"==d?F:G,h=U(f);P.val(h),O.settings.always_visible&&(u=f.getMonth(),r=f.getMonth(),v=f.getFullYear(),s=f.getFullYear(),t=f.getDate(),g.removeClass("dp_selected"),e.addClass("dp_selected"),"days"==d&&e.hasClass("dp_not_in_month_selectable")&&O.show()),O.hide(),fb(f),O.settings.onSelect&&"function"==typeof O.settings.onSelect&&O.settings.onSelect.call(P,h,a+"-"+db(b+1,2)+"-"+db(c,2),f,P,gb(f)),P.focus()},cb=function(){for(var a="",b=0;b<arguments.length;b++)a+=arguments[b]+"";return a},db=function(a,b){for(a+="";a.length<b;)a="0"+a;return a},eb=function(a){return parseInt(a,10)},fb=function(b){O.settings.pair&&a.each(O.settings.pair,function(){var c=a(this);if(c.data&&c.data("Zebra_DatePicker")){var d=c.data("Zebra_DatePicker");d.update({reference_date:b,direction:0===d.settings.direction?1:d.settings.direction}),d.settings.always_visible&&d.show()}else c.data("zdp_reference_date",b)})},gb=function(a){var b,c,d,e,f,g,h,i,j,k=a.getFullYear(),l=a.getMonth()+1,m=a.getDate();return 3>l?(b=k-1,c=(b/4|0)-(b/100|0)+(b/400|0),d=((b-1)/4|0)-((b-1)/100|0)+((b-1)/400|0),e=c-d,f=0,g=m-1+31*(l-1)):(b=k,c=(b/4|0)-(b/100|0)+(b/400|0),d=((b-1)/4|0)-((b-1)/100|0)+((b-1)/400|0),e=c-d,f=e+1,g=m+((153*(l-3)+2)/5|0)+58+e),h=(b+c)%7,m=(g+h-f)%7,i=g+3-m,j=0>i?53-((h-e)/5|0):i>364+e?1:(i/7|0)+1},hb={init:function(){this.name=this.searchString(this.dataBrowser)||"",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||""},searchString:function(a){for(var b=0;b<a.length;b++){var c=a[b].string,d=a[b].prop;if(this.versionSearchString=a[b].versionSearch||a[b].identity,c){if(-1!=c.indexOf(a[b].subString))return a[b].identity}else if(d)return a[b].identity}},searchVersion:function(a){var b=a.indexOf(this.versionSearchString);if(-1!=b)return parseFloat(a.substring(b+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Firefox",identity:"firefox"},{string:navigator.userAgent,subString:"MSIE",identity:"explorer",versionSearch:"MSIE"}]};hb.init(),Q()},a.fn.Zebra_DatePicker=function(b){return this.each(function(){void 0!==a(this).data("Zebra_DatePicker")&&a(this).data("Zebra_DatePicker").destroy();var c=new a.Zebra_DatePicker(this,b);a(this).data("Zebra_DatePicker",c)})}}(jQuery);
(function ($) {
	"use strict";
	/**
	 * Accordion module implementation.
	 *
	 * @author Denis Skeledzic-Gemperli <denis.skeledzic@namics.com>
	 * @namespace Tc.Module
	 * @class Accordion
	 * @extends Tc.Module
	 */
	Tc.Module.Accordion = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function (callback) {
			var mod = this,
				$ctx = mod.$ctx,
				$accordionPanel = $ctx.find('.js-accordion dt'),
				$accordionContainer = $ctx.find('.js-accordion dd'),
				animation = 200;

			// Handle click function
			$accordionContainer.hide();


			if(window.location.hash) {

				$accordionPanel.each(function() {

					if(window.location.hash === '#' + $(this).find('.e-text a').attr('id') ) {
						var $this = $(this);

						$this.addClass('state-active');

						//slide down target panel
						$this.next().slideDown(animation);
						$this.next().addClass('state-open');

					}
				});
			}


			$accordionPanel.each(function() {
				if ($(this).hasClass('state-active')) {
					//this clicked panel
					var $this = $(this),
					$dl = $this.parents('dl');

					//console.log($this);

					$dl.find('dd').slideDown(animation).addClass('state-open');
				}
			});

			$accordionPanel.on('click', function () {

				//this clicked panel
				var $this = $(this),

					//the target panel content
					$target = $this.next();

				//Only toggle non-displayed
				if (!$this.hasClass('state-active')) {

					// console.log('no -> accordion-active class // click --> open');
					//add active class
					$this.addClass('state-active');

					//slide down target panel
					$target.slideDown(animation);
					$target.addClass('state-open');

				} else if ($this.hasClass('state-active')) {

					//slide up any open panels and remove active class
					$target.slideUp(animation);

					//remove any active class
					$this.removeClass('state-active');
				}

				return false;
			});

			$accordionPanel.keyup(function(e) {

				//this clicked panel
				var $this = $(this);

				if (e.keyCode == 13) {

					//the target panel content
					var $target = $this.next();

					//Only toggle non-displayed
					if (!$this.hasClass('state-active')) {

						// console.log('no -> accordion-active class // click --> open');
						//add active class
						$this.addClass('state-active');

						//slide down target panel
						$target.slideDown(animation);
						$target.addClass('state-open');

					} else if ($this.hasClass('state-active')) {

						//slide up any open panels and remove active class
						$target.slideUp(animation);

						//remove any active class
						$this.removeClass('state-active');
					}

					return false;
				}
			});

			callback();
		}
	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * DocumentTeaser module implementation.
	 *
	 * @author Denis Skeledzic-Gemperli <denis.skeledzic@namics.com>
	 * @namespace Tc.Module
	 * @class DocumentTeaser
	 * @extends Tc.Module
	 */

	Tc.Module.DocumentTeaser = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);

			this.removetext = $ctx.data('removetext');
			this.addtext = $ctx.data('addtext');
			this.getcounturl = $ctx.find('.document-teaser-headline-title').data('getcounturl');
		},

		on: function (callback) {
			var mod = this,
				$ctx = mod.$ctx,
				$docBox = $ctx.find('.js-document-teaser-box'),
		        $dlBox = $ctx.find('.box-bottom');

			mod.sandbox.subscribe('updateCount', mod);
			mod.sandbox.subscribe('tooltipText', mod);
			mod.sandbox.subscribe('cookieimplementation', mod);

			$ctx.on('click', '.js-document-teaser-nav-mobile', function (e) {
				var $this = $(this);
				e.stopPropagation();
				$this.toggleClass('state-active');
				var parent = $this.parent();
				parent.find('.js-document-teaser-box-info').slideToggle(200);
				parent.find('.js-document-teaser-box-text').slideToggle(200);
				parent.find('.js-icon-notification').toggleClass('state-open');
				parent.find('.js-icon-delete').toggleClass('state-open');
			});

			$ctx.on('click', '.js-icon-notification', function (e) {
				var $this = $(this),
					$notification = $this.find('.notification-text');

				e.stopPropagation();

				if ($this.hasClass('state-active')) {
					$.ajax($notification.data('deleteonewatchlisturl'), {
						type: 'DELETE',
						success: function () {
							$this.removeClass('state-active');
							mod._updateCounter();
						}
					});			
				} else {
					$.ajax($notification.data('addwatchlist'), {
						type: 'post',
						success: function (){
							$this.addClass('state-active');
							mod._updateCounter();
						}
					});
					


				}

			});

			$ctx.on('click', '.js-icon-delete', function (e) {
				var $this = $(this);

				e.stopPropagation();

				$.ajax($this.data('deleteonewatchlisturl'), {
					type: 'DELETE',
					success: function () {
						$this.parent().remove();
						if(!$ctx.find('.js-document-teaser-box').length){
							$dlBox.remove();
						}
	
						mod._updateCounter();
					}
				});
				


			});

			$ctx.on('click', '.js-text-link-delete', function (e) {
				e.stopPropagation();

				if(confirm($ctx.data('confirm-message'))) {
					$.ajax($(this).data('deletewatchlisturl'), {
						type: 'DELETE',
						success: function () {
							($docBox).remove();
							($dlBox).remove();
							mod._updateCounter();
						}
					});
				}
			});

			$ctx.on('click', '.js-text-link-download', function (e) {
				e.stopPropagation();

				var data = [];
				var checked = false;

				$('input[type=checkbox]:checked', $ctx).each(function () {
					data.push($(this).val());
					checked = true;
				});

				if (checked) {
					window.location.href = $ctx.find('.js-text-link-download').data('downloadspecificdocumenturl') + '?values=' + data.join(',');
				}

			});


			enquire.register('only screen and (max-width : 767px)', function () {

					$ctx.on('click', '.js-icon-notification', function (e) {


						if($(this).hasClass('state-active')){
							alert($(this).data('mobile-removealerttext'));
						}
						else {
							alert($(this).data('mobile-addalerttext'));
						}
					});


			}, false);

			callback();
		},

		after: function(){
			this.onLoadedResults();
		},

		_updateCounter: function () {
			var mod = this;
			mod.fire('GetCount', {}, ['updateCount']);

			$.ajax({
				data: mod.getcounturl,
				type: 'get',
				dataType: 'json',
				url: mod.getcounturl,
				success: function(data){
					$('.document-teaser-headline-title').text(data.FullText);
				}

			});
		},

		onLoadedResults: function () {
			var mod = this;
			var allDocs = $('.document-teaser-box[data-isBeingWatchedFlag="true"]');
			var icons = allDocs.find('.js-icon-notification');

			icons
				.removeClass('state-active')
				.attr('title', mod.removetext);

			icons
				.addClass('state-active')
				.attr('title', mod.addtext);
		},
	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * Filter module implementation.
	 *
	 * @author Denis Skeledzic-Gemperli <denis.skeledzic@namics.com>
	 * @namespace Tc.Module
	 * @class Filter
	 * @extends Tc.Module
	 */
	Tc.Module.Filter = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);

			this.xhr = null;
			this.filters = [];
			this.facets = [];
			this.inputTimeoutTime = 300;
			this.resultData = null;
			this.filterUrl = $ctx.data('filter-url');
			this.filterId = $ctx.data('filter-id');
			this.sortOrder = $ctx.data('order');
			this.searchSource = $ctx.data('source');
			this.initialFilterData = {};

			this.$filterSearch = $('.js-filter-search', $ctx);
			this.$filterSelection = $('.e-dropdown', $ctx);

            if (window.location.hash.indexOf('#query=') > -1) {
				var searchString = window.location.hash.substr(window.location.hash.indexOf('#query=') + 7);
				var searchInput = $('input', $('.js-filter-search', $ctx));
				if (searchInput !== undefined && searchInput !== null && searchString.length > 0) {
					searchInput.val(searchString);
                }
            }
        },

		on: function (callback) {
			var mod = this,
				$ctx = mod.$ctx,
				$filterMobBtn = $ctx.find('.js-filter-mobile-btn'),
				$filterGroup = $ctx.find('.js-filter-group'),
				inputTimeout = null;

			$filterMobBtn.on('click', function () {
				var $this = $(this);
				$this.toggleClass('state-active');
				$filterGroup.toggleClass('state-open');
			});

			mod.$filterSelection.each(function (k, v) {
				var $this = $(v);

				$this.multipleSelect({
					filter: true,
					placeholder: $this.data('placeholder'),
					selectAll: $this.data('show-select-all'),
					selectAllText: $this.data('select-all-text'),
					allSelected: $this.data('all-selected'),
					multiple: true,
					multipleWidth: '100%',
					countSelected: $this.data('count-selected'),
					onClick: function () {
						mod.executeSearch();
					},
					onCheckAll: function () {
						mod.executeSearch(true);
					},
					onUncheckAll: function () {
						mod.executeSearch(true);
					}
				});
			});

			$('[data-filter]', $ctx).each(function (k, v) {
				mod.filters.push(new mod.FilterField(v));
			});

			$('input[data-filter]', $ctx).on('keyup', function () {
				var $this = $(this);

				if (inputTimeout !== null) {
					clearTimeout(inputTimeout);
					inputTimeout = null;
				}

				if ($this.val().length >= 3 || $this.val().length === 0) {
					inputTimeout = setTimeout(function () {
						mod.executeSearch();
						inputTimeout = null;
					}, mod.inputTimeoutTime);
				}
			});

			$('.js-input-from-date', $ctx).each(function (i, item) {
				$(item).mask('dD.mM.YYYY', {
					'translation': {
						d: { pattern: /[0-3]/ },
						D: { pattern: /[0-9]/ },
						m: { pattern: /[0-1]/ },
						M: { pattern: /[0-9]/ },
						Y: { pattern: /[0-9]/ }
					},
					placeholder: $(".js-input-from-date").data('placeholder-text')
				});
			});

			$('.js-input-to-date', $ctx).each(function (i, item) {
				$(item).mask('dD.mM.YYYY', {
					'translation': {
						d: { pattern: /[0-3]/ },
						D: { pattern: /[0-9]/ },
						m: { pattern: /[0-1]/ },
						M: { pattern: /[0-9]/ },
						Y: { pattern: /[0-9]/ }
					},
					placeholder: $(".js-input-to-date").data('placeholder-text')
				});
			});

			$('.e-datepicker input[data-filter]', $ctx).each(function (k, v) {
				var $this = $(this),
					$picker = $(v).data('Zebra_DatePicker'),
					regex = /^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19[0-9]{2}|20[0-9]{2})$/;

				$this.on('keyup', function (e) {
					var value = $this.val();

					$this.css('color', '#cc0000');

					if (value.length === 10) {
						if (regex.test($this.val())) {
							var dateParts = value.split('.'),
								date;

							date = new Date(dateParts[2], parseInt(dateParts[1], 10) - 1, dateParts[0], 12);

							$this.val(value).data('Zebra_DatePicker').show();
							$this.data('selecteddate', value);
							$this.data('timestamp', date.getTime());
							mod.updateDateField();
							mod.executeSearch();

							$this.css('color', '#000');
						}
						else {
							$this.css('color', '#cc0000');
						}
					}

					var $input = null;

					if (e.keyCode === 13) {
						$input = $this.data('Zebra_DatePicker');

						$input.hide();
						$this.blur();
					}
					if (e.keyCode === 9) {
						$input = $('.e-datepicker input[data-filter]', $ctx).data('Zebra_DatePicker');

						$input.hide();
					}

				});

				$this.on('focus', function () {
					$this.css('color', '#000');
				});

				$picker.settings.onSelect = function (a, b, jsDate, $el) {
					$el.data('timestamp', jsDate.getTime());
					$el.data('selecteddate', a);

					mod.updateDateField();
					mod.executeSearch();
				};
				$picker.settings.onClear = function ($el) {
					$el.data('timestamp', null);
					$el.data('selecteddate', null);
					mod.updateDateField();
					mod.executeSearch();
				};
			});

			$('[data-filter-reset]', $ctx).on('click', function () {
				// we need to reset all filters and facets first since they might be disabled
				mod.facets.forEach(function (facet) {
					facet.setActive(true);
				});
				mod.filters.forEach(function (filter) {
					filter.reset();
				});

				mod.$filterSelection.multipleSelect('refresh');

				// now we can restore the initially selected filters
				mod.filters.forEach(function (filter) {
					var filterName = filter.getFilter();

					if (filterName in mod.initialFilterData) {
						filter.setValue(mod.initialFilterData[filterName]);
					}
				});

                if (window.location.hash.indexOf('#query=') > -1) {
                    
                    var searchInput = $('input', $('.js-filter-search', $ctx));
                    if (searchInput !== undefined && searchInput !== null) {
                        searchInput.val('');
                    }
                }

				mod.updateDateField();

				mod.fire('emptyResults', { filterId: mod.filterId }, ['filter']);

				if (mod.$filterSearch.length === 0 || mod.$filterSearch.data('search') === 1) {
					mod.executeSearch();
				}
			});

			$('[data-filter] option', $ctx).each(function (k, v) {
				mod.facets.push(new mod.FilterFacet(v));
			});

			callback();
		},

		after: function () {
			var mod = this,
				$ctx = mod.$ctx;

			mod.fire('updateSortField', { order: mod.sortOrder, filterId: mod.filterId }, ['filter']);

			mod.updateDateField();

			var initQuery = mod.filters.find(function (f) {
				return f.getFilter() === 'query' && f.getValue();
			});

			if ((mod.$filterSearch.length === 0 || mod.$filterSearch.data('search') || initQuery) && !$ctx.hasClass('page-editor')) {

				var $searchInput = $('input', mod.$filterSearch);

				if ($('html').hasClass('no-placeholder') && $searchInput.val() === $searchInput.attr('placeholder')) {
					Placeholders.disable($searchInput[0]);
					$searchInput.val('');
					Placeholders.enable($searchInput[0]);
				}

				mod.executeSearch();
			}

			this.initialFilterData = mod.getFilterData();
		},

		//private functions

		updateDateField: function () {
			var mod = this;
			var $ctx = this.$ctx;

			var fromDate = null,
				toDate = null;

			mod.filters.forEach(function (e) {
				var name = e.getFilter();

				if (e.getDate && name === 'From') {
					fromDate = e.getDate();
				} else if (e.getDate && name === 'To') {
					toDate = e.getDate();
				}
			});

			if (fromDate && toDate) {
				$ctx.find('.date').text(fromDate + ' - ' + toDate);
				$ctx.find('.text').hide();
			}
			else if (fromDate && toDate === undefined) {
				$ctx.find('.date').text(fromDate);
				$ctx.find('.text').hide();
			}
			else if (fromDate === undefined && toDate) {
				$ctx.find('.date').text(toDate);
				$ctx.find('.text').hide();
			}
			else {
				$ctx.find('.date').text('');
				$ctx.find('.text').show();
			}
		},

		onSearchSuccess: function (data, noRefresh) {
			var mod = this;
			var dataFacets = [];
			var selectedFacets = [];

			data.filterId = mod.filterId;
			data.searchQuery = mod.getFilterData();

			data.Facets.forEach(function (v) {
				if (v.Values) {
					v.Values.forEach(function (v) {
						dataFacets.push(v.Name);
					});
				}
			});

			mod.$filterSelection.each(function (k, v) {
				selectedFacets.pushRange($(v).multipleSelect('getSelects'));
			});

			mod.facets.forEach(function (v) {
				v.setActive(dataFacets.find(function (e) {
					return e === v.getId();
				}) || selectedFacets.find(function (e) {
					return e === v.getId();
				}));
			});

			if (!noRefresh) {
				mod.$filterSelection.multipleSelect('refresh');
			}

			mod.fire('filterResults', data, ['filter']);
			mod.resultData = data;
		},

		executeSearch: function (noRefresh) {
			var mod = this;

			if (this.xhr) {
				this.xhr.abort();
			}

			this.xhr = $.ajax({
				url: mod.filterUrl,
				type: 'post',
				data: mod.getFilterData(),
				dataType: 'json',
				success: function (data) 
				{
					mod.onSearchSuccess(data, noRefresh);
				},
				fail: function (err)
				{
					console.error(err);
				}
			});
		},

		getFilterData: function () {
			var mod = this,
				filterData = new mod.FilterData();

			mod.filters.forEach(function (v) {
				if (v.getValue()) {
					filterData.addCriteria(v.getFilter(), v.getValue());
				}
			});

			if (mod.sortOrder) {
				filterData.addCriteria('Order', mod.sortOrder);
			}

			if (mod.searchSource) {
				filterData.setSource(mod.searchSource);
			}

			return filterData.toObj();
		},

		//private classes

		FilterField: function (element) {
			if (this instanceof Class) {
				return new this.FilterField(element);
			}

			var $el = $(element);

			if (!$el.data('filter')) {
				throw new Error("no filter attribute found");
			}

			this.getFilter = function () {
				return $el.data('filter') || null;
			};

			if ($el.is('input')) {
				var isDateField = typeof $el.data('date-filter') !== typeof undefined;

				this.getValue = function () {
					return isDateField ? $el.data('timestamp') : $el.val();
				};

				this.setValue = function (value) {
					if (isDateField) {
						$el.data('timestamp', value);
						value = new Date(parseInt(value, 10)).format($el.parents('.e-datepicker').data('format'));
						$el.data('selecteddate', value);
					}
					$el.val(value);
				};

				this.reset = function () {
					$el.val('');

					if (isDateField) {
						$el.data('timestamp', null);
						$el.data('selecteddate', null);
					}
				};

				if (isDateField) {
					this.getDate = function () {
						return $el.data('selecteddate');
					};
				}
			} else if ($el.is('select')) {
				this.getValue = function () {
					var values = $el.multipleSelect('getSelects');
					if (values !== null) {
						return values.join(',');
					}
					return null;
				};

				this.setValue = function (value) {
					if (value.constructor === Array) {
						$el.multipleSelect('setSelects', value);
					} else {
						$el.multipleSelect('setSelects', value.split(','));
					}
				};

				this.reset = function () {
					$el.multipleSelect('setSelects', []);
				};
			} else {
				this.getValue = function () {
					return null;
				};

				this.setValue = function (value) {
				};

				this.reset = function () {
				};
			}
		},

		FilterFacet: function (option) {
			if (this instanceof Class) {
				return new this.FilterFacet(option);
			}

			var $el = $(option);

			this.setActive = function (flag) {
				$el.prop('disabled', !flag);
			};

			this.getId = function () {
				return $el.val();
			};
		},

		FilterData: function () {
			if (this instanceof Class) {
				return new this.FilterData();
			}

			var criterias = {};
			var source = null;

			function addCriterias(obj) {
				var returnObj = obj;

				for (var prop in criterias) {
					if (criterias.hasOwnProperty(prop)) {
						returnObj[prop] = criterias[prop];
					}
				}

				return returnObj;
			}

			this.addCriteria = function (name, value) {
				criterias[name] = value;
			};

			this.setSource = function (sourceId) {
				source = sourceId;
			};

			this.toObj = function () {
				var obj = {};

				if (source) {
					obj.ds = source;
				}

				obj = addCriterias(obj);

				return obj;
			};
		},

		matchingID: function (id) {
			return (!id && !this.filterId) || id === this.filterId;
		},

		//eventhandler

		onSortResults: function (data) {
			var mod = this;

			if (mod.matchingID(data.filterId)) {
				this.sortOrder = data.order;
				this.executeSearch();
			}
		},

		onShowMore: function (data) {
			var mod = this;

			if (mod.matchingID(data.filterId)) {
				if (mod.resultData && mod.resultData.NextPageLink) {
					if (this.xhr) {
						this.xhr.abort();
					}

					this.xhr = $.ajax({
						url: mod.resultData.NextPageLink,
						method: 'post',
						data: mod.getFilterData(),
						dataType: 'json',
						success: function (data)
						{
							mod.resultData.Items.pushRange(data.Items);
							mod.resultData.NextPageLink = data.NextPageLink;
							mod.fire('filterResults', mod.resultData, ['filter']);
						},
						error: function (err)
						{
							console.error(err);
						}
					});
				}
			}
		},

		onUpdateDefaultFilter: function (data) {
			var mod = this;

			data.data.forEach(function (v) {
				var filter = mod.filters
					.get(function (e) {
						return e.getFilter() === v.name;
					});
				if (filter) {
					filter.setValue(v.values);
				}
			});

			mod.executeSearch();
		}

	});
}(Tc.$));

(function($) {
	"use strict";
	/**
	 * FilterConfig module implementation.
	 *
	 * @author Natalie Bausch <natalie.bausch@namics.com>
	 * @namespace Tc.Module
	 * @class FilterConfig
	 * @extends Tc.Module
	 */
	Tc.Module.FilterConfig = Tc.Module.extend({

		init: function($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function(callback) {
			var mod = this,
				$ctx = mod.$ctx,
				$configresult = $ctx.find('.js-config-filter-result'),
				$configfiltergroup = $ctx.find('.js-config-filter-group'),

				$filterMobBtn = $ctx.find('.js-filter-mobile-btn'),
				$filterGroup = $ctx.find('.js-filter-group');

			$filterMobBtn.on('click', function () {
				var $this = $(this);
				$this.toggleClass('state-active');
				$filterGroup.toggleClass('state-open');
			});

			this.posturl = $ctx.data('storage-url');

			$('.e-dropdown', $ctx).each(function (k, v) {
				var $this = $(v);
				$this.multipleSelect({
					filter: true,
					placeholder: $this.data('placeholder'),
					selectAll: false,
					selectAllText: $this.data('select-all-text'),
					allSelected: $this.data('all-selected'),
					multiple: true,
					multipleWidth: '100%',
					countSelected: $this.data('count-selected')
				});
			});

			$ctx.on('click', '.js-button', function(){
				$configresult.toggleClass('edit');
				$configfiltergroup.toggleClass('edit');
				$('.js-button', $ctx).toggleClass('h-hidden');
				if($(this).hasClass('save')){
					mod.updateFilter();
				}
			});


			callback();
		},

		after: function() {
			var mod = this,
				$ctx = mod.$ctx;


		},

		updateFilter: function(){
			var mod = this,
				$ctx = mod.$ctx;

			var data = [];
			$('.e-dropdown', $ctx).each(function (k, v) {
				var $this = $(v);
				var values = [];
				$this.multipleSelect('getSelects').forEach(function(v){
					values.push(v);
				});
				data.push({
					name: $this.data('filter'),
					values: values
				});
			});

            
			$.ajax({
				url: mod.posturl,
				type: "POST",
				data: {
					TargetGroup: data[0].values.join(','),
					Theme: data[1].values.join(','),
					Category: data[2].values.join(',')
				}
			}).done(function (response) {
			    $('[data-idx="0"]', $ctx).text(response.TargetGroup);
			    $('[data-idx="1"]', $ctx).text(response.Theme);
			    $('[data-idx="2"]', $ctx).text(response.Category);
				mod.fire('updateDefaultFilter', { data: data }, ['filterConfig']);
			});
		}

	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * FilterResult module implementation.
	 *
	 * @author Christoph Buehler <christoph.buehler@namics.com>
	 * @namespace Tc.Module
	 * @class FilterResult
	 * @extends Tc.Module
	 */
	Tc.Module.FilterResult = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
			this.filterId = $ctx.data('filter-id');
			this.data = null;
			this.resultsTpl = doT.template($('.js-results-tpl', $ctx).html());
			this.orderField = $('.e-dropdown', $ctx);
			this.$resultCount = $('.result-count', $ctx);
			this.$resultList = $('.js-results', $ctx);
		},

		on: function (callback) {
			var mod = this,
				$ctx = mod.$ctx;

			mod.orderField.multipleSelect({
				filter: false,
				single: true,
				selectAll: false,
				onClick: function () {
					mod.fire('sortResults', {
						order: mod.orderField.val(),
						filterId: mod.filterId
					}, ['filter']);
					mod.orderField.multipleSelect('refresh');
				}
			});

			mod.sandbox.subscribe('cookieimplementation', mod);
			mod.sandbox.subscribe('responsiveTable', mod);

			$ctx.on('click', '.show-more', function () {
				mod.fire('showMore', {
					filterId: mod.filterId
				}, ['filter']);
			});

			callback();
		},

		matchingID: function (id) {
			return (!id && !this.filterId) || id === this.filterId;
		},

		//eventhandler

		onEmptyResults: function (data) {
			if (this.matchingID(data.filterId)) {
				this.$resultList.empty();
				this.$resultCount.addClass('empty');
			}
		},

		onFilterResults: function (data) {
			var mod = this,
				$ctx = mod.$ctx;

			if (!data) {
				return;
			}

			if (mod.matchingID(data.filterId)) {
				mod.data = data;

				mod.$resultCount.removeClass('empty').find('.js-count').text(data.Count);

				if (data.Items) {
					mod.$resultList.html(mod.resultsTpl(data));
					$('.table-sorting', $ctx).stupidtable();
					mod.fire('equalTableHeight', {}, ['responsiveTable']);
				}

				mod.fire('LoadedResults', {});
			}
		},

		onUpdateSortField: function (data) {
			var mod = this;

			if (!data)
				return;

			if (mod.matchingID(data.filterId)) {
				mod.orderField.val(data.order);
				mod.orderField.multipleSelect('refresh');
			}
		}

	});
}(Tc.$));

(function($) {
	"use strict";
	/**
	 * Footer module implementation.
	 *
	 * @author Natalie Bausch <natalie.bausch@namics.com>
	 * @namespace Tc.Module
	 * @class Footer
	 * @extends Tc.Module
	 */
	Tc.Module.Footer = Tc.Module.extend({

		init: function($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function(callback) {
			var mod = this,
				$ctx = mod.$ctx,
				$visibleLis = $ctx.find('.footer-meta-links li:visible');

			enquire.register('only screen and (min-width : 768px)', function () {
				$visibleLis.each(function (i) {
					if (i % 2 === 0) {
						$(this).css({clear: 'none'});
					}
				});
			}, false);

			// Mobile
			enquire.register('only screen and (max-width : 767px)', function () {
				$visibleLis.each(function (i) {
					if (i % 2 === 0) {
						$(this).css({clear: 'left'});
					}
				});
			}, false);


			$visibleLis.find(':nth-child(3n)').css({clear: 'left'});

			callback();
		},

		after: function() {
			var mod = this,
				$ctx = mod.$ctx;


		}

	});
}(Tc.$));

(function($) {
	"use strict";
	/**
	 * Form module implementation.
	 *
	 * @author Simon Harte <simon.harte@namics.com>
	 * @namespace Tc.Module
	 * @class Form
	 * @extends Tc.Module
	 */
	Tc.Module.Form = Tc.Module.extend({
		selectors: {
			displayToggle: {
				source: '[data-display-toggle]',
				target: '[data-toggle-target]'
			}
		},

		states: {
			displayToggle: {
				active: 'is-active'
			}
		},

		init: function($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);

			this.$toggleSources = $ctx.find(this.selectors.displayToggle.source);
			this.$toggleTargets = $ctx.find(this.selectors.displayToggle.target);
		},

		on: function(callback) {
			var mod = this,
				$ctx = mod.$ctx;

			$ctx.on('change.toggle', this.selectors.displayToggle.source, this.$onChangeToggle.bind(this));

			callback();
		},

		after: function() {
			var mod = this,
				$ctx = mod.$ctx;

			this.$toggleSources.trigger('change.toggle');
		},

		$onChangeToggle: function(ev) {
			var $source = $(ev.currentTarget),
				$groupSiblings = this.$toggleSources.filter(function(i, item) {
					return $(item).attr('name') === $source.attr('name') && item !== ev.currentTarget;
				});

			this.setToggleDisplay($source);
			this.setInactiveSiblingState($groupSiblings);
		},

		setToggleDisplay: function($source) {
			var target = $source.data('display-toggle'),
				isActive = this.checkStateWithToggleSiblings(target);

		    var $elements = this.$toggleTargets
		        .filter(function(i, item) {
		            return $(item).data('toggle-target') === target;
		        });
		    $elements.toggleClass(this.states.displayToggle.active, isActive);
		    $elements.find(':input[type="hidden"][name$=".Value"]').val(isActive ? '' : '    ');
		    $elements.find(':input[type="text"][name$=".Value"]').attr('value', isActive ? '' : '    ');
		    $elements.find('textarea[name$=".Value"]').text(isActive ? '' : '    ');
		},

		checkStateWithToggleSiblings: function(group) {
			var minOneActive = this.$toggleSources.filter(function(i, item) {
				var $item = $(item);
				return $item.data('display-toggle') === group && $item.prop('checked');
			}).length;

			return minOneActive > 0;
		},

		setInactiveSiblingState: function($siblings) {
			var _this = this;

			$siblings.each(function(i, item) {
				_this.setToggleDisplay($(item));
			});
		}
	});
}(Tc.$));

(function($) {
	"use strict";
	/**
	 * Layout module implementation.
	 *
	 * @author Denis Skeledzic-Gemperli <denis.skeledzic@namics.com>
	 * @namespace Tc.Module
	 * @class Layout
	 * @extends Tc.Module
	 */
	Tc.Module.Layout = Tc.Module.extend({
		init: function($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function(callback) {
			var mod = this,
				$ctx = mod.$ctx,
				$navMobBtn = $ctx.find(".js-btn-navmain-mobile"),
				$target = false,
				$tooltip = false,
				$tip = false,

				// background scrolling
				$backgroundImageContainer = $ctx.find(".js-l-background-image-container"),
				$footerScrollAnchor = $ctx.find(".js-l-footer-scroll-anchor");

				// in order to stop scrolling as soon as footer is visible, we need to substract half of the footerHeight from the backgroundImageOffset
				// to get the correct pageScroll coordinates as a result 
				var inViewport = mod._isElementInViewport($footerScrollAnchor);

			//handle changing of title in tooltip
			mod.sandbox.subscribe("tooltipText", mod);

			mod.sandbox.subscribe("responsiveTable", mod);

			// -----------------------------------------
			// Mobile Navigaiton Button
			// -----------------------------------------
			$navMobBtn.on("click", function(e) {
				var $this = $(this);
				$this.toggleClass("state-active");
				$(".js-l-nav").toggleClass("state-open");
				$(".js-l-service").toggleClass("state-open");
			});

			// -----------------------------------------
			// Conditionally change meta viewport tag
			// -----------------------------------------
			var viewport = $('meta[name="viewport"]');

			if (screen.width >= 768) {
				viewport.attr("content", "width=1024, user-scalable=no");
			} else {
				viewport.attr(
					"content",
					"width=device-width, initial-scale=1.0, maximum-scale=1.0"
				);
			}

			// Change the viewport value based on screen.width
			var viewport_set = function() {
				if (screen.width >= 768) {
					viewport.attr("content", "width=1024, user-scalable=no");
				} else {
					viewport.attr(
						"content",
						"width=device-width, initial-scale=1.0, maximum-scale=1.0"
					);
				}
			};

			// Set the correct viewport value on page load
			viewport_set();

			// Set the correct viewport after device orientation change or resize
			window.onresize = function() {
				viewport_set();
			};

			var tooltipEvent = "touchstart";

			if (!("ontouchstart" in window)) {
				tooltipEvent = "mouseenter";
			}

			// -----------------------------------------
			// Tooltip
			// -----------------------------------------
			$ctx.on(tooltipEvent, "[rel~=tooltip]", function() {
				var $this = $(this);
				$target = $this;
				$tip = $target.attr("title");
				$tooltip = $('<div class="e-tip tooltip"></div>');

				if ($target.prop("tagName") == "A") {
					$tooltip = $('<div class="e-tip tooltip onlink"></div>');
				}

				if (!$tip || $tip === "") {
					return false;
				}

				if ($this.hasClass("state-active")) {
					$tip = $this.data("removetext");
				} else {
					$tip = $this.data("addtext");
				}

				$target.removeAttr("title");
				$tooltip
					.css("opacity", 1)
					.html($tip)
					.appendTo("body");

				var init_tooltip = function() {
					if ($(window).width() < $tooltip.outerWidth() * 1.5)
						$tooltip.css("max-width", $(window).width() / 2);
					else $tooltip.css("max-width", 340);

					var pos_left =
							$target.offset().left +
							$target.outerWidth() / 2 -
							$tooltip.outerWidth() / 2,
						pos_top =
							$target.offset().top - $tooltip.outerHeight() - 20;

					if (pos_left < 0) {
						pos_left =
							$target.offset().left +
							$target.outerWidth() / 2 -
							20;
						$tooltip.addClass("left");
					} else {
						$tooltip.removeClass("left");
					}

					if (pos_left + $tooltip.outerWidth() > $(window).width()) {
						pos_left =
							$target.offset().left -
							$tooltip.outerWidth() +
							$target.outerWidth() / 2 +
							20;
						$tooltip.addClass("right");
					} else {
						$tooltip.removeClass("right");
					}

					if (pos_top < 0) {
						pos_top = $target.offset().top + $target.outerHeight();
						$tooltip.addClass("top");
					} else {
						$tooltip.removeClass("top");
					}

					$tooltip
						.css({ left: pos_left, top: pos_top })
						.animate({ top: "+=10", opacity: 1 }, 50);
				};

				init_tooltip();
				$(window).resize(init_tooltip);

				var remove_tooltip = function() {
					$tooltip.animate(
						{ top: "-=10", opacity: 0 },
						50,
						function() {
							$(this).remove();
						}
					);

					$target.attr("title", $tip);
				};

				if ($target.prop("tagName") == "A") {
					$target.on("click", remove_tooltip);
				}

				$target.on("mouseleave", remove_tooltip);
				$tooltip.on("click", remove_tooltip);
			});

			// -----------------------------------------
			// Table Sorting
			// -----------------------------------------
			$(".table-sorting").stupidtable();

			// -----------------------------------------
			// datepicker dropdown
			// -----------------------------------------
			$ctx /*.on('click', function(){
				$('.e-datepicker .flyout').addClass('h-hidden');
			}).on('click', '.e-datepicker .flyout, Zebra_DatePicker', function(e){
				e.stopPropagation();
			})*/.on(
				"click",
				".e-datepicker .title",
				function(e) {
					e.stopPropagation();
					$(this)
						.siblings(".flyout")
						.toggleClass("h-hidden");
					$(this).toggleClass("open");
				}
			);

			//handle clickevent outsite the datepicker filter
			$ctx.on("click", function() {
				$(".e-datepicker .title", $ctx)
					.siblings(".flyout")
					.addClass("h-hidden");
				$(".e-datepicker .title", $ctx).removeClass("open");

				if (
					$(".e-datepicker .title", $ctx)
						.siblings(".flyout")
						.hasClass("h-hidden")
				) {
					var $input = $(".e-datepicker .flyout input", $ctx).data(
						"Zebra_DatePicker"
					);

					$input.hide();
				}
			});

			$(".e-datepicker .title", $ctx)
				.siblings(".flyout")
				.on("click", function(e) {
					e.stopPropagation();
				});

			$ctx.on("click", ".Zebra_DatePicker", function(e) {
				e.stopPropagation();
			});

			enquire.register(
				"only screen and (min-width : 768px)",
				function() {
					var options;

					if ($("html").is(".ie9")) {
						options = {
							default_position: "below",
							inside: true,
							show_icon: true,
							readonly_element: true
						};
					} else {
						options = {
							default_position: "below",
							inside: true,
							show_icon: true,
							readonly_element: false
						};
					}

					mod._initDatepicker(options);
				},
				false
			);

			enquire.register(
				"only screen and (max-width : 768px)",
				function() {
					var options = {
						default_position: "below",
						inside: true,
						show_icon: true,
						readonly_element: true
					};

					mod._initDatepicker(options);
				},
				false
			);

			// -----------------------------------------
			// Responsive Table
			// -----------------------------------------
			this.onEqualTableHeight();

			// -----------------------------------------
			// Stage Background Image fixed till Footer
			// -----------------------------------------

			var _scrollListener = mod._throttle(function() {
				var inViewport = mod._isElementInViewport($footerScrollAnchor);
				
				if(inViewport) {
					$backgroundImageContainer.removeClass('state-background-image--fixed');
				} else {
					$backgroundImageContainer.addClass('state-background-image--fixed');
				}

			}, 80);

			if(!$backgroundImageContainer.is(":hidden")) {
				// initial test if pageBackground is sticky
				if(!inViewport) {
					$backgroundImageContainer.addClass('state-background-image--fixed');
				} 
				$(document).on('scroll', _scrollListener);
			}

			callback();
		},

		onEqualTableHeight: function() {
			if (screen.width >= 768) {
				return;
			}

			var $ctx = this.$ctx;

			$ctx.find(".e-table:not(.vertical,.vertical-sorting)").each(
				function() {
					var cells = [];

					$(this)
						.find("tbody tr")
						.find("td")
						.each(function() {
							if (
								$(this).outerHeight() >
								(cells[$(this).index()] || 0)
							) {
								cells[$(this).index()] = $(this).outerHeight();
							}
						});

					$($(this).find("tr *")).each(function() {
						$(this).outerHeight(cells[$(this).index()]);
					});
				}
			);
		},

		after: function() {
			var mod = this,
				$ctx = mod.$ctx;

			/*$('.e-datepicker .flyout input', $ctx).each(function(v){

				var $el = $(v);

				$el.data('Zebra_DatePicker').update();
			});*/
		},

		_initDatepicker: function(options) {
			var mod = this,
				$ctx = mod.$ctx;

			$(".e-datepicker .flyout input", $ctx).each(function(k, v) {
				var $el = $(v);
				var $div = $el.parents(".e-datepicker");

				if ($div.data("format")) options.format = $div.data("format");
				if ($div.data("clear"))
					options.lang_clear_date = $div.data("clear");
				if ($div.data("today"))
					options.show_select_today = $div.data("today");
				if ($div.data("days"))
					options.days = $div.data("days").split("|");
				if ($div.data("months"))
					options.months = $div.data("months").split("|");

				$el.Zebra_DatePicker(options);
			});
		},

		// calculate if loader is in viewport 
      	_isElementInViewport: function($element) {
		  var element = $($element)[0];
		  var rect = element.getBoundingClientRect();
		  return (
			  rect.top >= 0 &&
			  rect.left >= 0 &&
			  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		  );
	 	 },

		// underscore now function 
		_now: function() {
			return new Date().getTime();
		},

		// underscore throttle function
		_throttle: function(func, wait, options) {
			var mod = this;
			var timeout, context, args, result;
			var previous = 0;
			if (!options) options = {};

			var later = function() {
			  previous = options.leading === false ? 0 : mod._now();
			  timeout = null;
			  result = func.apply(context, args);
			  if (!timeout) context = args = null;
			};

			var throttled = function() {
			  var now = mod._now();
			  if (!previous && options.leading === false) previous = now;
			  var remaining = wait - (now - previous);
			  context = this;
			  args = arguments;
			  if (remaining <= 0 || remaining > wait) {
				if (timeout) {
				  clearTimeout(timeout);
				  timeout = null;
				}
				previous = now;
				result = func.apply(context, args);
				if (!timeout) context = args = null;
			  } else if (!timeout && options.trailing !== false) {
				timeout = setTimeout(later, remaining);
			  }
			  return result;
			};

			throttled.cancel = function() {
			  clearTimeout(timeout);
			  previous = 0;
			  timeout = context = args = null;
			};

			return throttled;
		}
	});
})(Tc.$);

(function($) {
	"use strict";
	/**
	 * NavFinmapublic module implementation.
	 *
	 * @author Denis Skeledzic-Gemperli <denis.skeledzic@namics.com>
	 * @namespace Tc.Module
	 * @class NavFinmapublic
	 * @extends Tc.Module
	 */
	Tc.Module.NavFinmapublic = Tc.Module.extend({

		init: function($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function(callback) {
			var mod = this,
				$ctx = mod.$ctx,
				$finmaMobBtn = $ctx.find('.js-nav-finmapublic-m-btn'),
				$finmaFlyout = $ctx.find('.js-finmapublic-flyout');

			$finmaMobBtn.on('click', function () {
				var $this = $(this);
				$this.toggleClass('state-active');
				$finmaFlyout.toggleClass('state-open');
			});

			callback();
		}

	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * NavMain module implementation.
	 *
	 * @author Denis Skeledzic-Gemperli <denis.skeledzic@namics.com>
	 * @namespace Tc.Module
	 * @class NavMain
	 * @extends Tc.Module
	 */
	Tc.Module.NavMain = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function (callback) {
			var mod = this,
				$ctx = mod.$ctx,
				$nav = $ctx.find('.js-nav-main-list'),
				$item = $ctx.find('.js-main-list-item'),
				$link = $ctx.find('.js-main-list-link'),
				$menu = $ctx.find('.js-main-flyout'),

				delay = 300,
				timer = null;


			// Desktop
			enquire.register('only screen and (min-width : 768px)', function () {


				$item.on('mouseenter', function () {

					var $this = $(this),
						$m = $this.find($menu),
						$li = $m.find('li.g-row'),
						$flyoutright = $m.find('.flyout-column-right'),
						$flyoutcenter = $m.find('.flyout-column-center');


					if (timer)
						clearTimeout(timer);
					timer = setTimeout(function () {


					$this.find($link).addClass('state-hover');
					$this.find($menu).addClass('state-open').attr('aria-expanded', 'true');


						$flyoutright.height($li.height());
						$flyoutcenter.height($li.height());



					}, delay);
				})
				.on('mouseleave', function () {

					clearTimeout(timer);
					var $this = $(this);

					$this.find($link).removeClass('state-hover');
					$this.find($menu).removeClass('state-open').attr('aria-expanded', 'false');
				});

				$item.keyup(function(e) {

					var $this = $(this);

					if (e.keyCode == 13) {

						// console.log($this);

						$this.find($link).addClass('state-hover');
						$this.find($menu).addClass('state-open');
					}

					if (e.keyCode == 27) {

						// console.log($this);

						$this.find($link).removeClass('state-hover');
						$this.find($menu).removeClass('state-open');
					}
				});

			}, false);

			// Mobile
			enquire.register('only screen and (max-width : 767px)', function () {

				$link.on('click', function (e) {

					// console.log('click on nav in mobile')
					var $this = $(this);

					e.stopPropagation();

					if ($this.hasClass('state-hover')) {
						$this.removeClass('state-hover');
						$this.next().removeClass('state-open');
					} else {
						$link.not($this).removeClass('state-hover');
						$this.toggleClass('state-hover');

						$menu.not($this).removeClass('state-open');
						$this.next().toggleClass('state-open');
					}

					$('html,body').animate({scrollTop: $(this).offset().top}, 300);
				});


			}, false);



			callback();
		}
	});
}(Tc.$));

(function($) {
	"use strict";
	/**
	 * NavService module implementation.
	 *
	 * @author Denis Skeledzic-Gemperli <denis.skeledzic@namics.com>
	 * @namespace Tc.Module
	 * @class NavService
	 * @extends Tc.Module
	 */
	Tc.Module.NavService = Tc.Module.extend({

		init: function($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);

		},

		on: function(callback) {
			var mod = this,
				$ctx = mod.$ctx,
				$langLink = $ctx.find('.js-service-link-language-item'),
				$langList = $ctx.find('.js-service-link-language-list'),
				$notificationnumber = $ctx.find('.service-notification-number');

			this.getcounturl = $notificationnumber.data('getcounturl');


			mod.sandbox.subscribe(['updateCount'], mod);
			/*
			$link.hover(
				function() {
					$('.glyph-arw-s-down').addClass('state-active');
				}, function() {
					$('.glyph-arw-s-down').removeClass('state-active');
				}
			);
			*/

			mod.onGetCount();

			$langLink.click(function() {

				var $this = $(this);
				$this.toggleClass('state-active');
				$langList.toggleClass( 'state-open' );
			});

			callback();
		},

		after: function() {
			var mod = this,
				$ctx = mod.$ctx;

		},

		onGetCount: function(){
			var mod = this;

			$.ajax({
				url: mod.getcounturl,
				type: 'GET',
				success: function(data) {
					$('.service-notification-number').text(data.Count);
				}
			});
		}

	});
}(Tc.$));

(function ($) {
	"use strict";
	/**
	 * NavSidebar module implementation.
	 *
	 * @author Denis Skeledzic-Gemperli <denis.skeledzic@namics.com>
	 * @namespace Tc.Module
	 * @class NavSidebar
	 * @extends Tc.Module
	 */
	Tc.Module.NavSidebar = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function (callback) {
			var mod = this,
				$ctx = mod.$ctx,
				$title = $ctx.find('.js-nav-sidebar-mobile-title'),
				$targetList = $ctx.find('.js-state-selected');

			enquire.register('only screen and (max-width : 768px)', function () {

				$title.each(function () {
					if ($targetList.length) {
						if ($targetList.attr('class').split(' ')[0] === 'nav-sidebar-list-level-5') {

							// console.log(true);
							$title.css('display', 'none');
						} else {
							$title.css('display', 'block');
						}
					}
				});

			}, false);



			callback();
		}
	});
}(Tc.$));

(function($) {
	"use strict";
	/**
	 * Search module implementation.
	 *
	 * @author Denis Skeledzic-Gemperli <denis.skeledzic@namics.com>
	 * @namespace Tc.Module
	 * @class Search
	 * @extends Tc.Module
	 */
	Tc.Module.Search = Tc.Module.extend({

		init: function($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function(callback) {
			var mod = this,
				$ctx = mod.$ctx;

			function search (text) {
				var oldHref = window.location.href; 
				window.location = $ctx.data('url') + "#query=" + text;
				if(oldHref != window.location.href) {
					location.reload();
					window.scrollTo(0, 0);
				}
			}

			$('.js-search', $ctx).on('keyup', function(e){
				if(e.keyCode === 13 && $(this).val().length >= 3){
					search($(this).val());
				}
			});


			$ctx.on('click', '.btn-search', function() {
				search($ctx.find('.js-search').val());
			});

			callback();
		},

		after: function() {
			var mod = this,
				$ctx = mod.$ctx;


		}

	});
}(Tc.$));

(function($) {
	"use strict";
	/**
	 * SidebarTeaser module implementation.
	 *
	 * @author Denis Skeledzic-Gemperli <denis.skeledzic@namics.com>
	 * @namespace Tc.Module
	 * @class SidebarTeaser
	 * @extends Tc.Module
	 */
	Tc.Module.SidebarTeaser = Tc.Module.extend({

		init: function($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);



		},

		on: function(callback) {
			var mod = this,
				$ctx = mod.$ctx;



			callback();
		},

		after: function() {
			var mod = this,
				$ctx = mod.$ctx;


		}

	});
}(Tc.$));

(function($) {
	"use strict";
	/**
	 * Slider module implementation.
	 *
	 * @author Denis Skeledzic-Gemperli <denis.skeledzic@namics.com>
	 * @namespace Tc.Module
	 * @class Slider
	 * @extends Tc.Module
	 */
	Tc.Module.Slider = Tc.Module.extend({

		init: function($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function(callback) {
			var mod = this,
				$ctx = mod.$ctx,

				sliderTimer = null,
				$slider = $ctx.find('.js-slider'),
				$slidebox = $ctx.find('.slider-item'),
				$navigation = $ctx.find('.slidesjs-navigation'),
				sWidth = $slider.data('width') || 640,
				sHeight = $slider.data('height') || 380,
				autoplay = $slider.data('autoplay') || false,
				interval = $slider.data('interval') || 7,
				pause = $slider.data('pause') || 10,
				restartDelay = $slider.data('restartdelay') || 7;

			$slider.hover(
				function() {
					$('.slidesjs-navigation').addClass('state-hover');
				}, function() {
					$('.slidesjs-navigation').removeClass('state-hover');
				}
			);

			if ($slider.find('.slider-item').length > 1) {

				$slider.slidesjs({

					width:  sWidth,
					height: sHeight,

					slide: {
						// Slide effect settings.
						speed: 200
						// [number] Speed in milliseconds of the slide animation.
					},

					play: {
						interval:     (interval * 1000), // [number] Time spent on each slide in seconds.
						effect:       'slide', // [string] Can be either "slide" or "fade".
						auto:         autoplay, // [boolean] Start playing the slideshow on load.
						swap:         true, // [boolean] show/hide stop and play buttons
						pauseOnHover: true, // [boolean] pause a playing slideshow on hover
						pause:        (pause * 1000), // [number]
						restartDelay: (restartDelay * 1000) // [number] restart delay on inactive slideshow
					},

					pagination: {
						effect: 'slide'
					},

					navigation: {
						// [boolean] Generates next and previous buttons.
						// You can set to false and use your own buttons.
						// User defined buttons must have the following:
						// previous button: class="slidesjs-previous slidesjs-navigation"
						// next button: class="slidesjs-next slidesjs-navigation"
						active: false,
						effect: 'slide' // [string] Can be either "slide" or "fade".
					}
				});
			}
			else {
				$slider.css('display', 'block');
				$navigation.css('display', 'none');
			}


			callback();
		},

		after: function() {
			var mod = this,
				$ctx = mod.$ctx;


		}

	});
}(Tc.$));

(function($) {
	"use strict";
	/**
	 * Teaser module implementation.
	 *
	 * @author Denis Skeledzic-Gemperli <denis.skeledzic@namics.com>
	 * @namespace Tc.Module
	 * @class Teaser
	 * @extends Tc.Module
	 */
	Tc.Module.Teaser = Tc.Module.extend({

		init: function($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
		},

		on: function(callback) {
			var mod = this,
				$ctx = mod.$ctx;

			callback();
		},

		after: function() {
			var mod = this,
				$ctx = mod.$ctx;


		}

	});
}(Tc.$));

(function($) {
	"use strict";
	/**
	 * video module implementation.
	 *
	 * @author jgruber <johannes.gruber@namics.com>
	 * @namespace Tc.Module
	 * @class Video
	 * @extends Tc.Module
	 */
	Tc.Module.Video = Tc.Module.extend({

		init: function($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);



		},

		on: function(callback) {
			var mod = this,
				$ctx = mod.$ctx;

			var player = new Vimeo.Player($('.js-video__iframe', $ctx));

			player.on('play', function() {
				_paq.push(['trackEvent', 'Video', 'Play', $ctx.data('video-name')]);
			});

			player.on('ended', function() {
				_paq.push(['trackEvent', 'Video', 'Viewed', $ctx.data('video-name')]);
			});

			callback();
		},

		after: function() {
			var mod = this,
				$ctx = mod.$ctx;


		}

	});
}(Tc.$));

(function($) {
	"use strict";
	/**
	 * News skin implementation for the Teaser module.
	 *
	 * @author Denis Skeledzic-Gemperli <denis.skeledzic@namics.com>
	 * @namespace Tc.Module.{{pattern-js}}
	 * @class News
	 * @extends Tc.Module
	 */
	Tc.Module.Teaser.News = function(parent) {

		this.on = function(callback) {
			var mod = this,
				$ctx = mod.$ctx;

			parent.on(callback);
		};

		this.after = function() {
			var mod = this,
				$ctx = mod.$ctx;


			parent.after();
		};

	};
}(Tc.$));
