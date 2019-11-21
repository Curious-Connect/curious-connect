import React, { Component } from 'react';
import "../stylesheets/Contact.css";
import axios from "axios";

export default class Contact extends Component {

  constructor(props){
    super(props);
    this.state={
      name: "",
      email: "",
      message: "",
    }
    let   _isSent=false;
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API}`});
    this.service=service;
    console.log(process.env.REACT_APP_API)
    this._isSent=_isSent;
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
      this._isSent=true
      this.setState({
        name:"",
        email:"",
        message:"",
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }

  render() {
    return (
      <div className="contact">
        
        <div className="section-title section-title--style-1 text-center mb-2">
        <h3 className="section-title-inner text-normal transformation" style={{fontFamily: "Raleway", color:"white"}}>
            Rejoignez-Nous !
        </h3>
        <span className="section-title-delimiter clearfix d-none"></span>
        </div>

        <span className="clearfix"></span>

        <div className="fluid-paragraph fluid-paragraph-sm  strong-300 text-center" style={{color:"#b7c1c8"}}>
        Toujours curieux ? Bravo, vous y êtes presque ! Venez nous rejoindre !
        </div>

        <span className="space-xs-xl"></span>

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="contact__sent">
              {(this._isSent)?
              <p>Email sent! Thank you for contacting us!</p>
              :
              null
              }
            </div>
            <form className="contact__form" onSubmit={this.handleFormSubmit}>

              <input placeholder="Nom" type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>

              <input placeholder="Email" type="text" name="email" value={this.state.email} onChange={ e => this.handleChange(e)} />

              <input style={{height:"100px"}} placeholder="Message..." type="text" name="message" value={this.state.message} onChange={ e => this.handleChange(e)}/>
              <button className="contact__btn" type="submit">Envoie!</button>
            </form>      

          </div>
        </div>     
      
      </div>
    )
  }
}

