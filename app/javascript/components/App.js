import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Show from './pages/Show'
import Index from './pages/Index'
import ProtectedIndex from './pages/ProtectedIndex'
import UserCreate from './pages/UserCreate'
import UserEdit from './pages/UserEdit'
import Resources from './pages/Resources'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      destinations: []
    }
  }

  componentDidMount(){
    this.readNomaddaDestinations()
  }

  readNomaddaDestinations = () => {
    fetch("/destinations")
    .then(response => response.json())
    .then(destinationArray => this.setState({destinations: destinationArray}))
    .catch(errors => console.log("Destination read errors:", errors))
  }

  createUserDestinations = (mytrips) => {
    fetch("/destinations", {
      body: JSON.stringify(mytrips),
      headers:{
        "Content-Type": "application/json"
      },
      method: "POST"
      
    })
    .then(response => response.json())
    .then(() => this.readNomaddaDestinations())
    .catch(errors => console.log("New destinations Errors", errors))
  }

  updateUserDestinations = (editdestinations, id) => {
    fetch(`/destinations/${id}`, {
      body: JSON.stringify(editdestinations),
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(destination => {
      this.setState({
        destinations: this.state.destinations.map(destination => {
          if (destination.id === id) {
            return destination = editdestinations
          } else {
            return destination
          }
        })
      })
    })
    .catch(errors => console.log("Destination update errors:", errors))
  }

  deleteUserDestination = (destinationId) => {
    fetch(`/destinations/${destinationId}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(() => this.readNomaddaDestinations())
    .catch(errors => console.log ("Destination delete errors:", errors))
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    console.log("new_user_route:", new_user_route)
    console.log("sign_in_route:", sign_in_route)
    console.log("sign_out_route:", sign_out_route)
    return(
      <>
        <Router>
          <Header {...this.props}/>
          <Switch>

            <Route path="/countries" render = {(props) => <Index {...props} destinations={this.state.destinations} />} />
        
            <Route exact path="/" component={Home} />
            <Route component={NotFound}/>

          </Switch>
          <Footer/>
        </Router>
      </>
    )
  }
}

export default App