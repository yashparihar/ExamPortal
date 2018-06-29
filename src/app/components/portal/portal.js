import React from "react";

import { CookieMap } from '../../utility/cookieLib.js';
const cookie = new CookieMap();

import { PortalAction } from './portalAction';
import { PortalQuestion } from './portalQuestion';

import { databaseGetAll } from '../../utility/helper'

export class Portal extends React.Component {

    constructor(props){
        super(props);

        if (cookie.getCookie('questions')){
            console.log('exist already', cookie.getCookie('questions') );
            props.loadQuestion( cookie.getCookie('questions') );
        } else {
            props.loadQuestion();
        }
    }

    componentDidMount(){
    
    }

    render() {

        let questionBank = this.props.questions.questionBank;
        console.log('dfdf', questionBank );

        if  (this.props.questions.questionBank!==null) {

            questionBank.map((msgs, index) => {
                console.log(index + ' -> ' , msgs);      
                return (<span> . </span>)
            });

            
            let r = cookie.getCookie('questions')
            console.log('->  ',r);
        }   
       
        return (

            (this.props.questions.questionBank===null) ?
            (
                  <span>
                      Loading question
                   </span>     
            ) :
            (
            <div>
                <p> Exam portal </p>
                <div>
                    <PortalQuestion questions={this.props.questions}/>
                    <PortalAction/>
                </div>        
            </div>
            )
        )    
    }

}