import React from "react";

import { CookieMap } from '../../utility/cookieLib.js';
const cookie = new CookieMap();

import { PortalAction } from './portalAction';
import { PortalQuestion } from './portalQuestion';


export class Portal extends React.Component {

    constructor(props){
        super(props);
        if (cookie.getCookie('questions')){
            props.loadQuestion( cookie.getCookie('questions'), cookie.getCookie('examStatus') );
        } else {
            props.loadQuestion();
        }
    }


    render() {
        let questionBank = this.props.questions.questionBank;
        let questionToShow= '123';
        
        if  (questionBank!==null) {
            questionToShow= questionBank[this.props.questions.questionNo] 
            console.log('q to show ', questionToShow);
        }   
       
        return (

            (questionBank===null) ?
            (
                <span>
                  Loading question
                </span>     
            ) :
            (
            <div>
                <p> Exam portal </p>
                <div>
                    <PortalQuestion questions={this.props.questions} questionBody={questionToShow} />
                    <PortalAction
                        totalquestion= {this.props.questions.totalquestion}
                        questionNo= {this.props.questions.questionNo}
                        nextQuestion= {this.props.nextQuestion}
                        prevQuestion= {this.props.prevQuestion}
                        submitQuestion= {this.props.submitQuestion}
                    />
                </div>        
            </div>
            )
        )    
    }

}