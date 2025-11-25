from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_settings():
    return {"theme": "light", "notifications": True}

@router.patch("/")
def update_settings(settings: dict):
    return settings
