require 'rails_helper'

RSpec.describe User, type: :model do
  it "check that user exists" do
    user = User.create(email: 'PepeTravels@test.com', password: '1234abcd', password_confirmation:'1234abcd')
  expect(user).to be_valid
  end
  it "needs an email" do
    user = User.create password: '1234abcd', password_confirmation:'1234abcd'
  expect(user.errors[:email]).to_not be_empty
  end
  it "needs an password" do
    user = User.create email: 'PepeTravels@test.com', password_confirmation:'1234abcd'
  expect(user.errors[:password]).to_not be_empty
  end
end
