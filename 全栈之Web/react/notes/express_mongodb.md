# 服务器搭建

## express安装
```
yarn add express
```

## [mongodb安装](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

```
brew install mongodb-community@4.2
```
启动mogodb服务
```
brew services start mongodb-community@4.2
// 或者
mongod --config /usr/local/etc/mongod.conf --fork
```
## 使用【mongoose】访问mongodb
安装【mongoose】
```
yarn add mongoose
```
