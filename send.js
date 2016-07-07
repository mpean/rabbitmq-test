#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

//'amqp://107.22.147.206:5672'
amqp.connect('amqp://localhost:38197', function(err, conn) {

  conn.createChannel(function(err, ch) {
    var q = 'hello';

    ch.assertQueue(q, {durable: false});
    ch.sendToQueue(q, new Buffer('Hello World!'));
    console.log(" [x] Sent 'Hello World!'");
  });
  setTimeout(function() { conn.close(); process.exit(0) }, 500);
});
