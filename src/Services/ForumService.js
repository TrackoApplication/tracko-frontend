import axios from "axios";

const FORUM_API_BASE_URL ="http://localhost:8080/api/v1/forums";


class ForumService{

    saveForum(forum) {
        return axios.post(FORUM_API_BASE_URL, forum);
      }

      getForum() {
        return axios.get(FORUM_API_BASE_URL);
      }
    
      deleteForum(id) {
        return axios.delete(FORUM_API_BASE_URL + "/" + id);
      }
    
      getForumById(id) {
        return axios.get(FORUM_API_BASE_URL + "/" + id);
      }
    
      updateForum(forum, id) {
        return axios.put(FORUM_API_BASE_URL + "/" + id, forum);
      }
}
export default new ForumService();