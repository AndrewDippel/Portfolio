import React from 'react';
import SingleProject from '../SingleProject';

const projects = [
  {
    title: 'Text Editor',
    img: 'Assets/Screenshot 2022-12-10 at 3.04.25 pm.png',
    desc: 'one of my projects',
    link: 'https://radiant-escarpment-30419.herokuapp.com/',
    githublink: 'https://github.com/AndrewDippel/Text-Editor.git'
  },
  {
    title: 'Blog',
    img: 'Assets/Screenshot 2022-11-21 at 6.54.42 pm.png',
    desc: 'one of my projects',
    link: 'https://nameless-crag-26300.herokuapp.com/',
    githublink: 'https://github.com/AndrewDippel/Dippels-Blog.git'
  },
  {
    title: 'Trip Itinerary',
    img: 'Assets/TripItinerary.png',
    desc: 'one of my projects',
    link: 'https://arcane-beach-31622.herokuapp.com/',
    githublink: 'https://github.com/AndrewDippel/Trip-Itinerary.git'
  },
  {
    title: 'Note Taker',
    img: 'Assets/noteTaker.png',
    desc: 'one of my projects',
    link: 'https://peaceful-depths-70788.herokuapp.com/',
    githublink: 'https://github.com/AndrewDippel/Note-Taker.git'
  },
  {
    title: 'Work Day Schedualer',
    img: 'Assets/Screenshot 2022-12-18 at 10.54.13 am.png',
    desc: 'one of my projects',
    link: 'https://andrewdippel.github.io/work-day-scheduler/',
    githublink: 'https://github.com/AndrewDippel/work-day-scheduler.git'
  },
  {
    title: 'Password Generator',
    img: 'Assets/Screenshot 2022-12-18 at 10.55.03 am.png',
    desc: 'one of my projects',
    link: 'https://andrewdippel.github.io/Password-generator/',
    githublink: 'https://github.com/AndrewDippel/Password-generator.git'
  }
]

export default function Blog() {
  return (
    <div>
      <h1>Projects</h1>
      <div style={{
        display: 'flex',
        margin: '30px',
        gap: '30px',
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {
          projects.map((project) => {
            return <SingleProject {...project} />
          })
        }
      </div>
    </div>
  );
}
