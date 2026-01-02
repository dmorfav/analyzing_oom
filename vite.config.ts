/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import angular from '@analogjs/vite-plugin-angular';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      content: {
        highlighter: 'shiki',
        shikiOptions: {
          highlight: {
            theme: 'nord'
          },
          highlighter: {
            langs: [
              'json',
              'ts',
              'tsx',
              'js',
              'jsx',
              'html',
              'css',
              'angular-html',
              'angular-ts',
              'typescript',
              'python',
              'bash',
            ],
            themes: ['nord'],
            additionalLangs: ['mermaid'],
          },
        },
      }
    }),
    angular(),
    tailwindcss(),
  ]
}));
