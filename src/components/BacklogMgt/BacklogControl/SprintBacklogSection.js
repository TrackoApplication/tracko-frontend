// import React, { useState } from "react";
// import AddSprintIssue from "../SprintIssue/AddSprintIssue";
// import SprintDeletion from "../Sprint/DeleteSprint";
// // import SprintStart from "../Sprint/StartSprint";
// import "./DefaultBacklog.css";
// import { MDBBadge } from "mdb-react-ui-kit";
// import SprintIssueList from "../SprintIssue/SprintIssueList";
// import SprintCompletion from "../SprintComplete/CompleteSprint";

// // import DeleteConfirmation from "./DeleteConfirmation";
// // import UpdateSprint from "./UpdateSprint";
// // import SuccessfulDeletion from "./SuccessfulDeletion.js";

// const SprintBacklogSection = ({ sprint }) => {
//   const [inactive, setInactive] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <div className={`container ${inactive ? "inactive" : ""}`}>
//         <h2 className="bck">
//           #{sprint.sprintId} - {sprint.sprintName || "Untitled Sprint"}
//         </h2>
//       </div>

//       {/* Sprint Backlog */}
//       <div className="backlog-container">
//         <div className="badge-container">
//           <MDBBadge
//             color="secondary"
//             pill
//             style={{ height: "20px", width: "24px", fontSize: "12px" }}
//           >
//             0
//           </MDBBadge>
//           <MDBBadge
//             color="primary"
//             pill
//             style={{ height: "20px", width: "24px", fontSize: "12px" }}
//           >
//             0
//           </MDBBadge>
//           <MDBBadge
//             color="success"
//             pill
//             style={{ height: "20px", width: "24px", fontSize: "12px" }}
//           >
//             0
//           </MDBBadge>
//         </div>

//         {/* <SprintStart /> */}
//         {/* <UpdateSprint /> */}
//         {/* <SprintDeletion /> */}
//         <SprintCompletion />

//         {/* <i
//           class="bi bi-pen"
//           // onClick={(e, sprintId) => editSprint(e, sprintId)}
//           onClick={() => setShow(true)}
//         ></i>
//         <i
//           class="bi bi-trash-fill"
//           // onClick={(e,sprintId) => deleteSprint(e, Sprint.sprintId)}
//           onClick={() => setShowConfirm(true)}
//         ></i> */}
//       </div>

//       {/* Sprint Issue list */}
//       <div className={`container ${inactive ? "inactive" : ""}`}>
//         <SprintIssueList sprintId={sprint.sprintId} />
//       </div>

//       {/* Issue creation button */}
//       {/* <AddSprintIssue /> */}

//       {/* <DeleteConfirmation
//         show={showConfirm}
//         deleteSprint={deleteSprint}
//         onHide={() => setShowConfirm(false)}
//         sprintId={sprint.sprintId}
//       />

//       <UpdateSprint
//         show={show}
//         onHide={() => setShow(false)}
//         sprintId={sprint.sprintId}
//       />

//       <SuccessfulDeletion
//         onHide={() => setShowSuccess(false)}
//         show={showSuccess}
//         message="Sprint Deleted Successfully"
//       /> */}
//     </div>
//   );
// };

// export default SprintBacklogSection;

import React, { useState } from "react";
import AddSprintIssue from "../SprintIssue/AddSprintIssue";
import SprintDeletion from "../Sprint/DeleteSprint";
// import SprintStart from "../Sprint/StartSprint";
import "./DefaultBacklog.css";
import { MDBBadge } from "mdb-react-ui-kit";
import SprintIssueList from "../SprintIssue/SprintIssueList";
import SprintCompletion from "../SprintComplete/CompleteSprint";

// import DeleteConfirmation from "./DeleteConfirmation";
// import UpdateSprint from "./UpdateSprint";
// import SuccessfulDeletion from "./SuccessfulDeletion.js";

const SprintBacklogSection = ({ sprint }) => {
  const [inactive, setInactive] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="defBack">
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <h2 className="bck">
          #{sprint.sprintId} - {sprint.sprintName || "Untitled Sprint"}
        </h2>
      </div>

      <hr></hr>

      {/* Sprint Backlog */}
      <div className="backlog-container">
        <div className="badge-container">
          <MDBBadge
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
          </MDBBadge>
        </div>

        {/* <SprintStart /> */}
        {/* <UpdateSprint /> */}
        {/* <SprintDeletion /> */}
        <div> 
          <SprintCompletion />
        </div>

        <hr></hr>

        {/* <i
          class="bi bi-pen"
          // onClick={(e, sprintId) => editSprint(e, sprintId)}
          onClick={() => setShow(true)}
        ></i>
        <i
          class="bi bi-trash-fill"
          // onClick={(e,sprintId) => deleteSprint(e, Sprint.sprintId)}
          onClick={() => setShowConfirm(true)}
        ></i> */}
      </div>

      {/* Sprint Issue list */}
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <SprintIssueList sprintId={sprint.sprintId} />
      </div>

      {/* Issue creation button */}
      {/* <AddSprintIssue /> */}

      {/* <DeleteConfirmation
        show={showConfirm}
        deleteSprint={deleteSprint}
        onHide={() => setShowConfirm(false)}
        sprintId={sprint.sprintId}
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
      /> */}
    </div>
  );
};

export default SprintBacklogSection;

