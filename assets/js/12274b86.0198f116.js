"use strict";(self.webpackChunkmcss_docs=self.webpackChunkmcss_docs||[]).push([[580],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),v=d(a),u=r,h=v["".concat(s,".").concat(u)]||v[u]||c[u]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},1165:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={sidebar_position:2,title:"Changing the version of Java",description:"Change the path to the java executable, globally or per server",keywords:["java","version","java-version","java-path","update","path"]},s=void 0,d={unversionedId:"advanced/java-path-update",id:"advanced/java-path-update",title:"Changing the version of Java",description:"Change the path to the java executable, globally or per server",source:"@site/docs/advanced/java-path-update.md",sourceDirName:"advanced",slug:"/advanced/java-path-update",permalink:"/advanced/java-path-update",draft:!1,editUrl:"https://github.com/mcserversoft/documentation/edit/main/docs/advanced/java-path-update.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Changing the version of Java",description:"Change the path to the java executable, globally or per server",keywords:["java","version","java-version","java-path","update","path"]},sidebar:"tutorialSidebar",previous:{title:"Java versions",permalink:"/advanced/java-version"},next:{title:"Tweaking the Java Path Detection (v12.6)",permalink:"/advanced/tweak-java-path-detection"}},p={},c=[{value:"Finding the path to the Java executable",id:"-java-path",level:2},{value:"Globally",id:"-globally",level:2},{value:"Per server",id:"-per-server",level:2}],v={toc:c};function u(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},v,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With MCSS you can use different versions of java for each of your servers, or set a global override for the version of java that is used by all servers."),(0,o.kt)("h2",{id:"-java-path"},"Finding the path to the Java executable"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"MCSS now (versions 12.6 and above) includes a Java path picker !",(0,o.kt)("br",null),"\nThe different installed versions are automatically detected and you can easily switch between them, so you can skip this section.",(0,o.kt)("br",null),"\nSearch folders can be modified ",(0,o.kt)("a",{parentName:"p",href:"tweak-java-path-detection"},"here")," if needed."))),(0,o.kt)("p",null,"Once you have installed the Java version you need (refer to the ",(0,o.kt)("a",{parentName:"p",href:"java-version"},"java version guide")," for more information), you need to locate the Java executable."),(0,o.kt)("p",null,"To find the version you need, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Java")," and look for the folder that contains the version you need. Open that folder then the ",(0,o.kt)("inlineCode",{parentName:"p"},"bin")," folder."),(0,o.kt)("p",null,"Copy the path to this folder as shown below (in this case, we're using java 11.0.10)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explorer path",src:a(6621).Z,width:"790",height:"235"})),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Alternative Folders")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Some providers of Java builds may place the Java executable in a different folder. Here is a list of known alternative folders: ",(0,o.kt)("br",null),"\nAdoptium 17: ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Eclipse Adoptium")," ",(0,o.kt)("br",null),"\nAdoptium 16: ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Eclipse Foundation")," ",(0,o.kt)("br",null)))),(0,o.kt)("h2",{id:"-globally"},"Globally"),(0,o.kt)("p",null,"If you only have one server or if your servers all use the same version of Java, you can set the path globally.\nTo do so, open MCSS then at the top click on ",(0,o.kt)("inlineCode",{parentName:"p"},"file > options"),"."),(0,o.kt)("p",null,'Scroll down and you will see a text box labeled "Global Java Path override". Paste the path to the folder containing the Java executable you just found and add ',(0,o.kt)("inlineCode",{parentName:"p"},"\\java.exe")," at the end, or use the path picker."),(0,o.kt)("p",null,"The path you entered will be used for all servers and should look something like this (in this case we're using java 11.0.10):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explorer path",src:a(1891).Z,width:"867",height:"167"})),(0,o.kt)("h2",{id:"-per-server"},"Per server"),(0,o.kt)("p",null,"If you have multiple servers that require different versions of Java, you can override the global Java setting. To do so, open the server settings by clicking the \u2699\ufe0f then navigate to the advanced tab."),(0,o.kt)("p",null,'You will see a text box labeled "Local Java Path override". Paste the path to the folder containing the Java executable you just found and add ',(0,o.kt)("inlineCode",{parentName:"p"},"\\java.exe")," at the end, or use the path picker."),(0,o.kt)("p",null,"The path you entered will be used for this server and should look something like this (in this case we're using java 11.0.10):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explorer path",src:a(9946).Z,width:"857",height:"645"})))}u.isMDXComponent=!0},6621:function(e,t,a){t.Z=a.p+"assets/images/explorer-ad4e90d1488929f4417c286200534ef4.png"},1891:function(e,t,a){t.Z=a.p+"assets/images/java-path-override-bf6a9f90e7ff77b3dc7a1f5cabcc71b2.png"},9946:function(e,t,a){t.Z=a.p+"assets/images/local-path-override-6c014e5a558d07ff6e9ab474bfc15869.png"}}]);