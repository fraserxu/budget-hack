var yo = require('yo-yo')
var csjs = require('csjs')

module.exports = function Footer () {
  return yo`<footer class="${styles.footer}">
    <div class="${styles.container}">
      <div class="${styles.description}">
        <p>Open Budget: Victoria is an open-source project by OpenVictoria to help citizens better understand Victoria's spending and budget process.</p>
      </div>
      <nav>
        <ul>
          <li class="${styles.list}"><a href='https://github.com/fraserxu/budget-hack'>Github</a></li>
          <li class="${styles.list}"><a href='#/vis'>Visualization</a></li>
        </ul>
      </nav>
    </div>
  </footer>`
}

var styles = module.exports.styles = csjs`
  .footer {
    border-top: 1px solid #eeeeee;
    padding-top: 20px;
    background-color: #fbfbfb;
    color: #777777;
    min-height: 150px;

    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 0;
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

  .description {
    padding: 15px 15px;
    line-height: 20px;
    height: 50px;
  }

  .list {
    display: inline;
  }

  .list a {
    color: #555;
  }
`
