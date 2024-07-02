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
    # Evaluation logic for Level 3 to Level 7
    elif 'def broadcast_message(message, times):' in code:
        try:
            exec_globals = {}
            exec(code, exec_globals)
            if 'broadcast_message' not in exec_globals:
                return jsonify({'output': 'Error!', 'feedback': 'Function `broadcast_message` is not defined.'})
            if not callable(exec_globals['broadcast_message']):
                return jsonify({'output': 'Error!', 'feedback': '`broadcast_message` should be a function.'})
            
            # Test cases
            messages = []
            def mock_print(msg):
                messages.append(msg)
            exec_globals['print'] = mock_print

            exec_globals['broadcast_message']("Test", 3)
            if messages != ["Test", "Test", "Test"]:
                return jsonify({'output': 'Error!', 'feedback': 'Failed test case 1: broadcast_message("Test", 3) should print "Test" three times.'})

            return jsonify({'output': 'Success!', 'feedback': 'Great job! You correctly used loops.'})
        except Exception as e:
            return jsonify({'output': 'Error!', 'feedback': f'Error executing code: {e}'})
    elif 'def calculate_shields(power_levels):' in code:
        try:
            exec_globals = {}
            exec(code, exec_globals)
            if 'calculate_shields' not in exec_globals:
                return jsonify({'output': 'Error!', 'feedback': 'Function `calculate_shields` is not defined.'})
            if not callable(exec_globals['calculate_shields']):
                return jsonify({'output': 'Error!', 'feedback': '`calculate_shields` should be a function.'})
            
            # Test cases
            shield = exec_globals['calculate_shields']([10, 20, 30])
            if shield != 60:
                return jsonify({'output': 'Error!', 'feedback': 'Failed test case 1: calculate_shields([10, 20, 30]) should return 60.'})
            
            shield = exec_globals['calculate_shields']([5, 5, 5])
            if shield != 15:
                return jsonify({'output': 'Error!', 'feedback': 'Failed test case 2: calculate_shields([5, 5, 5]) should return 15.'})
            
            return jsonify({'output': 'Success!', 'feedback': 'Great job! You correctly used list operations.'})
        except Exception as e:
            return jsonify({'output': 'Error!', 'feedback': f'Error executing code: {e}'})
    elif 'def move_cargo(cargo, target_position):' in code:
        try:
            exec_globals = {}
            exec(code, exec_globals)
            if 'move_cargo' not in exec_globals:
                return jsonify({'output': 'Error!', 'feedback': 'Function `move_cargo` is not defined.'})
            if not callable(exec_globals['move_cargo']):
                return jsonify({'output': 'Error!', 'feedback': '`move_cargo` should be a function.'})
            
            # Test cases
            position = exec_globals['move_cargo']("Cargo1", 3)
            if position != "Cargo1 moved to position 3":
                return jsonify({'output': 'Error!', 'feedback': 'Failed test case 1: move_cargo("Cargo1", 3) should return "Cargo1 moved to position 3".'})
            
            position = exec_globals['move_cargo']("Cargo2", 5)
            if position != "Cargo2 moved to position 5":
                return jsonify({'output': 'Error!', 'feedback': 'Failed test case 2: move_cargo("Cargo2", 5) should return "Cargo2 moved to position 5".'})
            
            return jsonify({'output': 'Success!', 'feedback': 'Great job! You correctly used string operations.'})
        except Exception as e:
            return jsonify({'output': 'Error!', 'feedback': f'Error executing code: {e}'})
    elif 'def control_systems(system, status):' in code:
        try:
            exec_globals = {}
            exec(code, exec_globals)
            if 'control_systems' not in exec_globals:
                return jsonify({'output': 'Error!', 'feedback': 'Function `control_systems` is not defined.'})
            if not callable(exec_globals['control_systems']):
                return jsonify({'output': 'Error!', 'feedback': '`control_systems` should be a function.'})
            
            # Test cases
            status = exec_globals['control_systems']("Engine", "ON")
            if status != "Engine is now ON":
                return jsonify({'output': 'Error!', 'feedback': 'Failed test case 1: control_systems("Engine", "ON") should return "Engine is now ON".'})
            
            status = exec_globals['control_systems']("Shields", "OFF")
            if status != "Shields are now OFF":
                return jsonify({'output': 'Error!', 'feedback': 'Failed test case 2: control_systems("Shields", "OFF") should return "Shields are now OFF".'})
            
            return jsonify({'output': 'Success!', 'feedback': 'Great job! You correctly used function calls.'})
        except Exception as e:
            return jsonify({'output': 'Error!', 'feedback': f'Error executing code: {e}'})
    elif 'def observe_space(objects):' in code:
        try:
            exec_globals = {}
            exec(code, exec_globals)
            if 'observe_space' not in exec_globals:
                return jsonify({'output': 'Error!', 'feedback': 'Function `observe_space` is not defined.'})
            if not callable(exec_globals['observe_space']):
                return jsonify({'output': 'Error!', 'feedback': '`observe_space` should be a function.'})
            
            # Test cases
            observations = exec_globals['observe_space'](["Star", "Planet", "Asteroid"])
            if observations != "Observed: Star, Planet, Asteroid":
                return jsonify({'output': 'Error!', 'feedback': 'Failed test case 1: observe_space(["Star", "Planet", "Asteroid"]) should return "Observed: Star, Planet, Asteroid".'})
            
            observations = exec_globals['observe_space'](["Nebula", "Comet"])
            if observations != "Observed: Nebula, Comet":
                return jsonify({'output': 'Error!', 'feedback': 'Failed test case 2: observe_space(["Nebula", "Comet"]) should return "Observed: Nebula, Comet".'})
            
            return jsonify({'output': 'Success!', 'feedback': 'Great job! You correctly used list and string operations.'})
        except Exception as e:
            return jsonify({'output': 'Error!', 'feedback': f'Error executing code: {e}'})
    else:
        return jsonify({'output': 'Error!', 'feedback': 'Code does not match any known level requirements.'})

if __name__ == '__main__':
    app.run(debug=True)
