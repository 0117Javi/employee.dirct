import axios from "axios";

const API = {
  searchAll: function () {
    return axios.get(`https://randomuser.me/api/?results=50`); //(`https:breakingbadapi.com/api/charactors`);
  },
};

export default API;
