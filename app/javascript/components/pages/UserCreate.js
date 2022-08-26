import React, { Component } from 'react'
import {  Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap'

class UserCreate extends Component {
  constructor(props){
    super(props)
    this.state = {
      newDestination: {
        location: "",
        main_attraction: "",
        start_date:"",
        end_date:"",
        travelers:"",
        trip_details:"",
        image:"",
        family_friendly: true,
        visitable_id: this.props.current_user.id,
        visitable_type: "User",
        country: ""
      },
      submitted : false
    }
 };

  handleChange = (e) => {
  
    let {newDestination} = this.state
    newDestination[e.target.name] = e.target.value
    this.setState({newDestination: newDestination})
  }

  handleSubmit = () => {
    this.props.createUserDestinations(this.state.newDestination)
    this.setState({submitted: true})
  }

  render() {
  
    return (
      <>
      <h1>Let's Build a Trip!</h1>
      <Form>
        <FormGroup>
          <Label for="location">Pick a City!</Label>
            <Input
              type="select"
              name="location"
              id="location"
              onChange = {this.handleChange}
              value = {this.state.newDestination.location}>
                <option>-------</option>
                <option>Bangkok</option>
                <option>Phuket</option>
                <option>Waikiki, HI</option>
                <option>San Diego, CA</option>
                </Input>
        </FormGroup>
        <FormGroup>
          <Label for="country">Fill Out the Country</Label>
            <Input
              type="select"
              name="country"
              id="country"
              onChange = {this.handleChange}
              value = {this.state.newDestination.country}>
                <option>-------</option>
                <option>Thailand</option>
                <option>Thailand</option>
                <option>United States</option>
                <option>United States</option>
                </Input>
        </FormGroup>
        <FormGroup>
          <Label for="start_date">Start Date</Label>
            <Input
              type="date"
              name="start_date"
              onChange = {this.handleChange}
              value = {this.state.newDestination.start_date}
              />
        </FormGroup>
        <FormGroup>
          <Label for="end_date">End Date</Label>
            <Input
              type="date"
              name="end_date"
              onChange = {this.handleChange}
              value = {this.state.newDestination.end_date}
              />
        </FormGroup>
        <FormGroup>
          <Label for="travelers">Number of Travelers</Label>
            <Input
              type="number"
              name="travelers"
              onChange = {this.handleChange}
              value = {this.state.newDestination.travelers}
              />
        </FormGroup>
        <FormGroup>
          <Label for="trip_details">Trip Details</Label>
            <Input
              type="textarea"
              name="trip_details"
              onChange = {this.handleChange}
              value = {this.state.newDestination.trip_details}
              />
        </FormGroup>
        <FormGroup>
          <Label for="image">Upload an Image</Label>
            <Input
              type="url"
              name="image"
              id="image"
              placeholder="Image URL"
              onChange={this.handleChange}
              value = {this.state.newDestination.image} 
              />
        </FormGroup>
        <FormGroup>
          <Label for="family_friendly">Family Friendly</Label>
            <Input
              type="checkbox"
              name="family_friendly"
              onChange = {this.handleChange}
              value = {this.state.newDestination.family_friendly} 
              />
        </FormGroup>
          <Button
            name="submit"
            onClick={this.handleSubmit}>
            Create Trip!
          </Button>
        { this.state.submitted && <Redirect to="/mytrips" />}
      </Form>
      </>
    )
  }
}

export default UserCreate