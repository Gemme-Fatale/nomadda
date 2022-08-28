# 🌎 Nomadda App
This app was designed by the creators (Gemme Fatale 💎) primarily for the LGBTQ community to plan trips to safe locations around the world. However, 'Nomadda' who you are or where you want to go, traveling should be fun and safe. 'Nomadda' is designed to provide the user the ability to create an online intinerary based on filtered locations by the developers. 

Checkout the [Nomadda Website!] (https://calm-river-47523.herokuapp.com/)


## 🧑🏽‍💻 How We Got Here
```
$ rails new nomadda-app -d postgresql -T
$ cd nomadda-app
$ rails db:create
$ bundle add rspec-rails
$ rails generate rspec:install
$ bundle add webpacker
$ bundle add react-rails
$ rails webpacker:install
$ rails webpacker:install:react
$ yarn add @babel/preset-react
$ yarn add @rails/activestorage
$ yarn add @rails/ujs
$ rails generate react:install
$ rails generate react:component App
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ rails db:migrate
$ rails generate controller Home
```

## 🛠 Configurations

### Devise Config
**config/environments/development.rb**
```ruby
This line added:
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

**config/initializers/devise.rb**
```ruby
# This line replaced:
config.sign_out_via = :delete
# With this line:
config.sign_out_via = :get
```

File added in app/views/home called index.html.erb
**app/views/home/index.html.erb**
```javascript
<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>
```

### React in Rails Config

**app/views/layouts/application.html.erb**
```ruby
# This line replaced:
<%= javascript_importmap_tags %>
# With this line:
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```

**config/routes.rb**
```ruby
# These lines added:
get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
root 'home#index'
```

### React Routing Config
```bash
yarn add react-router-dom@5.3.0
```

**app/javascript/components/App.js**
```javascript
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
```

### Reactstrap Config
```bash
bundle add bootstrap
mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
yarn add reactstrap
```

**app/assets/stylesheets/application.scss**
```css
@import 'bootstrap';
```


## ⚡️ Getting Started
Once you're able to clone the repository, within the root of the project directory, run:

```bash
bundle 
yarn
rails db:setup
```

## 🏁 Start the App
```bash
rails s
```


## 🛫 Destinations Resource
The Devise User model is going to have an association with the Destination model. Since the associations are polymorphic, the destinations will be visitable to the user and the Country. The User will have many destinations and Country will have many destinations. The "able" suffix is added onto the polymorphic verb that connects the two models. The visitable_id and visitable_type are automatically generated. If a destination is added to the Country model via rails, the visitable_type will be "Country" and the visitable_id is the Country id. When a User adds a destination to their trip builder, the visitable_type is "User" and the visitable_id is the User id. 

```bash
  rails generate resource Country name:string prime_destination:string primary_language:string known_for:string climate:string nightlife:string image:text
  rails db:migrate
```
```bash
    rails generate resource Destination location:string main_attraction:string start_date:date end_date:date travelers:integer trip_details:text family_friendly:boolean image:text country:string visitable_id:integer visitable_type: string rails db:migrate  
```

### Polymorphic Associations (Country, Destination and User)
Gemme Fatale utilized polymorphic associations to have destinations be visitable association. The polymorphic association allowed countries to have destinations and the user is able to make new destinations (trips) without any country destinations being deleted. 

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

## 🚗 Testing
To run the existing testing suite, run:

```bash
yarn jest
rspec spec/
```

### Nomadda Data Specs
Part of your responsibility will be to build out robust tests both for models and for requests. 
Tests you will need are:  

REQUEST: 
- to ensure a user can see all apartments
- to ensure a user can see all apartments that belong to them
- to ensure a user can make a new apartment
- to ensure a user can update an apartment
- to ensure a user can remove an apartment
- to ensure a user cannot make a new apartment with nil values
- to ensure an error will be thrown if an unregistered user tried to make an apartment
- to ensure an error will be thrown if a user tries to edit an apartment that doesn't belong to them
- to ensure an error will be thrown if a user tries to delete an apartment that doesn't belong to them

MODELS: 
- to ensure destination is valid
- to ensure a user cannot make a new apartment with nil values
- to ensure a user cannot make a new apartment that already exists in the database
- to ensure a user cannot update an apartment with nil values
- to ensure a user cannot update another user's apartment

**The following code is a mock and does not work but is here to get yours started.**
```ruby
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
```
