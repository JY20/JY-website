import React from "react";
import Menu from './menu';
import Footer from './footer';

class Home extends React.Component {
  render() {
    return (
        <div>
            <Menu height={this.props.height} width={this.props.width} />
            <p style={{height:this.props.height*0.12}}></p>
            <h1 style={{fontSize:"50px"}}>Jimmy Yan</h1>
            <h7>A software developer and a mechatronics engineering student at McMaster University</h7>
            <p style={{height:this.props.height*0.12}}></p>
            <Footer height={this.props.height} width={this.props.width} />
        </div>
    );
  }
}

export default Home;