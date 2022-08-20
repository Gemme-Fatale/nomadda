import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({ adapter: new Adapter() })

describe("When Not Found renders", () => {
  let homeRender;
    beforeEach(() => {
      homeRender = shallow(<Home />)
    })
  it("it contains one div", () => {
    const homeHeading = homeRender.find("div")
    expect(homeHeading.length).toEqual(1)
  })
  it("it contains one Row", () => {
    const homeRow = homeRender.find("Row")
    expect(homeRow.length).toEqual(1)
  })
  it("it contains one Column", () => {
    const homeColumn = homeRender.find("Col")
    expect(homeColumn.length).toEqual(1)
  })
  it("it displays one UncontrolledCarousel", () => {
    const homeCarousel = homeRender.find("UncontrolledCarousel")
    expect(homeCarousel.length).toEqual(1)
  })
  it("it displays eight breaks on the page", () => {
    const homeWhiteSpace = homeRender.find("br")
    expect(homeWhiteSpace.length).toEqual(8)
  })
  it("it contains one CardGroup", () => {
    const homeCardGroup = homeRender.find("CardGroup")
    expect(homeCardGroup.length).toEqual(1)
  })
  it("it contains five Card(s)", () => {
    const homeCards = homeRender.find("Card")
    expect(homeCards.length).toEqual(5)
  })
  it("it contains four CardBody(s)", () => {
    const homeCardBody = homeRender.find("CardBody")
    expect(homeCardBody.length).toEqual(5)
  })
  it("it contains five CardTitle(s)", () => {
    const homeCardTitle = homeRender.find("CardTitle")
    expect(homeCardTitle.length).toEqual(5)
  })
  it("it contains five CardText(s)", () => {
    const homeCardText = homeRender.find("CardText")
    expect(homeCardText.length).toEqual(5)
  })
  it("it one CardImage", () => {
    const homeCardImage = homeRender.find("CardImg")
    expect(homeCardImage.length).toEqual(1)
  })
})