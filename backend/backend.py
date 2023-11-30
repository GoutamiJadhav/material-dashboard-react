from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# Connect to MongoDB
client = MongoClient('your_mongodb_connection_string_here')
db = client['Material-dashboard']
collection = db['billing_collection']

# Route to add a new billing record
@app.route('/api/add-billing', methods=['POST'])
def add_billing():
    data = request.json  # Assuming data is sent in JSON format

    # Insert the received data into MongoDB collection
    inserted_id = collection.insert_one(data).inserted_id

    if inserted_id:
        return jsonify({'message': 'Billing information added successfully'})
    else:
        return jsonify({'message': 'Failed to add billing information'})

if __name__ == '__main__':
    app.run(debug=True)
