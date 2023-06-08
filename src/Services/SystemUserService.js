import axios from "axios";

const SYSTEMUSER_API_BASE_URL = "http://localhost:8080/api/v1";
class SystemUserService {

    saveSystemUser(systemUser) {
        return axios.post("http://:localhost:8080/api/v1/auth/register", systemUser);
    }

    getSystemUser() {
        return axios.get(SYSTEMUSER_API_BASE_URL);
    }

    deleteSystemUser(id) {
        return axios.delete(SYSTEMUSER_API_BASE_URL + '/' + id);
    }

    getSystemUserById(id) {
        return axios.get(SYSTEMUSER_API_BASE_URL + '/' + id);
    }

    updateSystemUser(id, systemUser) {
        return axios.put(SYSTEMUSER_API_BASE_URL + '/' + id, systemUser);
    }
    

}

export default new SystemUserService(); 