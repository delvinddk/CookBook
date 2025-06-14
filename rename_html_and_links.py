import os
import os

slug_to_title = {
  "fried-rice": "Egg Fried Rice",
  "Ham-slice": "Ham slices with Potatoes",
  "acai_bowl": "Tropical Acai Bowl",
  "cajun-chicken": "Cream Cajun Chicken",
  "mussels": "Mussels Clam Pot",
  "ribeye": "Rib Eye steak with Mashed potatoes",
  "fish-vegetables": "Steam Fish Vegetables",
  "Carrot-cake": "Carrot Cake",
  "strawberry-pretzel-cake": "strawberry pretzel Cake",
  "Banana-pudding": "Banana pudding",
  "Cupcakes": "Chocolate Cupcakes",
  "Avocado-toast": "Avocado Toast with Poached Egg",
  "Beans-Bourguignon": "Beans Bourguignon",
  "vegan-poach-egg": "Vegan Poaches Egg",
  "Kung-Pao-Cauliflower": "Kung Pao Cauliflower",
  "creamy-pasta": "Creamy Garlic Parmesan Pasta",
  "teriyaki-chicken": "Teriyaki Chicken Stir Fry",
  "sourdough": "Artisan Sourdough Bread",
  "blueberry_pancake": "Fluffy Blueberry Pancakes"
}

def slugify(text):
    # Replace spaces with hyphens and make lowercase (optional)
    return text.strip().replace(" ", "-")

for slug, title in slug_to_title.items():
    old_file = f"{slug}.html"
    new_file = f"{slugify(title)}.html"
    if os.path.exists(old_file):
        os.rename(old_file, new_file)
        print(f"Renamed: {old_file} → {new_file}")
    else:
        print(f"Not found: {old_file}")
