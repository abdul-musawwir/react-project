try:
    # Import packages
    from re import split
    import cv2
    import numpy as np
    # import pytesseract
    from nltk.stem import WordNetLemmatizer
    # from pytesseract.pytesseract import Output, image_to_data
    from flask import Flask
    from flask import request, send_from_directory, send_file
    from flask_pymongo import PyMongo
    from pymongo import MongoClient
    import dns
    import json
    import bson
    import base64
    from flask_cors import CORS
    import os
except:
    print("Failed imports")

def read_image():
    img = cv2.imread('pic2.jpeg')
    return img
def crop_image(image,top,bottom,left,right):
    cropped_image = image[top:bottom , left:right]
    return cropped_image
def process_cropped_image(image):
    cropped_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    cropped_image = cv2.blur(cropped_image,(5,5))
    filter = np.array([
    [-1, -1, -1], 
    [-1, 9, -1], 
    [-1, -1, -1]]
    )
    cropped_image=cv2.filter2D(cropped_image,-1,filter)
    return cropped_image
def show_image(image):
    cv2.imshow("cropped", image)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
def read_text(image):
    text = "hello" #pytesseract.image_to_string(image)
    return text
def clean(split_string):
    split_string = split_string.lower()
    for x in range(len(split_string)):
        if ord(split_string[x]) < 97 or ord(split_string[x]) > 122:
            split_string =  split_string.replace(split_string[x],' ')
    return split_string
def intclean(split_string):
    for x in range(len(split_string)):
        x = int(x)
        if ord(split_string[x]) < 48 or ord(split_string[x]) > 57:
            split_string =  split_string.replace(split_string[x],' ')
    return split_string
def dateclean(split_string):
    x = 0
    word = ''
    while(x <= 9):
        word = word + split_string[x]
        x += 1
    return word
def process_user_name(image):
    # image.show()
     # Processing done for user name
    image1 = crop_image(image,178,252,250,920)
    image1 = process_cropped_image(image1)
    text = read_text(image1)
    text = clean(text)
    print("This is User Name: " + str(text))
    return
def process_father_name(image):
    # Processing done for father name
    image1 = crop_image(image,335,405,310,930)
    image1 = process_cropped_image(image1)
    text = read_text(image1)
    text = clean(text)
    print("This is Father Name: " + str(text))
    return
def process_gender(image):
    # Processing done for user Gender
    image1 = crop_image(image,500,550,355,390)
    image1 = process_cropped_image(image1)
    # show_image(image1)
    text = read_text(image1)
    # print(text)
    # text = clean(text)
    print("This is User Gender: M")
    return
def process_country(image):
    # Processing done for user Gender
    image1 = crop_image(image,10,110,300,580)
    image1 = process_cropped_image(image1)
    text = read_text(image1)
    text = clean(text)
    print("This is Resident Country Name: " + str(text))
    return
def process_cnic(image):
    # Processing done for user cnic
    image1 = crop_image(image,590,650,350,625)
    image1 = process_cropped_image(image1)
    text = read_text(image1)
    text = intclean(text)
    print("This is User Cnic: " + str(text))
    return
def process_dob(image):
    # Processing done for user Date of Birth
    image1 = crop_image(image,590,650,650,830)
    image1 = process_cropped_image(image1)
    text = read_text(image1)
    text = dateclean(text)
    print("This is User Date of Birth: " + str(text))
    return

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True
# client = MongoClient("mongodb+srv://izaan:microsoft123@csapl.hsqoz.mongodb.net/test")
@app.route('/visitor', methods=['POST' , "PUT" , "GET", "DELETE"] )
def extract_image():
    # db = client['Reception_Name']
    # VisitorsData = db.Visitors
    
    if request.method == "POST":
        print("here")
        # data = request.json
        # print(data)
        try:
            # creating a folder named data
            if not os.path.exists('images'):
                os.makedirs('images')
            # if not created then raise error
        except OSError:
            print('Error: Creating directory of data')
        f_image2 = open("./images/image.jpg", "wb")
        #f_image2 = f_image2.save("./data/"+cnic+"-front.jpg", optimize=True, quality=30)
        b64str = request.get_json()['image']
        # print(b64str)
        b64str = base64.b64decode(b64str)
        print(b64str)
        
        f_image2.write(b64str)
        f_image2.close()

        # file = open("asd.txt",'w')

        # visitorid = VisitorsData.insert_one(data)
        # image = read_image()
        # name = process_user_name(image)
        # father_name = process_father_name(image)
        # gender = process_gender(image)
        # country = process_country(image)
        # cnic = process_cnic(image)
        # dob = process_dob(image)
        return {"result" : "Sucessfully Scanned and Data Inserted"}
        # return "Sucessfully Scanned and Data Inserted"
    
    if request.method == "GET":
        # db = client['Reception_Name']
        # VisitorsData = db.Visitors
        cnic = request.args.get('cnic')
        date = request.args.get('Check-In_Date')
        if cnic:
            print(cnic)
            # visitor = VisitorsData.find_one({"cnic": cnic})
        elif date:
            print(date)
            # visitor = VisitorsData.find_one({"Check-In_Date": date})
        
        # visitor["_id"] = str(visitor["_id"])
        # obj= {"visitor": visitor}
        return "successful"

app.run(host="localhost")
