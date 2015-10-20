var Code = require('code'),
    expect = Code.expect,
    Lab = require("lab"),
    server = require("../"),
    lab = exports.lab = Lab.script();

lab.experiment("Users", function() {
  lab.test("main endpoint lists usernames on the network", function(done) {
    var options = {
        method: "GET",
        url: "/"
    };

    server.inject(options, function(response) {
        var result = response.result;

        expect(response.statusCode).to.equal(200);
        expect(result).to.be.string();

        done();

    });


  });
  lab.test("main endpoint lists usernames on the network", function(done) {

    var optionsTwo = {
      method: "GET",
      url: "/brant"
    };

    server.inject(optionsTwo, function(response) {
        var result = response.result;

        expect(response.statusCode).to.equal(200);
        expect(result).to.be.string();

        done();
    });
  });
});
