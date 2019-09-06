var dataset = [
    {count: 50 },
    {count: 50 },
];

var width = 360;
var height = 270;
var radius = Math.min(width, height) / 2;
var donutWidth = 30;                            


var svg2 = d3.select('#chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) +
        ',' + (height / 2) + ')');

var arc = d3.arc()
    .innerRadius(radius - donutWidth)        
    .outerRadius(radius);

var pie = d3.pie()
    .value(function (d) { return d.count; })
    .sort(null);

var path = svg2.selectAll('path')
    .data(pie(dataset))
    .enter()
    .append('path')
    .attr('d', arc)