from flask import Flask, jsonify, render_template

app = Flask(__name__)

# Define the links dictionary
links_dict = {
    'Data Scientist': [
        {'url': 'http://example.com', 'text': 'Example Website'},
        {'url': 'http://example.org', 'text': 'Another Example'}
    ],
    'Software Engineer': [
        {'url': 'http://software.com', 'text': 'Software Engineering Blog'},
        {'url': 'http://github.com', 'text': 'GitHub Repository'}
    ]
}

# Define route to retrieve links for a specific job role
@app.route('/job/<job_role>')
def get_links_for_job_role(job_role):
    links = links_dict.get(job_role, [])
    return jsonify(links)

# Define route for the index page
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
