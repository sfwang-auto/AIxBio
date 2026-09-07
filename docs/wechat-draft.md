# 微信公众号草稿自动生成

项目支持在中文文章推送到 `main` 后，自动调用微信公众号接口创建草稿。草稿创建后仍需要在公众号后台人工检查并点击发布；这个流程不会自动公开发布文章。

## 一次性配置

在 GitHub 仓库进入 `Settings → Secrets and variables → Actions`，新增以下 repository secrets：

- `WECHAT_APP_ID`：公众号开发者 ID（AppID）
- `WECHAT_APP_SECRET`：公众号开发者密码（AppSecret）
- `WECHAT_AUTHOR`：可选，文章作者，默认是 `AI × Bio`
- `WECHAT_THUMB_PATH`：可选，封面图片相对于仓库根目录的路径；未设置时优先使用文章 `meta.json` 的 `cover`，然后尝试 `public/images/<slug>/cover.png` 和 `content/articles/<slug>/cover.png`，找不到时回退到 `public/og.png`

不要把 AppSecret 写入代码、文章或提交记录。若公众号启用了 IP 白名单，还需要把 GitHub Actions 的出口 IP 纳入公众号后台允许列表，或按公众号后台要求配置网络访问方式。

## 使用方式

正常发布中文文章到 `main`：

```bash
npm run wechat:draft -- --slug riboseek-fast-nucleotide-alignment --dry-run
```

确认本地转换结果后，把文章和代码推送到 `main`。`.github/workflows/wechat-draft.yml` 会自动找出本次提交中变化的中文文章，为每篇文章创建一个公众号草稿。

如果没有固定 IP 的 VPS，可以在已加入微信公众号 IP 白名单的 Mac 上运行本地脚本：

```bash
npm run wechat:draft:local -- riboseek-fast-nucleotide-alignment
```

脚本会显示当前公网 IP，并在终端中隐藏读取 AppSecret。AppSecret 不会写入文件或提交到 Git。家庭网络公网 IP 变化后，需要先把新 IP 加入微信公众号白名单。

如果不想每次输入 AppID 和 AppSecret，可以在项目根目录创建本地文件 `.env.wechat.local`：

```dotenv
WECHAT_APP_ID=wxxxxxxxxxxxxxxxx
WECHAT_APP_SECRET=你的AppSecret
```

该文件已被 `.gitignore` 忽略，不会提交到 GitHub。创建后直接运行上面的命令即可；脚本仍会优先使用当前终端环境变量，便于临时覆盖本地配置。

也可以在 GitHub 的 `Actions → Create WeChat draft → Run workflow` 中手动输入文章 slug，重新创建指定文章的草稿。

草稿转换会：

- 把 Markdown/MDX 转成微信公众号 HTML；
- 把文章中的本地图片上传到微信公众号图床；
- 使用封面图创建草稿；
- 保留原网站文章链接作为“原文链接”；
- 将数学公式转成可读文本，因为微信公众号草稿不会自动加载本站的 KaTeX 样式。

相关接口文档：

- [新增草稿](https://developers.weixin.qq.com/doc/offiaccount/Draft_Box/Add_draft.html)
- [发布图文消息](https://developers.weixin.qq.com/doc/offiaccount/Publish/Publish.html)
