import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Look at this list of cool me things!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/check_goof.jpg'
              text='Dis my goofy dog, chekc'
              label='Phaggot'
              path='/services'
            />
            <CardItem
              src='images/mitch-austin.jpg'
              text='Meet my freind his name is austin'
              label='Actually cool'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/jade.jpg'
              text='When I bagged jade'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/mikell.jpg'
              text='I always like to include my interracial firends (im not racist hes just a good friend)'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/fitted.jpg'
              text='This is just a picsure of me and ausing fitted the f out'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;