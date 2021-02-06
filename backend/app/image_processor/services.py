import cv2

from app.image_processor.value_objects import Filter, CannyFilter

def apply_canny_to_image_service(image, action: CannyFilter):
    return cv2.Canny(image, action.threshold1, action.threshold2)

def get_service_from_action_value_object(action: Filter):
    return apply_canny_to_image_service
