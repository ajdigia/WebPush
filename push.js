var push = require('web-push');

//let vapidkeys = push.generateVAPIDKeys()
//console.log(vapidkeys);

Start
let vapidkeys = {
    publickey:'BAyMm81JFt84eqsht1xyQ9xpVXanPpWfdZrbbXLWJW8gbQ0Cyw0yFdgoNzhnp5mhf8vngRQJyOGmMUN4kckFps4',
    privatekey: '46Fio04wQ92uTqaxOQSb0dCD81eeNOXwNTyu7pYdZnI'
}

push.setVapidDetails('mailto:ajdigia@pointpark.edu' , vapidkeys.publickey, vapidkeys.privatekey)

let sub = {
    endpoint:'https://updates.push.services.mozilla.com/wpush/v1/gAAAAABgb…pVEUDaUSHpz8GfAQDcaBw7DceItTRk8kf-InbLXbs0M1OxxEeShMZKi9WaQc',
    expirationTime: null,
    keys: {
        p256dh:'BOni1M0xhkEEMDc7EQ11RntoZwxueBfTqcueQXH2CcLBVstFUjrRN3ONxJGvjmRK36IIfiEvqEzt6LIjjHn1Aw0',
        auth:'GR6GsLubB2gXOMAvc0bNmA'
    }

}

push.sendNotification(sub, 'Welcome to Friday');


