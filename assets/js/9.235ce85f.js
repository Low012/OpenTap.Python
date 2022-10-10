(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{279:function(e,t,o){e.exports=o.p+"assets/img/MyPythonProject_Editor.8b60ad3e.png"},303:function(e,t,o){"use strict";o.r(t);var n=o(14),a=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"new-project-creation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-project-creation"}},[e._v("#")]),e._v(" New Project Creation")]),e._v(" "),t("p",[e._v("Creating a Python plugin from scratch could be done manually or with the help of the project creation. The project tool helps you to start the development of a Python plugin project faster.")]),e._v(" "),t("p",[e._v("To create a new project, first find out where you want to place it and what to name it. Maybe you keep your python projects under your user folder or under C:\\Projects. let's say C:\\Projects and we want to name it MyPythonProject. In this case, do the following from your TAP installation folder:")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("tap python new-project --directory C:\\Projects\\MyPythonProject --project-name MyPythonProject")])])]),e._v(" "),t("p",[e._v("This should give you the following folder structure:")]),e._v(" "),t("ul",[t("li",[e._v("MyPythonProject "),t("em",[e._v("This is your Python module named MyPythonProject.")]),e._v(" "),t("ul",[t("li",[e._v("MyPythonProject/TestInstrument.py "),t("em",[e._v("This is an example of in instrument, it can be deleted.")])]),e._v(" "),t("li",[e._v("MyPythonProject/TestStepExample.py "),t("em",[e._v("This is also an example of a test step, it can be deleted.")])])])]),e._v(" "),t("li",[e._v("MyPythonProject.Api "),t("em",[e._v("This is a C# project, which is useful to manage the OpenTap packages you want to have .")]),e._v(" "),t("ul",[t("li",[e._v("MyPythonProject.Api/ExampleApi.cs  "),t("em",[e._v("This file contains an example of how to create and use C# interfaces with your Python code. .")])]),e._v(" "),t("li",[e._v("MyPythonProject.Api/MyPythonProject.Api.csproj  "),t("em",[e._v("This file contains the C# project definition, but also which packages gets installed when you build the project")])])])]),e._v(" "),t("li",[e._v("bin "),t("em",[e._v("(After build) This folder contains a full OpenTAP installation, with all the dependencies you defined in the csproj file above.")])]),e._v(" "),t("li",[e._v("MyPythonProject.sln * The C# solution file. Just ignore this.*")]),e._v(" "),t("li",[e._v("package.xml * This file contains definitions for your OpenTAP package. It can be used to create a .TapPackage file which can be distributed.*")]),e._v(" "),t("li",[e._v("Readme.md * Contains some information on how to get started. It can be modified at your discretion. *")])]),e._v(" "),t("p",[e._v("Once you have the folder structure set up, you can build the project using\n2. "),t("code",[e._v("dotnet build")]),e._v(".")]),e._v(" "),t("p",[e._v("This does not build your Python code, but it installs all the packages you need to a bin folder, which contains your debug build.")]),e._v(" "),t("p",[e._v("After completing this command you have a full OpenTAP installation just for hosting your plugin, but you'll probably also want to install other plugins. For example, you probably want a test plan editor installed to debug and run your code.")]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("edit: MyPythonProject.Api/MyPythonProject.Api.csproj")])]),e._v(" "),t("p",[e._v("Find these lines:")]),e._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[e._v("        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- Uncomment one of these lines to get a test plan editor installed when you build. --\x3e")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('\x3c!-- <OpenTapPackageReference Include="Editor"/> --\x3e')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('\x3c!-- <OpenTapPackageReference Include="EditorX"/> --\x3e')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('\x3c!-- <OpenTapPackageReference Include="TUI"/> --\x3e')]),e._v("\n")])])]),t("p",[e._v("Uncomment one or more of the lines containing OpenTapPackageReference to install something capable of editing a test plan.")]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("code",[e._v("dotnet build")]),e._v(" again.")])]),e._v(" "),t("p",[e._v('After this build, you should have the editor installed. If you uncommented "Editor", you can now run bin\\Editor.exe. To get an test plan editor running:')]),e._v(" "),t("p",[t("img",{attrs:{src:o(279),alt:""}})])])}),[],!1,null,null,null);t.default=a.exports}}]);