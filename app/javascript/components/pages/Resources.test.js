import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Resources from './Resources'

Enzyme.configure({ adapter: new Adapter() })

describe("When Resources renders", () => {
  let resourceRender;
    beforeEach(() => {
      resourceRender = shallow(<Resources />)
    })
  it("it contains one div", () => {
    const resourceDiv = resourceRender.find("div")
    expect(resourceDiv.length).toEqual(1)
  })
  it("it contains one header", () => {
    const resourceHeader = resourceRender.find("h2")
    expect(resourceHeader.length).toEqual(1)
  })
  it("it contains one Row for the Cards", () => {
    const resourceRow = resourceRender.find("Row")
    expect(resourceRow.length).toEqual(1)
  })
  it("it contains two Cards", () => {
    const resourceCard = resourceRender.find("Card")
    expect(resourceCard.length).toEqual(2)
  })
  it("it contains two Card bodies", () => {
    const resourceCardBody = resourceRender.find("CardBody")
    expect(resourceCardBody.length).toEqual(2)
  })
  it("it contains two CardSubtitle", () => {
    const resourceCardSubtitle = resourceRender.find("CardSubtitle")
    expect(resourceCardSubtitle.length).toEqual(2)
  })
  it("it contains seven anchors", () => {
    const resourceAnchor = resourceRender.find("a")
    expect(resourceAnchor.length).toEqual(7)
  })
  it("it contains seven paragraphs", () => {
    const resourcePTags = resourceRender.find("p")
    expect(resourcePTags.length).toEqual(7)
  })
  it("it contains twelve breaks", () => {
    const resourceBreaks = resourceRender.find("br")
    expect(resourceBreaks.length).toEqual(12)
  })
})