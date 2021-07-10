#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import execa from 'execa'
import chalk from 'chalk'
import createIndexTemplate from './createIndexTemplate.js';
import createPackageTemplate from './createPackageTemplate.js'
import question from './question/index.js'
import {
    createConfig
} from './config.js';

const answer = await question()
const config = createConfig(answer)

// 创建koa项目的步骤

// 1. 创建文件夹
console.log(chalk.blue(`创建项目文件夹:${config.packageName}`))
fs.mkdirSync(getRootPath())

// 2. 创建入口文件 -> index.js
console.log(chalk.blue(`创建 index.js`))
fs.writeFileSync(getRootPath() + '/index.js', createIndexTemplate(config))

// 3. 创建package.json
console.log(chalk.blue(`创建 package.json`))
fs.writeFileSync(getRootPath() + '/package.json', createPackageTemplate(config))

// 4. 安装依赖
console.log(chalk.blue(`安装依赖`))
execa('npm install', {
    cwd: getRootPath(), // 在指定下安装
    stdio: [2, 2, 2] // 安装进度
})

function getRootPath() {
    return path.resolve(process.cwd(), config.packageName)
}