var push = require('web-push');

//let vapidkeys = push.generateVAPIDKeys()
//console.log(vapidkeys);

let vapidkeys = {
    publickey:'BHUnZYmwW6j1HkK4nS2iEvT8hey0HB7eW8ov1Coa2uQYy4cEtwZKeQ54vNUevumtGbJiqOweStKzYcNZ6HBk1_s',
    privatekey: 'bG2cEGPwYaJF9Km8gJWKsMJaBCmKa10ObtCUdhK1Enc'
}

push.setVapidDetails('mailto:ajdigia@pointpark.edu' , vapidkeys.publickey, vapidkeys.privatekey)

let sub = {};

push.sendNotification(sub, 'Welcome to Friday');

