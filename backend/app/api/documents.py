from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.models import Document

router = APIRouter()

@router.get("/", response_model=List[dict])
def get_documents(db: Session = Depends(get_db)):
    docs = db.query(Document).all()
    return docs
