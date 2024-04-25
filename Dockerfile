FROM python:3.7-alpine
WORKDIR /app
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
COPY . .
CMD ["python3", "manage.py", "runserver", "localhost:8001" ]