from flask import Flask
from .routes import main_routes
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app, origins="http://localhost:3000")
    app.register_blueprint(main_routes)
    return app