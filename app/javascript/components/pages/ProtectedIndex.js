import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Row  } from 'reactstrap';
import { Nav, NavItem } from 'reactstrap'
import UserCreate from './UserCreate';

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
          {destinations && destinations.filter(destination => {
            return(
              <Card key ={destination.id}>
                <CardImg top width="100%" src={destination.image} alt="Card image cap" ></CardImg>
                <CardBody>
                    <CardTitle>{destination.start_date}  /month </CardTitle>
                    <CardSubtitle>{destination.street} {destination.city} </CardSubtitle>
                    <CardSubtitle>{destination.bedrooms}/ {destination.bathroom}</CardSubtitle>
                    <Button>More Info</Button>
                </CardBody>
              </Card>)})}
          </Row>
        </div>
      </>
    )
  }
}

export default ProtectedIndex