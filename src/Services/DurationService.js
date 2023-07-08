import axios from "axios";

const DURATION_API_BASE_URL = "http://localhost:8080/api/v6/durations"

class DurationService {

    saveDuration(sprintduration) {
        return axios.post(DURATION_API_BASE_URL, sprintduration);
    }

    getDuration() {
        return axios.get(DURATION_API_BASE_URL)
    }

}

export default new DurationService();