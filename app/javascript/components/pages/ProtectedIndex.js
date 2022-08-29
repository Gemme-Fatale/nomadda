import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  CardText,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class ProtectedIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
    };
  }

  render() {
    const { destinations } = this.props;
    return (
      <>
        <div className="pro-page">
          <h1 className="index-header">My Trips</h1>
          <div className= 'my-trips'>
            <Row sm="3" className="pro-cards-group">
              {destinations &&
                destinations.map((destination) => {
                  return (
                    <Card key={destination.id} className="pro-cards">
                      <CardImg className='pro-index-img' top width="100%" src={destination.image} alt="Card image cap"/>
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
                          <Button className="pro-button">Edit Trip</Button>
                        </NavLink>
                        <NavLink to={"/mytrips"} >
                          <Button onClick={() => this.props.deleteUserDestination(destination.id)}>
                            Delete Trip
                          </Button>
                        </NavLink>
                      </CardBody>
                    </Card>
                  );
                })}
            </Row>
          </div>
        </div>
      </>
    );
  }
}

export default ProtectedIndex;