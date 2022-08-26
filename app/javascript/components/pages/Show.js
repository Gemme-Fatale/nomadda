import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap'

class Show extends Component {

  render() {
    let { destinations } = this.props

    return (
      <>
        <div className="show=container">
          <Row sm="3">
          {destination && destinations.map(destination => {
            return(
              <Card id="showCard">
                <CardImg src={destination.image} />
                <CardBody>
                  <CardTitle>
                    {destination.location}
                  </CardTitle>
                  <CardSubtitle>
                    {destination.country}
                  </CardSubtitle>
                  <CardText>
                    {destination.main_attraction}
                  </CardText>
                  { logged_in &&
                  <NavLink to={'/usercreate'} >
                    <Button>Create A Trip!</Button>
                  </NavLink>
                  }
                </CardBody>
              </Card>)})}
          </Row>
        </div>
      </>
    )
  }
}

export default Show