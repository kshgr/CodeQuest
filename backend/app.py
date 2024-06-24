from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/evaluate', methods=['POST'])
def evaluate():
    code = request.json.get('code')
    # Evaluation logic here (placeholder for now)
    if 'fuel_level = 100' in code and 'engine_temp = 350' in code and 'power_output = 75' in code:
        return jsonify({'output': 'Success!', 'feedback': 'Great job! You set the variables correctly.'})
    else:
        return jsonify({'output': 'Error!', 'feedback': 'Please check your variables and try again.'})

if __name__ == '__main__':
    app.run(debug=True)
