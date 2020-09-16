import React from 'react';
import '../App.scss';
import '../style/MainSection.scss';
import { Button } from './Button';

function MainSection() {
  return (
    <div className='main-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Designed and customized app</h1>
      <p>What are you waiting for?</p>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default MainSection;