import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./SprintIssueList.css";
import SprintIssueService from "../../../Services/SprintIssueService";
import SprintIssue from "./SprintIssue";
import SuccessfulIssueDeletion from "./SuccessfulIssueDeletion";
import { useSelector } from "react-redux";

function SprintIssueList({sprintId}) {
  const [loading, setloading] = useState(true);
  const [sprintissues, setsprintissues] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const sprintState = useSelector((state) => state.sprints);
  const issueState = useSelector((state) => state.issues);
  window.issues = issueState;

  // fetching the data from the backend
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await SprintIssueService.getSprintIssues();
        setsprintissues(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, []);

  // deleting the issues based on issueId
  const deleteSprintIssue = (sprintIssueId) => {
    SprintIssueService.deleteSprintIssue(sprintIssueId).then((res) => {
      if (sprintissues) {
        setsprintissues((prevElement) => {
          setShowSuccess(true);
          return prevElement.filter(
            (SprintIssue) => SprintIssue.sprintIssueId !== sprintIssueId
          );
        });
      }
    });
  };

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Table striped borderless hover size="sm">
        <thead>
          <th>Sprint Issue Id</th>
          <th>Summary</th>
          <th>Epic Name</th>
          <th>Status</th>
          <th>Assignee</th>
          <th>Actions</th>
        </thead>

        {/* mapping issues into the backlog table */}
        {!loading && (
          <tbody>
            {issueState.issues.filter(issue => issue.sprintId == sprintId).map((sprintissues) => (
              <SprintIssue
                SprintIssue={sprintissues}
                deleteSprintIssue={deleteSprintIssue}
                key={sprintissues.sprintIssueId}
              ></SprintIssue>
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

export default SprintIssueList;
