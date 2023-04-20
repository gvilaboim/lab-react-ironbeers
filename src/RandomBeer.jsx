import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap'


const RandomBeer = () => {
    const [beer, setBeer] = useState(null)

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(res => {
                setBeer(res.data)
                console.log(res.data)
            })
    }, [])

    return (
        <div>
            
            {beer && (
        <Card className=''>
          <div className='d-flex flex-column justify-content-center align-items-center text-start p-5'>
            <Card.Img
              className='m-5'
              style={{ width: '7rem' }}
              variant='top'
              src={beer.image_url}
              alt='beer'
            />
            <Card.Body className='m-2'>
              <div className='d-flex justify-content-between'>
                <Card.Title className='fs-1'>{beer.name}</Card.Title>
                <Card.Text className='fs-1 text-secondary'>
                  {beer.attenuation_level}
                </Card.Text>
              </div>
              <div className='d-flex justify-content-between p-2'>
                <Card.Text className='fs-3 fw-semibold text-secondary'>
                  {beer.tagline}
                </Card.Text>
                <Card.Text className='fs-4 fw-bold'>
                  {beer.first_brewed}
                </Card.Text>
              </div>
              <div>
                <Card.Text className='fs-4 fw-semibold'>
                  {beer.description}
                </Card.Text>
                <p className='fs-3 text-secondary fw-bold'>
                  {beer.contributed_by}
                </p>
              </div>
            </Card.Body>
          </div>
        </Card>
      )}
        </div>)
}
export default RandomBeer