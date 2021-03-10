import React, { Component } from 'react';
import {Switch, Route } from "react-router-dom";
import PhotoGrid from './components/PhotoGrid'
import Single from './components/Single'
import Header from './components/Header'
import  '../src/App.css'

 class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={PhotoGrid}/>
          <Route path="/view/:postId" component={Single}/>
        </Switch>
      </>
    )
  }
}
export default App;