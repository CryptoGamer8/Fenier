import React from 'react'
import './index.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.alist = [
            {
                label: 'Movie Website',
                link: 'movie'
            }
        ]
    }

    render() {
        return (<div className="header">
            <div className="header-l">
                {
                    this.alist.map(item => <div data-id={item.link} onClick={(e) => this.scrollTo(e)} key={item.label}>{item.label}</div>)
                }
            </div>
            <div className="header-r">
                <input type="text" className="search" placeholder="Search" />
                <button className="btn btn-outline-success">Search</button>
                <button className="btn btn-outline-primary ">Sign in</button>
                <button className="btn  btn-outline-primary ">Explore</button>
            </div>
        </div >)
    }
}