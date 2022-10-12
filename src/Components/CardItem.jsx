import Alert from 'react-bootstrap/Alert';
import React from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Filtering from './Filtering';
import { Link } from 'react-router-dom';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { IoIosBed } from '@react-icons/all-files/io/IoIosBed';
import { FaBath } from '@react-icons/all-files/fa/FaBath';
import { GiStairs } from '@react-icons/all-files/gi/GiStairs';
import { MdKitchen } from '@react-icons/all-files/md/MdKitchen';
import { GiSofa } from '@react-icons/all-files/gi/GiSofa';
import { IoIosConstruct } from '@react-icons/all-files/io/IoIosConstruct';

const CardItem = ({data}) => {
  const [items, setItems] = useState(data)
  const [sortADiscent, setSortDiscent] = useState(false);
  const [sortAscent, setSortAscent] = useState(false);
  return (
    <>
      <Filtering setItems={setItems} setSortAscent={setSortAscent} setSortDiscent={setSortDiscent}/>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', padding: '15px'}}>
      {   
        items.length === 0 
        ?
          <>
            <Alert variant='warning'>
              There are 0 results!
            </Alert>
          </>
        : 
          <>
            {
              items.sort((a, b) => { 
                      if(sortAscent) 
                      {
                        return parseFloat(a.price) > parseFloat(b.price) ? 1 : -1
                      }
                      else if(sortADiscent)
                      {
                        return parseFloat(a.price) < parseFloat(b.price) ? 1 : -1
                      }
              }).map((item) => {
                  return (
                    <div key={item.listing_id}>
                      <Link to={`/${item.listing_id}`} style={{textDecoration: 'none', color:'initial'}}>
                        <Card style={{width: '320px'}}>
                          <Card.Img variant="top" src={`${item.media}`} />
                          <Card.Body>
                            <Card.Text style={{ display: 'flex', flexDirection: 'column', gap:'5px'}}>
                              <div style={{ display: 'flex'}}>
                                <Badge bg='primary'>
                                  {   item.list_type ==='rent'
                                      ?
                                        <>
                                          Rent
                                        </>
                                      :
                                        <>
                                          Sale
                                        </>
                                  }
                                </Badge>
                              </div>
                              <div style={{ display: 'flex', gap:'8px'}}>
                                <span>Price: {item.price}$</span>
                                <i style={{color:'gray'}}>{(parseFloat(item.price)/parseFloat(item.size)).toFixed(2)}$ per m²</i>
                              </div>
                              <div style={{ display: 'flex', gap:'8px'}}>
                                <div><FaHome/> {item.size} m²</div>
                                <div><IoIosBed/> {item.bedrooms}</div>
                                <div><FaBath/> {item.bathrooms}</div>
                                <div><MdKitchen/> {item.kitchens}</div>
                                <div><GiSofa/> {item.living_rooms}</div>
                              </div>
                              <div style={{ display: 'flex', gap:'8px'}}>
                                <div><IoIosConstruct/> {item.construction_year}</div>
                                <div><GiStairs/> {item.floor}</div>
                              </div>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
                  );
              })
            }
        </>
      }
    </div>
    </>
    
  )
}

export default CardItem
