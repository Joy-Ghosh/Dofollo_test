import json
import os
import re

blog_json_path = r'd:\Joy\Dofollo_test\src\data\pages\blog.json'

with open(blog_json_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

post_ids = [
    'what-is-dofollo',
    'find-internal-links-any-page',
    'internal-linking-best-practices',
    'internal-link-analysis-for-landing-pages',
    'how-readability-affects-seo'
]

def clean_html(html):
    # Remove head, style, html, body tags but keep their content if it's main/div
    # Actually, we want to extract everything inside <body> if it exists, or just remove the Boilerplate.
    
    # 1. Remove <!DOCTYPE html>
    html = re.sub(r'<!DOCTYPE html>', '', html, flags=re.IGNORECASE)
    
    # 2. Extract content between <body> tags across multiple instances
    # The post might have multiple embedded html blocks
    
    def replace_body(match):
        return match.group(1)

    # Simple approach: remove the tags but keep content
    html = re.sub(r'</?(html|head|body|meta|title)( [^>]*)?>', '', html, flags=re.IGNORECASE)
    
    # Remove style blocks entirely (we moved them to index.css)
    html = re.sub(r'<style>.*?</style>', '', html, flags=re.DOTALL | re.IGNORECASE)
    
    return html.strip()

for i, post_id in enumerate(post_ids):
    filename = f'd:\\Joy\\Dofollo_test\\post{i+1}.html'
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
            cleaned_content = clean_html(content)
            # Find post in data
            for post in data['posts']:
                if post['id'] == post_id:
                    post['content'] = cleaned_content
                    print(f"Updated and cleaned content for {post_id}")
                    break

with open(blog_json_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4, ensure_ascii=False)
    print("Successfully updated and cleaned blog.json")
