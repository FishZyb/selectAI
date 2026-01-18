export interface AIProduct {
  id: string
  name: string
  rank: number
  platformUrl: string
  isFree: boolean
  developer: string
  needVPN: boolean
  videoTutorial?: string
  promptTemplate: string
  bestPractices: string[]
  description: string
  icon?: string
}

export interface Scene {
  id: string
  name: string
  description: string
  products: AIProduct[]
}

export const mockScenes: Scene[] = [
  {
    id: 'ppt-making',
    name: 'PPT制作',
    description: '使用AI快速生成专业的演示文稿，包括内容生成、设计美化、排版优化等功能',
    products: [
      {
        id: 'gamma',
        name: 'Gamma',
        rank: 1,
        platformUrl: 'https://gamma.app',
        isFree: true,
        developer: 'Gamma',
        needVPN: true,
        videoTutorial: 'https://www.youtube.com/watch?v=example1',
        promptTemplate: `请帮我制作一个关于[主题]的PPT演示文稿，要求：
1. 包含10-15页幻灯片
2. 每页包含标题、要点和配图建议
3. 风格：[商务/教育/创意]风格
4. 目标受众：[受众群体]
5. 重点突出：[核心信息]`,
        bestPractices: [
          '明确PPT的主题和目标受众，这样AI能生成更精准的内容',
          '提供具体的页数要求，避免内容过多或过少',
          '指定风格偏好，如商务、教育、创意等',
          '可以分阶段生成，先让AI生成大纲，再逐步完善每页内容',
          '利用AI的配图建议功能，提升PPT的视觉效果'
        ],
        description: 'Gamma是一款AI驱动的演示文稿生成工具，可以快速创建专业级PPT，支持多种模板和风格。'
      },
      {
        id: 'beautiful-ai',
        name: 'Beautiful.ai',
        rank: 2,
        platformUrl: 'https://www.beautiful.ai',
        isFree: false,
        developer: 'Beautiful.ai',
        needVPN: true,
        videoTutorial: 'https://www.youtube.com/watch?v=example2',
        promptTemplate: `创建一个[主题]的演示文稿：
- 幻灯片数量：[X]页
- 设计风格：[现代简约/商务专业/创意活泼]
- 主要内容：[列出关键点]
- 配色方案：[建议颜色]
- 特殊要求：[如有]`,
        bestPractices: [
          'Beautiful.ai有智能设计引擎，会自动调整布局，所以只需关注内容',
          '使用模板库快速开始，然后根据需求定制',
          '利用智能图表功能，让数据可视化更专业',
          '定期保存，避免意外丢失工作',
          '预览模式检查最终效果，确保所有元素对齐'
        ],
        description: 'Beautiful.ai提供智能设计助手，自动优化PPT布局和设计，让非设计师也能做出专业演示文稿。'
      },
      {
        id: 'tome',
        name: 'Tome',
        rank: 3,
        platformUrl: 'https://tome.app',
        isFree: true,
        developer: 'Tome',
        needVPN: true,
        promptTemplate: `生成一个关于[主题]的互动式演示文稿：
主题：[详细描述]
页数：[X]页
互动元素：[是否需要视频、3D模型等]
叙述风格：[正式/轻松/故事化]
关键信息：[需要强调的内容]`,
        bestPractices: [
          'Tome支持互动式内容，可以嵌入视频、3D模型等，充分利用这些功能',
          '使用故事化叙述方式，让演示更有吸引力',
          '利用AI生成的内容作为起点，然后手动优化细节',
          '预览在不同设备上的显示效果，确保兼容性',
          '分享链接前，检查所有互动元素是否正常工作'
        ],
        description: 'Tome是一个AI驱动的叙事平台，可以创建互动式演示文稿，支持多媒体内容嵌入。'
      }
    ]
  },
  {
    id: 'code-generation',
    name: '代码生成',
    description: '使用AI辅助编程，快速生成代码、调试错误、重构代码等开发任务',
    products: [
      {
        id: 'cursor',
        name: 'Cursor',
        rank: 1,
        platformUrl: 'https://cursor.sh',
        isFree: false,
        developer: 'Anysphere',
        needVPN: false,
        videoTutorial: 'https://www.youtube.com/watch?v=example3',
        promptTemplate: `请帮我[功能描述]：
编程语言：[Python/JavaScript/Java等]
框架/库：[如React、Django等]
具体要求：
1. [需求1]
2. [需求2]
3. [需求3]
代码风格：[遵循特定规范，如PEP8]`,
        bestPractices: [
          '明确指定编程语言和框架，让AI生成更准确的代码',
          '提供具体的功能需求，避免模糊描述',
          '使用@符号引用相关文件，提供上下文',
          '分步骤实现复杂功能，先实现核心逻辑再优化',
          '生成的代码要经过测试，不要直接用于生产环境'
        ],
        description: 'Cursor是专为开发者设计的AI代码编辑器，提供智能补全、代码生成和重构功能。'
      },
      {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        rank: 2,
        platformUrl: 'https://github.com/features/copilot',
        isFree: false,
        developer: 'GitHub',
        needVPN: false,
        videoTutorial: 'https://www.youtube.com/watch?v=example4',
        promptTemplate: `实现以下功能：
函数名：[函数名]
参数：[参数列表]
返回值：[返回类型]
功能描述：[详细描述]
示例用法：[提供示例]`,
        bestPractices: [
          '编写清晰的注释，Copilot会根据注释生成代码',
          '提供函数签名和类型提示，帮助AI理解需求',
          '接受建议后要仔细审查，确保代码符合预期',
          '使用Tab接受建议，Esc拒绝建议',
          '在复杂场景下，可以分多次生成，逐步完善'
        ],
        description: 'GitHub Copilot是GitHub推出的AI编程助手，可以实时提供代码建议和补全。'
      },
      {
        id: 'codeium',
        name: 'Codeium',
        rank: 3,
        platformUrl: 'https://codeium.com',
        isFree: true,
        developer: 'Codeium',
        needVPN: false,
        videoTutorial: 'https://www.youtube.com/watch?v=example5',
        promptTemplate: `生成[功能]的代码：
语言：[编程语言]
需求：[功能描述]
约束条件：[性能、安全等要求]
测试用例：[如有]`,
        bestPractices: [
          'Codeium免费版功能强大，适合个人开发者',
          '提供详细的上下文信息，包括相关代码片段',
          '利用聊天功能进行代码解释和优化建议',
          '定期更新插件，获得最新功能',
          '对于复杂功能，可以先用自然语言描述，再逐步细化'
        ],
        description: 'Codeium提供免费的AI代码补全和生成功能，支持多种编程语言和IDE。'
      }
    ]
  },
  {
    id: 'image-generation',
    name: '图片生成',
    description: '使用AI生成高质量图片，支持多种风格和主题，适用于设计、营销、内容创作等场景',
    products: [
      {
        id: 'midjourney',
        name: 'Midjourney',
        rank: 1,
        platformUrl: 'https://www.midjourney.com',
        isFree: false,
        developer: 'Midjourney Inc.',
        needVPN: true,
        videoTutorial: 'https://www.youtube.com/watch?v=example6',
        promptTemplate: `[主体描述], [风格], [细节], [色彩], [构图], [氛围]
例如：一只可爱的猫咪坐在窗台上, 水彩画风格, 细腻的笔触, 温暖的色调, 居中构图, 宁静的氛围, --ar 16:9, --v 6`,
        bestPractices: [
          '使用具体的描述词，避免模糊表达',
          '学习Midjourney的参数，如--ar（宽高比）、--v（版本）等',
          '使用风格关键词，如"photorealistic"、"watercolor"等',
          '通过迭代优化，使用V（变化）和U（放大）按钮',
          '保存喜欢的提示词模板，方便重复使用'
        ],
        description: 'Midjourney是顶级的AI图像生成工具，以艺术性和细节丰富著称，适合创意设计。'
      },
      {
        id: 'dall-e',
        name: 'DALL-E 3',
        rank: 2,
        platformUrl: 'https://openai.com/dall-e-3',
        isFree: false,
        developer: 'OpenAI',
        needVPN: true,
        videoTutorial: 'https://www.youtube.com/watch?v=example7',
        promptTemplate: `生成一张图片，描述：[详细描述主体、场景、风格、色彩、情绪等]
例如：一只橘色的猫咪坐在阳光明媚的窗台上，背景是模糊的绿色植物，温暖的自然光线，写实风格，温馨的氛围`,
        bestPractices: [
          'DALL-E 3理解自然语言能力强，可以用完整句子描述',
          '描述越详细，生成效果越好',
          '可以指定艺术风格，如"印象派"、"超现实主义"等',
          '利用ChatGPT Plus集成，可以对话式优化提示词',
          '注意版权问题，商业使用需谨慎'
        ],
        description: 'DALL-E 3是OpenAI开发的AI图像生成工具，以理解自然语言和生成高质量图像著称。'
      },
      {
        id: 'stable-diffusion',
        name: 'Stable Diffusion',
        rank: 3,
        platformUrl: 'https://stability.ai',
        isFree: true,
        developer: 'Stability AI',
        needVPN: false,
        videoTutorial: 'https://www.youtube.com/watch?v=example8',
        promptTemplate: `(masterpiece, best quality), [主体], [风格], [细节], [色彩], [构图], [负面提示词]
例如：(masterpiece, best quality), a beautiful sunset over mountains, photorealistic, detailed, warm colors, wide angle, --negative: blurry, low quality`,
        bestPractices: [
          '使用权重符号，如()增加权重，[]降低权重',
          '学习负面提示词，排除不想要的元素',
          '可以本地部署，完全免费且无限制',
          '尝试不同的采样方法和步数，找到最佳参数',
          '使用ControlNet等插件，实现更精确的控制'
        ],
        description: 'Stable Diffusion是开源的AI图像生成模型，可以本地部署，完全免费且功能强大。'
      }
    ]
  },
  {
    id: 'writing-assistant',
    name: '写作助手',
    description: 'AI辅助写作，包括文章创作、邮件撰写、文案优化、翻译等功能',
    products: [
      {
        id: 'claude',
        name: 'Claude',
        rank: 1,
        platformUrl: 'https://claude.ai',
        isFree: true,
        developer: 'Anthropic',
        needVPN: true,
        videoTutorial: 'https://www.youtube.com/watch?v=example9',
        promptTemplate: `请帮我写一篇关于[主题]的文章：
- 文章类型：[博客/报告/邮件/故事等]
- 目标受众：[读者群体]
- 字数要求：[X字]
- 写作风格：[正式/轻松/专业等]
- 关键要点：[列出需要包含的内容]
- 特殊要求：[如有]`,
        bestPractices: [
          '明确文章类型和目标受众，让AI生成更合适的内容',
          '提供详细的要点和结构要求',
          '分段落生成，每段可以单独优化',
          '利用Claude的长上下文能力，处理长文档',
          '生成后要人工审核和编辑，确保准确性和原创性'
        ],
        description: 'Claude是Anthropic开发的AI助手，擅长长文本处理和写作任务，支持超长上下文。'
      },
      {
        id: 'notion-ai',
        name: 'Notion AI',
        rank: 2,
        platformUrl: 'https://www.notion.so/product/ai',
        isFree: false,
        developer: 'Notion',
        needVPN: false,
        videoTutorial: 'https://www.youtube.com/watch?v=example10',
        promptTemplate: `在Notion中使用AI写作：
- 选择文本后按空格键触发AI
- 或使用"/ai"命令
- 描述需求：[具体说明要写什么]
- 可以要求：续写、改写、总结、翻译等`,
        bestPractices: [
          'Notion AI与文档编辑无缝集成，适合在Notion中工作',
          '可以选中文本后让AI改写或优化',
          '利用AI总结功能，快速提取要点',
          '使用模板功能，快速生成标准文档',
          '结合Notion的数据库功能，批量处理内容'
        ],
        description: 'Notion AI集成在Notion笔记应用中，提供写作、总结、翻译等功能，工作流无缝。'
      },
      {
        id: 'grammarly',
        name: 'Grammarly',
        rank: 3,
        platformUrl: 'https://www.grammarly.com',
        isFree: true,
        developer: 'Grammarly',
        needVPN: false,
        videoTutorial: 'https://www.youtube.com/watch?v=example11',
        promptTemplate: `使用Grammarly优化文本：
- 安装浏览器插件或桌面应用
- 在任意文本框中写作
- AI会自动检测语法、拼写、风格问题
- 点击建议进行修改`,
        bestPractices: [
          'Grammarly主要优化现有文本，不是生成新内容',
          '设置写作目标（正式/非正式、受众等）',
          '查看详细解释，学习语法规则',
          '使用高级功能检查抄袭和语气',
          '在不同平台（邮件、文档、社交媒体）都可用'
        ],
        description: 'Grammarly是专业的写作助手，专注于语法检查、风格优化和拼写纠正。'
      }
    ]
  },
  {
    id: 'video-editing',
    name: '视频编辑',
    description: 'AI辅助视频剪辑，包括自动剪辑、字幕生成、特效添加、视频优化等功能',
    products: [
      {
        id: 'runway',
        name: 'Runway',
        rank: 1,
        platformUrl: 'https://runwayml.com',
        isFree: true,
        developer: 'Runway',
        needVPN: true,
        videoTutorial: 'https://www.youtube.com/watch?v=example12',
        promptTemplate: `使用Runway进行视频编辑：
- 上传视频或使用AI生成
- 描述编辑需求：[如"去除背景"、"添加字幕"、"调整速度"等]
- 选择AI工具：[绿幕、运动追踪、风格转换等]
- 调整参数并导出`,
        bestPractices: [
          'Runway提供多种AI视频工具，根据需求选择',
          '使用Gen-2可以文本生成视频，非常强大',
          '绿幕功能可以轻松去除或替换背景',
          '运动追踪可以精确跟踪物体',
          '免费版有使用限制，合理规划使用量'
        ],
        description: 'Runway是专业的AI视频编辑平台，提供视频生成、编辑、特效等多种功能。'
      },
      {
        id: 'capcut',
        name: '剪映 (CapCut)',
        rank: 2,
        platformUrl: 'https://www.capcut.com',
        isFree: true,
        developer: '字节跳动',
        needVPN: false,
        videoTutorial: 'https://www.youtube.com/watch?v=example13',
        promptTemplate: `使用剪映AI功能：
- 智能字幕：自动识别语音生成字幕
- 一键成片：选择素材，AI自动剪辑
- 智能配音：文本转语音
- 描述需求：[具体说明要实现的视频效果]`,
        bestPractices: [
          '剪映完全免费，功能强大，适合中文用户',
          '智能字幕准确率高，支持多语言',
          '一键成片功能适合快速制作短视频',
          '利用模板库快速开始，然后自定义',
          '导出时注意选择合适的分辨率和格式'
        ],
        description: '剪映是字节跳动开发的免费视频编辑应用，AI功能丰富，特别适合短视频制作。'
      },
      {
        id: 'descript',
        name: 'Descript',
        rank: 3,
        platformUrl: 'https://www.descript.com',
        isFree: true,
        developer: 'Descript',
        needVPN: true,
        videoTutorial: 'https://www.youtube.com/watch?v=example14',
        promptTemplate: `使用Descript编辑视频：
- 上传视频，自动生成文字稿
- 编辑文字稿即可编辑视频（革命性功能）
- 使用AI功能：[去除"嗯"、"啊"等语气词]、[自动生成字幕]、[文本转语音]`,
        bestPractices: [
          'Descript的核心是"编辑文字即编辑视频"',
          '自动去除语气词功能非常实用',
          '多轨编辑功能强大，适合复杂项目',
          'AI语音克隆功能可以修复音频',
          '协作功能适合团队使用'
        ],
        description: 'Descript提供革命性的视频编辑体验，通过编辑文字稿来编辑视频，大大提升效率。'
      }
    ]
  }
]

export function getSceneById(sceneId: string): Scene | undefined {
  return mockScenes.find(scene => scene.id === sceneId)
}

export function searchScenes(keyword: string): Scene[] {
  const lowerKeyword = keyword.toLowerCase()
  return mockScenes.filter(
    scene =>
      scene.name.toLowerCase().includes(lowerKeyword) ||
      scene.description.toLowerCase().includes(lowerKeyword) ||
      scene.products.some(p => p.name.toLowerCase().includes(lowerKeyword))
  )
}
