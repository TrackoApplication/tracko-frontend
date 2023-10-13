import React, { useState } from "react";
import Addissue from "../Issue/Addissue";
import SprintCreation from "./CreateSprint";
import IssueList from "../Issue/IssueList";
import "./DefaultBacklog.css";
import SprintBacklogSection from "./SprintBacklogSection";
import { useSelector } from "react-redux";
import { Form, InputGroup } from "react-bootstrap";
import { MDBBadge } from "mdb-react-ui-kit";

const DefaultBacklogSection = () => {
  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState("");
  const [inactive] = useState(true);
  const issueState = useSelector((state) => state.issues);
  const sprintState = useSelector((state) => state.sprints);

  // Calculate the count of issues based on their status
  const todoCount = issueState.issues.filter(
    (issue) => issue.status === "TODO"
  ).length;
  const inProgressCount = issueState.issues.filter(
    (issue) => issue.status === "IN-PROGRESS"
  ).length;
  const doneCount = issueState.issues.filter(
    (issue) => issue.status === "DONE"
  ).length;
  const totalIssueCount = todoCount + inProgressCount + doneCount;

  return (
    <div className="BacklogMain">
      <div className="breadcrumb">
        <h3>Projects/Return 0</h3>
      </div>
      <div className="flex">
        <div className={`container ${inactive ? "inactive" : ""}`}>
          <h1 className="bckh1">Backlog</h1>
        </div>

        <Form className="m-4 p-2">
          <div className="flex">
            <InputGroup size-sm className="my-2 mx-2">
              <Form.Control
                type="search"
                placeholder="Search Issue"
                className="rounded"
                value={search}
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
          </div>
        </Form>
      </div>

      <div className="defBack">
        {/* Backlog */}
        <div className="backlog-container">
          <div>
            <h2 className="bck">
              Backlog <span>(Total Issues: {totalIssueCount})</span>
            </h2>
          </div>
          <div className="badge-container">
            <MDBBadge
              color="secondary"
              pill
              style={{ height: "20px", width: "24px", fontSize: "12px" }}
            >
              {todoCount}
            </MDBBadge>
            <MDBBadge
              color="primary"
              pill
              style={{ height: "20px", width: "24px", fontSize: "12px" }}
            >
              {inProgressCount}
            </MDBBadge>
            <MDBBadge
              color="success"
              pill
              style={{ height: "20px", width: "24px", fontSize: "12px" }}
            >
              {doneCount}
            </MDBBadge>
          </div>
          <div className="sprcreate">
            <SprintCreation />
          </div>
        </div>

        {/* Issue list */}
        <div className="isslist">
          <IssueList search={search} />
        </div>

        {/* Issue creation button */}
        <div className="addissue">
          <Addissue />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="mt-4 mb-0">
          {/* Add a breadcrumb here */}
          {/* <h2>Sprint Backlog</h2> */}
        </div>
        <Form className="m-2 mb-0">
          <div className="flex">
            <InputGroup size-sm className="my-2 mx-2">
              <Form.Control
                type="search"
                placeholder="Search sprint"
                className="rounded"
                value={search1}
                aria-label="Search"
                onChange={(e) => setSearch1(e.target.value)}
              />
            </InputGroup>
          </div>
        </Form>
      </div>

      {/* Sprint backlog sections */}
      <div className="sprint-backlog-sections">
        {sprintState.sprints
          .sort((item) => item.sprintId)
          .reverse(true)
          .filter((sprint) => {
            return (
              search1.toLowerCase() === "" ||
              sprint.sprintName.toLowerCase().includes(search1.toLowerCase())
            );
          })
          .map((sprint) => {
            return <SprintBacklogSection sprint={sprint} />;
          })}
      </div>
    </div>
  );
};

export default DefaultBacklogSection;
