"use strict";(self.webpackChunkmcss_docs=self.webpackChunkmcss_docs||[]).push([[219],{3905:(e,A,t)=>{t.d(A,{Zo:()=>c,kt:()=>p});var r=t(7294);function a(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function n(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);A&&(r=r.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?n(Object(t),!0).forEach((function(A){a(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function s(e,A){if(null==e)return{};var t,r,a=function(e,A){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],A.indexOf(t)>=0||(a[t]=e[t]);return a}(e,A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),i=function(e){var A=r.useContext(l),t=A;return e&&(t="function"==typeof e?e(A):o(o({},A),e)),t},c=function(e){var A=i(e.components);return r.createElement(l.Provider,{value:A},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var A=e.children;return r.createElement(r.Fragment,{},A)}},v=r.forwardRef((function(e,A){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(t),v=a,p=u["".concat(l,".").concat(v)]||u[v]||d[v]||n;return t?r.createElement(p,o(o({ref:A},c),{},{components:t})):r.createElement(p,o({ref:A},c))}));function p(e,A){var t=arguments,a=A&&A.mdxType;if("string"==typeof e||a){var n=t.length,o=new Array(n);o[0]=v;var s={};for(var l in A)hasOwnProperty.call(A,l)&&(s[l]=A[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<n;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},9048:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>i});var r=t(7462),a=(t(7294),t(3905));const n={sidebar_position:1,title:"Creating a Forge server",description:"Steps to create a new Forge server",keywords:["forge","create","server","create-forge-server","MCSS","mods","modded"]},o=void 0,s={unversionedId:"basic/create-server/Forge/create-forge-server",id:"basic/create-server/Forge/create-forge-server",title:"Creating a Forge server",description:"Steps to create a new Forge server",source:"@site/docs/basic/create-server/Forge/create-forge-server.mdx",sourceDirName:"basic/create-server/Forge",slug:"/basic/create-server/Forge/create-forge-server",permalink:"/basic/create-server/Forge/create-forge-server",draft:!1,editUrl:"https://github.com/mcserversoft/documentation/edit/main/docs/basic/create-server/Forge/create-forge-server.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Creating a Forge server",description:"Steps to create a new Forge server",keywords:["forge","create","server","create-forge-server","MCSS","mods","modded"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Manually creating a Forge server",permalink:"/basic/create-server/Forge/create-forge-server-manually"}},l={},i=[{value:"Use the integrated Forge installer",id:"-download-forge",level:2},{value:"Download Forge Installer",id:"-download-forge",level:2},{value:"Create the Forge server",id:"-create-the-forge-server",level:2},{value:"Let the installer do its job",id:"-let-the-installer-do-its-job",level:2},{value:"Tweaking the server start settings",id:"-tweaking-the-server-start-settings",level:2}],c={toc:i};function u(e){let{components:A,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:A,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are 2 options on how to add a forge server to mcss."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use the integrated Forge installer"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/basic/create-server/Forge/create-forge-server-manually"},"Manually create & import Forge server"))),(0,a.kt)("p",null,"This guide will show you how to use the integrated installer."),(0,a.kt)("admonition",{title:"About the installer",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The integrated Forge installer works for Forge & Fabric. It was added in v12.1.",(0,a.kt)("br",null),"\nIt's still pretty new, if it fails we recommend using the \"",(0,a.kt)("a",{parentName:"p",href:"/basic/create-server/Forge/create-forge-server-manually"},"manual way"),'".')),(0,a.kt)("h2",{id:"-download-forge"},"Use the integrated Forge installer"),(0,a.kt)("h2",{id:"-download-forge"},"Download Forge Installer"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://files.minecraftforge.net"},"Forge's website"),' and choose the version that you want to download. It must be the installer file. This is very important. If not available (e.g. very old versions) then you must use the "',(0,a.kt)("a",{parentName:"p",href:"/basic/create-server/Forge/create-forge-server-manually"},"manual way"),'"'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you are looking to download the fabric installer take a look at the ",(0,a.kt)("a",{parentName:"p",href:"/basic/create-server/sourcing-server-file"},"Sourcing a server file")," page.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Download forge",src:t(5655).Z,width:"1385",height:"683"})),(0,a.kt)("p",null,'Wait for the end of the ad and click on "Skip" at the top right of the page. A .jar file will be downloaded, you might need to confirm the download on some browsers.'),(0,a.kt)("h2",{id:"-create-the-forge-server"},"Create the Forge server"),(0,a.kt)("p",null,"Once the download is complete, you can start creating the new Forge Server.",(0,a.kt)("br",null),"\nIn the 'Server File' section select the downloaded installer file."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Install forge",src:t(6348).Z,width:"1066",height:"615"})),(0,a.kt)("h2",{id:"-let-the-installer-do-its-job"},"Let the installer do its job"),(0,a.kt)("p",null,"During the server creation process, the forge server will be installed in the background. This could take a couple of minutes depending on your system."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Install forge",src:t(3590).Z,width:"1064",height:"117"})),(0,a.kt)("h2",{id:"-tweaking-the-server-start-settings"},"Tweaking the server start settings"),(0,a.kt)("p",null,"You now have to specify your server's launcher file."),(0,a.kt)("p",null,"For Forge 1.16 or earlier, open you server's folder using the folder icon, and rename the ",(0,a.kt)("inlineCode",{parentName:"p"},"forge-<version>.jar")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"forge.jar"),".",(0,a.kt)("br",null),"\nYou can now start your server."),(0,a.kt)("p",null,"If you're using Forge 1.17 or newer, open the mcss server settings and open the 'Advanced' tab:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Install forge",src:t(3848).Z,width:"662",height:"498"})),(0,a.kt)("p",null,"Select the 'Use Bat file' option and select the available file. Next click on the \u270f\ufe0f pencil icon:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Install forge",src:t(759).Z,width:"662",height:"91"})),(0,a.kt)("p",null,"You might see something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch"},"REM Forge requires a configured set of both JVM and program arguments.\nREM Add custom JVM arguments to the user_jvm_args.txt\nREM Add custom program arguments {such as nogui} to this file in the next line before the %* or\nREM  pass them to this script directly\njava @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.18.1-39.0.45/win_args.txt %*\npause\n")),(0,a.kt)("p",null,"You must remove the ",(0,a.kt)("em",{parentName:"p"},"pause")," statement at the bottom and add the ",(0,a.kt)("em",{parentName:"p"},"nogui")," parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch"},"REM Forge requires a configured set of both JVM and program arguments.\nREM Add custom JVM arguments to the user_jvm_args.txt\nREM Add custom program arguments {such as nogui} to this file in the next line before the %* or\nREM  pass them to this script directly\njava @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.18.1-39.0.45/win_args.txt nogui %*\n")),(0,a.kt)("p",null,"That's it, now you have a fully functioning forge server in mcss."))}u.isMDXComponent=!0},5655:(e,A,t)=>{t.d(A,{Z:()=>r});const r=t.p+"assets/images/download_forge-1819a44d456a1790cc50d52d7df65141.png"},759:(e,A,t)=>{t.d(A,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApYAAABbCAIAAABGeVIeAAAEsmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iOTEiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNjYyIgogICB0aWZmOlJlc29sdXRpb25Vbml0PSIyIgogICB0aWZmOlhSZXNvbHV0aW9uPSI5Ni8xIgogICB0aWZmOllSZXNvbHV0aW9uPSI5Ni8xIgogICBleGlmOlBpeGVsWERpbWVuc2lvbj0iNjYyIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iOTEiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIKICAgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0w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"},3848:(e,A,t)=>{t.d(A,{Z:()=>r});const r=t.p+"assets/images/forge_incorrect_server_settings-5516715d9d9082ba1ed51ad8f8cb5f71.png"},6348:(e,A,t)=>{t.d(A,{Z:()=>r});const r=t.p+"assets/images/forge_installer-d0a98e0c40345d1684aeb90bede96e87.png"},3590:(e,A,t)=>{t.d(A,{Z:()=>r});const r="data:image/png;base64,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"}}]);