import axios from "axios";


const REPLY_API_BASE_URL ="http://localhost:8080/api/v1/reply";

class ReplyService{

    saveReply(reply) {
        return axios.post(REPLY_API_BASE_URL, reply);
      }

      getReply() {
        return axios.get(REPLY_API_BASE_URL);
      }
    
      deleteReply(replyId) {
        
        return axios.delete(REPLY_API_BASE_URL + "/" + replyId);
      }
    
      getReplyById(replyId) {
        return axios.get(REPLY_API_BASE_URL + "/" + replyId);
      }
    
      updateReply(reply, replyId) {
        return axios.put(REPLY_API_BASE_URL + "/" + replyId, reply);
      }
}
export default new ReplyService();
