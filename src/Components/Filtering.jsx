import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { SearchOperation, FilterOperation } from './Actions.js';
import Container from 'react-bootstrap/Container';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import { VscSettings } from '@react-icons/all-files/vsc/VscSettings';
import { FaSortAmountUpAlt } from '@react-icons/all-files/fa/FaSortAmountUpAlt';
import { FaSortAmountDownAlt } from '@react-icons/all-files/fa/FaSortAmountDownAlt';
import { GrPowerReset } from '@react-icons/all-files/gr/GrPowerReset';

const Filtering = ({setItems, setSortAscent, setSortDiscent}) => {
  const [show, setShow] = useState(false);
  const [searchInput, setSearchInput] = useState();
  const [yearFrom, setYearFrom] = useState();
  const [yearUntil, setYearUntil] = useState();
  const [type, setType] = useState();
  
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const submitHandler = () => {
    const returningValue = SearchOperation(searchInput);
    setItems(returningValue);
  }

  const handleSubmitFilter = () => {
    const returningValue = FilterOperation(yearFrom, yearUntil, type);
    setItems(returningValue);
    setYearUntil();
    setType();
    setYearFrom();
    setShow(!show);
  }

  const SortPriceUp = () => {
    setSortAscent(true);
    setSortDiscent(false);
  }

  const SortPriceDown = () => {
    setSortDiscent(true);
    setSortAscent(false);
  }
  
  const Reset = () => {
    window.location.reload()
  }
  return (
    <>
      <div style={{display: 'flex', gap:'30px'}}>
        <InputGroup size="sm" className="mb-3" style={{width: '300px'}}>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder='Search Location or Suburb...'
              value={searchInput || undefined}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          <InputGroup.Text style={{cursor: 'pointer', backgroundColor: '#0d6efd', color: 'white'}}>
            <FaSearch onClick={submitHandler}/>
          </InputGroup.Text>
        </InputGroup>
      </div>
       <Container>
        <div style={{display: 'flex', gap: '20px', float: 'right', alignItems: 'center'}}>
          <VscSettings style={{cursor: 'pointer', fontSize: '20px'}} onClick={handleShow}/>
          <FaSortAmountUpAlt style={{cursor: 'pointer'}} onClick={SortPriceUp}/>
          <FaSortAmountDownAlt style={{cursor: 'pointer'}} onClick={SortPriceDown}/>
          <GrPowerReset style={{cursor: 'pointer'}} onClick={Reset}/>
        </div>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup size="sm" className="mb-3" style={{display: 'flex', gap: '10px'}}>
          <Form.Label>Construction Year :</Form.Label>
            <Form.Control
              value={yearFrom || undefined}
              placeholder='From'
              onChange={(e) => setYearFrom(e.target.value)}
            />
            <Form.Control
                value={yearUntil || undefined}
                placeholder='Until'
                onChange={(e) => setYearUntil(e.target.value)}
              />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" style={{ display: 'flex', gap: '10px'}}>
        <Form.Label>Type :</Form.Label>
            <Form.Group className="mb-3">
              <Form.Check name="type" label="Rent" type="radio" inline value={'rent' || undefined} onChange={(e) => setType(e.target.value)}/>
              <Form.Check name="type" label="Sale" type="radio" inline value={'sale' || undefined} onChange={(e) => setType(e.target.value)}/>
            </Form.Group>
        </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitFilter}>
            Search
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Filtering
