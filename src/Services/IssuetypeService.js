import axios from "axios";

const ISSUETYPE_API_BASE_URL = "http://localhost:8080/api/v4/issuetypes"

class IssuetypeService {

    saveIssuetype(issuetype) {
        return axios.post(ISSUETYPE_API_BASE_URL, issuetype);
    }

    getIssuetype() {
        return axios.get(ISSUETYPE_API_BASE_URL)
    }

    getIssuetypeById(issuetypeId){
        return axios.get(ISSUETYPE_API_BASE_URL + "/" + issuetypeId);
    }

}

export default new IssuetypeService();