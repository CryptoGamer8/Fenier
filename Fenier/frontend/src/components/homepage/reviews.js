import React, {useState} from 'react';
import './homepage.css';
import Detail from './detail';

function Review() {
  
  const [myurl, setUrl] = useState("");
  const [myimg, setImg] = useState("");
  const [mymoviename, setmoviename] = useState("");
  const [mycast, setcast] = useState("");
  const [years, setyears] = useState("");
  const [rates, setrates] = useState("");

  //<iframe width="560" height="315" src={myurl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        /*setUrl(result.movie_url)
        setImg(result.img_url)
        setmoviename(result.name)
        setcast(result.cast)
        setyears(result.year)
        setrates(result.rates)
        
              <div class="row">
        <div class="col-md-6">
          <img src={mycast} alt="Avatar"></img>
          <h3>{mymoviename}</h3>
          <h3>Year: {years}</h3>
          <h3>Score: {rates}</h3>
        </div>*/
  let i=0;
  let urllist=[]

  function sayHello(name) {
    alert(`hello, ${name}`);
  }
  fetch("http://127.0.0.1:8000/movies/name=Thor"
  ).then(res=>res.json())
  .then(
    (result)=> {
      setUrl(result.movie_url)
        setImg(result.img_url)
        setmoviename(result.name)
        setcast(result.cast)
        setyears(result.year)
        setrates(result.rates)
    }
  ).catch(err=>console.log(err))


  return (
    <div class="row">
        <div class="col-md-6">
        <button onClick={() => sayHello(mymoviename)}>
          <img src={mycast} alt="Avatar"></img>
          <h3>{mymoviename}</h3>
          <h3>Year: {years}</h3>
          <h3>Score: {rates}</h3>
          </button>
        </div>
    </div>
  );
}

export default Review;


