(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(11),i=(n(0),n(233)),o=n(235),s={id:"js-custom",title:"Building Custom UI",sidebar_label:"Custom UI"},l={id:"tutorial/js-custom",title:"Building Custom UI",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/../docs/tutorial/js-custom.mdx",permalink:"/docs/tutorial/js-custom",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/tutorial/js-custom.mdx",sidebar_label:"Custom UI",sidebar:"extending",previous:{title:"Showing a table",permalink:"/docs/tutorial/js-table"},next:{title:"Publishing your Plugin",permalink:"/docs/tutorial/js-publishing"}},c=[{value:"Replacing the table",id:"replacing-the-table",children:[]},{value:"Adding data handling",id:"adding-data-handling",children:[]},{value:"Rendering the data",id:"rendering-the-data",children:[]},{value:"Adding the sidebar",id:"adding-the-sidebar",children:[]},{value:"Creating a custom component",id:"creating-a-custom-component",children:[]}],d={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Displaying your data in a table might work for many use-cases. However, depending on your plugin and data it might make sense to customize the way your data is visualized. Flipper uses React to render the plugins and provides a variety of ready-to-use UI components that can be used to build custom plugin UIs."),Object(i.b)("h2",{id:"replacing-the-table"},"Replacing the table"),Object(i.b)("p",null,"For our sea mammals app, we might not only want to see them listed as image URLs in a table but render the actual images in nice little cards. When selecting one of the cards we still want to display all details in the sidebar."),Object(i.b)("img",{alt:"Custom cards UI for our sea mammals plugin",src:Object(o.a)("img/js-custom.png")}),Object(i.b)("p",null,"Currently, the default export in our ",Object(i.b)("inlineCode",{parentName:"p"},"index.tsx")," is from ",Object(i.b)("inlineCode",{parentName:"p"},"createTablePlugin"),". Now we are going to replace this with a custom React component extending ",Object(i.b)("inlineCode",{parentName:"p"},"FlipperPlugin"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export default class SeaMammals extends FlipperPlugin<State, any, PersistedState> {\n  static Container = styled(FlexRow)({\n    backgroundColor: colors.macOSTitleBarBackgroundBlur,\n    flexWrap: 'wrap',\n    alignItems: 'flex-start',\n    alignContent: 'flex-start',\n    flexGrow: 1,\n    overflow: 'scroll',\n  });\n\n  render() {\n    return (\n      <SeaMammals.Container>\n        Hello custom plugin!\n      </SeaMammals.Container>\n    );\n  }\n}\n")),Object(i.b)("p",null,"You can see how we are styling our components using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://emotion.sh/"}),"emotion"),". To learn more about this, make sure to read our guide on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../extending/styling-components"}),"styling components"),"."),Object(i.b)("h2",{id:"adding-data-handling"},"Adding data handling"),Object(i.b)("p",null,"The plugin is quite useless when we don't display any actual data. We are adding two static properties to our plugin class for data handling. ",Object(i.b)("inlineCode",{parentName:"p"},"defaultPersistedState")," defines the default state before we received any data. In ",Object(i.b)("inlineCode",{parentName:"p"},"persistedStateReducer")," we define how new data is merged with the existing data."),Object(i.b)("p",null,"For the default state we define an empty object because we don't have any data, yet. When receiving data, we simply add it to the existing object, using the ID as a key. Learn more about ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../extending/js-plugin-api#persistedstate"}),"persistedState")," in our guide."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"static defaultPersistedState: PersistedState = {\n  data: [],\n};\n\nstatic persistedStateReducer<PersistedState>(\n  persistedState: PersistedState,\n  method: string,\n  payload: Row,\n) {\n  if (method === 'newRow') {\n    return return Object.assign({}, persistedState, {,\n      [payload.id]: payload,\n    });\n  }\n  return persistedState;\n};\n")),Object(i.b)("p",null,"Note: The method name ",Object(i.b)("inlineCode",{parentName:"p"},"newRow")," is still the same that we defined on the native side."),Object(i.b)("h2",{id:"rendering-the-data"},"Rendering the data"),Object(i.b)("p",null,"Now we can access the data from ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.persistedState.data")," and render it. So let's update our ",Object(i.b)("inlineCode",{parentName:"p"},"render")," method using a custom ",Object(i.b)("inlineCode",{parentName:"p"},"Card")," component, which we will implement in a bit."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"render() {\n  const {selectedIndex} = this.state;\n  const {persistedState} = this.props;\n\n  return (\n    <SeaMammals.Container>\n      {Object.entries(persistedState).map(([id, row]) => <Card\n        {...row}\n        onSelect={() => this.setState({selectedID: id})}\n        selected={id === selectedID}\n        key={id}\n      />)}\n    </SeaMammals.Container>\n  );\n}\n")),Object(i.b)("h2",{id:"adding-the-sidebar"},"Adding the sidebar"),Object(i.b)("p",null,"When clicking on a Card, we want to show all details in the sidebar as we did with the table before. We are using React's state to store the selected ID in our data. Flipper provides a ",Object(i.b)("inlineCode",{parentName:"p"},"DetailSidebar")," component which we can use to add information to the sidebar. It doesn't matter where this component is placed as long as it is returned somewhere in our ",Object(i.b)("inlineCode",{parentName:"p"},"render")," method. The ",Object(i.b)("inlineCode",{parentName:"p"},"renderSidebar")," method returning the sidebar's content is still the same we used with ",Object(i.b)("inlineCode",{parentName:"p"},"createTablePlugin"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<DetailSidebar>\n  {typeof selectedID === 'string' && renderSidebar(persistedState[selectedID])}\n</DetailSidebar>\n")),Object(i.b)("h2",{id:"creating-a-custom-component"},"Creating a custom component"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Card")," component is responsible for rendering the actual image and title. This is not very specific to Flipper, but is using plain React. Note the usage of ",Object(i.b)("inlineCode",{parentName:"p"},"styled")," to adjust the style of existing UI components and ",Object(i.b)("inlineCode",{parentName:"p"},"colors")," which provides a library of colors used throughout the app."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Card extends React.Component<{\n  onSelect: () => void,\n  selected: boolean,\n} & Row> {\n  static Container = styled(FlexColumn)(props => ({\n    margin: 10,\n    borderRadius: 5,\n    border: '2px solid black',\n    backgroundColor: colors.white,\n    borderColor: props.selected\n      ? colors.macOSTitleBarIconSelected\n      : colors.white,\n    padding: 0,\n    width: 150,\n    overflow: 'hidden',\n    boxShadow: '1px 1px 4px rgba(0,0,0,0.1)',\n    cursor: 'pointer',\n  }));\n\n  static Image = styled.div({\n    backgroundSize: 'cover',\n    width: '100%',\n    paddingTop: '100%',\n  });\n\n  static Title = styled(Text)({\n    fontSize: 14,\n    fontWeight: 'bold',\n    padding: '10px 5px',\n    overflow: 'hidden',\n    textOverflow: 'ellipsis',\n    whiteSpace: 'nowrap',\n  });\n\n  render() {\n    return (\n      <Card.Container\n        onClick={this.props.onSelect}\n        selected={this.props.selected}>\n        <Card.Image style={{backgroundImage: `url(${this.props.url || ''})`}} />\n        <Card.Title>{this.props.title}</Card.Title>\n      </Card.Container>\n    );\n  }\n}\n")))}p.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return n?r.a.createElement(m,s({ref:t},c,{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},234:function(e,t,n){"use strict";var a=n(0),r=n(56);t.a=function(){return Object(a.useContext)(r.a)}},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(236);var a=n(234);function r(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},236:function(e,t,n){"use strict";var a=n(5),r=n(15),i=n(237),o="".startsWith;a(a.P+a.F*n(238)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return o?o.call(t,a,n):t.slice(n,n+a.length)===a}})},237:function(e,t,n){var a=n(80),r=n(22);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},238:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);