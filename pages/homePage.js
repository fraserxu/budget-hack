var yo = require('yo-yo')
var d3 = require('d3')
var csjs = require('csjs')
var auto = require('autocomplete-element')
var onload = require('on-load')

var Header = require('../components/header')
var Footer = require('../components/footer')

function list (data) {
  return yo`<li class="${styles.list}">
    <a href="${data['Data Source URL']}">${data['Data Title']}</a>
    <span>${data['Release Date ']}</span>
  </li>`
}

module.exports = function homePage (params, done) {
  d3.csv('./data/dataset.csv', function (err, data) {
    if (err) return done(err)

    // var titles = data.map(function (d) {
    //   return d['Data Title']
    // })

    // auto(autoInput, function (c) {
    //   if (!autoInput.value.length) return c.suggest([])
    //   var matches = titles.filter(function (m) {
    //     return lc(m.slice(0, autoInput.value.length)) === lc(autoInput.value);
    //   })
    //   c.suggest(matches)
    // })

    // function lc (x) { return x.toLowerCase() }

    // var autoInput = document.createElement('input')
    // autoInput.setAttribute('id', 'auto-input')

    // // onload(autoInput, function () {
    // // })

    var element = yo`<div>
      ${Header()}
      <main class="${styles.main}">
        <h4>Understanding the city budget by visualizing data, providing a forum for dialogue, and sharing essential information about the budget process.</h4>
        <img src='http://openbudgetoakland.org/images/process.png' />
        <div>
          <small>
            Source: OpenSpending
          </small>
        </div>
        <ul>
          ${data.map(function (d) {
            return yo`<li class="${styles.list}">
              <a href="${d['Data Source URL']}">${d['Data Title']}</a>
              <span>${d['Release Date ']}</span>
            </li>`
          })}
        </ul>
      </main>
      ${Footer()}
    </div>`

    done(null, element)
  })
}

var styles = module.exports.styles = csjs`
  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
