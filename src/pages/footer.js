import React from "react";
import Git from "../imgs/github.png";
import Linkedin from "../imgs/linkedin.png";
import Mail from "../imgs/mail.png";

class Footer extends React.Component {
  render() {
    return (
        <div>
            <footer style={{backgroundColor: "#785ac1", margin:"1px",width:this.props.width*0.99}}>
                <br/>
                <p style={{height:"30px", margin:"-5px"}}>Contact</p>
                <img style={{height:"30px", margin:"10px"}} src={Git}/>
                <img style={{height:"30px", margin:"10px"}} src={Linkedin}/>
                <img style={{height:"31px", margin:"10px"}} src={Mail}/>
                <br/>
            </footer>
        </div>
    );
  }
}

export default Footer;