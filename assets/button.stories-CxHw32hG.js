import{r as g}from"./index-BBkUAzwr.js";var j={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=g,E=Symbol.for("react.element"),S=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,N=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function P(r,e,n){var t,a={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(t in e)C.call(e,t)&&!R.hasOwnProperty(t)&&(a[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)a[t]===void 0&&(a[t]=e[t]);return{$$typeof:E,type:r,key:o,ref:s,props:a,_owner:N.current}}i.Fragment=S;i.jsx=P;i.jsxs=P;j.exports=i;var V=j.exports;const _=V.jsx;function z(r,e){if(typeof r!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var t=n.call(r,e||"default");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function B(r){var e=z(r,"string");return typeof e=="symbol"?e:String(e)}function D(r,e,n){return e=B(e),e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function c(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),n.push.apply(n,t)}return n}function d(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?c(Object(n),!0).forEach(function(t){D(r,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(n,t))})}return r}function v(r,e){var n={};for(var t in r)n[t]=e(r[t],t);return n}var H=(r,e,n)=>{for(var t of Object.keys(r)){var a;if(r[t]!==((a=e[t])!==null&&a!==void 0?a:n[t]))return!1}return!0},T=r=>{var e=n=>{var t=r.defaultClassName,a=d(d({},r.defaultVariants),n);for(var o in a){var s,f=(s=a[o])!==null&&s!==void 0?s:r.defaultVariants[o];if(f!=null){var u=f;typeof u=="boolean"&&(u=u===!0?"true":"false");var m=r.variantClassNames[o][u];m&&(t+=" "+m)}}for(var[w,x]of r.compoundVariants)H(w,a,r.defaultVariants)&&(t+=" "+x);return t};return e.variants=()=>Object.keys(r.variantClassNames),e.classNames={get base(){return r.defaultClassName.split(" ")[0]},get variants(){return v(r.variantClassNames,n=>v(n,t=>t.split(" ")[0]))}},e},q=T({defaultClassName:"_1yqwn6z0",variantClassNames:{size:{1:"_1yqwn6z1",2:"_1yqwn6z2",3:"_1yqwn6z3"}},defaultVariants:{size:"2"},compoundVariants:[]});function p({children:r,...e}){return _("button",{...e,className:q({}),"data-disabled":!0,type:"button",children:r})}p.displayName="Button";const I={component:p,tags:["autodocs"]},l={render:r=>_(p,{...r,onClick:()=>{alert("Hello from Turborepo!")},children:"Hello"}),name:"Button",args:{children:"Hello",type:"button"}};var b,y,O;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <Button {...props} onClick={(): void => {
    // eslint-disable-next-line no-alert -- alert for demo
    alert('Hello from Turborepo!');
  }}>
      Hello
    </Button>,
  name: 'Button',
  args: {
    children: 'Hello',
    type: 'button'
  }
}`,...(O=(y=l.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};const L=["Primary"];export{l as Primary,L as __namedExportsOrder,I as default};
