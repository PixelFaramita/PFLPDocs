import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c,a as n,d as a,w as e,e as i,b as t}from"./app-03692d83.js";const u={},r={class:"table-of-contents"},d=i(`<hr><h2 id="general-setconfig" tabindex="-1"><a class="header-anchor" href="#general-setconfig" aria-hidden="true">#</a> General::SetConfig</h2><h3 id="设置全局配置文件-要求json字符串" tabindex="-1"><a class="header-anchor" href="#设置全局配置文件-要求json字符串" aria-hidden="true">#</a> 设置全局配置文件（要求JSON字符串）</h3><table><tr><th>形参</th><th>类型</th></tr><tr><td>jsonStr</td><td>string</td></tr><tr><td colspan="2">返回值类型：bool;</td></tr></table><ul><li>JavaScript</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 设置全局配置文件（要求JSON字符串） 返回值类型：bool */</span>
<span class="token keyword">const</span> General_SetConfig <span class="token operator">=</span> ll<span class="token punctuation">.</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;General::SetConfig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">General_SetConfig</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C++</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 设置全局配置文件（要求JSON字符串） 返回值类型：bool</span>
<span class="token keyword">auto</span> General_SetConfig <span class="token operator">=</span> RemoteCall<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">importAs</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">bool</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>string <span class="token keyword">const</span><span class="token operator">&amp;</span> jsonStr<span class="token punctuation">)</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;General::SetConfig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">auto</span> result <span class="token operator">=</span> <span class="token function">General_SetConfig</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C#</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 设置全局配置文件（要求JSON字符串） 返回值类型：bool</span>
<span class="token class-name"><span class="token keyword">var</span></span> General_SetConfig <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ImportAs</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Func<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span><span class="token keyword">bool</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;General::SetConfig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token function">General_SetConfig</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Visual Basic .NET</li></ul><div class="language-vb line-numbers-mode" data-ext="vb"><pre class="language-vb"><code><span class="token comment">&#39; 设置全局配置文件（要求JSON字符串） 返回值类型：bool</span>
<span class="token keyword">Dim</span> General_SetConfig <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token punctuation">(</span><span class="token keyword">Of</span> Func<span class="token punctuation">(</span><span class="token keyword">Of</span> <span class="token keyword">String</span><span class="token punctuation">,</span><span class="token keyword">Boolean</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;General::SetConfig&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">Dim</span> result <span class="token operator">=</span> General_SetConfig<span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>F#</li></ul><div class="language-fsharp line-numbers-mode" data-ext="fs"><pre class="language-fsharp"><code><span class="token comment">// 设置全局配置文件（要求JSON字符串） 返回值类型：bool</span>
<span class="token keyword">let</span> General_SetConfig <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token operator">&lt;</span>Func<span class="token operator">&lt;</span>string<span class="token punctuation">,</span>bool<span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;General::SetConfig&quot;</span><span class="token punctuation">)</span>
jsonStr
	<span class="token operator">|&gt;</span>General_SetConfig<span class="token punctuation">.</span>Invoke
	<span class="token operator">|&gt;</span>ignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="general-getconfig" tabindex="-1"><a class="header-anchor" href="#general-getconfig" aria-hidden="true">#</a> General::GetConfig</h2><h3 id="获取全局配置文件-json字符串" tabindex="-1"><a class="header-anchor" href="#获取全局配置文件-json字符串" aria-hidden="true">#</a> 获取全局配置文件（JSON字符串）</h3><table><tr><th>无参数;</th></tr><tr><td colspan="2">返回值类型：string;</td></tr></table><ul><li>JavaScript</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 获取全局配置文件（JSON字符串） 返回值类型：string */</span>
<span class="token keyword">const</span> General_GetConfig <span class="token operator">=</span> ll<span class="token punctuation">.</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;General::GetConfig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">General_GetConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C++</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 获取全局配置文件（JSON字符串） 返回值类型：string</span>
<span class="token keyword">auto</span> General_GetConfig <span class="token operator">=</span> RemoteCall<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">importAs</span><span class="token generic class-name"><span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;General::GetConfig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">auto</span> result <span class="token operator">=</span> <span class="token function">General_GetConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C#</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 获取全局配置文件（JSON字符串） 返回值类型：string</span>
<span class="token class-name"><span class="token keyword">var</span></span> General_GetConfig <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ImportAs</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Func<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;General::GetConfig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token function">General_GetConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Visual Basic .NET</li></ul><div class="language-vb line-numbers-mode" data-ext="vb"><pre class="language-vb"><code><span class="token comment">&#39; 获取全局配置文件（JSON字符串） 返回值类型：string</span>
<span class="token keyword">Dim</span> General_GetConfig <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token punctuation">(</span><span class="token keyword">Of</span> Func<span class="token punctuation">(</span><span class="token keyword">Of</span> <span class="token keyword">String</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;General::GetConfig&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">Dim</span> result <span class="token operator">=</span> General_GetConfig<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>F#</li></ul><div class="language-fsharp line-numbers-mode" data-ext="fs"><pre class="language-fsharp"><code><span class="token comment">// 获取全局配置文件（JSON字符串） 返回值类型：string</span>
<span class="token keyword">let</span> General_GetConfig <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token operator">&lt;</span>Func<span class="token operator">&lt;</span>string<span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;General::GetConfig&quot;</span><span class="token punctuation">)</span>
<span class="token function">General_GetConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token operator">|&gt;</span>ignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="general-reload" tabindex="-1"><a class="header-anchor" href="#general-reload" aria-hidden="true">#</a> General::Reload</h2><h3 id="重新加载所有功能的配置文件" tabindex="-1"><a class="header-anchor" href="#重新加载所有功能的配置文件" aria-hidden="true">#</a> 重新加载所有功能的配置文件</h3><table><tr><th>无参数;</th></tr><tr><td colspan="2">无返回值;</td></tr></table><ul><li>JavaScript</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 重新加载所有功能的配置文件 */</span>
<span class="token keyword">const</span> General_Reload <span class="token operator">=</span> ll<span class="token punctuation">.</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;General::Reload&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">General_Reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C++</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 重新加载所有功能的配置文件</span>
<span class="token keyword">auto</span> General_Reload <span class="token operator">=</span> RemoteCall<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">importAs</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;General::Reload&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">General_Reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C#</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 重新加载所有功能的配置文件</span>
<span class="token class-name"><span class="token keyword">var</span></span> General_Reload <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ImportAs</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Action<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;General::Reload&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">General_Reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Visual Basic .NET</li></ul><div class="language-vb line-numbers-mode" data-ext="vb"><pre class="language-vb"><code><span class="token comment">&#39; 重新加载所有功能的配置文件</span>
<span class="token keyword">Dim</span> General_Reload <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token punctuation">(</span><span class="token keyword">Of</span> Action<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;General::Reload&quot;</span><span class="token punctuation">)</span>
General_Reload<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>F#</li></ul><div class="language-fsharp line-numbers-mode" data-ext="fs"><pre class="language-fsharp"><code><span class="token comment">// 重新加载所有功能的配置文件</span>
<span class="token keyword">let</span> General_Reload <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token operator">&lt;</span>Action<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;General::Reload&quot;</span><span class="token punctuation">)</span>
<span class="token function">General_Reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42);function k(g,m){const s=p("router-link");return l(),c("div",null,[n("nav",r,[n("ul",null,[n("li",null,[a(s,{to:"#general-setconfig"},{default:e(()=>[t("General::SetConfig")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#设置全局配置文件-要求json字符串"},{default:e(()=>[t("设置全局配置文件（要求JSON字符串）")]),_:1})])])]),n("li",null,[a(s,{to:"#general-getconfig"},{default:e(()=>[t("General::GetConfig")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#获取全局配置文件-json字符串"},{default:e(()=>[t("获取全局配置文件（JSON字符串）")]),_:1})])])]),n("li",null,[a(s,{to:"#general-reload"},{default:e(()=>[t("General::Reload")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#重新加载所有功能的配置文件"},{default:e(()=>[t("重新加载所有功能的配置文件")]),_:1})])])])])]),d])}const f=o(u,[["render",k],["__file","General.html.vue"]]);export{f as default};