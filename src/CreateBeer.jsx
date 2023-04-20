import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'

function CreateBeer() {
    const navigate = useNavigate()

    const [name , setname] = useState("")
    const [tagline , settagline] = useState("")
    const [image, setimage] = useState("")
    const [description , setdescription] = useState("")
    const [first_brewed  , setfirst_brewed] = useState("")
    const [brewers_tips   , setbrewers_tips] = useState("")
    const [attenuation_level    , setattenuation_level] = useState("")
    const [contributed_by     , setcontributed_by] = useState("")

    const handleNameChange = (e) => {
        setname(e.target.value)
    }
    const handleTaglineChange = (e) => {
        settagline(e.target.value)
    }
    const handleImageChange = (e) => {
        setimage(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setdescription(e.target.value)
    }
    const handleFirst_brewedChange = (e) => {
        setfirst_brewed(e.target.value)
    }
    const handleBrewers_tipsChange = (e) => {
        setbrewers_tips(e.target.value)
    }
    const handleAttenuation_levelChange = (e) => {
        setattenuation_level(e.target.value)
    }
    const handleContributed_byChange = (e) => {
        setcontributed_by(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const NewBeerObj = {
            name,
            tagline,
            image ,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by
        }

        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", NewBeerObj)
            .then(res => {
                navigate("/beers")
            })

    }

    return (
        <div className='text-start p-5'>
      <h1 className='mb-5'>Add a new Beer</h1>
      <Form  onSubmit={handleSubmit}  className='fs-5'>
      <Form.Group className='mb-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control
          className='rounded'
            type='text'
            name='name'
            value={name}
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>tagline</Form.Label>
          <Form.Control
          className='rounded'
            type='text'
            name='name'
            value={tagline}
            onChange={handleTaglineChange}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>image</Form.Label>
          <Form.Control
          className='rounded'
            type='text'
            name='name'
            value={image}
            onChange={handleImageChange}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>description</Form.Label>
          <Form.Control
          className='rounded'
            type='text'
            name='name'
            value={description}
            onChange={handleDescriptionChange}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>first_brewed</Form.Label>
          <Form.Control
          className='rounded'
            type='text'
            name='name'
            value={first_brewed}
            onChange={handleFirst_brewedChange}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>brewers_tips</Form.Label>
          <Form.Control
          className='rounded'
            type='text'
            name='name'
            value={brewers_tips}
            onChange={handleBrewers_tipsChange}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>attenuation_level</Form.Label>
          <Form.Control
          className='rounded'
          type='number'
            name='name'
            value={attenuation_level}
            onChange={handleAttenuation_levelChange}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>contributed_by</Form.Label>
          <Form.Control
          className='rounded'
            type='text'
            name='name'
            value={contributed_by}
            onChange={handleContributed_byChange}
          />
        </Form.Group>
            
                <button type='submit'> Add New </button>
            </Form >
        </div>
    )
}

export default CreateBeer