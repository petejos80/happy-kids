import React from "react";
import "./Nav.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

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
            <NavLink className="link-style" href="/">
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
                <NavLink href="/">Home</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle href="/api/items" nav caret>
                  Toys
                </DropdownToggle>

                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="alltoys">
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
                <NavLink href="/about/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact/">Contacto</NavLink>
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
                    <NavLink href="/Register">Register</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/Items">Admin Db</NavLink>
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
