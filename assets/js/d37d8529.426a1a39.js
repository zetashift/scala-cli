"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3303],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return u}});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r=t.createContext({}),c=function(e){var a=t.useContext(r),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(r.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=l,h=m["".concat(r,".").concat(u)]||m[u]||d[u]||i;return n?t.createElement(h,s(s({ref:a},p),{},{components:n})):t.createElement(h,s({ref:a},p))}));function u(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var r in a)hasOwnProperty.call(a,r)&&(o[r]=a[r]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3566:function(e,a,n){n.r(a),n.d(a,{assets:function(){return p},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var t=n(3117),l=n(102),i=(n(7294),n(3905)),s=["components"],o={title:"Compile",sidebar_position:5},r=void 0,c={unversionedId:"commands/compile",id:"commands/compile",title:"Compile",description:"Scala CLI compiles your code with its compile command:",source:"@site/docs/commands/compile.md",sourceDirName:"commands",slug:"/commands/compile",permalink:"/docs/commands/compile",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/compile.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Compile",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/commands/basics"},next:{title:"Run",permalink:"/docs/commands/run"}},p={},d=[{value:"Test scope",id:"test-scope",level:2},{value:"Watch mode",id:"watch-mode",level:2},{value:"Scala version",id:"scala-version",level:2},{value:"Scala Nightlies",id:"scala-nightlies",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Scala compiler options",id:"scala-compiler-options",level:2},{value:"Scala compiler help",id:"scala-compiler-help",level:2},{value:"Scala compiler plugins",id:"scala-compiler-plugins",level:2},{value:"Printing a class path",id:"printing-a-class-path",level:2}],m={toc:d};function u(e){var a=e.components,n=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Scala CLI compiles your code with its ",(0,i.kt)("inlineCode",{parentName:"p"},"compile")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Hello.scala",title:"Hello.scala"},'object Hello {\n  def main(args: Array[String]): Unit =\n    println("Hello")\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile Hello.scala\n")),(0,i.kt)("p",null,"Note that most Scala CLI commands automatically compile your code, if necessary.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"compile")," command is useful if you'd like to check that your code compiles,\nor know of compilation warnings, without running it or packaging it."),(0,i.kt)("p",null,"The most common ",(0,i.kt)("inlineCode",{parentName:"p"},"compile")," options are shown below.\nFor a full list of options, run ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli compile --help"),", or check the options linked in the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/commands#compile"},"reference documentation"),"."),(0,i.kt)("h2",{id:"test-scope"},"Test scope"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--test")," makes ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," compile main and test scopes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli compile --test Hello.scala\n")),(0,i.kt)("h2",{id:"watch-mode"},"Watch mode"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--watch")," makes ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," watch your code for changes, and re-compiles it upon any change:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli compile --watch Hello.scala\n# Compiling project-cef76d561e (1 Scala source)\n# Compiled 'project-cef76d561e'\n# Watching sources, press Ctrl+C to exit.\n# Compiling project-cef76d561e (1 Scala source)\n# Compiled 'project-cef76d561e'\n# Watching sources, press Ctrl+C to exit.\n")),(0,i.kt)("h2",{id:"scala-version"},"Scala version"),(0,i.kt)("p",null,"Scala CLI uses the latest stable version of Scala which was tested in ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," (see our list of ",(0,i.kt)("a",{parentName:"p",href:"../reference/scala-versions"},"Supported Scala Versions"),"). You can specify the Scala version you'd like to use with ",(0,i.kt)("inlineCode",{parentName:"p"},"--scala"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli compile --scala 2.13.6 Hello.scala\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," works with all major ",(0,i.kt)("inlineCode",{parentName:"p"},"2.12.x"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2.13.x"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"3.x")," Scala versions."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--scala"),' also accepts "short" Scala versions, such as ',(0,i.kt)("inlineCode",{parentName:"p"},"2.12"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),". In this\ncase, it picks the highest corresponding stable Scala version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli compile --scala 2.12 Hello.scala\nscala-cli compile --scala 2 Hello.scala\nscala-cli compile --scala 3 Hello.scala\n")),(0,i.kt)("h2",{id:"scala-nightlies"},"Scala Nightlies"),(0,i.kt)("p",null,"The nightly builds of Scala compiler are unstable ones which are published on a nightly basis."),(0,i.kt)("p",null,"To use the latest Scala 2 and Scala 3 nightly builds, pass ",(0,i.kt)("inlineCode",{parentName:"p"},"2.nightly")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"3.nightly"),", respectively.\nYou can also request the last ",(0,i.kt)("inlineCode",{parentName:"p"},"2.12.nightly")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"2.13.nightly")," versions. ",(0,i.kt)("inlineCode",{parentName:"p"},"2.13.nightly")," is the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"2.nightly"),".\nMoreover, passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"3.{sub binary number}.nightly")," format, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"3.0.nightly")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"3.1.nightly")," is accepted, too."),(0,i.kt)("p",null,"Scala CLI takes care of fetching the nightly builds of Scala 2 and Scala 3 from different repositories, without you having to pass their addresses as input after the ",(0,i.kt)("inlineCode",{parentName:"p"},"--repo")," flag."),(0,i.kt)("p",null,"For compiling with the latest Scala 2 nightly build:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala -S 2.nightly\n")),(0,i.kt)("p",null,"For compiling with the latest Scala 3 nightly build:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala -S 3.nightly\n")),(0,i.kt)("p",null,"For compiling with an specific nightly build, you have the full version for:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala -S 2.13.9-bin-4505094\n")),(0,i.kt)("p",null,"For adding this inside scala files with ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/using-directives"},"using directives"),", use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'//> using scala "2.nightly"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'//> using scala "3.nightly"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'//> using scala "2.13.9-bin-4505094"\n')),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"You can add dependencies on the command-line with ",(0,i.kt)("inlineCode",{parentName:"p"},"--dependency"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile Hello.scala \\\n  --dependency org.scala-lang.modules::scala-parallel-collections:1.0.4\n")),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"--dependency")," is only meant as a convenience. You should favor\nadding dependencies in the source files themselves via ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/configuration#special-imports"},(0,i.kt)("inlineCode",{parentName:"a"},"using")," directives"),"."),(0,i.kt)("p",null,"You can also add simple JAR files \u2014 those that don\u2019t have transitive dependencies \u2014 as dependencies, with ",(0,i.kt)("inlineCode",{parentName:"p"},"--jar"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile Hello.scala --jar /path/to/library.jar\n")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/dependencies"},"Dependency management")," guide for more details."),(0,i.kt)("h2",{id:"scala-compiler-options"},"Scala compiler options"),(0,i.kt)("p",null,"Most ",(0,i.kt)("a",{parentName:"p",href:"https://docs.scala-lang.org/overviews/compiler-options"},"Scala compiler options")," can be passed as-is to ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'scala-cli compile Hello.scala -Xlint:infer-any\n# Compiling project (1 Scala source)\n# [warn] ./Hello.scala:2:11: a type was inferred to be `Any`; this may indicate a programming error.\n# [warn]   val l = List("a", true, 2, new Object)\n# [warn]           ^\n# Compiled project\n')),(0,i.kt)("p",null,"All ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," options that start with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-g")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-language")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-opt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-P")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-target")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-V")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-W")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-X")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-Y"))),(0,i.kt)("p",null,"are assumed to be Scala compiler options."),(0,i.kt)("p",null,"Scala compiler options can also be passed with ",(0,i.kt)("inlineCode",{parentName:"p"},"-O"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile Hello.scala -O -deprecation -O -Xlint:infer-any\n# [warn] ./Hello.scala:3:7: method x in class Some is deprecated (since 2.12.0): Use .value instead.\n# [warn]   opt.x\n# [warn]       ^\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-O")," accepts both options with the prefixes shown above, and those without such a prefix."),(0,i.kt)("h2",{id:"scala-compiler-help"},"Scala compiler help"),(0,i.kt)("p",null,"You can also view the Scala compiler help for a particular Scala version with ",(0,i.kt)("inlineCode",{parentName:"p"},"--scalac-help"),", which is an alias for ",(0,i.kt)("inlineCode",{parentName:"p"},"-O -help"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli -S 2.13.8 --scalac-help\n# Usage: scalac <options> <source files>\n#\n# Standard options:\n#   -Dproperty=value             Pass -Dproperty=value directly to the runtime system.\n#   -J<flag>                     Pass <flag> directly to the runtime system.\n#   -P:<plugin>:<opt>            Pass an option to a plugin\n#   -V                           Print a synopsis of verbose options. [false]\n#   -W                           Print a synopsis of warning options. [false]\n#   -Werror                      Fail the compilation if there are any warnings. [false]\n#   -X                           Print a synopsis of advanced options. [false]\n#   -Y                           Print a synopsis of private options. [false]\n#   -bootclasspath <path>        Override location of bootstrap class files.\n#   -classpath <path>            Specify where to find user class files.\n#   -d <directory|jar>           destination for generated classfiles.\n#   -dependencyfile <file>       Set dependency tracking file.\n#   -deprecation                 Emit warning and location for usages of deprecated APIs. See also -Wconf. [false]\n#   -encoding <encoding>         Specify character encoding used by source files.\n#   -explaintypes                Explain type errors in more detail. [false]\n#   -extdirs <path>              Override location of installed extensions.\n#   -feature                     Emit warning and location for usages of features that should be imported explicitly. See also -Wconf. [false]\n#   -g:<level>                   Set level of generated debugging info. (none,source,line,[vars],notailcalls)\n#   -help                        Print a synopsis of standard options [false]\n#   -javabootclasspath <path>    Override java boot classpath.\n#   -javaextdirs <path>          Override java extdirs classpath.\n#   -language:<features>         Enable or disable language features\n#   -no-specialization           Ignore @specialize annotations. [false]\n#   -nobootcp                    Do not use the boot classpath for the scala jars. [false]\n#   -nowarn                      Generate no warnings. [false]\n#   -opt:<optimizations>         Enable optimizations, `help` for details.\n#   -opt-inline-from:<patterns>  Patterns for classfile names from which to allow inlining, `help` for details.\n#   -opt-warnings:<warnings>     Enable optimizer warnings, `help` for details.\n#   -print                       Print program with Scala-specific features removed. [false]\n#   -release <release>           Compile for a specific version of the Java platform. Supported targets: 6, 7, 8, 9\n#   -rootdir <path>              The absolute path of the project root directory, usually the git/scm checkout. Used by -Wconf.\n#   -sourcepath <path>           Specify location(s) of source files.\n#   -target:<target>             Target platform for object files. ([8],9,10,11,12,13,14,15,16,17,18)\n#   -toolcp <path>               Add to the runner classpath.\n#   -unchecked                   Enable additional warnings where generated code depends on assumptions. See also -Wconf. [false]\n#   -uniqid                      Uniquely tag all identifiers in debugging output. [false]\n#   -usejavacp                   Utilize the java.class.path in classpath resolution. [false]\n#   -usemanifestcp               Utilize the manifest in classpath resolution. [false]\n#   -verbose                     Output messages about what the compiler is doing. [false]\n#   -version                     Print product version and exit. [false]\n#   @<file>                      A text file containing compiler arguments (options and source files) [false]\n#\n# Deprecated settings:\n#   -optimize                    Enables optimizations. [false]\n#                                deprecated: Since 2.12, enables -opt:l:inline -opt-inline-from:**. See -opt:help.\n")),(0,i.kt)("p",null,"Other scalac print help options (like ",(0,i.kt)("inlineCode",{parentName:"p"},"-X"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-Xshow-phases"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-Vphases"),", etc.) are supported as well."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli -S 2.12.15 -Xshow-phases\n#\n#    phase name  id  description\n#    ----------  --  -----------\n#        parser   1  parse source into ASTs, perform simple desugaring\n#         namer   2  resolve names, attach symbols to named trees\n#packageobjects   3  load package objects\n#         typer   4  the meat and potatoes: type the trees\n#        patmat   5  translate match expressions\n#superaccessors   6  add super accessors in traits and nested classes\n#    extmethods   7  add extension methods for inline classes\n#       pickler   8  serialize symbol tables\n#     refchecks   9  reference/override checking, translate nested objects\n#       uncurry  10  uncurry, translate function values to anonymous classes\n#        fields  11  synthesize accessors and fields, add bitmaps for lazy vals\n#     tailcalls  12  replace tail calls by jumps\n#    specialize  13  @specialized-driven class and method specialization\n# explicitouter  14  this refs to outer pointers\n#       erasure  15  erase types, add interfaces for traits\n#   posterasure  16  clean up erased inline classes\n#    lambdalift  17  move nested functions to top level\n#  constructors  18  move field definitions into constructors\n#       flatten  19  eliminate inner classes\n#         mixin  20  mixin composition\n#       cleanup  21  platform-specific cleanups, generate reflective calls\n#    delambdafy  22  remove lambdas\n#           jvm  23  generate JVM bytecode\n#      terminal  24  the last phase during a compilation run\n")),(0,i.kt)("h2",{id:"scala-compiler-plugins"},"Scala compiler plugins"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"--compiler-plugin")," to add compiler plugin dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile Hello.scala --compiler-plugin org.typelevel:::kind-projector:0.13.2 --scala 2.12.14\n")),(0,i.kt)("h2",{id:"printing-a-class-path"},"Printing a class path"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--class-path")," makes ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli compile")," print a class path:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile --class-path Hello.scala\n# /work/.scala/project-cef76d561e/classes:~/Library/Caches/Coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-library/2.12.14/scala-library-2.12.14.jar:~/Library/Caches/ScalaCli/local-repo/0.1.0/org.virtuslab.scala-cli/runner_2.12/0.0.1-SNAPSHOT/jars/runner_2.12.jar:~/Library/Caches/ScalaCli/local-repo/0.1.0/org.virtuslab.scala-cli/stubs/0.0.1-SNAPSHOT/jars/stubs.jar\n")),(0,i.kt)("p",null,"This is handy when working with other tools.\nFor example, you can pass this class path to ",(0,i.kt)("inlineCode",{parentName:"p"},"java -cp"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'java -cp "$(scala-cli compile --class-path Hello.scala)" Hello\n# Hello\n')),(0,i.kt)("p",null,"Note that you should favor the ",(0,i.kt)("a",{parentName:"p",href:"/docs/commands/run"},(0,i.kt)("inlineCode",{parentName:"a"},"run"))," command to run your code, rather than running ",(0,i.kt)("inlineCode",{parentName:"p"},"java -cp"),".\nThe class path obtained this way is only meant for scenarios where ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," doesn't offer a more convenient option."))}u.isMDXComponent=!0}}]);