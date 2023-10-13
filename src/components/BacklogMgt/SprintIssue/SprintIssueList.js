import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import SprintIssueService from "../../../Services/SprintIssueService";
import SprintIssue from "./SprintIssue";
import SuccessfulIssueDeletion from "./SuccessfulIssueDeletion";
import { useSelector } from "react-redux";

function SprintIssueList({ sprintId }) {
  const [loading, setloading] = useState(true);
  const [sprintissues, setsprintissues] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  // const sprintState = useSelector((state) => state.sprints);
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

  // Function to sort issues based on priority
  const sortIssuesByPriority = (issues) => {
    const prioritiesOrder = { High: 1, Medium: 2, Low: 3 };
    return issues.sort(
      (a, b) => prioritiesOrder[a.priority] - prioritiesOrder[b.priority]
    );
  };

  // deleting the issues based on issueId from the sprint
  const deleteIssue = (issueId) => {
    SprintIssueService.deleteIssue(issueId).then((res) => {
      // If deletion from the backend is successful, update the local state
      if (res.success) {
        setShowSuccess(true);
        // Filter out the deleted issue from the local state
        setsprintissues(
          sprintissues.filter((issue) => issue.issueId !== issueId)
        );
      }
    });
  };

  return (
    <>
      <Table striped borderless hover size="sm" className="issue-table">
        {/* mapping issues into the backlog table */}
        {!loading && (
          <tbody>
            {sortIssuesByPriority(issueState.issues)
              .filter((issue) => issue.sprintId === sprintId)
              .map((sprintissues) => (
                <SprintIssue
                  key={sprintissues.issueId}
                  SprintIssue={sprintissues}
                  deleteIssue={deleteIssue}
                  projectName={sprintissues.projectName}
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

// deleteSprintIssue={deleteSprintIssue}
// key={sprintissues.sprintIssueId}

// const deleteSprintIssue = (sprintIssueId) => {
//   SprintIssueService.deleteSprintIssue(sprintIssueId).then((res) => {
//     if (sprintissues) {
//       setsprintissues((prevElement) => {
//         setShowSuccess(true);
//         return prevElement.filter(
//           (SprintIssue) => SprintIssue.sprintIssueId !== sprintIssueId
//         );
//       });
//     }
//   });
// };

// import React, { useState, useEffect } from "react";
// import Table from "react-bootstrap/Table";
// import SprintIssueService from "../../../Services/SprintIssueService";
// import IssueService from "../../../Services/IssueService";
// import SprintIssue from "./SprintIssue";
// import SuccessfulIssueDeletion from "./SuccessfulIssueDeletion";
// import { useDispatch, useSelector } from "react-redux";
// import "./SprintIssueList.css";
// import { SET_ISSUES } from "../../../reducers/issuesReducer";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// function SprintIssueList({sprints, sprintId}) {
//   const [loading, setloading] = useState(true);
//   const [sprintissues, setsprintissues] = useState(null);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const sprintState = useSelector((state) => state.sprints);
//   const issueState = useSelector((state) => state.issues);
//   const dispatch = useDispatch();
//   window.issues = issueState;

//   // fetching the data from the backend
//   useEffect(() => {
//     const fetchData = async () => {
//       setloading(true);
//       try {
//         const response = await SprintIssueService.getSprintIssues();
//         setsprintissues(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//       setloading(false);
//     };
//     fetchData();
//   }, []);

//   // deleting the issues based on issueId
//   const deleteSprintIssue = (sprintIssueId) => {
//     SprintIssueService.deleteSprintIssue(sprintIssueId).then((res) => {
//       if (sprintissues) {
//         setsprintissues((prevElement) => {
//           setShowSuccess(true);
//           return prevElement.filter(
//             (SprintIssue) => SprintIssue.sprintIssueId !== sprintIssueId
//           );
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

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Table striped borderless hover size="sm" className="issue-table">
//         <thead>
//           <th>Issue Id</th>
//           <th>Summary</th>
//           <th>Epic Name</th>
//           <th>Status</th>
//           <th>Assignee</th>
//           <th>Actions</th>
//         </thead>

//         <DragDropContext onDragEnd={handleDragEnd}>
//           <StrictModeDroppable droppableId = {sprintId.toString()} >
//             {(provided) => (
//               <tbody
//                 ref={provided.innerRef}
//                 {...provided.droppableProps}
//                 className="table-body"
//               >
//                 {issueState.issues
//                   .map((sprintissue, index) => (
//                     <Draggable
//                       key={sprintissue.issueId.toString()}
//                       draggableId={sprintissue.issueId.toString()}
//                       index={index}
//                     >
//                       {(provided) => (
//                         <tr
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                           key={sprintissue.issueId}
//                         >
//                           <SprintIssue
//                             SprintIssue={sprintissue}
//                             // deleteIssue={deleteIssue}
//                             key={sprintissue.issueId}
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

//       {/* displaying the success message of deleting */}
//       <SuccessfulIssueDeletion
//         onHide={() => setShowSuccess(false)}
//         show={showSuccess}
//         message="Issue Deleted Successfully"
//       />
//     </>
//   )
// }

// export default SprintIssueList;
