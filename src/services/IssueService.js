import axios from "axios";

const ISSUE_API_BASE_URL = "http://localhost:8080/api/v1/issues"

class IssueService {

    saveIssue(issue) {
        return axios.post(ISSUE_API_BASE_URL, issue);
    }

    getIssues() {
        return axios.get(ISSUE_API_BASE_URL)
    }

    deleteIssue(issueId){
        return axios.delete(ISSUE_API_BASE_URL + "/" + issueId)
        
    }

    getIssueById(issueId){
        return axios.get(ISSUE_API_BASE_URL + "/" + issueId);
    }

    updateIssue(issueId, issue){
        return axios.put(ISSUE_API_BASE_URL + "/" + issueId, issue);
    }

    // updateIssueSprint(issueId, updatedIssue) {
    //     return axios.put(ISSUE_API_BASE_URL + "/" + issueId, updatedIssue);
    // }

    updateIssueSprint(issueId, updatedIssue) {
        const sprintUpdateURL = `${ISSUE_API_BASE_URL}/${issueId}/sprint`;
        return axios.put(sprintUpdateURL, updatedIssue);
    }
    
}
    
export default new IssueService();
