import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {TodoList} from "./TodoList";
import moment from "moment";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export class TodoApp extends Component{

    constructor(props) {
            super(props);
            this.state = {items: [], text: '', priority: 0, dueDate: moment()};
            this.handleTextChange = this.handleTextChange.bind(this);
            this.handlePriorityChange = this.handlePriorityChange.bind(this);
            this.handleDateChange = this.handleDateChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

    render(){
        return (


            <div>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <div id="root"></div>
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <h3>Task Planner</h3>

                    <TextField
                        required
                        id="text"
                        label="Text"
                        onChange={this.handleTextChange}
                        value={this.state.text}>
                        variant="outlined"
                        margin="normal"
                    </TextField>

                    <br/>
                    <br/>
                    <label htmlFor="priority" className="right-margin">
                        Priority:
                    </label>

                    <input
                        id="priority"
                        type="number"
                        onChange={this.handlePriorityChange}
                        value={this.state.priority}>
                    </input>
                    <br/>
                    <br/>

                    <DatePicker
                        id="due-date"
                        selected={this.state.dueDate}
                        placeholderText="Due date"
                        onChange={this.handleDateChange}>
                    </DatePicker>
                    <br/>
                    <Button variant="outlined"  >
                        Add #{this.state.items.length + 1}
                    </Button>
                </form>
                <br/>
                <br/>
                <TodoList todoList={this.state.items}/>
            </div>

            );
    }

        handleTextChange(e) {
            this.setState({
                text: e.target.value
            });
        }

        handlePriorityChange(e) {
            this.setState({
                priority: e.target.value
            });
        }

        handleDateChange(date) {
            this.setState({
                dueDate: date
            });
        }

        handleSubmit(e) {

            e.preventDefault();

            if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
                return;

            const newItem = {
                text: this.state.text,
                priority: this.state.priority,
                dueDate: this.state.dueDate,

            };
            this.setState(prevState => ({
                items: prevState.items.concat(newItem),
                text: '',
                priority: '',
                dueDate: ''
            }));
        }
}