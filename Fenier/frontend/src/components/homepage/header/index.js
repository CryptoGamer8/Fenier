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