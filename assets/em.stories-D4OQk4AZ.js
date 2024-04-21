import{T as n,j as w,b,a as e,x,D as g}from"./index-B7LG5z0r.js";import"./index-BBkUAzwr.js";const E={title:"typography/Em",component:n,parameters:{componentSubtitle:"강조된 텍스트 컴포넌트"},argTypes:{wrap:{control:{type:"select"},options:["wrap","nowrap","pretty","balance"],description:"텍스트의 줄바꿈 방식을 설정합니다.",table:{type:{summary:["wrap","nowrap","pretty","balance"].join("|")}}},truncate:{control:{type:"boolean"},description:"텍스트가 잘릴지 여부를 결정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}},r={render:()=>w(b,{children:["The most important thing to remember is, ",e(n,{children:"stay positive"}),"."]})},a={render:o=>e(x,{flexDirection:"column",rowGap:3,children:["nowrap","balance","pretty"].map(s=>e(g,{maxWidth:50,children:e(n,{...o,truncate:!0,wrap:s,children:"The quick brown fox jumps over the lazy dog"})},s))})},t={render:o=>e(x,{maxWidth:50,children:e(n,{...o,truncate:!0,children:"The goal of typography is to relate font size, line height, and line width in a proportional way that maximizes beauty and makes reading easier and more pleasant."})})};var p,i,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <Text>
        The most important thing to remember is, <Em>stay positive</Em>.
      </Text>;
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: props => {
    return <Flex flexDirection="column" rowGap={3}>
        {(['nowrap', 'balance', 'pretty'] as const).map(wrap => {
        return <Box key={wrap} maxWidth={50}>
              <Em {...props} truncate wrap={wrap}>
                The quick brown fox jumps over the lazy dog
              </Em>
            </Box>;
      })}
      </Flex>;
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,h,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => {
    return <Flex maxWidth={50}>
        <Em {...props} truncate>
          The goal of typography is to relate font size, line height, and line
          width in a proportional way that maximizes beauty and makes reading
          easier and more pleasant.
        </Em>
      </Flex>;
  }
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const j=["Default","Wrap","Truncate"];export{r as Default,t as Truncate,a as Wrap,j as __namedExportsOrder,E as default};
