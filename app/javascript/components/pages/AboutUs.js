import React, { Component } from "react";
import { Grid, Row, Col, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <>
        <h2>Meet Gemme Fatale!</h2>
        <Row sm="3">
          <Button color="info" size="sm" onClick={this.toggle}>
            {this.props.buttonLabel} Meet Nicole!{" "}
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Nicole Mares Rivera</ModalHeader>
            <ModalBody>
              Nicole is a BAMF who loves dogs and will code you under the table.
              Her skrills are no match so you better be on your mf A GAME! Go to{" "}
              <a
                href="https://www.linkedin.com/in/nicole-mares-rivera-957587245/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Nicole's LinkedIn!
              </a>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </Row>
        {/* <Row>
        <Col>
       <a href="https://www.linkedin.com/in/pkamano/" target="_blank" rel="noreferrer">Pua LinkedIn</a>
      </Col>
        <Col>
        <a href="https://www.linkedin.com/in/deanna-will-williams/" target="_blank" rel="noreferrer">Will LinkedIn</a>
        </Col>
        <Col><a href="https://www.linkedin.com/in/nicole-mares-rivera-957587245/" target="_blank" rel="noreferrer">Nicole LinkedIn</a></Col>
      </Row> */}
      </>
    );
  }
}
export default AboutUs