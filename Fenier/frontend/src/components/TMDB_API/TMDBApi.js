function TMDBApi(){
    
    console.log("hello TMDB start")
    fetch("https://api.themoviedb.org/3/movie/550?api_key=002f58f23a005b82c32d167ba7872e11")
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

    return (
        <div>

        </div>
    )
}

export default TMDBApi;