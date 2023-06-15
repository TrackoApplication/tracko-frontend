import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import "./CreateSprint.css";
import { SET_SPRINTS } from "../../../reducers/sprintReducer";
import SprintService from "../../../Services/SprintService";

const CreateSprint = ({sprint}) => {
  const [inactive, setInactive] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={`container ${inactive ? "inactive" : ""}`}>
        {/* creating sprint backlogs when button clicks */}
        <Button
          variant="primary"
          className="rounded bg-[#281454] text-white border-none px-3 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#281454] ease-in-out"
          onClick={() => {
            // const sprintId = Date.now().toString(); // Generate a unique ID for the sprint
            // setShowSprintBacklog((prevSprintBacklogs) => ({
            //   ...prevSprintBacklogs,
            //   [sprintId]: true,
            // }));
            SprintService.saveSprint({
              sprintId: "",
              sprintName: "",
              startDate: "",
              endDate: "",
              sprintGoal: "",
              duration: "",
            }).then((_) => {
              SprintService.getSprints().then((response) => {
                dispatch({
                  type: SET_SPRINTS,
                  payload: response.data,
                });
              });
            });
          }}
        >
          Create Sprint
        </Button>
      </div>
    </div>
  );
};

export default CreateSprint;
