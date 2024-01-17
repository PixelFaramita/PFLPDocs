import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-03692d83.js";const o={},t=e(`<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Backup&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//总开关</span>
    <span class="token property">&quot;ModuleEnabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//备份到的目录</span>
    <span class="token property">&quot;TargetFolder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backup/%time:yyyy-MM-dd-HH-mm-ss%&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//如果目标目录存在，是否删除</span>
    <span class="token property">&quot;DeleteTargetFolderIfExists&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//复制所有需要备份的文件夹</span>
    <span class="token property">&quot;CopyFolder&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">//创建 zip 压缩包</span>
    <span class="token property">&quot;CreateZipFile&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//压缩包文件名</span>
    <span class="token property">&quot;ZipFileName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backup-%time:yyyy-MM-dd-HH-mm-ss%&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//创建 .mcworld 压缩包，方便直接导入Minecraft</span>
    <span class="token property">&quot;CreateMcWorldFile&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//存档文件名称</span>
    <span class="token property">&quot;McWorldFileName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backup-%time:yyyy-MM-dd-HH-mm-ss%&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//是否备份插件数据文件</span>
    <span class="token property">&quot;IncludePluginData&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//是否备份插件配置文件</span>
    <span class="token property">&quot;IncludePluginConfig&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//额外需要备份的文件</span>
    <span class="token comment">//可使用通配符</span>
    <span class="token property">&quot;Extra&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;plugins/LiteLoader/*.json&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//开启自动备份</span>
    <span class="token property">&quot;AutoBackup&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//自动备份的时间间隔（使用Corntab表达式）</span>
    <span class="token property">&quot;BackupCrontab&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*/1 * * * *&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><ul><li><code>/backup</code><ul><li>可在控制台或者游戏内管理员使用</li></ul></li></ul>`,4),p=[t];function l(c,i){return s(),a("div",null,p)}const d=n(o,[["render",l],["__file","backup.html.vue"]]);export{d as default};
