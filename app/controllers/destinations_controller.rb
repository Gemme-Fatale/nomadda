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
    
end
