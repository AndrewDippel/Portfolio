import React from 'react';
import SingleProject from '../SingleProject';

const projects = [{ title: 'project1', desc: 'one of my projects' }, { title: 'project1' }, { title: 'project1' }, { title: 'project1' }]

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
