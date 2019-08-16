import React, { Component } from "react";
import "./styles/css/bootstrap.css";
import "./styles/css/styles.css";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";

class App extends Component {
  foo = () => "bar";

  render() {
    const name = "Nndou";
    const loading = false;
    const showName = true;
    return (
      <div className='App'>
        <Navbar />
        <UserItem />
      </div>
    );
  }
}
export default App;
