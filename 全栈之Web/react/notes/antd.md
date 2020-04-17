项目中引入[antd](https://ant.design/index-cn)

```
yarn add antd
```

配置自动按需antd组件、css样式
* 执行以下命令，将react中隐藏的自动化信息暴露出来
```
yarn eject
```
* 安装[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)插件
* 在package.json文件中配置
```
 "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": "css"
        }
      ]
    ]
  }
```