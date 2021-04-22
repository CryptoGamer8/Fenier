import React, {Component,useState} from 'react';
import './review_search.css';



function ReviewSearch(props){ 

      const [movie, setMovie] = useState("");
      const [rates, setRates] = useState("");
      const [user, setUser] = useState("");
      const [mycomment, setComment] = useState("");

      fetch("/reviews/id=2", {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json' 
        }
     }).then(res=>res.json())
    .then(
       (result)=> {
         setComment(result.comments)
         setRates(result.rates)
         setUser(result.user_name)
         setMovie(result.movie_name)
         }
       ).catch(err=>console.log(err))
 
 
   return (
    <div className="review_table">

       <tr>
         <th>Movie Name</th>
         <th>Rates</th>
         <th>User</th>
         <th>Comment</th>  
       </tr>
       <tr>
         <td>{movie}</td>
         <td>{rates}</td>
         <td>{user}</td>
         <td>{mycomment}</td>  
       </tr>

    </div>
     
   );
} 

export default Reviewsearch;
