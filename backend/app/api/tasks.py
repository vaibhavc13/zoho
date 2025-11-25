from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.models import Task

router = APIRouter()

@router.get("/", response_model=List[dict]) # Use Pydantic model in real app
def get_tasks(db: Session = Depends(get_db)):
    tasks = db.query(Task).all()
    return tasks

@router.post("/")
def create_task(title: str, db: Session = Depends(get_db)):
    # Logic to create task in Notion and then sync to DB
    return {"message": "Task creation not implemented yet"}
