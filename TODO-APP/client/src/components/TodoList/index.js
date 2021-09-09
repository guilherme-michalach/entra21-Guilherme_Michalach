import React from 'react';
import { Todo } from '../Todo';
import { TodoForm } from '../TodoForm';
import './styles.css';
import { api } from '../../services/index';


export class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {id: 1, task: 'asd', completed: true},
                {id: 2, task: 'asd', completed: true},
                {id: 3, task: 'asd', completed: true}
            ]
        }
    }

    async componentDidMount() {
        try {
            const res = await api.get('/todos');

            const todos = res.data;

            this.setState({ todos })
        } catch (err) {
            console.error(err);
        }
    }

    addTodo = todo => {
        this.setState ({
            todos: [
                ...this.state.todos,
                todo
            ]
        });
    }

    completeTodo = id => {
        const todos = this.state.todos;
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        })

        this.setState({ todos: updatedTodos });
    }

    removeTodo = id => {
        const todos = this.state.todos;
        const updatedTodos = todos.filter(todo => todo.id !== id);

        this.setState({ todos: updatedTodos });
    }

    editTodo = (id, task) => {
        const todos = this.state.todos;

        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.task = task;
            };

            return todo;
        });

        this.setState({ todos: updatedTodos})

    }

    render() {
        const todos = this.state.todos;

        return (
            <div className='todo-list'>
                <h1 className='todo-title'>Todo App</h1>
                    <TodoForm addTodo={ this.addTodo }/>
                <div className='separator'>&nbsp;∞&nbsp;</div>
                {
                    todos.map(todo => (
                        <Todo
                            key = { todo.id }
                            {...todo}
                            completeTodo={ this.completeTodo }
                            removeTodo={ this.removeTodo }
                            editTodo={ this.editTodo }
                        />
                    ))
                }
            </div>
        );
    }
}