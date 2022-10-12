import React from 'react'
import data from '../Data/data.json';
import CardItem from '../Components/CardItem';

const Main = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign:'center', alignItems: 'center'}}>
        <CardItem  data={data}/>
    </div>
  )
}

export default Main