import axios from "axios";

const EPIC_API_BASE_URL = "http://localhost:8080/api/v1/epic"
class EpicService{

    saveEpic(epic) { //take employee object as the input parameter
    
            return axios.post(EPIC_API_BASE_URL,epic)  //here we are passing the entire object to the localhost url 
    
    
    }

    getEpics(){
        return axios.get(EPIC_API_BASE_URL);
    }

    deleteEpic(id){
        return axios.delete(EPIC_API_BASE_URL+ '/' +id);
    }

   

    
}

export default new EpicService();