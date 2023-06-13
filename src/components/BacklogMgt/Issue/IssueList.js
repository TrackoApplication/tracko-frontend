import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./IssueList.css";
import IssueService from "../../../Services/IssueService";
import Issue from "./Issue";
import SuccessfulIssueDeletion from "./SuccessfulIssueDeletion.js";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function IssueList() {
  const [loading, setloading] = useState(true);
  const [issues, setissues] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // fetching the data from the backend
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

  // deleting the issues based on issueId
  const deleteIssue = (issueId) => {
    IssueService.deleteIssue(issueId).then((res) => {
      if (issues) {
        setissues((prevElement) => {
          setShowSuccess(true);
          return prevElement.filter((Issue) => Issue.issueId !== issueId);
        });
      }
    });
  };

  // const handleDragEnd = (result) => {
  //   if (!result.destination) return; // Return if the item is dropped outside a valid droppable area

  //   const updatedIssues = Array.from(issues);
  //   const [reorderedIssue] = updatedIssues.splice(result.source.index, 1);
  //   updatedIssues.splice(result.destination.index, 0, reorderedIssue);

  //   setissues(updatedIssues);
  // };

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Table striped borderless hover size="sm">
        <thead>
          <tr>
            <th>Issue Id</th>
            <th>Summary</th>
            <th>Epic Name</th>
            <th>Status</th>
            <th>Assignee</th>
            <th>Actions</th>
          </tr>
        </thead>

        {/* mapping issues into the backlog table */}
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



// {/* <DragDropContext onDragEnd={handleDragEnd}>
//           <Droppable droppableId="issueList">
//             {(provided) => (
//               <tbody {...provided.droppableProps} ref={provided.innerRef}>
//                 {/* Mapping issues into the backlog table */}
//         //         {!loading &&
//         //           issues.map((issue, index) => (
//         //             <Draggable
//         //               key={issue.issueId}
//         //               draggableId={issue.issueId}
//         //               index={index}
//         //             >
//         //               {(provided) => (
//         //                 <tr
//         //                   ref={provided.innerRef}
//         //                   {...provided.draggableProps}
//         //                   {...provided.dragHandleProps}
//         //                   key={issue.issueId}
//         //                 >
//         //                   <Issue Issue={issue} deleteIssue={deleteIssue} />
//         //                 </tr>
//         //               )}
//         //             </Draggable>
//         //           ))}
//         //         {provided.placeholder}
//         //       </tbody>
//         //     )}
//         //   </Droppable>
//         // </DragDropContext> */}
