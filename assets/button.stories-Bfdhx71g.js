import{r as $,R as A}from"./index-BBkUAzwr.js";var E={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F=$,G=Symbol.for("react.element"),U=Symbol.for("react.fragment"),J=Object.prototype.hasOwnProperty,W=F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y={key:!0,ref:!0,__self:!0,__source:!0};function R(e,r,t){var n,a={},o=null,s=null;t!==void 0&&(o=""+t),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(s=r.ref);for(n in r)J.call(r,n)&&!Y.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)a[n]===void 0&&(a[n]=r[n]);return{$$typeof:G,type:e,key:o,ref:s,props:a,_owner:W.current}}f.Fragment=U;f.jsx=R;f.jsxs=R;E.exports=f;var T=E.exports;const l=T.jsx,B=T.jsxs;var H=["gray","gold","bronze","brown","yellow","amber","orange","tomato","red","ruby","crimson","pink","plum","purple","violet","iris","indigo","blue","cyan","teal","jade","green","grass","lime","mint","sky"];function g(e){return e?"":void 0}function K(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function M(e){var r=K(e,"string");return typeof r=="symbol"?r:String(r)}function Q(e,r,t){return r=M(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function _(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?z(Object(t),!0).forEach(function(n){Q(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function w(e,r){var t={};for(var n in e)t[n]=r(e[n],n);return t}var X=(e,r,t)=>{for(var n of Object.keys(e)){var a;if(e[n]!==((a=r[n])!==null&&a!==void 0?a:t[n]))return!1}return!0},D=e=>{var r=t=>{var n=e.defaultClassName,a=_(_({},e.defaultVariants),t);for(var o in a){var s,c=(s=a[o])!==null&&s!==void 0?s:e.defaultVariants[o];if(c!=null){var i=c;typeof i=="boolean"&&(i=i===!0?"true":"false");var b=e.variantClassNames[o][i];b&&(n+=" "+b)}}for(var[L,I]of e.compoundVariants)X(L,a,e.defaultVariants)&&(n+=" "+I);return n};return r.variants=()=>Object.keys(e.variantClassNames),r.classNames={get base(){return e.defaultClassName.split(" ")[0]},get variants(){return w(e.variantClassNames,t=>w(t,n=>n.split(" ")[0]))}},r},Z=D({defaultClassName:"_1yqwn6z0",variantClassNames:{size:{1:"_1yqwn6z1",2:"_1yqwn6z2",3:"_1yqwn6z3",4:"_1yqwn6z4"},color:{gray:"_1yqwn6z5",gold:"_1yqwn6z6",bronze:"_1yqwn6z7",brown:"_1yqwn6z8",yellow:"_1yqwn6z9",amber:"_1yqwn6za",orange:"_1yqwn6zb",tomato:"_1yqwn6zc",red:"_1yqwn6zd",ruby:"_1yqwn6ze",crimson:"_1yqwn6zf",pink:"_1yqwn6zg",plum:"_1yqwn6zh",purple:"_1yqwn6zi",violet:"_1yqwn6zj",iris:"_1yqwn6zk",indigo:"_1yqwn6zl",blue:"_1yqwn6zm",cyan:"_1yqwn6zn",teal:"_1yqwn6zo",jade:"_1yqwn6zp",green:"_1yqwn6zq",grass:"_1yqwn6zr",lime:"_1yqwn6zs",mint:"_1yqwn6zt",sky:"_1yqwn6zu"}},defaultVariants:{size:"2",color:"indigo"},compoundVariants:[]}),ee=D({defaultClassName:"_1yqwn6zw",variantClassNames:{size:{1:"_1yqwn6zx",2:"_1yqwn6zy",3:"_1yqwn6zz",4:"_1yqwn6z10"}},defaultVariants:{size:"2"},compoundVariants:[]});function re({disabled:e=!1,loading:r=!1,loadingText:t,size:n,color:a,children:o,...s},c){let i=e||r;return B("button",{ref:c,className:Z({size:n,color:a}),"data-accent-color":a,"data-disabled":g(i),"data-loading":g(r),disabled:i,type:"button",...s,children:[r?l("div",{className:ee({size:n})}):o,r&&t?l("span",{children:t}):null]})}var u=A.forwardRef(re);u.displayName="Button";const te={component:u,tags:["autodocs"],title:"Components/Button",argTypes:{size:{control:{type:"select"},options:["1","2","3","4"],defaultValue:"2",description:"버튼의 크기를 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"2"}}},disabled:{control:"boolean",defaultValue:!1,description:"버튼을 비활성화 상태로 설정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{control:"boolean",defaultValue:!1,description:"버튼을 로딩 상태로 설정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loadingText:{control:"text",defaultValue:"Loading...",description:"로딩 상태일 때 표시할 텍스트를 설정합니다.",table:{type:{summary:"string"}}},color:{control:{type:"select"},options:H,defaultValue:"indigo",description:"버튼의 색상을 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"indigo"}}}}},d={render:e=>B("div",{style:{display:"flex",columnGap:"8px",alignItems:"center"},children:[l(u,{...e,size:"4"}),l(u,{...e,size:"3"}),l(u,{...e,size:"2"}),l(u,{...e,size:"1"})]}),args:{children:"Click me",type:"button"}},p={render:e=>l(u,{...e}),args:{children:"Click me",type:"button"}},y={args:{children:"Click me",type:"button",disabled:!0}},m={args:{children:"Click me",type:"button",loading:!0,loadingText:"Loading..."}};var v,q,j;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    return <div style={{
      display: 'flex',
      columnGap: '8px',
      alignItems: 'center'
    }}>
        <Button {...props} size="4" />
        <Button {...props} size="3" />
        <Button {...props} size="2" />
        <Button {...props} size="1" />
      </div>;
  },
  args: {
    children: 'Click me',
    type: 'button'
  }
}`,...(j=(q=d.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var O,x,h;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => <Button {...props} />,
  args: {
    children: 'Click me',
    type: 'button'
  }
}`,...(h=(x=p.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var k,C,N;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Click me',
    type: 'button',
    disabled: true
  }
}`,...(N=(C=y.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var P,V,S;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Click me',
    type: 'button',
    loading: true,
    loadingText: 'Loading...'
  }
}`,...(S=(V=m.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};const ae=["Size","Primary","Disabled","Loading"];export{y as Disabled,m as Loading,p as Primary,d as Size,ae as __namedExportsOrder,te as default};
