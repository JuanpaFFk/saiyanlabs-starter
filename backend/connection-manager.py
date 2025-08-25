import os
from fastapi import FastAPI, Request, WebSocket, WebSocketDisconnect, BackgroundTasks, Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from dotenv import load_dotenv
import smtplib
from email.message import EmailMessage
import httpx

load_dotenv()

app = FastAPI()
templates = Jinja2Templates(directory="app/templates")


ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")
EMAIL_HOST = os.getenv("EMAIL_HOST")
EMAIL_PORT = int(os.getenv("EMAIL_PORT", 587))
EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")
AI_API_URL = os.getenv("AI_API_URL")
AI_API_KEY = os.getenv("AI_API_KEY")

class ConnectionManager:
    def __init__(self):
        self.active_connections: set[WebSocket] = set()
    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.add(websocket)
    def disconnect(self, websocket: WebSocket):
        self.active_connections.discard(websocket)

manager = ConnectionManager()

@app.get('/', response_class=HTMLResponse)
async def index(request: Request):
    return templates.TemplateResponse('index.html', {'request': request})

@app.post('/api/contact')
async def contact(background_tasks: BackgroundTasks,
                  name: str = Form(...),
                  email: str = Form(...),
                  service: str = Form(None),
                  message: str = Form(...)):
    def send_mail_sync(name, email, service, message):
        try:
            msg = EmailMessage()
            msg['Subject'] = f'Contacto web: {name}'
            msg['From'] = EMAIL_USER
            msg['To'] = ADMIN_EMAIL
            msg.set_content(f'Nombre: {name}\nEmail: {email}\nServicio: {service}\n\nMensaje:\n{message}')
            with smtplib.SMTP(EMAIL_HOST, EMAIL_PORT, timeout=20) as s:
                s.starttls()
                s.login(EMAIL_USER, EMAIL_PASS)
                s.send_message(msg)
        except Exception as e:
            print('Error enviando mail:', e)
    background_tasks.add_task(send_mail_sync, name, email, service, message)
    return {'ok': True, 'message': 'Mensaje encolado'}

@app.websocket('/ws/chat')
async def websocket_chat(ws: WebSocket):
    await manager.connect(ws)
    try:
        while True:
            data = await ws.receive_json()
            user_text = data.get('text', '')
            print('User:', user_text)
            # placeholder response - replace with real AI call
            await ws.send_json({'sender': 'bot', 'text': f'Respuesta demo: recibi "{user_text}"'})
    except WebSocketDisconnect:
        manager.disconnect(ws)
    except Exception as e:
        print('WS error:', e)
        try:
            await ws.send_json({'sender': 'bot', 'text': 'Error interno en el chat.'})
        except:
            pass
