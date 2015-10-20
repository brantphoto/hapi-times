var Hapi = require('hapi');
var Good = require('good');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.start(function () {
      console.log('Server running at:', server.info.uri);
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Welcome');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Welcome, ' + encodeURIComponent(request.params.name) + '!');
    }
});

server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*'
            }
        }]
    }
}, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});

if (!module.parent) {
      server.start(function() {
                console.log("Server started", server.info.uri);
                    });
}

module.exports = server;
