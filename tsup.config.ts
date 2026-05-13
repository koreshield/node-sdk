import { defineConfig } from 'tsup'

export default defineConfig([
  // Main build for Node.js
  {
    entry: {
      index: 'src/index.ts',
      'integrations/react': 'src/integrations/react.ts',
      'integrations/vue': 'src/integrations/vue.ts',
      'integrations/angular': 'src/integrations/angular.ts',
    },
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    minify: false,
    target: 'es2022',
    external: ['axios', 'react', 'vue', '@angular/core', 'rxjs', 'rxjs/operators'],
    treeshake: true,
  },
  // Browser-optimized build
  {
    entry: {
      'browser/index': 'src/browser/client.ts'
    },
    format: ['iife', 'esm'],
    globalName: 'KoreShield',
    dts: true,
    sourcemap: true,
    minify: true,
    target: 'es2020',
    treeshake: true,
    noExternal: [],
    platform: 'browser',
  }
])
