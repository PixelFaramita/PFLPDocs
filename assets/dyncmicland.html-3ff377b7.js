import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-05b574d6.js";const p="/assets/effect-48553fbb.png",o={},c=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/// &lt;reference path=&quot;PXBANALuminousPolymerization/scripts/node_modules/@pf/index.d.ts&quot; /&gt;</span>
mc<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token string">&quot;onServerStarted&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  $pf<span class="token punctuation">.</span>event<span class="token punctuation">.</span>onLandCalcPrice<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">player<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    $pf<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;land calc: &quot;</span> <span class="token operator">+</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    $pf<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;land calc info json: &quot;</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    info<span class="token punctuation">.</span>OriginalPrice<span class="token punctuation">;</span> <span class="token comment">//原价</span>
    info<span class="token punctuation">.</span><span class="token function">SetPrice</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token string">&quot;打折描述&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+'" alt="效果" tabindex="0" loading="lazy"><figcaption>效果</figcaption></figure>',2),e=[c];function i(u,l){return s(),a("div",null,e)}const d=n(o,[["render",i],["__file","dyncmicland.html.vue"]]);export{d as default};
