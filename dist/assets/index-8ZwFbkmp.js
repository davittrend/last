import{r as p,a as rs,c as Vn,b as as,u as kr,L as Sn,d as Er,N as ss,e as Xt,g as os,R as cs,f as dt,h as ye,i as ls,j as Ee,P as ds,B as us}from"./vendor-CxYdES0_.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();var Ir={exports:{}},Qt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ps=p,hs=Symbol.for("react.element"),ms=Symbol.for("react.fragment"),fs=Object.prototype.hasOwnProperty,gs=ps.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vs={key:!0,ref:!0,__self:!0,__source:!0};function Sr(t,e,n){var i,r={},a=null,o=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)fs.call(e,i)&&!vs.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:hs,type:t,key:a,ref:o,props:r,_owner:gs.current}}Qt.Fragment=ms;Qt.jsx=Sr;Qt.jsxs=Sr;Ir.exports=Qt;var s=Ir.exports,Tr,Ii=rs;Tr=Ii.createRoot,Ii.hydrateRoot;function U(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function ae(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function jr(t,e){const n=U(t);return isNaN(e)?ae(t,NaN):(e&&n.setDate(n.getDate()+e),n)}function xs(t,e){const n=+U(t);return ae(t,n+e)}const Pr=6048e5,ys=864e5,bs=6e4;let ws={};function Zt(){return ws}function it(t,e){var l,c,d,u;const n=Zt(),i=(e==null?void 0:e.weekStartsOn)??((c=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((u=(d=n.locale)==null?void 0:d.options)==null?void 0:u.weekStartsOn)??0,r=U(t),a=r.getDay(),o=(a<i?7:0)+a-i;return r.setDate(r.getDate()-o),r.setHours(0,0,0,0),r}function Lt(t){return it(t,{weekStartsOn:1})}function Nr(t){const e=U(t),n=e.getFullYear(),i=ae(t,0);i.setFullYear(n+1,0,4),i.setHours(0,0,0,0);const r=Lt(i),a=ae(t,0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);const o=Lt(a);return e.getTime()>=r.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function Si(t){const e=U(t);return e.setHours(0,0,0,0),e}function Ti(t){const e=U(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function _s(t,e){const n=Si(t),i=Si(e),r=+n-Ti(n),a=+i-Ti(i);return Math.round((r-a)/ys)}function ks(t){const e=Nr(t),n=ae(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),Lt(n)}function Es(t,e){return xs(t,e*bs)}function Is(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Ss(t){if(!Is(t)&&typeof t!="number")return!1;const e=U(t);return!isNaN(Number(e))}function Ts(t){const e=U(t),n=ae(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const js={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ps=(t,e,n)=>{let i;const r=js[t];return typeof r=="string"?i=r:e===1?i=r.one:i=r.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i};function gn(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const Ns={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},As={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Cs={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Os={date:gn({formats:Ns,defaultWidth:"full"}),time:gn({formats:As,defaultWidth:"full"}),dateTime:gn({formats:Cs,defaultWidth:"full"})},Ds={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Rs=(t,e,n,i)=>Ds[t];function Je(t){return(e,n)=>{const i=n!=null&&n.context?String(n.context):"standalone";let r;if(i==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,l=n!=null&&n.width?String(n.width):o;r=t.formattingValues[l]||t.formattingValues[o]}else{const o=t.defaultWidth,l=n!=null&&n.width?String(n.width):t.defaultWidth;r=t.values[l]||t.values[o]}const a=t.argumentCallback?t.argumentCallback(e):e;return r[a]}}const Ms={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ls={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Fs={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Us={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},zs={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},$s={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Bs=(t,e)=>{const n=Number(t),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Ws={ordinalNumber:Bs,era:Je({values:Ms,defaultWidth:"wide"}),quarter:Je({values:Ls,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Je({values:Fs,defaultWidth:"wide"}),day:Je({values:Us,defaultWidth:"wide"}),dayPeriod:Je({values:zs,defaultWidth:"wide",formattingValues:$s,defaultFormattingWidth:"wide"})};function Xe(t){return(e,n={})=>{const i=n.width,r=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],a=e.match(r);if(!a)return null;const o=a[0],l=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(l)?qs(l,h=>h.test(o)):Hs(l,h=>h.test(o));let d;d=t.valueCallback?t.valueCallback(c):c,d=n.valueCallback?n.valueCallback(d):d;const u=e.slice(o.length);return{value:d,rest:u}}}function Hs(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function qs(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function Vs(t){return(e,n={})=>{const i=e.match(t.matchPattern);if(!i)return null;const r=i[0],a=e.match(t.parsePattern);if(!a)return null;let o=t.valueCallback?t.valueCallback(a[0]):a[0];o=n.valueCallback?n.valueCallback(o):o;const l=e.slice(r.length);return{value:o,rest:l}}}const Gs=/^(\d+)(th|st|nd|rd)?/i,Ks=/\d+/i,Ys={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Js={any:[/^b/i,/^(a|c)/i]},Xs={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Qs={any:[/1/i,/2/i,/3/i,/4/i]},Zs={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},eo={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},to={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},no={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},io={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ro={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ao={ordinalNumber:Vs({matchPattern:Gs,parsePattern:Ks,valueCallback:t=>parseInt(t,10)}),era:Xe({matchPatterns:Ys,defaultMatchWidth:"wide",parsePatterns:Js,defaultParseWidth:"any"}),quarter:Xe({matchPatterns:Xs,defaultMatchWidth:"wide",parsePatterns:Qs,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Xe({matchPatterns:Zs,defaultMatchWidth:"wide",parsePatterns:eo,defaultParseWidth:"any"}),day:Xe({matchPatterns:to,defaultMatchWidth:"wide",parsePatterns:no,defaultParseWidth:"any"}),dayPeriod:Xe({matchPatterns:io,defaultMatchWidth:"any",parsePatterns:ro,defaultParseWidth:"any"})},so={code:"en-US",formatDistance:Ps,formatLong:Os,formatRelative:Rs,localize:Ws,match:ao,options:{weekStartsOn:0,firstWeekContainsDate:1}};function oo(t){const e=U(t);return _s(e,Ts(e))+1}function co(t){const e=U(t),n=+Lt(e)-+ks(e);return Math.round(n/Pr)+1}function Ar(t,e){var u,h,f,g;const n=U(t),i=n.getFullYear(),r=Zt(),a=(e==null?void 0:e.firstWeekContainsDate)??((h=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((g=(f=r.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??1,o=ae(t,0);o.setFullYear(i+1,0,a),o.setHours(0,0,0,0);const l=it(o,e),c=ae(t,0);c.setFullYear(i,0,a),c.setHours(0,0,0,0);const d=it(c,e);return n.getTime()>=l.getTime()?i+1:n.getTime()>=d.getTime()?i:i-1}function lo(t,e){var l,c,d,u;const n=Zt(),i=(e==null?void 0:e.firstWeekContainsDate)??((c=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((u=(d=n.locale)==null?void 0:d.options)==null?void 0:u.firstWeekContainsDate)??1,r=Ar(t,e),a=ae(t,0);return a.setFullYear(r,0,i),a.setHours(0,0,0,0),it(a,e)}function uo(t,e){const n=U(t),i=+it(n,e)-+lo(n,e);return Math.round(i/Pr)+1}function I(t,e){const n=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return n+i}const ue={y(t,e){const n=t.getFullYear(),i=n>0?n:1-n;return I(e==="yy"?i%100:i,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):I(n+1,2)},d(t,e){return I(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return I(t.getHours()%12||12,e.length)},H(t,e){return I(t.getHours(),e.length)},m(t,e){return I(t.getMinutes(),e.length)},s(t,e){return I(t.getSeconds(),e.length)},S(t,e){const n=e.length,i=t.getMilliseconds(),r=Math.trunc(i*Math.pow(10,n-3));return I(r,e.length)}},Ue={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ji={G:function(t,e,n){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(i,{width:"abbreviated"});case"GGGGG":return n.era(i,{width:"narrow"});case"GGGG":default:return n.era(i,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const i=t.getFullYear(),r=i>0?i:1-i;return n.ordinalNumber(r,{unit:"year"})}return ue.y(t,e)},Y:function(t,e,n,i){const r=Ar(t,i),a=r>0?r:1-r;if(e==="YY"){const o=a%100;return I(o,2)}return e==="Yo"?n.ordinalNumber(a,{unit:"year"}):I(a,e.length)},R:function(t,e){const n=Nr(t);return I(n,e.length)},u:function(t,e){const n=t.getFullYear();return I(n,e.length)},Q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return I(i,2);case"Qo":return n.ordinalNumber(i,{unit:"quarter"});case"QQQ":return n.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return I(i,2);case"qo":return n.ordinalNumber(i,{unit:"quarter"});case"qqq":return n.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,n){const i=t.getMonth();switch(e){case"M":case"MM":return ue.M(t,e);case"Mo":return n.ordinalNumber(i+1,{unit:"month"});case"MMM":return n.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,n){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return I(i+1,2);case"Lo":return n.ordinalNumber(i+1,{unit:"month"});case"LLL":return n.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,n,i){const r=uo(t,i);return e==="wo"?n.ordinalNumber(r,{unit:"week"}):I(r,e.length)},I:function(t,e,n){const i=co(t);return e==="Io"?n.ordinalNumber(i,{unit:"week"}):I(i,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):ue.d(t,e)},D:function(t,e,n){const i=oo(t);return e==="Do"?n.ordinalNumber(i,{unit:"dayOfYear"}):I(i,e.length)},E:function(t,e,n){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(i,{width:"short",context:"formatting"});case"EEEE":default:return n.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,n,i){const r=t.getDay(),a=(r-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return I(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,i){const r=t.getDay(),a=(r-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return I(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const i=t.getDay(),r=i===0?7:i;switch(e){case"i":return String(r);case"ii":return I(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(i,{width:"short",context:"formatting"});case"iiii":default:return n.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const i=t.getHours();let r;switch(i===12?r=Ue.noon:i===0?r=Ue.midnight:r=i/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const i=t.getHours();let r;switch(i>=17?r=Ue.evening:i>=12?r=Ue.afternoon:i>=4?r=Ue.morning:r=Ue.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),n.ordinalNumber(i,{unit:"hour"})}return ue.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):ue.H(t,e)},K:function(t,e,n){const i=t.getHours()%12;return e==="Ko"?n.ordinalNumber(i,{unit:"hour"}):I(i,e.length)},k:function(t,e,n){let i=t.getHours();return i===0&&(i=24),e==="ko"?n.ordinalNumber(i,{unit:"hour"}):I(i,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):ue.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):ue.s(t,e)},S:function(t,e){return ue.S(t,e)},X:function(t,e,n){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Ni(i);case"XXXX":case"XX":return Ie(i);case"XXXXX":case"XXX":default:return Ie(i,":")}},x:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"x":return Ni(i);case"xxxx":case"xx":return Ie(i);case"xxxxx":case"xxx":default:return Ie(i,":")}},O:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Pi(i,":");case"OOOO":default:return"GMT"+Ie(i,":")}},z:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Pi(i,":");case"zzzz":default:return"GMT"+Ie(i,":")}},t:function(t,e,n){const i=Math.trunc(t.getTime()/1e3);return I(i,e.length)},T:function(t,e,n){const i=t.getTime();return I(i,e.length)}};function Pi(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),r=Math.trunc(i/60),a=i%60;return a===0?n+String(r):n+String(r)+e+I(a,2)}function Ni(t,e){return t%60===0?(t>0?"-":"+")+I(Math.abs(t)/60,2):Ie(t,e)}function Ie(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),r=I(Math.trunc(i/60),2),a=I(i%60,2);return n+r+e+a}const Ai=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Cr=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},po=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],i=n[1],r=n[2];if(!r)return Ai(t,e);let a;switch(i){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;case"PPPP":default:a=e.dateTime({width:"full"});break}return a.replace("{{date}}",Ai(i,e)).replace("{{time}}",Cr(r,e))},ho={p:Cr,P:po},mo=/^D+$/,fo=/^Y+$/,go=["D","DD","YY","YYYY"];function vo(t){return mo.test(t)}function xo(t){return fo.test(t)}function yo(t,e,n){const i=bo(t,e,n);if(console.warn(i),go.includes(t))throw new RangeError(i)}function bo(t,e,n){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const wo=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,_o=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ko=/^'([^]*?)'?$/,Eo=/''/g,Io=/[a-zA-Z]/;function Ft(t,e,n){var u,h,f,g;const i=Zt(),r=i.locale??so,a=i.firstWeekContainsDate??((h=(u=i.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??1,o=i.weekStartsOn??((g=(f=i.locale)==null?void 0:f.options)==null?void 0:g.weekStartsOn)??0,l=U(t);if(!Ss(l))throw new RangeError("Invalid time value");let c=e.match(_o).map(w=>{const E=w[0];if(E==="p"||E==="P"){const R=ho[E];return R(w,r.formatLong)}return w}).join("").match(wo).map(w=>{if(w==="''")return{isToken:!1,value:"'"};const E=w[0];if(E==="'")return{isToken:!1,value:So(w)};if(ji[E])return{isToken:!0,value:w};if(E.match(Io))throw new RangeError("Format string contains an unescaped latin alphabet character `"+E+"`");return{isToken:!1,value:w}});r.localize.preprocessor&&(c=r.localize.preprocessor(l,c));const d={firstWeekContainsDate:a,weekStartsOn:o,locale:r};return c.map(w=>{if(!w.isToken)return w.value;const E=w.value;(xo(E)||vo(E))&&yo(E,e,String(t));const R=ji[E[0]];return R(l,E,r.localize,d)}).join("")}function So(t){const e=t.match(ko);return e?e[1].replace(Eo,"'"):t}function Or(t,e){const n=U(t),i=U(e);return+n<+i}function To(t,e){const n=U(t);return n.setHours(e),n}function jo(t,e){const n=U(t);return n.setMinutes(e),n}let Po={data:""},No=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||Po,Ao=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Co=/\/\*[^]*?\*\/|  +/g,Ci=/\n+/g,he=(t,e)=>{let n="",i="",r="";for(let a in t){let o=t[a];a[0]=="@"?a[1]=="i"?n=a+" "+o+";":i+=a[1]=="f"?he(o,a):a+"{"+he(o,a[1]=="k"?"":e)+"}":typeof o=="object"?i+=he(o,e?e.replace(/([^,])+/g,l=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):a):o!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=he.p?he.p(a,o):a+":"+o+";")}return n+(e&&r?e+"{"+r+"}":r)+i},Z={},Dr=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+Dr(t[n]);return e}return t},Oo=(t,e,n,i,r)=>{let a=Dr(t),o=Z[a]||(Z[a]=(c=>{let d=0,u=11;for(;d<c.length;)u=101*u+c.charCodeAt(d++)>>>0;return"go"+u})(a));if(!Z[o]){let c=a!==t?t:(d=>{let u,h,f=[{}];for(;u=Ao.exec(d.replace(Co,""));)u[4]?f.shift():u[3]?(h=u[3].replace(Ci," ").trim(),f.unshift(f[0][h]=f[0][h]||{})):f[0][u[1]]=u[2].replace(Ci," ").trim();return f[0]})(t);Z[o]=he(r?{["@keyframes "+o]:c}:c,n?"":"."+o)}let l=n&&Z.g?Z.g:null;return n&&(Z.g=Z[o]),((c,d,u,h)=>{h?d.data=d.data.replace(h,c):d.data.indexOf(c)===-1&&(d.data=u?c+d.data:d.data+c)})(Z[o],e,i,l),o},Do=(t,e,n)=>t.reduce((i,r,a)=>{let o=e[a];if(o&&o.call){let l=o(n),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=c?"."+c:l&&typeof l=="object"?l.props?"":he(l,""):l===!1?"":l}return i+r+(o??"")},"");function en(t){let e=this||{},n=t.call?t(e.p):t;return Oo(n.unshift?n.raw?Do(n,[].slice.call(arguments,1),e.p):n.reduce((i,r)=>Object.assign(i,r&&r.call?r(e.p):r),{}):n,No(e.target),e.g,e.o,e.k)}let Rr,Tn,jn;en.bind({g:1});let se=en.bind({k:1});function Ro(t,e,n,i){he.p=e,Rr=t,Tn=n,jn=i}function be(t,e){let n=this||{};return function(){let i=arguments;function r(a,o){let l=Object.assign({},a),c=l.className||r.className;n.p=Object.assign({theme:Tn&&Tn()},l),n.o=/ *go\d+/.test(c),l.className=en.apply(n,i)+(c?" "+c:"");let d=t;return t[0]&&(d=l.as||t,delete l.as),jn&&d[0]&&jn(l),Rr(d,l)}return r}}var Mo=t=>typeof t=="function",Ut=(t,e)=>Mo(t)?t(e):t,Lo=(()=>{let t=0;return()=>(++t).toString()})(),Mr=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),Fo=20,Pt=new Map,Uo=1e3,Oi=t=>{if(Pt.has(t))return;let e=setTimeout(()=>{Pt.delete(t),Ae({type:4,toastId:t})},Uo);Pt.set(t,e)},zo=t=>{let e=Pt.get(t);e&&clearTimeout(e)},Pn=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,Fo)};case 1:return e.toast.id&&zo(e.toast.id),{...t,toasts:t.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:n}=e;return t.toasts.find(a=>a.id===n.id)?Pn(t,{type:1,toast:n}):Pn(t,{type:0,toast:n});case 3:let{toastId:i}=e;return i?Oi(i):t.toasts.forEach(a=>{Oi(a.id)}),{...t,toasts:t.toasts.map(a=>a.id===i||i===void 0?{...a,visible:!1}:a)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let r=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+r}))}}},Nt=[],At={toasts:[],pausedAt:void 0},Ae=t=>{At=Pn(At,t),Nt.forEach(e=>{e(At)})},$o={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Bo=(t={})=>{let[e,n]=p.useState(At);p.useEffect(()=>(Nt.push(n),()=>{let r=Nt.indexOf(n);r>-1&&Nt.splice(r,1)}),[e]);let i=e.toasts.map(r=>{var a,o;return{...t,...t[r.type],...r,duration:r.duration||((a=t[r.type])==null?void 0:a.duration)||(t==null?void 0:t.duration)||$o[r.type],style:{...t.style,...(o=t[r.type])==null?void 0:o.style,...r.style}}});return{...e,toasts:i}},Wo=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||Lo()}),ut=t=>(e,n)=>{let i=Wo(e,t,n);return Ae({type:2,toast:i}),i.id},q=(t,e)=>ut("blank")(t,e);q.error=ut("error");q.success=ut("success");q.loading=ut("loading");q.custom=ut("custom");q.dismiss=t=>{Ae({type:3,toastId:t})};q.remove=t=>Ae({type:4,toastId:t});q.promise=(t,e,n)=>{let i=q.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(r=>(q.success(Ut(e.success,r),{id:i,...n,...n==null?void 0:n.success}),r)).catch(r=>{q.error(Ut(e.error,r),{id:i,...n,...n==null?void 0:n.error})}),t};var Ho=(t,e)=>{Ae({type:1,toast:{id:t,height:e}})},qo=()=>{Ae({type:5,time:Date.now()})},Vo=t=>{let{toasts:e,pausedAt:n}=Bo(t);p.useEffect(()=>{if(n)return;let a=Date.now(),o=e.map(l=>{if(l.duration===1/0)return;let c=(l.duration||0)+l.pauseDuration-(a-l.createdAt);if(c<0){l.visible&&q.dismiss(l.id);return}return setTimeout(()=>q.dismiss(l.id),c)});return()=>{o.forEach(l=>l&&clearTimeout(l))}},[e,n]);let i=p.useCallback(()=>{n&&Ae({type:6,time:Date.now()})},[n]),r=p.useCallback((a,o)=>{let{reverseOrder:l=!1,gutter:c=8,defaultPosition:d}=o||{},u=e.filter(g=>(g.position||d)===(a.position||d)&&g.height),h=u.findIndex(g=>g.id===a.id),f=u.filter((g,w)=>w<h&&g.visible).length;return u.filter(g=>g.visible).slice(...l?[f+1]:[0,f]).reduce((g,w)=>g+(w.height||0)+c,0)},[e]);return{toasts:e,handlers:{updateHeight:Ho,startPause:qo,endPause:i,calculateOffset:r}}},Go=se`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ko=se`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Yo=se`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Jo=be("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Go} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ko} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Yo} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Xo=se`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Qo=be("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Xo} 1s linear infinite;
`,Zo=se`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ec=se`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,tc=be("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Zo} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ec} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,nc=be("div")`
  position: absolute;
