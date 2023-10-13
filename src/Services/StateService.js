import axios from "axios";

const STATUS_API_BASE_URL = "http://localhost:8080/api/v8/states"

class StateService {

    saveStatus(issuestatus) {
        return axios.post(STATUS_API_BASE_URL, issuestatus);
    }

    getStatus() {
        return axios.get(STATUS_API_BASE_URL)
    }

}

export default new StateService();