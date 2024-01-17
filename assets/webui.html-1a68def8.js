import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as c,c as i,a as n,b as s,d as e,w as t,e as o}from"./app-03692d83.js";const r="/PFLPDocs/assets/home-a6eecd2f.png",u="/PFLPDocs/assets/log-99c5b4d7.png",d="/PFLPDocs/assets/log_table-ab09e9ca.png",m="/PFLPDocs/assets/log_data-c36e37a8.png",k="/PFLPDocs/assets/map-0a25541e.png",v="/PFLPDocs/assets/map2-0a7d0e17.png",b="/PFLPDocs/assets/map3-88908a74.png",q="/PFLPDocs/assets/chat-1e0ba977.png",_="/PFLPDocs/assets/chat_settings-54c9923c.png",g={},h=o(`<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;WebUI&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//开关</span>
    <span class="token property">&quot;ModuleEnabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//绑定地址，0.0.0.0暴露公网</span>
    <span class="token property">&quot;Hostname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//绑定端口</span>
    <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">8089</span><span class="token punctuation">,</span>
    <span class="token comment">//使用SSL证书</span>
    <span class="token property">&quot;UseSSL&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;SSLCertificatePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;SSLCertificatePassword&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//外部访问地址，用于生成头像链接等，建议填上</span>
    <span class="token property">&quot;ExternalAddress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:8089&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//调试模式，控制台会有很多日志，通常不建议开启</span>
    <span class="token property">&quot;Debug&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">//网站标题</span>
    <span class="token property">&quot;HtmlTitle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;网页标题&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//网站图标，~开头表示插件配置目录</span>
    <span class="token property">&quot;HtmlFavicon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~\\\\favicon.png&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//功能</span>
    <span class="token property">&quot;Functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//日志查询功能</span>
        <span class="token property">&quot;LogQuery&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">//在线聊天功能</span>
        <span class="token property">&quot;OnlineChat&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">//在线聊天保留历史记录（重启后保留聊天）</span>
        <span class="token property">&quot;PreserveChatHistory&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">//在线地图功能(需要同时开启MapService）</span>
        <span class="token property">&quot;OnlineMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提示" tabindex="-1"><a class="header-anchor" href="#提示" aria-hidden="true">#</a> 提示</h2>`,3),y=o('<h2 id="图骗" tabindex="-1"><a class="header-anchor" href="#图骗" aria-hidden="true">#</a> 图骗</h2><ul><li><p>主页</p><img src="'+r+'" style="zoom:50%;"></li><li><p>日志查询</p><img src="'+u+'" style="zoom:50%;"><img src="'+d+'" style="zoom:50%;"><img src="'+m+'" style="zoom:50%;"></li><li><p>在线地图</p><img src="'+k+'" style="zoom:50%;"><img src="'+v+'" style="zoom:50%;"><img src="'+b+'" style="zoom:50%;"></li><li><p>在线聊天</p><img src="'+q+'" style="zoom:50%;"><img src="'+_+'" style="zoom:50%;"></li></ul><p>xdm 也可以把用上的图片发评论区</p>',3);function P(f,L){const a=l("RouterLink");return c(),i("div",null,[h,n("ul",null,[n("li",null,[s("OnlineMap 功能需要同时开启 "),e(a,{to:"/usage/map.html"},{default:t(()=>[s("MapService")]),_:1}),s("，方可在网页查看地图，否则地图不会时时刷新。")]),n("li",null,[s("LogQuery 功能需要同时开启 "),e(a,{to:"/usage/log.html"},{default:t(()=>[s("BehaviorLog")]),_:1})])]),y])}const S=p(g,[["render",P],["__file","webui.html.vue"]]);export{S as default};
