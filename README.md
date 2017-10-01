# webpack-plugin
webpack-plugin for simply use 

这是学习webpack的时候写的一个简单的plugin，用来学习webpack
### 主要功能

将打包生成的`js`文件注入`html`文件内，实现简单的`html-webpack-plugin`的功能

const Html_plugin=require('./plugin/plugin.js')

plugins:[new Html_plugin()]