import{G as r,r as B,j as V,a as t}from"./index-DqaC6AmL.js";import"./index-BBkUAzwr.js";const T={component:r,tags:["autodocs"],title:"Components/Button",argTypes:{size:{control:{type:"select"},options:["1","2","3","4"],defaultValue:"2",description:"버튼의 크기를 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"2"}}},disabled:{control:"boolean",defaultValue:!1,description:"버튼을 비활성화 상태로 설정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{control:"boolean",defaultValue:!1,description:"버튼을 로딩 상태로 설정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loadingText:{control:"text",defaultValue:"Loading...",description:"로딩 상태일 때 표시할 텍스트를 설정합니다.",table:{type:{summary:"string"}}},color:{control:{type:"select"},options:B,defaultValue:"indigo",description:"버튼의 색상을 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"indigo"}}}}},n={render:e=>V("div",{style:{display:"flex",columnGap:"8px",alignItems:"center"},children:[t(r,{...e,size:"4"}),t(r,{...e,size:"3"}),t(r,{...e,size:"2"}),t(r,{...e,size:"1"})]}),args:{children:"Click me",type:"button"}},a={render:e=>t(r,{...e}),args:{children:"Click me",type:"button"}},s={args:{children:"Click me",type:"button",disabled:!0}},o={args:{children:"Click me",type:"button",loading:!0,loadingText:"Loading..."}},i={render:e=>t(r,{...e}),args:{children:t("span",{children:"Click me"}),asChild:!0}};var l,d,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: props => {
    return <div style={{
      display: 'flex',
      columnGap: '8px',
      alignItems: 'center'
    }}>
        <Button {...props} size="4" />
        <Button {...props} size="3" />
        <Button {...props} size="2" />
        <Button {...props} size="1" />
      </div>;
  },
  args: {
    children: 'Click me',
    type: 'button'
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <Button {...props} />,
  args: {
    children: 'Click me',
    type: 'button'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,y,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Click me',
    type: 'button',
    disabled: true
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,C,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Click me',
    type: 'button',
    loading: true,
    loadingText: 'Loading...'
  }
}`,...(h=(C=o.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var x,z,k;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <Button {...props} />,
  args: {
    children: <span>Click me</span>,
    asChild: true
  }
}`,...(k=(z=i.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};const j=["Size","Primary","Disabled","Loading","CustomButton"];export{i as CustomButton,s as Disabled,o as Loading,a as Primary,n as Size,j as __namedExportsOrder,T as default};
