import os
import sys
from generate_codes import generate_batch

def main():
    # Allow passing category suffix as argument, default to "fnd" (Foundations)
    category = "fnd"
    if len(sys.argv) > 1:
        category = sys.argv[1].strip().lower()
        if category.startswith("-"):
            print("Usage: python3 generate_custom_batch.py [category_suffix (fnd, imp, ia, la)]")
            sys.exit(1)
            
    print(f"Generating codes with category: {category}\n")
    
    # 10 codes for FSSC 22000
    generate_batch(f"fssc22000-{category}", 10)
    print("=" * 45)
    
    # 20 codes for ISO 14001
    generate_batch(f"14001-{category}", 20)
    print("=" * 45)
    
    # 20 codes for ISO 45001
    generate_batch(f"45001-{category}", 20)
    print("=" * 45)
    
    print("\nAll codes successfully generated and saved to the database!")

if __name__ == "__main__":
    main()
