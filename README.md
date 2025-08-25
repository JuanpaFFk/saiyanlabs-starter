# Saiyanlabs - Starter (FastAPI)

Proyecto inicial para la landing de Saiyanlabs (FastAPI backend + plantilla).
Usa esto como base local

## Estructura
```
sai.../ 
├─ .github/workflows/python-app.yml
├─ .env.example
├─ .gitignore
├─ Dockerfile
├─ docker-compose.yml
├─ README.md
├─ requirements.txt
└─ app/
   ├─ main.py
   ├─ templates/
   │  └─ index.html
   └─ static/
      └─ (vacío - coloca CSS/JS/imagenes aquí)
```

## Requisitos
- Python 3.10+
- git
- (Opcional) Docker

## Quickstart local (venv)
```bash
python -m venv venv
source venv/bin/activate     # macOS / Linux
venv\Scripts\activate      # Windows (PowerShell)
pip install -r requirements.txt
uvicorn app.main:app --reload
# abrir http://127.0.0.1:8000
```

## Inicializar repo en Git y subir a GitHub
```bash
git init
git add .
git commit -m "Initial commit - starter FastAPI"
# crea el repo en GitHub (opcional con GH CLI)
gh repo create sai... --public --source=. --push
# o crea el repo en web y luego:
git remote add origin git@github.com:<tu-usuario>/<repo>.git
git branch -M main
git push -u origin main
```

## VS Code
- Abre la carpeta en VS Code.
- Instala extensiones: *Python*, *Pylance*, *Prettier* (opcional), *Docker* (si usas).
- Usa el terminal integrado para correr los comandos anteriores.

## Variables de entorno
Copia `.env.example` a `.env` y actualiza valores (no subir `.env` al repo).

# saiyanlabs-starter
"Starter FastAPI para landing Saiyanlabs".
