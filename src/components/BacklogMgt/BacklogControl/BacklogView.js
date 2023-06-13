import React from "react";
import Sidebar from "../../SideBar/Sidebar";
import "./Backlog.css";
import Backlog from "./Backlog";

const BacklogView = () => {
  const [inactive, setInactive] = React.useState(false);

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar
          onCollapse={(inactive) => {
            setInactive(inactive);
          }}
        />
        <Backlog />
      </div>
    </div>
  );
};

export default BacklogView;
