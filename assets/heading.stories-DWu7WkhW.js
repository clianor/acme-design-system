import{X as n,j as R,x as a,a as r,D as X}from"./index-B7LG5z0r.js";import{r as g}from"./index-BBkUAzwr.js";import{r as m}from"./index-BO4AexmX.js";import{f as y}from"./constants-BsGff1eb.js";const N={title:"typography/Heading",component:n,parameters:{componentSubtitle:"헤딩 컴포넌트"},argTypes:{as:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6"],description:"Heading 태그를 설정합니다.",table:{type:{summary:["h1","h2","h3","h4","h5","h6"].join("|")}}},size:{control:{type:"select"},options:y,description:"폰트 크기를 설정합니다.",table:{type:{summary:y.join("|")}}},weight:{control:{type:"select"},options:["light","regular","medium","bold"],description:"폰트 굵기를 설정합니다.",table:{type:{summary:["light","regular","medium","bold"].join("|")}}},align:{control:{type:"select"},options:["left","center","right","justify"],description:"텍스트의 정렬 방식을 설정합니다.",table:{type:{summary:["left","center","right","justify"].join("|")}}},wrap:{control:{type:"select"},options:["wrap","nowrap","pretty","balance"],description:"텍스트의 줄바꿈 방식을 설정합니다.",table:{type:{summary:["wrap","nowrap","pretty","balance"].join("|")}}},color:{control:{type:"select"},options:m,defaultValue:"indigo",description:"텍스트의 색상을 설정합니다.",table:{type:{summary:m.join("|")},defaultValue:{summary:"indigo"}}},truncate:{control:{type:"boolean"},description:"텍스트가 잘릴지 여부를 결정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{size:4}},t={args:{children:"The quick brown fox jumps over the lazy dog."}},s={render:e=>R(a,{alignItems:"start",flexDirection:"column",rowGap:3,children:[r(n,{...e,as:"h1",children:"Level 1"}),r(n,{...e,as:"h2",children:"Level 2"}),r(n,{...e,as:"h3",children:"Level 3"})]})},i={render:e=>r(a,{alignItems:"start",flexDirection:"column",rowGap:3,children:[...new Array(9)].map((o,h)=>g.createElement(n,{...e,key:h.toLocaleString(),size:h+1},"The quick brown fox jumps over the lazy dog"))})},l={render:e=>r(a,{alignItems:"start",flexDirection:"column",rowGap:3,children:["regular","bold"].map(o=>g.createElement(n,{...e,key:o,weight:o},"The quick brown fox jumps over the lazy dog"))})},c={render:e=>R(a,{flexDirection:"column",rowGap:3,children:[r(n,{...e,align:"left",children:"Left-aligned"}),r(n,{...e,align:"center",children:"Center-aligned"}),r(n,{...e,align:"right",children:"Right-aligned"})]})},p={render:e=>r(a,{flexDirection:"column",rowGap:3,children:["nowrap","balance","pretty"].map(o=>r(X,{maxWidth:50,children:r(n,{...e,truncate:!0,wrap:o,children:"The quick brown fox jumps over the lazy dog"})},o))})},d={render:e=>r(a,{flexDirection:"column",rowGap:3,children:m.map(o=>g.createElement(n,{...e,key:o,color:o},"The quick brown fox jumps over the lazy dog"))})},u={render:e=>r(a,{maxWidth:50,children:r(n,{...e,truncate:!0,children:"The quick brown fox jumps over the lazy dog"})})};var x,f,w;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.'
  }
}`,...(w=(f=t.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var b,H,j;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => {
    return <Flex alignItems="start" flexDirection="column" rowGap={3}>
        <Heading {...props} as="h1">
          Level 1
        </Heading>
        <Heading {...props} as="h2">
          Level 2
        </Heading>
        <Heading {...props} as="h3">
          Level 3
        </Heading>
      </Flex>;
  }
}`,...(j=(H=s.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var k,v,z;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => {
    return <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {[...new Array(9)].map((_, index) => {
        return <Heading {...props} key={index.toLocaleString()} size={(index + 1 as never)}>
              The quick brown fox jumps over the lazy dog
            </Heading>;
      })}
      </Flex>;
  }
}`,...(z=(v=i.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var D,T,F;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => {
    return <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {(['regular', 'bold'] as const).map(weight => {
        return <Heading {...props} key={weight} weight={weight}>
              The quick brown fox jumps over the lazy dog
            </Heading>;
      })}
      </Flex>;
  }
}`,...(F=(T=l.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var S,q,G;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => {
    return <Flex flexDirection="column" rowGap={3}>
        <Heading {...props} align="left">
          Left-aligned
        </Heading>
        <Heading {...props} align="center">
          Center-aligned
        </Heading>
        <Heading {...props} align="right">
          Right-aligned
        </Heading>
      </Flex>;
  }
}`,...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var L,A,W;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => {
    return <Flex flexDirection="column" rowGap={3}>
        {(['nowrap', 'balance', 'pretty'] as const).map(wrap => {
        return <Box key={wrap} maxWidth={50}>
              <Heading {...props} truncate wrap={wrap}>
                The quick brown fox jumps over the lazy dog
              </Heading>
            </Box>;
      })}
      </Flex>;
  }
}`,...(W=(A=p.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var E,I,C;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => {
    return <Flex flexDirection="column" rowGap={3}>
        {accentColors.map(color => {
        return <Heading {...props} key={color} color={color}>
              The quick brown fox jumps over the lazy dog
            </Heading>;
      })}
      </Flex>;
  }
}`,...(C=(I=d.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var _,V,B;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => {
    return <Flex maxWidth={50}>
        <Heading {...props} truncate>
          The quick brown fox jumps over the lazy dog
        </Heading>
      </Flex>;
  }
}`,...(B=(V=u.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};const P=["Default","AsAnotherElement","Size","Weight","Align","Wrap","Color","Truncate"];export{c as Align,s as AsAnotherElement,d as Color,t as Default,i as Size,u as Truncate,l as Weight,p as Wrap,P as __namedExportsOrder,N as default};
