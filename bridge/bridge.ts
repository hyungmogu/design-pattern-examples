// Implementation
interface OS {
    isConnectable(): boolean;
    getKeyboard(): Keyboard;
    setKeyboard(keyboard: Keyboard): void;
    enableSound(): boolean;
    disableSound(): boolean;
    getVolume(): boolean;
    setVolume(level: number): void;
    enableMic(): boolean;
    disableMic(): boolean;
    getPressedKey(): string;
    setPressedKey(key: string): void;
}

// Concrete Implementation
class Mac implements OS {
    keyboard: Keyboard;
    volume: number;
    currentKey: string;
    isConnectable(): boolean {
        console.log('Mac is connectable');
        return true;
    }
    getKeyboard(): Keyboard {
        console.log('Getting keyboard');
        return this.keyboard;
    }
    setKeyboard(keyboard: Keyboard): void {
        console.log('Setting keyboard');
        this.keyboard = keyboard;
    }
    enableSound(): boolean {
        console.log('Enabling sound');
        return true;
    }
    disableSound(): boolean {
        console.log('Disabling sound');
        return true;
    }
    getVolume(): boolean {
        console.log('Getting volume');
        return true;
    }
    setVolume(level: number): void {
        console.log('Setting volume');
        this.volume = level;
    }
    enableMic(): boolean {
        console.log('Enabling mic');
        return true;
    }
    disableMic(): boolean {
        console.log('Disabling mic');
        return true;
    }
    getPressedKey(): string {
        console.log('Getting pressed key');
        return this.currentKey;
    }
    setPressedKey(key: string): void {
        console.log('Setting pressed key');
        this.currentKey = key;
    }
}

class Windows implements OS {
    keyboard: Keyboard;
    volume: number;
    currentKey: string;
    isConnectable(): boolean {
        console.log('Windows is connectable');
        return true;
    }
    getKeyboard(): Keyboard {
        console.log('Getting keyboard');
        return this.keyboard;
    }
    setKeyboard(keyboard: Keyboard): void {
        console.log('Setting keyboard');
        this.keyboard = keyboard;
    }
    enableSound(): boolean {
        console.log('Enabling sound');
        return true;
    }
    disableSound(): boolean {
        console.log('Disabling sound');
        return true;
    }
    getVolume(): boolean {
        console.log('Getting volume');
        return true;
    }
    setVolume(level: number): void {
        console.log('Setting volume');
        this.volume = level;
    }
    enableMic(): boolean {
        console.log('Enabling mic');
        return true;
    }
    disableMic(): boolean {
        console.log('Disabling mic');
        return true;
    }

    getPressedKey(): string {
        console.log('Getting pressed key');
        return this.currentKey;
    }

    setPressedKey(key: string): void {
        console.log('Setting pressed key');
        this.currentKey = key;
    }
}

// Abstraction
class Keyboard {
    os: OS;
    constructor(os: OS) {
        this.os = os;
    }

    connect() {
        console.log('Connected');
        
        if (!this.os.isConnectable()) return;
        this.os.setKeyboard(this);
    }

    pressKey(key: string) {
        console.log('Key pressed');

        if (!this.os.getKeyboard()) return;
        
        this.os.setPressedKey(`Key ${key} pressed`);
    }
}

// Refined Abstraction
class KeyboardExtended extends Keyboard {
    constructor(os: OS) {
        super(os);
    }

    pressSideNumKey(key: string) {
        console.log('Num key on right hand side pressed');

        if (!this.os.getKeyboard()) return;
        
        this.os.setPressedKey(`Key ${key} pressed`);
    }
}

// Client
class Application {
    main() {
        const mac = new Mac();
        const macKeyboard = new Keyboard(mac);
        macKeyboard.connect();
        macKeyboard.pressKey('A');

        const windows = new Windows();
        const windowsKeyboard = new KeyboardExtended(windows);
        windowsKeyboard.connect();
        windowsKeyboard.pressSideNumKey('1');
    }
}