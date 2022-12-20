import React from 'react';
import SingleProject from '../SingleProject';

const projects = [
  {
    title: 'Text Editor',
    img: 'Assets/Screenshot 2022-12-10 at 3.04.25 pm.png',
    desc: 'This text editor was created to make notes or code snippets with or without an internet connection for reliable and easy retrieval later.',
    link: 'https://radiant-escarpment-30419.herokuapp.com/',
    githublink: 'https://github.com/AndrewDippel/Text-Editor.git'
  },
  {
    title: 'Blog',
    img: 'Assets/Screenshot 2022-11-21 at 6.54.42 pm.png',
    desc: 'A simple blog page with user accounts to post your own thought and be able to comment on others thoughts.',
    link: 'https://nameless-crag-26300.herokuapp.com/',
    githublink: 'https://github.com/AndrewDippel/Dippels-Blog.git'
  },
  {
    title: 'Trip Itinerary',
    img: 'Assets/TripItinerary.png',
    desc: 'A easy to follow travel itinerary page so its easy to keep track of all your destinations',
    link: 'https://arcane-beach-31622.herokuapp.com/',
    githublink: 'https://github.com/AndrewDippel/Trip-Itinerary.git'
  },
  {
    title: 'Note Taker',
    img: 'Assets/noteTaker.png',
    desc: 'Basic note taker app idea for keeping track of grocerie list, your to do list and many more. ',
    link: 'https://peaceful-depths-70788.herokuapp.com/',
    githublink: 'https://github.com/AndrewDippel/Note-Taker.git'
  },
  {
    title: 'Work Day Schedualer',
    img: 'Assets/Screenshot 2022-12-18 at 10.54.13 am.png',
    desc: 'Nice easy to follow work day scedular making it easy to keep track of all your apointments and meetings throughout the day.',
    link: 'https://andrewdippel.github.io/work-day-scheduler/',
    githublink: 'https://github.com/AndrewDippel/work-day-scheduler.git'
  },
  {
    title: 'Password Generator',
    img: 'Assets/Screenshot 2022-12-18 at 10.55.03 am.png',
    desc: 'In need of a new password simply run this page and follow the prompts to create your own unique password with all the nessisary characters.',
    link: 'https://andrewdippel.github.io/Password-generator/',
    githublink: 'https://github.com/AndrewDippel/Password-generator.git'
  }
]

export default function Blog() {
  return (
    <div>
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
