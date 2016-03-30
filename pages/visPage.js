var yo = require('yo-yo')
var onload = require('on-load')

var Header = require('../components/header')
var createChart = require('../components/sankey')

module.exports = function homePage () {
  var chartContainer = document.createElement('div')
  chartContainer.setAttribute('id', 'chart')

  onload(chartContainer, function () {
    createChart('#chart')
  })

  return yo`<div>
    ${Header()}
    <main>
      visualization page
      ${chartContainer}
    </main>
  </div>`

}
