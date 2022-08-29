require 'rails_helper'

RSpec.describe "Destinations", type: :request do
  describe "GET /index" do
    it "returns a list of destinations" do
      user = User.where(email: 'PepeTravels@test.com').first_or_create(password: '1234abcd', password_confirmation:'1234abcd')
    
      user.destinations.create(
        location: "Waikiki",
        main_attraction: "beauitful beaches",
        start_date: "2023-01-01",
        end_date: "2023-01-02",
        travelers: 1,
        trip_details: "fbgm",
        family_friendly: true,
        image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
        visitable_id: user.id,
        visitable_type: "User",
        country: "Country"
      )
      get '/destinations'
      destination = JSON.parse(response.body)
      expect(response).to have_http_status (200)
      expect(destination.length).to eq 1 
    end
  end

  describe "PATCH /update" do
    it "updates a trip" do
      user = User.where(email: 'PepeTravels@test.com').first_or_create(password: '1234abcd', password_confirmation:'1234abcd')

      destination_params = {
        destination: {
          location: "Waikiki",
          main_attraction: "beauitful beaches",
          start_date: "2023-01-01",
          end_date: "2023-01-02",
          travelers: 2,
          trip_details: "fbgm",
          family_friendly: true,
          image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
          visitable_id: user.id,
          visitable_type: "User",
          country: "Country"
        }
      }
     
      post '/destinations', params: destination_params
      destination = Destination.first
      updated_trip_params = {
        destination: {
          location: "Waikiki",
          main_attraction: "beauitful beaches",
          start_date: "2023-01-01",
          end_date: "2023-01-02",
          travelers: 1,
          trip_details: "fbgm",
          family_friendly: true,
          image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
          visitable_id: user.id,
          visitable_type: "User",
          country: "Country"
        }
      }

      patch "/destinations/#{destination.id}", params: updated_trip_params
      update_trip = Destination.find(destination.id)
      expect(response).to have_http_status(200)
      expect(destination.travelers).to eq 1
    end
  end

  describe "POST /create" do
    it "creates a new user destination" do
      user = User.where(email: 'PepeTravels@test.com').first_or_create(password: '1234abcd', password_confirmation:'1234abcd')
    
      destination_params = {
        destination: {
            location: 'Sitges', 
            start_date: "2023-01-01",
            end_date: "2023-01-02",
            travelers: 0,
            trip_details: 'n/a',
            family_friendly: true,
            image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
            visitable_id: user.id,
            visitable_type: "User",
            country: "Country"
         
    }
  }   
    post '/destinations', params: destination_params

    destination = JSON.parse(response.body)
    expect(response).to have_http_status(200)
    expect(destination['location']).to eq 'Sitges'
    expect(destination['start_date']).to eq "2023-01-01"
    expect(destination['end_date']).to eq "2023-01-02"
    expect(destination['travelers']).to eq 0
    expect(destination['trip_details']).to eq 'n/a'
    expect(destination['family_friendly']).to eq true
    expect(destination['image']).to eq 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    expect(destination['country']).to eq "Country"


    end
  end

   describe "DELETE /destroy" do
    it "deletes a destination" do
      destination_params ={
        destination: {
          location: 'Sitges', 
          main_attraction: 'Grand Palace and Wat Prakeaw',
          start_date: 20230101,
          end_date: 20230102,
          travelers: 0,
          trip_details: 'n/a',
          family_friendly: true,
          image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
          visitable_id: 2,
          visitable_type: "User",
          country: "Country"
        }
      }

      post "/destinations", params: destination_params
      destination = Destination.first
      delete "/destinations/#{destination.id}"
      expect(response).to have_http_status(200)
      destinations = Destination.all
      expect(destinations).to be_empty
    end
  end
  describe "cannot create a destination without valid attributes" do
    it "doesn't create a destination without a location" do
      destination_params = {
        destination: { 
          main_attraction: "International Fantastic Film Festival", 
          start_date: 20230101, 
          end_date: 20230102,
          travelers: 0,
          trip_details: "n/a", 
          family_friendly: true, 
          image: "https://images.unsplash.com/photo-1643197583269-ac6e004b4c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          visitable_id: 1,
          visitable_type: "Country",
          country: "Spain"
        }
      }

      post '/destinations', params: destination_params
      expect(response.status).to eq 422
      destination = JSON.parse(response.body)
      expect(destination['location']).to include "can't be blank"
    end
    it "doesn't create a destination without a main attraction" do
      destination_params = {
        destination: {
          location: "Sitges",  
          start_date: "2023-01-01", 
          end_date: "2023-01-02",
          travelers: 0,
          trip_details: "n/a", 
          family_friendly: true, 
          image: "https://images.unsplash.com/photo-1643197583269-ac6e004b4c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          visitable_id: 1,
          visitable_type: "Country",
          country: "Spain"
        }
      }

      post '/destinations', params: destination_params
      expect(response.status).to eq 422
      destination = JSON.parse(response.body)
      expect(destination['main_attraction']).to include "can't be blank"
    end
    it "doesn't create a destination without a start date for the trip" do
      destination_params = {
        destination: {
          location: "Sitges", 
          main_attraction: "International Fantastic Film Festival",  
          end_date: "2023-01-02",
          travelers: 0,
          trip_details: "n/a", 
          family_friendly: true, 
          image: "https://images.unsplash.com/photo-1643197583269-ac6e004b4c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          visitable_id: 1,
          visitable_type: "Country",
          country: "Spain"
        }
      }

      post '/destinations', params: destination_params
      expect(response.status).to eq 422
      destination = JSON.parse(response.body)
      expect(destination['start_date']).to include "can't be blank"
    end
    it "doesn't create a destination without an end date" do
      destination_params = {
        destination: {
          location: "Sitges", 
          main_attraction: "International Fantastic Film Festival", 
          start_date: "2023-01-01", 
          travelers: 0,
          trip_details: "n/a", 
          family_friendly: true, 
          image: "https://images.unsplash.com/photo-1643197583269-ac6e004b4c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          visitable_id: 1,
          visitable_type: "Country",
          country: "Spain"
        }
      }

      post '/destinations', params: destination_params
      expect(response.status).to eq 422
      destination = JSON.parse(response.body)
      expect(destination['end_date']).to include "can't be blank"
    end
    it "doesn't create a destination without travelers" do
      destination_params = {
        destination: {
          location: "Sitges", 
          main_attraction: "International Fantastic Film Festival", 
          start_date: 20230101, 
          end_date: 20230102,
          trip_details: "n/a", 
          family_friendly: true, 
          image: "https://images.unsplash.com/photo-1643197583269-ac6e004b4c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          visitable_id: 1,
          visitable_type: "Country",
          country: "Spain"
        }
      }

      post '/destinations', params: destination_params
      expect(response.status).to eq 422
      destination = JSON.parse(response.body)
      expect(destination['travelers']).to include "can't be blank"
    end
    it "doesn't create a destination without trip details" do
      destination_params = {
        destination: {
          location: "Sitges", 
          main_attraction: "International Fantastic Film Festival", 
          start_date: 20230101, 
          end_date: 20230102,
          travelers: 0,
          family_friendly: true, 
          image: "https://images.unsplash.com/photo-1643197583269-ac6e004b4c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          visitable_id: 1,
          visitable_type: "Country",
          country: "Spain"
        }
      }

      post '/destinations', params: destination_params
      expect(response.status).to eq 422
      destination = JSON.parse(response.body)
      expect(destination['trip_details']).to include "can't be blank"
    end
    it "doesn't create a destination without a family friendly selection" do
      destination_params = {
        destination: {
          location: "Sitges", 
          main_attraction: "International Fantastic Film Festival", 
          start_date: 20230101, 
          end_date: 20230102,
          travelers: 0,
          trip_details: "n/a", 
          image: "https://images.unsplash.com/photo-1643197583269-ac6e004b4c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          visitable_id: 1,
          visitable_type: "Country",
          country: "Spain"
        }
      }

      post '/destinations', params: destination_params
      expect(response.status).to eq 422
      destination = JSON.parse(response.body)
      expect(destination['family_friendly']).to include "can't be blank"
    end
    it "doesn't create a destination without an image" do
      destination_params = {
        destination: {
          location: "Sitges", 
          main_attraction: "International Fantastic Film Festival", 
          start_date: 20230101, 
          end_date: 20230102,
          travelers: 0,
          trip_details: "n/a", 
          family_friendly: true, 
          visitable_id: 1,
          visitable_type: "Country",
          country: "Spain"
        }
      }

      post '/destinations', params: destination_params
      expect(response.status).to eq 422
      destination = JSON.parse(response.body)
      expect(destination['image']).to include "can't be blank"
    end
    it "doesn't create a destination without a country" do
      destination_params = {
        destination: {
          location: "Sitges", 
          main_attraction: "International Fantastic Film Festival", 
          start_date: 20230101, 
          end_date: 20230102,
          travelers: 0,
          trip_details: "n/a", 
          family_friendly: true, 
          image: "https://images.unsplash.com/photo-1643197583269-ac6e004b4c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          visitable_id: 1,
          visitable_type: "Country",
        }
      }

      post '/destinations', params: destination_params
      expect(response.status).to eq 422
      destination = JSON.parse(response.body)
      expect(destination['country']).to include "can't be blank"
    end
  end
end