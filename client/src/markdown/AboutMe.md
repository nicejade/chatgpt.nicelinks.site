**[素问智聊斋](https://chatgpt.nicelinks.site/)** ，非官方 ChatGPT 在线客户端，旨在提供更便捷的 [ChatGPT](https://nicelinks.site/post/6391e22878b7a1291995ff86) 访问体验；它基于非官方 [ChatGPT API](https://github.com/transitive-bullshit/chatgpt-api)、[Svelte](https://nicelinks.site/post/62a9c2ad90509e23cea772c0)、[TailwindCSS](https://nicelinks.site/post/5fd20cb4c06d6302c1907ec7)、[Vite](https://nicelinks.site/post/6010e1b10c71de1fb957b64e) 和 NodeJS 所搭建，无需账号，零配置，即可与 ChatGPT 畅聊；支持自定义 OPENAI API KEY。

## 目标与哲学

[OpenAI](https://nicelinks.site/post/6391e22878b7a1291995ff86) 于 2022 年 11 月推出的超级对话模型 **ChatGPT**， 受到来自世界各地的认可和赞誉，令人印象深刻。然而，由于一些原因，如果没有正确搭建相应的环境（🪜），ChatGPT 在中国地区就无法正常使用。鉴于此，搭建了这个服务，以便用户能够方便地使用 ChatGPT。当然，条件允许您可前往 OpenAI 官网上注册、登录、申请专属 `API KEY`。此外，为了保障用户的数据安全，本服务的操作过程中不会存储任何使用者的数据，因此可以放心使用（备注：这段介绍有使用本服务加以润色）。

## 适用场景

* 因为环境限制，无法正常 使用 ChatGPT 时；
* 具备账号，想让远方亲人、朋友快速体验 ChatGPT。

补充说明：承诺后台不会保存任何数据；基于 API KEY 发起的对话内容，会同步到对应账号；如果您习惯使用桌面客户端，类似项目有：[lencx/ChatGPT](https://github.com/lencx/ChatGPT)。

## 诞生初衷

最原始的动机，是因为：以上两点适用场景所对应的诉求，我觉得都需要。但，这并不足以缘起这个项目，更详细的阐述如下：

作为颇爱折腾的技术人员，ChatGPT 自然是要体验；有请时在美国的朋友，帮着注册®️了账号；然而，蛮多时候即便采用科学上网，设备却无法成功登陆 [ChatGPT 官网地址](https://chat.openai.com/chat) 。恰逢一个契机——帮朋友写几行关于 ChatGPT 的示例；当痛点（Motivation：动机）碰上可执行性（Ability：能力），外加适当的 **触发条件** （Trigger），福格行为模型（BJ Foog's Behaviour Model）已全部满足，于是乎， [素问智聊斋](https://chatgpt.nicelinks.site/) 就有了诞生的充足理由。

## 命名来源

早在 [关于“悠然宜想亭”的由来，以及未来](https://forum.lovejade.cn/d/1) 一文提及，对于网站取名多是五个字；或是兴趣的原因，其后缀带有 [亭台楼阁、轩榭廊舫，殿庭苑斋](https://forum.lovejade.cn/d/9) 其中一个；其中大部分已被使用；因为「Chat」的应为对应的是「对话、聊天」；于是，「斋」字就这么定下；AI 对应智能，所以「智聊」也就应景而生。

原本命名为「智聊问异斋」，后觉不妥，略阅资料，遂修改为 `素问智聊斋`；素问：最早或于《黄帝内经》；釋名：“「素者，本也；問者，黃帝問於岐伯也」”。另有解释为：“ **即问本，探索人与自然的根本性问题** ”。当想 ChatGPT 说：“解释下「素问」”，它给出以下解释：

> 「素问」是一种中国古代哲学思想，它强调对本质的探究。它的核心思想是：任何事物都有其本质，而且这个本质不受时间和空间的束缚，所以要理解它，就必须通过探究本质来探索事物的真相。

## 技术选型

前端采用了 [Svelte](https://nicelinks.site/post/62a9c2ad90509e23cea772c0) 、[TypeScript](https://nicelinks.site/post/6278fdeaac00ce3f9b11a8ef)、[TailwindCSS](https://nicelinks.site/post/5fd20cb4c06d6302c1907ec7)、[Flowbite](https://nicelinks.site/post/617138035e35cd063077cefc) 、[MDSvex](https://nicelinks.site/post/642598ca2d6c9c63445c8862)、[Vite](https://nicelinks.site/post/6010e1b10c71de1fb957b64e)、 等流行技术栈，而后台则采用 [Fastify](https://nicelinks.site/post/6400b3eafe46ca437e0ac36e) 框架；在服务器上，则基于 [Nginx](https://nicelinks.site/post/6339a6aa35a9c117dacf2363)、[pm2](https://nicelinks.site/post/62bc60e90c61c703d7747590) 进行部署；其中 Svelte、TailwindCSS、MDSvex 等工具，极大提升了编写代码的舒适度，令人青睐有加。

## 思考感悟

关于 ChatGPT，相信接触过它的人们，或多或少都会有自己的感受；目前为止，吾有以下几点看法：

* 类似 ChatGPT 这样的 [AI](https://nicelinks.site/tags/AI) 产品，必将像如今的手机一般，成为绝大部分人类生活必需品；
* 毕竟是工具，使用乃至产生依赖，倒无不可；但也不能荒废自身，我辈仍须保持**深度学习**及提高学习能力；
* AI 会进而加剧人与人之间的差异；因为不喜欢折腾或探究的人，很难尽早去接触它，而是等时代浪潮拍打过来。

## 其他作品

* [倾城之链](https://nicelinks.site/)
* [曼妙句子](https://read.lovejade.cn/)
* [玉桃文飨轩](https://share.lovejade.cn/)
* [悠然宜想亭](https://forum.lovejade.cn/)
* [静轩之别苑](https://quickapp.lovejade.cn/)
* [晚晴幽草轩](https://www.jeffjade.com/)

以上介绍内容，部分使用 ChatGPT 加以**润色** 。截止目前，它可以协助人类，已经很多，诸如学术论文、内容创作、翻译、数据分析、研究咨询、简历和求职信、广告文案、编写小说、个人陈述、[SEO](https://nicelinks.site/tags/SEO) 优化等等，如果想让它更好帮助到您，可以移步 [ChatGPT 中文调教指南](https://nicelinks.site/redirect?url=https://github.com/PlexPt/awesome-chatgpt-prompts-zh) ，学习怎么让它在不同场景，更好听理解您的指令。

## 执照

[MIT](http://opensource.org/licenses/MIT)

版权所有 (c) 2023-至今，[倾城之链](https://nicelinks.site/)。