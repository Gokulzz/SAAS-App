from APP import create_app  # Correct the import statement

app = create_app()  # Initialize the app

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5001, debug=True)
    
