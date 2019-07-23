import React, { Component } from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/NavBar/Navbar";
import Footer from "./components/layout/Footer/Footer";

import Landing from "./components/home/Landing";
import Movies from "./components/Data/Movies";

import store from "./components/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movies} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
