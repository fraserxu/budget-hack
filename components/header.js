var yo = require('yo-yo')
var csjs = require('csjs')

module.exports = function Header () {
  return yo`<header class="${styles.header}">
    <div class="${styles.container}">
      <div class="${styles.logo}">
        <a href='#/'>Open Budget: Victoria</a>
      </div>
      <nav>
        <ul>
          <li class="${styles.list}"><a href='#/'>Home</a></li>
          <li class="${styles.list}"><a href='#/vis'>Visualization</a></li>
        </ul>
      </nav>
    </div>
  </header>`
}

var styles = module.exports.styles = csjs`
  .header {
    min-height: 50px;
    border: 1px solid transparent;
    top: 0;
    border-width: 0 0 1px;
    background-color: #f9f9f9;
    border-color: #e8e8e8;
  }

  .container {
    width: 1170px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    padding: 15px 15px;
    font-size: 18px;
    line-height: 20px;
    height: 50px;
  }

  .logo a {
    color: #555;
    text-decoration: none;
  }

  .list {
    display: inline;
  }

  .list a {
    color: #555;
  }
`
