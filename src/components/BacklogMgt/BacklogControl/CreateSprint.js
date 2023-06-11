import React from "react";
import Button from "react-bootstrap/Button";
import "./CreateSprint.css";

const CreateSprint = ({ setShowSprintBacklog }) => {
  const [inactive, setInactive] = React.useState(false);

  return (
    <div>
      <div className={`container ${inactive ? "inactive" : ""}`}>
        {/* creating sprint backlogs when button clicks */}
        <Button
          variant="primary"
          className="rounded bg-[#281454] text-white border-none px-3 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#281454] ease-in-out"
          onClick={() => {
            const sprintId = Date.now().toString(); // Generate a unique ID for the sprint
            setShowSprintBacklog((prevSprintBacklogs) => ({
              ...prevSprintBacklogs,
              [sprintId]: true,
            }));
          }}
          
        >
          Create Sprint
        </Button>
      </div>
    </div>
  );
};

export default CreateSprint;







