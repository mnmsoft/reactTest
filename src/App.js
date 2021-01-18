import Subject from "./components/Subject";
import Nav from  "./components/Nav";
import Content from "./components/Content";
import React , { Component } from "react";
import './App.css';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB',sub:'World wide web'}
    };
  }

  render(){
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <Nav></Nav>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
