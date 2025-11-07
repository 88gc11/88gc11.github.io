# 88gc11.github.io

这是一个简单的静态网站模板，适合部署到 GitHub Pages 或本地预览。

本地预览：

- 直接在文件管理器中双击 `index.html` 打开（适用于简单检查）。
- 或使用轻量的静态服务器（推荐）：

Windows / PowerShell 示例：

```powershell
# 使用 Python 3.x（需要安装 Python）
python -m http.server 8000
# 在浏览器中打开 http://localhost:8000
```

部署到 GitHub Pages：

1. 将本仓库推送到 GitHub（仓库名格式为 `username.github.io` 则会部署到用户主页，或使用 `gh-pages` 分支进行项目页面部署）。
2. 在仓库的 Settings -> Pages 中启用 GitHub Pages，选择部署来源。
3. 等待几分钟，页面将上线。

后续建议：添加 site 配置、模板引擎或静态站点生成器（例如 Jekyll、Hugo、Eleventy）以便内容管理。