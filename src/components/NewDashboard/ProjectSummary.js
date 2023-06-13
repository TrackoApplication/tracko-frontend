import React from 'react'
import { useState, useEffect } from 'react';
import './Dashboard.css'
import DashBoardService from "../../Services/DashBoardService";

export const ProjectSummary = () => {

    const [loading, setLoading] = useState(false);
    const [sprintCount, setSprintCount] = useState([1]);
    const [epicCount, setEpicCount] = useState([1]);
    const [teamCount, setTeamCount] = useState([1]);
    const [peopleCount, setPeopleCount] = useState([1]);

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const responseSprint = await DashBoardService.getSprintCount();
            const responseEpic = await DashBoardService.getEpicCount();
            const responseTeam = await DashBoardService.getTeamCount();
            const responsePeople = await DashBoardService.getPeopleCount();
            setSprintCount(responseSprint.data);
            setEpicCount(responseEpic.data);
            setTeamCount(responseTeam.data);
            setPeopleCount(responsePeople.data);
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        };
        fetchData();
      }, []);


  return (
    <div className='card-main flex '>
        <div className='cards'>
            <p>Sprints</p>
            <p className="text-3xl font-bold text-[#ffa600]">{sprintCount}</p>
        </div>
        <div className='cards'>
            <p>Epics</p>
            <p className="text-3xl font-bold text-[#ffa600]">{epicCount}</p>
        </div>
        <div className='cards'>
            <p>Teams</p>
            <p className="text-3xl font-bold text-[#ffa600]">{teamCount}</p>
        </div>
        <div className='cards'>
            <p>Collaborator</p>
            <p className="text-3xl font-bold text-[#ffa600]">{peopleCount}</p>
        </div>
        
    </div>
  )
}
