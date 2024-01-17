import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-03692d83.js";const e="/PFLPDocs/assets/cmd-d3fbf772.png",o="/PFLPDocs/assets/create-3fcdf44f.png",p={},l=t(`<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Land&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//开启领地</span>
	<span class="token property">&quot;ModuleEnabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//领地传送</span>
	<span class="token property">&quot;EnableTeleport&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//圈地飞行</span>
	<span class="token property">&quot;EnableEnclosureFly&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//OP临时Buff时间</span>
    <span class="token comment">//命令/land opbuff后即可暂时无视领地权限</span>
	<span class="token property">&quot;OpBuffTimeSeconds&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token comment">//开启2D领地</span>
	<span class="token property">&quot;Enabled2D&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//2D领地价格</span>
	<span class="token property">&quot;Price2D&quot;</span><span class="token operator">:</span> <span class="token number">100.0</span><span class="token punctuation">,</span>
    <span class="token comment">//2D领地回收价格</span>
	<span class="token property">&quot;RecyclePrice2D&quot;</span><span class="token operator">:</span> <span class="token number">95.0</span><span class="token punctuation">,</span>
    <span class="token comment">//2D领地最大面积</span>
	<span class="token property">&quot;MaxSize2D&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
    <span class="token comment">//2D领地最小面积</span>
	<span class="token property">&quot;MinSize2D&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token comment">//开启3D领地</span>
	<span class="token property">&quot;Enabled3D&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//3D领地价格</span>
	<span class="token property">&quot;Price3D&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span><span class="token punctuation">,</span>
    <span class="token comment">//3D领地回收价格</span>
	<span class="token property">&quot;RecyclePrice3D&quot;</span><span class="token operator">:</span> <span class="token number">1.9</span><span class="token punctuation">,</span>
    <span class="token comment">//3D领地最大面积</span>
	<span class="token property">&quot;MaxSize3D&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
    <span class="token comment">//3D领地最小面积</span>
	<span class="token property">&quot;MinSize3D&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
    <span class="token comment">//玩家拥有的领地最大数量，-1表示无限制</span>
	<span class="token property">&quot;MaximumOwnLands&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
    <span class="token comment">//领地提示数量(通常是无权限的提示）</span>
	<span class="token property">&quot;LandTipCount&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token comment">//领地提示时间</span>
	<span class="token property">&quot;LandTipTime&quot;</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token comment">//表单每页显示的项目数量（对于翻页表单）</span>
	<span class="token property">&quot;CountPerPage&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token comment">//表单每页显示的项目数量（对于选择表单）</span>
	<span class="token property">&quot;ChooseItemCountPerPage&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token comment">//增强破坏保护，仅显示效果</span>
	<span class="token property">&quot;PreventDestroyEx&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//领地额外监听器，如果嫌领地保护的太好可以关闭，通常不建议关闭</span>
	<span class="token property">&quot;ExtraListener&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;BlockFall&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;MultifaceSpreader&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;ItemFrameDrop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;OnActorHurt&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;PCImpactDamage&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;PCSplashPotion&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;PCAoECloud&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;PCArrowHit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;OnHitLightning&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;WitherBossAttack&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;WitherBossDestroyBlocks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;BreakDoor&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;GrowTree&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;GrowMashroom&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;LecternBlockDropBook&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;FishingHook&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;EndermanTakeBlock&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;EndermanLeaveBlock&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;LightningBolt&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;HungerChange&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;BlockMove&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;OpenInventory&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;PlayerDie&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;HopperPullIn&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;OnMobHurt&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><figure><img src="`+e+'" alt="命令" tabindex="0" loading="lazy"><figcaption>命令</figcaption></figure><h2 id="圈地" tabindex="-1"><a class="header-anchor" href="#圈地" aria-hidden="true">#</a> 圈地</h2><figure><img src="'+o+'" alt="圈地" tabindex="0" loading="lazy"><figcaption>圈地</figcaption></figure>',6),c=[l];function r(i,u){return s(),a("div",null,c)}const m=n(p,[["render",r],["__file","land.html.vue"]]);export{m as default};
