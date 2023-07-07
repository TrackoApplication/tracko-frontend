import React, { useState } from "react";
import { useEffect } from "react";
import Sidebar from "../SideBar/Sidebar";
import "../../App.css";
import EpicService from "../../Services/EpicService";
import { useParams } from "react-router-dom";

const EpicView = () => {
    const [inactive, setInactive] = React.useState(false);
    const [loading, setloading] = useState(true);
    const [epics, setepics] = useState(null);
  
    useEffect(() => {
      const fetchdata = async () => {
        setloading(true); //set loading to true as at this moment we are loading the data
        try {
          //calling the api itself in the try block
          const response = await EpicService.getEpics();
          //to get the data from the api it may take some time. so we need to wait until we get the data
          //so we Use the "await" & ** must include the "async" to the funcion itselt as 'await' expressions are only allowed within async functions and at the top levels of modules.
          setepics(response.data); //setting the response to the state(useState) and passing the whatever data
        } catch (error) {
          console.log(error);
        }
        setloading(false); //when everything is done set loading to false
      };
  
      fetchdata(); //calling of the function
    }, []);
  
    const { id } = useParams();
    console.log('passed id is ',id);
  
    return (
      <div className="App">
        <div className="AppGlass">
          <Sidebar
            onCollapse={(inactive) => {
              setInactive(inactive);
            }}
            />
            <div className="Heading">
              <h1>Epic No 1</h1>
            

         
          <h1></h1>
  
          </div>
        </div>
      </div>
    );
  };
  

export default EpicView