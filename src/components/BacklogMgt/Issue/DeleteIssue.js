// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import IssueDeleteConfirmation from "./IssueDeleteConfirmation";

// const DeleteIssue = () => {
//   const [inactive, setInactive] = React.useState(false);
//   const [show, setShow] = useState(false);
//   const handleShow = () => setShow(true);

//   return (
//     <div>
//       <div className={`container ${inactive ? "inactive" : ""}`}>
//         <Button
//           variant="primary"
//           className="rounded bg-[#ff0000] text-white border-none px-3 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#ff0000] ease-in-out"
//           onClick={handleShow}
//         >
//           Delete Issue
//         </Button>

//         <IssueDeleteConfirmation />

//         {/* <Modal show={show} onHide={handleClose} animation={false}></Modal> */}
//       </div>
//     </div>
//   );
// };

// export default DeleteIssue;
