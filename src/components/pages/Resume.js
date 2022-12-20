import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Resume() {
  return (
    <Card style={{
      width: '50%',
      marginLeft: '25%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#727271',
      color: 'white'
    }}>
      <Card.Body>
        <Card.Title>Resume</Card.Title>
        <Card.Text>
          <a href="https://drive.google.com/uc?export=download&id=1F5I_3ziMQKBV-BNPHGmnx03Wi9N6H277" download>Download resume
          </a>
          <h3>Front-end proficiencies </h3>
          <ul>
            <li> HTML </li>
            <li> CSS </li>
            <li> Javascript </li>
            <li> JQuery </li>
            <li> Responsive Design </li>
            <li> React </li>
            <li> Bootstrap </li>
          </ul>
          <h3>Back-end proficiencies </h3>
          <ul>
            <li> API's </li>
            <li> Node </li>
            <li> Express </li>
            <li> MySQL </li>
            <li> Sequilize </li>
            <li> MongoDB </li>
            <li> Mongoose </li>
            <li> Rest </li>
            <li> GraphQL </li>
          </ul>

        </Card.Text>
      </Card.Body>
    </Card>
  );
}
