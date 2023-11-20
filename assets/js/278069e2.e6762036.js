"use strict";(self.webpackChunkmcss_docs=self.webpackChunkmcss_docs||[]).push([[689],{1923:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(5893),n=t(1151);const r={sidebar_position:2,title:"Adding Users",description:"How to authorize new users on your API"},o=void 0,a={id:"webpanel/users",title:"Adding Users",description:"How to authorize new users on your API",source:"@site/docs/webpanel/users.md",sourceDirName:"webpanel",slug:"/webpanel/users",permalink:"/webpanel/users",draft:!1,unlisted:!1,editUrl:"https://github.com/mcserversoft/documentation/edit/main/docs/webpanel/users.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Adding Users",description:"How to authorize new users on your API"},sidebar:"tutorialSidebar",previous:{title:"Getting started with the panel",permalink:"/webpanel/getting-started"},next:{title:"Introduction",permalink:"/API/about"}},i={},c=[];function d(e){const A={admonition:"admonition",code:"code",img:"img",p:"p",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(A.admonition,{title:"At least one server is required to add users",type:"caution",children:(0,s.jsx)(A.p,{children:"You need to have one server created or imported in MCSS to make this panel appear."})}),"\n",(0,s.jsxs)(A.p,{children:["On the ",(0,s.jsx)(A.code,{children:"Web Panel"})," page you will see a button labeled ",(0,s.jsx)(A.code,{children:"Manage Users & API Keys"}),".",(0,s.jsx)("br",{}),"\nFrom this window you will be able to manage panel users."]}),"\n",(0,s.jsx)(A.p,{children:(0,s.jsx)(A.img,{alt:"Screenshot of the Remote Access Manager window, creating a user names John",src:t(6323).Z+"",width:"596",height:"433"})}),"\n",(0,s.jsx)(A.p,{children:"Server access can be restricted to a sub set of servers:"}),"\n",(0,s.jsx)(A.p,{children:(0,s.jsx)(A.img,{alt:"Partial screenshot of the Remote Access Manager window, example of a custom set server access policy",src:t(9993).Z+"",width:"356",height:"93"})})]})}function u(e={}){const{wrapper:A}={...(0,n.a)(),...e.components};return A?(0,s.jsx)(A,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6323:(e,A,t)=>{t.d(A,{Z:()=>s});const s=t.p+"assets/images/remote-access-manager-create-user-6b32d03bb8a0d62935422f5bc9c90910.png"},9993:(e,A,t)=>{t.d(A,{Z:()=>s});const s="data:image/png;base64,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"},1151:(e,A,t)=>{t.d(A,{Z:()=>a,a:()=>o});var s=t(7294);const n={},r=s.createContext(n);function o(e){const A=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}function a(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:A},e.children)}}}]);