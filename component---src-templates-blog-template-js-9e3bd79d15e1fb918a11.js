(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u}),n.d(t,"pageQuery",function(){return c});var a=n(0),r=n.n(a),i=n(139);function u(e){var t=e.data.markdownRemark,n=t.frontmatter,a=t.html;return r.a.createElement(i.a,null,r.a.createElement("div",{className:"main-content blog-post"},r.a.createElement("h1",null,n.title),r.a.createElement("h2",null,n.date),r.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:a}})))}var c="1579142440"},135:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),u=n.n(i),c=n(134),o=n.n(c);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(136),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(29);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},136:function(e,t,n){var a;e.exports=(a=n(137))&&a.default||a},137:function(e,t,n){"use strict";n.r(t);n(30);var a=n(0),r=n.n(a),i=n(4),u=n.n(i),c=n(46),o=n(2),l=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=l},138:function(e){e.exports={data:{site:{siteMetadata:{title:"YuTing"}}}}},139:function(e,t,n){"use strict";var a=n(138),r=n(0),i=n.n(r),u=n(4),c=n.n(u),o=n(140),l=n.n(o),s=n(135),d=function(e){var t=e.siteTitle;return i.a.createElement("header",{className:"header"},i.a.createElement("h1",null,i.a.createElement(s.Link,{to:"/"},t)),i.a.createElement("nav",null,i.a.createElement(s.Link,{to:"/posts"},"文章列表"),i.a.createElement(s.Link,{to:"/tags"},"標籤索引")))},m=function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Yvonne's blog"}]},i.a.createElement("html",{lang:"zh-TW"})),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t))},data:a})};m.propTypes={children:c.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-9e3bd79d15e1fb918a11.js.map