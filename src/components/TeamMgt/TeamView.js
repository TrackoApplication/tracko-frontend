import React from "react";
// import Sidebar from "../../SideBar/Sidebar";
import "./Team.css";
import TeamList from "./TeamList";
import Sidebar from "../SideBar/Sidebar";


const TeamView = () => {
  const [inactive, setInactive] = React.useState(false);

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar
          onCollapse={(inactive) => {
            setInactive(inactive);
          }}
        />
        <TeamList />
      </div>
    </div>
  );
};

export default TeamView;