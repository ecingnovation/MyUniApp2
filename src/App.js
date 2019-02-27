import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {Login} from "./component/Login";
import {TodoApp} from "./TodoApp";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import TemporaryDrawer from './Menu';
import {RegisterType} from "./register/RegisterType";



const RegisterTypeView = () => (
        <RegisterType
            handleLogin={this.handleLogin}
            handleUserChange={this.handleUserChange}
            handlePasswordChange={this.handlePasswordChange}
        />
    );
const LoginView = () => (
    <Login/>
);

const TodoView = () => (
    <TodoApp/>
);
/*const RegisterView = () => (
    <RegisterType/>
);*/

class App extends Component {
    state={
        isLoggedIn:false
        
    }
    constructor(props) {
       super(props);
       localStorage.setItem('email',"cosw");
       localStorage.setItem('password',"123");
       
    }

    render() {
        if(this.state.isLoggedIn){
                return(
                    <Router>
                        <div>
				<Route exact path="/" component={this.ProfileUserView} />
                                <Route exact path="/register/RegisterType" component={this.RegisterTypeView} />
				<Route exact path="/register/RegisterType" component={this.EditProfileView} />
							
                        </div>
                     </Router>
                     );
        
        }
            const inf = {
                        "name":"tiffany.estupinan",
                        "email":"tiffany.estupinan@mail.escuelaing.edu.co"
                    }
            return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        
                    </header>

                    <br/>
                    <br/>

                
                    <div>
                        {localStorage.getItem('isLoggedIn') === "true"?

                            <TemporaryDrawer info={inf}/> : <Login/>
                        }
                    </div>
                    
                   


                </div>
            </Router>
        );
    }

}

export default App;