import React, { Component } from 'react'


class Footer extends Component {
  render() {
    return (
      <footer className='text-center text-lg-left' style={{position: "relative", left: 0, bottom: 0, right: 0, backgroundColor: "#448899", color:"white"}}>
        Nomadda {" "} © Gemme Fatal 2022
      </footer>
    )
  }
}

export default Footer