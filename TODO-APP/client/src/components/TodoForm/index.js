import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import './styles.css';
import { v4 as uuid } from 'uuid';

export class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };
    }

    handleChange = e => {
        this.setState({ task: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        const todo = {
            id: uuid(),
            task: this.state.task,
            completed: false
        };

        this.props.addTodo(todo)
        this.setState({ task: '' })
    }

    render() {
        return (
            <form className='todo-form' onSubmit={ this.handleSubmit }>
                <input 
                type='text'
                placeholder='Digite uma tarefa'
                required
                value={this.state.task}
                onChange={this.handleChange}/>
                <button>
                    <IoMdAdd/>
                </button>
            </form>
        );
    }
}