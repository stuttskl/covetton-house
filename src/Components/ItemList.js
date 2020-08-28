import React, { Component } from 'react';
import '../styles/styles.css';

import Item from './Item';
import prod1 from '../constants/images/prod1.jpg'
import prod2 from '../constants/images/prod2.jpg'
import prod3 from '../constants/images/prod3.jpg'

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [
        {
          id: 1,
          name: "Scented Air Mist",
          price: 298,
          img: prod1,
          description: "description"
        },
        {
          id: 2,
          name: "Unique Footwear",
          price: 643,
          img: prod2,
          description: "description"
        },
        {
          id: 3,
          name: "Mystery Aura",
          price: 842,
          img: prod3,
          description: "description"
        }
      ],
      error: null,
      isLoading: true,
      canLoad: true
    }
  }

  render() {
    const inventory =  this.state.inventory.map((i) => (
      <Item
      {...i}
      />
    ))
    return (
      <div id='inventory-list'>
        {inventory}
      </div>
    )
  }
}

export default ItemList;