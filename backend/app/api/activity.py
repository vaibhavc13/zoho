from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.models import Activity

router = APIRouter()

@router.get("/", response_model=List[dict])
def get_activity(db: Session = Depends(get_db)):
    activity = db.query(Activity).all()
    return activity
