export const SET_ISSUES = "SET_ISSUES";


const initialState = {
    issues: [],
}

const issuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ISSUES:
            return {
                ...state,
                issues: action.payload
            }
        default:
            return state
    }
}

export default issuesReducer;