self.addEventListener('push', function(e) {

var options = {
    body: 'This notification was generated from a push!',
    data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
    },
    actions: [
        {
            action: 'explore',
            title: 'Explore this new world',
        },
        { action: 'close', title: 'Close' }
    ]
};
//e.waitUntil(self.ServiceWorkerRegistration.showNotification('Hello World!', options) 
})