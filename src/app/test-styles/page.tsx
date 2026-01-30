import Link from 'next/link'

export default function TestStyles() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl mb-8">
          样式测试页面
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl mb-4">
            响应式测试
          </h2>
          
          <div className="space-y-4">
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              这是一个测试段落。在移动端应该是小字体，在桌面端应该是正常字体。
            </p>
            
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="text-blue-800">
                当前视口信息：
                <br />
                <span className="block sm:hidden">移动端视图 (&lt; 640px)</span>
                <span className="hidden sm:block md:hidden">平板视图 (640px - 768px)</span>
                <span className="hidden md:block lg:hidden">小桌面视图 (768px - 1024px)</span>
                <span className="hidden lg:block">大桌面视图 (≥ 1024px)</span>
              </p>
            </div>
            
            <div className="prose prose-gray max-w-none">
              <h3>这是一个 prose 标题</h3>
              <p>这是 prose 样式的段落文本。在移动端应该有较小的字体，在桌面端应该有正常的字体大小。</p>
              <code>这是内联代码</code>
              <pre><code>这是代码块{`
多行代码测试
console.log('Hello World');`}</code></pre>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  )
}
