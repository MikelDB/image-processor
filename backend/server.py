import os
from app import app
    

if __name__ == '__main__':
    context = ('cert.pem', 'key.pem')
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host='0.0.0.0', port=port)