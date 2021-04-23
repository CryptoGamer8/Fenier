import React from 'react'
import SingleReview from './single_review'

class ListReview extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            reviews : [],
            id: props.id
        }
    }

    componentDidMount() {
        fetch("http://localhost:8000/reviews/movies/id="+this.state.id, {
            method: 'GET',
            headers: {
          'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(res=> {
            this.setState({
                reviews: res
            })
        }
            )
        .catch(err=>console.log(err))
    }

    render() {
        const items = []
        for( const [index, value] of this.state.reviews.entries()){
            items.push(<SingleReview review={value}/>)
        }
        return <div>
            {items}
        </div>
    }
}

export default ListReview;