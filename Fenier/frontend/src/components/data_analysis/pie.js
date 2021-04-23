import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {
	constructor(props){
        super(props)
        this.state = {
            genres:[
				{id: 28,name: "Action", total_num: 0},
				{id: 12,name: "Adventure", total_num: 0},
				//{id: 16,name: "Animation", total_num: 0},
				//{id: 35,name: "Comedy", total_num: 0},
				{id: 80,name: "Crime", total_num: 0},
				//{id: 99,name: "Documentary", total_num: 0},
				//{id: 18,name: "Drama", total_num: 0},
				//{id: 10751,name: "Family", total_num: 0},
				//{id: 14,name: "Fantasy", total_num: 0},
				{id: 36,name: "History", total_num: 0},
				//{id: 27,name: "Horror", total_num: 0},
				//{id: 10402,name: "Music", total_num: 0},
				//{id: 9648,name: "Mystery", total_num: 0},
				//{id: 10749,name: "Romance", total_num: 0},
				//{id: 878,name: "Science Fiction", total_num: 0},
				//{id: 10770,name: "TV Movie", total_num: 0},
				{id: 53,name: "Thriller", total_num: 0},
				{id: 10752,name: "War", total_num: 0},
				//{id: 37,name: "Western", total_num: 0}
			],
			//year : 2014,
			apiKey : "002f58f23a005b82c32d167ba7872e11",
			dataPoints: [
				{label: "Action", y: 0},
				{label: "Adventure", y: 0},
				//{label: "Animation", y: 0},
				//{label: "Comedy", y: 0},
				{label: "Crime", y: 0},
				//{label: "Documentary", y: 0},
				//{label: "Drama", y: 0},
				//{label: "Family", y: 0},
				//{label: "Fantasy", y: 0},
				{label: "History", y: 0},
				//{label: "Horror", y: 0},
				//{label: "Music", y: 0},
				//{label: "Mystery", y: 0},
				//{label: "Romance", y: 0},
				//{label: "Science Fiction", y: 0},
				//{label: "TV Movie", y: 0},
				{label: "Thriller", y: 0},
				{label: "War", y: 0},
				//{label: "Western", y: 0}
			]
            // initialize state
        }
		this.updateChart = this.updateChart.bind(this);

    }

	updateChart() {
		this.discoverMovieByYear(this.state.year)
		var chart = this.chart;
		chart.render();
	}

	discoverMovieByYear = year => {
		let geners = this.state.genres
		let dataPoints = this.state.dataPoints
		for (let index = 0; index < this.state.genres.length; index++) {
			let url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.state.apiKey}&with_genres=${this.state.genres[index].id}&with_cast=500`
			fetch(url).then(res => res.json())
			.then(res => {
				geners[index].total_num = res.total_results
				dataPoints[index].label = geners[index].name
				dataPoints[index].y = res.total_results
				}
			)
			.catch (err => console.log(err))
		}
		this.setState.genres = geners
		this.setState.dataPoints = dataPoints
	}

	
    componentDidMount(){
		setInterval(this.updateChart, 300);
		// console.log(this.state.dataPoints)
		// for (let index = 0; index < this.state.genres.length; index++) {
		// 	fetch(https://api.themoviedb.org/3/search/movie?api_key={002f58f23a005b82c32d167ba7872e11}&language=en-US&query=Sony&page=1&include_adult=false)
			
		// }
        // fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=002f58f23a005b82c32d167ba7872e11")
        // .then(res => res.json())
        // .then(res => {
        //     console.log(res)
        //    this.setState({
        //        idNum: res.genres[0].id
        //        // read json data
        //    })
        //    console.log(this.state.id)
        // })
        // .catch (err => console.log(err))
    }

    
	render() {
        // define a variable to get state
		const options = {
            exportEnabled: true,
			animationEnabled: true,
			//theme: "light2",
			title:{
				text: "Movie Genres of Tom Cruise"
			},
			
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}",
				dataPoints: this.state.dataPoints
			}]
			
		}
		console.log("rendering")
		console.log(this.setState.dataPoints)
		
		return (
		<div>
			
			<CanvasJSChart options = {options}
					 onRef={ref => this.chart = ref}
				/>
            <p>{this.state.year}</p>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default PieChart;