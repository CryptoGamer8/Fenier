import React, { useEffect, useRef, useState } from 'react';

const Canvas = props => {
    const canvasRef = useRef(null)

    const [id, setId] = useState(100)
    console.log(id)
    console.log("hello TMDB start")
    fetch("https://api.themoviedb.org/3/movie/550?api_key=002f58f23a005b82c32d167ba7872e11")
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setId(res.id)
            console.log(id)

            const canvas = canvasRef.current
            const context = canvas.getContext('2d')
            //Our first draw
            context.fillStyle = '#33aa33'
            context.fillRect(0, 0, context.canvas.width, id)
        })
        .catch (err => console.log(err))

return <canvas ref={canvasRef} {...props} />
}

export default Canvas;