"use strict";(self.webpackChunkmcss_docs=self.webpackChunkmcss_docs||[]).push([[308],{94243:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=t(85893),s=t(11151);const i={sidebar_position:1,title:"Getting started with the panel",description:"How to get started with the integrated remote panel",keywords:["remote","panel","api","mcss","web","control","internet","enable"],slug:"getting-started"},a=void 0,r={id:"webpanel/getting-started",title:"Getting started with the panel",description:"How to get started with the integrated remote panel",source:"@site/docs/webpanel/getting-started.md",sourceDirName:"webpanel",slug:"/webpanel/getting-started",permalink:"/webpanel/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/mcserversoft/documentation/edit/main/docs/webpanel/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting started with the panel",description:"How to get started with the integrated remote panel",keywords:["remote","panel","api","mcss","web","control","internet","enable"],slug:"getting-started"},sidebar:"tutorialSidebar",previous:{title:"Tweaking the Java Path Detection",permalink:"/advanced/tweak-java-path-detection"},next:{title:"Adding Users",permalink:"/webpanel/users"}},c={},l=[{value:"Enabling the remote panel",id:"-enable-panel",level:2},{value:"Accessing the panel locally",id:"-local-access",level:2},{value:"Accessing the panel from your local network",id:"-LAN-access",level:2},{value:"Accessing the panel from anywhere",id:"-anywhere-access",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"Your connection is not private",type:"info",children:(0,o.jsxs)(n.p,{children:['When you first connect to the panel, you will get a message saying "your connection is not private". This is due to the way MCSS handles the connection. Feel safe to click on "Advanced" and "connect anyways".',(0,o.jsx)("br",{}),"\nTo avoid seeing this warning, you can get a mcss.app subdomain by supporting the project. Learn more ",(0,o.jsx)(n.a,{href:"https://mcss.app",children:"here"})]})}),"\n",(0,o.jsx)(n.h2,{id:"-enable-panel",children:"Enabling the remote panel"}),"\n",(0,o.jsxs)(n.p,{children:["To enable the remote panel, navigate to ",(0,o.jsx)(n.code,{children:"file > options"}),' then  scroll down to the "Remote Access / Developer API" section.']}),"\n",(0,o.jsxs)(n.p,{children:["If you haven't enabled the API already, follow ",(0,o.jsx)(n.a,{href:"/API/about#-api-enable",children:"this guide"})," to do so."]}),"\n",(0,o.jsx)(n.p,{children:'If the API is enabled already, click on "Enable Web Panel", then close MCSS completely for the changes to take effect.'}),"\n",(0,o.jsx)(n.h2,{id:"-local-access",children:"Accessing the panel locally"}),"\n",(0,o.jsx)(n.p,{children:'If the option to "Show Web API/Panel on startup" is enabled, the panel will be automatically opened when you start MCSS.'}),"\n",(0,o.jsxs)(n.p,{children:["If not, you can connect from the computer running MCSS by navigating to ",(0,o.jsx)(n.code,{children:"localhost:25560"})," from your web browser."]}),"\n",(0,o.jsx)(n.admonition,{title:"Local only",type:"caution",children:(0,o.jsx)(n.p,{children:"This will only work if you are accessing the web panel from the computer that is running MCSS. As such it is only recommended for testing purposes, as the GUI offers more features."})}),"\n",(0,o.jsx)(n.h2,{id:"-LAN-access",children:"Accessing the panel from your local network"}),"\n",(0,o.jsx)(n.p,{children:'To have access to the panel from another PC than the one hosting mcss, first enable remote access in the settings by checking "Allow Remote Access" in the API section.'}),"\n",(0,o.jsxs)(n.p,{children:["You can now access your servers from any other PC ",(0,o.jsx)(n.strong,{children:"on your local network"})," by opening a browser and going to ",(0,o.jsx)(n.code,{children:"http://<host's local ip>:<API port>"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"-anywhere-access",children:"Accessing the panel from anywhere"}),"\n",(0,o.jsx)(n.p,{children:"You can also enable fully remote access to allow anyone with credentials to control your MCSS instance."}),"\n",(0,o.jsxs)(n.p,{children:["To do this, first ",(0,o.jsx)(n.a,{href:"#-LAN-access",children:"enable remote access in mcss"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["You will have to port forward the API through your router in order for other people to be able to use it. We have a complete guide on that ",(0,o.jsx)(n.a,{href:"/networking/port-forwarding",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["You can now access the panel from anywhere by going to ",(0,o.jsx)(n.code,{children:"http://<public ip>:<API port>"}),"."]}),"\n",(0,o.jsx)(n.admonition,{title:"Security",type:"danger",children:(0,o.jsx)(n.p,{children:'If you enable remote access, it is highly recommended that you also enable SSL. This will allow your connection to the panel to be encrypted, protecting your password and servers. Do this by checking "Enable SSl" in the API settings.'})}),"\n",(0,o.jsxs)(n.p,{children:["However, doing so will cause warnings like this one to appear in browsers :\n",(0,o.jsx)(n.img,{alt:"certificate warning",src:t(47456).Z+"",width:"853",height:"709"})]}),"\n",(0,o.jsx)(n.p,{children:"This is normal and expected as MCSS uses a self-signed certificate. Using a verified one isn't possible here since certificates are only valid for domain names and not IPs, and a given certificate can only be used on one server at a time."}),"\n",(0,o.jsxs)(n.p,{children:["Your panel should now be accessible by going to ",(0,o.jsx)(n.code,{children:"https://<your public ip>:<API port>"})," and dissmissing the warning."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},47456:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/ssl-warning-ddf407913588b23e9b3d52ffc9ab1423.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var o=t(67294);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);