import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_SPRINTS } from "../../../reducers/sprintReducer";
import SprintService from "../../../Services/SprintService";
import "./Backlog.css";
import DefaultBacklogSection from "./DefaultBacklogSection";

const Backlog = () => {
  // const [inactive, setInactive] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    SprintService.getSprints().then((response) => {
      dispatch({
        type: SET_SPRINTS,
        payload: response.data,
      });
    });
  }, []);

  //Backlog organization happens here
  return (
    <div className="BacklogMain">
      {/* Default Backlog */}
      <DefaultBacklogSection />
    </div>
  );
};

export default Backlog;
