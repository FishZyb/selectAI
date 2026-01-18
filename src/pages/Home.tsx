import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import { Sparkles } from 'lucide-react'
import { searchScenes } from '../data/mockData'

function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<ReturnType<typeof searchScenes>>([])
  const [showResults, setShowResults] = useState(false)
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const results = searchScenes(searchQuery)
      if (results.length > 0) {
        navigate(`/scene/${results[0].id}`)
      } else {
        alert('未找到相关场景，请尝试其他关键词')
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    if (value.trim()) {
      const results = searchScenes(value)
      setSearchResults(results)
      setShowResults(true)
    } else {
      setShowResults(false)
    }
  }

  const handleResultClick = (sceneId: string) => {
    navigate(`/scene/${sceneId}`)
  }

  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              SelectAI
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-900 font-medium text-sm hover:text-gray-600 transition-colors">首页</a>
            <a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">热门榜单</a>
            <a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">工具对比</a>
            <a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">使用指南</a>
            <a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">行业动态</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors">⚙️</button>
            <button className="text-gray-600 hover:text-gray-900 transition-colors">🔔</button>
            <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 cursor-pointer hover:bg-gray-300 transition-colors">
              👤
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Centered */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-8 py-32">
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            SelectAI
            <span className="block mt-4 text-5xl md:text-6xl font-normal text-gray-900">
              找到最适合你的
              <span className="inline-block ml-2">
                <TypeAnimation
                  sequence={[
                    'AI工具',
                    1500,
                    'PPT神器',
                    1500,
                    '写作助手',
                    1500,
                    '编程搭子',
                    1500,
                    '绘图专家',
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  deletionSpeed={40}
                  repeat={Infinity}
                  cursor={true}
                  className="text-gray-900 font-bold"
                />
              </span>
            </span>
          </h1>
          
          {/* Description / Slogan */}
          <p className="text-lg text-gray-500 mb-16 max-w-2xl mx-auto leading-relaxed tracking-wide">
            聚焦真实应用场景，为你精准匹配最得力的 AI 助手。
          </p>
          
          {/* Search Form */}
          <form className="relative mb-12" onSubmit={handleSearch}>
            <div className="relative group">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="w-full pl-16 pr-32 py-6 text-lg bg-white border border-gray-200 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all placeholder:text-gray-400"
                placeholder="搜索业务场景，例如：PPT制作、代码生成、图片生成..."
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={() => {
                  if (searchQuery.trim()) {
                    setShowResults(true)
                  }
                }}
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 px-8 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                搜索
              </button>
            </div>
            
            {/* Search Results Dropdown - Glassmorphism */}
            {showResults && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-4 bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl overflow-hidden z-50">
                {searchResults.map((scene) => (
                  <div
                    key={scene.id}
                    className="px-6 py-5 hover:bg-gray-50/80 transition-colors cursor-pointer border-b border-gray-100/50 last:border-0"
                    onClick={() => handleResultClick(scene.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">📋</div>
                      <div className="flex-1 text-left">
                        <div className="font-semibold text-gray-900 mb-1">{scene.name}</div>
                        <div className="text-sm text-gray-500 leading-relaxed">{scene.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </form>

          {/* Quick Scenes */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-gray-500 font-medium">热门场景：</span>
            {[
              { id: 'ppt-making', name: 'PPT制作' },
              { id: 'code-generation', name: '代码生成' },
              { id: 'image-generation', name: '图片生成' },
              { id: 'writing-assistant', name: '写作助手' }
            ].map((scene) => (
              <button
                key={scene.id}
                className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all font-medium"
                onClick={() => navigate(`/scene/${scene.id}`)}
              >
                {scene.name}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
