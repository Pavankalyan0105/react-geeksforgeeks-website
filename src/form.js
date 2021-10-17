import React, { Component } from "react";
import axios from "axios";
import "./form.css"
import formimg from "./images/undraw_Online_re_x00h.png"

class GfgForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', name:'', institution:'', instituteRank:'', problems:'', coding:'', error:'', loaded: true };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fetchsome = this.fetchsome.bind(this);
    }

    fetchsome() {
      const url = `https://cors-anywhere.herokuapp.com/https://geeks-for-geeks-api.vercel.app/${this.state.value}`;
      axios.get(url).then((res) => {
        let data = res.data;
        if(data.error)
        {
          this.setState({ error:'user not found', value:'', name:"", institution:"", instituteRank:"", problems:"", coding:"", loaded: true})
        }
        else{
          this.setState({ value:'', name:data.info.name, institution:data.info.institution, instituteRank:data.info.instituteRank, problems:data.info.solved, coding:data.info.codingScore, error:'', loaded: true});
        }
      })
      this.state.value="";
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      this.setState({ loaded: false })
      this.fetchsome();
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="form-div">
            <div className="form-title">
                <h1>GeeksforGeeks Stats</h1>
                <div className="form-img">
                    <img src={formimg} />
                </div>
            </div>
            <div className="form-main">
                <div className="form">
                    <form onSubmit={this.handleSubmit} className="form-text" >  
                        <div>      
                        <label>
                        GeeksforGeeks username:
                        <input type="text" placeholder="username" value={this.state.value} onChange={this.handleChange} />  
                        </label>
                        </div>
                    <input id="in" type="submit" value="Submit" />
                    </form>
                    <div className="form-display">
                      { this.state.loaded? (<p id="er">{this.state.error}</p>) : (<div class="loader"></div>)}
                      <p>Name: {this.state.name}</p>
                      <p>Institution: {this.state.institution}</p>
                      <p>Institute Rank: {this.state.instituteRank}</p>
                      <p>Problems Solved: {this.state.problems}</p>
                      <p>Coding Score: {this.state.coding}</p>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default GfgForm;