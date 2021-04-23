import './single_review.css';

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
        <p className="box">  
        <p className="user">{review.user_name} :</p>
        <p className="rates">
            <a className="score">{review.rates}</a>
            /10
        </p>
        <br/><br/>
        <p className="comments">{review.comments}</p>  
        <br/>
        <br/>      
        <div class="link-top"></div>
        </p>
    </div>
    
}

export default SingleReview;