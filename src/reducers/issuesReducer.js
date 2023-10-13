export const SET_ISSUES = "SET_ISSUES";
export const UPDATE_SPRINT_ID = "UPDATE_SPRINT_ID";


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
        case UPDATE_SPRINT_ID:
            const {sprintId, issueId} = action.payload;
            const updatedIssues = state.issues.map((issue) => {
                if(issue.issueId === issueId) {
                    return {
                        ...issue,
                        sprintId: sprintId
                    }
                }
                return issue;
            })
            return {
                ...state,
                issues: updatedIssues
            }
        default:
            return state
    }
}

export default issuesReducer;
