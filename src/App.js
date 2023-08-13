import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



export default class App extends Component {
  pagesize = 5;
  
  state ={
    progress : 0
  }

  setProgress = (progress)=>{
    this.setState({progress : progress})
  }
  render() {
    return (
      <div>
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pagesize = {this.pagesize} country='in' category="general"/>} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pagesize = {this.pagesize} country="in" category="health"/>} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pagesize = {this.pagesize} country="in" category="science"/>} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pagesize = {this.pagesize} country="in" category="sports"/>} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pagesize = {this.pagesize} country="in" category="technology"/>} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pagesize = {this.pagesize} country="in" category="business"/>} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pagesize = {this.pagesize} country="in" category="entertainment"/>} />
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}
