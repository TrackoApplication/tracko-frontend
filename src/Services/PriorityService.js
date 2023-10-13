import axios from "axios";

const PRIORITY_API_BASE_URL = "http://localhost:8080/api/v5/priorities"

class PriorityService {

    savePriority(issuepriority) {
        return axios.post(PRIORITY_API_BASE_URL, issuepriority);
    }

    getPriority() {
        return axios.get(PRIORITY_API_BASE_URL)
    }

}

export default new PriorityService();