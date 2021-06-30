import React from 'react';
import '../../css/home/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Wild.jpg'
              text=''
              label='Wild'
              path='/'
            />
            <CardItem
              src='images/Heritage.jpg'
              text=''
              label='Heritage'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/Scenic.jpg'
              text=''
              label='Scenic'
              path='/'
            />
            <CardItem
              src='images/Thrills.jpg'
              text=''
              label='Thrills'
              path='/'
            />
            <CardItem
              src='images/Festival.jpg'
              text=''
              label='Festival'
              path='/'
            />
            <CardItem
              src='../../images/Pristine.jpg'
              text=''
              label='Pristine'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;