from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/api/get_data', methods=['GET'])
def get_data():
    with open('data.txt', 'r') as f:
        data = eval(f.read())
    return jsonify({"data": data})

@app.route('/api/write_data', methods=['POST'])
def write_data():
    with open('data.txt', 'w') as f:
        f.write(str(request.json['data']))
    return jsonify({"message": "Data written to file!"})

if __name__ == '__main__':
    print("Starting the Flask application...")
    app.run(host='localhost', port=5000, debug=True)

print("end")