import json
import os

input_path = r"d:\Joy\Dofollo_test\src\data\docs.json"

# Define mappings
group_mapping = {
    "what-is-dofollo": "Introduction",
    "why-use-dofollo": "Introduction",
    
    "getting-started": "Getting Started",
    
    "website-overview": "Core Features",
    "dashboard": "Core Features",
    "pagelevel-view": "Core Features",
    "scan-new-page": "Core Features",
    
    "planning-page": "Link Management",
    "planned-links": "Link Management",
    "select-anchor-text": "Link Management",
    "publish-link": "Link Management",
    
    "connect-wordpress": "Integrations",
    "connect-gsc": "Integrations",
    "why-you-need-rabbitloader": "Integrations",
    
    "settings-configuration": "Configuration",
    "adding-team-members": "Team Management",
    "deleting-team-members": "Team Management",
    "find-your-website": "Configuration",
    "add-a-new-website-to-dofollo": "Configuration",
    
    "create-ticket": "Support",
    "troubleshooting-login-issues": "Support"
}

# Load existing data
with open(input_path, "r", encoding='utf-8') as f:
    data = json.load(f)

# Update categories with group
for cat in data["categories"]:
    cat_id = cat.get("id")
    # Default to "Resources" if not mapped
    cat["group"] = group_mapping.get(cat_id, "Resources")

# Write back
with open(input_path, "w", encoding='utf-8') as f:
    json.dump(data, f, indent=4)

print(f"Successfully grouped categories in {input_path}")
