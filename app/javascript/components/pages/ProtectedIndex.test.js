import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProtectedIndex from './ProtectedIndex'


Enzyme.configure({ adapter: new Adapter() })

describe("When Protected Index renders", () => {
  let protectedIndexRender;
    beforeEach(() => {
      protectedIndexRender = shallow(<ProtectedIndex />)
    })
  it("it contains one div", () => {
    const protectedIndexHeading = protectedIndexRender.find("div")
    expect(protectedIndexHeading.length).toEqual(1)
  })
  it("it displays a header", () => {
    const protectedIndexHeader = protectedIndexRender.find("h2")
    expect(protectedIndexHeader.length).toEqual(1)
  })
  it("it contains a row", () => {
    const protectedIndexRow = protectedIndexRender.find("Row")
    expect(protectedIndexRow.length).toEqual(1)
  })
  })

