const questionReducer = (state = {
    questionBank: null,
    totalquestion: null
}, action) => {
    switch (action.type) {
        case "LOAD_QUESTION_FULFILLED":
            state = {
                ...state,
                totalquestion: action.payload.totalQuestion,
                questionBank: action.payload.questionBank
            }
            break;

    }
    return state;
};

export default questionReducer;
