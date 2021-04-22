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
        return <div style={{width: '60vw', margin: '0 auto'}}>
            {/* <video src={info.movie_url} controls /> */}
            <iframe width="560" height="315" src={info.movie_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <img src={info.img_url }  alt=""/>
            <p>name: {info.name}</p>
            <p>date: {info.year}</p>
            <p>rates: {info.rates}</p>
            <p>desc: {info.outline}</p>
        </div>
    }
}