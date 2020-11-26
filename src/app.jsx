
import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    totalCount : 0,
  };
  // handleIncrement = (habit) => {
  //   const habits = [...this.state.habits]; //habit에 있는 Object 복사
  //   const index = habits.indexOf(habit); //input인 habit의 인덱스 찾기
  //   habits[index].count ++;
  //   this.setState({habits}); //same variable name은 이렇게 한번만
  //  };
  // handleDecrement = (habit) => {
  //   const habits = [...this.state.habits];
  //   const index = habits.indexOf(habit);
  //   const count = habits[index].count -1;
  //   habits[index].count = count < 0? 0 : count;
  //   this.setState({habits});
  // };
  // handleDelete = (habit) => {
  //   const habits = this.state.habits.filter(item => item.id!=habit.id); //돌면서 아이디 다른애들만 복사
  //   this.setState({habits});
  // };
  handleHabitsCountChange = (habits) => {
    const totalCount = habits.filter(item => item.count>0).length;
    this.setState({totalCount});
  }

  render() {
    // const totalCount = this.state.habits.length;
    return (
      <>
      <Navbar totalCount={this.state.totalCount}></Navbar>
      <div><input placeholder="Type your habit"></input></div>
      <Habits 
        // habits={this.state.habits}
        // onIncrement={this.handleIncrement} 
        // onDecrement={this.handleDecrement} 
        // onDelete={this.handleDelete}
        onHabitsCountChange={this.handleHabitsCountChange}
      />
      </>
    );
  }
}

export default App;
