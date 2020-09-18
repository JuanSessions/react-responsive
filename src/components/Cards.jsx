import React from 'react';
import CardItem from './CardItem';
import '../App.scss';
import '../style/Cards.scss';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out this responsive react app </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {/** */}
                        <CardItem
                            src='./images/img-9.jpg'
                            text='Design-Films-Music-Creativity-all good stuff'
                            label='Cool'
                            path='/services'
                        />
                        <CardItem
                            src='./images/img-2.jpg'
                            text='Design-Films-Music-Creativity-all good stuff'
                            label='Really Cool'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='./images/img-3.jpg'
                            text='Design-Films-Music-Creativity-all good stuff'
                            label='Super Cool'
                            path='/services'
                        />
                        <CardItem
                            src='./images/img-4.jpg'
                            text='Design-Films-Music-Creativity-all good stuff'
                            label='Very Cool'
                            path='/products'
                        />
                        <CardItem
                            src='./images/img-8.jpg'
                            text='Design-Films-Music-Creativity-all good stuff'
                            label='Cooler'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;