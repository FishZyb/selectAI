import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Sparkles, Presentation, Globe, Wifi, CreditCard, ExternalLink, Play, ChevronDown, Copy, CheckCircle2 } from 'lucide-react'
import { getSceneById } from '../data/mockData'

// Mobile Accordion Component
function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-gray-50/50 rounded-lg overflow-hidden lg:hidden">
      <button
        className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-gray-100/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm font-medium text-gray-700">{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-4 py-3">
          {children}
        </div>
      )}
    </div>
  )
}

// Desktop Static Panel Components - IDE Window Style
function PromptPanel({ promptTemplate }: { promptTemplate: string }) {
  return (
    <div className="hidden lg:flex lg:flex-col bg-[#1E1E1E] rounded-lg overflow-hidden min-h-[400px] ring-1 ring-white/10">
      {/* macOS Window Controls */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#2D2D2D] border-b border-white/5 flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28CA42]"></div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <span className="text-xs text-gray-400 font-medium tracking-wide">Prompt 代码</span>
        </div>
        <button
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-medium transition-colors"
          onClick={() => {
            navigator.clipboard.writeText(promptTemplate)
            alert('Prompt模板已复制到剪贴板！')
          }}
        >
          <Copy className="w-3 h-3" />
          复制
        </button>
      </div>
      {/* Editor Content */}
      <div className="flex-1 p-6 overflow-auto">
        <pre className="text-gray-100 text-sm leading-relaxed font-mono whitespace-pre-wrap">
          {promptTemplate}
        </pre>
      </div>
    </div>
  )
}

function BestPracticesPanel({ practices }: { practices: string[] }) {
  return (
    <div className="hidden lg:flex lg:flex-col bg-white border border-gray-200 rounded-lg p-6 min-h-[400px]">
      <h4 className="text-sm font-medium text-gray-700 uppercase tracking-wide mb-4 flex-shrink-0 tracking-tight">最佳实践</h4>
      <div className="flex-1 divide-y divide-gray-100">
        {practices.map((practice, index) => (
          <div key={index} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
            <div className="mt-0.5 flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-blue-600 bg-blue-50 rounded-full p-0.5" />
            </div>
            <span className="text-gray-700 leading-relaxed text-sm tracking-tight flex-1">{practice}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function RankBadge({ rank }: { rank: number }) {
  const getRankStyle = () => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-yellow-900 shadow-lg shadow-yellow-500/30'
      case 2:
        return 'bg-gradient-to-br from-gray-300 to-gray-400 text-gray-800 shadow-lg shadow-gray-400/30'
      case 3:
        return 'bg-gradient-to-br from-orange-300 to-orange-500 text-orange-900 shadow-lg shadow-orange-500/30'
      default:
        return 'bg-gray-200 text-gray-700'
    }
  }

  return (
    <div className={`w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0 ${getRankStyle()}`}>
      #{rank}
    </div>
  )
}

function SceneDetail() {
  const { sceneId } = useParams<{ sceneId: string }>()
  const navigate = useNavigate()
  const scene = sceneId ? getSceneById(sceneId) : null

  if (!scene) {
    return (
      <div className="min-h-screen bg-off-white flex items-center justify-center px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">场景未找到</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            返回首页
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-5xl mx-auto px-8 py-6">
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium mb-4 inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              SelectAI
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50/50 via-transparent to-transparent border-b border-gray-100/50">
        <div className="max-w-5xl mx-auto px-8 py-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Presentation className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">{scene.name}</h1>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed ml-16 tracking-tight">{scene.description}</p>
        </div>
      </div>

      {/* Products List */}
      <div className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">
          TOP {scene.products.length} 推荐
        </h2>
        
        <div className="space-y-8">
          {scene.products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-black/5 rounded-2xl p-8 lg:p-10 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all"
            >
              {/* Card Layout: Left-Center-Right */}
              <div className="flex items-start gap-8">
                {/* Left: Rank Badge */}
                <RankBadge rank={product.rank} />

                {/* Center: Product Info */}
                <div className="flex-1 min-w-0">
                  {/* Product Logo Placeholder + Name */}
                  <div className="flex items-start gap-5 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-gray-400">{product.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">{product.name}</h3>
                      {/* Description and Tags - Side by side on desktop */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-1 lg:line-clamp-none lg:flex-shrink lg:max-w-md">{product.description}</p>
                        {/* Metadata Tags - Inline on desktop */}
                        <div className="flex flex-wrap items-center gap-2 mt-1 lg:mt-0 lg:flex-shrink-0">
                          {/* Free/Paid Tag */}
                          {product.isFree ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-200">
                              <CreditCard className="w-3 h-3" />
                              免费
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-medium border border-orange-200">
                              <CreditCard className="w-3 h-3" />
                              付费
                            </span>
                          )}

                          {/* Web Tag */}
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            <Globe className="w-3 h-3" />
                            Web
                          </span>

                          {/* VPN Tag */}
                          {product.needVPN ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-medium border border-red-200">
                              <Wifi className="w-3 h-3" />
                              需要VPN
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">
                              <Wifi className="w-3 h-3" />
                              无需VPN
                            </span>
                          )}

                          {/* Developer Tag */}
                          <span className="text-xs text-gray-500">by {product.developer}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Action Buttons */}
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <a
                    href={product.platformUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm whitespace-nowrap"
                  >
                    <ExternalLink className="w-4 h-4" />
                    访问官网
                  </a>
                  {product.videoTutorial && (
                    <a
                      href={product.videoTutorial}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm whitespace-nowrap"
                    >
                      <Play className="w-4 h-4" />
                      观看教程
                    </a>
                  )}
                </div>
              </div>

              {/* Content Panels - Responsive Layout */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                {/* Desktop: Static Panels (Side by Side) */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-8">
                  <PromptPanel promptTemplate={product.promptTemplate} />
                  <BestPracticesPanel practices={product.bestPractices} />
                </div>

                {/* Mobile: Accordion (Stacked) */}
                <div className="lg:hidden space-y-3">
                  <Accordion title="💡 Prompt 模板">
                    <div className="relative">
                      <pre className="bg-slate-900 text-gray-100 p-4 rounded-lg text-xs leading-relaxed overflow-x-auto font-mono">
                        {product.promptTemplate}
                      </pre>
                      <button
                        className="absolute top-2 right-2 inline-flex items-center gap-1 px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-medium transition-colors backdrop-blur-sm"
                        onClick={() => {
                          navigator.clipboard.writeText(product.promptTemplate)
                          alert('Prompt模板已复制到剪贴板！')
                        }}
                      >
                        <Copy className="w-3 h-3" />
                        复制
                      </button>
                    </div>
                  </Accordion>

                  <Accordion title="✨ 最佳实践">
                    <ul className="space-y-2">
                      {product.bestPractices.map((practice, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700 leading-relaxed text-xs">
                          <span className="text-green-600 mt-0.5 flex-shrink-0 font-bold text-sm">✓</span>
                          <span>{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </Accordion>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SceneDetail
