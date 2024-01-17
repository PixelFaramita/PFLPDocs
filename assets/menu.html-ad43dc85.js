import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as l,a as n,b as s,d as c,e as a}from"./app-05b574d6.js";const u="/assets/codecomplete-e2d4bb85.png",i="/assets/complete-8a3ec4b6.png",r={},d=a(`<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><ul><li><code>config.json</code> 全局配置文件</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Menu&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ModuleEnabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//开启</span>
    <span class="token property">&quot;SaveFormattedJson&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//自动保存格式化的json，会导致菜单中的注释消失</span>
    <span class="token property">&quot;SaveFormattedJsonWithComments&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token comment">//是否在菜单中添加注释（推荐熟悉后自行关闭，不然看起来菜单很长）</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="菜单配置" tabindex="-1"><a class="header-anchor" href="#菜单配置" aria-hidden="true">#</a> 菜单配置</h2>`,4),k=n("li",null,[n("p",null,[s("配置文件在插件目录"),n("code",null,"menu"),s("文件夹下")])],-1),m={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},v=a(`<ul><li><ol><li>首先在该文件夹下新建一个<code>菜单名.json</code>文件，如<code>menu.json</code></li></ol></li><li><ol start="2"><li>然后在文件中粘入以下内容</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
<span class="token property">&quot;$schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.schema.json&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><ol start="3"><li>即可看到Visual Studio Code的语法检查自动提示 <img src="`+u+'" alt="补全" loading="lazy"></li></ol></li><li><ol start="4"><li>按照提示补全即可 <img src="'+i+'" alt="语法检查" loading="lazy"></li></ol></li></ul>',1),q=n("li",null,[n("p",null,[n("code",null,"menu.json"),s("具体配置示例")])],-1),b=a(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">//绑定物品，如钟，这样玩家使用钟右键即可打开菜单</span>
    <span class="token property">&quot;BindItem&quot;</span><span class="token operator">:</span> <span class="token string">&quot;clock&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//绑定命令，如/menu，这样玩家输入/menu即可打开菜单</span>
    <span class="token property">&quot;RegsterCommand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;menu&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//命令描述</span>
    <span class="token property">&quot;RegsterCommandDescription&quot;</span><span class="token operator">:</span> <span class="token string">&quot;§3§lGUI菜单&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//菜单标题</span>
    <span class="token property">&quot;Title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;§7[§6Mc§3play§7]§8--§eGUI菜单&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//菜单内容</span>
    <span class="token property">&quot;Content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;§4§l内容&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//是否需要OP权限</span>
    <span class="token property">&quot;RequireOP&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">//按钮列表</span>
    <span class="token property">&quot;Buttons&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">//按钮文本</span>
        <span class="token property">&quot;Text&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;►§4§l传送菜单§r◄&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;§7[§c进行各种传送§7]&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">//按钮需要OP权限</span>
        <span class="token property">&quot;RequireOP&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//按钮需要的金币数量</span>
        <span class="token property">&quot;CostMoney&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">//按钮图标</span>
        <span class="token property">&quot;ImageUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/ui/world_glyph_color_2x&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">//按钮点击事件，可触发多个回调</span>
        <span class="token property">&quot;Actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token comment">//按钮点击事件类型</span>
            <span class="token comment">//可选：</span>
            <span class="token comment">//      RunCmd - 在控制台执行命令</span>
            <span class="token comment">//      RunCmdAs - 以玩家身份执行命令</span>
            <span class="token comment">//      RunCmdAsOP - 以玩家OP身份执行命令（类比临时提权）</span>
            <span class="token comment">//      ExecuteCmd - 执行命令，以execute as的方式以玩家身份执行，基本类似RunCmdAsOP</span>
            <span class="token comment">//      OpenForm - 打开表单</span>
            <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OpenForm&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Tpmenu&quot;</span><span class="token punctuation">,</span> <span class="token comment">//菜单ID</span>
            <span class="token comment">//点击关闭后是否返回上一级菜单</span>
            <span class="token property">&quot;BackOnClose&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;Text&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;►§3§l任务§r◄&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;§7[§b奠定发展§7]&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;RequireOP&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;CostMoney&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ImageUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/ui/icon_book_writable&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;RunCmdAs&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/task&quot;</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;Text&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;►§2§l领地§r◄&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;§7[§a保护家园§7]&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;RequireOP&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;CostMoney&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ImageUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/ui/absorption_effect&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;RunCmdAs&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/land&quot;</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;Text&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;►§6§l系统商店§r◄&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;§7[§g赚取金币§7]&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;RequireOP&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;CostMoney&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ImageUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/ui/village_hero_effect&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;RunCmdAs&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/shop&quot;</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function g(y,_){const t=e("ExternalLinkIcon");return p(),l("div",null,[d,n("ul",null,[k,n("li",null,[n("p",null,[s("首次打开文件夹是空的，你需要创建第一个菜单文件，不过不用担心，使用现代IDE（如"),n("a",m,[s("Visual Studio Code"),c(t)]),s("），在没有任何示例的情况下你仍然能很快写出属于自己的菜单")]),v]),q]),b])}const x=o(r,[["render",g],["__file","menu.html.vue"]]);export{x as default};
