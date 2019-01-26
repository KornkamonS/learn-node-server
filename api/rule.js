const axios = require('axios')
exports.getAllRule = function (req, res) {
  axios.get('http://localhost:5000/rule/').then(response => {

    return res.json(response.data)
  }).catch(error => {
    return res.json(error.response)
  })
};

exports.getRule = function (req, res) {

  axios.get(`http://localhost:5000/rule/${req.params.rule}`, {
    params: {
      complete: req.query.complete
    }
  }).then(response => {
    console.log('success')
    console.log(response)
    return res.json(response.data)
  }).catch(error => {
    console.log('error')
    console.log(error)

    return res.status(500).json(error.response)
  })
};
