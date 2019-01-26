const axios = require('axios')
exports.getModel = function (req, res) {
  console.log(req)
  axios.get(`http://localhost:5000/model/${req.params.rule}`).then(response => {
    console.log(response)
    return res.json(response.data)
  }).catch(error => {
    return res.json(error.response)
  })
};
