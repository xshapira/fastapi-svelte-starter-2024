(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function y(){}function F(e){return e()}function K(){return Object.create(null)}function A(e){e.forEach(F)}function H(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let S;function R(e,t){return S||(S=document.createElement("a")),S.href=t,e===S.href}function ee(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function D(e,t,n){e.insertBefore(t,n||null)}function V(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function k(e){return document.createTextNode(e)}function w(){return k(" ")}function te(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function u(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ne(e){return Array.from(e.childNodes)}function re(e,t){t=""+t,e.data!==t&&(e.data=t)}let M;function L(e){M=e}const $=[],T=[];let v=[];const U=[],oe=Promise.resolve();let q=!1;function se(){q||(q=!0,oe.then(G))}function P(e){v.push(e)}const j=new Set;let _=0;function G(){if(_!==0)return;const e=M;do{try{for(;_<$.length;){const t=$[_];_++,L(t),ie(t.$$)}}catch(t){throw $.length=0,_=0,t}for(L(null),$.length=0,_=0;T.length;)T.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];j.has(n)||(j.add(n),n())}v.length=0}while($.length);for(;U.length;)U.pop()();q=!1,j.clear(),L(e)}function ie(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}function le(e){const t=[],n=[];v.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),v=t}const C=new Set;let ce;function J(e,t){e&&e.i&&(C.delete(e),e.i(t))}function ue(e,t,n,r){if(e&&e.o){if(C.has(e))return;C.add(e),ce.c.push(()=>{C.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function fe(e){e&&e.c()}function Q(e,t,n,r){const{fragment:o,after_update:s}=e.$$;o&&o.m(t,n),r||P(()=>{const l=e.$$.on_mount.map(F).filter(H);e.$$.on_destroy?e.$$.on_destroy.push(...l):A(l),e.$$.on_mount=[]}),s.forEach(P)}function W(e,t){const n=e.$$;n.fragment!==null&&(le(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ae(e,t){e.$$.dirty[0]===-1&&($.push(e),se(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,r,o,s,l,f=[-1]){const d=M;L(e);const i=e.$$={fragment:null,ctx:[],props:s,update:y,not_equal:o,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:K(),dirty:f,skip_bound:!1,root:t.target||d.$$.root};l&&l(i.root);let b=!1;if(i.ctx=n?n(e,t.props||{},(a,x,...p)=>{const m=p.length?p[0]:x;return i.ctx&&o(i.ctx[a],i.ctx[a]=m)&&(!i.skip_bound&&i.bound[a]&&i.bound[a](m),b&&ae(e,a)),x}):[],i.update(),b=!0,A(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const a=ne(t.target);i.fragment&&i.fragment.l(a),a.forEach(V)}else i.fragment&&i.fragment.c();t.intro&&J(e.$$.fragment),Q(e,t.target,t.anchor,t.customElement),G()}L(d)}class Y{$destroy(){W(this,1),this.$destroy=y}$on(t,n){if(!H(n))return y;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const de=""+new URL("../images/svelte.svg",import.meta.url).href,he=""+new URL("../../vite.svg",import.meta.url).href;function me(e){let t,n,r,o,s;return{c(){t=h("button"),n=k("count is "),r=k(e[0])},m(l,f){D(l,t,f),c(t,n),c(t,r),o||(s=te(t,"click",e[1]),o=!0)},p(l,[f]){f&1&&re(r,l[0])},i:y,o:y,d(l){l&&V(t),o=!1,s()}}}function pe(e,t,n){let r=0;return[r,()=>{n(0,r+=1)}]}class ge extends Y{constructor(t){super(),X(this,t,pe,me,z,{})}}function _e(e){let t,n,r,o,s,l,f,d,i,b,a,x,p,m,B,N,I,E,O;return m=new ge({}),{c(){t=h("main"),n=h("div"),r=h("a"),o=h("img"),l=w(),f=h("a"),d=h("img"),b=w(),a=h("h1"),a.textContent="Vite + Svelte",x=w(),p=h("div"),fe(m.$$.fragment),B=w(),N=h("p"),N.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',I=w(),E=h("p"),E.textContent="Click on the Vite and Svelte logos to learn more",R(o.src,s=he)||u(o,"src",s),u(o,"class","logo svelte-11cv5lq"),u(o,"alt","Vite Logo"),u(r,"href","https://vitejs.dev"),u(r,"target","_blank"),u(r,"rel","noreferrer"),R(d.src,i=de)||u(d,"src",i),u(d,"class","logo svelte svelte-11cv5lq"),u(d,"alt","Svelte Logo"),u(f,"href","https://svelte.dev"),u(f,"target","_blank"),u(f,"rel","noreferrer"),u(p,"class","card"),u(E,"class","read-the-docs svelte-11cv5lq")},m(g,Z){D(g,t,Z),c(t,n),c(n,r),c(r,o),c(n,l),c(n,f),c(f,d),c(t,b),c(t,a),c(t,x),c(t,p),Q(m,p,null),c(t,B),c(t,N),c(t,I),c(t,E),O=!0},p:y,i(g){O||(J(m.$$.fragment,g),O=!0)},o(g){ue(m.$$.fragment,g),O=!1},d(g){g&&V(t),W(m)}}}class $e extends Y{constructor(t){super(),X(this,t,null,_e,z,{})}}new $e({target:document.getElementById("app")});