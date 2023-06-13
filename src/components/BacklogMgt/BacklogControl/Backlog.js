import React, { useState } from "react";
import "./Backlog.css";
import SprintBacklogSection from "./SprintBacklogSection";
import SprintCompletionSection from "./SprintCompletionSection";
import DefaultBacklogSection from "./DefaultBacklogSection";

const Backlog = () => {
  const [inactive, setInactive] = React.useState(false);

  //Backlog organization happens here
  return (
    <div className="BacklogMain">
      {/* Default Backlog */}
      <DefaultBacklogSection/>

      {/* Sprint Backlog */}
      {/* Sprint start,update,delete section */}
      {/* <SprintBacklogSection /> */}

      {/* Sprint completion section */}
      <SprintCompletionSection/>
    </div>
  );
};

export default Backlog;
