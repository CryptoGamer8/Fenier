import React from "react";

export default class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            a: 1
        }
    }
    render() {
        const info = JSON.parse(localStorage.getItem('movie'))
        console.log(info)
        return <div style={{width: '60vw', margin: '0 auto'}}>
            {/* <video src={info.movie_url} controls /> */}
            <img src={info.cast }  alt=""/>
            <p>name: {info.name}</p>
            <p>date: {info.year}</p>
            <p>rates: {info.rates}</p>
            <p>desc: {info.outline}</p>
        </div>
    }
}