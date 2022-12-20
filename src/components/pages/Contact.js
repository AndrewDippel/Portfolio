import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Contact() {
  const validate = (event) => {
    const value = event.target.value
    // no email or invalid email
    if (!value || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      setIsEmailValid(false)
    }
    else {
      setIsEmailValid(true)
    }
  };
  const [isEmailValid, setIsEmailValid] = useState(true)

  const nameRequired = (event) => {
    const value = event.target.value
    // no email or invalid email
    if (!value) {
      setIsnameRequired(false)
    }
    else {
      setIsnameRequired(true)
    }
  };
  const [isnameRequired, setIsnameRequired] = useState(true)

  const messageRequired = (event) => {
    const value = event.target.value
    // no email or invalid email
    if (!value) {
      setIsmessageRequired(false)
    }
    else {
      setIsmessageRequired(true)
    }
  };
  const [ismessageRequired, setIsmessageRequired] = useState(true)



  return (
    <Form style={{
      marginLeft: '25%',
      width: '50%',
      backgroundColor: '#727271',
      color: 'white',
      borderRadius: '10px'
    }}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Name" placeholder="Full Name" onBlur={nameRequired} />
        {!isnameRequired && (
          <p style={{ color: 'red' }}>Field Is Required</p>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" size="lg" placeholder="Email" onBlur={validate} />
        {!isEmailValid && (
          <p style={{ color: 'red' }}>Invalid email</p>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control type="Message" as="textarea" size="lg" placeholder="Message" onBlur={messageRequired} />
        {!ismessageRequired && (
          <p style={{ color: 'red' }}>Field Is Required</p>
        )}
      </Form.Group>

      <Button variant="warning" type="submit">
        Submit
      </Button>
    </Form>
  );
}
