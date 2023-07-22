import { configureStore } from '@reduxjs/toolkit';
import issuesReducer from './issuesReducer';
import sprintReducer from './sprintReducer';


const store = configureStore({
  reducer: {
    issues: issuesReducer,
    sprints: sprintReducer,
  },
});

export default store;

