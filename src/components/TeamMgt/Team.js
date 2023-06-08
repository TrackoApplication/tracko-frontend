import React from 'react'
import { useNavigate } from 'react-router-dom';

const Team = ({team,deleteTeam}) => {
    const navigate = useNavigate();
    const editTeam = (e, id) => {
      e.preventDefault();
      navigate(`/editTeam/${id}`);
    };
  
    return (
    <tr key={team.id}> 
                <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                    {team.teamName}
                    </div>
                    </td>
                
                <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                {team.users}
                    </div>
                    </td>
                
                
                <td className="text-right px-6 py-4 whitespace-nowrap">
                <a 
                 onClick={(e, id) => editTeam(e, team.id)}
                 className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">Edit</a>
                <a 
                onClick={(e, id) => deleteTeam(e, team.id)}
                 className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">Delete</a>
                </td>
            </tr>
  );
};

export default Team;
