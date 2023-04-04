import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import AddProject from "./AddProject";
// link.rel = 'ProjectList';
import "./ProjectList.css";
import ProjectService from "../../Services/ProjectService";
import { useEffect } from "react";

const ProjectList = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const [loading, setloading] = useState(true); //to check the data is loaded or not
  const [projects, setprojects] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      setloading(true); //set loading to true as at this moment we are loading the data
      try {
        //calling the api itself in the try block
        const response = await ProjectService.getProjects();
        //to get the data from the api it may take some time. so we need to wait until we get the data
        //so we Use the "await" & ** must include the "async" to the funcion itselt as 'await' expressions are only allowed within async functions and at the top levels of modules.
        setprojects(response.data); //setting the response to the state(useState) and passing the whatever data
      } catch (error) {
        console.log(error);
      }
      setloading(false); //when everything is done set loading to false
    };

    //above is the declaration of the function "fetchdata"
    fetchdata(); //calling of the function
  }, []);


  const deleteProject=(e,id)=>{
    e.preventDefault();
    ProjectService.deleteProject(id).then((res) =>{  //deleting the data from the database by calling deleteEmployee and "then" once we get the response back
        if(projects){
          setprojects((prevElement)=>{           //we are setting the state again
                return prevElement.filter((project)=>project.id !=id);
            });
        }
    });

}


  return (
    <>
      <div>
        <NavBar />
        <div className="px-5 py-3 text-left text-2xl">
          <b>Projects</b>
        </div>
        <AddProject />
        <section>
          <div className="ProListcontainer">
            {!loading && (
              <div className="PLcards">
                {projects.map((project, i) => (
                  <div key={i} className="PLcard ">
                    <h2 className="mb-1">Project - {i}</h2>
                    <h2>{project.projectName}</h2>
                    <div className="PLimage">
                      <img src={project.imageURL}></img>
                    </div>

                    <div className=" text-right text-xs">
                      <button className=" font-semibold mt-3 mb-1 text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-2">
                        Update
                      </button>
                      <button  onClick={(e,id)=>deleteProject(e,project.id)} className=" font-semibold mt-3 mb-1 text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectList;
