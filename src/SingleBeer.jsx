import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap'



const SingleBeer = () => {
    const [beer, setBeer] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(res => {
                setBeer(res.data)
                console.log(res.data)
            })
    }, [])

    return (
        <div>
            
            {beer && <Card className='px-5'>
      <Link to={`/beers/${beer._id}`}>
        <div className='d-flex justify-content-center text-start align-items-center p-5'>
          <Card.Img
            className='me-5'
            style={{width: '6rem'}}
            variant='top'
            src={beer.image_url}
            alt='beer'
          />
          <Card.Body className='m-2 w-75'>
            <Card.Title className='fs-1'>{beer.name}</Card.Title>
            <Card.Text className='fs-3 text-secondary'>{beer.tagline}</Card.Text>
            <p>
              <span className='fs-bold'>Created By: </span>
              {beer.contributed_by}
            </p>
          </Card.Body>
        </div>
      </Link>
    </Card> }
        </div>)
}
export default SingleBeer