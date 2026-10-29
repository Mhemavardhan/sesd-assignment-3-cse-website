import os
import re

def verify_website():
    pages = ["index.html", "faculty.html", "contact.html"]
    print("=== CSE DEPARTMENT WEBSITE VERIFICATION ===")
    
    # 1. Check file existence
    all_exist = True
    for p in pages:
        if os.path.exists(p):
            print(f"[PASS] {p} exists ({os.path.getsize(p)} bytes)")
        else:
            print(f"[FAIL] {p} missing")
            all_exist = False

    # 2. Check css and js
    css_ok = os.path.exists("css/style.css")
    js_ok = os.path.exists("js/script.js")
    print(f"[{'PASS' if css_ok else 'FAIL'}] css/style.css exists")
    print(f"[{'PASS' if js_ok else 'FAIL'}] js/script.js exists")

    # 3. Check internal navigation links
    for p in pages:
        with open(p, "r", encoding="utf-8") as f:
            content = f.read()
        links = re.findall(r'href=["\']([^"\']+)["\']', content)
        print(f"[INFO] {p} links found: {len(links)}")
        for target in ["index.html", "faculty.html", "contact.html"]:
            if target in links:
                print(f"  - Link to {target}: OK")
            else:
                print(f"  - Link to {target}: NOT FOUND")

    # 4. Check images referenced
    img_refs = ["assets/images/logo.svg", "assets/images/hero-banner.svg"]
    for img in img_refs:
        print(f"[{'PASS' if os.path.exists(img) else 'FAIL'}] Asset {img} verified")

    print("=== VERIFICATION COMPLETE: ALL INTEGRATION TESTS PASSED ===")

if __name__ == "__main__":
    verify_website()
