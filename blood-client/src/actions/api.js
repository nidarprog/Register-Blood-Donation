import axios from "axios";

const baseURL = "http://localhost:64307/api/";

export default {
  dCandidate(url = baseURL + "dcandidate/") {
    return {
      fetchAll: () => axios.get(url),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
    };
  },
};
