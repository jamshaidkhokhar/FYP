import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Bags!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/adidas2.jpeg'
              text=' Lite Leather Bag'
              label='DARK'
              path='./Page1'
            />
            <CardItem
              src='images/leather2.jpg'
              text='Orange Bob Leather Bag'
              label='Luxury'
              path='./Page2'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/index.jpg'
              text='Dark Brown leather bag'
              label='Mystery'
              path='./Page3'
            />
            <CardItem
              src='images/yellow.jpg'
              text='BTS Yellow'
              label='Yellow'
              path='./Page4'
            />
            <CardItem
              src='images/mosse.jpg'
              text='Mosse Exclusive pink and lime color avaiable'
              label='Adrenaline'
              path='./Page1'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
