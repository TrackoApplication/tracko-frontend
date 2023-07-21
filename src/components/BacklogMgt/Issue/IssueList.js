// import React, { useState, useEffect } from "react";
// import Table from "react-bootstrap/Table";
// import { useDispatch, useSelector } from "react-redux";
// import "./IssueList.css";
// import IssueService from "../../../Services/IssueService";
// import Issue from "./Issue";
// import SuccessfulIssueDeletion from "./SuccessfulIssueDeletion.js";
// import { SET_ISSUES } from "../../../reducers/issuesReducer";

// function IssueList(props) {
//   const search = props.search;
//   const [loading, setloading] = useState(false);
//   const [issues, setissues] = useState(null);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const dispatch = useDispatch();
//   const issueState = useSelector((state) => state.issues);
//   // const sprintState = useSelector((state) => state.sprints);

//   // fetching the data from the backend
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     setloading(true);
//   //     try {
//   //       const response = await IssueService.getIssues();
//   //       dispatch({
//   //         type: SET_ISSUES,
//   //         payload: response.data,
//   //       });
//   //       setissues(response.data);
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //     setloading(false);
//   //   };
//   //   fetchData();
//   // }, []);

//   // deleting the issues based on issueId
//   const deleteIssue = (issueId) => {
//     IssueService.deleteIssue(issueId).then((res) => {
//       if (issueState.issues.length > 0) {
//         // setissues((prevElement) => {
//         setShowSuccess(true);
//         dispatch({
//           type: SET_ISSUES,
//           payload: issueState.issues.filter(
//             (Issue) => Issue.issueId !== issueId
//           ),
//         });
//         // return prevElement.filter((Issue) => Issue.issueId !== issueId);
//         // });
//       }
//     });
//   };

//   return (
//     <>
//       <Table striped borderless hover size="sm" className="issue-table">
//         <thead>
//           <tr>
//             <th>Issue Id</th>
//             <th>Summary</th>
//             <th>Epic Name</th>
//             <th>Status</th>
//             <th>Assignee</th>
//             <th>Sprint</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         {/* mapping issues into the backlog table */}
//         {!loading && (
//           <tbody>
//             {issueState.issues
//               .filter((issue) => {
//                 return (
//                   search.toLowerCase() === "" ||
//                   issue.summary.toLowerCase().includes(search.toLowerCase())
//                 );
//               })
//               .map((issue) => (
//                 <Issue
//                   Issue={issue}
//                   deleteIssue={deleteIssue}
//                   key={issue.issueId}
//                 ></Issue>
//               ))}
//           </tbody>
//         )}
//       </Table>

//       {/* displaying the success message of deleting */}
//       <SuccessfulIssueDeletion
//         onHide={() => setShowSuccess(false)}
//         show={showSuccess}
//         message="Issue Deleted Successfully"
//       />
//     </>
//   );
// }

// export default IssueList;

import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import Issue from "./Issue";
import "./IssueList.css";
import IssueService from "../../../Services/IssueService";
// import StatusService from "../../../Services/StateService";
import IssueDeleteConfirmation from "./IssueDeleteConfirmation";
import SuccessfulIssueDeletion from "./SuccessfulIssueDeletion.js";
import { SET_ISSUES } from "../../../reducers/issuesReducer";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import SprintIssueList from "../SprintIssue/SprintIssueList";
// import AssigneeIcon from "./AssigneeIcon";

