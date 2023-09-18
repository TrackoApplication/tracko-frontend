import axios from "axios";

const TEAM_API_BASE_URL ="http://localhost:8080/api/v1/team";


class TeamService{

    saveTeam(accessToken,team,id) {
        return axios.post(TEAM_API_BASE_URL+"/"+id,team,{
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
        );
      }

      getTeam(accessToken,id) {

        return axios.get(TEAM_API_BASE_URL+"/"+id,{
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        
      }
    
      deleteTeam(id) {
        return axios.delete(TEAM_API_BASE_URL + "/" + id);
      }
    
      getTeamById(id) {
        return axios.get(TEAM_API_BASE_URL + "/" + id);
      }
    
      updateTeam(team, id) {
        return axios.put(TEAM_API_BASE_URL + "/" + id,team);
      }
      getExistingTeams() {
        return axios.get(TEAM_API_BASE_URL + "/existing-teams");
      }
}
export default new TeamService();