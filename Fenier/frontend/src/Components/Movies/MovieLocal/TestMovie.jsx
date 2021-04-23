function TestMovie(props){
    var id = props.id
    console.log("hello")

    fetch("http://localhost:8000/movies/id="+id)
    .then(res=>res.json())
    .then((res)=>console.log(res))
    .catch(err=>console.log(err))

    return <div>
    hello
    </div>
}

export default TestMovie;