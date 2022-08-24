class DestinationsController < ApplicationController
    def index
        destinations = Destination.all
        render json: destinations
    end
    def update
        destination = Destination.find(params[:id])
        byebug
        destination.update(destination_params)
        if destination.valid?
            render json: destination
        else
            render json: destination.errors, status: 422
        end
    end

    private
    def destination_params
        params.require(:visitable).permit(:location, :start_date, :end_date, :travelers, :trip_details, :family_friendly, :image, :visitable_id, :visitable_type)
    end
end