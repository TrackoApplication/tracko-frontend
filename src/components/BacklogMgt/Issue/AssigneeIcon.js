import React from "react";
import "./AssigneeIcon.css";
import defaultImage from "./default-image.png";

const AssigneeIcon = ({ assignee }) => {
  const initials = getInitials(assignee);
  const hasAssignee = assignee && assignee.trim() !== "";

  return (
    <div className={`assignee-icon ${hasAssignee ? "" : "no-assignee"}`}>
      {hasAssignee ? (
        <span className="initials">{initials}</span>
      ) : (
        <img
          src={defaultImage}
          alt="Default Assignee"
          className="default-image"
        />
      )}
    </div>
  );
};

const getInitials = (assignee) => {
  if (assignee) {
    const nameParts = assignee.split(" ");
    const initials = nameParts
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase();
    return initials;
  }
  return "";
};

export default AssigneeIcon;
