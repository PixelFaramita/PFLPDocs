import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as i,c as a,a as e,b as l,d as c,w as d,e as s}from"./app-05b574d6.js";const r={},u=s('<h3 id="运行环境" tabindex="-1"><a class="header-anchor" href="#运行环境" aria-hidden="true">#</a> 运行环境</h3><ul><li>不支持大多数面板服(测试 wine 8.8 运行多处溢出和卡死)，除非是基于 windows 的面板服并配置了<code>.NET 7</code> 运行环境</li></ul><blockquote><p>多数面版服使用 linux+wine 运行 bds，但由于 wine 对先进的<code>.NET</code> 7 有一些兼容性问题，加上本插件对<code>.NET 7</code> 的各种魔法依赖较高，以至于暂时无法在 wine 环境下运行</p></blockquote><h3 id="与其他插件共同使用时" tabindex="-1"><a class="header-anchor" href="#与其他插件共同使用时" aria-hidden="true">#</a> 与其他插件共同使用时</h3>',4),_=e("li",null,"本插件的聊天事件会高于其他插件，即使其他插件通过 LL 的接口取消了聊天事件，插件也会继续处理",-1),h=e("li",null,[l("如"),e("code",null,"/money"),l("命令可与"),e("code",null,"LLMoney"),l("注册的相关命令同时使用")],-1),m=e("li",null,"不会因为注册相同命令而造成控制台报错，但可能会影响使用体验",-1);function p(f,b){const o=n("RouterLink");return i(),a("div",null,[u,e("ul",null,[e("li",null,[l("本插件通常不会与其他插件冲突,但仍需注意以下几点 "),e("ul",null,[_,e("li",null,[l("本插件的命令可能与其他插件重合，但只要命令重载不同，就可以与其他插件共用一个主命令 "),e("ul",null,[h,m,e("li",null,[l("本插件的所有命令均可以通过接口修改，参考"),c(o,{to:"/api/command.html"},{default:d(()=>[l("命令接口")]),_:1})])])])])])])])}const N=t(r,[["render",p],["__file","compatibility.html.vue"]]);export{N as default};
