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
      <section className="slice sct-color-1" id="contact">
        <div className="sct-inner container">
          <div className="section-title section-title--style-1 text-center mb-2">
            <h3 className="section-title-inner ">
              <span>Rejoignez le Curious Connect Club</span>
            </h3>
            <span className="section-title-delimiter clearfix d-none"></span>
          </div>
          <span className="clearfix"></span>
          <div className="fluid-paragraph fluid-paragraph-sm c-gray-light strong-300 text-center">
            <p className="text-lg line-height-1_8">
              Rejoignez une communauté d'entreprises et de CFA engagés pour l'alternance et la diversité.
            </p>
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
              <form className="contact__form form-group" onSubmit={this.handleFormSubmit}>
                <input className="form-control" placeholder="Nom" type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
                <input className="form-control" placeholder="Email" type="text" name="email" value={this.state.email} onChange={ e => this.handleChange(e)} />
                <input className="form-control" style={{height:"100px"}} placeholder="Message..." type="text" name="message" value={this.state.message} onChange={ e => this.handleChange(e)}/>
                <button className="btn contact__btn" type="submit">Envoie!</button>
              </form>      
            </div>
          </div>     
        </div>
      </section>
    )
  }
}

