import React from 'react'
import Productlist from './Productlist';
import Itemlist from './Itemlist';



const names = ["Alice", "Bob", "Charlie"];




const Mappingtypes = () => {
  return (
    //Basic Mapping 

    <ul>
    {names.map((name, index) => (
      <li key={index}>{name}</li>
    ))}
    <Productlist />
    <Itemlist />
  </ul>
  





  )
  
}

export default Mappingtypes
