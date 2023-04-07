class Element {
    constructor(id) {
        this.id = id;
        this.htmlElement;
    }
}

// ================================

class ElementDirector {
    constructor(builder) {
        this.builder = builder;
    }

    constructElement(id) {
        this.builder.reset(id);
        this.builder.setHTMLElement();
        this.builder.setCharacteristic1();
        this.builder.setCharacteristic2();
    }
}

// ================================

class ElementBuilder {
    constructor() {
        this.element;
    }

    reset(id) {
        this.element = new Element(id);
    }

    setHTMLElement() {
        this.element.htmlElement = document.getElementById(this.element.id);
    }

    setCharacteristic1() {
        return;
    }

    setCharacteristic2() {
        return;
    }

    getResult() {
        const element = this.element;
        this.reset();
        return element;
    }
}

// ================================

class Application {
    constructor(id) {
        this.id = id;
        this.element;
        this.init();
    }

    init() {
        const elementBuilder = new ElementBuilder();
        const elementDirector = new ElementDirector(elementBuilder);
        elementDirector.constructElement(this.id);
        this.element = elementBuilder.getResult();
    }
}

new Application(id);