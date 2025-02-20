from flask import Blueprint, request, jsonify
from .utils.aws_utils import upload_to_s3, extract_data_with_textract
from .utils.textProcessing import extract_structured_data

main_routes = Blueprint('main_routes', __name__)

@main_routes.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400
    file = request.files['file']
    if file.filename == '':  # Check if the file has a filename
        return jsonify({"error": "No selected file"}), 400
    filename = upload_to_s3(file)
    if filename:
        return jsonify({"message": "File uploaded successfully", "filename": filename})
    return jsonify({"error": "Failed to upload file"}), 500

@main_routes.route('/process', methods=['POST'])
def process_file():
    filename = request.json.get('filename')
    if not filename:
        return jsonify({"error": "Filename required"}), 400
    
    print(f"🔍 Processing file: {filename}")  # Debug log
    
   
    textract_response = extract_data_with_textract(filename)
    if not textract_response:
        print("Text extraction failed")  # Debug log
        return jsonify({"error": "Text extraction failed"}), 500
    
    # Now pass the full textract_response to extract_structured_data
    structured_data = extract_structured_data(textract_response)
    if not structured_data:
        print("Failed to process extracted text")  # Debug log
        return jsonify({"error": "Failed to process extracted text"}), 500
    
    print(f"Successfully processed: {filename}")  # Debug log
    print(f"result: {structured_data}")
    return jsonify({"message": "File processed successfully", "data": structured_data})


