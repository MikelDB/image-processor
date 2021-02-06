class Filter:
    pass

class CannyFilter(Filter):
    def __init__(self, threshold1: float, threshold2: float) -> None:
        self.threshold1 = threshold1
        self.threshold2 = threshold2