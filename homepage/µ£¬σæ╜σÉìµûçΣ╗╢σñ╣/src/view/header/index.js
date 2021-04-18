import React from 'react'
import './index.css'
import { scrollAnimation } from '../../assets/js/utils'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.alist = [
            {
                label: 'Hot Movies',
                link: 'hotMovies'
            }, {
                label: 'Upcoming',
                link: 'upcoming'
            }, {
                label: 'Reviews',
                link: 'reviews'
            }, {
                label: 'More To Explore',
                link: 'moreToExplore'
            },
            {
                label: 'Contact Us',
                link: 'contactUs'
            },
        ]
    }
    scrollTo(e) {
        const currentY = document.documentElement.scrollTop || document.body.scrollTop
        const offsetTop = document.getElementById(e.target.dataset.id).offsetTop
        scrollAnimation(currentY, offsetTop)
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