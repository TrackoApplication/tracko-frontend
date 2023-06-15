import React from "react";
// import Sidebar from "../../SideBar/Sidebar";
import "./Forum.css";
import ForumList from "./ForumList";
import Sidebar from "../SideBar/Sidebar";


const ForumView = () => {
  const [inactive, setInactive] = React.useState(false);

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar
          onCollapse={(inactive) => {
            setInactive(inactive);
          }}
        />
        <ForumList />
      </div>
    </div>
  );
};

export default ForumView;