var events = require('events');
var em = new events.EventEmitter();

em.addListener('FirstEvent', function(data) {
    console.log(data);
})

em.emit('FirstEvent', 'This is my first Nodejs event emitter sample!');

// Return EventEmitter from Function -------------------------------------
var EventEmitter = require('events').EventEmitter;

function loopProcess(number) {
    var e = new EventEmitter();
    setTimeout(() => {
        for (let index = 0; index < number; index++) {
            e.emit('BeforeProcess', index);
            console.log('Procesing number: ' + index);
            e.emit('AfterProcess', index);
        }
    }, 2000);
    return e;
}

var lpEvent = loopProcess(2);

lpEvent.addListener('BeforeProcess', function (data) {
    console.log("About start process " + data);
});

lpEvent.addListener('AfterProcess', function(data) {
    console.log('Complete processing! ' + data );
})

// Function extent Emitter class --------------------------------
var EventEmitter = require('events').EventEmitter;
var util = require('util');
function loopProcess(number) {
    var me = this;
    setTimeout(() => {
        for (let index = 0; index < number; index++) {
            me.emit('BeforeProcess', index);
            console.log('Procesing number: ' + index);
            me.emit('AfterProcess', index);
        }
    }, 2000);
    return me;
}
util.inherits(loopProcess, EventEmitter);
var lpEvent = new loopProcess(2);

lpEvent.addListener('BeforeProcess', function (data) {
    console.log("About start process " + data);
});

lpEvent.addListener('AfterProcess', function(data) {
    console.log('Complete processing! ' + data );
})