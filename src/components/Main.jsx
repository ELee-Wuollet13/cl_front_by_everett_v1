import React from 'react';
import Galaxy from './../images/cosmic.jpg'


function Main(){

  return (
    <div className='main'>
    <style jsx>{`
      body {
        background-color: #bf40bf;
      }

      .galaxyBackground {
        width: 100%;
      }

      `}</style>


    <div className="textBox">

    <p> This is where the page goes </p>
    </div>
    <img className='galaxyBackground' src={Galaxy}/>
    </div>
  );
};

export default Main;
