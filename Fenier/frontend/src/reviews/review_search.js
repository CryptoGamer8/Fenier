import React, {Component,useState} from 'react';


function Reviewsearch(props){ 

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


/*
class Reviewsearch extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loaded: false,
        placeholder: "Loading",
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:8000/reviews/id=${props}")
        .then(response => {
          if (response.status > 400) {
            return this.setState(() => {
              return { placeholder: "Something went wrong!" };
            });
          }
          return response.json();
        })
        .then(data => {
          this.setState(() => {
            return {
              data:{movie_name[],
                    rates[],           
                    user_name[],
                    comments[]},
              loaded: true
            };
          });
        });
    }
  
    render() {
      return (
          <div>
          <h3>Movies</h3>
          <table class="review_search">
          <thead>
              <tr>
              <th>Movie Name</th>
              <th>Rates</th>
              <th>User</th>
              <th>Comment</th>
              </tr>
          </thead>
          <tbody>
              {this.state.data.map(review => {
                  return (
                      <tr>
                        <td>{review.movie_name}</td>
                        <td>{review.rates}</td>
                        <td>{review.user_name}</td>
                        <td>{review.comments}</td>  
                    </tr>
                );
              })}
          </tbody>
      </table>
      </div>
      );
    }
  }
  */

export default Reviewsearch;





/*
function review_search() {
  
  const [movie, setMovie] = useState("");
  const [rates, setRates] = useState("");
  const [user, setUser] = useState("");
  const [mycomment, setComment] = useState("");

  fetch("http://localhost:8000/reviews/id=${this.props.}", {
       method: 'GET',
       headers: {
       'Content-Type': 'application/json' 
       }
    }).then(res=>res.json())
        .then(async res=>{
          try{
              const data = await res.json()
              console.log('response data?',data)
              }catch(err){
        console.log('error happend here')
        console.log(err)
        }}
   )
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
        <td>{review.movie_name}</td>
        <td>{review.rates}</td>
        <td>{review.user_name}</td>
        <td>{review.comments}</td>  
      </tr>   
    </div>

    
  );
}
*/

