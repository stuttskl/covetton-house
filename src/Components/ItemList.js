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
      inventory: [],
      error: null
    };
  }

componentDidMount() {
  this.loadInventory();
}

  loadInventory() {
    fetch("http://localhost:3000/inventory/")
    .then(res => {
      if(!res.ok) {
        if (res.status === 404) {
          this.setState({ error: 'No products found' })
        }
        if(res.status >= 400 && res.status < 500) {
          return res.json().then(data => {
            let err = { errorMessage: data.message };
            throw err;
          })
        } else {
          let err = { errorMessage: 'Please try again later.'};
          throw err;
        }
      }
      return res.json();
    })
    .then(inventory => this.setState({inventory:inventory})); 
  }

  render() {
    const inventory = this.state.inventory.map((i) => (
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