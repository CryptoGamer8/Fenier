function SingleReview(props){
    var review = {
        id: "",
        user_name: "",
        movie_id: "",
        movie_name: "",
        rates: "",
        comments: ""
    }

    review = props.review
    
    return <div>
        <p>{review.user_name}</p>
        <p>{review.rates}</p>
        <p>{review.comments}</p>
    </div>
}

export default SingleReview;