class DestinationsController < ApplicationController
    def index
        destination = Destinations.all
        render json: destination
    end
    def create
        destination = Destination.create(destination_params)

        if destination.valid? 
            render json: destination
        else
            render json: destination.errors, status: 422
        end
    end
    
    private
    def country_params
        params.require(:destination).permit(:location, :main_attraction, :start_date, :end_date, :travelers, :trip_details, :image, :visitable_id, :visitable_type)
    end
end
