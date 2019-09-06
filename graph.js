const datapoints = [150, 75, 290, 310, 270, 414, 90, 220];
const words = ["12AM", "3AM", "6AM", "9AM", "12PM", "3PM", "6PM", "9PM"];

const svgWidth = 510, svgHeight = 250, barPadding = 8;
const barWidth = (svgWidth / datapoints.length);

const svg = d3.select('#hour-trades')
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "bar-chart");

const yScale = d3.scaleLinear()
    .domain([0, d3.max(datapoints)])
    .range([350, 0]);


const y_axis = d3.axisLeft()
    .scale(yScale)

const x_axis = d3.axisBottom()


svg.append("g")
    .attr("transform", "translate(30, 10)")
    .call(y_axis);





const barGraph = svg.selectAll("rect")
    .data(datapoints)
    .enter()
    .append("rect")
    .attr("y", function (d) {
        return svgHeight - (d3.scaleLinear()
            .domain([0, d3.max(datapoints)])
            .range([0, 300])(d))
    })
    .attr("height", function (d) {
        return d;
    })
    .attr("transform", "translate(10, 100)")
    .attr("width", barWidth - barPadding - 10)
    .attr("transform", function (d, i) {
        const translate = [(barWidth-7) * i + 39, 0];
        return "translate(" + translate + ")";
    })
    .attr("class", "bar-data")

