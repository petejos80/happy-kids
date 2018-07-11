import React from 'react';
import {
 Collapse,
 Navbar,
 NavbarToggler,
 NavbarBrand,
 Nav,
 NavItem,
 NavLink,
 UncontrolledDropdown,
 DropdownToggle,
 DropdownMenu,
 DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
 constructor(props) {
   super(props);

   this.toggle = this.toggle.bind(this);
   this.state = {
     isOpen: false
   };
 }
 toggle() {
   this.setState({
     isOpen: !this.state.isOpen
   });
 }

 goTo(route) {
  this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }


 render() {
  const { isAuthenticated, userHasScopes } = this.props.auth;
   return (
     <div>
       <Navbar color='light' light expand='md'>
         <NavbarBrand href='/'>Happy Kids</NavbarBrand>

         <NavbarToggler onClick={this.toggle} />
         <Collapse isOpen={this.state.isOpen} navbar>
           <Nav className='ml-auto' navbar>
             <NavItem>
               <NavLink href='/components/'>Home</NavLink>
             </NavItem>
             <NavItem>
               <NavLink href='https://github.com/reactstrap/reactstrap'>Toys</NavLink>
             </NavItem>
             <NavItem>
               <NavLink href='/components/'>About</NavLink>
             </NavItem>
             <NavItem>
               <NavLink href='/components/'>Contact</NavLink>
             </NavItem>
             <NavItem>
               <NavLink href='/components/'>Reviews</NavLink>
             </NavItem>
             <NavItem>
               <NavLink href='/components/'>Orders</NavLink>
             </NavItem>
             {
              !isAuthenticated() && (
                  <NavItem
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </NavItem>
                )
            }
            {
              isAuthenticated() && (
                  <NavItem
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </NavItem>
                )
            }
             {/* <UncontrolledDropdown nav inNavbar>
               <DropdownToggle nav caret>
                 Sign In
               </DropdownToggle>
               <DropdownMenu right>
                 <DropdownItem>
                   Sign In
                 </DropdownItem>
                 <DropdownItem divider />
                 <DropdownItem>
                   Create New User
                 </DropdownItem>
               </DropdownMenu>
             </UncontrolledDropdown> */}
           </Nav>
         </Collapse>
       </Navbar>
     </div>
   );
 }
}