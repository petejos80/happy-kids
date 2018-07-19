import React from 'react';
import "./Nav.css"
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
 render() {
   return (
     <div>
       <Navbar className="nav-style" color='light' light expand='md'>
         <NavbarBrand href='/'></NavbarBrand>
         
      <img className="logo"src="../images/logo.png"alt="img" width="150px" />

         <NavbarToggler onClick={this.toggle} />
         <Collapse isOpen={this.state.isOpen} navbar>
           <Nav className='ml-auto' navbar>
             <NavItem>
               <NavLink className="link-style" href='/'>Home</NavLink>
             </NavItem>

             <UncontrolledDropdown nav inNavbar>
               <DropdownToggle className="link-style" nav caret>
                 Toys
               </DropdownToggle>
               <DropdownMenu right>
                 <DropdownItem>
                   Bracelets <NavLink href='/bracelets/'></NavLink>
                 </DropdownItem>
                 <DropdownItem divider />
                 <DropdownItem>
                   Keychains <NavLink href='/keychains'></NavLink>
                 </DropdownItem>
                 <DropdownItem divider />
                 <DropdownItem>
                   Pacifier Holders <NavLink href='/pacifierholders'></NavLink>
                 </DropdownItem>
                 <DropdownItem divider />
                 <DropdownItem>
                   Rattlers <NavLink href='/rattlers'></NavLink>
                 </DropdownItem>
                 <DropdownItem divider />
                 <DropdownItem>
                   Teethers <NavLink href='/teethers'></NavLink>
                 </DropdownItem>
               </DropdownMenu>
             </UncontrolledDropdown>          

             {/* <NavItem>
               <NavLink className="link-style" href='/home'>About</NavLink>
             </NavItem> */}
             <NavItem>
               <NavLink className="link-style" href='/about/'>About</NavLink>
             </NavItem>
             <NavItem>
               <NavLink className="link-style" href='/contact/'>Contact</NavLink>
             </NavItem>

             <UncontrolledDropdown nav inNavbar>
               <DropdownToggle className="link-style" nav caret>
                 Sign In
               </DropdownToggle>
               <DropdownMenu right>
                 <DropdownItem>
                   Sign In <NavLink href='/Login'></NavLink>
                 </DropdownItem>
                 <DropdownItem divider />
                 <DropdownItem>
                   Register <NavLink href='/Register'></NavLink>
                 </DropdownItem>
               </DropdownMenu>
             </UncontrolledDropdown>
           </Nav>
         </Collapse>
       </Navbar>
     </div>
   );
 }
}