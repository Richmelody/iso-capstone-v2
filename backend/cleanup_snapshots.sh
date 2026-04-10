#!/bin/bash

# Define the absolute path to your data directory on CloudPanel
# e.g., /home/site-user/htdocs/api.yourdomain.com/data/
BASE_DIR="$(dirname "$0")/data"
TARGET_DIR="$BASE_DIR/snapshots"
DB_PATH="$BASE_DIR/proctor_logs.db"

# 1. Clean up physical image files (Older than 24 hours)
if [ -d "$TARGET_DIR" ]; then
    # Find and delete all .png files older than 1 day (+1)
    find "$TARGET_DIR" -type f -name "*.png" -mtime +1 -exec rm {} \;
    echo "[$(date)] Cleanup successful: snapshots older than 24 hours removed."
else
    echo "[$(date)] Warning: Snapshot directory not found at $TARGET_DIR"
fi

# 2. Clean up database privacy records (Older than 7 days)
if [ -f "$DB_PATH" ]; then
    # Execute SQLite command to purge old rows
    sqlite3 "$DB_PATH" "DELETE FROM cheating_logs WHERE timestamp < datetime('now', '-7 days');"
    echo "[$(date)] Cleanup successful: Database cheating_logs older than 7 days removed."
else
    echo "[$(date)] Warning: Database not found at $DB_PATH"
fi
