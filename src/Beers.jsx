import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom";
import Header from './components/Header';

const Beers = () => {
    const [beers, setBeers] = useState(null)

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(res => {
                setBeers(res.data)
                console.log(res.data)
            })
    }, [])

    return (
        <div>

            {beers && beers.map(Element => {
                return (
                    <div> 
                    <Link to={`/beers/${Element._id}`} key={Element._id}> 
                        <img src={Element.image_url}  width={20}alt=""/>
                        </Link>
                        <p> {Element.name} </p>
                        <p>  {Element.tagline} </p>
                        <p> Created by :   {Element.contributed_by}  </p>
                   </div>)
            })}


        </div>

    )
}

export default Beers