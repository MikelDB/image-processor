from app.image_processor.value_objects import Filter, CannyFilter

def build_filter(name: str, properties: list) -> Filter:
    return CannyFilter(float(properties[0]['value']), float(properties[1]['value']))