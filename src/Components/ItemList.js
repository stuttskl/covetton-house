import React, { Component } from 'react';
import '../styles/styles.css';

import Item from './Item';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [
        {
          id: 1, 
          name: "Mystic Crystal",
          price: 799, 
          img: "https://covetton-house.s3-us-west-2.amazonaws.com/prod5.jpg", 
          desc: "Balance your body\'s natural pH levels with this rare gem"
        },
        {
          id: 2, 
          name: "Enamel Scrubbers", 
          price: 98, 
          img: "https://covetton-house.s3-us-west-2.amazonaws.com/prod6.jpg", 
          desc: "Cleanse and polish your mouth enamel with these artisan brushes"
        },
        {
          id: 3, 
          name: "Forever Anti-Aging Serum",
          price: 87, 
          img: "https://covetton-house.s3-us-west-2.amazonaws.com/prod4.jpg",
          desc: "Be forever young with just three droplets of this serum!"
        },
      ],
      error: null
    };
  }

// componentDidMount() {
//   this.loadInventory();
// }

//   loadInventory() {
//     fetch("https://covetton-house-fe.herokuapp.com/getInventory/")
//     .then(res => {
//       if(!res.ok) {
//         if (res.status === 404) {
//           this.setState({ error: 'No products found' })
//         }
//         if(res.status >= 400 && res.status < 500) {
//           return res.json().then(data => {
//             let err = { errorMessage: data.message };
//             throw err;
//           })
//         } else {
//           let err = { errorMessage: 'Please try again later.'};
//           throw err;
//         }
//       }
//       return res.json();
//     })
//     .then(inventory => this.setState({inventory:inventory})); 
//   }

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