import axios from "axios";

const SPRINTISSUE_API_BASE_URL = "http://localhost:8080/api/v3/sprintissues"

class SprintIssueService {

    saveSprintIssue(sprintissue) {
        return axios.post(SPRINTISSUE_API_BASE_URL, sprintissue);
    }

    getSprintIssues() {
        return axios.get(SPRINTISSUE_API_BASE_URL);
    }

    deleteIssue(sprintIssueId){
        return axios.delete(SPRINTISSUE_API_BASE_URL + "/" + sprintIssueId); 
    } 
}

export default new SprintIssueService();