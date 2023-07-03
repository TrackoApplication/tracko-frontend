import React, { useState, useEffect } from "react";
import Addissue from "../Issue/Addissue";
import SprintCreation from "./CreateSprint";
import IssueList from "../Issue/IssueList";
import "./DefaultBacklog.css";
import { MDBBadge } from "mdb-react-ui-kit";
import SprintBacklogSection from "./SprintBacklogSection";
import { useSelector } from "react-redux";
import { Form, InputGroup, Button } from "react-bootstrap";

const DefaultBacklogSection = () => {
  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState("");
  const [inactive, setInactive] = useState(true);
  const sprintState = useSelector((state) => state.sprints);
  window.sprints = sprintState;

  // const handleFilterChange = (e) => {
  //   setFilter (e.target.value);
  // };

  // useEffect(() => {
  //   setFilteredIssues(
  //     issues.filter((issue) => {
  //       return issue.title.toLowerCase().includes(filter.toLowerCase());
  //     })
  //   );
  // }, [filter, issues]);

  // deleting the sprints based on sprintId
  // const deleteSprint = (sprintId) => {
  //   SprintService.deleteSprint(sprintId).then((res) => {
  //     if (sprintState.sprints) {
  //       setsprints((prevElement) => {
  //         setShowSuccess(true);
  //         return prevElement.filter((Sprint) => Sprint.sprintId !== sprintId);
  //       });
  //     }
  //   });
  // };

  return (
    <div className="BacklogMain">
      <div className="flex">
        <div className={`container ${inactive ? "inactive" : ""}`}>
          {/* Add a breadcrumb here */}
          <h1>Return0</h1>
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

          {/* <Button variant="outline-success " className='text-white  outline-slate-100 bg-[rgb(194, 194, 194)]'>Search</Button> */}
        </Form>
      </div>

      <div className="defBack">
        <div className={`container ${inactive ? "inactive" : ""}`}>
          {/* <h2 className="bck">Backlog</h2> */}
        </div>

        {/* <hr></hr> */}

        {/* Backlog */}
        <div className="backlog-container">
          <div className="badge-container">
            {/* <MDBBadge
              color="secondary"
              pill
              style={{ height: "20px", width: "24px", fontSize: "12px" }}
            >
              0
            </MDBBadge>
            <MDBBadge
              color="primary"
              pill
              style={{ height: "20px", width: "24px", fontSize: "12px" }}
            >
              0
            </MDBBadge>
            <MDBBadge
              color="success"
              pill
              style={{ height: "20px", width: "24px", fontSize: "12px" }}
            >
              0
            </MDBBadge> */}
          </div>

          <SprintCreation />
        </div>
        {/* <hr></hr> */}
        {/* Issue list */}
        <div className={`container ${inactive ? "inactive" : ""}`}>
          <IssueList search={search} />
        </div>
        {/* <hr></hr> */}
        {/* Issue creation button */}
        <div>
        <Addissue />
        </div>
        {/* <hr></hr> */}
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

          {/* <Button variant="outline-success " className='text-white  outline-slate-100 bg-[rgb(194, 194, 194)]'>Search</Button> */}
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
            return <SprintBacklogSection sprint={sprint}   />;
          })}
      </div>
    </div>
  );
};

export default DefaultBacklogSection;
