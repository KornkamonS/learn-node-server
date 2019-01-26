const axios = require('axios')
const fs = require('fs');
// const express = require('express')
exports.getJdoc = function (req, res) {
  axios.get(`http://localhost:5000/jdoc/${doc_id}`).then(response => {
    return res.json(response.data)
  }).catch(error => {
    return res.json(error.response)
  })
};

exports.postPDF = function (req, res) {
  //TODO: POST PDF
  console.log(req)

};

exports.getPDF = function (req, res) {
  console.log(req.url)
  axios.get(`http://localhost:5000/pdf/${req.params.doc_id}`, {
    params: {
      first_page: req.query.first_page,
      last_page: req.query.last_page
    }
  }).then(response => {
    //TODO: send PDF
    fs.writeFile(response.data, function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("The file was saved!");
    });
    // res.type('application/pdf');
    // res.end(response.data)
    // res.send(new Buffer(response.data, 'binary'))



  }).catch(error => {
    console.log(error.response.data)
    return res.status(500).json(error.response.data)
  })
};
