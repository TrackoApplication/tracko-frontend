import { configureStore } from '@reduxjs/toolkit';
import issuesReducer from './issuesReducer';
import sprintReducer from './sprintReducer';
import authReducer from './authReducer';


const store = configureStore({
  reducer: {
    issues: issuesReducer,
    sprints: sprintReducer,
    auth: authReducer, 
  },
});

export default store;
