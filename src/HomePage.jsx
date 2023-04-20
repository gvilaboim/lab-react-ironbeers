import React from 'react'
import { Link } from "react-router-dom";
import Beers from './assets/beers.png'
import NewBeer from './assets/new-beer.png'
import RandomBeer from './assets/random-beer.png'

const HomePage = () => {
    return (
        <div style={{display: "flex" ,justifyContent: "center" , flexDirection: "column"}}>
        <h3> IronBeers</h3>
            <Link to={'/beers'}>
                <p>All Beers</p>
                <img src={Beers} alt=""  height="600px"/>
            </Link>
           <Link to={'/random-beer'}>
                <p>Random Beer</p>
                <img src={RandomBeer} height="600px" alt="" />
            </Link>
            <Link to={'/new-beer'}>
                <p>New Beer</p>

                <img src={NewBeer}  height="600px"alt="" />
            </Link>
        </div>
    )
}

export default HomePage