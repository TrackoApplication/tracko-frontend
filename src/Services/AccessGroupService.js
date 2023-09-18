import axios from "axios";

const ACCESSGROUP_API_BASE_URL = "http://localhost:8080/api/v1"

class AccessGroupService {


    getMemberList(id, accessToken) {
        const url = `${ACCESSGROUP_API_BASE_URL}/accessgroups/membersPerGroup/${id}`;
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        return axios.get(url, config);
      }

      addMembers(id,projectId, membersIds, accessToken) {
        const url = `${ACCESSGROUP_API_BASE_URL}/accessgroups/addGroupMembersToProject?id1=${projectId}&id2=${id}&id3=${membersIds}`;
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const membersList = Array.from(membersIds); 
        return axios.put(url, config);
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