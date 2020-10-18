const nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

exports.handler = function(event, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: 'SENDGRID_USERNAME',
          pass: 'SENDGRID_PASSWORD'
        }
    });

    var email = {
        from: 'awesome@bar.com',
        to: 'mr.walrus@foo.com',
        subject: 'Hello',
        text: 'Hello world',
        html: '<b>Hello world</b>'
      };

    transporter.sendMail(email, function(error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                   'result': 'success'
                })
        });
        }
    });
}