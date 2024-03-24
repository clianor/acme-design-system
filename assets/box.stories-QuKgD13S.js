import{t as c,a as n,i as l}from"./index-BoSpoE2D.js";import{s as o,d as e}from"./constants-8512jFBU.js";import"./index-BBkUAzwr.js";const t="레이아웃 컴포넌트 공통",g={title:"layouts/Box",component:c,argTypes:{display:{control:{type:"select"},options:["none","inline","inline-block","block"],defaultValue:"block",description:"박스의 디스플레이 유형을 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"block"}}},marginTop:{control:{type:"select"},options:o,description:"상단 여백을 설정합니다.",table:{type:{summary:o.join("|")},category:t,subcategory:"Spacing"}},marginRight:{control:{type:"select"},options:o,description:"우측 여백을 설정합니다.",table:{type:{summary:o.join("|")},category:t,subcategory:"Spacing"}},marginBottom:{control:{type:"select"},options:o,description:"하단 여백을 설정합니다.",table:{type:{summary:o.join("|")},category:t,subcategory:"Spacing"}},marginLeft:{control:{type:"select"},options:o,description:"좌측 여백을 설정합니다.",table:{type:{summary:o.join("|")},category:t,subcategory:"Spacing"}},paddingTop:{control:{type:"select"},options:o,description:"상단 패딩을 설정합니다.",table:{type:{summary:o.join("|")},category:t,subcategory:"Spacing"}},paddingRight:{control:{type:"select"},options:o,description:"우측 패딩을 설정합니다.",table:{type:{summary:o.join("|")},category:t,subcategory:"Spacing"}},paddingBottom:{control:{type:"select"},options:o,description:"하단 패딩을 설정합니다.",table:{type:{summary:o.join("|")},category:t,subcategory:"Spacing"}},paddingLeft:{control:{type:"select"},options:o,description:"좌측 패딩을 설정합니다.",table:{type:{summary:o.join("|")},category:t,subcategory:"Spacing"}},position:{control:{type:"select"},options:["static","relative","absolute","fixed","sticky"],description:"박스의 위치 유형을 설정합니다.",table:{type:{summary:["static","relative","absolute","fixed","sticky"].join("|")},category:t,subcategory:"Position"}},inset:{control:{type:"select"},options:["auto","0","50%","100%"],description:"박스의 위치를 상대적으로 조정합니다.",table:{type:{summary:["auto","0","50%","100%"].join("|")},category:t,subcategory:"Position"}},top:{control:{type:"select"},options:["auto","0","50%","100%"],description:"상단에서의 위치를 설정합니다.",table:{type:{summary:["auto","0","50%","100%"].join("|")},category:t,subcategory:"Position"}},right:{control:{type:"select"},options:["auto","0","50%","100%"],description:"우측에서의 위치를 설정합니다.",table:{type:{summary:["auto","0","50%","100%"].join("|")},category:t,subcategory:"Position"}},bottom:{control:{type:"select"},options:["auto","0","50%","100%"],description:"하단에서의 위치를 설정합니다.",table:{type:{summary:["auto","0","50%","100%"].join("|")},category:t,subcategory:"Position"}},left:{control:{type:"select"},options:["auto","0","50%","100%"],description:"좌측에서의 위치를 설정합니다.",table:{type:{summary:["auto","0","50%","100%"].join("|")},category:t,subcategory:"Position"}},overflow:{control:{type:"select"},options:["visible","hidden","clip","scroll","auto"],description:"컨텐츠가 박스를 넘어갈 때 어떻게 처리할지 설정합니다.",table:{type:{summary:["visible","hidden","clip","scroll","auto"].join("|")},category:t,subcategory:"Overflow"}},overflowX:{control:{type:"select"},options:["visible","hidden","clip","scroll","auto"],description:"컨텐츠가 박스의 가로를 넘어갈 때 어떻게 처리할지 설정합니다.",table:{type:{summary:["visible","hidden","clip","scroll","auto"].join("|")},category:t,subcategory:"Overflow"}},overflowY:{control:{type:"select"},options:["visible","hidden","clip","scroll","auto"],description:"컨텐츠가 박스의 세로를 넘어갈 때 어떻게 처리할지 설정합니다.",table:{type:{summary:["visible","hidden","clip","scroll","auto"].join("|")},category:t,subcategory:"Overflow"}},flexBasis:{control:{type:"select"},options:e,description:"flex 항목의 기본 크기를 설정합니다.",table:{type:{summary:e.join("|")},category:t,subcategory:"Flexbox"}},flexShrink:{control:{type:"select"},options:["0","1"],description:"flex 항목이 축소될 수 있는지 여부를 설정합니다.",table:{type:{summary:["0","1"].join("|")},category:t,subcategory:"Flexbox"}},flexGrow:{control:{type:"select"},options:["0","1"],description:"flex 항목이 확장될 수 있는지 여부를 설정합니다.",table:{type:{summary:["0","1"].join("|")},category:t,subcategory:"Flexbox"}},gridColumn:{control:{type:"select"},options:["auto","full",1,2,3,4,5,6,7,8,9,10,11,12],description:"그리드 항목이 차지할 열의 크기를 설정합니다.",table:{type:{summary:["auto","full",1,2,3,4,5,6,7,8,9,10,11,12].join("|")},category:t,subcategory:"Grid"}},gridColumnStart:{control:{type:"select"},options:["auto",1,2,3,4,5,6,7,8,9,10,11,12,13],description:"그리드 항목이 시작하는 열의 위치를 설정합니다.",table:{type:{summary:["auto",1,2,3,4,5,6,7,8,9,10,11,12,13].join("|")},category:t,subcategory:"Grid"}},gridColumnEnd:{control:{type:"select"},options:["auto",1,2,3,4,5,6,7,8,9,10,11,12,13],description:"그리드 항목이 끝나는 열의 위치를 설정합니다.",table:{type:{summary:["auto",1,2,3,4,5,6,7,8,9,10,11,12,13].join("|")},category:t,subcategory:"Grid"}},gridRow:{control:{type:"select"},options:["auto","full",1,2,3,4,5,6,7,8,9,10,11,12],description:"그리드 항목이 차지할 행의 크기를 설정합니다.",table:{type:{summary:["auto","full",1,2,3,4,5,6,7,8,9,10,11,12].join("|")},category:t,subcategory:"Grid"}},gridRowStart:{control:{type:"select"},options:["auto",1,2,3,4,5,6,7,8,9,10,11,12,13],description:"그리드 항목이 시작하는 행의 위치를 설정합니다.",table:{type:{summary:["auto",1,2,3,4,5,6,7,8,9,10,11,12,13].join("|")},category:t,subcategory:"Grid"}},gridRowEnd:{control:{type:"select"},options:["auto",1,2,3,4,5,6,7,8,9,10,11,12,13],description:"그리드 항목이 끝나는 행의 위치를 설정합니다.",table:{type:{summary:["auto",1,2,3,4,5,6,7,8,9,10,11,12,13].join("|")},category:t,subcategory:"Grid"}},width:{control:{type:"select"},options:["svw","lvw","dvw",...e],description:"박스의 너비를 설정합니다.",table:{type:{summary:["svw","lvw","dvw",...e].join("|")},category:t,subcategory:"Dimension"}},minWidth:{control:{type:"select"},options:e,description:"박스의 최소 너비를 설정합니다.",table:{type:{summary:e.join("|")},category:t,subcategory:"Dimension"}},maxWidth:{control:{type:"select"},options:e,description:"박스의 최대 너비를 설정합니다.",table:{type:{summary:e.join("|")},category:t,subcategory:"Dimension"}},height:{control:{type:"select"},options:["svh","lvh","dvh",...e],description:"박스의 높이를 설정합니다.",table:{type:{summary:["svh","lvh","dvh",...e].join("|")},category:t,subcategory:"Dimension"}},minHeight:{control:{type:"select"},options:e,description:"박스의 최소 높이를 설정합니다.",table:{type:{summary:e.join("|")},category:t,subcategory:"Dimension"}},maxHeight:{control:{type:"select"},options:e,description:"박스의 최대 높이를 설정합니다.",table:{type:{summary:e.join("|")},category:t,subcategory:"Dimension"}}},args:{display:"block",width:16,height:16}},i={args:{children:n("div",{style:{width:"100%",height:"100%",background:l.colors.scale.blue[4]}})}};var s,r,a;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      width: '100%',
      height: '100%',
      background: vars.colors.scale.blue[4]
    }} />
  }
}`,...(a=(r=i.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const m=["Default"];export{i as Default,m as __namedExportsOrder,g as default};
