import React, { Component } from 'react'
const ReactHighcharts = require('react-highcharts')
const ReactHighchartsexporting = require('highcharts-exporting')

class Graphs extends Component {

    constructor(props) {
        super(props);

        global.Highcharts = require('highcharts');
        require('highcharts/modules/exporting')(global.Highcharts);
        global.HighchartsMore = require('highcharts-more');

        this.data = this.props.data;
    }

    render() {
        this.config = {
            chart: {
                polar: true
            },
        
            title: {
                text: 'Highcharts Polar Chart'
            },
        
            pane: {
                startAngle: 0,
                endAngle: 360
            },
        
            xAxis: {
                tickInterval: 45,
                min: 0,
                max: 360,
                labels: {
                    formatter: function () {
                        return this.value + '°';
                    }
                }
            },
        
            yAxis: {
                min: 0
            },
        
            plotOptions: {
                series: {
                    pointStart: 0,
                    pointInterval: 45
                },
                column: {
                    pointPadding: 0,
                    groupPadding: 0
                }
            },
        
            series: [{
                type: 'column',
                name: 'Column',
                data: [8, 7, 6, 5, 4, 3, 2, 1],
                pointPlacement: 'between'
            }]
        }
        return (
            <div >
                <ReactHighcharts config={this.config}></ReactHighcharts>
            </div>
        )
    }
}

export default Graphs