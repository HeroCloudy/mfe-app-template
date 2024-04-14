# MFE 微前端子应用模板

使用 Vite 创建应用
```bash
pnpm create vue@latest 
```

```
✔ Project name: … mfe-app-template
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes
```

## 1 清理文件、初始化 Demo Page
清除目录和文件，保持最简。创建一个 Demo 页面，并配置到 router 中

## 2 sass unocss & unocss reset & iconify icon

- 安装依赖

```bash
pnpm add sass unocss @iconify/json -D
pnpm add @unocss/reset @iconify/vue
```

- uno.config.ts

- vite.config.ts

```typescript
import UnoCSS from 'unocss/vite'

plugins: [... UnoCSS()],
```

- 新建 plugins/assets.ts 文件，在该文件中导入样式资源

```typescript
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

export const installAssets = () => {}
```

- main.ts
```typescript
import { installAssets } from '@/plugins/assets'

installAssets()
```

## 3  svg 插件

安装依赖
```bash
pnpm add vite-plugin-svg-icons -D
```

配置 vite.config.ts
```typescript
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

createSvgIconsPlugin({
  iconDirs: [fileURLToPath(new URL('./src/assets/icons', import.meta.url))],
  symbolId: 'icon-[dir]-[name]'
}),
```

创建 assets/icons 目录

在 plugins/assets.ts 中引入
```typescript
import 'virtual:svg-icons-register'
```

## 4 Element Plus
```bash
pnpm add element-plus
```

plugins/element.ts
```typescript
import type { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export const installElementPlus = (app: App) => {
  app.use(ElementPlus)
}
```

## 5 自动导入插件 auto-import 和 vue-core

```bash
pnpm add unplugin-auto-import @vueuse/core -D
```

vite.config.ts
```typescript
import AutoImport from 'unplugin-auto-import/vite'

AutoImport({
  include: [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/,
    /\.vue\?vue/, // .vue
    /\.md$/ // .md
  ],
  imports: ['vue', 'vue-router', '@vueuse/core']
})
```

## 6 主题色变量配置文件

- scss 目录下创建 main.scss 和 var.scss，并在 main.scss 中引入 var
- 在main.ts 中引入 main.scss
- 在var.scss 中配置变量的值