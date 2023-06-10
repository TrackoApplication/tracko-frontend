import axios from "axios";

const ISSUE_API_BASE_URL = "http://localhost:8080/api/v1/issues"
const SPRINT_API_BASE_URL = "http://localhost:8080/api/v1/sprints/count"
const EPIC_API_BASE_URL = "http://localhost:8080/api/v1/epics/count"
const TEAM_API_BASE_URL = "http://localhost:8080/api/v1/teams/count"
const PEOPLE_API_BASE_URL = "http://localhost:8080/api/v1/peoples/count"


class DashBoardService {

    getIssueCount() {
        return axios.get(ISSUE_API_BASE_URL+ "/count");
    }

    getIssueTodoCount() {
        return axios.get(ISSUE_API_BASE_URL+ "/status/TO_DO");
    }

    getIssueCompletedCount() {
        return axios.get(ISSUE_API_BASE_URL+ "/status/COMPLETED");
    }

    getIssueInProgressCount() {
        return axios.get(ISSUE_API_BASE_URL+ "/status/IN_PROGRESS");
    }

    getSprintCount() {
        return axios.get(SPRINT_API_BASE_URL);
    }

    getEpicCount() {
        return axios.get(EPIC_API_BASE_URL);
    }

    getTeamCount() {
        return axios.get(TEAM_API_BASE_URL);
    }

    getPeopleCount() {
        return axios.get(PEOPLE_API_BASE_URL);
    }

    getHighRiskCount() {
        return axios.get(ISSUE_API_BASE_URL+ "/highrisk");
    }

    getMediumRiskCount() {
        return axios.get(ISSUE_API_BASE_URL+ "/mediumrisk");
    }

    getLowRiskCount() {
        return axios.get(ISSUE_API_BASE_URL+ "/lowrisk");
    }





}

export default new DashBoardService();