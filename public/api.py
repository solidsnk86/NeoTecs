from flask import Flask, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app, resources ={r"/api/*": {"origins": "*"}})

@app.route('/api/scrape', methods=['GET'])
def scrape():
    try:
        url = 'https://cv-gec.vercel.app'
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')

        titles = [h.text for h in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])]

        paragraphs = [p.text for p in soup.find_all('p')]

        list_items = [li.text for li in soup.find_all('li')]

        inputs = [input['value'] if 'value' in input.attrs else input.text for input in soup.find_all('input')]

        links = [{'text': a.text, 'href': a['href']} for a in soup.find_all('a')]

        images = [{'src': img['src'], 'alt': img['alt']} for img in soup.find_all('img')]

        table_data = [td.text for td in soup.find_all('td')]

        return jsonify({'titles': titles,
                        'paragraphs': paragraphs,
                        'list_items': list_items,
                        'inputs': inputs,
                        'links': links,
                        'images': images,
                        'table_data': table_data
                        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)