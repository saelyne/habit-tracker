import React, { Component } from 'react';

class Habit extends Component {
    // state = {
    //     count: 0,
    // };
    // handleIncrement = event => {
    //     console.log(event);
    // }
    // handleIncrement = () => {
    //     // state object 안에 있는 count 증가 후 state 업데이트 하기
    //     this.setState({count: this.state.count + 1});
    // }
    // handleDecrement = () => {
    //     const count = this.state.count - 1;
    //     this.setState({count: count < 0 ? 0 : count});
    // }
    handleIncrement = () => {
      this.props.onIncrement(this.props.habit);
      this.props.onHabitsCountChange();
    }
    handleDecrement = () => {
      this.props.onDecrement(this.props.habit);
      this.props.onHabitsCountChange();
    }
    handleDelete = () => {
      this.props.onDelete(this.props.habit);
      this.props.onHabitsCountChange();
    }
  render() {
      // console.log(this.props);
      const {name, count} = this.props.habit; //동일한 이름 써야됨
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" 
        onClick={this.handleDelete}>
        {/* onClick={() => {this.props.onDelete(this.props.habit);}}> #render 함수가 호출될때마다 계속 함수가 만들어짐 (불필요하게) */}
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
