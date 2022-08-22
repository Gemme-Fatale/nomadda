import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ScrollToTop from './ScrollToTop'

Enzyme.configure({ adapter: new Adapter() })

describe("When ScrollToTop renders", () => {
  let scrollToTopRender;
    beforeEach(() => {
      scrollToTopRender = shallow(<ScrollToTop />)
    })
  it("it contains a div", () => {
    const scrollToTopDiv = scrollToTopRender.find("div")
    expect(scrollToTopDiv.length).toEqual(1)
  })
})