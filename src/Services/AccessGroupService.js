import axios from "axios";

const ACCESSGROUP_API_BASE_URL = "http://localhost:8080/api/v1"

class AccessGroupService {

    getPeopleList() {
        return axios.get(ACCESSGROUP_API_BASE_URL+"/peoples")
    }
    
}

export default new AccessGroupService();