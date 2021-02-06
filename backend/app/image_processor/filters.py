import cv2

def canny_filter(image, threshold1, threshold2):
    return cv2.Canny(image, threshold1, threshold2)