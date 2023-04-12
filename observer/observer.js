class Publisher {
    constructor() {
        this.observers = [];
    }
    
    subscribe(observer) {
        this.observers.push(observer);
    }
    
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    
    publish(data) {
        this.observers.forEach(observer => observer(data));
    }
}

// ======= OPTION 2 =========

class Publisher {
    constructor() {
      this.subscriptions = {};
    }
  
    subscribe(id, callback) {
      this.subscriptions[id] = callback;
    }
  
    unsubscribe(id) {
      delete this.subscriptions[id];
    }
  
    notifySubscribers(isAnimationDisabled) {
      Object.values(this.subscriptions).forEach(callback => {
        callback(isAnimationDisabled);
      });
    }
  }