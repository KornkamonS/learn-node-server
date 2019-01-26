'use strict'

const express = require('express')
const Alias = require('./api/alias.js');
const Model = require('./api/model.js')
const PDF = require('./api/pdf.js')
const Rule = require('./api/rule.js')
const Document = require('./api/doc.js')
const apiRoutes = express.Router()

apiRoutes.get('/alias', (req, res) => {
    Alias.getDocumentAlias(req, res)
})

apiRoutes.put('/alias/:doc_id', (req, res) => {
    Alias.editDocumentAlias(req, res)
})
apiRoutes.delete('/alias/:doc_id', (req, res) => {
    Alias.deleteDocumentAlias(req, res)
})

apiRoutes.get('/model/:rule', (req, res) => {
    Model.getModel(req, res)
})

apiRoutes.get('/rule/', (req, res) => {
    Rule.getAllRule(req, res)
})
apiRoutes.get('/rule/:rule', (req, res) => {
    Rule.getRule(req, res)
})

apiRoutes.get('/jdoc/:doc_id', (req, res) => {
    PDF.getAllRule(req, res)
})
apiRoutes.post('/pdf/', (req, res) => {
    PDF.postPDF(req, res)
})
apiRoutes.get('/pdf/:doc_id', (req, res) => {
    PDF.getPDF(req, res)
})

apiRoutes.get('/doc/', (req, res) => {
    Document.getDocs(req, res)
})
apiRoutes.get('/doc/:doc_id', (req, res) => {
    Document.getDoc(req, res)
})
apiRoutes.get('/doc/:doc_id/:rule', (req, res) => {
    Document.getRuleOfDoc(req, res)
})
apiRoutes.put('/doc/:doc_id/:rule', (req, res) => {
    Document.editRuleOfDoc(req, res)
})
apiRoutes.delete('/doc/:doc_id', (req, res) => {
    Document.deleteDoc(req, res)
})
apiRoutes.delete('/doc/:doc_id/:rule', (req, res) => {
    Document.deleteRuleOfDoc(req, res)
})

module.exports = apiRoutes