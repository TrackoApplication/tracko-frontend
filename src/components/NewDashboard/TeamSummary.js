import React, { useEffect } from "react";
import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { useState } from "react";
import DashBoardService from "../../Services/DashBoardService";
import { useParams } from "react-router-dom";


export const TeamSummary = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState([]);

 


  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await DashBoardService.getTeamSummary(accessToken,id);
        setTeams(response.data);
      

      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  


  return (
    <>
      <div>TeamSummary</div>
      <div className="table-container border ">
        <table className="table center ">
          <thead className="header bg-gray-100 ">
            <tr className="text-xs">
              <th scope="col" className="py-0  text-xs">
                Team Name
              </th>
              <th scope="col" className="py-0">
                Scrum Master Name
              </th>
              <th scope="col" className="py-0">
                No. of Team Members
              </th>
              <th scope="col" className="py-0">
                Total invloved Issues
              </th>
            </tr>
          </thead>

          {!loading && (
          <tbody className="">
            {teams.map((team) => (
            <tr key={team.teamId}>
              <td className="col-4 p-0 m-0">
                <p className="col-8 text-left" style={{ fontSize: "11px" }}>{team.teamName}</p>
              </td>

              <td className="col-3  p-0 m-0 ">
                <p className="col-8  text-left  p-0 m-0" style={{ fontSize: "10px" }}>
                  {team.scrumMasterName}
                </p>
              </td>
              <td className="col-3  p-0 m-0 ">
                <p className=" col-8 text-left " style={{ fontSize: "10px" }}>
                  {team.noOfMembers}
                </p>
              </td>
              <td className="col-3 p-0 m-0 ">
                <p className=" col-8 text-left  p-0 m-0" style={{ fontSize: "10px" }}>
                  {team.involvedIssues}
                </p>
              </td>
            </tr>
            ))}
            
          </tbody>
)}
        
        </table>
      </div>
    </>
  );
};
