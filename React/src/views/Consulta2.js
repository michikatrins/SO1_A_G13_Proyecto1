import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;





class Consulta2 extends Component {
    constructor(){
        super();
        this.state = {
          archivo: [],
          parseado: []
        };
      } 

    componentDidMount() {
        fetch("http://34.69.47.240:80/data")
          .then((response) => response.json())
          .then((datos) => {
            console.log(datos);
            this.setState({archivo:datos});
          })
      }
	render() {
        var regiones={
            Jalapa:0,
            Suchitepequez:0
        };
        const { archivo } = this.state;
        console.log(archivo);
        for(var i=0;i<archivo.length;i++){
            if(archivo[i].location == "Jalapa"){
                regiones["Jalapa"]+=1;
            }
            else if(archivo[i].location == "Suchitepequez"){
                regiones["Suchitepequez"]+=1;
            }
            
        }
        console.log(regiones);

        
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Gráfico circular del porcentaje de casos infectados por infectedType."
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints:  [
					{ y: 18, label: "Direct" },
					{ y: 49, label: "Organic Search" },
					{ y: 9, label: "Paid Search" },
					{ y: 5, label: "Referral" },
					{ y: 19, label: "Social" }
				]
			}]
		}
		
		return (
		<div>
			<h1>Grupo_13</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default Consulta2;