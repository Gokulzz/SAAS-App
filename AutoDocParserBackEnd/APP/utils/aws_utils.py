import boto3
import os
from dotenv import load_dotenv


load_dotenv()

# AWS Clients
s3 = boto3.client('s3', 
    aws_access_key_id=os.getenv('AWS_ACCESS_KEY'), 
    aws_secret_access_key=os.getenv('AWS_SECRET_KEY')
)
textract = boto3.client('textract', 
    aws_access_key_id=os.getenv('AWS_ACCESS_KEY'), 
    aws_secret_access_key=os.getenv('AWS_SECRET_KEY'), 
    region_name="ca-central-1"
)

def upload_to_s3(file):
    bucket_name = "autodocparse-bucket"
    try:
        s3.upload_fileobj(file, bucket_name, file.filename)
        return file.filename
    except Exception as e:
        print(f"Error uploading file: {e}")
        return None

def extract_data_with_textract(filename):
    try:
        response = textract.analyze_document(
            Document={'S3Object': {'Bucket': "autodocparse-bucket", 'Name': filename}},
            FeatureTypes=['TABLES', 'FORMS']  
        )
        print(response)
        return response  
        
    except Exception as e:
        print(f"Error extracting text: {e}")
        return None

