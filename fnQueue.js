function FnQueue(){
    this.queue = [];
    this.index = 0;
    return this;
}

FnQueue.prototype.add = function(fn, args){
    this.queue.push({
        fn: fn,
        args: args
    });
};

FnQueue.prototype.next = function() {
    var queued = this.queue[this.index++];
    queued.fn.apply(null, queued.args);
};

FnQueue.prototype.delayStart = function(time){
    var self = this;
    setTimeout(function(){
        self.next();
    }, time);
};

module.exports = FnQueue;
