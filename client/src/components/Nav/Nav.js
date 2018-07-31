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
          <NavbarBrand tag={Link} to="/" />

          <NavItem>
            <NavLink className="link-style" tag={Link} to="/">
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
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Toys
                </DropdownToggle>

                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink tag={Link} to="/alltoys">
                      <h5>All Toys</h5>
                    </NavLink>
                  </DropdownItem>
                  <hr />
                  {/* <DropdownItem divider /> */}
                  <DropdownItem>
                    <NavLink tag={Link} to="/beads">Beads</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink tag={Link} to="/bracelets">Bracelets</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink tag={Link} to="/keychains">Keychains</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink tag={Link} to="/pacifierholders">Pacifier Holders</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink tag={Link} to="/rattlers">Rattlers</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink tag={Link} to="/teethers">Teethers</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink tag={Link} to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact">Contact</NavLink>
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
                    <NavLink tag={Link} to="/Register">Register</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink tag={Link} to="/Items">Admin Db</NavLink>
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
