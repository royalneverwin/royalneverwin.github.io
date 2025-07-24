---
title: '测试 GitHub Actions 部署'
date: '2025-01-24'
excerpt: '这是一篇测试文章，用于验证 GitHub Actions 自动部署功能是否正常工作。'
tags: ['测试', 'GitHub Actions', '部署']
---

# 测试 GitHub Actions 部署

这是一篇测试文章，用于验证我们的博客是否能通过 GitHub Actions 正确部署到 GitHub Pages。

## GitHub Actions 工作流程

我们的部署流程包括：

1. **代码推送**：当代码推送到 master 分支时触发
2. **自动构建**：GitHub Actions 自动执行 `npm run build`
3. **生成静态文件**：Next.js 生成静态 HTML 文件到 `out/` 目录
4. **自动部署**：将构建好的文件部署到 GitHub Pages

## 为什么 out/ 文件夹不在仓库中？

这是正确的做法：

- `out/` 目录是构建生成的，不应该提交到版本控制
- GitHub Actions 会在云端重新构建
- 这样可以确保部署的始终是最新、干净的构建结果

## 如何检查部署状态？

1. 进入 GitHub 仓库页面
2. 点击 "Actions" 标签
3. 查看最新的工作流运行状态
4. 绿色✅表示部署成功，红色❌表示有错误

如果您看到这篇文章，说明 GitHub Actions 部署成功了！🎉
