export const SET_SPRINTS = "SET_SPRINTS";
export const SET_TEMP_SPRINT = "SET_TEMP_SPRINT";
export const CREATE_TEMP_SPRINT = "CREATE_TEMP_SPRINT";
export const UPDATE_TEMP_SPRINT_ID = "UPDATE_TEMP_SPRINT_ID";


const initialState = {
    sprints: [],
    tempSprints: [],
}

const sprintReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SPRINTS:
            return {
                ...state,
                sprints: action.payload
            }
        case CREATE_TEMP_SPRINT:
            return {
                ...state,
                tempSprints: [...state.tempSprints, action.payload]
            }
        case SET_TEMP_SPRINT:
            return {
                ...state,
                tempSprints: action.payload
            }
        case UPDATE_TEMP_SPRINT_ID:
            return {
                ...state,
                tempSprintLastId: state.tempSprintLastId + 1
            }
        default:
            return state
    }
}

export default sprintReducer;

