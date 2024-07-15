"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# routes for user ////////////////->

@api.route('/user', methods=['GET'])
@jwt_required()
def get_users():
    user = User.query.all()
    serialize_user = list(map(lambda x: x.serialize(), user))
    
    return jsonify(serialize_user), 200

@api.route('/user', methods=['POST'])
@jwt_required()
def add_user():
    body= request.get_json()
    new_user = User(
        name=body['name'],
        email=body['email'],
        password=body['password']
        )
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "User added successfully!"}), 200

@api.route('/user/<int:user_id>', methods=['PUT'])
@jwt_required()
def modify_user(user_id):
    user = User.query.get(user_id)
    body= request.get_json()
    if 'name' in body:
        user.name = body['name']
    if 'email' in body:
        user.email = body['email']
    if 'password' in body:
        user.password = body['password']
    db.session.commit()
    
    return jsonify(user.serialize(), {"msg": "User updated successfully"}), 200

@api.route('/user/<int:user_id>', methods=['DELETE'])
@jwt_required()
def delete_user_id(user_id):
    user = User.query.get(user_id)
    if user:
        db.session.delete(user)
        db.session.commit()
        return jsonify({"msg": "User successfully deleted!"}), 200
    else:
        return jsonify({"msg": "Try again"}), 404

# routes for login ////////////////->

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"msg": "Email or password error, try again"}), 401
    if user.password != password:
        return jsonify({"msg": "Email or password error, try again"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

# routes for signup ////////////////->

@api.route("/signup", methods=["POST"])
def signup():
    body = request.get_json()
    user = User.query.filter_by(email=body["email"]).first()
    if user == None:
        user = User(name=body["name"], email=body["email"], password=body["password"])
        db.session.add(user)
        db.session.commit()
        response_body = {
            "msg": "Created user"
        }
        return jsonify(response_body), 200
    else:
        return jsonify("There is already a user created with this email, try again"), 401

# routes for private-page ////////////////->

@api.route("/private-page", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200









