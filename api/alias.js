const axios = require('axios')
const FormData = require('form-data');
exports.getDocumentAlias = function (req, res) {
  axios.get('http://localhost:5000/alias').then(response => {

    return res.json(response.data)
  }).catch(error => {
    return res.json(error.response)
  })
};

exports.editDocumentAlias = function (req, res) {
  //TODO : edit alias
  console.log(req.body.document_alias)
  var data = new FormData();
  data.set("document_alias", req.body.document_alias);
  axios.put(`http://localhost:5000/alias/${req.params.doc_id}`, data).then(response => {
    console.log('success')
    return res.json(response.data)
  }).catch(error => {
    console.log('error')
    console.log(error.response.data)
    return res.status(500).json(error.response.data)
  })
};

exports.deleteDocumentAlias = function (req, res) {
  axios.delete(`http://localhost:5000/alias/${req.params.doc_id}`, data).then(response => {

    return res.json(response.data)
  }).catch(error => {
    return res.status(500).json(error.response)
  })
};
