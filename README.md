不仅仅是一个OpenAI API的代理工具

## 为什么要再写一个代理工具

目前已经有很多开源代码，实现了Aws、GCP、Cloudflare、腾讯云等基于云函数的代理工具，但大部分都仅仅是一个代理工具。

此工具在代理的基础上，增加了自定义API Key，在使用的时候，无需向应用方填写API Key，只需要填写代理地址即可。

优势：

- 统一管理API Key，即使多个应用，无需每个应用都填写API Key
- 替换方便，若要修改API Key，只需要修改一处即可
- 同时支持多个API Key，在使用的时候，可以随机选择一个API Key，避免单个API Key 限速（用逗号隔开）


## 使用方式

1. 新建一个 Cloudflare Worker
2. 复制 cf_worker.js 里的代码粘贴到 Worker 中并部署
3. 配置环境变量 API_KEY 为你的 API Key
4. 给 Worker 绑定一个没有被墙的域名
5. 使用自己的域名代替 api.openai.com
