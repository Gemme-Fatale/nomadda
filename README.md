# 🌎 Nomadda App
This app was designed by the creators (Gemme Fatale 💎) primarily for the LGBTQ community to plan trips to safe locations around the world. However, 'Nomadda' who you are or where you want to go, traveling should be fun and safe. 'Nomadda' is designed to provide the user the ability to create an online intinerary based on filtered locations by the developers. 

Checkout the [Nomadda Website!] (https://calm-river-47523.herokuapp.com/)

## Here's how Nomadda can work for you!
    - [] Explore the website as well as the resources provided.
        - [] Browse over the filtered destinations
    - [] Sign up to create a User Account
    - [] Start creating a trip in your personal trip builder!
        - [] Pick a location, country, dates, add in any details and upload an image to remind you of your upcoming adventure!
    - [] Edit your trip at any time with any changes that might pertain to your trip.
    - [] Plans change so if your trip is a no-go then delete it from your trips you built. 
        - [] If you ever want to go back, that destination will still be there for reference. 
    - [] Get excited! Traveling should be safe and fun 'Nomadda' who you are or where you go. 


## Here's a glimpse at the inner workings of the application:  


### Polymorphic Associations (Country, Destination and User)
Gemme Fatale utilized polymorphic associations to have destinations be visitable association. The polymorphic association allowed countries to have destinations and the user is able to make new destinations (trips) without any country destinations being deleted. Below is an example of the associations and how they would work with one another. 

**app/models/country.rb**
```ruby
class Country < ApplicationRecord
    has_many :destinations, as: :visitable
    validates :name, :prime_destination, :primary_language, :known_for, :climate, :nightlife, :image, presence: true
end
```
**app/models/destination.rb**
```ruby
class Destination < ApplicationRecord
    belongs_to :visitable, polymorphic: true
end
```
**app/models/user.rb**
```ruby
class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :validatable;
  has_many :destinations, as: :visitable
end
```

### 🛫 Destinations Resource
Since Gemme Fatale used polymorphic associations, the models were generated a little differently. The Devise User model is going to have an association with the Destination model. Since the associations are polymorphic, the destinations will be visitable to the user and the Country. The User will have many destinations and Country will have many destinations. The "able" suffix is added onto the polymorphic verb that connects the two models. The visitable_id and visitable_type are automatically generated. If a destination is added to the Country model via rails, the visitable_type will be "Country" and the visitable_id is the Country id. When a User adds a destination to their trip builder, the visitable_type is "User" and the visitable_id is the User id. 

```bash
  rails generate resource Country name:string prime_destination:string primary_language:string known_for:string climate:string nightlife:string image:text
  rails db:migrate
```
```bash
    rails generate resource Destination location:string main_attraction:string start_date:date end_date:date travelers:integer trip_details:text family_friendly:boolean image:text country:string visitable_id:integer visitable_type: string rails db:migrate  
```

## Note from the developers
We at Gemme Fatale want to thank everyone at LEARN academy, instructors, staff, cohort mates, residents and mentors, for all the guidance, help, and cheerleading that helped us make this website possible. For the users, we wish you the best on your journey wherever that may be! ❤️🧡💛💚💙💜
