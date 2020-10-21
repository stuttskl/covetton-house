import React, { Component } from 'react';
import '../styles/styles.css';

import LocationCard from './LocationCard';

class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      error: null
    };
  }

componentDidMount() {
  this.loadLocations();
}

  loadLocations() {
    fetch("https://covetton-house-fe.herokuapp.com/locations/")
    .then(res => {
      if(!res.ok) {
        if (res.status === 404) {
          this.setState({ error: 'No locations found' })
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
    .then(locations => this.setState({locations:locations})); 
  }

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
