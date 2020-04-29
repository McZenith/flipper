(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{183:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(11),i=(r(0),r(233)),a={id:"crash-reporter-plugin",title:"Crash Reporter Setup",sidebar_label:"Crash Reporter"},c={id:"setup/crash-reporter-plugin",title:"Crash Reporter Setup",description:"You do not have to instantiate it in your app in order to use its basic functionality mentioned [here](../features/crash-reporter-plugin). You can also use crash reporter plugin to send the notifications for the exception which you suppress in your Android application. You could even use it to send the notifications when the [Litho Error Boundary](https://fblitho.com/docs/error-boundaries) is triggered. In order to send your custom notification you will have to follow the following steps.",source:"@site/../docs/setup/crash-reporter-plugin.mdx",permalink:"/docs/setup/crash-reporter-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/setup/crash-reporter-plugin.mdx",sidebar_label:"Crash Reporter",sidebar:"setup",previous:{title:"LeakCanary Setup",permalink:"/docs/setup/leak-canary-plugin"},next:{title:"Running Flipper with different ports",permalink:"/docs/custom-ports"}},p=[{value:"Android",id:"android",children:[]}],u={rightToc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You do not have to instantiate it in your app in order to use its basic functionality mentioned ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../features/crash-reporter-plugin"}),"here"),". You can also use crash reporter plugin to send the notifications for the exception which you suppress in your Android application. You could even use it to send the notifications when the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://fblitho.com/docs/error-boundaries"}),"Litho Error Boundary")," is triggered. In order to send your custom notification you will have to follow the following steps."),Object(i.b)("h2",{id:"android"},"Android"),Object(i.b)("p",null,"Instantiate and add the plugin in ",Object(i.b)("inlineCode",{parentName:"p"},"FlipperClient"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"import com.facebook.flipper.plugins.crashreporter.CrashReporterPlugin;\n\nclient.addPlugin(CrashReporterPlugin.getInstance());\n")),Object(i.b)("p",null,"Use the following API to trigger your custom crash notification."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"import com.facebook.flipper.plugins.crashreporter.CrashReporterPlugin;\nCrashReporterPlugin.getInstance().sendExceptionMessage(Thread.currentThread(), error);\n")))}s.isMDXComponent=!0},233:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},l=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(r),f=n,b=l["".concat(a,".").concat(f)]||l[f]||d[f]||i;return r?o.a.createElement(b,c({ref:t},u,{components:r})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);