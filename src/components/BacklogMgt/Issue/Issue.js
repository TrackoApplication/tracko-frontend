import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import IssueDeleteConfirmation from "./IssueDeleteConfirmation";
import IssueService from "../../../Services/IssueService";
import { SET_ISSUES } from "../../../reducers/issuesReducer";
import AssigneeIcon from "./AssigneeIcon";
import StatusService from "../../../Services/StateService";
import SprintService from "../../../Services/SprintService";
// import "./Issue.css";

const Issue = ({ Issue, deleteIssue, key }) => {
  const [loading, setloading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  // const [show, setShow] = useState(false);
  const [states, setStates] = useState([]);
  const [sprints, setSprints] = useState([]);
  // const sprintState = useSelector((state) => state.sprints);
  const dispatch = useDispatch();

  const onStatusChange = async (e) => {
    e.preventDefault();
    const selectedStatus = e.target.value;

    try {
      const response = await IssueService.updateIssue(Issue.issueId, {
        ...Issue,
        status: selectedStatus,
      });

      dispatch({
        type: SET_ISSUES,
        payload: response.data,
        window: window.location.reload(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSprintChange = async (e) => {
    e.preventDefault();
    const selectedSprintId = e.target.value;

    try {
      const response = await IssueService.updateIssueSprint(Issue.issueId, {
        ...Issue,
        sprintId: selectedSprintId,
      });
      dispatch({
        type: SET_ISSUES,
        payload: response.data,
        window: window.location.reload(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Retrieving states from the backend
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await StatusService.getStatus();
        setStates(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, []);

  //Retrieving sprints from the backend
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await SprintService.getSprints();
        setSprints(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <tr>
        <td>{Issue.issueId}</td>
        <td>{Issue.summary}</td>
        <td>{Issue.epicName}</td>
        <td>
          <select
            name="status"
            id="status"
            onChange={onStatusChange}
            value={Issue.status}
          >
            <option value="" defaultValue={"--Status--"} disabled>
              --Status--
            </option>

            {!loading && (
              <>
                {states.map((state) => (
                  <option key={state.stateId} value={state.staus}>
                    {state.status}
                  </option>
                ))}
              </>
            )}
          </select>
        </td>
        <td>
          <AssigneeIcon assignee={Issue.assignee} />
        </td>

        <td>
          <select
            name="sprint" //i need to call this function here
            id="sprint"
            style={{ color: "black", fontSize: "10px" }}
            onChange={onSprintChange}
            value={Issue.sprintId}
          >
            <option
              value=""
              defaultValue={"Select Sprint"}
              style={{ color: "blue" }}
            >
              Select Sprint
            </option>

            {!loading && (
              <>
                {sprints.map((item) => (
                  <option
                    key={item.sprintId}
                    value={item.sprintId}
                    style={{ color: "blue" }}
                  >
                    {item.sprintName || "Untitled Sprint"}
                  </option>
                ))}
              </>
            )}
          </select>
        </td>

        <td>
          {/* redirecting to the Issue deletion confirmation */}
          <i
            class="bi bi-trash-fill"
            // onClick={(e,issueId) => deleteIssue(e, Issue.issueId)}
            onClick={() => setShowConfirm(true)}
          ></i>
        </td>
      </tr>

      {/* posting a confirmation of deletion */}
      <IssueDeleteConfirmation
        show={showConfirm}
        deleteIssue={deleteIssue}
        onHide={() => setShowConfirm(false)}
        issueId={Issue.issueId}
      />
    </>
  );
};

export default Issue;

//   const onSprintChange = (e) => {
//     e.preventDefault();
//     console.log(e.target.value);
//     debugger;
//     dispatch({
//       type: UPDATE_SPRINT_ID,
//       payload: {
//         sprintId: Number(e.target.value),
//         issueId: Issue.issueId,
//       },
//     });
//   };

//where i need to figure out
//   IssueService.updateSprint(Issue.issueId, {...Issue, sprintId: Number(e.target.value), sprintName: e.target.value}).then((res) => {
//     IssueService.getIssues().then((response) => {
//       debugger;
//       dispatch({
//         type: SET_ISSUES,
//         payload: response.data,
//       });
//     });
//   });

// const onSprintChange = (e) => {
//   e.preventDefault();
//   console.log(e.target.value);
//   dispatch({
//     type: UPDATE_SPRINT_ID,
//     payload: {
//       sprintId: Number(e.target.value),
//       issueId: Issue.issueId,
//     },
//   });
// };

// Function to handle sprint change
// const onSprintChange = async (e) => {
//   const selectedSprintId = Number(e.target.value);
//   const selectedSprintName = e.target.options[e.target.selectedIndex].text;

//   try {
//     // Make an API call to update the sprint of the issue
//     const response = await axios.put(
//       `/api/v1/issues/${Issue.issueId}/sprint`,
//       {
//         ...Issue,
//         sprintId: selectedSprintId,
//         sprintName: selectedSprintName,
//       }
//     );

//     // Refresh the list of issues after the sprint is updated
//     const updatedIssues = await axios.get("/api/v1/issues");
//     dispatch({
//       type: SET_ISSUES,
//       payload: updatedIssues.data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// {sprintState.sprints.map((item, index) => (
//   <option value={item.sprintId} style={{ color: "blue" }}>
//     {item.sprintName || "Untitled Sprint"}
//   </option>
// ))}
