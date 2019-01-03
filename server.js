var jsonServer = require('json-server');
var server = jsonServer.create();
var middlewares = jsonServer.defaults();
var faker = require("faker");
var _ = require("lodash");

server.use(middlewares);

server.get('/employees', function(req, res) {
  const d = _.times(10, _ => {
    return {
      'name': `${faker.name.firstName()} ${faker.name.lastName()}`,
      'avatar': faker.image.avatar(),
      'title': faker.name.jobTitle(),
      'color': faker.internet.color()
    }
  })
  res.jsonp(d)
})

server.listen(3000, function () {
  console.log('JSON Server is running (http:3000)');
});
