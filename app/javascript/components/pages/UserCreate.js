import React, { Component } from 'react'
import {  Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

class UserCreate extends Component {
  constructor(props){
    super(props)
    this.state = {
      newDestination: {
        location:"",
        start_date:"",
        end_date:"",
        travelers:"",
        trip_details:"",
        image: "",
        family_friendly: ""
      },
      submitted : false
    }
  }
  
  handleChange = (e) => {
  
    let {newDestination} = this.state
    newDestination[e.target.name] = e.target.value
    this.setState({newDestination: newDestination})
  }

  handleSubmit = () => {
    this.props.createDestination(this.state.newDestination)
    this.setState({submitted: true})
  }



  render() {

    return (
      <>
      <h1>Let's Build a Trip!</h1>
      <Form>
        <FormGroup>
          <Label for="location">Location</Label>
            <Input
              type="text"
              name="location"
              onChange = {this.handleChange}
              value = {this.state.newDestination.location}
              />
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
          <Label for="image">Image</Label>
            <Input
              type="text"
              name="image"
              readOnly = {true}
              value = {this.state.newDestination.image} disabled
              />
        </FormGroup>
        <FormGroup>
          <Label for="family_friendly">Family Friendly</Label>
            <Input
              type="boolean"
              name="family_friendly"
              onChange = {this.handleChange}
              value = {this.state.newDestination.family_friendly} disabled
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