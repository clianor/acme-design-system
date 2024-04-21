import{b as t,j as n,x as o,a as r,d as i,D as Y,t as Z}from"./index-B7LG5z0r.js";import{r as T}from"./index-BBkUAzwr.js";import{r as y}from"./index-BO4AexmX.js";import{f as b}from"./constants-BsGff1eb.js";const ne={title:"typography/Text",component:t,parameters:{componentSubtitle:"텍스트 컴포넌트",docs:{description:{component:"이 컴포넌트는 span 요소를 기반으로 하며 마진 속성을 지원합니다."}}},argTypes:{as:{control:{type:"select"},options:["span","div","label","p"],description:"Text 태그를 설정합니다.",table:{type:{summary:["span","div","label","p"].join("|")}}},size:{control:{type:"select"},options:b,description:"폰트 크기를 설정합니다.",table:{type:{summary:b.join("|")}}},weight:{control:{type:"select"},options:["light","regular","medium","bold"],description:"폰트 굵기를 설정합니다.",table:{type:{summary:["light","regular","medium","bold"].join("|")}}},align:{control:{type:"select"},options:["left","center","right","justify"],description:"텍스트의 정렬 방식을 설정합니다.",table:{type:{summary:["left","center","right","justify"].join("|")}}},wrap:{control:{type:"select"},options:["wrap","nowrap","pretty","balance"],description:"텍스트의 줄바꿈 방식을 설정합니다.",table:{type:{summary:["wrap","nowrap","pretty","balance"].join("|")}}},color:{control:{type:"select"},options:y,defaultValue:"indigo",description:"텍스트의 색상을 설정합니다.",table:{type:{summary:y.join("|")},defaultValue:{summary:"indigo"}}},truncate:{control:{type:"boolean"},description:"텍스트가 잘릴지 여부를 결정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{size:4}},s={args:{children:"The quick brown fox jumps over the lazy dog."}},l={render:e=>n(o,{alignItems:"start",flexDirection:"column",rowGap:3,children:[n(t,{...e,as:"p",children:["This is a ",r(i,{children:"paragraph"})," element."]}),n(t,{...e,as:"label",children:["This is a ",r(i,{children:"label"})," element."]}),n(t,{...e,as:"div",children:["This is a ",r(i,{children:"div"})," element."]}),n(t,{...e,as:"span",children:["This is a ",r(i,{children:"span"})," element."]})]})},p={render:e=>r(o,{alignItems:"start",flexDirection:"column",rowGap:3,children:[...new Array(9)].map((a,w)=>T.createElement(t,{...e,key:w.toLocaleString(),size:w+1},"The quick brown fox jumps over the lazy dog."))})},u={parameters:{docs:{description:{story:"2-4 사이즈는 장문의 콘텐츠에 잘 작동하도록 설계되었습니다."}}},render:e=>n(Y,{children:[r(t,{...e,as:"p",marginBottom:5,size:4,children:"The goal of typography is to relate font size, line height, and line width in a proportional way that maximizes beauty and makes reading easier and more pleasant. The question is: What proportion(s) will give us the best results? The golden ratio is often observed in nature where beauty and utility intersect; perhaps we can use this “divine” proportion to enhance these attributes in our typography."}),r(t,{...e,as:"p",marginBottom:5,size:3,children:"The goal of typography is to relate font size, line height, and line width in a proportional way that maximizes beauty and makes reading easier and more pleasant. The question is: What proportion(s) will give us the best results? The golden ratio is often observed in nature where beauty and utility intersect; perhaps we can use this “divine” proportion to enhance these attributes in our typography."}),r(t,{...e,as:"p",color:"gray",size:2,children:"The goal of typography is to relate font size, line height, and line width in a proportional way that maximizes beauty and makes reading easier and more pleasant. The question is: What proportion(s) will give us the best results? The golden ratio is often observed in nature where beauty and utility intersect; perhaps we can use this “divine” proportion to enhance these attributes in our typography."})]})},c={parameters:{docs:{description:{story:"사이즈 1-3은 UI 라벨에 잘 작동하도록 설계되었습니다."}}},render:e=>n(Z,{alignItems:"center",gridTemplateColumns:2,padding:3,rowGap:5,children:[n(o,{flexDirection:"column",children:[r(t,{...e,size:3,weight:"bold",children:"Get started"}),r(t,{...e,color:"gray",size:2,children:"Start your next project in minutes"})]}),n(o,{flexDirection:"column",children:[r(t,{...e,size:2,weight:"bold",children:"Get started"}),r(t,{...e,color:"gray",size:2,children:"Start your next project in minutes"})]}),n(o,{flexDirection:"column",children:[r(t,{...e,size:2,weight:"bold",children:"Get started"}),r(t,{...e,color:"gray",size:1,children:"Start your next project in minutes"})]}),n(o,{flexDirection:"column",children:[r(t,{...e,size:1,weight:"bold",children:"Get started"}),r(t,{...e,color:"gray",size:1,children:"Start your next project in minutes"})]})]})},d={render:e=>r(o,{alignItems:"start",flexDirection:"column",rowGap:3,children:["regular","bold"].map(a=>T.createElement(t,{...e,key:a,weight:a},"The quick brown fox jumps over the lazy dog"))})},h={render:e=>n(o,{flexDirection:"column",rowGap:3,children:[r(t,{...e,align:"left",children:"Left-aligned"}),r(t,{...e,align:"center",children:"Center-aligned"}),r(t,{...e,align:"right",children:"Right-aligned"})]})},m={render:e=>r(o,{flexDirection:"column",rowGap:3,children:["nowrap","balance","pretty"].map(a=>r(Y,{maxWidth:50,children:r(t,{...e,truncate:!0,wrap:a,children:"The quick brown fox jumps over the lazy dog"})},a))})},g={render:e=>r(o,{flexDirection:"column",rowGap:3,children:y.map(a=>T.createElement(t,{...e,key:a,color:a},"The quick brown fox jumps over the lazy dog"))})},x={render:e=>r(o,{maxWidth:50,children:r(t,{...e,truncate:!0,children:"The goal of typography is to relate font size, line height, and line width in a proportional way that maximizes beauty and makes reading easier and more pleasant."})})};var f,z,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.'
  }
}`,...(C=(z=s.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var D,S,v;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => {
    return <Flex alignItems="start" flexDirection="column" rowGap={3}>
        <Text {...props} as="p">
          This is a <Strong>paragraph</Strong> element.
        </Text>
        <Text {...props} as="label">
          This is a <Strong>label</Strong> element.
        </Text>
        <Text {...props} as="div">
          This is a <Strong>div</Strong> element.
        </Text>
        <Text {...props} as="span">
          This is a <Strong>span</Strong> element.
        </Text>
      </Flex>;
  }
}`,...(v=(S=l.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var j,F,B;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => {
    return <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {[...new Array(9)].map((_, index) => {
        return <Text {...props} key={index.toLocaleString()} size={(index + 1 as never)}>
              The quick brown fox jumps over the lazy dog.
            </Text>;
      })}
      </Flex>;
  }
}`,...(B=(F=p.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var k,G,q;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '2-4 사이즈는 장문의 콘텐츠에 잘 작동하도록 설계되었습니다.'
      }
    }
  },
  render: props => {
    return <Box>
        <Text {...props} as="p" marginBottom={5} size={4}>
          The goal of typography is to relate font size, line height, and line
          width in a proportional way that maximizes beauty and makes reading
          easier and more pleasant. The question is: What proportion(s) will
          give us the best results? The golden ratio is often observed in nature
          where beauty and utility intersect; perhaps we can use this “divine”
          proportion to enhance these attributes in our typography.
        </Text>
        <Text {...props} as="p" marginBottom={5} size={3}>
          The goal of typography is to relate font size, line height, and line
          width in a proportional way that maximizes beauty and makes reading
          easier and more pleasant. The question is: What proportion(s) will
          give us the best results? The golden ratio is often observed in nature
          where beauty and utility intersect; perhaps we can use this “divine”
          proportion to enhance these attributes in our typography.
        </Text>
        <Text {...props} as="p" color="gray" size={2}>
          The goal of typography is to relate font size, line height, and line
          width in a proportional way that maximizes beauty and makes reading
          easier and more pleasant. The question is: What proportion(s) will
          give us the best results? The golden ratio is often observed in nature
          where beauty and utility intersect; perhaps we can use this “divine”
          proportion to enhance these attributes in our typography.
        </Text>
      </Box>;
  }
}`,...(q=(G=u.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var A,W,I;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '사이즈 1-3은 UI 라벨에 잘 작동하도록 설계되었습니다.'
      }
    }
  },
  render: props => {
    return <Grid alignItems="center" gridTemplateColumns={2} padding={3} rowGap={5}>
        <Flex flexDirection="column">
          <Text {...props} size={3} weight="bold">
            Get started
          </Text>
          <Text {...props} color="gray" size={2}>
            Start your next project in minutes
          </Text>
        </Flex>

        <Flex flexDirection="column">
          <Text {...props} size={2} weight="bold">
            Get started
          </Text>
          <Text {...props} color="gray" size={2}>
            Start your next project in minutes
          </Text>
        </Flex>

        <Flex flexDirection="column">
          <Text {...props} size={2} weight="bold">
            Get started
          </Text>
          <Text {...props} color="gray" size={1}>
            Start your next project in minutes
          </Text>
        </Flex>

        <Flex flexDirection="column">
          <Text {...props} size={1} weight="bold">
            Get started
          </Text>
          <Text {...props} color="gray" size={1}>
            Start your next project in minutes
          </Text>
        </Flex>
      </Grid>;
  }
}`,...(I=(W=c.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var E,L,U;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => {
    return <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {(['regular', 'bold'] as const).map(weight => {
        return <Text {...props} key={weight} weight={weight}>
              The quick brown fox jumps over the lazy dog
            </Text>;
      })}
      </Flex>;
  }
}`,...(U=(L=d.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var _,V,R;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => {
    return <Flex flexDirection="column" rowGap={3}>
        <Text {...props} align="left">
          Left-aligned
        </Text>
        <Text {...props} align="center">
          Center-aligned
        </Text>
        <Text {...props} align="right">
          Right-aligned
        </Text>
      </Flex>;
  }
}`,...(R=(V=h.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var K,O,H;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: props => {
    return <Flex flexDirection="column" rowGap={3}>
        {(['nowrap', 'balance', 'pretty'] as const).map(wrap => {
        return <Box key={wrap} maxWidth={50}>
              <Text {...props} truncate wrap={wrap}>
                The quick brown fox jumps over the lazy dog
              </Text>
            </Box>;
      })}
      </Flex>;
  }
}`,...(H=(O=m.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var J,M,N;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: props => {
    return <Flex flexDirection="column" rowGap={3}>
        {accentColors.map(color => {
        return <Text {...props} key={color} color={color}>
              The quick brown fox jumps over the lazy dog
            </Text>;
      })}
      </Flex>;
  }
}`,...(N=(M=g.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var P,Q,X;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: props => {
    return <Flex maxWidth={50}>
        <Text {...props} truncate>
          The goal of typography is to relate font size, line height, and line
          width in a proportional way that maximizes beauty and makes reading
          easier and more pleasant.
        </Text>
      </Flex>;
  }
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const oe=["Default","AsAnotherElement","Size","SizeForLongFormContent","SizeForUILabels","Weight","Align","Wrap","Color","Truncate"];export{h as Align,l as AsAnotherElement,g as Color,s as Default,p as Size,u as SizeForLongFormContent,c as SizeForUILabels,x as Truncate,d as Weight,m as Wrap,oe as __namedExportsOrder,ne as default};
