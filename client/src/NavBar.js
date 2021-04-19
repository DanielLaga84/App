import React, { Component} from "react";
import { Collapse ,Nav ,Navbar ,NavbarBrand ,NavbarToggler , NavItem, NavLink} from "reactstrap";
import {Link} from "react-router-dom";

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <Navbar color="light" light expand="md">
            <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="m1-auto" navbar>
                    <NavItem>
                        <NavLink
                            href="https://twitter.com/oktadev">@oktadev</NavLink>
                    </NavItem>
                    <NavLink href="https://github.com/DanielLaga84/App">GitHub</NavLink>
                </Nav>
            </Collapse>
        </Navbar>;
    }
}
export default NavBar;