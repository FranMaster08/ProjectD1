const express = require('express')
const path = require('path');
const nunjucks = require('nunjucks')
const app = express()
app.use(express.static(path.resolve(__dirname, './public')))
app.use(express.json())
app.set('view engine')
nunjucks.configure(path.resolve(__dirname, './view'), {
    autoescape: false,
    express: app
})
app.use('/', require('./routes/index'))
module.exports = app