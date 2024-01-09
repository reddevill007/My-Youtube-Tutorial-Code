import random 
import numpy as np
from PIL import Image
import time

def genrate_random_color():
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)

    return r, g, b

width = 800
height = 800

num_boxes = random.randint(20, 61)

background_color = genrate_random_color()

img_arr = np.full((height, width, 3), background_color, dtype=np.uint8)

for _ in range(num_boxes):
    box_color = genrate_random_color()

    box_height = random.randint(20, 101)
    box_width = random.randint(20, 101)
    box_x_pos = random.randint(0, height - box_height)
    box_y_pos = random.randint(0, width - box_width)

    img_arr[box_y_pos:box_y_pos + box_height, box_x_pos: box_x_pos + box_width] = box_color

timestamp = int(time.time())
filename = f"my_img_{timestamp}.png"

Image.fromarray(img_arr).save(filename)