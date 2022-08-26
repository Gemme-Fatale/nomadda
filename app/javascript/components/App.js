import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Index from "./pages/Index";
import ProtectedIndex from "./pages/ProtectedIndex";
import UserCreate from "./pages/UserCreate";
import UserEdit from "./pages/UserEdit";
import Resources from "./pages/Resources";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinations: [],
      countries: [],
    };
  }
  


  componentDidMount(){
    Promise.all([this.readNomaddaDestinations(),
    this.readNomaddaCountries()])
  }

  readNomaddaDestinations = () => {
    fetch("/destinations")
      .then((response) => response.json())
      .then((destinationArray) =>
        this.setState({ destinations: destinationArray })
      )
      .catch((errors) => console.log("Destination read errors:", errors));
  };

  readNomaddaCountries = () => {
    fetch("/countries")
      .then((response) => response.json())
      .then((countryArray) => this.setState({ countries: countryArray }))
      .catch((errors) => console.log("Country read errors: ", errors));
  };

  createUserDestinations = (mytrips) => {
    fetch("/destinations", {
      body: JSON.stringify(mytrips),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then(() => this.readNomaddaDestinations())
      .catch((errors) => console.log("New destinations Errors", errors));
  };

  updateUserDestinations = (editdestinations, id) => {
    fetch(`/destinations/${id}`, {
      body: JSON.stringify(editdestinations),
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(destinations => {
      this.readNomaddaDestinations()
    })
    .catch(errors => console.log("Destination update errors:", errors))
  }


  deleteUserDestination = (id) => {
    fetch(`/destinations/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => this.readNomaddaDestinations())
      .catch((errors) => console.log("Destination delete errors:", errors));
  };

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <>
        <Router>
          <Header {...this.props}/>
            <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/countrieslist" render = {(props) => <Index {...props} countries={this.state.countries} />} />
             <Route path="/mytrips" render={(props) => {
               let myTrips = this.state.destinations.filter(destinations => destinations.visitable_id === current_user.id && destinations.visitable_type === 'User')
               return(
                 <ProtectedIndex destinations={myTrips} deleteUserDestination={this.deleteUserDestination} />)}}/>
             <Route path="/show/:country" render={(props) => {
                return <Show {...props} destinations={this.state.destinations} />;}}
            />
             <Route path="/usercreate" render={(props)=>{
               return( <UserCreate createUserDestinations = {this.createUserDestinations} current_user = {this.props.current_user} />)}} />
             <Route path="/useredit/:id" render={(props) => {
               let id = +props.match.params.id
               let destinations = this.state.destinations.find(destination => destination.id === id)
               return <UserEdit destinations={destinations} updateUserDestinations={this.updateUserDestinations}/>}} />
             <Route exact path="/resources" component={Resources}></Route>
             <Route exact path="/aboutus" component={AboutUs}/>
             <Route component={NotFound}/>
            </Switch>
          <Footer/>
        </Router>
      </>
    );
  }
}

export default App;
