from app import app
from flask import render_template, jsonify, request, redirect, Response

@app.route('/', methods = ['GET'])
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = '5000', debug = True, threaded = True, ssl_context = 'adhoc')
