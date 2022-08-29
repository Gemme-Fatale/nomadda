import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardSubtitle, Col, CardImg, CardBody, CardTitle, CardText, CardGroup } from 'reactstrap'

class Index extends Component {

  render() {
    
    return (
      <>
        <div className='index-page'>
          <h2 className='index-header'>Browse countries</h2>
          <h4 className='index-header'>Click on the Countries to see the beautiful destinations</h4>
          <CardGroup className='index-card-group'>
            {this.props.countries && this.props.countries.map(country => {
              return (
                <Col sm='4' md='4' lg='4'key={country.id}>
                  <NavLink to={`/show/${country.name}`}>
                  <Card className='index-card' >
                    <CardImg className='index-img' top width='100%' src={country.image} alt='Card image cap' />
                    <CardBody>
                      <CardTitle>
                        {country.name}
                      </CardTitle>
                      <CardSubtitle>
                        Prime location: {country.prime_destination}
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
                  </NavLink>
                </Col>)})}
          </CardGroup>
        </div>
      </>
    )
  }
}

export default Index