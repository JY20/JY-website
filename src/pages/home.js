import React from "react";

class Home extends React.Component {
  render() {
    return (
        <div>
          <p style={{height:this.props.height*0.12}}></p>
          <h1 style={{fontSize:"50px"}}>Jimmy Yan</h1>
          <h7>A software developer and a mechatronics engineering student at McMaster University</h7>
          <p style={{height:this.props.height*0.12}}></p>
        </div>
    );
  }
}

export default Home;