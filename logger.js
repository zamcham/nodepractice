const EventEmitter = require('events');
const emitter = new EventEmitter();

function log(message) {
    console.log(message);
    emitter.emit('messageLogged', { id: 1, url: 'url' });

}

module.exports = log;