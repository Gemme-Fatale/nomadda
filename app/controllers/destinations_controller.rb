class DestinationsController < ApplicationController
    def index
        destinations = Destination.all
        render json: destinations
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
    def destination_params
        params.require(:destination).permit(:location, :main_attraction,:start_date, :end_date, :travelers, :trip_details, :family_friendly, :image, :visitable_id, :visitable_type, :country)
    end
end
