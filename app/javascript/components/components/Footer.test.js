import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'

Enzyme.configure({ adapter: new Adapter() })

describe("When footer renders", () => {
    let footerRender;
    beforeEach(() => {
        footerRender = shallow(<Footer />)
    })
  it("it display a footer to the website", () => {
    const footerHeading = footerRender.find("footer")
    expect(footerHeading.length).toEqual(1)
  })
  it("it display a footer to the website", () => {
    const footerHeading = footerRender.find("footer")
    expect(footerHeading.text()).toEqual("Nomadda   © Gemme Fatal 2022")
  })
})