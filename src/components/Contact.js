import React, { Component } from 'react';
import "../stylesheets/Contact.css";
import axios from "axios";

export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "",
      email: "",
      message: ""
    }
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API}`});
    this.service=service;
    console.log(process.env.REACT_APP_API)
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {name, email, message} = this.state;
    this.service.post('/send', {name, email, message})
    .then(response=>{
      console.log(response);
    })
    .catch(err=>{
      console.log(err)
    })
  }

  render() {
    return (
      <div className="contact">
        <p className="contact__header">Rejoignez-Nous!</p>
        <p className="contact__text">Toujours curieux? Bravo, vous y êtes presque! 
        Venez nous rejoindre!</p>

        <form className="signupForm__input" onSubmit={this.handleFormSubmit}>

          <input placeholder="Nom" type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>

          <input placeholder="Email" type="text" name="email" value={this.state.email} onChange={ e => this.handleChange(e)} />

          <input placeholder="Message..." type="text" name="message" value={this.state.message} onChange={ e => this.handleChange(e)}/>
          <button className="submitBtn" type="submit">Envoie!</button>
        </form>      
      
      </div>
    )
  }
}
