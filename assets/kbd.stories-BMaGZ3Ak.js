import{M as n,a as d,x as u}from"./index-B7LG5z0r.js";import{r as x}from"./index-BBkUAzwr.js";import{f as a}from"./constants-BsGff1eb.js";import"./index-BO4AexmX.js";const z={title:"typography/Kbd",component:n,parameters:{componentSubtitle:"키보드 입력 또는 단축키를 나타내는 컴포넌트"},argTypes:{size:{control:{type:"select"},options:a,description:"폰트 크기를 설정합니다.",table:{type:{summary:a.join("|")}}}},args:{children:"Shift + Tab"}},e={render:t=>d(n,{...t})},r={render:t=>d(u,{alignItems:"start",flexDirection:"column",rowGap:4,children:[...new Array(9)].map((f,o)=>x.createElement(n,{...t,key:o.toLocaleString(),size:o+1}))})};var s,p,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => {
    return <Kbd {...props} />;
  }
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var c,m,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: props => {
    return <Flex alignItems="start" flexDirection="column" rowGap={4}>
        {[...new Array(9)].map((_, index) => {
        return <Kbd {...props} key={index.toLocaleString()} size={(index + 1 as never)} />;
      })}
      </Flex>;
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const h=["Default","Size"];export{e as Default,r as Size,h as __namedExportsOrder,z as default};
