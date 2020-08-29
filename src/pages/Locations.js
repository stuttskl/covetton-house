import React from 'react';
import LocationList from '../Components/LocationList';
import LocationCard from '../Components/LocationCard';

export const Locations = () => {
  return (
    <div className='pages'>
      <h1 className='page-heading'>come visit us IRL!</h1>
      <LocationList />
    </div>
  )
}