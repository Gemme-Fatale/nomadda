import React, { Component } from 'react'
import { UncontrolledCarousel, Row, Col, Card, CardBody, CardTitle, CardText, CardGroup, CardImg } from "reactstrap";
import ScrollToTop from '../components/ScrollToTop';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carouselPics : [
        {
          src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          altText: 'Slide 1',
          caption: 'Paradise',
          key: 1,
        },
        {
          src: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          altText: 'Slide 2',
          caption: 'A Dream',
          key: 2,
        },
        {
          src: 'https://images.unsplash.com/photo-1446160657592-4782fb76fb99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
          altText: 'Slide 3',
          caption: 'Explore',
          key: 3,
        },
        {
          src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
          altText: 'Slide 4',
          caption: 'Fantasy',
          key: 4,
        },
        {
          src: 'https://images.unsplash.com/photo-1520645521318-f03a712f0e67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          altText: 'Slide 5',
          caption: 'Travel',
          key: 5,
        },
      ]
    }
  }

  render() {
    return (
      <>
        <div className="all-home">
          <br />
          <h1 className="home-page-header">Nomadda the place or space...</h1>
          <br />
          <Row className="c-pics">
            <Col className="mx-auto">
              <UncontrolledCarousel
                className="round-pics"
                items={this.state.carouselPics}
              />
            </Col>
          </Row>
          <br />
          <CardGroup className="home-page">
            <Card>
              <CardBody className="home-page">
                <CardTitle tag="h5" style={{ color: "#77DDEE" }}>
                  Safe and Welcoming Destinations
                </CardTitle>
                <CardText style={{ color: "#448899" }}>
                  {" "}
                  Nomadda can assure you that we have verified the travel
                  locations to have the most welcoming environments for the
                  LGBTQ+ community. These destinations have been ranked by many
                  different factors including family friendliness, hate-crime
                  ratings, and by the locals interactions with tourists
                  visiting.
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="home-page">
                <CardTitle tag="h5" style={{ color: "#77DDEE" }}>
                  Trip Builder
                </CardTitle>
                <CardText style={{ color: "#448899" }}>
                  {" "}
                  With this all inclusive web application, you can use Nomadda
                  to search areas most friendly to the LGBTQ+ community, create
                  trips for future planned favorite destinations, and even
                  search through external resources that we have included on our
                  More Resources page. We have the climate, nightlife, and more!
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="home-page">
                <CardTitle tag="h5" style={{ color: "#77DDEE" }}>
                  Crime statistics
                </CardTitle>
                <CardText style={{ color: "#448899" }}>
                  Although, we can guarantee you a safe and welcoming
                  destination to visit, Nomadda is not responsible for political
                  climate shifts, random occurrences of individuals local to
                  these places, or property damage during your stay. Please take
                  the time before your trip to look up the current events of the
                  destinations you wish to travel for the best and safest
                  possible trip.
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="home-page">
                <CardTitle tag="h5" style={{ color: "#77DDEE" }}>
                  Resource Hub
                </CardTitle>
                <CardText style={{ color: "#448899" }}>
                  The resources we have provided have been thoroughly vetted to
                  make sure that they are not only a verified source of
                  information but they are from actual travelers in the LGBT+
                  community! They give their honest opinions on these
                  destinations and their feedback is very valuable in order to
                  give the low down honest truth about these places.
                </CardText>
              </CardBody>
            </Card>
          </CardGroup>
          <br />
          <Card className="my-2">
            <CardImg alt="Pride flag" src="https://images.unsplash.com/photo-1542358935821-e4e9f3f3c15d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" style={{height: 250}} top width="100%"/>
            <CardBody className='flag'>
              <CardTitle tag="h5">Pride is for everyone</CardTitle>
              <CardText>
                "I learned compassion from being discriminated against. Everything bad that has ever happened to me has taught me compassion." <br/> - Ellen DeGeneres
              </CardText>
            </CardBody>
          </Card>
          <ScrollToTop/>
          <br/>
          <br/>
          <br/>
        </div>
      </>
    );
  }
}

export default Home