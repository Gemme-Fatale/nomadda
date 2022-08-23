import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Card, CardSubtitle, Col, CardImg, CardBody, CardTitle, CardText, CardGroup } from 'reactstrap'

class Index extends Component {
  render() {
    return (
      <>
      <div>Browse countries</div>
      <div> Browse through the countries below and see the beautiful destinations they have to offer.</div>
        <CardGroup>
          {this.props.countries && this.props.countries.map(country => {
            return (
              <Col sm='4' md='4' lg='4'>
                <Card className='card'>
                  <CardImg top width='100%' src={country.image} alt='Card image cap' />
                  <CardBody>
                    <CardTitle>
                      {country.name}
                    </CardTitle>
                    <CardSubtitle>
                      Prime location: {country.prime_location}
                    </CardSubtitle>
                    <CardSubtitle> 
                      NightLife Rating: {country.nightlife}
                    </CardSubtitle>
                    <CardSubtitle> 
                      Family Friendly?: {country.family_friendly}
                    </CardSubtitle>
                    <CardText>
                      Known for: {country.known_for}
                    </CardText>
                  </CardBody>
                </Card>
              </Col>)})}
        </CardGroup>
      </>
    )
  }
}

export default Index