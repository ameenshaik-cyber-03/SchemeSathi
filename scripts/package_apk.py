#!/usr/bin/env python3
"""
SchemeSathi APK Verification and Distribution Script
Copies compiled Android APK to public/downloads and updates integrity metadata.
"""

import os
import shutil
import hashlib
import subprocess
from datetime import datetime

def package_apk():
    os.makedirs("public/downloads", exist_ok=True)
    os.makedirs("dist/downloads", exist_ok=True)
    
    gradle_apk = os.path.join("android", "app", "build", "outputs", "apk", "debug", "app-debug.apk")
    target_apk = os.path.join("public", "downloads", "SchemeSathi-v1.0.0.apk")
    dist_apk = os.path.join("dist", "downloads", "SchemeSathi-v1.0.0.apk")

    if not os.path.exists(gradle_apk):
        print(f"Compiling APK with Gradle...")
        gradlew = os.path.join("android", "gradlew.bat" if os.name == "nt" else "gradlew")
        if os.path.exists(gradlew):
            subprocess.run([gradlew, "assembleDebug"], cwd="android", check=True)

    if os.path.exists(gradle_apk):
        shutil.copyfile(gradle_apk, target_apk)
        shutil.copyfile(gradle_apk, dist_apk)
        print(f"Copied compiled APK ({os.path.getsize(target_apk)} bytes) to {target_apk}")
    else:
        print(f"Error: {gradle_apk} not found. Please run Gradle build first.")
        return

    # Calculate SHA-256
    sha256 = hashlib.sha256()
    with open(target_apk, "rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            sha256.update(chunk)
    file_hash = sha256.hexdigest().upper()
    file_size = os.path.getsize(target_apk)
    size_mb = f"{file_size / (1024 * 1024):.2f} MB"

    print("APK generation complete:")
    print(f"  Target: {target_apk}")
    print(f"  Size: {size_mb} ({file_size} bytes)")
    print(f"  SHA-256: {file_hash}")

if __name__ == "__main__":
    package_apk()
