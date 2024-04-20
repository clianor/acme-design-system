import{O as o,j as s,X as n,a as p}from"./index-DqPaFGzu.js";import"./index-BBkUAzwr.js";const c={title:"typography/Strong",component:o,argTypes:{wrap:{control:{type:"select"},options:["wrap","nowrap","pretty","balance"],description:"텍스트의 줄바꿈 방식을 설정합니다.",table:{type:{summary:["wrap","nowrap","pretty","balance"].join("|")}}},truncate:{control:{type:"boolean"},description:"텍스트가 잘릴지 여부를 결정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}},e={render:()=>s(n,{children:["The most important thing to remember is, ",p(o,{children:"stay positive"}),"."]})};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    return <Text>
        The most important thing to remember is, <Strong>stay positive</Strong>.
      </Text>;
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,c as default};
