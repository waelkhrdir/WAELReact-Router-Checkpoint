import React from 'react'

const Desc = (props) => {
    console.log(props)
    let movie =props.movies.find(el=>el.id=== Number(props.match.params.id))
    console.log(movie)
    return (
        <div>   
<h2> {movie.desc}</h2>
<iframe width="560" height="315" src={movie.trailerURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Desc
