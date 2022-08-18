# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.create(email: 'PepeTravels@test.com', password: '1234abcd', password_confirmation:'1234abcd')

user2 = User.create(email: 'TinaTakesTrips@test.com', password: 'abcd1234', password_confirmation:'abcd1234')

country1 = Country.create(name: 'Spain', prime_destination: 'Sitges', primary_language: 'Spanish', known_for: 'The International Fantastic Film Festival is known to be the number one fantasy film festival in the world. Directors, and actors like Quentin Tarantino and Cameron Diaz have made appearences.', climate: 'Mediterranean', nightlife: '4.5 stars', image: 'https://images.unsplash.com/photo-1599484205751-0fc4e23e1cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNwYWluJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60')

country2 = Country.create(name: 'United States', prime_destination: 'Waikiki', primary_language: 'English', known_for: 'Beaches', climate: 'Tropical', nightlife: '3.5 stars', image: 'https://images.unsplash.com/photo-1545251142-f32339076e6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF3YWlpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60')

country3 = Country.create(name: 'Thailand', prime_destination: 'Phuket', primary_language: 'Thai', known_for: 'vibrant nightmarkets and lively nightlife', climate: 'Tropical', nightlife: '4.9 stars', image: 'https://images.unsplash.com/photo-1611335584987-181d4b09ed33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60')


destination1 = [
  {
    location: 'Sitges', main_attraction: 'International Fantastic Film Festival', start_date: '2023-01-01', end_date: '2023-01-02' , travelers: 0, trip_details: 'n/a', family_friendly: true, image: 'https://images.unsplash.com/photo-1643197583269-ac6e004b4c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  }, 
  {
    location: 'Barcelona', main_attraction: 'La Sagrada Familia', start_date: '2023-01-01', end_date: '2023-01-02', travelers: 0, trip_details: 'n/a', family_friendly: true, image: 'https://images.unsplash.com/photo-1589708532758-ddd0753b0f2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
  }
  
]


destination2 = [
  {
    location: 'Waikiki', main_attraction: 'beauitful beaches', start_date: '2023-01-01', end_date: '2023-01-02', travelers: 0, trip_details: 'n/a', family_friendly: true, image: 'https://images.unsplash.com/photo-1651546707628-46ae1a1bc765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'  
  },
  {
    location: 'San Diego', main_attraction: 'Balboa Park', start_date: '2023-01-01', end_date: '2023-01-02', travelers: 0, trip_details: 'n/a', family_friendly: true, image: 'https://images.unsplash.com/photo-1593970107436-6b5c6f8f1138?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FuJTIwZGllZ298ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
  }
]

destination3 = [
  {
    location: 'Phuket', main_attraction: 'Beaches, and night markets', start_date: '2023-01-01', end_date: '2023-01-02', travelers: 0, trip_details: 'n/a', family_friendly: true, image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    location: 'Bangkok', main_attraction: 'Grand Palace and Wat Prakeaw', start_date: '2023-01-01', end_date: '2023-01-02', travelers: 0, trip_details: 'n/a', family_friendly: true, image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
  }
]

destination4 = [
  {
    location: 'Phuket', main_attraction: 'Beaches, and night markets', start_date: '2022-12-20', end_date: '2022-12-27', travelers: 8, trip_details: 'We are going to lounge on the beaches sipping mimosas by day and by night we are going to vist the street markets and club-hop', family_friendly: true, image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
  }
]

destination5 = [
  {
   location: 'Waikiki', main_attraction: 'beauitful beaches', start_date: '2023-06-14', end_date: '2023-06-19', travelers: 3, trip_details: 'We are going to hike some trails, take surf lessons, and eat good food.', family_friendly: true, image: 'https://images.unsplash.com/photo-1651546707628-46ae1a1bc765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' 
  }
]


destination1.each do |attributes|
    country1.destinations.create(attributes)
    p "each destinations attributes #{attributes}"
end

destination2.each do |attributes|
    country2.destinations.create(attributes)
    p "each destinations attributes #{attributes}"
end

destination3.each do |attributes|
    country3.destinations.create(attributes)
    p "each destinations attributes #{attributes}"
end

destination4.each do |attributes|
    user1.destinations.create(attributes)
    p "each destinations attributes #{attributes}"
end

destination5.each do |attributes|
    user2.destinations.create(attributes)
    p "each destinations attributes #{attributes}"
end

