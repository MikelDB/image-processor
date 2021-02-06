from flask import Flask, request
from flask_cors import cross_origin

from app.image_processor.data_transformers import request_filters_to_value_objects, request_image_to_opencv_image, image_to_response
from app.image_processor.use_cases import apply_actions_to_image

app = Flask(__name__)

@app.route('/image/process', methods=['POST'])
@cross_origin()
def setImage():
    filters = request_filters_to_value_objects(request)
    opencv_image = request_image_to_opencv_image(request)

    image = apply_actions_to_image(opencv_image, filters)

    return image_to_response(image)
