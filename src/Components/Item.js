import React, { useCallback } from 'react';
import '../styles/styles.css';

const Item = ({id, name, price, img, desc}) => (

  <div id='item'>
    <h1 id='item-name'>{name}</h1>
    <h3>${price}</h3>
    <img id='item-img' src={img}></img>
    <p>{desc}</p>
    <button className='item-button'>add to cart</button>
  </div>
)

export default Item;