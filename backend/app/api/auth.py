from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.services.notion import notion_service
from app.models import User

router = APIRouter()

@router.get("/notion/start")
def start_notion_auth():
    return {
        "url": f"https://api.notion.com/v1/oauth/authorize?client_id={notion_service.client_id}&response_type=code&owner=user&redirect_uri={notion_service.redirect_uri}"
    }

@router.get("/notion/callback")
async def notion_callback(code: str, db: Session = Depends(get_db)):
    token_data = await notion_service.get_access_token(code)
    # Save token and user info to DB
    # This is a simplified example
    return {"message": "Successfully connected to Notion", "data": token_data}
