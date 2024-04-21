import{i as t,j as x,b as f,a as e,x as g,D as w}from"./index-B7LG5z0r.js";import"./index-BBkUAzwr.js";const Q={title:"typography/Quote",component:t,parameters:{componentSubtitle:"짧은 인라인 인용문 컴포넌트"},argTypes:{wrap:{control:{type:"select"},options:["wrap","nowrap","pretty","balance"],description:"텍스트의 줄바꿈 방식을 설정합니다.",table:{type:{summary:["wrap","nowrap","pretty","balance"].join("|")}}},truncate:{control:{type:"boolean"},description:"텍스트가 잘릴지 여부를 결정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}},a={render:()=>x(f,{children:["His famous quote,"," ",e(t,{children:"Styles come and go. Good design is a language, not a style"}),", elegantly summs up Massimo’s philosophy of design."]})},r={render:o=>e(g,{flexDirection:"column",rowGap:3,children:["nowrap","balance","pretty"].map(s=>e(w,{maxWidth:50,children:e(t,{...o,truncate:!0,wrap:s,children:"The quick brown fox jumps over the lazy dog"})},s))})},n={render:o=>e(g,{maxWidth:50,children:e(t,{...o,truncate:!0,children:"The goal of typography is to relate font size, line height, and line width in a proportional way that maximizes beauty and makes reading easier and more pleasant."})})};var p,i,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <Text>
        His famous quote,{' '}
        <Quote>
          Styles come and go. Good design is a language, not a style
        </Quote>
        , elegantly summs up Massimo’s philosophy of design.
      </Text>;
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var u,c,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => {
    return <Flex flexDirection="column" rowGap={3}>
        {(['nowrap', 'balance', 'pretty'] as const).map(wrap => {
        return <Box key={wrap} maxWidth={50}>
              <Quote {...props} truncate wrap={wrap}>
                The quick brown fox jumps over the lazy dog
              </Quote>
            </Box>;
      })}
      </Flex>;
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,y,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => {
    return <Flex maxWidth={50}>
        <Quote {...props} truncate>
          The goal of typography is to relate font size, line height, and line
          width in a proportional way that maximizes beauty and makes reading
          easier and more pleasant.
        </Quote>
      </Flex>;
  }
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const j=["Default","Wrap","Truncate"];export{a as Default,n as Truncate,r as Wrap,j as __namedExportsOrder,Q as default};
