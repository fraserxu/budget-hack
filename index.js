var yo = require('yo-yo')

function render () {
  return yo`<main>
    <article>
      <header>
        <h3>Historical and estimated consolidated cash flow statement - General Government</h3>
        <h4>Includes 2013-14 Annual Financial Report and 2015-16 Budget</h4>
      </header>
      <div id='chart'></div>
      <footer>
        <small>
          Source: Department of Treasury and Finance
        </small>
        <p>
          Notes:
          <ul>
            <li>(a) Separation payments up to 1989-90, mainly for early retirement and enhanced resignation packages to the Public Transport Corporation, are included under grants and transfer payments (to the public non financial corporations (PNFC) sector). Payments in later years were for voluntary redundancy and targeted separation packages across the general government sector and are included under 'employee entitlements'.</li>
            <li>(b) Privatisation and other abnormal cash items to the general government sector include:
              <ul>
                <li>1986-87 to 1990-91: payments received from the former Melbourne and Metropolitan Board of Works regarding the transfer of ownership of the Thomson Cardinia Dam of $35 million a year;</li>
                <li>1990-91: net proceeds from the sale of the State Bank ($1 257 million);</li>
                <li>1992 93: sale of the State Insurance Office ($140 million);</li>
                <li>1993-94: recall of capital from the Transport Accident Commission ($1 200 million), wind up of the Victorian Equity Trust ($437 million), casino licence fee ($200 million), offset by a special payment to the State Superannuation Fund ($1 399 million);</li>
                <li>1994-95: sale of Totalisator Agency Board ($609 million);</li>
                <li>1995-96: sale of electricity sector businesses ($4 641 million), 1996 97 ($4 262 million), and 1997 98 ($2 101 million) offset by a special payment to the State Superannuation Fund ($490 million); and</li>
                <li>1998-99: sale of the remainder of the electricity businesses ($361 million), gas businesses ($4 690 million), Victorian Plantations Corporation ($550 million), Aluvic ($401 million), V/Line Freight ($20 million), offset by a special payment to reduce the State's unfunded superannuation liabilities ($2 574 million).</li>
              </ul>
            </li>
            <li>(c)These items are inclusive of goods and services tax</li>
            <li>(d) 2012-13 comparative cash flows have been restated to more accurately reflect the classification of interest cash flows.</li>
            <li>(e) 2012-13 comparative cash flows have been restated to reflect the reallocation of investments sold but not yet settled.</li>
            <li>(f) From 1997-98, includes school own purpose receipts and payments which boosted sales of goods and services and other receipts by up to $500 million, but had little impact on the net cash flows because of offsetting payments. This year also saw the introduction of tax equivalent receipts from public non financial corporations and public financial corporations.</li>
            <li>(g) From 1998-99, includes a capital asset charge receipt from the PNFC sector, offset by a similar increase in grants and transfer payments.</li>
            <li>(h) Goods and services from 2007-08 onwards include other payments.</li>
            <li>(i)Includes impact of capital return from TAC of $600m in 2005-06</li>
            <li>(j)The cash flows for this item are presented net of inflows due to the high volume and short term nature of these transactions.</li>
            <li>(k) Cash flows associated with derivatives in insurance public financial corporations are included under net cash flows from investments in financial assets for liquidity management purposes. See Notes 16 and 26 for balance sheet classification.</li>
            <li>(l) Review of Cash Investments in 2012-13 has reclassified some Australian Dollar Term Deposits held in 2011-12 to Cash and Deposits.</li>
            <li>(m) Cash and cash equivalents at the end of the reporting period does not equal cash and deposits on the balance sheet. This is due to overdrafts being included in the cash flow statement.</li>
            <li>(n) Cash and deposits at beginning of reporting period in 2005-06 do not equal cash and deposits at end of reporting period in 2004-05, due to a change in definition of cash and cash equivalents under A IFRS.</li>
          </ul>
        </p>
      </footer>
    </article>
  </main>`
}

var app = render()

document.querySelector('body').appendChild(app)

require('./sankey.js')
