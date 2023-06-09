interface Subscriber {
    update(data: any): void;
}

class ConcreteSubscriber implements Subscriber {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(data: string) {
        console.log(`${this.name} received data: ${data}`);
    }
}

class Observer {
    subscribers: Subscriber[];

    constructor() {
        this.subscribers = [];
    }

    public subscribe(subscriber: Subscriber) {
        this.subscribers.push(subscriber);
    }

    public unsubscribe(subscriber: Subscriber) {
        this.subscribers = this.subscribers.filter(s => s !== subscriber);
    }

    public notify(data: string) {
        this.subscribers.forEach(subscriber => subscriber.update(data));
    }
}

class Application {
    main() {
        const observer = new Observer();
        const subscriber1 = new ConcreteSubscriber("subscriber1");
        const subscriber2 = new ConcreteSubscriber("subscriber2");

        observer.subscribe(subscriber1);
        observer.subscribe(subscriber2);
        observer.notify('Hello World!');
        observer.unsubscribe(subscriber1);
        observer.notify('Hello World!');
    }
}

const app = new Application();
app.main();