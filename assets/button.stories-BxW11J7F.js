import{r as J,R as d}from"./index-BBkUAzwr.js";var L={exports:{}},b={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W=J,Y=Symbol.for("react.element"),Z=Symbol.for("react.fragment"),H=Object.prototype.hasOwnProperty,K=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function $(e,r,t){var n,a={},o=null,s=null;t!==void 0&&(o=""+t),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(s=r.ref);for(n in r)H.call(r,n)&&!M.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)a[n]===void 0&&(a[n]=r[n]);return{$$typeof:Y,type:e,key:o,ref:s,props:a,_owner:K.current}}b.Fragment=Z;b.jsx=$;b.jsxs=$;L.exports=b;var I=L.exports;const i=I.jsx,A=I.jsxs;var Q=["gray","gold","bronze","brown","yellow","amber","orange","tomato","red","ruby","crimson","pink","plum","purple","violet","iris","indigo","blue","cyan","teal","jade","green","grass","lime","mint","sky"];function X(e,r){e&&(typeof e=="function"?e(r):e.current=r)}function ee(...e){return r=>{e.forEach(t=>{X(t,r)})}}function re(e,r){let t={...r};return Object.entries(r).forEach(([n,a])=>{let o=e[n],s=/^on[A-Z]/.test(n);s&&o?t[n]=(...u)=>{a(...u),o(...u)}:s&&!a?t[n]=o:n==="style"?t[n]={...o,...a}:n==="className"&&(t[n]=[o,a].filter(Boolean).join(" "))}),{...e,...t}}function ne(e,r){let{children:t,...n}=e,a=d.Children.toArray(t),o=a[0];return d.isValidElement(o)?d.cloneElement(o,{...re(n,o.props),ref:r?ee(r,o.ref):o.ref}):a.length>1?d.Children.only(null):null}var te=d.forwardRef(ne),ae=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],oe=ae.reduce((e,r)=>{let t=d.forwardRef(({asChild:n,...a},o)=>i(n?te:r,{...a,ref:o}));return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function w(e){return e?"":void 0}function se(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function ie(e){var r=se(e,"string");return typeof r=="symbol"?r:String(r)}function le(e,r,t){return r=ie(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function _(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?z(Object(t),!0).forEach(function(n){le(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function q(e,r){var t={};for(var n in e)t[n]=r(e[n],n);return t}var ue=(e,r,t)=>{for(var n of Object.keys(e)){var a;if(e[n]!==((a=r[n])!==null&&a!==void 0?a:t[n]))return!1}return!0},F=e=>{var r=t=>{var n=e.defaultClassName,a=_(_({},e.defaultVariants),t);for(var o in a){var s,u=(s=a[o])!==null&&s!==void 0?s:e.defaultVariants[o];if(u!=null){var c=u;typeof c=="boolean"&&(c=c===!0?"true":"false");var v=e.variantClassNames[o][c];v&&(n+=" "+v)}}for(var[G,U]of e.compoundVariants)ue(G,a,e.defaultVariants)&&(n+=" "+U);return n};return r.variants=()=>Object.keys(e.variantClassNames),r.classNames={get base(){return e.defaultClassName.split(" ")[0]},get variants(){return q(e.variantClassNames,t=>q(t,n=>n.split(" ")[0]))}},r},ce=F({defaultClassName:"_1yqwn6z0",variantClassNames:{size:{1:"_1yqwn6z1",2:"_1yqwn6z2",3:"_1yqwn6z3",4:"_1yqwn6z4"},color:{gray:"_1yqwn6z5",gold:"_1yqwn6z6",bronze:"_1yqwn6z7",brown:"_1yqwn6z8",yellow:"_1yqwn6z9",amber:"_1yqwn6za",orange:"_1yqwn6zb",tomato:"_1yqwn6zc",red:"_1yqwn6zd",ruby:"_1yqwn6ze",crimson:"_1yqwn6zf",pink:"_1yqwn6zg",plum:"_1yqwn6zh",purple:"_1yqwn6zi",violet:"_1yqwn6zj",iris:"_1yqwn6zk",indigo:"_1yqwn6zl",blue:"_1yqwn6zm",cyan:"_1yqwn6zn",teal:"_1yqwn6zo",jade:"_1yqwn6zp",green:"_1yqwn6zq",grass:"_1yqwn6zr",lime:"_1yqwn6zs",mint:"_1yqwn6zt",sky:"_1yqwn6zu"}},defaultVariants:{size:"2",color:"indigo"},compoundVariants:[]}),de=F({defaultClassName:"_1yqwn6zw",variantClassNames:{size:{1:"_1yqwn6zx",2:"_1yqwn6zy",3:"_1yqwn6zz",4:"_1yqwn6z10"}},defaultVariants:{size:"2"},compoundVariants:[]});function pe({disabled:e=!1,loading:r=!1,loadingText:t,size:n,color:a,children:o,...s},u){let c=e||r;return A(oe.button,{ref:u,className:ce({size:n,color:a}),"data-accent-color":a,"data-disabled":w(c),"data-loading":w(r),disabled:c,type:"button",...s,children:[r?i("div",{className:de({size:n})}):o,r&&t?i("span",{children:t}):null]})}var l=d.forwardRef(pe);l.displayName="Button";const ye={component:l,tags:["autodocs"],title:"Components/Button",argTypes:{size:{control:{type:"select"},options:["1","2","3","4"],defaultValue:"2",description:"버튼의 크기를 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"2"}}},disabled:{control:"boolean",defaultValue:!1,description:"버튼을 비활성화 상태로 설정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{control:"boolean",defaultValue:!1,description:"버튼을 로딩 상태로 설정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loadingText:{control:"text",defaultValue:"Loading...",description:"로딩 상태일 때 표시할 텍스트를 설정합니다.",table:{type:{summary:"string"}}},color:{control:{type:"select"},options:Q,defaultValue:"indigo",description:"버튼의 색상을 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"indigo"}}}}},p={render:e=>A("div",{style:{display:"flex",columnGap:"8px",alignItems:"center"},children:[i(l,{...e,size:"4"}),i(l,{...e,size:"3"}),i(l,{...e,size:"2"}),i(l,{...e,size:"1"})]}),args:{children:"Click me",type:"button"}},m={render:e=>i(l,{...e}),args:{children:"Click me",type:"button"}},y={args:{children:"Click me",type:"button",disabled:!0}},f={args:{children:"Click me",type:"button",loading:!0,loadingText:"Loading..."}},g={render:e=>i(l,{...e}),args:{children:i("span",{children:"Click me"}),asChild:!0}};var h,j,C;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(C=(j=p.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var O,x,k;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => <Button {...props} />,
  args: {
    children: 'Click me',
    type: 'button'
  }
}`,...(k=(x=m.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var N,P,V;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Click me',
    type: 'button',
    disabled: true
  }
}`,...(V=(P=y.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var S,E,R;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Click me',
    type: 'button',
    loading: true,
    loadingText: 'Loading...'
  }
}`,...(R=(E=f.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var B,T,D;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => <Button {...props} />,
  args: {
    children: <span>Click me</span>,
    asChild: true
  }
}`,...(D=(T=g.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const fe=["Size","Primary","Disabled","Loading","CustomButton"];export{g as CustomButton,y as Disabled,f as Loading,m as Primary,p as Size,fe as __namedExportsOrder,ye as default};
