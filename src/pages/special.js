import React, { useState, useEffect } from "react";
import { firebase } from "./config";

class Special extends React.Component {
    constructor(props) {
        super(props);
        this.database = firebase.database().ref("/").child('users');
        this.state = {
        email: "",
        formText: "",
        info : [],
        users: [],
        element: 0,
        t1:""
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.newUserState = [];
        this.getInfo();
    }
    onInputchange(event) {
        event.preventDefault();
        this.setState({
        email: event.target.value
        });
    }
    onSubmitForm(event) {
        event.preventDefault();
        //this.state.element=0
        this.getInfo();
        // this.database.push().set({
        // email: this.state.email,
        // });
        // this.setState({
        // email:""
        // });
        //console.log(this.state.email)
        for(var i = 0; i < this.state.users.length; i++){
            //console.log(i, this.state.users[i])
            if (this.state.email.toString() === this.state.users[i].toString()){
                this.state.t1 = "Login Successful"
                console.log("Login Successful")
            } else {
                this.state.t1 = "Credentials Invalid"
                console.log("Credentials Invalid")
            }
        }
    }
    //componentDidMount() {
    getInfo () {
        firebase.database().ref("users").on("value", snapshot => {
          let info = [];
          snapshot.forEach(snap => {
              // snap.val() is the dictionary with all your keys/values from the 'students-list' path
              info.push(snap.val());
          });
          this.setState({ info: info });
        });
        console.log(this.state.info.length)
   }

  render() {
    return (
        <div>
            <p style={{height:this.props.height*0.12}}></p>
                <form onSubmit={this.onSubmitForm}>
                <div class="form-group">
                    <label style={{ height: "50px", fontSize: "24px" }}></label>
                    <input style={{borderRadius:50,outline:"none",border:"none",height: "50px",  fontSize: "24px" }} 
                    placeholder="Enter email" value={this.state.email} onChange={this.onInputchange}></input>
                    <button
                    style={{ borderRadius:50, border:"none",height: "56px", fontSize: "24px",backgroundColor:"#80b8fb"}}>
                    Login In
                    </button>
                    <br/>
                    <p>{this.newUserState}</p>
                </div>
                </form>
                <tbody>
                {this.state.info.map(data => {
                    const len = this.state.info.length
                    //console.log('done', data.email)
                    this.state.users[len-1-this.state.element] = data.email
                    //console.log('s', this.state.users, this.state.element)
                    this.state.element ++
                    return (
                        <tr>     
                        {/* <td>{data.email}</td> */}
                        </tr>
                    );
                    })}
                </tbody>
                {this.state.t1}
            <p style={{height:this.props.height*0.12}}></p>
        </div>
    );
  }
}

export default Special;