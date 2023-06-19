import axios from "axios";

const ACCESSGROUP_API_BASE_URL = "http://localhost:8080/api/v1"

class AccessGroupService {


    getMemberList(id, accessToken) {
        const url = `${ACCESSGROUP_API_BASE_URL}/project/getMembersPerProject/${id}`;
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        return axios.get(url, config);
      }

      addMembers(id, membersIds, accessToken) {
        const url = `${ACCESSGROUP_API_BASE_URL}/accessgroups/userToGroup?id=${id}`;
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const membersList = Array.from(membersIds); 
        return axios.put(url,membersList, config);
      }

      getAccessList(id, accessToken) {
        const url = `${ACCESSGROUP_API_BASE_URL}/projects/accessgroups?id=${id}`;
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        return axios.get(url, config);
      }
      

      
}

export default new AccessGroupService();