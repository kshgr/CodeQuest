from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/evaluate', methods=['POST'])
def evaluate():
    code = request.json.get('code')
    # Evaluation logic for Level 1 and Level 2
    if 'fuel_level = 100' in code and 'engine_temp = 350' in code and 'power_output = 75' in code:
        return jsonify({'output': 'Success!', 'feedback': 'Great job! You set the variables correctly.'})
    elif 'def set_direction(fuel_level, engine_temp):' in code:
        try:
            exec_globals = {}
            exec(code, exec_globals)
            if 'set_direction' not in exec_globals:
                return jsonify({'output': 'Error!', 'feedback': 'Function `set_direction` is not defined.'})
            if not callable(exec_globals['set_direction']):
                return jsonify({'output': 'Error!', 'feedback': '`set_direction` should be a function.'})
            
            # Test cases
            direction = exec_globals['set_direction'](60, 150)
            if direction != "Forward":
                return jsonify({'output': 'Error!', 'feedback': 'Failed test case 1: set_direction(60, 150) should return "Forward".'})
            
            direction = exec_globals['set_direction'](40, 250)
            if direction != "Stay":
                return jsonify({'output': 'Error!', 'feedback': 'Failed test case 2: set_direction(40, 250) should return "Stay".'})
            
            return jsonify({'output': 'Success!', 'feedback': 'Great job! You correctly used conditionals.'})
        except Exception as e:
            return jsonify({'output': 'Error!', 'feedback': f'Error executing code: {e}'})
    else:
        return jsonify({'output': 'Error!', 'feedback': 'Code does not match any known level requirements.'})

if __name__ == '__main__':
    app.run(debug=True)
