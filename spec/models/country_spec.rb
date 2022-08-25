require 'rails_helper'

RSpec.describe Country, type: :model do
  it 'check that Country exists' do
    country = Country.create name: "Spain", prime_destination: "Sitges", primary_language: "Spanish", known_for: "The International Fantastic Film Festival is known to be the number one fantasy film festival in the world. Directors, and actors like Quentin Tarantino and Cameron Diaz have made appearences.", climate: "Mediterranean", nightlife: "4.5 stars", image: "https://images.unsplash.com/photo-1599484205751-0fc4e23e1cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNwYWluJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
  expect(country).to be_valid
  end

  it 'checks a name is inputted' do
    country = Country.create prime_destination: "Sitges", primary_language: "Spanish", known_for: "The International Fantastic Film Festival is known to be the number one fantasy film festival in the world. Directors, and actors like Quentin Tarantino and Cameron Diaz have made appearences.", climate: "Mediterranean", nightlife: "4.5 stars", image: "https://images.unsplash.com/photo-1599484205751-0fc4e23e1cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNwYWluJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
  expect(country.errors[:name]).to_not be_empty
  end

  it 'checks a prime destination is inputted' do
    country = Country.create name: "Spain", primary_language: "Spanish", known_for: "The International Fantastic Film Festival is known to be the number one fantasy film festival in the world. Directors, and actors like Quentin Tarantino and Cameron Diaz have made appearences.", climate: "Mediterranean", nightlife: "4.5 stars", image: "https://images.unsplash.com/photo-1599484205751-0fc4e23e1cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNwYWluJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
    expect(country.errors[:prime_destination]).to_not be_empty
  end

  it 'checks a primary language is inputted' do
    country = Country.create name: "Spain", prime_destination: "Sitges", known_for: "The International Fantastic Film Festival is known to be the number one fantasy film festival in the world. Directors, and actors like Quentin Tarantino and Cameron Diaz have made appearences.", climate: "Mediterranean", nightlife: "4.5 stars", image: "https://images.unsplash.com/photo-1599484205751-0fc4e23e1cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNwYWluJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
  expect(country.errors[:primary_language]).to_not be_empty
  end

  it 'checks a known for is inputted' do 
    country = Country.create name: "Spain", prime_destination: "Sitges", primary_language: "Spanish", climate: "Mediterranean", nightlife: "4.5 stars", image: "https://images.unsplash.com/photo-1599484205751-0fc4e23e1cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNwYWluJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
  expect(country.errors[:known_for]).to_not be_empty
  end

  it 'checks a climate is inputted' do
    country = Country.create name: "Spain", prime_destination: "Sitges", primary_language: "Spanish", known_for: "The International Fantastic Film Festival is known to be the number one fantasy film festival in the world. Directors, and actors like Quentin Tarantino and Cameron Diaz have made appearences.", nightlife: "4.5 stars", image: "https://images.unsplash.com/photo-1599484205751-0fc4e23e1cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNwYWluJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
  expect(country.errors[:climate]).to_not be_empty
  end

  it 'checks a nightlife is inputted' do
    country = Country.create name: "Spain", prime_destination: "Sitges", primary_language: "Spanish", known_for: "The International Fantastic Film Festival is known to be the number one fantasy film festival in the world. Directors, and actors like Quentin Tarantino and Cameron Diaz have made appearences.", climate: "Mediterranean", image: "https://images.unsplash.com/photo-1599484205751-0fc4e23e1cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNwYWluJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
  expect(country.errors[:nightlife]).to_not be_empty
  end

  it 'checks a image is inputted' do
    country = Country.create name: "Spain", prime_destination: "Sitges", primary_language: "Spanish", known_for: "The International Fantastic Film Festival is known to be the number one fantasy film festival in the world. Directors, and actors like Quentin Tarantino and Cameron Diaz have made appearences.", climate: "Mediterranean", nightlife: "4.5 stars"
  expect(country.errors[:image]).to_not be_empty
  end

end
