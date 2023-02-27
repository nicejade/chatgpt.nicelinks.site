<p align="center">
  <a href="https://chatgpt.nicelinks.site/" target="_blank">
    <img width="100"src="https://chatgpt.nicelinks.site/logo.svg">
  </a>
</p>

<h1 align="center">素问智聊斋</h1>

<div align="center">
  <strong>
    <a href="https://chatgpt.nicelinks.site/">素问智聊斋</a>，非官方 ChatGPT 在线客户端，旨在提供更便捷的 ChatGPT 访问体验；它基于非官方 <a href="https://github.com/transitive-bullshit/chatgpt-api">ChatGPT API</a>、<a href="https://nicelinks.site/post/62a9c2ad90509e23cea772c0">Svelte</a>、<a href="https://nicelinks.site/post/5fd20cb4c06d6302c1907ec7">TailwindCSS</a>、<a href="https://nicelinks.site/post/6010e1b10c71de1fb957b64e">Vite</a> 和 NodeJS 所搭建，只要输入 OPENAI API KEY 就可以使用。
  </strong>
</div>

## 目标与哲学

[OpenAI](https://nicelinks.site/post/6391e22878b7a1291995ff86) 于 2022 年 11 月推出的超级对话模型 **ChatGPT**， 受到来自世界各地的认可和赞誉，令人印象深刻。然而，由于一些原因，如果没有正确搭建相应的环境（🪜），ChatGPT 在中国地区就无法正常使用。鉴于此，搭建了这个服务，以便用户能够方便地使用 ChatGPT。需要指出的是，使用者首先需要在 OpenAI 官网上注册、登录、申请 `API KEY`，才可以使用本服务。此外，为了保障用户的数据安全，本服务的操作过程中不会存储任何使用者的数据，因此可以放心使用（备注：这段介绍有使用本服务加以润色）。

## 访问地址

在线地址：[素问智聊斋](https://chatgpt.nicelinks.site/)。

## 先决条件

说明用户在安装和使用前，需要准备的一些先决条件，譬如：您需要安装或升级 [Node.js](https://nodejs.org/en/)（> = `16.*`），[pnpm](https://nicelinks.site/post/62989af00f40a860b1599de2)、[Yarn](https://www.jeffjade.com/2017/12/30/135-npm-vs-yarn-detial-memo/) 作为首选）。

## 如何开发

```
# clone project
git clone https://github.com/nicejade/chatgpt.nicelinks.site.git

# install & run for client
cd client && pnpm i && pnpm start

# install & run for srever
cd server && pnpm i && pnpm start
```

## 执照

[MIT](http://opensource.org/licenses/MIT)

版权所有 (c) 2023-至今，[倾城之链](https://nicelinks.site)。
