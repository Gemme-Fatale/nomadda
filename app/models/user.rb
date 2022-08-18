class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :validatable;
  has_many :destinations, as: :visitable
  validates :location, :start_date, :end_date, :travelers, :trip_details, presence: true
end
