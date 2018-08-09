import React, { Component } from 'react';

import Header from "./Header";
import Footer from "./Footer";

class Layout extends Component {
    constructor(){
        super();
        this.state = {
            title: "welcome",
        }
    }

    changeTitle(title){
        this.setState({title})
    }
  render() {
    return (
        <div>
            <Header changeTitle={this.changeTitle.bind(this)} title = {this.state.title}/>
            <Footer />
        </div>
    );
  }
}

export default Layout;
