(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(140);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND ಥ_ಥ"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},136:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),u=a.n(i),c=a(135),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(137),o=a.n(l);a.d(t,"PageRenderer",function(){return o.a});var d=a(29);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},137:function(e,t,a){var n;e.exports=(n=a(138))&&n.default||n},138:function(e,t,a){"use strict";a.r(t);a(30);var n=a(0),r=a.n(n),i=a(4),u=a.n(i),c=a(46),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=l},139:function(e){e.exports={data:{site:{siteMetadata:{title:"YuTing"}}}}},140:function(e,t,a){"use strict";var n=a(139),r=a(0),i=a.n(r),u=a(4),c=a.n(u),s=a(141),l=a.n(s),o=a(136),d=function(e){var t=e.siteTitle;return i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"header-container"},i.a.createElement(o.Link,{className:"header-title",to:"/"},t),i.a.createElement("nav",null,i.a.createElement(o.Link,{className:"header-link",activeClassName:"active",to:"/posts"},"文章列表"),i.a.createElement(o.Link,{className:"header-link",activeClassName:"active",to:"/tags"},"標籤索引"))))},m=function(e){var t=e.children;return i.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Yvonne's blog"}]},i.a.createElement("html",{lang:"zh-TW"})),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t))},data:n})};m.propTypes={children:c.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-404-js-06a2e250d27fa61aa813.js.map