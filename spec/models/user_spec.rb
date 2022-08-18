require 'rails_helper'


RSpec.describe User, type: :model do
  user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

    it 'can create a destination to travel to' do
    destination = user.destinations.create location: 'Pittsburgh', start_date: 20221004, end_date: 20221012, travelers: 3, trip_details: 'Going to get Acai bowls everyday that I am there. Do not forget the passports.'
    expect(destination).to be_valid
  end
   it 'user cannot create a destination without a location' do
    destination = user.destinations.create(
      {
        start_date: 20221004,
        end_date: 20221012,
        travelers: 4,
        trip_details: 'Going to get acai bowls everyday that I am there. Do not forget the passports.'
      }
    )
    expect(destination.errors[:location]).to_not be_empty
  end
    it 'user cannot create a destination without a start date' do
    destination = user.destinations.create(
      {
        location: 'Pittsburgh',
        end_date: 20221012,
        travelers: 4,
        trip_details: 'Going to get acai bowls everyday that I am there. Do not forget the passports.'
      }
    )
    expect(destination.errors[:start_date]).to_not be_empty
  end
    it 'user cannot create a destination without an end date' do
    destination = user.destinations.create(
      {
        location: 'Pittsburgh',
        start_date: 20221004,
      travelers: 4,
      trip_details: 'Going to get acai bowls everyday that I am there. Do not forget the passports.'
      }
    )
    expect(destination.errors[:end_date]).to_not be_empty
  end
  it 'user cannot create a destination without number of travelers' do
    destination = user.destinations.create(
      {
        location: 'Pittsburgh',
        start_date: 20221004,
        end_date: 20221012,
        trip_details: 'Going to get acai bowls everyday that I am there. Do not forget the passports.'
      }
    )
    expect(destination.errors[:travelers]).to_not be_empty
  end
  it 'user cannot create a destination without trip details' do
    destination = user.destinations.create(
      {
        location: 'Pittsburgh',
        start_date: 20221004,
        end_date: 20221012,
        travelers: 4
      }
    )
    expect(destination.errors[:trip_details]).to_not be_empty
  end
end
