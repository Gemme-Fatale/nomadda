class Destination < ApplicationRecord
    belongs_to :visitable, polymorphic: true
    validates :location, :start_date, :end_date, :travelers, :trip_details, presence: true
end
