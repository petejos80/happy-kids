import React from "react";
import "./Nav.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  logout = () => {
    localStorage.removeItem("jwtToken");
    this.props.history.push("/");
    // window.location.reload();
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout = () => {
    localStorage.removeItem("jwtToken");
    window.location.reload();
  };

  render() {
    return (
      <div>
        <Navbar className="nav-style" color="light" light expand="md">
          <NavbarBrand href="/" />

          <NavItem>
            <NavLink className="link-style" to="/">
              <img
                className="logo"
                src="../images/logo.png"
                alt="img"
                width="150px"
              />
            </NavLink>
          </NavItem>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle to="/api/items" nav caret>
                  Toys
                </DropdownToggle>

                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/alltoys/">
                      <h5>All Toys</h5>
                    </NavLink>
                  </DropdownItem>
                  <hr />
                  {/* <DropdownItem divider /> */}
                  <DropdownItem>
                    <NavLink to="/beads/">Beads</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/bracelets/">Bracelets</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/keychains">Keychains</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/pacifierholders">Pacifier Holders</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/rattlers">Rattlers</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/teethers">Teethers</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink to="/about/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact/">Contacts</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Admin
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    {localStorage.getItem("jwtToken") ? (
                      <button class="btn btn-primary" onClick={this.logout}>
                        Logout
                      </button>
                    ) : (
                      <Link to="/login">
                        <button class="btn btn-primary">Login</button>
                      </Link>
                    )}
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/Register">Register</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/Items">Admin Db</NavLink>
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
