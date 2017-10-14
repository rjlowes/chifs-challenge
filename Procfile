release: python server/manage.py migrate
web: gunicorn --pythonpath server config.wsgi --log-file -