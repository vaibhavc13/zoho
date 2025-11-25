import httpx
from app.core.config import settings
from typing import Optional, Dict, Any

class NotionService:
    BASE_URL = "https://api.notion.com/v1"
    
    def __init__(self):
        self.client_id = settings.NOTION_CLIENT_ID
        self.client_secret = settings.NOTION_CLIENT_SECRET
        self.redirect_uri = settings.NOTION_REDIRECT_URI

    async def get_access_token(self, code: str) -> Dict[str, Any]:
        auth = (self.client_id, self.client_secret)
        data = {
            "grant_type": "authorization_code",
            "code": code,
            "redirect_uri": self.redirect_uri
        }
        async with httpx.AsyncClient() as client:
            response = await client.post(f"{self.BASE_URL}/oauth/token", auth=auth, json=data)
            response.raise_for_status()
            return response.json()

    async def search(self, token: str, query: str = "") -> Dict[str, Any]:
        headers = {
            "Authorization": f"Bearer {token}",
            "Notion-Version": "2022-06-28"
        }
        data = {
            "query": query,
            "sort": {
                "direction": "descending",
                "timestamp": "last_edited_time"
            }
        }
        async with httpx.AsyncClient() as client:
            response = await client.post(f"{self.BASE_URL}/search", headers=headers, json=data)
            response.raise_for_status()
            return response.json()

    async def get_database(self, token: str, database_id: str) -> Dict[str, Any]:
        headers = {
            "Authorization": f"Bearer {token}",
            "Notion-Version": "2022-06-28"
        }
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{self.BASE_URL}/databases/{database_id}", headers=headers)
            response.raise_for_status()
            return response.json()

    async def query_database(self, token: str, database_id: str) -> Dict[str, Any]:
        headers = {
            "Authorization": f"Bearer {token}",
            "Notion-Version": "2022-06-28"
        }
        async with httpx.AsyncClient() as client:
            response = await client.post(f"{self.BASE_URL}/databases/{database_id}/query", headers=headers)
            response.raise_for_status()
            return response.json()

notion_service = NotionService()
