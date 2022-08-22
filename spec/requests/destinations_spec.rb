require 'rails_helper'

RSpec.describe "Destinations", type: :request do
  describe "GET /index" do
      it "returns a list of destinations" do
      Destination.create(
        location: "Waikiki"
        main_attraction: "beauitful beaches"
        start_date: '2023-01-01'
        end_date: '2023-01-02'
        travelers: 1
        trip_details: "fbgm"
        family_friendly: true
        image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        visitable_id: 2
        visitable_type: "User"
        country: "Country"
      )
      get '/destinations'
      destination = JSON.parse(response.body)
      expect(response).to have_http_status (200)
      expect(destination.length).to eq 1 
    end
  end
end
