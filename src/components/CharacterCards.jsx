import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import styled from 'styled-components';
import Flippy, { FrontSide, BackSide } from 'react-flippy';


function CharacterCards(props){

  return (
    <div className="Header">
    <div className="character">

    <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div

  >
    <FrontSide>
    <img className='profileImg' src={props.image.aquarius || props.image.aries || props.image.cancer || props.image.capricorn || props.image.gemini || props.image.leo || props.image.libra || props.image.pisces || props.image.sagittarius || props.image.scorpio || props.image.taurus || props.image.virgo}/>
  </FrontSide>
  <BackSide>
    <img className='profileImg' src={props.image2.pisces || props.image2.sagittarius || props.image2.scorpio || props.image2.taurus || props.image2.virgo || props.image2.aries}/>
  </BackSide>
  </Flippy>
    <div className='charInfo'>
    <h2 className="charName">{props.name}</h2>
    <h3 className="charBio"> {props.bio}</h3>
    <h3 className="charPowers"> {props.powers}</h3>
    </div>
    </div>
    <style jsx>{`
      .profileImg {
        width: 400px;
        border-radius: 30px;
        height: 300px;
      }

      .character {
        padding: 20px;
        padding-right: 40px;
        border: 1px solid black;
        width: 400px;
        height: 600px;

      }
      .charName{
        text-align: center;
        color: white;
        border: 1px solid white;
        border-radius: 10px;
      }
      .charBio, .charPowers{
        color: #97ABB1;
      }
      .charInfo{
        padding: 6px;
        background-color: #262626;
        border-radius: 20px;
      }



      `}</style>
      </div>
    );
  };

  export default CharacterCards;
