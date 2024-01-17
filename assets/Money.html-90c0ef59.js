import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as l,a as n,d as a,w as t,e as u,b as e}from"./app-03692d83.js";const i={},r={class:"table-of-contents"},d=u(`<hr><h2 id="money-get" tabindex="-1"><a class="header-anchor" href="#money-get" aria-hidden="true">#</a> Money::Get</h2><h3 id="获取玩家-指定玩家xuid-金钱" tabindex="-1"><a class="header-anchor" href="#获取玩家-指定玩家xuid-金钱" aria-hidden="true">#</a> 获取玩家(指定玩家Xuid)金钱</h3><table><tr><th>形参</th><th>类型</th></tr><tr><td>playerXuid</td><td>string</td></tr><tr><td colspan="2">返回值类型：long;</td></tr></table><ul><li>JavaScript</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 获取玩家(指定玩家Xuid)金钱 返回值类型：long */</span>
<span class="token keyword">const</span> Money_Get <span class="token operator">=</span> ll<span class="token punctuation">.</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Money::Get&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">Money_Get</span><span class="token punctuation">(</span>playerXuid<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C++</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 获取玩家(指定玩家Xuid)金钱 返回值类型：long</span>
<span class="token keyword">auto</span> Money_Get <span class="token operator">=</span> RemoteCall<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">importAs</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>string <span class="token keyword">const</span><span class="token operator">&amp;</span> playerXuid<span class="token punctuation">)</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Money::Get&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">auto</span> result <span class="token operator">=</span> <span class="token function">Money_Get</span><span class="token punctuation">(</span>playerXuid<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C#</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 获取玩家(指定玩家Xuid)金钱 返回值类型：long</span>
<span class="token class-name"><span class="token keyword">var</span></span> Money_Get <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ImportAs</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Func<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span><span class="token keyword">long</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Money::Get&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token function">Money_Get</span><span class="token punctuation">(</span>playerXuid<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Visual Basic .NET</li></ul><div class="language-vb line-numbers-mode" data-ext="vb"><pre class="language-vb"><code><span class="token comment">&#39; 获取玩家(指定玩家Xuid)金钱 返回值类型：long</span>
<span class="token keyword">Dim</span> Money_Get <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token punctuation">(</span><span class="token keyword">Of</span> Func<span class="token punctuation">(</span><span class="token keyword">Of</span> <span class="token keyword">String</span><span class="token punctuation">,</span><span class="token keyword">Long</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Money::Get&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">Dim</span> result <span class="token operator">=</span> Money_Get<span class="token punctuation">(</span>playerXuid<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>F#</li></ul><div class="language-fsharp line-numbers-mode" data-ext="fs"><pre class="language-fsharp"><code><span class="token comment">// 获取玩家(指定玩家Xuid)金钱 返回值类型：long</span>
<span class="token keyword">let</span> Money_Get <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token operator">&lt;</span>Func<span class="token operator">&lt;</span>string<span class="token punctuation">,</span>int64<span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Money::Get&quot;</span><span class="token punctuation">)</span>
playerXuid
	<span class="token operator">|&gt;</span>Money_Get<span class="token punctuation">.</span>Invoke
	<span class="token operator">|&gt;</span>ignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="money-add" tabindex="-1"><a class="header-anchor" href="#money-add" aria-hidden="true">#</a> Money::Add</h2><h3 id="给玩家-指定玩家xuid-加钱" tabindex="-1"><a class="header-anchor" href="#给玩家-指定玩家xuid-加钱" aria-hidden="true">#</a> 给玩家(指定玩家Xuid)加钱</h3><table><tr><th>形参</th><th>类型</th></tr><tr><td>playerXuid</td><td>string</td></tr><tr><td>count</td><td>long</td></tr><tr><td>info</td><td>string</td></tr><tr><td colspan="2">无返回值;</td></tr></table><ul><li>JavaScript</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 给玩家(指定玩家Xuid)加钱 */</span>
<span class="token keyword">const</span> Money_Add <span class="token operator">=</span> ll<span class="token punctuation">.</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Money::Add&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Money_Add</span><span class="token punctuation">(</span>playerXuid<span class="token punctuation">,</span>count<span class="token punctuation">,</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C++</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 给玩家(指定玩家Xuid)加钱</span>
<span class="token keyword">auto</span> Money_Add <span class="token operator">=</span> RemoteCall<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">importAs</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>string <span class="token keyword">const</span><span class="token operator">&amp;</span> playerXuid<span class="token punctuation">,</span><span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token keyword">const</span><span class="token operator">&amp;</span> count<span class="token punctuation">,</span>std<span class="token double-colon punctuation">::</span>string <span class="token keyword">const</span><span class="token operator">&amp;</span> info<span class="token punctuation">)</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Money::Add&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Money_Add</span><span class="token punctuation">(</span>playerXuid<span class="token punctuation">,</span>count<span class="token punctuation">,</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C#</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 给玩家(指定玩家Xuid)加钱</span>
<span class="token class-name"><span class="token keyword">var</span></span> Money_Add <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ImportAs</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Action<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span><span class="token keyword">long</span><span class="token punctuation">,</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Money::Add&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Money_Add</span><span class="token punctuation">(</span>playerXuid<span class="token punctuation">,</span>count<span class="token punctuation">,</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Visual Basic .NET</li></ul><div class="language-vb line-numbers-mode" data-ext="vb"><pre class="language-vb"><code><span class="token comment">&#39; 给玩家(指定玩家Xuid)加钱</span>
<span class="token keyword">Dim</span> Money_Add <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token punctuation">(</span><span class="token keyword">Of</span> Action<span class="token punctuation">(</span><span class="token keyword">Of</span> <span class="token keyword">String</span><span class="token punctuation">,</span><span class="token keyword">Long</span><span class="token punctuation">,</span><span class="token keyword">String</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Money::Add&quot;</span><span class="token punctuation">)</span>
Money_Add<span class="token punctuation">(</span>playerXuid<span class="token punctuation">,</span>count<span class="token punctuation">,</span>info<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>F#</li></ul><div class="language-fsharp line-numbers-mode" data-ext="fs"><pre class="language-fsharp"><code><span class="token comment">// 给玩家(指定玩家Xuid)加钱</span>
<span class="token keyword">let</span> Money_Add <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token operator">&lt;</span>Action<span class="token operator">&lt;</span>string<span class="token punctuation">,</span>int64<span class="token punctuation">,</span>string<span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Money::Add&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span>playerXuid<span class="token punctuation">,</span>count<span class="token punctuation">,</span>info<span class="token punctuation">)</span>
	<span class="token operator">|&gt;</span>Money_Add<span class="token punctuation">.</span>Invoke
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="money-remove" tabindex="-1"><a class="header-anchor" href="#money-remove" aria-hidden="true">#</a> Money::Remove</h2><h3 id="给玩家-指定玩家xuid-减钱" tabindex="-1"><a class="header-anchor" href="#给玩家-指定玩家xuid-减钱" aria-hidden="true">#</a> 给玩家(指定玩家Xuid)减钱</h3><table><tr><th>形参</th><th>类型</th></tr><tr><td>playerXuid</td><td>string</td></tr><tr><td>count</td><td>long</td></tr><tr><td>info</td><td>string</td></tr><tr><td colspan="2">无返回值;</td></tr></table><ul><li>JavaScript</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 给玩家(指定玩家Xuid)减钱 */</span>
<span class="token keyword">const</span> Money_Remove <span class="token operator">=</span> ll<span class="token punctuation">.</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Money::Remove&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Money_Remove</span><span class="token punctuation">(</span>playerXuid<span class="token punctuation">,</span>count<span class="token punctuation">,</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C++</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 给玩家(指定玩家Xuid)减钱</span>
<span class="token keyword">auto</span> Money_Remove <span class="token operator">=</span> RemoteCall<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">importAs</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>string <span class="token keyword">const</span><span class="token operator">&amp;</span> playerXuid<span class="token punctuation">,</span><span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token keyword">const</span><span class="token operator">&amp;</span> count<span class="token punctuation">,</span>std<span class="token double-colon punctuation">::</span>string <span class="token keyword">const</span><span class="token operator">&amp;</span> info<span class="token punctuation">)</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Money::Remove&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Money_Remove</span><span class="token punctuation">(</span>playerXuid<span class="token punctuation">,</span>count<span class="token punctuation">,</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C#</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 给玩家(指定玩家Xuid)减钱</span>
<span class="token class-name"><span class="token keyword">var</span></span> Money_Remove <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ImportAs</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Action<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span><span class="token keyword">long</span><span class="token punctuation">,</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Money::Remove&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Money_Remove</span><span class="token punctuation">(</span>playerXuid<span class="token punctuation">,</span>count<span class="token punctuation">,</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Visual Basic .NET</li></ul><div class="language-vb line-numbers-mode" data-ext="vb"><pre class="language-vb"><code><span class="token comment">&#39; 给玩家(指定玩家Xuid)减钱</span>
<span class="token keyword">Dim</span> Money_Remove <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token punctuation">(</span><span class="token keyword">Of</span> Action<span class="token punctuation">(</span><span class="token keyword">Of</span> <span class="token keyword">String</span><span class="token punctuation">,</span><span class="token keyword">Long</span><span class="token punctuation">,</span><span class="token keyword">String</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Money::Remove&quot;</span><span class="token punctuation">)</span>
Money_Remove<span class="token punctuation">(</span>playerXuid<span class="token punctuation">,</span>count<span class="token punctuation">,</span>info<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>F#</li></ul><div class="language-fsharp line-numbers-mode" data-ext="fs"><pre class="language-fsharp"><code><span class="token comment">// 给玩家(指定玩家Xuid)减钱</span>
<span class="token keyword">let</span> Money_Remove <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token operator">&lt;</span>Action<span class="token operator">&lt;</span>string<span class="token punctuation">,</span>int64<span class="token punctuation">,</span>string<span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Money::Remove&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span>playerXuid<span class="token punctuation">,</span>count<span class="token punctuation">,</span>info<span class="token punctuation">)</span>
	<span class="token operator">|&gt;</span>Money_Remove<span class="token punctuation">.</span>Invoke
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42);function k(m,v){const s=p("router-link");return c(),l("div",null,[n("nav",r,[n("ul",null,[n("li",null,[a(s,{to:"#money-get"},{default:t(()=>[e("Money::Get")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#获取玩家-指定玩家xuid-金钱"},{default:t(()=>[e("获取玩家(指定玩家Xuid)金钱")]),_:1})])])]),n("li",null,[a(s,{to:"#money-add"},{default:t(()=>[e("Money::Add")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#给玩家-指定玩家xuid-加钱"},{default:t(()=>[e("给玩家(指定玩家Xuid)加钱")]),_:1})])])]),n("li",null,[a(s,{to:"#money-remove"},{default:t(()=>[e("Money::Remove")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#给玩家-指定玩家xuid-减钱"},{default:t(()=>[e("给玩家(指定玩家Xuid)减钱")]),_:1})])])])])]),d])}const b=o(i,[["render",k],["__file","Money.html.vue"]]);export{b as default};
