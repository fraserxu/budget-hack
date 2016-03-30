var yo = require('yo-yo')
var d3 = require('d3')
var auto = require('autocomplete-element')
var onload = require('on-load')

var Header = require('../components/header')

module.exports = function homePage () {
  var autoInput = document.createElement('input')
  autoInput.setAttribute('id', 'auto-input')

  onload(autoInput, function () {
    d3.csv('./data/dataset.csv', function (err, data) {
      var titles = data.map(function (d) {
        return d['Data Title']
      })

      auto(autoInput, function (c) {
        if (!autoInput.value.length) return c.suggest([])
        var matches = titles.filter(function (m) {
          return lc(m.slice(0, autoInput.value.length)) === lc(autoInput.value);
        })
        c.suggest(matches)
      })

      function lc (x) { return x.toLowerCase() }
    })
  })

  return yo`<div>
    ${Header()}
    <main>
      <h4>Understanding the city budget by visualizing data, providing a forum for dialogue, and sharing essential information about the budget process.</h4>
      <img src='http://openbudgetoakland.org/images/process.png' />
    </main>
  </div>`
}
