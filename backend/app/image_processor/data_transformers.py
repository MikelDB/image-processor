import json
import numpy as np
import cv2
from flask import make_response
from app.image_processor.factories import build_filter

def request_filters_to_value_objects(request):
    json_formatted_filters = json.loads(request.form.to_dict()['json'])

    return [build_filter(x['name'], x['properties']) for x in json_formatted_filters]

def request_image_to_opencv_image(request):
    image_file = request.files['file']
    npimg = np.fromfile(image_file, np.uint8)
    
    return cv2.imdecode(npimg, cv2.IMREAD_COLOR)

def image_to_response(image):
    _, buffer = cv2.imencode('.png', image)

    return make_response(buffer.tobytes()) 