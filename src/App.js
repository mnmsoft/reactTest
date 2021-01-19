import Subject from "./components/Subject";
import Nav from  "./components/Nav";
import Content from "./components/Content";
import React , { Component } from "react";
import './App.css';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      selectId:1,
      subject:{title:'WEB',sub:'World wide web2'},
      welcome:{title:'Welcome',desc:'welcome react!!'},
      contents:[
        {id:1,title:'HTML',desc:'HTML is HyperText ...'},
        {id:2,title:'CSS',desc:'CSS is design ...'},
        {id:3,title:'javascript',desc:'script ...'},
      ]

    };
  }

  render(){
    console.log("app render");
    console.log(this.state.mode);
    var _title , _desc;
    if (this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else{
      var i = 1;
      while(i <= this.state.contents.length){
        if (i === this.state.selectId){
          _title = this.state.contents[i-1].title;
          _desc = this.state.contents[i-1].desc;                
          break;
        }
        i = i+ 1;
      }

    }


    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}></Subject>
        <Nav data={this.state.contents} onChangePage={function(id){
          this.setState({
            mode:'read',
            selectId : Number(id)
          });
        }.bind(this)}></Nav>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}




export default App;
