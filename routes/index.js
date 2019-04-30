var express = require('express');
var twilio = require('twilio');
var accountSID = "AC57042282184d294f80692825811eb95e";
var token = '79a63fed1151c38e765f148e4c46759a';

var router = express.Router();

var client = new twilio(accountSID, token);

router.get('/:number/:horoscope/:name', function(req, res, next) {
  client.messages.create({
    body: 'Hej, '+ req.params.name + ' detta är ditt horoscope ' +  req.params.horoscope,
    to: req.params.number,
    from: '+46765193190'
  })
  .then(function (message) {
    console.log(message);
  });
  res.send(req.params.number);
});

module.exports = router;
