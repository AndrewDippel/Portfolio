import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Contact() {
  const validate = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    return errors
  };

  return (
    <Card styles={{
      marginleft: '25%',
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="Name" placeholder="Full Name" required isInvalid />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="Email" size="lg" placeholder="Email" onChange={validate} required />
          <Form.Control.Feedback type="invalid">
            please enter a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control type="Message" as="textarea" size="lg" placeholder="Message" required isInvalid />
          <Form.Control.Feedback type="invalid">
            Message is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
}
