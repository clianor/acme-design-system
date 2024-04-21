import{y as o,a as t,x as c}from"./index-B7LG5z0r.js";import{r as u}from"./index-BBkUAzwr.js";import{r as p}from"./index-BO4AexmX.js";import{f as y}from"./constants-BsGff1eb.js";const E={title:"typography/Blockquote",component:o,parameters:{componentSubtitle:"인용문 컴포넌트"},argTypes:{size:{control:{type:"select"},options:y,description:"폰트 크기를 설정합니다.",table:{type:{summary:y.join("|")}}},weight:{control:{type:"select"},options:["light","regular","medium","bold"],description:"폰트 굵기를 설정합니다.",table:{type:{summary:["light","regular","medium","bold"].join("|")}}},wrap:{control:{type:"select"},options:["wrap","nowrap","pretty","balance"],description:"텍스트의 줄바꿈 방식을 설정합니다.",table:{type:{summary:["wrap","nowrap","pretty","balance"].join("|")}}},color:{control:{type:"select"},options:p,defaultValue:"indigo",description:"텍스트의 색상을 설정합니다.",table:{type:{summary:p.join("|")},defaultValue:{summary:"indigo"}}},truncate:{control:{type:"boolean"},description:"텍스트가 잘릴지 여부를 결정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{size:4}},n={args:{children:"Perfect typography is certainly the most elusive of all arts. Sculpture in stone alone comes near it in obstinacy."}},a={render:e=>t(c,{alignItems:"start",flexDirection:"column",rowGap:3,children:[...new Array(9)].map((r,m)=>u.createElement(o,{...e,key:m.toLocaleString(),size:m+1},"Perfect typography is certainly the most elusive of all arts. Sculpture in stone alone comes near it in obstinacy."))})},s={render:e=>t(c,{alignItems:"start",flexDirection:"column",rowGap:3,children:["regular","bold"].map(r=>u.createElement(o,{...e,key:r,weight:r},"Perfect typography is certainly the most elusive of all arts. Sculpture in stone alone comes near it in obstinacy."))})},l={render:e=>t(c,{alignItems:"start",flexDirection:"column",rowGap:3,children:p.map(r=>u.createElement(o,{...e,key:r,color:r},"Perfect typography is certainly the most elusive of all arts. Sculpture in stone alone comes near it in obstinacy."))})},i={render:e=>t(c,{maxWidth:96,children:t(o,{...e,truncate:!0,children:"Perfect typography is certainly the most elusive of all arts. Sculpture in stone alone comes near it in obstinacy."})})};var d,g,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Perfect typography is certainly the most elusive of all arts. Sculpture in stone alone comes near it in obstinacy.'
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,b,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => {
    return <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {[...new Array(9)].map((_, index) => {
        return <Blockquote {...props} key={index.toLocaleString()} size={(index + 1 as never)}>
              Perfect typography is certainly the most elusive of all arts.
              Sculpture in stone alone comes near it in obstinacy.
            </Blockquote>;
      })}
      </Flex>;
  }
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var S,w,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => {
    return <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {(['regular', 'bold'] as const).map(weight => {
        return <Blockquote {...props} key={weight} weight={weight}>
              Perfect typography is certainly the most elusive of all arts.
              Sculpture in stone alone comes near it in obstinacy.
            </Blockquote>;
      })}
      </Flex>;
  }
}`,...(k=(w=s.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var v,P,q;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    return <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {accentColors.map(color => {
        return <Blockquote {...props} key={color} color={color}>
              Perfect typography is certainly the most elusive of all arts.
              Sculpture in stone alone comes near it in obstinacy.
            </Blockquote>;
      })}
      </Flex>;
  }
}`,...(q=(P=l.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var B,D,F;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => {
    return <Flex maxWidth={96}>
        <Blockquote {...props} truncate>
          Perfect typography is certainly the most elusive of all arts.
          Sculpture in stone alone comes near it in obstinacy.
        </Blockquote>
      </Flex>;
  }
}`,...(F=(D=i.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const W=["Default","Size","Weight","Color","Truncate"];export{l as Color,n as Default,a as Size,i as Truncate,s as Weight,W as __namedExportsOrder,E as default};
