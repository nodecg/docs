"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4013],{9058:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(3366),n=a(7294),l=a(6010),i=a(5096),s=a(7524),c=a(9960),m=a(5999),o={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function u(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(o.sidebar,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(o.sidebarItemTitle,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(o.sidebarItemList,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:o.sidebarItem},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive},e.title))})))))}var g=a(3102);function d(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return n.createElement(g.Zo,{component:d,props:e})}function E(e){var t=e.sidebar,a=(0,s.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(b,{sidebar:t}):n.createElement(u,{sidebar:t}):null}var p=["sidebar","toc","children"];function v(e){var t=e.sidebar,a=e.toc,s=e.children,c=(0,r.Z)(e,p),m=t&&t.items.length>0;return n.createElement(i.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(E,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},1223:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var r=a(7294),n=a(6010),l=a(5999),i=function(){return(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};var s=a(1944),c=a(5281),m=a(9058),o=a(3008),u={tag:"tag_Nnez"};function g(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:u.tag},r.createElement(o.Z,e))}))),r.createElement("hr",null))}function d(e){var t=function(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],r=t[0];return a.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}(e.tags);return r.createElement("section",{className:"margin-vert--lg"},t.map((function(e){return r.createElement(g,{key:e.letter,letterEntry:e})})))}var b=a(197);function E(e){var t=e.tags,a=e.sidebar,l=i();return r.createElement(s.FG,{className:(0,n.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},r.createElement(s.d,{title:l}),r.createElement(b.Z,{tag:"blog_tags_list"}),r.createElement(m.Z,{sidebar:a},r.createElement("h1",null,l),r.createElement(d,{tags:t})))}},3008:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(6010),l=a(9960),i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){var t=e.permalink,a=e.label,s=e.count;return r.createElement(l.Z,{href:t,className:(0,n.Z)(i.tag,s?i.tagWithCount:i.tagRegular)},a,s&&r.createElement("span",null,s))}}}]);