import axios from "axios";

const REPLY_API_BASE_URL ="http://localhost:8080/api/v1/reply";


class ReplyService{

    saveReply(reply) {
        return axios.post(REPLY_API_BASE_URL, reply);
      }

      getReply() {
        return axios.get(REPLY_API_BASE_URL);
      }
    
      deleteReply(id) {
        return axios.delete(REPLY_API_BASE_URL + "/" + id);
      }
    
      getReplyById(id) {
        return axios.get(REPLY_API_BASE_URL + "/" + id);
      }
    
      updateReply(reply, id) {
        return axios.put(REPLY_API_BASE_URL + "/" + id, reply);
      }
}
export default new ReplyService();
