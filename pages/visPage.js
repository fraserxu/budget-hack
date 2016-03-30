var yo = require('yo-yo')
var onload = require('on-load')

var createChart = require('../components/sankey')

module.exports = function homePage () {
  var chartContainer = document.createElement('div')
  chartContainer.setAttribute('id', 'chart')

  onload(chartContainer, function () {
    createChart('#chart')
  }, function () {
    console.log('on unload...')
  })

  return yo`<div id='chart'>
    visualization page
    ${chartContainer}
  </div>`

}
