import axios from "axios";

const ISSUE_API_BASE_URL = "http://localhost:8080/api/v1/issues"
const SPRINT_API_BASE_URL = "http://localhost:8080/api/v1/sprints/count"
const EPIC_API_BASE_URL = "http://localhost:8080/api/v1/epics/count"
const TEAM_API_BASE_URL = "http://localhost:8080/api/v1/teams"
const PEOPLE_API_BASE_URL = "http://localhost:8080/api/v1/peoples/count"



class DashBoardService {
 

    getIssueCount(token) {
        return axios.get(ISSUE_API_BASE_URL+ "/count",{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }

    getIssueTodoCount(token) {
        return axios.get(ISSUE_API_BASE_URL+ "/status/TO_DO",{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }

    getIssueCompletedCount(token) {
        return axios.get(ISSUE_API_BASE_URL+ "/status/COMPLETED",{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }
    getIssueInProgressCount(token) {
        return axios.get(ISSUE_API_BASE_URL+ "/status/IN_PROGRESS",{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }

    getSprintCount(token) {
        return axios.get(SPRINT_API_BASE_URL,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }

    getEpicCount(token) {
        return axios.get(EPIC_API_BASE_URL,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }

    getTeamCount(token) {
        return axios.get(TEAM_API_BASE_URL + "/count",{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }

    getTeamSummary(token) {
        return axios.get(TEAM_API_BASE_URL + "/teamSummary",{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }

    getPeopleCount(token) {
        return axios.get(PEOPLE_API_BASE_URL,{
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