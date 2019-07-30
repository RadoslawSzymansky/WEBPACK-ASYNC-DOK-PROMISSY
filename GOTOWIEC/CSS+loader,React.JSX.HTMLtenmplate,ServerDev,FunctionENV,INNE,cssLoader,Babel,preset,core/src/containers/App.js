import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title'
import TodoList from '../components/TodoList'
import { hot } from 'react-hot-loader';
import sassStyles from "../styles/App.scss"
import Img from "../img/avocode.png"
// tes style sass odrazu dzialaja na calosc!
// a jak zrobimy < div className = { style.TodoApp } > to wtedy sa wyodrebione tylko dla tego kontenera i ta klasa!
console.log(Img)
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'clean room'
            }, {
                id: 2,
                text: 'wash the dishes'
            }, {
                id: 3,
                text: 'feed my cat'
            },]
        };

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({ data });
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({ data: remainder });
    }
    render() {
        const { data } = this.state;
        return (
            <div className={style.TodoApp}>
                <img src={Img} alt="" />
                <Title taskNumber={data.length} />
                <TodoList list={data} remove={this.removeTodo} />
            </div>
        );
    }
}

export default hot(module)(App);
