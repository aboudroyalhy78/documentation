"use strict";(self.webpackChunkmcss_docs=self.webpackChunkmcss_docs||[]).push([[333],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=o,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},21:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:3,title:"Troubleshooting",description:"Why can I or others not connect to my Minecraft server",keywords:["troubleshooting","can't connect","failed","network","friends","join","internet"]},s="Troubleshooting connection issues",c={unversionedId:"networking/troubleshooting",id:"networking/troubleshooting",title:"Troubleshooting",description:"Why can I or others not connect to my Minecraft server",source:"@site/docs/networking/troubleshooting.md",sourceDirName:"networking",slug:"/networking/troubleshooting",permalink:"/networking/troubleshooting",draft:!1,editUrl:"https://github.com/mcserversoft/documentation/edit/main/docs/networking/troubleshooting.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Troubleshooting",description:"Why can I or others not connect to my Minecraft server",keywords:["troubleshooting","can't connect","failed","network","friends","join","internet"]},sidebar:"tutorialSidebar",previous:{title:"Port forwarding",permalink:"/networking/port-forwarding"},next:{title:"Custom ZIP file format",permalink:"/backups/custom-filename"}},u={},p=[{value:"First-time hosting",id:"first-time-hosting",level:2},{value:"Others can connect but not me",id:"others-can-connect-but-not-me",level:3},{value:"Connection fails randomly",id:"connection-fails-randomly",level:2},{value:"Recheck port forwarding",id:"recheck-port-forwarding",level:3},{value:"Check Firewall / Anti-Virus",id:"check-firewall--anti-virus",level:3}],h={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"troubleshooting-connection-issues"},"Troubleshooting connection issues"),(0,i.kt)("h2",{id:"first-time-hosting"},"First-time hosting"),(0,i.kt)("p",null,"There could be multiple reasons why you can't connect to the server. These steps should help your troubleshoot the issue(s). "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start the server."),(0,i.kt)("li",{parentName:"ul"},"Verify in the console that the server has fully started."),(0,i.kt)("li",{parentName:"ul"},"On the ",(0,i.kt)("strong",{parentName:"li"},"same machine")," as the server, use the Minecraft client to login with ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost"),", if you have edited the default port number use ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:port")," respectively:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u2714\ufe0f Works, the server works fine locally."),(0,i.kt)("li",{parentName:"ul"},"\u274c Fails, no connection:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Server is not online or is still starting."),(0,i.kt)("li",{parentName:"ul"},"Wrong port number."),(0,i.kt)("li",{parentName:"ul"},"You are not trying this from the same machine."),(0,i.kt)("li",{parentName:"ul"},"Firewall or anti-virus is blocking the connection."))))),(0,i.kt)("li",{parentName:"ul"},"After verifying that localhost works ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check your ",(0,i.kt)("a",{parentName:"li",href:"/networking/port-forwarding"},"port forwarding"),"."),(0,i.kt)("li",{parentName:"ul"},"Check your firewall and anti-virus."),(0,i.kt)("li",{parentName:"ul"},"Check that you are using the ",(0,i.kt)("a",{parentName:"li",href:"/networking/find-ip"},"correct IP")," and port number.")))),(0,i.kt)("h3",{id:"others-can-connect-but-not-me"},"Others can connect but not me"),(0,i.kt)("p",null,"Your internet provider (ISP) is blocking ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Loopback"},"loopback")," traffic. "),(0,i.kt)("p",null,"In other words they block internal connections that just loopback to the same network.",(0,i.kt)("br",null),"\n",(0,i.kt)("em",{parentName:"p"},"(It's like leaving your house everytime you want to go to another room.)")),(0,i.kt)("p",null,"Solution is not to use the external IP. You must use ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," or your ",(0,i.kt)("a",{parentName:"p",href:"/networking/find-ip"},"internal IP")," e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.1.102"),"."),(0,i.kt)("h2",{id:"connection-fails-randomly"},"Connection fails randomly"),(0,i.kt)("h3",{id:"recheck-port-forwarding"},"Recheck port forwarding"),(0,i.kt)("p",null,"It's possible that you need to recheck your ",(0,i.kt)("a",{parentName:"p",href:"/networking/port-forwarding"},"port forwarding"),". Your ",(0,i.kt)("a",{parentName:"p",href:"/networking/find-ip"},"internal IP")," could have changed."),(0,i.kt)("p",null,"You can avoid this by assigning a static address to your server.",(0,i.kt)("br",null),"\nSome good tutorials:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.howtogeek.com/howto/19249/how-to-assign-a-static-ip-address-in-xp-vista-or-windows-7/"},"https://www.howtogeek.com/howto/19249/how-to-assign-a-static-ip-address-in-xp-vista-or-windows-7/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.online-tech-tips.com/computer-tips/how-to-assign-a-static-ip-address-to-a-windows-11-10-pc/"},"https://www.online-tech-tips.com/computer-tips/how-to-assign-a-static-ip-address-to-a-windows-11-10-pc/"))),(0,i.kt)("h3",{id:"check-firewall--anti-virus"},"Check Firewall / Anti-Virus"),(0,i.kt)("p",null,"While not uncommon, it's possible that your anti-virus has decided to block the connection."))}m.isMDXComponent=!0}}]);