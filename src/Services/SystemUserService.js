import axios from "axios";

const SYSTEMUSER_API_BASE_URL = "http://localhost:8080/api/v1/systemusers";
class SystemUserService {

    saveSystemUser(systemUser) {
        return axios.post("http://:localhost:8080/api/v1/auth/register", systemUser);
    }

    getSystemUser() {
        return axios.get(SYSTEMUSER_API_BASE_URL);
    }

    deleteSystemUser(id,accessToken) {
        return axios.delete(SYSTEMUSER_API_BASE_URL + '/' + id, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
    }

    getSystemUserById(id) {
        return axios.get(SYSTEMUSER_API_BASE_URL + '/' + id);
    }

    updateSystemUser(id, request, accessToken) {
        return axios.put(SYSTEMUSER_API_BASE_URL + '/' + id, request,{
            headers: {
                Authorization: `Bearer ${accessToken}`,},
        });
    }
    

}

export default new SystemUserService(); 