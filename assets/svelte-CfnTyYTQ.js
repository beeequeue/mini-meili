var Ye=Array.isArray,Ke=Array.from,zr=Object.defineProperty,re=Object.getOwnPropertyDescriptor,Gr=Object.getOwnPropertyDescriptors,Jr=Object.prototype,Xr=Array.prototype,or=Object.getPrototypeOf;function Zr(e){return typeof e=="function"}const O=()=>{};function cr(e){for(var r=0;r<e.length;r++)e[r]()}const D=2,vr=4,ve=8,Te=16,R=32,_e=64,qe=128,G=256,Ee=512,N=1024,W=2048,de=4096,F=8192,ie=16384,_r=32768,Ne=65536,Qr=1<<19,dr=1<<20,we=Symbol("$state"),et=Symbol("legacy props"),rt=Symbol("");function hr(e){return e===this.v}function pr(e,r){return e!=e?r==r:e!==r||e!==null&&typeof e=="object"||typeof e=="function"}function tt(e){return!pr(e,this.v)}function nt(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function it(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ut(e){throw new Error("https://svelte.dev/e/effect_orphan")}function st(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function lt(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function at(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ft(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ot(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function ct(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let yr=!1;function I(e){return{f:0,v:e,reactions:null,equals:hr,version:0}}function kn(e){return vt(I(e))}function We(e,r=!1){const t=I(e);return r||(t.equals=tt),t}function vt(e){return m!==null&&m.f&D&&(q===null?Lt([e]):q.push(e)),e}function P(e,r){return m!==null&&Rt()&&m.f&(D|Te)&&(q===null||!q.includes(e))&&ct(),Ve(e,r)}function Ve(e,r){return e.equals(r)||(e.v=r,e.version=Fr(),wr(e,W),g!==null&&g.f&N&&!(g.f&R)&&(k!==null&&k.includes(e)?(B(g,W),De(g)):K===null?Dt([e]):K.push(e))),r}function wr(e,r){var t=e.reactions;if(t!==null)for(var n=t.length,i=0;i<n;i++){var u=t[i],a=u.f;a&W||(B(u,r),a&(N|G)&&(a&D?wr(u,de):De(u)))}}const je=1,ze=2,br=4,_t=8,dt=16,ht=8,pt=4,yt=1,wt=2,T=Symbol();let gr=!1;function Q(e,r=null,t){if(typeof e!="object"||e===null||we in e)return e;const n=or(e);if(n!==Jr&&n!==Xr)return e;var i=new Map,u=Ye(e),a=I(0);u&&i.set("length",I(e.length));var v;return new Proxy(e,{defineProperty(o,s,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&at();var c=i.get(s);return c===void 0?(c=I(l.value),i.set(s,c)):P(c,Q(l.value,v)),!0},deleteProperty(o,s){var l=i.get(s);if(l===void 0)s in o&&i.set(s,I(T));else{if(u&&typeof s=="string"){var c=i.get("length"),f=Number(s);Number.isInteger(f)&&f<c.v&&P(c,f)}P(l,T),rr(a)}return!0},get(o,s,l){if(s===we)return e;var c=i.get(s),f=s in o;if(c===void 0&&(!f||re(o,s)?.writable)&&(c=I(Q(f?o[s]:T,v)),i.set(s,c)),c!==void 0){var _=H(c);return _===T?void 0:_}return Reflect.get(o,s,l)},getOwnPropertyDescriptor(o,s){var l=Reflect.getOwnPropertyDescriptor(o,s);if(l&&"value"in l){var c=i.get(s);c&&(l.value=H(c))}else if(l===void 0){var f=i.get(s),_=f?.v;if(f!==void 0&&_!==T)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return l},has(o,s){if(s===we)return!0;var l=i.get(s),c=l!==void 0&&l.v!==T||Reflect.has(o,s);if(l!==void 0||g!==null&&(!c||re(o,s)?.writable)){l===void 0&&(l=I(c?Q(o[s],v):T),i.set(s,l));var f=H(l);if(f===T)return!1}return c},set(o,s,l,c){var f=i.get(s),_=s in o;if(u&&s==="length")for(var d=l;d<f.v;d+=1){var h=i.get(d+"");h!==void 0?P(h,T):d in o&&(h=I(T),i.set(d+"",h))}f===void 0?(!_||re(o,s)?.writable)&&(f=I(void 0),P(f,Q(l,v)),i.set(s,f)):(_=f.v!==T,P(f,Q(l,v)));var E=Reflect.getOwnPropertyDescriptor(o,s);if(E?.set&&E.set.call(c,l),!_){if(u&&typeof s=="string"){var b=i.get("length"),y=Number(s);Number.isInteger(y)&&y>=b.v&&P(b,y+1)}rr(a)}return!0},ownKeys(o){H(a);var s=Reflect.ownKeys(o).filter(f=>{var _=i.get(f);return _===void 0||_.v!==T});for(var[l,c]of i)c.v!==T&&!(l in o)&&s.push(l);return s},setPrototypeOf(){ft()}})}function rr(e,r=1){P(e,e.v+r)}var tr,Er,mr;function bt(){if(tr===void 0){tr=window;var e=Element.prototype,r=Node.prototype;Er=re(r,"firstChild").get,mr=re(r,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function xr(e=""){return document.createTextNode(e)}function me(e){return Er.call(e)}function Se(e){return mr.call(e)}function An(e,r){return me(e)}function Tn(e,r){{var t=me(e);return t instanceof Comment&&t.data===""?Se(t):t}}function Nn(e,r=1,t=!1){let n=e;for(;r--;)n=Se(n);return n}function gt(e){e.textContent=""}function Et(e){var r=D|W;g===null?r|=G:g.f|=dr;var t=m!==null&&m.f&D?m:null;const n={children:null,ctx:A,deps:null,equals:hr,f:r,fn:e,reactions:null,v:null,version:0,parent:t??g};return t!==null&&(t.children??=[]).push(n),n}function kr(e){var r=e.children;if(r!==null){e.children=null;for(var t=0;t<r.length;t+=1){var n=r[t];n.f&D?Ge(n):j(n)}}}function mt(e){for(var r=e.parent;r!==null;){if(!(r.f&D))return r;r=r.parent}return null}function Ar(e){var r,t=g;L(mt(e));try{kr(e),r=qr(e)}finally{L(t)}return r}function Tr(e){var r=Ar(e),t=(ee||e.f&G)&&e.deps!==null?de:N;B(e,t),e.equals(r)||(e.v=r,e.version=Fr())}function Ge(e){kr(e),ce(e,0),B(e,ie),e.v=e.children=e.deps=e.ctx=e.reactions=null}function xt(e){g===null&&m===null&&ut(),m!==null&&m.f&G&&it(),Ze&&nt()}function kt(e,r){var t=r.last;t===null?r.last=r.first=e:(t.next=e,e.prev=t,r.last=e)}function ue(e,r,t,n=!0){var i=(e&_e)!==0,u=g,a={ctx:A,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|W,first:null,fn:r,last:null,next:null,parent:i?null:u,prev:null,teardown:null,transitions:null,version:0};if(t){var v=te;try{nr(!0),Le(a),a.f|=_r}catch(l){throw j(a),l}finally{nr(v)}}else r!==null&&De(a);var o=t&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&dr)===0;if(!o&&!i&&n&&(u!==null&&kt(a,u),m!==null&&m.f&D)){var s=m;(s.children??=[]).push(a)}return a}function At(e){const r=ue(ve,null,!1);return B(r,N),r.teardown=e,r}function Tt(e){xt();var r=g!==null&&(g.f&R)!==0&&A!==null&&!A.m;if(r){var t=A;(t.e??=[]).push({fn:e,effect:g,reaction:m})}else{var n=Ce(e);return n}}function Nt(e){const r=ue(_e,e,!0);return(t={})=>new Promise(n=>{t.outro?xe(r,()=>{j(r),n(void 0)}):(j(r),n(void 0))})}function Ce(e){return ue(vr,e,!1)}function St(e){return ue(ve,e,!0)}function Sn(e){return Je(e)}function Je(e,r=0){return ue(ve|Te|r,e,!0)}function ae(e,r=!0){return ue(ve|R,e,!0,r)}function Nr(e){var r=e.teardown;if(r!==null){const t=Ze,n=m;ir(!0),V(null);try{r.call(null)}finally{ir(t),V(n)}}}function Sr(e){var r=e.deriveds;if(r!==null){e.deriveds=null;for(var t=0;t<r.length;t+=1)Ge(r[t])}}function Cr(e,r=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var n=t.next;j(t,r),t=n}}function Ct(e){for(var r=e.first;r!==null;){var t=r.next;r.f&R||j(r),r=t}}function j(e,r=!0){var t=!1;if((r||e.f&Qr)&&e.nodes_start!==null){for(var n=e.nodes_start,i=e.nodes_end;n!==null;){var u=n===i?null:Se(n);n.remove(),n=u}t=!0}Cr(e,r&&!t),Sr(e),ce(e,0),B(e,ie);var a=e.transitions;if(a!==null)for(const o of a)o.stop();Nr(e);var v=e.parent;v!==null&&v.first!==null&&Or(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Or(e){var r=e.parent,t=e.prev,n=e.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),r!==null&&(r.first===e&&(r.first=n),r.last===e&&(r.last=t))}function xe(e,r){var t=[];Xe(e,t,!0),Ir(t,()=>{j(e),r&&r()})}function Ir(e,r){var t=e.length;if(t>0){var n=()=>--t||r();for(var i of e)i.out(n)}else r()}function Xe(e,r,t){if(!(e.f&F)){if(e.f^=F,e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&r.push(a);for(var n=e.first;n!==null;){var i=n.next,u=(n.f&Ne)!==0||(n.f&R)!==0;Xe(n,r,u?t:!1),n=i}}}function ke(e){Lr(e,!0)}function Lr(e,r){if(e.f&F){he(e)&&Le(e),e.f^=F;for(var t=e.first;t!==null;){var n=t.next,i=(t.f&Ne)!==0||(t.f&R)!==0;Lr(t,i?r:!1),t=n}if(e.transitions!==null)for(const u of e.transitions)(u.is_global||r)&&u.in()}}let Ae=!1,Be=[];function Dr(){Ae=!1;const e=Be.slice();Be=[],cr(e)}function Oe(e){Ae||(Ae=!0,queueMicrotask(Dr)),Be.push(e)}function Ot(){Ae&&Dr()}function Rr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Mr=0,It=1;let be=!1,ge=Mr,fe=!1,oe=null,te=!1,Ze=!1;function nr(e){te=e}function ir(e){Ze=e}let z=[],ne=0;let m=null;function V(e){m=e}let g=null;function L(e){g=e}let q=null;function Lt(e){q=e}let k=null,C=0,K=null;function Dt(e){K=e}let Pr=0,ee=!1,A=null;function Fr(){return++Pr}function Rt(){return!yr}function he(e){var r=e.f;if(r&W)return!0;if(r&de){var t=e.deps,n=(r&G)!==0;if(t!==null){var i;if(r&Ee){for(i=0;i<t.length;i++)(t[i].reactions??=[]).push(e);e.f^=Ee}for(i=0;i<t.length;i++){var u=t[i];if(he(u)&&Tr(u),n&&g!==null&&!ee&&!u?.reactions?.includes(e)&&(u.reactions??=[]).push(e),u.version>e.version)return!0}}n||B(e,N)}return!1}function Mt(e,r){for(var t=r;t!==null;){if(t.f&qe)try{t.fn(e);return}catch{t.f^=qe}t=t.parent}throw be=!1,e}function Pt(e){return(e.f&ie)===0&&(e.parent===null||(e.parent.f&qe)===0)}function Ie(e,r,t,n){if(be){if(t===null&&(be=!1),Pt(r))throw e;return}t!==null&&(be=!0);{Mt(e,r);return}}function qr(e){var r=k,t=C,n=K,i=m,u=ee,a=q,v=A,o=e.f;k=null,C=0,K=null,m=o&(R|_e)?null:e,ee=!te&&(o&G)!==0,q=null,A=e.ctx;try{var s=(0,e.fn)(),l=e.deps;if(k!==null){var c;if(ce(e,C),l!==null&&C>0)for(l.length=C+k.length,c=0;c<k.length;c++)l[C+c]=k[c];else e.deps=l=k;if(!ee)for(c=C;c<l.length;c++)(l[c].reactions??=[]).push(e)}else l!==null&&C<l.length&&(ce(e,C),l.length=C);return s}finally{k=r,C=t,K=n,m=i,ee=u,q=a,A=v}}function Ft(e,r){let t=r.reactions;if(t!==null){var n=t.indexOf(e);if(n!==-1){var i=t.length-1;i===0?t=r.reactions=null:(t[n]=t[i],t.pop())}}t===null&&r.f&D&&(k===null||!k.includes(r))&&(B(r,de),r.f&(G|Ee)||(r.f^=Ee),ce(r,0))}function ce(e,r){var t=e.deps;if(t!==null)for(var n=r;n<t.length;n++)Ft(e,t[n])}function Le(e){var r=e.f;if(!(r&ie)){B(e,N);var t=g,n=A;g=e;try{r&Te?Ct(e):Cr(e),Sr(e),Nr(e);var i=qr(e);e.teardown=typeof i=="function"?i:null,e.version=Pr}catch(u){Ie(u,e,t,n||e.ctx)}finally{g=t}}}function Vr(){if(ne>1e3){ne=0;try{st()}catch(e){if(oe!==null)Ie(e,oe,null);else throw e}}ne++}function Br(e){var r=e.length;if(r!==0){Vr();var t=te;te=!0;try{for(var n=0;n<r;n++){var i=e[n];i.f&N||(i.f^=N);var u=[];$r(i,u),qt(u)}}finally{te=t}}}function qt(e){var r=e.length;if(r!==0)for(var t=0;t<r;t++){var n=e[t];if(!(n.f&(ie|F)))try{he(n)&&(Le(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?Or(n):n.fn=null))}catch(i){Ie(i,n,null,n.ctx)}}}function Vt(){if(fe=!1,ne>1001)return;const e=z;z=[],Br(e),fe||(ne=0,oe=null)}function De(e){ge===Mr&&(fe||(fe=!0,queueMicrotask(Vt))),oe=e;for(var r=e;r.parent!==null;){r=r.parent;var t=r.f;if(t&(_e|R)){if(!(t&N))return;r.f^=N}}z.push(r)}function $r(e,r){var t=e.first,n=[];e:for(;t!==null;){var i=t.f,u=(i&R)!==0,a=u&&(i&N)!==0,v=t.next;if(!a&&!(i&F))if(i&ve){if(u)t.f^=N;else try{he(t)&&Le(t)}catch(c){Ie(c,t,null,t.ctx)}var o=t.first;if(o!==null){t=o;continue}}else i&vr&&n.push(t);if(v===null){let c=t.parent;for(;c!==null;){if(e===c)break e;var s=c.next;if(s!==null){t=s;continue e}c=c.parent}}t=v}for(var l=0;l<n.length;l++)o=n[l],r.push(o),$r(o,r)}function Hr(e){var r=ge,t=z;try{Vr();const i=[];ge=It,z=i,fe=!1,Br(t);var n=e?.();return Ot(),(z.length>0||i.length>0)&&Hr(),ne=0,oe=null,n}finally{ge=r,z=t}}async function Cn(){await Promise.resolve(),Hr()}function H(e){var r=e.f,t=(r&D)!==0;if(t&&r&ie){var n=Ar(e);return Ge(e),n}if(m!==null){q!==null&&q.includes(e)&&ot();var i=m.deps;k===null&&i!==null&&i[C]===e?C++:k===null?k=[e]:k.push(e),K!==null&&g!==null&&g.f&N&&!(g.f&R)&&K.includes(e)&&(B(g,W),De(g))}else if(t&&e.deps===null)for(var u=e,a=u.parent,v=u;a!==null;)if(a.f&D){var o=a;v=o,a=o.parent}else{var s=a;s.deriveds?.includes(v)||(s.deriveds??=[]).push(v);break}return t&&(u=e,he(u)&&Tr(u)),e.v}function J(e){const r=m;try{return m=null,e()}finally{m=r}}const Bt=~(W|de|N);function B(e,r){e.f=e.f&Bt|r}function $t(e,r=!1,t){A={p:A,c:null,e:null,m:!1,s:e,x:null,l:null}}function Ht(e){const r=A;if(r!==null){const a=r.e;if(a!==null){var t=g,n=m;r.e=null;try{for(var i=0;i<a.length;i++){var u=a[i];L(u.effect),V(u.reaction),Ce(u.fn)}}finally{L(t),V(n)}}A=r.p,r.m=!0}return{}}function Ut(e,r){if(r){const t=document.body;e.autofocus=!0,Oe(()=>{document.activeElement===t&&e.focus()})}}let ur=!1;function Yt(){ur||(ur=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const r of e.target.elements)r.__on_r?.()})},{capture:!0}))}function Ur(e){var r=m,t=g;V(null),L(null);try{return e()}finally{V(r),L(t)}}function Kt(e,r,t,n=t){e.addEventListener(r,()=>Ur(t));const i=e.__on_r;i?e.__on_r=()=>{i(),n(!0)}:e.__on_r=()=>n(!0),Yt()}const Yr=new Set,$e=new Set;function Wt(e,r,t,n){function i(u){if(n.capture||le.call(r,u),!u.cancelBubble)return Ur(()=>t.call(this,u))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Oe(()=>{r.addEventListener(e,i,n)}):r.addEventListener(e,i,n),i}function jt(e){for(var r=0;r<e.length;r++)Yr.add(e[r]);for(var t of $e)t(e)}function le(e){var r=this,t=r.ownerDocument,n=e.type,i=e.composedPath?.()||[],u=i[0]||e.target,a=0,v=e.__root;if(v){var o=i.indexOf(v);if(o!==-1&&(r===document||r===window)){e.__root=r;return}var s=i.indexOf(r);if(s===-1)return;o<=s&&(a=o)}if(u=i[a]||e.target,u!==r){zr(e,"currentTarget",{configurable:!0,get(){return u||t}});var l=m,c=g;V(null),L(null);try{for(var f,_=[];u!==null;){var d=u.assignedSlot||u.parentNode||u.host||null;try{var h=u["__"+n];if(h!==void 0&&!u.disabled)if(Ye(h)){var[E,...b]=h;E.apply(u,[e,...b])}else h.call(u,e)}catch(y){f?_.push(y):f=y}if(e.cancelBubble||d===r||d===null)break;u=d}if(f){for(let y of _)queueMicrotask(()=>{throw y});throw f}}finally{e.__root=r,delete e.currentTarget,V(l),L(c)}}}function zt(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function sr(e,r){var t=g;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function On(e,r){var t=(r&yt)!==0,n=(r&wt)!==0,i,u=!e.startsWith("<!>");return()=>{i===void 0&&(i=zt(u?e:"<!>"+e),t||(i=me(i)));var a=n?document.importNode(i,!0):i.cloneNode(!0);if(t){var v=me(a),o=a.lastChild;sr(v,o)}else sr(a,a);return a}}function In(e,r){e!==null&&e.before(r)}function Gt(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Jt=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Xt(e){return Jt.includes(e)}const Zt={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function Qt(e){return e=e.toLowerCase(),Zt[e]??e}const en=["touchstart","touchmove"];function rn(e){return en.includes(e)}let He=!0;function Ln(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??=e.nodeValue)&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function Dn(e,r){return tn(e,r)}const X=new Map;function tn(e,{target:r,anchor:t,props:n={},events:i,context:u,intro:a=!0}){bt();var v=new Set,o=c=>{for(var f=0;f<c.length;f++){var _=c[f];if(!v.has(_)){v.add(_);var d=rn(_);r.addEventListener(_,le,{passive:d});var h=X.get(_);h===void 0?(document.addEventListener(_,le,{passive:d}),X.set(_,1)):X.set(_,h+1)}}};o(Ke(Yr)),$e.add(o);var s=void 0,l=Nt(()=>{var c=t??r.appendChild(xr());return ae(()=>{if(u){$t({});var f=A;f.c=u}i&&(n.$$events=i),He=a,s=e(c,n)||{},He=!0,u&&Ht()}),()=>{for(var f of v){r.removeEventListener(f,le);var _=X.get(f);--_===0?(document.removeEventListener(f,le),X.delete(f)):X.set(f,_)}$e.delete(o),c!==t&&c.parentNode?.removeChild(c)}});return nn.set(s,l),s}let nn=new WeakMap;function Rn(e,r,t=!1){var n=e,i=null,u=null,a=T,v=t?Ne:0,o=!1;const s=(c,f=!0)=>{o=!0,l(f,c)},l=(c,f)=>{a!==(a=c)&&(a?(i?ke(i):f&&(i=ae(()=>f(n))),u&&xe(u,()=>{u=null})):(u?ke(u):f&&(u=ae(()=>f(n))),i&&xe(i,()=>{i=null})))};Je(()=>{o=!1,r(s),o||l(null,null)},v)}function Mn(e,r){return r}function un(e,r,t,n){for(var i=[],u=r.length,a=0;a<u;a++)Xe(r[a].e,i,!0);var v=u>0&&i.length===0&&t!==null;if(v){var o=t.parentNode;gt(o),o.append(t),n.clear(),Y(e,r[0].prev,r[u-1].next)}Ir(i,()=>{for(var s=0;s<u;s++){var l=r[s];v||(n.delete(l.k),Y(e,l.prev,l.next)),j(l.e,!v)}})}function Pn(e,r,t,n,i,u=null){var a=e,v={flags:r,items:new Map,first:null},o=(r&br)!==0;if(o){var s=e;a=s.appendChild(xr())}var l=null,c=!1;Je(()=>{var f=t(),_=Ye(f)?f:f==null?[]:Ke(f),d=_.length;if(!(c&&d===0)){c=d===0;{var h=m;sn(_,v,a,i,r,(h.f&F)!==0,n)}u!==null&&(d===0?l?ke(l):l=ae(()=>u(a)):l!==null&&xe(l,()=>{l=null})),t()}})}function sn(e,r,t,n,i,u,a){var v=(i&_t)!==0,o=(i&(je|ze))!==0,s=e.length,l=r.items,c=r.first,f=c,_,d=null,h,E=[],b=[],y,x,p,w;if(v)for(w=0;w<s;w+=1)y=e[w],x=a(y,w),p=l.get(x),p!==void 0&&(p.a?.measure(),(h??=new Set).add(p));for(w=0;w<s;w+=1){if(y=e[w],x=a(y,w),p=l.get(x),p===void 0){var M=f?f.e.nodes_start:t;d=an(M,r,d,d===null?r.first:d.next,y,x,w,n,i),l.set(x,d),E=[],b=[],f=d.next;continue}if(o&&ln(p,y,w,i),p.e.f&F&&(ke(p.e),v&&(p.a?.unfix(),(h??=new Set).delete(p))),p!==f){if(_!==void 0&&_.has(p)){if(E.length<b.length){var U=b[0],S;d=U.prev;var er=E[0],Re=E[E.length-1];for(S=0;S<E.length;S+=1)lr(E[S],U,t);for(S=0;S<b.length;S+=1)_.delete(b[S]);Y(r,er.prev,Re.next),Y(r,d,er),Y(r,Re,U),f=U,d=Re,w-=1,E=[],b=[]}else _.delete(p),lr(p,f,t),Y(r,p.prev,p.next),Y(r,p,d===null?r.first:d.next),Y(r,d,p),d=p;continue}for(E=[],b=[];f!==null&&f.k!==x;)(u||!(f.e.f&F))&&(_??=new Set).add(f),b.push(f),f=f.next;if(f===null)continue;p=f}E.push(p),d=p,f=p.next}if(f!==null||_!==void 0){for(var se=_===void 0?[]:Ke(_);f!==null;)(u||!(f.e.f&F))&&se.push(f),f=f.next;var Me=se.length;if(Me>0){var jr=i&br&&s===0?t:null;if(v){for(w=0;w<Me;w+=1)se[w].a?.measure();for(w=0;w<Me;w+=1)se[w].a?.fix()}un(r,se,jr,l)}}v&&Oe(()=>{if(h!==void 0)for(p of h)p.a?.apply()}),g.first=r.first&&r.first.e,g.last=d&&d.e}function ln(e,r,t,n){n&je&&Ve(e.v,r),n&ze?Ve(e.i,t):e.i=t}function an(e,r,t,n,i,u,a,v,o){var s=(o&je)!==0,l=(o&dt)===0,c=s?l?We(i):I(i):i,f=o&ze?I(a):a,_={i:f,v:c,k:u,a:null,e:null,prev:t,next:n};try{return _.e=ae(()=>v(e,c,f),gr),_.e.prev=t&&t.e,_.e.next=n&&n.e,t===null?r.first=_:(t.next=_,t.e.next=_.e),n!==null&&(n.prev=_,n.e.prev=_.e),_}finally{}}function lr(e,r,t){for(var n=e.next?e.next.e.nodes_start:t,i=r?r.e.nodes_start:t,u=e.e.nodes_start;u!==n;){var a=Se(u);i.before(u),u=a}}function Y(e,r,t){r===null?e.first=t:(r.next=t,r.e.next=t&&t.e),t!==null&&(t.prev=r,t.e.prev=r&&r.e)}function Fn(e,r,t){Ce(()=>{var n=J(()=>r(e,t?.())||{});if(n?.destroy)return()=>n.destroy()})}function fn(e,r){r?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function on(e,r,t,n){var i=e.__attributes??={};i[r]!==(i[r]=t)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[rt]=t),t==null?e.removeAttribute(r):typeof t!="string"&&Kr(e).includes(r)?e[r]=t:e.setAttribute(r,t))}function qn(e,r,t,n,i=!1,u=!1,a=!1){var v=r||{},o=e.tagName==="OPTION";for(var s in r)s in t||(t[s]=null);var l=Kr(e),c=e.__attributes??={};for(const b in t){let y=t[b];if(o&&b==="value"&&y==null){e.value=e.__value="",v[b]=y;continue}var f=v[b];if(y!==f){v[b]=y;var _=b[0]+b[1];if(_!=="$$"){if(_==="on"){const x={},p="$$"+b;let w=b.slice(2);var d=Xt(w);if(Gt(w)&&(w=w.slice(0,-7),x.capture=!0),!d&&f){if(y!=null)continue;e.removeEventListener(w,v[p],x),v[p]=null}if(y!=null)if(d)e[`__${w}`]=y,jt([w]);else{let M=function(U){v[b].call(this,U)};v[p]=Wt(w,e,M,x)}else d&&(e[`__${w}`]=void 0)}else if(b==="style"&&y!=null)e.style.cssText=y+"";else if(b==="autofocus")Ut(e,!!y);else if(b==="__value"||b==="value"&&y!=null)e.value=e[b]=e.__value=y;else if(b==="selected"&&o)fn(e,y);else{var h=b;i||(h=Qt(h));var E=h==="defaultValue"||h==="defaultChecked";if(y==null&&!u&&!E)if(c[b]=null,h==="value"||h==="checked"){let x=e;if(h==="value"){let p=x.defaultValue;x.removeAttribute(h),x.defaultValue=p}else{let p=x.defaultChecked;x.removeAttribute(h),x.defaultChecked=p}}else e.removeAttribute(b);else E||l.includes(h)&&(u||typeof y!="string")?e[h]=y:typeof y!="function"&&on(e,h,y)}b==="style"&&"__styles"in e&&(e.__styles={})}}}return v}var ar=new Map;function Kr(e){var r=ar.get(e.nodeName);if(r)return r;ar.set(e.nodeName,r=[]);for(var t,n=e,i=Element.prototype;i!==n;){t=Gr(n);for(var u in t)t[u].set&&r.push(u);n=or(n)}return r}function Vn(e,r){var t=e.__className,n=cn(r);(t!==n||gr)&&(r==null?e.removeAttribute("class"):e.className=n,e.__className=n)}function cn(e){return e??""}function Bn(e,r,t){if(t){if(e.classList.contains(r))return;e.classList.add(r)}else{if(!e.classList.contains(r))return;e.classList.remove(r)}}const vn=()=>performance.now(),$={tick:e=>requestAnimationFrame(e),now:()=>vn(),tasks:new Set};function Wr(){const e=$.now();$.tasks.forEach(r=>{r.c(e)||($.tasks.delete(r),r.f())}),$.tasks.size!==0&&$.tick(Wr)}function _n(e){let r;return $.tasks.size===0&&$.tick(Wr),{promise:new Promise(t=>{$.tasks.add(r={c:e,f:t})}),abort(){$.tasks.delete(r)}}}function pe(e,r){e.dispatchEvent(new CustomEvent(r))}function dn(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const r=e.split("-");return r.length===1?r[0]:r[0]+r.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function fr(e){const r={},t=e.split(";");for(const n of t){const[i,u]=n.split(":");if(!i||u===void 0)break;const a=dn(i.trim());r[a]=u.trim()}return r}const hn=e=>e;function $n(e,r,t,n){var i=(e&pt)!==0,u="both",a,v=r.inert,o,s;function l(){var h=m,E=g;V(null),L(null);try{return a??=t()(r,n?.()??{},{direction:u})}finally{V(h),L(E)}}var c={is_global:i,in(){r.inert=v,pe(r,"introstart"),o=Ue(r,l(),s,1,()=>{pe(r,"introend"),o?.abort(),o=a=void 0})},out(h){r.inert=!0,pe(r,"outrostart"),s=Ue(r,l(),o,0,()=>{pe(r,"outroend"),h?.()})},stop:()=>{o?.abort(),s?.abort()}},f=g;if((f.transitions??=[]).push(c),He){var _=i;if(!_){for(var d=f.parent;d&&d.f&Ne;)for(;(d=d.parent)&&!(d.f&Te););_=!d||(d.f&_r)!==0}_&&Ce(()=>{J(()=>c.in())})}}function Ue(e,r,t,n,i){var u=n===1;if(Zr(r)){var a,v=!1;return Oe(()=>{if(!v){var E=r({direction:u?"in":"out"});a=Ue(e,E,t,n,i)}}),{abort:()=>{v=!0,a?.abort()},deactivate:()=>a.deactivate(),reset:()=>a.reset(),t:()=>a.t()}}if(t?.deactivate(),!r?.duration)return i(),{abort:O,deactivate:O,reset:O,t:()=>n};const{delay:o=0,css:s,tick:l,easing:c=hn}=r;var f=[];if(u&&t===void 0&&(l&&l(0,1),s)){var _=fr(s(0,1));f.push(_,_)}var d=()=>1-n,h=e.animate(f,{duration:o});return h.onfinish=()=>{var E=t?.t()??1-n;t?.abort();var b=n-E,y=r.duration*Math.abs(b),x=[];if(y>0){if(s)for(var p=Math.ceil(y/16.666666666666668),w=0;w<=p;w+=1){var M=E+b*c(w/p),U=s(M,1-M);x.push(fr(U))}d=()=>{var S=h.currentTime;return E+b*c(S/y)},l&&_n(()=>{if(h.playState!=="running")return!1;var S=d();return l(S,1-S),!0})}h=e.animate(x,{duration:y,fill:"forwards"}),h.onfinish=()=>{d=()=>n,l?.(n,1-n),i()}},{abort:()=>{h&&(h.cancel(),h.effect=null,h.onfinish=O)},deactivate:()=>{i=O},reset:()=>{n===0&&l?.(1,0)},t:()=>d()}}function Hn(e,r,t=r){Kt(e,"input",n=>{var i=n?e.defaultValue:e.value;if(i=Pe(e)?Fe(i):i,t(i),i!==(i=r())){var u=e.selectionStart,a=e.selectionEnd;e.value=i??"",a!==null&&(e.selectionStart=u,e.selectionEnd=Math.min(a,e.value.length))}}),J(r)==null&&e.value&&t(Pe(e)?Fe(e.value):e.value),St(()=>{var n=r();Pe(e)&&n===Fe(e.value)||e.type==="date"&&!n&&!e.value||n!==e.value&&(e.value=n??"")})}function Pe(e){var r=e.type;return r==="number"||r==="range"}function Fe(e){return e===""?null:+e}function Qe(e,r,t){if(e==null)return r(void 0),t&&t(void 0),O;const n=J(()=>e.subscribe(r,t));return n.unsubscribe?()=>n.unsubscribe():n}let ye=!1;function Un(e,r,t){const n=t[r]??={store:null,source:We(void 0),unsubscribe:O};if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=O;else{var i=!0;n.unsubscribe=Qe(e,u=>{i?n.source.v=u:P(n.source,u)}),i=!1}return H(n.source)}function Yn(){const e={};return At(()=>{for(var r in e)e[r].unsubscribe()}),e}function pn(e){var r=ye;try{return ye=!1,[e(),ye]}finally{ye=r}}const yn={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Kn(e,r,t){return new Proxy({props:e,exclude:r},yn)}function wn(e){for(var r=g,t=g;r!==null&&!(r.f&(R|_e));)r=r.parent;try{return L(r),e()}finally{L(t)}}function Wn(e,r,t,n){var i=!yr,u=(t&ht)!==0,a=!1,v;[v,a]=pn(()=>e[r]);var o=we in e||et in e,s=re(e,r)?.set??(o&&u&&r in e?p=>e[r]=p:void 0),l=n,c=!0,f=!1,_=()=>(f=!0,c&&(c=!1,l=n),l);v===void 0&&n!==void 0&&(s&&i&&lt(),v=_(),s&&s(v));var d;if(d=()=>{var p=e[r];return p===void 0?_():(c=!0,f=!1,p)},s){var h=e.$$legacy;return function(p,w){return arguments.length>0?((!w||h||a)&&s(w?d():p),p):d()}}var E=!1,b=!1,y=We(v),x=wn(()=>Et(()=>{var p=d(),w=H(y);return E?(E=!1,b=!0,w):(b=!1,y.v=p)}));return function(p,w){if(arguments.length>0){const M=w?H(x):Q(p);return x.equals(M)||(E=!0,P(y,M),f&&l!==void 0&&(l=M),J(()=>H(x))),p}return H(x)}}function bn(e){A===null&&Rr(),Tt(()=>{const r=J(e);if(typeof r=="function")return r})}function jn(e){A===null&&Rr(),bn(()=>()=>J(e))}const gn="5";typeof window<"u"&&(window.__svelte||={v:new Set}).v.add(gn);const Z=[];function En(e,r){return{subscribe:mn(e,r).subscribe}}function mn(e,r=O){let t=null;const n=new Set;function i(v){if(pr(e,v)&&(e=v,t)){const o=!Z.length;for(const s of n)s[1](),Z.push(s,e);if(o){for(let s=0;s<Z.length;s+=2)Z[s][0](Z[s+1]);Z.length=0}}}function u(v){i(v(e))}function a(v,o=O){const s=[v,o];return n.add(s),n.size===1&&(t=r(i,u)||O),v(e),()=>{n.delete(s),n.size===0&&t&&(t(),t=null)}}return{set:i,update:u,subscribe:a}}function zn(e,r,t){const n=!Array.isArray(e),i=n?[e]:e;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const u=r.length<2;return En(t,(a,v)=>{let o=!1;const s=[];let l=0,c=O;const f=()=>{if(l)return;c();const d=r(n?s[0]:s,a,v);u?a(d):c=typeof d=="function"?d:O},_=i.map((d,h)=>Qe(d,E=>{s[h]=E,l&=~(1<<h),o&&f()},()=>{l|=1<<h}));return o=!0,f(),function(){cr(_),c(),o=!1}})}function Gn(e){return{subscribe:e.subscribe.bind(e)}}function Jn(e){let r;return Qe(e,t=>r=t)(),r}const xn=e=>e;function Xn(e,{delay:r=0,duration:t=400,easing:n=xn}={}){const i=+getComputedStyle(e).opacity;return{delay:r,duration:t,easing:n,css:u=>`opacity: ${u*i}`}}export{Fn as A,Rn as B,Ht as C,$t as D,Un as E,$n as F,Xn as G,J as H,Pn as I,Ln as J,Mn as K,jt as L,Dn as M,Gn as a,H as b,P as c,zn as d,Et as e,Wn as f,Jn as g,Sn as h,Hn as i,In as j,On as k,Nn as l,An as m,Vn as n,jn as o,Q as p,Bn as q,En as r,kn as s,Cn as t,qn as u,Kn as v,mn as w,Yn as x,Tt as y,Tn as z};