import axios from "axios";

const ISSUE_API_BASE_URL = "http://localhost:8080/api/v1/issues"
const SPRINT_API_BASE_URL = "http://localhost:8080/api/v1/sprints/count"
const EPIC_API_BASE_URL = "http://localhost:8080/api/v1/epics/count"
const TEAM_API_BASE_URL = "http://localhost:8080/api/v1/team"
const PEOPLE_API_BASE_URL = "http://localhost:8080/api/v1/peoples/count"
const PROJECT_API_BASE_URL = "http://localhost:8080/api/v1/project"
const GROUP_API_BASE_URL = "http://localhost:8080/api/v1/accesgroups"




class DashBoardService {
 
    getIssueCount(token,id) {
        return axios.get(PROJECT_API_BASE_URL+ "/getIssueCountOnAProject/"+id,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }

    getIssueTodoCount(token,id) {
        return axios.get(ISSUE_API_BASE_URL+ "/status/TO_DO/"+id,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }

    getIssueCompletedCount(token,id) {
        return axios.get(ISSUE_API_BASE_URL+ "/status/COMPLETED/"+id,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }
    getIssueInProgressCount(token,id) {
        return axios.get(ISSUE_API_BASE_URL+ "/status/IN_PROGRESS/"+id,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }

    getSprintCount(token, id) {
        return axios.get(PROJECT_API_BASE_URL + "/getSprintCountOnAProject/" + id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    

    getEpicCount(token,id) {
        return axios.get(PROJECT_API_BASE_URL+ "/getEpicCountOnAProject/"+id,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }

    getTeamCount(token,id) {
        return axios.get(PROJECT_API_BASE_URL+ "/getTeamCountOnAProject/"+id,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }

    getTeamSummary(token,id) {
        return axios.get(TEAM_API_BASE_URL + "/teamSummary/"+id,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }

  

    getPeopleCount(token,id) {
        return axios.get(PROJECT_API_BASE_URL+ "/getPeopleCountOnAProject/"+id,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }

    getHighRiskCount(token) {
        return axios.get(ISSUE_API_BASE_URL+ "/highrisk",{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }

    getMediumRiskCount(token) {
        return axios.get(ISSUE_API_BASE_URL+ "/mediumrisk",{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }

    getLowRiskCount(token) {
        return axios.get(ISSUE_API_BASE_URL+ "/lowrisk",{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }





}

export default new DashBoardService();