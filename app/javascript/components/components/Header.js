import React, { Component } from 'react'
import { NavItem, Nav } from 'reactstrap'
import {NavLink} from 'react-router-dom'

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <>
        <div className='header'>
          <Nav fill variant="tabs">
          {!logged_in &&
            <NavItem>
              <a href="/" className="nav-link" style={{ backgroundColor: "#448899", color: "white"}}>Home</a>
            </NavItem>
          }
          {logged_in &&
            <NavItem>
              <a href="/" className="nav-link" style={{ backgroundColor: "#448899", color: "white"}}>Home</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href="/countrieslist" className="nav-link" style={{ backgroundColor: "#448899", color: "white"}}>Countries</a>
            </NavItem>
          }
          {logged_in &&
            <NavItem>
              <a href="/countrieslist" className="nav-link" style={{ backgroundColor: "#448899", color: "white"}}>Countries</a>
            </NavItem>
          }
          {logged_in &&
            <NavItem>
              <NavLink to={"/mytrips"} className="nav-link" style={{ backgroundColor: "#448899", color: "white"}}>My Destinations</NavLink>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href="/resources" className="nav-link" style={{ backgroundColor: "#448899", color: "white"}}>Resources</a>
            </NavItem>
          }
          {logged_in &&
            <NavItem>
              <a href="/resources" className="nav-link" style={{ backgroundColor: "#448899", color: "white"}}>Resources</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href="/aboutus" className="nav-link" style={{ backgroundColor: "#448899", color: "white"}}>About Us</a>
            </NavItem>
          }
          {logged_in &&
            <NavItem>
              <a href="/aboutus" className="nav-link" style={{ backgroundColor: "#448899", color: "white"}}>About Us</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link" style={{ backgroundColor: "#448899", color: "white"}}>Sign In</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={new_user_route} className="nav-link" style={{ backgroundColor: "#448899", color: "white"}}>Sign Up</a>
            </NavItem>
          }
          {logged_in &&
            <NavItem>
              <a href={sign_out_route} className="nav-link" style={{ backgroundColor: "#448899", color: "white"}}>Sign Out</a>
            </NavItem>
          }
          </Nav>
        </div>
      </>
    )
  }
}

export default Header