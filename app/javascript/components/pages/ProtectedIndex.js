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
        <div className="propage">
          <h1 className="indexheader">My Trips</h1>
          <div className= 'myTrips'>
            <Row sm="3" className="procardsgroup">
              {destinations &&
                destinations.map((destination) => {
                  return (
                    <Card key={destination.id} className="procards">
                      <CardImg className='proindeximg' top width="100%" src={destination.image} alt="Card image cap"/>
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
                          <Button className="probutton">Edit Trip</Button>
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