import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-05b574d6.js";const o={},t=e(`<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Helper&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//总开关</span>
    <span class="token property">&quot;ModuleEnabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//强制下载材质包（且允许玩家使用材质包）</span>
    <span class="token property">&quot;ForceDownloadWithoutCovering&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//开启假种子功能，（客户端区块生成的选项可选不关闭，具体自行测试）</span>
    <span class="token property">&quot;EnableFakeSeed&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//种子</span>
    <span class="token property">&quot;FakeSeed&quot;</span><span class="token operator">:</span> <span class="token number">114514</span><span class="token punctuation">,</span>
    <span class="token comment">//开启修改存档显示名称的功能</span>
    <span class="token property">&quot;EnableLevelName&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//存档名称（通常显示在暂停界面）</span>
    <span class="token property">&quot;LevelName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Bedrock Level&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//开启修改红石速度的功能（单位：tick/s）</span>
    <span class="token property">&quot;EditRedstoneTPS&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//主世界红石速度（TPS是单位）</span>
    <span class="token property">&quot;OverworldRedstoneTPS&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token comment">//地狱</span>
    <span class="token property">&quot;NetherRedstoneTPS&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token comment">//末地</span>
    <span class="token property">&quot;TheEndRedstoneTPS&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提示" tabindex="-1"><a class="header-anchor" href="#提示" aria-hidden="true">#</a> 提示</h2><ul><li>开启修改客户端种子后无需手动关闭<code>client-chunk-generation</code>选项，不过关闭后玩家可视的新区块更多</li></ul>`,4),p=[t];function l(c,r){return s(),a("div",null,p)}const d=n(o,[["render",l],["__file","helper.html.vue"]]);export{d as default};
