#!/bin/bash

# 博客部署脚本
# 使用方法: ./deploy.sh "提交信息"

echo "🚀 开始检查站点..."

# 1. 先做一次构建验证，确保推送前站点可正常导出
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败，已停止推送。"
    exit 1
fi

echo "✅ 构建验证通过。"

# 2. 提交并推送源码，由 GitHub Actions 自动部署 docs/
COMMIT_MSG=${1:-"update site"}
echo "📝 提交更改: $COMMIT_MSG"

git add .
git commit -m "$COMMIT_MSG"
git push origin master

echo "🎉 已推送到 master。"
echo "🌐 GitHub Actions 会自动构建，并发布最新生成的 docs/ 到 GitHub Pages。"
