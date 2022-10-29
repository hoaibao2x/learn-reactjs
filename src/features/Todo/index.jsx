import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import { useState } from 'react';

TodoFeature.propTypes = {

};

function TodoFeature(props) {

    const initTodoList = [
        {
            id: 1,
            title: "Eat",
            status: "new"
        },
        {
            id: 2,
            title: "Sleep",
            status: "completed"
        },
        {
            id: 3,
            title: "Code",
            status: "new"
        }
    ];

    const [todoList, setTodoList] = useState(initTodoList);

    const handleTodoList = (todo, index) => {
        // Clone current array to the new one
        const newTodoList = [...todoList];

        // console.log(todo, index);

        // Toogle state
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === "new" ? "completed" : "new"
        }
        setTodoList(newTodoList);
    }

    return (
        <div>
            <h2>Todo List</h2>
            <TodoList todoList={todoList} onTodoClick={handleTodoList} />
        </div>
    );
}

export default TodoFeature;