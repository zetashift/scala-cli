"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6607],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8890:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],l={title:"IDE support",sidebar_position:10},s=void 0,c={unversionedId:"guides/ide",id:"guides/ide",title:"IDE support",description:"Scala CLI currently integrates a build server using the BSP protocol.",source:"@site/docs/guides/ide.md",sourceDirName:"guides",slug:"/guides/ide",permalink:"/docs/guides/ide",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/guides/ide.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"IDE support",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Managing dependencies",permalink:"/docs/guides/dependencies"},next:{title:"Using directives",permalink:"/docs/guides/using-directives"}},u={},p=[{value:"Metals",id:"metals",level:2},{value:"IntelliJ",id:"intellij",level:2},{value:"Directories vs single files when working with an IDE",id:"directories-vs-single-files-when-working-with-an-ide",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Scala CLI currently integrates a build server using the ",(0,r.kt)("a",{parentName:"p",href:"https://build-server-protocol.github.io/"},"BSP protocol"),".\nAt this moment Scala CLI is not automatically detected by IDEs, so we need to use ",(0,r.kt)("a",{parentName:"p",href:"https://build-server-protocol.github.io/docs/server-discovery.html"},"Build Server Discovery")," from BSP protocol to generate a connection details file (",(0,r.kt)("inlineCode",{parentName:"p"},".bsp/scala-cli.json"),")."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If none of these commands were run:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"run")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setup-ide"))),(0,r.kt)("p",{parentName:"div"},"or a previously-generated connection detail file was deleted, your IDE will ",(0,r.kt)("em",{parentName:"p"},"not")," use Scala CLI to configure your workspace."),(0,r.kt)("p",{parentName:"div"},"In this case, just run one of the commands above to recreate the connection details file."))),(0,r.kt)("p",null,"Since Scala CLI has a command-line-first approach, this is reflected in its IDE integration.\nBy default, Scala CLI stores options passed to the last ",(0,r.kt)("inlineCode",{parentName:"p"},"compile"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"run"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," command, and uses those options to configure the IDE."),(0,r.kt)("p",null,"For more control we also expose the ",(0,r.kt)("a",{parentName:"p",href:"/docs/commands/setup-ide"},(0,r.kt)("inlineCode",{parentName:"a"},"setup-ide")," command"),", which lets you fine-tune the options that are passed to the IDE."),(0,r.kt)("p",null,"But note that once ",(0,r.kt)("inlineCode",{parentName:"p"},"setup-ide")," is used, Scala CLI does not update the configuration based on latest command.\nTo enable automatic updates again, remove the ",(0,r.kt)("inlineCode",{parentName:"p"},".bsp")," directory and run ",(0,r.kt)("inlineCode",{parentName:"p"},"compile"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"run"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," to recreate the connection details file."),(0,r.kt)("p",null,"For now non-local sources are supported. What are non-local sources? Gists, URLs or piped sources."),(0,r.kt)("p",null,"Scala CLI has been tested with two main Scala IDEs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://scalameta.org/metals/"},"Metals"),", which is an LSP server for Scala, and is used with ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code"),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.vim.org/"},"Vim")," and many other editors"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/idea/"},"IntelliJ IDEA"),", with the ",(0,r.kt)("a",{parentName:"li",href:"https://confluence.jetbrains.com/display/SCA/Scala+Plugin+for+IntelliJ+IDEA?_ga=2.54176744.1963952405.1634470110-410935139.1631638301"},"Scala Plugin")," installed")),(0,r.kt)("p",null,"In an ideal world we would replace the rest of this guide with something along the lines of, \u201cScala CLI works within IDEs above as you would expect.\u201d However, mainly due to how fresh Scala CLI is, and also due to our radical approach to the project structure, using a Scala CLI project with your favourite IDE may not be as amazing as we would like. (That being said, proper IDE integration is our top priority at this moment!)"),(0,r.kt)("h2",{id:"metals"},"Metals"),(0,r.kt)("p",null,"Once Metals picks up the project structure that\u2019s created by Scala CLI, basic features like navigation, diagnostics, and code completion should work.\nReloading the workspace on project structure changes is currently experimental and should work for most scenarios, we are working on improving its stability.\nFor some cases it may still be necessary to restart the build server manually.\n(Closing & reopening the project should also be sufficient.)"),(0,r.kt)("h2",{id:"intellij"},"IntelliJ"),(0,r.kt)("p",null,"Here are a few notes related to IntelliJ support:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IntelliJ currently does not automatically pick up changes in the project structure, so any change in dependencies, compiler options, etc., need to be manually reloaded."),(0,r.kt)("li",{parentName:"ul"},"Similarly to Metals, reloading the workspace on project structure changes is currently experimental and should work for most scenarios.\nWe are working on improving its stability. For some cases it may still be necessary to restart the build server manually.\n(Closing & reopening the project should also be sufficient.)")),(0,r.kt)("h2",{id:"directories-vs-single-files-when-working-with-an-ide"},"Directories vs single files when working with an IDE"),(0,r.kt)("p",null,"When working with Scala CLI in an IDE, it is generally suggested to use directories rather than single files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"scala-cli setup-ide some-directory\n")),(0,r.kt)("p",null,"Of course, nothing is stopping you from working with whatever you like as normal,\nbut please do keep in mind that the IDE will import the exact build that you have set up,\nwithout second-guessing the user's intentions. In many IDEs, IDEA IntelliJ & Visual Studio Code included,\neverything within a given project root directory is at least implicitly treated as\na part of the project (and probably shown as part of your project structure)."),(0,r.kt)("p",null,"This means that when you pass just a single source file to Scala CLI like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"scala-cli setup-ide some-directory/A.scala\n")),(0,r.kt)("p",null,"If you open its surrounding directory as a project, any other files present in that directory will be visible\nin your IDE project's structure, but they will not be included in your builds."),(0,r.kt)("p",null,"So if you want to include another file in your build, let's say ",(0,r.kt)("inlineCode",{parentName:"p"},"some-directory/B.scala"),"\nalongside the previously configured ",(0,r.kt)("inlineCode",{parentName:"p"},"some-directory/A.scala"),", it is probably not enough\nto create the file within the same directory in your IDE."),(0,r.kt)("p",null,"What you need to do instead is add it to your build with Scala CLI from the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"scala-cli setup-ide some-directory/A.scala some-directory/B.scala\n")),(0,r.kt)("p",null,"There, now both ",(0,r.kt)("inlineCode",{parentName:"p"},"A.scala")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"B.scala")," should be included in your builds when the IDE picks up the new structure."),(0,r.kt)("p",null,"Still, if you want to add/remove files like this a lot while working in an IDE,\nit may be a lot simpler to work on the whole directory instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd some-directory\nscala-cli setup-ide .\n")),(0,r.kt)("p",null,"That way all the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"some-directory")," will be treated as a part of the project as you go,\nwithout the need to jump into the command line whenever you create a new file."))}m.isMDXComponent=!0}}]);