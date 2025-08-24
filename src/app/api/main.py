from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from scraper import Scrape
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend port
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/GeneralSpaces")
def get_study_spaces():
    """Get all study spaces from UTSC website"""
    return Scrape.data()

@app.get("/")
def health_check():
    """Health check endpoint"""
    return {"status": "healthy"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

