#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

//'amqp://107.22.147.206:5672'
amqp.connect('amqp://localhost:38197', function(err, conn) {
  if (err) {
    console.log(err);
  } else {
    conn.createChannel(function(err, ch) {
      var q = 'hello';

      ch.assertQueue(q, {durable: false});
      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
      ch.consume(q, function(msg) {
        console.log(" [x] Received %s", msg.content.toString());
      }, {noAck: true});
    });
  }

});
