import requests
import json
import os
import time

def fetch_station_data_via_json(station_code: str, output_dir="data/api"):
    base_url = "http://aire.nl.gob.mx:81"
    report_url = f"{base_url}/SIMA2017reportes/ReporteDiariosima.php?estacion1={station_code}"
    json_url = f"{base_url}/SIMA2017reportes/pages/ParametrosI.json?t={int(time.time() * 1000)}"

    headers = {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "X-Requested-With": "XMLHttpRequest"
    }

    print(f"[INFO] Fetching pollutant JSON for {station_code}...")

    with requests.Session() as session:
        # Step 1: Visit the station page to set cookies
        session.get(report_url, headers=headers)

        # Step 2: Request the JSON data for that station
        response = session.get(json_url, headers=headers)
        response.raise_for_status()
        data = response.json()

    # Save result
    os.makedirs(output_dir, exist_ok=True)
    outfile = os.path.join(output_dir, f"{station_code}.json")
    with open(outfile, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"[DONE] Saved {station_code} to {outfile}")

# Example usage:
for station in ["CENTRO", "SURESTE", "NORESTE", "NORESTE2"]:
    fetch_station_data_via_json(station)
