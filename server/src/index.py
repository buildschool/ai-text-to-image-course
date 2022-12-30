from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os

app = Flask(__name__)

CORS(app)

config = os.environ

openai.api_key = config['OPENAI_API_KEY']

@app.route('/', methods=["POST"])
def index():
    data = request.get_json()
    prompt = data['prompt']
    photos = []
    for i in range(10):
        response = openai.Image.create(
            prompt=prompt,
            n=1,
            size="256x256"
        )
        photos.append({
            "url": response["data"][0]["url"]
        })
    return jsonify({"photos":photos})