from flask import Flask, request, make_response
from flask_cors import cross_origin
import cv2
import numpy as np
from app.image_processor.filters import canny_filter

app = Flask(__name__)


@app.route('/')
def index():
    return {
        'message': 'It works'
    }

@app.route('/image/', methods=['POST'])
@cross_origin()
def setImage():
    file = request.files['file']
    npimg = np.fromfile(file, np.uint8)
    opencv_image = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

    _, buffer = cv2.imencode('.png', canny_filter(opencv_image))
    return make_response(buffer.tobytes())  
