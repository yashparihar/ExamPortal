
import { databaseGetAll , shuffle } from '../utility/helper'
import { CookieMap } from '../utility/cookieLib.js';
const cookie = new CookieMap();


function loadQuestion(data = null) {


    return dispatch => {
        console.log('action data ',data);

        if (data){
            dispatch(loadQuestionDone(data));
        } else {
            databaseGetAll()
            .then((res)=>{
                    res.questionBank = shuffle(res.questionBank);

                    cookie.setCookie('questions', res);

                    dispatch(loadQuestionDone(res));
            });
        }
    }
}

function loadQuestionDone(data) {

    console.log('in action ', data);
    return {
        type: "LOAD_QUESTION_FULFILLED",
        payload: {
            totalQuestion : data.totalQuestion,            
            questionBank: data.questionBank
        }
    }
}


export {
    loadQuestion
}

