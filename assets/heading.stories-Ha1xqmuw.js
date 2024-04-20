import{P as n,j as C,Q as a,a as r,V}from"./index-DqPaFGzu.js";import{r as m}from"./index-BBkUAzwr.js";import{r as u}from"./index-BO4AexmX.js";import{f as h}from"./constants-BsGff1eb.js";const R={title:"typography/Heading",component:n,argTypes:{as:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6"],description:"Heading 태그를 설정합니다.",table:{type:{summary:["h1","h2","h3","h4","h5","h6"].join("|")}}},size:{control:{type:"select"},options:h,description:"폰트 크기를 설정합니다.",table:{type:{summary:h.join("|")}}},weight:{control:{type:"select"},options:["light","regular","medium","bold"],description:"폰트 굵기를 설정합니다.",table:{type:{summary:["light","regular","medium","bold"].join("|")}}},align:{control:{type:"select"},options:["left","center","right","justify"],description:"텍스트의 정렬 방식을 설정합니다.",table:{type:{summary:["left","center","right","justify"].join("|")}}},wrap:{control:{type:"select"},options:["wrap","nowrap","pretty","balance"],description:"텍스트의 줄바꿈 방식을 설정합니다.",table:{type:{summary:["wrap","nowrap","pretty","balance"].join("|")}}},color:{control:{type:"select"},options:u,defaultValue:"indigo",description:"텍스트의 색상을 설정합니다.",table:{type:{summary:u.join("|")},defaultValue:{summary:"indigo"}}},truncate:{control:{type:"boolean"},description:"텍스트가 잘릴지 여부를 결정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{size:4}},t={args:{children:"The quick brown fox jumps over the lazy dog."}},s={render:e=>C(a,{alignItems:"start",flexDirection:"column",rowGap:3,children:[r(n,{...e,as:"h1",children:"Level 1"}),r(n,{...e,as:"h2",children:"Level 2"}),r(n,{...e,as:"h3",children:"Level 3"})]})},i={render:e=>r(a,{alignItems:"start",flexDirection:"column",rowGap:3,children:[...new Array(9)].map((o,g)=>m.createElement(n,{...e,key:g.toLocaleString(),size:g+1},"The quick brown fox jumps over the lazy dog"))})},l={render:e=>r(a,{alignItems:"start",flexDirection:"column",rowGap:3,children:["regular","bold"].map(o=>m.createElement(n,{...e,key:o,weight:o},"The quick brown fox jumps over the lazy dog"))})},c={render:e=>C(a,{flexDirection:"column",rowGap:3,children:[r(n,{...e,align:"left",children:"Left-aligned"}),r(n,{...e,align:"center",children:"Center-aligned"}),r(n,{...e,align:"right",children:"Right-aligned"})]})},p={render:e=>r(a,{flexDirection:"column",rowGap:3,children:["nowrap","balance","pretty"].map(o=>r(V,{maxWidth:50,children:r(n,{...e,truncate:!0,wrap:o,children:"The quick brown fox jumps over the lazy dog"})},o))})},d={render:e=>r(a,{flexDirection:"column",rowGap:3,children:u.map(o=>m.createElement(n,{...e,key:o,color:o},"The quick brown fox jumps over the lazy dog"))})};var y,x,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.'
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var w,b,H;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(H=(b=s.parameters)==null?void 0:b.docs)==null?void 0:H.source}}};var j,k,v;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => {
    return <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {[...new Array(9)].map((_, index) => {
        return <Heading {...props} key={index.toLocaleString()} size={(index + 1 as never)}>
              The quick brown fox jumps over the lazy dog
            </Heading>;
      })}
      </Flex>;
  }
}`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var z,D,F;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: props => {
    return <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {(['regular', 'bold'] as const).map(weight => {
        return <Heading {...props} key={weight} weight={weight}>
              The quick brown fox jumps over the lazy dog
            </Heading>;
      })}
      </Flex>;
  }
}`,...(F=(D=l.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var G,S,T;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var q,L,A;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(A=(L=p.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var E,I,W;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => {
    return <Flex flexDirection="column" rowGap={3}>
        {accentColors.map(color => {
        return <Heading {...props} key={color} color={color}>
              The quick brown fox jumps over the lazy dog
            </Heading>;
      })}
      </Flex>;
  }
}`,...(W=(I=d.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};const K=["Default","AsAnotherElement","Size","Weight","Align","Wrap","Color"];export{c as Align,s as AsAnotherElement,d as Color,t as Default,i as Size,l as Weight,p as Wrap,K as __namedExportsOrder,R as default};
