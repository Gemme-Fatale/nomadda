import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Row, CardText  } from 'reactstrap';


class ProtectedIndex extends Component {
  render() {
    const {
      destinations,
        logged_in,
        current_user,
    } = this.props
    
    return (
        <>
      <h1></h1>
      <div className= 'myTrips'>
        <Row sm="3">
        {destinations && destinations.map(destination => {
                    return(
                <Card key ={destination.id}>
                    <CardImg top width="100%" src={destination.image} alt="Card image cap" ></CardImg>
                    <CardBody>
                        <CardTitle>{destination.location}, {destination.country}</CardTitle>
                        <br/>
                        <CardSubtitle>Dates: {destination.start_date} - {destination.end_date}</CardSubtitle>
                        <CardSubtitle>Travelers: {destination.travelers}</CardSubtitle>
                        <CardText>{destination.trip_details}</CardText>
                        <Button>More Info</Button>
                    </CardBody>
                </Card>
                    )
                    })}
            </Row>
        </div>
      </>

    )
  }
}

export default ProtectedIndex