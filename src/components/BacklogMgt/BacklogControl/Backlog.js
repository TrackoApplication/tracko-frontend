import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SET_SPRINTS } from "../../../reducers/sprintReducer";
import SprintService from "../../../Services/SprintService";
import "./Backlog.css";
import SprintCompletionSection from "./SprintCompletionSection";
import DefaultBacklogSection from "./DefaultBacklogSection";

const Backlog = () => {
  const [inactive, setInactive] = React.useState(false);
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

      {/* Sprint Backlog */}
      {/* Sprint start,update,delete section */}
      {/* <SprintBacklogSection /> */}

      {/* Sprint completion section */}
      {/* <SprintCompletionSection/> */}
    </div>
  );
};

export default Backlog;
