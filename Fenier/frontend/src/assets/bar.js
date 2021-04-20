import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
 
class BarChart extends Component {
	constructor(props){
        super(props)
        this.state = {
            id: 0
            // initialize state
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/550?api_key=002f58f23a005b82c32d167ba7872e11")
        .then(res => res.json())
        .then(res => {
            console.log(res)
           this.setState({
               id: res.id
               // read json data
           })
           console.log(this.state.id)
        })
        .catch (err => console.log(err))
    }

    addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
	render() {
        // define a variable to get state
        
        const a = this.state.id

		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Most Popular Social Networking Sites"
			},
			axisX: {
				title: "Social Network",
				reversed: true,
			},
			axisY: {
				title: "Monthly Active Users",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  2200000000, label: "Facebook" },
					{ y:  1800000000, label: "YouTube" },
					{ y:  800000000, label: "Instagram" },
					{ y:  563000000, label: "Qzone" },
					{ y:  376000000, label: "Weibo" },
					{ y:  336000000, label: "Twitter" },
					{ y:  a*100000, label: "Reddit" }
				]
			}]
		}

		return (
		<div>
			<h1>React Bar Chart</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
            <p>{this.state.id}</p>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default BarChart;