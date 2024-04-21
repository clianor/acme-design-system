import{U as n,a as s}from"./index-B7LG5z0r.js";import{n as a}from"./index-BO4AexmX.js";import"./index-BBkUAzwr.js";const p={title:"layouts/Container",component:n,parameters:{componentSubtitle:"컨테이너 컴포넌트",docs:{description:{component:"페이지 콘텐츠의 최대 너비를 제한합니다."}}},argTypes:{display:{control:{type:"select"},options:["none","initial"],description:"컨테이너의 디스플레이 유형을 설정합니다.",table:{type:{summary:["none","initial"].join("|")}}},size:{control:{type:"select"},options:[1,2,3,4],description:"컨테이너의 크기를 설정합니다.",table:{type:{summary:[1,2,3,4].join(" | "),detail:"1 (448px) | 2 (688px) | 3 (880px) | 4 (1136px)"},defaultValue:{summary:"4"}}},align:{control:{type:"select"},options:["left","center","right"],description:"컨테이너의 정렬 방식을 설정합니다.",table:{type:{summary:["left","center","right"].join("|")},defaultValue:{summary:"center"}}}},args:{size:1}},e={args:{children:s("div",{style:{width:"100%",height:"128px",background:a.colors.scale.blue[4]}})}};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      width: '100%',
      height: '128px',
      background: vars.colors.scale.blue[4]
    }} />
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,p as default};
