import React from 'react'
import './MovingCube.scss';

export const MovingCube = () => {
  return (
    <div className="loader">
    <div className="cube" id="animatedCube">
    <div className="front"></div>
    <div className="back"></div>
    <div className="top"></div>
    <div className="bottom"></div>
    <div className="left"></div>
    <div className="right"></div>
    </div>
    </div>
  )
  
}
