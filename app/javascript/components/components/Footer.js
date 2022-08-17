import React, { Component } from 'react'
import {  } from 'reactstrap'

class Footer extends Component {
  render() {
    return (
      <footer className='text-center text-lg-left' style={{position: "fixed", left: 0, bottom: 0, right: 0, backgroundColor: "#448899", color:"white"}}>
        Nomadda {" "} © Gemme Fatal 2022
      </footer>
    )
  }
}
// style={{ color: "#448899"}}
export default Footer