import React from "react";
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from 'react-router-dom';

import { CookieMap } from '../../utility/cookieLib.js';
const cookie = new CookieMap();


var loginbtn = document.getElementById('login_btn');
// DONT WORK
const goHome = () => {
    <Redirect to="/portal" />
}


export class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            users: [],
            divStyle: {
                margin: '10%',
                width: '50%',
                border: '3px solid black',
                padding: '10px'
            },
            HeadStyle: {
                margin: '10%',
                width: '50%',
                // border: '3px solid black',
                padding: '10px'
            }
        }
    }


    validateField() {

        return new Promise((resolve, reject) => {
            var user = document.getElementById("username").value;
            var pass = document.getElementById("password").value;

            console.log("U:",user,' p:',pass);
            if ((user === null || user === '') && (pass === null || pass === '')) 
                  reject('Cant keep blank')
            /*
                 1 . userid validation -> trim , not-case-sensitive , no special character , only alphabetics character
                 2 . 
           */
           user = user.trim();
           
           var letters = /^[A-Za-z]+$/;
            if(!user.match(letters)){
                reject('Only alphabet allowed')
            }
            
            try {
                resolve(this.props.loginCheck(user, pass));
            }
            catch (err) {
                console.log(err);
                reject(err);
            }
        });
    }


    setUserToFbDb() {
        this.validateField().then((res) => {
            if (!this.props.loginDet.login_status) {
                alert('something was wrong');
                document.getElementById('login_btn').disabled = false;
                return;
            }

            console.log('. usrname:- ', this.props.loginDet.username);
            cookie.setCookie("auth", this.props.loginDet.username , 365);
            window.location.pathname = "/";
        })
            .catch((err) => {
                alert( err); 
                document.getElementById('login_btn').disabled = false;
                console.log("err is " + err);
            })
    }


    render() {
        return (

            <div>
                <h2> Exam portal </h2>
            <div>
            
            <p> Enter Any Username</p>
            <input type="text" id="username" name="username" placeholder="username" />
            <p> Password </p>
            <input type="password" name="password" id="password" placeholder="password"/>

                <button id="login_btn" onClick={() => {
                    console.log('clicked');
                    document.getElementById('login_btn').disabled = true;
                    this.setUserToFbDb();
                }
                }>Login
                </button>
            </div>
            </div>
        )



    };
}