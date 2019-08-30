
import React, { Component } from 'react';
import axios from 'axios';

export default class Inscrire extends Component {
  constructor(props) {
    super(props);
    this.onChangenom = this.onChangenom.bind(this);
    this.onChangeprenom = this.onChangeprenom.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nom: '',
      prenom: '',
      email:'',
      
    }
  }
  onChangenom(e) {
    this.setState({
      nom: e.target.value
    });
  }
  onChangeprenom(e) {
    this.setState({
      prenom: e.target.value
    })  
  }
  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }
  

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      email: this.state.email,
     
    };
    axios.post('http://localhost:8080/particulier/'+localStorage.getItem('ti'), obj)
        .then(res => console.log(res.data));
    
    this.setState({
      nom: '',
      prenom: '',
      email: '',
 
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3></h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nom:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nom}
                      onChange={this.onChangenom}
                      />
                </div>
                <div className="form-group">
                    <label>Phone: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.prenom}
                      onChange={this.onChangeprenom}
                      />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="email" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeemail}
                      />
                </div>
              
                <div className="form-group">
                    <input type="submit" value="S'incrire" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}