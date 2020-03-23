const express = require('express')
const app = express()

const mongoose = require('mongoose')
const dbURL = 'mongodb://localhost:27017/chat_app'
mongoose.connection.on('connected', function() {
  console.log('mongo数据库连接成功')
})
mongoose.connect(dbURL)
const User = mongoose.model(
  'user',
  new mongoose.Schema({
    name: { type: String, require: true },
    password: { type: String, require: true }
  })
)

// User.create({ name: '张三', password: '123456' }, function(err, doc) {
//   console.log('数据插入成功', err, doc)
// })

app.get('/', function(req, res) {
  res.send('<h1>Hello, this is express!</h1>')
})

app.get('/login', function(req, res) {
  //   const json = { token: 'sahdhakhdjs', username: 'zhangsan' }
  User.find({}, function(err, doc) {
    res.send(doc)
    // console.log('从mongodb读取的用户数据为：', err, doc)
  })
})

app.get('/update', function(req, res) {
  User.update({ name: '张三' }, { $set: { password: '654321' } }, function(
    err,
    doc
  ) {
    res.send('更新张三的密码')
  })
})

app.listen(9093, function() {
  console.log('chat_app starts at port 9093')
})
