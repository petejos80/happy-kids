// import React from 'react';
// import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


// class Modal1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false
//     };

//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     this.setState({
//       modal: !this.state.modal
//     });
//   }

//   render() {
//     return (
//       <Container>
//         <Button color="danger" onClick={this.toggle}>Modal</Button>
//         <Modal isOpen={this.state.modal} toggle={this.toggle}>
//           <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
//           <ModalBody>
//             (...)
//           </ModalBody>
//           <ModalFooter>
//             <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
//             <Button color="primary">Save changes</Button>
//           </ModalFooter>
//         </Modal>
//       </Container>
//     );
//   }
// }

// export default Modal1;
// import React, { Component } from 'react';
// import injectSheet from 'react-jss';
// import isNil from 'lodash/fp/isNil';
// import styles from './SimpleModalStyles'; // Import styles

// // Declaration of the component as React Class Component
// class SimpleModal extends Component {
  
//   // Init of the component before it is mounted.
//   constructor(props) {
//     super(props);

//     this.handleKeyUp = this.handleKeyUp.bind(this);
//     this.handleOutsideClick = this.handleOutsideClick.bind(this);
//   }
  
//   // Add listeners immediately after the component is mounted.
//   componentDidMount() {
//     window.addEventListener('keyup', this.handleKeyUp, false);
//     document.addEventListener('click', this.handleOutsideClick, false);
//   }

//   // Remove listeners immediately before a component is unmounted and destroyed.
//   componentWillUnmount() {
//     window.removeEventListener('keyup', this.handleKeyUp, false);
//     document.removeEventListener('click', this.handleOutsideClick, false);
//   }
  
//   // Handle the key press event.
//   handleKeyUp(e) {
//     const { onCloseRequest } = this.props;
//     const keys = {
//       27: () => {
//         e.preventDefault();
//         onCloseRequest();
//         window.removeEventListener('keyup', this.handleKeyUp, false);
//       },
//     };

//     if (keys[e.keyCode]) { keys[e.keyCode](); }
//   }
  
//   // Handle the mouse click on browser window.
//   handleOutsideClick(e) {
//     const { onCloseRequest } = this.props;

//     if (!isNil(this.modal)) {
//       if (!this.modal.contains(e.target)) {
//         onCloseRequest();
//         document.removeEventListener('click', this.handleOutsideClick, false);
//       }
//     }
//   }
  
//   // Render the component passing onCloseRequest and children as props.
//   render () {
//     const {
//       onCloseRequest,
//       children,
//       sheet: { classes },
//     } = this.props;
    
//     return (
//       <div className={classes.modalOverlay}>
//         <div
//           className={classes.modal}
//           ref={node => (this.modal = node)}
//         >
//           <div className={classes.modalContent}>
//             {children}
//           </div>
//         </div>

//         <button
//           type="button"
//           className={classes.closeButton}
//           onClick={onCloseRequest}
//         />
//       </div>
//     );
//   }
// }

// // Export the component to use it in other components.
// export default injectSheet(styles)(SimpleModal);

// import React from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// class ModalExample extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false
//     };

//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     this.setState({
//       modal: !this.state.modal
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
//         <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//           <ModalHeader toggle={this.toggle}>Modal itle</ModalHeader>
//           <ModalBody>
//            Picture and Description
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={this.toggle}>Add to Cart</Button>{' '}
//             <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//           </ModalFooter>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default ModalExample;