function IssueList(props) {
  const search = props.search;
  // const [loading, setloading] = useState(false);
  // const [states, setStates] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const issueState = useSelector((state) => state.issues);
  // const sprintState = useSelector((state) => state.sprints);
  const dispatch = useDispatch();

  // deleting the issues based on issueId
  const deleteIssue = (issueId) => {
    IssueService.deleteIssue(issueId).then((res) => {
      if (issueState.issues.length > 0) {
        setShowSuccess(true);
        dispatch({
          type: SET_ISSUES,
          payload: issueState.issues.filter(
            (issue) => issue.issueId !== issueId
          ),
        });
      }
    });
  };

  // const onStatusChange = async (e, issue) => {
  //   e.preventDefault();
  //   const selectedStatus = e.target.value;

  //   debugger;
  //   try {
  //     const response = await IssueService.updateIssue(issue.issueId, {
  //       ...issue,
  //       status: selectedStatus,
  //     });

  //     dispatch({
  //       type: SET_ISSUES,
  //       payload: response.data,
  //       window: window.location.reload(),
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const StrictModeDroppable = ({ children, ...props }) => {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
      const animation = requestAnimationFrame(() => setEnabled(true));

      return () => {
        cancelAnimationFrame(animation);
        setEnabled(false);
      };
    }, []);

    if (!enabled) {
      return null;
    }

    return <Droppable {...props}>{children}</Droppable>;
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;
    const issues = Array.from(issueState.issues);
    const [removed] = issues.splice(source.index, 1);
    issues.splice(destination.index, 0, removed);

    dispatch({
      type: SET_ISSUES,
      payload: issues,
    });
  };

  // //Retrieving states from the backend
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setloading(true);
  //     try {
  //       const response = await StatusService.getStatus();
  //       setStates(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setloading(false);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <Table striped borderless hover size="sm" className="issue-table">
        {/* <thead>
          <tr>
            <th>Issue Id</th>
            <th>Summary</th>
            <th>Epic Name</th>
            <th>Status</th>
            <th>Assignee</th>
            <th>Sprint</th>
            <th>Actions</th>
          </tr>
        </thead> */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <StrictModeDroppable droppableId = "issue-list" >
            {(provided) => (
              <tbody
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="table-body"
              >
                {issueState.issues
                  .filter((issue) => {
                    return (
                      search.toLowerCase() === "" ||
                      issue.summary.toLowerCase().includes(search.toLowerCase())
                    );
                  })
                  .map((issue, index) => (
                    <Draggable
                      key={issue.issueId.toString()}
                      draggableId={issue.issueId.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <tr
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          key={issue.issueId}
                        >
                          <Issue
                            Issue={issue}
                            deleteIssue={deleteIssue}
                            key={issue.issueId}
                          />

                          {/* <td>{issue.issueId}</td>
                          <td>{issue.summary}</td>
                          <td>{issue.epicName}</td>
                          <td>
                            <select
                              name="status"
                              id="status"
                              // onChange={onStatusChange}
                              onChange={(e) => onStatusChange(e, issue)}
                              value={issue.status}
                            >
                              <option
                                value=""
                                defaultValue={"--Status--"}
                                disabled
                              >
                                --Status--
                              </option>

                              {!loading && (
                                <>
                                  {states.map((state) => (
                                    <option
                                      key={state.stateId}
                                      value={state.staus}
                                    >
                                      {state.status}
                                    </option>
                                  ))}
                                </>
                              )}
                            </select>
                          </td>
                          <td>
                            <AssigneeIcon assignee={issue.assignee} />
                          </td>

                          <td>
                            <select
                              name="sprint"
                              id="sprint"
                              // onChange={onSprintChange}
                              style={{ color: "black", fontSize: "10px" }}
                              value={issue.sprintId}
                            >
                              <option value="null" style={{ color: "blue" }}>
                                Select Sprint
                              </option>
                              {sprintState.sprints.map((item, index) => (
                                <option
                                  value={item.sprintId}
                                  style={{ color: "blue" }}
                                >
                                  {item.sprintName || "Untitled Sprint"}
                                </option>
                              ))}
                            </select>
                          </td> */}

                          {/* <td> */}
                            {/* redirecting to the Issue deletion confirmation */}
                            {/* <i
                              class="bi bi-trash-fill"
                              // onClick={(e,issueId) => deleteIssue(e, Issue.issueId)}
                              onClick={() => setShowConfirm(true)}
                            ></i>
                          </td> */}
                        </tr>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </tbody>
            )}
          </StrictModeDroppable>
        </DragDropContext>
      </Table>

      {/* posting a confirmation of deletion */}
      {/* <IssueDeleteConfirmation
        show={showConfirm}
        deleteIssue={deleteIssue}
        onHide={() => setShowConfirm(false)}
        issueId={Issue.issueId}
      /> */}

      <SuccessfulIssueDeletion
        onHide={() => setShowSuccess(false)}
        show={showSuccess}
        message="Issue Deleted Successfully"
      />
    </>
  );
}

export default IssueList;

