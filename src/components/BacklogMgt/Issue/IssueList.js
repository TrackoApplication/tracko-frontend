import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./IssueList.css";
import IssueService from "../../../Services/IssueService";
import Issue from "./Issue";
import SuccessfulIssueDeletion from "./SuccessfulIssueDeletion.js";

function IssueList() {
  const [loading, setloading] = useState(true);
  const [issues, setissues] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await IssueService.getIssues();
        setissues(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, []);

  const deleteIssue = (issueId) => {
    debugger;
    IssueService.deleteIssue(issueId).then((res) => {
      debugger;
      if (issues) {
        setissues((prevElement) => {
          setShowSuccess(true);
          return prevElement.filter((Issue) => Issue.issueId !== issueId);
        });
      }
    });
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Table striped borderless hover size="sm">
      <thead>
        <th>Issue Id</th>
        <th>Summary</th>
        <th>Epic Name</th>
        <th>Status</th>
        <th>Assignee</th>
        <th>Actions</th>
      </thead>

      {!loading && (
        <tbody>
          {issues.map((issues) => (
            <Issue
            Issue={issues}
            deleteIssue={deleteIssue}
            key={issues.issueId}
          ></Issue>
          ))}
        </tbody>
      )}
    </Table>

    <SuccessfulIssueDeletion
    onHide={() => setShowSuccess(false)}
    show={showSuccess}
    message="Issue Deleted Successfully"
    />
  </>
  );
}

export default IssueList;
