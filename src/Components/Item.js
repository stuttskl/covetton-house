import React from 'react';
import '../styles/styles.css';

const Item = ({id, name, price, img, description}) => (
  <div id='item'>
    <h1 id='item-name'>{name}</h1>
    <h3>${price}</h3>
    <img id='item-img' src={img}></img>
    <p>{description}</p>
    <button className='item-button'>add to cart</button>
  </div>
)

export default Item;