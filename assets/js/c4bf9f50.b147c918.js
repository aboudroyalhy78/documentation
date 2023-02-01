"use strict";(self.webpackChunkmcss_docs=self.webpackChunkmcss_docs||[]).push([[3],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,g=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return r?n.createElement(g,l(l({ref:t},d),{},{components:r})):n.createElement(g,l({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2424:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2,title:"Manually creating a Forge server",description:"Steps to create a new Forge server",keywords:["forge","create","server","create-forge-server","MCSS","mods","modded"]},l=void 0,i={unversionedId:"basic/create-server/Forge/create-forge-server-manually",id:"basic/create-server/Forge/create-forge-server-manually",title:"Manually creating a Forge server",description:"Steps to create a new Forge server",source:"@site/docs/basic/create-server/Forge/create-forge-server-manually.md",sourceDirName:"basic/create-server/Forge",slug:"/basic/create-server/Forge/create-forge-server-manually",permalink:"/basic/create-server/Forge/create-forge-server-manually",draft:!1,editUrl:"https://github.com/mcserversoft/documentation/edit/main/docs/basic/create-server/Forge/create-forge-server-manually.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Manually creating a Forge server",description:"Steps to create a new Forge server",keywords:["forge","create","server","create-forge-server","MCSS","mods","modded"]},sidebar:"tutorialSidebar",previous:{title:"Creating a Forge server",permalink:"/basic/create-server/Forge/create-forge-server"},next:{title:"Sourcing a server file",permalink:"/basic/create-server/sourcing-server-file"}},s={},c=[{value:"Download Forge",id:"-download-forge",level:2},{value:"Create the Forge server",id:"-create-the-forge-server",level:2},{value:"Import the server in MCSS",id:"-migrate-the-server-to-mcss",level:2},{value:"Tweaking the server start settings",id:"tweaking-the-server-start-settings",level:2},{value:"Set the EULA file",id:"set-the-eula-file",level:2}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are 2 options on how to add a forge server to mcss."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/basic/create-server/Forge/create-forge-server"},"Use the integrated Forge installer")),(0,a.kt)("li",{parentName:"ul"},"Manually create & import Forge server")),(0,a.kt)("p",null,"This guide will show you how to manually create and an import a forge server."),(0,a.kt)("h2",{id:"-download-forge"},"Download Forge"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://files.minecraftforge.net"},"Forge's website"),' and choose the version that you want to download. Click on "Installer" to download that version\'s installer.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Download forge",src:r(5655).Z,width:"1385",height:"683"})),(0,a.kt)("p",null,'Wait for the end of the ad and click on "Skip" at the top right of the page. A .jar file will be downloaded, you might need to confirm the download on some browsers.'),(0,a.kt)("h2",{id:"-create-the-forge-server"},"Create the Forge server"),(0,a.kt)("p",null,"Once the download is done, open the file ",(0,a.kt)("inlineCode",{parentName:"p"},"forge-<minecraft_version>-<forge_version>-installer.jar")," to begin the Forge server installation. ",(0,a.kt)("br",null),'\nChoose "install server" and select an empty folder in which the server will temporarily be installed (it will then be moved to the MCSS folder) and click OK. All the required files will be downloaded and placed in the selected folder.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Install forge",src:r(6993).Z,width:"313",height:"272"})),(0,a.kt)("p",null,"The folder now contains :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A sub-folder ",(0,a.kt)("inlineCode",{parentName:"li"},"libraries")),(0,a.kt)("li",{parentName:"ul"},"A file ",(0,a.kt)("inlineCode",{parentName:"li"},"<minecraft_version>.json")),(0,a.kt)("li",{parentName:"ul"},"A file ",(0,a.kt)("inlineCode",{parentName:"li"},"forge-<minecraft_version>-<forge_version>.jar")),(0,a.kt)("li",{parentName:"ul"},"A file ",(0,a.kt)("inlineCode",{parentName:"li"},"minecraft-server.<minecraft_version>.jar"))),(0,a.kt)("p",null,"You can now delete the forge installer file."),(0,a.kt)("h2",{id:"-migrate-the-server-to-mcss"},"Import the server in MCSS"),(0,a.kt)("p",null,'Now, open MCSS and go to "File > Import server". A new window will open, select Forge server. Then in the left pane, drop any file from your server\'s folder.',(0,a.kt)("br",null),"\nThen, choose a name for you server and a folder name (the server will be stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"mcss/servers/<folder_name>"),"). Choose the amount of RAM that will be allocated to the server in MB (it's recommended to have at least 4GB, or 4096MB, for a Forge server), and click on Import Server.",(0,a.kt)("br",null),"\nAll the server files are copied to the /servers folder of MCSS and your server will appear in the servers list. ",(0,a.kt)("br",null)),(0,a.kt)("p",null,"You can also delete the temporary folder where you installed Forge, it is now useless since all the files have been copied to the /servers folder of the app."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Migrate forge",src:r(4485).Z,width:"1066",height:"615"})),(0,a.kt)("h2",{id:"tweaking-the-server-start-settings"},"Tweaking the server start settings"),(0,a.kt)("p",null,"A warning will appear asking you to set the launch options.\nOpen it, and select your server's launcher :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For Forge version 1.16 and prior, select the ",(0,a.kt)("inlineCode",{parentName:"li"},"forge-<version>.jar")," in the jar selector. Finish the install process, and you're done !"),(0,a.kt)("li",{parentName:"ul"},'For Forge 1.17 or newer, check the "use a .bat file" and select the ',(0,a.kt)("inlineCode",{parentName:"li"},"run.bat")," created by the installer, then follow the next steps.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Launch options config",src:r(3157).Z,width:"666",height:"403"})),(0,a.kt)("p",null,"You must now edit the .bat file for it to work with MCSS.",(0,a.kt)("br",null),"\nOpen the mcss server settings and open the 'Advanced' tab."),(0,a.kt)("p",null,'Click on the \u270f\ufe0f pencil icon next to the "Use Bat file" option :'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Install forge",src:r(759).Z,width:"662",height:"91"})),(0,a.kt)("p",null,"You might see something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch"},"REM Forge requires a configured set of both JVM and program arguments.\nREM Add custom JVM arguments to the user_jvm_args.txt\nREM Add custom program arguments {such as nogui} to this file in the next line before the %* or\nREM  pass them to this script directly\njava @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.18.1-39.0.45/win_args.txt %*\npause\n")),(0,a.kt)("p",null,"You must remove the ",(0,a.kt)("em",{parentName:"p"},"pause")," statement at the bottom and add the ",(0,a.kt)("em",{parentName:"p"},"nogui")," parameter, as well as replace ",(0,a.kt)("inlineCode",{parentName:"p"},"java")," with your full path to java.exe.",(0,a.kt)("br",null),"\nYou can use the Path Picker (in the server's settings) to find it, make sure to use ",(0,a.kt)("a",{parentName:"p",href:"/advanced/java-version"},"the right version")," depending on your server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch"},'REM Forge requires a configured set of both JVM and program arguments.\nREM Add custom JVM arguments to the user_jvm_args.txt\nREM Add custom program arguments {such as nogui} to this file in the next line before the %* or\nREM  pass them to this script directly\n"C:\\Program Files\\Java\\jdk-17.0.2\\bin\\java.exe" @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.18.1-39.0.45/win_args.txt nogui %*\n')),(0,a.kt)("h2",{id:"set-the-eula-file"},"Set the EULA file"),(0,a.kt)("p",null,'At the first server start, the console will show an error asking you to accept the EULA. To do so, click on "servers > show in file explorer" and open the "eula.txt" file. Change the line ',(0,a.kt)("inlineCode",{parentName:"p"},"eula=false")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"eula=true")," and start the server again. ",(0,a.kt)("br",null),"\nThis time, it will fully start and you will be able to connect from you Minecraft client."),(0,a.kt)("p",null,"That's it, now you have a fully functioning forge server in mcss."))}u.isMDXComponent=!0},5655:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/download_forge-1819a44d456a1790cc50d52d7df65141.png"},759:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApYAAABbCAIAAABGeVIeAAAEsmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iOTEiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNjYyIgogICB0aWZmOlJlc29sdXRpb25Vbml0PSIyIgogICB0aWZmOlhSZXNvbHV0aW9uPSI5Ni8xIgogICB0aWZmOllSZXNvbHV0aW9uPSI5Ni8xIgogICBleGlmOlBpeGVsWERpbWVuc2lvbj0iNjYyIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iOTEiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIKICAgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0w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"},6993:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/install_forge-88322bdfde83b418f3ffd97a1f3053e0.png"},4485:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/migrate_forge-ebc8266a9518d73880e9d0c501647c4d.png"},3157:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/set_launch_options-b8dd0d101e851ecf4091c6f8c4f94080.png"}}]);