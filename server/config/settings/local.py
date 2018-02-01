# -*- coding: utf-8 -*-
"""
Local settings
- Run in Debug mode
{% if cookiecutter.use_mailhog == 'y' and cookiecutter.use_docker == 'y' %}
- Use mailhog for emails
{% else %}
- Use console backend for emails
{% endif %}
- Add Django Debug Toolbar
- Add django-extensions as app
"""

from .common import *


# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('DJANGO_SECRET_KEY', default='CHANGEME!!!')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True


# django-debug-toolbar
# ------------------------------------------------------------------------------
# MIDDLEWARE += ('debug_toolbar.middleware.DebugToolbarMiddleware',)
# INSTALLED_APPS += ('debug_toolbar', )


# Override db for now.
# PROJECT_DIR = os.path.abspath(os.path.dirname(__file__))
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': os.path.join(PROJECT_DIR, 'active.db'),
#     }
# }
