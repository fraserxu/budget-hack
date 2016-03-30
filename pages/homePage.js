var yo = require('yo-yo')

module.exports = function homePage () {
  return yo`<div>
    <a href='#/'>Home</a>
    <a href='#/cash-flow'>Visualization</a>
  </div>`
}
