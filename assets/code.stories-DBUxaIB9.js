import{b as t,a as o,Q as p,x as T}from"./index-DqPaFGzu.js";import{r as m}from"./index-BBkUAzwr.js";import{r as d}from"./index-BO4AexmX.js";import{f as g}from"./constants-BsGff1eb.js";const Q={title:"typography/Code",component:t,argTypes:{size:{control:{type:"select"},options:g,description:"폰트 크기를 설정합니다.",table:{type:{summary:g.join("|")}}},variant:{control:{type:"select"},options:["solid","soft","outline","ghost"],description:"텍스트의 변형을 설정합니다.",defaultValue:"soft",table:{type:{summary:["solid","soft","outline","ghost"].join("|")},defaultValue:{summary:"soft"}}},weight:{control:{type:"select"},options:["light","regular","medium","bold"],description:"폰트 굵기를 설정합니다.",table:{type:{summary:["light","regular","medium","bold"].join("|")}}},wrap:{control:{type:"select"},options:["wrap","nowrap","pretty","balance"],description:"텍스트의 줄바꿈 방식을 설정합니다.",table:{type:{summary:["wrap","nowrap","pretty","balance"].join("|")}}},color:{control:{type:"select"},options:d,defaultValue:"indigo",description:"텍스트의 색상을 설정합니다.",table:{type:{summary:d.join("|")},defaultValue:{summary:"indigo"}}},truncate:{control:{type:"boolean"},description:"텍스트가 잘릴지 여부를 결정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{size:4}},n={args:{children:"console.log()"}},a={render:e=>o(p,{alignItems:"start",flexDirection:"column",rowGap:3,children:[...new Array(9)].map((r,u)=>m.createElement(t,{...e,key:u.toLocaleString(),size:u+1},"console.log()"))})},s={render:e=>o(p,{alignItems:"start",flexDirection:"column",rowGap:3,children:["solid","soft","outline","ghost"].map(r=>m.createElement(t,{...e,key:r,variant:r},"console.log()"))})},l={render:e=>o(T,{alignItems:"start",gap:2,gridTemplateColumns:{xs:1,sm:3,md:5,lg:6},justifyItems:"start",children:d.map(r=>m.createElement(t,{...e,key:r,color:r},"console.log()"))})},i={render:e=>o(p,{alignItems:"start",flexDirection:"column",rowGap:3,children:["regular","bold"].map(r=>m.createElement(t,{...e,key:r,weight:r},"console.log()"))})},c={render:e=>o(p,{maxWidth:50,children:o(t,{...e,truncate:!0,children:"linear-gradient(red, orange, yellow, green, blue);"})})};var y,f,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'console.log()'
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,w,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => {
    return <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {[...new Array(9)].map((_, index) => {
        return <Code {...props} key={index.toLocaleString()} size={(index + 1 as never)}>
              console.log()
            </Code>;
      })}
      </Flex>;
  }
}`,...(b=(w=a.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var C,S,I;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => {
    return <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {(['solid', 'soft', 'outline', 'ghost'] as const).map(variant => {
        return <Code {...props} key={variant} variant={variant}>
              console.log()
            </Code>;
      })}
      </Flex>;
  }
}`,...(I=(S=s.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var j,k,D;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => {
    return <Grid alignItems="start" gap={2} gridTemplateColumns={{
      xs: 1,
      sm: 3,
      md: 5,
      lg: 6
    }} justifyItems="start">
        {accentColors.map(color => {
        return <Code {...props} key={color} color={color}>
              console.log()
            </Code>;
      })}
      </Grid>;
  }
}`,...(D=(k=l.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var F,G,z;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: props => {
    return <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {(['regular', 'bold'] as const).map(weight => {
        return <Code {...props} key={weight} weight={weight}>
              console.log()
            </Code>;
      })}
      </Flex>;
  }
}`,...(z=(G=i.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var V,E,v;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => {
    return <Flex maxWidth={50}>
        <Code {...props} truncate>
          linear-gradient(red, orange, yellow, green, blue);
        </Code>
      </Flex>;
  }
}`,...(v=(E=c.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};const K=["Default","Size","Variant","Color","Weight","Truncate"];export{l as Color,n as Default,a as Size,c as Truncate,s as Variant,i as Weight,K as __namedExportsOrder,Q as default};
