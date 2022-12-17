import React from 'react';
import Card from 'react-bootstrap/Card';

export default function About() {
  return (
    <Card style={{
      width: '70%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Card.Img variant="top" src='public/Assets/Profile picture.jpeg' />
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
          Junior full stack web developer with proficient skills in problem solving,
          research, and analytical skills. I have attended a Coding bootcamp through Sydney University
          producing projects using the following technologies HTML, CSS, JavaScript, Web APIs, Node, OOP,
          Express, SQL, React, and many more.

        </Card.Text>
      </Card.Body>
    </Card>
  );
}
