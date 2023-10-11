import React, { useState, useEffect } from "react";
import SprintIssueList from "../SprintIssue/SprintIssueList";
import SprintCompletion from "../SprintComplete/CompleteSprint";
import UpdateSprint from "../Sprint/UpdateSprint";
import DeleteConfirmation from "../Sprint/DeleteConfirmation";
import SuccessfulDeletion from "../Sprint/SuccessfulDeletion";
import SprintService from "../../../Services/SprintService";
import { useDispatch } from "react-redux";
import { SET_SPRINTS } from "../../../reducers/sprintReducer";
import { MDBBadge } from "mdb-react-ui-kit";
import "./DefaultBacklog.css";
import { useSelector } from "react-redux";

const SprintBacklogSection = ({ sprint, projectName }) => {
  // const [inactive, setInactive] = useState(false);
  const [loading, setloading] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [sprints, setsprints] = useState(null);
  const issueState = useSelector((state) => state.issues);

  // Filter the issues for the current sprint based on sprintId
  const sprintIssues = issueState.issues.filter(
    (issue) => issue.sprintId === sprint.sprintId
  );

  // Calculate the count of issues based on their status for the current sprint
  const todoCount = sprintIssues.filter(
    (issue) => issue.status === "TODO"
  ).length;
  const inProgressCount = sprintIssues.filter(
    (issue) => issue.status === "IN-PROGRESS"
  ).length;
  const doneCount = sprintIssues.filter(
    (issue) => issue.status === "DONE"
  ).length;
  const totalIssueCount = sprintIssues.length;

  // const projectPrefix = projectName.substring(0, 3);
  // const modifiedSprintId = `${projectPrefix} - ${sprint.sprintId}`;

  // fetching the data from the backend
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await SprintService.getSprints();
        dispatch({
          type: SET_SPRINTS,
          payload: response.data,
        });
        setsprints(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, []);

  // deleting the sprints based on sprintId
  const deleteSprint = (sprintId) => {
    SprintService.deleteSprint(sprintId).then((res) => {
      if (sprints) {
        setsprints((prevElement) => {
          setShowSuccess(true);
          return prevElement.filter((Sprint) => Sprint.sprintId !== sprintId);
        });
      }
    });
  };

  return (
    <div className="defBack">
      {/* Sprint Backlog */}
      <div className="backlog-container">
        <div className="flex">
          <h2 className="bck">
            #{sprint.sprintId} - {sprint.sprintName || "Untitled Sprint"} <span>(Total Issues: {totalIssueCount})</span>
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

        <div>
          <SprintCompletion />
        </div>

        <div className="spract-buttons">
          <i
            class="bi bi-pen"
            // onClick={(e, sprintId) => editSprint(e, sprintId)}
            onClick={() => setShow(true)}
          ></i>
          <i
            class="bi bi-trash-fill"
            // onClick={(e,sprintId) => deleteSprint(e, Sprint.sprintId)}
            onClick={() => setShowConfirm(true)}
          ></i>
        </div>
      </div>

      {/* Sprint Issue list */}
      <div className="sprisslist">
        <SprintIssueList sprintId={sprint.sprintId} />
      </div>

      <DeleteConfirmation
        show={showConfirm}
        deleteSprint={deleteSprint}
        onHide={() => setShowConfirm(false)}
        sprintId={sprint.sprintId}
        sprintName={sprint.sprintName}
      />

      <UpdateSprint
        show={show}
        onHide={() => setShow(false)}
        sprintId={sprint.sprintId}
      />

      <SuccessfulDeletion
        onHide={() => setShowSuccess(false)}
        show={showSuccess}
        message="Sprint Deleted Successfully"
      />
    </div>
  );
};

export default SprintBacklogSection;
