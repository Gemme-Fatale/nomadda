import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import UserCreate from './UserCreate'


Enzyme.configure({ adapter: new Adapter() })

describe("When User Create renders", () => {
  let userCreateRender;
    beforeEach(() => {
      userCreateRender = shallow(<UserCreate />)
    })
  it("it displays a header", () => {
    const userCreateHeader = userCreateRender.find("h1")
    expect(userCreateHeader.length).toEqual(1)
  })
  it("it contains a form", () => {
    const userCreateForm = userCreateRender.find("Form")
    expect(userCreateForm.length).toEqual(1)
  })
  })