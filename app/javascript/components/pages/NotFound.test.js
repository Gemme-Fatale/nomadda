import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({ adapter: new Adapter() })

describe("When Not Found renders", () => {
  let notFoundRender;
    beforeEach(() => {
      notFoundRender = shallow(<NotFound />)
    })
  it("it contains two divs", () => {
    const notFoundHeading = notFoundRender.find("div")
    expect(notFoundHeading.length).toEqual(2)
  })
  it("it displays an image", () => {
    const notFoundImage = notFoundRender.find("img")
    expect(notFoundImage.length).toEqual(1)
  })
  it("it displays a title", () => {
    const notFoundTitle = notFoundRender.find("h1")
    expect(notFoundTitle.length).toEqual(1)
    expect(notFoundTitle.text()).toEqual("NOT FOUND")
  })
  it("it displays text", () => {
    const notFoundText = notFoundRender.find("p")
    expect(notFoundText.length).toEqual(1)
    expect(notFoundText.text()).toEqual("“Not All Who Wander Are Lost.” -JRR Tolkien")
  })
  it("it displays an navigation back to Home page", () => {
    const notFoundLink = notFoundRender.find("nav")
    expect(notFoundLink.length).toEqual(1)
  })
})