class PredictionModel:
    def __init__(self, property1, property2):
        self.property1 = property1
        self.property1 = property2

class PredictionModelBuilder:
    def __init__(self):
        self.prediction_model = None

    def reset(self):
        self.prediction_model = PredictionModel("foo", "bar")

    def set_x(self):
        print("Setting x")
    
    def set_y(self):
        print("Setting y")

    def set_z(self):
        print("Setting z")

    def get_result(self):
        prediction_model = self.prediction_model
        self.reset()
        return prediction_model
    
class PredictionModelDirector:
    builder: PredictionModelBuilder

    def __init__(self, builder: PredictionModelBuilder):
        self.builder = builder

    def construct_model(self):
        self.builder.reset()
        self.builder.set_x()
        self.builder.set_y()
        self.builder.set_z()

# Facade
class PredictionModelFacade:
    def __init__(self):
        self.prediction_model = None

    def generate(self):
        prediction_model_builder = PredictionModelBuilder()
        prediction_model_director = PredictionModelDirector(prediction_model_builder)
        prediction_model_director.construct_model()
        return prediction_model_builder.get_result()