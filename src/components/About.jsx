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

const characters = [
  {
    name: 'Captain America',
    image: {aquarius},
    image2: {aquarius},
    bio:  'America’s World War II Super-Soldier continues his fight in the present as an Avenger and untiring sentinel of liberty.',
    powers: 'Super human speed, strength, and agility. Skilled fighter and highly profecient with a shield.'
  },
  {
    name: 'Iron Man',
    image: {aries},
    image2: {aries},
    bio:  "Genius. Billionaire. Playboy. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man",
    powers: 'Genius mind, super suit that lends strength durability and flight.'
  },
  {
    name: 'Thor',
    image: {cancer},
    image2: {cancer},
    bio:  "The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.",
    powers: 'Worthy of weilding the mighty hammer Mjolnir, Thor capable of flight, super strength, and godly thunder powers.'
  },
  {
    name: 'Hulk',
    image: {leo},
    image2: {leo},
    bio:  "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.",
    powers: 'As Hulk, he is virtualy indesctructible and has immense strength. But as Bruce Banner, his mind is only matched by the likes of Tony Stark.'
  },
  {
    name: 'Black Widow',
    image: {capricorn},
    image2: {capricorn},
    bio:  "Despite super spy Natasha Romanoff’s checkered past, she’s become one of S.H.I.E.L.D.’s most deadly assassins and a frequent member of the Avengers.",
    powers: 'Black Widow is a master fighter and also a talented spy and operative.'
  },
  {
    name: 'Hawkeye',
    image: {gemini},
    image2: {gemini},
    bio:  "A master marksman and longtime friend of Black Widow, Clint Barton serves as the Avengers’ amazing archer.",
    powers: 'Hawkeye is a master marksman and one of Shields best agents'
  },
  {
    name: 'Hawkeye',
    image: {libra},
    image2: {libra},
    bio:  "A master marksman and longtime friend of Black Widow, Clint Barton serves as the Avengers’ amazing archer.",
    powers: 'Hawkeye is a master marksman and one of Shields best agents'
  },
  {
    name: 'Hawkeye',
    image: {pisces},
    image2: {pisces},
    bio:  "A master marksman and longtime friend of Black Widow, Clint Barton serves as the Avengers’ amazing archer.",
    powers: 'Hawkeye is a master marksman and one of Shields best agents'
  },
  {
    name: 'Hawkeye',
    image: {sagittarius},
    image2: {sagittarius},
    bio:  "A master marksman and longtime friend of Black Widow, Clint Barton serves as the Avengers’ amazing archer.",
    powers: 'Hawkeye is a master marksman and one of Shields best agents'
  },
  {
    name: 'Hawkeye',
    image: {scorpio},
    image2: {scorpio},
    bio:  "A master marksman and longtime friend of Black Widow, Clint Barton serves as the Avengers’ amazing archer.",
    powers: 'Hawkeye is a master marksman and one of Shields best agents'
  },
  {
    name: 'Hawkeye',
    image: {taurus},
    image2: {taurus},
    bio:  "A master marksman and longtime friend of Black Widow, Clint Barton serves as the Avengers’ amazing archer.",
    powers: 'Hawkeye is a master marksman and one of Shields best agents'
  },
  {
    name: 'Hawkeye',
    image: {virgo},
    image2: {virgo},
    bio:  "A master marksman and longtime friend of Black Widow, Clint Barton serves as the Avengers’ amazing archer.",
    powers: 'Hawkeye is a master marksman and one of Shields best agents'
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
        animation: fade-in 1s, slide-down 3s ;
      }
      .characterCards{
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        animation: fade-in 1s, slide-down 3s ;

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
