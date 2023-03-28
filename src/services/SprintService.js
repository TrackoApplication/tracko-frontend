import axios from "axios";

const SPRINT_API_BASE_URL = "http://localhost:8080/api/v1/sprints"

class SprintService {

    saveSprint(sprint) {
        return axios.post(SPRINT_API_BASE_URL, sprint);
    }

    getSprints() {
        return axios.get(SPRINT_API_BASE_URL)
    }

    deleteSprint(sprintId){
        return axios.delete(SPRINT_API_BASE_URL + "/" + sprintId)
        
    }   
}

export default new SprintService();