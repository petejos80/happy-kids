import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="container contact-style">
        <Form className="form" method="POST" action="https://formspree.io/abinding@gmail.com">
          <h1>Contact Us</h1>

          <FormGroup className="form-one">
            <Input className="form" type="name" name="name" placeholder="Your name" />
            <Label name="message" for="name" />
          </FormGroup>

          <FormGroup className="form-two">
            <Input className="form" type="email" name="email" placeholder="Your email" />
            <Label name="message" for="name" />
          </FormGroup>
          
          <FormGroup className="form-three">
            <Input className="form" type="textarea" name="message" placeholder="Your message" />
            <Label name="message" for="message" />     
          </FormGroup>
          <Button type="submit">Send</Button>
        </Form>
      </div>
    );
  }
}

export default Contact;
