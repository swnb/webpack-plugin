# webpack-plugin
webpack-plugin for simply use 

这是学习webpack的时候写的一个简单的plugin，用来理解webpack
### 主要功能

将打包生成的`js`文件注入`html`文件内，实现简单的`html-webpack-plugin`的功能,模板的功能正在扩展，现在只是简单的title

```shell
    yarn add swnb-webpack-learning-plugin
```
在webpack文件里面

```javascript
    const Wlp=require('swnb-webpack-learning-plugin')
    ...
    plugins:[new Wlp({title:'swnb'})]
    ...
```

test正在写