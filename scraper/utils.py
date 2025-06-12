# Utility functions can go here
# scraper/utils.py

import json, os
import pandas as pd

def merge_station_jsons(input_dir="data/api", output_file="data/latest.json"):
    merged = []
    for file in os.listdir(input_dir):
        if file.endswith(".json"):
            station = file.replace(".json", "")
            with open(os.path.join(input_dir, file), "r", encoding="utf-8") as f:
                data = json.load(f)
                for entry in data:
                    entry["station"] = station
                    merged.append(entry)
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(merged, f, indent=2, ensure_ascii=False)
    print(f"[DONE] Combined data written to {output_file}")
