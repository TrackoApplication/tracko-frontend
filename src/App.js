import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import ProjectList from "./components/ProjectMgt/ProjectList";
import ClientList from "./components/ClientMgt/ClientList";
import Team from "./components/TeamMgt/Team";
// import Backlog from "./components/BacklogMgt/BacklogControl/Backlog";
import ActiveSprint from "./components/ActiveSprintMgt/ActiveSprint";
import People from "./components/PeopleMgt/People";
import Forum from "./components/ForumMgt/Forum";
import Report from "./components/ReportMgt/Report";
import Group from "./components/GroupMgt/Group";
import GroupDetail from "./components/GroupMgt/GroupDetail";
import BacklogView from "./components/BacklogMgt/BacklogControl/BacklogView";
import SprintList from "./components/BacklogMgt/Sprint/SprintList";
import { SET_ISSUES } from "./reducers/issuesReducer";
import { useDispatch } from "react-redux";
// import IssueList from "./components/BacklogMgt/Issue/IssueList";
import IssueService from "./Services/IssueService";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const dispatch = useDispatch();

  // fetching the data from the backend
  useEffect(() => {
    (async () => {
      try {
        const response = await IssueService.getIssues();
        dispatch({
          type: SET_ISSUES,
          payload: response.data,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <DragDropContext>
        <BrowserRouter>
          <Routes>
            {/* pages without sidebar & nav bar */}
            <Route path="/SprintList" element={<SprintList />} />
            {/* <Route path="/IssueList" element={<IssueList />} /> */}

            {/* pages with sidebar */}
            <Route path="/Team" element={<Team />} />
            {/* <Route path="/Backlog" element={<Backlog />} /> */}
            <Route path="/ActiveSprint" element={<ActiveSprint />} />
            <Route path="/People" element={<People />} />
            <Route path="/Forum" element={<Forum />} />
            <Route path="/Report" element={<Report />} />
            <Route path="/GroupDetail" element={<GroupDetail />} />
            {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
            <Route path="/Group" element={<Group />} />
            {/* <Route path="/Dashboard" element ={<DashLayout/>}/> */}

            {/* pages with sidebar */}
            <Route path="/Team" element={<Team />} />
            {/* <Route path="/Backlog" element ={<Backlog/>}/> */}
            <Route path="/BacklogView" element={<BacklogView />} />
            <Route path="/ActiveSprint" element={<ActiveSprint />} />
            <Route path="/People" element={<People />} />
            <Route path="/Forum" element={<Forum />} />
            <Route path="/Report" element={<Report />} />

            {/* <Route path="/Dashboard" element ={<Dashboard/>}/> */}
            <Route path="/Group" element={<Group />} />
            {/* <Route path="/Dashboard" element ={<DashLayout/>}/> */}

            {/* pages with navbar */}
            <Route path="/ProjectList" element={<ProjectList />} />
            <Route path="/ClientList" element={<ClientList />} />
            {/* <Route path="/Popup" element={<Popup />} /> */}
          </Routes>
        </BrowserRouter>
      </DragDropContext>
    </>
  );
}

export default App;

function withNavbar(Component) {
  return function WrappedComponent(props) {
    return (
      <>
        <Navbar />
        <div className="page-body">
          <Component {...props} />
        </div>
      </>
    );
  };
}
