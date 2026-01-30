#!/bin/bash

# 博客部署脚本
# 使用方法: ./deploy.sh "提交信息"

echo "🚀 开始构建博客..."

# 1. 构建项目
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败！"
    exit 1
fi

echo "✅ 构建完成！"

# 2. 删除旧的 docs 目录（如果存在）
if [ -d "docs" ]; then
    echo "🗑️  删除旧的 docs 目录..."
    rm -rf docs
fi

# 3. 移动 out 目录到 docs
echo "📁 移动构建文件到 docs 目录..."
mv out docs

# 4. 提交并推送
COMMIT_MSG=${1:-"📝 更新博客内容"}
echo "📝 提交更改: $COMMIT_MSG"

git add .
git commit -m "$COMMIT_MSG"
git push origin master

echo "🎉 部署完成！"
echo "🌐 网站将在几分钟后更新: https://royalneverwin.github.io"
