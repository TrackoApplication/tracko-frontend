import axios from "axios";

const ISSUE_API_BASE_URL = "http://localhost:8080/childissue/add_iss"

class ChildissueService {

    saveChildissue(childissue) {
        return axios.post(ISSUE_API_BASE_URL, childissue);
    }

    getChildissue() {
        return axios.get(ISSUE_API_BASE_URL)
    }

    deleteChildissue(childissueId){
        debugger;
        return axios.delete(ISSUE_API_BASE_URL + "/" + childissueId)
        
    } 
}

export default new ChildissueService();