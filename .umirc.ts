import path from 'path';
import { IConfig } from '@umijs/core';
import { defineConfig } from 'dumi';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

const config: IConfig = {
  title: 'DripTable',
  favicon: 'https://img13.360buyimg.com/imagetools/jfs/t1/204416/31/13736/8631/617f8334E9ae79a1c/5b96dfdce922e5fb.png',
  logo: 'https://img11.360buyimg.com/imagetools/jfs/t1/156025/11/22552/175523/617fb164E678b9642/6b8c55c5079b9819.jpg',
  outputPath: 'docs-dist',
  hash: true,
  dynamicImport: {
    loading: '/docs/Loading.js',
  },
  locales: [['zh-CN', '中文']],
  ignoreMomentLocale: false,
  navs: [
    {
      title: '渲染器',
      path: '/drip-table',
      children: [
        { title: '使用指南', path: '/drip-table' },
        { title: '常见问题', path: '/drip-table/faq' },
        { title: '案例展示', path: '/drip-table/sample' },
        { title: '更新日志', path: '/drip-table/changelog' },
      ],
    },
    {
      title: '生成器',
      path: '/drip-table-generator',
      children: [
        { title: '使用指南', path: '/drip-table-generator' },
        { title: '常见问题', path: '/drip-table-generator/faq' },
        { title: '案例展示', path: '/drip-table-generator/preview' },
        { title: '更新日志', path: '/drip-table-generator/changelog' },
      ],
    },
    {
      title: 'DEMO',
      path: '/demo'
    },
    {
      title: '讨论组',
      path: 'https://github.com/JDFED/drip-table/discussions'
    },
    {
      title: '',
      path: 'https://github.com/JDFED/drip-table',
    },
  ],
  menus: {
    '/drip-table': [
      {
        title: '指南',
        path: '/drip-table/guide',
        children: [
          '/drip-table/guide/index.md',
          '/drip-table/guide/fast-start.md',
          '/drip-table/guide/basic-demo.md',
        ],
      },
      {
        title: '功能',
        path: '/drip-table/functions',
        children: [
          '/drip-table/functions/index.md',
          '/drip-table/functions/refs.md',
          '/drip-table/functions/event',
          '/drip-table/functions/api.md',
        ],
      },
      {
        title: '常见问题',
        path: '/drip-table/faq',
      },
      {
        title: '案例展示',
        path: '/drip-table/sample',
        children: [],
      },
      {
        title: '更新日志',
        path: '/drip-table/changelog',
        children: [],
      },
    ],
    '/drip-table-generator': [
      {
        title: '使用指南',
        path: '/drip-table-generator/guide',
        children: [
          '/drip-table-generator/guide/index.md',
          '/drip-table-generator/guide/fast-start.md',
        ],
      },
      {
        title: '使用教程',
        path: '/drip-table-generator/functions',
        children: [
          '/drip-table-generator/functions/index.md',
          '/drip-table-generator/functions/usage-pro.md',
          '/drip-table-generator/functions/api.md',
        ],
      },
      {
        title: '常见问题',
        path: '/drip-table-generator/faq',
      },
      {
        title: '案例展示',
        path: '/drip-table-generator/preview',
      },
      {
        title: '更新日志',
        path: '/drip-table-generator/changelog',
        children: [],
      },
    ],
  },
  mode: 'site',
  esbuild: {},
  publicPath: '/',
  exportStatic: {},
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: true,
      },
      'antd',
    ],
    [
      'import',
      {
        libraryName: '@alifd/next',
        libraryDirectory: 'lib',
      },
      '@alifd/next',
    ],
  ],
  chainWebpack(config, { webpack }) {
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          maxSize: 0,
          minChunks: 2,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '_',
          automaticNameMaxLength: 30,
          name: true,
          cacheGroups: {
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom|react-redux|react-router|redux|antd)[\\/]/,
              name: "react.vendor",
            },
            utils: {
              test: /[\\/]node_modules[\\/](lodash|moment|moment-timezone)[\\/]/,
              name: "utils.vendor",
            },
            vendor: {
              test: /[\\/]node_modules[\\/](!lodash)(!moment)(!moment-timezone)[\\/]/,
              name: "vendor",
              priority: 0,
            },
            default: {
              minChunks: 2,
              priority: -10,
              reuseExistingChunk: true,
            },
          },
        },
      },
    });
    config.plugin('monaco-editor').use(MonacoWebpackPlugin);
  },
  alias: {
    'drip-table': path.resolve(__dirname, './packages/drip-table/dist'),
    'drip-table-driver-antd': path.resolve(__dirname, './packages/drip-table-driver-antd/dist'),
    'drip-table-generator': path.resolve(__dirname, './packages/drip-table-generator/dist'),
  },
  // more config: https://d.umijs.org/config
  styles: [
    `.__dumi-default-navbar-logo { width:146px !important; color: transparent !important; }
    .__dumi-default-layout-hero,
    .__dumi-default-layout-toc li a.active::before,
    .__dumi-default-menu-inner ul li a::before,
    .__dumi-default-menu-inner ul li > span::before,
    .__dumi-default-navbar nav > span > a.active::after,
    .__dumi-default-menu-list > li > a::after
    { background-image: linear-gradient( 90deg, #00C6FF 0%, #0072FF 100% );}`,
    '.__dumi-default-layout-hero h1 { color: #fff !important; }',
    '.__dumi-default-layout-hero h1 + div .markdown { color: #fff !important; }',
    '.__dumi-default-layout-hero button { border: 1px solid #fff !important; color: #fff !important; }',
    '.__dumi-default-layout-hero a:last-child button { background: #fff !important; color: #2b64ff !important; }',
    `.__dumi-default-navbar nav a:hover,
    .__dumi-default-navbar a.active,
    .__dumi-default-menu-inner ul li,
    .__dumi-default-layout-toc li a:hover,
    ul[role='slug-list'] li > a.active,
    .__dumi-default-menu-inner ul li a:hover,
    .__dumi-default-menu-inner ul li > span:hover,
    .__dumi-default-menu-inner ul li a.active,
    .__dumi-default-menu-inner ul li > span.active,
    .__dumi-default-layout-footer-meta > span:last-child::before
    { color: #2b64ff !important; }`,
    '.__dumi-default-menu-list > li > a.active { background: linear-gradient(to left, #f8faff, rgb(248 255 253 / 0%)); !important; }',
    '.__dumi-default-layout-content { max-width:100% !important; }',
    '.__dumi-default-layout[data-route="/"] .__dumi-default-layout-footer-meta { display: none; }',
    // navbar customization
    '.__dumi-default-navbar nav > :nth-child(6) { position: relative; margin-left: 40px; display: inline-block; color: #454d64; height: 64px; cursor: pointer; font-size: 14px; line-height: 64px; text-decoration: none; letter-spacing: 0; background-image: url("https://img14.360buyimg.com/imagetools/jfs/t1/220852/40/8646/5883/61c2dd7aE04a55d46/e930932b7dee46b0.png"); background-size: 100%; background-repeat: no-repeat; background-position-x: center; background-position-y: center; }',
    '.__dumi-default-navbar nav > :nth-child(6) a { display: inline-block; width: 30px; }',
    '.__dumi-default-navbar nav > :nth-child(6) > a > svg, .__dumi-default-dark { display: none; }',
    '.__dumi-default-navbar { padding: 0 0 0 58px; }',
  ],
};

export default defineConfig(config);
