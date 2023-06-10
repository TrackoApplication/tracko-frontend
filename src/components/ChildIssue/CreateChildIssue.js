import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../SideBar/Sidebar'
import { IconContext } from 'react-icons';
import { BsPersonCircle } from 'react-icons/bs';

const CreateChildIssue = () => {
  const [inactive, setInactive] = React.useState(false);

  const [childissues, setChildissues] = useState([]);

  const [childIssue, setChildissue] = useState(null);

  useEffect(() => {
    const childIssueId = new URLSearchParams(window.location.search).get(
      "childIssueId"
    );

    axios.get('http://localhost:8080/childissue/get_iss/' + childIssueId).then((response) => {
      setChildissue(response.data);
      console.log(response.data);
      console.log(response.data.devEstimatedSP);
    });
  }, []);

  return (
    <div className='App'>
      <div className='AppGlass'>
        <Sidebar
          onCollapse={(inactive) => {
            setInactive(inactive);
          }}
        />
        <div className={`container ${inactive ? "inactive" : ""}`}>
          <h2 className='py-4'>
            {childIssue && childIssue.summary ? childIssue.summary : ''}
          </h2>
          <div>         
            <div class="row">
              <div class="col-sm-6">
                <div class="card border mb-3 shadow-sm">
                  <div class="card-header">
                    Developer phase
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Assignee
                      <IconContext.Provider value={{ size: "2em" }}>
                        <div>
                          <BsPersonCircle />
                        </div>
                      </IconContext.Provider>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Reporter
                      <IconContext.Provider value={{ size: "2em" }}>
                        <div>
                          <BsPersonCircle />
                        </div>
                      </IconContext.Provider>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Story points
                      <span class="badge bg-primary">
                        {childIssue && childIssue.devEstimatedSP !== undefined && childIssue.devEstimatedSP !== null ? childIssue.devEstimatedSP : '-'}
                      </span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Sprint 
                      <span>
                        {childIssue && childIssue.sprint ? childIssue.sprint : ''}
                      </span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Priority Level
                      <span>
                        {childIssue && childIssue.priority ? childIssue.priority : 0}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="card border mb-3 shadow-sm">
                  <div class="card-header font-extrabold">
                    QA phase
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Assignee
                      <IconContext.Provider value={{ size: "2em" }}>
                        <div>
                          <BsPersonCircle />
                        </div>
                      </IconContext.Provider>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Reporter
                      <IconContext.Provider value={{ size: "2em" }}>
                        <div>
                          <BsPersonCircle />
                        </div>
                      </IconContext.Provider>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Story point
                      <span class="badge bg-primary">
                        {childIssue && childIssue.testEstimatedSP !== undefined && childIssue.testEstimatedSP !== null ? childIssue.testEstimatedSP : '-'}
                      </span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Sprint
                      <span>
                        {childIssue && childIssue.sprint ? childIssue.sprint : ''}
                      </span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Priority Level
                      <span>
                        {childIssue && childIssue.priority ? childIssue.priority : 0}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateChildIssue;