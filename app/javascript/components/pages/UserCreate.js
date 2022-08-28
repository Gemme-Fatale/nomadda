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
      <div className='wholeeditpage'>
      <h1 className='usereditheader'>Let's Build a Trip!</h1>
      <Form className='usereditform'>
        <FormGroup>
          <Label className='editformlabel' for="location">Pick a City!</Label>
            <Input
              className='editinput'
              type="select"
              name="location"
              id="location"
              onChange = {this.handleChange}
              value = {this.state.newDestination.location}>
                <option>-------</option>
                <option>Sydney</option>
                <option>Melbourne</option>
                <option>Athens</option>
                <option>Santorini</option>
                <option>Mykonos</option>
                <option>Stockholm</option>
                <option>Gothenburg</option>
                <option>Bangkok</option>
                <option>Phuket</option>
                <option>Chiang Mai</option>
                <option>Taipei</option>
                <option>Kenting National Park</option>
                <option>Waikiki, HI</option>
                <option>San Diego, CA</option>
                </Input>
        </FormGroup>
        <FormGroup>
          <Label className='editformlabel' for="country">Fill Out the Country</Label>
            <Input
              className='editinput'
              type="select"
              name="country"
              id="country"
              onChange = {this.handleChange}
              value = {this.state.newDestination.country}>
                <option>-------</option>
                <option>Australia</option>
                <option>Australia</option>
                <option>Greece</option>
                <option>Greece</option>
                <option>Greece</option>
                <option>Sweden</option>
                <option>Sweden</option>
                <option>Thailand</option>
                <option>Thailand</option>
                <option>Thailand</option>
                <option>Taiwan</option>
                <option>Taiwan</option>
                <option>United States</option>
                <option>United States</option>
                </Input>
        </FormGroup>
        <FormGroup>
          <Label className='editformlabel' for="start_date">Start Date</Label>
            <Input
              className='editinput'
              type="date"
              name="start_date"
              onChange = {this.handleChange}
              value = {this.state.newDestination.start_date}
              />
        </FormGroup>
        <FormGroup>
          <Label className='editformlabel' for="end_date">End Date</Label>
            <Input
              className='editinput'
              type="date"
              name="end_date"
              onChange = {this.handleChange}
              value = {this.state.newDestination.end_date}
              />
        </FormGroup>
        <FormGroup>
          <Label className='editformlabel' for="travelers">Number of Travelers</Label>
            <Input
              className='editinput'
              type="number"
              name="travelers"
              onChange = {this.handleChange}
              value = {this.state.newDestination.travelers}
              />
        </FormGroup>
        <FormGroup>
          <Label className='editformlabel' for="trip_details">Trip Details</Label>
            <Input
              className='editinput'
              type="textarea"
              name="trip_details"
              onChange = {this.handleChange}
              value = {this.state.newDestination.trip_details}
              />
        </FormGroup>
        <FormGroup>
          <Label className='editformlabel' for="image">Upload an Image</Label>
            <Input
              className='editinput'
              type="url"
              name="image"
              id="image"
              placeholder="Image URL"
              onChange={this.handleChange}
              value = {this.state.newDestination.image} 
              />
        </FormGroup>
        <FormGroup>
          <Label className='editformlabel' for="family_friendly">Family Friendly</Label>
            <Input
              type="checkbox"
              name="family_friendly"
              onChange = {this.handleChange}
              value = {this.state.newDestination.family_friendly} 
              />
        </FormGroup>
          <Button
            className='editbutton'
            name="submit"
            onClick={this.handleSubmit}>
            Create Trip!
          </Button>
        { this.state.submitted && <Redirect to="/mytrips" />}
      </Form>
      </div>
      </>
    )
  }
}

export default UserCreate