import React, { useEffect } from "react";
import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { useState } from "react";
import DashBoardService from "../../Services/DashBoardService";

export const TeamSummary = () => {
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState([]);

 


  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await DashBoardService.getTeamSummary(accessToken);
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
      <div className="table-container border my-2 ">
        <table className="table center ">
          <thead className="header bg-gray-100 ">
            <tr className="text-xs">
              <th scope="col" className="py-0 ">
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
            <tr>
              <td className="col-3 p-1">
                <p className="col-8 text-lefrt font-bold">{team.teamName}</p>
              </td>

              <td>
                <p className=" col-8 text-justify " style={{ fontSize: "10px" }}>
                  {team.scrumMasterName}
                </p>
              </td>
              <td className="col-3 ">
                <p className=" col-8 text-justify" style={{ fontSize: "10px" }}>
                  {team.noOfMembers}
                </p>
              </td>
              <td className="col-3 ">
                <p className=" col-8 text-justify" style={{ fontSize: "10px" }}>
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
