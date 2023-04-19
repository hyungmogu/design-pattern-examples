class SingletonMeta(type):
    """
    The Singleton class can be implemented in different ways in Python. Some
    possible methods include: base class, decorator, metaclass. We will use the
    metaclass because it is best suited for this purpose.
    """

    _instances = {}

    def __call__(cls, *args, **kwargs):
        """
        Possible changes to the value of the `__init__` argument do not affect
        the returned instance.
        """
        if cls not in cls._instances:
            instance = super().__call__(*args, **kwargs)
            cls._instances[cls] = instance
        return cls._instances[cls]
    

class Database(metaclass=SingletonMeta):
    def get_connection(self):
        print("You are now connected to database.")
    
    def query(self, query):
        print("Your query: {}".format(query))


if __name__ == "__main__":
    db1 = Database()
    db2 = Database()
    print(db1 == db2)
    db1.get_connection()
    db2.get_connection()
    db1.query("SELECT * FROM users")
    db2.query("SELECT * FROM users")