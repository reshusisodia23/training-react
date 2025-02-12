import React from 'react'


const numbers = [10, 20, 30, 40];

const total = numbers.reduce((acc, num) => acc + num, 0);
const Reducingfunction = () => {
  return total
  
}

export default Reducingfunction
