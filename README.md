# 个人博客

基于 Next.js 和 TypeScript 构建的现代化个人博客。

## ✨ 特性

- 🚀 **现代化技术栈**：Next.js 15 + TypeScript + Tailwind CSS
- 📱 **响应式设计**：支持各种设备尺寸
- 📝 **Markdown 支持**：使用 Markdown 编写文章
- 🏷️ **标签系统**：文章分类和标签管理
- ⚡ **静态生成**：SEO 友好，性能优秀
- 🎨 **优雅设计**：简洁美观的用户界面

## 🚀 快速开始

### 本地开发

1. **安装依赖**
   ```bash
   npm install
   ```

2. **启动开发服务器**
   ```bash
   npm run dev
   ```

3. **访问网站**
   打开 [http://localhost:3000](http://localhost:3000)

### 生产构建

```bash
npm run build
```

## 📝 写作指南

### 添加新文章

在 `posts/` 目录下创建新的 `.md` 文件，使用以下格式：

```markdown
---
title: '文章标题'
date: '2025-01-24'
excerpt: '文章摘要'
tags: ['标签1', '标签2']
---

# 文章内容

这里是文章的正文内容...
```

## 🚀 部署

项目配置了 GitHub Actions 自动部署到 GitHub Pages。推送到 master 分支即可自动部署。

---

⭐ 如果这个项目对你有帮助，请给个 Star！
