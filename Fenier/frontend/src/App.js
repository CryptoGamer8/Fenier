// import React, {useState} from 'react';
// import './App.css';
// import Reviewsearch from './reviews/review_search';
// import Addreview from './reviews/review_add';
// import Card from './reviews/card';

// function App() {
  
//   const [myurl, setUrl] = useState("");
//   const [myimg, setImg] = useState("/imgs/avengers.jpeg");



//   fetch("/movies/name=Avengers Trailer"
//     // method: 'GET',
//     // headers: {
//     //   'Content-Type': 'application/json'
//     // }
//   ).then(res=>res.json())
//   // .then(async res=>{
//   //   try{
//   //     const data = await res.json()
//   //     console.log('response data?',data)
//   //   }catch(err){
//   //     console.log('error happend here')
//   //   console.log(err)
//   // }}
//   // )
//   .then(
//     (result)=> {
//       setUrl(result.movie_url)
//       setImg(result.img_url)
//     }
//   ).catch(err=>console.log(err))

//   return (
//     <div className="App">
//       <iframe width="560" height="315" src={myurl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//       <img src={myimg} alt="avengers"></img>
//       <Reviewsearch/>
//       <Addreview />
//       <Card />
//       <div id="Card"></div>
//     </div>
//   );
// }

import Homepage from './components/homepage/index'
import MainCard from './components/reviews/card'
import AddReview from './components/reviews/review_add'
import ReviewSearch from './components/reviews/review_search'

function App() {
    return (
      <div>
        <ReviewSearch/>
      </div>
    )
};


export default App;
