var push = require('web-push');

//let vapidkeys = push.generateVAPIDKeys()
//console.log(vapidkeys);

let vapidkeys = {
    publickey:'BHUnZYmwW6j1HkK4nS2iEvT8hey0HB7eW8ov1Coa2uQYy4cEtwZKeQ54vNUevumtGbJiqOweStKzYcNZ6HBk1_s',
    privatekey: 'bG2cEGPwYaJF9Km8gJWKsMJaBCmKa10ObtCUdhK1Enc'
}

push.setVapidDetails('mailto:ajdigia@pointpark.edu' , vapidkeys.publickey, vapidkeys.privatekey)

let sub = {
    endpoint:'https://https://updates.push.services.mozilla.com/wpush/v1/gAAAAABgb…pVEUDaUSHpz8GfAQDcaBw7DceItTRk8kf-InbLXbs0M1OxxEeShMZKi9WaQc',
    expirationTime: null,
    keys: {
        p256dh:'BOni1M0xhkEEMDc7EQ11RntoZwxueBfTqcueQXH2CcLBVstFUjrRN3ONxJGvjmRK36IIfiEvqEzt6LIjjHn1Aw0',
        auth:'GR6GsLubB2gXOMAvc0bNmA'
    }

}

push.sendNotification(sub, 'Welcome to Friday');

