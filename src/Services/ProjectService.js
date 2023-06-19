import axios from "axios";

const PROJECT_API_BASE_URL = "http://localhost:8080/api/v1/project"
const CLIENT_API_BASE_URL = "http://localhost:8080/api/v1/client"
const ACCESSGROUP_API_BASE_URL = "http://localhost:8080/api/v1/accessgroups"

class ProjectService{

    // saveproject(project,token) { //take employee object as the input parameter
    
    //         return axios.post(PROJECT_API_BASE_URL,project,{
    //             headers: {
    //               Authorization: `Bearer ${token}`,
    //             },
    //           })  //here we are passing the entire object to the localhost url 
    
    // }

    saveproject(project,token) {
        const url = `${PROJECT_API_BASE_URL}`;
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        return axios.post(url, project);
      }

    getProjects(accessToken,id){
        return axios.get(PROJECT_API_BASE_URL +"/projectsOfMembers/"+id,{
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
    }

    getProjectClients(accessToken){
        return axios.get(CLIENT_API_BASE_URL,{
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
    }


    deleteProject(id){
        return axios.delete(PROJECT_API_BASE_URL+"/"+id);
    }

    getProjectPo(token,id) {
        return axios.get(ACCESSGROUP_API_BASE_URL+ "/po",{
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    }


    
}

export default new ProjectService();