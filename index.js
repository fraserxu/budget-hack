var yo = require('yo-yo')
var createRouter = require('base-router')

var homePage = require('./pages/homePage')
var visPage = require('./pages/visPage')

var element = yo`<div></div>`
document.body.appendChild(element)

var router = createRouter({
  '/': homePage,
  '/cash-flow': visPage
}, {
  location: 'hash'
})

router.on('transition', function (route, childNode) {
  yo.update(element, childNode)
})

router.transitionTo(location.hash.slice(1) || '/')
