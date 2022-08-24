import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Row, CardText  } from 'reactstrap';
import { NavLink } from 'react-router-dom'


class ProtectedIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
        success: false
    }
  }

  render() {
    const {
      destinations,
      logged_in,
      current_user,
    } = this.props
    return (
      <>
        <div className="myTrips">
          <h2>My Trips</h2>
          <Row sm="3">
            {destinations &&
              destinations.map((destination) => {
                return (
                  <Card key={destination.id}>
                    <CardImg
                      top
                      width="100%"
                      src={destination.image}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>
                        {destination.location}, {destination.country}
                      </CardTitle>
                      <br />
                      <CardSubtitle>
                        Dates: {destination.start_date} - {destination.end_date}
                      </CardSubtitle>
                      <CardSubtitle>
                        Travelers: {destination.travelers}
                      </CardSubtitle>
                      <CardText>{destination.trip_details}</CardText>
                      <NavLink to={`/useredit/${destination.id}`}>
                        <Button>Edit Trip</Button>
                      </NavLink>
                      <Button>Delete Trip</Button>
                    </CardBody>
                  </Card>
                );
              })}
          </Row>
        </div>
      </>
    );
  }
}

export default ProtectedIndex