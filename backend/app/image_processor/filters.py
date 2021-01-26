import cv2

def canny_filter(image):
    return cv2.Canny(image, 100, 180)