var push = require('web-push');

//let vapidkeys = push.generateVAPIDKeys()
//console.log(vapidkeys);

let vapidkeys = {
    publickey:'BHUnZYmwW6j1HkK4nS2iEvT8hey0HB7eW8ov1Coa2uQYy4cEtwZKeQ54vNUevumtGbJiqOweStKzYcNZ6HBk1_s',
    privatekey: 'bG2cEGPwYaJF9Km8gJWKsMJaBCmKa10ObtCUdhK1Enc'
}

push.setVapidDetails('mailto:ajdigia@pointpark.edu' , vapidkeys.publickey, vapidkeys.privatekey)

let sub = {
    endpoint:'https://updates.push.services.mozilla.com/wpush/v1/gAAAAABgb…UJkIWnot4SqkiIVw-bnfrNiyAoXWdiRqtQsPxVn2JjMZhR266SjIdtQHWF28',
    expirationTime: null,
    keys: {
        p256dh:'BJOEtOBqkz69fSk4sQOTjAleb2kTC0f8VsMwNf2gPWylAI8LkF8k9Rd9v2jQGctx72ln1sK4_AytDq4-wm6ZDV8',
        auth:'SVGQHwCORPeLIJ80LazW6g'
    }

}

push.sendNotification(sub, 'Welcome to Friday');

