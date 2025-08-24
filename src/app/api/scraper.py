import requests
from bs4 import BeautifulSoup
import json

class Scrape:
    @staticmethod
    def data():
        try:
            url = 'https://www.utsc.utoronto.ca/studentexperience/study-space'
            response = requests.get(url, timeout=10)
            response.raise_for_status()

            soup = BeautifulSoup(response.text, 'html.parser')
            tables = soup.find_all('table')
            
            if not tables:
                return {"study_spaces": []}
            
            data = {"study_spaces": []}
            table = tables[0]
            rows = table.find_all('tr')[1:]  # Skip header row

            for row in rows:
                cells = row.find_all('td')
                if len(cells) >= 5:
                    row_text = [cell.text.strip() for cell in cells]
                    
                    building_formatted = row_text[0].replace(' ', '_')
                    room_formatted = row_text[1].replace(' ', '_')
                    image_name = f"/images/{building_formatted}_{room_formatted}.jpg"
                    unique_id = f"{building_formatted}-{room_formatted}"
                    
                    entry = {
                        'id': unique_id,
                        'Building': row_text[0],
                        'Room Number': row_text[1],
                        'Seating Spaces': row_text[2],
                        'Group/Individual': row_text[3],
                        'Type of space': row_text[4],
                        'Image': image_name,
                    }
                    data["study_spaces"].append(entry)

            return data
            
        except Exception as e:
            # Simple fallback - return empty data instead of crashing
            return {"study_spaces": []}
    
if __name__ == "__main__":
    # Get the scraped data
    data = Scrape.data()
    
    # Save to JSON file
    with open('../study-spaces-data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
