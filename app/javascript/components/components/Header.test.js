import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({ adapter: new Adapter() })

describe("When Header renders", () => {
  let headerRender;
    beforeEach(() => {
      headerRender = shallow(<Header />)
    })
  it("it display navigations to the website held in a div", () => {
    const headerHeading = headerRender.find("div")
    expect(headerHeading.length).toEqual(1)
  })
  it("it display all navigations to the website", () => {
    const headerHeading = headerRender.find("Nav")
    expect(headerHeading.length).toEqual(1)
  })
})