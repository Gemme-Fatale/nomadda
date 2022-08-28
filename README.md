# 🌎 Nomadda App
This app was designed by the creators (Gemme Fatale 💎) primarily for the LGBTQ community to plan trips to safe locations around the world. However, 'Nomadda' who you are or where you want to go, traveling should be fun and safe. 'Nomadda' is designed to provide the user the ability to create an online intinerary based on filtered locations by the developers. 

Checkout the [Nomadda Website!](https://calm-river-47523.herokuapp.com/)

## Here's how Nomadda can work for you!
    - [] Explore the website as well as the resources provided.
        - [] Browse over the filtered destinations
    - [] Sign up to create a User Account
    - [] Start creating a trip in your personal trip builder!
        - [] Pick a location, country, dates, add in any details and upload an image to remind you of your upcoming adventure!
    - [] Edit your trip at any time with any changes that might pertain to your trip.
    - [] Plans change so if your trip is a no-go then delete it from your trips you built. 
        - [] If you ever want to go back, that destination will still be there for reference. 
    - [] Sign out to keep your information secure.
    - [] Get excited! Traveling should be safe and fun 'Nomadda' who you are or where you go. 


## Running the project locally
- Clone the repo [Nomadda](https://github.com/Gemme-Fatale/nomadda) to a designated space on your computer.
'cd nomadda'
- Open the code editor in your preferred editor.
- To open the app run: 
'rails s' 
- Open a web browser and navigate to "localhost:3000"
- Welcome to "Nomadda"!!!

- Note: Whenever changes are made in the code editor, the browser must be refreshed in order to see any changes. 

Checkout the [Nomadda Website!](https://calm-river-47523.herokuapp.com/)


## Here's a glimpse at the inner workings of the application:  

### Dependancies
    - React
    - Reactstrap
    - Router-DOM
    - Bootstrap
    - Devise
    - Simplecov 
    - Babel

### Polymorphic Associations (Country, Destination and User)
Gemme Fatale utilized polymorphic associations to have destinations be visitable association. The polymorphic association allowed countries to have destinations and the user is able to make new destinations (trips) without any country destinations being deleted. Below is an example of the associations and how they would work with one another. 


### 🛫 Destinations Resource
Since Gemme Fatale used polymorphic associations, the models were generated a little differently. The Devise User model is going to have an association with the Destination model. Since the associations are polymorphic, the destinations will be visitable to the user and the Country. The User will have many destinations and Country will have many destinations. The "able" suffix is added onto the polymorphic verb that connects the two models. The visitable_id and visitable_type are automatically generated. If a destination is added to the Country model via rails, the visitable_type will be "Country" and the visitable_id is the Country id. When a User adds a destination to their trip builder, the visitable_type is "User" and the visitable_id is the User id. Below is an example of how we created the models (minus the User) for Nomadda.


## To Do List
There are several items that we would love to add to Nomadda in the future:
    - [] External flight API
    - [] External crime statistics API
    - [] Accessiblity design features
    - [] Your ideas!! Feel free to contact the developers if you have an idea to make Nomadda the best it can be!


## Note from the developers
We at Gemme Fatale want to thank everyone at LEARN academy, instructors, staff, cohort mates, residents and mentors, for all the guidance, help, and cheerleading that helped us make this website possible. For the users, we wish you the best on your journey wherever that may be! ❤️🧡💛💚💙💜
    Members:
    - Nicole Mares Rivera [Github] (https://github.com/nmaresrivera11)
    - Deanna "Will" Williams [Github] (https://github.com/DFWilliams)
    - Puana'ala Amano: [Github] (https://github.com/pkamano)