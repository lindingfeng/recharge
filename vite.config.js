import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import eslint from 'vite-plugin-eslint'
import legacy from '@vitejs/plugin-legacy'
import visualizer from 'rollup-plugin-visualizer'
import vitePluginImp from 'vite-plugin-imp'
// import createImportPlugin from 'vite-plugin-import'
import Components from 'unplugin-vue-components/vite'
import vitePluginImport from 'vite-plugin-babel-import'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { VantResolver, ElementUiResolver } from 'unplugin-vue-components/resolvers'

const plugins = [
  vue2(),
  eslint(),
  legacy({
    targets: ['ie >= 11'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime']
  }),
  DefineOptions(),
  /**
   * 支持vant、element-ui等
   * 构建时vant没有按需打包，暂时先用
   * vite-plugin-imp 或 vite-plugin-babel-import 加载vant
   * https://github.com/antfu/unplugin-vue-components
   */
  Components({
    resolvers: [
      // VantResolver(),
      ElementUiResolver()
    ],
    // 避免不同目录文件名一样的组件命名冲突
    directoryAsNamespace: true
  }),
  /**
   * 可按需导入vant组件（但是导入组件名不能自定义）
   * https://github.com/0ahz/vite-plugin-babel-import
   */
  vitePluginImport([
    {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style (name) {
        return `vant/es/${name}/style/index.js`
      }
    },
    // {
    //   libraryName: 'element-ui',
    //   libraryDirectory: 'lib',
    //   style (name) {
    //     return `element-ui/lib/theme-chalk/${name}.css`
    //   }
    // }
  ]),
  // vitePluginImp({
  //   libList: [
  //     {
  //       libName: 'vant',
  //       style (name) {
  //         // return `vant/es/${name}/index.css`
  //         return `vant/es/${name}/style/index.js`
  //       }
  //     },
  //     {
  //       libraryName: 'element-ui',
  //       libraryDirectory: 'lib',
  //       style (name) {
  //         return `element-ui/lib/theme-chalk/${name}.css`
  //       }
  //     }
  //   ]
  // })
]

if (process.env.REPORT_ENV) {
  plugins.push(
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  );
}

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: true,
    proxy: {
      '/common': {
        target: 'http://topuphub.top',
        changeOrigin: true,
      }
    }
  },
  build: {
    // 图片指定大小以内打包为base64格式，默认4kb（如果不需要转base64，配置为0）
    assetsInlineLimit: 0
  }
  // optimizeDeps: {
  //   entries: ['vant/es/**/*.js']
  // }
});
