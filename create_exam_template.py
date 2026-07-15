import os
import json

def main():
    print("=============================================")
    print("    ISO CAPSTONE - EXAM TEMPLATE GENERATOR   ")
    print("=============================================\n")
    
    print("This script will generate a perfectly formatted exam data file.")
    print("Press Enter to use the default values where applicable.\n")

    # 1. Get Exam Title
    title = input("Enter Exam Title (e.g., 'ISO 14001:2015 Lead Auditor'): ").strip()
    if not title:
        title = "Untitled Exam"

    # 2. Get Layout Size
    layout_size_str = input("Enter Layout Size (Number of questions to present to user) [Default: 20]: ").strip()
    layout_size = int(layout_size_str) if layout_size_str.isdigit() else 20

    # 3. Get Time Limit
    time_limit_str = input("Enter Time Limit in minutes [Default: 20]: ").strip()
    time_limit = int(time_limit_str) if time_limit_str.isdigit() else 20
    
    # 4. Get File Name
    filename = input("Enter the filename to save as (e.g., 'lead_auditor.js'): ").strip()
    if not filename.endswith('.js'):
        filename += '.js'

    # Generate the Javascript object
    content = f"""export default {{
  "title": "{title}",
  
  // System Configuration
  "layout_size": {layout_size},
  "time_limit": {time_limit},
  
  // Paste your questions inside this array
  "questions": [
    {{
      "category": "Example Category",
      "section": "Example Section",
      "text": "Example Question?",
      "options": [
        {{ "text": "Correct Answer", "correct": true }},
        {{ "text": "Wrong Answer 1", "correct": false }},
        {{ "text": "Wrong Answer 2", "correct": false }},
        {{ "text": "Wrong Answer 3", "correct": false }}
      ],
      "rationale": "Explanation for the correct answer.",
      "lms_direction": "Study reference for this concept."
    }}
  ],
  
  // Category-specific feedback for failed exams
  "remediationData": {{
    "Example Category": "Review the example section of the standard to improve your score here."
  }}
}}
"""

    filepath = os.path.join(os.getcwd(), filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print("\n=============================================")
    print(f"SUCCESS! Template saved to: {filepath}")
    print("=============================================")
    print("You can now hand this file to your content creators to fill in the questions array.")

if __name__ == "__main__":
    main()