`,ic=be("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,rc=se`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ac=be("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${rc} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,sc=({toast:t})=>{let{icon:e,type:n,iconTheme:i}=t;return e!==void 0?typeof e=="string"?p.createElement(ac,null,e):e:n==="blank"?null:p.createElement(ic,null,p.createElement(Qo,{...i}),n!=="loading"&&p.createElement(nc,null,n==="error"?p.createElement(Jo,{...i}):p.createElement(tc,{...i})))},oc=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,cc=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,lc="0%{opacity:0;} 100%{opacity:1;}",dc="0%{opacity:1;} 100%{opacity:0;}",uc=be("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,pc=be("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,hc=(t,e)=>{let n=t.includes("top")?1:-1,[i,r]=Mr()?[lc,dc]:[oc(n),cc(n)];return{animation:e?`${se(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${se(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},mc=p.memo(({toast:t,position:e,style:n,children:i})=>{let r=t.height?hc(t.position||e||"top-center",t.visible):{opacity:0},a=p.createElement(sc,{toast:t}),o=p.createElement(pc,{...t.ariaProps},Ut(t.message,t));return p.createElement(uc,{className:t.className,style:{...r,...n,...t.style}},typeof i=="function"?i({icon:a,message:o}):p.createElement(p.Fragment,null,a,o))});Ro(p.createElement);var fc=({id:t,className:e,style:n,onHeightUpdate:i,children:r})=>{let a=p.useCallback(o=>{if(o){let l=()=>{let c=o.getBoundingClientRect().height;i(t,c)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,i]);return p.createElement("div",{ref:a,className:e,style:n},r)},gc=(t,e)=>{let n=t.includes("top"),i=n?{top:0}:{bottom:0},r=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Mr()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...i,...r}},vc=en`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,It=16,xc=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:i,children:r,containerStyle:a,containerClassName:o})=>{let{toasts:l,handlers:c}=Vo(n);return p.createElement("div",{style:{position:"fixed",zIndex:9999,top:It,left:It,right:It,bottom:It,pointerEvents:"none",...a},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(d=>{let u=d.position||e,h=c.calculateOffset(d,{reverseOrder:t,gutter:i,defaultPosition:e}),f=gc(u,h);return p.createElement(fc,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?vc:"",style:f},d.type==="custom"?Ut(d.message,d):r?r(d):p.createElement(mc,{toast:d,position:u}))}))},_=q;const Gn="pinterest_token_metadata",yc=()=>{setInterval(Di,1e3*60*60),Di()},Di=async()=>{const t=Kn(),e=new Date;for(const n of t){const i=new Date(n.refreshDate);Or(i,e)&&await bc(n.username)}},Lr=t=>{const e=Kn(),n=jr(new Date,27),i=[...e.filter(r=>r.username!==t),{username:t,refreshDate:n.toISOString()}];localStorage.setItem(Gn,JSON.stringify(i))},Nn=t=>{const n=Kn().filter(i=>i.username!==t);localStorage.setItem(Gn,JSON.stringify(n))},Kn=()=>{try{const t=localStorage.getItem(Gn);return t?JSON.parse(t):[]}catch(t){return console.error("Failed to parse token metadata:",t),[]}},bc=async t=>{const n=Ct.getState().auth.pinterestAccounts.find(i=>i.user.username===t);if(!(n!=null&&n.token.refresh_token)){console.error(`No refresh token found for account: ${t}`);return}try{const i=await fetch(`/.netlify/functions/pinterest-auth?path=/token&refresh_token=${n.token.refresh_token}`),r=await i.json();if(!i.ok)throw new Error(r.error||"Token refresh failed");if(r.token){const a={...n,token:{...n.token,...r.token}};Ct.dispatch(zt(a)),Lr(t),console.log(`Successfully refreshed token for ${t}`)}}catch(i){console.error(`Failed to refresh token for ${t}:`,i),_.error(`Failed to refresh Pinterest access for ${t}. Please reconnect the account.`),Ct.dispatch(Yn(t)),Nn(t)}},wc=()=>{try{const t=localStorage.getItem("pinterest_auth"),e=localStorage.getItem("pinterest_accounts"),n=t?JSON.parse(t):null,i=e?JSON.parse(e):[];return{isAuthenticated:!!n,userData:n,isLoading:!1,error:null,pinterestAccounts:i}}catch(t){return console.error("Failed to parse stored auth data:",t),{isAuthenticated:!1,userData:null,isLoading:!1,error:null,pinterestAccounts:[]}}},Fr=Vn({name:"auth",initialState:wc(),reducers:{setAuth:(t,e)=>{t.isAuthenticated=!0,t.userData=e.payload,t.error=null,t.pinterestAccounts.some(i=>i.user.username===e.payload.user.username)||(t.pinterestAccounts.push(e.payload),localStorage.setItem("pinterest_accounts",JSON.stringify(t.pinterestAccounts)),Lr(e.payload.user.username)),localStorage.setItem("pinterest_auth",JSON.stringify(e.payload))},setLoading:(t,e)=>{t.isLoading=e.payload},setError:(t,e)=>{t.error=e.payload,t.isLoading=!1},logout:t=>{t.pinterestAccounts.forEach(e=>{Nn(e.user.username)}),t.isAuthenticated=!1,t.userData=null,t.error=null,t.pinterestAccounts=[],localStorage.removeItem("pinterest_auth"),localStorage.removeItem("pinterest_accounts")},removePinterestAccount:(t,e)=>{var n;Nn(e.payload),t.pinterestAccounts=t.pinterestAccounts.filter(i=>i.user.username!==e.payload),localStorage.setItem("pinterest_accounts",JSON.stringify(t.pinterestAccounts)),((n=t.userData)==null?void 0:n.user.username)===e.payload&&(t.pinterestAccounts.length>0?(t.userData=t.pinterestAccounts[0],t.isAuthenticated=!0,localStorage.setItem("pinterest_auth",JSON.stringify(t.pinterestAccounts[0]))):(t.userData=null,t.isAuthenticated=!1,localStorage.removeItem("pinterest_auth")))}}}),{setAuth:zt,setLoading:mm,setError:fm,logout:_c,removePinterestAccount:Yn}=Fr.actions,kc=Fr.reducer,Ec={items:[],isLoading:!1,error:null},Ur=Vn({name:"boards",initialState:Ec,reducers:{setBoards:(t,e)=>{t.items=e.payload,t.error=null},setBoardsLoading:(t,e)=>{t.isLoading=e.payload},setBoardsError:(t,e)=>{t.error=e.payload,t.isLoading=!1}}}),{setBoards:Ic,setBoardsLoading:Ri,setBoardsError:Sc}=Ur.actions,Tc=Ur.reducer,jc={scheduledPins:[],isLoading:!1,error:null},zr=Vn({name:"scheduler",initialState:jc,reducers:{addScheduledPin:(t,e)=>{t.scheduledPins.push(e.payload)},updateScheduledPin:(t,e)=>{const n=t.scheduledPins.findIndex(i=>i.id===e.payload.id);n!==-1&&(t.scheduledPins[n]=e.payload)},removeScheduledPin:(t,e)=>{t.scheduledPins=t.scheduledPins.filter(n=>n.id!==e.payload)},setSchedulerLoading:(t,e)=>{t.isLoading=e.payload},setSchedulerError:(t,e)=>{t.error=e.payload,t.isLoading=!1}}}),{addScheduledPin:Pc,updateScheduledPin:Nc,removeScheduledPin:Ac,setSchedulerLoading:gm,setSchedulerError:vm}=zr.actions,Cc=zr.reducer,Ct=as({reducer:{auth:kc,boards:Tc,scheduler:Cc}});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Oc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),P=(t,e)=>{const n=p.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:l="",children:c,...d},u)=>p.createElement("svg",{ref:u,...Oc,width:r,height:r,stroke:i,strokeWidth:o?Number(a)*24/Number(r):a,className:["lucide",`lucide-${Dc(t)}`,l].join(" "),...d},[...e.map(([h,f])=>p.createElement(h,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=P("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=P("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=P("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=P("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=P("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=P("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=P("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=P("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=P("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=P("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=P("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=P("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=P("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=P("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=P("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=P("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=P("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=P("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=P("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=P("SendHorizontal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=P("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=P("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=P("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=P("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=P("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=P("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);var Mi={};/**
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
 */const qr=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Qc=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const a=t[n++];e[i++]=String.fromCharCode((r&31)<<6|a&63)}else if(r>239&&r<365){const a=t[n++],o=t[n++],l=t[n++],c=((r&7)<<18|(a&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const a=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(a&63)<<6|o&63)}}return e.join("")},Vr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const a=t[r],o=r+1<t.length,l=o?t[r+1]:0,c=r+2<t.length,d=c?t[r+2]:0,u=a>>2,h=(a&3)<<4|l>>4;let f=(l&15)<<2|d>>6,g=d&63;c||(g=64,o||(f=64)),i.push(n[u],n[h],n[f],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const a=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const d=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,a==null||l==null||d==null||h==null)throw new Zc;const f=a<<2|l>>4;if(i.push(f),d!==64){const g=l<<4&240|d>>2;if(i.push(g),h!==64){const w=d<<6&192|h;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Zc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const el=function(t){const e=qr(t);return Vr.encodeByteArray(e,!0)},Gr=function(t){return el(t).replace(/\./g,"")},Kr=function(t){try{return Vr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nl=()=>tl().__FIREBASE_DEFAULTS__,il=()=>{if(typeof process>"u"||typeof Mi>"u")return;const t=Mi.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rl=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Kr(t[1]);return e&&JSON.parse(e)},Qn=()=>{try{return nl()||il()||rl()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},al=t=>{var e,n;return(n=(e=Qn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yr=()=>{var t;return(t=Qn())===null||t===void 0?void 0:t.config},Jr=t=>{var e;return(e=Qn())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class sl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function z(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ol(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(z())}function cl(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ll(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ul(){const t=z();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pl(){try{return typeof indexedDB=="object"}catch{return!1}}function hl(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var a;e(((a=r.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}/**
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
 */const ml="FirebaseError";class we extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=ml,Object.setPrototypeOf(this,we.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pt.prototype.create)}}class pt{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,a=this.errors[e],o=a?fl(a,i):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new we(r,l,i)}}function fl(t,e){return t.replace(gl,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const gl=/\{\$([^}]+)}/g;function vl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $t(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const a=t[r],o=e[r];if(Li(a)&&Li(o)){if(!$t(a,o))return!1}else if(a!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Li(t){return t!==null&&typeof t=="object"}/**
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
 */function ht(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ze(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,a]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(a)}}),e}function et(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xl(t,e){const n=new yl(t,e);return n.subscribe.bind(n)}class yl{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");bl(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=vn),r.error===void 0&&(r.error=vn),r.complete===void 0&&(r.complete=vn);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bl(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vn(){}/**
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
 */function Q(t){return t&&t._delegate?t._delegate:t}class He{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Se="[DEFAULT]";/**
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
 */class wl{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new sl;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(r)return null;throw a}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kl(e))try{this.getOrInitializeService({instanceIdentifier:Se})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:r});i.resolve(a)}catch{}}}}clearInstance(e=Se){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Se){return this.instances.has(e)}getOptions(e=Se){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[a,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(a);i===l&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),a=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(r,a);const o=this.instances.get(r);return o&&e(o,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:_l(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Se){return this.component?this.component.multipleInstances?e:Se:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _l(t){return t===Se?void 0:t}function kl(t){return t.instantiationMode==="EAGER"}/**
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
 */class El{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wl(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var T;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(T||(T={}));const Il={debug:T.DEBUG,verbose:T.VERBOSE,info:T.INFO,warn:T.WARN,error:T.ERROR,silent:T.SILENT},Sl=T.INFO,Tl={[T.DEBUG]:"log",[T.VERBOSE]:"log",[T.INFO]:"info",[T.WARN]:"warn",[T.ERROR]:"error"},jl=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Tl[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xr{constructor(e){this.name=e,this._logLevel=Sl,this._logHandler=jl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in T))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Il[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,T.DEBUG,...e),this._logHandler(this,T.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,T.VERBOSE,...e),this._logHandler(this,T.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,T.INFO,...e),this._logHandler(this,T.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,T.WARN,...e),this._logHandler(this,T.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,T.ERROR,...e),this._logHandler(this,T.ERROR,...e)}}const Pl=(t,e)=>e.some(n=>t instanceof n);let Fi,Ui;function Nl(){return Fi||(Fi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Al(){return Ui||(Ui=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qr=new WeakMap,Cn=new WeakMap,Zr=new WeakMap,xn=new WeakMap,Zn=new WeakMap;function Cl(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",a),t.removeEventListener("error",o)},a=()=>{n(ve(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",a),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qr.set(n,t)}).catch(()=>{}),Zn.set(e,t),e}function Ol(t){if(Cn.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",o),t.removeEventListener("abort",o)},a=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",a),t.addEventListener("error",o),t.addEventListener("abort",o)});Cn.set(t,e)}let On={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zr.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ve(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dl(t){On=t(On)}function Rl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(yn(this),e,...n);return Zr.set(i,e.sort?e.sort():[e]),ve(i)}:Al().includes(t)?function(...e){return t.apply(yn(this),e),ve(Qr.get(this))}:function(...e){return ve(t.apply(yn(this),e))}}function Ml(t){return typeof t=="function"?Rl(t):(t instanceof IDBTransaction&&Ol(t),Pl(t,Nl())?new Proxy(t,On):t)}function ve(t){if(t instanceof IDBRequest)return Cl(t);if(xn.has(t))return xn.get(t);const e=Ml(t);return e!==t&&(xn.set(t,e),Zn.set(e,t)),e}const yn=t=>Zn.get(t);function Ll(t,e,{blocked:n,upgrade:i,blocking:r,terminated:a}={}){const o=indexedDB.open(t,e),l=ve(o);return i&&o.addEventListener("upgradeneeded",c=>{i(ve(o.result),c.oldVersion,c.newVersion,ve(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{a&&c.addEventListener("close",()=>a()),r&&c.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Fl=["get","getKey","getAll","getAllKeys","count"],Ul=["put","add","delete","clear"],bn=new Map;function zi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bn.get(e))return bn.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Ul.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Fl.includes(n)))return;const a=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let d=c.store;return i&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),r&&c.done]))[0]};return bn.set(e,a),a}Dl(t=>({...t,get:(e,n,i)=>zi(e,n)||t.get(e,n,i),has:(e,n)=>!!zi(e,n)||t.has(e,n)}));/**
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
 */class zl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($l(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function $l(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dn="@firebase/app",$i="0.10.13";/**
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
 */const oe=new Xr("@firebase/app"),Bl="@firebase/app-compat",Wl="@firebase/analytics-compat",Hl="@firebase/analytics",ql="@firebase/app-check-compat",Vl="@firebase/app-check",Gl="@firebase/auth",Kl="@firebase/auth-compat",Yl="@firebase/database",Jl="@firebase/data-connect",Xl="@firebase/database-compat",Ql="@firebase/functions",Zl="@firebase/functions-compat",ed="@firebase/installations",td="@firebase/installations-compat",nd="@firebase/messaging",id="@firebase/messaging-compat",rd="@firebase/performance",ad="@firebase/performance-compat",sd="@firebase/remote-config",od="@firebase/remote-config-compat",cd="@firebase/storage",ld="@firebase/storage-compat",dd="@firebase/firestore",ud="@firebase/vertexai-preview",pd="@firebase/firestore-compat",hd="firebase",md="10.14.1";/**
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
 */const Rn="[DEFAULT]",fd={[Dn]:"fire-core",[Bl]:"fire-core-compat",[Hl]:"fire-analytics",[Wl]:"fire-analytics-compat",[Vl]:"fire-app-check",[ql]:"fire-app-check-compat",[Gl]:"fire-auth",[Kl]:"fire-auth-compat",[Yl]:"fire-rtdb",[Jl]:"fire-data-connect",[Xl]:"fire-rtdb-compat",[Ql]:"fire-fn",[Zl]:"fire-fn-compat",[ed]:"fire-iid",[td]:"fire-iid-compat",[nd]:"fire-fcm",[id]:"fire-fcm-compat",[rd]:"fire-perf",[ad]:"fire-perf-compat",[sd]:"fire-rc",[od]:"fire-rc-compat",[cd]:"fire-gcs",[ld]:"fire-gcs-compat",[dd]:"fire-fst",[pd]:"fire-fst-compat",[ud]:"fire-vertex","fire-js":"fire-js",[hd]:"fire-js-all"};/**
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
 */const Bt=new Map,gd=new Map,Mn=new Map;function Bi(t,e){try{t.container.addComponent(e)}catch(n){oe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function at(t){const e=t.name;if(Mn.has(e))return oe.debug(`There were multiple attempts to register component ${e}.`),!1;Mn.set(e,t);for(const n of Bt.values())Bi(n,t);for(const n of gd.values())Bi(n,t);return!0}function ea(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function K(t){return t.settings!==void 0}/**
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
 */const vd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xe=new pt("app","Firebase",vd);/**
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
 */class xd{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xe.create("app-deleted",{appName:this._name})}}/**
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
 */const mt=md;function ta(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Rn,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw xe.create("bad-app-name",{appName:String(r)});if(n||(n=Yr()),!n)throw xe.create("no-options");const a=Bt.get(r);if(a){if($t(n,a.options)&&$t(i,a.config))return a;throw xe.create("duplicate-app",{appName:r})}const o=new El(r);for(const c of Mn.values())o.addComponent(c);const l=new xd(n,i,o);return Bt.set(r,l),l}function yd(t=Rn){const e=Bt.get(t);if(!e&&t===Rn&&Yr())return ta();if(!e)throw xe.create("no-app",{appName:t});return e}function ze(t,e,n){var i;let r=(i=fd[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const a=r.match(/\s|\//),o=e.match(/\s|\//);if(a||o){const l=[`Unable to register library "${r}" with version "${e}":`];a&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),oe.warn(l.join(" "));return}at(new He(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const bd="firebase-heartbeat-database",wd=1,st="firebase-heartbeat-store";let wn=null;function na(){return wn||(wn=Ll(bd,wd,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(st)}catch(n){console.warn(n)}}}}).catch(t=>{throw xe.create("idb-open",{originalErrorMessage:t.message})})),wn}async function _d(t){try{const n=(await na()).transaction(st),i=await n.objectStore(st).get(ia(t));return await n.done,i}catch(e){if(e instanceof we)oe.warn(e.message);else{const n=xe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});oe.warn(n.message)}}}async function Wi(t,e){try{const i=(await na()).transaction(st,"readwrite");await i.objectStore(st).put(e,ia(t)),await i.done}catch(n){if(n instanceof we)oe.warn(n.message);else{const i=xe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});oe.warn(i.message)}}}function ia(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kd=1024,Ed=30*24*60*60*1e3;class Id{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Td(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Hi();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Ed}),this._storage.overwrite(this._heartbeatsCache))}catch(i){oe.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hi(),{heartbeatsToSend:i,unsentEntries:r}=Sd(this._heartbeatsCache.heartbeats),a=Gr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return oe.warn(n),""}}}function Hi(){return new Date().toISOString().substring(0,10)}function Sd(t,e=kd){const n=[];let i=t.slice();for(const r of t){const a=n.find(o=>o.agent===r.agent);if(a){if(a.dates.push(r.date),qi(n)>e){a.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),qi(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Td{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pl()?hl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _d(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function qi(t){return Gr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function jd(t){at(new He("platform-logger",e=>new zl(e),"PRIVATE")),at(new He("heartbeat",e=>new Id(e),"PRIVATE")),ze(Dn,$i,t),ze(Dn,$i,"esm2017"),ze("fire-js","")}jd("");function ei(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function Ce(t,e,n,i){function r(a){return a instanceof n?a:new n(function(o){o(a)})}return new(n||(n=Promise))(function(a,o){function l(u){try{d(i.next(u))}catch(h){o(h)}}function c(u){try{d(i.throw(u))}catch(h){o(h)}}function d(u){u.done?a(u.value):r(u.value).then(l,c)}d((i=i.apply(t,e||[])).next())})}function ra(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pd=ra,aa=new pt("auth","Firebase",ra());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new Xr("@firebase/auth");function Nd(t,...e){Wt.logLevel<=T.WARN&&Wt.warn(`Auth (${mt}): ${t}`,...e)}function Ot(t,...e){Wt.logLevel<=T.ERROR&&Wt.error(`Auth (${mt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t,...e){throw ni(t,...e)}function Y(t,...e){return ni(t,...e)}function ti(t,e,n){const i=Object.assign(Object.assign({},Pd()),{[e]:n});return new pt("auth","Firebase",i).create(e,{appName:t.name})}function re(t){return ti(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ad(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&G(t,"argument-error"),ti(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ni(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return aa.create(t,...e)}function x(t,e,...n){if(!t)throw ni(e,...n)}function te(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ot(e),new Error(e)}function ce(t,e){t||te(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Cd(){return Vi()==="http:"||Vi()==="https:"}function Vi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cd()||ll()||"connection"in navigator)?navigator.onLine:!0}function Dd(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){this.shortDelay=e,this.longDelay=n,ce(n>e,"Short delay should be less than long delay!"),this.isMobile=ol()||dl()}get(){return Od()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t,e){ce(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;te("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;te("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;te("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=new ft(3e4,6e4);function le(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function de(t,e,n,i,r={}){return oa(t,r,async()=>{let a={},o={};i&&(e==="GET"?o=i:a={body:JSON.stringify(i)});const l=ht(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:c},a);return cl()||(d.referrerPolicy="no-referrer"),sa.fetch()(ca(t,t.config.apiHost,n,l),d)})}async function oa(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Rd),e);try{const r=new Fd(t),a=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw St(t,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const l=a.ok?o.errorMessage:o.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw St(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw St(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw St(t,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ti(t,u,d);G(t,u)}}catch(r){if(r instanceof we)throw r;G(t,"network-request-failed",{message:String(r)})}}async function gt(t,e,n,i,r={}){const a=await de(t,e,n,i,r);return"mfaPendingCredential"in a&&G(t,"multi-factor-auth-required",{_serverResponse:a}),a}function ca(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?ii(t.config,r):`${t.config.apiScheme}://${r}`}function Ld(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Fd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Y(this.auth,"network-request-failed")),Md.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function St(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Y(t,e,i);return r.customData._tokenResponse=n,r}function Gi(t){return t!==void 0&&t.enterprise!==void 0}class Ud{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ld(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function zd(t,e){return de(t,"GET","/v2/recaptchaConfig",le(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $d(t,e){return de(t,"POST","/v1/accounts:delete",e)}async function la(t,e){return de(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bd(t,e=!1){const n=Q(t),i=await n.getIdToken(e),r=ri(i);x(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const a=typeof r.firebase=="object"?r.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:r,token:i,authTime:nt(_n(r.auth_time)),issuedAtTime:nt(_n(r.iat)),expirationTime:nt(_n(r.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function _n(t){return Number(t)*1e3}function ri(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Ot("JWT malformed, contained fewer than 3 sections"),null;try{const r=Kr(n);return r?JSON.parse(r):(Ot("Failed to decode base64 JWT payload"),null)}catch(r){return Ot("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ki(t){const e=ri(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof we&&Wd(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Wd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=nt(this.lastLoginAt),this.creationTime=nt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ht(t){var e;const n=t.auth,i=await t.getIdToken(),r=await ot(t,la(n,{idToken:i}));x(r==null?void 0:r.users.length,n,"internal-error");const a=r.users[0];t._notifyReloadListener(a);const o=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?da(a.providerUserInfo):[],l=Vd(t.providerData,o),c=t.isAnonymous,d=!(t.email&&a.passwordHash)&&!(l!=null&&l.length),u=c?d:!1,h={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Fn(a.createdAt,a.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function qd(t){const e=Q(t);await Ht(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vd(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function da(t){return t.map(e=>{var{providerId:n}=e,i=ei(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gd(t,e){const n=await oa(t,{},async()=>{const i=ht({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:a}=t.config,o=ca(t,r,"/v1/token",`key=${a}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",sa.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Kd(t,e){return de(t,"POST","/v2/accounts:revokeToken",le(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ki(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){x(e.length!==0,"internal-error");const n=Ki(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:a}=await Gd(e,n);this.updateTokensAndExpiration(i,r,Number(a))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:a}=n,o=new $e;return i&&(x(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(x(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),a&&(x(typeof a=="number","internal-error",{appName:e}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $e,this.toJSON())}_performRefresh(){return te("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ne{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,a=ei(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Fn(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await ot(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Bd(this,e)}reload(){return qd(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ht(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(K(this.auth.app))return Promise.reject(re(this.auth));const e=await this.getIdToken();return await ot(this,$d(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,a,o,l,c,d,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,y=(d=n.createdAt)!==null&&d!==void 0?d:void 0,j=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:A,isAnonymous:O,providerData:$,stsTokenManager:b}=n;x(k&&b,e,"internal-error");const L=$e.fromJSON(this.name,b);x(typeof k=="string",e,"internal-error"),pe(h,e.name),pe(f,e.name),x(typeof A=="boolean",e,"internal-error"),x(typeof O=="boolean",e,"internal-error"),pe(g,e.name),pe(w,e.name),pe(E,e.name),pe(R,e.name),pe(y,e.name),pe(j,e.name);const N=new ne({uid:k,auth:e,email:f,emailVerified:A,displayName:h,isAnonymous:O,photoURL:w,phoneNumber:g,tenantId:E,stsTokenManager:L,createdAt:y,lastLoginAt:j});return $&&Array.isArray($)&&(N.providerData=$.map(B=>Object.assign({},B))),R&&(N._redirectEventId=R),N}static async _fromIdTokenResponse(e,n,i=!1){const r=new $e;r.updateFromServerResponse(n);const a=new ne({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ht(a),a}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];x(r.localId!==void 0,"internal-error");const a=r.providerUserInfo!==void 0?da(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(a!=null&&a.length),l=new $e;l.updateFromIdToken(i);const c=new ne({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Fn(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(a!=null&&a.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new Map;function ie(t){ce(t instanceof Function,"Expected a class definition");let e=Yi.get(t);return e?(ce(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yi.set(t,e),e)}/**
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
 */class ua{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ua.type="NONE";const Ji=ua;/**
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
 */function Dt(t,e,n){return`firebase:${t}:${e}:${n}`}class Be{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:a}=this.auth;this.fullUserKey=Dt(this.userKey,r.apiKey,a),this.fullPersistenceKey=Dt("persistence",r.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ne._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Be(ie(Ji),e,i);const r=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let a=r[0]||ie(Ji);const o=Dt(i,e.config.apiKey,e.name);let l=null;for(const d of n)try{const u=await d._get(o);if(u){const h=ne._fromJSON(e,u);d!==a&&(l=h),a=d;break}}catch{}const c=r.filter(d=>d._shouldAllowMigration);return!a._shouldAllowMigration||!c.length?new Be(a,e,i):(a=c[0],l&&await a._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==a)try{await d._remove(o)}catch{}})),new Be(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(va(e))return"Blackberry";if(xa(e))return"Webos";if(ha(e))return"Safari";if((e.includes("chrome/")||ma(e))&&!e.includes("edge/"))return"Chrome";if(ga(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function pa(t=z()){return/firefox\//i.test(t)}function ha(t=z()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ma(t=z()){return/crios\//i.test(t)}function fa(t=z()){return/iemobile/i.test(t)}function ga(t=z()){return/android/i.test(t)}function va(t=z()){return/blackberry/i.test(t)}function xa(t=z()){return/webos/i.test(t)}function ai(t=z()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Yd(t=z()){var e;return ai(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jd(){return ul()&&document.documentMode===10}function ya(t=z()){return ai(t)||ga(t)||xa(t)||va(t)||/windows phone/i.test(t)||fa(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t,e=[]){let n;switch(t){case"Browser":n=Xi(z());break;case"Worker":n=`${Xi(z())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mt}/${i}`}/**
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
 */class Xd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=a=>new Promise((o,l)=>{try{const c=e(a);o(c)}catch(c){l(c)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Qd(t,e={}){return de(t,"GET","/v2/passwordPolicy",le(t,e))}/**
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
 */const Zd=6;class eu{constructor(e){var n,i,r,a;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Zd,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,a,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(a=c.containsUppercaseLetter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qi(this),this.idTokenSubscription=new Qi(this),this.beforeStateQueue=new Xd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aa,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ie(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Be.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await la(this,{idToken:e}),i=await ne._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(K(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,a=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ht(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(K(this.app))return Promise.reject(re(this));const n=e?Q(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return K(this.app)?Promise.reject(re(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return K(this.app)?Promise.reject(re(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ie(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Qd(this),n=new eu(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pt("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Kd(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ie(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Be.create(this,[ie(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(l,this,"internal-error"),l.then(()=>{o||a(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,i,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ba(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Nd(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _e(t){return Q(t)}class Qi{constructor(e){this.auth=e,this.observer=null,this.addObserver=xl(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nu(t){tn=t}function wa(t){return tn.loadJS(t)}function iu(){return tn.recaptchaEnterpriseScript}function ru(){return tn.gapiScript}function au(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const su="recaptcha-enterprise",ou="NO_RECAPTCHA";class cu{constructor(e){this.type=su,this.auth=_e(e)}async verify(e="verify",n=!1){async function i(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,l)=>{zd(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Ud(c);return a.tenantId==null?a._agentRecaptchaConfig=d:a._tenantRecaptchaConfigs[a.tenantId]=d,o(d.siteKey)}}).catch(c=>{l(c)})})}function r(a,o,l){const c=window.grecaptcha;Gi(c)?c.enterprise.ready(()=>{c.enterprise.execute(a,{action:e}).then(d=>{o(d)}).catch(()=>{o(ou)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,o)=>{i(this.auth).then(l=>{if(!n&&Gi(window.grecaptcha))r(l,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=iu();c.length!==0&&(c+=l),wa(c).then(()=>{r(l,a,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Zi(t,e,n,i=!1){const r=new cu(t);let a;try{a=await r.verify(n)}catch{a=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Un(t,e,n,i){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Zi(t,e,n,n==="getOobCode");return i(t,a)}else return i(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Zi(t,e,n,n==="getOobCode");return i(t,o)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t,e){const n=ea(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),a=n.getOptions();if($t(a,e??{}))return r;G(r,"already-initialized")}return n.initialize({options:e})}function du(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ie);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function uu(t,e,n){const i=_e(t);x(i._canInitEmulator,i,"emulator-config-failed"),x(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,a=_a(e),{host:o,port:l}=pu(e),c=l===null?"":`:${l}`;i.config.emulator={url:`${a}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:l,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:r})}),hu()}function _a(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pu(t){const e=_a(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const a=r[1];return{host:a,port:er(i.substr(a.length+1))}}else{const[a,o]=i.split(":");return{host:a,port:er(o)}}}function er(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hu(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return te("not implemented")}_getIdTokenResponse(e){return te("not implemented")}_linkToIdToken(e,n){return te("not implemented")}_getReauthenticationResolver(e){return te("not implemented")}}async function mu(t,e){return de(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fu(t,e){return gt(t,"POST","/v1/accounts:signInWithPassword",le(t,e))}async function gu(t,e){return de(t,"POST","/v1/accounts:sendOobCode",le(t,e))}async function vu(t,e){return gu(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xu(t,e){return gt(t,"POST","/v1/accounts:signInWithEmailLink",le(t,e))}async function yu(t,e){return gt(t,"POST","/v1/accounts:signInWithEmailLink",le(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends si{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ct(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new ct(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Un(e,n,"signInWithPassword",fu);case"emailLink":return xu(e,{email:this._email,oobCode:this._password});default:G(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Un(e,i,"signUpPassword",mu);case"emailLink":return yu(e,{idToken:n,email:this._email,oobCode:this._password});default:G(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(t,e){return gt(t,"POST","/v1/accounts:signInWithIdp",le(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="http://localhost";class Pe extends si{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):G("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,a=ei(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Pe(i,r);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return We(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,We(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,We(e,n)}buildRequest(){const e={requestUri:bu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ht(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _u(t){const e=Ze(et(t)).link,n=e?Ze(et(e)).deep_link_id:null,i=Ze(et(t)).deep_link_id;return(i?Ze(et(i)).link:null)||i||n||e||t}class oi{constructor(e){var n,i,r,a,o,l;const c=Ze(et(e)),d=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(i=c.oobCode)!==null&&i!==void 0?i:null,h=wu((r=c.mode)!==null&&r!==void 0?r:null);x(d&&u&&h,"argument-error"),this.apiKey=d,this.operation=h,this.code=u,this.continueUrl=(a=c.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=_u(e);try{return new oi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(){this.providerId=Ve.PROVIDER_ID}static credential(e,n){return ct._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=oi.parseLink(n);return x(i,"argument-error"),ct._fromEmailAndCode(e,i.code,i.tenantId)}}Ve.PROVIDER_ID="password";Ve.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ve.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vt extends ci{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends vt{constructor(){super("facebook.com")}static credential(e){return Pe._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return me.credentialFromTaggedObject(e)}static credentialFromError(e){return me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return me.credential(e.oauthAccessToken)}catch{return null}}}me.FACEBOOK_SIGN_IN_METHOD="facebook.com";me.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee extends vt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pe._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ee.credentialFromTaggedObject(e)}static credentialFromError(e){return ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return ee.credential(n,i)}catch{return null}}}ee.GOOGLE_SIGN_IN_METHOD="google.com";ee.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends vt{constructor(){super("github.com")}static credential(e){return Pe._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fe.credentialFromTaggedObject(e)}static credentialFromError(e){return fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fe.credential(e.oauthAccessToken)}catch{return null}}}fe.GITHUB_SIGN_IN_METHOD="github.com";fe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge extends vt{constructor(){super("twitter.com")}static credential(e,n){return Pe._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ge.credentialFromTaggedObject(e)}static credentialFromError(e){return ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ge.credential(n,i)}catch{return null}}}ge.TWITTER_SIGN_IN_METHOD="twitter.com";ge.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ku(t,e){return gt(t,"POST","/v1/accounts:signUp",le(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const a=await ne._fromIdTokenResponse(e,i,r),o=tr(i);return new Ne({user:a,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=tr(i);return new Ne({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function tr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends we{constructor(e,n,i,r){var a;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,qt.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new qt(e,n,i,r)}}function ka(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?qt._fromErrorAndOperation(t,a,e,i):a})}async function Eu(t,e,n=!1){const i=await ot(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ne._forOperation(t,"link",i)}/**
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
 */async function Iu(t,e,n=!1){const{auth:i}=t;if(K(i.app))return Promise.reject(re(i));const r="reauthenticate";try{const a=await ot(t,ka(i,r,e,t),n);x(a.idToken,i,"internal-error");const o=ri(a.idToken);x(o,i,"internal-error");const{sub:l}=o;return x(t.uid===l,i,"user-mismatch"),Ne._forOperation(t,r,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&G(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ea(t,e,n=!1){if(K(t.app))return Promise.reject(re(t));const i="signIn",r=await ka(t,i,e),a=await Ne._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(a.user),a}async function Su(t,e){return Ea(_e(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t){const e=_e(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Tu(t,e,n){if(K(t.app))return Promise.reject(re(t));const i=_e(t),o=await Un(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ku).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Ia(t),c}),l=await Ne._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(l.user),l}function ju(t,e,n){return K(t.app)?Promise.reject(re(t)):Su(Q(t),Ve.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Ia(t),i})}async function Pu(t,e){const n=Q(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:a}=await vu(n.auth,r);a!==t.email&&await t.reload()}function Nu(t,e,n,i){return Q(t).onIdTokenChanged(e,n,i)}function Au(t,e,n){return Q(t).beforeAuthStateChanged(e,n)}function Cu(t,e,n,i){return Q(t).onAuthStateChanged(e,n,i)}function Ou(t){return Q(t).signOut()}const Vt="__sak";/**
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
 */class Sa{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vt,"1"),this.storage.removeItem(Vt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=1e3,Ru=10;class Ta extends Sa{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ya(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},a=this.storage.getItem(i);Jd()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ru):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Du)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ta.type="LOCAL";const Mu=Ta;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja extends Sa{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ja.type="SESSION";const Pa=ja;/**
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
 */function Lu(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class nn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new nn(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:a}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const l=Array.from(o).map(async d=>d(n.origin,a)),c=await Lu(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Fu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let a,o;return new Promise((l,c)=>{const d=li("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===d)switch(f.data.status){case"ack":clearTimeout(u),a=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),l(f.data.response);break;default:clearTimeout(u),clearTimeout(a),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(){return window}function Uu(t){X().location.href=t}/**
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
 */function Na(){return typeof X().WorkerGlobalScope<"u"&&typeof X().importScripts=="function"}async function zu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $u(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Bu(){return Na()?self:null}/**
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
 */const Aa="firebaseLocalStorageDb",Wu=1,Gt="firebaseLocalStorage",Ca="fbase_key";class xt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rn(t,e){return t.transaction([Gt],e?"readwrite":"readonly").objectStore(Gt)}function Hu(){const t=indexedDB.deleteDatabase(Aa);return new xt(t).toPromise()}function zn(){const t=indexedDB.open(Aa,Wu);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Gt,{keyPath:Ca})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Gt)?e(i):(i.close(),await Hu(),e(await zn()))})})}async function nr(t,e,n){const i=rn(t,!0).put({[Ca]:e,value:n});return new xt(i).toPromise()}async function qu(t,e){const n=rn(t,!1).get(e),i=await new xt(n).toPromise();return i===void 0?null:i.value}function ir(t,e){const n=rn(t,!0).delete(e);return new xt(n).toPromise()}const Vu=800,Gu=3;class Oa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Gu)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Na()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nn._getInstance(Bu()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zu(),!this.activeServiceWorker)return;this.sender=new Fu(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$u()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zn();return await nr(e,Vt,"1"),await ir(e,Vt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>nr(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>qu(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ir(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const a=rn(r,!1).getAll();return new xt(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:a}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(a)&&(this.notifyListeners(r,a),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Oa.type="LOCAL";const Ku=Oa;new ft(3e4,6e4);/**
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
 */function Da(t,e){return e?ie(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class di extends si{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return We(e,this._buildIdpRequest())}_linkToIdToken(e,n){return We(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return We(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yu(t){return Ea(t.auth,new di(t),t.bypassAuthState)}function Ju(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Iu(n,new di(t),t.bypassAuthState)}async function Xu(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Eu(n,new di(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n,i,r,a=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:a,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:a||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yu;case"linkViaPopup":case"linkViaRedirect":return Xu;case"reauthViaPopup":case"reauthViaRedirect":return Ju;default:G(this.auth,"internal-error")}}resolve(e){ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=new ft(2e3,1e4);async function Zu(t,e,n){if(K(t.app))return Promise.reject(Y(t,"operation-not-supported-in-this-environment"));const i=_e(t);Ad(t,e,ci);const r=Da(i,n);return new je(i,"signInViaPopup",e,r).executeNotNull()}class je extends Ra{constructor(e,n,i,r,a){super(e,n,r,a),this.provider=i,this.authWindow=null,this.pollId=null,je.currentPopupAction&&je.currentPopupAction.cancel(),je.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){ce(this.filter.length===1,"Popup operations only handle one event");const e=li();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,je.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Y(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qu.get())};e()}}je.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="pendingRedirect",Rt=new Map;class tp extends Ra{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Rt.get(this.auth._key());if(!e){try{const i=await np(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Rt.set(this.auth._key(),e)}return this.bypassAuthState||Rt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function np(t,e){const n=ap(e),i=rp(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function ip(t,e){Rt.set(t._key(),e)}function rp(t){return ie(t._redirectPersistence)}function ap(t){return Dt(ep,t.config.apiKey,t.name)}async function sp(t,e,n=!1){if(K(t.app))return Promise.reject(re(t));const i=_e(t),r=Da(i,e),o=await new tp(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=10*60*1e3;class cp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Ma(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Y(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=op&&this.cachedEventUids.clear(),this.cachedEventUids.has(rr(e))}saveEventToCache(e){this.cachedEventUids.add(rr(e)),this.lastProcessedEventTime=Date.now()}}function rr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ma({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ma(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dp(t,e={}){return de(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pp=/^https?/;async function hp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dp(t);for(const n of e)try{if(mp(n))return}catch{}G(t,"unauthorized-domain")}function mp(t){const e=Ln(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!pp.test(n))return!1;if(up.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const fp=new ft(3e4,6e4);function ar(){const t=X().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gp(t){return new Promise((e,n)=>{var i,r,a;function o(){ar(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ar(),n(Y(t,"network-request-failed"))},timeout:fp.get()})}if(!((r=(i=X().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((a=X().gapi)===null||a===void 0)&&a.load)o();else{const l=au("iframefcb");return X()[l]=()=>{gapi.load?o():n(Y(t,"network-request-failed"))},wa(`${ru()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Mt=null,e})}let Mt=null;function vp(t){return Mt=Mt||gp(t),Mt}/**
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
 */const xp=new ft(5e3,15e3),yp="__/auth/iframe",bp="emulator/auth/iframe",wp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_p=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kp(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ii(e,bp):`https://${t.config.authDomain}/${yp}`,i={apiKey:e.apiKey,appName:t.name,v:mt},r=_p.get(t.config.apiHost);r&&(i.eid=r);const a=t._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${ht(i).slice(1)}`}async function Ep(t){const e=await vp(t),n=X().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:kp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wp,dontclear:!0},i=>new Promise(async(r,a)=>{await i.restyle({setHideOnLeave:!1});const o=Y(t,"network-request-failed"),l=X().setTimeout(()=>{a(o)},xp.get());function c(){X().clearTimeout(l),r(i)}i.ping(c).then(c,()=>{a(o)})}))}/**
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
 */const Ip={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sp=500,Tp=600,jp="_blank",Pp="http://localhost";class sr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Np(t,e,n,i=Sp,r=Tp){const a=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Ip),{width:i.toString(),height:r.toString(),top:a,left:o}),d=z().toLowerCase();n&&(l=ma(d)?jp:n),pa(d)&&(e=e||Pp,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,w])=>`${f}${g}=${w},`,"");if(Yd(d)&&l!=="_self")return Ap(e||"",l),new sr(null);const h=window.open(e||"",l,u);x(h,t,"popup-blocked");try{h.focus()}catch{}return new sr(h)}function Ap(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const Cp="__/auth/handler",Op="emulator/auth/handler",Dp=encodeURIComponent("fac");async function or(t,e,n,i,r,a){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:mt,eventId:r};if(e instanceof ci){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof vt){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const u of Object.keys(l))l[u]===void 0&&delete l[u];const c=await t._getAppCheckToken(),d=c?`#${Dp}=${encodeURIComponent(c)}`:"";return`${Rp(t)}?${ht(l).slice(1)}${d}`}function Rp({config:t}){return t.emulator?ii(t,Op):`https://${t.authDomain}/${Cp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="webStorageSupport";class Mp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pa,this._completeRedirectFn=sp,this._overrideRedirectResult=ip}async _openPopup(e,n,i,r){var a;ce((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await or(e,n,i,Ln(),r);return Np(e,o,li())}async _openRedirect(e,n,i,r){await this._originValidation(e);const a=await or(e,n,i,Ln(),r);return Uu(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:a}=this.eventManagers[n];return r?Promise.resolve(r):(ce(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Ep(e),i=new cp(e);return n.register("authEvent",r=>(x(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kn,{type:kn},r=>{var a;const o=(a=r==null?void 0:r[0])===null||a===void 0?void 0:a[kn];o!==void 0&&n(!!o),G(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ya()||ha()||ai()}}const Lp=Mp;var cr="@firebase/auth",lr="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zp(t){at(new He("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ba(t)},d=new tu(i,r,a,c);return du(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),at(new He("auth-internal",e=>{const n=_e(e.getProvider("auth").getImmediate());return(i=>new Fp(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(cr,lr,Up(t)),ze(cr,lr,"esm2017")}/**
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
 */const $p=5*60,Bp=Jr("authIdTokenMaxAge")||$p;let dr=null;const Wp=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Bp)return;const r=n==null?void 0:n.token;dr!==r&&(dr=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Hp(t=yd()){const e=ea(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lu(t,{popupRedirectResolver:Lp,persistence:[Ku,Mu,Pa]}),i=Jr("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const o=Wp(a.toString());Au(n,o,()=>o(n.currentUser)),Nu(n,l=>o(l))}}const r=al("auth");return r&&uu(n,`http://${r}`),n}function qp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}nu({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const a=Y("internal-error");a.customData=r,n(a)},i.type="text/javascript",i.charset="UTF-8",qp().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zp("Browser");var Vp="firebase",Gp="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze(Vp,Gp,"app");const Kp={apiKey:"AIzaSyDsm9eLK60DgbIPTIXGWzvBRGbvBPUZsJg",authDomain:"mighty-pinner.firebaseapp.com",projectId:"mighty-pinner",storageBucket:"mighty-pinner.firebasestorage.app",messagingSenderId:"475747703677",appId:"1:475747703677:web:7f0f9bf347a75eda1c0a14"},Yp=ta(Kp),Qe=Hp(Yp);function Ge(){const[t,e]=p.useState(null),[n,i]=p.useState(!0);return p.useEffect(()=>{const c=Cu(Qe,d=>{e(d),i(!1)});return()=>c()},[]),{user:t,loading:n,signUp:async(c,d)=>{try{i(!0);const u=await Tu(Qe,c,d);return await Pu(u.user),_.success("Account created! Please check your email for verification."),u.user}catch(u){console.error("Sign up error:",u);const h=u.code==="auth/email-already-in-use"?"Email already in use. Please sign in instead.":u.message||"Failed to create account";throw _.error(h),u}finally{i(!1)}},signIn:async(c,d)=>{try{i(!0);const u=await ju(Qe,c,d);return _.success("Successfully signed in!"),u.user}catch(u){console.error("Sign in error:",u);const h=u.code==="auth/invalid-credential"?"Invalid email or password":u.message||"Failed to sign in";throw _.error(h),u}finally{i(!1)}},signInWithGoogle:async()=>{try{i(!0);const c=new ee,d=await Zu(Qe,c);return _.success("Successfully signed in with Google!"),d.user}catch(c){console.error("Google sign in error:",c);const d=c.code==="auth/popup-closed-by-user"?"Sign in cancelled":c.message||"Failed to sign in with Google";throw _.error(d),c}finally{i(!1)}},logOut:async()=>{try{await Ou(Qe),_.success("Successfully logged out")}catch(c){throw console.error("Logout error:",c),_.error(c.message||"Failed to log out"),c}}}}function Jp(){const t=kr(),{user:e}=Ge();p.useEffect(()=>{e&&t("/dashboard")},[e,t]);const n=()=>{t("/auth",{state:{signup:!0}})};return s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-red-50 to-pink-50",children:[s.jsx("nav",{className:"bg-white shadow-sm",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"flex justify-between h-16 items-center",children:[s.jsxs("div",{className:"flex items-center",children:[s.jsx(Jn,{className:"h-8 w-8 text-red-500"}),s.jsx("span",{className:"ml-2 text-xl font-semibold",children:"PinMaster"})]}),s.jsxs("div",{className:"flex items-center space-x-4",children:[s.jsx(Sn,{to:"/auth",className:"text-gray-700 hover:text-red-600 font-medium",children:"Sign in"}),s.jsx("button",{onClick:n,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700",children:"Sign up"})]})]})})}),s.jsx("main",{children:s.jsxs("div",{className:"max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8",children:[s.jsxs("div",{className:"text-center",children:[s.jsxs("h1",{className:"text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl",children:[s.jsx("span",{className:"block",children:"Transform Your Pinterest Marketing"}),s.jsx("span",{className:"block text-red-600",children:"with AI-Powered Automation"})]}),s.jsx("p",{className:"mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl",children:"Elevate your Pinterest presence with intelligent scheduling and data-driven content management. Our platform helps you reach your ideal audience at the perfect time, every time."}),s.jsxs("div",{className:"mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8",children:[s.jsx("div",{className:"rounded-md shadow",children:s.jsx("button",{onClick:n,className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10",children:"Sign up"})}),s.jsx("div",{className:"mt-3 sm:mt-0 sm:ml-3",children:s.jsx(Sn,{to:"/auth",className:"w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10",children:"Sign in"})})]})]}),s.jsx("div",{className:"mt-20",children:s.jsxs("div",{className:"grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",children:[s.jsx("div",{className:"pt-6",children:s.jsx("div",{className:"flow-root bg-white rounded-lg px-6 pb-8",children:s.jsxs("div",{className:"-mt-6",children:[s.jsx("div",{children:s.jsx("span",{className:"inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg",children:s.jsx(Lc,{className:"h-6 w-6 text-white"})})}),s.jsx("h3",{className:"mt-8 text-lg font-medium text-gray-900 tracking-tight",children:"AI-Powered Scheduling"}),s.jsx("p",{className:"mt-5 text-base text-gray-500",children:"Our smart algorithm analyzes your audience's behavior to determine the perfect posting times for maximum engagement."})]})})}),s.jsx("div",{className:"pt-6",children:s.jsx("div",{className:"flow-root bg-white rounded-lg px-6 pb-8",children:s.jsxs("div",{className:"-mt-6",children:[s.jsx("div",{children:s.jsx("span",{className:"inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg",children:s.jsx(Yc,{className:"h-6 w-6 text-white"})})}),s.jsx("h3",{className:"mt-8 text-lg font-medium text-gray-900 tracking-tight",children:"Strategic Content Planning"}),s.jsx("p",{className:"mt-5 text-base text-gray-500",children:"Plan and schedule your content strategically with our intuitive bulk upload and management tools."})]})})}),s.jsx("div",{className:"pt-6",children:s.jsx("div",{className:"flow-root bg-white rounded-lg px-6 pb-8",children:s.jsxs("div",{className:"-mt-6",children:[s.jsx("div",{children:s.jsx("span",{className:"inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg",children:s.jsx(Xc,{className:"h-6 w-6 text-white"})})}),s.jsx("h3",{className:"mt-8 text-lg font-medium text-gray-900 tracking-tight",children:"Automated Publishing"}),s.jsx("p",{className:"mt-5 text-base text-gray-500",children:"Set it and forget it with our reliable automated publishing system. Never miss a prime posting opportunity."})]})})})]})})]})}),s.jsx("footer",{className:"bg-white",children:s.jsxs("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8",children:[s.jsxs("div",{className:"flex justify-center space-x-6 md:order-2",children:[s.jsx("a",{href:"#",className:"text-gray-400 hover:text-gray-500",children:"Terms"}),s.jsx("a",{href:"#",className:"text-gray-400 hover:text-gray-500",children:"Privacy"}),s.jsx("a",{href:"#",className:"text-gray-400 hover:text-gray-500",children:"Contact"})]}),s.jsx("div",{className:"mt-8 md:mt-0 md:order-1",children:s.jsx("p",{className:"text-center text-base text-gray-400",children:"© 2024 PinMaster. All rights reserved."})})]})})]})}function Xp(){var E,R;const t=Er(),[e,n]=p.useState(((E=t.state)==null?void 0:E.signup)||!1),[i,r]=p.useState(""),[a,o]=p.useState(""),[l,c]=p.useState(!1),{signUp:d,signIn:u,signInWithGoogle:h}=Ge(),f=kr();p.useEffect(()=>{var y;n(((y=t.state)==null?void 0:y.signup)||!1)},[(R=t.state)==null?void 0:R.signup]);const g=async y=>{y.preventDefault(),c(!0);try{e?(await d(i,a),f("/dashboard")):(await u(i,a),f("/dashboard"))}catch(j){console.error("Authentication error:",j),_.error("Authentication failed. Please try again.")}finally{c(!1)}},w=async()=>{try{c(!0),await h(),f("/dashboard")}catch(y){console.error("Google sign in error:",y),_.error("Google sign in failed. Please try again.")}finally{c(!1)}};return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg",children:[s.jsxs("div",{className:"text-center",children:[s.jsx(Jn,{className:"mx-auto h-12 w-12 text-red-500"}),s.jsx("h2",{className:"mt-6 text-3xl font-extrabold text-gray-900",children:e?"Create your account":"Sign in to your account"}),s.jsx("p",{className:"mt-2 text-sm text-gray-600",children:e?"Start managing your Pinterest content":"Welcome back to PinMaster"})]}),s.jsxs("form",{className:"mt-8 space-y-6",onSubmit:g,children:[s.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:s.jsx(Hc,{className:"h-5 w-5 text-gray-400"})}),s.jsx("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,value:i,onChange:y=>r(y.target.value),className:"appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm",placeholder:"Email address"})]})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"password",className:"sr-only",children:"Password"}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:s.jsx(Bc,{className:"h-5 w-5 text-gray-400"})}),s.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,value:a,onChange:y=>o(y.target.value),className:"appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm",placeholder:"Password"})]})]})]}),s.jsx("div",{children:s.jsx("button",{type:"submit",disabled:l,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-red-400",children:l?"Processing...":e?"Sign up":"Sign in"})}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-0 flex items-center",children:s.jsx("div",{className:"w-full border-t border-gray-300"})}),s.jsx("div",{className:"relative flex justify-center text-sm",children:s.jsx("span",{className:"px-2 bg-white text-gray-500",children:"Or continue with"})})]}),s.jsx("div",{children:s.jsxs("button",{type:"button",onClick:w,disabled:l,className:"w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50",children:[s.jsxs("svg",{className:"h-5 w-5 mr-2",viewBox:"0 0 24 24",children:[s.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),s.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),s.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),s.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"}),s.jsx("path",{fill:"none",d:"M1 1h22v22H1z"})]}),"Continue with Google"]})})]}),s.jsx("div",{className:"text-center",children:s.jsx("button",{onClick:()=>{n(!e),f("/auth",{state:{signup:!e},replace:!0})},className:"text-sm text-red-600 hover:text-red-500",children:e?"Already have an account? Sign in":"Don't have an account? Sign up"})})]})})}function Qp(){const{user:t,logOut:e}=Ge(),n=async()=>{try{await e()}catch(i){console.error("Logout error:",i)}};return s.jsx("header",{className:"bg-white border-b border-gray-200",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"flex justify-between items-center h-16",children:[s.jsxs(Sn,{to:"/dashboard",className:"flex items-center space-x-3",children:[s.jsx(Jn,{className:"h-8 w-8 text-red-500"}),s.jsx("span",{className:"font-semibold text-xl",children:"Pinterest Manager"})]}),s.jsxs("div",{className:"flex items-center space-x-4",children:[s.jsxs("div",{className:"text-sm",children:[s.jsx("span",{className:"text-gray-500",children:"Signed in as "}),s.jsx("span",{className:"font-medium text-gray-900",children:t==null?void 0:t.email})]}),s.jsx("button",{onClick:n,className:"p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100",children:s.jsx(Wc,{className:"h-5 w-5"})})]})]})})})}const Zp=[{name:"Accounts",href:"/dashboard/accounts",icon:Jc},{name:"Schedule Pin",href:"/dashboard",icon:zc},{name:"Scheduled Pins",href:"/dashboard/scheduled",icon:rt},{name:"Settings",href:"/dashboard/settings",icon:Gc}];function eh(){return s.jsx("aside",{className:"w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-4rem)]",children:s.jsx("nav",{className:"p-4 space-y-1",children:Zp.map(t=>s.jsxs(ss,{to:t.href,className:({isActive:e})=>`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${e?"bg-red-50 text-red-600":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`,children:[s.jsx(t.icon,{className:"h-5 w-5 mr-3"}),t.name]},t.name))})})}function an({children:t}){const{user:e,loading:n}=Ge();return n?s.jsx("div",{className:"min-h-screen flex items-center justify-center",children:s.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"})}):e?s.jsxs("div",{className:"min-h-screen bg-gray-50",children:[s.jsx(Qp,{}),s.jsxs("div",{className:"flex",children:[s.jsx(eh,{}),s.jsx("main",{className:"flex-1 p-8",children:t})]})]}):s.jsx(Xt,{to:"/auth",replace:!0})}var La={exports:{}},th="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",nh=th,ih=nh;function Fa(){}function Ua(){}Ua.resetWarningCache=Fa;var rh=function(){function t(i,r,a,o,l,c){if(c!==ih){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ua,resetWarningCache:Fa};return n.PropTypes=n,n};La.exports=rh();var ah=La.exports;const S=os(ah),sh=new Map([["1km","application/vnd.1000minds.decision-model+xml"],["3dml","text/vnd.in3d.3dml"],["3ds","image/x-3ds"],["3g2","video/3gpp2"],["3gp","video/3gp"],["3gpp","video/3gpp"],["3mf","model/3mf"],["7z","application/x-7z-compressed"],["7zip","application/x-7z-compressed"],["123","application/vnd.lotus-1-2-3"],["aab","application/x-authorware-bin"],["aac","audio/x-acc"],["aam","application/x-authorware-map"],["aas","application/x-authorware-seg"],["abw","application/x-abiword"],["ac","application/vnd.nokia.n-gage.ac+xml"],["ac3","audio/ac3"],["acc","application/vnd.americandynamics.acc"],["ace","application/x-ace-compressed"],["acu","application/vnd.acucobol"],["acutc","application/vnd.acucorp"],["adp","audio/adpcm"],["aep","application/vnd.audiograph"],["afm","application/x-font-type1"],["afp","application/vnd.ibm.modcap"],["ahead","application/vnd.ahead.space"],["ai","application/pdf"],["aif","audio/x-aiff"],["aifc","audio/x-aiff"],["aiff","audio/x-aiff"],["air","application/vnd.adobe.air-application-installer-package+zip"],["ait","application/vnd.dvb.ait"],["ami","application/vnd.amiga.ami"],["amr","audio/amr"],["apk","application/vnd.android.package-archive"],["apng","image/apng"],["appcache","text/cache-manifest"],["application","application/x-ms-application"],["apr","application/vnd.lotus-approach"],["arc","application/x-freearc"],["arj","application/x-arj"],["asc","application/pgp-signature"],["asf","video/x-ms-asf"],["asm","text/x-asm"],["aso","application/vnd.accpac.simply.aso"],["asx","video/x-ms-asf"],["atc","application/vnd.acucorp"],["atom","application/atom+xml"],["atomcat","application/atomcat+xml"],["atomdeleted","application/atomdeleted+xml"],["atomsvc","application/atomsvc+xml"],["atx","application/vnd.antix.game-component"],["au","audio/x-au"],["avi","video/x-msvideo"],["avif","image/avif"],["aw","application/applixware"],["azf","application/vnd.airzip.filesecure.azf"],["azs","application/vnd.airzip.filesecure.azs"],["azv","image/vnd.airzip.accelerator.azv"],["azw","application/vnd.amazon.ebook"],["b16","image/vnd.pco.b16"],["bat","application/x-msdownload"],["bcpio","application/x-bcpio"],["bdf","application/x-font-bdf"],["bdm","application/vnd.syncml.dm+wbxml"],["bdoc","application/x-bdoc"],["bed","application/vnd.realvnc.bed"],["bh2","application/vnd.fujitsu.oasysprs"],["bin","application/octet-stream"],["blb","application/x-blorb"],["blorb","application/x-blorb"],["bmi","application/vnd.bmi"],["bmml","application/vnd.balsamiq.bmml+xml"],["bmp","image/bmp"],["book","application/vnd.framemaker"],["box","application/vnd.previewsystems.box"],["boz","application/x-bzip2"],["bpk","application/octet-stream"],["bpmn","application/octet-stream"],["bsp","model/vnd.valve.source.compiled-map"],["btif","image/prs.btif"],["buffer","application/octet-stream"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["c","text/x-c"],["c4d","application/vnd.clonk.c4group"],["c4f","application/vnd.clonk.c4group"],["c4g","application/vnd.clonk.c4group"],["c4p","application/vnd.clonk.c4group"],["c4u","application/vnd.clonk.c4group"],["c11amc","application/vnd.cluetrust.cartomobile-config"],["c11amz","application/vnd.cluetrust.cartomobile-config-pkg"],["cab","application/vnd.ms-cab-compressed"],["caf","audio/x-caf"],["cap","application/vnd.tcpdump.pcap"],["car","application/vnd.curl.car"],["cat","application/vnd.ms-pki.seccat"],["cb7","application/x-cbr"],["cba","application/x-cbr"],["cbr","application/x-cbr"],["cbt","application/x-cbr"],["cbz","application/x-cbr"],["cc","text/x-c"],["cco","application/x-cocoa"],["cct","application/x-director"],["ccxml","application/ccxml+xml"],["cdbcmsg","application/vnd.contact.cmsg"],["cda","application/x-cdf"],["cdf","application/x-netcdf"],["cdfx","application/cdfx+xml"],["cdkey","application/vnd.mediastation.cdkey"],["cdmia","application/cdmi-capability"],["cdmic","application/cdmi-container"],["cdmid","application/cdmi-domain"],["cdmio","application/cdmi-object"],["cdmiq","application/cdmi-queue"],["cdr","application/cdr"],["cdx","chemical/x-cdx"],["cdxml","application/vnd.chemdraw+xml"],["cdy","application/vnd.cinderella"],["cer","application/pkix-cert"],["cfs","application/x-cfs-compressed"],["cgm","image/cgm"],["chat","application/x-chat"],["chm","application/vnd.ms-htmlhelp"],["chrt","application/vnd.kde.kchart"],["cif","chemical/x-cif"],["cii","application/vnd.anser-web-certificate-issue-initiation"],["cil","application/vnd.ms-artgalry"],["cjs","application/node"],["cla","application/vnd.claymore"],["class","application/octet-stream"],["clkk","application/vnd.crick.clicker.keyboard"],["clkp","application/vnd.crick.clicker.palette"],["clkt","application/vnd.crick.clicker.template"],["clkw","application/vnd.crick.clicker.wordbank"],["clkx","application/vnd.crick.clicker"],["clp","application/x-msclip"],["cmc","application/vnd.cosmocaller"],["cmdf","chemical/x-cmdf"],["cml","chemical/x-cml"],["cmp","application/vnd.yellowriver-custom-menu"],["cmx","image/x-cmx"],["cod","application/vnd.rim.cod"],["coffee","text/coffeescript"],["com","application/x-msdownload"],["conf","text/plain"],["cpio","application/x-cpio"],["cpp","text/x-c"],["cpt","application/mac-compactpro"],["crd","application/x-mscardfile"],["crl","application/pkix-crl"],["crt","application/x-x509-ca-cert"],["crx","application/x-chrome-extension"],["cryptonote","application/vnd.rig.cryptonote"],["csh","application/x-csh"],["csl","application/vnd.citationstyles.style+xml"],["csml","chemical/x-csml"],["csp","application/vnd.commonspace"],["csr","application/octet-stream"],["css","text/css"],["cst","application/x-director"],["csv","text/csv"],["cu","application/cu-seeme"],["curl","text/vnd.curl"],["cww","application/prs.cww"],["cxt","application/x-director"],["cxx","text/x-c"],["dae","model/vnd.collada+xml"],["daf","application/vnd.mobius.daf"],["dart","application/vnd.dart"],["dataless","application/vnd.fdsn.seed"],["davmount","application/davmount+xml"],["dbf","application/vnd.dbf"],["dbk","application/docbook+xml"],["dcr","application/x-director"],["dcurl","text/vnd.curl.dcurl"],["dd2","application/vnd.oma.dd2+xml"],["ddd","application/vnd.fujixerox.ddd"],["ddf","application/vnd.syncml.dmddf+xml"],["dds","image/vnd.ms-dds"],["deb","application/x-debian-package"],["def","text/plain"],["deploy","application/octet-stream"],["der","application/x-x509-ca-cert"],["dfac","application/vnd.dreamfactory"],["dgc","application/x-dgc-compressed"],["dic","text/x-c"],["dir","application/x-director"],["dis","application/vnd.mobius.dis"],["disposition-notification","message/disposition-notification"],["dist","application/octet-stream"],["distz","application/octet-stream"],["djv","image/vnd.djvu"],["djvu","image/vnd.djvu"],["dll","application/octet-stream"],["dmg","application/x-apple-diskimage"],["dmn","application/octet-stream"],["dmp","application/vnd.tcpdump.pcap"],["dms","application/octet-stream"],["dna","application/vnd.dna"],["doc","application/msword"],["docm","application/vnd.ms-word.template.macroEnabled.12"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["dot","application/msword"],["dotm","application/vnd.ms-word.template.macroEnabled.12"],["dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"],["dp","application/vnd.osgi.dp"],["dpg","application/vnd.dpgraph"],["dra","audio/vnd.dra"],["drle","image/dicom-rle"],["dsc","text/prs.lines.tag"],["dssc","application/dssc+der"],["dtb","application/x-dtbook+xml"],["dtd","application/xml-dtd"],["dts","audio/vnd.dts"],["dtshd","audio/vnd.dts.hd"],["dump","application/octet-stream"],["dvb","video/vnd.dvb.file"],["dvi","application/x-dvi"],["dwd","application/atsc-dwd+xml"],["dwf","model/vnd.dwf"],["dwg","image/vnd.dwg"],["dxf","image/vnd.dxf"],["dxp","application/vnd.spotfire.dxp"],["dxr","application/x-director"],["ear","application/java-archive"],["ecelp4800","audio/vnd.nuera.ecelp4800"],["ecelp7470","audio/vnd.nuera.ecelp7470"],["ecelp9600","audio/vnd.nuera.ecelp9600"],["ecma","application/ecmascript"],["edm","application/vnd.novadigm.edm"],["edx","application/vnd.novadigm.edx"],["efif","application/vnd.picsel"],["ei6","application/vnd.pg.osasli"],["elc","application/octet-stream"],["emf","image/emf"],["eml","message/rfc822"],["emma","application/emma+xml"],["emotionml","application/emotionml+xml"],["emz","application/x-msmetafile"],["eol","audio/vnd.digital-winds"],["eot","application/vnd.ms-fontobject"],["eps","application/postscript"],["epub","application/epub+zip"],["es","application/ecmascript"],["es3","application/vnd.eszigno3+xml"],["esa","application/vnd.osgi.subsystem"],["esf","application/vnd.epson.esf"],["et3","application/vnd.eszigno3+xml"],["etx","text/x-setext"],["eva","application/x-eva"],["evy","application/x-envoy"],["exe","application/octet-stream"],["exi","application/exi"],["exp","application/express"],["exr","image/aces"],["ext","application/vnd.novadigm.ext"],["ez","application/andrew-inset"],["ez2","application/vnd.ezpix-album"],["ez3","application/vnd.ezpix-package"],["f","text/x-fortran"],["f4v","video/mp4"],["f77","text/x-fortran"],["f90","text/x-fortran"],["fbs","image/vnd.fastbidsheet"],["fcdt","application/vnd.adobe.formscentral.fcdt"],["fcs","application/vnd.isac.fcs"],["fdf","application/vnd.fdf"],["fdt","application/fdt+xml"],["fe_launch","application/vnd.denovo.fcselayout-link"],["fg5","application/vnd.fujitsu.oasysgp"],["fgd","application/x-director"],["fh","image/x-freehand"],["fh4","image/x-freehand"],["fh5","image/x-freehand"],["fh7","image/x-freehand"],["fhc","image/x-freehand"],["fig","application/x-xfig"],["fits","image/fits"],["flac","audio/x-flac"],["fli","video/x-fli"],["flo","application/vnd.micrografx.flo"],["flv","video/x-flv"],["flw","application/vnd.kde.kivio"],["flx","text/vnd.fmi.flexstor"],["fly","text/vnd.fly"],["fm","application/vnd.framemaker"],["fnc","application/vnd.frogans.fnc"],["fo","application/vnd.software602.filler.form+xml"],["for","text/x-fortran"],["fpx","image/vnd.fpx"],["frame","application/vnd.framemaker"],["fsc","application/vnd.fsc.weblaunch"],["fst","image/vnd.fst"],["ftc","application/vnd.fluxtime.clip"],["fti","application/vnd.anser-web-funds-transfer-initiation"],["fvt","video/vnd.fvt"],["fxp","application/vnd.adobe.fxp"],["fxpl","application/vnd.adobe.fxp"],["fzs","application/vnd.fuzzysheet"],["g2w","application/vnd.geoplan"],["g3","image/g3fax"],["g3w","application/vnd.geospace"],["gac","application/vnd.groove-account"],["gam","application/x-tads"],["gbr","application/rpki-ghostbusters"],["gca","application/x-gca-compressed"],["gdl","model/vnd.gdl"],["gdoc","application/vnd.google-apps.document"],["geo","application/vnd.dynageo"],["geojson","application/geo+json"],["gex","application/vnd.geometry-explorer"],["ggb","application/vnd.geogebra.file"],["ggt","application/vnd.geogebra.tool"],["ghf","application/vnd.groove-help"],["gif","image/gif"],["gim","application/vnd.groove-identity-message"],["glb","model/gltf-binary"],["gltf","model/gltf+json"],["gml","application/gml+xml"],["gmx","application/vnd.gmx"],["gnumeric","application/x-gnumeric"],["gpg","application/gpg-keys"],["gph","application/vnd.flographit"],["gpx","application/gpx+xml"],["gqf","application/vnd.grafeq"],["gqs","application/vnd.grafeq"],["gram","application/srgs"],["gramps","application/x-gramps-xml"],["gre","application/vnd.geometry-explorer"],["grv","application/vnd.groove-injector"],["grxml","application/srgs+xml"],["gsf","application/x-font-ghostscript"],["gsheet","application/vnd.google-apps.spreadsheet"],["gslides","application/vnd.google-apps.presentation"],["gtar","application/x-gtar"],["gtm","application/vnd.groove-tool-message"],["gtw","model/vnd.gtw"],["gv","text/vnd.graphviz"],["gxf","application/gxf"],["gxt","application/vnd.geonext"],["gz","application/gzip"],["gzip","application/gzip"],["h","text/x-c"],["h261","video/h261"],["h263","video/h263"],["h264","video/h264"],["hal","application/vnd.hal+xml"],["hbci","application/vnd.hbci"],["hbs","text/x-handlebars-template"],["hdd","application/x-virtualbox-hdd"],["hdf","application/x-hdf"],["heic","image/heic"],["heics","image/heic-sequence"],["heif","image/heif"],["heifs","image/heif-sequence"],["hej2","image/hej2k"],["held","application/atsc-held+xml"],["hh","text/x-c"],["hjson","application/hjson"],["hlp","application/winhlp"],["hpgl","application/vnd.hp-hpgl"],["hpid","application/vnd.hp-hpid"],["hps","application/vnd.hp-hps"],["hqx","application/mac-binhex40"],["hsj2","image/hsj2"],["htc","text/x-component"],["htke","application/vnd.kenameaapp"],["htm","text/html"],["html","text/html"],["hvd","application/vnd.yamaha.hv-dic"],["hvp","application/vnd.yamaha.hv-voice"],["hvs","application/vnd.yamaha.hv-script"],["i2g","application/vnd.intergeo"],["icc","application/vnd.iccprofile"],["ice","x-conference/x-cooltalk"],["icm","application/vnd.iccprofile"],["ico","image/x-icon"],["ics","text/calendar"],["ief","image/ief"],["ifb","text/calendar"],["ifm","application/vnd.shana.informed.formdata"],["iges","model/iges"],["igl","application/vnd.igloader"],["igm","application/vnd.insors.igm"],["igs","model/iges"],["igx","application/vnd.micrografx.igx"],["iif","application/vnd.shana.informed.interchange"],["img","application/octet-stream"],["imp","application/vnd.accpac.simply.imp"],["ims","application/vnd.ms-ims"],["in","text/plain"],["ini","text/plain"],["ink","application/inkml+xml"],["inkml","application/inkml+xml"],["install","application/x-install-instructions"],["iota","application/vnd.astraea-software.iota"],["ipfix","application/ipfix"],["ipk","application/vnd.shana.informed.package"],["irm","application/vnd.ibm.rights-management"],["irp","application/vnd.irepository.package+xml"],["iso","application/x-iso9660-image"],["itp","application/vnd.shana.informed.formtemplate"],["its","application/its+xml"],["ivp","application/vnd.immervision-ivp"],["ivu","application/vnd.immervision-ivu"],["jad","text/vnd.sun.j2me.app-descriptor"],["jade","text/jade"],["jam","application/vnd.jam"],["jar","application/java-archive"],["jardiff","application/x-java-archive-diff"],["java","text/x-java-source"],["jhc","image/jphc"],["jisp","application/vnd.jisp"],["jls","image/jls"],["jlt","application/vnd.hp-jlyt"],["jng","image/x-jng"],["jnlp","application/x-java-jnlp-file"],["joda","application/vnd.joost.joda-archive"],["jp2","image/jp2"],["jpe","image/jpeg"],["jpeg","image/jpeg"],["jpf","image/jpx"],["jpg","image/jpeg"],["jpg2","image/jp2"],["jpgm","video/jpm"],["jpgv","video/jpeg"],["jph","image/jph"],["jpm","video/jpm"],["jpx","image/jpx"],["js","application/javascript"],["json","application/json"],["json5","application/json5"],["jsonld","application/ld+json"],["jsonl","application/jsonl"],["jsonml","application/jsonml+json"],["jsx","text/jsx"],["jxr","image/jxr"],["jxra","image/jxra"],["jxrs","image/jxrs"],["jxs","image/jxs"],["jxsc","image/jxsc"],["jxsi","image/jxsi"],["jxss","image/jxss"],["kar","audio/midi"],["karbon","application/vnd.kde.karbon"],["kdb","application/octet-stream"],["kdbx","application/x-keepass2"],["key","application/x-iwork-keynote-sffkey"],["kfo","application/vnd.kde.kformula"],["kia","application/vnd.kidspiration"],["kml","application/vnd.google-earth.kml+xml"],["kmz","application/vnd.google-earth.kmz"],["kne","application/vnd.kinar"],["knp","application/vnd.kinar"],["kon","application/vnd.kde.kontour"],["kpr","application/vnd.kde.kpresenter"],["kpt","application/vnd.kde.kpresenter"],["kpxx","application/vnd.ds-keypoint"],["ksp","application/vnd.kde.kspread"],["ktr","application/vnd.kahootz"],["ktx","image/ktx"],["ktx2","image/ktx2"],["ktz","application/vnd.kahootz"],["kwd","application/vnd.kde.kword"],["kwt","application/vnd.kde.kword"],["lasxml","application/vnd.las.las+xml"],["latex","application/x-latex"],["lbd","application/vnd.llamagraphics.life-balance.desktop"],["lbe","application/vnd.llamagraphics.life-balance.exchange+xml"],["les","application/vnd.hhe.lesson-player"],["less","text/less"],["lgr","application/lgr+xml"],["lha","application/octet-stream"],["link66","application/vnd.route66.link66+xml"],["list","text/plain"],["list3820","application/vnd.ibm.modcap"],["listafp","application/vnd.ibm.modcap"],["litcoffee","text/coffeescript"],["lnk","application/x-ms-shortcut"],["log","text/plain"],["lostxml","application/lost+xml"],["lrf","application/octet-stream"],["lrm","application/vnd.ms-lrm"],["ltf","application/vnd.frogans.ltf"],["lua","text/x-lua"],["luac","application/x-lua-bytecode"],["lvp","audio/vnd.lucent.voice"],["lwp","application/vnd.lotus-wordpro"],["lzh","application/octet-stream"],["m1v","video/mpeg"],["m2a","audio/mpeg"],["m2v","video/mpeg"],["m3a","audio/mpeg"],["m3u","text/plain"],["m3u8","application/vnd.apple.mpegurl"],["m4a","audio/x-m4a"],["m4p","application/mp4"],["m4s","video/iso.segment"],["m4u","application/vnd.mpegurl"],["m4v","video/x-m4v"],["m13","application/x-msmediaview"],["m14","application/x-msmediaview"],["m21","application/mp21"],["ma","application/mathematica"],["mads","application/mads+xml"],["maei","application/mmt-aei+xml"],["mag","application/vnd.ecowin.chart"],["maker","application/vnd.framemaker"],["man","text/troff"],["manifest","text/cache-manifest"],["map","application/json"],["mar","application/octet-stream"],["markdown","text/markdown"],["mathml","application/mathml+xml"],["mb","application/mathematica"],["mbk","application/vnd.mobius.mbk"],["mbox","application/mbox"],["mc1","application/vnd.medcalcdata"],["mcd","application/vnd.mcd"],["mcurl","text/vnd.curl.mcurl"],["md","text/markdown"],["mdb","application/x-msaccess"],["mdi","image/vnd.ms-modi"],["mdx","text/mdx"],["me","text/troff"],["mesh","model/mesh"],["meta4","application/metalink4+xml"],["metalink","application/metalink+xml"],["mets","application/mets+xml"],["mfm","application/vnd.mfmp"],["mft","application/rpki-manifest"],["mgp","application/vnd.osgeo.mapguide.package"],["mgz","application/vnd.proteus.magazine"],["mid","audio/midi"],["midi","audio/midi"],["mie","application/x-mie"],["mif","application/vnd.mif"],["mime","message/rfc822"],["mj2","video/mj2"],["mjp2","video/mj2"],["mjs","application/javascript"],["mk3d","video/x-matroska"],["mka","audio/x-matroska"],["mkd","text/x-markdown"],["mks","video/x-matroska"],["mkv","video/x-matroska"],["mlp","application/vnd.dolby.mlp"],["mmd","application/vnd.chipnuts.karaoke-mmd"],["mmf","application/vnd.smaf"],["mml","text/mathml"],["mmr","image/vnd.fujixerox.edmics-mmr"],["mng","video/x-mng"],["mny","application/x-msmoney"],["mobi","application/x-mobipocket-ebook"],["mods","application/mods+xml"],["mov","video/quicktime"],["movie","video/x-sgi-movie"],["mp2","audio/mpeg"],["mp2a","audio/mpeg"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mp4a","audio/mp4"],["mp4s","application/mp4"],["mp4v","video/mp4"],["mp21","application/mp21"],["mpc","application/vnd.mophun.certificate"],["mpd","application/dash+xml"],["mpe","video/mpeg"],["mpeg","video/mpeg"],["mpg","video/mpeg"],["mpg4","video/mp4"],["mpga","audio/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["mpm","application/vnd.blueice.multipass"],["mpn","application/vnd.mophun.application"],["mpp","application/vnd.ms-project"],["mpt","application/vnd.ms-project"],["mpy","application/vnd.ibm.minipay"],["mqy","application/vnd.mobius.mqy"],["mrc","application/marc"],["mrcx","application/marcxml+xml"],["ms","text/troff"],["mscml","application/mediaservercontrol+xml"],["mseed","application/vnd.fdsn.mseed"],["mseq","application/vnd.mseq"],["msf","application/vnd.epson.msf"],["msg","application/vnd.ms-outlook"],["msh","model/mesh"],["msi","application/x-msdownload"],["msl","application/vnd.mobius.msl"],["msm","application/octet-stream"],["msp","application/octet-stream"],["msty","application/vnd.muvee.style"],["mtl","model/mtl"],["mts","model/vnd.mts"],["mus","application/vnd.musician"],["musd","application/mmt-usd+xml"],["musicxml","application/vnd.recordare.musicxml+xml"],["mvb","application/x-msmediaview"],["mvt","application/vnd.mapbox-vector-tile"],["mwf","application/vnd.mfer"],["mxf","application/mxf"],["mxl","application/vnd.recordare.musicxml"],["mxmf","audio/mobile-xmf"],["mxml","application/xv+xml"],["mxs","application/vnd.triscape.mxs"],["mxu","video/vnd.mpegurl"],["n-gage","application/vnd.nokia.n-gage.symbian.install"],["n3","text/n3"],["nb","application/mathematica"],["nbp","application/vnd.wolfram.player"],["nc","application/x-netcdf"],["ncx","application/x-dtbncx+xml"],["nfo","text/x-nfo"],["ngdat","application/vnd.nokia.n-gage.data"],["nitf","application/vnd.nitf"],["nlu","application/vnd.neurolanguage.nlu"],["nml","application/vnd.enliven"],["nnd","application/vnd.noblenet-directory"],["nns","application/vnd.noblenet-sealer"],["nnw","application/vnd.noblenet-web"],["npx","image/vnd.net-fpx"],["nq","application/n-quads"],["nsc","application/x-conference"],["nsf","application/vnd.lotus-notes"],["nt","application/n-triples"],["ntf","application/vnd.nitf"],["numbers","application/x-iwork-numbers-sffnumbers"],["nzb","application/x-nzb"],["oa2","application/vnd.fujitsu.oasys2"],["oa3","application/vnd.fujitsu.oasys3"],["oas","application/vnd.fujitsu.oasys"],["obd","application/x-msbinder"],["obgx","application/vnd.openblox.game+xml"],["obj","model/obj"],["oda","application/oda"],["odb","application/vnd.oasis.opendocument.database"],["odc","application/vnd.oasis.opendocument.chart"],["odf","application/vnd.oasis.opendocument.formula"],["odft","application/vnd.oasis.opendocument.formula-template"],["odg","application/vnd.oasis.opendocument.graphics"],["odi","application/vnd.oasis.opendocument.image"],["odm","application/vnd.oasis.opendocument.text-master"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogex","model/vnd.opengex"],["ogg","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["omdoc","application/omdoc+xml"],["onepkg","application/onenote"],["onetmp","application/onenote"],["onetoc","application/onenote"],["onetoc2","application/onenote"],["opf","application/oebps-package+xml"],["opml","text/x-opml"],["oprc","application/vnd.palm"],["opus","audio/ogg"],["org","text/x-org"],["osf","application/vnd.yamaha.openscoreformat"],["osfpvg","application/vnd.yamaha.openscoreformat.osfpvg+xml"],["osm","application/vnd.openstreetmap.data+xml"],["otc","application/vnd.oasis.opendocument.chart-template"],["otf","font/otf"],["otg","application/vnd.oasis.opendocument.graphics-template"],["oth","application/vnd.oasis.opendocument.text-web"],["oti","application/vnd.oasis.opendocument.image-template"],["otp","application/vnd.oasis.opendocument.presentation-template"],["ots","application/vnd.oasis.opendocument.spreadsheet-template"],["ott","application/vnd.oasis.opendocument.text-template"],["ova","application/x-virtualbox-ova"],["ovf","application/x-virtualbox-ovf"],["owl","application/rdf+xml"],["oxps","application/oxps"],["oxt","application/vnd.openofficeorg.extension"],["p","text/x-pascal"],["p7a","application/x-pkcs7-signature"],["p7b","application/x-pkcs7-certificates"],["p7c","application/pkcs7-mime"],["p7m","application/pkcs7-mime"],["p7r","application/x-pkcs7-certreqresp"],["p7s","application/pkcs7-signature"],["p8","application/pkcs8"],["p10","application/x-pkcs10"],["p12","application/x-pkcs12"],["pac","application/x-ns-proxy-autoconfig"],["pages","application/x-iwork-pages-sffpages"],["pas","text/x-pascal"],["paw","application/vnd.pawaafile"],["pbd","application/vnd.powerbuilder6"],["pbm","image/x-portable-bitmap"],["pcap","application/vnd.tcpdump.pcap"],["pcf","application/x-font-pcf"],["pcl","application/vnd.hp-pcl"],["pclxl","application/vnd.hp-pclxl"],["pct","image/x-pict"],["pcurl","application/vnd.curl.pcurl"],["pcx","image/x-pcx"],["pdb","application/x-pilot"],["pde","text/x-processing"],["pdf","application/pdf"],["pem","application/x-x509-user-cert"],["pfa","application/x-font-type1"],["pfb","application/x-font-type1"],["pfm","application/x-font-type1"],["pfr","application/font-tdpfr"],["pfx","application/x-pkcs12"],["pgm","image/x-portable-graymap"],["pgn","application/x-chess-pgn"],["pgp","application/pgp"],["php","application/x-httpd-php"],["php3","application/x-httpd-php"],["php4","application/x-httpd-php"],["phps","application/x-httpd-php-source"],["phtml","application/x-httpd-php"],["pic","image/x-pict"],["pkg","application/octet-stream"],["pki","application/pkixcmp"],["pkipath","application/pkix-pkipath"],["pkpass","application/vnd.apple.pkpass"],["pl","application/x-perl"],["plb","application/vnd.3gpp.pic-bw-large"],["plc","application/vnd.mobius.plc"],["plf","application/vnd.pocketlearn"],["pls","application/pls+xml"],["pm","application/x-perl"],["pml","application/vnd.ctc-posml"],["png","image/png"],["pnm","image/x-portable-anymap"],["portpkg","application/vnd.macports.portpkg"],["pot","application/vnd.ms-powerpoint"],["potm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["potx","application/vnd.openxmlformats-officedocument.presentationml.template"],["ppa","application/vnd.ms-powerpoint"],["ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"],["ppd","application/vnd.cups-ppd"],["ppm","image/x-portable-pixmap"],["pps","application/vnd.ms-powerpoint"],["ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],["ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"],["ppt","application/powerpoint"],["pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["pqa","application/vnd.palm"],["prc","application/x-pilot"],["pre","application/vnd.lotus-freelance"],["prf","application/pics-rules"],["provx","application/provenance+xml"],["ps","application/postscript"],["psb","application/vnd.3gpp.pic-bw-small"],["psd","application/x-photoshop"],["psf","application/x-font-linux-psf"],["pskcxml","application/pskc+xml"],["pti","image/prs.pti"],["ptid","application/vnd.pvi.ptid1"],["pub","application/x-mspublisher"],["pvb","application/vnd.3gpp.pic-bw-var"],["pwn","application/vnd.3m.post-it-notes"],["pya","audio/vnd.ms-playready.media.pya"],["pyv","video/vnd.ms-playready.media.pyv"],["qam","application/vnd.epson.quickanime"],["qbo","application/vnd.intu.qbo"],["qfx","application/vnd.intu.qfx"],["qps","application/vnd.publishare-delta-tree"],["qt","video/quicktime"],["qwd","application/vnd.quark.quarkxpress"],["qwt","application/vnd.quark.quarkxpress"],["qxb","application/vnd.quark.quarkxpress"],["qxd","application/vnd.quark.quarkxpress"],["qxl","application/vnd.quark.quarkxpress"],["qxt","application/vnd.quark.quarkxpress"],["ra","audio/x-realaudio"],["ram","audio/x-pn-realaudio"],["raml","application/raml+yaml"],["rapd","application/route-apd+xml"],["rar","application/x-rar"],["ras","image/x-cmu-raster"],["rcprofile","application/vnd.ipunplugged.rcprofile"],["rdf","application/rdf+xml"],["rdz","application/vnd.data-vision.rdz"],["relo","application/p2p-overlay+xml"],["rep","application/vnd.businessobjects"],["res","application/x-dtbresource+xml"],["rgb","image/x-rgb"],["rif","application/reginfo+xml"],["rip","audio/vnd.rip"],["ris","application/x-research-info-systems"],["rl","application/resource-lists+xml"],["rlc","image/vnd.fujixerox.edmics-rlc"],["rld","application/resource-lists-diff+xml"],["rm","audio/x-pn-realaudio"],["rmi","audio/midi"],["rmp","audio/x-pn-realaudio-plugin"],["rms","application/vnd.jcp.javame.midlet-rms"],["rmvb","application/vnd.rn-realmedia-vbr"],["rnc","application/relax-ng-compact-syntax"],["rng","application/xml"],["roa","application/rpki-roa"],["roff","text/troff"],["rp9","application/vnd.cloanto.rp9"],["rpm","audio/x-pn-realaudio-plugin"],["rpss","application/vnd.nokia.radio-presets"],["rpst","application/vnd.nokia.radio-preset"],["rq","application/sparql-query"],["rs","application/rls-services+xml"],["rsa","application/x-pkcs7"],["rsat","application/atsc-rsat+xml"],["rsd","application/rsd+xml"],["rsheet","application/urc-ressheet+xml"],["rss","application/rss+xml"],["rtf","text/rtf"],["rtx","text/richtext"],["run","application/x-makeself"],["rusd","application/route-usd+xml"],["rv","video/vnd.rn-realvideo"],["s","text/x-asm"],["s3m","audio/s3m"],["saf","application/vnd.yamaha.smaf-audio"],["sass","text/x-sass"],["sbml","application/sbml+xml"],["sc","application/vnd.ibm.secure-container"],["scd","application/x-msschedule"],["scm","application/vnd.lotus-screencam"],["scq","application/scvp-cv-request"],["scs","application/scvp-cv-response"],["scss","text/x-scss"],["scurl","text/vnd.curl.scurl"],["sda","application/vnd.stardivision.draw"],["sdc","application/vnd.stardivision.calc"],["sdd","application/vnd.stardivision.impress"],["sdkd","application/vnd.solent.sdkm+xml"],["sdkm","application/vnd.solent.sdkm+xml"],["sdp","application/sdp"],["sdw","application/vnd.stardivision.writer"],["sea","application/octet-stream"],["see","application/vnd.seemail"],["seed","application/vnd.fdsn.seed"],["sema","application/vnd.sema"],["semd","application/vnd.semd"],["semf","application/vnd.semf"],["senmlx","application/senml+xml"],["sensmlx","application/sensml+xml"],["ser","application/java-serialized-object"],["setpay","application/set-payment-initiation"],["setreg","application/set-registration-initiation"],["sfd-hdstx","application/vnd.hydrostatix.sof-data"],["sfs","application/vnd.spotfire.sfs"],["sfv","text/x-sfv"],["sgi","image/sgi"],["sgl","application/vnd.stardivision.writer-global"],["sgm","text/sgml"],["sgml","text/sgml"],["sh","application/x-sh"],["shar","application/x-shar"],["shex","text/shex"],["shf","application/shf+xml"],["shtml","text/html"],["sid","image/x-mrsid-image"],["sieve","application/sieve"],["sig","application/pgp-signature"],["sil","audio/silk"],["silo","model/mesh"],["sis","application/vnd.symbian.install"],["sisx","application/vnd.symbian.install"],["sit","application/x-stuffit"],["sitx","application/x-stuffitx"],["siv","application/sieve"],["skd","application/vnd.koan"],["skm","application/vnd.koan"],["skp","application/vnd.koan"],["skt","application/vnd.koan"],["sldm","application/vnd.ms-powerpoint.slide.macroenabled.12"],["sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"],["slim","text/slim"],["slm","text/slim"],["sls","application/route-s-tsid+xml"],["slt","application/vnd.epson.salt"],["sm","application/vnd.stepmania.stepchart"],["smf","application/vnd.stardivision.math"],["smi","application/smil"],["smil","application/smil"],["smv","video/x-smv"],["smzip","application/vnd.stepmania.package"],["snd","audio/basic"],["snf","application/x-font-snf"],["so","application/octet-stream"],["spc","application/x-pkcs7-certificates"],["spdx","text/spdx"],["spf","application/vnd.yamaha.smaf-phrase"],["spl","application/x-futuresplash"],["spot","text/vnd.in3d.spot"],["spp","application/scvp-vp-response"],["spq","application/scvp-vp-request"],["spx","audio/ogg"],["sql","application/x-sql"],["src","application/x-wais-source"],["srt","application/x-subrip"],["sru","application/sru+xml"],["srx","application/sparql-results+xml"],["ssdl","application/ssdl+xml"],["sse","application/vnd.kodak-descriptor"],["ssf","application/vnd.epson.ssf"],["ssml","application/ssml+xml"],["sst","application/octet-stream"],["st","application/vnd.sailingtracker.track"],["stc","application/vnd.sun.xml.calc.template"],["std","application/vnd.sun.xml.draw.template"],["stf","application/vnd.wt.stf"],["sti","application/vnd.sun.xml.impress.template"],["stk","application/hyperstudio"],["stl","model/stl"],["stpx","model/step+xml"],["stpxz","model/step-xml+zip"],["stpz","model/step+zip"],["str","application/vnd.pg.format"],["stw","application/vnd.sun.xml.writer.template"],["styl","text/stylus"],["stylus","text/stylus"],["sub","text/vnd.dvb.subtitle"],["sus","application/vnd.sus-calendar"],["susp","application/vnd.sus-calendar"],["sv4cpio","application/x-sv4cpio"],["sv4crc","application/x-sv4crc"],["svc","application/vnd.dvb.service"],["svd","application/vnd.svd"],["svg","image/svg+xml"],["svgz","image/svg+xml"],["swa","application/x-director"],["swf","application/x-shockwave-flash"],["swi","application/vnd.aristanetworks.swi"],["swidtag","application/swid+xml"],["sxc","application/vnd.sun.xml.calc"],["sxd","application/vnd.sun.xml.draw"],["sxg","application/vnd.sun.xml.writer.global"],["sxi","application/vnd.sun.xml.impress"],["sxm","application/vnd.sun.xml.math"],["sxw","application/vnd.sun.xml.writer"],["t","text/troff"],["t3","application/x-t3vm-image"],["t38","image/t38"],["taglet","application/vnd.mynfc"],["tao","application/vnd.tao.intent-module-archive"],["tap","image/vnd.tencent.tap"],["tar","application/x-tar"],["tcap","application/vnd.3gpp2.tcap"],["tcl","application/x-tcl"],["td","application/urc-targetdesc+xml"],["teacher","application/vnd.smart.teacher"],["tei","application/tei+xml"],["teicorpus","application/tei+xml"],["tex","application/x-tex"],["texi","application/x-texinfo"],["texinfo","application/x-texinfo"],["text","text/plain"],["tfi","application/thraud+xml"],["tfm","application/x-tex-tfm"],["tfx","image/tiff-fx"],["tga","image/x-tga"],["tgz","application/x-tar"],["thmx","application/vnd.ms-officetheme"],["tif","image/tiff"],["tiff","image/tiff"],["tk","application/x-tcl"],["tmo","application/vnd.tmobile-livetv"],["toml","application/toml"],["torrent","application/x-bittorrent"],["tpl","application/vnd.groove-tool-template"],["tpt","application/vnd.trid.tpt"],["tr","text/troff"],["tra","application/vnd.trueapp"],["trig","application/trig"],["trm","application/x-msterminal"],["ts","video/mp2t"],["tsd","application/timestamped-data"],["tsv","text/tab-separated-values"],["ttc","font/collection"],["ttf","font/ttf"],["ttl","text/turtle"],["ttml","application/ttml+xml"],["twd","application/vnd.simtech-mindmapper"],["twds","application/vnd.simtech-mindmapper"],["txd","application/vnd.genomatix.tuxedo"],["txf","application/vnd.mobius.txf"],["txt","text/plain"],["u8dsn","message/global-delivery-status"],["u8hdr","message/global-headers"],["u8mdn","message/global-disposition-notification"],["u8msg","message/global"],["u32","application/x-authorware-bin"],["ubj","application/ubjson"],["udeb","application/x-debian-package"],["ufd","application/vnd.ufdl"],["ufdl","application/vnd.ufdl"],["ulx","application/x-glulx"],["umj","application/vnd.umajin"],["unityweb","application/vnd.unity"],["uoml","application/vnd.uoml+xml"],["uri","text/uri-list"],["uris","text/uri-list"],["urls","text/uri-list"],["usdz","model/vnd.usdz+zip"],["ustar","application/x-ustar"],["utz","application/vnd.uiq.theme"],["uu","text/x-uuencode"],["uva","audio/vnd.dece.audio"],["uvd","application/vnd.dece.data"],["uvf","application/vnd.dece.data"],["uvg","image/vnd.dece.graphic"],["uvh","video/vnd.dece.hd"],["uvi","image/vnd.dece.graphic"],["uvm","video/vnd.dece.mobile"],["uvp","video/vnd.dece.pd"],["uvs","video/vnd.dece.sd"],["uvt","application/vnd.dece.ttml+xml"],["uvu","video/vnd.uvvu.mp4"],["uvv","video/vnd.dece.video"],["uvva","audio/vnd.dece.audio"],["uvvd","application/vnd.dece.data"],["uvvf","application/vnd.dece.data"],["uvvg","image/vnd.dece.graphic"],["uvvh","video/vnd.dece.hd"],["uvvi","image/vnd.dece.graphic"],["uvvm","video/vnd.dece.mobile"],["uvvp","video/vnd.dece.pd"],["uvvs","video/vnd.dece.sd"],["uvvt","application/vnd.dece.ttml+xml"],["uvvu","video/vnd.uvvu.mp4"],["uvvv","video/vnd.dece.video"],["uvvx","application/vnd.dece.unspecified"],["uvvz","application/vnd.dece.zip"],["uvx","application/vnd.dece.unspecified"],["uvz","application/vnd.dece.zip"],["vbox","application/x-virtualbox-vbox"],["vbox-extpack","application/x-virtualbox-vbox-extpack"],["vcard","text/vcard"],["vcd","application/x-cdlink"],["vcf","text/x-vcard"],["vcg","application/vnd.groove-vcard"],["vcs","text/x-vcalendar"],["vcx","application/vnd.vcx"],["vdi","application/x-virtualbox-vdi"],["vds","model/vnd.sap.vds"],["vhd","application/x-virtualbox-vhd"],["vis","application/vnd.visionary"],["viv","video/vnd.vivo"],["vlc","application/videolan"],["vmdk","application/x-virtualbox-vmdk"],["vob","video/x-ms-vob"],["vor","application/vnd.stardivision.writer"],["vox","application/x-authorware-bin"],["vrml","model/vrml"],["vsd","application/vnd.visio"],["vsf","application/vnd.vsf"],["vss","application/vnd.visio"],["vst","application/vnd.visio"],["vsw","application/vnd.visio"],["vtf","image/vnd.valve.source.texture"],["vtt","text/vtt"],["vtu","model/vnd.vtu"],["vxml","application/voicexml+xml"],["w3d","application/x-director"],["wad","application/x-doom"],["wadl","application/vnd.sun.wadl+xml"],["war","application/java-archive"],["wasm","application/wasm"],["wav","audio/x-wav"],["wax","audio/x-ms-wax"],["wbmp","image/vnd.wap.wbmp"],["wbs","application/vnd.criticaltools.wbs+xml"],["wbxml","application/wbxml"],["wcm","application/vnd.ms-works"],["wdb","application/vnd.ms-works"],["wdp","image/vnd.ms-photo"],["weba","audio/webm"],["webapp","application/x-web-app-manifest+json"],["webm","video/webm"],["webmanifest","application/manifest+json"],["webp","image/webp"],["wg","application/vnd.pmi.widget"],["wgt","application/widget"],["wks","application/vnd.ms-works"],["wm","video/x-ms-wm"],["wma","audio/x-ms-wma"],["wmd","application/x-ms-wmd"],["wmf","image/wmf"],["wml","text/vnd.wap.wml"],["wmlc","application/wmlc"],["wmls","text/vnd.wap.wmlscript"],["wmlsc","application/vnd.wap.wmlscriptc"],["wmv","video/x-ms-wmv"],["wmx","video/x-ms-wmx"],["wmz","application/x-msmetafile"],["woff","font/woff"],["woff2","font/woff2"],["word","application/msword"],["wpd","application/vnd.wordperfect"],["wpl","application/vnd.ms-wpl"],["wps","application/vnd.ms-works"],["wqd","application/vnd.wqd"],["wri","application/x-mswrite"],["wrl","model/vrml"],["wsc","message/vnd.wfa.wsc"],["wsdl","application/wsdl+xml"],["wspolicy","application/wspolicy+xml"],["wtb","application/vnd.webturbo"],["wvx","video/x-ms-wvx"],["x3d","model/x3d+xml"],["x3db","model/x3d+fastinfoset"],["x3dbz","model/x3d+binary"],["x3dv","model/x3d-vrml"],["x3dvz","model/x3d+vrml"],["x3dz","model/x3d+xml"],["x32","application/x-authorware-bin"],["x_b","model/vnd.parasolid.transmit.binary"],["x_t","model/vnd.parasolid.transmit.text"],["xaml","application/xaml+xml"],["xap","application/x-silverlight-app"],["xar","application/vnd.xara"],["xav","application/xcap-att+xml"],["xbap","application/x-ms-xbap"],["xbd","application/vnd.fujixerox.docuworks.binder"],["xbm","image/x-xbitmap"],["xca","application/xcap-caps+xml"],["xcs","application/calendar+xml"],["xdf","application/xcap-diff+xml"],["xdm","application/vnd.syncml.dm+xml"],["xdp","application/vnd.adobe.xdp+xml"],["xdssc","application/dssc+xml"],["xdw","application/vnd.fujixerox.docuworks"],["xel","application/xcap-el+xml"],["xenc","application/xenc+xml"],["xer","application/patch-ops-error+xml"],["xfdf","application/vnd.adobe.xfdf"],["xfdl","application/vnd.xfdl"],["xht","application/xhtml+xml"],["xhtml","application/xhtml+xml"],["xhvml","application/xv+xml"],["xif","image/vnd.xiff"],["xl","application/excel"],["xla","application/vnd.ms-excel"],["xlam","application/vnd.ms-excel.addin.macroEnabled.12"],["xlc","application/vnd.ms-excel"],["xlf","application/xliff+xml"],["xlm","application/vnd.ms-excel"],["xls","application/vnd.ms-excel"],["xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"],["xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xlt","application/vnd.ms-excel"],["xltm","application/vnd.ms-excel.template.macroEnabled.12"],["xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"],["xlw","application/vnd.ms-excel"],["xm","audio/xm"],["xml","application/xml"],["xns","application/xcap-ns+xml"],["xo","application/vnd.olpc-sugar"],["xop","application/xop+xml"],["xpi","application/x-xpinstall"],["xpl","application/xproc+xml"],["xpm","image/x-xpixmap"],["xpr","application/vnd.is-xpr"],["xps","application/vnd.ms-xpsdocument"],["xpw","application/vnd.intercon.formnet"],["xpx","application/vnd.intercon.formnet"],["xsd","application/xml"],["xsl","application/xml"],["xslt","application/xslt+xml"],["xsm","application/vnd.syncml+xml"],["xspf","application/xspf+xml"],["xul","application/vnd.mozilla.xul+xml"],["xvm","application/xv+xml"],["xvml","application/xv+xml"],["xwd","image/x-xwindowdump"],["xyz","chemical/x-xyz"],["xz","application/x-xz"],["yaml","text/yaml"],["yang","application/yang"],["yin","application/yin+xml"],["yml","text/yaml"],["ymp","text/x-suse-ymp"],["z","application/x-compress"],["z1","application/x-zmachine"],["z2","application/x-zmachine"],["z3","application/x-zmachine"],["z4","application/x-zmachine"],["z5","application/x-zmachine"],["z6","application/x-zmachine"],["z7","application/x-zmachine"],["z8","application/x-zmachine"],["zaz","application/vnd.zzazz.deck+xml"],["zip","application/zip"],["zir","application/vnd.zul"],["zirz","application/vnd.zul"],["zmm","application/vnd.handheld-entertainment+xml"],["zsh","text/x-scriptzsh"]]);function qe(t,e,n){const i=oh(t),{webkitRelativePath:r}=t,a=typeof e=="string"?e:typeof r=="string"&&r.length>0?r:`./${t.name}`;return typeof i.path!="string"&&ur(i,"path",a),ur(i,"relativePath",a),i}function oh(t){const{name:e}=t;if(e&&e.lastIndexOf(".")!==-1&&!t.type){const i=e.split(".").pop().toLowerCase(),r=sh.get(i);r&&Object.defineProperty(t,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return t}function ur(t,e,n){Object.defineProperty(t,e,{value:n,writable:!1,configurable:!1,enumerable:!0})}const ch=[".DS_Store","Thumbs.db"];function lh(t){return Ce(this,void 0,void 0,function*(){return Kt(t)&&dh(t.dataTransfer)?mh(t.dataTransfer,t.type):uh(t)?ph(t):Array.isArray(t)&&t.every(e=>"getFile"in e&&typeof e.getFile=="function")?hh(t):[]})}function dh(t){return Kt(t)}function uh(t){return Kt(t)&&Kt(t.target)}function Kt(t){return typeof t=="object"&&t!==null}function ph(t){return $n(t.target.files).map(e=>qe(e))}function hh(t){return Ce(this,void 0,void 0,function*(){return(yield Promise.all(t.map(n=>n.getFile()))).map(n=>qe(n))})}function mh(t,e){return Ce(this,void 0,void 0,function*(){if(t.items){const n=$n(t.items).filter(r=>r.kind==="file");if(e!=="drop")return n;const i=yield Promise.all(n.map(fh));return pr(za(i))}return pr($n(t.files).map(n=>qe(n)))})}function pr(t){return t.filter(e=>ch.indexOf(e.name)===-1)}function $n(t){if(t===null)return[];const e=[];for(let n=0;n<t.length;n++){const i=t[n];e.push(i)}return e}function fh(t){if(typeof t.webkitGetAsEntry!="function")return hr(t);const e=t.webkitGetAsEntry();return e&&e.isDirectory?$a(e):hr(t,e)}function za(t){return t.reduce((e,n)=>[...e,...Array.isArray(n)?za(n):[n]],[])}function hr(t,e){var n;if(globalThis.isSecureContext&&typeof t.getAsFileSystemHandle=="function")return t.getAsFileSystemHandle().then(a=>Ce(this,void 0,void 0,function*(){const o=yield a.getFile();return o.handle=a,qe(o)}));const i=t.getAsFile();if(!i)return Promise.reject(`${t} is not a File`);const r=qe(i,(n=e==null?void 0:e.fullPath)!==null&&n!==void 0?n:void 0);return Promise.resolve(r)}function gh(t){return Ce(this,void 0,void 0,function*(){return t.isDirectory?$a(t):vh(t)})}function $a(t){const e=t.createReader();return new Promise((n,i)=>{const r=[];function a(){e.readEntries(o=>Ce(this,void 0,void 0,function*(){if(o.length){const l=Promise.all(o.map(gh));r.push(l),a()}else try{const l=yield Promise.all(r);n(l)}catch(l){i(l)}}),o=>{i(o)})}a()})}function vh(t){return Ce(this,void 0,void 0,function*(){return new Promise((e,n)=>{t.file(i=>{const r=qe(i,t.fullPath);e(r)},i=>{n(i)})})})}var En=function(t,e){if(t&&e){var n=Array.isArray(e)?e:e.split(",");if(n.length===0)return!0;var i=t.name||"",r=(t.type||"").toLowerCase(),a=r.replace(/\/.*$/,"");return n.some(function(o){var l=o.trim().toLowerCase();return l.charAt(0)==="."?i.toLowerCase().endsWith(l):l.endsWith("/*")?a===l.replace(/\/.*$/,""):r===l})}return!0};function mr(t){return bh(t)||yh(t)||Wa(t)||xh()}function xh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yh(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function bh(t){if(Array.isArray(t))return Bn(t)}function fr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function gr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?fr(Object(n),!0).forEach(function(i){Ba(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):fr(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Ba(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lt(t,e){return kh(t)||_h(t,e)||Wa(t,e)||wh()}function wh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wa(t,e){if(t){if(typeof t=="string")return Bn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bn(t,e)}}function Bn(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function _h(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,a=!1,o,l;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(c){a=!0,l=c}finally{try{!r&&n.return!=null&&n.return()}finally{if(a)throw l}}return i}}function kh(t){if(Array.isArray(t))return t}var Eh=typeof En=="function"?En:En.default,Ih="file-invalid-type",Sh="file-too-large",Th="file-too-small",jh="too-many-files",Ph=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=e.split(","),i=n.length>1?"one of ".concat(n.join(", ")):n[0];return{code:Ih,message:"File type must be ".concat(i)}},vr=function(e){return{code:Sh,message:"File is larger than ".concat(e," ").concat(e===1?"byte":"bytes")}},xr=function(e){return{code:Th,message:"File is smaller than ".concat(e," ").concat(e===1?"byte":"bytes")}},Nh={code:jh,message:"Too many files"};function Ha(t,e){var n=t.type==="application/x-moz-file"||Eh(t,e);return[n,n?null:Ph(e)]}function qa(t,e,n){if(Te(t.size))if(Te(e)&&Te(n)){if(t.size>n)return[!1,vr(n)];if(t.size<e)return[!1,xr(e)]}else{if(Te(e)&&t.size<e)return[!1,xr(e)];if(Te(n)&&t.size>n)return[!1,vr(n)]}return[!0,null]}function Te(t){return t!=null}function Ah(t){var e=t.files,n=t.accept,i=t.minSize,r=t.maxSize,a=t.multiple,o=t.maxFiles,l=t.validator;return!a&&e.length>1||a&&o>=1&&e.length>o?!1:e.every(function(c){var d=Ha(c,n),u=lt(d,1),h=u[0],f=qa(c,i,r),g=lt(f,1),w=g[0],E=l?l(c):null;return h&&w&&!E})}function Yt(t){return typeof t.isPropagationStopped=="function"?t.isPropagationStopped():typeof t.cancelBubble<"u"?t.cancelBubble:!1}function Tt(t){return t.dataTransfer?Array.prototype.some.call(t.dataTransfer.types,function(e){return e==="Files"||e==="application/x-moz-file"}):!!t.target&&!!t.target.files}function yr(t){t.preventDefault()}function Ch(t){return t.indexOf("MSIE")!==-1||t.indexOf("Trident/")!==-1}function Oh(t){return t.indexOf("Edge/")!==-1}function Dh(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Ch(t)||Oh(t)}function J(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){for(var r=arguments.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];return e.some(function(l){return!Yt(i)&&l&&l.apply(void 0,[i].concat(a)),Yt(i)})}}function Rh(){return"showOpenFilePicker"in window}function Mh(t){if(Te(t)){var e=Object.entries(t).filter(function(n){var i=lt(n,2),r=i[0],a=i[1],o=!0;return Va(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),(!Array.isArray(a)||!a.every(Ga))&&(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),o=!1),o}).reduce(function(n,i){var r=lt(i,2),a=r[0],o=r[1];return gr(gr({},n),{},Ba({},a,o))},{});return[{description:"Files",accept:e}]}return t}function Lh(t){if(Te(t))return Object.entries(t).reduce(function(e,n){var i=lt(n,2),r=i[0],a=i[1];return[].concat(mr(e),[r],mr(a))},[]).filter(function(e){return Va(e)||Ga(e)}).join(",")}function Fh(t){return t instanceof DOMException&&(t.name==="AbortError"||t.code===t.ABORT_ERR)}function Uh(t){return t instanceof DOMException&&(t.name==="SecurityError"||t.code===t.SECURITY_ERR)}function Va(t){return t==="audio/*"||t==="video/*"||t==="image/*"||t==="text/*"||t==="application/*"||/\w+\/[-+.\w]+/g.test(t)}function Ga(t){return/^.*\.[\w]+$/.test(t)}var zh=["children"],$h=["open"],Bh=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Wh=["refKey","onChange","onClick"];function Hh(t){return Gh(t)||Vh(t)||Ka(t)||qh()}function qh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vh(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Gh(t){if(Array.isArray(t))return Wn(t)}function In(t,e){return Jh(t)||Yh(t,e)||Ka(t,e)||Kh()}function Kh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ka(t,e){if(t){if(typeof t=="string")return Wn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wn(t,e)}}function Wn(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Yh(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,a=!1,o,l;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(c){a=!0,l=c}finally{try{!r&&n.return!=null&&n.return()}finally{if(a)throw l}}return i}}function Jh(t){if(Array.isArray(t))return t}function br(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?br(Object(n),!0).forEach(function(i){Hn(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):br(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Hn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Jt(t,e){if(t==null)return{};var n=Xh(t,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Xh(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}var ui=p.forwardRef(function(t,e){var n=t.children,i=Jt(t,zh),r=pi(i),a=r.open,o=Jt(r,$h);return p.useImperativeHandle(e,function(){return{open:a}},[a]),cs.createElement(p.Fragment,null,n(C(C({},o),{},{open:a})))});ui.displayName="Dropzone";var Ya={disabled:!1,getFilesFromEvent:lh,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1,autoFocus:!1};ui.defaultProps=Ya;ui.propTypes={children:S.func,accept:S.objectOf(S.arrayOf(S.string)),multiple:S.bool,preventDropOnDocument:S.bool,noClick:S.bool,noKeyboard:S.bool,noDrag:S.bool,noDragEventsBubbling:S.bool,minSize:S.number,maxSize:S.number,maxFiles:S.number,disabled:S.bool,getFilesFromEvent:S.func,onFileDialogCancel:S.func,onFileDialogOpen:S.func,useFsAccessApi:S.bool,autoFocus:S.bool,onDragEnter:S.func,onDragLeave:S.func,onDragOver:S.func,onDrop:S.func,onDropAccepted:S.func,onDropRejected:S.func,onError:S.func,validator:S.func};var qn={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function pi(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=C(C({},Ya),t),n=e.accept,i=e.disabled,r=e.getFilesFromEvent,a=e.maxSize,o=e.minSize,l=e.multiple,c=e.maxFiles,d=e.onDragEnter,u=e.onDragLeave,h=e.onDragOver,f=e.onDrop,g=e.onDropAccepted,w=e.onDropRejected,E=e.onFileDialogCancel,R=e.onFileDialogOpen,y=e.useFsAccessApi,j=e.autoFocus,k=e.preventDropOnDocument,A=e.noClick,O=e.noKeyboard,$=e.noDrag,b=e.noDragEventsBubbling,L=e.onError,N=e.validator,B=p.useMemo(function(){return Lh(n)},[n]),Oe=p.useMemo(function(){return Mh(n)},[n]),Ke=p.useMemo(function(){return typeof R=="function"?R:wr},[R]),De=p.useMemo(function(){return typeof E=="function"?E:wr},[E]),F=p.useRef(null),V=p.useRef(null),Qa=p.useReducer(Qh,qn),mi=In(Qa,2),on=mi[0],W=mi[1],Za=on.isFocused,fi=on.isFileDialogActive,yt=p.useRef(typeof window<"u"&&window.isSecureContext&&y&&Rh()),gi=function(){!yt.current&&fi&&setTimeout(function(){if(V.current){var v=V.current.files;v.length||(W({type:"closeDialog"}),De())}},300)};p.useEffect(function(){return window.addEventListener("focus",gi,!1),function(){window.removeEventListener("focus",gi,!1)}},[V,fi,De,yt]);var Re=p.useRef([]),vi=function(v){F.current&&F.current.contains(v.target)||(v.preventDefault(),Re.current=[])};p.useEffect(function(){return k&&(document.addEventListener("dragover",yr,!1),document.addEventListener("drop",vi,!1)),function(){k&&(document.removeEventListener("dragover",yr),document.removeEventListener("drop",vi))}},[F,k]),p.useEffect(function(){return!i&&j&&F.current&&F.current.focus(),function(){}},[F,j,i]);var ke=p.useCallback(function(m){L?L(m):console.error(m)},[L]),xi=p.useCallback(function(m){m.preventDefault(),m.persist(),kt(m),Re.current=[].concat(Hh(Re.current),[m.target]),Tt(m)&&Promise.resolve(r(m)).then(function(v){if(!(Yt(m)&&!b)){var D=v.length,M=D>0&&Ah({files:v,accept:B,minSize:o,maxSize:a,multiple:l,maxFiles:c,validator:N}),H=D>0&&!M;W({isDragAccept:M,isDragReject:H,isDragActive:!0,type:"setDraggedFiles"}),d&&d(m)}}).catch(function(v){return ke(v)})},[r,d,ke,b,B,o,a,l,c,N]),yi=p.useCallback(function(m){m.preventDefault(),m.persist(),kt(m);var v=Tt(m);if(v&&m.dataTransfer)try{m.dataTransfer.dropEffect="copy"}catch{}return v&&h&&h(m),!1},[h,b]),bi=p.useCallback(function(m){m.preventDefault(),m.persist(),kt(m);var v=Re.current.filter(function(M){return F.current&&F.current.contains(M)}),D=v.indexOf(m.target);D!==-1&&v.splice(D,1),Re.current=v,!(v.length>0)&&(W({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Tt(m)&&u&&u(m))},[F,u,b]),bt=p.useCallback(function(m,v){var D=[],M=[];m.forEach(function(H){var Ye=Ha(H,B),Fe=In(Ye,2),ln=Fe[0],dn=Fe[1],un=qa(H,o,a),Et=In(un,2),pn=Et[0],hn=Et[1],mn=N?N(H):null;if(ln&&pn&&!mn)D.push(H);else{var fn=[dn,hn];mn&&(fn=fn.concat(mn)),M.push({file:H,errors:fn.filter(function(is){return is})})}}),(!l&&D.length>1||l&&c>=1&&D.length>c)&&(D.forEach(function(H){M.push({file:H,errors:[Nh]})}),D.splice(0)),W({acceptedFiles:D,fileRejections:M,isDragReject:M.length>0,type:"setFiles"}),f&&f(D,M,v),M.length>0&&w&&w(M,v),D.length>0&&g&&g(D,v)},[W,l,B,o,a,c,f,g,w,N]),wt=p.useCallback(function(m){m.preventDefault(),m.persist(),kt(m),Re.current=[],Tt(m)&&Promise.resolve(r(m)).then(function(v){Yt(m)&&!b||bt(v,m)}).catch(function(v){return ke(v)}),W({type:"reset"})},[r,bt,ke,b]),Me=p.useCallback(function(){if(yt.current){W({type:"openDialog"}),Ke();var m={multiple:l,types:Oe};window.showOpenFilePicker(m).then(function(v){return r(v)}).then(function(v){bt(v,null),W({type:"closeDialog"})}).catch(function(v){Fh(v)?(De(v),W({type:"closeDialog"})):Uh(v)?(yt.current=!1,V.current?(V.current.value=null,V.current.click()):ke(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):ke(v)});return}V.current&&(W({type:"openDialog"}),Ke(),V.current.value=null,V.current.click())},[W,Ke,De,y,bt,ke,Oe,l]),wi=p.useCallback(function(m){!F.current||!F.current.isEqualNode(m.target)||(m.key===" "||m.key==="Enter"||m.keyCode===32||m.keyCode===13)&&(m.preventDefault(),Me())},[F,Me]),_i=p.useCallback(function(){W({type:"focus"})},[]),ki=p.useCallback(function(){W({type:"blur"})},[]),Ei=p.useCallback(function(){A||(Dh()?setTimeout(Me,0):Me())},[A,Me]),Le=function(v){return i?null:v},cn=function(v){return O?null:Le(v)},_t=function(v){return $?null:Le(v)},kt=function(v){b&&v.stopPropagation()},es=p.useMemo(function(){return function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=m.refKey,D=v===void 0?"ref":v,M=m.role,H=m.onKeyDown,Ye=m.onFocus,Fe=m.onBlur,ln=m.onClick,dn=m.onDragEnter,un=m.onDragOver,Et=m.onDragLeave,pn=m.onDrop,hn=Jt(m,Bh);return C(C(Hn({onKeyDown:cn(J(H,wi)),onFocus:cn(J(Ye,_i)),onBlur:cn(J(Fe,ki)),onClick:Le(J(ln,Ei)),onDragEnter:_t(J(dn,xi)),onDragOver:_t(J(un,yi)),onDragLeave:_t(J(Et,bi)),onDrop:_t(J(pn,wt)),role:typeof M=="string"&&M!==""?M:"presentation"},D,F),!i&&!O?{tabIndex:0}:{}),hn)}},[F,wi,_i,ki,Ei,xi,yi,bi,wt,O,$,i]),ts=p.useCallback(function(m){m.stopPropagation()},[]),ns=p.useMemo(function(){return function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=m.refKey,D=v===void 0?"ref":v,M=m.onChange,H=m.onClick,Ye=Jt(m,Wh),Fe=Hn({accept:B,multiple:l,type:"file",style:{border:0,clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"},onChange:Le(J(M,wt)),onClick:Le(J(H,ts)),tabIndex:-1},D,V);return C(C({},Fe),Ye)}},[V,n,l,wt,i]);return C(C({},on),{},{isFocused:Za&&!i,getRootProps:es,getInputProps:ns,rootRef:F,inputRef:V,open:Le(Me)})}function Qh(t,e){switch(e.type){case"focus":return C(C({},t),{},{isFocused:!0});case"blur":return C(C({},t),{},{isFocused:!1});case"openDialog":return C(C({},qn),{},{isFileDialogActive:!0});case"closeDialog":return C(C({},t),{},{isFileDialogActive:!1});case"setDraggedFiles":return C(C({},t),{},{isDragActive:e.isDragActive,isDragAccept:e.isDragAccept,isDragReject:e.isDragReject});case"setFiles":return C(C({},t),{},{acceptedFiles:e.acceptedFiles,fileRejections:e.fileRejections,isDragReject:e.isDragReject});case"reset":return C({},qn);default:return t}}function wr(){}function sn(){const t=dt(),[e,n]=p.useState(!1),{isAuthenticated:i,userData:r}=ye(c=>c.auth);p.useEffect(()=>{const c=localStorage.getItem("pinterest_auth");if(c)try{const d=JSON.parse(c);t(zt(d))}catch(d){console.error("Failed to parse auth data:",d),localStorage.removeItem("pinterest_auth")}},[t]);const a=p.useCallback(async()=>{try{n(!0);const c=await fetch("/api/pinterest-auth?path=/oauth/url");if(!c.ok){const u=await c.json();throw new Error(u.message||`HTTP error! status: ${c.status}`)}const d=await c.json();if(d.url)localStorage.setItem("pinterest_auth_redirect",window.location.pathname),window.location.href=d.url;else throw new Error("Failed to get authentication URL")}catch(c){throw console.error("Auth error:",c),_.error("Failed to initiate authentication. Please try again."),c}finally{n(!1)}},[]),o=p.useCallback(async()=>{var c;if(!((c=r==null?void 0:r.token)!=null&&c.refresh_token))return!1;try{const d=await fetch(`/api/pinterest-auth?path=/token&refresh_token=${r.token.refresh_token}`),u=await d.json();if(d.ok&&u.token){const h={...r,token:{...r.token,...u.token}};return localStorage.setItem("pinterest_auth",JSON.stringify(h)),t(zt(h)),!0}return!1}catch(d){return console.error("Token refresh error:",d),!1}},[r,t]),l=p.useCallback(()=>{localStorage.removeItem("pinterest_auth"),t(_c()),_.success("Successfully logged out")},[t]);return{isLoading:e,isAuthenticated:i,userData:r,handleAuth:a,refreshToken:o,logout:l}}function Ja(){var o;const t=dt(),{userData:e,refreshToken:n}=sn(),{items:i,isLoading:r,error:a}=ye(l=>l.boards);return p.useEffect(()=>{var c;const l=async()=>{var d;if((d=e==null?void 0:e.token)!=null&&d.access_token){t(Ri(!0));try{const u=await fetch("/.netlify/functions/pinterest-api?path=/boards",{headers:{Authorization:`Bearer ${e.token.access_token}`}});if(!u.ok){if(u.status===401){if(await n())return l();throw new Error("Session expired. Please log in again.")}throw new Error("Failed to fetch boards")}const h=await u.json();t(Ic(h.items||[]))}catch(u){const h=u instanceof Error?u.message:"Failed to fetch boards";t(Sc(h)),_.error(h)}finally{t(Ri(!1))}}};(c=e==null?void 0:e.token)!=null&&c.access_token&&l()},[t,(o=e==null?void 0:e.token)==null?void 0:o.access_token,n]),{boards:i,isLoading:r,error:a}}const Zh=t=>{var n,i;const e=[];return(n=t.title)!=null&&n.trim()||e.push("Title is required"),(i=t.description)!=null&&i.trim()||e.push("Description is required"),t.boardId||e.push("Board selection is required"),t.scheduledTime||e.push("Schedule time is required"),!t.imageUrl&&!t.imageFile&&!t.imagePreview&&e.push("Image is required"),e},em=t=>{const e=Es(new Date,5);return!Or(t,e)};function hi(){const t=dt(),{scheduledPins:e}=ye(o=>o.scheduler),n=p.useCallback(async o=>{const l=Zh(o);if(l.length>0)return l.forEach(d=>_.error(d)),!1;const c=new Date(o.scheduledTime);if(!em(c))return _.error("Scheduled time must be at least 5 minutes in the future"),!1;try{let d=o.imageUrl;if(o.imageFile?d=await new Promise((h,f)=>{const g=new FileReader;g.onloadend=()=>h(g.result),g.onerror=f,g.readAsDataURL(o.imageFile)}):o.imagePreview&&(d=o.imagePreview),!d)return _.error("Image is required"),!1;const u={id:Date.now().toString(),title:o.title,description:o.description,link:o.link,imageUrl:d,boardId:o.boardId,scheduledTime:o.scheduledTime,status:"scheduled"};return t(Pc(u)),!0}catch(d){return console.error("Schedule pin error:",d),_.error("Failed to schedule pin"),!1}},[t]),i=p.useCallback(async o=>{let l=0;for(const c of o)await n({...c,imageUrl:c.imageUrl,boardId:c.boardId})&&l++;return l},[n]),r=p.useCallback((o,l)=>{const c=e.find(d=>d.id===o);c&&t(Nc({...c,...l}))},[t,e]),a=p.useCallback(o=>{window.confirm("Are you sure you want to delete this scheduled pin?")&&(t(Ac(o)),_.success("Pin deleted successfully"))},[t]);return{scheduledPins:e,schedulePin:n,scheduleBulkPins:i,updatePin:r,deletePin:a}}function tm(){const[t,e]=p.useState(""),[n,i]=p.useState(""),[r,a]=p.useState(""),[o,l]=p.useState(""),[c,d]=p.useState(""),[u,h]=p.useState(null),[f,g]=p.useState(""),[w,E]=p.useState(!1),{boards:R,isLoading:y}=Ja(),{schedulePin:j}=hi(),{getRootProps:k,getInputProps:A,isDragActive:O}=pi({accept:{"image/*":[".jpeg",".jpg",".png",".gif"]},maxFiles:1,onDrop:b=>{const L=b[0];if(L){h(L);const N=new FileReader;N.onloadend=()=>{g(N.result)},N.readAsDataURL(L)}}}),$=async b=>{b.preventDefault(),E(!0);try{await j({title:t,description:n,link:r,imageFile:u,imagePreview:f,boardId:c,scheduledTime:o})&&(e(""),i(""),a(""),h(null),g(""),l(""),d(""),_.success("Pin scheduled successfully!"))}catch(L){console.error("Error scheduling pin:",L),_.error("Failed to schedule pin. Please try again.")}finally{E(!1)}};return s.jsxs("form",{onSubmit:$,className:"space-y-6",children:[s.jsxs("div",{...k(),className:`
        border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
        ${O?"border-red-500 bg-red-50":"border-gray-300 hover:border-red-500"}
      `,children:[s.jsx("input",{...A()}),s.jsx(Wr,{className:"mx-auto h-12 w-12 text-gray-400"}),s.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Drag & drop an image here, or click to select"})]}),f&&s.jsxs("div",{className:"relative",children:[s.jsx("img",{src:f,alt:"Preview",className:"w-full h-48 object-cover rounded-lg"}),s.jsx("button",{type:"button",onClick:()=>{h(null),g("")},className:"absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600",children:"×"})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Title"}),s.jsx("input",{type:"text",value:t,onChange:b=>e(b.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500",placeholder:"Enter pin title",required:!0})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Description"}),s.jsx("textarea",{value:n,onChange:b=>i(b.target.value),rows:3,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500",placeholder:"Enter pin description",required:!0})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Link (optional)"}),s.jsxs("div",{className:"mt-1 flex rounded-md shadow-sm",children:[s.jsx("span",{className:"inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500",children:s.jsx($c,{className:"h-4 w-4"})}),s.jsx("input",{type:"url",value:r,onChange:b=>a(b.target.value),className:"flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-red-500 focus:ring-red-500",placeholder:"https://example.com"})]})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Board"}),s.jsxs("div",{className:"mt-1 relative",children:[s.jsxs("select",{value:c,onChange:b=>d(b.target.value),className:`block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 ${y?"bg-gray-50":""}`,disabled:y,required:!0,children:[s.jsx("option",{value:"",children:"Select a board"}),R.map(b=>s.jsx("option",{value:b.id,children:b.name},b.id))]}),y&&s.jsx("div",{className:"absolute right-2 top-1/2 transform -translate-y-1/2",children:s.jsx(tt,{className:"animate-spin h-5 w-5 text-gray-400"})})]})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Schedule Time"}),s.jsxs("div",{className:"mt-1 flex rounded-md shadow-sm",children:[s.jsx("span",{className:"inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500",children:s.jsx($r,{className:"h-4 w-4"})}),s.jsx("input",{type:"datetime-local",value:o,onChange:b=>l(b.target.value),min:Ft(new Date,"yyyy-MM-dd'T'HH:mm"),className:"flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-red-500 focus:ring-red-500",required:!0})]})]})]}),s.jsx("div",{className:"flex justify-end",children:s.jsx("button",{type:"submit",disabled:w||y,className:`px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white 
            ${w||y?"bg-gray-400 cursor-not-allowed":"bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"}`,children:w?s.jsxs("span",{className:"flex items-center",children:[s.jsx(tt,{className:"animate-spin h-4 w-4 mr-2"}),"Scheduling..."]}):y?s.jsxs("span",{className:"flex items-center",children:[s.jsx(tt,{className:"animate-spin h-4 w-4 mr-2"}),"Loading Boards..."]}):"Schedule Pin"})})]})}function nm(){const[t,e]=p.useState(!1),[n,i]=p.useState(5),[r,a]=p.useState([]),[o,l]=p.useState(!1),{scheduleBulkPins:c}=hi(),{boards:d}=Ja(),{getRootProps:u,getInputProps:h,isDragActive:f}=pi({accept:{"text/csv":[".csv"]},maxFiles:1,onDrop:async y=>{const j=y[0];if(j){e(!0);try{const k=await j.text(),A=g(k);if(A.length===0)throw new Error("No valid pins found in CSV file");const O=w(A);a(O),l(!0)}catch(k){console.error("CSV processing error:",k),_.error(k instanceof Error?k.message:"Failed to process CSV file")}finally{e(!1)}}}}),g=y=>{const j=y.split(/\r?\n/).filter(b=>b.trim().length>0);if(j.length<2)throw new Error("CSV file must contain at least a header row and one data row");const k=j[0].split(",").map(b=>b.trim().toLowerCase()),O=["title","description","imageurl"].filter(b=>!k.includes(b));if(O.length>0)throw new Error(`Missing required columns: ${O.join(", ")}`);const $=[];for(let b=1;b<j.length;b++){const L=j[b].split(",").map(B=>B.trim());if(L.length!==k.length){console.warn(`Skipping row ${b+1}: incorrect number of columns`);continue}const N={};if(k.forEach((B,Oe)=>{N[B]=L[Oe]}),!N.title||!N.description||!N.imageurl){console.warn(`Skipping row ${b+1}: missing required fields`);continue}$.push({title:N.title,description:N.description,imageUrl:N.imageurl,link:N.link})}return $},w=y=>{if(!d.length)throw new Error("No boards available. Please make sure you have at least one board.");const j=[],k=new Date;k.setHours(k.getHours()+1,0,0,0);const A=Math.min(15,Math.max(1,n));Math.ceil(y.length/A);const O=Math.floor(12/A);return y.forEach(($,b)=>{const L=Math.floor(b/A),N=b%A,B=jr(k,L),Oe=9+N*O,Ke=Math.floor(Math.random()*60),De=jo(To(B,Oe),Ke),F=Math.floor(Math.random()*d.length);j.push({pin:$,scheduledTime:De.toISOString(),boardId:d[F].id})}),j},E=async()=>{e(!0);try{const y=r.map(k=>({...k.pin,boardId:k.boardId,scheduledTime:k.scheduledTime})),j=await c(y);_.success(`Successfully scheduled ${j} pins`),l(!1),a([])}catch(y){console.error("Scheduling error:",y),_.error("Failed to schedule pins")}finally{e(!1)}},R=()=>{const j=[["title","description","imageUrl","link"].join(","),"Example Pin Title,A great description of the pin,https://example.com/image.jpg,https://example.com"].join(`
`),k=new Blob([j],{type:"text/csv"}),A=window.URL.createObjectURL(k),O=document.createElement("a");O.href=A,O.download="pinterest-pins-template.csv",document.body.appendChild(O),O.click(),document.body.removeChild(O),window.URL.revokeObjectURL(A)};return s.jsxs("div",{className:"space-y-6",children:[!o&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:s.jsxs("div",{className:"flex",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx(Rc,{className:"h-5 w-5 text-blue-400"})}),s.jsxs("div",{className:"ml-3",children:[s.jsx("h3",{className:"text-sm font-medium text-blue-800",children:"CSV Format Requirements"}),s.jsxs("div",{className:"mt-2 text-sm text-blue-700",children:[s.jsx("p",{children:"Your CSV file must include the following columns:"}),s.jsxs("ul",{className:"list-disc list-inside mt-1",children:[s.jsx("li",{children:"title (required)"}),s.jsx("li",{children:"description (required)"}),s.jsx("li",{children:"imageUrl (required) - must be a valid image URL"}),s.jsx("li",{children:"link (optional)"})]}),s.jsx("p",{className:"mt-2 italic",children:"Note: Column names are case-insensitive"})]})]})]})}),s.jsxs("div",{className:"bg-white p-4 rounded-lg border border-gray-200",children:[s.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Pins per day (max 15)"}),s.jsx("div",{className:"mt-1",children:s.jsx("input",{type:"number",min:"1",max:"15",value:n,onChange:y=>i(Math.min(15,Math.max(1,parseInt(y.target.value)||1))),className:"block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"})})]}),s.jsx("div",{className:"flex justify-end",children:s.jsxs("button",{type:"button",onClick:R,className:"flex items-center px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-md hover:bg-blue-100",children:[s.jsx(Uc,{className:"h-4 w-4 mr-2"}),"Download Template"]})}),s.jsxs("div",{...u(),className:`
              border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
              ${f?"border-red-500 bg-red-50":"border-gray-300 hover:border-red-500"}
              ${t?"cursor-not-allowed opacity-50":""}
            `,children:[s.jsx("input",{...h(),disabled:t}),t?s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsx(tt,{className:"h-12 w-12 text-red-500 animate-spin"}),s.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Processing CSV file..."})]}):s.jsxs(s.Fragment,{children:[s.jsx(Br,{className:"mx-auto h-12 w-12 text-gray-400"}),s.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Drag & drop your CSV file here, or click to select"})]})]})]}),o&&r.length>0&&s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("h3",{className:"text-lg font-medium",children:"Schedule Preview"}),s.jsxs("div",{className:"space-x-2",children:[s.jsx("button",{onClick:()=>l(!1),className:"px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200",children:"Back"}),s.jsx("button",{onClick:E,disabled:t,className:"px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 disabled:bg-gray-400",children:t?s.jsxs("span",{className:"flex items-center",children:[s.jsx(tt,{className:"animate-spin h-4 w-4 mr-2"}),"Scheduling..."]}):"Schedule All Pins"})]})]}),s.jsx("div",{className:"bg-white rounded-lg border border-gray-200 overflow-hidden",children:s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[s.jsx("thead",{className:"bg-gray-50",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Pin Details"}),s.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Board"}),s.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Scheduled Time"})]})}),s.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:r.map((y,j)=>{const k=d.find(A=>A.id===y.boardId);return s.jsxs("tr",{children:[s.jsx("td",{className:"px-6 py-4",children:s.jsxs("div",{className:"flex items-center",children:[s.jsx("img",{src:y.pin.imageUrl,alt:y.pin.title,className:"h-10 w-10 rounded-lg object-cover",onError:A=>{A.target.src="https://via.placeholder.com/100"}}),s.jsxs("div",{className:"ml-4",children:[s.jsx("div",{className:"text-sm font-medium text-gray-900",children:y.pin.title}),s.jsxs("div",{className:"text-sm text-gray-500",children:[y.pin.description.substring(0,50),"..."]})]})]})}),s.jsx("td",{className:"px-6 py-4",children:s.jsx("div",{className:"text-sm text-gray-900",children:k==null?void 0:k.name})}),s.jsx("td",{className:"px-6 py-4",children:s.jsxs("div",{className:"flex items-center text-sm text-gray-900",children:[s.jsx($r,{className:"h-4 w-4 mr-2"}),Ft(new Date(y.scheduledTime),"MMM d, yyyy"),s.jsx(rt,{className:"h-4 w-4 mx-2"}),Ft(new Date(y.scheduledTime),"h:mm a")]})})]},j)})})]})})})]})]})}function im(){var d;const[t,e]=p.useState(!1),n=dt(),{handleAuth:i}=sn(),{userData:r,pinterestAccounts:a}=ye(u=>u.auth),o=async()=>{try{await i(),e(!1)}catch(u){console.error("Failed to add account:",u),_.error("Failed to add Pinterest account")}},l=u=>{window.confirm("Are you sure you want to remove this account?")&&(n(Yn(u)),_.success("Account removed successfully"),e(!1))},c=u=>{n(zt(u)),e(!1),_.success(`Switched to ${u.user.username}`)};return s.jsx("div",{className:"mb-6",children:s.jsxs("div",{className:"relative",children:[s.jsxs("button",{onClick:()=>e(!t),className:"w-full flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50",children:[s.jsxs("div",{className:"flex items-center",children:[s.jsx(An,{className:"w-5 h-5 text-red-500 mr-2"}),s.jsx("span",{className:"text-sm font-medium text-gray-700",children:((d=r==null?void 0:r.user)==null?void 0:d.username)||"Select Account"})]}),s.jsx(Fc,{className:"w-4 h-4 text-gray-500"})]}),t&&s.jsx("div",{className:"absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg",children:s.jsxs("div",{className:"py-1",children:[a.map(u=>s.jsxs("div",{className:"flex items-center justify-between px-4 py-2 hover:bg-gray-50",children:[s.jsxs("button",{onClick:()=>c(u),className:"flex items-center flex-grow",children:[s.jsx(An,{className:"w-4 h-4 text-gray-500 mr-2"}),s.jsx("span",{className:"text-sm text-gray-700",children:u.user.username})]}),a.length>1&&s.jsx("button",{onClick:()=>l(u.user.username),className:"p-1 text-gray-400 hover:text-red-500",children:s.jsx(Xn,{className:"w-4 h-4"})})]},u.user.username)),s.jsxs("button",{onClick:o,className:"flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50",children:[s.jsx(Hr,{className:"w-4 h-4 mr-2"}),"Add Pinterest Account"]})]})})]})})}function rm(){const[t,e]=p.useState("single");return s.jsxs("div",{className:"max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6",children:[s.jsx(im,{}),s.jsx("div",{className:"border-b border-gray-200 mb-6",children:s.jsxs("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:[s.jsx("button",{onClick:()=>e("single"),className:`
              py-4 px-1 border-b-2 font-medium text-sm
              ${t==="single"?"border-red-500 text-red-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}
            `,children:s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx(Wr,{className:"w-5 h-5"}),s.jsx("span",{children:"Single Pin"})]})}),s.jsx("button",{onClick:()=>e("bulk"),className:`
              py-4 px-1 border-b-2 font-medium text-sm
              ${t==="bulk"?"border-red-500 text-red-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}
            `,children:s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx(Br,{className:"w-5 h-5"}),s.jsx("span",{children:"Bulk Upload"})]})})]})}),t==="single"?s.jsx(tm,{}):s.jsx(nm,{})]})}function am(){return s.jsx(an,{children:s.jsx(rm,{})})}function sm(){const t=dt(),{handleAuth:e}=sn(),{pinterestAccounts:n}=ye(a=>a.auth),i=async()=>{try{await e()}catch(a){console.error("Failed to add account:",a),_.error("Failed to add Pinterest account")}},r=a=>{window.confirm("Are you sure you want to remove this account?")&&(t(Yn(a)),_.success("Account removed successfully"))};return s.jsx(an,{children:s.jsx("div",{className:"max-w-4xl mx-auto",children:s.jsxs("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden",children:[s.jsxs("div",{className:"p-6 border-b border-gray-200",children:[s.jsx("h2",{className:"text-xl font-semibold",children:"Pinterest Accounts"}),s.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Manage your connected Pinterest accounts"})]}),s.jsx("div",{className:"divide-y divide-gray-200",children:n.map(a=>s.jsxs("div",{className:"p-6 flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center space-x-4",children:[s.jsx(An,{className:"h-10 w-10 text-red-500"}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-sm font-medium text-gray-900",children:a.user.username}),s.jsx("p",{className:"text-sm text-gray-500",children:"Connected account"})]})]}),n.length>1&&s.jsx("button",{onClick:()=>r(a.user.username),className:"p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50",children:s.jsx(Xn,{className:"h-5 w-5"})})]},a.user.username))}),s.jsx("div",{className:"p-6 bg-gray-50",children:s.jsxs("button",{onClick:i,className:"flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700",children:[s.jsx(Hr,{className:"h-5 w-5 mr-2"}),"Add Another Pinterest Account"]})})]})})})}function om(){const{userData:t,refreshToken:e}=sn(),{scheduledPins:n}=ye(c=>c.scheduler),{items:i}=ye(c=>c.boards),{updatePin:r,deletePin:a}=hi(),o=async c=>{var d;if(!((d=t==null?void 0:t.token)!=null&&d.access_token)){_.error("Authentication token not found. Please log in again.");return}r(c.id,{status:"publishing"});try{let u=c.imageUrl;u.startsWith("data:")&&(u="https://picsum.photos/800/600");const h={title:c.title,description:c.description,board_id:c.boardId,media_source:{source_type:"image_url",url:u},...c.link&&{link:c.link}},f=await fetch("/.netlify/functions/pinterest-api?path=/pins",{method:"POST",headers:{Authorization:`Bearer ${t.token.access_token}`,"Content-Type":"application/json"},body:JSON.stringify(h)}),g=await f.json();if(!f.ok){if(f.status===401){if(await e())return o(c);throw new Error("Session expired. Please log in again.")}throw new Error(g.message||"Failed to publish pin")}r(c.id,{status:"published",publishedAt:new Date().toISOString(),pinterestId:g.id}),_.success("Pin published successfully to Pinterest")}catch(u){console.error("Publish error:",u),r(c.id,{status:"failed",error:u instanceof Error?u.message:"Failed to publish pin"}),_.error(u instanceof Error?u.message:"Failed to publish pin")}},l=c=>{const d=i.find(u=>u.id===c);return(d==null?void 0:d.name)||"Unknown Board"};return n.length===0?s.jsxs("div",{className:"max-w-4xl mx-auto text-center py-12",children:[s.jsx(rt,{className:"mx-auto h-12 w-12 text-gray-400"}),s.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No scheduled pins"}),s.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Get started by creating a new scheduled pin."})]}):s.jsx("div",{className:"max-w-4xl mx-auto",children:s.jsxs("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden",children:[s.jsx("div",{className:"p-6 border-b border-gray-200",children:s.jsx("h2",{className:"text-xl font-semibold",children:"Scheduled Pins"})}),s.jsx("div",{className:"divide-y divide-gray-200",children:n.map(c=>s.jsxs("div",{className:"p-6 flex items-start space-x-6",children:[s.jsx("div",{className:"flex-shrink-0 w-24 h-24",children:s.jsx("img",{src:c.imageUrl,alt:c.title,className:"w-full h-full object-cover rounded-lg"})}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("h3",{className:"text-base font-medium text-gray-900 truncate",children:c.title}),s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx("button",{onClick:()=>o(c),disabled:c.status==="published"||c.status==="publishing",className:`p-2 rounded-lg text-sm font-medium ${c.status==="published"?"bg-gray-100 text-gray-400 cursor-not-allowed":c.status==="publishing"?"bg-yellow-50 text-yellow-600 cursor-wait":"bg-green-50 text-green-600 hover:bg-green-100"}`,title:c.status==="published"?"Already published":c.status==="publishing"?"Publishing...":"Publish now",children:s.jsx(Vc,{className:"h-4 w-4"})}),s.jsx("button",{onClick:()=>a(c.id),className:"p-2 text-red-600 hover:bg-red-50 rounded-lg",title:"Delete pin",children:s.jsx(Xn,{className:"h-4 w-4"})})]})]}),s.jsx("div",{className:"mt-1",children:s.jsx("p",{className:"text-sm text-gray-500 line-clamp-2",children:c.description})}),s.jsxs("div",{className:"mt-2 flex items-center space-x-4 text-sm text-gray-500",children:[s.jsxs("span",{className:"flex items-center",children:[s.jsx(rt,{className:"h-4 w-4 mr-1"}),Ft(new Date(c.scheduledTime),"MMM d, yyyy h:mm a")]}),s.jsx("span",{children:"•"}),s.jsx("span",{children:l(c.boardId)}),s.jsx("span",{children:"•"}),s.jsx("span",{className:`capitalize ${c.status==="published"?"text-green-600":c.status==="publishing"?"text-yellow-600":c.status==="failed"?"text-red-600":"text-blue-600"}`,children:c.status})]}),c.link&&s.jsx("div",{className:"mt-2",children:s.jsx("a",{href:c.link,target:"_blank",rel:"noopener noreferrer",className:"text-sm text-red-600 hover:text-red-700",children:c.link})}),c.error&&s.jsxs("div",{className:"mt-2 text-sm text-red-600",children:["Error: ",c.error]})]})]},c.id))})]})})}function cm(){return s.jsx(an,{children:s.jsx(om,{})})}function lm(){var o;const{userData:t}=ye(l=>l.auth),[e,n]=p.useState({pinScheduled:!0,pinPublished:!0,pinFailed:!0}),[i,r]=p.useState(Intl.DateTimeFormat().resolvedOptions().timeZone),a=async()=>{var l;try{const c=(l=t==null?void 0:t.token)==null?void 0:l.refresh_token;if(!c)throw new Error("No refresh token available");const d=await fetch(`/api/pinterest-auth?path=/token&refresh_token=${c}`),u=await d.json();if(d.ok&&u.token){const h={...t,token:{...t.token,...u.token}};localStorage.setItem("pinterest_auth",JSON.stringify(h)),_.success("Token refreshed successfully")}else throw new Error(u.error||"Failed to refresh token")}catch(c){console.error("Token refresh error:",c),_.error("Failed to refresh token. Please try logging in again.")}};return s.jsxs("div",{className:"max-w-2xl mx-auto space-y-6",children:[s.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[s.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Account Settings"}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"flex items-center justify-between p-4 bg-gray-50 rounded-lg",children:[s.jsxs("div",{className:"flex items-center space-x-3",children:[s.jsx(Kc,{className:"w-5 h-5 text-gray-500"}),s.jsxs("div",{children:[s.jsx("p",{className:"font-medium",children:"Pinterest Account"}),s.jsx("p",{className:"text-sm text-gray-500",children:(o=t==null?void 0:t.user)==null?void 0:o.username})]})]}),s.jsxs("button",{onClick:a,className:"flex items-center space-x-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg",children:[s.jsx(qc,{className:"w-4 h-4"}),s.jsx("span",{children:"Refresh Token"})]})]}),s.jsxs("div",{className:"p-4 border rounded-lg",children:[s.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[s.jsx(Mc,{className:"w-5 h-5 text-gray-500"}),s.jsx("h3",{className:"font-medium",children:"Notifications"})]}),s.jsx("div",{className:"space-y-3",children:Object.entries(e).map(([l,c])=>s.jsxs("label",{className:"flex items-center justify-between",children:[s.jsxs("span",{className:"text-sm text-gray-600",children:[l==="pinScheduled"&&"When pin is scheduled",l==="pinPublished"&&"When pin is published",l==="pinFailed"&&"When pin fails to publish"]}),s.jsx("input",{type:"checkbox",checked:c,onChange:d=>n(u=>({...u,[l]:d.target.checked})),className:"rounded border-gray-300 text-red-600 focus:ring-red-500"})]},l))})]}),s.jsxs("div",{className:"p-4 border rounded-lg",children:[s.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[s.jsx(rt,{className:"w-5 h-5 text-gray-500"}),s.jsx("h3",{className:"font-medium",children:"Time Settings"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm text-gray-600 mb-2",children:"Timezone"}),s.jsx("select",{value:i,onChange:l=>r(l.target.value),className:"w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500",children:Intl.supportedValuesOf("timeZone").map(l=>s.jsx("option",{value:l,children:l.replace(/_/g," ")},l))})]})]})]})]}),s.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[s.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Danger Zone"}),s.jsxs("div",{className:"border border-red-200 rounded-lg p-4",children:[s.jsx("h3",{className:"text-sm font-medium text-red-600 mb-2",children:"Disconnect Pinterest Account"}),s.jsx("p",{className:"text-sm text-gray-500 mb-4",children:"This will remove access to your Pinterest account and delete all scheduled pins."}),s.jsx("button",{onClick:()=>{window.confirm("Are you sure you want to disconnect your Pinterest account?")&&(localStorage.removeItem("pinterest_auth"),window.location.href="/")},className:"px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-sm font-medium",children:"Disconnect Account"})]})]})]})}function dm(){return s.jsx(an,{children:s.jsx(lm,{})})}function jt({children:t}){const{user:e,loading:n}=Ge(),i=Er();return n?s.jsx("div",{className:"min-h-screen flex items-center justify-center",children:s.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"})}):e?s.jsx(s.Fragment,{children:t}):s.jsx(Xt,{to:"/auth",state:{from:i},replace:!0})}function _r({children:t}){const{user:e,loading:n}=Ge();return n?s.jsx("div",{className:"min-h-screen flex items-center justify-center",children:s.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"})}):e?s.jsx(Xt,{to:"/dashboard",replace:!0}):s.jsx(s.Fragment,{children:t})}function um(){return p.useEffect(()=>{yc()},[]),s.jsxs(s.Fragment,{children:[s.jsx(xc,{position:"top-center",toastOptions:{duration:5e3,success:{style:{background:"#10B981",color:"white"}},error:{style:{background:"#EF4444",color:"white"},duration:6e3}}}),s.jsxs(ls,{children:[s.jsx(Ee,{path:"/",element:s.jsx(_r,{children:s.jsx(Jp,{})})}),s.jsx(Ee,{path:"/auth",element:s.jsx(_r,{children:s.jsx(Xp,{})})}),s.jsx(Ee,{path:"/dashboard",element:s.jsx(jt,{children:s.jsx(am,{})})}),s.jsx(Ee,{path:"/dashboard/accounts",element:s.jsx(jt,{children:s.jsx(sm,{})})}),s.jsx(Ee,{path:"/dashboard/scheduled",element:s.jsx(jt,{children:s.jsx(cm,{})})}),s.jsx(Ee,{path:"/dashboard/settings",element:s.jsx(jt,{children:s.jsx(dm,{})})}),s.jsx(Ee,{path:"*",element:s.jsx(Xt,{to:"/",replace:!0})})]})]})}const Xa=document.getElementById("root");if(!Xa)throw new Error("Failed to find the root element");const pm=Tr(Xa);pm.render(s.jsx(p.StrictMode,{children:s.jsx(ds,{store:Ct,children:s.jsx(us,{children:s.jsx(um,{})})})}));
//# sourceMappingURL=index-8ZwFbkmp.js.map
