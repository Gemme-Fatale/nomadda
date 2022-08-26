import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Index from './Index'
Enzyme.configure({ adapter: new Adapter() })


describe("When Index renders", () => {
    let indexRender;
      beforeEach(() => {
        indexRender = shallow(<Index />)
      })
  it("it displays a header", () => {
      const indexHeader1 = indexRender.find("h2")
      expect(indexHeader1.length).toEqual(1)
      expect(indexHeader1.text()).toEqual("Browse countries")
  })

  it("it displays a second header", () => {
    const indexHeader1 = indexRender.find("h4")
    expect(indexHeader1.length).toEqual(1)
    expect(indexHeader1.text()).toEqual("Click on the Countries to see the beautiful destinations")
  })

  it("displays a Card group", () => {
    const indexCardGroup = indexRender.find("CardGroup")
    expect(indexCardGroup.length).toEqual(1)
  })
  
})