import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Happy Kids Accessories</ModalHeader>
          <ModalBody>
            Thank you for choosing to shop with us! Your item has been added to your shopping cart!
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Go to Cart</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Continue Shopping</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;