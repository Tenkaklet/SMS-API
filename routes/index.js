var express = require('express');
var twilio = require('twilio');
var accountSID = process.env.accountSID;
var token = process.env.token;

var router = express.Router();

var client = new twilio(accountSID, token);

router.get('/:number/:horoscope/:name', function(req, res, next) {
  client.messages.create({
    body: 'Hej, '+ req.params.name + ' detta är ditt horoscope ' +  decodeURI(req.params.horoscope),
    to: req.params.number,
    from: '+12053089551'
  })
  .then(function (message) {
    res.json({msg: 'Meddelande har skickats'});
  });
});

module.exports = router;
