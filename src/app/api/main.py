from fastapi import FastAPI
from scraper import Scrape
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # allow your frontend
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/GeneralSpaces")
def get_study_spaces():
    return Scrape.data()

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

