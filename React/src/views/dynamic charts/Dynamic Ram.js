import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dps = [{x: 1, y: 10}, {x: 2, y: 13}, {x: 3, y: 18}, {x: 4, y: 20}, {x: 5, y: 17},{x: 6, y: 10}, {x: 7, y: 13}, {x: 8, y: 18}, {x: 9, y: 20}, {x: 10, y: 17}];   //dataPoints.
var xVal = dps.length + 1;
var yVal = 15;
var updateInterval = 1000;

class DynamicRam extends Component {
	
	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);
	}
	
    state = {
        contacts: []
    };

	// componentDidMount() {
	// 	setInterval(this.updateChart, updateInterval);
	// }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }

	updateChart() {
		yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
		dps.push({x: xVal,y: yVal});
		xVal++;
		if (dps.length >  10 ) {
			dps.shift();
		}
		this.chart.render();
	}
	
	render() {
		const options = {
			title :{
				text: "RAM"
			},
			data: [{
				type: "line",
				dataPoints : dps
			}]
		}
		
        console.log(this.state.value);

		return (
		<div>
            
			<h1>CONSUMO DE MEMORIA</h1>
            
			{/* <CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/> */}
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default DynamicRam;