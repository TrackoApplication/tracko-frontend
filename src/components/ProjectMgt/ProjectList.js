import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import AddProject from "./AddProject";
import "./ProjectList.css";
import ProjectService from "../../Services/ProjectService";
import { useEffect } from "react";
import ConfirmPopup from "../UserMgt/ConfirmPopup";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { constant, set } from "lodash";


const ProjectList = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  const [loading, setloading] = useState(true); //to check the data is loaded or not
  const [projects, setprojects] = useState(null);

  const [showConfirm, setShowConfirm] = useState(false);


  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");
    console.log(userId);
    
    const fetchdata = async () => {
      setloading(true); //set loading to true as at this moment we are loading the data
      try {
        //calling the api itself in the try block
        const response = await ProjectService.getProjects(accessToken,userId);
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

  const deleteProject = (id) => {
    // e.preventDefault();
    
    ProjectService.deleteProject(id).then((res) => {
      //deleting the data from the database by calling deleteEmployee and "then" once we get the response back
      if (projects) {
        setprojects((prevElement) => {
          //we are setting the state again
          return prevElement.filter((project) => project.projectId != id);
        });
      }
    });
  };
  const Nav = useNavigate();

  return (
    <>
      <div  >
    
      <div className="d-flex justify-content-between">

<div className=" h-12 m-4">
  <AddProject />
</div>
<Form className="m-4 p-2">
  <div className="flex">

    <InputGroup size-sm className="my-2 mx-2">
      <Form.Control
        type="search"
        placeholder="Search"
        className="rounded"
        value={search}
        aria-label="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </InputGroup>
  </div>

  {/* <Button variant="outline-success " className='text-white  outline-slate-100 bg-[rgb(194, 194, 194)]'>Search</Button> */}
</Form>
</div>
        <section>
          <div className="ProListcontainer" >
            {!loading && (
              <div className="PLcards" >
                {projects
                .filter((project) => {
                  return (
                    search.toLowerCase() === "" ||
                    project.projectName
                      .toLowerCase()
                      .includes(search.toLowerCase()) 
                  );
                })
                // .filter((_, index) => index === projects.length - 1) // Filter for the last element
                // .filter(project => project.id === desiredProjectId) // Filter projects based on a condition
                .map((project, i) => (
              <div key={i} className="PLcard "  >
                    <h2 className="mb-1 text-[20px]" >Project - {i}</h2>
                    <h2 >{project.projectName}</h2>
                    <div className="PLimage" >
                      <img src={project.imageURL}></img>
                    </div>

  
                    <div className=" text-right text-xs" >
                    <button className=" font-semibold mt-3 mb-1 text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-2"
                    onClick={() => navigate(`/Dashboard/${project.projectId}`)}                        
                    >
                        View
                      </button>
                     
                      <button className=" font-semibold mt-3 mb-1 text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-2">
                        Update
                      </button>

                      <button
                        onClick={() => setShowConfirm(true)}
                        className=" font-semibold mt-3 mb-1 text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
                      >
                        Delete
                      </button>

                      <ConfirmPopup
                        show={showConfirm}
                        deleteSystemUser={deleteProject}
                        onHide={() => setShowConfirm(false)}
                        systemUserId={project.projectId}
                      />
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
