
const questionsReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case "POST_QUESTOIN":
            return { ...state }
        case "FETCH_ALL_QUESTIONS":
            return { ...state, data: action.payload }
        case "POST_ANSWER":
            return { ...state}
        default:
            return state;
    }
}

export default questionsReducer;