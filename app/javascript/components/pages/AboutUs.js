import React, { Component } from "react";
import {
  CardImg,
  Collapse,
  Button,
  CardBody,
  Card,
  CardHeader,
  CardFooter,
} from "reactstrap";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <>
        <div className="about-us-page">
          <h2 className="about-us-header">We are Gemme Fatale</h2>
          <Button className="about-button" color="primary" onClick={this.toggle} style={{ marginBottom: "1rem" }}>
            Meet Gemme Fatale
          </Button>
          <Collapse className="collapse" isOpen={this.state.collapse}>
            <Card className="team-card">
              <CardHeader className="about-header">Puana'ala K Amano</CardHeader>
              <CardImg className="pua-bit" alt="Pua-bitmoji" src="https://sdk.bitmoji.com/render/panel/10211812-99378340395_2-s5-v1.png?transparent=1&palette=1&scale=2"/>
              <CardBody className="about-card-body">
                Full-Stack Developer born and raised on Maui, Hawaii the most beautiful place in the world. I enjoy the outdoors with my two dogs and chicken 'Milky'. "Continuous learning is a way of life" -Pua
              </CardBody>
              <CardFooter style={{textAlign: "center"}}>
                <a
                  href="https://www.linkedin.com/in/pkamano/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pua's LinkedIn
                </a>
              </CardFooter>
            </Card>
            <Card className="team-card">
              <CardHeader className="about-header">Nicole Mares Rivera</CardHeader>
              <CardImg className="nicole-bit" alt="Nicole-bitmoji" src="https://sdk.bitmoji.com/render/panel/20054902-100355118586_3-s5-v1.png?transparent=1&palette=1&scale=2"/>
              <CardBody className="about-card-body">
                Full-Stack Developer originally from New York currently living in San Diego, California with a passion for coding. An animal aficionado who loves to spend time with her family outdoors and playing sports!
              </CardBody>
              <CardFooter style={{textAlign: "center"}}>
                <a
                  href="https://www.linkedin.com/in/nicole-mares-rivera"
                  target="_blank"
                  rel="noreferrer"
                >
                  Nicole's LinkedIn
                </a>
              </CardFooter>
            </Card>
            <Card className="team-card">
              <CardHeader className="about-header">Deanna 'Will' Williams</CardHeader>
              <CardImg className="will-bit" alt="Will-bitmoji" src="https://sdk.bitmoji.com/render/panel/10208518-100074578892_4-s5-v1.png?transparent=1&palette=1&scale=2"/>
              <CardBody className="about-card-body">
                Full-Stack Developer born and raised in a small town in Virginia but fell in love with the vibe here in San Diego, California. Dedicated to creative and meaningful digital experiences.
              </CardBody>
              <CardFooter style={{textAlign: "center"}}>
                <a
                  href="https://www.linkedin.com/in/deanna-will-williams/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Will's LinkedIn
                </a>
              </CardFooter>
            </Card>
          </Collapse>
        </div>
      </>
    );
  }
}

export default AboutUs;