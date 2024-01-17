import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-05b574d6.js";const p={},o=t(`<h3 id="使用-lljs-重写和替换自带命令" tabindex="-1"><a class="header-anchor" href="#使用-lljs-重写和替换自带命令" aria-hidden="true">#</a> 使用 LLJS 重写和替换自带命令</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/// &lt;reference path=&quot;./PixelFaramitaLuminousPolymerization/scripts/node_modules/@pf/index.d.ts&quot; /&gt;</span>
<span class="token comment">/// &lt;reference path=&quot;A:/Documents/GitHub/HelperLib/src/index.d.ts&quot; /&gt;</span>
mc<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token string">&quot;onServerStarted&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">//添加监听，在服务器启动后，保证$pf变量正确获取</span>
  $pf<span class="token punctuation">.</span>Api<span class="token punctuation">.</span>Command<span class="token punctuation">.</span><span class="token function">RenameCommand</span><span class="token punctuation">(</span><span class="token string">&quot;land&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//隐藏PFLP默认的land命令</span>
  <span class="token keyword">const</span> cmd <span class="token operator">=</span> mc<span class="token punctuation">.</span><span class="token function">newCommand</span><span class="token punctuation">(</span><span class="token string">&quot;land&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;测试&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//创建新的命令</span>
  cmd<span class="token punctuation">.</span><span class="token function">overload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  cmd<span class="token punctuation">.</span><span class="token function">setCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">cmd<span class="token punctuation">,</span> origin<span class="token punctuation">,</span> output<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    output<span class="token punctuation">.</span><span class="token function">addMessage</span><span class="token punctuation">(</span><span class="token string">&quot;§a执行land&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//执行真land命令（执行PFLP内置的land命令）</span>
    $pf<span class="token punctuation">.</span>Api<span class="token punctuation">.</span>Command<span class="token punctuation">.</span><span class="token function">ExecuteInternalCommand</span><span class="token punctuation">(</span>
      origin<span class="token punctuation">.</span>player<span class="token punctuation">.</span>xuid<span class="token punctuation">,</span>
      <span class="token string">&quot;/land create 3d&quot;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">log</span><span class="token punctuation">(</span>origin<span class="token punctuation">.</span>player<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;执行了land命令&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  cmd<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//注册命令</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[o];function e(u,i){return s(),a("div",null,c)}const d=n(p,[["render",e],["__file","command.html.vue"]]);export{d as default};
