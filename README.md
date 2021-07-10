# setup-koa-cli
实现一个基于 nodejs 的 cli 工具，动态创建基于 koa 的代码模板

# 本地调试使用
```
npm link

命令行执行 koa-setup-cli 
```

# 技术
- nodejs
- chalk
- ejs
- execa
- inquirer

# 创建koa项目的步骤
1. 创建文件夹 -> XXX
`fs.mkdirSync('./XXX)`
2. 创建入口文件 -> index.js
`fs.writeFileSync('./XXX/index.js','index)`
3. 创建package.json
`fs.writeFileSync('./XXX/package.json','package')`
4. 安装依赖

# package.json 
```
"main": "index.js",
  "bin": "./bin/index.js",
  "type": "module",
  "files": [
    "bin",
    "package.json"
  ],
```

# npm
`npm login --registry https://registry.npmjs.org/`

`npm publish --registry https://registry.npmjs.org/`

`npm unpublish --registry https://registry.npmjs.org/ --force`