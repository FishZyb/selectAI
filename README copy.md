# 选AI - AI产品选择平台

一个帮助用户在不同垂直业务场景下选择最适合AI工具的评测和推荐平台。

## 产品概述

选AI是一个专业的AI产品评测和推荐平台，旨在帮助普通用户在不同垂直业务场景下，找到最合适、最强大的AI工具。我们通过科学的评测方法，展示不同AI能力的上下限范围和边界，让您清楚了解每个AI产品的优势和适用场景，同时提供详细的使用教程和Prompt模板。

## 功能特性

### 首页
- **搜索功能**：中心搜索框，支持搜索业务场景（如"PPT制作"、"代码生成"等）
- **实时搜索建议**：输入关键词时显示匹配的场景结果
- **现代化UI设计**：模仿FlagEval风格，采用浅蓝色和白色配色方案
- **3D装饰图形**：右侧展示动态的3D装饰效果

### 场景详情页
每个场景详情页展示该场景下的TOP3 AI产品，包括：
- **产品排名**：清晰的排名标识
- **基本信息**：平台链接、是否免费、开发商、是否需要VPN
- **视频教程**：使用视频教程链接
- **Prompt模板**：可直接复制使用的Prompt模板
- **最佳实践**：详细的使用技巧和建议

## 当前Mock数据场景

1. **PPT制作** - Gamma, Beautiful.ai, Tome
2. **代码生成** - Cursor, GitHub Copilot, Codeium
3. **图片生成** - Midjourney, DALL-E 3, Stable Diffusion
4. **写作助手** - Claude, Notion AI, Grammarly
5. **视频编辑** - Runway, 剪映, Descript

## 技术栈

- **React 18** - UI框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **React Router** - 路由管理
- **CSS3** - 样式和动画

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看应用

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 项目结构

```
├── src/
│   ├── pages/
│   │   ├── Home.tsx          # 首页组件
│   │   ├── Home.css          # 首页样式
│   │   ├── SceneDetail.tsx   # 场景详情页组件
│   │   └── SceneDetail.css   # 场景详情页样式
│   ├── data/
│   │   └── mockData.ts       # Mock数据
│   ├── App.tsx               # 主应用组件
│   ├── main.tsx              # 入口文件
│   └── index.css             # 全局样式
├── index.html                # HTML模板
├── package.json              # 项目配置
├── tsconfig.json             # TypeScript配置
└── vite.config.ts            # Vite配置
```

## 使用说明

1. **搜索场景**：在首页搜索框输入业务场景关键词（如"PPT制作"）
2. **查看结果**：点击搜索结果或直接搜索，跳转到场景详情页
3. **了解产品**：在详情页查看TOP3推荐产品的详细信息
4. **使用Prompt**：复制Prompt模板，根据需求修改后使用
5. **学习实践**：参考最佳实践部分，提升使用效果

## 扩展Mock数据

在 `src/data/mockData.ts` 文件中可以添加更多场景和产品：

```typescript
{
  id: 'new-scene',
  name: '新场景',
  description: '场景描述',
  products: [
    {
      id: 'product-id',
      name: '产品名称',
      rank: 1,
      platformUrl: 'https://example.com',
      isFree: true,
      developer: '开发商',
      needVPN: false,
      promptTemplate: 'Prompt模板',
      bestPractices: ['实践1', '实践2'],
      description: '产品描述'
    }
  ]
}
```

## 未来计划

- [ ] 添加更多业务场景
- [ ] 实现用户评价和评分系统
- [ ] 添加AI产品对比功能
- [ ] 实现收藏和分享功能
- [ ] 添加更多交互式教程
- [ ] 支持多语言

## 许可证

MIT
