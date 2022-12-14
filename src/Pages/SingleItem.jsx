import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { useLocation } from 'react-router-dom';
import data from '../Data/data.json';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { IoIosBed } from '@react-icons/all-files/io/IoIosBed';
import { FaBath } from '@react-icons/all-files/fa/FaBath';
import { FaMapMarkerAlt } from '@react-icons/all-files/fa/FaMapMarkerAlt';
import { MdKitchen } from '@react-icons/all-files/md/MdKitchen';
import { GiSofa } from '@react-icons/all-files/gi/GiSofa';
import { FaCalendarAlt } from '@react-icons/all-files/fa/FaCalendarAlt';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/esm/Button';

const SingleItem = () => {
  const [item, setItem] = useState({})
  const idFromPath = useLocation().pathname.split("/")[1];
  
  useEffect(() =>{
    const findItem = data.find((item) => (idFromPath === item.listing_id.toString()))
    setItem(findItem)
  },[idFromPath])

  return (
    <Container>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '50px'}}>
        <Carousel className='carousel' style={{width: '500px'}}>
          <Carousel.Item>
            <img
              className='carousel-img'
              style={{width: '500px', display:'block'}}
              src={`${item.media}`}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='carousel-img'
              style={{width: '500px', display:'block'}}
              src={`${item.media}`}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='carousel-img'
              style={{width: '500px', display:'block'}}
              src={`${item.media}`}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Card style={{width: '500px', height: '320px', marginTop: '30px'}}>
          <Card.Header>Details</Card.Header>
          <Card.Body>
            <Card.Text style={{display: 'flex', gap: '20px'}}>
              <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <div style={{display: 'flex',gap: '20px'}}>
                  <div><span><FaMapMarkerAlt/> {item.street_name}, {item.suburb}</span></div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <div style={{display: 'flex', gap: '15px'}}><span>ID :{item.listing_id}</span> </div>
                  <div style={{display: 'flex', gap: '15px'}}><span>Construction Year: {item.construction_year}</span></div>
                  <div style={{display: 'flex', gap: '15px'}}><span>Renovation Year: {item.renovation_year}</span></div>
                  <div style={{display: 'flex', gap: '15px'}}>
                    <span>Price: {item.price}$</span>
                      <i style={{color:'gray'}}>{(parseFloat(item.price)/parseFloat(item.size)).toFixed(2)}$ per m??</i>
                  </div>
                </div>
                <div style={{display: 'flex',gap: '20px'}}>
                  <div><FaHome/><span> {item.size} m??</span></div>
                  <div><IoIosBed/><span> {item.bedrooms}</span></div>
                  <div><FaBath/><span> {item.bathrooms}</span></div>
                  <div><MdKitchen/><span>  {item.kitchens}</span></div>
                  <div><GiSofa/><span>  {item.living_rooms}</span></div>
                  <div><span> wc : {item.wc}</span></div>
                </div>
                <div style={{display: 'flex',gap: '20px'}}>
                  <Badge bg='primary' style={{display: 'flex', width: 'auto', justifyContent: 'center'}}>
                    <div style={{fontSize: '15px'}}><span>{item.property_category}</span></div>
                  </Badge>
                  <Badge bg='success' style={{ display: 'flex', width: 'auto', justifyContent: 'center'}}>
                    <div style={{fontSize: '15px'}}><span>{item.property_subcategory}</span></div>
                  </Badge>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{width: '500px'}}>
          <Card.Body>
            <Button variant="primary"><span style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>Book Appointment <FaCalendarAlt/></span></Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}

export default SingleItem