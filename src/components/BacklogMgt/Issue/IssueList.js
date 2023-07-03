import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import "./IssueList.css";
import IssueService from "../../../Services/IssueService";
import Issue from "./Issue";
import SuccessfulIssueDeletion from "./SuccessfulIssueDeletion.js";
import { SET_ISSUES } from "../../../reducers/issuesReducer";

function IssueList(props) {
  const search = props.search;
  const [loading, setloading] = useState(false);
  const [issues, setissues] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const dispatch = useDispatch();
  const issueState = useSelector((state) => state.issues);
  const sprintState = useSelector((state) => state.sprints);

  // fetching the data from the backend
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setloading(true);
  //     try {
  //       const response = await IssueService.getIssues();
  //       dispatch({
  //         type: SET_ISSUES,
  //         payload: response.data,
  //       });
  //       setissues(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setloading(false);
  //   };
  //   fetchData();
  // }, []);

  // deleting the issues based on issueId
  const deleteIssue = (issueId) => {
    IssueService.deleteIssue(issueId).then((res) => {
      if (issueState.issues.length > 0) {
        // setissues((prevElement) => {
        setShowSuccess(true);
        dispatch({
          type: SET_ISSUES,
          payload: issueState.issues.filter((Issue) => Issue.issueId !== issueId),
        });
        // return prevElement.filter((Issue) => Issue.issueId !== issueId);
        // });
      }
    });
  };

  return (
    <>
      <Table striped borderless hover size="sm" className="issue-table">
        {/* <thead>
            <th>Issue Id</th>
            <th>Summary</th>
            <th>Epic Name</th>
            <th>Status</th>
            <th>Assignee</th>
            <th>Sprint</th>
            <th>Actions</th>
        </thead> */}
        {/* mapping issues into the backlog table */}
        {!loading && (
          <tbody>
            {issueState.issues
              .filter((issue) => {
                return (
                  search.toLowerCase() === "" ||
                  issue.summary.toLowerCase().includes(search.toLowerCase())
                );
              })
              .map((issue) => (
                <Issue
                  Issue={issue}
                  deleteIssue={deleteIssue}
                  key={issue.issueId}
                ></Issue>
              ))}
          </tbody>
        )}
      </Table>

      {/* displaying the success message of deleting */}
      <SuccessfulIssueDeletion
        onHide={() => setShowSuccess(false)}
        show={showSuccess}
        message="Issue Deleted Successfully"
      />
    </>
  );
}

export default IssueList;
