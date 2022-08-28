require 'rails_helper'

RSpec.describe Destination, type: :model do

  it 'should validate a location is entered' do 
    destination = Destination.create(main_attraction: "International Fantastic Film Festival", start_date: "2023-01-01", end_date: "2023-01-02" , travelers: 0, trip_details: "n/a", family_friendly: true, image: "https://images.unsplash.com/photo-1643197583269-ac6e004b4c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", visitable_id: 1, visitable_type: "Country", country: "Spain")
    expect(destination.errors[:location]).to be_empty
  end
  it 'checks a main attraction is entered' do
    destination = Destination.create location: "Sitges", start_date: "2023-01-01", end_date: "2023-01-02" , travelers: 0, trip_details: "n/a", family_friendly: true, image: "https://images.unsplash.com/photo-1643197583269-ac6e004b4c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", visitable_id: 1, visitable_type: "Country", country: "Spain"
    expect(destination.errors[:main_attraction]).to be_empty
  end
  it 'checks a start date is entered' do
    destination = Destination.create location: "Sitges", main_attraction: "International Fantastic Film Festival", end_date: "2023-01-02" , travelers: 0, trip_details: "n/a", family_friendly: true, image: "https://images.unsplash.com/photo-1643197583269-ac6e004b4c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", visitable_id: 1, visitable_type: "Country", country: "Spain"
    expect(destination.errors[:start_date]).to be_empty
  end
  it 'checks an end date is entered' do destination = Destination.create location: "Sitges", main_attraction: "International Fantastic Film Festival", start_date: "2023-01-01", travelers: 0, trip_details: "n/a", family_friendly: true, image: "https://images.unsplash.com/photo-1643197583269-ac6e004b4c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", visitable_id: 1, visitable_type: "Country", country: "Spain"
  expect(destination.errors[:end_date]).to be_empty
  end
  it 'checks travelers are entered' do destination = Destination.create location: "Sitges", main_attraction: "International Fantastic Film Festival", start_date: "2023-01-01", trip_details: "n/a", family_friendly: true, image: "https://images.unsplash.com/photo-1643197583269-ac6e004b4c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", visitable_id: 1, visitable_type: "Country", country: "Spain"
  expect(destination.errors[:travelers]).to be_empty
  end
  it 'checks trip details are entered' do destination = Destination.create location: "Sitges", main_attraction: "International Fantastic Film Festival", start_date: "2023-01-01", travelers: 0, family_friendly: true, image: "https://images.unsplash.com/photo-1643197583269-ac6e004b4c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", visitable_id: 1, visitable_type: "Country", country: "Spain"
  expect(destination.errors[:trip_details]).to be_empty
  end
  it 'checks if a family friendly value is declared' do destination = Destination.create location: "Sitges", main_attraction: "International Fantastic Film Festival", start_date: "2023-01-01", travelers: 0, trip_details: "n/a", image: "https://images.unsplash.com/photo-1643197583269-ac6e004b4c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", visitable_id: 1, visitable_type: "Country", country: "Spain"
  expect(destination.errors[:family_friendly]).to be_empty
  end
  it 'checks an image has been uploaded' do destination = Destination.create location: "Sitges", main_attraction: "International Fantastic Film Festival", start_date: "2023-01-01", travelers: 0, trip_details: "n/a", family_friendly: true, visitable_id: 1, visitable_type: "Country", country: "Spain"
  expect(destination.errors[:image]).to be_empty
  end
  it 'checks the destination has a country' do destination = Destination.create location: "Sitges", main_attraction: "International Fantastic Film Festival", start_date: "2023-01-01", travelers: 0, trip_details: "n/a", family_friendly: true, image: "https://images.unsplash.com/photo-1643197583269-ac6e004b4c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", visitable_id: 1, visitable_type: "Country" 
  expect(destination.errors[:country]).to be_empty
  end
end
