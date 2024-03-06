import{_ as n,n as i,p as a,J as l,E as s,a7 as t,m as p,P as o}from"./chunks/framework.CDtGMzgX.js";const T=JSON.parse('{"title":"徽章与文字高亮","description":"","frontmatter":{},"headers":[],"relativePath":"Inbox/vitepress/pages/text-highlighting.md","filePath":"Inbox/vitepress/pages/text-highlighting.md","lastUpdated":1709689572000}'),r={name:"Inbox/vitepress/pages/text-highlighting.md"},c=t('<h1 id="徽章与文字高亮" tabindex="-1">徽章与文字高亮 <a class="header-anchor" href="#徽章与文字高亮" aria-label="Permalink to &quot;徽章与文字高亮&quot;">​</a></h1><p><span class="fgray">在 vitepress 中对文字进行高亮。</span></p><h2 id="徽章" tabindex="-1">徽章 <a class="header-anchor" href="#徽章" aria-label="Permalink to &quot;徽章&quot;">​</a></h2>',3),g=a("li",null,[l("使用 "),a("ul",null,[a("li",null,[l("语法: "),a("code",null,'<Badge type="字符串类型" text="徽章内容"/>')]),a("li",null,"在主题的 css 文件中自定义 type 值的样式")])],-1),d=t('<h2 id="颜色高亮" tabindex="-1">颜色高亮 <a class="header-anchor" href="#颜色高亮" aria-label="Permalink to &quot;颜色高亮&quot;">​</a></h2><blockquote><p>vitepress 中使用 html font 标签要用 <code>v-pre</code> 包裹，不然构建时会报错</p><p>语法：<code>&lt;span v-pre&gt;&lt;font style=&quot;color: rgb(222, 120, 2);padding: 5px 5px&quot;&gt;文字&lt;/font&gt;&lt;/span&gt;</code></p></blockquote><ul><li><span class="forange">我的字体颜色变成了橙色</span></li><li><span class="fred">我的字体颜色变成了橙色</span></li><li><span class="fgray">我的字体颜色变成了橙色</span></li><li><span class="fgreen">我的字体颜色变成了橙色</span></li><li><span class="fblue">我的字体颜色变成了橙色</span></li><li><span class="fpurple">我的字体颜色变成了橙色</span></li></ul><h2 id="带有背景的颜色高亮" tabindex="-1">带有背景的颜色高亮 <a class="header-anchor" href="#带有背景的颜色高亮" aria-label="Permalink to &quot;带有背景的颜色高亮&quot;">​</a></h2><ul><li><span class="bglightpink">仔细观察我的字体变成了什么颜色</span></li><li><span class="bgorange">仔细观察我的字体变成了什么颜色</span></li><li><span class="bgred">仔细观察我的字体变成了什么颜色</span></li><li><span class="bglightgold">仔细观察我的字体变成了什么颜色</span></li><li><span class="bglightgreen">仔细观察我的字体变成了什么颜色</span></li><li><span class="bglightred">仔细观察我的字体变成了什么颜色</span></li><li><span class="bglightblue">仔细观察我的字体变成了什么颜色</span></li><li><span class="bggemgreen">仔细观察我的字体变成了什么颜色</span></li><li><span class="bgpink">仔细观察我的字体变成了什么颜色</span></li><li><span class="bgnavygreen">仔细观察我的字体变成了什么颜色</span></li><li><span class="bggray">仔细观察我的字体变成了什么颜色</span></li></ul>',5);function h(_,u,b,f,x,m){const e=o("Badge");return p(),i("div",null,[c,a("ul",null,[g,a("li",null,[l("展示 "),a("ul",null,[a("li",null,[l("徽章测试,徽章居上 "),s(e,{type:"tip",text:"important",vertical:"top"})]),a("li",null,[l("徽章测试,徽章居中 "),s(e,{type:"warning",text:"beta",vertical:"middle"})]),a("li",null,[l("徽章测试,徽章居下 "),s(e,{type:"danger",text:"实验性质",vertical:"bottom"})]),a("li",null,[l("徽章测试,徽章居上 "),s(e,{type:"note",text:"新的徽章"})])])])]),d])}const q=n(r,[["render",h]]);export{T as __pageData,q as default};
