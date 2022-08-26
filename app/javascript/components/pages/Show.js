import React, { Component } from "react";
import {
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Show extends Component {

  render() {
    const { destinations, logged_in, current_user } = this.props;

    let countryDestinations = destinations.filter(
      (destination) =>
        destination.visitable_type === "Country" &&
        destination.country === this.props.match.params.country
    );

    return (
      <>
        <div className="show=container">
          <Row sm="3">
            {countryDestinations &&
              countryDestinations.map((destination) => {
                return (
                  <Card id="showCard" key={destination.id}>
                    <CardImg src={destination.image} />
                    <CardBody>
                      <CardTitle>{destination.location}</CardTitle>
                      <CardSubtitle>{destination.country}</CardSubtitle>
                      <CardText>
                        This beautiful location is known for:{" "}
                        {destination.main_attraction}
                      </CardText>
                        <NavLink to={"/usercreate"}>
                          <Button>Create A Trip!</Button>
                        </NavLink>
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

export default Show;
