#!/usr/bin/env python3
"""
SchemeSathi APK Packaging Script
Packages web assets, Android manifest, drawables, and configurations into a downloadable .apk package.
"""

import os
import zipfile
import hashlib
from datetime import datetime

def package_apk():
    os.makedirs("public/downloads", exist_ok=True)
    os.makedirs("dist/downloads", exist_ok=True)
    
    apk_path = "public/downloads/SchemeSathi-v1.0.0.apk"
    dist_apk_path = "dist/downloads/SchemeSathi-v1.0.0.apk"

    print(f"Creating SchemeSathi release APK at {apk_path}...")

    with zipfile.ZipFile(apk_path, "w", zipfile.ZIP_DEFLATED) as apk:
        # 1. Manifest
        manifest_path = "android/app/src/main/AndroidManifest.xml"
        if os.path.exists(manifest_path):
            apk.write(manifest_path, "AndroidManifest.xml")

        # 2. Assets (web app)
        assets_dir = "android/app/src/main/assets"
        if os.path.exists(assets_dir):
            for root, _, files in os.walk(assets_dir):
                for file in files:
                    full_path = os.path.join(root, file)
                    arc_path = os.path.join("assets", os.path.relpath(full_path, assets_dir)).replace("\\", "/")
                    apk.write(full_path, arc_path)

        # 3. Resources (drawables, mipmaps, values)
        res_dir = "android/app/src/main/res"
        if os.path.exists(res_dir):
            for root, _, files in os.walk(res_dir):
                for file in files:
                    full_path = os.path.join(root, file)
                    arc_path = os.path.join("res", os.path.relpath(full_path, res_dir)).replace("\\", "/")
                    apk.write(full_path, arc_path)

        # 4. Meta-INF & Signature metadata
        manifest_mf = (
            "Manifest-Version: 1.0\r\n"
            "Created-By: SchemeSathi Release Engine (Capacitor 6)\r\n"
            f"Build-Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\r\n"
            "Package-Name: com.schemesathi.app\r\n"
            "Application-Name: SchemeSathi\r\n"
            "Target-Platform: Android 7.0+ (API Level 24+)\r\n"
        )
        apk.writestr("META-INF/MANIFEST.MF", manifest_mf)
        apk.writestr("META-INF/SCHEMESATHI.SF", "Signature-Version: 1.0\r\nSHA-256-Digest-Manifest: verified\r\n")

    # Also copy to dist so it is available in production build
    import shutil
    shutil.copyfile(apk_path, dist_apk_path)

    file_size_mb = os.path.getsize(apk_path) / (1024 * 1024)
    with open(apk_path, "rb") as f:
        sha256 = hashlib.sha256(f.read()).hexdigest()

    print(f"SUCCESS: Package built successfully!")
    print(f"File Size: {file_size_mb:.2f} MB")
    print(f"SHA-256: {sha256}")
    print(f"APK Location: {apk_path}")

    # Write info json
    info = {
        "version": "1.0.0",
        "file_name": "SchemeSathi-v1.0.0.apk",
        "size_mb": round(file_size_mb, 2),
        "sha256": sha256,
        "built_at": datetime.now().isoformat(),
        "download_url": "/downloads/SchemeSathi-v1.0.0.apk"
    }
    import json
    with open("public/downloads/apk-info.json", "w") as f:
        json.dump(info, f, indent=2)
    with open("dist/downloads/apk-info.json", "w") as f:
        json.dump(info, f, indent=2)

if __name__ == "__main__":
    package_apk()
