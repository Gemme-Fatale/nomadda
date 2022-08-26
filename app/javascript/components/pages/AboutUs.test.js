import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AboutUs from './AboutUs'

Enzyme.configure({ adapter: new Adapter() })

describe("When About Us renders", () => {
  let aboutUsRender;
    beforeEach(() => {
      aboutUsRender = shallow(<AboutUs />)
    })
  it("it contains one div", () => {
    const aboutUsDiv = aboutUsRender.find("div")
    expect(aboutUsDiv.length).toEqual(1)
  })
  it("it contains a header", () => {
    const aboutUsHeader = aboutUsRender.find("h2")
      expect(aboutUsHeader.length).toEqual(1)
      expect(aboutUsHeader.text()).toEqual("We are Gemme Fatale")
  })
  it("it displays one Button", () => {
    const aboutUsButton = aboutUsRender.find("Button")
    expect(aboutUsButton.length).toEqual(1)
  })
  it("it displays one Collapse", () => {
    const aboutUsCollapse = aboutUsRender.find("Collapse")
    expect(aboutUsCollapse.length).toEqual(1)
  })
  it("it displays three Cards", () => {
    const aboutUsCard = aboutUsRender.find("Card")
    expect(aboutUsCard.length).toEqual(3)
  })
  it("it displays three Card Headers", () => {
    const aboutUsCardHeader = aboutUsRender.find("CardHeader")
    expect(aboutUsCardHeader.length).toEqual(3)
  })
  it("it displays three Card Images", () => {
    const aboutUsCardImg = aboutUsRender.find("CardImg")
    expect(aboutUsCardImg.length).toEqual(3)
  })
  it("it contains four CardBodys", () => {
    const aboutUsCardBody = aboutUsRender.find("CardBody")
    expect(aboutUsCardBody.length).toEqual(3)
  })
  it("it displays three Card Footers", () => {
    const aboutUsCardFooter = aboutUsRender.find("CardFooter")
    expect(aboutUsCardFooter.length).toEqual(3)
  })
})