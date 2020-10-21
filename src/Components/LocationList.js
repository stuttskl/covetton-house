import React, { Component } from 'react';
import '../styles/styles.css';

import LocationCard from './LocationCard';

class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [
        {
          id: 1,
          name: "Seattle, WA",
          address: "1234 Pike Ave, Seattle WA 98111",
          img: "https://covetton-house.s3-us-west-2.amazonaws.com/sea.jpg",
          phone: 2063433432,
          email: "seattle@covettonhouse.com",
        },
        {
          id: 2,
          name: "London, UK",
          address: "1234 Main Ave, London, UK 98111",
          img: "https://covetton-house.s3-us-west-2.amazonaws.com/lon.jpg",
          phone: 2063433432,
          email: "london@covettonhouse.com",
        },
        {
          id: 3,
          name: "Manhattan, NY",
          address: "1234 Wall St, New York, NY 98111",
          img: "https://covetton-house.s3-us-west-2.amazonaws.com/man.jpg",
          phone: 2063433432,
          email: "nyc@covettonhouse.com",
        },
        {
          id: 4,
          name: "Austin, TX",
          address: "1234 6th Ave, Austin, TX 98111",
          img: "https://covetton-house.s3-us-west-2.amazonaws.com/aus.jpg",
          phone: 2063433432,
          email: "austin@covettonhouse.com",
        },
        {
          id: 5,
          name: "Chicago, IL",
          address: "1234 Main Ave, Chicago, IL 98111",
          img: "https://covetton-house.s3-us-west-2.amazonaws.com/chi.jpg",
          phone: 2063433432,
          email: "chicago@covettonhouse.com",
        }
      ],
      error: null
    };
  }

// componentDidMount() {
//   this.loadLocations();
// }

//   loadLocations() {
//     fetch("https://covetton-house-fe.herokuapp.com/locations/")
//     .then(res => {
//       if(!res.ok) {
//         if (res.status === 404) {
//           this.setState({ error: 'No locations found' })
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
//     .then(locations => this.setState({locations:locations})); 
//   }

  render() {
    const locations = this.state.locations.map((i) => (
      <LocationCard
        {...i}
      />
    ))
    return (
      <div id='inventory-list'>
        {locations}
      </div>
    )
  }
}

export default LocationList;
