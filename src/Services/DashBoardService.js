import axios from "axios";

const ISSUE_API_BASE_URL = "http://localhost:8080/api/v1/issues/count"

class DashBoardService {

    getIssueCount() {
        return axios.get(ISSUE_API_BASE_URL);
    }

}

export default new DashBoardService();