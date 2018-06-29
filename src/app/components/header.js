import React from "react";
import {NavLink} from 'react-router-dom' ;

import {CookieMap} from './../utility/cookieLib.js';

const cookie = new CookieMap();


export const Header = (props) => {
    return (
        <div>
                <div className="header">
                <div className="header-right">
    
                        <NavLink  to="/" activeStyle={{color: 'green'}}> Exam Port  </NavLink>
                           
                        <span> User: {cookie.getCookie('auth')} </span> 
                       
                        <a href="#" onClick={() => {
                            props.logout();
                            cookie.deleteCookie("auth");
                            localStorage.clear();
                            window.location.pathname = "/login";
                        }}> Logout
                        </a>

                </div>
                </div>


        </div>
    );
}