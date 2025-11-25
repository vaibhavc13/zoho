from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.services.notion import notion_service

router = APIRouter()

@router.get("/{query}")
async def search(query: str):
    # In a real app, get the user's token from the current session/user
    # return await notion_service.search(user_token, query)
    return {"results": []}
