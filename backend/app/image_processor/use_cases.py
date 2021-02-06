from typing import List
from app.image_processor.value_objects import Filter
from app.image_processor.services import get_service_from_action_value_object

def apply_actions_to_image(image, actions: List[Filter]):
    #create_actions_from_filters
    #apply filters
    for action in actions:
        action_service = get_service_from_action_value_object(action)
        image = action_service(image, action)
    
    return image
