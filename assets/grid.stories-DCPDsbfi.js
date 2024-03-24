import{S as n,a as t,t as s,i}from"./index-BoSpoE2D.js";import"./index-BBkUAzwr.js";const h={title:"layouts/Grid",component:n,args:{gridTemplateColumns:3,gap:3}},r={args:{children:[...Array(9)].map(d=>t(s,{height:16,width:"auto",children:t("div",{style:{width:"100%",height:"100%",background:i.colors.scale.blue[4]}})},Math.random().toString(36)))}};var a,e,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: [...Array(9)].map(_ => {
      return <Box key={Math.random().toString(36)} height={16} width="auto">
          <div style={{
          width: '100%',
          height: '100%',
          background: vars.colors.scale.blue[4]
        }} />
        </Box>;
    })
  }
}`,...(o=(e=r.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const m=["Default"];export{r as Default,m as __namedExportsOrder,h as default};
