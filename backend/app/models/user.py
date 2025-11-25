from sqlalchemy import Column, String, Boolean
from sqlalchemy.dialects.postgresql import UUID
import uuid
from app.core.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    cliq_user_id = Column(String, unique=True, index=True)
    notion_access_token = Column(String)
    notion_bot_id = Column(String)
    workspace_id = Column(String)
    workspace_name = Column(String)
    workspace_icon = Column(String)
