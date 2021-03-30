var push = require('web-push');

//let vapidkeys = push.generateVAPIDKeys()
//console.log(vapidkeys);

let vapidkeys = {
    publickey:'BAdcM_CeZWv2shCMq45lgmO_kf4ihj0qkgjS8a3CXeUCYjXbmuVNo3d7zbdU-GqNqeQ76PWBuk7LomhsG22A40Y',
    privatekey: 'TkxvvulfKROWlSJAwW4_-XxEGL5z9eJ9JFObQPYDnaI'
}

push.setVapidDetails('mailto:ajdigia@pointpark.edu' , vapidkeys.publickey, vapidkeys.privatekey)

let sub = {};

push.sendNotification(sub, 'Welcome to Friday');
