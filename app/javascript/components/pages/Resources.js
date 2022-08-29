import React, { Component } from 'react'
import { List, ListInlineItem, Card, CardText, CardBody, CardSubtitle, Row } from 'reactstrap';

class Resources extends Component {
  render() {
    return (
      <>
        <div className='resource-page'>
          <h2 className='resource-header'>External Resources</h2>
          <Row sm="3">
            <Card className='left-card-resource' style={{position: 'center', border: "light", width: '25rem'}}>
              <CardBody>
                <List type="inline">
                  <CardSubtitle className='left-card-title-resource'>Travel Websites</CardSubtitle>
                  <ListInlineItem>
                    <a href='https://travel.state.gov/content/travel/en/international-travel/before-you-go/travelers-with-special-considerations/lgbtqi.html' target="_blank" rel="noreferrer" style={{ color: "#448899" }}>Travel.gov</a>
                  </ListInlineItem>
                  <br/>
                  <p style={{ color: "#F8A964" }}>
                    Travel.gov is a travel website for all travelers that information about safe travel tips such as travel insurance, passport information, and what to know while the traveler is at the destination. Along with more resourceful information.
                  </p>
                  <br/>
                  <ListInlineItem>
                    <a href='https://www.iglta.org/' target="_blank" rel="noreferrer" style={{ color: "#448899" }}>IGLTA</a>
                  </ListInlineItem>
                  <br/>
                  <p style={{ color: "#F8A964" }}>
                    The International Gay and Lesbian Travel Association is a large network that guides the travelers in planning a trip anywhere in the world! The site has many LGBTQ friendly places to stay (hotels, Air BnB, hostels), events, and blogs to help travelers get the most out of their travel experience.
                  </p>
                  <br/>
                  <ListInlineItem>
                    <a href='https://worldpopulationreview.com/country-rankings/crime-rate-by-country' target="_blank" rel="noreferrer" style={{ color: "#448899" }}>Country Crime Statistics</a>
                  </ListInlineItem>
                  <br/>
                  <p style={{ color: "#F8A964" }}>
                    An external website showing the crime statistics (as reported by government entities from that country). This site can give the travelers an overview of the area that traveler wants to go to. They can then make the determination based off of the data if they want to travel to that country or not. 
                  </p>  
                </List>
              </CardBody>
            </Card>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Card className='right-card-resource' style={{position: 'center', border: "light", width: '25rem' }}>
              <CardBody>
                <List type="inline">  
                  <CardSubtitle className='right-card-title-resource'>Top LGBTQ Travel Blogs</CardSubtitle>
                  <br/>
                  <ListInlineItem>
                    <a href='https://www.ellgeebe.com/' target="_blank" rel="noreferrer" style={{ color: "#448899" }}>ellgeebe.com</a>
                  </ListInlineItem>
                  <br/>
                  <p style={{ color: "#F8A964" }}>
                    An online community for LGBTQ travelers to connect and share travel tips, styles, preferences, etc...
                  </p>
                  <ListInlineItem>
                    <a href='https://www.theglobetrotterguys.com/category/gay-travel/' target="_blank" rel="noreferrer" style={{ color: "#448899" }}>The Globetrotter Guys</a>
                  </ListInlineItem>
                  <br/>
                  <p style={{ color: "#F8A964" }}>
                    Read travel experiences from all over the world through the eyes of UK based gay couple, Ben and Sion aka The Globetrotter Guys.
                  </p>
                  <ListInlineItem>
                    <a href='https://www.27travels.com/' target="_blank" rel="noreferrer" style={{ color: "#448899" }}>27 Travels</a>
                  </ListInlineItem>
                  <br/>
                  <p style={{ color: "#F8A964" }}>
                    Follow international and US based travel vlogs, fashion, and vegan food recommendations from Brooklyn, NY based lesbian couple Gabi and Shanna.
                  </p>
                  <ListInlineItem>
                    <a href='https://passportmagazine.com/' target="_blank" rel="noreferrer" style={{ color: "#448899" }}>Passport Magazine</a>
                  </ListInlineItem>
                  <br/>
                  <p style={{ color: "#F8A964" }}>
                    An online travel magazine with print articles, vlogs, blogs, and resources promoting safe travel for the LGBTQ community, also sponsors live events globally throughout the year. 
                  </p>
                  <br/>
                  <br/>
                  <CardText style={{ color: "#77DDEE" }}>AND SO MANY MORE!!!</CardText>
                </List>
              </CardBody>  
            </Card>
          </Row>
        </div>
      </>
    )
  }
}

export default Resources