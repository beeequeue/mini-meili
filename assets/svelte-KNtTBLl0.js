var Ye=Array.isArray,Ke=Array.from,Gr=Object.defineProperty,re=Object.getOwnPropertyDescriptor,Jr=Object.getOwnPropertyDescriptors,Xr=Object.prototype,Zr=Array.prototype,cr=Object.getPrototypeOf;function Qr(e){return typeof e=="function"}const C=()=>{};function vr(e){for(var r=0;r<e.length;r++)e[r]()}const D=2,_r=4,ve=8,ke=16,R=32,_e=64,Fe=128,j=256,Ee=512,N=1024,K=2048,de=4096,F=8192,ie=16384,dr=32768,Ae=65536,en=1<<19,pr=1<<20,we=Symbol("$state"),rn=Symbol("legacy props"),nn=Symbol("");function hr(e){return e===this.v}function yr(e,r){return e!=e?r==r:e!==r||e!==null&&typeof e=="object"||typeof e=="function"}function tn(e){return!yr(e,this.v)}function un(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function sn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ln(e){throw new Error("https://svelte.dev/e/effect_orphan")}function an(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function fn(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function on(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function cn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function vn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function _n(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let wr=!1;function I(e){return{f:0,v:e,reactions:null,equals:hr,version:0}}function xt(e){return dn(I(e))}function We(e,r=!1){const n=I(e);return r||(n.equals=tn),n}function dn(e){return E!==null&&E.f&D&&(q===null?Rn([e]):q.push(e)),e}function P(e,r){return E!==null&&Pn()&&E.f&(D|ke)&&(q===null||!q.includes(e))&&_n(),qe(e,r)}function qe(e,r){return e.equals(r)||(e.v=r,e.version=qr(),br(e,K),b!==null&&b.f&N&&!(b.f&R)&&(T!==null&&T.includes(e)?($(b,K),Le(b)):Y===null?Mn([e]):Y.push(e))),r}function br(e,r){var n=e.reactions;if(n!==null)for(var t=n.length,i=0;i<t;i++){var u=n[i],a=u.f;a&K||($(u,r),a&(N|j)&&(a&D?br(u,de):Le(u)))}}const je=1,ze=2,gr=4,pn=8,hn=16,yn=8,wn=4,bn=1,gn=2,A=Symbol();let Er=!1;function Q(e,r=null,n){if(typeof e!="object"||e===null||we in e)return e;const t=cr(e);if(t!==Xr&&t!==Zr)return e;var i=new Map,u=Ye(e),a=I(0);u&&i.set("length",I(e.length));var v;return new Proxy(e,{defineProperty(o,s,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&on();var c=i.get(s);return c===void 0?(c=I(l.value),i.set(s,c)):P(c,Q(l.value,v)),!0},deleteProperty(o,s){var l=i.get(s);if(l===void 0)s in o&&i.set(s,I(A));else{if(u&&typeof s=="string"){var c=i.get("length"),f=Number(s);Number.isInteger(f)&&f<c.v&&P(c,f)}P(l,A),rr(a)}return!0},get(o,s,l){if(s===we)return e;var c=i.get(s),f=s in o;if(c===void 0&&(!f||re(o,s)?.writable)&&(c=I(Q(f?o[s]:A,v)),i.set(s,c)),c!==void 0){var _=H(c);return _===A?void 0:_}return Reflect.get(o,s,l)},getOwnPropertyDescriptor(o,s){var l=Reflect.getOwnPropertyDescriptor(o,s);if(l&&"value"in l){var c=i.get(s);c&&(l.value=H(c))}else if(l===void 0){var f=i.get(s),_=f?.v;if(f!==void 0&&_!==A)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return l},has(o,s){if(s===we)return!0;var l=i.get(s),c=l!==void 0&&l.v!==A||Reflect.has(o,s);if(l!==void 0||b!==null&&(!c||re(o,s)?.writable)){l===void 0&&(l=I(c?Q(o[s],v):A),i.set(s,l));var f=H(l);if(f===A)return!1}return c},set(o,s,l,c){var f=i.get(s),_=s in o;if(u&&s==="length")for(var d=l;d<f.v;d+=1){var y=i.get(d+"");y!==void 0?P(y,A):d in o&&(y=I(A),i.set(d+"",y))}f===void 0?(!_||re(o,s)?.writable)&&(f=I(void 0),P(f,Q(l,v)),i.set(s,f)):(_=f.v!==A,P(f,Q(l,v)));var h=Reflect.getOwnPropertyDescriptor(o,s);if(h?.set&&h.set.call(c,l),!_){if(u&&typeof s=="string"){var w=i.get("length"),m=Number(s);Number.isInteger(m)&&m>=w.v&&P(w,m+1)}rr(a)}return!0},ownKeys(o){H(a);var s=Reflect.ownKeys(o).filter(f=>{var _=i.get(f);return _===void 0||_.v!==A});for(var[l,c]of i)c.v!==A&&!(l in o)&&s.push(l);return s},setPrototypeOf(){cn()}})}function rr(e,r=1){P(e,e.v+r)}var nr,mr,xr;function En(){if(nr===void 0){nr=window;var e=Element.prototype,r=Node.prototype;mr=re(r,"firstChild").get,xr=re(r,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function Tr(e=""){return document.createTextNode(e)}function me(e){return mr.call(e)}function Ne(e){return xr.call(e)}function Tt(e,r){return me(e)}function kt(e,r){{var n=me(e);return n instanceof Comment&&n.data===""?Ne(n):n}}function At(e,r=1,n=!1){let t=e;for(;r--;)t=Ne(t);return t}function mn(e){e.textContent=""}function xn(e){var r=D|K;b===null?r|=j:b.f|=pr;var n=E!==null&&E.f&D?E:null;const t={children:null,ctx:k,deps:null,equals:hr,f:r,fn:e,reactions:null,v:null,version:0,parent:n??b};return n!==null&&(n.children??=[]).push(t),t}function kr(e){var r=e.children;if(r!==null){e.children=null;for(var n=0;n<r.length;n+=1){var t=r[n];t.f&D?Ge(t):z(t)}}}function Tn(e){for(var r=e.parent;r!==null;){if(!(r.f&D))return r;r=r.parent}return null}function Ar(e){var r,n=b;L(Tn(e));try{kr(e),r=Br(e)}finally{L(n)}return r}function Nr(e){var r=Ar(e),n=(ee||e.f&j)&&e.deps!==null?de:N;$(e,n),e.equals(r)||(e.v=r,e.version=qr())}function Ge(e){kr(e),ce(e,0),$(e,ie),e.v=e.children=e.deps=e.ctx=e.reactions=null}function kn(e){b===null&&E===null&&ln(),E!==null&&E.f&j&&sn(),Ze&&un()}function An(e,r){var n=r.last;n===null?r.last=r.first=e:(n.next=e,e.prev=n,r.last=e)}function ue(e,r,n,t=!0){var i=(e&_e)!==0,u=b,a={ctx:k,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|K,first:null,fn:r,last:null,next:null,parent:i?null:u,prev:null,teardown:null,transitions:null,version:0};if(n){var v=ne;try{tr(!0),Ie(a),a.f|=dr}catch(l){throw z(a),l}finally{tr(v)}}else r!==null&&Le(a);var o=n&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&pr)===0;if(!o&&!i&&t&&(u!==null&&An(a,u),E!==null&&E.f&D)){var s=E;(s.children??=[]).push(a)}return a}function Nn(e){const r=ue(ve,null,!1);return $(r,N),r.teardown=e,r}function Sn(e){kn();var r=b!==null&&(b.f&R)!==0&&k!==null&&!k.m;if(r){var n=k;(n.e??=[]).push({fn:e,effect:b,reaction:E})}else{var t=Se(e);return t}}function On(e){const r=ue(_e,e,!0);return()=>{z(r)}}function Se(e){return ue(_r,e,!1)}function Cn(e){return ue(ve,e,!0)}function Nt(e){return Je(e)}function Je(e,r=0){return ue(ve|ke|r,e,!0)}function ae(e,r=!0){return ue(ve|R,e,!0,r)}function Sr(e){var r=e.teardown;if(r!==null){const n=Ze,t=E;ir(!0),B(null);try{r.call(null)}finally{ir(n),B(t)}}}function Or(e){var r=e.deriveds;if(r!==null){e.deriveds=null;for(var n=0;n<r.length;n+=1)Ge(r[n])}}function Cr(e,r=!1){var n=e.first;for(e.first=e.last=null;n!==null;){var t=n.next;z(n,r),n=t}}function In(e){for(var r=e.first;r!==null;){var n=r.next;r.f&R||z(r),r=n}}function z(e,r=!0){var n=!1;if((r||e.f&en)&&e.nodes_start!==null){for(var t=e.nodes_start,i=e.nodes_end;t!==null;){var u=t===i?null:Ne(t);t.remove(),t=u}n=!0}Cr(e,r&&!n),Or(e),ce(e,0),$(e,ie);var a=e.transitions;if(a!==null)for(const o of a)o.stop();Sr(e);var v=e.parent;v!==null&&v.first!==null&&Ir(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Ir(e){var r=e.parent,n=e.prev,t=e.next;n!==null&&(n.next=t),t!==null&&(t.prev=n),r!==null&&(r.first===e&&(r.first=t),r.last===e&&(r.last=n))}function Be(e,r){var n=[];Xe(e,n,!0),Lr(n,()=>{z(e),r&&r()})}function Lr(e,r){var n=e.length;if(n>0){var t=()=>--n||r();for(var i of e)i.out(t)}else r()}function Xe(e,r,n){if(!(e.f&F)){if(e.f^=F,e.transitions!==null)for(const a of e.transitions)(a.is_global||n)&&r.push(a);for(var t=e.first;t!==null;){var i=t.next,u=(t.f&Ae)!==0||(t.f&R)!==0;Xe(t,r,u?n:!1),t=i}}}function xe(e){Dr(e,!0)}function Dr(e,r){if(e.f&F){pe(e)&&Ie(e),e.f^=F;for(var n=e.first;n!==null;){var t=n.next,i=(n.f&Ae)!==0||(n.f&R)!==0;Dr(n,i?r:!1),n=t}if(e.transitions!==null)for(const u of e.transitions)(u.is_global||r)&&u.in()}}let Te=!1,$e=[];function Rr(){Te=!1;const e=$e.slice();$e=[],vr(e)}function Oe(e){Te||(Te=!0,queueMicrotask(Rr)),$e.push(e)}function Ln(){Te&&Rr()}function Mr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Pr=0,Dn=1;let be=!1,ge=Pr,fe=!1,oe=null,ne=!1,Ze=!1;function tr(e){ne=e}function ir(e){Ze=e}let W=[],te=0;let E=null;function B(e){E=e}let b=null;function L(e){b=e}let q=null;function Rn(e){q=e}let T=null,O=0,Y=null;function Mn(e){Y=e}let Fr=0,ee=!1,k=null;function qr(){return++Fr}function Pn(){return!wr}function pe(e){var r=e.f;if(r&K)return!0;if(r&de){var n=e.deps,t=(r&j)!==0;if(n!==null){var i;if(r&Ee){for(i=0;i<n.length;i++)(n[i].reactions??=[]).push(e);e.f^=Ee}for(i=0;i<n.length;i++){var u=n[i];if(pe(u)&&Nr(u),t&&b!==null&&!ee&&!u?.reactions?.includes(e)&&(u.reactions??=[]).push(e),u.version>e.version)return!0}}t||$(e,N)}return!1}function Fn(e,r){for(var n=r;n!==null;){if(n.f&Fe)try{n.fn(e);return}catch{n.f^=Fe}n=n.parent}throw be=!1,e}function qn(e){return(e.f&ie)===0&&(e.parent===null||(e.parent.f&Fe)===0)}function Ce(e,r,n,t){if(be){if(n===null&&(be=!1),qn(r))throw e;return}n!==null&&(be=!0);{Fn(e,r);return}}function Br(e){var r=T,n=O,t=Y,i=E,u=ee,a=q,v=k,o=e.f;T=null,O=0,Y=null,E=o&(R|_e)?null:e,ee=!ne&&(o&j)!==0,q=null,k=e.ctx;try{var s=(0,e.fn)(),l=e.deps;if(T!==null){var c;if(ce(e,O),l!==null&&O>0)for(l.length=O+T.length,c=0;c<T.length;c++)l[O+c]=T[c];else e.deps=l=T;if(!ee)for(c=O;c<l.length;c++)(l[c].reactions??=[]).push(e)}else l!==null&&O<l.length&&(ce(e,O),l.length=O);return s}finally{T=r,O=n,Y=t,E=i,ee=u,q=a,k=v}}function Bn(e,r){let n=r.reactions;if(n!==null){var t=n.indexOf(e);if(t!==-1){var i=n.length-1;i===0?n=r.reactions=null:(n[t]=n[i],n.pop())}}n===null&&r.f&D&&(T===null||!T.includes(r))&&($(r,de),r.f&(j|Ee)||(r.f^=Ee),ce(r,0))}function ce(e,r){var n=e.deps;if(n!==null)for(var t=r;t<n.length;t++)Bn(e,n[t])}function Ie(e){var r=e.f;if(!(r&ie)){$(e,N);var n=b,t=k;b=e;try{r&ke?In(e):Cr(e),Or(e),Sr(e);var i=Br(e);e.teardown=typeof i=="function"?i:null,e.version=Fr}catch(u){Ce(u,e,n,t||e.ctx)}finally{b=n}}}function $r(){if(te>1e3){te=0;try{an()}catch(e){if(oe!==null)Ce(e,oe,null);else throw e}}te++}function Vr(e){var r=e.length;if(r!==0){$r();var n=ne;ne=!0;try{for(var t=0;t<r;t++){var i=e[t];i.f&N||(i.f^=N);var u=[];Hr(i,u),$n(u)}}finally{ne=n}}}function $n(e){var r=e.length;if(r!==0)for(var n=0;n<r;n++){var t=e[n];if(!(t.f&(ie|F)))try{pe(t)&&(Ie(t),t.deps===null&&t.first===null&&t.nodes_start===null&&(t.teardown===null?Ir(t):t.fn=null))}catch(i){Ce(i,t,null,t.ctx)}}}function Vn(){if(fe=!1,te>1001)return;const e=W;W=[],Vr(e),fe||(te=0,oe=null)}function Le(e){ge===Pr&&(fe||(fe=!0,queueMicrotask(Vn))),oe=e;for(var r=e;r.parent!==null;){r=r.parent;var n=r.f;if(n&(_e|R)){if(!(n&N))return;r.f^=N}}W.push(r)}function Hr(e,r){var n=e.first,t=[];e:for(;n!==null;){var i=n.f,u=(i&R)!==0,a=u&&(i&N)!==0,v=n.next;if(!a&&!(i&F))if(i&ve){if(u)n.f^=N;else try{pe(n)&&Ie(n)}catch(c){Ce(c,n,null,n.ctx)}var o=n.first;if(o!==null){n=o;continue}}else i&_r&&t.push(n);if(v===null){let c=n.parent;for(;c!==null;){if(e===c)break e;var s=c.next;if(s!==null){n=s;continue e}c=c.parent}}n=v}for(var l=0;l<t.length;l++)o=t[l],r.push(o),Hr(o,r)}function Ur(e){var r=ge,n=W;try{$r();const i=[];ge=Dn,W=i,fe=!1,Vr(n);var t=e?.();return Ln(),(W.length>0||i.length>0)&&Ur(),te=0,oe=null,t}finally{ge=r,W=n}}async function St(){await Promise.resolve(),Ur()}function H(e){var r=e.f,n=(r&D)!==0;if(n&&r&ie){var t=Ar(e);return Ge(e),t}if(E!==null){q!==null&&q.includes(e)&&vn();var i=E.deps;T===null&&i!==null&&i[O]===e?O++:T===null?T=[e]:T.push(e),Y!==null&&b!==null&&b.f&N&&!(b.f&R)&&Y.includes(e)&&($(b,K),Le(b))}else if(n&&e.deps===null)for(var u=e,a=u.parent,v=u;a!==null;)if(a.f&D){var o=a;v=o,a=o.parent}else{var s=a;s.deriveds?.includes(v)||(s.deriveds??=[]).push(v);break}return n&&(u=e,pe(u)&&Nr(u)),e.v}function G(e){const r=E;try{return E=null,e()}finally{E=r}}const Hn=~(K|de|N);function $(e,r){e.f=e.f&Hn|r}function Un(e,r=!1,n){k={p:k,c:null,e:null,m:!1,s:e,x:null,l:null}}function Yn(e){const r=k;if(r!==null){const a=r.e;if(a!==null){var n=b,t=E;r.e=null;try{for(var i=0;i<a.length;i++){var u=a[i];L(u.effect),B(u.reaction),Se(u.fn)}}finally{L(n),B(t)}}k=r.p,r.m=!0}return{}}function Kn(e,r){if(r){const n=document.body;e.autofocus=!0,Oe(()=>{document.activeElement===n&&e.focus()})}}let ur=!1;function Wn(){ur||(ur=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const r of e.target.elements)r.__on_r?.()})},{capture:!0}))}function Yr(e){var r=E,n=b;B(null),L(null);try{return e()}finally{B(r),L(n)}}function jn(e,r,n,t=n){e.addEventListener(r,()=>Yr(n));const i=e.__on_r;i?e.__on_r=()=>{i(),t(!0)}:e.__on_r=()=>t(!0),Wn()}const Kr=new Set,Ve=new Set;function zn(e,r,n,t){function i(u){if(t.capture||le.call(r,u),!u.cancelBubble)return Yr(()=>n.call(this,u))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Oe(()=>{r.addEventListener(e,i,t)}):r.addEventListener(e,i,t),i}function Gn(e){for(var r=0;r<e.length;r++)Kr.add(e[r]);for(var n of Ve)n(e)}function le(e){var r=this,n=r.ownerDocument,t=e.type,i=e.composedPath?.()||[],u=i[0]||e.target,a=0,v=e.__root;if(v){var o=i.indexOf(v);if(o!==-1&&(r===document||r===window)){e.__root=r;return}var s=i.indexOf(r);if(s===-1)return;o<=s&&(a=o)}if(u=i[a]||e.target,u!==r){Gr(e,"currentTarget",{configurable:!0,get(){return u||n}});var l=E,c=b;B(null),L(null);try{for(var f,_=[];u!==null;){var d=u.assignedSlot||u.parentNode||u.host||null;try{var y=u["__"+t];if(y!==void 0&&!u.disabled)if(Ye(y)){var[h,...w]=y;h.apply(u,[e,...w])}else y.call(u,e)}catch(m){f?_.push(m):f=m}if(e.cancelBubble||d===r||d===null)break;u=d}if(f){for(let m of _)queueMicrotask(()=>{throw m});throw f}}finally{e.__root=r,delete e.currentTarget,B(l),L(c)}}}function Jn(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function sr(e,r){var n=b;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=r)}function Ot(e,r){var n=(r&bn)!==0,t=(r&gn)!==0,i,u=!e.startsWith("<!>");return()=>{i===void 0&&(i=Jn(u?e:"<!>"+e),n||(i=me(i)));var a=t?document.importNode(i,!0):i.cloneNode(!0);if(n){var v=me(a),o=a.lastChild;sr(v,o)}else sr(a,a);return a}}function Ct(e,r){e!==null&&e.before(r)}function Xn(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Zn=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Qn(e){return Zn.includes(e)}const et={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function rt(e){return e=e.toLowerCase(),et[e]??e}const nt=["touchstart","touchmove"];function tt(e){return nt.includes(e)}let He=!0;function It(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function Lt(e,r){return it(e,r)}const X=new Map;function it(e,{target:r,anchor:n,props:t={},events:i,context:u,intro:a=!0}){En();var v=new Set,o=c=>{for(var f=0;f<c.length;f++){var _=c[f];if(!v.has(_)){v.add(_);var d=tt(_);r.addEventListener(_,le,{passive:d});var y=X.get(_);y===void 0?(document.addEventListener(_,le,{passive:d}),X.set(_,1)):X.set(_,y+1)}}};o(Ke(Kr)),Ve.add(o);var s=void 0,l=On(()=>{var c=n??r.appendChild(Tr());return ae(()=>{if(u){Un({});var f=k;f.c=u}i&&(t.$$events=i),He=a,s=e(c,t)||{},He=!0,u&&Yn()}),()=>{for(var f of v){r.removeEventListener(f,le);var _=X.get(f);--_===0?(document.removeEventListener(f,le),X.delete(f)):X.set(f,_)}Ve.delete(o),lr.delete(s),c!==n&&c.parentNode?.removeChild(c)}});return lr.set(s,l),s}let lr=new WeakMap;function Dt(e,r,n=!1){var t=e,i=null,u=null,a=A,v=n?Ae:0,o=!1;const s=(c,f=!0)=>{o=!0,l(f,c)},l=(c,f)=>{a!==(a=c)&&(a?(i?xe(i):f&&(i=ae(()=>f(t))),u&&Be(u,()=>{u=null})):(u?xe(u):f&&(u=ae(()=>f(t))),i&&Be(i,()=>{i=null})))};Je(()=>{o=!1,r(s),o||l(null,null)},v)}function Rt(e,r){return r}function ut(e,r,n,t){for(var i=[],u=r.length,a=0;a<u;a++)Xe(r[a].e,i,!0);var v=u>0&&i.length===0&&n!==null;if(v){var o=n.parentNode;mn(o),o.append(n),t.clear(),U(e,r[0].prev,r[u-1].next)}Lr(i,()=>{for(var s=0;s<u;s++){var l=r[s];v||(t.delete(l.k),U(e,l.prev,l.next)),z(l.e,!v)}})}function Mt(e,r,n,t,i,u=null){var a=e,v={flags:r,items:new Map,first:null},o=(r&gr)!==0;if(o){var s=e;a=s.appendChild(Tr())}var l=null,c=!1;Je(()=>{var f=n(),_=Ye(f)?f:f==null?[]:Ke(f),d=_.length;if(!(c&&d===0)){c=d===0;{var y=E;st(_,v,a,i,r,(y.f&F)!==0,t)}u!==null&&(d===0?l?xe(l):l=ae(()=>u(a)):l!==null&&Be(l,()=>{l=null})),n()}})}function st(e,r,n,t,i,u,a){var v=(i&pn)!==0,o=(i&(je|ze))!==0,s=e.length,l=r.items,c=r.first,f=c,_,d=null,y,h=[],w=[],m,x,p,g;if(v)for(g=0;g<s;g+=1)m=e[g],x=a(m,g),p=l.get(x),p!==void 0&&(p.a?.measure(),(y??=new Set).add(p));for(g=0;g<s;g+=1){if(m=e[g],x=a(m,g),p=l.get(x),p===void 0){var M=f?f.e.nodes_start:n;d=at(M,r,d,d===null?r.first:d.next,m,x,g,t,i),l.set(x,d),h=[],w=[],f=d.next;continue}if(o&&lt(p,m,g,i),p.e.f&F&&(xe(p.e),v&&(p.a?.unfix(),(y??=new Set).delete(p))),p!==f){if(_!==void 0&&_.has(p)){if(h.length<w.length){var J=w[0],S;d=J.prev;var er=h[0],De=h[h.length-1];for(S=0;S<h.length;S+=1)ar(h[S],J,n);for(S=0;S<w.length;S+=1)_.delete(w[S]);U(r,er.prev,De.next),U(r,d,er),U(r,De,J),f=J,d=De,g-=1,h=[],w=[]}else _.delete(p),ar(p,f,n),U(r,p.prev,p.next),U(r,p,d===null?r.first:d.next),U(r,d,p),d=p;continue}for(h=[],w=[];f!==null&&f.k!==x;)(u||!(f.e.f&F))&&(_??=new Set).add(f),w.push(f),f=f.next;if(f===null)continue;p=f}h.push(p),d=p,f=p.next}if(f!==null||_!==void 0){for(var se=_===void 0?[]:Ke(_);f!==null;)(u||!(f.e.f&F))&&se.push(f),f=f.next;var Re=se.length;if(Re>0){var zr=i&gr&&s===0?n:null;if(v){for(g=0;g<Re;g+=1)se[g].a?.measure();for(g=0;g<Re;g+=1)se[g].a?.fix()}ut(r,se,zr,l)}}v&&Oe(()=>{if(y!==void 0)for(p of y)p.a?.apply()}),b.first=r.first&&r.first.e,b.last=d&&d.e}function lt(e,r,n,t){t&je&&qe(e.v,r),t&ze?qe(e.i,n):e.i=n}function at(e,r,n,t,i,u,a,v,o){var s=(o&je)!==0,l=(o&hn)===0,c=s?l?We(i):I(i):i,f=o&ze?I(a):a,_={i:f,v:c,k:u,a:null,e:null,prev:n,next:t};try{return _.e=ae(()=>v(e,c,f),Er),_.e.prev=n&&n.e,_.e.next=t&&t.e,n===null?r.first=_:(n.next=_,n.e.next=_.e),t!==null&&(t.prev=_,t.e.prev=_.e),_}finally{}}function ar(e,r,n){for(var t=e.next?e.next.e.nodes_start:n,i=r?r.e.nodes_start:n,u=e.e.nodes_start;u!==t;){var a=Ne(u);i.before(u),u=a}}function U(e,r,n){r===null?e.first=n:(r.next=n,r.e.next=n&&n.e),n!==null&&(n.prev=r,n.e.prev=r&&r.e)}function Pt(e,r,n){Se(()=>{var t=G(()=>r(e,n?.())||{});if(t?.destroy)return()=>t.destroy()})}function ft(e,r,n,t){var i=e.__attributes??={};i[r]!==(i[r]=n)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[nn]=n),n==null?e.removeAttribute(r):typeof n!="string"&&Wr(e).includes(r)?e[r]=n:e.setAttribute(r,n))}function Ft(e,r,n,t,i=!1,u=!1,a=!1){var v=r||{},o=e.tagName==="OPTION";for(var s in r)s in n||(n[s]=null);var l=Wr(e),c=e.__attributes??={};for(const h in n){let w=n[h];if(o&&h==="value"&&w==null){e.value=e.__value="",v[h]=w;continue}var f=v[h];if(w!==f){v[h]=w;var _=h[0]+h[1];if(_!=="$$"){if(_==="on"){const m={},x="$$"+h;let p=h.slice(2);var d=Qn(p);if(Xn(p)&&(p=p.slice(0,-7),m.capture=!0),!d&&f){if(w!=null)continue;e.removeEventListener(p,v[x],m),v[x]=null}if(w!=null)if(d)e[`__${p}`]=w,Gn([p]);else{let g=function(M){v[h].call(this,M)};v[x]=zn(p,e,g,m)}else d&&(e[`__${p}`]=void 0)}else if(h==="style"&&w!=null)e.style.cssText=w+"";else if(h==="autofocus")Kn(e,!!w);else if(h==="__value"||h==="value"&&w!=null)e.value=e[h]=e.__value=w;else{var y=h;i||(y=rt(y)),w==null&&!u?(c[h]=null,e.removeAttribute(h)):l.includes(y)&&(u||typeof w!="string")?e[y]=w:typeof w!="function"&&ft(e,y,w)}h==="style"&&"__styles"in e&&(e.__styles={})}}}return v}var fr=new Map;function Wr(e){var r=fr.get(e.nodeName);if(r)return r;fr.set(e.nodeName,r=[]);for(var n,t=e,i=Element.prototype;i!==t;){n=Jr(t);for(var u in n)n[u].set&&r.push(u);t=cr(t)}return r}function qt(e,r){var n=e.__className,t=ot(r);(n!==t||Er)&&(r==null?e.removeAttribute("class"):e.className=t,e.__className=t)}function ot(e){return e??""}function Bt(e,r,n){if(n){if(e.classList.contains(r))return;e.classList.add(r)}else{if(!e.classList.contains(r))return;e.classList.remove(r)}}const ct=()=>performance.now(),V={tick:e=>requestAnimationFrame(e),now:()=>ct(),tasks:new Set};function jr(){const e=V.now();V.tasks.forEach(r=>{r.c(e)||(V.tasks.delete(r),r.f())}),V.tasks.size!==0&&V.tick(jr)}function vt(e){let r;return V.tasks.size===0&&V.tick(jr),{promise:new Promise(n=>{V.tasks.add(r={c:e,f:n})}),abort(){V.tasks.delete(r)}}}function he(e,r){e.dispatchEvent(new CustomEvent(r))}function _t(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const r=e.split("-");return r.length===1?r[0]:r[0]+r.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function or(e){const r={},n=e.split(";");for(const t of n){const[i,u]=t.split(":");if(!i||u===void 0)break;const a=_t(i.trim());r[a]=u.trim()}return r}const dt=e=>e;function $t(e,r,n,t){var i=(e&wn)!==0,u="both",a,v=r.inert,o,s;function l(){var y=E,h=b;B(null),L(null);try{return a??=n()(r,t?.()??{},{direction:u})}finally{B(y),L(h)}}var c={is_global:i,in(){r.inert=v,he(r,"introstart"),o=Ue(r,l(),s,1,()=>{he(r,"introend"),o?.abort(),o=a=void 0})},out(y){r.inert=!0,he(r,"outrostart"),s=Ue(r,l(),o,0,()=>{he(r,"outroend"),y?.()})},stop:()=>{o?.abort(),s?.abort()}},f=b;if((f.transitions??=[]).push(c),He){var _=i;if(!_){for(var d=f.parent;d&&d.f&Ae;)for(;(d=d.parent)&&!(d.f&ke););_=!d||(d.f&dr)!==0}_&&Se(()=>{G(()=>c.in())})}}function Ue(e,r,n,t,i){var u=t===1;if(Qr(r)){var a,v=!1;return Oe(()=>{if(!v){var h=r({direction:u?"in":"out"});a=Ue(e,h,n,t,i)}}),{abort:()=>{v=!0,a?.abort()},deactivate:()=>a.deactivate(),reset:()=>a.reset(),t:()=>a.t()}}if(n?.deactivate(),!r?.duration)return i(),{abort:C,deactivate:C,reset:C,t:()=>t};const{delay:o=0,css:s,tick:l,easing:c=dt}=r;var f=[];if(u&&n===void 0&&(l&&l(0,1),s)){var _=or(s(0,1));f.push(_,_)}var d=()=>1-t,y=e.animate(f,{duration:o});return y.onfinish=()=>{var h=n?.t()??1-t;n?.abort();var w=t-h,m=r.duration*Math.abs(w),x=[];if(m>0){if(s)for(var p=Math.ceil(m/16.666666666666668),g=0;g<=p;g+=1){var M=h+w*c(g/p),J=s(M,1-M);x.push(or(J))}d=()=>{var S=y.currentTime;return h+w*c(S/m)},l&&vt(()=>{if(y.playState!=="running")return!1;var S=d();return l(S,1-S),!0})}y=e.animate(x,{duration:m,fill:"forwards"}),y.onfinish=()=>{d=()=>t,l?.(t,1-t),i()}},{abort:()=>{y&&(y.cancel(),y.effect=null,y.onfinish=C)},deactivate:()=>{i=C},reset:()=>{t===0&&l?.(1,0)},t:()=>d()}}function Vt(e,r,n=r){jn(e,"input",t=>{var i=t?e.defaultValue:e.value;if(i=Me(e)?Pe(i):i,n(i),i!==(i=r())){var u=e.selectionStart,a=e.selectionEnd;e.value=i??"",a!==null&&(e.selectionStart=u,e.selectionEnd=Math.min(a,e.value.length))}}),G(r)==null&&e.value&&n(Me(e)?Pe(e.value):e.value),Cn(()=>{var t=r();Me(e)&&t===Pe(e.value)||e.type==="date"&&!t&&!e.value||t!==e.value&&(e.value=t??"")})}function Me(e){var r=e.type;return r==="number"||r==="range"}function Pe(e){return e===""?null:+e}function Qe(e,r,n){if(e==null)return r(void 0),n&&n(void 0),C;const t=G(()=>e.subscribe(r,n));return t.unsubscribe?()=>t.unsubscribe():t}let ye=!1;function Ht(e,r,n){const t=n[r]??={store:null,source:We(void 0),unsubscribe:C};if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=C;else{var i=!0;t.unsubscribe=Qe(e,u=>{i?t.source.v=u:P(t.source,u)}),i=!1}return H(t.source)}function Ut(){const e={};return Nn(()=>{for(var r in e)e[r].unsubscribe()}),e}function pt(e){var r=ye;try{return ye=!1,[e(),ye]}finally{ye=r}}const ht={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Yt(e,r,n){return new Proxy({props:e,exclude:r},ht)}function yt(e){for(var r=b,n=b;r!==null&&!(r.f&(R|_e));)r=r.parent;try{return L(r),e()}finally{L(n)}}function Kt(e,r,n,t){var i=!wr,u=(n&yn)!==0,a=!1,v;[v,a]=pt(()=>e[r]);var o=we in e||rn in e,s=re(e,r)?.set??(o&&u&&r in e?p=>e[r]=p:void 0),l=t,c=!0,f=!1,_=()=>(f=!0,c&&(c=!1,l=t),l);v===void 0&&t!==void 0&&(s&&i&&fn(),v=_(),s&&s(v));var d;if(d=()=>{var p=e[r];return p===void 0?_():(c=!0,f=!1,p)},s){var y=e.$$legacy;return function(p,g){return arguments.length>0?((!g||y||a)&&s(g?d():p),p):d()}}var h=!1,w=!1,m=We(v),x=yt(()=>xn(()=>{var p=d(),g=H(m);return h?(h=!1,w=!0,g):(w=!1,m.v=p)}));return function(p,g){if(arguments.length>0){const M=g?H(x):Q(p);return x.equals(M)||(h=!0,P(m,M),f&&l!==void 0&&(l=M),G(()=>H(x))),p}return H(x)}}function wt(e){k===null&&Mr(),Sn(()=>{const r=G(e);if(typeof r=="function")return r})}function Wt(e){k===null&&Mr(),wt(()=>()=>G(e))}const bt="5";typeof window<"u"&&(window.__svelte||={v:new Set}).v.add(bt);const Z=[];function gt(e,r){return{subscribe:Et(e,r).subscribe}}function Et(e,r=C){let n=null;const t=new Set;function i(v){if(yr(e,v)&&(e=v,n)){const o=!Z.length;for(const s of t)s[1](),Z.push(s,e);if(o){for(let s=0;s<Z.length;s+=2)Z[s][0](Z[s+1]);Z.length=0}}}function u(v){i(v(e))}function a(v,o=C){const s=[v,o];return t.add(s),t.size===1&&(n=r(i,u)||C),v(e),()=>{t.delete(s),t.size===0&&n&&(n(),n=null)}}return{set:i,update:u,subscribe:a}}function jt(e,r,n){const t=!Array.isArray(e),i=t?[e]:e;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const u=r.length<2;return gt(n,(a,v)=>{let o=!1;const s=[];let l=0,c=C;const f=()=>{if(l)return;c();const d=r(t?s[0]:s,a,v);u?a(d):c=typeof d=="function"?d:C},_=i.map((d,y)=>Qe(d,h=>{s[y]=h,l&=~(1<<y),o&&f()},()=>{l|=1<<y}));return o=!0,f(),function(){vr(_),c(),o=!1}})}function zt(e){return{subscribe:e.subscribe.bind(e)}}function Gt(e){let r;return Qe(e,n=>r=n)(),r}const mt=e=>e;function Jt(e,{delay:r=0,duration:n=400,easing:t=mt}={}){const i=+getComputedStyle(e).opacity;return{delay:r,duration:n,easing:t,css:u=>`opacity: ${u*i}`}}export{Pt as A,Dt as B,Yn as C,Un as D,Ht as E,$t as F,Jt as G,G as H,Mt as I,It as J,Rt as K,Gn as L,Lt as M,zt as a,H as b,P as c,jt as d,xn as e,Kt as f,Gt as g,Nt as h,Vt as i,Ct as j,Ot as k,At as l,Tt as m,qt as n,Wt as o,Q as p,Bt as q,gt as r,xt as s,St as t,Ft as u,Yt as v,Et as w,Ut as x,Sn as y,kt as z};
