import{V as s,a as o,i as n}from"./index-3GkCpiYh.js";import"./index-BBkUAzwr.js";const c={title:"layouts/Container",component:s,argTypes:{display:{control:{type:"select"},options:["none","initial"],description:"컨테이너의 디스플레이 유형을 설정합니다.",table:{type:{summary:["none","initial"].join("|")}}},size:{control:{type:"select"},options:[1,2,3,4],description:"컨테이너의 크기를 설정합니다.",table:{type:{summary:[1,2,3,4].join(" | "),detail:"1 (448px) | 2 (688px) | 3 (880px) | 4 (1136px)"},defaultValue:{summary:"4"}}},align:{control:{type:"select"},options:["left","center","right"],description:"컨테이너의 정렬 방식을 설정합니다.",table:{type:{summary:["left","center","right"].join("|")},defaultValue:{summary:"center"}}}},args:{size:1}},e={args:{children:o("div",{style:{width:"100%",height:"128px",background:n.colors.scale.blue[4]}})}};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      width: '100%',
      height: '128px',
      background: vars.colors.scale.blue[4]
    }} />
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,c as default};
