class DataForClient:
    """
    Data object used by Client.
    """
    client_data: str

    def __init__(self, client_data: str) -> None:
        self.client_data = client_data

class DataForService:
    """
    Data object used by Service.
    """
    service_data: str

    def __init__ (self, service_data: str) -> None:
        self.service_data = service_data

class Client:
    """
    is a client that contains the existing business logic of the program
    """
    def analyze_data(self, data_from_client: DataForClient) -> dict:
        """
        Analyzes data based on data compatible for client.
        """
        if data_from_client.client_data != "":
            return {"status": "Client Ok"}
        else:
            return {"status": "Client Not Ok"}

class Service:
    """
    Service is some useful class (like stock data that's in csv format) that 
    we can't directly access because it has an incompatible interface 
    (for example, out program is based on inputs in JSON format).
    """
    def analyze_data(self, data_from_service: DataForService) -> dict:
        """
        Analyzes data based on data compatible for service.
        """
        if data_from_service.service_data != "":
            return {"status": "Service Ok"}
        else:
            return {"status": "Service Not Ok"}

class ClientToServiceAdapter(Client):
    """
    Adapter is a class that is able to work with both the client and 
    the service.
    """
    adaptee: Service

    def __init__(self, adaptee: Service) -> None:
        self.adaptee = adaptee
    
    def analyze_data(self, data_from_client: DataForClient) -> DataForService:
        """
        Converts data from client format to service format.
        """
        data_for_service = DataForService(data_from_client.client_data)
        return self.adaptee.analyze_data(data_for_service)

class Application:
    def main(self) -> None:
        """
        Application entry point.
        """
        service = Service()
        client = ClientToServiceAdapter(service)
        data_from_client = DataForClient("data")
        print(client.analyze_data(data_from_client))

if __name__ == "__main__":
    application:Application = Application()
    application.main()