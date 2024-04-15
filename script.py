from flask import Flask, render_template, request

app = Flask(__name__)

# Define your restaurant data
restaurant_data = {
    "Chennai": [
        {"name": "Kora Foods", "price": 250},
        {"name": "S2S Biriyani", "price": 200},
        {"name": "Seeraga Samba Beef Biriyani", "price": 150},
        {"name": "UPM Gossips", "price": 100}
    ],
    "Nungambakkam": [
        {"name": "Asif Biriyani", "price": 150},
        {"name": "Raguman Biriyani", "price": 200},
        # Add more restaurants as needed
    ],
    "Paris": [
        {"name": "Wedding Biriyani", "price": 300},
        {"name": "silon", "price": 400},
        # Add more restaurants as needed
    ],
    "Porur": [
        {"name": "KFC", "price": 180},
        {"name": "Mac", "price": 220},
        # Add more restaurants as needed
    ]
}
@app.route('/')
def index():
    return render_template('index.html', locations=restaurant_data.keys())

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        full_name = request.form['Full Name']
        email = request.form['Email Address']
        phone = request.form['Phone Number']
        date = request.form['Date']
        time = request.form['Time']
        location = request.form['Location']
        restaurant = request.form['Pick a Restaurant']
        # Process the form data as needed
        return "Form submitted successfully!"

if __name__ == '__main__':
    app.run(debug=True)
