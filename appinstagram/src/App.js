import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return(
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">InstagramSearch</h1>
            <SearchForm />
          </div>   
        </div>    
        <div className="main-content">
       
        </div>
      </div>
    );
  }
}

export default App;
