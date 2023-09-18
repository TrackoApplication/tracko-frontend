import React from 'react'
import { useState, useEffect } from 'react';
import './Dashboard.css'
import DashBoardService from "../../Services/DashBoardService";
import { useParams } from "react-router-dom";


export const ProjectSummary = () => {
  const { id } = useParams();

    const [loading, setLoading] = useState(false);
    const [sprintCount, setSprintCount] = useState([1]);
    const [epicCount, setEpicCount] = useState([1]);
    const [teamCount, setTeamCount] = useState([1]);
    const [peopleCount, setPeopleCount] = useState([1]);

    useEffect(() => {
      const accessToken = localStorage.getItem("accessToken");
      const projectId= localStorage.getItem("projectId");

        const fetchData = async () => {
          setLoading(true);
          try {
            const responsePeople = await DashBoardService.getPeopleCount(accessToken,projectId);
            setPeopleCount(responsePeople.data);
          } catch (error) {
            console.log(error);
          }
          try {
            const responseEpic = await DashBoardService.getEpicCount(accessToken,projectId);
            setEpicCount(responseEpic.data);
          } catch (error) {
            console.log(error);
          }
          try {
            const responseSprint = await DashBoardService.getSprintCount(accessToken,projectId);
            setSprintCount(responseSprint.data);
          } catch (error) {
            console.log(error);
          }
          try {
            const responseTeam = await DashBoardService.getTeamCount(accessToken,projectId);
            setTeamCount(responseTeam.data);
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
