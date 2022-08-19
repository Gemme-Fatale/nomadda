class DestinationsController < ApplicationController
    def index
        destination = Destinations.all
        render json: destination
    end
end
