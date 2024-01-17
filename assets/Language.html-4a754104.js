import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,d as s,w as t,e as u,b as e}from"./app-03692d83.js";const i={},r={class:"table-of-contents"},k=u(`<hr><h2 id="language-translate" tabindex="-1"><a class="header-anchor" href="#language-translate" aria-hidden="true">#</a> Language::Translate</h2><h3 id="翻译" tabindex="-1"><a class="header-anchor" href="#翻译" aria-hidden="true">#</a> 翻译</h3><table><tr><th>形参</th><th>类型</th></tr><tr><td>fromLanguage</td><td>string</td></tr><tr><td>toLanguage</td><td>string</td></tr><tr><td>text</td><td>string</td></tr><tr><td colspan="2">返回值类型：string;</td></tr></table><ul><li>JavaScript</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 翻译 返回值类型：string */</span>
<span class="token keyword">const</span> Language_Translate <span class="token operator">=</span> ll<span class="token punctuation">.</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Language::Translate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">Language_Translate</span><span class="token punctuation">(</span>fromLanguage<span class="token punctuation">,</span>toLanguage<span class="token punctuation">,</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C++</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 翻译 返回值类型：string</span>
<span class="token keyword">auto</span> Language_Translate <span class="token operator">=</span> RemoteCall<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">importAs</span><span class="token generic class-name"><span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span><span class="token function">string</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>string <span class="token keyword">const</span><span class="token operator">&amp;</span> fromLanguage<span class="token punctuation">,</span>std<span class="token double-colon punctuation">::</span>string <span class="token keyword">const</span><span class="token operator">&amp;</span> toLanguage<span class="token punctuation">,</span>std<span class="token double-colon punctuation">::</span>string <span class="token keyword">const</span><span class="token operator">&amp;</span> text<span class="token punctuation">)</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Language::Translate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">auto</span> result <span class="token operator">=</span> <span class="token function">Language_Translate</span><span class="token punctuation">(</span>fromLanguage<span class="token punctuation">,</span>toLanguage<span class="token punctuation">,</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C#</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 翻译 返回值类型：string</span>
<span class="token class-name"><span class="token keyword">var</span></span> Language_Translate <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ImportAs</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Func<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span><span class="token keyword">string</span><span class="token punctuation">,</span><span class="token keyword">string</span><span class="token punctuation">,</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Language::Translate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token function">Language_Translate</span><span class="token punctuation">(</span>fromLanguage<span class="token punctuation">,</span>toLanguage<span class="token punctuation">,</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Visual Basic .NET</li></ul><div class="language-vb line-numbers-mode" data-ext="vb"><pre class="language-vb"><code><span class="token comment">&#39; 翻译 返回值类型：string</span>
<span class="token keyword">Dim</span> Language_Translate <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token punctuation">(</span><span class="token keyword">Of</span> Func<span class="token punctuation">(</span><span class="token keyword">Of</span> <span class="token keyword">String</span><span class="token punctuation">,</span><span class="token keyword">String</span><span class="token punctuation">,</span><span class="token keyword">String</span><span class="token punctuation">,</span><span class="token keyword">String</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Language::Translate&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">Dim</span> result <span class="token operator">=</span> Language_Translate<span class="token punctuation">(</span>fromLanguage<span class="token punctuation">,</span>toLanguage<span class="token punctuation">,</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>F#</li></ul><div class="language-fsharp line-numbers-mode" data-ext="fs"><pre class="language-fsharp"><code><span class="token comment">// 翻译 返回值类型：string</span>
<span class="token keyword">let</span> Language_Translate <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token operator">&lt;</span>Func<span class="token operator">&lt;</span>string<span class="token punctuation">,</span>string<span class="token punctuation">,</span>string<span class="token punctuation">,</span>string<span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Language::Translate&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span>fromLanguage<span class="token punctuation">,</span>toLanguage<span class="token punctuation">,</span>text<span class="token punctuation">)</span>
	<span class="token operator">|&gt;</span>Language_Translate<span class="token punctuation">.</span>Invoke
	<span class="token operator">|&gt;</span>ignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function d(g,m){const a=o("router-link");return c(),l("div",null,[n("nav",r,[n("ul",null,[n("li",null,[s(a,{to:"#language-translate"},{default:t(()=>[e("Language::Translate")]),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#翻译"},{default:t(()=>[e("翻译")]),_:1})])])])])]),k])}const L=p(i,[["render",d],["__file","Language.html.vue"]]);export{L as default};
