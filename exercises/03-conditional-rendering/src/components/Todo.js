import React from 'react';
import PropTypes from 'prop-types';
import styles from './Todo.module.css';


const Todo = props => {
    return (
      <div className={styles['container']}>
        <h2 className={styles['title']}>ToDo List</h2>
        <ul>
          <h4>Completed</h4>
          {props.todos.map((object) => {
            return object.completed === false ? null : (
              <li key={object.id}>{object.title}</li>
            );
          })}
        </ul>
        <ul>
          <h4>Not Completed</h4>
          {props.todos.map((object) => {
            return object.completed === true ? null : (
              <li key={object.id}>{object.title}</li>
            );
          })}
        </ul>
      </div>
    );
}

Todo.propTypes = {
    todos: PropTypes.array,
    showCompleted: PropTypes.bool
}

export default Todo;
