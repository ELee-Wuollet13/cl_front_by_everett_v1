import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import styled from 'styled-components';
import aquarius from '../images/aquarius.jpg';
import aries from '../images/aries.jpg';
import cancer from '../images/cancer.jpg';
import capricorn from '../images/capricorn.jpg.jp2';
import leo from '../images/leo.jpg';
import gemini from '../images/gemini.jpg';
import libra from '../images/libra.jpg.jp2';
import pisces from '../images/pisces.jpg';
import sagittarius from '../images/sagittarius.jpg.jp2';
import scorpio from '../images/scorpio.jpg';
import taurus from '../images/taurus.jpg';
import virgo from '../images/virgo.jpg';
import CharacterCards from './CharacterCards.jsx'

//These cards could easily be converted to the results display. Having each card reprisent one of the houses and what it governs, then mousing over to see what a likely match would be.

const characters = [
  {
    name: 'Aquarius',
    image: {aquarius},
    image2: {aquarius},
    bio:  'Aquarius facts',
    powers: 'Aquarius matches'
  },
  {
    name: 'Aries',
    image: {aries},
    image2: {aries},
    bio:  "Aries facts",
    powers: 'Aries matches.'
  },
  {
    name: 'Cancer',
    image: {cancer},
    image2: {cancer},
    bio:  "Cancer facts",
    powers: 'Cancer matches'
  },
  {
    name: 'Leo',
    image: {leo},
    image2: {leo},
    bio:  "Leo facts",
    powers: 'Leo matches'
  },
  {
    name: 'Capricorn',
    image: {capricorn},
    image2: {capricorn},
    bio:  "Capricorn facts",
    powers: 'Capricorn matches'
  },
  {
    name: 'Gemini',
    image: {gemini},
    image2: {gemini},
    bio:  "Gemini facts",
    powers: 'Gemini matches'
  },
  {
    name: 'Libra',
    image: {libra},
    image2: {libra},
    bio:  "Libra facts",
    powers: 'Libra matches'
  },
  {
    name: 'Pisces',
    image: {pisces},
    image2: {pisces},
    bio:  "Pisces facts",
    powers: 'Pisces matches'
  },
  {
    name: 'Sagittarius',
    image: {sagittarius},
    image2: {sagittarius},
    bio:  "Sagittarius facts",
    powers: 'Sagittarius matches'
  },
  {
    name: 'Scorpio',
    image: {scorpio},
    image2: {scorpio},
    bio:  "Scorpio facts",
    powers: 'Scorpio mathes'
  },
  {
    name: 'Taurus',
    image: {taurus},
    image2: {taurus},
    bio:  "Taurus facts",
    powers: 'Taurus matches'
  },
  {
    name: 'Virgo',
    image: {virgo},
    image2: {virgo},
    bio:  "Virgo facts",
    powers: 'Virgo matches'
  },
]


function About(){

  return (
    <div class="aboutSection">
    <h1 className='aboutHeader'> About </h1>
    <div className='characterCards'>
    {characters.map((character, index)=>
      <CharacterCards
      name={character.name}
      image={character.image}
      image2={character.image2}
      bio={character.bio}
      powers={character.powers}/>
    )}

    <style jsx>{`
      .aboutHeader{
        color: white;
        text-align: center;
      }
      .characterCards {
        display: flex;
        flex-flow: row wrap;
        width: 100%;


      }

      @keyframes slide-down {
        0% { margin-top: -1000px }
        100% { marign-top: 0px }
      }

      @keyframes fade-in {
        0% { opacity: 0 }
        100% { opacity: 1}
      }
      .aboutSection{
        position: absolute;
        z-index: -1;
      }
      `}</style>
      </div>
      </div>

    );
  };

  export default About;
