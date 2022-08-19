import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Index from './Index'
Enzyme.configure({ adapter: new Adapter() })


describe("When Index renders", () => {
    let indexRender;
      beforeEach(() => {
        indexRender = shallow(<Index />)
      }
    )
it("it contains 2 div tags", () => {
    
    const indexDiv = indexRender.find("div")

    expect(indexDiv.length).toEqual(2)

  })

  it("displays a paragraph tag", () => {

    const indexParagraphTag = indexRender.find("p")

    expect(indexParagraphTag.length).toEqual(1)
  })
})