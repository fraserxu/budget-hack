var d3 = require('d3')

module.exports = function (target) {
  console.log('target', target)

  var data = [4, 8, 15, 16, 23, 42];

  var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 970]);

  d3.select(target)
    .selectAll("div")
      .data(data)
    .enter().append("div")
      .style("width", function(d) { return x(d) + "px"; })
      .text(function(d) { return d; });
}
