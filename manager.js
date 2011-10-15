var redis  = require("redis"),
    jobs   = require("jobs"),
    client = redis.createClient(),
    runner = new jobs(client, "soflomo-jobs",{});

runner.setRunners({
  php: function(data, callback) {
    var sys   = require('sys'),
        exec  = require('child_process').exec,
        error = null,
        command = '/usr/local/zend/bin/php '
                + data.script;

    if (data.args) command = command + ' ' + JSON.stringify(data.args);

    exec(command, function (err, stdout, stderr){
      if (err) {
        sys.puts('An error occurred. Error ouput:');
        console.log(stderr);
        error = stderr;
      }

      sys.puts(stdout);
      callback(error, true);
    });
  }
})
runner.go();

