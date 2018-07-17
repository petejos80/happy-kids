import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Contact extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup className="form-one">
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup className="form-two">
          <Label for="exampleName">Name</Label>
          <Input type="Name" name="Username" id="exampleName" placeholder="name placeholder" />
        </FormGroup>
        <FormGroup className="form-three">
          <Label for="exampleAddress">Address</Label>
          <Input type="Address" name="Address" id="exampleAddress" placeholder="Address placeholder" />
        </FormGroup>
       
        <FormGroup className="form-four">
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        
       
         
        <Button>Submit</Button>
      </Form>
    );
  }
}
