import{q as a,a as n,t as i,i as l}from"./index-BoSpoE2D.js";import{s as e}from"./constants-8512jFBU.js";import"./index-BBkUAzwr.js";const d={title:"layouts/Flex",component:a,argTypes:{display:{control:{type:"select"},options:["none","flex","inline-flex"],description:"Flex 컨테이너의 display 속성을 설정합니다.",table:{type:{summary:["none","flex","inline-flex"].join("|")}}},flexDirection:{control:{type:"select"},options:["row","column","row-reverse","column-reverse"],description:"Flex 항목들의 주 축을 설정합니다.",table:{type:{summary:["row","column","row-reverse","column-reverse"].join("|")}}},alignContent:{control:{type:"select"},options:["start","center","end","baseline","stretch"],description:"Flex 컨테이너의 교차 축에 대한 정렬 방식을 설정합니다.",table:{type:{summary:["start","center","end","baseline","stretch"].join("|")}}},alignItems:{control:{type:"select"},options:["start","center","end","baseline","stretch"],description:"Flex 항목들의 교차 축에 대한 정렬 방식을 설정합니다.",table:{type:{summary:["start","center","end","baseline","stretch"].join("|")}}},alignSelf:{control:{type:"select"},options:["start","center","end","baseline","stretch"],description:"Flex 항목의 교차 축에 대한 정렬 방식을 설정합니다.",table:{type:{summary:["start","center","end","baseline","stretch"].join("|")}}},justifyContent:{control:{type:"select"},options:["start","center","end","between"],description:"Flex 항목들의 주 축에 대한 정렬 방식을 설정합니다.",table:{type:{summary:["start","center","end","between"].join("|")}}},justifyItems:{control:{type:"select"},options:["start","center","end","between"],description:"Flex 항목들의 주 축에 대한 정렬 방식을 설정합니다.",table:{type:{summary:["start","center","end","between"].join("|")}}},justifySelf:{control:{type:"select"},options:["start","center","end","between"],description:"Flex 항목의 주 축에 대한 정렬 방식을 설정합니다.",table:{type:{summary:["start","center","end","between"].join("|")}}},flexWrap:{control:{type:"select"},options:["nowrap","wrap","wrap-reverse"],description:"Flex 항목들이 여러 줄로 나누어질지 여부를 설정합니다.",table:{type:{summary:["nowrap","wrap","wrap-reverse"].join("|")}}},gap:{control:{type:"select"},options:e,description:"Flex 항목들 사이의 간격을 설정합니다.",table:{type:{summary:e.join("|")}}},rowGap:{control:{type:"select"},options:e,description:"Flex 항목들 사이의 세로 간격을 설정합니다.",table:{type:{summary:e.join("|")}}},columnGap:{control:{type:"select"},options:e,description:"Flex 항목들 사이의 가로 간격을 설정합니다.",table:{type:{summary:e.join("|")}}}},args:{display:"flex",gap:3}},t={args:{children:[...Array(5)].map(c=>n(i,{height:16,width:16,children:n("div",{style:{width:"100%",height:"100%",background:l.colors.scale.blue[4]}})},Math.random().toString(36)))}};var r,o,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: [...Array(5)].map(_ => {
      return <Box key={Math.random().toString(36)} height={16} width={16}>
          <div style={{
          width: '100%',
          height: '100%',
          background: vars.colors.scale.blue[4]
        }} />
        </Box>;
    })
  }
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,d as default};
