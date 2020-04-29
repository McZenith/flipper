(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(1),a=n(11),r=(n(0),n(233)),o={id:"react-native",title:"Building a React Native Plugin"},c={id:"tutorial/react-native",title:"Building a React Native Plugin",description:'<div class="warning">',source:"@site/../docs/tutorial/react-native.mdx",permalink:"/docs/tutorial/react-native",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/tutorial/react-native.mdx",sidebar:"extending",previous:{title:"Building an Android Plugin",permalink:"/docs/tutorial/android"},next:{title:"Building a Desktop Plugin",permalink:"/docs/tutorial/js-setup"}},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{class:"warning"},Object(r.b)("p",null,"This tutorial requires React Native 0.62 or higher.")),Object(r.b)("p",null,"Once you have connected Flipper to a React Native application,\nwriting your own Flipper plugin can be done without reaching into the native world."),Object(r.b)("p",null,"To expose Flipper to the JavaScript world, the React Native Native Module ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-flipper")," needs to be installed in the hosting application by running ",Object(r.b)("inlineCode",{parentName:"p"},"yarn add react-native-flipper")," and ",Object(r.b)("inlineCode",{parentName:"p"},"cd ios && pod install"),". If you are creating develop a plugin that is distributed as NPM package, make sure to add this to the installation instruction of your package as well!"),Object(r.b)("p",null,"Registering a new plugin is done by importing ",Object(r.b)("inlineCode",{parentName:"p"},"addPlugin")," from ",Object(r.b)("inlineCode",{parentName:"p"},'"react-native-flipper"')," and providing it an object that at least implements the method  ",Object(r.b)("inlineCode",{parentName:"p"},"getId")," (the plugin id that should be used in the desktop plugin as well to make the connection) and two event handlers for the ",Object(r.b)("inlineCode",{parentName:"p"},"onConnect")," and ",Object(r.b)("inlineCode",{parentName:"p"},"onDisconnect")," events."),Object(r.b)("p",null,"These ",Object(r.b)("inlineCode",{parentName:"p"},"onConnect")," and ",Object(r.b)("inlineCode",{parentName:"p"},"onDisconnect")," events are triggered every time the plugin becomes (in)active in the Flipper desktop application.\nIf the plugin is a ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"../extending/create-plugin#background-plugins"}),"background plugin"),", these events are triggered typically only once (they might be triggered never, if the Desktop user didn't enable the plugin, or multiple times if they enabled or disabled the plugin a few times)."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"onConnect")," callback receive a ",Object(r.b)("inlineCode",{parentName:"p"},"connection")," which can be used to communicate with the backend:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"import {addPlugin} from \"react-native-flipper\"\n\naddPlugin({\n  getId() {\n    return 'ReactNativeExamplePlugin';\n  },\n  onConnect(connection) {\n    mammmals.forEach(({ title, pictureUrl }, index) => {\n      connection.send('newRow', {\n          id: index,\n          title,\n          url: pictureUrl\n      })\n    })\n  },\n  onDisconnect() {\n  }\n})\n")),Object(r.b)("p",null,"You might want to store the connection somewhere to be able to send more events as long as ",Object(r.b)("inlineCode",{parentName:"p"},"onDisconnect")," event hasn't been fired."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"connection")," object can also be used to listen to messages coming from the Desktop plugin. See ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"../extending/create-plugin"}),"Client Plugin API")," for details."),Object(r.b)("p",null,"An example plugin to play a little Tic-Tac-Toe between the Flipper Desktop and a React Native app can be found inside this repository as well (run ",Object(r.b)("inlineCode",{parentName:"p"},"yarn && yarn android")," in ",Object(r.b)("inlineCode",{parentName:"p"},"react-native/ReactNativeFlipperExample")," to start the test project):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The React Native JavaScript based plugin implementation: ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/facebook/flipper/tree/master/react-native/ReactNativeFlipperExample/FlipperTicTacToe.js"}),"FlipperTicTacToe.js")),Object(r.b)("li",{parentName:"ul"},"The Flipper Desktop plugin implementation: ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/facebook/flipper/blob/master/desktop/plugins/rn-tic-tac-toe/index.tsx"}),"rn-tic-tac-toe/index.tsx"))))}u.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=i,m=b["".concat(o,".").concat(d)]||b[d]||s[d]||r;return n?a.a.createElement(m,c({ref:t},p,{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);