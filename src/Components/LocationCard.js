import React from 'react';
import '../styles/styles.css';

const LocationCard = ({id, name, address, img, phone, email, hours}) => (
  <div id='item'>
    <h1 id='item-name'>{name}</h1>
    <img id='item-img' src={img}></img>
    <h3>{address}</h3>
    <p>{phone} | {email}</p>
    {/* <p>{hours}</p> */}
  </div>
)

export default LocationCard;