from fastapi import FastAPI
from fastapi.testclient import TestClient

app = FastAPI()

@app.get("/snapshots/{filename}")
@app.get("/evidence/{file_id}")
def get_snapshot(file_id: str = None, token: str = None, filename: str = None):
    return {"file_id": file_id, "filename": filename}

client = TestClient(app)
print(client.get("/evidence/123").json())
