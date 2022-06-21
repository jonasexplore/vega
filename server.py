from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import pickle

app = Flask(__name__)
cors = CORS(app)

model = pickle.load(open('knn.joblib', 'rb'))


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    df = pd.DataFrame(data={
        'battery_power': [data['battery_power']],
        'blue': [data['blue']],
        'clock_speed': [data['clock_speed']],
        'dual_sim': [data['dual_sim']],
        'fc': [data['fc']],
        'four_g': [data['four_g']],
        'int_memory': [data['int_memory']],
        'm_dep': [data['m_dep']],
        'mobile_wt': [data['mobile_wt']],
        'n_cores': [data['n_cores']],
        'pc': [data['pc']],
        'px_height': [data['px_height']],
        'px_width': [data['px_width']],
        'ram': [data['ram']],
        'sc_h': [data['sc_h']],
        'sc_w': [data['sc_w']],
        'talk_time': [data['talk_time']],
        'three_g': [data['three_g']],
        'touch_screen': [data['touch_screen']],
        'wifi': [data['wifi']]
    })

    prediction = model.predict(df)

    return jsonify(np.array(prediction).tolist())


if __name__ == "__main__":
    app.run(debug=True)
