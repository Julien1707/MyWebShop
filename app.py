from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # Permet les requêtes CORS

# Charger les produits à partir du fichier JSON
def load_products():
    with open('products.json') as f:
        return json.load(f)

@app.route('/api/products', methods=['GET'])
def get_products():
    products = load_products()
    return jsonify(products)



if __name__ == '__main__':
    app.run(debug=True)
