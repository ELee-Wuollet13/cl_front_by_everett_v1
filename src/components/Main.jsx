import React from 'react';
import Galaxy from './../images/cosmic.jpg'

function Main(){

  return (
    <div className='main'>
    <style jsx>{`
      body {
        background-color: #862d86;
      }

      .galaxyBackground {
        width: 100%;
        zindex: -1;
      }
      .formBox {
        position: absolute;
        border: black;
        position: center;
        margin: 2%;
        margin-bottom: -175px;
        margin-left 47%;
        zindex: 2;
      }
      `}</style>


    <div className="formBox">
    <form>
    <label for="dob">Date of birth:</label>
    <input type="date"></input>
    </form>
    <form>
    <label for="time">Time of birth:</label>
    <input type="datetime-local"></input>
    </form>
    <form>
    <label for="location">location of birth:</label>
    <input type="map"></input>

    </form>
    </div>

    <img className='galaxyBackground' src={Galaxy}/>
    </div>
  );
};

export default Main;
