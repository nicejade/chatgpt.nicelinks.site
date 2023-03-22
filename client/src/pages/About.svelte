<script>
  import { onMount } from 'svelte'
  import { init } from '@waline/client'
  import '@waline/client/dist/waline.css'

  import { TITLE } from './../helper/constant'

  onMount(() => {
    init({
      el: '#waline',
      serverURL: 'https://comment.nicelinks.site/',
      path: 'https://chatgpt.nicelinks.site/',
      copyright: false,
      wordLimit: [10, 600],
      requiredMeta: ['nick', 'mail'],
    })
  })
</script>

<div class="flex-col justify-between page-warpper items-left">
  <div class="m-auto my-4">
    <img class="w-16" src="https://chatgpt.nicelinks.site/logo.svg" alt={TITLE} />
  </div>
  <div class="m-auto my-4">
    <strong> <a href="https://chatgpt.nicelinks.site/">{TITLE}</a></strong>，非官方 ChatGPT
    在线客户端，旨在提供更便捷的 ChatGPT 访问体验；它基于非官方
    <a href="https://github.com/transitive-bullshit/chatgpt-api">ChatGPT API</a>、<a
      href="https://nicelinks.site/post/62a9c2ad90509e23cea772c0">Svelte</a
    >、<a href="https://nicelinks.site/post/5fd20cb4c06d6302c1907ec7">TailwindCSS</a>、<a
      href="https://nicelinks.site/post/6010e1b10c71de1fb957b64e">Vite</a
    > 和 NodeJS 所搭建，只要输入 OPENAI API KEY 就可以使用。
  </div>

  <h2 class="my-4 text-2xl font-medium">目标与哲学</h2>
  <p>
    <a href="https://nicelinks.site/post/6391e22878b7a1291995ff86">OpenAI</a> 于 2022 年 11
    月推出的超级对话模型 <strong>ChatGPT</strong>，
    受到来自世界各地的认可和赞誉，令人印象深刻。然而，由于一些原因，如果没有正确搭建相应的环境（🪜），ChatGPT
    在中国地区就无法正常使用。鉴于此，搭建了这个服务，以便用户能够方便地使用
    ChatGPT。需要指出的是，使用者首先需要在 OpenAI 官网上注册、登录、申请
    <code>API KEY</code
    >，才可以使用本服务。此外，为了保障用户的数据安全，本服务的操作过程中不会存储任何使用者的数据，因此可以放心使用（备注：这段介绍有使用本服务加以润色）。
  </p>
  <h2 class="my-4 text-2xl font-medium">先决条件</h2>
  <p>
    说明用户在安装和使用前，需要准备的一些先决条件，譬如：您需要安装或升级 <a
      href="https://nodejs.org/en/">Node.js</a
    >，<a href="https://nicelinks.site/post/62989af00f40a860b1599de2">pnpm</a>、<a
      href="https://www.jeffjade.com/2017/12/30/135-npm-vs-yarn-detial-memo/">Yarn</a
    > 作为首选）。
  </p>
  <h2 class="my-4 text-2xl font-medium">适用场景</h2>
  <ul>
    <li>因为环境限制，无法正常 使用 ChatGPT 时；</li>
    <li>具备账号，想让远方亲人、朋友快速体验 ChatGPT。</li>
  </ul>
  <p>
    补充说明：承诺后台不会保存任何数据；基于 API KEY
    发起的对话内容，会同步到对应账号；如果您习惯使用桌面客户端，类似项目有：<a
      href="https://github.com/lencx/ChatGPT">lencx/ChatGPT</a
    >。
  </p>
  <h2 class="my-4 text-2xl font-medium">诞生初衷</h2>
  <p>
    最原始的动机，是因为：以上两点适用场景所对应的诉求，我觉得都需要。但，这并不足以缘起这个项目，更详细的阐述如下：
  </p>
  <p>
    作为颇爱折腾的技术人员，ChatGPT
    自然是要体验；有请时在美国的朋友，帮着注册®️了账号；然而，蛮多时候即便采用科学上网，设备却无法成功登陆
    <a href="https://chat.openai.com/chat">ChatGPT 官网地址</a> 。恰逢一个契机——帮朋友写几行关于
    ChatGPT 的示例；当痛点（Motivation：动机）碰上可执行性（Ability：能力），外加适当的<strong
      >触发条件</strong
    >（Trigger），福格行为模型（BJ Foog&#39;s Behaviour Model）已全部满足，于是乎，
    <a href="https://chatgpt.nicelinks.site/">素问智聊斋</a> 就有了诞生的充足理由。
  </p>
  <h2 class="my-4 text-2xl font-medium">命名来源</h2>
  <p>
    早在 <a href="https://forum.lovejade.cn/d/1">关于“悠然宜想亭”的由来，以及未来</a>
    一文提及，对于网站取名多是五个字；或是兴趣的原因，其后缀带有
    <a href="https://forum.lovejade.cn/d/9">亭台楼阁、轩榭廊舫，殿庭苑斋</a> 其中一个；其中大部分已被使用；因为「Chat」的应为对应的是「对话、聊天」；于是，「斋」字就这么定下；AI
    对应智能，所以「智聊」也就应景而生。
  </p>
  <p>
    原本命名为「智聊问异斋」，后觉不妥，略阅资料，遂修改为 <code>素问智聊斋</code
    >；素问：最早或于《黄帝内经》；釋名：“「素者，本也；問者，黃帝問於岐伯也」”。另有解释为：“<strong
      >即问本，探索人与自然的根本性问题</strong
    >”。当想 ChatGPT 说：“解释下「素问」”，它给出以下解释：
  </p>
  <blockquote>
    <p>
      「素问」是一种中国古代哲学思想，它强调对本质的探究。它的核心思想是：任何事物都有其本质，而且这个本质不受时间和空间的束缚，所以要理解它，就必须通过探究本质来探索事物的真相。
    </p>
  </blockquote>
  <h2 class="my-4 text-2xl font-medium">技术选型</h2>
  <p>
    <a href="https://nicelinks.site/post/62a9c2ad90509e23cea772c0">Svelte</a> 、
    <a href="https://nicelinks.site/post/5fd20cb4c06d6302c1907ec7">TailwindCSS</a>
    、 <a href="https://nicelinks.site/post/6010e1b10c71de1fb957b64e">Vite</a> 、Fastify、TypeScript
    等，具为当前所流行，并且喜爱的技术栈 / 工具；其中 Fastify、Svelte 尚未使用过值得一提；
  </p>
  <h4 id="-svelte-">什么是 Svelte？</h4>
  <p>
    <a href="https://nicelinks.site/post/62a9c2ad90509e23cea772c0">Svelte</a> 是
    <a href="https://blog.logrocket.com/should-you-switch-react-svelte/"
      >另一个前端框架，类似于 React</a
    > 或 Vue。像这两个一样，你可以使用 Svelte 来制作单页应用程序。然而，Svelte 有一些特性使其与其他框架截然不同。
  </p>
  <p>
    例如，与其他框架不同，Svelte 主要是一个编译框架；Svelte 库的大部分是运行时依赖项 <code
      >devDependency</code
    >，而不是运行时依赖项。这有助于使最终应用程序更小、更快，以便客户端下载。
  </p>
  <p>
    另一个区别是 Svelte 不使用虚拟
    DOM。相反，它使用各种策略来仅更新已更改的页面的特定部分。这减少了开销并使应用程序更快。
  </p>
  <p>Svelte 还通过不需要类或函数来声明组件来提供易用性。每个 Svelte 文件本身都被视为一个组件。</p>
  <p>
    最后，Svelte 的钩子很少。尽管生命周期功能需要挂钩，但 Svelte
    不需要复杂的状态管理挂钩。状态可以通过声明一个变量来存储和使用，就像在 vanilla JavaScript
    中一样。
  </p>
  <h2 class="my-4 text-2xl font-medium">思考感悟</h2>
  <p>关于 ChatGPT，相信接触过它的人们，或多或少都会有自己的感受；目前为止，吾有以下几点看法：</p>
  <ul>
    <li>类 ChatGPT 似 AI 产品，必将像如今的手机一般，成为绝大部分人类生活必需品；</li>
    <li>
      毕竟是工具，使用乃至产生依赖，倒无不可；但也不能荒废自身，我辈仍须保持<strong>深度学习</strong
      >及提高学习能力；
    </li>
    <li>
      AI
      会进而加剧人与人之间的差异；因为不喜欢折腾或探究的人，很难尽早去接触它，而是等时代浪潮拍打过来。
    </li>
  </ul>
  <h2 class="my-4 text-2xl font-medium">其他作品</h2>
  <ul>
    <li><a href="https://nicelinks.site/">倾城之链</a></li>
    <li><a href="https://share.lovejade.cn/">玉桃文飨轩</a></li>
    <li><a href="https://forum.lovejade.cn/">悠然宜想亭</a></li>
    <li><a href="https://quickapp.lovejade.cn/">静轩之别苑</a></li>
    <li><a href="https://www.jeffjade.com/">晚晴幽草轩</a></li>
  </ul>
  <br />
  <p>
    以上介绍内容，部分使用 ChatGPT 加以<strong>润色</strong
    >。截止目前，它可以协助人类，已经很多，诸如学术论文、内容创作、翻译、数据分析、研究咨询、简历和求职信、广告文案、编写小说、个人陈述、SEO
    优化等等，如果想让它更好帮助到您，可以移步
    <a href="https://github.com/PlexPt/awesome-chatgpt-prompts-zh">ChatGPT 中文调教指南</a>
    ，学习怎么让它在不同场景，更好听懂你的话。
  </p>

  <h2 id="执照" class="my-4 text-2xl font-medium">执照</h2>
  <p><a href="http://opensource.org/licenses/MIT">MIT</a></p>
  <p>版权所有 (c) 2023-至今，<a href="https://nicelinks.site">倾城之链</a>。</p>

  <br />
  <h2 id="执照" class="my-4 text-2xl font-medium">留言探讨</h2>
  <div id="waline" />
</div>
