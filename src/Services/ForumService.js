import axios from "axios";

const FORUM_API_BASE_URL ="http://localhost:8080/api/v1/forum";


class ForumService{

    saveForum(forum) {
        return axios.post(FORUM_API_BASE_URL, forum);
      }

      getForum() {
        return axios.get(FORUM_API_BASE_URL);
      }
    
      deleteForum(forumId) {
        return axios.delete(FORUM_API_BASE_URL + "/" + forumId);
      }
    
      getForumById(forumId) {
        return axios.get(FORUM_API_BASE_URL + "/" + forumId);
      }
    
      updateForum(forum, forumId) {
        return axios.put(FORUM_API_BASE_URL + "/" + forumId, forum);
      }
}
export default new ForumService();