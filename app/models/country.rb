class Country < ApplicationRecord
    has_many :destinations, as: :visitable
    validates :name, :prime_destination, :primary_language, :known_for, :climate, :nightlife, :image, presence: true
end