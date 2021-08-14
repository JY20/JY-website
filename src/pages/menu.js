import React from "react";
import {
  Link,
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Home from "./home";
import E from "./e";
import Projects from "./projects";

class Menu extends React.Component {
  render() {
    function MouseOver(event) {
        event.target.style.background = '#41474a';
    }   
    function MouseOut(event){
        event.target.style.background="transparent";
    }
    return (
      <div>
        <BrowserRouter>
          <section style={{backgroundColor: "#785ac1", margin:"1px",width:this.props.width*0.99, height:this.props.height*0.1}}> 
            <Link to="/home">
                <Button onMouseOver={MouseOver} onMouseOut={MouseOut} style={{fontSize:"18px",background:"transparent",color:"white",border:"none",width:this.props.width*0.245,  height:this.props.height*0.1}}>
                    Home
                </Button>
            </Link>
            <Link to="/e">
                <Button onMouseOver={MouseOver} onMouseOut={MouseOut} style={{fontSize:"18px",background:"transparent",color:"white",border:"none", width:this.props.width*0.245,  height:this.props.height*0.1}}>
                    Experiences/Extracurriculars
                </Button>
            </Link>
            <Link to="/projects">
                <Button onMouseOver={MouseOver} onMouseOut={MouseOut} style={{fontSize:"18px",background:"transparent",color:"white",border:"none", width:this.props.width*0.245,  height:this.props.height*0.1}}>
                    Projects/Awards
                </Button>
            </Link>
            <Button onClick={()=> window.open("https://drive.google.com/file/d/1SykcPjBXv-MaUSC_J9CQjl1Q2CqkRVHx/view?usp=sharing", "_blank")} onMouseOver={MouseOver} onMouseOut={MouseOut} style={{fontSize:"18px",background:"transparent",color:"white",border:"none", width:this.props.width*0.245,  height:this.props.height*0.1}}>
                Resume
            </Button>
          </section>
          <br />
          <Switch>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home height={this.props.height} width={this.props.width}/>
            </Route>
            <Route path="/e">
              <E height={this.props.height} width={this.props.width}/>
            </Route>
            <Route path="/projects">
              <Projects height={this.props.height} width={this.props.width}/>
            </Route>
            <Route path="/resume">
                window.open("https://casesandberg.github.io/react-color/", "_blank") 
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Menu;