(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{134:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(136),c=function(e){var t=e.post;return r.a.createElement("li",{className:"post-item"},r.a.createElement("h1",{className:"post-item-title"},r.a.createElement(i.Link,{to:t.frontmatter.path,className:"post-item-link"},t.frontmatter.title)),r.a.createElement("div",{class:"post-item-date"},r.a.createElement("b",null,t.frontmatter.date)),r.a.createElement("p",{className:"post-item-content"},t.excerpt))},l=a(140);a(155);a.d(t,"pageQuery",function(){return s});t.default=function(e){var t=e.data.allMarkdownRemark.edges.map(function(e){return r.a.createElement(c,{key:e.node.id,post:e.node})});return r.a.createElement(l.a,null,r.a.createElement("div",{className:"main-content"},r.a.createElement("ul",{className:"post-list"},t)))};var s="3473231669"},136:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(135),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var o=a(137),u=a.n(o);a.d(t,"PageRenderer",function(){return u.a});var d=a(29);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},137:function(e,t,a){var n;e.exports=(n=a(138))&&n.default||n},138:function(e,t,a){"use strict";a.r(t);a(30);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(46),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},139:function(e){e.exports={data:{site:{siteMetadata:{title:"YuTing"}}}}},140:function(e,t,a){"use strict";var n=a(139),r=a(0),i=a.n(r),c=a(4),l=a.n(c),s=a(141),o=a.n(s),u=a(136),d=function(e){var t=e.siteTitle;return i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"header-container"},i.a.createElement(u.Link,{className:"header-title",to:"/"},t),i.a.createElement("nav",null,i.a.createElement(u.Link,{className:"header-link",activeClassName:"active",to:"/posts"},"文章列表"),i.a.createElement(u.Link,{className:"header-link",activeClassName:"active",to:"/tags"},"標籤索引"))))},m=function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Yvonne's blog"}]},i.a.createElement("html",{lang:"zh-TW"})),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t))},data:n})};m.propTypes={children:l.a.node.isRequired};t.a=m},155:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-be5a18d003b1c26162f3.js.map