from fastapi import APIRouter
from app.api import auth, tasks, documents, search, settings, activity

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(tasks.router, prefix="/tasks", tags=["tasks"])
api_router.include_router(documents.router, prefix="/docs", tags=["documents"])
api_router.include_router(search.router, prefix="/search", tags=["search"])
api_router.include_router(activity.router, prefix="/activity", tags=["activity"])
api_router.include_router(settings.router, prefix="/settings", tags=["settings"])
