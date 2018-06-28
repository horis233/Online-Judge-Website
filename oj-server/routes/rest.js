var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var problemService = require('../services/problemService');

const nodeRestClient = require('node-rest-client').Client;
const restClient = new nodeRestClient();

EXECUTOR_SERVER_URL = 'http://52.87.237.217:5000/build_and_run';

restClient.registerMethod('build_and_run', EXECUTOR_SERVER_URL, 'POST');

router.get('/problems', function(req, res) {
  problemService.getProblems()
    .then( problems => res.json(problems) );
});

router.get('/problems/:id', function(req, res) {
  var id = req.params.id;
  problemService.getProblem(+id)
    .then( problem => res.json(problem) );
});

router.post('/problems', jsonParser, function(req, res) {
  problemService.addProblem(req.body)
    .then(problem => {
      res.json(problem);
    },
    error => {
      res.status(400).send('Problem already exists');
    });
});

// build and run
router.post('/build_and_run', jsonParser, (req, res) => {
    const userCodes = req.body.userCodes;
    const lang = req.body.lang;
    // console.log('lang: ', lang, 'usercodes: ', userCodes);
    // res.json({'text':'hello from nodejs'});

   restClient.methods.build_and_run(
       {
           data: {code: userCodes, lang: lang},
           headers: { 'Content-Type': 'application/json'}
       },
       (data, response) => {
           // build: xxx ; run: xxx
           console.log("Recieved response from execution server: "+ response);
           const text = `Build output: ${data['build']}. Execute Output: ${data['run']}`;
           data['text'] = text;
           res.json(data);
       }
   );
});

module.exports = router;
