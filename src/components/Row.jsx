import React, { useEffect, useState } from 'react'
import instance from '../instance'
import './Row.css'

function Row({title,fetchurl}) {
    const base_url = "https://image.tmdb.org/t/p/original";
    const [allMovies,setAllMovies]=useState([])

    const fetchData=async()=>{
        const response = await instance.get(fetchurl)
        const {data}=response
        setAllMovies(data.results)
    }
    useEffect(()=>{
        fetchData();
    },[]);
    return (
    <div>
        <h2 style={{color:"white", marginTop:"30px"}}>{title}</h2>
        <div className='movie_row'>
            {
                allMovies?.map(item=>(
                    <img src={`${base_url}${item.poster_path}`} alt='' className='movie'></img>
                ))
            }
        </div>

    </div>
  )
}

export default Row