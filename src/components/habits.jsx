import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    // 전체 habits 업데이트 - habit: PureComponent시 업데이트 안됨. ...=shallow copy
    // const habits = [...this.state.habits]; //habits에 있는 Object 복사
    // const index = habits.indexOf(habit); //input인 habit의 인덱스 찾기
    // habits[index].count ++;
    // this.setState({habits}); //same variable name은 이렇게 한번만
    // this.handleHabitsCountChange();

    // 해당하는 habit만 업데이트
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return {...habit, count: habit.count +1}
      }
      return item;
    });
    this.setState({habits}, function () {
      this.handleHabitsCountChange();
    });
    // 아래처럼 하면 안됨
    // this.setState({habits}); 
    // this.handleHabitsCountChange();
  };

  handleDecrement = (habit) => {
    // 전체 habits 업데이트
    // const shabits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count -1;
    // habits[index].count = count < 0? 0 : count;
    // this.setState({habits});
    // this.handleHabitsCountChange();

    // 해당하는 habit만 업데이트
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return {...habit, count: count < 0 ? 0 : count}
      }
      return item;
    });
    this.setState({habits}, function () {
      this.handleHabitsCountChange();
    });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id!=habit.id); //돌면서 아이디 다른애들만 복사
    this.setState({habits});
    this.handleHabitsCountChange();
  };

  handleAdd = name => {
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
    this.setState({habits});
    this.handleHabitsCountChange();
  }

  handleReset = () => {
    // const habits = []; // remove all habits
    // const habits = this.state.habits.map(habit => {
    //   habit.count = 0;
    //   return habit;
    // });

    const habits = this.state.habits.map(item => {
      if (item.count !== 0) {
        return {...item, count: 0}
      }
      return item;
    });
    
    this.setState({habits}, function () {
      this.handleHabitsCountChange();
    });
  }

  handleHabitsCountChange = () => {
    this.props.onHabitsCountChange(this.state.habits);
  };

  render() {
    console.log("habits");
    return (
      <div className="habits">
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.state.habits.map(habit => (
            <Habit 
            key={habit.id} 
            habit={habit} 
            // count={habit.count}
            onIncrement={this.handleIncrement} 
            onDecrement={this.handleDecrement} 
            onDelete={this.handleDelete} // onDelete{(habit) => {this.props.handleDelete(habit)}}
            />
          ))}
        </ul>
        <button className="habit-reset" onClick={this.handleReset}>
          Reset all
        </button>
      </div>
    );
  }
}

export default Habits;
