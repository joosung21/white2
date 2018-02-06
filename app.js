var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', express.static('public'))
app.use('/assets/', express.static('assets'))

app.get('/', function (req, res){res.render('index')})
app.get('/login', function (req, res){res.render('login')})
app.get('/view', function (req, res){res.render('view')})
app.get('/book', function (req, res){res.render('book')})
app.get('/confirm', function (req, res){res.render('confirm')})
app.get('/favorite', function (req, res){res.render('favorite')})
app.get('/book-list', function (req, res){res.render('book-list')})
app.get('/member', function (req, res){res.render('member')})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})