from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np

app = Flask(__name__)
CORS(app)  # ✅ Allow frontend to send requests

model = load_model("model/animal_classifier.h5")
classes = ['cane', 'cavallo', 'elefante', 'farfalla', 'gallina', 'gatto', 'mucca', 'pecora', 'ragno', 'scoiattolo']

@app.route("/")
def home():
    return "Flask server is up!"

@app.route("/predict", methods=["POST"])
def predict():
    file = request.files['file']
    img = Image.open(file).resize((128, 128)).convert('RGB')
    img_array = np.array(img) / 255.0
    img_array = img_array.reshape(1, 128, 128, 3)

    predictions = model.predict(img_array)
    class_index = np.argmax(predictions[0])
    predicted_class = classes[class_index]

    return jsonify({"class": predicted_class})

if __name__ == "__main__":
    app.run(debug=True)
