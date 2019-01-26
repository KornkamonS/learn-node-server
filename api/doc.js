const axios = require('axios')

exports.getDocs = function (req, res) {
  axios.get('http://localhost:5000/doc/').then(response => {

    return res.json(response.data)
  }).catch(error => {
    return res.json(error.response)
  })
};

exports.deleteDoc = function (req, res) {
  console.log(req)
  axios.delete(`http://localhost:5000/doc/${req.params.doc_id}`).then(response => {

    return res.json(response.data)
  }).catch(error => {
    return res.status(500).json(error.response)
  })
};

exports.getDoc = function (req, res) {

  axios.get(`http://localhost:5000/doc/${req.params.doc_id}`, {
    params: {
      complete: req.query.complete
    }
  }).then(response => {

    return res.json(response.data)
  }).catch(error => {

    return res.status(500).json(error.response)
  })
};

exports.deleteRuleOfDoc = function (req, res) {
  axios.delete(`http://localhost:5000/doc/${req.params.doc_id}/${req.params.rule}`).then(response => {

    return res.json(response.data)
  }).catch(error => {
    return res.status(500).json(error.response)
  })
};

exports.editRuleOfDoc = function (req, res) {
  //TODO: edit Rule Of Doc
  console.log(req)
  //   axios.get(`http://localhost:5000/rule/${req.params.rule}`, data).then(response => {

  //     return res.json(response.data)
  //   }).catch(error => {
  //     return res.status(500).json(error.response)
  //   })
};

exports.getRuleOfDoc = function (req, res) {

  axios.get(`http://localhost:5000/doc/${doc_id}/${rule}`).then(response => {

    return res.json(response.data)
  }).catch(error => {
    return res.json(error.response)
  })
};
