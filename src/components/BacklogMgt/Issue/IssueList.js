import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
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
  // const sprintState = useSelector((state) => state.sprints);

  // deleting the issues based on issueId
  const deleteIssue = (issueId) => {
    IssueService.deleteIssue(issueId).then((res) => {
      if (issueState.issues.length > 0) {
        setShowSuccess(true);
        dispatch({
          type: SET_ISSUES,
          payload: issueState.issues.filter(
            (Issue) => Issue.issueId !== issueId
          ),
        });
      }
    });
  };

  // Function to sort issues based on priority
  const sortIssuesByPriority = (issues) => {
    const prioritiesOrder = { High: 1, Medium: 2, Low: 3 };
    return issues.sort(
      (a, b) => prioritiesOrder[a.priority] - prioritiesOrder[b.priority]
    );
  };

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
        {/* mapping issues into the backlog table */}
        {!loading && (
          <tbody>
            {sortIssuesByPriority(issueState.issues)
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
                  projectName={issue.projectName}
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

// import React, { useState, useEffect } from "react";
// import Table from "react-bootstrap/Table";
// import { useDispatch, useSelector } from "react-redux";
// import Issue from "./Issue";
// import IssueService from "../../../Services/IssueService";
// import SuccessfulIssueDeletion from "./SuccessfulIssueDeletion.js";
// import { SET_ISSUES } from "../../../reducers/issuesReducer";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import "./IssueList.css";

// function IssueList(props) {
//   const search = props.search;
//   // const [showConfirm, setShowConfirm] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const issueState = useSelector((state) => state.issues);
//   const dispatch = useDispatch();

//   // deleting the issues based on issueId
//   const deleteIssue = (issueId) => {
//     IssueService.deleteIssue(issueId).then((res) => {
//       if (issueState.issues.length > 0) {
//         setShowSuccess(true);
//         dispatch({
//           type: SET_ISSUES,
//           payload: issueState.issues.filter(
//             (issue) => issue.issueId !== issueId
//           ),
//         });
//       }
//     });
//   };

//   const StrictModeDroppable = ({ children, ...props }) => {
//     const [enabled, setEnabled] = useState(false);

//     useEffect(() => {
//       const animation = requestAnimationFrame(() => setEnabled(true));

//       return () => {
//         cancelAnimationFrame(animation);
//         setEnabled(false);
//       };
//     }, []);

//     if (!enabled) {
//       return null;
//     }

//     return <Droppable {...props}>{children}</Droppable>;
//   };

//   const handleDragEnd = (result) => {
//     if (!result.destination) {
//       return;
//     }

//     const { source, destination } = result;
//     const issues = Array.from(issueState.issues);
//     const [removed] = issues.splice(source.index, 1);
//     issues.splice(destination.index, 0, removed);

//     dispatch({
//       type: SET_ISSUES,
//       payload: issues,
//     });
//   };

//   // Function to sort issues based on priority
//   const sortIssuesByPriority = (issues) => {
//     const prioritiesOrder = { High: 1, Medium: 2, Low: 3 };
//     return issues.sort(
//       (a, b) => prioritiesOrder[a.priority] - prioritiesOrder[b.priority]
//     );
//   };

//   return (
//     <>
//       <Table striped borderless hover size="sm" className="issue-table">
//         <DragDropContext onDragEnd={handleDragEnd}>
//           <StrictModeDroppable droppableId="issue-list">
//             {(provided) => (
//               <tbody
//                 ref={provided.innerRef}
//                 {...provided.droppableProps}
//                 className="table-body"
//               >
//                 {sortIssuesByPriority(issueState.issues)
//                   .filter((issue) => {
//                     return (
//                       search.toLowerCase() === "" ||
//                       issue.summary.toLowerCase().includes(search.toLowerCase())
//                     );
//                   })
//                   .map((issue, index) => (
//                     <Draggable
//                       key={issue.issueId.toString()}
//                       draggableId={issue.issueId.toString()}
//                       index={index}
//                     >
//                       {(provided) => (
//                         <tr
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                           key={issue.issueId}
//                         >
//                           <Issue
//                             Issue={issue}
//                             deleteIssue={deleteIssue}
//                             key={issue.issueId}
//                           />
//                         </tr>
//                       )}
//                     </Draggable>
//                   ))}
//                 {provided.placeholder}
//               </tbody>
//             )}
//           </StrictModeDroppable>
//         </DragDropContext>
//       </Table>

//       <SuccessfulIssueDeletion
//         onHide={() => setShowSuccess(false)}
//         show={showSuccess}
//         message="Issue Deleted Successfully"
//       />
//     </>
//   );
// }

// export default IssueList;
