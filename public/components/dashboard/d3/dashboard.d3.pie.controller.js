(function() {
    'use strict'
    angular
        .module('app.dashboard')
        .controller('D3PieController', D3PieController)

    D3PieController.$inject = ['$http', '$state']

    function D3PieController($http, $state) {
        const vm = this

        vm.$onInit = $onInit;

        function $onInit() {
            var div = d3.select("body").append("div").attr("class", "toolTip");

            const dri = {
                "calcium": {
                    "value": 1000,
                    "unit": "mg/d"
                },
                "chromium": {
                    "value": 35,
                    "unit": "μg/d"
                },
                "copper": {
                    "value": 900,
                    "unit": "μg/d"
                },
                "fluoride": {
                    "value": 4,
                    "unit": "mg/d"
                },
                "iodine": {
                    "value": 150,
                    "unit": "μg/d"
                },
                "iron": {
                    "value": 8,
                    "unit": "mg/d"
                },
                "magnesium": {
                    "value": 400,
                    "unit": "mg/d"
                },
                "manganese": {
                    "value": 2.3,
                    "unit": "mg/d"
                },
                "molybdenum": {
                    "value": 45,
                    "unit": "μg/d"
                },
                "phosphorus": {
                    "value": 700,
                    "unit": "mg/d"
                },
                "selenium": {
                    "value": 55,
                    "unit": "μg/d"
                },
                "zinc": {
                    "value": 11,
                    "unit": "mg/d"
                },
                "potassium": {
                    "value": 4.7,
                    "unit": "g/d"
                },
                "sodium": {
                    "value": 1.5,
                    "unit": "g/d"
                },
                "chloride": {
                    "value": 2.3,
                    "unit": "g/d"
                }
            };

            const current = {
                "calcium": {
                    "value": 600,
                    "unit": "mg/d"
                },
                "chromium": {
                    "value": 10,
                    "unit": "μg/d"
                },
                "copper": {
                    "value": 200,
                    "unit": "μg/d"
                },
                "fluoride": {
                    "value": 1,
                    "unit": "mg/d"
                },
                "iodine": {
                    "value": 30,
                    "unit": "μg/d"
                },
                "iron": {
                    "value": 5,
                    "unit": "mg/d"
                },
                "magnesium": {
                    "value": 400,
                    "unit": "mg/d"
                },
                "manganese": {
                    "value": 1.1,
                    "unit": "mg/d"
                },
                "molybdenum": {
                    "value": 45,
                    "unit": "μg/d"
                },
                "phosphorus": {
                    "value": 900,
                    "unit": "mg/d"
                },
                "selenium": {
                    "value": 0,
                    "unit": "μg/d"
                },
                "zinc": {
                    "value": 4,
                    "unit": "mg/d"
                },
                "potassium": {
                    "value": 2.9,
                    "unit": "g/d"
                },
                "sodium": {
                    "value": 0.4,
                    "unit": "g/d"
                },
                "chloride": {
                    "value": 1,
                    "unit": "g/d"
                }
            };

            let percentages = [];

            Object.keys(dri).forEach((key) => {
                percentages.push({
                    name: key,
                    value: Math.min(1, current[key].value / dri[key].value)
                });
            });

            let average = percentages.reduce((total, current) => {
                return total + current.value;
            }, 0);

            average /= percentages.length;

            var dataset = [{
                    name: 'Calories',
                    total: 8124,
                    percent: 67.9
                },
                {
                    name: 'Carbohydrates',
                    total: 1567,
                    percent: 13.1
                },
                {
                    name: 'Proteins',
                    total: 1610,
                    percent: 13.5
                },
                {
                    name: 'Fats',
                    total: 660,
                    percent: 5.5
                }
            ];

            var width = 460,
                height = 300,
                radius = Math.min(width, height) / 2;

            var color = d3.scale.ordinal()
                .range(["red", "orange", "yellow", "green", "blue", "indigo", "purple"]);

            var arc = d3.svg.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);

            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(0)
                .endAngle(average * 2 * Math.PI)
                .value(function(d) {
                    return d.value;
                });

            var svg = d3.select("svg.d3pie").append("svg")
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            var g = svg.selectAll(".arc")
                .data(pie(percentages))
                .enter().append("g")
                .attr("class", "arc");

            g.append("path")
                .style("fill", function(d) {
                    return color(d.data.name);
                })
                .transition()
                .delay(function(d, i) {
                    return i * 100;
                })
                .duration(100)
                .attrTween('d', function(d) {
                    var i = d3.interpolate(d.startAngle + 0.001, d.endAngle);
                    return function(t) {
                        d.endAngle = i(t);
                        return arc(d)
                    }
                });

            /*g.append("text")*/
            //.attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
            //.attr("dy", ".35em")
            //.transition()
            //.duration(2000)
            //.delay(1000)
            /*.text(function(d) { return d.data.name; });*/

            d3.selectAll("path").on("mousemove", function(d) {
                div.style("left", d3.event.pageX + 10 + "px");
                div.style("top", d3.event.pageY - 25 + "px");
                div.style("display", "inline-block");
                div.html((d.data.name) + "<br>" + (Math.round(d.data.value * 100)) + "% of DRI");
            });

            d3.selectAll("path").on("mouseout", function(d) {
                div.style("display", "none");
            });

            // d3.select("body").transition().style("background-color", "#d3d3d3");
            function type(d) {
                d.total = +d.total;
                return d;
            }

        }
    }

})();
