import React, { Component } from 'react';
import { Navbar, Nav , Dropdown, DropdownButton } from 'react-bootstrap';
import { dialects } from '../constants/dialects';
import {setDialect} from '../reducers/actions';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { Mixpanel } from '../lib/MixPanel';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://dblint.io",
      db: "MYSQL"
    };
  }

  handleSelect(db) {
    this.props.onDbClick(dialects[db]);
    Mixpanel.track("Choose Dialect", {
      dialect: dialects[db],
      source: "Footer"
    })
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" className="flex-fill">
          <Navbar.Brand>
            <FontAwesome name="database"/>
            <a href={this.state.url}> DbLint</a>
          </Navbar.Brand>
          <Navbar.Text color="#fff"> Tools for the Database Engineer</Navbar.Text>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <DropdownButton title="Databases" id="collapsible-nav-dropdown"
                            onSelect={(key) => this.handleSelect(key)}>
                {
                  Object.keys(dialects).map((key, index) => {
                    return (
                      <Dropdown.Item key={index} eventKey={key}
                            className="small bold">
                        {dialects[key].display}
                      </Dropdown.Item>
                    )
                  })
                }
              </DropdownButton>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onDbClick: db => {
      dispatch(setDialect(db))
    }
  }
}

export default connect(null, mapDispatchToProps)(Header)
