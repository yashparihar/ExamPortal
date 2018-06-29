import React from 'react';

// import { CookieMap } from './../utility/cookieLib.js';
// const cookie = new CookieMap();

//CONNECT REDUX WITH REACT APP WHICH DISPATCHING STATE AND ACTION TO PROPS
 import { connect } from 'react-redux';


//IMPORT ACTION
 import { checkLogin, logout } from '../action/loginAction';
 import { loadQuestion } from '../action/questionAction';

// IMPORTING UTILITY HELPER
 import { checkForAuth  } from '../utility/helper';

//IMPORTING REACT ROUTER DEPENDENCY
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route';

//All Components

import { Summary } from '../components/portal/summary'
import { Portal } from '../components/portal/portal';
import { Login } from '../components/auth/login';

import { Header } from '../components/header';
import { Footer } from '../components/footer';


class App extends React.Component {
    
    constructor() {
        super();
    }

    userBasicPageStructure(page) {
        return (
            <div>
                <Header user={this.props.user} logout={this.props.logout} />
                {page}
                <Footer />
            </div>
        );
    }

    
    render() {
        return (
            <div>
             <Router>
              <div>

                {/* // CHECK FOR AUTH THEN CHECK IF EXAM STILL PENDING FOR USER ELSE REDIRECT TO LOGIN OR SUMMARY PAGE */}
                <Route exact path="/" render={() => (
                    checkForAuth() ? this.userBasicPageStructure(
                        <Portal 
                            loadQuestion={this.props.loadQuestion}
                            questions={this.props.questions}
                        />
                    ) :
                        <Redirect to="/login" />
                )} />


                {/* // HERE CHECK FOR AUTH THEN CHECK IF GIVEN EXAM ELSE REDIRECT TO LOGIN OR PORTAL PAGE RESP  */}
                <Route path="/summary" render={() => (
                    checkForAuth() ? this.userBasicPageStructure(
                        <Summary/>
                    ) :
                        <Redirect to="/login" />
                )} />


                {/* // CHECK IF EXIST THEN REDIRECT TO PORTAL OR SUMMARY AS PER HIS STATUS */}
                <Route path="/login" render={() => (
                    checkForAuth() ? this.userBasicPageStructure(
                        <Redirect to="/" />
                    ) :
                        <Login loginCheck={this.props.login_check} loginDet={this.props.login} />
                   
                )} />


                {/* // WRONG ROUTE */}
                 <Route exact path="/*" render={() => (
                    <div> 
                            404 NOT FOUND
                    </div> 
                )} />



             </div>
            </Router>
          </div> 
        );
    }
}


//GETS STATES PASSED FROM PROVIDER
//STATE PASSED FROM REDUX AS WE WRAP THIS COMP AROUNF PROVIDER
const mapStateToProps = (state) => {
    return {
        login: state.login,
        questions: state.questions
    }
}
//THIS POPULATED IN THE COMPONENTS PROPS

//DISPATCH ACTION
const mapDispatchToProps = (dispatch) => {
    return {
        login_check: (username, password) => {
            dispatch(checkLogin(username, password));
        },
        logout: () => {
            dispatch(logout());
        },
        loadQuestion: (data) => {
            dispatch(loadQuestion(data));
        },
        
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
//CONNECT BOTH PROPS AND DISPATCH ACTION