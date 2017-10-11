var nunjucks = require('nunjucks');
var express = require('express');
var app = express();


nunjucks.configure('views', { autoescape: true, express: app });


app.use(express.static('public'));


app.get("/", function (request, response) {
  var data = {
    'isLoggedIn': false,
    'jobs': jobs
  }
  var responseHTML = nunjucks.render('index.html', data);
  console.log(responseHTML);
  response.send(responseHTML);
});


var jobs = [
  {
    'jobNumber': '1',
    'salesPersonName': 'sales name 1',
    'supervisorName': 'supervisor name 1',
    'assignee': 'assignee 1',
    'createdDate': new Date(),
    'dueDate': new Date(),
    'CustomerName': 'customer 1',
    'status': 'assigned',
    'salesNumber': 'number 1'
  },
  {
    'jobNumber': '2',
    'salesPersonName': 'sales name 2',
    'supervisorName': 'supervisor name 2',
    'assignee': 'assignee 2',
    'createdDate': new Date(),
    'dueDate': new Date(),
    'CustomerName': 'customer 2',
    'status': 'completed',
    'salesNumber': 'number 2'
  },
  {
    'jobNumber': '3',
    'salesPersonName': 'sales name 3',
    'supervisorName': 'supervisor name 3',
    'assignee': 'assignee 3',
    'createdDate': new Date(),
    'dueDate': new Date(),
    'CustomerName': 'customer 3',
    'status': 'assigned',
    'salesNumber': 'number 3'
  }
]
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
