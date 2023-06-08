import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TeamService from '../../Services/TeamService';
import Team from "./Team";
import SuccessfulAction from "../CommonComponents/SuccessfulAction";

const TeamList = () => {
  const navigate = useNavigate();

const [loading, setLoading] =useState(false);
const [teams, setTeams] = useState([]);
const [showSuccess, setShowSuccess] = useState(false);
  
useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await TeamService.getTeam();
        setTeams(response.data);

      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteTeam = (e, id) => {
    e.preventDefault();
    TeamService.deleteTeam(id).then((res) => {
      if (teams) {
        setTeams((prevElement) => {
          setShowSuccess(true);
          return prevElement.filter((team) => team.id !== id);
        });
      }
    });
  };

  return (
    <div>
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addTeam")}
          className="rounded bg-[#231651]  text-white px-6 py-2 font-semibold">
          Add Team
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-blue-400">
            <tr>
              <th className="text-left font-medium text-black-1000 fw-bold uppercase tracking-wider py-3 px-6">
               Team Name
              </th>
              <th className="text-left font-medium text-black-1000 fw-bold uppercase tracking-wider py-3 px-6">
               Users
              </th>
              <th className="text-right font-medium text-black-1000 fw-bold uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
           {!loading && (
          <tbody className="bg-white">
            {teams.map((team) => (
            <Team
            team={team}
            deleteTeam={deleteTeam}
            key={team.id}></Team>
            ))}
          </tbody>
          )}


        </table>
      </div>
    </div>
    <SuccessfulAction
    onHide={() => setShowSuccess(false)}
    show={showSuccess}
    message="Team Deleted Successfully"
  />
    </div>
  );
};

export default TeamList;