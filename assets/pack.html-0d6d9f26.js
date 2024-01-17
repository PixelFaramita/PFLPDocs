import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,e as o}from"./app-05b574d6.js";const i="/assets/mcaddon-5242ad7b.png",s={},c=o(`<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">//开启材质包加密</span>
<span class="token comment">//密钥为自动生成</span>
<span class="token comment">//目前貌似没自定义密钥的需求就不做自定义了</span>
<span class="token property">&quot;PackManager_EncryptResourcePacks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="手动加载" tabindex="-1"><a class="header-anchor" href="#手动加载" aria-hidden="true">#</a> 手动加载</h2><ul><li>解压到指定目录即可自动加载</li><li><code>plugins\\PXBANALuminousPolymerization\\pack\\customize\\resource_packs\\[xxx]\\manifest.json</code></li><li><code>plugins\\PXBANALuminousPolymerization\\pack\\customize\\behavior_packs\\[xxx]\\manifest.json</code><blockquote><p><em>文件夹直接放入即可加载，不会污染地图目录和服务端目录的行为包/资源包文件夹</em></p></blockquote></li></ul><h2 id="自动加载" tabindex="-1"><a class="header-anchor" href="#自动加载" aria-hidden="true">#</a> 自动加载</h2><ul><li><p>一键导入<code>.mcaddon</code>或<code>.mcpack</code></p><figure><img src="`+i+'" alt="放置目录" tabindex="0" loading="lazy"><figcaption>放置目录</figcaption></figure><blockquote><p><em>文件直接放入即可自动导入，不会污染地图目录和服务端目录的行为包/资源包文件夹</em></p></blockquote></li></ul><h2 id="快速加载" tabindex="-1"><a class="header-anchor" href="#快速加载" aria-hidden="true">#</a> 快速加载</h2><ul><li>快速加载 结构 和<code>.mcfunction</code>文件</li><li><code>plugins\\PXBANALuminousPolymerization\\pack\\functions</code></li><li><code>plugins\\PXBANALuminousPolymerization\\pack\\structures</code></li><li>支持<code>/reload</code>命令重载，不过受限于<code>/reload</code>命令的限制，只能重载开服时已存在的文件 <blockquote><p><em>文件直接放入即可自动导入，不会污染地图目录和服务端目录的行为包文件夹</em></p></blockquote></li></ul><h2 id="局限性" tabindex="-1"><a class="header-anchor" href="#局限性" aria-hidden="true">#</a> 局限性</h2><p>材质包热重载暂未实现，目前添加材质包后需要重启服务器方可应用</p>',10),l=[c];function d(t,r){return a(),n("div",null,l)}const m=e(s,[["render",d],["__file","pack.html.vue"]]);export{m as default};
