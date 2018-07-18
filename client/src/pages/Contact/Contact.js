import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
      <Form className="form" method="POST" action="https://formspree.io/pelkola.pam@gmail.com">
      <h1>Contact Us</h1>
      <FormGroup className="form-one">
  <Input className="form" type="email" name="email" placeholder="Your email" />
  <Label name="message" placeholder="Your message" />
  </FormGroup>
  <FormGroup className="form-two">
  <Input type="name" name="name" placeholder="Your name" />
  <Label name="message" placeholder="Your message" />
  </FormGroup>
  <FormGroup className="form-two">
  <Input type="address" name="address" placeholder="Your Address" />
  <Label name="message" placeholder="Your message" />
  <Button>Submit</Button>
  </FormGroup>
  

         
      //   <Button>Submit</Button>
      // </Form> 
      </div>
    );
  }
}