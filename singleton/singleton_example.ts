// singleton
class Database {
    private static instance: Database;
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }
        Database.instance = this;
    }

    public getConnection(): void {
        console.log("You are now connected to database.")
    }

    public query(query: string): void {
        console.log(`Your query: ${query}`);
    }
}

class SingletonApplication {
    main() {
        const db1 = new Database();
        const db2 = new Database();

        // The equalness of two instances is checked with the triple equal '===' sign
        console.log(db1 === db2 ? "Same instance" : "Different instance");

        db1.getConnection();
        db2.getConnection();
        db1.query("SELECT * FROM users");
        db2.query("SELECT * FROM users");
    }
}

const singletonApp = new SingletonApplication();
singletonApp.main();