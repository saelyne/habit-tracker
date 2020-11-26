import React, { Component } from 'react';
import Habit from './habit';


class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    const habits = [...this.state.habits]; //habit에 있는 Object 복사
    const index = habits.indexOf(habit); //input인 habit의 인덱스 찾기
    habits[index].count ++;
    this.setState({habits}); //same variable name은 이렇게 한번만
    this.handleHabitsCountChange();
  };
  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count -1;
    habits[index].count = count < 0? 0 : count;
    this.setState({habits});
    this.handleHabitsCountChange();
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id!=habit.id); //돌면서 아이디 다른애들만 복사
    this.setState({habits});
    this.handleHabitsCountChange();
  };
  handleHabitsCountChange = () => {
    this.props.onHabitsCountChange(this.state.habits);
  }
  render() {
    return (
      <div className="habits">
        {/* <HabitAddForm onAdd={this.props.onAdd} /> */}
        <ul>
          {this.state.habits.map(habit => (
            <Habit 
            key={habit.id} 
            habit={habit} 
            onIncrement={this.handleIncrement} 
            onDecrement={this.handleDecrement} 
            onDelete={this.handleDelete}
            onHabitsCountChange={this.handleHabitsCountChange}
            />
          ))}
        </ul>
        {/* <button className="habit-reset" onClick="this.props.onReset">
          Reset all
        </button> */}
      </div>
    );
  }
}

export default Habits;
