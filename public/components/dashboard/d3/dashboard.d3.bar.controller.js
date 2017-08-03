(function() {
    'use strict'
    angular
        .module('app.dashboard')
        .controller('D3BarController', D3BarController)

    D3BarController.$inject = ['$http', '$state']

    function D3BarController($http, $state) {
        const vm = this

        vm.$onInit = $onInit;

        function $onInit() {
            const svg = d3.select('svg.d3bar'),
                margin = {
                    top: 20,
                    right: 20,
                    bottom: 30,
                    left: 80
                },
                width = +svg.attr('width') - margin.left - margin.right,
                height = +svg.attr('height') - margin.top - (margin.bottom * 2);

            let div = d3.select('body').append('div').attr('class', 'toolTip');

            const dri = {
                'calcium': {
                    'value': 1000,
                    'unit': 'mg/d'
                },
                'chromium': {
                    'value': 35,
                    'unit': 'μg/d'
                },
                'copper': {
                    'value': 900,
                    'unit': 'μg/d'
                },
                'fluoride': {
                    'value': 4,
                    'unit': 'mg/d'
                },
                'iodine': {
                    'value': 150,
                    'unit': 'μg/d'
                },
                'iron': {
                    'value': 8,
                    'unit': 'mg/d'
                },
                'magnesium': {
                    'value': 400,
                    'unit': 'mg/d'
                },
                'manganese': {
                    'value': 2.3,
                    'unit': 'mg/d'
                },
                'molybdenum': {
                    'value': 45,
                    'unit': 'μg/d'
                },
                'phosphorus': {
                    'value': 700,
                    'unit': 'mg/d'
                },
                'selenium': {
                    'value': 55,
                    'unit': 'μg/d'
                },
                'zinc': {
                    'value': 11,
                    'unit': 'mg/d'
                },
                'potassium': {
                    'value': 4.7,
                    'unit': 'g/d'
                },
                'sodium': {
                    'value': 1.5,
                    'unit': 'g/d'
                },
                'chloride': {
                    'value': 2.3,
                    'unit': 'g/d'
                }
            };

            const current = {
                'calcium': {
                    'value': 600,
                    'unit': 'mg/d'
                },
                'chromium': {
                    'value': 10,
                    'unit': 'μg/d'
                },
                'copper': {
                    'value': 200,
                    'unit': 'μg/d'
                },
                'fluoride': {
                    'value': 1,
                    'unit': 'mg/d'
                },
                'iodine': {
                    'value': 30,
                    'unit': 'μg/d'
                },
                'iron': {
                    'value': 5,
                    'unit': 'mg/d'
                },
                'magnesium': {
                    'value': 400,
                    'unit': 'mg/d'
                },
                'manganese': {
                    'value': 1.1,
                    'unit': 'mg/d'
                },
                'molybdenum': {
                    'value': 45,
                    'unit': 'μg/d'
                },
                'phosphorus': {
                    'value': 900,
                    'unit': 'mg/d'
                },
                'selenium': {
                    'value': 0,
                    'unit': 'μg/d'
                },
                'zinc': {
                    'value': 4,
                    'unit': 'mg/d'
                },
                'potassium': {
                    'value': 2.9,
                    'unit': 'g/d'
                },
                'sodium': {
                    'value': 0.4,
                    'unit': 'g/d'
                },
                'chloride': {
                    'value': 1,
                    'unit': 'g/d'
                }
            };

            let percentages = [];

            Object.keys(dri).forEach((key) => {
                percentages.push({
                    name: key,
                    value: Math.min(1, current[key].value / dri[key].value)
                });
            });

            const x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
            const y = d3.scaleLinear().rangeRound([height, 0]);

            const g = svg.append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            x.domain(Object.keys(dri).map((d) => {
                return d;
            }));
            //y.domain([0, d3.max(dri, (d) => { return d.value; console.log(d.value) })]);
            y.domain([0, 1]);

            // g.append('g')
            //     .attr('class', 'axis axis--x')
            //     .attr('transform', 'translate(0,' + height + ')')
            //     .call(d3.axisBottom(x));

            g.append('g')
                .attr('class', 'axis axis--y')
                .call(d3.axisLeft(y).ticks(10, '%'))
                .append('text')
                .attr('transform', 'rotate(-90)')
                .attr('y', 6)
                .attr('dy', '0.71em')
                .attr('text-anchor', 'end')
                .text('Frequency');

            g.append('text')
                .attr('text-anchor', 'middle') // this makes it easy to centre the text as the transform is applied to the anchor
                .attr('transform', 'translate(-' + (margin.left / 2) + ',' + (height / 2) + ')rotate(-90)') // text is drawn off the screen top left, move down and out and rotate
                .text('% DRI');

            g.append('text')
                .attr('text-anchor', 'middle') // this makes it easy to centre the text as the transform is applied to the anchor
                .attr('transform', 'translate(' + (width / 2) + ',' + (height + margin.bottom) + ')') // centre below axis
                .text('Vitamin');

            g.selectAll('.bar')
                .data(percentages)
                .enter().append('rect')
                .attr('class', 'bar')
                .attr('x', (d) => {
                    return x(d.name);
                })
                //.attr('y', (d) => { return y(d.value); })
                .attr('y', (d) => {
                    return height;
                })
                .attr('width', x.bandwidth())
                .transition()
                .duration(1000)
                .attr('y', (d) => {
                    return y(d.value);
                })
                .attr('height', (d) => {
                    return height - y(d.value);
                });

            d3.selectAll('.bar').on('mousemove', function(d) {
                div.style('left', d3.event.pageX + 10 + 'px');
                div.style('top', d3.event.pageY - 25 + 'px');
                div.style('display', 'inline-block');
                div.html((d.name) + '<br>' + (Math.round(d.value * 100)) + '% of DRI');
            });

            d3.selectAll('.bar').on('mouseout', function(d) {
                div.style('display', 'none');
            });
        }
    }

})();
