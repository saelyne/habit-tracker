
import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    totalCount : 0,
  };
  handleHabitsCountChange = (habits) => {
    console.log(habits);
    const totalCount = habits.filter(item => item.count>0).length;
    this.setState({totalCount});
  }

  render() {
    console.log("app");
    return (
      <>
      <Navbar totalCount={this.state.totalCount}></Navbar>
      <Habits 
        onHabitsCountChange={this.handleHabitsCountChange}
      />
      </>
    );
  }
}

export default App;
