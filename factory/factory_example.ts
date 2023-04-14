interface Product {
    attribute1: string;
    attribute2: number;
    productMethod1(): void;
    productMethod2(): void;
}

class ConcreteProductA implements Product {
    attribute1: string;
    attribute2: number;

    constructor(attribute1: string, attribute2: number) {
        this.attribute1 = attribute1;
        this.attribute2 = attribute2;
    }

    productMethod1(): void {
        console.log("content of productMethod1. productMethod1 is related to Product");
    }

    productMethod2(): void {
        console.log("content of productMethod2. productMethod2 is related to Product");
    }
}

class ConcreteProductB implements Product {
    attribute1: string;
    attribute2: number;

    constructor(attribute1: string, attribute2: number) {
        this.attribute1 = attribute1;
        this.attribute2 = attribute2;
    }

    productMethod1(): void {
        console.log("content of productMethod1. productMethod1 is related to Product");
    }

    productMethod2(): void {
        console.log("content of productMethod2. productMethod2 is related to Product");
    }
}
    
// An example of Creator is Dialog window, which is a factory of buttons.
// Another example of Creator is Transportation Logistics, which could be a factory for Car Logistics, Ship Logistics, and Truck Logistics. It creates products like Car (for Car Logistics), Ship (for Ship Logistics), and Truck (for Truck Logistics).
abstract class Creator {
    abstract createProduct(): Product;

    method1(): void {
        console.log("content of method1. method1 is related to Creator. Can also be about products created.");
    }

    method2(): void {
        console.log("content of method2. method2 is related to Creator. Can also be about products created.");
    }
}

class ConcreteCreatorA extends Creator {
    createProduct(): Product {
        return new ConcreteProductB("attribute1", 1);
    }
}

class ConcreteCreatorB extends Creator {
    createProduct(): Product {
        return new ConcreteProductA("attribute2", 2);
    }
}

class FactoryExampleApplication {
    creator!: Creator;

    main() {
        const name:string = "Condition_Requirement";

        if (name === "Condition_Requirement") {
            this.creator = new ConcreteCreatorA();
        } else {
            this.creator = new ConcreteCreatorB();
        }

        this.creator.method1();
        this.creator.method2();

        const product: Product = this.creator.createProduct();
        product.productMethod1();
        product.productMethod2();
    }
}

const factoryApp = new FactoryExampleApplication();
factoryApp.main();