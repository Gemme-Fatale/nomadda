import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import UserEdit from "./UserEdit";

Enzyme.configure({ adapter: new Adapter() });

describe("When UserEdit renders", () => {
  let userEditRender;
  beforeEach(() => {
    userEditRender = shallow(<UserEdit />);
  });
  it("it displays a header", () => {
    const userEditHeading = userEditRender.find("h2");
    expect(userEditHeading.length).toEqual(1);
    expect(userEditHeading.text()).toEqual("Let's Make Some Changes!")  
  });
});
