const axios = require('axios')


const getRequest = async (baseUrl, basepath) => {
  return await axios
    .get(`${baseUrl}/${basepath}`, {
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer c71a5d82d1d52eb305b9302363ff68502737cca35426d880cc9a5c934f0c1730`
      }
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })
}


module.exports = {
  getRequest
};